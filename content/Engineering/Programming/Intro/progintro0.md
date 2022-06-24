# Chapter 10.0

So, you want to write code? That's great. But before we ever write a line of text, let's talk about what it means to program.

Programming is two things: Math and Logic. Fundamentally, you know what both are. Math? Easy: 1+1=2. Logic? statments like "if bob is hungry and there is food available, bob eats." 

Combine the two, and you get statments like

"set a equal to 3, set b equal to 2. If a is greater than b, set b equal to the sum of a and b"

which can then be written as code:

```python
a = 3
b = 2
if(a>b):
	b = a + b
```

Which, is great and fundamentally true, but also pretty reductive. The problem is, this ignores *why programming is hard*. 

## Why is programming hard?

Programming is difficult for a few reasons:

### 1. Because you have to use math and logic to model your problem. 



### 2. Because not all solutions are created equal

There are some problems that may have a really obvious way to model them, but this really obvious way is so incredibly slow that it would take even a super computer millions of years to find the answer while there are clever solutions that may finish almost instantly.

### 3. Because making decesions before you know everything is hard



### 3½ ... Because you need to know what tool to use for the problem

Yunno' the expression when you have a hammer everything is nail? It's a real problem in programming, because while you *can* use a hammer to pound in a screw, sharpen a knife, or smooth out wood, it's probably going to be a real pain in the ass. Knowing that things like a screw driver, knife sharpener, and sander even *exist* is half the battle. Of course, this can go the other way too- just because an ultra-specialized tool exits, you may still want to make do with what you have.

## Why is *learning* programming hard?

You're trying to learn how to model problems, how computers fundamentally work, how to make good solutions, and how to think ahead all at once, and on top of it all, you need to learn how to actually express your intent to the computer via text with some weird, very strict rules.

This sorta sucks.

## There's a better way. Don't worry about "Code".

At least at first, don't worry about what language you're using. That's such a minor part of programming anyway. Later we'll talk about how you really don't get to pick the languages you use anyway - the project dictates that. For now, let's build the problem solving skills to make woring with code less awful.

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

