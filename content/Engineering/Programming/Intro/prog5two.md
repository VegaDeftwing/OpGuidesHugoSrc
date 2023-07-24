# Chapter 10.5 - Leaning Two Languages At Once

<script>
    document.getElementById("codeMenu").open = true;
</script>

Back in the  {{< button relref="/Engineering/linux/hardware" >}}Into The Hardware{{< /button >}} section we looked at some of the inner workings of the CPU, and briefly looked into how the CPU only understands *machine code*, 1's and 0's that make up individual instructions. Now, there's absolutely no reason to ever think at that low of a level, the lowest you should ever care to look at, as mentioned there, is assembly. However, Assembly is still awful to write and read. While if you stare at the following for long enough you may be able to figure out what  what it does

```c
addi sp,sp,-32
sd s0,24(sp)
addi s0,sp,32
li a5,1
sw a5,-20(s0)
li a5,2
sw a5,-24(s0)
lw a4,-20(s0)
lw a5,-24(s0)
addw a5,a4,a5
sw a5,-28(s0)
lw a5,-28(s0)
mv a0,a5
ld s0,24(sp)
addi sp,sp,32
jr ra
```

even if you've never seen code before, it's pretty obvious that in this,

```c
int main(){
    int a = 1;
    int b = 2;
    int c = a + b;
    return c //note, this is a really bad way to get the number back
    // as it will appear as an error code, not actually print to the terminal
    // in a normal way
}
```

it just adds 1 and 2 and returns 3. Here, the later - written in the **C** programming language - is what was used to generate the former. Remember, the computer can only actually understand the 1's and 0's, so while going from assembly to those 1's and 0's is much more direct, it's useful to think at a higher level and instead program in C.

but even **C** doesn't make everything easy. That same code, in **python** is as dumb simple as this:

```python
a = 1
b = 2
c = a + b
print(c)
```

A large portion of programmers will never, ever see that first example (assembly code) because of all of its downsides (hard to read and write, only works on a given instruction set, etc.). Furthermore, some people will never use C because it's rather difficult to write complex programs with it. So then, why care?

