# Percussion

<script>
    document.getElementById("instMenu").open = true;
</script>
## Theory

<!-- https://www.youtube.com/watch?v=Ez8Q68h9i4M -->

{{< columns >}}

Before I even dive into Percussion, I think it's necessary to point out how generic the term is. Just looking at the Wikipedia page for drum kit, you'll see this:

<--->

<img src="/music/drumkit.webp" alt="wikipedia drum kit list">

{{< attribution >}}[Drum Kit](https://en.wikipedia.org/wiki/Drum_kit) page on Wikipedia{{< /attribution >}}

{{< /columns >}}

and clearly that's still not an exhaustive list. Just off the top of my head I can see it lacks the Cajon or Taiko as acoustic instruments, let alone anything more specific than electronic drum, which can make for a class all its own.

Wikipedia defines [Percussion Instrument](https://en.wikipedia.org/wiki/Percussion_instrument) as "a musical instrument that is sounded by being struck or scraped by a beater including attached or enclosed beaters or rattles struck, scraped or rubbed by hand or struck against another similar instrument." but, frankly, I think that definition really sucks. I think a better definition would be any tool that be used to make a sound with a sharp attack, that is typically not pitched/tuned and is used to establish the tempo of the song. I confess that this definition is still bad, but hey, it's better. Generally though, I think we all have a sort of intimate knowledge of what percussion is and I'm not trying to turn this page into one on the philosophy of music or human experience, so let's jump back into my definition a bit- I said it (loosely) requires a sharp attack. What do I mean by that? Well, remember back when we looked at the ADSR in getting started?

{{< columns >}}

Here's that original ADSR gif again, see how the first stage, the attack can vary in time. If we imagine this as the volume of the sound, one with a more gradual fade in, instead of a vertical line, will have a smooth fade in. This is not how most percussive sounds are used. Usually, a percussive sound has a very loud **transient** and, usually, a short decay. Basically, the drum hit's hard, fast, and goes away fast.

![](/music/adsr.gif)

<--->

Look at this view of a bass drum hit on a scope. See how there's this sharp spike, right as it first starts? Also, see how it only moves up and down a few times before fading out? Think about this like smacking the head of a drum, you get that sharp hit, then the drum head will oscillate back and forth a few times before coming to rest. What's also of note is those peaks aren't evenly spaced. It actually gets lower pitch as it fades out (albeit not by much here). A lot of percussion does this, changing in pitch over its short lifespan.

![](/music/bassdrum.webp)

{{< /columns >}}

It's also pretty common for percussion to have a noisy part to it, literally just 'polluting' the entire frequency spectrum. That's really obvious here with both the snare and open hi-hat sounds, where on the scope you can see the jittery-ness of the noise: 

![](/music/hatbasssnare.webp)

It's also worth noting just how clean of a sine wave the bass drum is. This isn't necessarily *required* of the lower pitch drums, but most bass sounds- drums or not- tend to sound muddy if anything but a pure sine wave. 

{{< columns >}}

If you're wondering what the difference is between the snare and the hat given how similar they look in the waveform: the hat only really fills the 5khz to 20kHz range, with a peak around 6khz while the snare goes down to 320Hz (ish), with noise spreading up to 20khz as well, but with a strong peak at that 320Hz point.

<--->

![](/music/drumfrequencyanalysis.webp)

{{< smalltext >}}Kick in green, snare in orange, hat in pink{{< /smalltext >}}

{{< /columns >}}

{{< columns >}}

Alright, so this is nice and all, but, like, this is a guide about sound and that's a lot of pictures? Let's dive in then. I've put together a VCV patch for you to learn on. It has a ton of notes built in and focuses on the sound design side of percussion, as we'll come back to actually sequencing drums (making patterns of drum hits, or playing them with sticks, whatever) in a bit, but I think it helps just to get a feel for how much sound design can go into percussion.

{{< tip >}}

To open this patch, you'll need to have VCV with the packs BogAudio, Audible Instruments, Befaco, Valley, Vult Free, Fehler Fabrik, Starling Via, MindMeld, Hora Processors Free, Geodesics, Aria Salvatrice, Erica Synths, Stoermelder, and  Submarine. All of these are free.

{{< /tip >}}

<--->

![drum patch screenshot](/music/drumpatchscreenshot.webp)

The patch can be downloaded from patch storage [here](https://patchstorage.com/percussion-explainer/).

{{< /columns >}}

So just download this patch and poke around for a while. A big part of learning music is having a sort of mental catalog of sounds that you can make and how they can work together. The best way to build up this mental catalog is to experiment, that's why while this patch is pre-wired, I encourage you to twist and turn every knob. After all, worst case, you just re-open the original file and start over. So experiment! Find weird sounds!

{{< columns >}}

Once you've done that, go ahead and try to make your own drum sound using basic modules (Oscillators, VCAs, etc.), thinking about the characteristics of the sounds you made and what I explained above, if you need a bit of an example for that, go ahead and check out this patch.

(if you need a little push, you might try out [Befaco's Percall](https://library.vcvrack.com/Befaco/Percall), which makes it pretty easy to get drum sounds out of any oscillator)

You might want to go back to sound sources and look at subtractive and FM synthesis again if you're still a bit rusty on how to make patches from scratch.

<--->

![drum patch screenshot](/music/drumpatchscreenshot2.webp)

The patch can be downloaded from patch storage [here](https://patchstorage.com/percussion-explainer-2/).

{{< /columns >}}

When you've had your fill come back and we'll talk about some common percussive kits, that is sounds that you'll find together either in an acoustic drum kit or on an electronic drum machine. Then we can wrap percussion up by briefly diving into making drum patterns- though that will be covered more in depth in Chapter 5, <a href="/music/sequencing-and-midi/">Sequencing & MIDI</a>.

----

Welcome back, Hope you had fun messing around in that patch! Let's dive into percussion kits then.

## Your Standard Drum Kit

I mentioned right at the start that there are a huge range of common percussion instruments. There's anything from the hexagonal drums on the giant drum sets of the 1980's to the marching drums you see played on the field. While there are no rules in music and I'm a huge fan of doing things in new and original ways, it still helps to have an idea of which of these drums sounds are most commonly used together.

When you think of drums, you *probably* think of the standard acoustic drum kit like is portrayed in that Wikipedia screenshot from the beginning, so let's start by breaking that down into its parts. As we're going through this, keep in mind it's more the musical position that matters than the specific way that sound is produced, or as my friend [Neurotypique](https://www.youtube.com/channel/UC4oBI5piGMznFMZdtEC0FhA) put it:

{{< quote "Neurotypique" >}}

The important part about breaking down a "kit" is that a snare is everything with approximately the same harmonic content but also that you use like a snare. Any burst of mid-hi frequency on expected snare hits can be the snare really

{{< /quote >}}

* **Bass Drum + Pedal**
  {{< columns >}}

This is the Big Ol' drum on the floor, the one that often has the band's logo on it. Sometimes it's called the Kick Drum, and it's usually hit with a beater pedal.

This is the main drum everyone obsesses over, because it's (usually) the one that people are going to tap along to and sets the tempo of the track.

I do want to point out that it's not just the drum that matters, but also the beater. [Especially in metal](https://www.youtube.com/watch?v=OptsiOhFW5c), you'll often see [Double Bass Drum Pedals](https://www.sweetwater.com/c651--Double_Drum_Pedals__and__Beaters).

<--->

<audio controls src="/sounds/NYC/CD2 - KCK 01.wav"></audio>

{{< attribution >}}Kick Drum sample, from [NYC Drum Kit @ Soundpacks.com](https://soundpacks.com/free-sound-packs/nyc-drum-kit/){{< /attribution >}}

<iframe width="100%" height="200" src="https://www.youtube.com/embed/EFjZ1QaKHdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}


---

* **Snare Drum**
  {{< columns >}}

This is the shallowest drum, usually about 6 inches deep. The snare is also used for rimshots, coming back to that in a bit. It's also pretty common to add extra things to the snare to spice it up:

<iframe width="100%" height="200" src="https://www.youtube.com/embed/Fh5sIZo1_1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< attribution >}}[Adding Effects to Your Snare Drum (Sounds Like A Drum)](https://www.youtube.com/watch?v=3yVaQ9ecrcA){{< /attribution >}}

<--->  

<audio controls src="/sounds/NYC/CD2 - SNR 04.wav"></audio>

{{< attribution >}}Snare drum sample, from [NYC Drum Kit @ Soundpacks.com](https://soundpacks.com/free-sound-packs/nyc-drum-kit/){{< /attribution >}}

<audio controls src="/sounds/LivePercSamplePack/LPSP_RIMSHOT_79.wav"></audio>

{{< attribution >}}Rimshot sample, from [Live Percussion Sample Pack @ Soundpacks.com](https://soundpacks.com/free-sound-packs/live-percussion-sample-pack/){{< /attribution >}}
{{< /columns >}}

---

* **Floor Tom**
  {{< columns >}}
  Your 'Normal' drum set will have 3 Tom drums, these are big, deep drums. Of them, the Floor Tom is the biggest.
  <---> 

  See the video below to hear a Tom drum in action

{{< /columns >}}

---

* **Toms (usually X2)**
  {{< columns >}}
  The other two drums on 'Normal' drum kit are toms too, but are typically a bit smaller, but not matched in size. Usually this is set up so you can have "Descending Toms" - more on this in a bit.

[Why do drum sets have descending toms? (Low Volume Drumming)](https://www.lowvolumedrumming.org/descending-toms/)
<--->  

<iframe width="100%" height="200" src="https://www.youtube.com/embed/3yVaQ9ecrcA?start=602" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< attribution >}}[Deep, Detuned Tom Sounds S2E15 (Sounds Like A Drum)](https://www.youtube.com/watch?v=3yVaQ9ecrcA){{< /attribution >}}

{{< /columns >}}

---

* **HiHat Cymbals + Pedal**
  {{< columns >}}
  The pedal here is used to close the two cymbals that make up the HiHat together. This gives it a shorter tail.

<--->

<audio controls src="/sounds/NYC/1.wav"></audio>

{{< attribution >}}Closed HiHat sample, from [NYC Drum Kit @ Soundpacks.com](https://soundpacks.com/free-sound-packs/nyc-drum-kit/){{< /attribution >}}

<audio controls src="/sounds/LivePercSamplePack/LPSP_OPEN_HATS_01.WAV"></audio>

  {{< attribution >}}Open HiHat sample, from [Live Percussion Sample Pack @ Soundpacks.com](https://soundpacks.com/free-sound-packs/live-percussion-sample-pack/){{< /attribution >}}

{{< /columns >}}

---

* **Crash, Ride, Splash, and China Cymbals**
  {{< columns >}}
  This is basically a big disc of metal made to flop noise around everywhere, right? Well, it turns out there's a little more nuance to it than that. Here's a really informative link and an interesting video comparing some Cymbals. My point is just that there's more to it than a slab of metal.

  {{< best >}} [Cymbal Types: Up Your Drumming Knowledge](https://www.dawsons.co.uk/blog/beginners-guide-to-cymbals#:~:text=Whereas%20crash%20cymbals%20are%20typically,have%20a%20shimmering,%20sustaining%20sound.&text=The%20sound%20of%20a%20ride,on%20where%20it%20is%20hit.) {{< /best >}}

  <--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/h_8x3HbL-hM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< attribution >}}[Effects Cymbal Comparison (Christian Baumgartner)](https://www.youtube.com/watch?v=h_8x3HbL-hM){{< /attribution >}}

{{< /columns >}}

---

* **Sticks**
  {{< columns >}}
  Don't forget the obvious! The drum sticks themselves can be tapped together.
  <--->

<audio controls src="/sounds/LivePercSamplePack/LPSP_STICKS_1.wav"></audio>

{{< attribution >}}Sticks sample, from [Live Percussion Sample Pack @ Soundpacks.com](https://soundpacks.com/free-sound-packs/live-percussion-sample-pack/){{< /attribution >}}

{{< /columns >}}

## Other Percussion Elements

Don't forget that percussion doesn't just have to come from stretched membranes and sheets of metal. Shakers, finger snaps, the triangle, gongs, bells, hang drums, claps ... this list keeps going. Don't be afraid to add some spice!

## The 808, 909, LinnDrum, and Oberheim DMX

![TODO](/common/TODO.svg)

## Modern Drum Machines

Most modern drum machines actually have a bit more than drums. The Elektron Digitakt, for example, is a sampling drum machine that can take those samples down to single cycle wave forms and loop them, turning it into a synth- and a quite competent one at that.

{{< columns >}}

<iframe width="100%" height="200" src="https://www.youtube.com/embed/g5bHONbDXDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/WTAlt5ccvms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

[Playing the Elektron Model:Cycles (Red Means Recroding)](https://www.youtube.com/watch?v=APrzOGCr2OU)

[Why I like the Roland MC-707 (Red Means Recording)](https://www.youtube.com/watch?v=Bkh88gZW5kI)

## Drum Effects

{{< columns >}}

<iframe width="100%" height="200" src="https://www.youtube.com/embed/yew08KqkLbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/Bxz6jShW-3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

## Sometimes Less is more

For as much as I've gone over all the different types of drums above, and the sea of percussion that lies below, I want to take a break and appreciate that sometimes you really don't need all that much. Just poke around these videos. I tried to find the absolute best of minimal and maximal that I could.

{{< columns3 >}}

### Giant

<iframe width="100%" height="200" src="https://www.youtube.com/embed/PZwO5a5QSx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="200" src="https://www.youtube.com/embed/kXGc2AR1a-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

### Minimal

<iframe width="100%" height="200" src="https://www.youtube.com/embed/MhxtKutcPvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="200" src="https://www.youtube.com/embed/v113x1LAqCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns3 >}}

Similarly, [Big Drums VS Small Drums (YouTube)](https://www.youtube.com/watch?v=9Q0R3TM2P6c) isn't as simple as you think either

### Linear Drumming

[Linear drumming (Drumeo)](https://www.youtube.com/watch?v=YQ3H9XaeUH0) is effectively "drumming in mono". You only play one sound at a time. No two sounds are allowed to play at once. It's not super well defined weather this means the drums have to all choke each other (that is, the start of one immediate cuts off all others) but either way, it's an interesting stylistic exercise to try.

---

### Other Drum Content

[12 Tips I Wish I Knew as a Beginner Drummer (Stephen Clark)](https://youtu.be/gHIZELwH49k)

## Other Percussion Instruments

![TODO](/common/TODO.svg)

### Bells and Carillons

{{< columns >}}

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/VkRIMgTU7cA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

### Beatboxing

{{< smalltext >}} okay, technically this might belong in wind instruments. Fight me. {{< /smalltext >}}

### Steelpan

### Hangdrums & Handpans

### Tambourine

### Vibraphone

### Vibraslap

### Wood block

### Xylophones & Glockenspiels

