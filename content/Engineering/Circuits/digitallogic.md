# Chapter 25 - Digital Logic

Digital logic is what it sounds like- it's doing logical operations on digital data - 1's and 0's; True and False. Chain some of (er, a lot of) these logical operations together and you can do anything you want! Want to make your own CPU? Done. Want to make dedicated circuitry to do what your code does but hundreds of times faster? This is the way to do it.

As an example, here's a rather artistic representation of a digital logic circuit that takes in a four bit binary number and outputs seven different signals corresponding to the lights on a 7-segment LED to show the right number (in hexadecimal)

{{< columns >}}

| Binary (0b) | Hex (0x) | Decimal |
| ----------- | -------- | ------- |
| 0000        | 0        | 0       |
| 0001        | 1        | 1       |
| 0010        | 2        | 2       |
| 0011        | 3        | 3       |
| 0100        | 4        | 4       |
| 0101        | 5        | 5       |
| 0110        | 6        | 6       |
| 0111        | 6        | 7       |
| 1000        | 8        | 8       |
| 1001        | 9        | 9       |
| 1010        | A        | 10      |
| 1011        | B        | 11      |
| 1100        | C        | 12      |
| 1101        | D        | 13      |
| 1110        | E        | 14      |
| 1111        | F        | 15      |

<--->

<img src="/eng/logicloop.gif" alt="logicloop" height="760em" style="border-radius:50px;">

{{< attribution >}}lineart by https://merveilles.town/@chirrolafupa, </br>I (Vega) filled it in and turned it into a gif.</br> To access the original line art, use a [gemini](https://gemini.circumlunar.space) browser to go to</br> gemini://caracolito.mooo.com/coloring-computers/{{< /attribution >}}

{{< /columns >}}

Now, it's worth considering here that this circuit is probably not the most efficient way to do this. This could also be done by just using a look up table (LUT), in that case, all of those individual logic elements are skipped and the input bits are basically just used as an address to look up a different value. The end result is the same. We'll wrap back around to this idea later.

{{< speech big >}}

Some of this look familiar? If you've played Minecraft before, you may have gotten Redstone vibes from the GIF above. Those intuitions are correct. Many Redstone circuits are actually just clever ways of using the same binary logic ideas we're about to go over!

{{< /speech >}}

## What is digital logic?

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sTu3LwpF6XI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

ignoring the analog world (10%/90%)

### Truth Tables, K-Maps

min/max terms, Don't cares, SOP/POS, multiple out

[TODO] http://nandgame.com

## Basic Logic Gates

### Not

<img src="/eng/logic/Not-gate-en.svg" alt=" " height="80em" style="-webkit-filter: invert(1);filter: invert(1);">

