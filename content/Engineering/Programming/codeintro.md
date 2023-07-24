# Chapter 10 - Let's write some Code

{{< tip >}}

Hello! If you're here, you should know you're on a deprecated page. All work has now been refocused on getting the new programming intro (Chapter 10 in the menu bar) to being much, much better than this page ever was.

{{< /tip >}}

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

You can usually make something cool by just entering a bunch of trig and making complex functions you don't truely understand. You're learning, that's fine, no shame. Here, for example, is one I made by wandering around trig functions  `asin((t/9*(i/32*sin(t/4))*y)%5)`

{{< /columns >}}

{{< speech big >}}

At risk of going off on a pretty big tangent, I reccomend checking out some tixyland-like sites

https://hexy.now.sh is inspired by tixy but has some extra interesting features, if you're having fun with tixy.land it's worth checking out.

https://doersino.github.io/tixyz/ is the same as tixy, but add's a 3rd dimension

https://play.ertdfgcvb.xyz/ is similar, but lets you write dramatically more advanced code

{{< /speech >}}

<!-- [TODO] I want to start here instead of python, need to research which one to start with. I like pico-8, but it's paid and I'd like to keep OpGuides accessible. Tic-80 appears to be the most common otherwise? Pyxel looks good too though and would lead into python nicely? … ╮(─▽─)╭

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

