# Chapter 12 - Life Of Code

## Building

### The C Build Process

{{< speech >}}
I'm going to jump right in here, so things are going to be a bit brutal to understand for a bit. I'll break things down, but I need to give the high-level view first!
{{< /speech >}}

As we saw way back {{< button relref="/Engineering/Linux/hardware/cpu" >}}Hardware→CPU{{< /button >}}, your computer doesn't understand instructions like `printf()`, so ultimately the code you write has to get turned into something your computer understands. There are multiple ways this can happen:

* You can run a sort-of virtual machine, like python or java (google "JVM") does, compiling the code into special instructions that work everywhere (usually called "Bytecode" for whatever they're running on - like "JVM Bytecode"), then relying on the VM to translate the instructions into instructions (machine code) your computer actually understands on the fly
  * This is kinda slow
  * This usually involves some extra weirdness in terms of pointers. For example, running `addressOf()` in java, gives the *address in JVM* not the physical address in memory
    * That said, in these languages, you should really never be trying to find the physical memory address anyway?
    * To get extra nerdy, this means each memory address goes through 3 memory translation steps, from the JVM's address, to the virtual memory address, to the physical memory address - albeit the translation between the latter two is hardware accelerated and present with almost any program - it does speak to the complexity here. See {{< button relref="engineering/linux/hardware/ram#virtual-memory--swap" >}}Hardware→RAM#Virtual Memory{{< /button >}}
* You can do **J**ust **I**n **T**ime (JIT) compilation, which skips the weird VM step and does produce actual machine code for your system, but it's still being done right as it's needed instead of ahead of time, so, as you can imagine...
  * This is also kinda slow
  * Examples include the PyPy python implementation, LuaJIT
* You can compile for your target system ahead of time - normal compilation
  * This means you need to know the features and instructions available on the target system (OS, processor, etc.)
    * This is a bigger pain than you think.
  * This also means you need to recompile for each different target system
    * Like Apple, which has their own OS and Processor, because fuck you.

Now, those first two options have their place and can be legitimately interested in their own right, but for the vast majority of programmers the entire point of those systems is that you don't really need to worry about the low level details of how your program is built (or, not, I guess?) and that it *just works*™. Now, the downside is it sometimes (very rarely) doesn't just work™ and you have to scream bloody murder as you realize you've found a bug in the JVM and spent upwards of 20 hours working around it- That said, You **do** still need to understand the tools used to build your projects (like Gradle or Maven for Java), but you shouldn't have to worry yourself with the lower-level details - you shouldn't ever really need to dive into the bytecode that's generated.

To put this more simply, even in these higher-level languages, you need to know how to tell the computer to take all code and files you've made + libraries you're using and mash em' together, but you don't really need to worry about how the computer goes about doing the mashing together bit, while in something low level, like C, you do.

Okay, so, other than the performance benefit - why care about the more-difficult to write and build languages at all?

1. You'll be doing this no matter what. For example, a good portion of Python libraries are written in C/C++, so, if you ever need to recompile those, it'll be nice to know what's going on.
2. C - and low level languages - aren't going anywhere. If you're writing code for an embedded system, you'll probably have to use it.
   * Yes, I know Micropython exists, but point 1. applies there even more.
3. Internally, a lot of what's happening with the actual, compiled programs is still happening in the other options, just with added flavor. So, it's still nice to understand it.

Okay, so, with that out of the way, what does the C build process look like?

This:

{{< mermaid >}}
graph LR
    A[Source] -->|*.c, *.h| B[Preprocessor]
    B -->|*.i| C[Compiler]
    C --> |*.s or *.asm| D[Assembler]
    D --> |*.o or *.obj| E[Linker]
    E --> |.elf, .exe + .lst| F[Output]
    G(Linker Scripts) -->|*.cmd, *.lib, etc.| E
{{< /mermaid >}}

And, yes I hear the mixtures of groaning and internal screaming from the audience at this gross of a flow chart, as well as the "Uhm, acktually.." from a few of you - let me address the latter group first:

There's a bit of fuzziness in a few places. For one, the output from the preprocessor (*.i files) is something you will most likely never look at, and usually isn't even generated at all, as typically the preprocessor and compiler are the provided by the same tool (like GCC) and the file is never generated, just represented internally. Similarly, the same tool probably handles the job of the assembler, so you may also never see the *.s files either, as they too are just held internally and never written to disk, bring us to the *.o files. These typically are written to disk, and then further processed (again, usually by the same tool, like GCC) to produce the output program, in the form of a .elf, .exe, etc. as well as a .lst (if output) which is really useful for debugging embedded systems and making sure efficient assembly is generated.

Linker scripts are something you'll typically only see in embedded programming, and are used to map the executable's memory to physical memory. This is particularly relevant as a lot of embedded systems will have multiple memory segments with varying speed, power usage, and capacity.

Okay, so that's a lot, let's break down each step:

### Source Code



### Preprocessor



### Compiler



### Assembler



### Linker & Scripts



### Output

---

Okay, so that's a lot to juggle, right? In a larger program there might be a few dozen libraries, how do we go about working with this? Let me introduce you to `make`.

## `make` and makefiles
