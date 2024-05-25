# Dynamics

<script>
    document.getElementById("effectMenu").open = true;
</script>
## Distortion

<!-- https://static.roland.com/assets/media/pdf/guitar_effects_guidebook_vol_20.pdf -->

<iframe width="100%" height="500" src="https://www.youtube.com/embed/erv4lit4aWY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[How Distortion Works in Music (Ben Sheron's Blog)](https://benmosheron.gitlab.io/blog/2020/04/26/distortion.html)

### Dynamics & Transients

When thinking of effects we have some nice mental models for what things sound like. Delay is just echos, reverb adds space, etc. Distortions *sound* simple enough, they just make it more aggressive - the problem is, they sometimes don't. We have to think like an audio engineer here. 

First, they sound massively different depending on the volume and frequency content of the input. That's why in the above video he mentions that putting an EQ before and after a distortion that would otherwise cancel each other out can still sound different than no EQ at all.

But it's still more complicated than that - Distortions also tend to massively impact transients and your sustain. That is, if you have a lot of distortion on, the *pluck* of the guitar string may get swallowed up and the amount of time your string can ring out before it becomes inaudible will go up considerably.

![distortionvolcurve](/music/distortionvolcurve.svg)

Sort of like this. Here, the blue curve is the volume of a guitar though no distortion over time, and the red though a distortion. The white dashed line is the level where it fades into the background so that it no longer audible.

Because the blue has a lot more difference between the initial bump (the pluck of the string) and the fade out, that pluck will be much more noticeable. {{< vale >}}On the other hand{{< /vale >}}, the blue line gets to a level where we can't hear it sooner.

How a distortion handles that 'pluck' at the start - the initial transient - can make a huge difference in the resulting sound. Armed with this knowledge, when mixing and playing with effects you can try to tweak things intentionally to let some of the pluck through or make the sustain even longer, or kill the pluck entirely to make a controllable wall of noise. What matters is you understand there's more to distortion than just making the sound spicier and louder.

### Clipping (Soft & Hard)

Clipping does what it sounds like, it just chops off the wave. While you can use it as an effect intentionally, it's origin - which you're {{< vale >}}likely{{< /vale >}} to do on accident yourself - is from {{< vale >}}accidentally{{< /vale >}} driving a louder signal into something than it's meant to handle. When this happens, the part of the incoming wave that is out of range is going to get chopped off no matter what, but there are different ways that can happen: it can be **hard** or **soft**.

Hard clipping will let the original signal pass though undisturbed until it crosses a threshold (positive or negative), at which point the value snaps to that threshold. Soft clipping will start to bend the signal away as it gets close, avoiding the hard cut edges.

Here, visually this should help:

{{< devegg >}}

In code, hard clipping *technically* is as easy as two comparisons. You might be able to do some SSE voodoo to {{< vale >}}accelerate{{< /vale >}} this. See https://stackoverflow.com/questions/427477/fastest-way-to-clamp-a-real-fixed-floating-point-value, but the real complexity comes in finding a way to do that which doesn't alias. Good luck!

Soft clipping will be more expensive than hard. Using an actually trig call like `atan()` will wreck you on some platforms, so probably either use a LUT or polynomial approximation.

{{< /devegg >}}

<div id="softclip"> </div>

<div class="slidecontainer">
  Gain: <input type="range" min="0" max="3" step="0.01" value="1" class="slider" id="softSlider">
 Type: <button id="softButton">Hard</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>

<script>
var softHardSwitch = false;
const softButton = document.getElementById('softButton');
softButton.addEventListener('click', function() {
	softHardSwitch = !softHardSwitch;
	if(softHardSwitch){
		softButton.textContent = `Soft`;
	} else {
		softButton.textContent = `Hard`;
	}
});
var offset = 0;
var strum = .6;
var softSlider = document.getElementById("softSlider");
function setup() { 
  myCanvas = createCanvas(400, 200);
  myCanvas.parent("softclip");
} 
function draw() { 
  let softSliderVal = softSlider.value;
  background(31);
  stroke(100);
  strokeWeight(4);
  noFill();
  vertex(0, height);
  beginShape();
  for(var x = -5; x < width + 10; x += 5){
    var angle = offset + x * 0.04;
    var xval = sin(angle) * softSliderVal
	var y = map(xval , -strum, strum, 50, 150);
    vertex(x, y);
  }
  endShape();
  vertex(width, height);
  stroke(196,72,199);
  vertex(0, height);
  beginShape();
  for(var x = -10; x < width + 20; x += 3){
    var angle = offset + x * 0.04;
    var xval = sin(angle) * softSliderVal
    if(softHardSwitch){
        if(xval < -1){
            xval = -2/3;
        } else if (xval > 1){
            xval = 2/3;
        } else{
            xval = xval - ((xval * xval * xval)/3);
        }
    } else {
    	if(xval < -2/3){
            xval = -2/3;
        } else if (xval > 2/3){
            xval = 2/3;
        } else{
            xval = xval;
        }
    }
	var y = map(xval , -strum, strum, 50, 150);
	endShape();
    vertex(x, y);
  }
  vertex(width, height);
  offset += 0.05;
}
</script>

