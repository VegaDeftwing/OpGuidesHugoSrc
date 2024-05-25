# 1 - The CPU

<script>
    document.getElementById("hardwareMenu").open = true;
</script>
<img class="center" src="/eng/cpus.webp" alt="CPUS">

{{< smalltext >}}Note, there's more the a CPU on some of these boards. On the big one, only the square thing in the middle is the CPU, on the pi-0 (the board with the HDMI and USB Ports) the CPU is under the metal heatsink - and in truth the CPU is actually an SOC (System On a Chip) - more on that in a bit. Finally, on the blue board, the CPU is only the black chip in the middle, though in this case it is again the definition is blurred, as in truth this is a *microcontroller*. This will all make sense shortly!{{< /smalltext >}}

These are **CPU**s or **C**entral **P**rocessing **U**nits. They're the beating heart of your computer, doing the number crunching. The white, rectangular one is of one of the first CPUs in the lineage leading up to CPUs like the ones used in desktop's today, with further successors shown in order from top left to the bottom right. The metal-capped one at the bottom right, while a tad old, is visually quite representative of a modern desktop CPU, though the CPUs in a laptop or smart phone do look quite different still.

---

One of the nifty things we do pretty easily in linux is get information about our hardware directly. Just as when we were installing Arch and we used `lsblk` to see an overview of the disks on the system, we can use some other tools to find out some other information about the system. Let's start off basic and see what CPU you have. Go ahead and run

```bash
╭─vega@lyrae ~
╰─➤  cat /proc/cpuinfo
```

This is actually just using that same `cat` command we used before. This time we're using it to read the system generated file that tells us about the processor in this system. I'm going to provide the output from my system for reference:

```bash
processor       : 0
vendor_id       : AuthenticAMD
cpu family      : 23
model           : 1
model name      : AMD Ryzen 7 1700 Eight-Core Processor
stepping        : 1
microcode       : 0x8001137
cpu MHz         : 2018.119
cache size      : 512 KB
physical id     : 0
siblings        : 16
core id         : 0
cpu cores       : 8
apicid          : 0
initial apicid  : 0
fpu             : yes
fpu_exception   : yes
cpuid level     : 13
wp              : yes
flags           : fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid aperfmperf pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw skinit wdt tce topoext perfctr_core perfctr_nb bpext perfctr_llc mwaitx cpb hw_pstate sme ssbd sev ibpb vmmcall fsgsbase bmi1 avx2 smep bmi2 rdseed adx smap clflushopt sha_ni xsaveopt xsavec xgetbv1 xsaves clzero irperf xsaveerptr arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif overflow_recov succor smca
bugs            : sysret_ss_attrs null_seg spectre_v1 spectre_v2 spec_store_bypass
bogomips        : 7688.44
TLB size        : 2560 4K pages
clflush size    : 64
cache_alignment : 64
address sizes   : 43 bits physical, 48 bits virtual
power management: ts ttp tm hwpstate eff_freq_ro [13] [14]
```

Alright, that's a whole lot of information, let's break it down.

First of all, almost all modern Central Processing Units (CPUs) have multiple cores, and as with most things in computers the're counted from 0, so on a 4 core computer you'll have cores 0, 1, 2, and 3. Multiple cores simply let your computer do things in parallel, running multiple programs or tasks at the same time

Next is the vendor ID, family, model, name, and stepping. My processor is an AMD Ryzen 7 1700. There's a pretty good chance your CPU will be made by Intel, and as such the family, model, name, and what not will reflect that. AMD and Intel are practically the only two laptop and desktop CPU providers<footnote>With the exception of Apple's newer hardware, which runs <a href="https://en.wikipedia.org/wiki/Apple_silicon">their own silicon</a>, and some low end devices like chromebooks which may run processors like you'd find in phones.</footnote>, though in the future we'll work with boards that use CPU's made by other manufactures. Really, most of this doesn't matter. Some CPUs are nicer than others, and if you follow the market or care it's easy to get a sense of a CPU's speed just based on it's name, but let's move on for now.


