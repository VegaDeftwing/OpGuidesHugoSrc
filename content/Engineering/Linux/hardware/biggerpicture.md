# 10 - The Bigger Picture

<script>
    document.getElementById("hardwareMenu").open = true;
</script>
Something that's most people get wrong about computers is thinking that the majority of what makes a computer go faster at something is being able to do math faster. After all, if you can add, divide, multiply, subtract, etc. numbers faster, that's everything a computer does, right? So making math twice as fast means everything is twice as fast? No. Very much so no.

It turns out, the vast majority of what your computer does is not math and logic, but just **moving data around**. 

This is so much so the case that roughly 30% of the instructions your computer runs are the `mov` instruction, which does what it sounds like. This makes it by far the most used.

What this means is that when we get to writing code, fast code isn't really code that does math fast, it's code that gets the data to the processor to work on fast. It's code that moves data as fast as possible. There's a catch, though: The faster the memory and the closer to the CPU it is, the more it cost (like, in dollars).

## The Storage Hierarchy: 

### Registers→Cache→Memory→Disk (& The role of interrupts)

When people talk about computer storage and data access, they often describe RAM as short term memory and storage on a hard drive or solid state drive as long term memory. That metaphor is decent, but I like to break it down into further levels.

At the very fastest access is **CPU registers**. If RAM is a big pool of short term memory, registers are the thing you're actively thinking about. Like if you're playing a board game, it's the number of steps you've just read off the dice. It's actively being processed and worked on. 

Between the registers and RAM for size and speed is **Cache** (of which there are multiple levels, but don't worry about that for now). Imagine you're playing a really complex game, you may have all the rules in your short term memory, but each turn has phases - you'd have the steps for that particular phase in mind during that phase, but in each phase you need to sort of mentally refresh yourself how it works. This is hugely bigger than the storage in the registers, but still usually not big enough to hold all the rules of the game. Breaking the metaphor a bit, you will usually have multiple programs running (games, in this metaphor), and all of them are probably keeping at least some information in cache.

Then you have **RAM**. This is the mental space where you keep all the rules of the game while you're playing it. This is hugely bigger than the amount of cache. Breaking the metaphor a bit, it's big enough to actually hold the rules of multiple games (programs) in full.

Then you have Solid State storage and Hard drives. You might only have one or the other, or you might have both. For the sake of analogy, I'll assume you have both.

On the solid state drive you'd keep your often done tasks, it's a sort of mental catalog of memories you can bring back pretty quickly, but aren't sitting at the front of your mind until you need them. There is some overhead in getting those thoughts up the hierarchy. You still have a lot more room here than in the above levels, but it's not endless.

Then you have your hard drive. Your hard drive is like a little notebook of things you can never seem to remember you keep with you. You have to open it up, find what you're looking for, read it, then you can think about it. This can be something as small as a shopping list or as large as all the words to a play or the complete plot of a series of books. 

… Okay, I do have to modify the metaphor here a bit. Hard drives and solid states drives both actually act like this book metaphor, but imagine you had a little minion you could summon to go find what you were looking for. This would free you up to do something until the minion came back, poked you, and said "Here's your request boss!". That's how they actually work, that poke is a **CPU interrupt**. Hard drives and Solid state drives more-or-less look the same to your computer. They're both bulk storage you toss files onto. It's just that you get a lot more storage per dollar with a hard drive than an SSD, but SSDs are much, much, much faster. Hard drives, as mentioned back in the storage chapter, do literally have to move a read head to correct position on a spinning platter after all. A big thing SSDs are faster at isn't just bulk transfer - how quickly that minion can keep fetching things that are stored sequentially - but also in how quickly they can locate things. Think of it like giving the minion super speed bionic legs and a kick ass index. He still has to go read the books and fetch things for you, but he can find where the book is and get that data much faster… albeit it'd still be faster if you didn't have to ask the minion in the first place.

Then you have networking. Sending your virtual minion though the internet (or int**ra**net), the information storage and what you can access is effectively endless but getting there may not be as reliable and even just factoring in the over head of the speed of light down wires to go around the world it may take a while.

Okay, so, again

CPU Registers → Cache → RAM → SSD → HDD → Network. 

Got it? Cool.

Now to stop with the metaphor. 

### Stalling

There's a computational effect that's really important here. When the CPU wants to access data that's not in its registers, it will try to read from cache.

If when it goes to read from cache, the memory still isn't there, that's called a **cache miss**. 

When this happens the CPU has to go read from RAM (well, actually it gets another page from RAM and puts it into the cache). Now, remember before how with the normal analogy you hear people say RAM is like our short term memory? This is why I don't love that analogy - reading from RAM compared to Cache or registers is insanely slow. It's so slow that the CPU will almost certainly run out of work to do. The term for when this happens is actually a **CPU Stall**. 

Numbers vary, but while reading from registers is instant (by definition of how they work), reading from the cache may take anywhere from 3 to ~80 cycles (depending on the cache layer/level, again, skipping this for the moment). Assuming one cycle per instruction (which is its own weird conversation), that's up to 80 instructions like adds and multiplies and what not. But what if we have to go all the way to RAM? That's usually around 300 cycles. Yikes! See why I said memory access is so important now? 

Obviously, this is a huge problem. There are ways to make it less-bad, such as getting the CPU to go do something else while it finishes<a class="ptr">(1)</a>, trying to re-order instructions to have data be ready when it's needed ([out of order execution (Wikipedia)](https://en.wikipedia.org/wiki/Out-of-order_execution)), guessing what result from a branch (`if a do b, else do c`) will actually run and computing it early ([Speculative Execution (Wikipedia)](https://en.wikipedia.org/wiki/Speculative_execution)), and generally just loading data in intelligently, such as assuming a program executes with a reasonable level of spatial locality (that is, if we're reading memory at locations 1, 2, and 3, we probably want 4 next) and temporal locality (if we keep reading 1,2,1,2,1,2, we probably want 1 next), or, yunno', just making the CPU cache bigger and adding more registers, which is something that generally happens which each new processor release.

