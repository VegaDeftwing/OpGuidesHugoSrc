---
title: "Instruments"
slug: "Instruments"

---

# Instruments

<script>
    document.getElementById("instMenu").open = true;
</script>
{{< tip >}}If you're going to be playing an instrument though a computer - and I mean either an instrument which makes its own noise like a guitar or a controller like a MIDI keyboard - you'll want to adjust your audio buffer size as best you can. See [Optimizing The Latency Of Your PC Audio Interface](https://www.soundonsound.com/techniques/optimising-latency-pc-audio-interface) from Sound on Sound for more info about this, but generally just set your buffer size as low as you can until it starts to sound like it's horribly broken. If you don't do this, the delay between hitting a note and sound coming out your speakers will make it **very** difficult to play.{{< /tip >}}

{{< tip >}}This chapter is broken up into subsections, check the menu and it should have expanded!{{< /tip >}}

## What is an Instrument?

Okay, yeah, that sounds like a stupid question, but I think it's important to think about. Wikipedia has it defined like this:

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Musical_instrument)" >}}

A **musical instrument** is a device created or adapted to make musical sounds. In principle, any object that produces sound can be considered a musical instrument—it is through purpose that the object becomes a musical instrument.

{{< /quote >}}

which, okay, that's fair enough. But I think that has some issues. For one, not all devices that are played as instruments make sounds on their own. I have quite a few MIDI controllers sitting next to me, and while they send data about the notes I'm playing, they do not make sounds on their own- are they still instruments?

So, for the purposes of these pages I'll consider an instrument to be defined not solely by sound, but by the interface. This may seem like an odd choice, but it is because technology has brought use to a point that it is often extraordinarily difficult to determine what interface is being used. I can play a guitar and hear a piano, I can play drums and hear a violin. The sounds, to some extent, have been decoupled from their physical forms.

*Obviously*, some interfaces are still better than others for making certain sounds. While I could detect each drum hit on a set of acoustic drums and map each to a different note on the piano, this will be far from a good way to play the piano, and may make playing chords impossible. Similarly, I could map drum sounds to each key on a keyboard (and this is often done) but it's rather awkward to play.

In the first few chapters, {{< button relref="/music/gettingstarted" color="music" >}}Getting Started{{< /button >}} and {{< button relref="/music/sources" color="music" >}}Sound Sources{{< /button >}}, synthesizers were explored rather deeply - so why do this before talking about the more familiar realm of acoustic instruments, like a big ol' hollow body guitar or a drum set with membrane you can hit and *feel*?

Well, because assuming you know how all of the physics of those systems work *or* have really good samples of the instruments *or* you only need to fill the same role as the sound (like needing a bass-heavy sound, but not a bass guitar) it really doesn't matter if you have the physical instrument, so long as you have a good way to play the same sounds, that lends the same amount of expressiveness and control.

### Expressiveness and Control

If you're reading this page, long form as it is, you're probably sitting at a desktop or laptop and you may have your fingers resting on the home row of your keyboard.

Typing-not-musical keyboards are meant to allow you to input data as quickly and reliably as possible, but they convey fairly little information in each key stroke. For normal typing purposes (not gaming and ignoring backspace/delete) we really don't even need to separately tell the computer about the key going down and going up. For most presses, we just care that it was pressed. We don't care how long or how hard.

If we add some of those details back in - make it care about how hard we hit, how long we hold - that's more-or-less a piano.

Compare this to a guitar. On a guitar you can bend the strings, mute them with your hand, pluck them with different intensities, slide between notes, play hammer-on notes (play the next note on the string without plucking), etc. The guitar, despite its lack of strings, is often a much more expressive instrument than the piano.

This isn't a totally fair comparison of course. For a typical guitar we can only play up to 6 notes at a time and because of limitations on practical finger positions, chords will often have to use either "open strings" (strings playing the note it's tuned to with no finger on it) or be "bar chords" (chords where the index finger has to lay across all the strings). All together, this means no chord played on a guitar can be more than 6 notes, and practically speaking, there's a limit to how quickly and accurately a player can change between complex chords. 

A piano is an instrument built for chords, but it gives up some expressiveness elsewhere for this - you can't naturally play vibrato on one string by bending it, nor can you slide from one note to another.

I think the best way to think about this is to give each instrument or controller four scores:

* Speed: How fast can you enter notes?
* Width: How well does it handle polyphony (multiple notes), if at all?
* Expressivity: How much can you alter each note played independently?
* Global Control: How much can you alter the sound of all of the notes played as a group?

In my mind, on a scale of 1-10, a guitar would get:

* Speed: 10
* Width: 5
* Expressivity: 7
* Global Control: 2

While a piano would get:

* Speed: 5
* Width: 10
* Expressivity: 2
* Global Control: 2