```bash
microcode       : 0x8001137
cpu MHz         : 2018.119
cache size      : 512 KB
```

Each of these things is very important, but I'm going to start with cpu MHz as it's probably the easiest to understand, however, to understand this we'll need to get even a bit lower level than this and learn about the electronic component that changed humanity: the transistor.

## Clock Speed

<img class="center" src="/eng/transistor.jpg" alt="Transistors" height="400em" style="border-radius:50px;">

However, to get to transistors we've gotta go just a bit further down the rabbit hole to *the relay*. Relays are super simple to understand, they're just a metal switch that is pulled open or closed using another input signal (usually a magnet pulling/pushing the switch closed/open) basically imagine a light switch, where the switch itself is controlled by yet another electrical signal. Relays are slow though, they require a physical metal plate to move to change the connection. Because of this they have limited reliability and worth note they're actually loud. You can hear an audible click of the switch as they change state.

{{< speech >}}

If this is already interesting to you, here's a [video](https://www.youtube.com/watch?v=k1hJoalcK68) demonstrating a relay computer you can actually buy!

{{< /speech >}}

Enter the vacuum tube. Though rarely used today outside of high end audio and old radios, for a period of time the logic inside a computer used these tubes. Essentially theres three important parts of the tube, the Cathode, Plate and Grid. Put very simply the Cathode emits electrons and the Plate collects them. Where it gets interesting is the grid in between. By applying a voltage to the grid a signal can be controlled giving us the same ability to turn something on or off by a third wire as in the relay.

{{< speech right>}}

Worth note but irreverent for digital electronics: tubes and transistors can actually pass a scalar of the input back out. This actually means that both tubes and transistors can act as an amplifier, using a small input range to control a much larger signal. This is actually one of the few places where tubes are still used- in high end audio amplifiers and guitar amps

{{< /speech >}}

Though the real break though here was the fact that this was *no longer a mechanical system*. With relays there was a very slow limit on the rate at which they could respond reliably, but with tubes this increased exponentially. Tubes were still expensive, large, and power hungry though. However, with their invention early computers saw a massive boost in speed with a decrease in cost.

Finally, enter the **transistor**. The physics here isn't that far removed from the vacuum tube, only now instead of a vacuum the electrons are moving though a semiconductor - typically silicon. Again this brought a massive shrink in physical size and increase in that rate at which it could respond. Pictured above are two discrete transistors, however, this is where things get mind blowing:

The Ryzen 1700 CPU in the computer I'm typing this on has 4,800,000,000 transistors in a package that is only 213 mm², and finally, we can refrence the number output by `cat /proc/cpuinfo`

At the moment I got that output the transistors where being turned on and off at a rate of 2018Mhz*. or 2Ghz. That's 2000000000 times per second.

{{< smalltext >}}\* Obviously, not all the transistors are changing state off→on and on→off on every clock edge. As for the power usage, most digital electronics have two sources of power usage: static and dynamic. Dynmaic power being that used every time a transistor changes state, and static power being power that is lost due to junction leakage (more on this much later) if there's any power applied at all. In short, this means a given CPU will use more power the faster it runs, but there's a floor to how little power it can use if power is applied at all. {{< /smalltext >}}

However, this system can run up to roughly 3.8Ghz. The faster this speed the faster your computer; however, your CPU will also use more power and run hotter. It's for this reason that most systems adjust the speed based on load. Doing simple things like writing this document and as seen with that output my system runs at nearly half speed which is actually the slowest it can run. Because the computer is hardly doing anything right now the majority of that switching is actually just doing nothing but using power running 'no operation instructions' the functional equivalent of just running 0+0 while it waits for something to do.

While not listed in this output, by googing the Ryzen 1700 we can also see it was made on a 14nm process. Put a bit reductively, this means each transistor is 14nm wide. For context, a human hair is about 70,000nm wide. This is relevant, because generally the smaller the process the faster a chip can run (max speed) while using less power.