<!--- TODO: 1. Make this allow for multiple canvases. https://github.com/processing/p5.js/wiki/Global-and-instance-mode 2. Add actual audio and FFT stuff https://p5js.org/reference/#/p5.FFT --->

<style>
canvas {
	width: 100%;
}
</style>

The key takeaway from the two different kinds of clipping is that while both add harmonics (which is the whole point of distortion) hard clipping adds {{< vale >}}**significantly**{{< /vale >}} more, furthermore, soft-clipping {{< vale >}}mostly{{< /vale >}} adds even harmonics, while hard clipping will give you odd harmonics. That is, it adds a lot more to the higher frequencies. 

If you intentionally use clipping as a distortion and not for limiting the signal, the effect will need to apply some gain to bring the signal back up to the same amplitude, but if this {{< vale >}}is done, it will usually be a few{{< /vale >}} Loudness Units<footnote>See <a href="https://en.wikipedia.org/wiki/EBU_R_128">EBU R 128 (Wikipedia)</a> if you're curious how loudness is usually defined. I'll talk about this more in the mixing and mastering chapter</footnote> higher in volume. This is because more harmonics *sounds* louder. Mix with care.

### Waveshaping

{{< columns >}}

Wave shaping is a pretty broad term, but usually it refers to a method of mapping a wave onto another. It's basically just a function, like you've seen in math class, if you think y=x, that's a simple 45° slope, and that corresponds to this:

---

The dashed line represents an example input and output. Because here the line is that simple x=y the input and output values are exactly the same. If we change this line to be something else though, that's where the magic happens

<--->

![waveshaper](/music/waveshaper.svg)

{{< /columns >}}


![waveshaping](/music/waveshaping.gif)