With this rating system you see why to use different instruments / input devices for different tasks. This may sound like a pretty "no shit" statement if you're still thinking in terms of each instrument having its own sound but in digital music production there's nothing stopping us from using a guitar for a piano sound or a piano for a guitar sound. This means we can find ways to get these numbers up!

Let's pick on guitar first. It's fast and expressive per note, but we can't alter the sound as a whole or play big complex chords.

Except, yeah, we can - Pedals! We'll get more into effects later, but some of the most basic pedals hardly count as effects at all. For example, you can get a volume pedal. This allows you to rock your foot back and forth to change the volume as a whole. +1 point to global control. If you want to alter the sound directly, some pedals have the ability to rock your foot back and forth to adjust distortion, number of repeats in a delay, or a filter (often called a "wah" pedal, for the "wah" sound it makes).

That still leaves width. We can't get this up to the level of a piano by any means, but there are some effect pedals with make it so that every note played is a full chord or that automatically harmonize with you. So +1 to that too.

Going the other way around, modifying the piano, can lead to good results too:

For example, here's a track played on the Roli Seaboard, which is a squishy keyboard where the pressure applied by each finger, how hard you strike initially, the vertical position of the finger all matter *and* the play can easily drag the finger across notes or wiggle their finger for a vibrato.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/pFdbx8YT4dQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### "I'm a Guitarist/Drummer/Violinist and this isn't right!"

Woah there, I'm not saying your skills with a particular instrument are bad or that digital stuff is inherently better. In fact, as I'll get to later, I believe quite the opposite. As good as a lot of these digital tools are, if they're modeled after physical instruments a good player on the original will always be better than the reproduction... except for piano, it's been modeled and sampled well enough to be indistinguishable now - of course skill on the piano key's themselves is still important there.

Instead, I'm saying for the typical bedroom music producer getting more expressive tools and thinking about how those instruments get their sounds from the way their played and ways the human body can interact with the instrument is important for getting better less stale sounds.

Musicians shouldn't be tied to one instrument. At most, you should be focused on your musical posiition. A drummer shouldn't have to use acoustic drums to be a drummer, using a mix of a drum machine and MIDI drums should be seen as a valid option. Similarly, a bassist shouldn't be tied to their guitar. Often people couple the sound to the instrument, but there's really no need to do so anymore. It used to be that trying to 'fake' a bass guitar sound with a keyboard meant that you just can't replicate everything the bass could do because a keyboard inherently lacks the control of the metal strings that you can bend, slap, and otherwise abuse. However, now with the expressiveness of modern controllers and the timbral diversity and quality of synthesizers, for many songs the resulting sound is close to or better than that of any other instrument, and you gain the ability to explore sounds that would otherwise be impossible to reach on the acoustic instrument at a fraction of the price and skill level required to independently own and learn each instrument you'd want to use.

Emulations of sounds aren't bad, the interface to them was. That's changed in the last few years.

There are limitations imposed by physical instruments that we're used to hearing, like a guitar's limit of 6-note polyphony as well as imperfections - like the background hum and string noise of an electric guitar or acoustic respectively. But, all of those can be (and are) emulated very well regularly, because just like vinyl they can be pleasant.

The value of the musician should be in their ability to inspire composition as they know how to push the sounds of their instrument and how to get the most out of those limitations, and if that's the case, why should it matter if they're using a 400 year old $100,000 violin or a good physically modeled synth?

If musicians can use the knowledge from playing a physical acoustic instrument and augment it with the flexibility and power of synthesis, effects, and extra controllers I see that as an absolute win.

I still play my guitar, and I still record it into finished music, but I don't necessarily think it's superior to using the squishy keyboard in the video above - and I should know, I had one of those squishy keyboards - only selling it to upgrade to an [even better expressive keyboard](https://www.expressivee.com/2-osmose). I do it because it's **fun**. Similarly, it can be fun to watch- I think one of the big appeals of an orchestra is its spectacle. So, no, your skills with traditional instruments aren't going anywhere and there are still many good reasons to learn.

Three more things:

1. The physical limitations of an instrument will inspire how it is played. A drum machine can be programmed to have patterns that a real drummer could never do, but this isn't always a good thing. **Considering limits of the original when using something without them will make you a better musician.**
2. Without proper respect for a digital instrument, it will sound just as bad as a poorly played physical one. Just as it takes skill to play instruments with [varying dynamics](https://www.youtube.com/watch?v=fpqObbD2YqE) the same applies to digital instruments.
3. Just as players in a real ensemble have to interpret notes and add their own 'flair' to what they see as part of the translation from paper to sound, so do players of digital instruments- the problem here is that a computer will be extremely *sterile*- do not expect to just place notes on a digital piano roll and get anywhere near the same sound. If you want it to sound like it's played by a human, you either need to **actually play it** - even if the controller doesn't match the sound (guitar sound on a keyboard or whatever) - or take the time to add very subtle mistakes and variations in.