But, I want to put this into perspective a bit: At the top of this document, there's a white, rectangular chip which is a very old CPU: The Intel 8088 from 1979, it's only 8-bit, runs at 16Mhz, was made on a 3μm process, and has ~29,000 transistors inside. So, each individual transistor is over 200 times larger, they switch much slower, and there's a human-understandable number of them. But why bring this up? Because I broke one open!

<img class="center" src="/eng/8088.jpg" alt="photo_2022-01-28_00-40-19" style="width: 300px; height: 220px; object-fit: cover;border-radius:10%;" />

What you're seeing here is the actual silicon, with the individual MOSFETs (transistors) causing the different reflections of the light and the gold wires going out to the pads which eventuall go out to the external pins, this isn't all that different from a modern CPU though. While pointing out what sections do what isn't hugely relevant, sufice to say different sections do different jobs. One block might be cache (talked about further down this page) while another might be the chain of transistors that do the logic to add two binary numbers together. At the end of the day, these tranistors are real, they're tiny, but they're real. This is the "magic" behing the fancy chip. These, therefore, have real, physical limitations. The electricity running through them can only be switched so fast before it becomes hard for the circuit to differentiate a 1 from 0, on from off.

{{< speech >}}

If you're particularly interested in this on-from-off test, look into [Eye Diagrams](https://en.wikipedia.org/wiki/Eye_pattern)

{{< /speech >}}

Back to power and speed in a modern system: The OS itself actually tells the processor what speed it should be running at. In Windows, when you change your power plan to 'high performance' one of the major things it does is not allow the processor to run at a slower speed, and in Linux you can similarly control this using some cpu speed commands. We'll get to that later though.

Finally it's worth note that on some systems, primarily high end desktops, you can actually run your processor outside of factor specifications by increasing the maximum clock rate of the processor. Doing this can lead to system stability issues and obviously leads to a higher power usage and heat output though. This process is known as 'overclocking'  as your taking the internal clock of the processor beyond it's rating. My CPU, a Ryzen 1700 at the time of writing, has actually been over clocked in order to get 3.8Ghz on all of the cores.

Finally, I want to note that clock speed is far from the single measure of performance. Two chips that both have the same clock speed and same number of cores may still perform radically differently depending on many, many things about how the processor works. Note that I didn't say each 'tick' of this clock is a single instruction? That's because different processors have different **I**nstructions **P**er **C**lock (IPC) values. It's totally possible that a **slower** clocked CPU will outperform a faster one because it is able to execute more instructions per each tick of the clock. IPC can also varry depending on the workload, as some instructions will take more clock cylces than others and different tasks will require a different mix of instructions. If in doubt, look at benchmarks that directly compare the performance of CPUs in various workloads with their real, measured execution times.

{{< smalltext >}}

