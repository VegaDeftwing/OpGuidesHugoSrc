# Chapter 10.0 - Let's Write Some Code

<script>
    document.getElementById("codeMenu").open = true;
</script>

Knowing how to program will give you deep control over the most advanced tool mankind has ever made: The computer. More over, because we use computers as extensions of our own minds (and as a collective, with the Internet) it will literally expand your ability to process information as you're no longer limited to the inputs and computation systems that other programmers have built for you. 

You'll also be able to make computers solve problems, do repetitive tasks, and allow you to express artistic ideas in ways that are hard to grasp before you've started. I can't express in text how amazing some of the things I've seen thrown together in an afternoon by a single programmer are.

So, yeah, programming is really freakin' awesome. Unfortunately, it's also pretty hard for most people is it will make you use your brain in ways you're not used to. So, before we ever write a line of code, let's talk about why learning to program is difficult.

## Why is programming hard?

**(and how to programmers think)**

Programming is difficult for a few reasons:

### 1. Because you have to use math, logic, and data structures to model your problem. 

Computers can only really do one thing: manipulate bits. There are a bunch of tools for how to do this at your disposal though, and programming languages help *abstract* the way it is done so you rarely, if ever, need to think about the bits themselves. These tools include basic math operations like addition, subtraction, multiplication, and division as well logical operations like conditions such as "**if** X **is less than** Y, **then** set Z to the value of X, **otherwise** set Z to the value of X times Y"

```python
if x < y:
	z = x
else:
	z = x * y
```

and "**While** X is less than Y, decrease the value of X by Y divided by X".

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



