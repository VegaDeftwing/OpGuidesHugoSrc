# Dynamics

<script>
    document.getElementById("effectMenu").open = true;
</script>
## Distortion

<!-- https://static.roland.com/assets/media/pdf/guitar_effects_guidebook_vol_20.pdf -->

<iframe width="100%" height="500" src="https://www.youtube.com/embed/erv4lit4aWY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[How Distortion Works in Music (Ben Sheron's Blog)](https://benmosheron.gitlab.io/blog/2020/04/26/distortion.html)

### Clipping (Soft & Hard)

Clipping does exactly what it sounds like, it just chops off the wave. While you can use it as an effect intentionally, it's origin - which you're likely to do on accident yourself - is from accidently driving a louder signal into something than it's meant to handle. When this happens, the portion of the incoming wave that is out of range is going to get chopped off no matter what, but there are mulitple ways than can happen: it can be **hard** or **soft**.

Hard clipping will let the original signal pass though undistrubed until it crosses a threshold (positive or negative), at which point the value is snapped to that threshold. Soft clipping will start to bend the signal away as it gets close, avoiding the hard cut edges.

Here, visually this should help:

<!-- In code, hard clipping is as easy as two comparisons. You might be able to do some SSE voodoo to accelerate this. See https://stackoverflow.com/questions/427477/fastest-way-to-clamp-a-real-fixed-floating-point-value -->

<!-- Soft clipping will be more expensive than hard. Using an actually trig call like atan() will wreck you on some platforms, so probably either use a LUT or polynomial approximation. -->

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

The key takeaway from the two different kinds of clipping is that while both add harmonics (which is the whole point of distortion) hard clipping adds **significantly** more, furthermore, soft-clipping mostly adds even harmonics, while hard clipping will give you odd harmonics. That is, it adds a lot more to the higher frequencies. 

If you inetionally use clipping, the effect will usually apply some gain to bring the signal back up to the same amplitude, but if this is done, it will usually be a few Loudness Units<a class="ptr">(1)</a> higher in volume. This is because more harmonics *sounds* louder. Mix with care.

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

<!-- Most obvious implemenation is a LUT, but if you have 16bit+ audio you're looking at a freakishly large LUT. Actually generating whatever function you need and doing the math is probably wise. If you know certain values are common, do a LUT for those. -->

### Wavefolding

{{< columns >}}

![](/music/wavefolding.gif)

<--->

This is one of those things where while the name is pretty self-descriptive, you sorta just have to see the signal on a scope and hear it to see what it does.

Like any distortion, it ultimately adds in more harmonics, so it will make any sound you give it have a lot more high frequency content; however, folding in particular adds a ludicrous amount, so much so they're sort of deemed "Anti-Filters".

{{< /columns >}}

Wavefolding eats the transition between high and low, the slopes, so with a square wave it has nothing to grab onto and so does nothing except for maybe changing the level. Because of this, you'll usually see simple waves forms like sines fed into wavefolders, like sines, triangles, and saws.

If you're looking to get really crazy, check out [Befaco's Chopping Kinky](https://library.vcvrack.com/Befaco/ChoppingKinky) (available in hardware and VCV) which basically replaces the top half of the wave with one input, the bottom half of the wave with another, and then lets you wavefold both of those inputs. It's absolutely nuts. [See the manual here](https://befaco.org/docs/Chopping_Kinky/Chopping%20Kinky_User_Manual.pdf) if you're still confused.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nxH6lyfpLxk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- Wave folding is very easily done by using fmod() and compensating for the reduced signal with gain. This is realiatively effiecent, but if you need more control you can also just generate a polynomial/LUT to do the folding. That's a bit harder to add control to though. See https://ccrma.stanford.edu/~jatin/ComplexNonlinearities/Wavefolder.html -->

### Drive, and Tubes

[TODO]

<!-- "Drive" is usually just soft clipping with some extra non linearities. Tubes are hard to emulate because they do a bit of everything. Soft clipping, adding some harmonics, compression, some hysteresis - basically, this is entering the fustercluck that is Virtual Analog and there be dragons. See file:///home/vega/Downloads/renato,+Journal+manager,+art02.pdf  -->

### Bitcrushing & Comparators

Bit crushing is often related to sample rate reduction as well, so one at a time:

Bit crushing is taking the signal and lowering the number of bits that are used to store it. This means it's an inherently digital effect. Most audio is processed at 16 or 24 bit, even at just 16 bit that means each sample point can be any of {{< katex >}}2^16 = 65536{{< /katex >}} values. Usually, audio is sampled with a Digital to Analog Converter (DAC) at around 44.1khz. This means that 44,100 times a second the signal is sampled and the level (amplitude) of the signal is stored as a value between 0 and 65536. That bit depth (16bit) is good enough that you shouldn't really be able to tell it's digital once it's spit back though a Digital to Analog Converter (ADC). However, if we turn that bit depth down, let's say all the way to 8 bit now there are only {{< katex >}}2^8 = 256{{< /katex >}} levels of amplitude the signal can be represented with, even if we continue to sample at the same rate, this will cause audible distortion and bring a lo-fi sound. Crush even harder, say down to 2 bit (4 levels), and it turns into an outright destructive distortion that mangles the signal.

Similarly, the sample rate can be reduced to cause the signal to have issues with higher frequencies as a result of aliasing.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/59Nc9pPND8A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Todo, fabfilter distortion video]

<!-- Re sample, quantize. This is about as textbook DSP as it gets. Doing the quantiazation (bit reduction) efficiently is often as easy as just &= 0xFF00 or whatever to match the bit count you want. -->

## Noise Gating

