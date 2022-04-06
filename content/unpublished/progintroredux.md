

# Chapter 10 - Let's Write Some Code

## What is Code anyway?

Code is mostly math. If you're anything like me, you probably just went **ugggggghhhhhhh**.

And I get it. But it's not that bad for two reasons:

1. The math isn't like what you're used to (in a good way!)
2. The math is actually *doing* something. You're not just getting a number to solve a problem, you're making a tool that can solve many problems or watching the math cause something to happen on screen.

On point **1.**, it's usually because code has lots of flow control and logic that you're probably not used to seeing in math.

Things like

{{< columns >}}

fake code for beginners:

```python
if x is equal to y:
	set x to x-1
else:
	set x to y
```

or

```python
while Alice and Bob are Connected:
    exchangeMessages(Alice,Bob)
```

<--->

slightly less fake code for people that have seen this before:

```python
if x == y:
	x = x-1
else:
	x = y
```

or

```python
while Alice.isConnectedTo(Bob):
    Alice.Message(Bob, "Hello")
```

{{< /columns >}}

And I know there's a certain subset of you that are looking at this thinking "Great, so it's math with even more weirdness - this looks really hard". *Usually*, it's actually not that bad. The majority of the time you'll just be incrementing a number by one (so, yunno', counting), checking if that number meets a condition, and passing messages around (When this thing happens, tell that thing to do this). While you'll occassionlly need to bust out some heavier math, it's more just solving logic puzzles. 

But, what about point **2.**? Take a look at this:

{{< columns >}}

<iframe src="https://tixy.land" width="100%em" height="500em"></iframe>

<--->