(There's a lot more data structures than just this one, which is called a dictionary)

There's many more of operations, logical statements, and data structures you can use - We'll get there soon! - but in general, all programs are made out of these things. Now, with that in mind, think about making something like a video game. The task sounds almost impossible, right? Well, not really. As long as you can break the problem down, it's not so bad.

See, programming isn't really all that different from baking.

When you bake, you don't just "make a cake". That is, the recipe doesn't say

1. Make a cake.

Because, well, that's not a recipe. A good recipe has a list of ingredients, will tell you how to mix them, and has a lot of individual steps.

The big difference with programming is you don't know the steps going in. You have to make them up as you go! So, you need to break the problem down to a point where using math, logic, and data structures to model *that individual step* becomes obvious. You know what you want, now you have to figure out how to get there.

The baking analogy goes a bit further too, because if you're making a cake you *could* go milk a cow, raise chickens to get the eggs, farm the wheat and process it to get the flour, churn the butter, etc. but most people don't.

When you're programming, you don't have to start from scratch. In fact, you almost never will. You'll build on the work of others and leave the flour making and cow milking to the people who have perfected it, made it safe, and kept it cost-effective. We'll talk about this later too.

### 2. Because not all solutions are created equal

There are some problems that may have a really obvious way to model them, but this really obvious way is so incredibly slow that it would take even a super computer millions of years to find the answer while there are clever solutions that may finish almost instantly.

There are some solutions which may seem very straight forward, but miss an edge case and so fail spectacularly.

There are some solutions which may work easily now, but make adding functionality later difficult.

There are some solutions which may make adding later functionality easy, but take more time to implement than you have.

There are some solutions which are really clever, fast, and work perfectly and are very, very hard to understand when you go to read your code later.

There are some solutions which are easy to understand and write, but don't scale well.

For example, say you have a list of numbers, and you need to add one to all of them

```python
# You have
my_numbers = [41,68,419,80084]
# You want
my_numbers = [42,69,420,80085]
```

You could actually write a line of code to increment each one,

```
my_numbers[0] = my_numbers[0] + 1
my_numbers[1] = my_numbers[1] + 1
my_numbers[2] = my_numbers[2] + 1
my_numbers[3] = my_numbers[3] + 1
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

Though that's only a small block of code. Most problems will be much larger and abstract, and have wildly ranging solutions. This leads in to the next point, 

### 3. Because making decisions before you know everything is hard

For the above example, say you thought that list would only ever have two numbers in it, so you do go with the first solution. Then, you realize down the line, that, oh, no, that list is actually going to have 100 numbers in it, so you write it with `my_numbers = [x + 1 for x in my_numbers]`, but then, later, you find out you need to add 10 *if*  the number is greater than 100. Then you find out this list might have nothing in it (just be empty) in a special case, in which case you need to put a special value in it.

{{< details "How I'd do that, not that it matters right now" >}}

The obvious way to do this is something like 

```python
if my_numbers: #if the list is NOT empty
	for i in range(len(my_numbers)):
        if my_numbers[i] > 100:
            my_numbers[i] = my_numbers[i] + 10
        else:
            my_numbers[i] = my_numbers[i] + 1
else:
    my_numbers.append(1)
```

However, I like this solution a bit better:

```python
if my_numbers:
	my_numbers = list(map(lambda x : x + 10 if x > 100 else x + 1, my_numbers))
else:
    my_numbers.append(1)
```

This solution uses some less common features of Python and should look weird to you. You can probably figure out the first one, as what `range()` and `len()` do are pretty obvious, but what the hell are `map()` and `lambda`? We'll get there.

Don't worry about being able to write code like this for now. Hell, you probably shouldn't *want to* yet as, especially at first, writing code you can understand is more important than writing fast or pretty code: my preferred solution is roughly twice as fast, though even with 50,000 numbers, the "slow" solution only takes .0068 seconds on my computer.

Still, if there were any other edge cases I'd probably go back to the obvious way, as it would be easier to read.

As one more aside, note above I said,

> if  the number is greater than 100

this is an easy thing to screw up in programming, as this is different from

> if  the number is greater than **or equal to** 100"

{{< /details >}}

There are many different solutions to these problems, but that's not my point.

Ideally, this would never happen. It'd be great if from the start you knew everything your code had to do. Reality is that often working on a problem makes you realize small details and edge cases that weren't initially obvious or that seemed absurd, so you just didn't think about them. Many of these are about input validation, for example,

* Say a user has to enter a name, should they be able to enter "" (no letters at all)? What about "v̸̼͙̹̮̩̳͉̩̕ḛ̸̡̲͂̈́̽̽g̴̢̠̭̗̘͎̉͝a̶̖̯̳̯̭͚̹̹̎̀͝" or "🌢" or "ᵛᵉᵍᵃ" or "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
* Say you're making an inventory system in a game, and you have the ability to use a bag in the inventory to hold more items. If you're not careful, you might add the ability to put a bag in the bag: you'd be able to hold infinite items as you stack bags into each other!

Others are relevant to the design of a larger system, and require much more effort to change. For example, Minecraft used to generate worlds that were 128 blocks tall, with the bottom of the world being layer 1. Then, they decided to update the worlds to be 256 blocks tall, with the change being relatively straight forward as newly generated and previously generated sections of the worlds were both just given 128 blocks of vertical space to build into - this could be appended to in a relatively straight forward way - just add more "air blocks" to the sky. 

Then things got weird. They decided to add 64 more blocks going up **and** down. This required a few weird changes. First, the world now goes from -64 to 320, with '0' being roughly the middle of the underground before the bottom of the world (the old bottom). Strange number representation aside, there were extreme technical challenges to this, as the newly added downward space needed to be blended into previously generated worlds without this room. Additionally, the newly generated space was entirely different - the look of caves and the terrain above them had been entirely overhauled. Blending the old and new to combat the prior design decision likely required more complex and difficult work than the actual new world generation itself. 

From the [FAQ page](https://www.minecraft.net/en-us/article/caves---cliffs--part-ii-out-today-java) they implemented it such that new caves generate under the existing world and the new terrain blends with the old. It replaces what was previously the bottom layer (bedrock) with "deepslate" and then generates new caves under this. Just think about the challenge and stakes here! If anything goes wrong, it could destroy countless hours of work of players. It would really make the players lose trust in the developers and interest in the game.

Even before your code is released to the world and there's this potential expectation of backwards compatibility you may well design yourself into a corner that requires significant back peddling and re-work. Maybe you realize that two things you planned to run at the same time both need access to the same resource. Maybe you find out the scope of the project needs to be bigger, and that adding these new features will require old ones to change too. Shit happens.

As you get better at writing code, you'll be better at seeing these before you start writing, but you'll never be perfect at it because you can never know everything. 

Unfortunately, this all has security implications too. If you don't fully understand the limits of what you write, someone else will find them for you, and they may not have good intentions.

### 3½ ... Because you need to know what tool to use for the problem

Yunno' the expression "when you have a hammer everything is nail"? It's a real problem in programming, because while you *can* use a hammer to pound in a screw, sharpen a knife, or smooth out wood, it's probably going to be a real pain in the ass. Knowing that things like a screwdriver, knife sharpener, and sander even *exist* is half the battle. Of course, this can go the other way too- just because an ultra-specialized tool exits, you may still want to make do with what you have - having more tools is great, but each tool requires maintenance and upkeep of its own.

This is one of those things that comes with experience and knowing what problems tend to grow into unmaintainable monsters and so should be done by using a tool that solves the problem for you. For example: time.

Time sounds easy. Storing the time, reading the time, etc. Yeah, no. Time zones, daylight savings, leap years, leap seconds, date formats, etc. will all make you hate your life as soon as you start to mess with time. You absolutely should use libraries and tools other people have made if you're working with time.

On the other hand, some people over-use external tools. The [is-odd](https://www.npmjs.com/package/is-odd) JavaScript package, which just checks if a number is odd, has **425,000** downloads this week. As you'll see later, doing this in code is as simple as 

```python
if input_number % 2 == 1:
	return True
```

{{< smalltext >}}\* I've written this in Python here to match the rest of the page, it is *slightly* different in JavaScript{{< /smalltext >}}

This is extra dumb when you realize that the maintainers of the is-odd package *could* push a malicious update doing something as mundane as breaking it (making it is *always* say a number is odd, April Fools!) or making it check if a number is odd while also running code to mine cryptocurrency in the background!

To make matters worse, there's a problem of deciding what level of abstraction you want to work at. While it's possible to learn it all and be good at everything, most programmers pick a niche. Maybe you're into web dev. Maybe you want to make games. (both of which are considered high-level). Maybe you want to make hardware move and be right down at the circuit level (which is known as low level). Most good low level programmers aren't great high-level programmers, and vis-versa. Both can be a ton of fun though, and so you'll inevitably want to do some of both.

As an extreme example, there's these things called "Game jams". These are events where programmer/artist/masochists (or small teams of masochists) will make an entire game in one weekend. The vast majority of these are going to use platforms which already give them things like a way to render 3D or 2D objects to the screen, to handle real time user input, physics between objects, etc. Making all of that stuff from scratch, for most programmers, would take months if not years to get something even remotely functional. In one weekend, they have to use everything they can to make the goals manageable.

My main point though is you should kind of always have an angel and a devil on your shoulders, one asking "Is this a problem I can solve easily with what I have" and the other saying "You should go look into what exists to make this easier"

Finding the right tool will occupy a lot of your time programming at first, and will take up a fair amount of time again if you ever change the kind of code you're working on. For example, at the start, you'll have a lot to learn about things that are sort of meta for programming, like what text editor to use, what tools you need to build and run your code, what a debugger is, etc. plus a few extremely common tools for the program's logic itself, like [Regex](https://en.wikipedia.org/wiki/Regular_expression) for text processing.

As you dive into a project, you'll often find you need something that make specific extremely hard problems much easier, but you'll have to learn how to use that tool. For example, the math behind doing AI work is pretty damn complicated and getting it to run quickly is really important and very, very hard. Fortunately, if you google "How do I write AI code" you should pretty quickly run into mentions of "Tensorflow" and "Pytorch", both of which are incredible tools that will make AI stuff, not-quite-*easy* but it will change the bar from *nearly impossible* to "Oh, I can do that".

Again, these vary from problem to problem, but it's actually insane how many really hard problem are approachable because of the existence of good, application-specific tools. 

### 4. Because your code has to run on hardware (and probably an OS too)

Running on hardware varies in importance. 

If you're writing a quick utility that doesn't do much and runs infrequently, it can be a bit slow and it doesn't really matter. An extra few hundredth of a second won't be noticeable to anyone in that case.

But what about a game or an audio effect? For a game, you probably want to get at least 60FPS, for audio you're probably processing that audio 48,000 times a second. That means for the game you need to do all your calculations in 1/60th of a second window (or faster) consistently. For audio you have 20 microseconds to process each sample.

This means you need to take full advantage of your hardware to hit those targets. 

This means looking into ways you can speed things up. For most games, this means using the graphics card (though usually you'd be using something that does this for you). For audio stuff, this means digging into each function call to figure out what's slowing you down. Maybe you're trying to compute `sin(x)` and `sin()` is just to slow, so you may need to dive into learning about [approximations of sine](https://datagenetics.com/blog/july12019/index.html) or figure out how to use a [look up table](https://www.daycounter.com/Calculators/Sine-Generator-Calculator.phtml). 

Of course, this same concept applies to more than audio and games, you can find performance critical code in anything - though in many applications "bad" performance is relative. Users won't care if their accounting software takes an extra few hundredths of a second to finish a calculation.

You'll also have to know what causes slow downs.

For example, your processor and graphics card are crazy fast, but your bulk storage (SSD or HDD) isn't. If you're making a game and you try to load the next level in full between two frames you can ... it's just that those two frames are going to be a hell of a lot more than 1/60th of a second apart and the user is going to wonder if their game just froze.

> This brings up a common problem in programming:
>
> Is it faster/better to check if something needs done, and only do it if it does, or is it faster to just do it regardless (doing something useless if it doesn't actually need done)
>
> The answer is a massive "It depends". It depends on the hardware. It depends on if consistent times or lowest total time is important. It depends on if doing the thing will slow other things down. It depends on how much time it takes to check vs how much time it takes to do.
>
> It also depends on if you care at all. Does writing the check take more code? That's also a factor. Every line of code is another line where you could accidentally introduce a bug.

Deeper still, you may be writing code for an *embedded system*. These are chips that, usually, are roughly on par in power with a computer from the 80s but consume very little power (Some as little as *nano*amps when in low-power states) and let you directly send electrical signals to other parts, like LEDs, motors, etc.

On these systems there is a memory address that if you write a '1' to (binary 1's and 0's, I mean) it will make a pin on the physical chip on which the processor resides output a higher voltage. Similarly, you'll have memory address you can read that will tell you if there's a signal on that pin. These devices are everywhere. In your keyboard (even if you're on a laptop) and your mouse. In your alarm clock. In your Bluetooth speakers. In industrial equipment. In your smart light bulbs. In many newer guitar pedals. In your TV. Even a normal computer (or things you'd think of as one, like a game console or SmartTV) will have multiple of these really lame computers in them.

This opens an enormous can of worms. If you're working on something like this, you'll often have to make sure those signals are actually 'clean' enough for the processor to read and that when you toggle a pin, the signal you send gets to where it's going like it should, even though you might be toggling these pins a million times a second.

Then there's the Operating System (Windows, Mac, Linux) that you're code - if not for an embedded system - is likely to be running on. These will provide systems for things like multi-threading (letting your program do two or more things at once), a way to access file (you can't go changing bytes on the hard drive at will - the OS will make you ask for a file to read, modify, and save), and access to networking. You can think of the OS as very beefy waiter at a bar. He'll happily take your order and get you what you need, but if you try to go into the kitchen yourself, he won't hesitate to throw you out.

In short: How you use your hardware dictates performance, the OS may limit how you use your hardware, but make doing so much easier and more secure.

## Why is *learning* programming hard?

You're trying to learn how to model problems, how computers fundamentally work, how to make good solutions, and how to think ahead all at once, and on top of it all, you need to learn how to actually express your intent to the computer via text with some weird, very strict rules that occasionally let you express something that **looks** correct but isn't.

This sorta sucks.

## There's a better way. Don't worry about "Code".

At least at first, don't worry about what language you're using or even how to write code. That's such a minor part of programming anyway. Later we'll talk about how you really don't get to pick the languages you use anyway - the project dictates that. For now, let's build the problem-solving skills to make working with code less awful. How? Video Games!

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

### Alright, I played some games / Ignored your advice, now what?

Alright, depending on what you played, you may have been exposed to at least a tiny bit of code, but it's still pretty far off from "real" code. So, let's look at closer-to-real-but-not-really-yet code. Play around with these for a while. Get a feel for what things mean, the effect you can have on something in a tangible way using math and logic.

{{< columns >}}

<iframe src="https://tixy.land" width="100%em" height="500em"></iframe>

<--->

This is [tixy.land](https://tixy.land) -- Click on the moving dots to advanced though a lil' tutorial and some examples

Here in tixy land, you can try out some code. I don't want to lead you to anything. Just, type something. See what happens.

Even if you don't understand all the math or what the symbols mean I'm sure you can get a rough idea of what's going on.

You can usually make something cool by just entering a bunch of trig and making complex functions you don't truly understand. You're learning, that's fine, no shame. Here, for example, is one I made by wandering around trig functions, for example,  `asin((t/9*(i/32*sin(t/4))*y)%5)`

{{< /columns >}}

{{< speech big >}}

At risk of going off on a pretty big tangent, I recommend checking out some tixyland-like sites

https://hexy.now.sh is inspired by tixy but has some extra, interesting features, if you're having fun with tixy.land it's worth checking out.

https://doersino.github.io/tixyz/ is the same as tixy, but adds a 3rd dimension

https://play.ertdfgcvb.xyz/ is similar, but lets you write dramatically more advanced code

{{< /speech >}}

