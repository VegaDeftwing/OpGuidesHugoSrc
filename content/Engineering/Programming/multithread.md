# Chapter 17 - We've got cores, let's use em'

{{< columns >}}

![Skateboarding Vega](/nonfree/character/skate.avif)

<--->

Hey kid, Wanna go *fast*?

{{< /columns >}}

Okay, so here's the deal. Computers are generally really fast at crunching numbers. So fast, that the vast majority of the time the complexity introduced by trying to use multiple cores/threads isn't worth it … as long as all you're doing is crunching numbers.

The problem is you probably, yunno', want to do something with the output.

The slowest thing to do is wait on input or output. If you time how long it takes for a program written in even something "fast" like C to run you'll quickly realize it's basically instant right up until the point that you try to print something to the terminal. That "Hello World" will be limited by how fast the terminal can take those characters in.

The same applies to pretty much all other operations on the computer. It's very likely your limited by I/O blocking you from advancing.

The solution? Don't wait. Issue the job and come back later.

## Using Threads To Wait On I/O





[TDOO] Motivations from Moore's law, Blocking I/O, 

[TODO] start with process forking via syscall - show it 

https://lemire.me/blog/2020/01/30/cost-of-a-thread-in-c-under-linux/

C++ coroutines

not really threading, but process children

SIMD, https://nullprogram.com/blog/2021/12/04/

## Do You Actually Need Speed?

Before we go any further, it's important to note that, depending on what you're working on, you probably don't need this to optimize like we'll be talking about. There's a pretty high overhead to doing so. 

* It makes debugging harder
* It's harder to debug
* It's harder to make cross-platform
* It makes compatibility even on the same base architecture worse
* It's a lot of time and effort that *might* be better spent doing something else

I, personally, have only had a few times where the tradeoff made it make sense to go to this effort. Still, everything we're about to look at is stuff you should have in your toolbelt, just don't think you always need to use it.

## SIMD

As long as you're not on a weak, embedded system CPU (and even on some of them, actually) your processor probably support some kind of **S**ingle **I**nstruction **M**ultiple **D**ata processing.

This, as the name implies, let's us pack data to be processed by one instruction. As a lame example, let's look at a function which just sums some numbers. Here's the most basic assembly:

```assembly
sum(int*, int):                              # @sum(int*, int)
        test    esi, esi
        jle     .LBB0_1
        mov     ecx, esi
        xor     edx, edx
        xor     eax, eax
.LBB0_4:                                # =>This Inner Loop Header: Depth=1
        add     eax, dword ptr [rdi + 4*rdx]
        inc     rdx
        cmp     rcx, rdx
        jne     .LBB0_4
        ret
.LBB0_1:
        xor     eax, eax
        ret
```

Even if reading x86_64 assembly is hard stare at it for a bit. The basic of it is we call `add` on line 8, increment `rdx`, check if it's exceeded the size of our array (`rcx`) and, if it hasn't, add the next value. Repeat. This is fine, but can we do better? YES! 

You could do this:

```assembly
sum(int*, int):                              # @sum(int*, int)
        test    esi, esi
        jle     .LBB0_1
        mov     ecx, esi
        cmp     esi, 32
        jae     .LBB0_4
        xor     edx, edx
        xor     eax, eax
        jmp     .LBB0_7
.LBB0_1:
        xor     eax, eax
        ret
.LBB0_4:
        mov     edx, ecx
        and     edx, 2147483616
        mov     eax, ecx
        shr     eax, 5
        and     eax, 67108863
        shl     rax, 7
        vpxor   xmm0, xmm0, xmm0
        xor     esi, esi
        vpxor   xmm1, xmm1, xmm1
        vpxor   xmm2, xmm2, xmm2
        vpxor   xmm3, xmm3, xmm3
.LBB0_5:                                # =>This Inner Loop Header: Depth=1
        vpaddd  ymm0, ymm0, ymmword ptr [rdi + rsi]
        vpaddd  ymm1, ymm1, ymmword ptr [rdi + rsi + 32]
        vpaddd  ymm2, ymm2, ymmword ptr [rdi + rsi + 64]
        vpaddd  ymm3, ymm3, ymmword ptr [rdi + rsi + 96]
        sub     rsi, -128
        cmp     rax, rsi
        jne     .LBB0_5
        vpaddd  ymm0, ymm1, ymm0
        vpaddd  ymm1, ymm3, ymm2
        vpaddd  ymm0, ymm1, ymm0
        vextracti128    xmm1, ymm0, 1
        vpaddd  xmm0, xmm0, xmm1
        vpshufd xmm1, xmm0, 238                 # xmm1 = xmm0[2,3,2,3]
        vpaddd  xmm0, xmm0, xmm1
        vpsrlq  xmm1, xmm0, 32
        vpaddd  xmm0, xmm0, xmm1
        vmovd   eax, xmm0
        cmp     rdx, rcx
        je      .LBB0_8
.LBB0_7:                                # =>This Inner Loop Header: Depth=1
        add     eax, dword ptr [rdi + 4*rdx]
        inc     rdx
        cmp     rcx, rdx
        jne     .LBB0_7
.LBB0_8:
        vzeroupper
        ret
```