As an aside, there were some hand-cranked, [mechanical computers even](https://mcyoung.xyz/2022/07/24/curta/). There were "computers" far before the advent of the relay. Hell, the term "Computer" was actually originally a job title of a person who ran equations all day by hand.

{{< /smalltext >}}

## Microcode

Modern processors are very, very complicated. So complicated in fact that there is a full very tiny computer in your processor. This computer does multiple things, but the main one we'll talk about is the translation between types of machine code. In order to understand this we'll need to look a basic program written in the language 'C'.

 {{< columns >}}

This code first makes two integers, `a` and `b`, gives them values, then adds them together and stores the result back into a. Finally, the program returns a 0 to the operating system in order to say "I ran without errors".

<--->

```c
int main() {
  int a;
  int b;
  a = 8;
  b = 16;
  a = a + b;
  return 0;
}
```

{{< /columns >}}

{{< columns >}}

Unlike python, which get's converted to something the computer can understand as it executes, C is **compiled** before hand. This makes it so programs written in C are much, much faster than those written in python, though obviously C code is more difficult to write. **Compilation** is the process of turning a program into a file full of instructions the computer actually understands. This happens in two steps, first the program is turned into assembly code, for the above code this results in the output to the right:

<--->

```c
        push    rbp
        mov     rbp, rsp
        mov     DWORD PTR [rbp-4], 8
        mov     DWORD PTR [rbp-8], 16
        mov     eax, DWORD PTR [rbp-8]
        add     DWORD PTR [rbp-4], eax
        mov     eax, 0
        pop     rbp
        ret
```

{{< attribution >}}As you can see, it is hard to determine what this does compared to just reading the C code above.{{< /attribution >}}

{{< /columns >}}

This in turn gets turned into binary as can bee seen by this screenshot generated using https://godbolt.org/

![godbolt](/eng/godbolt.png)

{{< columns >}}

| Binary (0b) | Hex (0x) | Decimal |
| ----------- | -------- | ------- |
| 0000        | 0        | 0       |
| 0001        | 1        | 1       |
| 0010        | 2        | 2       |
| 0011        | 3        | 3       |
| 0100        | 4        | 4       |
| 0101        | 5        | 5       |
| 0110        | 6        | 6       |
| 0111        | 6        | 7       |
| 1000        | 8        | 8       |
| 1001        | 9        | 9       |
| 1010        | A        | 10      |
| 1011        | B        | 11      |
| 1100        | C        | 12      |
| 1101        | D        | 13      |
| 1110        | E        | 14      |
| 1111        | F        | 15      |

<--->

See the weird numbers next to each instruction? like **4004b255**? That's a base 16 number or hexadecimal usually referred to as 'Hex'. Hex is what is used by most computer guys to represent numbers because computers operate in base 2, or binary- like 01001100, which is very difficult to read and type accurately, however, base 10, the normal numbering system your used to, makes translating between binary and decimal a bit uncomfortable as the common factor is 5, an number that is both odd and in turn not a factor of two, where as 16 is 2^4 (2\*2\*2\*2) so that means we can easily represent binary by using this conversion table here.

Okay, so now those 1's and 0's are what your computer actually reads to run instructions. We'll come back to this later, but since we're here I'll drop this [link]( https://www-user.tu-chemnitz.de/~heha/viewchm.php/hs/x86.chm/x86.htm) where you can see how these 1's and 0's are arranged to tell the computer what to do. That is super advanced for where we are now though, so let's get back on track- what the hell is micro code already?

Well, it turns out that modern processors are still compatible with some really, really old code. All the way back to the first 8086 processor made by Intel in 1978. It was here that the x86 instruction set - the instructions like 'mov' , 'push', and 'add' above that define the x86 architecture were born. Originally these were 16bit CPUs, that is each instruction only had 16 1's and 0's but soon the i386 came along and used 32bits. Back when 32 bit computers were common this is what this was in reference to.

{{< /columns >}}

As with all things technology progressed and 64bit cpu's came along. Many attempts were made to make 32bit programs run with backwards comparability at high speeds on these CPU's, though in the end AMD made the method used today, dubbed the x86_64 instruction set. Overtime this instruction set was expanded with various additions. We can actually see the names of these additions that are available on the CPU in the system by looking yet again at the output of `cat /proc/cpuinfo` and looking at the flags section. While not all of these signify instruction set additions, many do. The most common 'famous' if you will is SSE, of which there have been multiple revision, the first version alone adds <span style="font-family: Arial">𝐖</span> [70 instructions](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions), which are used to make math faster

Alright, so finally, enter Mircocode. At some point all of this became a lot to manage and processor designs evolved even further, getting exponentially more complicated and faster with more and more instructions, so they added this little computer which has the primary duty of turning the mess of countless possible instructions into yet even smaller instructions that the heavy duty 'real' processor does. Every once in a while a problem will be found in the way this is done, or a security vulnerability in the hardware itself may be found, and your CPU manufacture will release a microcode update.

That update version is what you see on that line of `cat /proc/cpuinfo`

Now, at the beginning of this guide I said I wouldn't provide useless information, and I'm sure that all looks pretty useless without more context. In general, this is interesting because you can (and will need to) write some assembly code by hand every now and then. Thankfully, its usually not x86 assembly which is very, very difficult to write but instead assembly on much smaller, micro controllers (basically really tiny computers), where that assembly is necessary because the system is so limited.

Don't worry about what x86 means here, we'll come back to that in {{< button relref="/engineering/linux/hardware/architectures">}} Chapter 3½ - Architectures {{< /button >}}

{{< smalltext >}}If you're interested, check out <span style="font-family: Arial">𝐖</span> [Microcode](https://en.wikipedia.org/wiki/Microcode) and <img src="/common/github-mark-white.svg" style="height:0.8em"> [MicrocodeDecryptor](https://github.com/chip-red-pill/MicrocodeDecryptor){{< /smalltext >}}

## Cache

Okay, next up is cache. Cache, just like in the real world, is a small place to store things. Most people like to think the majority of what a computer does is raw number crunching, doing hard math, but the truth is more often than not it's just moving data around. This follows a path from slowest and cheapest storage up to the fastest but most expensive. Typically this order looks a bit like

Hard Drive → Solid State Drive → Ram → Cache → Registers , where the price for storage on a hard drive can be under \$0.10Gb, Ram upwards of \$10Gb, and Cache and registers, which are storage baked directly onto the CPU, cost much, much, more to implement.  It's of note that these not only are faster with each jump - able to read and write data more quickly -, but also usually physically closer to the CPU. A hard drive can be 10's of feet of wire from the CPU while the RAM can be a few inches at best, and the cache and registers are physically part of the CPU. Most of the data above the HDD/SSD level is actually just smaller subsets of each previous pool. In fact, on modern CPU's there are actually usually 3 levels of cache, each with a progressively smaller size but increase in proximity to the executed instruction.

We'll come back to this idea a bit in {{< button relref="/engineering/linux/hardware/biggerpicture">}} Chapter 3.10 - The Bigger Picture {{< /button >}}.

Put simply, just as with adding more Random Access Memory (RAM) to your system, having more cache means more information can be within arm's reach of the CPU to do work on at any moment.

Let's take a look. install the `hwloc` package using yay and then run `lstopo` and you should get an output that looks a bit like this

<img src="/lstopo.png" alt="lstopo" style="border-radius:20px;">

The stuff on the right are connections around the system, you can ignore those for now, but see the various cache layers, designated by L3, L2, L1d and L1i, and you can see how each core has it's own cache. Finally, you can see that each core has two processing units? Hey, wait, what's that all about?

Hyper threading, or SMT, or whatever the new term is for it, is a way of adding paths for doing things to keep every part of the CPU active. We'll go into this more later, but for now, suffice it to say it's a way of getting just a bit more performance out of a system.

## Interrupts

While not listed in the /proc/cpuinfo output , it's still relevant to bring up CPU interrupts, which are, fittingly, listed in /proc/interupts

<img src="/eng/procint.png" alt="procint" style="border-radius:20px;">

{{< attribution >}}Output of `cat /proc/interupts` on my system{{< /attribution >}}

<img src="/eng/netdataint.webp" alt="netdataint" style="border-radius:20px;">

{{< attribution >}}Output of information for the first 3 cores on my system displayed graphically using [Netdata](https://www.netdata.cloud){{< /attribution >}}

CPU interrupts are a bit confusing because the term interrupt can refer to the action itself, the code that executes, or the general concept. In general a CPU interrupt is when something needs to poke the CPU to tell it to interrupt what it's doing. This can be when physical pin in the CPU gets a signal, a timer going off, or a program dividing by 0. We'll cover this more in depth later, but from the hardware perspective what's relevant is the CPU is generally so fast compared to other actions that the rest of the system mostly just triggers an interrupt to let the CPU know that a task the CPU asked to be done has completed. The most common example is requesting data from disk (Hard drive or SSD) takes so long, even at just a few milliseconds, that the CPU can get millions of things done while it waits for the request to be fulfilled. So rather than waste that time having the CPU poke the device asking "Are you done yet? Are you done yet?" the disk (or the controller it's hooked up to, like the chipset) issues an interrupt to the CPU to let it know a task has completed. USB works in a similar way, though the really old keyboards with the circular connector (PS2) actually did interrupt the CPU directly on each key press.

We'll come back and explore this more later, but if you're really interested you can read ahead by going over these links and reading these man pages: [Oreilly on Interupts](https://www.oreilly.com/library/view/understanding-the-linux/0596005652/ch04s06.html), [Oreilly cont.](https://www.oreilly.com/library/view/understanding-the-linux/0596005652/ch04s02.html), `man trap`,  `man syscall`, 

## Power

The CPU is one of the most power hungry parts of your computer, and as such it does some interesting things to try to keep it's power usage lower. Most notably, it'll turn down its clock speed to do less operations per second, but theres other things like entering sleep and hibernation states the processor is also capable of. The main thing you might want to concern yourself with from a performance to power consumption stand point is how aggressive this clock speed changing is. You can go as extreme as to tell the system to never let the processor get to full speed or to say 'only run at max speed all the time'. The latter is actually quite useful as often it can take quite a few clock cycles after a heavy load is started for the processor to come up to speed, but if it's always running full steam ahead this is a non issue. This entire topic is particularly relevent to laptops, and on Arch you may want to install a program to manage some of this for you or set sane defaults to save battery. I've had good luck using the `tlp` package. The [cpupower](https://wiki.archlinux.org/index.php/CPU_frequency_scaling#cpupower) package is helpful for looking at how arch handles cpu scaling and it lets you directly set these min and max frequencies or pick the scaling governor to handle how aggressive the switching is. We'll get more into tuning the system to use less power in {{< button relref="/engineering/linux/hardware/power">}} Chapter 3.7 - Power {{< /button >}}.

I very strongly recommend looking into this on any system though, as by default some CPUs will run at the minimum frequency only.

<img src="/eng/cpupower.webp" alt="sudo cpupower frequency-info" style="border-radius:20px;">

If you want to actually see how much power is used, `rapl` should do the trick, just be sure to actually put the system under load first- `stress-ng --cpu 16` (or whatever your thread count is) should work.

{{< smalltext >}} If you are also on a Ryzen system, you may need to use <img src="/common/github-mark-white.svg" style="height:0.8em"> [rapl-read-ryzen](https://github.com/djselbeck/rapl-read-ryzen) / [(aur)](https://aur.archlinux.org/packages/rapl-read-ryzen-git/) to get this output {{< /smalltext >}}

<img src="/eng/rapl.png" alt="sudo rapl" style="border-radius:20px;">

We'll talk about delivering power to the CPU in a bit, when we talk about the Voltage Regulation Module (VRM) on the Motherboard.

## Physically, what and where is this thing?

The CPU is on a square or rectangular board that is usually covered by a large heat sink used to keep it cool under load. It connects to the motherboard via hundreds of small, gold plated pins to send and receive signals (which well will discuss in depth later) from all around the system. Even though most modern CPUs are x86_64, generation to generation and cross manufacturer there are changes in the number of pins and the way they are arranged, meaning getting a new processor that's not from the same generation usually won't work. Furthermore, most laptops have soldered on processors that can not be upgraded to begin with.

## Numa Nodes? Chiplets? Die Yield?

[TODO] + CCX Groups and pinning processes to cores -

<img src="/common/github-mark-white.svg" style="height:0.8em"> https://github.com/AdelKS/LinuxGamingGuide

## Branch Prediction & Pipelining

I don't want to dive toooo deep into the weeds, but because of the Meltdown and Spectre vulnerabilities, I find it necessary to briefly talk about branch prediction.

{{< columns >}}

Basically, modern CPUs do a very good job of guessing what path of code will be executed on branches, that is code like this:

<--->

```python
if condition == True:
	doThing()
else:
	doOtherThing()
```

{{< /columns >}}

The CPU will do a good job guessing which path will actually be taken. This is done because CPUs are actually *pipelined*.

CPUs have to do a few things per each instruction, generally they need to FETCH the instruction, DECODE what that instruction is telling the CPU to do, EXECUTE that instruction, and then WRITE BACK the result of the computation. 

This could be done in order,

<img src="/eng/wopipe.svg" style="-webkit-filter: invert(1);">

but because the CPU uses different parts internally, they can be pipelined, sort of like an assembly line. While one instruction is in WRITE BACK, the next instruction is being EXECUTED, the next-next instruction is being DECODED, and the next-next-next is being FETCHED.

<img src="/eng/wpipe.svg" style="-webkit-filter: invert(1);">

Now, there's a lot more that goes into this, times where this doesn't work -like if two instructions work on the same data, have to wait for write back before that data can be executed on- but the relevant bit here is that as much as we can, we want to keep this pipe line full. That is, we want to keep each point in the assembly line busy. To do this, the above code with an `if` utilizes branch prediction, and assuming it's correct, is able to keep the pipeline full and running like normal. If it's wrong, it has to empty the pipeline, go back, and do the correct instructions instead.

The issue with this that lead to the Spectre bug was that the assumed correct path to be executed may include a security level elevation, that is, it might be code that should only be able to be executed by the administrator (root) user, but in the prediction code there's no check there, so if the prediction can be abused, code can be executed as an admin- a doomsday level vulnerability.

Meltdown is similar- you can read how it works on [Wikipedia](https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)#Mechanism) (actually human readable and explained well).

## SOC? Microcrontrollers?

In the blurb under the CPU picture I mentioned both SOCs and Microcontrollers [TODO]

## A note on x86, vendors, and CPU politics

[TODO]

[Intel took an AMD Zen microarchitecture presentation and turned it into a patent](https://twitter.com/Underfox3/status/1511697355145367564)

china trying to make their own silicon , apple to own SOC ([Called it](https://www.reddit.com/r/assholedesign/comments/gq2nfu/adobe_slaps_you_with_an_early_cancellation_fee/frsvjxi?utm_source=share&utm_medium=web2x&context=3)), etc.

https://www.agner.org/forum/viewtopic.php?f=1&t=6

[New Intel chips won't play Blu-ray disks due to SGX deprecation (Bleeping Computer)](https://www.bleepingcomputer.com/news/security/new-intel-chips-wont-play-blu-ray-disks-due-to-sgx-deprecation/)

## Other things done by the CPU:

The CPU has a lot of dedicated hardware inside for specific functions, for example many CPUs have a dedicated hardware random number generator, a "media engine" (encoders/decoders) ([Quick Sync](https://en.wikipedia.org/wiki/Intel_Quick_Sync_Video)), Encryption, DSP

## "Management Engine"



## The future

### From the past: Analog Computers

### Built-in Programmable Hardware

### Offloading Security: The TPM, Apple's T2, Microsoft's Pluton

### Yet More Acceleration

TCP offloading, DSP++, Software Defined Radio?, In-Memory Processing, Tensor Cores, etc.



## Further Reading

If you want to know about the internals of the CPU itself, check out [Chapter 29 - Let's Make our own CPU]({{< relref "/Engineering/deeper/comparch" >}}) which goes into the componets of the CPU, why they're made the way they are, and what the future of CPU architecture may look like.

{{< best >}}[Putting the "You" in CPU (Lex Mattick & Hack Club)](https://cpu.land){{< /best>}}

[Why you should use 'nproc' and not grep /proc/cpuinfo](https://www.flamingspork.com/blog/2020/11/25/why-you-should-use-nproc-and-not-grep-proc-cpuinfo/)

<img src="/common/youtube_social_icon_red.webp" style="height:0.8em">  [Spyware at The Hardware Level - Intel ME & AMD PSP (Mental Outlaw)](https://youtu.be/HNwWQ9zGT-8)

[Cascade: CPU Fuzzing via Intricate Program Generation](https://comsec.ethz.ch/research/hardware-design-security/cascade-cpu-fuzzing-via-intricate-program-generation/)