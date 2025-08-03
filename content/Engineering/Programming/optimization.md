# Chapter 17 - Optimization

If you're here, you're probably able to at least write some code. Is it perfect code? Probably not - but what code is.

Good code should be:

* Malleable - You should be able to change it if requirements change.
* Simple - It should be easy to read
* Portable - It should be able to run *almost* everywhere
* Performant - It should go fast

Unfortunately, those things are a bit at odds with each other. Hyper-optimized, fast code often requires breaking though layers of abstractions and doing things in ways that are far from simple, making assumptions about what hardware it will be running on, and using subtle details to eek out extra performance - trading knowledge about how the code will run under the current understanding with flexibility should the requirements change.

All of this is to say, while optimization for speed can be important, it comes at more cost than just the time it takes to write fast code. It will make your code harder to read.

Still, there are situations where a certain performance level becomes absolutely necessary and changes must be made to accommodate it.

I like to divide performance problems into two categories either your program is **overworked** or **very board**

If your program is **overworked**, it's chugging though as much data as it can but either there's a lot of data or the computation on that data is very heavy, so it'll just take a long time to complete. An impractical example here would be computing very high digits of pi.

If your program is **very board** it's because it's spending the majority of its time doing nothing other than waiting on something else to happen. Almost always, this is I/O. Waiting on a user to press a button, waiting for data to finish being sent over a slow interface, waiting to read data from a file stored on hard drive, etc.

For **overworked** code we have a lot of options, depending on the specifics of the problem

* You can try to find a better algorithm for the hot-spot(s) in our logic
* You might be able to split up the work load across multiple cores
  * In extreme case, you might even be able to offload the work to the GPU or other hardware