{{< speech triode big >}}

But, that's more assembly, so more instructions! Shouldn't that be slower?

{{< /speech >}}

No. Remember lines of assembly ≠ executed lines. If you have one loop of 10 lines that runs 100 times, that's 1000 instructions. If you have one loop of 100 lines that runs 5 times times that's only 500, so it's still faster.

ANYWAY, I want to ignore a good 95% of this assembly as - and I can't stress this enough - you really shouldn't be writing stuff like this anyway unless you have a damn good reason. Assembly is hard to write and error prone. I mostly want to point out what's happening under the hood at a high level and I think, even if you can't read everything above in full, you'll see the general idea.

Basically, what's happening is this

```c
while(i < size){
    big_reg[0] = arr[i + 0];
    big_reg[1] = arr[i + 1];
    big_reg[2] = arr[i + 2];
    big_reg[3] = arr[i + 3];
    i += 4;
    sum += magically_add_everything_in_big_reg_in_one_instruction(big_reg)
}
```

With some extra logic to handle if the array isn't a multiple of 4 in size.

That is, the CPU has these special registers which we can load data into and then tell it to operate on them with a special instruction that does everything all in one go. Sure, we still have to call the setup to load the values in, but we we're going to have to load them value-by-value anyway. Now we can save a bunch of work by doing all those `add`s in one call to `super_add`. This works because we have some special registers which can - even though we're on a 64 bit computer - work on more than 64-bits at a time. We just have to pack em' up, do our thing, and take em' out - or, ideally, keep the value in those packed registers until we *have to* covert back, since there is some overhead to the packing/unpacking.

Okay, so, we just looked at a lot of assembly, and I just told you you really, really shouldn't write assembly - so, what good does any of this do?

Well, first, to do this at the most basic level, you actually don't need to change any of your code. You just need to tell the compiler that your platform is capable of doing that, but, that's actually the first big snag here:

We're looking at **assembly**. You'll recall, assembly is architecture specific. So, there's `x86_64`, which most user-facing computers today use, `arm` which is used by most smartphones, and many many others you'll see occasionally.

But, that's only half the story. `x86_64` and `arm` both have a ton of optional extensions. Most modern systems should support the extensions to use these special instructions to do SIMD processing, but it does vary from processor to processor. If you're making a program you intend to distribute as a binary and want it to still work even if somebody is on an older system, you have to have a system for falling back on the simpler method. This, unfortunately, means needing to dynamically (at runtime) figure out which execution path to take. This is a small bit of overhead. The alternative would be shipping the software with assumed support for the extensions or multiple versions depending on the processor, but that means either expecting users to know which version to grab or not letting some people use the software at all.

Basically, this means you have to first decide who your software is for and how it will be distributed:

If you want distribute source, then most of this becomes a non issue, we'll just use compiler hints and lets the user compile it.

If you want to distribute binaries, then it depends on your users and the software's requirements. 

* If they're technical, you might be able to get away with shipping multiple binaries.
* If you think your software will run poorly without the optimizations, you might just say "You must have a processor newer than 20xx or this software will not run check this [link here] list for compatibility". 
* If you think they're not technical, you don't think it's required, and you want to maintain compatibility in one binary, your best bet is to make it distinctly NOT your problem and to throw an open source library at it. The library you use - if using one at all makes sense - will depend on the language and what you're doing. It's likely that the part of your code you need to make fast is a known problem with a good, optimized to hell, library you can drop in for it.



[TODO] Compiler options, using intinsics, pragmas, etc.



