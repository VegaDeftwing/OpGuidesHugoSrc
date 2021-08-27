# Time Based Effects

<script>
    document.getElementById("effectMenu").open = true;
</script>

## Delay

Delay is basically echo. Take a sound in, and repeat it it it. Normally the main controls on a delay are 'Time', which controls how long of a delay there is before each repeat, 'Feedback' which controls how much the level is reduced each time the delay repeats (and in turn, how many audible repetitions there are), and 'Dry/Wet' which controls how the signal is blended, entirely dry will have no delay, entirely wet may even miss the initial sound adding a weird latency before you hear what you're playing. Some delays have additional controls, obviously I can't cover every possible delay, but I'll try to cover most:

Some delays instead of letting you set a delay time or 'tap' a delay tempo in actually synchronize to a clock signal input which lets the delayed repetitions always be in time with the rest of the song.

Stereo delays many have additional controls as well, most commonly offering a different delay time for the left and right channels. often a 'Ping Pong' mode will also be available where the left and right speaker alternate for the echo'd sound- 'ping' and 'ponging' out each side until the sound cuts out.

Some delays may also allow for unity or higher feedback, which will cause the delay to be infinite or, if above unity, infinitely grow in volume until it's just a distorted clipping mess. This can actually be a lot of fun to play with.

![Chronoblob](/chronblob.jpg)

> Quick Reference Card for the Chronblob^2 from Alright Devices, http://docs.alrightdevices.com/chronoblob2-manual.pdf 

Some delays let you insert other things into the feedback path. This means you could do things such as having each repetition be progressively more filtered, cutting out more and more high end each time or putting a delay in the delay. (yo dawg, I heard you like delay?).

Some digital delays and most analog delays (especially bucket brigade delays<a class="ptr">(1)</a>) can produce interesting sounds if you change the delay time while audio is going through the buffer, resulting in a sort of pitch shift as the delay catches up or slows down. Here's a demo of Chronoblob2, which does this sort of pitch shifting, in action:

<audio controls src="/DelayModulation01.mp3"></audio>

{{< attribution >}}There's also a demo of over unity gain at the end. I've edited the volume of that, but it's still a bit alarming!{{< /attribution >}}

{{< columns >}}

It's also worth noting that by making delay time very short and having gain near unity, sending a brief trigger (impulse) can make a sound that sounds like a string being plucked. This is called [Karplus-Strong Synthesis](https://en.wikipedia.org/wiki/Karplus–Strong_string_synthesis). To the right I've shown a way to do this in VCV Rack.

<--->

![Karplus Strong](/KarplusStrong.png)

{{< /columns >}}

Finally, it's worth noting that there are a few interesting features some delays may have, such as letting the delay buffer be frozen to infinitely repeat what was playing at the time (unity gain, ignore input), reverse'd delay - having the initial sound play forward but each repeat play in reverse, pitch shifted delay- having each delay affected by a pitch shift, often done with octave up/down. Often, this pitch shifting is done via Granular Synthesis, as mentioned above. Using granular synthesis does allow for some other interesting options though, such as [Unfiltered Audio's Sandman Pro VST](https://www.unfilteredaudio.com/collections/plug-ins/products/sandman-pro).

![Quadravox](/Quadravox.png)

> Screenshot of [Eventide's Quadravox VST](https://www.eventideaudio.com/products/effects/diatonic-pitch-shift/quadravox), with pitch shifted delays

<iframe width="100%" height="500" src="https://www.youtube.com/embed/MNzBFgwkU0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Slapback delay

Slapback delay is just a short delay with only a single echo, no feedback. It's often used on guitar, but it's nice on vocals and drums too! Here's a little example with Mutable Instruments' [Elements](https://mutable-instruments.net/modules/elements/) as the source. The first few notes are the dry signal, then I bring it in. 

<audio controls loop src="/Slapback01.mp3"></audio>

looking at a snippit of this audio, you can see just how short the delay is, with the slapback being on the notes that have the double hits.

![slapback](/slapback.png)

### Delay at 100%(+) feedback?

[TODO] Chornoblobs infinite mode

[My Secret Guitar Pad Patch from the 1990's](https://www.youtube.com/watch?v=l9uX_slwbzk) - Inversely linking volume and delay feedback

## Loopers

Loopers are most commonly seen in hardware and can be seen as a sort of mix between samplers and delays. Essentially you just tap in when you start playing, play what you want, then tap out, then, the loop of whatever you played will play back to you. There may be additional settings, such as a half speed effect.

Often you'll see loopers used for 'Live Looping' performances, where each layer is looped and overdubbed to create a full song

Here for example is a jam using the Ditto X4 looper (the box slightly blurry, closest to the camera), which is used to loop the guitar here.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/PffyRrUEPVM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Reverb

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FfESec8Sy0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<iframe width="100%" height="500" src="https://www.youtube.com/embed/qaEM78hdsXA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Rooms

You'll often see reverbs listed as 'room', 'cathedral','cave', etc. These are trying to emulate the sound of playing in a closed space

### Plate

### Spring

### Convolutional

### Shimmer



### Internals

Delay lines, allpass, comb filters

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Il_qdtQKnqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Chorus

Chorus does as the name implies, layering copies of the signal together to get a 'denser' sound. To be a chorus (and not just increase the volume) the copies are slightly pitch shifted, delayed, or otherwise modulated relative to one another. See - see [Time-Varying Delay Effects](https://www.dsprelated.com/freebooks/pasp/Time_Varying_Delay_Effects.html) on DSPRelated.com for more about how this works.

## Flanger

Flanger works by taking a **very** short delay* which slowly modulated delay time and mixing this back with the original signal. This will result in some phase cancellation effects and give a similar sound to a phaser. The delay time modulation rate and depth, and delay feedback are the most commonly exposed controls. Flanger is probably most commonly used as an effect on guitar.

*note, that delay, in this context, means an actual time delay, just a buffer that makes sound take longer to get through if that makes sense. Of course, with feedback and mixing the original this will have the same effect as a delay in the 'echo' sense.

![Flanger](/Flanger.jpg)

> Flanger sort of makes a comb filter sound too, as you can see in the Spectrum Analyzer on the bottom.

![Pyramids](/Pyramids.jpg)

> The '[Pyramids](https://www.earthquakerdevices.com/pyramids)' Flanger pedal from Earthquaker Devices.

<ol hidden id="footnotes">
    <li>Bucket Brigade Delay is essentially a bunch of capacitors acting as the 'buckets' that are figuratively passed down the chain, moving from one bucket to the next each clock cycle, of course, this clock rate can be changed while it's running. The number of stages in a BBD determines how long of a delay you can get without having a massive determent to quality.</li>
</ol>
