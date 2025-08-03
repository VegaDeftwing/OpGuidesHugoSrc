# Filters (LP, HP, BP, Notch)

{{< devegg >}}

See the signal processing chapters. If you're trying to do real time DSP and if you want to modulate the cutoff, you're probably stuck with an IIR. FWIW, the delay of an FIR means the linear phase is often worse than not anyway. If licensing isn't an issue, you'll probably want to start with at least https://www.musicdsp.org/en/latest/Filters/index.html or really any DSP library. Implementing a well performing filter isn't that hard. Implementing a well performing, variable-cutoff-filter is doable. Implementing one better than open source libraries is a heckin' undertaking. All of that said, if you're after a particular character or Virtual Analog, you'll have to start from scratch anyway.

{{< /devegg >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nzgzng2hb50" title="Synthesizer Filters!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://www.perfectcircuit.com/signal/learning-synthesis-filters

## Low Pass Filters

Low Pass filters do what you think, they let the low frequencies pass and cut out the high frequencies. As with most filters, this will typically not be a sharp cutoff but instead be a gradual fading of the higher frequencies. Despite this, there is still a point called the cut off frequency, which is defined as the point where the signal is cut by 3db (what this means is discussed below). It's also pretty common for Low pass filters to have some resonance, where the frequency right at the cut off has a bit of a bump, as can be seen in this gif:

![lfofilt](/music/filter.gif)

### Slew Limiting

Slew, in a circuits, is usually a bad thing. When working with digital circuits - circuits that operate on binary values, 1's and 0's - we want our voltages to be either high or low, so we really, really want clean square waves.

Unfortunately, in reality we can't get perfect square waves. When transitioning from a low signal to a high signal or a high signal to a low signal, there's a bit of a curve. In digital circuit a lower slew - longer transitions - is almost universally bad.

{{< columns >}}

What does this have to do with synths and filters? Well, a basic tool for making the slew rate lower (longer transitions) is... a low pass filter. They're the same thing.

**But,** some slew rate limiters can let us set the <u>rise</u> and <u>fall</u> times independently!

<--->

<video src="/music/slew.m4v" controls autoplay width="100%"></video>

{{< /columns >}}

In synthesizers, we can use slew to our advantage for a lot of things. For audio, it can be used as a very strange kind of filter, sure, but for control signals it can be used for much more.

One common use is legato - how long it takes to go to a new note when you press a different key on the piano. If you use a slew limited with individual controls, you can make it really neat slow rise to a higher pitch but an instantaneous fall back to a lower pitch (or vis-versa)

## High Pass Filters

High pass filters act pretty much the same as low pass filters, except they do they cut the lows and pass the highs. High pass filters are, ironically, often actually used to give a bump in the bass using the resonant peak.

Note, one use of high pass filters is to remove "mudd" and/or DC offset. This is VERY useful, but should be done with some care, as while we may not hear it, audio content bellow 20Hz can matter: [Undetectable very-low frequency sound increases dancing at a live concert](https://www.cell.com/current-biology/fulltext/S0960-9822(22)01535-4).

## Band Pass Filters

There are two kinds of bandpass filters:

* First, is a "fake" band pass, where a Lowpass and Highpass filter are placed in series, where there's only a band left that can pass, giving two distinct resonant peaks at the edges of the pass-band
* Then there's band pass filters which are true band pass filters that have a resonant peak in the middle.

Usually if someone is talking about a bandpass, they mean the latter. Bandpasses tend to be ignored outside of using them in an EQ, but they can be fun in their own right. Definitely give them a shot. If you're playing around in VCV Rack, many, many filters have a "BP" output or input for this. [Stabile](https://library.vcvrack.com/VultModulesFree/Stabile) and [Tangents](https://library.vcvrack.com/VultModulesFree/Tangents) from Vult are good free options with a lot of character.

## Notch Filters

Again, as the name implies, notch filters create a notch in the sound. Often used to correct for an issue in the sound, such as removing a 60hz hum. In Notch filters the resonance control actually changes how steep the notch is, so low resonance (Low Q) will cause the notch to be wider as the slope isn't very steep, but a high resonance (Q) will let you really pick out a specific frequency.

## Peak Filters

These do what they sound like. You pick a frequency and add a peak there. Typically these are used in an Equalizer and can have a negative Q to allow for something similar to a notch, only they dip in instead of totally annihilating the frequency range.

## Low and High Shelf Filters

Unlike all the filters until now which have a resonant peak, shelf filters actually boost or lower the volume all the way to the cut off frequency. In the image below, <span style="color:red;">(1)</span> is a low shelf filter, boosting all the lows (by a lot more than you'd ever actually want to) and <span style="color:red;">(8)</span> is a high-shelf set to cut the highs. 

Additionally, <span style="color:red;">(5)</span> is a peak filter. 

Contrast this to a normal Low/High pass filter, adding resonance, (dragging the point above the +0db line in this graph) would only make a spike like this at the cut off point, before falling off, not make a shelf. To clarify, in the image below, <span style="color:red;">(1)</span> has been changed to a low-**pass** filter with the same settings, with the line being a different color. 

This new <span style="color:#CCCCFF;"><b>(1)</b></span>, where the line before it is still centered around 0 and it peak up to the 'dot' and then falls off quickly, makes the frequencies after it silent so that <span style="color:red;">(5)</span> and <span style="color:red;">(8)</span> do nothing - the lines falls off far before it gets to <span style="color:red;">(5)</span>.

Obviously, This is dramatically different than the low-**shelf** at the same point.

![](/music/lowshelf.webp)

## Comb Filters

{{< devegg >}}

Comb filters can be feed-forward or feedback. They sound pretty different. The actually difference equation is dumb simple and easy to impliment, since it's usually just a single delay'd sample. Here be dragons for passing into instability though. Pick your coefficents wisely. 

{{< /devegg >}}

A comb filter produces a series of equally spaced notches or peaks in the frequency response of the filter. This creates a characteristic "comb" pattern in the frequency domain, which is why the filter is called a "comb" filter.

While most of the filters up until now require some intention to bring about, it's fairly easy to make a comb filter on accident, which can cause problems.

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/0wvlrBx3U4c" title="Everything You Need To Know About Comb Filtering [with Audio Examples]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## All-Pass Filters (Phaser)

{{< quote "[Wikipedia \"All Pass Filter\"](https://en.wikipedia.org/wiki/All-pass_filter)" >}}

An **all-pass filter** is a signal processing filter that passes all frequencies equally in gain, but changes the phase relationship among various frequencies. Most types of filter reduce the amplitude (i.e. the magnitude) of the signal applied to it for some values of frequency, whereas the all-pass filter allows all frequencies through without changes in level.

{{< /quote >}}

So... it's not really a "filter" in the traditional sense. Rather, it just changes the phase after the specificed frequency. By moving that frequency around, you can get an effect called a "phaser" which can add a lot of movement to a sound.

The [Phaser (Effect)](https://en.wikipedia.org/wiki/Phasear_(effect)) Wikipedia page has some nice audio examples of this.

Famous examples of phaser effects include the MXR Phase 90 pedal and the EHX Small Stone and Bad Stone. 

## Filter Circuits

{{< tip >}}

Electrical jargon incoming. You don't need to understand everything here.

{{< /tip >}}

### Passive Filters

By combining a single capacitor and resistor, you can make either a single-pole low pass or high pass filter, depending on which one is going to ground. 

This really means they're dirt cheap to make, but don't have steep slopes or any resonance. Still, they're literally *everywhere*, often they're included just to block DC signals or to avoid really high frequency noise from getting in (or out, to avoid your music gear from accidentally becoming a radio jammer!)

### Sallen-Key

This is usually baby's first active filter - adding resonance and a sharper cutoff - the things musicians want. Making one requires a single Op-Amp (a common, cheap component - but not as cheap as resistors and capacitors) and a handful of resistors and capacitors. It creates a 2-pole filter, which is a fancy way of saying it only slowly attenuates frequency above the cutoff. Sallen-Key filters can be built as Low Pass, High Pass, or Band-Pass.

Sallen-Key filters are capable of self oscillation.

At high resonance values, the two poles sometimes are obviously separated, causing the slope to have a second peak part way down.

### State Variable (Steiner-Parker)

State variable filters 

They tend to sound a smidgen brighten and smoother than Sallen–Key filters. They have a 12dB slope, so nice and gentle still.

### Transistor Ladder

![TODO](/common/TODO.svg)

Moog Filters

### Diode Ladder

The Diode Ladder filter is most famous for it's use in the TB-303 synthesizer which is *the sound* of Acid music...

{{< columns >}}

A bit confusingly, if you look at a 303's schematic you'll see that the "diode ladder" is actually made up of transistors. There's some historical context here, but the TL;DR version is that today, if you make it using diodes, the difference should be minimal because if you look closely at one transistor in that ladder, you'll see two of the pins on each are connected to each other, which effectively turns the transistor into a diode. Yay, electronics.

<--->

![image-20230225142423745](/music/303.webp)

{{< attribution >}}Image from this [TD-3 Mod Guide, schematic from Nordcore](https://maffez.com/wp-content/uploads/2020/04/TD3MODS_VERSION1_999.pdf){{< /attribution >}}

{{< /columns >}}

If you're into electronics, see [Designing a diode ladder filter from scratch (Moritz Klein)](https://www.youtube.com/watch?v=jvNNgUl3al0).

### Operational Transconductance Amplifiers (OTA Filters)

![TODO](/common/TODO.svg)

CEM3320

### Chebyshev

### SEM

### Wasp (CMOS)

The filter from the EDP Wasp is extremely famous for being a typical state variable filter where, to save money, they replaced the Operational Amplifiers (Op-Amps) with digital-logic inverters, which creates a crazy heavily distorted filter sound unlike anything else. 

{{< devegg >}}

Welcome back to virtual analog hell. The Wasp basically has a fuster-cluck of almost-hard-clipping internal to it's feedback path. This get's messy quickly. See https://dafx2020.mdw.ac.at/proceedings/papers/DAFx20in22_paper_34.pdf You might also be able to extrapolate something out of https://www.youtube.com/watch?v=DnO5sMU5DqU 

{{< /devegg >}}

### Polivoks (Поливокс)

Again, a famous filter from a particular synth, and again just another State Variable Filter with a twist:

{{< quote "[u/erroneousbosh](https://www.reddit.com/user/erroneousbosh/)" >}}

The Polivoks filter is just an SVF but the integrator capacitor is actually the stabilising capacitor right there inside the OTA (it's a funny implementation of an OTA at that).

{{< /quote >}}

The end result is a fair amount of distortion and multiple peaks down the filters slope. It's aggressive as hell and super fun. Plus, it can self oscillate.

{{< devegg >}}

Back to VA hell. I wish you luck.

{{< /devegg >}}

### Formant Filters

If you play with some band-pass filters for long enough, you'll accidentally make something that sounds like a human making a vowel noise. This is known. The frequencies of the peaks for each vowel can also be googled, but if you're just making music, you can usually just drop a formant filter that will let you pick (or morph!) between the vowels.

{{< devegg >}}

https://www.musicdsp.org/en/latest/Filters/110-formant-filter.html https://ccrma.stanford.edu/~jos/fp/Formant_Filtering_Example.html 

{{< /devegg >}}

## Slope, Pole-Zero plots, dB

![TODO](/common/TODO.svg)

<!-- I haven't written this yet, but the intent is for this to be the for-dummies version of the DSP chapters. Just skip this. -->

## Filter Resonance (Q)

![TODO](/common/TODO.svg)

<!-- As above: I haven't written this yet, but the intent is for this to be the for-dummies version of the DSP chapters. Just skip this. -->

## Self Oscillation

Filters with resonance can often be put into self oscillation by turning the resonance above a threshold for normal operation. In digital filters, you may need to give the filter some sort of brief input before it starts oscillating. With analog hardware, noise in the system, even if not normally noticeable, is typically enough to start the process. Most filters will output a pure sine wave when self oscillating. 

Here I start by feeding this filter an input from an oscillator module which is off screen, and sweep though the frequencies. Then I turn up the resonance a bit, do another sweep. Then I unplug the oscillator and sweep frequencies, you can see that it is silent. Finally, I turn the resonance above the self oscillation threshold, and you can hear the output.

> Note, this module is a multi-mode filter, its top 4 outputs are various poles of a low pass filter and the bottom four outputs are a highpass, 'band boost + notch', Phase-shifter, and Band Pass, respectively. Here, you're hearing the output of the band pass filter. The sound of self oscillation will be a sine wave for any of the outputs, though. 

<iframe width="100%" height="500" src="https://www.youtube.com/embed/_12dHnLS474" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Pinging Filters

<script>
    document.getElementById("effectMenu").open = true;
</script>

This filter module actually has a dedicated ping input, which is why I can 'ping' it with a square wave, but typically you'd want to ping filters with a trigger (a very short pulse) rather than a square wave (which is high as much as it is low). You can think of this as the difference between striking a drum head and slapping a drum, but keeping your hand pressed on to the drum's skin when you do. Clearly the latter is going to mute the sound.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/11rZJGvAimk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Auto Wah

an Auto Wah or Envelope filter uses an envelope follower to control a filter's cut off. Essentially, this means how loud you play will change the filter. These are normally used on guitar, but you can put them on anything really.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Dp1s0Ow2BJU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### FIR, IIR?

![TODO](/common/TODO.svg)

<!-- As above, I haven't written this yet, but the intent is for this to be the for-dummies version of the DSP chapters. Just skip this. -->

Finite Impose Response, Infinite Impulse Response- ref Signals from Engineering

## Equalizers

<!-- Unlike everywhere else where you probably want IIR. You may want FIR on the EQ, especially if it's going on the master as otherwise it's easy to absolutely sheck phase response and make bass sound like total crap. -->

### Parametric

### Graphic

### Dynamic

### Fixed Filter Banks

<!-- Literally a bunch of filters with set coefficients. Typically, these are filters with more character than a traditional "pure" "good" filter, but not tons of character either.-->

<script>
    document.getElementById("effectMenu").open = true;
</script>
