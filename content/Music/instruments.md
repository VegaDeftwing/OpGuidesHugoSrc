---
title: "Instruments"
slug: "Instruments"

---

# Instruments

<script>
    document.getElementById("instMenu").open = true;
</script>
{{< tip >}}If you're going to be playing an instrument though a computer - and I mean either an instrument which makes it's own noise like a guitar or a controller like a MIDI keyboard - you'll want to adjust your audio buffer size as best you can. See [Optimizing The Latency Of Your PC Audio Interface](https://www.soundonsound.com/techniques/optimising-latency-pc-audio-interface) from Sound on Sound for more info about this, but generally just set your buffer size as low as you can until it starts to sound like it's horribly broken. If you don't do this, the delay between hitting a note and sound coming out your speakers will make it **very** difficult to play.{{< /tip >}}

{{< tip >}}This chapter is broken up into sub sections, check the menu and it should have expanded!{{< /tip >}}

## What is an Instrument?

Okay, yeah, that sounds like a stupid question, but I think it's important to think about. Wikipedia has it defined like this:

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Musical_instrument)" >}}

A **musical instrument** is a device created or adapted to make musical sounds. In principle, any object that produces sound can be considered a musical instrument—it is through purpose that the object becomes a musical instrument.

{{< /quote >}}

which, okay, that's fair enough. But I think that has some issues. For one, not all devices that are played as instruments make sounds on their own. I have quite a few MIDI controllers sitting next to me, and while they send data about the notes I'm playing, they do not make sounds on their own- are they still instruments?

So, for the purposes of these pages I'll consider an instrument to be defined not solely by sound, but by the interface. This may seem like an odd choice, but it is because technology has brought use to a point that it is often extraordinarily difficult to determine what interface is being used. I can play a guitar and hear a piano, I can play drums and hear a violin. The sounds, to some extent, have been decoupled from their physical forms.

*Obviously*, some interfaces are still better than others for making certain sounds. While I could detect each drum hit on a set of acoustic drums and map each to a different note on the piano, this will be far from a good way to play the piano, and may make playing chords impossible. Similarly, I could map drum sounds to each key on a keyboard (and this is often done) but it's rather awkward to play.

In the first few chapters, <a href="/music/music-getting-started/">Getting Started</a> and <a href="/music/sound-sources/">Sound Sources</a>, synthesizers were explored rather deeply - so why do this before talking about the more familiar realm of acoustic instruments, like a big ol' hollow body guitar or a drum set with membrane you can hit and *feel*?

Well, because assuming you know how all of the physics of those systems work *or* have really good samples of the instruments *or* you only need to fill the same role as the sound (like needing a bass-heavy sound, but not a bass guitar) it really doesn't matter if you have the physical instrument, so long as you have a good way to play the same sounds, that lends the same amount of expressiveness and control.

### Expressiveness and Control

So, what do I mean "expressiveness and control"?

Well, think about the difference between a piano and a guitar. On a piano, you may have hugely more strings, but you can only vary a few things (how hard you hit them, whether or not they get muted when you release the key) but on a guitar you can bend the strings, mute them with you hand, pluck them with different intensities, slide between notes, play hammer-on notes (play the next note on the string without plucking), etc. The guitar, despite it's lack of strings, is often a much more expressive instrument than the piano.

So, this may seem like a no brainer, acoustic instruments offer more hands-on control and sound better than digital ones right?

Well, most digital instruments give you a huge number of knobs than can be tweaked to get the sound exactly as you want, but that's often not a fair comparison because it would be really hard to get a sound like a guitar if you hard to simultaneously play the notes on a MIDI keyboard and turn a huge number of knobs to match the same motion on a real guitar.

Fortunately, this isn't what playing digital instruments has to look like anymore. 

There are plenty of expressive digital controllers, that allow for just as much, if not more, control as a traditional acoustic instrument would. Here, for example, is a track played on the Roli Seaboard, which is a squishy keyboard where the pressure applied by each finger, how hard you strike initially, the vertical position of the finger all matter *and* the play can easily drag the finger across notes or wiggle their finger for a vibrato.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/pFdbx8YT4dQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### "I'm a Guitarist/Drummer/Violinist and this isn't right!"

Woah there, I'm not saying your skills with a particular instrument are worthless or that knowing how to play an instrument well is a bad thing!

I'm saying musicians shouldn't be tied to their instrument. At most, you should be focused on your musical position. A drummer shouldn't have to use acoustic drums to be a drummer, using a mix of a drum machine and MIDI drums should be seen as valid option. Similarly, a bassist shouldn't be tied to their guitar. Often people couple the sound to the instrument, but there's really no need to do so anymore. It used to be that trying to 'fake' a bass guitar sound with a keyboard meant that you just can't replicate everything the bass could do because a keyboard inherently lacks the control of the metal strings that you can bend, slap, and otherwise abuse. However, now with the expressiveness of modern controllers and the timbral diversity and quality of synthesizers, is basically the same (if not better) than that of any other instrument, and you gain the ability to explore sounds that would otherwise be impossible to reach on the acoustic instrument.

Emulations of sounds aren't bad, the interface to them was. That's changed in the last few years.

There are limitations imposed by physical instruments that we're used to hearing, like a guitars limit of 6-note polyphony as well as imperfections - like the background hum and string noise of an electric guitar or acoustic respectively. But, all of those can be (and are) emulated very well regularly, because just like vinyl they can be pleasant.

The value of the musician should be in their ability to inspire composition as they know how to push the sounds of their instrument and how to get the most out of those limitations, and if that's the case, why should it matter if they're using a 400 year old $100,000 violin or a good physically modeled synth- especially if even trained ears can not hear the difference, or think the digital one sounds 'more real' on a regular basis. If they can use the knowledge from playing a physical, acoustic instrument and augment it with the flexibility and power of synthesis I see that as an absolute win.

I still play my guitar, and I still record it into finished music, but I don't necessarily think it's superior to using that squishy keyboard, and I own one of those squishy keyboards along with my very expensive guitar. I do it because it's **fun**. Similarly, it can be fun to watch- I think one of the big appeals of an orchestra is it's spectacle. So, no, your skills with traditional instruments aren't going anywhere and there's still many good reasons to learn.

Three more things:

1. The physical limitations of an instrument will inspire how it is played. A drum machine can be programmed to have patterns that a real drummer could never do, but this isn't always a good thing. **Knowing both will make you better at both.**
2. Without proper respect for a digital instrument, it will sound just as bad as poorly played physical one. Just as it takes skill to play instruments with [varying dynamics](https://www.youtube.com/watch?v=fpqObbD2YqE) the same applies to digital instruments.
3. Just as players in an real ensemble have to interpret notes and add their own 'flair' to what they see as part of the translation from paper to sound, so do players of digital instruments- the problem here is that a computer will be extremely *sterile*- do not expect to just place notes on a digital piano roll and get anywhere near the same quality. If you want it to sound like it's played by a human, you need to **actually play it** - even if the controller doesn't match the sound (guitar sound on a keyboard or whatever)
