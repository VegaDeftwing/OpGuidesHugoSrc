# Chapter 10.0 - Things You Should Know

Knowing how to progamm will give a you deep control over the most advanced tool mankind has ever made: The computer. More over, because we use computers as extensions of our own minds (and as a collective, with the Internet) it will literally expand your ability to process information as you're no longer limited to the inputs and computation systems that other programmers have built for you. 

You'll also be able to make computers solve problems, do repetative tasks, and allow you to express artistic ideas in ways that are hard to grasp before you've started. I can't express in text how amazing some of the things I've seen thrown together in an afternoon by a single programmer are.

 So, yeah, programming is really fucking awesome. Unfortunately, it's also pretty hard for most people is it will make you use your brain in ways you're not used to. So, before we ever write a line of code, let's talk about why learning to program is difficult.

## Why is programming hard?

Programming is difficult for a few reasons:

### 1. Because you have to use math, logic, and data structures to model your problem. 

Computers can only really do one thing: manipulate bits. There's a bunch of tools for how to do this at your disposal though, and programming lanugages help *abstract* the way it is done so you rarely, if ever, need to think about the bits themselves. These tools include basic math operations like addition, subtraction, multiplication, and division as well logical operations like conditions such as "**if** Ｘ **is less than** Ｙ, **then** set Ｚ to the value of Ｘ, **otherwise** set Ｚ to the value of Ｘ times Ｙ"

```python
if x < y:
	z = x
else:
	z = x * y
```

and "**While** Ｘ is less than Ｙ, decrease the value of Ｘ by Ｙ divided by Ｘ".

```python
while x < y:
	x = x - (y / x) 
```

And then you get data structures, which let you organize data:

```python
color_palette = {'rock' :0xA89858,
                 'sand' :0xF5E18E,
                 'fruit':0xC583F5,
                 'stem' :0x50A848,
                 'leaf' :0x80F576:}
```

