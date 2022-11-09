# Chapter 16 - Debugging, Building and Testing

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




## Debugging

[./missing-semester - Debugging and Profiling](https://missing.csail.mit.edu/2020/debugging-profiling/)

### Software Debugging

[TODO]

GDB with Gef, interpreted languages, embedded systems, non-code issues (boot problems, glitchy behavior), hardware failures, valgrind, various trace programs, print debugging extended

### Debuggers

[GDB Frontend](https://github.com/rohanrhu/gdb-frontend)

[GDB + GEF](https://gef.readthedocs.io/en/master/)

[The State of Linux Debuggers (Jamie Brandon's Blog)](https://scattered-thoughts.net/writing/the-state-of-linux-debuggers/) ← This is a decent rant about why most debuggers sort of suck. And yeah, they do. But we still sorta need them

[Advanced GDB Usage (Interrupt)](https://interrupt.memfault.com/blog/advanced-gdb)

https://rr-project.org

\+ valgrid in here somewhere, ref 11- low level prog

#### Static Analysis

[CodeChecker using LLVM/Clang (GitHub)](https://github.com/Ericsson/codechecker)

### Hardware Debugging

common interfaces, simulation, serial/print debugging (slow), internal data logging, physical indicators of internal state, hardware to facilitate debugging (LED 'byte')

[TODO] [Embedded C/C++ Unit Testing Basics (Interrupt)](https://interrupt.memfault.com/blog/unit-testing-basics)

[TODO] [Faster Debugging with Watchpoints (Interrupt)](https://interrupt.memfault.com/blog/cortex-m-watchpoints)

## Testing

```
@jnesselr replying to @alicegoldfuss (Nov 13, 2018)
+----------------------------------------------------+
|Me: *does major refactor*                           |
|Tests: ✓                                            |
|Me: I don't believe you                             |
+----------------------------------------------------+
[Suspended User]
+----------------------------------------------------+
|Me: *deliberately breaks something, just to be sure*|
|Tests: ✓                                            |
|Me: oh no                                           |
+----------------------------------------------------+
@boo_radley
+----------------------------------------------------+
|Me: *changes nothing*                               |
|Tests: ✗                                            |
|Me: oh no                                           |
+----------------------------------------------------+
[Suspended User]
+----------------------------------------------------+
|Me: *runs tests again*                              |
|Tests: ✔                                            |
|Me: oh no no no                                     |
+----------------------------------------------------+
src: https://twitter.com/boo_radley/status/1062513898954391552
```

### Software Testing

unit tests, integration tests, performance testing - https://github.com/sharkdp/hyperfine

### Hardware Testing

## Automated Building and Testing

[TODO]

Fuzzing (sandsifter), make and alts, etc.

## Continuous Integration

This is a subject that many people have written books about, and in a small-to-medium sized open source project, may not seem necessary. But its usefulness will sneak up on you faster than you might think.

First, there is the total time savings. If you consider everything it takes to make correct and clean code -- not only compiling, but linting, testing, etc -- then it is definitely worth automating for yourself. And if it's worth automating for yourself, it's worth automating for others.

![](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)
{{< attribution >}}[XKCD №1205](https://xkcd.com/1205/){{< /attribution >}}

Second, there is consistency. Again, if you want *all* of your code to compile, you have to gate committing code to a successful compile (or at least syntax check). If you want *all* your code to have a certain format, then you have to gate committing code to passing lints. This will become a headache much faster than you think -- even for a simple project!

Third, there is compatibility. A big part of open source is that it must be flexible, and support multiple environments. If you end up using a lot of GCC-style syntax, for example, someone with LLVM, ICC, or another compiler might have trouble building it. A CI system can test builds in many environments, not just the one you develop in.

Finally, if you start actually building out compatibility? It is a very small step to Continuous Deployment. And then you've got something really nice to build a community around your software.

Speaking of community, it is worth noting: if you want to impress people and make contributions, find an open source project who didn't learn this lesson, and write or improve CI for them. This will have a long-term positive impact that the community will benefit greatly from -- even if it takes a while for the payoff to be realized.

### Docker: the portable way

There are a lot of different git platforms out there, and many of them have their own CI. In addition, the most popular ones are owned by companies who have a sketchy track record in open source -- or once had good ones, but then were acquired by others who did.

As a result, I want to push toward a tool that is platform independent: docker. This has some trade-offs:

* It's independent of any CI provider <a class="ptr">(1)</a>
* It's well supported by most of them (a "command" makes it easy to handle containers)
* You can run the full CI on your own machine, e.g. to debug it without 20 pushes to trigger a rerun
* It doesn't rely on their support for a particular OS (especially ancient or exotic ones)
* But it means you are re-inventing the wheel to some extent compared to their tooling

I'm going to presume you're familiar with the basics of docker and have read <a href="/engineering/networking/servers/">the Containers section of the Servers chapter</a>. This section shows you specifics for this.

In short, CI is way to build out your support matrix. Want to support Ubuntu, Debian, RedHat, and Arch Linux? Want to support every Python version from 3.2 to 3.10? Want to try compiling your C++ library with multiple compilers?

With docker, just make one container for each, and run them all! (Although for the Python version specifically, tools like [the tox library](https://pypi.org/project/tox/) can solve this in only one container.)

Let's suppose we have a C++ project, and we want to make sure that it supports a variety of compilers. The easiest way is to define a docker file that prepares that compiler, but the actual compiler itself is not hard-coded. Instead, it is set up using `ARG` commands in the Dockerfile.

Here is what that might look like:

```
FROM ubuntu:20.04
# Default to the distro's current GCC version
ARG cc_pkgs='gcc g++'
# The name of the C compiler
ARG cc=gcc
ENV CC=$cc
# The name of the C++ compiler
ARG cxx=g++
ENV CXX=$cxx

# Install the compiler packages, along with any dependencies
# Suppose your program requires OpenGL, for example:
RUN apt update && apt install -y libopengl-dev build-essential $cc_pkgs
```

With this container, it should be possible to run a build by bind-mounting the source inside. This is because the variables used by GNU Makefiles, Ninja, GNU Autoconf, etc., will be set.

It is easy to make all the containers for different compilers with a single shell script:
```bash
COMPILER_NAMES=(gcc llvm-8 llvm-9 llvm-10)
CC_NAMES=(gcc cc cc cc)
CXX_NAMES=(g++ c++ c++ c++)
PKGS=("gcc g++" "llvm-8-tools" "llvm-9-tools" "llvm-10-tools")

i = 0
while [ i -le ${#COMPILER_NAMES[*]} ]
do
	docker build -f ci/Dockerfile \
        --build-arg cc_pkgs="${PKGS[i]}" \
        --build-arg cc="${CC_NAMES[i]}" \
        --build-arg cxx="${CXX_NAMES[i]}" \
        -t ubuntu_${COMPILER_NAMES[i]} .
	i=$(expr $i + 1)
done
```

Then you can test it on any compiler you wish. <a class="ptr">(2)</a>

If your CI provider supports "build matrix" definition (most do), then you don't even need to do that! Just put matrix variables for each one (so that the line up as a *group*, rather than a *cross product*).

(Note: this is not exact for any vendor, but gives the idea.)

```yaml
matrix:
    - COMPILER_NAME: ["gcc", "llvm-8", "llvm-9", "llvm-10"]
      CC_NAME: ["gcc", "cc", "cc", "cc"]
      CXX_NAME: ["g++", "c++", "c++", "c++"]
      PKGS: ["gcc g++", "llvm-8-tools", "llvm-9-tools", "llvm-10-tools"]

job:
    name: Verify Compatibility with Ubuntu 20.04 on $COMPILER_NAME
    script: |
        docker build -f ci/Dockerfile \
            --build-arg cc_pkgs="$PKGS" \
            --build-arg cc="$CC_NAME" \
            --build-arg cxx="$CXX_NAME" \
            -t $COMPILER_NAME .
        docker run -v src:/src -w /src $COMPILER_NAME make
```

## Continuous Deployment


<ol hidden id="footnotes">
  <li>This may or may not be important to you. I would simply note that many platforms and CI systems have been taken over or bought by open-source hostile companies. Even formerly visionary ones that don't start with G.</li>
  <li>Why have different versions of the same compiler? Because they default to different versions of the C++ standard. Not only will C++ "retcon" keywords, but semantics will change. Suffice to say this has caught issues in open source projects.</li>
</ol>
