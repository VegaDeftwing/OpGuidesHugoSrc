# Voice

Clearly there are the obvious 3 things you can do with your voice: sing, rap, and speak.

I am not going to talk about those, because like, YouTube exists and can cover them all, much, much better.

Instead, I'll only be focusing on "weird" things you can do with your voice.

## Natural

### Screaming

https://www.youtube.com/watch?v=xJYjXVhCiT0

## Synthetic

### Sonovox

### Talkbox

### Vocoders

{{< devegg >}}

Traditionally, It's a lot of band pass filters with envelope followers. That's it. That said, actual implementation, use an FFT, not a fuck load of filters. See https://dsp.stackexchange.com/questions/1232/programming-a-vocoder

{{< /devegg >}}

{{< columns >}}

Vocoders are a bit weird to understand, and really need a visual explanation. This first video is really trying to sell you on the 'OVOX' vocoder, but does start with a decently good explanation. The second video is for a particularly neat vocoder-y, pitch-shifty effect that I think does the vocoder effect better than your traditional vocoder. It is kinda pricey though.

Note, that when you hear a vocoder you may confuse the sound for a talkbox, the way they work is pretty dramatically different. There's an extraordinary good video on talkboxes embedded at the bottom of this page.

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/sGNVpT1T9h0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="200" src="https://www.youtube.com/embed/5c4-0eXl8fQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="200" src="https://www.youtube.com/embed/hDJYW86ydSQ" title="Vocoder Vibe Check: Arturia Minifreak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

{{< /columns >}}

### Auto-Tune

{{< devegg >}}

Doing autotune in code is well beyond the scope of a small comment. Outside of just throwing AI at the problem - witch is likely to sound god awful - there's no magic bullet here. It's spectral analysis hell.

{{< /devegg >}}

{{< columns >}}

Given it's basically a meme now, I assume you know what Auto-Tune is. What you may not realize is that not all auto-tune is, well, auto. A lot of the time it's done manually, painstakingly correcting the tuning. If the original sound is close enough, it's usually pretty easy to get it to sound natural, too.

Also keep in mind pitch correction isn't just for vocals, you might want to pitch correct your guitar playing, change a note in an already recorded sequence when you change keys, or even just use it as a glitchy effect on pitch bends.

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/j19LVK9SND0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}