This is [tixy.land](https://tixy.land) -- Click on the moving dots to advanced though a lil' tutorial and some examples

Here in tixy land, you can try out some code. I don't want to lead you to anything. Just, type something. See what happens.

Even if you don't understand all the math or what the symbols mean I'm sure you can get a rough idea of what's going on.

You can usually make something cool by just entering a bunch of trig and making complex functions you don't truely understand. You're learning, that's fine, no shame. Here, for example, is one I made by wandering around trig functions, for example,  `asin((t/9*(i/32*sin(t/4))*y)%5)`

{{< /columns >}}

{{< speech big >}}

At risk of going off on a pretty big tangent, I reccomend checking out some tixyland-like sites

https://hexy.now.sh is inspired by tixy but has some extra interesting features, if you're having fun with tixy.land it's worth checking out.

https://doersino.github.io/tixyz/ is the same as tixy, but add's a 3rd dimension

https://play.ertdfgcvb.xyz/ is similar, but lets you write dramatically more advanced code

{{< /speech >}}

I do want to wrap back around to the math-y bit again real quick though, becuase I think a lot of people over estimate how hard it is to handle even the more complex math. As an example, let's estimate π. (You should never actually do this in code - just use a library which will provide a pre-computed value of pi anywhere you need it!) To do this, we need a formula. Now, I don't know about you, but I don't have a formula for estimating pi in my head, but look at [Wikipedia](https://en.wikipedia.org/wiki/Approximations_of_%CF%80) we can use Madhava's method, which looks like this:

{{< katex >}}\pi ={\sqrt {12}}\sum _{k=0}^{\infty }{\frac {(-3)^{-k}}{2k+1}}={\sqrt {12}}\sum _{k=0}^{\infty }{\frac {(-{\frac {1}{3}})^{k}}{2k+1}}={\sqrt {12}}\left({1 \over 1\cdot 3^{0}}-{1 \over 3\cdot 3^{1}}+{1 \over 5\cdot 3^{2}}-{1 \over 7\cdot 3^{3}}+\cdots \right){{< /katex >}}

and, yeah, I can see you thinking "WHAT THE FUCK!" when you see that, espically if you're a high schooler reading this and have never seen the {{< katex >}}\sum{{< /katex >}} symbol. So, let's break this down. That symbol just means to take the sum of some numbers, for example, {{< katex >}}\sum _{k=1}^{\infty }{k}{{< /katex >}} just means to add up numbers infinitely, starting at 1, so, 1+2+3+...;however, this symbol is really helpful if we want do something with each number, for exampe, {{< katex >}}\sum _{k=1}^{\infty }{\frac{1}{k}}{{< /katex >}} would mean that we want to do {{< katex >}}\frac{1}{1}+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+...{{< /katex >}}, so, now, hopefully, the first line makes a bit more sense. So, how would we put this into code?

Well, in programming we can do something called a `while` loop, this means to do something as long as a condition is true. If we want something to happen forever, we can just make that condition *always* be true, so, we can say, `while True:` to do something forever, over and over again. Then, we just need to make a variable to store what place where at (k) and a place to keep adding up the result. Finally, computers are really fast, so to make it so that we can see each step in the process, we need to slow it down by telling the program to sleep for a little while after each step. So, even if you don't know how to read code yet, you should be able to see how this is is the same math, just in code:

```python
import math
import time
# Calculate Pi using Madhava's method
k = 0 # start at 0
result = 0 # make a place to store our answer
while True:
    numerator = (-3)**(-k)
    denominator = ((2*k)+1)
    result += numerator/denominator 
    # The above is the same as result = result + (numerator/denominator)
    print(math.sqrt(12)*result)
    k += 1 # increment k
    time.sleep(.25) # wait before running again
```

And, if we run that code (written in the Python programming language):

```
╭─vega@lyrae ~  
╰─➤  python3 madhavapi.py
3.4641016151377544
3.0792014356780038
3.156181471569954
3.1378528915956805
3.1426047456630846
3.141308785462883
3.1416743126988376
3.141568715941784
3.141599773811506
3.1415905109380797
3.1415933045030813
3.1415924542876463
3.14159271502038
3.141592634547314
3.141592659521714
3.1415926517339976
3.1415926541725754
3.141592653406165
3.1415926536478262
3.1415926535714034
3.141592653595635
3.1415926535879337
3.1415926535903864
3.1415926535896035
3.141592653589854
3.141592653589774
3.1415926535897998
3.1415926535897913
3.141592653589794
3.1415926535897936
3.141592653589794
```

You can see it does indeed zero in on pi! It will repeat that last answer, 3.141592653589794, forever though as we've actually ran out of precision. The way this code was setup we're limited by the number of digits after the decimal point Python can represent without some work arounds. Also, that answer is actually *wrong* as the last digit is wrong. Without enough precision in the calculations, it never get's corrected. Still, we got 14 digits after the decimal correct, which for nearly everything you'd ever want to do is plenty. We'll talk about this more later though.

All of that said, at the start of this program, we ran `import math` to give us that square root function, well, it turns out the math library just has pi built in as a constant value (saved, so it doesn't need computed on the fly) so we could just use `math.pi`, which gives 3.141592653589793, so the last digit is correct. Should you ever need to use pi in your code, this is how you *should* do it.

Back to the point though, going from {{< katex >}}{\sqrt {12}}\sum _{k=0}^{\infty }{\frac {(-3)^{-k}}{2k+1}}{{< /katex >}} to code may look scary, but as you can see it's actually quite straight forward.



 <!-- [TODO] I want to start here instead of python, need to research which one to start with. I like pico-8, but it's paid and I'd like to keep OpGuides accessible. Tic-80 appears to be the most common otherwise? Pyxel looks good too though and would lead into python nicely? ... ╮(─▽─)╭

http://zenithsal.com/assets/documents/tic-80_cheatsheet.png

https://tic80.com , https://steemit.com/programming/@crypticwyrm/tic-80-learn-to-program-games-using-javascript-or-lua-on-a-fantasy-computer-simulating-old-school-game-programming - still $5 for pro.

https://medium.com/@G05P3L/fantasy-console-wars-a-guide-to-the-biggest-players-in-retrogamings-newest-trend-56bbe948474d

https://medium.com/@btco_code/writing-a-platformer-for-the-tic-80-virtual-console-6fa737abe476

https://paladin-t.github.io/b8/

https://github.com/kitao/pyxel

https://www.lexaloffle.com/pico-8.php (and https://www.lexaloffle.com/voxatron.php) -->



## Motivation

I would really like to teach you programming from the top down, starting with something easy like the Python programming langauge and then talk about how things *really* work using the C Programming language. The problem is, when looking at Python code you'll occassionly need to deal with things that simply don't make sense without the context of a lower level langage like C. Meanwhile, there's some things that C just... dosen't have. This means there's three options:

1. Learn C first, hate it, and think all programming is hard before learning python
2. Learn Python first and ocassionly be tripped up by concepts like pointers and types
3. Learn both at the same time, and risk confusion as we learn two languages at once.

I'm going to go with option 3. for this page, so, keep in mind as you read on that you'll be seeing two different languages.

This is to say, as hard as it is to *learn* to program, it's just as hard to teach it. Worse yet, learning these fundamental concepts is *really*. *fucking*. **boring**. So, while you're going to have to slog through it in a bit, I do want to at least give you some motivation first, something more exciting than calculating pi, so, I'd like to start with a Turtle. In a programming context, a Turtle is just a dot that you can move around the screen that leaves a trail.

Go ahead and go to [www.pythonsandbox.com/turtle](https://www.pythonsandbox.com/turtle) in another tab. The starting program looks like this:

```python
import turtle
t = turtle.Turtle()
t.speed(5) # 1:slowest, 3:slow, 5:normal, 10:fast, 0:fastest
t.forward(100)
```

and, as you might guess, makes a single '100 long' straight line. Even without looking up how to use the [Python Turtle Graphics Library documention page](https://docs.python.org/3/library/turtle.html) (which you should definitely do) you can probably guess that you have options like `t.left(90)`. So, just play around a while. Read the documention page and try some of the options. Maybe [search the web for some examples](https://michael0x2a.com/blog/turtle-examples).

> As a bit of a hint, on this documention page they initialized their turtle as `turtle = turtle.Turtle()`, so while they use examples like `turtle.color("blue")`, you'll need to use `t.color("blue")` unless you change it.

To get you started, here's a few things you can copy paste, then change some of the numbers in:

{{< tabs >}}

{{< tab "Random Walk" >}}

```python
import turtle
from random import random
t = turtle.Turtle()
t.speed(0)
while True:
  t.left(random()*360)
  t.forward(10)
```

{{< /tab >}}

{{< tab "Colorful Circles" >}}

```python
import turtle
from random import random
t = turtle.Turtle()
t.speed(0)
t.pensize(10)
rgb = 100,10,100
i = 0
while True:
  i += 1
  rgb = (i/3)%255,(i/2)%255,i%255
  t.pencolor(rgb)
  t.left(5)
  t.forward(10)
  if (i%255 == 0):
    t.left(60)

```

{{< /tab >}}

{{< tab "Jagged Ring">}}

```python
import turtle
t = turtle.Turtle()
t.speed(0) # 1:slowest, 3:slow, 5:normal, 10:fast, 0:fastest
for _ in range(0,40):
	for i in range(0,360,30):
  	t.left(i)
  	for j in range(0,360,60):
  		t.right(j+i)
  		t.forward(15)
	t.left(80)
```

{{< /tab >}}

{{< /tabs >}}

### Now you're thinking with ~~portals~~ code.

The turtle is neat and all, but it's also pretty useless, so you're probably thinking either "What can I do with code anyway?" or "When do I get to learn how to make games/software/robots/etc.", well, to answer each respectively: Anyting, and you already are. I'm not holding you back from some secret tools of programming. Yes, there are advanced topics like using recursion, connecting up a database, regular expressions, etc. but each of those things are tools you reach to for specific problems. In general, it doesn't really matter what you're working on, it's (mostly) going to be data structures, variable, loops, conditions, and all the other things you'll see on this page. It's really just a matter of being able to see the big thing you want to make (a game, software tool, robot, etc.) and breaking the problem into parts that you can describe both the attributes and functionality of. This is the thing that reading simple guides about "What is an `if` statment?" or "how do I use a `for` loop?" doesn't answer, and I think where a lot of people get stuck.

Unfortuantely, when you do get here, the first response anyone trying to teach programming is to say "Abstraction", which, even if you fully understand abstraction and object oriention and blah blah blah it doesn't help you mentally cross that bridge of making the thing. So while, yes, I'll get to that, I want to adress some of this before we ever actually start leaning programming concepts I want to just give the briefiest possible crash course in problem solving, with one single line:

Break. The. Problem. Down.

If you want to make a video game, you can't just will it into existance by throwing code at a wall. You need to break the problem down. Maybe you need an inventory system? What would that look like? does it need to handle stacking items? What attributes do items need to have? Number of uses? Edible? Tradable? Rarity? Do they need to each have a picture, name, and description? Well before you write any code, you should be thinking about the structure of the thing you want to make. Eventually, when it's broken down enough, you'll realize you can represent those things via math and data.

If you do this, you can pretty much make anything given enough time. Still, I don't reccomend jumping directly into making games or robots or whatever million dollar idea you may have. Let's make a bunch of trivial programs and actually explore what code is.

## Getting Our Tools Setup

As mentioned above, you'll be learning both Python and C. This means we need to get the tools necessary for working with each. If you're following along with OpGuides as a whole and have Linux setup, this will be easy. If you're on Windows it's not *hard* but there are some annoying steps we'll need to jump through.

{{< tabs "Tools" >}}

{{< tab "Arch Linux" >}}

Run `pacman -Syu gcc python`, then you'll want to grab `visual-studio-code-bin` from the AUR. you should have `yay` installed, so this should be as simple as `yay -S visual-studio-code-bin`. 

[TODO] code plugins

Finally, let's quickly test each. Starting with the C language, go ahead and, using VSCode, make a new file containing

```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```

and save it as `hello.c` (pay attention to where you save it to, you may want to make a new folder for programming, and maybe make a new folder in that for C programs), then, using a terminal, get to the folder (using `cd`, `pwd`, and `ls` as necessary). When you're there, go ahead and run `gcc hello.c -o hello`, this will take the code and *compile* it for you to run, so now you should be able to run `./helllo` and you should see `"Hello, World!"` as output.

Next up, let's test python. This is even easier - just run `python`, this should bring up the python **R**ead **E**valuate **P**rint **L**oop or REPL interface. This is a way for you to test code without even saving it as a file, so try just putting in `1+1` and pressing enter. Use `exit()` (or Ctrl+D) to quit. Then, let's try making a file too. Open up VSCode again and this time make a new file containing

```python
print("Hello, World!")
```

and save it as` hello.py`. Again navigate to where it is stored and now just run `python hello.py` and you should see the expected `"Hello, World!"` as output.

{{< /tab >}}

{{< tab "Windows" >}}

[TODO] Win

{{< /tab >}}

{{< tab "Mac" >}}

[TODO] Mac

{{< /tab >}}

{{< tab "Other Linux" >}}

[TODO] Other Lin

{{< /tab >}}

{{< /tabs >}}

## Leaning Two Languages At Once

Back in the  {{< button relref="/Engineering/linux/hardware" >}}Into The Hardware{{< /button >}} section we looked at some of the inner workings of the CPU, and briefly looked into how the CPU only understands *machine code*, 1's and 0's that make up individual instructions. Now, there's absolutely no reason to ever think at that low of a level, the lowest you should ever care to look at, as mentioned there, is assembly. However, assemly is still awful to write and read. While if you stare at the following for long enough you may be able to figure out what  what it does

```assembly
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

even if you've never seen code before it's pretty obvious that in this,

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

A large portion of programmers will never, ever see that first example (assembly code) because of all of it's downsides (hard to read and write, only works on a given instruction set, etc.). Furthermore, some people will never use C because it's rather difficult to write complex programs with it. So then, why care? Well, if you want to write fast, correct, code you have to know. While for speed you could go look up some comparisons of C and Python and see that, as a very lose rule of thumb, the python will be about 10 times slower, I think writing *correct* code is more important to most people, espcially since for *most* programs, the speed difference doesn't really matter on a modern computer.

This brings up a good question may new programmers have:

## Why are there multiple languages anyway?

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
- Huge standrad library - don't need to import anything to use `print()`, built in functions like `reverse()`
- Lot's of amazing 3rd party libraries
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

Notice the word `def` and lack of braces (`{ ... }`) in the Python code? Also, while in the C code we do have the body of the function indented it's not necessary, while in the Python it's mandatory (and stands in for the lack of braces). These things are part of each languages synax. While both use English words as their base and may even use a few in the same way, (like `return`) what words, how their ordered, if you need a `;` at the end of each line, and so on make up the syntax of the language. It's why you can't just copy code from one language into another and expect it to work, and why going from a higher level language like Python to C is hard, speaking of:

### Higher Level?

Generally, you'll see that languages are either called High level (like Python) or low level (like C) - though context does matter, as C is much higher level than Assembly. This "level" isn't in regards to difficulty but rather in terms of *abstraction*, which, to simplify greatly, what we mean is that the higher the level of abstraction the less the programmer has to worry about how the underlying program actually works, just that it *does* work. For example, in C, there's no special type for a string (like "Hello") instead, you need to make an array of characters and set a max size for it ahead of time, because this is how the hardware is going to see it anyway. Meanwhile in python, strings are just naturally a thing, and you can add more characters onto one as much as you like. These abstractions help the programmer write code faster; however, they come at a cost of speed and control.

### What about other languages?

Oh boy. There's a nearly endless amount, each with pro and cons and times where they're the best option. Want to make something interactive on a website? You probably want Javascript. Working in engineering and need to do some math on signals? Matlab ({{< smalltext >}}While I really dislike it{{< /smalltext >}}) is a good bet. The reason I'm starting you with Python and C is because Python is really easy to learn and actually used a lot, while C is and always will be used for low level programming (even if it sucks, which it does.).

### How do I choose which to use?

For anything but trival programs the choice is usually made for you before you start. If you're doing AI/ML stuff and want to use Tensorflow, you're stuck in Python (or C++, though that's uncommon). If you're writing code a small embedded system, you're probably stuck with C or maybe C++. If you're making a game in Unity, you're pretty much stuck with C#. If you're doing web development, you're proably going to be using Javascript. Doing work on an ancient program for government/banking, it was probably written in Fortran or Cobal, so you're now stuck with Fortran or Cobal. 

Now, there are some exceptions to this. If you're starting on a project that's pretty weird in the first place and wanting to do things from scratch (like making your own game engine) then of course you can chose whatever you like. Some will definitely make more sense than others though, and you'll come to recognize these choices as you gain experiance.

There are also times you can mix languages or use one language to generate another. For example, if you really wanted to you could write a python library in C and do basically everything in there, only really using python as the "glue logic" to hold everything togther. Or, maybe you need to process a ton of data in a way that you can make really fast by writing massively parellel code (something we'll explore much later, in both the {{< button relref="/Engineering/Programming/multithread" >}}Multithreading{{< /button >}} and {{< button relref="/Engineering/Programming/shaders" >}}GPU Computation{{< /button >}} chapters), then maybe you'll want to use [Futhark](https://futhark-lang.org) to write code that will generate C or python code for you.

There's also some situations where you will literally mix one language into another, like putting blocks of assembly code into C programms or sending multiple SQL querries to a database.

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

All of the examples have to do with something called *types*.

## What's a Type?

Alright, I'll cut to the chase. When programming, you often need to deal with types. Above there are a mix of types, `int`, `uint8_t`, `float`, and `char` all make apperances. While the exact names of each type and what they're capable of may vary a bit from language to language and platform to platform understanding the basics here will help you out a lot, so, let's start with the C language and look at `int`s

### Int

`int`, as you can probably guess, means integer. What's a bit less obvious is that this will have an inherit range. On your laptop or desktop, just using `int` without anything special (like the next example, `uint8_t`) *probably* means a 4-byte integer, so that means you get 32 bits (4*8) to represent your number. Now, there's a catch: The most significant bit is actually used to store if the number is positive (0) or negative (1) using [2's complement](https://en.wikipedia.org/wiki/Two's_complement), so, in total that gives you a range from -2,147,483,648 to 2,147,483,647. If you try to go above or over this range, the result will wrap around. Now, there's also a varient for *unsigned* integers or `uint`, these, as you might expect, can only be positive, but this means you get the full range from 0 up to 4294967295 to play with before you wrap around. Finally, you might find times where you'll want to specify the number of bits in a number, and in the language I've been showing so far, **C**, you can do that by including a library (more on this later) and using `uint8_t`, for example, to get an unsigned, 8 bit integer. This can only range from 0 to 255. So, if we look back above when we did 200+100, while we'd *expect* 300, the place we're trying to store that number simply isn't big enough, so, we wind up wrapping around, 300-256 is indeed 44.

### Floats

### Char (& Encodings)



Before we can look at the remaining types, we need to first understand *pointers*.

## Pointers, Memory, & Arrays

<b>or "Why will knowing C help me write good code?" Part 2</b>

0 indexing



### Const, Volitile, Static

## More on Types

### Strings

### Arrays, Lists, Dictionaries, ...

### Typedef & Struct

### Types & Performance

## Would you like to speak to an Operator?

+,-,/,*,%,>>,<<,^,|,&,&&,||,==,>,<,<=,>=

## Going with the flow

if/elif/else, for, while, brief note on recussion, goto

example of to small of an int on a loop

## Getting Functional

In most programming languages, we have the concept of **Functions**. Functions let us break up code into digestable sections and reuse things. When we call `print()` we're actually using a function that's built in... [TODO]

fns, the stack

### The Stack

[TODO stack plates visual]

When we call a function, we store the current state of the calling function, move to the address of the called function, do the thing, then return to the original (calling) function and restore this state. This gets complicated when we start wanting to call a function from in a function from in a function .... you get the idea. Basically, we need a place to store the return address (among other state) to know where we want to go back to when the called function returns, but we can't just put these all in CPU registers since we only have so many CPU registers.

One option would be to give every function a place in RAM. This won't work for a varitey of reasons, one is because it uses a ton of space by not letting us reuse space between functions, and we want local variables to only be valid for that call of the function anyway (This is one reason why we have `static`, if you do need state to be preserved). Another is that we want to be able to call our functions from multiple places (it would be awful if we had to store a ton of coppies of every function in RAM!) So, we let functions return and then reuse their space.

So, we instead want to make a place to store the return address of each function (and their variables) as they're called. We do this with a **Stack**, in this case, *The* Stack. If someone says *The Stack* this is the stack they mean. So, uhh, what's a stack?

* Each function call adds its own section to the stack
* Each stack section contains two types of data:
  * the RA from the caller
  * The local variables used by the the currently executing function
  * Arguemnts to the function
* When the function returns it's section is reoved from the stack
* This keeps the amount of memory on the stack at a minimum
  * Total memory usage across all functions can be greater than RAM size
  * Limit is now the memory usage of functions at deepest call hierarchies
    * **Stack Overflows!**
    * Really hard to anticipate calculate
      * Super annoying with recursion, hence why it's often avoided.
* So, we maintain a stack pointer, this is an *offset*, so each function's variables are looked up by a base + offset. The base is th estack pointer, the offset is the particular variable we want to access.

 So, we use a stack! - LIFO (not FIFO) - we only operate on the top of the stack

[TODO] what's a stack





## A New Objective

objects, classes, basic OO, inheritance

## I/O

Files, stdout/stderr, python pickle, databases, network connection, etc.

## Being Assertive

Assert, try/catch, exceptions