{{< attribution >}}This gif uses [Nysthi's BZ-Mapper](https://library.vcvrack.com/NYSTHI/BZ-MAPPER){{< /attribution >}}

despite the fact that I'm showing this on a basic oscillator, that isn't necessary. The input wave can be anything, drums, guitar, whatever you want. This kind of distortion can get pretty crazy pretty quickly.

If you want to know more {{< best >}}[Learning Synthesis: Waveshapers](https://www.perfectcircuit.com/signal/learning-synthesis-waveshapers){{< /best >}}

explains things beautifully, and also goes into some of the other kinds of distortion and wave mangling up ahead

{{< devegg >}}

Most obvious implementation is a LUT, but if you have 16bit+ audio you're looking at a freakishly large LUT. Actually generating whatever function you need and doing the math is probably wise. If you know certain values are common, do a LUT for those.

{{< /devegg >}}

### Wavefolding

{{< columns >}}

![](/music/wavefolding.gif)

<--->

This is one of those things where while the name is pretty self-descriptive, you sorta just have to see the signal on a scope and hear it to see what it does.

Like any distortion, it ultimately adds in more harmonics, so it will make any sound you give it have a lot more high frequency content; {{< vale >}}however,{{< /vale >}} folding in particular adds a ludicrous amount, so much so they're sometimes deemed "Anti-Filters".

{{< /columns >}}

Wavefolding eats the transition between high and low, the slopes, so with a square wave it has nothing to grab onto and so does nothing except for maybe changing the level. Because of this, you'll most often see simple waves forms like sines fed into wavefolders, like sines, triangles, and saws.

If you're looking to get crazy, check out [Befaco's Chopping Kinky](https://library.vcvrack.com/Befaco/ChoppingKinky) (available in hardware and VCV) which basically replaces the top half of the wave with one input, the bottom half of the wave with another, and then lets you fold both of those inputs. It's absolutely nuts. [See the manual here](https://befaco.org/docs/Chopping_Kinky/Chopping%20Kinky_User_Manual.pdf) if you're still confused.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nxH6lyfpLxk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< devegg >}}

Wave folding is very easily done by using `fmod()` and compensating for the reduced signal with gain. This is relatively efficient, but if you need more control you can also just generate a polynomial/LUT to do the folding. That's a bit harder to add control to though. See https://ccrma.stanford.edu/~jatin/ComplexNonlinearities/Wavefolder.html

{{< /devegg >}}

### Drive, and Tubes

<!-- TODO, explain how you can get better distortions by turning the volume *down* "you can't really distort a square wave, it's already maximally distorted" -->

![TODO](/common/TODO.svg)

{{< devegg >}}

 "Drive" is just soft clipping with some extra nonlinearities. Tubes are hard to emulate because they do a bit of everything. Soft clipping, adding some harmonics, compression, some hysteresis - basically, this is entering the fustercluck that is Virtual Analog and there be dragons. See https://infocomp.dcc.ufla.br/index.php/infocomp/article/view/369/353

{{< /devegg >}}

### Bitcrushing & Comparators

Bit crushing is often related to sample rate reduction as well, so one at a time:

Bit crushing is taking the signal and lowering the number of bits used to store it. This means it's an inherently digital effect. Most audio {{< vale >}}is processed{{< /vale >}} at 16 or 24 bit, even at just 16 bit that means each sample point can be any of {{< katex >}}2^16 = 65536{{< /katex >}} values. Usually, audio is sampled with a Digital to Analog Converter (DAC) at around 44.1khz. This means that 44,100 times a second the signal is sampled and the level (amplitude) of the signal is stored as a value between 0 and 65536. That bit depth (16bit) is good enough that you shouldn't really be able to tell it's digital once it's spit back though a Digital to Analog Converter (ADC). However, if we turn that bit depth down, let's say all the way to 8 bit now there are only {{< katex >}}2^8 = 256{{< /katex >}} levels of amplitude the signal can use, even if we continue to sample at the same rate, this will cause audible distortion and bring a lo-fi sound. Crush even harder, say down to 2 bit (4 levels), and it turns into an outright destructive distortion that mangles the signal.

Similarly, you can reduce the sample rate can to cause the signal to have issues with higher frequencies as a result of aliasing.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/59Nc9pPND8A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< devegg >}}

Re sample, quantize. This is about as textbook DSP as it gets. Doing the quantization (bit reduction) efficiently is often as easy as just &= 0xFF00 or whatever to match the bit count you want. 

{{< /devegg >}}

### Fuzz

Describing fuzz in words without being recursive and calling it "fuzzy" is difficult. Generally, Fuzz is the dirtiest of the dirty when talking about distortions. It's the punk-rock sound. *But*, it doesn't have to be. You can use Most fuzz effects ({{< vale >}}usually{{< /vale >}} guitar pedals) subtly so that they add just a bit of crunch on the hardest played notes, adding some grit that's more at home in a country song than punk or metal.

Fuzz is typical done for guitar and so most of the famous ones are pedals. Of those, the most well known are:

* The Big Muff by Electro-Harmonix
  * {{< smalltext >}}Though competitors have cloned it and [made it better](https://www.kma-machines.com/m_chief.html) {{< /smalltext >}}
* Fuzz-Tone / Tone Bender / Fuzz-Face all have roughly the same circuit, evolved in slightly different directions
  * {{< smalltext >}}Each has clones made by pretty much every pedal maker{{< /smalltext >}}
* Super-Fuzz by Univox
  * {{< smalltext >}}Also cloned by everyone{{< /smalltext >}}

I do recommend looking each up and getting a vibe for how they sound. Even if you never intend to get a hardware fuzz pedal, most software fuzz effects are trying to sound like one of these.

There's an aspect of fuzz that makes it hard to convey over video reviews: It plays like a totally different instrument.

All distortions *change* the dynamics of your input (See the whole first section of this page) but they also respond differently depending on the input dynamics as well. Fuzzes do this to the extreme. The difference between playing soft and playing hard is crazy, as is the difference depending on how much input gain you feed it (how much do you turn the volume up or down *before* the effect). This makes playing a fuzz well radically change how you have to play your instrument. It necessitates some care in thinking about your volume knob as a tone control.

Some fuzzes will have an in-built analog octave effect. It's more common for this to be an octave up, but down is fair game too. These are sort of their own thing, and while they don't have much to do with dynamics or distortion, they don't fit anywhere else either, so....

## Octave & Pitch Shifter Effects

Okay, from earlier in this guide we talked about how on the piano every 12 notes, the note repeats, and that's called an *octave*.

Well, that also means you can play both notes at once and your ears will hear 1 note, it'll just be a lot *thicker*. It adds a lot of extra flavor.

### Analog Octave effects

{{< tip >}}

These "analog" effects can exist in software too, it's just that they're well known from a pre-digital era, where they {{< vale >}}could be implemented in analog circuits relatively easily{{< /vale >}}.

{{< /tip >}}

#### Octave Up

There are two very super simple ways to get an octave up effect, the easiest to understand is **rectification**:

{{< columns >}}

What this means is to take the negative bit and flip it positive - here, the blue sine wave {{< vale >}}is rectified{{< /vale >}} to make the red wave:

<--->

![rectification](/music/rectification.svg)

{{< /columns >}}

Now, remember frequency = pitch = how often does the signal repeat. If it repeats twice as often that's twice the frequency or up 1 octave. If it repeats 3 times as fast, that's up two octaves, and so on. By doing this we've made a new signal, one octave up.

We can then mix those two signals together and it'll have {{< vale >}}*roughly*{{< /vale >}} the same sound as playing the same note at the same time an octave up on the instrument in the first place. The {{< vale >}}*roughly*{{< /vale >}} is because there's two big differences:

1. The red wave above isn't a sine wave anymore. Sure, it's an octave up, but it also has a lot more flavor than a basic sine wave too.
2. On a anything but a synthesizer, it would be impossible to make the phase match on each octave if playing by hand. In the above picture you can see how the hills and valleys of the two waves align. That wouldn't happen if you actually struck both keys / strings / whatever.

You can also do it by what the audio world calls "Ring Mod". Ring mod is just multiplying two signals together. Now, Ring Mod can, {{< vale >}}and usually does{{< /vale >}}, sound totaly different from an octave effect. Typically an entirely different signal {{< vale >}}is multiplied{{< /vale >}} with the input, causing what's effectively a tremolo-that-can-invert-the signal effect, but with audio-rate signals instead of an LFO. Despite historically using analog electronics, this sounds a bit like sample-rate-reduction (Some of what makes Lo-Fi sound Lo-Fi) ... anyway.... Ring Mod *can* give an octave effect if you just multiply the signal with itself.

{{< columns >}}

If you're wondering why that works, it's because -1 * -1 = 1. That is, we're still rectifying the signal (making the negative bits positive) but we're doing it in a different way.

<--->

![ringmodoctave](/music/ringmodoctave.svg)

{{< /columns >}}

The result is a much "cleaner" octave sound, as you can see, the output is a lot closer to the input this time. Depending on how the implimentation, it may also {{< vale >}}be inverted{{< /vale >}} first - imagine flipping the red wave. The effect is nearly identical in sound, but may change how other effects in the chain respond.

#### Octave Down

{{< columns >}}

The easiest way to generate a signal an octave down is to just set some threshold and flip a signal every other time that threshold {{< vale >}}is crossed{{< /vale >}}. Effectively, this means counting the number of peaks you see and generating a square wave at half that frequency:

<--->

![basicsuboctave](/music/basicsuboctave.svg)

{{< /columns >}}

This, uh, isn't great? If out input was a square wave, awesome, we just got a perfect square an octave down back out. If it's anything else... we also just got a square. This *can* sound good, but isn't always what you want.

{{< columns >}}

Another option is to use that output square wave to allow the original signal though or not:

<--->

![bettersuboctave](/music/bettersuboctave.svg)

{{< /columns >}}

And that's getting a lot better, but most analog octave effects will be a bit fancier than this,

{{< quote "[Wikipedia \"Octave Effect\"](https://en.wikipedia.org/wiki/Octave_effect)" >}}

The Boss OC-2 unit generates tones at one and two octaves down from the input signal. This effect also uses flip-flops to generate square waves at 1/2 and 1/4 of the input signal frequency, but rather than simply mixing in these signals, it uses them to invert the polarity of the input signal on every other cycle (every two out of four cycles for the second octave). 

This effectively amplitude modulates the input signal with a carrier at half the input signal, creating new frequency components at 1/2 and 3/2 the input signal. The 3/2 component is low-pass filtered out. This more complex approach lessens the synthetic sound of the octave tones by making them more {{< vale >}}closely{{< /vale >}} associated with the original signal, and also makes the effect volume-sensitive.

{{< /quote >}}

### Digital Pitch Effects

I don't want to go into how real-time digital pitch shifting works. If you really must know, looking up [Phase-Locked Loops (Wikipedia)](https://en.wikipedia.org/wiki/Phase-locked_loop) and the [Fast Fourier Transfrom (Wikipedia)](https://en.wikipedia.org/wiki/Fast_Fourier_transform) will give you the start of an idea, but both require a fair amount of math-y science-y engineering-y background to gronk, and it mostly doesn't matter. What does matter is unlike the analog-effects (which can also be done digitally anyway) these can:

* Pitch shift to non-octave intervals (Perfect 5<sup>{{< vale >}}th{{< /vale >}}</sup>s are particularly fun )
* Handle playing more than one note much, much better than the above
* Allow live sweeping of the shift amount ("a digital whammy bar")
* Produce much better reproductions of the original waveform at the new frequency

{{< speech triode >}}

Is digital is all around better?

{{< /speech >}}

{{< speech right >}}

{{< vale >}}Ehhhh.{{< /vale >}} I don't want to say "better". First, some of how the analog effects - which again, can {{< vale >}}be modeled{{< /vale >}} digitally - can misbehave often sounds good.

Some of this "good" sound is cultural context too. You've heard these effects, and the distortions they cause, before - even if you didn't realize it.

If you want to sound like 80's metal, using a digital octave effect may sound "wrong" as they didn't have digital octave effects back then.

{{< /speech >}}

If you're wanting to try a digital pitch shifter in VCV Rack, [HCTIP (VCV Library)](https://library.vcvrack.com/Bidoo/HCTIP) does good enough, and is free and open source. If you need a VST Plugin for pitch shifting, the [Kilohearts Pitch Shifter](https://kilohearts.com/products/pitch_shifter) is free and does an incredibly good job.

### Tracking?

Tracking is how well the effect produces the correct frequency based on your input. If you play an C and you get a C# and octave up from the effect, you'll have a lot of dissonance and it'll sound weird. You want the effect to consistently produce the right tone.

Generally, these effects have *some* issues with *polyphony* - playing more than one notes at once. If you play a chord, it may not sound like playing that same chord twice, one octave up.

The basic rectification, octave up tends to sound fine with polyphony, the ring-mod version ... not so much. **But**, the ring-mod does fail in cool sounding ways so long as the chords have simple relationships, like perfect 5ths. This produces what is actually one of my absolute favorite sounds in the realm of guitar pedals, though as a general-purpose effect on other instruments that tracking failure is less useful.

Digital octave ups can be all over the place. They may do the analog methods digitally, in which case they'll behave more-or-less the same, or they may use some of the black-magic DSP techniques, and so fail in weird ways, like making random tones at different frequencies, ignoring low frequency notes, or generally just sounding robotic and weird. Failure isn't always bad in music though, so see what happens.

Most octave down effects use the basic counter / frequency divider method described above, so they all tend to fail in the same way. There can be subtle difference though. For example, some will try to track the input signal and do some intelligent things to produce a cleaner octave sound - this can fail.

Some digital octave downs will do as described above and get the spectrum of the sound, shift it down, and then turn it back into a waveform. This process, for technical reasons, tends to fail at lower input frequencies (~200Hz and below will sound weird). Most digital effect designers know this and will do tricks to compensate, but it's still something to look out for.

I wouldn't worry to much about the *why* it sounds weird. Unless you're trying to DIY your own effect, it doesn't matter. What does matter is if you can make it sound cool/good, and again, its failures might be good for this.

### How did we get here again?

Ah, right, fuzz.

Octave effects and fuzz, despite on the surface having nothing to do with each other, are often paired for two reasons:

1. They sound kick ass together
2. The circuits for doing fuzz often make adding an octave effect easy.

This is why you can grab the [Joyo Voodoo Octave](https://www.amazon.com/JF-12-Voodoo-Octava-Guitar-Pedal/dp/B007T8OGLK) (not my favorite pedal by any means...) for $40.

You should note that *most* analog octave up guitar effects won't have any knobs at all, for example, the [EQD Tentacle](https://www.amazon.com/EarthQuaker-Devices-Tentacle-Analog-Effects/dp/B079X31JDV) - but this applies to the 2-in-1 Fuzz-plus-octave pedals too: The octave is on or off, no controls, not even blend.

## Noise Gating

Some effects, {{< vale >}}especially{{< /vale >}} if you're using hardware, will add a lot of noise to your signal.

There are two ways to handle this, the simplest is to use a *noise gate*. The idea is simple, that noise should be a lot quieter than your normal signal, so whenever you drop below a certain threshold, just cut the signal. You're not really removing the noise, but you are only letting it get though when there's something else to cover it up.

This obviously has it's limits. If your {{< vale >}}**S**ignal to **N**oise **R**atio{{< /vale >}} (SNR) is to low (that is, the sound you want to hear isn't much louder than the noise) then the gate may be to set to aggressive to actually cut the noise, causing the intended signal to fade out to quickly, missing the tail-end of each note (or string pluck, as this is most commonly a guitar problem). 

The other option is to use a true de-noising plugin. There's many out there. Probably the most popular are the various plugin in [Izotopes RX suite](https://www.izotope.com/en/products/rx/features/spectral-de-noise.html) - These regularly go on sale **dramatically** - you should not pay full price for them. While I haven't tried it, [ToneLib NoiseReducer](https://tonelib.net/tl-noisereducer.html) looks like a good bet if you're trying to use all free tool.s

[The Animated Guide to Gates (Patches.zone)](https://patches.zone/the-animated-guide-to-gates)

{{< devegg >}}

This will require something to do the shareholding. You'll want an envelope follower on the signal that you're detecting the threshold of, otherwise you'll cut out far to often. The follower can be as dumb as a very cheap LPF implementation. The detection may benefit from having a different on and off point for the gate too: different rising and falling thresholds.

{{< /devegg >}}

### Gating other effects with a mix

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DPFuhvFV9aU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

gated verb, gated distortion

## Limiting

Limiting is basically the exact same as clipping from before (including the hard and soft bits) *except* it usually involves being a little more clever about when to clip the signal, usually having some attack time before the signal gets clipped, moreover, the intention is usually to avoid distortion outright and so the limiter will usually try to turn down the gain a bit to keep signals in check, rather than just clipping them and getting all those extra harmonics.

see: [Q. Is there a difference between clipping and limiting?](https://www.soundonsound.com/sound-advice/q-there-difference-between-clipping-and-limiting) from Sound on Sound.

{{< quote "[[deleted] account on Reddit](https://www.reddit.com/r/edmproduction/comments/29tl0p/limiting_vs_clipping/ciod5zw?utm_source=share&utm_medium=web2x&context=3)" >}}

The limiter says stuff like "every time the signal gets loud, I'll gently attenuate it so that it's not TOO loud".

A clipper will say "every time the signal gets too loud, I'll chop every peak that's too loud and fuck you".

{{< /quote >}} 

If you already know what compressors do, you can basically think of limiters as compressors with the ratio knob at ∞. See [Limiter Vs Compressor: What you need to know (Musician on a Mission).](https://www.musicianonamission.com/limiter-vs-compressor/)

## Compression



[The Animated Guide To Compression (patche.zone)](https://patches.zone/compression-guide) is a great place to start, but if you still need more, I recommend reading on:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/BIVfpsoPnOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< hint info >}}

The above is a 3 part series that explains compressors better than anything I can really write here

{{< /hint >}}

Compression can mean two things when talking about music and sometimes this makes talking about it sometimes confusing. On this page when talking about compression the meaning is for compression that changes the *dynamics* of the audio, making loud sounds quieter and quiet sounds louder sort of ~squishing~ the sound. The other, unrelated, definition of compression is data compression, for example .mp3 vs .wav. We'll go into that later.

<p class="tip">Okay, this is sort of a lie. Compressors don't <i>technically</i> make anything louder, only quieter. It's just that usually there's some input and/or output gain that makes it seem this way. If you first boost all your signals, then lower louder parts that's <i>nearly</i> the same thing as making the quiet stuff louder and louder stuff quieter The reason this is worth bringing up is because not all compressors actually have that gain stage, so they will literally only make the loud sounds quieter and assume the user knows they need to compensate</p>

Usually, compression has a few basic attributes that are relevant:

The 'Threshold' is what level the compressor has to be over to do anything at all. 'Attack' is the time it takes for the signal to be affected. All compressors will have some minimum attack time if they're happening live (there are some compressors with 'Lookahead' that solve this problem) which lets the transients (sharp changes) of louder sounds, like the start of a drum hit, get through to some extent, but more attack will let more of the drum transient through. Tune to taste, release is a similar idea, but controls how the compressor behaves as it falls below the threshold, letting the compressor fade out with a given time instead of having a sharp cut. Compressors can be used to make drums really stand out, give guitars a longer sustained sound, or just glue the mix together better.

![TODO](/common/TODO.svg)

[TODO] knee, sidechain

[TODO] Dynamic range compression, Parallel Compression, Multiband compression, different analog models (FETs v tube v optical)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/j4NrWQljyso?list=PL5cGwrD7cv8jd0PSN2E8pFD97H3R5aQwN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[WTF is a Compander? (YouTube, Dan Worrall)](https://www.youtube.com/watch?v=ZRP5uI9mbzQ)

[How to use a Compressor + 10 tips (Musician on a Mission)](https://www.musicianonamission.com/how-to-use-a-compressor-plus-10-top-tips/)

[TODO] parallel Compression

[TODO] Multiband Compression

[TODO] Expansion

<iframe width="100%" height="500" src="https://www.youtube.com/embed/bxnb8cGDAzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< devegg >}}

There's an infinite number of ways to make a compressor. The most basic is to just multiply the signal with the a scaled inverse from an envelope follower, and then multiply that with some make up gain. The envelope follower is the tricky part, as the attack and release of that follower will make a huge difference. More over, a lot of compressors have non-linear frequency response. Things, of course, get even weirder when you're doing multi-band compression - though that is mostly just doing a LPF, BPF, and HPF with related cut-off frequencies and compressing each "band" individually. TL;DR: A compressor is easy to make, but hard to make good.

{{< /devegg >}}

## Recommendations

While we can look at what make a distortion on the microscopic scale as we have though this page: this sort of misses a point about how these things play together. The truth is you probably want your distortion to do a lot of effects all at once. You probably want some overdrive, some soft clipping, some of the dry signal, some eq applied, some filtering, some ... magic - that is, you probably want your distortion to do all the things you're thinking about when you think about what a guitar sounds like after running though the guitar amp and speaker.

Calling this magic isn't that far from the truth. The way analog circuits that we think to sound good do distortion is extraordinarily tricky to emulate digitally. It's so bad that the best emulations [are using AI to model the circuits](https://guitar.com/features/interviews/neural-dsp-doug-castro-machine-learning-amplifiers/) because humans just can't get all the weird little quirks.

Where I want to end this page is a recommendation to know what wavefolding, waveshaping, bitcrushing, soft vs hard clipping etc. all are, but to just not care most of the time and instead focus on finding distortion sounds you like.

I, personally, have found my go-to tools are

* [Vult's "Flame" for VCV Rack](https://library.vcvrack.com/VultModules/Flame) ($25 iirc)
* Literally any clone of the Pro Co "RAT" distortion pedal - but actually hardware, software emulations alias like hell. (clones go for ~$30)
* [Noise Engineering Ruina VST ](https://noiseengineering.us/products/the-freequel-bundle-sinc-vereor-virt-vereor-ruina) (FREE)
* {{< vale >}}Kuassa's{{< /vale >}} [Gainia preamp](https://www.kuassa.com/products/efektor-gainia-preamp-bundle/) VSTs
* When paired with another distortion (Rat, DS-1, whatever) the a green ringer pedal clone with **germanium diodes** (the diodes are important, as otherwise the response doesn't feel great, in my opinion) adds a lot of ... something. It is an octave effect, but the way it distorts with chords yields something I haven't heard in anything else. These are pretty much only available from random hand made pedal builders on Reverb, so prices vary. The one I have was made by [Dongeomac](https://reverb.com/shop/dongeomac), but there are others.
* [Evantide's CrushStation](https://www.eventideaudio.com/plug-ins/crushstation/)

These have a nice response to varying dynamics and feel "right" to me.
