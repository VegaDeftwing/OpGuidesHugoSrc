---
title: "Effects"
slug: "Effects"

---

# Audio Effects

{{< tip >}}

A lot of audio effects boil down to automating some simple parameter. Some times you may not actually need a dedicated effect and can instead get by with using [Automation Lanes (YouTube, once upon a synth)](https://www.youtube.com/watch?v=WmgXmb2V6zE) in you Digital Audio Workstation (DAW)

 {{< /tip >}}

{{< tip >}}

Also don't get to deep into gear envy. Effects are awesome and it's tempting to either want to collect them and hoard them like a happy dragon on a pile of gold or feel like you can't make music without that one perfect effect. Unless you're falling down the rabbit hole of a DAWless setup and have a very limited amount of gear, you can almost certainly find something for free that will fill the need, or already have something. Most DAWs come with an impressive amount of built in effects: **Use these first!** They're usually lighter on your CPU and still sound really good.

{{< /tip >}}

{{< tip >}}

Immediately contradicting myself though, don't undervalue workflow either. In my experience, making music depends on a really quick brain to input device feedback loop. Being able to turn a physical knob and mash physical keys will often lead to better results if only because you're able to try things faster and try things by physically interacting with something that you may not have thought of otherwise. It's why guitars, MPE keyboards, and Eurorack are so great: they all give you a crazy amount of control and expression that is **literally** at your finger tips. The brain to input interface there is just so much better.</br></br>Find a happy middle ground. This often means getting some basic effects and gear that doesn't actually let you do anything new, but instead gives you a faster way of working with it that may open your mind to new possibilities.

{{< /tip >}}

**With that out of the way, onto the list of effects!**

## Tremolo

{{< columns >}}

This is probably the easiest to understand audio effect. Put simply, fade the volume in and out automatically. This can be done at different speeds (really fast for a 'deep' effect or slow for something pad-like) and with a bias so that the volume never completely cuts. It can also refer to a playing style where the same note is struck rapidly, leading to a similar effect. In VCV this can be done as simply as hooking up an LFO to a VCA's CV input like we did here, but turning up the frequency of the LFO-2 module (note, that here there is no bias so the volume does actually cut out):

<--->

![vcavult](/vcavult.gif)

{{< /columns >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/GkMYl3kY7aw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Vibrato

Vibrato as an effect requires pitch shifting, which I suppose actually makes it akin to FM synthesis as in Chapter 2, regardless, it's as simple as applying a, typically subtle, pitch 'wobble' into the sound. On a guitar this may be done with a pedal but more simply just by bending the string back and forth with the fingers quickly or using a whammy bar. In eurorack or VCV you can just use the fm input and hook up an LFO

<iframe width="100%" height="500" src="https://www.youtube.com/embed/JWWZK8KFp8I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Delay

Delay is basically echo. Take a sound in, and repeat it it it. Normally the main controls on a delay are 'Time', which controls how long of a delay there is before each repeat, 'Feedback' which controls how much the level is reduced each time the delay repeats (and in turn, how many audible repetitions there are), and 'Dry/Wet' which controls how the signal is blended, entirely dry will have no delay, entirely wet may even miss the initial sound adding a weird latency before you hear what you're playing. Some delays have additional controls, obviously I can't cover every possible delay, but I'll try to cover most:

Some delays instead of letting you set a delay time or 'tap' a delay tempo in actually synchronize to a clock signal input which lets the delayed repetitions always be in time with the rest of the song.

Stereo delays many have additional controls as well, most commonly offering a different delay time for the left and right channels. often a 'Ping Pong' mode will also be available where the left and right speaker alternate for the echo'd sound- 'ping' and 'ponging' out each side until the sound cuts out.

Some delays may also allow for unity or higher feedback, which will cause the delay to be infinite or, if above unity, infinitely grow in volume until it's just a distorted clipping mess. This can actually be a lot of fun to play with.

![Chronoblob](/chronblob.jpg)

> Quick Reference Card for the Chronblob^2 from Alright Devices, http://docs.alrightdevices.com/chronoblob2-manual.pdf 

Some delays let you also insert other things into the feedback path. This means you could do things such as having each repetition be progressively more filtered, cutting out more and more high end each time or putting a delay in the delay. (yo dawg, I heard you like delay?).

Some digital delays and most analog delays (especially bucket brigade delays[^BBD]) can produce interesting sounds if you change the delay time while audio is going through the buffer, resulting in a sort of pitch shift *whip* sound as the delay catches up or slows down.

[^BBD]: Bucket Brigade Delay is essentially a bunch of capacitors acting as the 'buckets' that are figuratively passed down the chain, moving from one bucket to the next each clock cycle, of course, this clock rate can be changed while it's running. The number of stages in a BBD determines how long of a delay you can get without having a massive determent to quality.

{{< columns >}}

It's also worth noting that by making delay time very short and having gain near unity, sending a brief trigger (impulse) can make a sound that sounds like a string being plucked. This is called [Karplus-Strong Synthesis](https://en.wikipedia.org/wiki/Karplus–Strong_string_synthesis). To the right I've shown a way to do this in VCV Rack.

<--->

![Karplus Strong](/KarplusStrong.png)

{{< /columns >}}

Finally, it's worth noting that there are a few interesting features some delays may have, such as letting the delay buffer be frozen to infinitely repeat what was playing at the time (unity gain, ignore input), reverse'd delay - having the initial sound play forward but each repeat play in reverse, pitch shifted delay- having each delay affected by a pitch shift, often done with octave up/down. Often, this pitch shifting is done via Granular Synthesis, as mentioned above. Using granular synthesis does allow for some other interesting options though, such as [Unfiltered Audio's Sandman Pro VST](https://www.unfilteredaudio.com/collections/plug-ins/products/sandman-pro).

![Quadravox](/Quadravox.png)

> Screenshot of [Eventide's Quadravox VST](https://www.eventideaudio.com/products/effects/diatonic-pitch-shift/quadravox), with pitch shifted delays

<iframe width="100%" height="500" src="https://www.youtube.com/embed/MNzBFgwkU0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Loopers

Loopers are most commonly seen in hardware and can be seen as a sort of mix between samplers and delays. Essentially you just tap in when you start playing, play what you want, then tap out, then, the loop of whatever you played will play back to you. There may be additional settings, such as a half speed effect.

Often you'll see loopers used for 'Live Looping' performances, where each layer is looped and overdubbed to create a full song

Here for example is a jam using the Ditto X4 looper (the box slightly blurry, closest to the camera), which is used to loop the guitar here.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/PffyRrUEPVM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Filters (LP, HP, BP, Notch)

https://www.perfectcircuit.com/signal/learning-synthesis-filters

### Low Pass Filters

Low Pass filters do what you think, they let the low frequencies pass and cut out the high frequencies. As with most filters, this will typically not be a sharp cutoff but instead be a gradual fading of the higher frequencies. Despite this, there is still a point called the cut off frequency, which is defined as the point where the signal is cut by 3db (what this means is discussed below). It's also pretty common for Low pass filters to have some resonance, where the frequency right at the cut off has a bit of a bump, as can be seen in this gif:

![lfofilt](/filter.gif)

#### Slew Limiting

#### Effect on Square Waves

### High Pass Filters

High pass filters act pretty much the same as low pass filters, except they do they cut the lows and pass the highs. High pass filters are ironically often actually used to give a bump in the bass using the resonant peak.

### Band Pass Filters

There's two kinds of bandpass filters, one, is a Lowpass and Highpass filter in series, where there's only a band left that can pass giving two potential resonant peaks, and then theres band pass filters which are more 'true' band pass filters that have a resonant peak in the middle.(need to confirm this)

### Notch Filters

Again, as the name implies, notch filters create a notch in the sound. Often used to correct for an issue in the sound, such as removing a 60hz hum. In Notch filters the resonance control actually changes how steep the notch is, so low resonance (Low Q) will cause the notch to be wider as the slope isn't very steep, but a high resonance (Q) will let you really pick out a specific frequency.

### Peak Filters

### Low and High Shelf Filters

Unlike all the filters until now which have a resonant peak, shelf filters actually boost or lower the volume all the way to the cut off frequenecy. Here, (1) is a low shelf filter, boosting all the lows (by a lot more than you'd ever actually want to) and (8) is a high-shelf set to cut the highs. for some context, (5) is a peak filter. With a normal Low/High pass filter, adding resonance, (dragging the point above the +0db line in this graph) would only make make a spike like this at the cut off point, not make a 'shelf'.

![](/filtershelves.jpg)

### Comb Filters

### All-Pass Filters (Phaser)

### Types of Filters

#### State Variable (Steiner-Parker)

#### Transistor Ladder

#### Diode Ladder

#### Sallen-Key

#### Operational Transconductance Amplifiers (OTA Filters)

CEM3320

#### Chebbychev

#### SEM

#### Wasp

#### Formant Filters

#### Polivoks

### Slope, Pole-Zero plots, dB

different analog models

### Filter Resonance (Q)

#### Self Oscillation

Filters with resonance can often be put into self oscillation by turning the resonance above a threshold for normal operation. In digital filters, you may need to give the filter some sort of brief input before it starts oscillating. With analog hardware, noise in the system, even if not normally noticeable, is typically enough to start the process. Most filters will output a pure sine wave when self oscillating. 

Here I start by feeding this filter an input from an oscillator module which is off screen, and sweep though the frequencies. Then I turn up the resonance a bit, do another sweep. Then I unplug the oscillator and sweep frequencies, you can see that it is silent. Finally, I turn the resonance above the self oscillation threshold, and you can hear output.

> Note, this module is a multi-mode filter, it's top 4 outputs are various poles of a low pass filter and the bottom four outputs are a highpass, 'band bost + notch', Phase-shifter, and Band Pass, respectively. Here, you're hearing the output of the band pass filter. The sound of self oscillation will be a sine wave for any of the outputs though. 

<iframe width="100%" height="500" src="https://www.youtube.com/embed/_12dHnLS474" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Pinging Filters

Here, the same filter is being put right at the edge of resonance and a square wave is 'pinging' the filter. It resonates heavily, but not enough to drive it into self oscillation. Different outputs may sound a bit different here.

This filter module actually has a dedicated ping input, which is why I can 'ping' it with a square wave, but typically you'd want to ping filters with a trigger (a very short pulse) rather than a square wave (which is high as much as it is low). You can think of this as the difference between striking a drum head and slapping a drum, but keeping your hand pressed on to the drum's skin when you do. Clearly the latter is going to mute the sound.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/11rZJGvAimk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Auto Wah

an Auto Wah or Envelope filter uses an envelope follower to control a filter's cut off. Essentially this means how loud you play will change the filter. These are normally used on guitar, but you can put them on anything really.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Dp1s0Ow2BJU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Equalizers

### Parametric

### Fixed Filter Banks

## Phaser

![phase](/phase.png)

## Flanger

Flanger works by taking a **very** short delay* which slowly modulated delay time and mixing this back with the original signal. This will result in some phase cancellation effects and give a similar sound to a phaser. The delay time modulation rate and depth, and delay feedback are the most commonly exposed controls. Flanger is probably most commonly used as an effect on guitar.

*note, that delay, in this context, means an actual time delay, just a buffer that makes sound take longer to get through if that makes sense. Of course, with feedback and mixing the original this will have the same effect as a delay in the 'echo' sense.

![Flanger](/Flanger.jpg)

> Flanger sort of makes a comb filter sound too, as you can see in the Spectrum Analyzer on the bottom.

![Pyramids](/Pyramids.jpg)

> The '[Pyramids](https://www.earthquakerdevices.com/pyramids)' Flanger pedal from Earthquaker Devices.
> 

## Chorus

## Reverb

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qaEM78hdsXA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Rooms

You'll often see reverbs listed as 'room', 'cathedral','cave', etc. These are trying to emulate the sound of playing in a closed space

### Plate

### Spring

### Constitutional

### Internals

Delay lines, allpass, comb filters

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Il_qdtQKnqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Distortion

<iframe width="100%" height="500" src="https://www.youtube.com/embed/erv4lit4aWY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[How Distortion Works in Music (Ben Sheron's Blog)](https://benmosheron.gitlab.io/blog/2020/04/26/distortion.html)

### Clipping (Soft & Hard)

### Waveshaping

### Wavefolding

This is one of those things where while the name is pretty self descriptive, you sorta just have to see the signal on a scope and hear it to see what it does.

Like any distortion, it ultimately adds in more harmonics, so it will make it sound higher pitch.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nxH6lyfpLxk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Parallel V Serial Wavefolding

### Drive, and Tubes

### Bitcrushing & Comparators

Bit crushing is often related to sample rate reduction as well, so one at a time:

Bit crushing is taking the signal and lowering the number of bits that are used to store it. This means it's an inherently digital effect. Most audio is processed at 16 or 24 bit, even at just 16 bit that means each sample point can be any of {{< katex >}}2^16 = 65536{{< /katex >}} values. Usually, audio is sampled with a Digital to Analog Coverter (DAC) at around 44.1khz. This means that 44,100 times a second the signal is sampled and the level (amplitude) of the signal is stored as a value between 0 and 65536. That bit depth (16bit) is good enough that you shouldn't really be able to tell it's digital once it's spit back though a Digital to Analog Converter (ADC). However, if we turn that bit depth down, let's say all the way to 8 bit now there are only {{< katex >}}2^8 = 256{{< /katex >}} levels of amplitude the signal can be represented with, even if we continue to sample at the same rate, this will cause audible distortion and bring a lo-fi sound. Crush even harder, say down to 2 bit (4 levels), and it turns into an outright destructive distortion that mangles the signal.

Similarly, the sample rate can be reduced to cause the signal to have issues with higher frequencies as a result of aliasing.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/59Nc9pPND8A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Todo, fabfilter distortion video]

## Stereo Effects

### Panning

Panning in general is just setting the side (left/right) that a sound is balanced on. Just slightly panning everything in a mix can even add a lot. Just like anything, you can also automate panning, but that brings up auto-panners, which are effects that do this rather quickly. Cableguy's Pancake 2 VST is free and sort of the go to for showing this, though there are some tools that may be easier to use. You may also see **rotary** effects, these emulate older speaker systems that did an effect similar to this by physically spinning the speaker horns in a circle. It has a slightly different sound and is worth exploring in it's own right

<iframe width="100%" height="500" src="https://www.youtube.com/embed/gJyssZeXEdk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="500" src="https://www.youtube.com/embed/TZlvi9428Lw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Widening

<iframe width="100%" height="500" src="https://www.youtube.com/embed/mwaZ85VeUoU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Noise Gating

### Gating other effects with a mix

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DPFuhvFV9aU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

gated verb, gated distortion

## Limiting

### Soft and Hard Clipping

## Compression

<iframe width="100%" height="500" src="https://www.youtube.com/embed/BIVfpsoPnOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< hint info >}}

The above is a 3 part series that explains compressors better than anything I can really write here

{{< /hint >}}

Compression can mean multiple things when talking about music and sometimes this makes talking about it sometimes confusing. Usually, when talking about compression the meaning is for compression that changes the *dynamics* of the audio, making loud sounds quieter and quiet sounds louder sort of ~squishing~ the sound. The other, unrealetd, definiton of compression is data compression, for example .mp3 vs .wav. We'll go into that later.

<p class="tip">Okay, this is sort of a lie. Compressors don't <i>technically</i> make anything louder. Only quieter. It's just that usually there's some input and/or output gain that makes it seem this way. If you first boost all your signals, then lower louder parts that's <i>nearly</i> the same thing as making the quiet stuff louder and louder stuff quiter. The reason this is worth bringing up is because not all compressors actually have that gain stage, so they will literally only make the loud sounds quieter and assume the user knows they need to compensate</p>

Usually compression has a few basic attributes that are relevent:

The 'Threshold' is what level the compressor has to be over to do anything at all. 'Attack' is the time it takes for the signal to be affected. All compressors will have some minimum attack time if they're happening live (there are some compressors with 'Lookahead' that solve this problem) which lets the transients (sharp changes) of louder sounds, like the start of a drum hit, get through to some extent, but more attack will let more of the drum transient through. Tune to taste, release is similar idea, but controls how the compressor behaves as it falls below the treshold, letting the compressor fade out with a given time instead of having a sharp cut. Compressors can be used to make drums really stand out, give guitars a longer sustained sound, or just glue the mix together better.

[TODO knee, sidechain]

[TODO, Dynamic range compression, Parallel Compression, Miltiband compression, different analog models (ie Fets v tube v optical)]

reverb, delay, pan, tremello, overdrive, distortion

<iframe width="100%" height="500" src="https://www.youtube.com/embed/j4NrWQljyso?list=PL5cGwrD7cv8jd0PSN2E8pFD97H3R5aQwN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[WTF is a Compander? (YouTube, Dan Worrall)](https://www.youtube.com/watch?v=ZRP5uI9mbzQ)

[TODO] parallel Compression

## Vocoders

[Ableton Live VOCODER Tutorial (YouTube, Once Upon A Synth)](https://www.youtube.com/watch?v=aiM_NQYhu1o)

[TODO] all of it... but also mention how a lot of vocie effects use a combo of autotune, vocode, and pitch shifting

## Glitch, Granular, and Pitch



# Neat tricks with effects

[My first WET / DRY / WET Guitar Pedal Rig (YouTube, Mark Johnston)](https://www.youtube.com/watch?v=uptuRNXR0Mw)

