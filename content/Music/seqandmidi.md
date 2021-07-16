---
title: "Sequencing and MIDI"
slug: "Sequencing and MIDI"

---

# Sequencing & Midi

{{< tip >}} This chapter only goes over the basics of MIDI. Because MIDI is so important to music production I'll dive much deeper into the details of MIDI in Chapter 6½ - <a href="/music/midi/">MIDI in Detail</a> {{< /tip >}}

## Sequencing

The definition of a sequence is pretty obvious, but don't be misled by the name- a "sequence" is not always just a list of notes to be played one after the other. Sometimes there's overlap, gaps (rests), bends from one note to another (legato) and almost always information about how hard a note is pressed and how long it should be held for are saved. 

### Step Sequencing

The easiest to understand sequencing method is step sequencing. You'll generally see two types of step sequencing: Pitch & Trigger. Let's look at trigger, which is usually used on drums, first:

#### Drum Sequencing

![step sequencer in VCV Rack](/stepseq.png)

<audio controls loop src="/sequencerexample-003.wav"></audio>

{{< attribution >}}This should automatically loop, but there may be a slight delay when it does.</br> The darker green dots just indicate the sequencer's position when I took the screenshot{{< /attribution >}}

Here, I've set up a simple step sequence in VCV rack, the gist is that on each clock pulse (beat) the sequence moves right by one step, until it loops back around. If the light is lit, that row will output a trigger.

So, on that top row, we have

| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16   |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| X    | -    | -    | -    | X    | -    | -    | -    | X    | -    | -    | -    | X    | -    | -    | -    |

Which, effectively just means the bass drum will play every every 4th beat. This gives the kick drum a super basic, repetitive pattern. If I had done every other beat, it would just be twice as fast. You can see how the other drums have more complex patterns though, and you should be able to look at the screenshot above and see how that pattern matches the sound.

This setup for a step sequencer is almost painfully simple, and doesn't leave a ton of options. Probably the biggest missing thing here is velocity, which means there's not a way in this patch to adjust the volume of each hit. Rather than make this all about VCV though, I recommend you take a look at the step sequencer in the Elektron Digitakt, which is almost obnoxiously powerful. My point here isn't to convince you to run out and buy hardware, but rather to show that simple step sequencing, when done with care, can go a long way. For this, I recommend watching [Beats From Scratch / Elektron Digitakt Minimal Techno Jam](https://www.youtube.com/watch?v=g5bHONbDXDI) from Ihor on Youtube, which was feature on the percussion page as well. You almost certainly won't follow everything going on, but you should see that he can adjust certain parameters and 'lock' them to a step, like choosing only one step in a sequence to be a higher pitch. 

