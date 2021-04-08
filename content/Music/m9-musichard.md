---
title: "Music Hardware"
slug: "Music Hardware"

---

# Music Hardware

While you *could* make all of your music without any extra gear but a comuter, you'll probably want some tools that make your life as a musician easier and let you explore ideas faster. Like I said back in the audio effects section, in my experience, making music depends on a really quick brain to input device feedback loop. Being able to turn a physical knob and mash physical keys will often lead to better results if only because you’re able to try things faster and try things by physically interacting with something that you may not have thought of otherwise. It’s why guitars, MPE keyboards, and Eurorack are so great: they all give you a crazy amount of control and expression that is *literally* at your finger tips. The brain to input interface there is just so much better.

So, while I don't think you should go *crazy* deep into hardware and spend your life savings, there's some things that just make sense to get, like a good keyboard midi controller, some knobs, and at least one realllly expressive instrument like a guitar or MPE controller. Something that really lets you *feel* what you're playing.

With that out of the way, let's look at the biggest distiction between any music hardware: is it Digital or Analog?

Digital: 1010111010010010110100101110101

Analog: ∿∿\~∿\~∿∿∿~∿∿\~∿\~∿∿∿~∿∿\~∿

I'm going to assume that you know what the difference is, and while some gear is obvious (A normal acoustic guitar is analog, a MIDI controller is digital) some music gear reallly blurs the lines, or even twists them outright. The Behringer DeepMind line, for example, is a purely analog synth with digital control's and a big ol' screen. Meanwhile, the Modor NF-1 is a digital synth that looks and tries to emulate the sound and feel of analog equipment. Plus, there's a ton of synths now that have analog oscilators and filters, but then do DSP (Digital Signal Processing) or, the other way around, with digital oscilators and analog filters. What I'm trying to say is, it's complicated.

So, let's start simple, and look at some MIDI controllers, why you might want one, and what features you might want to look for.

## MIDI

### What is MIDI?

**M**usical **I**nstrument **D**igital **I**nterface, or **MIDI** is what it sounds like, the primary way to get data between devices digitally. Want to tell a hardware synth to play a sequence you arranged on your computer? MIDI. Want to play notes into your computer using a keyboard? MIDI. Want to sequence drums, with varrying 'velocity' on each hit? MIDI.

### Sounds Great?

For the most part, yeah. Everything works together and you can make all your hardware speak the same language. Let your keyboard talk to your computer and then your computer talk to your drums so that you can play the drums with your keyboard! Send automation from your computer to a parameter on your synth to varry the sound over time, whatever.

The Catch? MIDI is outright ancient by technology standards, having come out in 1981. It's so damn old, that it's (mostly) a 7-bit standard. Now, ideally, a musican shouldn't have to know all this shit and the gear should stay out of the way. Unfortunately, we've been sticking with this standard for so damn long that basically everything abuses it in one way or another to the extent you sorta have to know how it works. So, 7-bit, what does that mean?

Well, it's talking about bits, so 1's and 0's. For each message in midi, you get 7 bit's of data. So, when you turn a knob it can range from 0000000 to 1111111, which, work out to be 0 to 127. This means each knob, even if it feels smooth to you, only has 127 distinct levels the software can recognize. This is fucking awful. But, wait, it get's worse. This applies to *almost everything in MIDI, so how hard you hit the keys and how finely you can set the volume with a physical slider. Clearly, this blows.

And, it so happens, everyone agrees. Because of that, there's a whole fustercluck of solutions. Some you might see include

