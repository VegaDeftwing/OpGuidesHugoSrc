# Appendix 3 - Programming Languages

<!-- https://renato.athaydes.com/posts/unison-revolution.html , https://github.com/betaveros/noulith, https://github.com/esotericist/frf, https://cyberscript.dev, https://github.com/Vexu/bog, https://github.com/m-ender/hexagony (https://hexagony.net), https://www.roc-lang.org, https://koka-lang.github.io/koka/doc/index.html, https://ianthehenry.com/posts/why-janet/, futhark, This page really needs functional - Haskell, Lisp, etc. + Matlab, Dart, F#, R, Scheme Powershell, Smalltalk, Swift, scala, GLSL/HLSL, V, VHDL, Verilog, https://github.com/rxi/fe  -->

```c
for (🥚 = 0; 🥚 < 🐔; 🥚++){
   hatch(🥚);
}
```

Why hello,

If you've found this page, it's likely your curiosity is getting the better of you and you're killing time gawking at the weird syntax and features of a variety of languages. I know I have been guilty of doing so. 

This page is meant to give you a taste, not a full list. There's so many niche languages, [esolangs](https://esolangs.org/wiki/Main_Page), and outright jokes gone to far (like [emojicode](https://www.emojicode.org)) to possibly make this list exhaustive.