Before moving on though, I do want to help you actually make these simple step/gate sequences. For as simple as it sounds to make basic drum sequences, it's *really* not. You'll often end up making just really basic 4-on-the-floor techno (with exactly the bass drum as in the demo sequence above) or just something that sounds like ass. The normal recommendation for this is [this 260 Drum Machine Patterns](https://www.amazon.com/Drum-Machine-Patterns-Leonard-Corp/dp/0881888877) book (that you can probably find PDFs of online) but [Beat Dissected from Attack Magazine](https://www.attackmagazine.com/technique/beat-dissected/) and this [$10 physical / FREE .PDF Drum patterns book](https://shittyrecording.studio) I think are better.

#### Note and Value Sequencing

![](/analogstepseq.png)

<audio controls loop src="/analogseq-005.wav"></audio>

Alright, so, obviously there's a lot more going on here. That's intentional, but the idea is still pretty much the same. Here, we have 4 rows of 8 knobs, and just like above each beat advanced the sequence a step forward. The difference here is that at each step we're sending something more than just a trigger for something to happen- we're sending a value. These values need to mean something though. Here, I've setup two simple synth voices, one on top one on bottom. The green *Pitch 1* Sequence controls the pitch of one voice, while the blue *Pitch 2* sequence gets the pitch of the other. Similarly, each voice has a filter and there's two sequence controlling the filter's cutoff frequencies.

Some of the complexity here comes from trying to make these values fit into shapes we want. For both pitch sequences (green and blue) they need to pass through a *Quantizer* first, which just makes sure the values coming out of the sequencer are actual notes, not just random pitches that don't even correspond to a key on the keyboard. See in the bottom left scope how on the step between the *TIME* and *TRIG* knobs there's both a blue line and a pink line? The pink line here is the value *after* the quantizer, and you can see there is a difference, so it is doing something.

Looking at the second scope, you can see in pink the original signal coming from the Filter 2 sequence, and in blue the signal after passing through a *Slew limiter* which is making it have smoother transitions, instead of the sharp transitions (vertical edges) of the original sequence. This is just making the filter transition a little smoother.

#### Getting Some Variety

One thing you should notice pretty quick once you start playing with sequencers on you own is that they get incredibly boring. The repetition repetition repetition will drive you mad. Fortunately, there's a ton of neat sequencers out there, and even most of the basic ones can be used in interesting ways to keep them moving. Even looking at the sequencer in the above patch, with only 8 steps, you can change the direction to make it run backwards or hook up other events to make it jump to particular step.

{{< columns >}}

One of the more common methods to add variety is to just to sequence your sequences (usually this is called scenes) which while *can* be done by putting multiple sequences (or a multi-lane sequencer like the Bogaudio PGMR sequencer that was used above ) through and sequencing that switch, is a bit tedious to setup.

<--->

![](/metaseq.png)

{{< /columns >}}

Instead, you'll probably want to run something which does it more natively. Most DAWs support this idea pretty easily, but if you're looking for something in VCV and willing to pay, the [ZZC Phaseque](https://library.vcvrack.com/ZZC-Phaseque/Phaseque) is pretty nice. Another way to do it is using the [Stoermelder 8FACE mk2](https://library.vcvrack.com/Stoermelder-P1/EightFaceMk2) and any sequencer (like the PGMR used so far) but that setup is still a tad awkward. (or the [Stoermelder Transit](https://library.vcvrack.com/Stoermelder-P1/Transit) if you want to morph between sequencer states, but that's sorta weird?)

{{< columns >}}

Step sequencers can also get pretty crazy with a lot of built in features, so if you're in need of some inspiration there's plenty of options. Some will feature randomization and probability, others will feature per-step ratcheting/repeats, some will let you select steps on a grid with up, down, left, and right instead of just forwards and backwards. Step sequencing doesn't have to be boring!

{{< attribution >}}Pictured, L→R, T→B: [Geodesics Entropia](https://library.vcvrack.com/Geodesics/Entropia), [Bidoo dTrOY](https://library.vcvrack.com/Bidoo/dTrOY), [Mog Network](https://library.vcvrack.com/Mog/Network), [Impromptu Phrase Seq 16](https://library.vcvrack.com/ImpromptuModular/Phrase-Seq-16), [Aria Salvatrice Darius](https://library.vcvrack.com/AriaSalvatrice/Darius), [JW GridSeq](https://library.vcvrack.com/JW-Modules/GridSeq), [ZZC Phaseque](https://library.vcvrack.com/ZZC-Phaseque/Phaseque) (non-free), [Slime Child Audio Polyrhythm Sequencer](https://library.vcvrack.com/SlimeChild-Substation/SlimeChild-Substation-PolySeq) (non-free) all running in [VCV Rack](https://vcvrack.com) {{< /attribution >}}

<--->

![](/crazystepseq.jpg)

{{< /columns >}}

### Piano Rolls

Probably the most common way of entering a sequence is using a **piano roll**

{{< columns >}}

Piano rolls get their name from player pianos, as they had actual rolls of paper with holes cut in them that represented the notes to be played. The gaps allowed for little pins of metal to push though and make contact, completing a circuit and driving electronics to hit the note, making it play on a real piano.

Clearly, we don't want to be taking a hole punch to paper to make our music- we want to use a computer! But, despite how much everything has changed...

<--->

<p><a href="https://commons.wikimedia.org/wiki/File:PlayerPianoRoll.jpg#/media/File:PlayerPianoRoll.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/PlayerPianoRoll.jpg" alt="PlayerPianoRoll.jpg"></a>

{{< attribution >}}

Image by [Draconichiaro](commons.wikimedia.org/wiki/User:Draconichiaro), <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=82604752">From Wikipedia</a></p>

{{< /attribution >}} 

{{< /columns >}}

The idea is still pretty much the same:

### Timeline



[TODO] 

[Breaking The Loop (Patches.zone)](https://patches.zone/breaking-the-loop)

random, sample/hold, probability, piano rolls, trackers, AI based, euclidian, trigger/gate/len, humanization

[Creating Melodies [Music Guides from Ableton]](https://makingmusic.ableton.com/creating-melodies-1-contour)

[Melody Guide [edmprod.com]](https://www.edmprod.com/ultimate-melody-guide/)

[Ways to turn tiny ideas into bigger tracks (YouTube, Andrew Huang)](https://youtu.be/ONloOhDLrFU)

Song structure ABAB, ABBA, ABAC, etc.

bpm changes, key changes, hooks, drops, 'flavor' with added samples

## MIDI effects

Arp, velocity, pitch bend, mod, sustain, generative, legatto

## Multitracking

[Multitracking Synthesizers for Fun and Profit (YouTube, RedMeansRecording)](https://www.youtube.com/watch?v=7EipTdTy8hM)