# Chapter 10 - Let's write some Code

## Starting Minimal

### Code is mostly math

Here's the thing: Code is mostly math. If you're anything like me, you probably just went **ugggggghhhhhhh**.

And I get it. But it's not that bad for two reasons:

1. The math isn't like what you're used to.
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

But, what about point **2.**? Take a look at this:

{{< columns >}}

<iframe src="https://tixy.land" width="100%em" height="500em"></iframe>

<--->

This is [tixy.land](https://tixy.land) -- Click on the moving dots to advanced though a lil' tutorial and some examples

Here in tixy land, you can try out some code. I don't want to lead you to anything. Just, type something. See what happens.

Even if you don't understand all the math or what the symbols mean I'm sure you can get a rough idea of what's going on.

To give a quick run down of some operations you might want to use:

[TODO]

You can usually make something cool by just entering a bunch of trig and making complex functions you don't truely understand. You're learning, that's fine, no shame. Here, for example, is one I made by wandering around trig functions  `asin((t/9*(i/32*sin(t/4))*y)%5)`

{{< hint info>}}

https://hexy.now.sh is inspired by tixy but has some extra interesting features, if you're having fun with tixy.land it's worth checking out.

https://doersino.github.io/tixyz/ is the same as tixy, but add's a 3rd dimension

{{< /hint >}}

{{< /columns >}}

<!-- [TODO] I want to start here instead of python, need to research which one to start with. I like pico-8, but it's paid and I'd like to keep OpGuides accessible. Tic-80 appears to be the most common otherwise? Pyxel looks good too though and would lead into python nicely? ... ╮(─▽─)╭

http://zenithsal.com/assets/documents/tic-80_cheatsheet.png

https://tic80.com , https://steemit.com/programming/@crypticwyrm/tic-80-learn-to-program-games-using-javascript-or-lua-on-a-fantasy-computer-simulating-old-school-game-programming - still $5 for pro.

https://medium.com/@G05P3L/fantasy-console-wars-a-guide-to-the-biggest-players-in-retrogamings-newest-trend-56bbe948474d

https://medium.com/@btco_code/writing-a-platformer-for-the-tic-80-virtual-console-6fa737abe476

https://paladin-t.github.io/b8/

https://github.com/kitao/pyxel

https://www.lexaloffle.com/pico-8.php (and https://www.lexaloffle.com/voxatron.php) -->

## Python

<!--

https://learnpythontherightway.com

http://www.spronck.net/pythonbook/pythonbook.pdf

https://buildmedia.readthedocs.org/media/pdf/intermediatepythongithubio/latest/intermediatepythongithubio.pdf

https://docs.python.org/3/tutorial/

https://mathinspector.com

https://ryven.org

https://github.com/direnv/direnv/wiki/Python

http://composingprograms.com

-->

<img class="center" src="/eng/python.webp" alt="Py Logo" height="200em">

## Getting started with python

You may ask, why Python? Why not any of the other languages you may have heard of?

There are a couple reasons:

* **It Looks Like Math**. As I said above, code is mostly math, so why not choose a language that looks like it? Python does not require a lot of typing or understanding weird characters with special meaning. The most subtle thing about it is whitespace.
* **Accessibility**. Python was designed from the beginning to be easy to learn and read, including for non-programmers.
* **Features**. Python has most of the features common in other languages. That makes it good for teaching the features in other languages.
* **Popularity**. There are dozens of tutorials about how to use it to solve any problem you could imagine. Once this guide gets you started, the internet is full of paths to follow.
* **Portability**. You can get Python running everywhere: Windows, Linux, Mac, or even [a microcontoller](https://micropython.org/).

## The building blocks of programming

All programming is just chaining logic, for example using treatments like "if a is b, then make c hold the value of a-3" followed by "if c is negative then say hello"

Well, that's actually an easy program

```python
a = 1
b = 1
c = 1

if a == b:    # Why are there two equal signs here?
    c = a-3

if c < 0:
    print('hello')
```

you should notice a few weird things here though, namely, on line 5 we used two equal signs to check equality. This is the case in most programming languages because a single equal sign, like is used on the first two lines, is used for assignment that is assigning the value of `a` to 1 and `b` to 1 or as on line 6 assigning the value of `( a - 3 )` to `c`, because we've already used a single equal sign for assignment, two equal signs is used for checking that two things are actual equal. That is, one equal sign *sets* things to be equal, two *checks* that they are equal.

If you follow the logic here, `a` and `b` are both 1, so line 5 checks that to be true, so line 6 does happen. Now 'c' which previously held the value '1' is now equal to 'a-3', where 'a' is '1', so 'c' becomes '-2'. on line 8 we check if 'c' is less than '0', and because it is we print the word 'hello'. Here, you'll notice 'hello' is in quotes. This is because if it were not, that is if it were `print(hello)` it would try to print the value of the variable 'hello' which since hello isn't defined, wouldn't work. Let's try this in the Python interpreter. You can find install instructions for your operating system here: https://www.python.org/downloads/. If you're on Linux simply type `python` into the terminal. 

With the Python interpreter open try without quotes: 

```python
>>>print(hello)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'hello' is not defined
```

As you can see Python failed to print hello because the variable was not defined. Now lets try assigning a value to the hello variable before printing:

```python
>>> hello = "Hello World!"
>>> print(hello)
Hello World!
```

Anything you write to the interpreter can also be added to a file and ran that way. Try saving the examples above to a file called test.py, opening a terminal and running it with `python test.py`. 


### Conditions using `if`, `elif` and `else`

You often want code only to be executed, if a certain condition is met. For example, take a look at the following code:

```python
a = 13
b = 27
if a > b:
    print("a is bigger")
else:
    print("b is bigger")
```

Using the `if` statement, connected with a logical condition, you can control the program flow. In this case, `a` is smaller than `b`, so python will skip the code inside of the `if` case and only execute what is within the `else` part.

You can also combine multiple if cases like this:

```python
a = 3
if a < 0:
    print("a is negative")
elif a == 0:
    print("a is zero")
else:
    print("a is positive")
```

Using the `elif` statement, you can check for another condition if the one in the `if` statement was `false`.


### Loops

Some lines of codes have to be repeated very often. Instead of typing the same line over and over again, you can use loops.
There are two types of loops: The `for` and the `while` loop. While they both basically do the same thing, sometimes it is more intuitive to use one over the other.

TODO: [Again on 0-based vs. 1-based indexing](https://hisham.hm/2021/01/18/again-on-0-based-vs-1-based-indexing/)


#### The `for` loop

The `for` loop iterates over a list of items and stores the current element in a variable.
This is especially useful when working with lists, for example.

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print("I am eating a " + fruit)
```

If you are familiar with loops in other programming languages (such as Java or C), you're probably thinking: "That's not a for loop, that's a for-each!". This is true, in python all for loops are for-each loops. If you want to iterate over a range of numbers, use pythons `range()` function:

```python
for i in range(0, 100):
    print(i)
```


#### The `while` loop

The `for` loop is very useful, but sometimes, using the `while` loop is easier and more straightforward.
For example, if you want to repeat something until a certain condition is met, using this loop is simple:

```python
i = 0
while i < 10:
    print(i)
    i += 1
```

You can also combine the condition after the `while` keyword with an `else` statement:

```python
i = 11
while i < 10:
    print(i)
    i += 1
else:
    print("i is bigger than 10!")
```

[TODO]
assignment, comparison, combined ops (+=), mod, exponent, floor,
in/not in, is/is not, data types, functions
libraries

### Functions

This is a way to give code a name, and use it later. Here is an example with a loop:

```python
def f(x):
    if x < 10:
        string = "x is less than 10"
    else:
        string = "x is greater than or equal to 10"
    return string

for a in range(100):
    print(a)
    b = f(a)
    print(b)
```

When you run this code, you will see that all the steps underneath `f` are run over and over again, each time through the loop.

There are a couple things to understand here:

* Line 10 is where the function is *called*. That is where line 2 begins to execute.
* The function takes a *parameter* we have named `x`. The value of `x` is what was put in the parentheses at the call location, so its value is `a` for each time through the loop. The value of `x` lasts for the duration of the code in the function.
* The `return` statement on line 6 creates a value to be sent from the function back to the caller. This is then the value of `b` when line 10 completes. If you don't put one of these, it will return a special value called `None`.

You can see from this that `print` is just a function call! It takes more effort and extra syntax to create a function that can take all the parameters print can, but you can definitely write one. That's for a different tutorial, though.

## Common methods used

commenting-out
print debugging
Recursion, object orientation
while(true)
try/catch

### Recursion

There is an old joke that in order to understand recursion, you must first understand recursion. If that joke makes sense, you understand it.

Well, you might at least. The concept can be understood with some study, but significant percentage of professional programmers still get it wrong when they try to use it!

This is something to meditate on, and do some experiments. If you don't quite get it from one reading, don't feel bad.

Let's give it a try. Consider this function:

```python
def unfolded_sum(n):
    if n == 1:
        return n
    else:
        s = unfolded_sum(n-1)
        return s + n
```

New programmers are often confused by this. How can a function refer to itself?

In order to understand this, we have to get into the way that functions actually work.

Think back to the previous example under functions. The program had to keep track of `a` as it went through each iteration of the for loop, and yet, `x` in the function `f` had to be kept separate.

This was achieved by keeping a copy of variables within a function in a different area of memory. What the programming language actually did was to copy the value of the variable `a` into a specific context for `f`, and named it `x`. When `f` got to the end, that copy went away.

In Python, you can use some special syntax to view this if you have the window open where you typed the Functions example:

```python
>>> print(f)
<function f at 0x7fd36d4d9820>
>>> print(f.__code__.co_varnames)
('x','string')
```

There's `x`, the copy. The variable *belongs to* the function, which means it had to copy the value into that new slot. Every time the function was called, it had to create a new slot. Otherwise, it would clobber the value of `a`, or run with the wrong value!

Given this, perhaps the code above will make more sense:

```python
>>> print(unfolded_sum.__code__.co_varnames)
('n', 's')
```

Just like before, each time we call the function, `n` is copied in, and `s` is copied out. But what happens to `n` on line 5?

The answer is the same as before: `s` is copied to `n` -- a *new n*. This "inner n" then begins at the top of the code on line 2.

The result looks like this if it were called with 3:

```
z = unfolded_sum(3)
            ↳ NEW CALL
              n = 3
              if n == 1 → False
              s = unfolded_sum(3-1)
                          ↳ NEW CALL
                            n = 2
                            if n == 1 → False
                            s = unfolded_sum(2-1)
                                        ↳ NEW CALL
                                          n = 1
                                          if n == 1 → True
                                          return n
                            s = 1        ↲
                            return s + n
              s = 3        ↲
              return s + n
z = 6        ↲
```

The series of memory spaces for these calls grow at one end, and then shrink back down. This data structure is called a "stack" when written in code, and the programming language uses a *call stack* to keep track of these copies.

The call stack is very important to understand most programming languages, and Python is no exception. Even when you are not doing recursion, you will get a *call stack trace* when debugging.

## Some simple programs

### Hello World

[TODO]

### Even or Odd

[TODO]

### Prime Numbers

[TODO]

### Calculating sine and pi

### Sorting a list

### Palindromes

### Cypher

## Making a full project

### Part 0, Git

Before we get started, I want to be sure you took the time to read the section on Git in Chapter 6.1 above. If you need to refer to a cheat sheet you can look in Apendix B.

### Part 1, Starting easy

[TODO] guide to write an OO python program with libraries to read and write entries to a database-like file and a real database
the database should have 3 tables, a to-do list, a time-tracker list, and a list of articles

To-do: NAME, DUEDATE
time-tracker: 2types, either manually enterend with NAME, TSTART, TSTOP or NAME, TTOTAL for the following program
articles: NAME, PUBLISHED, TPUB, TEDIT

we'll need some way to track what items in the time tracker were started, but never stopped

for now, everything should be strictly command line arguments and print statments

## More advanced topics

[TODO] Move this section

### Lambdas

[TODO]

## A little more practice

Weird projects

## Easing into Graphical Programming with Creative Coding

http://feed.grantcuster.com/

[Coding Adventure: Ray Marching (YouTube)](https://www.youtube.com/watch?v=Cp5WWtMoeKg)

[Coding Adventure: Marching Cubes(Youtube)](https://www.youtube.com/watch?v=M3iI2l0ltbE)

[Coding Adventure: Portals (YouTube)](https://www.youtube.com/watch?v=cWpFZbjtSQg&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)





