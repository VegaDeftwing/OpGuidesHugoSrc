# Dynamics

<script>
    document.getElementById("effectMenu").open = true;
</script>

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

## Noise Gating

[The Animated Guide to Gates (Patches.zone)](https://patches.zone/the-animated-guide-to-gates)

### Gating other effects with a mix

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DPFuhvFV9aU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

gated verb, gated distortion

## Limiting

### Soft and Hard Clipping

## Compression

[The Animated Guide To Compression (patche.zone)](https://patches.zone/compression-guide) is a great place to start, but if you still need more, I recomend reading on:

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
