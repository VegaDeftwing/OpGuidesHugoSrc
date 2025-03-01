# Sequencing & Midi

{{< tip >}}

{{< button relref="/Music/midi" color="music" >}}MIDI In Detail{{< /button >}} covers the technical bits of MIDI in much more detail, but you'll still probably want to read this first if you don't know what MIDI even is.

 {{< /tip >}}

## Sequencing

The definition of a sequence is pretty obvious, but don't be misled by the name- a "sequence" is not always just a list of notes to be played one after the other. Sometimes there's overlap, gaps (rests), bends from one note to another (legato) and almost always information about how hard a note is pressed and how long it should be held for are saved. To whet your appetite before I go more into the weeds, I recommend this video from Red Means Recording:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/aXTT8jUhoAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Step Sequencing

The easiest to understand sequencing method is step sequencing. You'll generally see two types of step sequencing: Pitch & Trigger. Let's look at trigger, which is usually used on drums, first:

#### Drum Sequencing

![step sequencer in VCV Rack](/music/stepseq.webp)

<audio controls loop src="/sounds/sequencerexample-003.wav"></audio>

{{< attribution >}}This should automatically loop, but there may be a slight delay when it does.</br> The darker green dots just indicate the sequencer's position when I took the screenshot{{< /attribution >}}

Here, I've set up a simple step sequence in VCV rack, the gist is that on each clock pulse (beat) the sequence moves right by one step, until it loops back around. If the light is lit, that row will output a trigger.

So, on that top row, we have

| 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16   |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| X    | -    | -    | -    | X    | -    | -    | -    | X    | -    | -    | -    | X    | -    | -    | -    |

Which, effectively, just means the bass drum will play on the 4th beat, endlessly. This gives the bass drum a super basic, repetitive pattern. If I had done every other beat, it would just be twice as fast. You can see how the other drums have more complex patterns, and you should be able to look at the screenshot above and see how that pattern matches the sound.

This setup for a step sequencer is almost painfully simple, and doesn't leave a ton of options. Probably the biggest missing thing here is velocity, which means there's not a way in this patch to adjust the volume of each hit<footnote>Velocity is technically more than just volume, in a lot of circumstances it will actually change the tone too, in an attempt to emulate the difference in sound when you hit a drum head or pluck a string harder or softer.</footnote>. Rather than make this all about VCV, I recommend you take a look at the step sequencer in the Elektron Digitakt, which is almost obnoxiously powerful. My point here isn't to convince you to run out and buy hardware, but rather to show that simple step sequencing, when done with care, can go a long way. For this, I recommend watching [Beats From Scratch / Elektron Digitakt Minimal Techno Jam](https://www.youtube.com/watch?v=g5bHONbDXDI) from Ihor on YouTube, which was feature on the percussion page as well. You almost certainly won't follow everything going on, but you should see that he can adjust certain parameters and 'lock' them to a step, like choosing only one step in a sequence to be a higher pitch. 

Before moving on, I do want to help you actually make these simple step/gate sequences. For as simple as it sounds to make basic drum sequences, it's *really* not. You'll often end up making just really basic 4-on-the-floor techno (with exactly the bass drum as in the demo sequence above) or something that has at least one percussion hit on every step and gets too busy<footnote>As with all things music, this isn't some hard and fast rule. If you want at least one sound on every step that's totally fine, but it's good to remember that empty space in a drum loop has its own character</footnote>. The normal recommendation for this is [this 260 Drum Machine Patterns](https://www.amazon.com/Drum-Machine-Patterns-Leonard-Corp/dp/0881888877) book (that you can probably find PDFs of online) but [Beat Dissected from Attack Magazine](https://www.attackmagazine.com/technique/beat-dissected/) and this [$10 physical / FREE .PDF Drum patterns book](https://shittyrecording.studio) I think are better.

##### Velocity is a big deal

If you trying to sequence drums the *velocity* (how hard/loud) of each hit matters more than you might think. A pattern that might sound outright terrible without velocity variation can sound great with it. If you think your drums are missing something, try changing up the velocity before you reach for adding more sounds.

As an example, here's a simple drum pattern where the only difference is the velocity being constant or sequenced for the snare part.

{{< columns >}}

<audio controls loop>
  <source src="/sounds/snareline_no_velocity.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<--->

<audio controls loop id="with_velocity">
  <source src="/sounds/snareline_with_velocity.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<script>
  <!--- Try to normalize the volume a bit --->
  var audio = document.getElementById("with_velocity");
  audio.volume = 0.5;
</script>

{{< /columns >}}

##### More info on drum sequencing

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FoMmVlAvjmM" title="How to Write Drum Parts (for non drummers)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

There's a *lot* of good info on drum sequencing on YouTube. Watch, practice, repeat.

