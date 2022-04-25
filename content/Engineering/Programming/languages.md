# Chapter 13 - Programming Languages

```
for (🥚 = 1; 🥚 < 🐔; 🥚++){
   //whatever
}
```

Hello nerds,

Before you get on my case, I know this isn't a complete list, so it's possible your favorite language isn't on it. Hell, a complete list can't even really exist. Still, there are a lot of cool languages I didn't put here, so if you're looking for some weird but not *incredibly weird* languages see [Awesome Programming Languages (GitHub)](https://github.com/ChessMax/awesome-programming-languages), though note even it doesn't include the obvious - like C and Java.

[TODO] talk about to why there are so many, pros & cons per domain, etc

https://esoteric.codes

[Why OO Sucks (Joe Armstrong)](http://harmful.cat-v.org/software/OO_programming/why_oo_sucks)

[0-based vs. 1-based indexing (Hisham Hm)](https://hisham.hm/2021/01/18/again-on-0-based-vs-1-based-indexing/)

## Low Level

### C, C++, C#, ????

[TODO] - a lot, talk about the varieties and differences of C and C++ and C# and why thery're good and bad, etc.

[Best-of-C](https://blog.joren.ga/programming/best-of-c)

### Assembly

Assembly code is specific to an [Instruction Set Architecture](https://en.wikipedia.org/wiki/Instruction_set_architecture) or ISA, that means it is written for a specific family of processors. Most laptops and desktops today run on [x86_64](https://en.wikipedia.org/wiki/X86-64) processors made by either AMD or Intel, while most tablets and phones use processors that use [ARM](https://en.wikipedia.org/wiki/ARM_architecture). Of course, there are many, many other instruction sets than these two. For example, [6502](https://en.wikipedia.org/wiki/MOS_Technology_6502) assembly is particularly easy to write as it's from an era <a class="ptr">(1)</a> when programming at the assembly level was still common. On the other hand, [RISC-V](https://en.wikipedia.org/wiki/RISC-V) is a newer ISA that has been gaining a lot of traction due to it's open nature. Knowing ASM can allow you to do some black magic, like pushing out FizzBuzz at [57.2GiB/s](https://codegolf.stackexchange.com/questions/215216/high-throughput-fizz-buzz/236630#236630).

#### x86 ASM:

[x86 Assembly: Hello World! (YouTube, John Hammond)](https://www.youtube.com/watch?v=HgEGAaYdABA)



[Say hello to x86_64 Assembly 1-8](https://0xax.github.io/archive/) by 0xAX 

or

[Let's Learn x86-64 Assembly! Part 0 - Setup and First Steps](https://gpfault.net/posts/asm-tut-0.txt.html)

[Part 1 - Metaprogramming in Flat Assembler](https://gpfault.net/posts/asm-tut-1.txt.html) 

[Part 2 - We're Writing a Virtual Machine](https://gpfault.net/posts/asm-tut-2.txt.html)

or for the very adventurous

[Linux-kernal-module-cheat [Github]](https://github.com/cirosantilli/linux-kernel-module-cheat#userland-assembly), has a nice guide to asm

#### 6502

['Furby' Source Code](https://github.com/gnomon-/furby-source)

### Rust

> Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — enabling you to eliminate many classes of bugs at compile-time.

Basically, Rust doesn't let you screw up. It enforces writing code that's safe (except when you specify you want to do something unsafe). It has a lot of other really nice features and makes using efficient data structures easy. Another really nifty thing about Rust is that it has a sort of at compile time garbage collection of sorts, for lack of a better way to put it. Read more on that [here](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#memory-and-allocation).

I really recommend [A half-hour to learn Rust](https://fasterthanli.me/blog/2020/a-half-hour-to-learn-rust/) 

[Nannou](https://nannou.cc/), is a creative coding framework for Rust that's pretty nifty too.

To show the maturity, just check out https://www.redox-os.org/, a full OS written in Rust!

Also, it's worth noting Rust can be used to generate Web Assembly (more about that below)

Other sources to lean rust:

- https://doc.rust-lang.org/book/foreword.html
- [Learning Rust the Dangerous Way (Cliff L. Biffle)](http://cliffle.com/p/dangerust/)
- [Rust Performance Book](https://nnethercote.github.io/perf-book/)
- [Rust Cheat Sheet](https://cheats.rs)

You may also want to check out [CXX](https://github.com/dtolnay/cxx) for C++<-> Rust interop

### Go

> Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.

The big claim to fame for go is, well `go`, which let's you do really easy threading. (https://gobyexample.com/goroutines)

Other sources to learn Go:

- https://tour.golang.org/welcome/1



### Zig

> A general-purpose programming language and toolchain for maintaining **robust**, **optimal**, and **reusable** software.
>
> https://ziglang.org/

[Zig: A programming language designed for robustness, optimality, and clarity – Andrew Kelley (YouTube)](https://www.youtube.com/watch?v=Z4oYSByyRak)

[Writing a small ray tracer in Rust and Zig](https://nelari.us/post/raytracer_with_rust_and_zig/)

[A Half hour to Learn Zig (Github Gist)](https://gist.github.com/ityonemo/769532c2017ed9143f3571e5ac104e50)

### Crystal

Crystal's big thing is a Ruby (a very fast to write language) that's compiled and fast. From the home page:

```ruby
# A very basic HTTP server
require "http/server"

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello world, got #{context.request.path}!"
end

puts "Listening on http://127.0.0.1:8080"
server.listen(8080)
```

Seriously check it out at https://crystal-lang.org/



### D

A lesser used competitor to C++ mostly. It's very syntactically similar. Might be worth looking at.

https://dlang.org



### Nim

> Nim is a statically typed compiled systems programming language. It combines successful concepts from mature languages like Python, Ada and Modula.
>
> https://nim-lang.org/

Further, Nim allows for easy 'metaprogramming' which basically means you can [TODO]

Nim's syntax is python-like-ish



### Red

To be honest, I'm not sure Red belongs in the low level category, as it can be ran as a JIT language. 

> **Red** is a next-gen programming language, strongly inspired by [REBOL](http://rebol.com/). Main features are:
>
> 
>
> - **Human-friendly** [syntax](https://pointillistic.com/ren/)
> - **[Homoiconic](http://en.wikipedia.org/wiki/Homoiconicity)** (Red is its own meta-language and own **[data-format](http://www.rebol.com/rebolsteps.html)**)
> - **Functional**, imperative, **[reactive](http://www.red-lang.org/2016/06/061-reactive-programming.html)** and **symbolic** programming
> - **Prototype**-based object support
> - **Gradual and multi-**typing
> - **[Macros](http://www.red-lang.org/2016/12/entering-world-of-macros.html)** system
> - **Rich** set of built-in datatypes (50+)
> - Both **statically** and **JIT**-**compiled** to native code
> - **Cross-compilation** [done](https://github.com/red/red/blob/master/usage.txt) [right](https://github.com/red/red/blob/master/system/config.r)
> - Produces executables of **less than 1MB**, with **no dependencies**
> - **Concurrency** and **parallelism** strong support (actors, parallel collections)
> - Low-level **system programming** abilities through the built-in Red/System [DSL](http://en.wikipedia.org/wiki/Domain-specific_language)
> - Powerful **PEG [parser ](http://www.red-lang.org/2013/11/041-introducing-parse.html)**[DSL](http://www.red-lang.org/2013/11/041-introducing-parse.html) included
> - **Cross-platform native [GUI ](http://www.red-lang.org/2016/03/060-red-gui-system.html)**[system](http://www.red-lang.org/2016/03/060-red-gui-system.html), with a [UI DSL](http://doc.red-lang.org/gui/VID.html) and [drawing DSL](http://doc.red-lang.org/gui/Draw.html)
> - **Bridging** [to the JVM](https://github.com/red/red/blob/master/bridges/java/hello.red)
> - High-level **scripting** and [**REPL**](http://en.wikipedia.org/wiki/Read-eval-print_loop) console included
> - Visual Studio Code **[plugin](https://marketplace.visualstudio.com/items?itemName=red-auto.red)**, with many helpful features
> - Highly **[embeddable](http://www.red-lang.org/2017/03/062-libred-and-macros.html)**
> - **Low** memory footprint, **garbage collected**
> - **[Single-file](http://www.red-lang.org/p/download.html)** (~1MB) contains whole toolchain, full standard library and REPL.
> - **No install, no setup**
> - **Fun** guaranteed!
>
> https://www.red-lang.org/p/about.html

If you're interested, check out [Red's 'Getting Started' page](https://www.red-lang.org/p/getting-started.html).



### Haxe

> Haxe is an open source high-level strictly-typed programming language with a fast optimizing cross-compiler.
>
> https://haxe.org/



### Java & Kotlin

!> This is Opinionated Guides, so let me be clear, I really, **really** hate Java. It's a langage that didn't even become popular on it's own merit, instead Sun Microsystem paid a [fuck ton](https://www.theregister.com/2003/06/09/sun_preps_500m_java_brand/) of money to push it- hence the **"3 Billion Devices Run Java"** Thing. I'm hopeful (albeit probably naively) that Oracle (Which bought Java from Sun) making Java a mess of licencesing as the 'main' Java Virtual Machine goes [paid (Read on Wikipedia)](https://en.wikipedia.org/wiki/Java_(programming_language)) and [suing Google](https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.) will be the nail in the cofin for education using it and that it will die out with time.
[Criticism of Java (Wikipedia)](https://en.wikipedia.org/wiki/Criticism_of_Java)

don't.
but, here's why not to use Java:

https://jakewharton.com/shrinking-a-kotlin-binary/





### WebAssembly

> WebAssembly (abbreviated *Wasm*) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.
>
> https://webassembly.org/

While not technically a programming language, I wanted to bring it up and encourage you look into it to be used instead of JavaScript for real projects. 

https://www.assemblyscript.org is a TypeScript varient that can generate Web asm.

https://webassembly.studio

### Vult

[Vult Language Homepage](https://www.vult-dsp.com/vult-language)

"The Vult Language is a transcompiler to write high-performance DSP code"



### Call for Contribution

If I missed a language you think I should have mentioned or would like to write a nice guide to your language of choice to be included in this Opinionated Guide please submit a pull request. I'd love to expand the Rust, Go, and Zig sections significantly!

---

## High Level

[TODO] probably going to need to break this out into it's own chapter

### Python

[Cython](https://cython.org)

> **Cython** is an **optimising static compiler** for both the **[Python](http://www.python.org/about/)** programming language and the extended Cython programming language (based on **Pyrex**). It makes writing C extensions for Python as easy as Python itself.

### JavaScript

Fine. I'll talk about JS. But, please. For the love of god do not use this to make an Electron App.

Before going to far, I do want to mention that a chunk of my hatred for JS is solved using frameworks and that I totally acknowledge the utility of JS for making quick, often very cool, 'sketches'. The creative coding community is amazing. Further, JS, as much of a total dumpster fire as it is, is responsible for the Internet as it is today whether thats a good thing [or not](http://motherfuckingwebsite.com/).

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

don't.
but, here's why not to use PHP:
If you must, you might want to check out Hack: https://hacklang.org/



### Ruby

> A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
>
> https://www.ruby-lang.org/en/

### Scallop

"Scallop is a neurosymbolic programming language, solver, and framework. Based on Datalog, it supports discrete, probabilistic, and differentiable modes of reasoning."

Basically, it's really nice for AI/CV/probabiltic computations

## For the Skript Kidd3s

> In programming and hacking cultures, a **script kiddie**, **skiddie**, or **skid** is an unskilled individual who uses [scripts](https://en.wikipedia.org/wiki/Scripting_language) or programs developed by others to attack computer systems and networks and [deface websites](https://en.wikipedia.org/wiki/Website_defacement), such as a [web shell](https://en.wikipedia.org/wiki/Web_shell). It is generally assumed that most script kiddies are juveniles who lack the ability to write sophisticated programs or exploits on their own and that their objective is to try to impress their friends or gain credit in computer-enthusiast communities. However, the term does not relate to the actual age of the participant. The term is considered to be derogatory.
>
> from https://en.wikipedia.org/wiki/Script_kiddie

But, really, some absolutely incredible code has been written in the following languages. They more than serve their purpose and are generally some of the fastest "I just need a quick and dirty solution" options out there. Not everything needs a blazing fast hand optimized C implementation, and code that's really just for personal use, to acomplish a one-off task, or that runs inside a bigger program (3D modeling software like Blender, Video editing software like Premier, Game development editors, etc.)  should probably be easy to read and modify quickly. Rapid prototyping certainly has it's place.

Just don't think you should use these to write efficient, safe code.

### LUA

#### MoonScript

### AHK

### Tasker (Android)

### CMD.exe

### Bash, ZSH, Fish, Xonsh, wut?

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

> Hello World implimented in Piet ([Source](https://commons.wikimedia.org/wiki/File:Hello_world_piet.png))

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

> ROT13 implimented in Spiral

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

> Hello World implimented in Tree

{{< /columns3 >}}

* [Ziim](https://esolangs.org/wiki/Ziim)

<img src="/eng/ziimhw.png" style="zoom:50%;" />

> Hello World implimented in Ziim

---

If you're looking to learn more check out [Awesome Esolangs (Github)](https://github.com/angrykoala/awesome-esolangs) and https://esolangs.org. Also the [Esoteric IDE](https://github.com/Timwi/EsotericIDE/) may be of use.

## Graphics Programming

look to {{< button relref="/Engineering/programming/shaders" >}}Chapter 19: Shaders + GpGPU{{< /button >}} for programming involving graphics, including node based shader editors, general purpsose computation on the GPU, and more. As for lanugages, this includes, GLSL, HLSL, Futhark, and a few others. There are, many, many other graphics languages depending on the platfrom though.

## Functional Programming

Look at {{< button relref="/Engineering/programming/funcprog" >}}Chapter 21: (((())(()((()(())))))){{< /button >}} for Functional Programming. You'll probably want to look into Lisp, Haskell, and Futhark. There's a nice [tutorial for Haskell programming](http://learnyouahaskell.com/introduction) if you want to learn more.

## Database

Look at {{< button relref="/Engineering/networking/databases" >}}Chapter 39: Databases{{< /button >}} for information on Databases, including languages like SQL

<ol hidden id="footnotes">
    <li>Popular video game consoles and computers, such as the Atari 2600, Atari 8-bit family, Apple II, Nintendo Entertainment System, Commodore 64, Atari Lynx, BBC Micro and others, use the 6502 or variations of the basic design.</br>-from that same wikipedia article</li>
</ol>