<div class="test test-1"></div>
<style>
    .test-1 {
  background: red;
  background: linear-gradient(to right, #A89858, #A89858 20%, #F5E18E 20%, #F5E18E 40%, #C583F5 40%, #C583F5 60%, #50A848 60%, #50A848 80%, #80F576 80%, #80F576 100%);
}
    .test {
  margin: 1em 0;
  height: 3em;
}
</style>



(There's a lot more data structures than just this one, which is called a dictonary)

Theres many more of operations, logical statments, and data structues you can use - We'll get there soon! - but in general, all programs are made out of these things. Now, with that in mind, think about making something like a video game. The task sounds almost impossible, right? Well, not really. As long as you can break the problem down it's not so bad.

See, programming isn't really all that different from baking.

When you bake, you don't just "make a cake". That is, the recipe doesn't say

1. Make a cake.

Because, well, that's not a recipe. A good recipe has a list of ingridents, will tell you how to mix them, and has lot of individual steps.

The big difference with programming is you don't know the steps going in. You have to make them up as you go! So, you need to break the problem down to a point where using math, logic, and data structures to model *that individual step* becomes obvious. You know what you want, now you have to figure out how to get there.

The baking analogy goes a bit further too, because if you're making a cake you *could* go milk a cow, raise chickens to get the eggs, farm the wheat and process it to get the flour, churn the butter, etc. but most people don't.

When you're programming, you don't have to start from scratch. In fact, you almost never will. You'll build on the work of others and leave the flour making and cow milking to the people who have perfected it, made it safe, and kept it cost effective. We'll talk about this later too.

### 2. Because not all solutions are created equal

There are some problems that may have a really obvious way to model them, but this really obvious way is so incredibly slow that it would take even a super computer millions of years to find the answer while there are clever solutions that may finish almost instantly.

There are some solutions which may seem very straight forward, but miss an edge case and so fail spectacularly.

There are some solutions which may work easily now, but make adding functionality later difficult.

There are some solutions which may make adding later functionality easy, but take more time to impliment than you have.

There are some solutions which are really clever, fast, and work perfectly and are very, very hard to understand when you go to read your code later.

There are some solutions which are easy to undertand and write, but don't scale well.

For example, say you have an list of numbers, and you need to add one to all of them

```python
# You have
my_numbers = [41,68,419,80084]
# You want
my_numbers = [42,69,420,80085]
```

You could actually write a line of code to increment each one,

```
a[0] = a[0] + 1
a[1] = a[1] + 1
a[2] = a[2] + 1
```

But then if you had a list of a thousand numbers, you'd have a problem. You could do something like this,

```python
for i in range(len(my_numbers)):
	my_numbers[i] = my_numbers[i] + 1
```

However, for this particular language (Python) there's a better way:

```python
my_numbers = [x + 1 for x in my_numbers]
```

### 3. Because making decesions before you know everything is hard

For the above example, say you thought that list would only ever have two numbers in it, so you do go with the first solution. Then, you realize down the line, that, oh, no, that list is actually going to have 100 numbers in it, so you write it with `my_numbers = [x + 1 for x in my_numbers]`, but then, later, you find out you need to add 10 *if* the number is greater than 100. Then you find out this list might have nothing in it (just be empty) in a special case, in which case you need to put a special value in it.

There are many different solutions to these problems, but that's not my point.

Ideally, this would never happen. It'd be great if from the start you knew everything your code had to do. Reality is that often working on a problem makes you realize small details and edge cases that weren't initially obvious. As you get better at writing code, you'll be better at seeing these before you start writing, but you'll never be perfect at it.

### 3½ ... Because you need to know what tool to use for the problem

Yunno' the expression when you have a hammer everything is nail? It's a real problem in programming, because while you *can* use a hammer to pound in a screw, sharpen a knife, or smooth out wood, it's probably going to be a real pain in the ass. Knowing that things like a screw driver, knife sharpener, and sander even *exist* is half the battle. Of course, this can go the other way too- just because an ultra-specialized tool exits, you may still want to make do with what you have - having more tools is great, but each tool requires maintence and upkeep of its own.

## Why is *learning* programming hard?

You're trying to learn how to model problems, how computers fundamentally work, how to make good solutions, and how to think ahead all at once, and on top of it all, you need to learn how to actually express your intent to the computer via text with some weird, very strict rules.

This sorta sucks.

## There's a better way. Don't worry about "Code".

At least at first, don't worry about what language you're using. That's such a minor part of programming anyway. Later we'll talk about how you really don't get to pick the languages you use anyway - the project dictates that. For now, let's build the problem solving skills to make woring with code less awful. How? Video Games!

## I Can't Believe It's Not Code!

Programming uses more-or-less the same brain muscles as puzzle video games. In a few cases, it's actually exactly the same brain muscles. So, while they're not free, I don't know of a better way to learn to program than starting with a few of these games (not all!). If you have no idea what to choose, [go with Factorio first](https://erikmcclure.com/blog/factorio-is-best-interview-we-have/).

| Title                                                        | More Game-like or More Programming |
| ------------------------------------------------------------ | ---------------------------------- |
| [The Signal State](https://store.steampowered.com/app/1577620/The_Signal_State/) | Ehh? (Logic Puzzle)                |
| [Opus Magnum](https://store.steampowered.com/app/558990/Opus_Magnum/) | Ehh? (Factory Sim-ish)             |
| [MHRD](https://store.steampowered.com/app/576030/MHRD/)      | Programming (Hardware)             |
| [TIS-100](https://store.steampowered.com/app/370360/TIS100/) | Programming (Assembly)             |
| [Shenzen I/O](https://store.steampowered.com/app/504210/SHENZHEN_IO/) | Programming (Hardware + Assembly)  |
| [Infinifactory](https://store.steampowered.com/app/300570/Infinifactory/) | Game (Factory Sim)                 |
| [Shapez](https://store.steampowered.com/app/1318690/shapez/) | Game (Factory Sim)                 |
| [Factorio](https://store.steampowered.com/app/427520/Factorio/) | Game (Factory Sim)                 |

 Even if you think "But I've written some code before!" because you've written at least a few lines of Python or Lua or JavaScript, you'd still probably benefit from starting here.

### Alright, I played some games / Ignored your adivce, now what?

Alright, depending on what you played, you may have been exposed to at least a tiny bit of code, but it's still pretty far off from "real" code. So, let's look at closer-to-real-but-not-really-yet code. Play around with these for a while. Get a feel for what things mean, the effect you can have on something in a tangible way using math and logic.

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