Well, if you want to write fast, correct, code you have to know C, which is ironic, because C is a great language for writing slow, broken code because of just how bad it is about letting you shoot yourself in the foot, but, I digress.

 While for speed you could go look up some comparisons of C and Python and see that, as a very loose rule of thumb, the python will be about 10 times slower, I think writing *correct* code is more important to most people, especially since for *most* programs, the speed difference doesn't really matter on a modern computer. Later, you'll see this too is a bit of an odd argument, as it's comically easy to write security vulnerabilities into your C code on accident - clearly that's not correct. Instead, what I mean is that you can write code that's not incorrectly using types (Coming up in a bit) or just doing things in a way that's just really inefficient for the computer to do. More over, as Aria Beingessner argues, [C Isn't A Programming Language Anymore](https://gankra.github.io/blah/c-isnt-a-language/), it's really a sort of standard on which every other language is built, and it's expected that every other language works with it… and its long history of quirks. This isn't a good thing, but it's how things are.

This brings up a good question may new programmers have:

## Why are there multiple languages anyway?

A little while ago, I got asked

{{< quote "A friend that is really, really bad at programming despite having a CS degree" >}}
What would you say is the most widespread language to know for programming?</br></br>
Also what's your favorite to code in and if someone is trying to learn that language or a language in general from scratch, what are the best resources / academies / learning material to use for someone who has no experience? Or do you recommend any of these at all?

{{< /quote >}}

{{< smalltext >}}( Keep in mind this response is in context of knowing this guy already has a modicum of programming skill){{< /smalltext >}}

{{< speech big >}}
That's a tough question. It's largely application dependent. Like, if you're doing web, you have to use JavaScript. AI/ML? Python. Low level? C.

The best way to learn a language is to make something. Do projects.

Also, widespread ≠ good or even high paying. Less common languages tend to pay more.

My "favorite", again, depends on what I'm doing. If it's a quick script: Python. If it needs to be performant and low level, C. If I need absolutely reliability, performance, and low level but can get away with a size increase: Rust.

What you're missing, though is it's really usually not a choice. If you're working with microcontrollers, it's almost always going to be C (maybe C++). Unity? C#. Web? Js. You get the idea.

If you're looking for languages to learn to get broadly better at programming, I'd recommend Python, GLSL, Haskell (and futhark, which is similar), and Rust. Each has their own quirks and by getting good at those you'll be good at most.

But along with that, remember that programming is not about knowing a language. It's about knowing how to solve problems. If you can write code but can't use a debugger, benchmark and profile your code, test for memory issues, and integrate it with existing tools/software you're missing the point.

I think a good starting point for learning about that is to make modules for https://vcvrack.com . It uses C++ but to do it well you'll need to get used to doing debugging, optimizing code for performance, and using a 3rd party API.

{{< /speech >}}

As for this guide, the thing I want you to take away is that you *usually* don't get to pick the language, and that different languages serve different roles. With that out of the way, why the two we're looking at here?



{{< columns >}}

# C

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Super fast
- Works on everything, including microcontrollers
- Easy to do low level operations
- Extremely stable

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Must manage your own memory
* No object orientation
* Easy to make security issues
* Old - rarely gets new features

{{< /columns3 >}}

<--->

# Python

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Can use Object Orientation
- Huge standard library - don't need to import anything to use `print()`, built in functions like `reverse()`
- Lots of amazing 3rd party libraries
- Constantly improved, gaining great new features

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Very slow
* Can be awkward to juggle types with libraries
* Rapidly updating - old versions will eventually lose support

{{< /columns3 >}}

{{< /columns >}}

Though, you may be asking a more fundamental question of what makes a language different other than features and  speed? Well, it's not called a language for nothing: the answer is Syntax.

### Syntax

When you write a function in C, (which you'll see later) it looks a bit like this

```c
int doThing(int inputa, int inbutb){
	//do thing
	return(output);
}
```

in python, the same would be

```python
def do_thing(inputa, inputb):
	#do thing
	return output
```

Notice the word `def` and lack of braces (`{ ... }`) in the Python code? Also, while in the C code we do have the body of the function indented it's not necessary, while in the Python it's mandatory (and stands in for the lack of braces). These things are part of each language syntax. While both use English words as their base and may even use a few in the same way, (like `return`) what words, how they're ordered, if you need a `;` at the end of each line, and so on make up the syntax of the language. It's why you can't just copy code from one language into another and expect it to work, and why going from a higher level language like Python to C is hard, speaking of:

### Higher Level?

Generally, you'll see that languages are either called High level (like Python) or low level (like C) - though context does matter, as C is much higher level than Assembly. 

This "level" isn't in regards to difficulty but rather in terms of *abstraction*, which, to simplify greatly, the higher the level of abstraction the less the programmer has to worry about how the underlying program actually works, just that it *does* work. For example, in C, there's no special type for a string (like "Hello") instead, you need to make an array of characters and set a max size for it ahead of time, because this is how the hardware is going to see it anyway. Meanwhile, in python, strings are just naturally a thing, and you can add more characters onto one as much as you like. These abstractions help the programmer write code faster; however, they come at a cost of speed and control.

### What about other languages?

Oh boy. There's a nearly endless amount, each with pro and cons and times when they're the best option. Want to make something interactive on a website? You probably want JavaScript. Working in engineering and need to do some math on signals? Matlab ({{< smalltext >}}While I really dislike it{{< /smalltext >}}) is a good bet. The reason I'm starting you with Python and C is because Python is really easy to learn and actually used a lot, while C is and always will be used for low level programming (even if it sucks, which it does.) and the syntax is similar to many, many other languages.

### How do I choose which to use?

For anything but trivial programs, the choice is usually made for you before you start. If you're doing AI/ML stuff and want to use Tensorflow, you're stuck in Python (or C++, though that's uncommon). If you're writing code a small embedded system, you're probably stuck with C or maybe C++. If you're making a game in Unity, you're pretty much stuck with C#. If you're doing web development, you're probably going to be using JavaScript. Doing work on an ancient program for government/banking, it was probably written in Fortran or Cobol, so you're now stuck with Fortran or Cobol. 

Now, there are some exceptions to this. If you're starting on a project that's pretty weird in the first place and wanting to do things from scratch (like making your own game engine) then of course you can choose whatever you like. Some will definitely make more sense than others, though, and you'll come to recognize these choices as you gain experience.

There are also times you can mix languages or use one language to generate another. For example, if you really wanted to you could write a python library in C and do basically everything in there, only really using python as the "glue logic" to hold everything together. Or, maybe you need to process a ton of data in a way that you can make really fast by writing massively parallel code (something we'll explore much later, in both the {{< button relref="/Engineering/Programming/multithread" >}}Multithreading{{< /button >}} and {{< button relref="/Engineering/Programming/shaders" >}}GPU Computation{{< /button >}} chapters), then maybe you'll want to use [Futhark](https://futhark-lang.org) to write code that will generate C or python code for you.

There's also some situations where you will literally mix one language into another, like putting blocks of assembly code into C programs, sending multiple SQL queries to a database, or using regular expressions to match text to a pattern. (Don't worry if you don't know what any of that means!)

## Why will knowing C help me write good code?

If, using C, you ask your computer, "hey, what's 1 + 0.9999999" you'd really like to think "It's a computer, so of course it's "1.9999999", but, as you may have guessed from the setup, if you ask it in the most obvious way to write that code,

```c
int main(){
    float a = 1;
    float b = 0.9999999;
    float c = a + b;
    printf("%f",c);
    return 0;
}
```

Then the answer is **2.000000**. 

If we ask the same of python, just running `1 + 0.9999999`, we get 1.9999999000000002

In the same vein, what if we ask to add to numbers, like so:

```c
int main(){
    uint8_t a = 200;
    uint8_t b = 100;
    uint8_t c = a + b;
    printf("%d",c);
    return 0;
}
```

the answer is actually **44**.

Finally, what if we ask the computer something weird like, "is A equal to 65?"

```c
int main(){
    char a = 'A';
    int b = 65;
    if(a == b){
        printf("A is 65");
    } else{
        printf("A is not 65");
    }
    return 0;
}
```

Then, wait, what? The output is **"A is 65"**!

All of the examples have to do with something called *types*. That's what we'll dive into next, and they're much more obvious in C than in Python.

