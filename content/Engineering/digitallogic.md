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

<img src="/logicloop.gif" alt="logicloop" height="800em">

> lineart by https://merveilles.town/@chirrolafupa, I (Vega) filled it in and turned it into a gif. 

> To access the original line art, use a [gemini](https://gemini.circumlunar.space) browser to go to gemini://caracolito.mooo.com/coloring-computers/

{{< /columns >}}

[Todo, insert intro about Minecraft redstone]

## What is digital logic?

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sTu3LwpF6XI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

ignoring the analog world (10%/90%)

### Truth Tables, K-Maps

min/max terms, Don't cares, SOP/POS, multiple out

[TODO] http://nandgame.com

## Basic Logic Gates

[TODO] truth tables, circuit symbol, discrete logic symbol for all.

### Not

| Input | Output |
| ----- | ------ |
| 0     | 1      |
| 1     | 0      |

Truth table, transistor implementation pmos/nmos, cost, power consumption at switch

### AND

A∧B, AB, 

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 0      |
| 1       | 1       | 1      |

### NAND 

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 1      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

### Or

### Nor

### Exnor

### Xor

| Input A | Input B | Output |
| ------- | ------- | ------ |
| 0       | 0       | 0      |
| 0       | 1       | 1      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

### Exor

### Transmission,

### Mux

### Demux

### Encoders

## Basic combinational logic

propagation delay, fan in/out, POS/POS 

### 2's Compliment, Floating Pt, Math

overflow, carry, ripple, fast, mul, shift-and-add mult, divider,

## Latches and Flip Flops

SR, Dl, edge triggering, Dff, Tff, JKff,

### Registers

### Counters

## Making Some Circuits

There's a ton of simulators out there for making simple circuits educationally, but most sorta suck, so I'm going to delve right into something fun: Minecraft

> If you don't own MineCraft and can't afford it, [MineTest](https://www.minetest.net) with [mesecons](https://content.minetest.net/packages/Jeija/mesecons/) is an option. It's... not great. (sorry MineTest team, I still love what you're doing <3 ) But it is Open Source. If you're using Arch Linux (and updates haven't broken things since writing) you should be able to install `MineTest` from the community repo and `mesecons-git` from the AUR.

[Minetest Circuit Challange](https://www.youtube.com/watch?v=nI8Q1bqT8QU&ab_channel=LiveOverflow)

## More Digital Logic resources

We'll come back to look at more complex digital logic in chapter 28 "Let's try out programmable logic" and **29 "Let's make our own CPU"** , but if you're hungry for even more, here are some resources

---

<iframe width="100%" height="500" src="https://www.youtube.com/embed/X8jsijhllIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
