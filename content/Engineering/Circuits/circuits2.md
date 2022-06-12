# Chapter 23 - Circuits & Semiconductors

{{< columns >}}

When I was a kid I thought about circuits as being alive, like [Cells at Work!](https://en.wikipedia.org/wiki/Cells_at_Work!), only little electrons going around busily keeping the heart of my toy working instead of anthropomorphic red blood cells working in the human body.

Now, as an adult - and a computer and electrical engineer at that - I still find this thought endearing. Though I've now come to see the physics and art of electronics to be even more beautiful when their true nature is really understood.

There's a joke you'll hear about those that work with these low level physics or that arrange logic gates to make full CPUs- that our job and passions boil down to teaching rocks to think.

So, let's lean how to teach some rocks.

<--->

![](/eng/noisedeck1.gif)

{{< attribution >}}

©Vega, made with [Noisedeck](https://noisedeck.app)

{{< /attribution >}}

{{< /columns >}}


---

<!--[TODO]-->

<!--Show everything in a circuit sim, fix heading levels (this is a mess)-->

<!--Possibly break up this chapter? Transistors, the opamp, etc alone may each justify their own chapters-->

<!--That said, I don't want to get to in the mud of transistor physics. I really want to focus on how/when/why to use what, not how they work as the physics is both pretty hard to grasp and not super useful. Still would like to mention that switching is what uses power and like process size things, but maybe not the chemistry or electron tunneling effects, at least not in great detail-->

# Chapter 23.1 - Semiconductors

TODO, looks very good briefly scrolling though it: https://lcamtuf.coredump.cx/electronics/

Digilent's 'Real Analog' course looks okay too, and I might write this guide assuming their analog parts kit: https://learn.digilentinc.com/classroom/realanalog/ 

## Semiconductors?

[Will gallium nitride electronics change the world? (YouTube, Engadget)](https://youtu.be/sfTXZP2DB20)

[TODO] pic of silicon bulb

https://en.wikipedia.org/wiki/Wafer_(electronics)

P/N junctions, etc.

https://hackaday.com/2015/02/08/photonic-reset-of-the-raspberry-pi-2/

## Diodes, the one way road

> A **diode** is a two-terminal electronic component that conducts current primarily in one direction (asymmetric conductance); it has low (ideally zero) resistance in one direction, and high (ideally infinite) resistance in the other.

{{< attribution >}}

[Diode page on Wikipedia](https://en.wikipedia.org/wiki/Diode) (which is actually super good)

{{< /attribution >}}

Alright, so in very basic terms, it's a part that only lets current flow in one direction (idealy). A one-way road for current. If you put a sine wave in, you'll get a sine-wave chopped in half out. Now, this assumes everything is ideal, as you'll really get more like the top 40% of the wave out, but we'll get to those details in a bit. For now, I recomend watching these videos:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Ll0IOk_Ltfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="500" src="https://www.youtube.com/embed/jvNNgUl3al0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

zeener, normal, bipolar

+ varistors , sparkgaps
+ Leds - getting current both ways, LED safety

[Zener Diode (YouTube - EEVblog)](https://www.youtube.com/watch?v=7FYHt5XviKc)

[Varicaps (Wikipedia)](https://en.wikipedia.org/wiki/Varicap)

[Tunnel Diodes (Wikipedia)](https://en.wikipedia.org/wiki/Tunnel_diode)

Shottky

[DIY Diode (Simplifier)](https://simplifier.neocities.org/diode.html) [Part 2](https://simplifier.neocities.org/diode2.html) [Part 3](https://simplifier.neocities.org/diode3.html) [Part 4: Power Diode](https://simplifier.neocities.org/powerdiode.html) 

### Diode Logic

[The Diode Clock](https://hackaday.io/project/11677-the-diode-clock)

## Transistors

[TODO]

[Transistor Families (JonDent - Blogspot)](https://djjondent.blogspot.com/2019/05/transistor-families.html)

[Bipolar Transistor @ electronics-tutorials.ws](https://www.electronics-tutorials.ws/transistor/tran_1.html)

tubes and how they work

[Introducing Triodes  (Aaron Lanterman - GT,  YouTube)](https://www.youtube.com/watch?v=2OoL1YF7mbM)

[DIY Triode (Simplifier)](https://simplifier.neocities.org/triode.html) [Part 2](https://simplifier.neocities.org/triode2.html) [Part 3](https://simplifier.neocities.org/triode3.html) [Part 4](https://simplifier.neocities.org/triode4.html) [Part 5: Power Triode](https://simplifier.neocities.org/power.html) [Part 6: Power Triode 2](https://simplifier.neocities.org/power2.html) [Part 7: Portable Triode](https://simplifier.neocities.org/portable.html), [Tetrode](https://simplifier.neocities.org/tetrode.html)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/yMrCCx6uqcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PNP V NPN

### Mosfets?

### JFETS?

### IJBTs?

#### Tubes

[That Elusive Valve Amp Sound, For Not a Lot! (There has to be a Catch) (hackday.com)](https://hackaday.com/2020/09/01/that-elusive-valve-amp-sound-for-not-a-lot-there-has-to-be-a-catch/)

## Integrated Circuits

[TODO]

https://hackaday.com/2019/05/20/integrated-circuits-can-be-easy-to-understand-with-the-right-teachers/
[Uncovering the Silicon: Demystifying How Chips are Built and How They Work (YouTube)](https://www.youtube.com/watch?v=VNzkhZBjo5k&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

[Reverse-engineering the TL431](http://www.righto.com/2014/05/reverse-engineering-tl431-most-common.html)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Distortion pedal with all homemade semiconductors, only one external component (cap for AC coupling) <a href="https://t.co/M7t3Gl1m5P">pic.twitter.com/M7t3Gl1m5P</a></p>&mdash; Sam Zeloof (@szeloof) <a href="https://twitter.com/szeloof/status/1280249239495479297?ref_src=twsrc%5Etfw">July 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Finally I learned how to do focus stacking with my macro (non-microscope) shots. 226 shots, 50µm camera shift per frame. Laowa 25mm F2.8@F4 on WeMacro rail. Stitched in Helicon Focus (pyramid, smoothing=1). 1 original photo for comparison. <a href="https://twitter.com/hashtag/WeMacro?src=hash&amp;ref_src=twsrc%5Etfw">#WeMacro</a> <a href="https://twitter.com/laowa_lens?ref_src=twsrc%5Etfw">@laowa_lens</a> <a href="https://twitter.com/hashtag/heliconfocus?src=hash&amp;ref_src=twsrc%5Etfw">#heliconfocus</a> <a href="https://t.co/yCdCIBXMRv">pic.twitter.com/yCdCIBXMRv</a></p>&mdash; Zeptobars (@Zeptobars) <a href="https://twitter.com/Zeptobars/status/1105594474036686852?ref_src=twsrc%5Etfw">March 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>





### 555, OpAmp, 74-Series Logic

[555 Timer IC (YouTube)](https://www.youtube.com/watch?v=fLaexx-NMj8&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

[555 as an amplifier (don't actually do this!)](http://www.555-timer-circuits.com/555-amplifier.html)

[Tiny Transistors' Clever TT555 Is a Pin-Compatible 555 Timer Built from Discrete Components (Hackster.io)](https://www.hackster.io/news/tiny-transistors-clever-tt555-is-a-pin-compatible-555-timer-built-from-discrete-components-40f684ef8c98)

potato semi

---

[TODO] note on price of chips that solve bigger problems - integrated filters, PLLs, VCAs, basically everything on [this list](https://wiki.analog.com/resources/tools-software/linux-drivers-all#driver_list)

# Chapter 23.2 - Op-Amps & Filters

## Op-Amps

[Handbook of Operation Amplifier Applications (TI)](https://www.ti.com/lit/an/sboa092b/sboa092b.pdf)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/7FYHt5XviKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### These things aren't actually ideal!

* Not all OpAmps are rail-to-rail, meaning if you give them -12 and +12 V rails, you may only be able to hit -10 and +10 or so.
* OpAmps **really** need clean power. If you don't put a small cap to filter the power right at the OpAmps VCC and Gnd pins, expect noise.
* There will almost certainly be at least a little bit of DC shift in the output
* You do not actually have infinite gain
* You do not have infinite bandwidth
* They do not actually have infinite input resistance, it's just really high.
* ... See [Real op amps, non-ideal aspects (Iowa State University : EE 230, PDF)](http://tuttle.merc.iastate.edu/ee230/topics/op_amps/non_Ideal_op_amp.pdf)

## Optical Electronics

[TODO]

Opto Isolators, Vacttrols, Photoresistors

## Crystal Oscillators

[TODO]

[Piezoelectricity - Why hitting crystals makes electricity (YouTube)](https://www.youtube.com/watch?v=wcJXA8IqYl8)

## PWM

[TODO]

[Driving a PAL tv over RF thanks to PWM harmonics (Hackaday)](https://hackaday.com/2020/08/26/driving-a-pal-tv-over-rf-thanks-to-pwm-harmonics/)

## ADC/DAC

[TODO]

https://en.wikipedia.org/wiki/Fourier_transform

Nyquist

## Active Filters

http://sim.okawa-denshi.jp/en/

[Chebyshev Filters (YouTube - All About Electronics)](https://www.youtube.com/watch?v=6JbOAxCAxGo)

[Butterworth Filters (YouTube - All About Electronics)](https://youtu.be/lc6QT8VjqVc)



[TODO]

## Waveguides

[Waveguides Explained (YouTube)](https://www.youtube.com/watch?v=r9-m17IPOco)

## Audio Devices

[TODO]

speakers, piezos, amps, mics and pickup patters

## TODO

add motors, analog meters, various connection standards, radio, flex/pressure sense, grounding (chassis, digital, analog, ground planes, etc.), solar/photo reactive,

## Relating AC and Music

[TODO]

Relate back to things like ADSR, Distortion, Reverb / Echo, Decibels (audio), etc. Use VCV RACK

# Chapter 23.3 - Displays

Ther are many [Reasons to Question Seven Segment Displays (Harold Thimbleby)](https://sci-hub.se/10.1145/2470654.2466190), espically today, as using *literally anything else* has gotten significantly easier. 

[TODO] Eink, OLED, TFT, etc.

[Russian nixie, VFD and numitron overview (Just another electronics blog)](https://justanotherelectronicsblog.com/?p=228)

Also, you may want to be able to update your display quickly, so keep in mind if your controller/device has either a native video output, or at least [DMA that you can abuse (Just another electronics blog)](https://justanotherelectronicsblog.com/?p=201).

# Chapter 23.4 - Safe Circuits

{{< best >}} [10 Ways to Destroy an Arduino (Rugged Circuits)](https://www.rugged-circuits.com/10-ways-to-destroy-an-arduino) {{< /best >}}

[Protecting Inputs in Digital Electronics (Digi-Key)](https://www.digikey.com/en/articles/protecting-inputs-in-digital-electronics)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/BeORD7aG3Jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Why 10,000 Volts at altitude is a Bad Idea (YouTube, Strange Parts)](https://www.youtube.com/watch?v=MIqK45nxcTo)

TODO: Efuses

# Chapter 23.5 - Parts & Tools you'll want to be aware exist

## Tools

* Wirewrapping

## Parts

* PLL
* Logic Level Shifters
* [LED Matrix Drivers](https://www.adafruit.com/product/2946)
* Digipots
* Rheostat
* [TL431 - Programmable Refrence](https://www.youtube.com/watch?v=isutYMU2HHU)
* Tempcos
* PROM's
* Regulators
* Thyristors
* Solenoid
* Ferrite beads
* Thermocouples
* Spark Gaps
* [Filter ICs](https://www.electro-smith.com/parts/2144)

# Chapter 23.6 - Rare and Dangerous Componets

* Dangerous
  * Tesla coils
  * High voltage/current/hot/whatever
  * Don't pretend to be an electrician
  * Don't use ATX psus for dumb things
  * [Some Components Are Just Bad, Like this USB-C Connector (Hackaday)](https://hackaday.com/2022/02/20/the-usb-c-connectors-you-never-knew-you-wanted-to-avoid/)
* Rare/Expensive
  * Tubes, NOS parts, etc. - TODO: CRTs and [Aquadag](https://en.wikipedia.org/wiki/Aquadag)



## Continued Reading:

[TODO]

At this point I highly recommend *'Practical Electronics for Inventors'* ISBN 978-1259587542, namely chapters 2-12, and 15-16. It's a very large, detailed book that does its best to keep things, well, practical.

https://taleri.files.wordpress.com/2014/02/practical_electronics_for_inventors_-_scherz_paul.pdf

[Hardware isn't generally copyrightable](https://web.archive.org/web/20120114234704/http://wiki.openhardware.org/Hardware_Isn't_Generally_Copyrightable)

[Hackady.io 2020 Circuit Sculpture Challenge](https://hackaday.io/contest/174093-2020-circuit-sculpture-challenge)

[RGB LED, Inductively Powered, Frequency Controlled (YouTube, Wolf Tronix)](https://www.youtube.com/watch?v=3DeOPN1Cl1Y)

[How to protect circuits from reversed voltage polarity! (YouTube, AfroTechMods)](https://www.youtube.com/watch?v=IrB-FPcv1Dc)

[Circuit Sculpture Workshop (Hackaday, Kristina Panos)](https://hackaday.com/2020/12/03/remoticon-video-circuit-sculpture-workshop/)

[Current Loop (Wikipedia)](https://en.wikipedia.org/wiki/Current_loop)

