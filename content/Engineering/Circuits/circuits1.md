# Chapter 23 - <span style="z-index:1;position: absolute;display: inline-block;color: #fff2;text-shadow:none;"> <sup> e<sup>-</sup><sub>e<sup>-</sup><sup>e<sup>-</sup></sup><sub>e<sup>-</sup></sub></sub></sup><sub>e-</sub><sup>e<sup>-</sup></sup><sub>e<sup>-</sup><sup>e<sup>-</sup></sup><sub>e<sup>-</sup></sub></sub></sup><sub>e<sup>-</sup></sub><sup>e<sup>-</sup></sup></span> Electrons work for you

[A simple guide to electronic components (YouTube)](https://www.youtube.com/watch?v=6Maq5IyHSuc&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

<!-- https://heavydeck.net/project/the-kludge-schematic-editor/ might be helpful for making schematics to explain things -->

<!-- Honestly, this is more to maintain than I'd really like to. I'd rather this be more on the tour-gide than guide-guide side, and be links with an order to explore to avoid the work. https://ultimateelectronicsbook.com/ is looking quite good for a start -->

# The Tools of the Trade

{{< columns >}}

Building, fixing, and analyzing circuitry requires the use of a some tools and appliances, so let's look at the basics of working with electricity by looking at what purpose the tools serve. While there are many more than those listed here, these are the most important ones and should be all you need for most applications. 

Unfortunately, there will be some cost involved in getting these. I'll do my best to give you advice to keep the cost down while still getting good equipment as we go over what each is for. I do really recommend having at least the most basic version of these tools to get started.

<--->

<img src="/nonfree/character/shade/solder.webp" style="width:80%;" />

{{< attribution >}}Character owned by Vega, art by [Shade](https://twitter.com/shadepiplup10){{< /attribution >}}

{{< /columns >}}

If you go for the absolute cheapest options and hunt for used equipment, it's reasonable to get everything for about \$175. I realize to many that's a tough pill to swallow, so if you just can't do that, that's 100% okay! You can get by for a good while with just a multimeter, the power supplied by a microcontroller, and simulation software. That brings the actual upfront cost down to around \$30. Of course, that's not counting the actual parts needed for whatever you're building, though parts tend to actually be quite inexpensive.

### The Multimeter

<iframe width="100%" height="500" src="https://www.youtube.com/embed/CBah3vz5b-U?list=PLAROrg3NQn7cyu01HpOv5BWo217XWBZu0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< tip >}}

note, the above video uses U=IR instead of V=IR like 'normal'. You'd think that engineers could just get along and pick consistent symbols, but, nope. The 'normal' way to write it is V (voltage) = I (current) * R (Resistance), though you'll also often see E=IR or, less common, U=IR like here.

{{< /tip >}}

The **Multi**meter generally serves three roles: A **volt**meter, an **Am**meter, and an **Ohm**meter. These are for measuring Voltage (in Volts), Current (in Amps), and Resistance (in Ohms) respectively. Furthermore, most multimeters can do continuity testing (checking if two points are connected).

## Resistance and the OHM meter

Resistors do one thing- resist current. Using the ohm meter function of your multimeter you can find out the amount of this resistance measured in ohms (ohms are represented with a capital omega, Ω) using an ohm meter is simple, just poke and prod with at least one component in between the leads. If there's nothing in between - that is the leads are touching one another- there will be no resistance, if there's no way for a DC voltage to get from one point to the other, that will be infinite or 'overload' resistance

## Voltage, Ground, and the Volt Meter

Voltage can be thought of as the 'pressure' in a hose. However, this pressure is relative to another point, the point we usually take reference to is called 'ground', though this doesn't have to be the case- you can measure the voltage across a single resistor or other component too. Just remember, measuring the voltage with both probes at a point or along the same wire doesn't make sense because a volt meter only tells you the voltage difference between two points. This would be like seeing the pressure difference in hose between two nearby points, obviously the pressure of one point minus the other will be 0.

{{< columns >}}

In general, there are two primary ways you will work with voltage- AC or DC, these stand for Alternating Current and Direct Current. DC is simply a constant voltage level output. AC on the other hand is any time varying signal, usually (but not always!) periodic (repeating) and most commonly a sine, though many other waves are used like square, triangle, saw, and any mixture of these, including the same signal with a DC offset. Not here that AC is *technically* referring to the current having this shape and not the voltage, it's just that in the basic scenario with a constant load, the current and voltage waves will look the same

<--->

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Waveforms.svg/557px-Waveforms.svg.png)

{{< /columns >}}

{{< columns >}}

Your multimeter will likely have two different settings for measuring voltage, one for DC and one for AC. Of note, *most* inexpensive multimeters are not true RMS (Root Mean Square) meters, meaning the reading of AC voltage is not an accurate measure of how much energy the wave can deliver unless it's a clean, no DC offset sine wave. Imagine a square wave like the above, with the same height, but where the peaks are thinner, with longer periods of rest in between (this is known as having a lower [duty cycle](https://en.wikipedia.org/wiki/Duty_cycle)), in this case the wave would still have the same Voltage Peak-to-Peak (Vpp) value but on average wouldn't be able to carry as much energy. That's where RMS comes in, it is effectively the measure of how much energy that waveform can deliver and is much, much more useful in general.  RMS is a topic we'll be covering later, but to wet your appetites, this image from Wikipedia may help:

<--->

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sine_wave_voltages.svg/400px-Sine_wave_voltages.svg.png" alt=" " style="-webkit-filter: invert(.85);">

{{< attribution >}}[RMS on Wikipedia](https://en.wikipedia.org/wiki/Root_mean_square){{< /attribution >}}

{{< /columns >}}



Of note, from a mathematical perspective all time varying signals can be represented as an infinite number of sine waves added together, this is actually used to do practical computation in many things, and what is used if you ever want to get into digital signal processing. I only mention it here because I foresee it being a rabbit hole someone could fall down when trying to gronk what RMS is. Again, we'll talk more about all of this latter, so I'm going to move on for now.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Periodic_identity_function.gif/400px-Periodic_identity_function.gif" alt=" " width="100%" style="-webkit-filter: invert(.85);">

{{< attribution >}}[Fourier Series on Wikipedia](https://en.wikipedia.org/wiki/Fourier_series#Examples){{< /attribution >}}

If you're feeling really adventurous {{< button relref="/engineering/signals/sigandsys" >}} Chapter 27 - Signals & Systems{{< /button >}} has more resources on this topic

## Current and the Ammeter

If voltage is the pressure in the hose, then current is how much water actually flows. This analogy holds up too, because if we use a resistor to kink the hose and the flow is restricted, the current will go down. If you were to stick a wire directly into the wall outlet, all the current the wall can give will try to flow though, but it can be restricted. To measure the current though a circuit we can't just probe between two points as before though. Instead, the probes need to form the exclusive path that part of the circuit can flow through.

In practice, this means the wire you want to measure current through would need to be cut and the ammeter's probes hooked up at either end, making the meter part of the circuit.

Current, just like voltage, can vary, and in AC circuits usually does. This leads to some more interesting cases like power factor, but we'll get to that later.

## Continuity Tester

The continuity tester does exactly what it's name implies, it makes sure two points are connected electrically. If you have a piece of metal and put both probes on, it should beep, but if you put the probes on rubber, they clearly will not be. The continuity tester isn't really much different from the ohm meter in operation, and many will actually display the resistance if there is any. The main use is that it beeps when the resistance is low enough to be confident two points are electrically connected or for checking that two points aren't connected (such as ensuring there's no short between two pins of a small part)

## OHM's Law

{{< katex >}}V=I\times R \implies R = \frac{V}{I} \implies I = \frac{V}{R}{{< /katex >}}

Repeat these over and over to yourself. Vee equals Eye Arr. Vee equals Eye Arr. Don't ever forget this. This should be stuck in your head so hard that you hear it when you sleep. This is Ohm's law, and it's the relationship between voltage, resistance, and current. With a fixed resistance, if voltage goes up, current must also go up. With a fixed voltage, if resistance goes down, current goes up (within the limits of the supply to provide that current). With a fixed current, if resistance goes up, voltage goes up (within the limits of the supply to continue supplying that current).

Also, less used, but also remember the relationship with power (in watts). {{< katex >}}P=I\times \implies V P=\frac{V^2}{R} \implies P = R \times I^2{{< /katex >}}

## The Lab Power Supply

Power Supply Units or 'PSU's are useful because, unlike your phone charger which puts out a singular voltage of 5 volts (ignoring fast charging), they can have their output voltage varied. Usually the range is between 1 and 35-ish volts, though if you need more, there are options. Though, probably most important for a lab power supply is current limiting, useful when you're unsure of how much current your circuit might sink or need it for safety. Sometimes you may just want to hook up your freshly made circuit with the current limit very low as a method of finding if there's a short.

{{< tip >}}

Not all power supplies sold as lab power supplies have current limiting. 

{{< /tip >}}

{{< tip >}}

Current kills! It *technically* only takes about 100mA or so to outright kill you, and with even less you can lose muscle control and get stuck holding the thing shocking you. Keep in mind, 100mA is really not much! Your phone charger can probably put out about 20 times this.... Sort of... What you should keep in mind is the resistance of the human body. This is massively variable (especially if your hands are wet or sweaty) but is generally so high that actually getting this much current to go *through* you is actually a bit of a challenge. So, the takeaway? Keep shit dry, respect high voltages which can just arc right through the skin, and don't be dumb ass. Will you die using a non-current limited supply? Probably not. Should you risk it when you don't have to? Hell no.

{{< /tip >}}

{{< speech big >}}

I do high voltage wood burning. This is an activity that kills about 30 people a year. How do I do it safely? I never get close to it while it is on - I throw the switch from a distance. Cool as it looks, it's not worth risking getting bit by the arc and having it stop my heart.

{{< /speech >}}

When looking for your first lab PSU, it may be overwhelming. You'll see some going for $40, and some going for $500. Generally, the cost difference gets you a few things: Multiple channels and cleaner output (undesired AC ripple in DC supply = bad). For starting out, nobody wants to spend that. Sure, having a dual supply is super nice so you can power opamps and what not, but you can get around that to start with by using a little module to generate those voltages for you from another supply. 

So, while there are some downsides, I recommend grabbing pretty much the cheapest lab power supply you can find that allows for setting current limiting (constant current, or CC is the same thing) and one of these boost/buck converters

[TODO] picture

Otherwise, if you can find a dual or tripple-output power supply where each channel has adjustable voltage and current limits used at a good price, go for it.

## The Frequency or Waveform Generator

Frequency generators can be used to output a signal that is alternating, unlike the DC signal of the Lab PSU.  Usually they'll support a range of wave shapes, frequencies, amplitudes, and DC offsets. Many support far more than this, though the applications for the more advanced modes are few. If you're just starting out, you can (with precautions) just use the audio output of your computer or buy an inexpensive one for under \$20, unlike the expensive example below:

![Image result for arbitrary function generator](https://upload.wikimedia.org/wikipedia/commons/f/f6/BK_Precision_4078_arbitrary_waveform_generator.jpg)

https://en.wikipedia.org/wiki/Arbitrary_waveform_generator

## The Oscilloscope

The oscilloscope (or OScope or simply Scope) allows you to see an AC signal and how it varies over time as a plot of Voltage on the Y axis and time on the X, Most OScopes will allow you to look at multiple signals at once, with one overlaid on the other. Furthermore, most support X-Y mode, where the plot is actually the voltage of one input as the X axis and the voltage of another as the Y, moving a dot and it's trail around the screen. In fact, this is how the first computer monitors worked:

<img src="/eng/oscopeastroids.webp" alt="Asteroids" height="400em">

Modern OScopes look much different than their phosphorescent green ancestors, though:

<img src="/eng/modernscope.webp" alt="Modern Scope" height="400em">

However, a decent 'Digital Storage Oscilloscope' or DSO like the one above run a minimum of \$300 at the time of writing, so many hobbyists opt for older scopes like this one:

<img src="/eng/oldscope.jpeg" alt="Old Scope" height="400em">

Note, a lot of hobbyists will try to get by on a really cheap new scope (less than $100), most often the really cheap under \$10 exposed red PCB one and just... don't. Either get a used scope (often around \$100) or get something good outright, as for "good" I'd really recommend the Rigol DS1054Z<a class="ptr">(1)</a>, or the [Diglent Analog Discovery 2](https://digilent.com/shop/analog-discovery-2-100ms-s-usb-oscilloscope-logic-analyzer-and-variable-power-supply/) which packs a lot of these tools all into one thing. I know it's a lot of money, but ideally this is something you can think of as an investment.

If you absolutely want the cheapest possible option, you can go through the mild headache of setting up a [Raspberry Pi Pico](https://www.adafruit.com/product/4864) (~$4) with [Sigrok-Pico](https://github.com/pico-coder/sigrok-pico). You'll need some resistors (very cheap) and *probably* the [breadboard with the pico's pinout](https://www.adafruit.com/product/5422). Total price should be around ~\$15. These are going to be god awful analog inputs though - they're only 7-bit, so you get 128 different values out and the max sample rate is 120Msps... not awesome.



But what are these actually used for day to day, and why would you want one? [TODO]

[Quake on an oscilloscope (YouTube)](https://www.youtube.com/watch?v=GIdiHh6mW58&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

## The Logic Analyzer

Logic Analyzers... analyze logic. Who knew? But what does that mean? Well, in reality they are *somewhat* similar to an oscilloscope in that they show a voltage over time, the difference is they only show either on or off over time based on the set TTL (Transistor–transistor logic) voltage. This lets you eavesdrop on the digital communication going on over a wire. Here's an example output:

![logic](/eng/logic.webp)

In this particular encoding, the longer high bumps represent a 1 and the short high bumps a 0, so you're looking at the binary that was sent over a wire. It's actually pretty rare that a wire sends raw high for a 1 and low for 0 so other schemes, like the one above, are used. For most schemes the software can actually be used to decode the received data into raw binary or if it was human-readable characters even that.

Using a logic analyzer is pretty simple, most today are connected to your computer over USB and then use software like Pulseview as shown above, then you just select the sample rate (how many times per second to check the wire, here 1MHz) and the number of samples to collect and hit start. You may want to set up a trigger too (speaking of, it's worthwhile to look up how triggering works on an OScope [TODO]) Most logic analyzers support 8 or more simultaneous data streams, though in the picture above I'm only using one.

[TODO] explain when a logic analyzer is actually used, and look at a quick example decode

[TODO] Evaluate [Using a pi Pico as a logic analyzer](https://hackaday.com/2022/03/02/need-a-logic-analyzer-use-your-pico/)

## Soldering Iron

https://www.digikey.com/en/maker/blogs/rohs-vs-non-rohs-soldering

## Heat Gun

## Software Simulation

[TODO]

Circuit Simulator

Simulide

VCV Rack?

[TODO- following title needs split up, possibly new chapter?]

## OHM's law, Nodal & Mesh Analysis, Superposition, Thevanins

[TODO]

## Resistors

[TODO]

potentiometer read from Arduino full range (center tap or max resistor)

## LCR Meter

### Capacitors

[TODO]

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

## Buttons, Switches, and Knobs

[TODO] SPST DPST etc.  Pots V encoders, encoders with buttons, slider pots. (inc motorized) etc.

## Relays

https://en.wikipedia.org/wiki/Relay

In the next chapter, we'll look at transistors, which are what you probably think of when you think about an electrically controlled switch (that is, using one signal to turn another on and off) but if you just want to turn a signal on and off, don't need to do it very often, and need a huge ratio between the control power/voltage and the signal being switched, - for example, using a microcontroller to turn on or off an incandescent bulb - relays are awesome!

Fundamentally, relays are just a light switch with a magnet to pull the switch closed.

[TODO] solid state vs old school

## Decibels

[TODO]

How to read logarithmic first, example for why they're needed: [log-scales demo in uPlot (github)](https://leeoniya.github.io/uPlot/demos/log-scales.html)



<iframe width="100%" height="500" src="https://www.youtube.com/embed/WZLQoP6CM0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Filters

The easiest way to understand filters is to see them in action with audio, so, well before we ever look at a circuit you should check out {{< button relref="Music/Effects/filter" color="music" >}}Opinionated Music - Filters{{< /button >}}.

There are many ways to delineate between types of filters, but initially the most convienent is to differentiate between **passive** filters and **active** filters. Passive filters don't need extra power supplied to them, the components used are only capacitors, resistors, and inductors (no transistors or integrated circuits like OpAmps which may require their own power).

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



## Further Reading

[TODO]

https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/voltage

https://en.wikipedia.org/wiki/Transmission_line

<ol hidden id="footnotes">
    <li>especially as you can easily unlock it to make it much better, using http://www.n5dux.com/ham/riglol/, albeit not 100% legally<li>
</ol>
