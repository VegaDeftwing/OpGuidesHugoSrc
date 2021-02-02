# Chapter 31 - Let's make our own CPU

{{< tip >}}

This Chapter will be split into three parts:</br></br>Part 1, understanding the interval workings of a CPU. This is effectively just a computer architecture class, and will be by far the largest section.</br></br>Part 2, making that CPU on an FPGA.</br></br>Part 3, making that CPU do something.

{{< /tip >}}

## Part 1: Computer Architecture

### Motivation:

> Any sufficiently advanced technology is indistinguishable from magic.

{{< attribution >}}

[Arthur C. Clarke's 3rd law](https://en.wikipedia.org/wiki/Clarke's_three_laws)

{{< /attribution >}}

Computers, to a normal user look like magic. In previous chapters I've shown you how to harness this magic though programming, and revealed at least some of it's internal worknings in [Chapter 3, Into The Hardware]({{< relref "/Engineering/3-hardware" >}}). But this is all low level magic, the sort the lowest level mages can handle. To truely master the craft one must dive deep into the dark arts and study the origin of magic itself and understand how we breathe life into otherwise inanimate rock. Back in [Chapter 14, Semiconductors]({{< relref "/Engineering/14-circuits2" >}}) I covered how the basics of the very, very low level work to form semiconductors, then in [Chapter 15, Digital Logic]({{< relref "/Engineering/15-digitallogic" >}}) we saw how transistors could be chained to give rise to the fundamental logic gates. Finally, last chapter we looked at the basics of FPGAs to see how they let us make large scale logic circuits quickly. That all builds to this, making complex logic circuits that actually do useful work. These can be everything from application specific tasks, like bitcoin miners or hardware encoders and decoders for video codecs to the generic CPU. For this guide, I'll focus on the CPU. However, I think this can be realatively boring without further motivation, so, before we actually get to the CPU, let me show you how and why CPUs have evolved

[TODO] loop memory operations w/ godbolt, cisc/risc, chiplets, core counts, branch prediction, N/S bridge to chipset (memory controller), etc. Moore's Law ending, voltage minimums, minimum transistor sizes before quantum effects, etc.

<iframe width="100%" height="400px" src="https://godbolt.org/e?readOnly=true&hideEditorToolbars=true#g:!((g:!((g:!((h:codeEditor,i:(fontScale:18,j:1,lang:c%2B%2B,selection:(endColumn:1,endLineNumber:11,positionColumn:1,positionLineNumber:11,selectionStartColumn:1,selectionStartLineNumber:11,startColumn:1,startLineNumber:11),source:'%23include+%3Ccstdlib%3E%0A%0Aint*+addFloats(int*+a,+int*+b,+int*+c,+int+n)+%7B%0A%0A++++for+(int+i+%3D+0%3B+i+%3C+n%3B+i%2B%2B)%7B%0A++++++++c%5Bi%5D+%3D+a%5Bi%5D+%2B+b%5Bi%5D%3B%0A++++%7D%0A%0A++++return+c%3B%0A%7D%0A'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50.79365079365079,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:g102,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'0',libraryCode:'0',trim:'0'),fontScale:17,j:1,lang:c%2B%2B,libs:!(),options:'-O',selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:1),l:'5',n:'0',o:'x86-64+gcc+10.2+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:49.20634920634921,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4"></iframe>

Here you can see there are three memory operations(2x MOV and one ADD that have DWORD PTR in them). With 4-byte ints on a 4Ghz CPU, this works out to $ 3 \times4(Bytes) \times (4 \times10^9(hz)) = 48GB/s $. This is pretty close to the 55GB/s that [this linux tool](https://zsmith.co/bandwidth.php) reports that I get, per core, on my system. Fortunately, most modern CPUs have ways of parrelizing these operations internally, having multiple integer units per core as well.

[TODO] newer systems, https://www.cerebras.net/cerebras-wafer-scale-engine-why-we-need-big-chips-for-deep-learning/, https://www.anandtech.com/show/14750/hot-chips-31-analysis-inmemory-processing-by-upmem, intel optane

[TODO]

Data-Level, Task-Level, and Instruction-Level Paralleism (Application Parrallelism)

Intstruction Level Parrelism (Pipelining), Thread-Level and Request-Level Parellism (Architectural Parallelism)

Single Insturtion Stream, Single Data Stream (SISD)

Single Instruction Stream, Multiple Data Streams (SIMD)

MISD is not used commercially

Multiple Instruction Streams, Multiple Data STreams (MIMD) (tightly and loosely coupled)

## Part 2: Making the CPU

## Part 3: Making It Do Something

Before we start, I'll warn you this isn't easy, but it's also not as bad as it sounds, and it's certainly not as [bad](https://www.youtube.com/watch?v=C8txvmXUIJQ&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz&index=141&t=0s) as it used to be

[TODO]

[FPGA Linux Kernel drivers](https://www.kernel.org/doc/html/latest/driver-api/fpga/index.html)

[An FPGA that only plays Doom](https://twitter.com/sylefeb/status/1258808333265514497)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The DooM-chip! It will run E1M1 till the end of times (or till power runs out, whichever comes first).<br>Algorithm is burned into wires, LUTs and flip-flops on an <a href="https://twitter.com/hashtag/FPGA?src=hash&amp;ref_src=twsrc%5Etfw">#FPGA</a>: no CPU, no opcodes, no instruction counter. <br>Running on Altera CycloneV + SDRAM. (1/n) <a href="https://t.co/wd7j4JnfWn">pic.twitter.com/wd7j4JnfWn</a></p>&mdash; Sylvain Lefebvre (@sylefeb) <a href="https://twitter.com/sylefeb/status/1258808333265514497?ref_src=twsrc%5Etfw">May 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[My Nor](http://www.mynor.org) - "a single board computer that does not have a CPU. Instead, the CPU consists of discrete logic gates from the 74HC series. This computer also has no ALU. Only a single NOR gate is used to perfom all computations such as addition, subtraction, AND, OR and XOR."

# Chapter 31.1 - FPAAs

[ZRNA FPAA](https://zrna.org/shop)

# Weird Things

https://hackaday.com/2020/11/23/a-cpu-less-computer-with-a-single-nor-gate-alu/