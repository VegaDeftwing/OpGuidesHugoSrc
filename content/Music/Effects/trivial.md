# Trivial Effects

<script>
    document.getElementById("effectMenu").open = true;
</script>
## Tremolo

<!-- Mulitply the signal with a NOT bipolar LFO. You might want it to go .1 to 1 or so, as going full mute can sound weird. The wave shape and speed matter a lot. Most common is a sort of saw tooth with a more expoential rise, as to have a higer value if integrated (and so be on more of the time).-->

{{< columns >}}

This is probably the easiest to understand audio effect. Put simply, fade the volume in and out automatically. This can be done at different speeds (really fast for a 'deep' effect or slow for something pad-like) and with a bias so that the volume never completely cuts. It can also refer to a playing style where the same note is struck rapidly, leading to a similar effect. In VCV this can be done as simply as hooking up an LFO to a VCA's CV input like we did here, but turning up the frequency of the LFO-2 module (note, that here there is no bias so the volume does actually cut out):

<--->

![vcavult](/music/vcavult.gif)

{{< /columns >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/GkMYl3kY7aw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Vibrato

Vibrato as an effect requires pitch shifting, which I suppose actually makes it akin to FM synthesis as in Chapter 2, regardless, it's as simple as applying a, typically subtle, pitch 'wobble' into the sound. On a guitar this may be done with a pedal but more simply just by bending the string back and forth with the fingers quickly or using a whammy bar. In eurorack or VCV you can just use the FM input and hook up an LFO

If your signal doesn't have a way to directly modulate the frequency, it may be done by varying the time a signal takes to get though a delay line, simulating a Doppler effect - see [Time-Varying Delay Effects](https://www.dsprelated.com/freebooks/pasp/Time_Varying_Delay_Effects.html) on DSPRelated.com for more about how this works.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/JWWZK8KFp8I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Panning

<!-- If you can't figure the DSP out for this one, then I don't know how to help you.-->

Panning in general is just setting the side (left/right) that a sound is balanced on. Just slightly panning everything in a mix can even add a lot. Just like anything, you can also automate panning, but that brings up auto-panners, which are effects that do this rather quickly. Cableguy's Pancake 2 VST is free and sort of the go to for showing this, though there are some tools that may be easier to use. You may also see **rotary** effects, these emulate older speaker systems that did an effect similar to this by physically spinning the speaker horns in a circle. It has a slightly different sound and is worth exploring in its own right

<iframe width="100%" height="500" src="https://www.youtube.com/embed/gJyssZeXEdk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="500" src="https://www.youtube.com/embed/TZlvi9428Lw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Widening

<!-- A million ways to do the same thing poorly. You can do a very small delay on one side, which works, but can cause phasing issues when not using headphones, or you can look into the million other ways to do it that are somehowo more hacky than that.-->

While not trivial in *how* it works, the concept of widening is pretty simple- if you have a mono or otherwise very 'centered' signal that you want to make feel bigger or just don't want the same sound to come out of both speakers, widening is a good option. You may also want to consider using more extreme time based effects like delay and reverb though!

<iframe width="100%" height="500" src="https://www.youtube.com/embed/mwaZ85VeUoU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