* **It Looks Like Math**. As I said above, code is mostly math, so why not choose a language that looks like it? Python does not require a lot of typing or understanding weird characters with special meaning. The most subtle thing about it is whitespace. <a class="ptr">(1)</a>
* **Accessibility**. Python was designed from the beginning to be easy to learn and read, including for non-programmers.
* **Features**. Python has most of the features common in other languages. That makes it good for teaching the features in other languages.
* **Popularity**. There are dozens of tutorials about how to use it to solve any problem you could imagine. Once this guide gets you started, the internet is full of paths to follow.
* **Portability**. You can get Python running everywhere: Windows, Linux, Mac, or even [a microcontoller](https://micropython.org/).

## The building blocks of programming

All programming is just chaining logic, for example using treatments like "if a is equal to b, then make c hold the value of a - 3" followed by "if c is negative then say hello"

Well, that's actually an easy program

```python
a = 1
b = 1
c = 1

if a == b:    # Why are there two equal signs here?
    c = a - 3

if c < 0:
    print('hello')
```

you should notice a few weird things here though, namely, on line 5 we used two equal signs to check equality. This is the case in most programming languages because a single equal sign, like is used on the first two lines, is used for assignment that is assigning the value of `a` to 1 and `b` to 1 or as on line 6 assigning the value of `( a - 3 )` to `c`, because we've already used a single equal sign for assignment, two equal signs is used for checking that two things are actual equal. That is, one equal sign *sets* things to be equal (**assignment)**, two *checks* that they are equal (**equality**).

You'll also see there's normal english after the `#` character. In python `#` means the following text is a comment.

If you follow the logic here, `a` and `b` are both 1, so line 5 checks that both are equal, and this is true, so line 6 does happen. Now 'c' which previously held the value '1' is now equal to 'a-3', where 'a' is '1', so 'c' becomes '-2'. on line 8 we check if `c` is less than '0', and because it is we print the word 'hello'. Here, you'll notice 'hello' is in quotes. This is because if it were not, that is if it were `print(hello)` it would try to print the value of the variable 'hello' which since hello isn't defined, <a class="ptr">(2)</a>wouldn't work. Let's try this in the Python interpreter. You can find install instructions for your operating system here: https://www.python.org/downloads/. If you're on Linux simply type `python` into the terminal. 

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

Note, that not all `if`s need an else, it'll just move on after the if, weather it happened or not.

```python
a = 3
if a == 3:
    print("a is 3") #this happens
a = a + 2 #increase a by 2
if a == 3: 
	print("this won't print because a is 5")
print("but this line still will print, as the program moves on")
```




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

You can abuse `while` to do something forever:

```python
while True:
    print("This will print over and over again forever")
print("This will never print")
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

### Types

Up until now, you've seen every variable be assigned a basic number, like `a = 1`, but you could also set a variable - of which you could name anything - to hold other kinds of data too, like characters, strings, floating-point numbers, etc. This can be a bit confusing at first, and this is actually one palce where python makes things a bit complicated as it's usually hidden from us, so let's actually break a program on purpose to see what this is all about.

```
a = 1
b = "hello"
c = a + b
```

Here, were trying to add the number 1 and the string "hello" together, this clearly doesn't make sense, and so python yells at us: `TypeError: unsupported operand type(s) for +: 'int' and 'str'`

this is literally saying, "hey, dude, you can't add an integer and a string" which, yeah. Actually, python is weird in that it lets us even add stings at all - if you did

```python
a = "hello"
b = "world"
print(a+b)
```

you'd see "helloworld", even though in most other languages they'd go "ahhhhh! these aren't numbers!"

But, going back, python specifically said `int` and `str`, these are both *types*: integer, and string. 

Integers, as the name implies, literally just hold non-decimal numbers, so -3, -2, -1, 0, 1, 2, 3, etc.

strings, as the name implies, can hold a string of letters.

But, of course, there's more than that. Python gives us a function to see what the types of things are though, so let's look at a bunch of the built in types - don't worry to much about what they mean yet.

```python
myInt = 1
myFloat = 0.5
myComplex = complex(2,3) #2+3i
myString = "test"
myBool = True
myList = [1,2,3]
myTuple = (1,2,3)
myDict = {'apple':1,'orange':2}
mySet = {"one","two","there"}

type(myInt) # this will print "<class 'int'>"
```

and, of course, things can get complicated as you compose these together, for example, you could have a list of bools

```python
myListOfBools = [True,True,False]
type(myListOfBools) # this will print "<class 'list'>" as it's the type of the outter thing
type(myListOfBools[0]) # this will print "<class 'bool'>" as it's the type of the inner thing - the [0] is asking for the first item in the list
# note, python is "0-indexed" like most languages, so this list of three things has items 0, 1, and 2. This may seem weird, but it's nice for a variety of reasons.

```

Python does try to help us with these types a bit, for example, if you do

```python
myInt = 1
myFloat = 0.5
result = myInt + myFloat
print(result)
```

the answer is still 1.5, because python saw that we were adding an int to a float and took care of this for us. This isn't always so cut and dry though, and sometimes you may actually want to keep things in one type or another. Because of this you can *typecast*. This means forcing one type to another. In python at least, this has limits. For example, it makes sense to go from the string "3" into an integer, but the string "test" into an integer is… less obvious, and so python says no. To do this conversion, just use the type as if it were a function. Here are some examples:

```python
myFloat = 123.456
myString = "69"
myInt = 420

int(MyFloat) #returns the integer value 123, as the decimal is lost
int(MyString) #returns 69, as these are all number characters
float(MyInt) #returns 420.0, as we're basically forcing it to have a decimal
```

Of note, in other languages (not Python) there may be a sane(ish) translation between arbitary strings and numbers, such as just returning the ASCII value of each letter.

Furthermore, in python theres a variety of ways you may run into more types, or even end up needing to work with the types of another language, such as 'C', in python. In this case you'll start having to deal with the nitty gritty of types, such as 8-bit integers, both signed and un-signed. I want to at least introduce this here, but you'll definitely see more later: The gist is that in lower-level languages, (ones where you're writing in a way closer to how the computer actually works) you'll have to actually deal with the binary, so, you'll be working with things at the bit level. An 8 bit number can only hold 2^8 = 256 values, so an *unsigned* 8 bit integer will hold values from 0 to 255 while a *signed* 8 bit integer can hold -128 to +127 (note, this is because one of the bits is used to store the sign). There are, of course, other types like this, like 32 bit ints, with the same signed and unsigned varients, but ranging from -2147483648 to 2147483647 for the signed version

### Mutability

[TODO]

## When writing code…

One helpful thing when writing code is to '**comment out**' some code, this is a big deal when trying to figure out why something doesn't work. Here, for example, the `a = a + 1` line never happens because it's been put into a comment. It could be made to run again by removing the `#`

```python
a = 1
#a = a + 1
print(a)
```

You'll also probably find it handy to print out information to the screen about what your program is doing - **Print Debugging**. This isn't great practice as there's usually better ways to find bugs than this, but it's still pretty useful, and good as a first way of finding something quickly. Here, for example, we're displaying the values of a and b, as well as outputting text so we can make sure something is actually progressing.

```python
a = # some really long, complex equation for which you're not sure of the result
print(a)
b = # another really long, complex equation for which you're not sure of the result
print(b)
c = isPrime(a)
for i in range(1:10):
    print(i)
    c = doReallComplexThingThatTakesAWhile(a,b*i)
    print("did complex thing, doing it again...")
```

## object orientation
## try/catch, assert

## Pointers

So, this is the part that when learing lower level programming languages makes everyone's head spin, and, unfortunately, it's still somewhat relevant in Python, just less so.

So, let's go back to when we initialized all of those variables

```python
a = 1
b = 2
c = 3
...
```

When we do this, the computer has to store them somewhere in it's memory. We can (kinda) see this location in memory by using the `id()` command. The first weird thing you'll notice is that while `id(a)` will stay the same if you run it repeatedly, if you close python, set `a=1` again, and rerun `id(a)` the number will change. That's because this 'id' is really where in memory the data is being stored, and each time to run python the computer is going to put it somewhere else<a class="ptr">(3)</a>. The `is` command is python is actually checking if these id's are the same, not if the value is the same. This harkens back to object orientation- remember, we could make a bunch of objects, lets say cows, we could have two cows with the same name, same color, same age, etc. but if they're two different cows, they're still two different cows, and is will reflect this. They make be equal in every other regard, but one cow is not the other cow, they're still distinct *objects*.

This can get really fucking weird. One of the weirdest things about python in regards to this is (usually) python will pre-allocate a place to store low integer numbers, so, if you make two variables with low integer numbers, they'll actually point to the same memory location at first…

```python
a = 1
b = 1
a is b #This is true
```

but, if we make these really big…

```python
a = 12345
b = 12345
a is b #This is false
a == b #This is True
a = b
a is b #This is true now, because python has, for now, 
	   # updated both to point to the same location

a = 67890 #assigning a new value will change it's location, note this wouldn't happen
		  # in other languages - changing the value wouldn't change it's address, but
    	  # then, assigning a second variable wouldn't make them share the same 
          # address in other languages either.
a is b #now has a distinct address (and value) again, this will be false.
```

and this makes sense, because in the first case if we ran `id(a)` and `id(b)`, we'd see they both share an id, while in the latter case they don't. What you want to do to check equality is use the `==` operator, not `is`.

Okay, so, this is nice and all, but why else does it matter? Well, sometimes you'll see something like 

`<__main__.myClass object at 0x0A2B4C6D>` and that weird number is actually it's address, represented in hexadecimal - that is, it should be the same as `hex(id(object))`

but more importantly, you'll be using pointers a heck of a lot more when we go lower level, so it's worth understanding them now. It's okay if I lost you a bit here, they'll make more sense later when we're in a language that doesn't go out of its way to hide them from us.

## Recursion (You won't actually use this all that much)

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

### Stack trace

[TODO]

## Libraries

One of the really nice things about python is that there's a *library* for just about anything you might want to do. It's easier to show than tell, so let's start by trying the *turtle* library, which you can find basic [documenation for here](https://docs.python.org/3/library/turtle.html). I'll steal the example code from that page:

```python
from turtle import *
color('red', 'yellow')
begin_fill()
while True:
    forward(200)
    left(170)
    if abs(pos()) < 1:
        break
end_fill()
done()
```

if you either save that code in a .py file and run it or type it in to a prompt line by line, you should be able to get the same many-point star output as shown on the page. This is the power of a library. You didn't have to try to figure out how to make something that would understand what `left()` or `begin_fill()` means, the turtle library provided all of that for you.

Similarly, you could use the [Tensorflow](https://www.tensorflow.org) library for working with machine learning, matplotlib to generate graphs, beautiful soup to scrape the web, mido to sequence music, tweepy to make a twitter bot, nltk to process natural language

## Some simple programs

<!-- I'd like to do some more impressive, but short, examples. I think by using libraries a lot is possible. Maybe a MIDI sequencer, generative/artistic image manipulation, *very* simple chat app, autoclicker (for cookie clicker?), and Minecraft -> Twitter bot? -->

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





<ol hidden id="footnotes">
    <li>whitespace literally means the 'blank' characters - like spaces and tabs, which do actually matter in python.</li>    
    <li>meaning we didn't make a varible called 'hello' and give it a value</li>
    <li>There's a lot of "uhm, actually" to be said here, but go with it.<li>
</ol>