* You might be able to take advantage of the specific architecture you're running on, such as using [SIMD](https://en.wikipedia.org/wiki/Single_instruction,_multiple_data) instructions
* You might be able to pre-process the data to avoid unnecessary work
* You might be able to use [memoization](https://en.wikipedia.org/wiki/Memoization) to cache past results to make future calls faster
* You might be able to use only slightly less accurate approximations of math functions

For a **very board** program, you really want to find the thing that's blocking you and have it run on it's own thread/task/core.

As a contrived example, imagine a word processor written like this (this isn't a real language, just pseudo code)

```  python
while(True){
    # Wait for input character
    buffer += get_character()
    pos++
    
    # We must've finished a word, see if the last word is
    # spelled correctly
    if (new_char == " ") {
        word = buffer[last_new_word_pos:pos]
        # Spell checking takes a while, as we have to check if
        # the word is in the dictonary
        if(spell_check(word) == BAD_SPELLING){
            red_underline(word)
        }
        
        last_new_word_pos = pos
    }
    
    # Display the buffer
    display(buffer)
}
```

This would be immensely frustrating to use because every time you press space, the entire program would hang for a moment to spell check. If `get_character()` were written poorly, it may even miss input characters while it does this.

<style>
.err {
    text-decoration-line: underline;
	text-decoration-style: wavy;
    text-decoration-color: red;
}
</style>



The right way to do this would be to have three separate tasks:

* One that constantly gets user input and buffers it, waiting for the others to ask for it
* One that takes the buffer and displays it on the screen (showing data on the screen is also slow)
* One that looks at the global buffer and spell and grammar checks periodically, informing the display task if the text needs to show a red <span class="err">squigggle</span>

By doing it like this, we will never loose user input due to the spell checker running, we don't have to process things word by word anymore (giving us better spelling and grammar checking), and the user shouldn't feel a weird lag between typing a character and it showing up even if we add other systems that decorate or act on the text.

Putting this all together, regardless of it's overworked or very bored code we need to know:

1. How to find the problematic code
2. How to profile the problematic code

So that we can try

* Reducing the amount of data we're processing
* Reducing the amount of processing we're doing on the data
* Making multiple things execute at once
* Offloading processing to other hardware
* Taking full advantage of each CPU core

## Finding & Profiling Code

1. How to find the problematic code
2. How to profile the problematic code

## Thinking about our data

* Reducing the amount of data we're processing
* Reducing the amount of processing we're doing on the data

## Making Multiple Things Execute at Once

Multi-processing and multi-threading code is both a bit complicated to write and a total mess of terminology. So, let's start by at least getting our terminology straight.

If you want to have multiple things run at the same time (or at least look like they are, if you only have 1 core) you generally have a few options:

1. Run multiple processes which communicate with each other
2. Have one process with multiple threads

You probably already have a rough idea of the difference between a thread and process, but in short:

* Threads are cheaper to pass data between and cheaper to create and destroy
* Threads are *typically* a bit easier to work with
* Processes are isolated, which can be good for avoiding one spying on another (security)
  * This is literally the same as you running your program twice and giving both copies some way to talk.
* Running multiple separate processes might give you more performance than threads
* You can run multiple processes, each with multiple threads

This all gets more-than-a-little fuzzy, because in some languages and systems, a process which is running multiple threads may be able to run those threads at *literally* the same time while in others it may only be able to time-divide such that your code can appear to be doing multiple things at once.

This distinction of thread types depends on if the threading system being used has threads provided by some scheduler that lives in the program itself ("[Green threads"](https://en.wikipedia.org/wiki/Green_thread)) or by the operating system kernel, and you'll probably have to do some research into the specific threading library for the language you want to use to figure out which it is.

The difference **does matter**. If you're using "real" kernel level threads and you don't need the per-process isolation, there's not really a good reason to try to spawn multiple threads with multiple processes - you'll already be able to take advantage of all the CPU cores on your system. Note though, doing those system calls to the kernel level thread scheduler is a hair slower than what green threads can achieve if you're only going to be running on one core anyway.

There's also some systems (like Goroutines in the Go programming language) where the user-space scheduler will dispatch threads to the kernel level one at times providing a sort of hybrid approach, presumably giving you the best of both worlds - similar to using multiple green threads on multiple processes.

> As I lack a better place to talk about it: There are also "[Coroutines](https://en.wikipedia.org/wiki/Coroutine)", which have a rather fuzzy definition, but generally the difference is that while threads will preempt each other - that is, the OS or Scheduler will not let one thread sit there and hog all the processor time - coroutines are cooperative, they depend on one-another saying "Hey, I need to wait on something for a bit so I'm `yield()`ing". Importantly, this system makes sense because it's only one one thread/processes - it is not trying to run things at the same time, only give up control to another function if it doesn't have anything to do. 
>
> If you see something about "[prototheads](https://en.wikipedia.org/wiki/Protothread)" it's basically just a fancy coroutine.

Finally, we need to talk about a few terms relating to how these threads or processes talk.

If you're using different processes (not threads!), they need some way to communicate data other than directly with shared address space because, well, they no longer share address space. This is [**I**nter-**P**rocess **C**ommunication](https://en.wikipedia.org/wiki/Inter-process_communication), or IPC. That Wikipedia page is actually great for listing the the different ways it can be done.

If you're using threading, it's common that the language you're using provides some sort of asynchronous, usually abbreviated "async" programming model. For example, [Python's `asyncio`](https://docs.python.org/3/library/asyncio-task.html), [Rust's async](https://rust-lang.github.io/async-book/01_getting_started/02_why_async.html), etc.

Reading those pages will do a lot more good than me trying to poorly summarize them here, so I recommend taking a look at both to get a feel fro what async models are good at. Even if you don't use Rust or Python, the general idea is available in many, many languages now.

Now, this is where things get actually gross: As soon we have multiple things running at once, we can have a whole host of problems and solutions to them.

* **Race Conditions** occur when two things try to acquire (and do) access to something only one thing should be able to do at once. For example, if two threads are trying to increment a variable, they have to first read it, add to it, and then write it. [TODO Finish this example]
* Code that has things where only one thing should be able to do anything at a time is called a **critical section**.
* To avoid these problems, we usually use a **lock** (often called a **mutex**) of some sort or a **semaphore**. A lock does what it sounds like, it says, "I'm entering this critical section, nobody else can use it right now" - like a public restroom. A semaphore is more-or-less the same thing, but you say I have N of this thing available - keeping the restroom analogy, say N stalls, and each time someone needs one they `wait()` for it, each time someone exits they `post()` that they exited. Really a lock is just a semaphore with 1 of the resource to go around. Importantly, for each semaphores, the process/task waiting doesn't care which copy of the resource (which stall) it gets, just that it gets one.
* A **deadlock** occurs if everybody is waiting on everbody else do something - usually releasing a lock.
* If something happens "**Atomically**" (or is forced to do so) it meas that only one thing can act on it at once, everybody else will be forced to wait because that resource can't be shared. The message passing structures in an application are usually made to be atomic. Atomicity is often enforced by using a special atomic instruction that does the [Read-modify-write](https://en.wikipedia.org/wiki/Read%E2%80%93modify%E2%80%93write) of a variable all in one-shot.

Finally, it's worth noting that there are some design patterns that are pretty common.

* **Producer(s) & Consumer(s)**:  some task(s)/process(s) make work, the others do it. This is often done with a queue of data to be done, which must be atomic - even though the production and and consumption of that work doesn't have to be. Sometimes this queue is called a **mailbox**.



[TODO]: Actually examples of Threading, multi-processing, etc.

## Offloading Processing

## Taking Full Advantage of our Cores

<h4>{{< best >}}[Algorithms For Modern Hardware](https://en.algorithmica.org/hpc/){{< /best >}}</h4>

I can not do better than this book with the time I am willing to devote to this page. This book is approachable, well explained, and generally written from a place of more experience than I have. I do have some commentary, but, seriously, read this. Come back and we'll discuss after

---

Additional resources on SIMD:

[Fast CSV Processing with SIMD (null program)](https://nullprogram.com/blog/2021/12/04/)

## Using Threads To Wait On I/O

[TDOO] Motivations from Moore's law, Blocking I/O, 

[TODO] start with process forking via syscall - show it 

https://lemire.me/blog/2020/01/30/cost-of-a-thread-in-c-under-linux/

C++ coroutines

not really threading, but process children

## SIMD

[TODO] Compiler options, using intrinsics, pragmas, etc.