[The Animated Guide to Gates (Patches.zone)](https://patches.zone/the-animated-guide-to-gates)

<!-- This will require something to do the thresholding. You'll want an envelope follower on the signal that you're detecting the threshold of, otherwise you'll cut out wayyyy to often. The follower can be as dumb as a very cheap LPF implementation. The detection may benefit from having a different on and off point for the gate too - so different rising and falling thresholds. -->

### Gating other effects with a mix

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DPFuhvFV9aU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

gated verb, gated distortion

## Limiting

Limiting is basically the exact same as clipping from before (including the hard and soft bits) *except* it usually involves being a little more clever about when to clip the signal, usually having some attack time before the signal get's clipped, moreover, the intention is usually to avoid distortion outright and so the limiter will usually try to turn down the gain a bit to keep signals in check, rather than just clipping them and getting all those extra harmonics.

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

Compression can mean multiple things when talking about music and sometimes this makes talking about it sometimes confusing. Usually, when talking about compression the meaning is for compression that changes the *dynamics* of the audio, making loud sounds quieter and quiet sounds louder sort of ~squishing~ the sound. The other, unrelated, definition of compression is data compression, for example .mp3 vs .wav. We'll go into that later.

<p class="tip">Okay, this is sort of a lie. Compressors don't <i>technically</i> make anything louder. Only quieter. It's just that usually there's some input and/or output gain that makes it seem this way. If you first boost all your signals, then lower louder parts that's <i>nearly</i> the same thing as making the quiet stuff louder and louder stuff qquieter The reason this is worth bringing up is because not all compressors actually have that gain stage, so they will literally only make the loud sounds quieter and assume the user knows they need to compensate</p>

Usually, compression has a few basic attributes that are relevant:

The 'Threshold' is what level the compressor has to be over to do anything at all. 'Attack' is the time it takes for the signal to be affected. All compressors will have some minimum attack time if they're happening live (there are some compressors with 'Lookahead' that solve this problem) which lets the transients (sharp changes) of louder sounds, like the start of a drum hit, get through to some extent, but more attack will let more of the drum transient through. Tune to taste, release is a similar idea, but controls how the compressor behaves as it falls below the threshold, letting the compressor fade out with a given time instead of having a sharp cut. Compressors can be used to make drums really stand out, give guitars a longer sustained sound, or just glue the mix together better.

[TODO knee, sidechain]

[TODO, Dynamic range compression, Parallel Compression, Multiband compression, different analog models (ie Fets v tube v optical)]

reverb, delay, pan, tremolo, overdrive, distortion

<iframe width="100%" height="500" src="https://www.youtube.com/embed/j4NrWQljyso?list=PL5cGwrD7cv8jd0PSN2E8pFD97H3R5aQwN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[WTF is a Compander? (YouTube, Dan Worrall)](https://www.youtube.com/watch?v=ZRP5uI9mbzQ)

[How to use a Compressor + 10 tips (Musician on a Mission)](https://www.musicianonamission.com/how-to-use-a-compressor-plus-10-top-tips/)

[TODO] parallel Compression

[TODO] Multiband Compression

[TODO] Expansion

<iframe width="100%" height="500" src="https://www.youtube.com/embed/bxnb8cGDAzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- There's so many ways to do a compressor. The most basic is to just multiply the signal with the a scaled inverse from an enevelop follower, and then multiple that with some make up gain. The enevlope follower is the tricky part, as the attack and release of that follower will make a huge difference. More over, a lot of compressors have non-linear frequency response. Things, of course, get even weirder when you're doing multi-band compression - though that is mostly just doing a LPF, BPF, and HPF with related cut-off frequencies and compressing each "band" invidiually. TL;DR: A compressor is easy to make, but hard to make good. -->

## Guitar Amps

So, all of this sort of misses a point about how all of these things play together. The truth is you probably want your distortion to do a lot of effects all at once. You probably want some overdrive, some soft clipping, some of the dry signal, some eq applied, some filtering, some ... magic - that is, you probably want your distortion to do all the things you're thinking about when you think about what a guitar sounds like after running though the guitar amp and speaker.

Calling this magic really isn't that far from the truth. The way analog circuits that are known to sound damn good do distortion is really, really, really fucking tricky to emulate digitally. It's so bad that the best emulations [are using AI to model the circuits](https://guitar.com/features/interviews/neural-dsp-doug-castro-machine-learning-amplifiers/) because humans just can't get all the weird little quirks.

So, where I really want to end this page is a recommendation to know what wavefolding, waveshaping, bitcrushing, soft vs hard clipping etc. all are, but to just not care most of the time and instead focus on finding a few distortion sounds you like.

I, personally, have found my go-to tools are

* [Vult's "Flame" for VCV Rack](https://library.vcvrack.com/VultModules/Flame) ($25 iirc)
* Literally any clone of the Pro Co "RAT" distortion pedal - but actually hardware, software emulations alias like hell. (clone go for ~$30)
* [Noise Engineering Ruina VST ](https://noiseengineering.us/products/the-freequel-bundle-sinc-vereor-virt-vereor-ruina) (FREE)
* When paired with another distortion (Rat, DS-1, whatever) the a green ringer pedal clone with **germanium diodes** (the diodes are important, as otherwise they respond like ass, imho) adds a lot of ... something. It is an octave effect, but the way it distorts with chords yields something I haven't heard in anything else. These are pretty much only available from random hand made pedal builders on Reverb, prices vary wildly. The one I have was made by [Dongeomac](https://reverb.com/shop/dongeomac), but there are others.

All of these have a really nice response to varying dynamics and feel "right"

<ol hidden id="footnotes">
    <li>See <a href="https://en.wikipedia.org/wiki/EBU_R_128">EBU R 128 (Wikipedia)</a> if you're curious how loudness is usually defined. I'll talk about this more in the mixing and mastering chapter </li>
</ol>
