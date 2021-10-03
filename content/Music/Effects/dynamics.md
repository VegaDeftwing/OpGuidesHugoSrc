# Dynamics

<script>
    document.getElementById("effectMenu").open = true;
</script>

## Distortion

<iframe width="100%" height="500" src="https://www.youtube.com/embed/erv4lit4aWY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[How Distortion Works in Music (Ben Sheron's Blog)](https://benmosheron.gitlab.io/blog/2020/04/26/distortion.html)

### Clipping (Soft & Hard)

Clipping does exactly what it sounds like, it just chops off the wave. Usually on both the top and bottom. 

{{< columns >}}

**Hard Clipping**

![hardclip](/music/hardclip.webp)

<--->

**Soft Clipping**

![softclip](/music/softclip.webp)

{{< /columns >}}

The key take away from the two different kinds of clipping is that while both add harmonics, hard clipping adds **significantly** more. That is, it adds a lot more to the higher frequencies. Clipping often has gain to bring the signal back up to the same amplitude, but if this is done, it will usually be a few Loudness Units<a class="ptr">(1)</a> higher in volume. This is because more harmonics *sounds* louder.

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

### Wavefolding

{{< columns >}}

![](/music/wavefolding.gif)

<--->

This is one of those things where while the name is pretty self descriptive, you sorta just have to see the signal on a scope and hear it to see what it does.

Like any distortion, it ultimately adds in more harmonics, so it will make any sound you give it have a lot more high frequency content; however, folding in particular adds a ludicrous amount, so much so they're sort of deemed "Anti-Filters".

{{< /columns >}}

Wavefolding eats the transition between high and low, the slopes, so with a square wave it has nothing to grab onto and so does nothing except for maybe changing the level. Because of this, you'll usually see sisimplerave forms like sines fed into wavefolders, like sines, triangles, and saws.

If you're looking to get really crazy, check out [Befaco's Chopping Kinky](https://library.vcvrack.com/Befaco/ChoppingKinky) (available in hardware and VCV) which basically replaces the top half of the wave with one input, the bottom half the wave with another, and then lets you wavefold both of those inputs. It's absolutely nuts. [See the manual here](https://befaco.org/docs/Chopping_Kinky/Chopping%20Kinky_User_Manual.pdf) if you're still confused.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nxH6lyfpLxk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Drive, and Tubes

[TODO]

### Bitcrushing & Comparators

Bit crushing is often related to sample rate reduction as well, so one at a time:

Bit crushing is taking the signal and lowering the number of bits that are used to store it. This means it's an inherently digital effect. Most audio is processed at 16 or 24 bit, even at just 16 bit that means each sample point can be any of {{< katex >}}2^16 = 65536{{< /katex >}} values. Usually, audio is sampled with a Digital to Analog Converter (DAC) at around 44.1khz. This means that 44,100 times a second the signal is sampled and the level (amplitude) of the signal is stored as a value between 0 and 65536. That bit depth (16bit) is good enough that you shouldn't really be able to tell it's digital once it's spit back though a Digital to Analog Converter (ADC). However, if we turn that bit depth down, let's say all the way to 8 bit now there are only {{< katex >}}2^8 = 256{{< /katex >}} levels of amplitude the signal can be represented with, even if we continue to sample at the same rate, this will cause audible distortion and bring a lo-fi sound. Crush even harder, say down to 2 bit (4 levels), and it turns into an outright destructive distortion that mangles the signal.

Similarly, the sample rate can be reduced to cause the signal to have issues with higher frequencies as a result of aliasing.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/59Nc9pPND8A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Todo, fabfilter distortion video]

## Noise Gating

[The Animated Guide to Gates (Patches.zone)](https://patches.zone/the-animated-guide-to-gates)

### Gating other effects with a mix

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DPFuhvFV9aU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

gated verb, gated distortion

## Limiting

Limiting is basically the exact same as clipping from before (including the hard and soft bits) *except* it usually involves being a little more clever about when to clip the signal, usually having some attack time before the signal get's clipped, moreover, the intention is usually to avoid distortion outright and so the limiter will usually try to turn down the gain a bit to keep signals in check, rather than just clipping them and getting all those extra harmonics.

see: [Q. Is there a difference between clipping and limiting?](https://www.soundonsound.com/sound-advice/q-there-difference-between-clipping-and-limiting) from Sound on Sound.

{{< quote "[[deleted] account on Reddit](https://www.reddit.com/r/edmproduction/comments/29tl0p/limiting_vs_clipping/ciod5zw?utm_source=share&utm_medium=web2x&context=3)" >}}

The limiter says stuff like "every time the signal gets loud, I'll gently attenuate it so that it's not TOO loud".

A clipper will say "evevery timehe signal gets too loud, I'll chop every peak that's too loud and fuck you".

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

Usually compression has a few basic attributes that are relevant:

The 'Threshold' is what level the compressor has to be over to do anything at all. 'Attack' is the time it takes for the signal to be affected. All compressors will have some minimum attack time if they're happening live (there are some compressors with 'Lookahead' that solve this problem) which lets the transients (sharp changes) of louder sounds, like the start of a drum hit, get through to some extent, but more attack will let more of the drum transient through. Tune to taste, release is similar idea, but controls how the compressor behaves as it falls below the threshold, letting the compressor fade out with a given time instead of having a sharp cut. Compressors can be used to make drums really stand out, give guitars a longer sustained sound, or just glue the mix together better.

[TODO knee, sidechain]

[TODO, Dynamic range compression, Parallel Compression, Multiband compression, different analog models (ie Fets v tube v optical)]

reverb, delay, pan, tremolo, overdrive, distortion

<iframe width="100%" height="500" src="https://www.youtube.com/embed/j4NrWQljyso?list=PL5cGwrD7cv8jd0PSN2E8pFD97H3R5aQwN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[WTF is a Compander? (YouTube, Dan Worrall)](https://www.youtube.com/watch?v=ZRP5uI9mbzQ)

[How to use a Compressor + 10 tips (Musician on a Mission)](https://www.musicianonamission.com/how-to-use-a-compressor-plus-10-top-tips/)

[TODO] parallel Compression

<ol hidden id="footnotes">
    <li>See <a href="https://en.wikipedia.org/wiki/EBU_R_128">EBU R 128 (Wikipedia)</a> if you're curious how loudness is usually defined. I'll talk about this more in the mixing and mastering chapter </li>
</ol>
