# Chapter 23 - Circuits & Semiconductors

{{< columns >}}

When I was a kid I thought about circuits as being alive, like [Cells at Work!](https://en.wikipedia.org/wiki/Cells_at_Work!), only little electrons going around busily keeping the heart of my toy working instead of anthropomorphic red blood cells working in the human body.

Now, as an adult - and a computer and electrical engineer at that - I still find this thought endearing. Though I've now come to see the physics and art of electronics to be even more beautiful when their true nature is really understood.

There's a joke you'll hear about those that work with these low level physics or that arrange logic gates to make full CPUs- that our job and passions boil down to teaching rocks to think.

So, let's lean how to teach some rocks.

<--->

![](/noisedeck1.gif)

{{< attribution >}}

©Vega, made with [Noisedeck](https://noisedeck.app)

{{< /attribution >}}

{{< /columns >}}

---

[TODO]

Show everything in a circuit sim, fix heading levels (this is a mess)

Possibly break up this chapter? Transistors, the opamp, etc alone may each justify their own chapters

That said, I don't want to get to in the mud of transistor physics. I really want to focus on how/when/why to use what, not how they work as the physics is both pretty hard to grasp and not super useful. Still would like to mention that switching is what uses power and like process size things, but maybe not the chemistry or electron tunneling effects, at least not in great detail

# Chapter 23.1 - Semiconductors

## Semiconductors?

[Will gallium nitride electronics change the world? (YouTube, Engadget)](https://youtu.be/sfTXZP2DB20)

[TODO] pic of silicon bulb

https://en.wikipedia.org/wiki/Wafer_(electronics)

P/N junctions, etc.

## Diodes, the one way road

> A **diode** is a two-terminal electronic component that conducts current primarily in one direction (asymmetric conductance); it has low (ideally zero) resistance in one direction, and high (ideally infinite) resistance in the other.

{{< attribution >}}

[Diode page on Wikipedia](https://en.wikipedia.org/wiki/Diode) (which is actually super good)

{{< /attribution >}}

Alright, so in very basic terms, it's a part that only lets current flow in one direction (idealy). A one-way road for current. If you put a sine wave in, you'll get a sine-wave chopped in half out. Now, this assumes everything is ideal, as you'll really get more like the top 40% of the wave out, but we'll get to those details in a bit. For now, I recomend watching this video:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Ll0IOk_Ltfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[TODO]

zeener, normal, bipolar

+ varistors , sparkgaps
+ Leds - getting current both ways, LED safety

[Varicaps (Wikipedia)](https://en.wikipedia.org/wiki/Varicap)

[Tunnel Diodes (Wikipedia)](https://en.wikipedia.org/wiki/Tunnel_diode)

### Diode Logic

[The Diode Clock](https://hackaday.io/project/11677-the-diode-clock)

## Transistors

[TODO]

[Transistor Families (JonDent - Blogspot)](https://djjondent.blogspot.com/2019/05/transistor-families.html)

[Bipolar Transistor @ electronics-tutorials.ws](https://www.electronics-tutorials.ws/transistor/tran_1.html)

tubes and how they work

### PNP V NPN

### IGBT, Mosfets?

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

potato semi

# Chapter 23.2 - Opamps & Filters

## Optical Electronics

[TODO]

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



## Continued Reading:

[TODO]

At this point I highly recommend *'Practical Electronics for Inventors'* ISBN 978-1259587542, namely chapters 2-12, and 15-16. It's a very large, detailed book that does it's best to keep things, well, practical.

https://taleri.files.wordpress.com/2014/02/practical_electronics_for_inventors_-_scherz_paul.pdf

[Hardware isn't generally copyrightable](https://web.archive.org/web/20120114234704/http://wiki.openhardware.org/Hardware_Isn't_Generally_Copyrightable)

[Hackady.io 2020 Circuit Sculuture Challange](https://hackaday.io/contest/174093-2020-circuit-sculpture-challenge)

[RGB LED, Inductively Powered, Frequency Controlled (YouTube, Wolf Tronix)](https://www.youtube.com/watch?v=3DeOPN1Cl1Y)

[How to protect circuits from reversed voltage polarity! (YouTube, AfroTechMods)](https://www.youtube.com/watch?v=IrB-FPcv1Dc)

[Circuit Sculpture Workshop (Hackaday, Kristina Panos)](https://hackaday.com/2020/12/03/remoticon-video-circuit-sculpture-workshop/)

[Current Loop (Wikipedia)](https://en.wikipedia.org/wiki/Current_loop)