Learning more about this, such as about how different [Cache placement policies (Wikipedia)](https://en.wikipedia.org/wiki/Cache_placement_policies) and [Cache **re**placement policies (Wikipedia)](https://en.wikipedia.org/wiki/Cache_replacement_policies) as well as how the interact with [Virtual Memory page replacement algorithms (Wikipedia)](https://en.wikipedia.org/wiki/Page_replacement_algorithm), [CPU Scheduling (Wikipedia)](https://en.wikipedia.org/wiki/Scheduling_(computing)), and [CPU Pipeling (Wikipedia)](https://en.wikipedia.org/wiki/Pipeline_(computing)) and then actually decide how to get data from bulk storage (be it from something like a NVMe SSD - hence the advent of [Direct Storage (Wikipedia)](https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S#Storage_architecture) - or as slow as hard drive) is why studying modern computer architecture is super difficult and confusing. It's this gross interplay of hardware, operating systems, memory technologies, and about a million other variables where the reason things are slow is literally because we're fighting the speed of light (as that dictates how quickly electrical signals can get from one point to another), switching speed of transistors that are nanometers wide, and the effects of data corruption when we're sending this data at the crazy rates we are. Fortunately, for 99.9% of things, you really don't need to know how all of that works. All you really need to know is that while, yes, a CPU with a faster clock will process things faster, if that just means stalling, waiting for data more often it's not really a big win.

At then end of the day, I'm telling you all of this to make it clear that a lot of really smart people have thought really hard to make the CPU in your computer try it's very best to move data around as little as it can and have the data it needs ready when it needs it, yet still over ⅓ of your computer's time is spent moving things around. So, when we actually get to writing code (I swear we'll get there eventually…) we'll cover doing some what-should-currently-sound-like-black-magic like:

TODO: I want to link to a page doing each of these, that is, each bullet should have a button.

* In {{< button relref="/Engineering/Programming/shaders" >}}GPU Computation{{< /button >}} you'll see it can make sense to take a massive, temporary speed hit to copy data to a GPU (Graphics Processing Unit) because for big enough data with the right operations, it will pay off significantly
  * For example, if you have two lists of a million numbers and you need to make a third list which is the elment-wise sum. The GPU can do that really, really, fast because it can do much of the work in parallel instead of working on each operation sequentially.
* Spending a few cycles to move data around and pack it into a special structure so that we can do [Single Instruction Multiple Data Operations (Practical SIMD Programming by Jacco Bikker)](https://www.cs.uu.nl/docs/vakken/magr/2017-2018/files/SIMD%20Tutorial.pdf)
  * https://ispc.github.io
* [Use buffers, memory alignment, and avoiding OS locks to speed up computation (A Little Story About the `yes` Unix Command, endler.dev)](https://endler.dev/2017/yes/)
* Using [Huge Pages](https://en.wikipedia.org/wiki/Page_(computer_memory)#Multiple_page_sizes) to make VM's faster
* Manually placing memory on embedded systems
* Setting up Direct Memory Access (DMA) peripherals on embedded systems
* Setting up interrupts on embedded systems
* Writing assembly code that modifies itself (this is very stupid, but neat)
* Using Ram Disks
* Using Ram Compression (zram/zswap)
* Setting Ram "Swappiness"
* Setting processor affinity
* Using `mmap` to make file access stupid fast (*sometimes)
* Using fancy system calls based on [io_uring](https://despairlabs.com/posts/2021-06-16-io-uring-is-not-an-event-system/) to prevent blocking.

<!--- https://unixism.net/loti/tutorial/cat_liburing.html --->

<!-- https://sasha-f.medium.com/why-mmap-is-faster-than-system-calls-24718e75ab37 -->

<!-- https://gist.github.com/jFransham/369a86eff00e5f280ed25121454acec1 for loop unrolling--->

Where every one of these things relates back to this page - keeping the time spend moving and accessing data down.

Now, a good chunk of that is really advanced stuff, and 95% of the time when you're writing code you won't have to worry about any of this. Hell, depending on the language you're working in, you literally *can't* because you wont have control over how things like that are done. But understanding how it works and knowing that you *can* is important, as some problems would otherwise be impractical. Let me explain:

Say you're working on real time audio. To keep things "real time" you can buffer around 128 samples of audio, and you'll probably be playing back 48,000 samples a second. So, that means any computation you do has to happen reliably within 2.6 milliseconds deadlines.

Or, say you're working on a game rendering engine and you want to target 60fps. That's a bit better at 16.6 milliseconds per frame, but think about how much work the computer has to do to draw one frame - lighting, camera projection, physics, etc on potentially tens of thousands of triangles that make up the 3d scene. I love looking at benchmarks ran [with the wireframe on](https://www.youtube.com/watch?v=Gr-Kundl52s) to just bask in the awe of modern rendering. But that doesn't come without massive effort to make such things fast.

The following video shows some of how caches work in a security context, but does make everything a bit more concrete:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/x_R1DeZxGc0" title="Discover Vulnerabilities in Intel CPUs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## <!--Generic = Slow-->

<!--Accelerators make modern systems useful-->

## <!--Abstractions are only *usually* good-->

<!--Useful for getting work done, a massive pain in the ass when the issue is down the stack-->

<ol hidden id="footnotes">
    <li>Ever wondered what Hyper Threading is, or why you have more cores than threads? This is a big part of it. Basically, it lets something else run when the CPU is waiting on the cache to populate.</li>
</ol>
