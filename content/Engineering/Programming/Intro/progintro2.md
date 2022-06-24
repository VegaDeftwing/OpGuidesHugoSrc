# Chapter 10.2 - Turtles All The Way Down

I would really like to teach you programming from the top down, starting with something easy like the Python programming langauge and then talk about how things *really* work using the C Programming language. The problem is, when looking at Python code you'll occassionly need to deal with things that simply don't make sense without the context of a lower level langage like C. Meanwhile, there's some things that C just... dosen't have. This means there's three options:

1. Learn C first, hate it, and think all programming is hard before learning python
2. Learn Python first and ocassionly be tripped up by concepts like pointers and types
3. Learn both at the same time, and risk confusion as we learn two languages at once.

I'm going to go with option 3. for OpGuides, so, keep in mind as you read on that you'll be seeing two different languages and that this can be really confusing.

All this is to say, as hard as it is to *learn* to program, it's just as hard to teach it. Worse yet, learning these fundamental concepts is *really*. *fucking*. **boring**. So, while you're going to have to slog through it in a bit, I do want to at least give you some motivation first, something more exciting than calculating pi, so, I'd like to start with a Turtle. In a programming context, a Turtle is just a dot that you can move around the screen that leaves a trail.

Go ahead and go to [www.pythonsandbox.com/turtle](https://www.pythonsandbox.com/turtle) in another tab. The starting program looks like this:

```python
import turtle
t = turtle.Turtle()
t.speed(5) # 1:slowest, 3:slow, 5:normal, 10:fast, 0:fastest
t.forward(100)
```

and, as you might guess, makes a single '100 long' straight line. Even without looking up how to use the [Python Turtle Graphics Library documention page](https://docs.python.org/3/library/turtle.html) (which you should definitely do) you can probably guess that you have options like `t.left(90)`. So, just play around a while, like probably an hour or so. Read the documention page and try some of the options. Maybe [search the web for some examples](https://michael0x2a.com/blog/turtle-examples).

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

The turtle is neat and all, but it's also pretty useless, so you're probably thinking either "What can I do with code anyway?" or "When do I get to learn how to make games/software/robots/etc.", well, to answer each respectively: Anything, and you already are. I'm not holding you back from some secret tools of programming. Yes, there are advanced topics like using recursion, connecting up a database, regular expressions, etc. but each of those things are tools you reach to for specific problems. In general, it doesn't really matter what you're working on, it's (mostly) going to be data structures, variable, loops, conditions, and all the other things you'll see on this page. It's really just a matter of being able to see the big thing you want to make (a game, software tool, robot, etc.) and breaking the problem into parts that you can describe both the attributes and functionality of. This is the thing that reading simple guides about "What is an `if` statment?" or "how do I use a `for` loop?" doesn't answer, and I think where a lot of people get stuck.

Unfortuantely, when you do get here, the first response anyone trying to teach programming is to say "Abstraction", which, even if you fully understand abstraction and object oriention and blah blah blah it doesn't help you mentally cross that bridge of making the thing. So while, yes, I'll get to that, I want to adress some of this before we ever actually start leaning programming concepts I want to just give the briefiest possible crash course in problem solving, with one single line:

Break.👏The.👏Problem.👏Down.👏

If you want to make a video game, you can't just will it into existance by throwing code at a wall. You need to break the problem down. Maybe you need an inventory system? What would that look like? does it need to handle stacking items? What attributes do items need to have? Number of uses? Edible? Tradable? Rarity? Do they need to each have a picture, name, and description? Well before you write any code, you should be thinking about the structure of the thing you want to make. Eventually, when it's broken down enough, you'll realize you can represent those things via math and data. 

You'll often hear good programmers say a good data structure with bad code is still a hundred times better good code with a bad data structure. This is really a reflection of the above. When you break the problem down, you need to really understand what attributes each thing has, what they "belong" to, what valid values are (as in, are there some values that conflict), etc.

If you do this well, you can pretty much make anything given enough time. Still, I don't reccomend jumping directly into making games or robots or whatever million dollar idea you may have. Let's make a bunch of trivial programs and actually explore what code is.

So how do you get good at this?

**Projects.**

Write code. Write more code. Keep writing code.

Reading a book or guide like this website can only help so much.

... that said, do stick around, I haven't even told you any of the basics yet!