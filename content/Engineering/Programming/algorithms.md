# Chapter 14 - Discrete Math, Algorithms, Data Structures, and Not Sucking at Programming ™*

## Brute Force Algorithms

### Backtracking

---

[TODO] [Directed Acyclic Graphs](https://en.wikipedia.org/wiki/Directed_acyclic_graph) 

[TODO] [Finite State Machines](https://en.wikipedia.org/wiki/Finite-state_machine)

[TODO] e-graphs? https://egraphs-good.github.io

[TODO] http://courses.csail.mit.edu/6.851/

[TODO]  ['Tree Traversal' on Algorithm Archive](https://www.algorithm-archive.org/contents/tree_traversal/tree_traversal.html)

## Divide and Conquer

### Master Theorem

## Decrease and Conquer



## Branch and Bound



## Kernelization



## Caching







***With some complexity analysis too.**

[TODO]

https://www.mattkeeter.com/blog/2021-03-01-happen/

[TODO] I also have discrete math in the chapter 11, math... not sure what do about this...

Truth tables, binary, logical equivalencies, propositional logic,

Sets, functions, relations, recurrence, induction, combination, graphs, isomorphism,

## Benchmarking

Many computer science courses will have a basically full class on Algorithm Analysis, usually more specifically looking into BigO analysis. In a nutshell, this involves determing how much computation has to occur for a given input size. For example, if you have 10 inputs and just want to add them together, you can do that in O(n) time, because for n inputs you only need to do `n` computations (well, actually n-1 here, but we ignore the constant), but if you wanted to sort them with [Quicksort (Wikipedia)](https://en.wikipedia.org/wiki/Quicksort) that could take up to {{< katex >}}O(n^2){{< /katex >}} basically, the time to run the code (in the worst case) may be squared with the number of inputs. This is not great. If we assume each operation take 1 second (a bit unreasonably long, but go with it) that means for 10 input we're looking at a bit over a minute and a half, but for 1000 inputs that's up to 11.57 **days**.

So, you should learn how to do this kind of analysis, right? Well, it's not a bad idea to - and I do have a brief overview of it in the following section - it's really not as important as those classes make it seem. This is for a few reasons. The first is that the code you write and the code that actually runs are usually quite different. As a basic example, let's look at this C code:

```c
int dumb(int max){
    int sum = 0;
    for(int i = 0; i < max; i++){
        sum += i;
    }
    return sum;
}
```

Super basic, just sums the numbers 0 to ``max`. So, let's compile that and look at the assembly code:

```assembly
dumb(int):
  addi sp,sp,-48
  sd s0,40(sp)
  addi s0,sp,48
  mv a5,a0
  sw a5,-36(s0)
  sw zero,-20(s0)
  sw zero,-24(s0)
.L3:
  lw a4,-24(s0)
  lw a5,-36(s0)
  sext.w a4,a4
  sext.w a5,a5
  bge a4,a5,.L2
  lw a4,-20(s0)
  lw a5,-24(s0)
  addw a5,a4,a5
  sw a5,-20(s0)
  lw a5,-24(s0)
  addiw a5,a5,1
  sw a5,-24(s0)
  j .L3
.L2:
  lw a5,-20(s0)
  mv a0,a5
  ld s0,40(sp)
  addi sp,sp,48
  jr ra
```

Okay, so, yeah, that's about what we expect. There are a few jumps so the loop can execute, whatever. Thing is, if you're ever actually releasing code, you'll have compiler optimization on. With optimization, the compiler will happily generate more efficient code for you. Because we didn't do anything conditionally here sum will always, no matter what, return that same number. The compiler can figure this out, and with optimization on, it spits out this assembly:

```assembly
dumb(int):
  mv a4,a0
  ble a0,zero,.L4
  li a5,0
  li a0,0
.L3:
  addw a0,a0,a5
  addiw a5,a5,1
  bne a4,a5,.L3
  ret
.L4:
  li a0,0
  ret
```

And, alright, yeah, that's fewer lines, dramatically more efficient, but it still seems to be doing the same loop. So, let's do one more thing, let's add a main function that calls this code and add the keyword to our dumb function so that the compiler knows it doesn't actually need to generate the function call, it can wrap it into the main function's code itself:

```c
#include <stdio.h>

inline int dumb(int max){
    int sum = 0;
    for(int i = 0; i < max; i++){
        sum += i;
    }
    return sum;
}

int main(){
    int result = 0;
    result = dumb(100);
    printf("%d",&result);
    return 0;
}
```

That gives us this assembly:

```assembly
.LC0:
  .string "%d"
main:
  addi sp,sp,-32
  lui a0,%hi(.LC0)
  li a5,4096
  addi a1,sp,12
  addi a5,a5,854
  addi a0,a0,%lo(.LC0)
  sd ra,24(sp)
  sw a5,12(sp)
  call printf
  ld ra,24(sp)
  li a0,0
  addi sp,sp,32
  jr ra
```

Which, you should notice, never runs our loop. Instead, the result of the math (summing 0 to 99, which is 4950) is stored directly into the code (well, sorta, it's 4096 + 854, because of limits on immediate values in Assembly, but don't worry about that) - my point is that our originally O(n) code isn't even O(n) anymore because, well, it never even runs. The compiler went "Oh, I can just pre-compute that result and save it in the program" and that's what it did.

Now, the takeaway here should *not* be that the compiler is magic and means you don't need to write fast algorithms.{{< smalltext >}} That said, the compiler totally is magic. Compiler optimization will regularly outperform anything you could write by hand. {{< /smalltext >}} Instead, my point is that doing that analysis may not mean that much if the compiler is doing magic underneath it anyway. So, while you should be able to at a glance see that some code is just horrifically inefficient (deeply nested loops, brute force approaches, etc.) the name of the game is **benchmarking**. If performance matters, or you just noticed things suddenly taking a lot longer, run a benchmark! If you're about to try to performance optimize code, seriously run a benchmark first - you may find your clever tricks actually made things slower! Log the amount of time things take. We have the tools!

### Benchmarking/Profiling Tools

Some benchmarking tools are language dependent, some aren't. Generally, those that are will get you deeper insights but be more annoying to run. Also, keep in mind some tools actually add some time to run *because* of measuring the performance (Heisenberg style). Regardless, a pile of links to look though:

* Python [Flame Graphs](https://www.brendangregg.com/flamegraphs.html)

* C and C++ [Flame Graphs](https://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html)

  > You may want to use [Pyroscope](https://github.com/pyroscope-io/pyroscope) or [Hotspot](https://github.com/KDAB/hotspot) instead of the tools in those links

* Chrome and Firefox both have Flame graph tools built in

* Using [Hyperfine (Github)](https://github.com/sharkdp/hyperfine) to measure run times is amazing

* If you really need deep insights, [Palanteer](https://github.com/dfeneyrou/palanteer) may be worth checking out (Python or C++)

Of course, you can always just `print()` the time before and after the event that you think might be eating cycles too - though print debugging is pretty bad - see [Print Debugging Should Go Away (Robert O'Callahan)](https://robert.ocallahan.org/2021/04/print-debugging-should-go-away.html) which recommends using tools like [rr](https://rr-project.org) or [TDD](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/time-travel-debugging-overview) or [replay.io](https://www.replay.io/pricing) instead. Though, even failing that, something like [icecream](https://github.com/gruns/icecream) (available for many languages) is still better than traditional printing for debug.

It's also a good idea to test on multiple platforms, both in terms of hardware and operating system (assuming you're targeting more than one OS) as some functions tend to have wildly varying performance - particularly system level functions (`print()`, I/O) and math functions like `sin()` - there are a lot of ways to compute trig functions, not all of them are fast. 

## Complexity analysis

[Big O Notation - explained as easily as possible (that computer scientist) (Archive.org link)](https://web.archive.org/web/20210217021526/https://thatcomputerscientist.com/big-o-notation-explained-as-easily-as-possible?guid=none&deviceId=db7ce548-7805-48fb-a57e-1d82424f0a05)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/LOZTuMds3LM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> More cool videos like this can be found at https://www.youtube.com/c/Musicombo/videos

+recursion analysis, [P vs. NP (YouTube)](https://www.youtube.com/watch?v=YX40hbAHx3s)

### Brute Force

## Divide and Conquer



## Data structures

trees, hashtables/maps, stacks

## Practice

Fib, some practice logical equliv, base conversion algo, overlapping lines, matrix multiplication

## Locality

### Temporal

### Spatial

## Dynamic Programming

{{< tip >}}

Heads up, this is a 5 hour video:

{{< /tip >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/oBt53YbR9Kk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Some Algorithmic Inspiration

[Coding Adventure: Ant and Slime Simulations](https://www.youtube.com/watch?v=9DiHy5ZHzN0)

[Algorithmic Redistricting: Elections made-to-order](https://www.youtube.com/watch?v=9DiHy5ZHzN0)

# Further Reading

[The true cost of linked lists (Yassir Karroum)](http://ykarroum.com/2022/05/30/true-cost-list/)
