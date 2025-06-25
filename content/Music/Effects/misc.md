# Misc Effects

<script>
    document.getElementById("effectMenu").open = true;
</script>

## Pitch, Glitch, & Granular

{{< devegg >}}

Most of these come down to recording a buffer, occasionally playing back from that buffer, and doing weird things with the sample rate or reversing the order. Some pitch effects, like the PitchFork+ below, are real time and are doing much crazier voodoo. If you just want to do monophonic octave up/down, that's easy though. Just use a PLL (or code to simulate one) and multiply it for octave up or just use a digital counter and output on every-other above-threshold point for octave down. This just tends to sound like ass with polyphony. 

{{< /devegg >}}

Rather than try to explain all of these, I'm just gonna throw a grid of videos at you. Skip around, hear some neat sounds. Get inspired.

{{< columns3 >}}

#### Pitch

<iframe width="100%" height="160" src="https://www.youtube.com/embed/FJD2NWQKnao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="160" src="https://www.youtube.com/embed/XGkLKt4vVKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

#### Glitch

<iframe width="100%" height="160" src="https://www.youtube.com/embed/ZcgrEBuMPHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="160" src="https://www.youtube.com/embed/5Up-qfYAQhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

#### Granular

<iframe width="100%" height="160" src="https://www.youtube.com/embed/U3hOSIcxzxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="160" src="https://www.youtube.com/embed/1K89l_bgTe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns3 >}}

## Spectral Editing

{{< columns >}}

Spectral editing is sorta crazy, the idea is instead of working with waves in the time domain, you're applying effects in the frequency domain. The idea being that you can directly select and work with chunks of frequency in a way that would be a nightmare of filters otherwise. You can even do weird things like delay only certain frequency blocks (see [MSpectralDelay](https://www.meldaproduction.com/MSpectralDelay)) 

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/A5ErzybkrGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="200" src="https://www.youtube.com/embed/bIh7HGKgO24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

## De-Noising & De-Essing

<!-- De-Essing is just a dynamic EQ - which is just a compressor with a pretty narrow frequency band applied right at the evil S point-->

(Make sure you didn't gloss over Noise Gates in the Dynamics Chapter)

![TODO](/common/TODO.svg)

## Ring Modulators

<!-- Make a bipolar OSC or LFO. Multiply it with the target signal. Profit. -->

![TODO](/common/TODO.svg)

## Talk-boxes

{{< devegg >}}

There's really no way to emulate this, as it's less a matter of the sound and more of the interface - using a real mouth as a filter. Vocoders are basically the closest you'll get, but you lose out on the infinite sustain. Even digital has limits, I'm afraid. 

{{< /devegg >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/h_L5v9OTSxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