* MIDI **N**on-**R**egistered **P**art **N**umber ([NPRN](https://en.wikipedia.org/wiki/NRPN)) is one way MIDI controllers can send higher resolution signals (14bit so, 0 to 16384) by putting two, 7-bit CC's values together such that one controls the **M**ost **S**ignificant **B**yte (MSB) and the other the **L**east **S**ignificant **B**yte (LSB)
* **O**pen **S**ound **C**ontrol (OSC) *isn't* MIDI, but rather a competing standard that's much higher resolution and can work over ip (wifi), but it's not universally supported like MIDI
* **M**ackie **C**ontrol **U**niversal (MCU) is a fustercluck of a non-standard devloped by Mackie, a particular hardware manufacture, for one of their products. Originally MCU was made for Logic but eventually the control 'standard' wound its way into other DAWs. It mostly provide a 'universal' mapping for common functions like mute, solo, track select, EQ and what not. It basically just sits on top MIDI.
* **M**idi **P**olyphonic **E**xpression (MPE) is probably the most convoluted of the workarounds, but it will require some more explanation, so I'll come back to this in a second.

"Alright", I hear you thinking, "so MIDI is a fucked up standard, what is it good for then?"

Well, it's pretty much still the only one you can sequence notes in your DAW, that all instruments interface with eachother and a computer, and often the only way you can control digital instruments and effects from hardware.

So, let's poke into some of the common MIDI message types, starting with the most obvious: Notes.

### Types of Midi Messages

#### Notes

MIDI notes range from 0 to 127, with the highest note, 127, being a G9 @ 12543.9hz and the lowest, note 0, being a C-1 at 8.176hz. Obviously this is more than the standard full 88-key piano.

Given human hearing starts at about 20hz, the lowest notes are inaudible except for harmonics assuming no octave shifting or other quirks. As such, these lowest notes are often repurposed for control messages, though even then a lot of sound sources will only respond to a limited range of these notes anyway.

While MIDI does have an [extension](https://en.wikipedia.org/wiki/MIDI_tuning_standard) for supporting alternate tunings, it's rarely directly supported. As microtonal and other non-12TET (12 True Equal Temperment) scales have become common, various tools exist to use MIDI pitch to force notes to a chose scale anyway.

General MIDI, one of various MIDI extensions (that often get ignored anyway) also defines a few specific instruments to belong to specific midi channels (rarely used unless listening to midi files directly with soundfonts) and a mapping for drums, which is used a bit more often, and is generally close to the normal mapping you'll see in tools like Ableton's Drum Rack. If you buy an electronic drum kit or use a drum machine, it's likely to at least try to respect this mapping.

{{< details "General MIDI Drum Map" >}}

{{< columns >}}

| KEY    | NOTE | SOUND              |
| ------ | ---- | ------------------ |
| **35** | B0   | Acoustic Bass Drum |
| **36** | C1   | Bass Drum 1        |
| **37** | C#1  | Side Stick         |
| **38** | D1   | Acoustic Snare     |
| **39** | Eb1  | Hand Clap          |
| **40** | E1   | Electric Snare     |
| **41** | F1   | Low Floor Tom      |
| **42** | F#1  | Closed Hi Hat      |
| **43** | G1   | High Floor Tom     |
| **44** | Ab1  | Pedal Hi-Hat       |
| **45** | A1   | Low Tom            |
| **46** | Bb1  | Open Hi-Hat        |
| **47** | B1   | Low-Mid Tom        |
| **48** | C2   | Hi Mid Tom         |
| **49** | C#2  | Crash Cymbal 1     |
| **50** | D2   | High Tom           |
| **51** | Eb2  | Ride Cymbal 1      |
| **52** | E2   | Chinese Cymbal     |
| **53** | F2   | Ride Bell          |
| **54** | F#2  | Tambourine         |
| **55** | G2   | Splash Cymbal      |
| **56** | Ab2  | Cowbell            |
| **57** | A2   | Crash Cymbal 2     |

<--->

| KEY    | NOTE | SOUND          |
| ------ | ---- | -------------- |
| **58** | Bb2  | Vibraslap      |
| **59** | B2   | Ride Cymbal 2  |
| **60** | C3   | Hi Bongo       |
| **61** | C#3  | Low Bongo      |
| **62** | D3   | Mute Hi Conga  |
| **63** | Eb3  | Open Hi Conga  |
| **64** | E3   | Low Conga      |
| **65** | F3   | High Timbale   |
| **66** | F#3  | Low Timbale    |
| **67** | G3   | High Agogo     |
| **68** | Ab3  | Low Agogo      |
| **69** | A3   | Cabasa         |
| **70** | Bb3  | Maracas        |
| **71** | B3   | Short Whistle  |
| **72** | C4   | Long Whistle   |
| **73** | C#4  | Short Guiro    |
| **74** | D4   | Long Guiro     |
| **75** | Eb4  | Claves         |
| **76** | E4   | Hi Wood Block  |
| **77** | F4   | Low Wood Block |
| **78** | F#4  | Mute Cuica     |
| **79** | G4   | Open Cuica     |
| **80** | Ab4  | Mute Triangle  |
| **81** | A4   | Open Triangle  |

{{< /columns >}}

{{< /details >}}

#### CC's

##### Sustain

##### Modulation

##### MIDI LFO/Envelopes

#### Velocity

#### Aftertouch

#### Pitchbend

#### Clock & Transport

#### Program Change

#### SysEX

#### MIDI 2.0

### Types of Hardware Controls

#### Keys, Buttons, and Switches

#### Potentiometres, Sliders, and Encoders

+Motorized, Wheels

#### LEDs and Feedback



### Interfacing

DIN, TRS-A, TRS-B, USB, USB host adapters, etc.

clock jitter



[TODO] [Building a MIDI Controller Using Arduino (YouTube, Switch & Lever)](https://www.youtube.com/watch?v=JZ5yPdoPooU)



Note, there's a pretty limited number of MPE capable instruments, thankfully there's stil a decent price range between them. This list is not exhaustive, but I think gives a good sampling:

{{< columns >}}

**Small:**

Artiphon Orba

Roli Lightpad Blocks

Haken Audio ContinuuMini

<--->

**Big:**

[Expressive e - Osmose](https://www.expressivee.com/2-osmose) ([Demo](https://www.youtube.com/watch?v=UjZ6SuWxBFg))

Roli Seaboard (Block, Rise)

LinnStrument

Haken Audio Continuum

{{< /columns >}}

## Audio Interfaces

[TODO, ADAT, preamps, headphone amps, phantom48, Hi-Z, Lo-Z]

> Weird side note:
>
> Some VOIP software (Discord, Zoom, etc.) may want you to use a Sample rate of 48Khz and a Buffer size of 192. No clue why.

## Headphones/speakers

[TODO studio headphones V regular]

[TODO openback v Closed]

[TODO Planar magnetic]

[TODO Quadraphonic, Atmos, 5.1, etc]

## Eurorack

[Modular Grid](https://www.modulargrid.net/) an online tool for dreaming about hardware setups (Eurorack, Guitar Pedals, and a few other modular formats)

## Cool Hardware

[Blokas Midihub](https://blokas.io/midihub/)

[Novation LaunchPad X](https://novationmusic.com/en/launch/launchpad-x)

- [launchpad.py](https://github.com/FMMT666/launchpad.py) - python library for the Novation Launchpad Line
- [r_cycle](https://github.com/Focusrite-Novation/r_cycle) for Pure Data Library *most Launchpads

[T1 Algorithmic Midi Sequencer](https://www.kickstarter.com/projects/torsoelectronics/t-1-expressive-algorithmic-midi-sequencing)

[Sixtyfour pixels MIDI controlled relay](https://six4pix.net/product/relayswitcher/)

[Sixtyfour pixels 'Noodlebox' sequencer](https://six4pix.net/product/noodlebox/)

[Sixtyfour pixels 'Hack-Du-Strum'](https://six4pix.net/hacks-du-strum/), a page feautring mods of their strummable controller, similar to an omnichord

[Sleepy Circuit's "Hypno" CV live visuals box](https://sleepycircuits.com/shop/hypno)



## Notes on Hardware **NOT** to buy

* The Teenage Engineering Pocket Operators are cool, fun, etc. But they're pretty fragile and have some issues. Generally, I don't think they're worth it. Here's Some alternatives (Yes, I know there's a huge price difference- remember, you get what you pay for.)
  * [Analogue Pocket](https://www.analogue.co/pocket/)
  * [DityWave M8](https://dirtywave.com)
  * or, if you're feeling spendy, the OP-1 and OP-Z are options. Each have their own quirks though, so be sure to do your research. Regardless, I really don't recomend the TE PO's
* The non-mini Launchkey Series from Novation. They keybeds are absolute shit. I had to [mod](https://www.thingiverse.com/thing:3831768) my Mk2 to make the pads work, and the mod wheel has issues too. It's just... not good.

## Notes on how your hardware will be more expensive than you think

[TODO] Balanced audio, group loop isolation, impedance matching, isolated power supplies, cables ... so many cables

## DAWless?

DAW-less just means not using a Digital Audio Workstation to make your music, usually though this means not using a typical computer at all. Here's a good example of a DAWless performance:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/cxnr_De0MZQ?list=PL5hHktP4TFmkSCfhPUWSXRGSUOZCivpy3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



[10 Things You NEED to know before Building a Dawless Synthesizer Setup (YouTube, BoBeats)](https://youtu.be/e6lVyAcZRPk)