{{< attribution >}}Image [CC BY-SA 3.0](https://commons.wikimedia.org/w/index.php?curid=829201), by [Heron](https://en.wikipedia.org/wiki/User:Heron) {{< /attribution >}}

| Input | Output |
| ----- | ------ |
| 0     | 1      |
| 1     | 0      |

[TODO] transistor implementation w/ CMOS, cost, power consumption at switch

{{< columns >}}

### AND

True **if** A **and** B are true, else false. Often written as A∧B or just AB

<img src="/eng/logic/AND_ANSI.svg" alt=" " height="80em" style="-webkit-filter: invert(1);filter: invert(1);">

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

<--->

### NAND (Not AND)

False **if** A **and** B are true, else True. Often written as ¬(A∧B), ((¬A)∧(¬B)), or A⊼B

<img src="/eng/logic/NAND_ANSI_Labelled.svg" alt=" " height="80em" style="-webkit-filter: invert(1);filter: invert(1);">

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

{{< /columns >}}

{{< columns >}}

### OR

True **if** A **or** B are true, else False. Note, this includes if both are true. Often written as A∨B or A+B

<img src="/eng/logic/OR_ANSI_Labelled.svg" alt=" " height="80em" style="-webkit-filter: invert(1);filter: invert(1);">

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 1      |

<--->

### NOR (Not OR)

True if neither A or B are True, else False. {{< katex >}} \text{Often written } \overline{x + y}{{< /katex >}}

</br>

<img src="/eng/logic/NOR_ANSI_Labelled.svg" alt=" " height="80em" style="-webkit-filter: invert(1);filter: invert(1);">

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 0      |

{{< /columns >}}

{{< columns >}}

### XOR (Exclusive OR)

True **if** A **or** B are **exclusively** True, else False. Note, this **does not** include if both are true. Often written as A⊕B

<img src="/eng/logic/XOR_ANSI.svg" alt=" " height="80em" style="-webkit-filter: invert(1);filter: invert(1);">

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

<--->

### XNOR (Exclusive Not OR ) (also known as XAND)

For two bits, most easily thought of as True if both bits are equal. More broadly, it is the negation of the exclusive or logic.

<img src="/eng/logic/Xnor-gate-en.svg" alt=" " height="80em" style="-webkit-filter: invert(1);filter: invert(1);">

{{< attribution >}}Image [CC BY-SA 3.0](https://commons.wikimedia.org/w/index.php?curid=829201), by [Heron](https://en.wikipedia.org/wiki/User:Heron) {{< /attribution >}}

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 1      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

{{< /columns >}}

### Mux & Demux

Go read the [Multiplexer](https://en.wikipedia.org/wiki/Multiplexer) Wikipedia article. It's actually excellent.

### Encoders

[TODO] like Binary to BCD

# SOP & POS

## Basic combinational logic

propagation delay, fan in/out, POS/POS 

### 2's Compliment, Floating Pt, Math

overflow, carry, ripple, fast, mul, shift-and-add mult, divider,

## Feedback Circuits

Oscillators, Monostable, Osc if high, Bistable (controllable/not controllable)

## Latches and Flip Flops

SR, Dl, edge triggering, Dff, Tff, JKff,

### Registers

\+ Shift registers

### Clocking & Counters

[TODO] dividers, multipliers, delay

## Memory Circuits

### Static Memory

### Dynamic Memory

https://www.adafruit.com/product/1895

## Making Some Circuits

There's a ton of simulators out there for making simple circuits educationally, but most sorta suck, so I'm going to delve right into something fun: Minecraft

> If you don't own Minecraft and can't afford it, [MineTest](https://www.minetest.net) with [mesecons](https://content.minetest.net/packages/Jeija/mesecons/) is an option. It's... not great. (sorry MineTest team, I still love what you're doing <3 ) But it is Open Source. If you're using Arch Linux (and updates haven't broken things since writing) you should be able to install `MineTest` from the community repo and `mesecons-git` from the AUR.

[Minetest Circuit Challenge](https://www.youtube.com/watch?v=nI8Q1bqT8QU&ab_channel=LiveOverflow)

## Half Adder



## Full Adder



## Analog To Digital & Digital To Analog

### Schmitt Triggers

{{< columns >}}

I like to think of a schmitt trigger as the logical equivalent of a heavy light switch. Once it's on, it takes a fair amount of force to turn off, and once it's off, it takes a fair amount of force to turn on, but in our case that force is a voltage.

 This means we can say "Until you see 1V at the input, don't turn on" and "Until you see -1V at the input don't turn off". If after being turned on, it went to .5, or even -.5V, it would stay on. If it was off and we gave it input of .5V, it would stay off. We have to cross the threshold either way to change state.

Of course, we can make schmitt triggers with different thresholds and output levels.

<--->

<img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Hysteresis_sharp_curve.svg" style="-webkit-filter: invert(1);filter: invert(1);">

{{< smalltext >}}The horizontal and vertical axes are input voltage and output voltage, respectively. *T* and −*T* are the switching thresholds, and *M* and −*M* are the output voltage levels.{{< /smalltext >}}

{{< attribution >}}Image by Alessio Damato - CC BY-SA 3.0. [From Wikipedia](https://commons.wikimedia.org/w/index.php?curid=528681).{{< /attribution >}}

{{< /columns >}}

### ADCs

[TODO] + Parallel Output vs via data bus

### DACs



## More Digital Logic resources

We'll come back to look at more complex digital logic in chapter 28 "Let's try out programmable logic" and **29 "Let's make our own CPU"** , but if you're hungry for even more, here are some resources

---

<iframe width="100%" height="500" src="https://www.youtube.com/embed/X8jsijhllIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
