## OHM's law, Nodal & Mesh Analysis, Superposition, Thevanins

### ⅏ ⟛ Ω

<script>
    document.getElementById("Circuits1Menu").open = true;
</script>

[TODO]

## Resistors

[TODO]

potentiometer read from Arduino full range (center tap or max resistor)

## LCR Meter

### Capacitors

[TODO]

[Kemet Capacitor Simulator](https://ksim3.kemet.com/capacitor-simulation)

[True, Reactive, Apparent & Deformed Power](https://www.youtube.com/watch?v=cxXmWZDwNEs&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

[Why electrolytic capacitors are actually kinda shitty 💩 (YouTube)](https://www.youtube.com/watch?v=WytU5uj78-4&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

[Ideal Capacitors aren't real](https://en.wikipedia.org/wiki/Two_capacitor_paradox)

[Cap Types: Electrolytic & Ceramic - Collin’s Lab Notes (YouTube)](https://www.youtube.com/watch?v=7wBMDoM7C_U)

[Capacitor Types P2: Tantalum & Film - Collin’s Lab Notes (YouTube)](https://www.youtube.com/watch?v=Th0evgETeBE)

### Inductors

[TODO]

[RGB LED, Inductively Powered, Frequency Controlled (YouTube)](https://www.youtube.com/watch?v=3DeOPN1Cl1Y&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

Motors

## Transformers, Variacs

[World's Most Powerful Pancake Slayer Tesla Coil? Melts Copper! (YouTube, Plasma Channel)](https://www.youtube.com/watch?v=TT4QolzknC0)

{{< columns >}}

### Planar Transformers

<--->

<img src="/eng/pipoehat.webp" alt="pi poeplus hat">

{{< attribution >}}image stolen from [Raspberry Pi PoE+ Hat](https://www.raspberrypi.org/products/poe-plus-hat/) product page{{< /attribution >}}

{{< /columns >}}

[TODO]

## Decibels

[TODO]

How to read logarithmic first, example for why they're needed: [log-scales demo in uPlot (github)](https://leeoniya.github.io/uPlot/demos/log-scales.html)



<iframe width="100%" height="500" src="https://www.youtube.com/embed/WZLQoP6CM0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## 

## Filters

The easiest way to understand filters is to see them in action with audio, so, well before we ever look at a circuit you should check out {{< button relref="Music/Effects/filter" color="music" >}}Opinionated Music - Filters{{< /button >}}.

There are many ways to delineate between types of filters, but initially the most convenient is to differentiate between **passive** filters and **active** filters. Passive filters don't need extra power supplied to them, the components used are only capacitors, resistors, and inductors (no transistors or integrated circuits like OpAmps which may require their own power).

We'll focus on these passive filters here first, then we'll check out active filters in the next chapter.

### RC Low / High Pass (Integrator/Differentiator)

https://en.wikipedia.org/wiki/RC_circuit

### RL Low / High Pass

https://en.wikipedia.org/wiki/RL_circuit

### RLC Low, High, Band Pass & Band Stop

{{< smalltext >}}Now with Resonance!{{< /smalltext >}}

https://en.wikipedia.org/wiki/RLC_circuit

### Why go Active?

Passive filters have some limitations, most notably their cutoff is pretty shallow. If we want to reach our stop band sooner, we need to use active components. More over, without having any gain, the total signal power will be reduced, which is often not desired.



[RC Low Pass Filter (YouTube - All About Electronics)](https://www.youtube.com/watch?v=_2L0l-E1Wx0)

[Series Resonance in RLC Circuit (YouTube - All About Electronics)](https://www.youtube.com/watch?v=YLGrugmDvc0)

[Transient Analysis of the RLC Circuit (YouTube - All About Electronics)](https://www.youtube.com/watch?v=B4TezoTORYA)

## Relays

https://en.wikipedia.org/wiki/Relay

In the next chapter, we'll look at transistors, which are what you probably think of when you think about an electrically controlled switch (that is, using one signal to turn another on and off) but if you just want to turn a signal on and off, don't need to do it very often, and need a huge ratio between the control power/voltage and the signal being switched, - for example, using a microcontroller to turn on or off an incandescent bulb - relays are awesome!

Fundamentally, relays are just a light switch with a magnet to pull the switch closed.

[TODO] solid state vs old school