* [How to humanize Hi-Hats on any Drum Machine (Captain Pikant)](https://www.youtube.com/watch?v=Qw7SlGbj838)

#### Note and Value Sequencing

{{< columns >}}

With a value step sequencer, each step has a corresponding knob (or slider) and outputs that knob's value when it is the active step, so now instead of a binary on/off at each step, we're setting a value.

Here's a little gif showing this in action. Here, the steps are simply descending in value, as you can see from the downward staircase on the scope as well as the knobs being turned down on each successive step.

These values could control anything. The most obvious is the pitch of an oscillator to make a musical pattern, but you could just as easily have them control other parameters too: filter cutoff, volume, amount of an effect, whatever. 

<--->

![](/music/basicanalogstep.gif)

{{< /columns >}}

To actually hear this in action, here's a patch demonstrating multiple sequences working together. In this patch, the PGMR module is a multi-lane sequencer, which really just means that at each step there's more than one knob, because there's more than one output. <footnote>You'll also see PGMRX, which is just an expander adding steps. PGMR only has 4 steps by default, but that's not really enough for most things. You can chain as many PGMRX module as you like to get more steps.</footnote> The main difference between this and just setting up four, small sequencers (like the ADDR-SEQ used in the gif) is that the steps are always locked together, you can't accidentally have one sequence run faster than the other, or get out of sync - not that either of those are bad things, you'll probably want to do both intentionally!

![](/music/analogstepseq.webp)

<audio controls loop src="/sounds/analogseq-005.wav"></audio>

Here, I've setup two simple synth voices, one on top, one on bottom. The green *Pitch 1* Sequence controls the pitch of one voice, while the blue *Pitch 2* sequence gets the pitch of the other. Similarly, each voice has a filter and there's two sequence controlling the filter's cutoff frequencies.

Some of the complexity here comes from trying to make these values fit into shapes we want. For both pitch sequences (green and blue) they need to pass through a *Quantizer* first, which just makes sure the values coming out of the sequencer are actual notes, not just random pitches that don't even correspond to a key on the keyboard. See in the bottom left scope how on the step between the *TIME* and *TRIG* knobs there's both a blue line and a pink line? The pink line here is the value *after* the quantizer, and you can see there is a difference, so it is doing something.

Looking at the second scope, you can see in pink the original signal coming from the Filter 2 sequence, and in blue the signal after passing through a *Slew limiter* which is making it have smoother transitions, instead of the sharp transitions (vertical edges) of the original sequence. This is just making the filter transition a little smoother. If we had done this to the pitch sequence after the quantizer we'd have a legato effect instead.

#### Getting Some Variety

One thing you should notice pretty quick once you start playing with sequencers on your own is that they get incredibly boring. The repetition repetition repetition will drive you mad. Fortunately, there's a ton of neat sequencers out there, and even most of the basic ones can be used in interesting ways to keep them moving. Even looking at the sequencer in the above patch, with only 8 steps, you can change the direction to make it run backwards or hook up other events to make it jump to a particular step.

{{< columns >}}

One of the more common methods to add variety is too just to sequence your sequences (usually this is called scenes) which, while *can* be done by putting multiple sequences <footnote>...or a multi-lane sequencer like the Bogaudio PGMR sequencer that was used above</footnote> through and sequencing that switch, is a bit tedious to set up.

<--->

![](/music/metaseq.webp)

{{< /columns >}}

Instead, you'll probably want to run something which does it more natively. Most DAWs support this idea pretty easily, but if you're looking for something in VCV and willing to pay, the [ZZC Phaseque](https://library.vcvrack.com/ZZC-Phaseque/Phaseque) is pretty nice. Another way to do it is using the [Stoermelder 8FACE mk2](https://library.vcvrack.com/Stoermelder-P1/EightFaceMk2) and any sequencer (like the PGMR used so far) but that setup is still a tad awkward. (or the [Stoermelder Transit](https://library.vcvrack.com/Stoermelder-P1/Transit) if you want to morph between sequencer states, but that's sorta weird?)

{{< columns >}}

Step sequencers can also get pretty crazy with a lot of built-in features, so if you're in need of some inspiration, there are plenty of options. Some will feature randomization and probability, others will feature per-step ratcheting/repeats, some will let you select steps on a grid with up, down, left, and right instead of just forwards and backwards<footnote>These are actually cartesian sequencers, but they're still basically step sequencers</footnote>. Step sequencing doesn't have to be boring!

{{< attribution >}}Pictured, L→R, T→B: [Geodesics Entropia](https://library.vcvrack.com/Geodesics/Entropia), [Bidoo dTrOY](https://library.vcvrack.com/Bidoo/dTrOY), [Mog Network](https://library.vcvrack.com/Mog/Network), [Impromptu Phrase Seq 16](https://library.vcvrack.com/ImpromptuModular/Phrase-Seq-16), [Aria Salvatrice Darius](https://library.vcvrack.com/AriaSalvatrice/Darius), [JW GridSeq](https://library.vcvrack.com/JW-Modules/GridSeq), [ZZC Phaseque](https://library.vcvrack.com/ZZC-Phaseque/Phaseque) (non-free), [Slime Child Audio Polyrhythm Sequencer](https://library.vcvrack.com/SlimeChild-Substation/SlimeChild-Substation-PolySeq) (non-free) all running in [VCV Rack](https://vcvrack.com) {{< /attribution >}}

<--->

![](/music/crazystepseq.webp)

{{< /columns >}}

### Piano Rolls

Probably the most common way of entering a sequence is using a **piano roll**

{{< columns >}}

Piano rolls get their name from player pianos, as they had actual rolls of paper with holes cut in them that represented the notes to be played. The gaps allowed for little pins of metal to push through and make contact, completing a circuit and driving electronics to hit the note, making it play on a real piano.

Clearly, we don't want to be taking a hole punch to paper to make our music- we want to use a computer! But, despite how much everything has changed...

<--->

<p><a href="https://commons.wikimedia.org/wiki/File:PlayerPianoRoll.jpg#/media/File:PlayerPianoRoll.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/PlayerPianoRoll.jpg" alt="PlayerPianoRoll.jpg"></a>

{{< attribution >}}

Image by [Draconichiaro](commons.wikimedia.org/wiki/User:Draconichiaro), <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=82604752">From Wikipedia</a></p>

{{< /attribution >}} 

{{< /columns >}}

<style>
    /* Custom player style */
midi-player {
  display: block;
  width: inherit;
  margin: 4px;
  margin-bottom: 0;
}
midi-player::part(control-panel) {
  background: #0000;
  border: 2px solid #000;
}
midi-player::part(play-button) {
  color: #353;
  border: 2px solid currentColor;
  background-color: #4d4;
  transition: all 0.2s;
  content: '';
}
midi-player::part(time) {
  font-family: monospace;
}
midi-visualizer .piano-roll-visualizer {
  background: #0003;
  border: 2px solid black;
  margin: 4px;
  margin-top: 0;
  overflow: auto;
}
midi-visualizer .staff-visualizer {
  background: #fff;
  border: 2px solid black;
  margin: 4px;
  margin-top: 0;
  overflow: auto;
}
midi-visualizer svg rect.note {
  opacity: 0.6;
  stroke-width: 2;
}
midi-visualizer svg rect.note[data-instrument="0"]{
  fill: #FFF;
  stroke: #FFF;
}
midi-visualizer svg rect.note[data-instrument="1"]{
  fill: #30F;
  stroke: #055;
}
midi-visualizer svg rect.note[data-instrument="2"]{
  fill: #F5F;
  stroke: #055;
}
midi-visualizer svg rect.note[data-is-drum="true"]{
  fill: #0F0;
  stroke: #0F0;
}
midi-visualizer svg rect.note.active {
  opacity: 0.9;
  stroke: #0F0;
}
</style>



<script src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.23.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.5.0"></script>

<midi-visualizer
  type="piano-roll"
  src="/fairuse/other/halo2.mid">
</midi-visualizer>
<midi-visualizer
  type="staff"
  src="/fairuse/other/halo2.mid">
</midi-visualizer>
<midi-player
  src="/fairuse/other/halo2.mid"
  sound-font visualizer="midi-visualizer">
</midi-player>

The idea is still pretty much the same:

### Timeline



[TODO] 

[Breaking The Loop (Patches.zone)](https://patches.zone/breaking-the-loop)

random, sample/hold, probability, piano rolls, trackers, AI based, euclidean, trigger/gate/len, humanization

[Creating Melodies [Music Guides from Ableton]](https://makingmusic.ableton.com/creating-melodies-1-contour)

[Melody Guide [edmprod.com]](https://www.edmprod.com/ultimate-melody-guide/)

[Ways to turn tiny ideas into bigger tracks (Andrew Huang)](https://youtu.be/ONloOhDLrFU)

Song structure ABAB, ABBA, ABAC, etc.

Bpm changes, key changes, hooks, drops, 'flavor' with added samples

## Euclidean Sequencing



## Generative Sequencers

### ORCΛ

{{< columns >}}



<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/07aHUFNJUn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

### Mutable Instruments Grids & Marbles



### Turing Machines



### Sequence Modifiers

[TODO] Geodesics Fate, ...?

## MIDI effects

Arp, velocity, pitch bend, mod, sustain, generative, legato

## Multitracking

[Multitracking Synthesizers for Fun and Profit (RedMeansRecording)](https://www.youtube.com/watch?v=7EipTdTy8hM)
