# Chapter 10.2 - Turtles All The Way Down

<script>
    document.getElementById("codeMenu").open = true;
</script>

## Low Level and High Level Programming

There are two types of programming, high level and low level. 

High level programmers make things where the hardware doesn't matter. The code they write runs everywhere, and the users directly see it and interact with it. 

Low level developers write code that runs directly on the hardware. The software *inside* the controller on your mouse to the driver on your computer for responding to that input, that's all low level.

I want you to be neither. Be an all level programmer. Why?

Most low level devs will feel far from home using existing code and high level functions to make a video game. This will make a low level dev reach for building the foundations first, wasting time reinventing wheels that may not need reinvented. They also are less likely to know about - or even think to look for - common high level techniques. They're also likely to get overly wrapped up in optimization problems that don't need it. If you're making a game, it only needs to push out a frame at the monitor's refresh rate, not 10000 FPS. They're likely to overestimate how hard it is to make complex software, because they're thinking about building every little piece by hand.

{{< speech tired >}}

I am a low level dev, I know it, and I try to recognize when I do this.

{{< /speech >}}

Most high level devs would struggle to optimize a section of their game if they want to add a feature that would otherwise tank performance to the point of making things unplayable. They may lack the understanding of how the code actually runs on the hardware to know why something is bad. They also may have preconceptions about what's even possible (in either direction) because they don't know enough about what the hardware can do or how to best take advantage of it. They're also likely to reach for off the shelf solutions to as easily when making something custom would actually be faster and easier to maintain.

{{< speech yeet >}}

I am a low level dev, and the high level devs writing slow, shitty code drives me nuts.... but, they're still making cool things faster than I can.

{{< /speech >}}

# Learning both

I would really like to teach you programming from the top down, starting with something easy like the Python programming language and then talk about how things *really* work using the C Programming language. The problem is, when looking at Python code you'll occasionally need to deal with things that simply don't make sense without the context of a lower level language like C. Meanwhile, there are some things that C just... doesn't have. This means there are three options:

1. Learn C first, hate it, and think all programming is hard before learning python
2. Learn Python first and occasionally be tripped up by concepts like pointers and types
3. Learn both at the same time, and risk confusion as we learn two languages at once.

I'm going to go with option 3 for OpGuides, so, keep in mind as you read on that you'll be seeing two different languages and that this can be really confusing.

All this is to say, as hard as it is to *learn* to program, it's just as hard to teach it. Worse yet, learning these fundamental concepts is *really*. *fucking*. **boring**. So, while you're going to have to slog through it in a bit, I do want to at least give you some motivation first, something more exciting than calculating pi, so, I'd like to start with a Turtle. In a programming context, a Turtle is just a dot that you can move around the screen that leaves a trail.

Go ahead and go to [www.pythonsandbox.com/turtle](https://www.pythonsandbox.com/turtle) in another tab. The starting program looks like this:

```python
import turtle
t = turtle.Turtle()
t.speed(5) # 1:slowest, 3:slow, 5:normal, 10:fast, 0:fastest
t.forward(100)
```

and, as you might guess, makes a single '100 long' straight line. Even without looking up how to use the [Python Turtle Graphics Library documentation page](https://docs.python.org/3/library/turtle.html) (which you should definitely do) you can probably guess that you have options like `t.left(90)`. So, just play around a while, like probably an hour or so. Read the doumentation page and try some of the options. Maybe [search the web for some examples](https://michael0x2a.com/blog/turtle-examples).

> As a bit of a hint, on this documentation page they initialized their turtle as `turtle = turtle.Turtle()`, so while they use examples like `turtle.color("blue")`, you'll need to use `t.color("blue")` unless you change it.

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

The turtle is neat and all, but it's also pretty useless, so you're probably thinking either "What can I do with code anyway?" or "When do I get to learn how to make games/software/robots/etc.", well, to answer each respectively: Anything, and you already are. 

I'm not holding you back from some secret tools of programming. Yes, there are advanced topics like using recursion, connecting up a database, regular expressions, lambda calculus, etc. but each of those things are tools you reach to for specific problems. In general, it doesn't really matter what you're working on, it's (mostly) going to be data structures, variable, loops, conditions, and all the other things you'll see as we work though these intro pages. It's really just a matter of being able to see the big thing you want to make (a game, software tool, robot, etc.) and breaking the problem into parts that you can describe both the attributes and functionality of.

This is the thing that reading simple guides about "What is an `if` statement?" or "how do I use a `for` loop?" doesn't answer, and I think where a lot of people get stuck.

Unfortunately, when you do get here, the first response to anyone trying to teach programming is to say "Abstraction", which, even if you fully understand abstraction and object orientation and blah blah blah it doesn't help you mentally cross that bridge of making the thing. So while, yes, I'll get to that, I want to address some of this before we ever actually start leaning programming concepts I want to just give the briefest possible crash course in problem-solving, with one single line:

Break.👏The.👏Problem.👏Down.👏

If you want to make a video game, you can't just will it into existence by throwing code at a wall. You need to break the problem down. Maybe you need an inventory system? What would that look like? Does it need to handle stacking items? What attributes do items need to have? Number of uses? Edible? Tradable? Rarity? Do they need to each have a picture, name, and description? Well, before you write any code, you should be thinking about the structure of the thing you want to make. Eventually, when it's broken down enough, you'll realize you can represent those things via math and data. 

You'll often hear good programmers say a good data structure with bad code is still a hundred times better good code with a bad data structure. This is really a reflection of the above. When you break the problem down, you need to really understand what attributes each thing has, what they "belong" to, what valid values are (as in, are there some values that conflict), etc.

If you do this well, you can pretty much make anything given enough time. Still, I don't recommend jumping directly into making games or robots or whatever million-dollar idea you may have. Let's make a bunch of trivial programs and actually explore what code is.

So how do you get good at this?

**Projects.**

Write code. Write more code. Keep writing code.

Reading a book or guide like this website can only help so much.

... that said, do stick around, I haven't even told you any of the basics yet!