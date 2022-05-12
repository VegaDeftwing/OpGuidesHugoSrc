# Chapter 24 - Digital Logic

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

<img src="/eng/logicloop.gif" alt="logicloop" height="760em">

{{< attribution >}}lineart by https://merveilles.town/@chirrolafupa, </br>I (Vega) filled it in and turned it into a gif.</br> To access the original line art, use a [gemini](https://gemini.circumlunar.space) browser to go to</br> gemini://caracolito.mooo.com/coloring-computers/{{< /attribution >}}

{{< /columns >}}

[Todo, insert intro about Minecraft redstone]

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

[TODO] transistor implementation w/ cmost, cost, power consumption at switch

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

True **if** A **or** B are **exclusively** True, else False. Note, this **does not** includes if both are true. Often written as A⊕B

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

### Transmission

### Mux

### Demux

### Encoders



# SOP & POS

## Basic combinational logic

propagation delay, fan in/out, POS/POS 

### 2's Compliment, Floating Pt, Math

overflow, carry, ripple, fast, mul, shift-and-add mult, divider,

## Feedback Circuits

Oscilators, Monostable, Osc if high, Bistable (contrlollable/not controlable)

## Latches and Flip Flops

SR, Dl, edge triggering, Dff, Tff, JKff,

### Registers

\+ Shift registers

### Counters

## Memory Circuits

### Static Memory

### Dynamic Memory

https://www.adafruit.com/product/1895

## Making Some Circuits

There's a ton of simulators out there for making simple circuits educationally, but most sorta suck, so I'm going to delve right into something fun: Minecraft

> If you don't own MineCraft and can't afford it, [MineTest](https://www.minetest.net) with [mesecons](https://content.minetest.net/packages/Jeija/mesecons/) is an option. It's... not great. (sorry MineTest team, I still love what you're doing <3 ) But it is Open Source. If you're using Arch Linux (and updates haven't broken things since writing) you should be able to install `MineTest` from the community repo and `mesecons-git` from the AUR.

[Minetest Circuit Challange](https://www.youtube.com/watch?v=nI8Q1bqT8QU&ab_channel=LiveOverflow)

## More Digital Logic resources

We'll come back to look at more complex digital logic in chapter 28 "Let's try out programmable logic" and **29 "Let's make our own CPU"** , but if you're hungry for even more, here are some resources

---

<iframe width="100%" height="500" src="https://www.youtube.com/embed/X8jsijhllIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
