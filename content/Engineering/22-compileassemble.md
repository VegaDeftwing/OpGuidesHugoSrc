# Chapter 22 - Compilers and Assemblers

https://lee.earth/til/compiling-c-code-a-step-by-step-guide/

## Common Flags and When to Use them

> These flags are not universal, instead they're from GCC. GCC and Clang are the big two compilers you'll see a lot and these flags should be mostly the same between the two. Of course, there are many, many other compilers, but I'm going to start with the common stuff

### -o (Output)

> Note, this is a **lowercase** 'o'

You should've seen this already, I'm mentioning it mostly to give a brief review of what a flag is, it's basically just another term for an argument to a program where the program is run as `program-name argument1 argument2 ...` but, usually flags are prefixed by `-` or `--` 

in the case of `-o` it just means, use the next argument as the output name, so using

`gcc input.c -o myprogram` gives you an executable named myprogram instead of just input.

### Warnings

Just, read this: https://interrupt.memfault.com/blog/best-and-worst-gcc-clang-compiler-flags - It's a lot more in depth than anything I could write here. It's focused on Embedded development, but should be broadly applicable.

### -S (aSSembly)

### -v (Verbose)

### Optimization

> Note, this is an uppercase 'O'

And now we can get to fun stuff. -O is generally used in levels, here with no space, so there's `-O`, `-O2`, `-O3`, and `-Ofast` are for speed, and `-Os` is for size of the binary. (or `-Oz` for clang)

> Technically, `-Ofast` can break your code. This is rather unlikely though.

Each of these will take longer to compile but be more aggressive about optimizing the assembly code that is generated from your input. For example, let's look at the code

```c
int mult(int m, int n){
    char a[m][n];
    return sizeof(a);
}
```

This is a *very* stupid multiply function. Effectively, it's multiplying two numbers by making a matrix of size m by n, and then counting the number of spots in that matrix instead of just multiplying the two numbers. I've embedded a [GodBolt]() page below with this code on the left, and it'll show the assembly output on the right. At the top you should be able to see a box to type compiler options, go ahead and put in `-O`. You should see a huge long mess of assembly that used multiple `imul` (multiply) instructions be reduced to 3 lines of assembly with only a single multiply. The compiler has figured out that what we were doing was a stupid multiply and optimized it for us.

<iframe width="100%" height="500px" src="https://godbolt.org/e#g:!((g:!((g:!((h:codeEditor,i:(fontScale:14,j:1,lang:c%2B%2B,selection:(endColumn:2,endLineNumber:5,positionColumn:2,positionLineNumber:5,selectionStartColumn:2,selectionStartLineNumber:5,startColumn:2,startLineNumber:5),source:'//+Type+your+code+here,+or+load+an+example.%0Aint+mult(int+n,+int+m)%7B%0A++++char+a%5Bm%5D%5Bn%5D%3B%0A++++return(sizeof(a))%3B%0A%7D'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((h:compiler,i:(compiler:g102,filters:(b:'0',binary:'1',commentOnly:'0',demangle:'0',directives:'0',execute:'1',intel:'0',libraryCode:'1',trim:'1'),fontScale:14,j:1,lang:c%2B%2B,libs:!(),options:'',selection:(endColumn:1,endLineNumber:1,positionColumn:1,positionLineNumber:1,selectionStartColumn:1,selectionStartLineNumber:1,startColumn:1,startLineNumber:1),source:1),l:'5',n:'0',o:'x86-64+gcc+10.2+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0')),l:'2',n:'0',o:'',t:'0')),version:4"></iframe>

Here there's no difference between `-O` and `O3`, but with more complex code there often is. Just keep in mind that this is a trade off, there is the upfront cost of a longer compile time.

### -march, -mtune, -flto, -msse4.2, -mavx, -mavx2

### -ansi

## Stripping (Not like that, perv)

[Strip command [Wikipedia]](https://en.wikipedia.org/wiki/Strip_(Unix))

## Understanding compilers and common compiler flags

[How expensive is integer-overflow trapping in C++?](https://lemire.me/blog/2020/09/23/how-expensive-is-integer-overflow-trapping-in-c/) / [Hacker News Comments on article](https://news.ycombinator.com/item?id=24575780)

[How the cpython compiler works](https://tenthousandmeters.com/blog/python-behind-the-scenes-2-how-the-cpython-compiler-works/)

[CS 6120: Advanced Compilers: The Self-Guided Online Course](https://www.cs.cornell.edu/courses/cs6120/2020fa/self-guided/)

[TODO]

Making a compiler and assembler, DIY language eso-lang style

## Making an interpreted language

## Making a compiled language

https://medium.freecodecamp.org/the-programming-language-pipeline-91d3f449c919

## Garbage Collection

[Garbage Collection Algorithms](http://dmitrysoshnikov.com/courses/essentials-of-garbage-collectors/) + [Writing a memory allocator](http://dmitrysoshnikov.com/compilers/writing-a-memory-allocator/) 

## Continued Reading

At this point I highly recommend '[The Art of Exploitation](https://nostarch.com/hacking2.htm)' by Jon Erickson

## Fun things

[Malloc Geiger (Github)](https://github.com/laserallan/malloc_geiger)