This also means it's quite possible your favorite language isn't here. Depending on how esoteric it is, it may not even be on [pldb](https://pldb.com/lists/languages.html) or [Awesome Programming Languages (GitHub)](https://github.com/ChessMax/awesome-programming-languages), in which case, congrats, you've truly found something strange.

Still though, you may be here just to get a better idea of the answer to the questions all people learning their first language begin to wonder: 

1. What do the other languages do that the one I'm using doesn't?
2. Why have all these languages instead of one do-it-all language everyone uses

Well, those are big questions, and hopefully as you browse this page you'll begin to understand, but in general the answers are

1. Nothing - but it can make some things a whole hell of a lot easier.
2. Different logical representations making solving different problems easier

Before we look at each language though I want to get your brain in the right receptive place, so please enjoy these links first:

* https://esoteric.codes
* [Object Oriented Programming is Bad (Brian Will)](https://www.youtube.com/watch?v=QM1iUe6IofM)
* [0-based vs. 1-based indexing (Hisham Hm)](https://hisham.hm/2021/01/18/again-on-0-based-vs-1-based-indexing/)
* [Stop Writing Dead Programs (YouTube)](https://www.youtube.com/watch?v=8Ab3ArE8W3s)
* https://cs.lmu.edu/~ray/notes/syntaxdesign/
* [Microfeatures I'd like to see in more languages (Hillel Wayne)](https://buttondown.email/hillelwayne/archive/microfeatures-id-like-to-see-in-more-languages/)

Now let's actually see what each language has to offer.

## Low Level

In the intro to programming chapters we looked at some of the differences between low level and high level languages, and how at the very bottom of the layers of abstraction there's assembly, so let's start there.

### Assembly

```asm
.LC0:
  .ascii "hello world!\015\000"
main:
  push {r3, lr}
  movw r0, #:lower16:.LC0
  movt r0, #:upper16:.LC0
  bl puts
  movs r0, #0
  pop {r3, pc}
```



Assembly code is specific to an [Instruction Set Architecture](https://en.wikipedia.org/wiki/Instruction_set_architecture) or ISA, that means it is written for a specific family of processors. Most laptops and desktops today run on [x86_64](https://en.wikipedia.org/wiki/X86-64) processors made by either AMD or Intel, while most tablets and phones use processors that use [ARM](https://en.wikipedia.org/wiki/ARM_architecture). Of course, there are many, many other instruction sets than these two. For example, [6502](https://en.wikipedia.org/wiki/MOS_Technology_6502) assembly is particularly easy to write, as it's from an era <a class="ptr">(1)</a> when programming at the assembly level was still common. On the other hand, [RISC-V](https://en.wikipedia.org/wiki/RISC-V) is a newer ISA that has been gaining a lot of traction due to its open nature. 

Knowing ASM can allow you to do some black magic, like pushing out FizzBuzz at [57.2GiB/s](https://codegolf.stackexchange.com/questions/215216/high-throughput-fizz-buzz/236630#236630) or may even be required to mundane tasks on micro controllers.

There's only really a handful of instruction sets you're likely to encounter today though, and of them the two most common by far are x86_64 and ARM. x86_64 (often, incorrectly, called just x86 - though I'll do that often here as well) is very, very annoying to read because it is a CISC (Complex Instruction Set Computer) design. Complex is no joke, while the most complex variant of ARM has ~60 instructions (many of which won't be available on all processors), x86_64 has (due to a myriad of extensions onto the instruction set) has roughly 1,000 depending on how you count them.

This could derail into a whole conversation about ISA, but you should really go read [TODO] for that.

[x86 Assembly: Hello World! (YouTube, John Hammond)](https://www.youtube.com/watch?v=HgEGAaYdABA)

[Say hello to x86_64 Assembly 1-8](https://0xax.github.io/archive/) by 0xAX 

[Let's Learn x86-64 Assembly! Part 0 - Setup and First Steps](https://gpfault.net/posts/asm-tut-0.txt.html)

[Part 1 - Metaprogramming in Flat Assembler](https://gpfault.net/posts/asm-tut-1.txt.html) 

[Part 2 - We're Writing a Virtual Machine](https://gpfault.net/posts/asm-tut-2.txt.html)

[Linux-kernal-module-cheat [Github]](https://github.com/cirosantilli/linux-kernel-module-cheat#userland-assembly) has a nice guide to ASM

['Furby' Source Code](https://github.com/gnomon-/furby-source) is in 6502 assembly

[TODO] - a lot, talk about the varieties and differences of C and C++ and C# and why thery're good and bad, etc.

### C

```c
#include <stdio.h>

int main(void){
	printf("Hello World!\r\n");
}
```

The next stop is the language that simultaneously gets the "most used by embedded" and "most hated for embedded" awards.

You've already seen C if you followed along with the intro to programming chapters, and really, by following those you've seen most of what it has to offer. It's a pretty minimalist language with a small standard library. It's both beautiful and immensely frustrating in its simplicity, mostly because of just how much it lacks in terms of safety, code organization systems, and portability.

You see, for as much as everyone likes to shout from the rooftops that C supports any and all processors ever made, they're only half telling the truth. The problem is, [C isn't a programming language anymore (Aria Beingessner)](https://faultlore.com/blah/c-isnt-a-language/).

As that article argues, it's turned into more of a "*lingua franca* of programming" but I'd also argue it's not even **one** language anymore, because each compiler (GCC, Clang, MSVC, TCC, IAR, ...) all support different prepossessing macros and language revisions, be it ANSI C, C89, C99, C11, or C23, witch each compiler and C version having a non insignificant amount of compatibility fusterclucks between one another.

Still, it's a language that pretty much every programmer should know and know well and setting the above aside, it does still port to most platforms with lower effort than anything else.

So you really should dive into it. Learn pointers, macros, include guards, bounds safe function variants, memory alignment issues, `asm()`, and all. It'll make you a better programmer.

Just, if you're going to write in C, at least unit test your code. If you do that - if you care - [C can be the safest option](https://blog.joren.ga/best-of-c#safety).

If you're really looking to make C easier to work with - albeit in a way that'll likely annoy others working on the code - [Cog](https://nedbatchelder.com/code/cog/) may come in handy.

### C++

```c++
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

If you want to increment C by one, you'd write C++.

C++ has a reputation for being overly complicated, throwing in everything and the kitchen sink worse than Python does, changing every 5 years, and being a little too flexible.

It has absolutely earned all of those criticisms. It's also one of the most commonly used programming languages exactly because of all of those things. If you like some of C's close-to-the-metal nature, but want a bit more functionality to be included so you're not always reinventing the wheel or fighting things to have some semblance of type safety, C++ is probably a good bet.

Just know that while it's possible to become a good C programmer than can read any C code and know what it's doing ([outside of intentionally obfuscated code](https://www.ioccc.org)), C++ is nearly a different language to each project which uses it. It's object oriented, it's heavier, and it still lets you shoot yourself in the foot, but now with a rube Goldberg machine filled with gunpowder instead of a pistol loaded with uninitialized memory.

If C is a desert, C++ is the Amazon. Both can be deadly and beautiful in their own ways.

If you're looking to learn C++, https://www.learncpp.com is a decent bet. https://arobenko.github.io/bare_metal_cpp/ may prove helpful too.

### C#

```c#
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}
```



[TODO]: Get someone else to write this

### Rust

```rust
fn main() {
    println!("Hello, world!");
}
```

> Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — enabling you to eliminate many classes of bugs at compile-time.

Basically, Rust doesn't let you screw up the №1 thing that causes bugs.

It enforces writing code that's safe (except when you specify you want to do something unsafe). It has a lot of other really nice features and makes using efficient data structures easy.

While I think Rust is great for desktop programs, for embedded, [When Zig is safer and faster than Rust](https://zackoverflow.dev/writing/unsafe-rust-vs-zig/) from ZackOverflow makes a good argument for why you may want to oxidize *everything* - especially if you're working on embedded hardware.

If you are working on desktop software though, I can not stress strong enough how much better of a choice Rust is than C or C++ for the vast majority of programs now.

If you'd like to learn Rust, I recommend [A half-hour to learn Rust](https://fasterthanli.me/blog/2020/a-half-hour-to-learn-rust/) as well as

- https://doc.rust-lang.org/book/foreword.html
- [Learning Rust the Dangerous Way (Cliff L. Biffle)](http://cliffle.com/p/dangerust/)
- [Rust Performance Book](https://nnethercote.github.io/perf-book/)
- [Rust Cheat Sheet](https://cheats.rs)
- [Python -> Rust guide - learning Rust when you know Python (Github)](https://www.mylomusic.net/octane)

Rust isn't a "new" language anymore, but it's certainly not as battle tested as C or C++, so to show the maturity, just check out https://www.redox-os.org/, a full OS written in Rust!

Also, it's worth noting Rust can be used to generate Web Assembly (more about that below). This means you can (in a roundabout way) use it on the Web. This isn't unique to Rust by any means, but Rust is heavily used for it and has good resources for doing so.

You may also want to check out [CXX](https://github.com/dtolnay/cxx) for C++ ⟷ Rust interop. If you're looking for some fun projects to get started in Rust, you may want to use [Nannou](https://nannou.cc/), a creative coding framework for Rust.

### Go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

The big claim to fame for go is its `go` keyword, which lets you do really easy threading. (https://gobyexample.com/goroutines). This has made it a favorite among those writing networking utilities and servers - just look at the list of programs that use it on its [Wikipedia page](https://en.wikipedia.org/wiki/Go_(programming_language)#Applications).

If you're wanting to learn go, you should go to https://tour.golang.org/welcome/1 as your first stop.

### Zig

```zig
const print = @import("std").debug.print;

pub fn main() void {
    print("Hello, world!\n", .{});
}
```

> A general-purpose programming language and toolchain for maintaining **robust**, **optimal**, and **reusable** software.
>
> https://ziglang.org/

If Rust is the next logical progression for the majority of C++ programmers, Zig is the future for C programmers. We need unsafe code to be productive, so we have it. We need good ways to write compile time code for our targets with limited memory, and so we have it. Zig fits very nicey as an upgrade to C without throwing everything and the kitchen sink in at the same time.

For a proficient C programmer,  the bullet points on the homepage should say everything you need to hear. Seriously, go read it: https://ziglang.org/

I highly recommend checking out each of these:

*  [A Half hour to Learn Zig (Github Gist)](https://gist.github.com/ityonemo/769532c2017ed9143f3571e5ac104e50)
* [Zig, The Small Language (Serge Zaitsev)](https://zserge.com/posts/zig-the-small-language/)
* [Zig: A programming language designed for robustness, optimality, and clarity – Andrew Kelley (YouTube)](https://www.youtube.com/watch?v=Z4oYSByyRak)

Additionally,

* [Writing a small ray tracer in Rust and Zig](https://nelari.us/post/raytracer_with_rust_and_zig/)
* [When Zig is safer and faster than Rust (Zachoverflow)](https://zackoverflow.dev/writing/unsafe-rust-vs-zig/)

are interesting reads.

Zig is also particularly nice to develop in, thanks to the [Zig Language Server](https://github.com/zigtools/zls/wiki/Installing-for-Visual-Studio-Code). If you try Zig, make sure to set it up.

### Odin

```Go
package main

import "core:fmt"

main :: proc() {
	fmt.println("Hellope!")
}
```

> Odin is a general-purpose programming language with distinct typing built for high performance, modern systems and data-oriented programming.
>
> Odin is the C alternative for the Joy of Programming
>
> https://odin-lang.org

https://graphitemaster.github.io/odin_review/

### Crystal

```crystal
puts "Hello World!"
```

Crystal's big thing is that it's similar to Ruby (a very fast to write language) that's compiled and so quite fast. Additionally, it makes some sane choices to check for common problems at compile time. It also has good C interop. Check it out at https://crystal-lang.org/.

It may not be well suited to every task due to how abstracted it can be, but for quick solutions with decent performance, it's a good option and fairly mature compared to other languages (Such as Nim) which aim to do similar things.

### D

```D
import std.stdio;

void main()
{
    writeln("Hello World!");
}
```



A lesser used competitor to C++ mostly. It's very syntactically similar. Might be worth looking at.

https://dlang.org



### Nim

```nim
echo("hello world")
```

> Nim is a statically typed compiled systems programming language. It combines successful concepts from mature languages like Python, Ada and Modula.
>
> https://nim-lang.org/

Further, Nim allows for easy 'metaprogramming' which basically means you can [TODO]

Nim's syntax is python-like-ish



### Red

```python
print "Hello World!"
```

To be honest, I'm not sure Red belongs in the low level category, as it can be run as a [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) language, but ╮(─▽─)╭.

I'm not sure I'd actually reach for this language for anything - it tries to do everything, instead of being good at one thing first. That's not necessarily a bad thing (see Python) but Red isn't super mature yet. Still, it has some net enough features that I think it's worth mentioning. From the home page:

> **Red** is a next-gen programming language, strongly inspired by [REBOL](http://rebol.com/). Main features are:
>
> [...]
>
> - Powerful **PEG [parser ](http://www.red-lang.org/2013/11/041-introducing-parse.html)**[DSL](http://www.red-lang.org/2013/11/041-introducing-parse.html) included
> - **Cross-platform native [GUI ](http://www.red-lang.org/2016/03/060-red-gui-system.html)**[system](http://www.red-lang.org/2016/03/060-red-gui-system.html), with a [UI DSL](http://doc.red-lang.org/gui/VID.html) and [drawing DSL](http://doc.red-lang.org/gui/Draw.html)
> - **Bridging** [to the JVM](https://github.com/red/red/blob/master/bridges/java/hello.red)

If you're interested, check out [Red's 'Getting Started' page](https://www.red-lang.org/p/getting-started.html).

### Haxe

```Haxe
class HelloWorld {
  static public function main():Void {
    trace("Hello World");
  }
}
```

> Haxe is an open source high-level strictly-typed programming language with a fast optimizing cross-compiler.
>
> https://haxe.org/



### Java
```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

{{< tip >}}This is Opinionated Guides, so let me be clear, I really, **really** hate Java. 

It's a language that didn't even become popular on its own merit, instead Sun Microsystem paid a [fuck ton](https://www.theregister.com/2003/06/09/sun_preps_500m_java_brand/) of money to push it- hence the **"3 Billion Devices Run Java"** Thing.

I'm hopeful (albeit probably naively) that Oracle (Which bought Java from Sun) making Java a mess of licensing as the 'main' Java Virtual Machine goes [paid (Read on Wikipedia)](https://en.wikipedia.org/wiki/Java_(programming_language)) and [suing Google](https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.) will be the nail in the coffin for education using it and that it will die out with time. See
[Criticism of Java (Wikipedia)](https://en.wikipedia.org/wiki/Criticism_of_Java)

So, frankly, I'm not even going to give Java an honest effort here. Use literally anything else.
{{< /tip >}} 

There are a few things you should know about Java only because at one point or another, it may become relevant.

* Java code compiles to "java bytecode" which runs on the "java virtual machine" (JVM).
  * This means (in theory) any platform with the JVM should be able to run Java programs with no incompatabilities.
* Java programs could once be made into "applets". That's dead now.
* Java source code is stored in .java files
* The compiled code becomes java bytecode in .class files
* These class files can be collected into a .jar, which is the final executable program *if* the user has a JVM installed.
* Sometimes, the .jars are wrapped into an executable which bundles the JVM
* Java used to be the goto for Android development, now Kotlin (see below) is better for that in most cases.
* Java Jars are often relatively easy to de-compile compared to other programs in complied languages

And, no, there's no connection between Java and Javascript.

### Kotlin
```kotlin
fun main(args : Array<String>) {
    println("Hello, World!")
}
```

https://jakewharton.com/shrinking-a-kotlin-binary/


### WebAssembly

> WebAssembly (abbreviated *Wasm*) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.
>
> https://webassembly.org/

While not technically a programming language, I wanted to bring it up and encourage you to look into it to be used instead of JavaScript for real projects. You can use a large portion of the languages mentioned above to write Webassembly.

Additionally, there are languages where WebAssembly is the primary target, such as https://www.assemblyscript.org, a TypeScript variant.

### Vult

[Vult Language Homepage](https://www.vult-dsp.com/vult-language)

"The Vult Language is a transcompiler to write high-performance DSP code"

## High Level

[TODO] probably going to need to break this out into its own chapter

### Python

[Cython](https://cython.org)

> **Cython** is an **optimizing static compiler** for both the **[Python](http://www.python.org/about/)** programming language and the extended Cython programming language (based on **Pyrex**). It makes writing C extensions for Python as easy as Python itself.

https://github.com/exaloop/codon

### JavaScript

Fine. I'll talk about JS. But, please. For the love of god, do not use this to make an Electron App.

Before going too far, I do want to mention that a chunk of my hatred for JS is solved using frameworks and that I totally acknowledge the utility of JS for making quick, often very cool, 'sketches'. The creative coding community is amazing. Further, JS, as much of a total dumpster fire as it is, is responsible for the Internet as it is today, whether that's a good thing [or not](http://motherfuckingwebsite.com/).

#### CoffeeScript

 https://coffeescript.org/

#### TypeScript

https://www.typescriptlang.org/

#### Frameworks

https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks

##### Angular

##### React

##### Vue

##### Node



### PHP

```html
<html>
<head>
<title>PHP Test</title>
</head>
<body>
<?php echo '<p>Hello World</p>'; ?>
</body>
</html>
```

PHP is a language focused on making websites with sever side logic (process on the server, instead of JS in the browser). While a large portion of the web has moved to Javascript frameworks PHP is still a good option for many tasks, and i[sn't very hard to read.](https://themsaid.com/go-with-php)

PHP as a language is hated on, a lot. This is mostly because of historical decisions to not use typing, but type hints have been added for a while and it's actually quite nice today. It's not many people's language of choice, but it works. Still, I wouldn't fully recommend it. As mentioned above, Go is doing quite well in the networking space due to it's ease of parallelism and abundant libraries for tasks that would've classically been PHP's job.

Another option is Hack,

### Hack

```php
use namespace HH\Lib\IO;

<<__EntryPoint>>
async function main(): Awaitable<void> {
  await IO\request_output()->writeAllAsync("Hello World!\n");
}
```

Hack, https://hacklang.org/, is Facebook's (🤮) answer to PHP. They needed something safer, salable, and designed in this century. It's syntax is PHP like, but it has easy async like Go. It also includes more intelligent ways of writing UI code to avoid XSS & Injection attacks. 



### Ruby

> A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
>
> https://www.ruby-lang.org/en/

### Perl

> "Perl" is a family of languages, "Raku" (formerly known as "Perl 6") is part of the family, but it is a separate language which has its own development team.

... I'm not a big Perl fan, but I have to mention it only because of how bizzare it is that they used the [⚛ character for atomics ](https://p6weekly.wordpress.com/2017/08/21/2017-34-going-atomic/). (Though that, among other choices, lead to it being split into another language, [raku](https://www.raku.org) )

### Scallop

"Scallop is a neurosymbolic programming language, solver, and framework. Based on Datalog, it supports discrete, probabilistic, and differentiable modes of reasoning."

Basically, it's really nice for AI/CV/probabilistic computations

## For the Skript Kidd3s

{{< quote "https://en.wikipedia.org/wiki/Script_kiddie" >}}

In programming and hacking cultures, a **script kiddie**, **skiddie**, or **skid** is an unskilled individual who uses [scripts](https://en.wikipedia.org/wiki/Scripting_language) or programs developed by others to attack computer systems and networks and [deface websites](https://en.wikipedia.org/wiki/Website_defacement), such as a [web shell](https://en.wikipedia.org/wiki/Web_shell). 

It is generally assumed that most script kiddies are juveniles who lack the ability to write sophisticated programs or exploits on their own and that their objective is to try to impress their friends or gain credit in computer-enthusiast communities. However, the term does not relate to the actual age of the participant. 

The term is considered to be derogatory.

{{< /quote >}}

But, really, some absolutely incredible code has been written in the following languages. They more than serve their purpose and are generally some of the fastest "I just need a quick and dirty solution" options out there. Not everything needs a blazing fast hand optimized C implementation, and code that's really just for personal use, to accomplish a one-off task, or that runs inside a bigger program (3D modeling software like Blender, Video editing software like Premier, Game development editors, etc.)  should probably be easy to read and modify quickly. Rapid prototyping certainly has its place.

Just don't think you should use these to write efficient, safe code.

### LUA

#### MoonScript

### AHK

https://github.com/phil294/AHK_X11

### Tasker (Android)

### CMD.exe

### Bash, ZSH, Fish, Xonsh, Elvish, wut?

### Node-Red

### n8n



## Is this even Programming anymore?

### Pure-Data

### vvvv

### tooll.io

### ORCΑ



## Esolangs, the hole goes deeper

{{< quote "[Wikipedia - Esoteric Programming Languages](https://en.wikipedia.org/wiki/Esoteric_programming_language)" >}}

An esoteric programming language (sometimes shortened to esolang) is a programming language designed to test the boundaries of computer programming language design, as a proof of concept, as software art, as a hacking interface to another language (particularly functional programming or procedural programming languages), or as a joke.

{{< /quote >}}

---

[Brainfuck Designer](https://antfs10.itch.io/brainfuck-designer)

As a quick tour of esolangs, here are some of my favorites:

{{< columns >}}

* [Piet](https://www.dangermouse.net/esoteric/piet.html)

![](/eng/piethw.png)

> Hello World implemented in Piet ([Source](https://commons.wikimedia.org/wiki/File:Hello_world_piet.png))

<--->

* [Puddlelang](https://puddledockgames.itch.io/puddlelang)
* [Blancmange](https://github.com/Welcome-To-Robins-Repo/blancmange)
* [RETURN](https://github.com/molarmanful/RETURN)
* [Moonstroke - 3d](https://github.com/Moonstroke/3d/)
* [Nandlang](https://github.com/Jellonator/Nandlang)
* [bitman](https://github.com/molarmanful/bitman)
* [SendStuff](https://esolangs.org/wiki/SendStuff) (unimplemented)
* [PowerPoint is Turing Complete](https://www.andrew.cmu.edu/user/twildenh/PowerPointTM/Paper.pdf)

{{< /columns >}}

{{< columns3 >}}

* [Spiral](https://esolangs.org/wiki/Spiral)

```
0@v*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v
*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^
v
^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v=
***^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^
*
**********v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^##
*^v*^v*^v*^v*^v*^v*^v*^v*^v#######################
v
^*v^*v^*v^**************v^*v^*v^*v^*v^*v^**********
#########^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v*^v****
#
###############v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*v^*
                         v*^v*^v*^v**************^v
 ====               X    @
 i:vX==:====     u@vX=@v i!  ==XX  ===v^==
    X vs.vuv     @===        s=vv=X=$v=  v
                             =X     X =  #
                                    ===@v@X
```

> ROT13 implemented in Spiral

<--->

* [Tree](https://esolangs.org/wiki/Tree)

```
      ^
    ^^|^^
   ^^\|/^^
   H^ |/^^^
     \| e
      |/
   ol~|
     \|
  , 32|
   \/ |
    \ |  W
 l   \| /
 \  d |/  o
  \/ !|r /  
   \/ |\/
    \ |/
     \|
```

> Hello World implemented in Tree

{{< /columns3 >}}

* [Ziim](https://esolangs.org/wiki/Ziim)

<img src="/eng/ziimhw.png" style="zoom:50%;" />

> Hello World implemented in Ziim

---

If you're looking to learn more, check out [Awesome Esolangs (Github)](https://github.com/angrykoala/awesome-esolangs) and https://esolangs.org. Also, the [Esoteric IDE](https://github.com/Timwi/EsotericIDE/) may be of use.

## The Old Guard

### Forth

```forth
: hello   ." Hello World!" CR ;
```



### Cobol

```cobol
000100  IDENTIFICATION DIVISION. 
000200  PROGRAM-ID. MFPROG1.     
000300  PROCEDURE DIVISION.      
000400  MAIN-PARA.               
000500      DISPLAY 'HELLO WORLD'
000600      STOP RUN.
```

{{< attribution >}}From  [mainframebug.com](https://www.mainframebug.com/tuts/COBOL/module2/Top3COBOLsimpleProgram.php){{< /attribution >}}



### Fortran

```fortran
program hello
  ! This is a comment line; it is ignored by the compiler
  print *, 'Hello, World!'
end program hello
```



### Pascal

```groovy
program Hello;
begin
  writeln ('Hello, world.');
end.
```



### BASIC

```basic
10 PRINT "Hello World!"
20 GOTO 10
```



### Objective C



### APL



## Graphics Programming

look to {{< button relref="/Engineering/programming/shaders" >}}Chapter 19: Shaders + GpGPU{{< /button >}} for programming involving graphics, including node based shader editors, general purpose computation on the GPU, and more. As for languages, this includes, GLSL, HLSL, Futhark, and a few others. There are, many, many other graphics languages depending on the platform though.

## Functional Programming

Look at {{< button relref="/Engineering/programming/funcprog" >}}Chapter 21: (((())(()((()(())))))){{< /button >}} for Functional Programming. You'll probably want to look into Lisp, Haskell, and Futhark. There's a nice [tutorial for Haskell programming](http://learnyouahaskell.com/introduction) if you want to learn more.

## Database

Look at {{< button relref="/Engineering/networking/databases" >}}Chapter 39: Databases{{< /button >}} for information on Databases, including languages like SQL

<ol hidden id="footnotes">
    <li>Popular video game consoles and computers, such as the Atari 2600, Atari 8-bit family, Apple II, Nintendo Entertainment System, Commodore 64, Atari Lynx, BBC Micro and others, use the 6502 or variations of the basic design.</br>-from that same wikipedia article</li>
</ol>