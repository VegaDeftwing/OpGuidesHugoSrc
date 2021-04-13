---
title: "Music Hardware"
slug: "Music Hardware"

---

# Music Hardware

While you *could* make all of your music without any extra gear but a computer, you'll probably want some tools that make your life as a musician easier and let you explore ideas faster. Like I said back in the audio effects section, in my experience, making music depends on a really quick brain to input device feedback loop. Being able to turn a physical knob and mash physical keys will often lead to better results if only because you’re able to try things faster and try things by physically interacting with something that you may not have thought of otherwise. It’s why guitars, MPE keyboards, and Eurorack are so great: they all give you a crazy amount of control and expression that is *literally* at your finger tips. The brain to input interface there is just so much better.

So, while I don't think you should go *crazy* deep into hardware and spend your life savings, there's some things that just make sense to get, like a good keyboard midi controller, some knobs, and at least one realllly expressive instrument like a guitar or MPE controller. Something that really lets you *feel* what you're playing.

---

{{< columns >}}

First things first, I also want to go over the difference between Digital and Analog in music hardware:

<--->

<p class="dshift">Digital: 1010111010010010110100101110101</p><p class="ashift">Analog: ∿∿~∿~∿∿∿~∿∿~∿~∿∿∿~∿∿~∿</p>

<script>
    var cur_color = -1,
    colors = [
        'red',
        'green',
        'blue',
        'yellow',
        'magenta',
        'pink'
    ];
    var myInterval = setInterval(function() {
    var da = document.querySelector("body > main > div > article > div:nth-child(5) > div:nth-child(2) > p.dshift").textContent;
    var daa = da.replace(/10/g, "01").replace(/100/g, "010").replace(/000000/g, "111111").replace(/11111111111111111111111111/g, "10100111111001111111000110").replace(/110/g, "010");
    document.querySelector("body > main > div > article > div:nth-child(5) > div:nth-child(2) > p.dshift").textContent = daa;
    var db = document.querySelector("body > main > div > article > div:nth-child(5) > div:nth-child(2) > p.ashift").textContent;
    var dbb = db.replace(/∿~/g, "~∿").replace(/∿~~/g, "~∿~").replace(/~~~~~~/g, "∿∿∿∿∿∿").replace(/∿∿∿∿∿∿∿∿∿∿/g, "∿~∿~∿∿∿~∿∿").replace(/∿∿~/g, "~∿~");
    document.querySelector("body > main > div > article > div:nth-child(5) > div:nth-child(2) > p.ashift").textContent = dbb;
    }, 400);
    //Let it be known that I have absolutely no idea what I'm doing (I don't know js) and that I only wanted a quick and dity solution. It works.
</script>

{{< /columns >}}

What you should keep in mind as you read everything going forward is that you can only *hear* an analog signal. At the end of the chain, everything needs to be analog, as ultimately sound waves exist not as the 1's and 0's of binary, but as waves of pressure in the air- which is an analog medium.

To start, lets look at an all analog signal path. Here, a guitar string is plucked, the signal is picked up by the guitar's pickup (as the metal string causes a magnet to move, generating a weak electrical signal), the signal is amplified (twice), then the amplifed signal used to move a speaker cone, moving the air so you can hear it.

![](/allanalog.svg)

---

{{< hint gray >}}

Note, I've drawn a light gray cable along side all the analog signals. This is the ground cable. Audio circuits are no different from any other circuit, and require a full, well, circuit. This means a full loop, with ground. Where the cables come out of the amplifier I've drawn these two wires much more distinctly, with a red wire meant to mean the 'live' wire that carries the signal and gray wire the ground. This is by convention. If you ever have to wire up an amplifer, you'll probably see one red and one black wire, representing these in turn. In many cases (but definitely not always) things will still work if you get these backwards, but you'll end up with audio that is out of phase, as your signal is quite literally flipped. In the case of a guitar amp with a single speaker, this probably won't matter. But, if you have two speakers (left and right) and only flip one, this is very likely to make things sound awful.

{{< /hint >}}

Hopefully that made sense, now let's look at a digital setup. Keep in mind even the most digital of paths needs to end in analog so that there's something for you to hear.

Here, a digital keyboard is hooked up to a laptop, presumably running some sort of sound-generating software - Maybe a DAW or VCV Rack. Here I've shown the audio Interface (labeled DAC) as an external box hooked up over USB, but this could also just be internal to the computer. All computers or phones will have an internal audio interface, it's just that most musicans end up attaching their own that offer better features.

![](/digitalsound.svg)

Here, everything on the blue cables is digital, it's only 1's and 0's. The first cable is only carrying information about what note you're playing and knobs you're turning, while the second one (between the laptop and the the DAC) is carying digital information that represents the audio, but it hasn't yet been turned into an analog signal. That's the job of the DAC. It takes those 1's and 0's and turns it back into an analog signal.

{{< hint warning >}}

Often you'll hear the terms Audio Interface, Sound Card, and DAC used interchangeably. They're not all the same thing, but generally it's the part that turns the digital signal into an analog one. If you're plugging a guitar or microphone into your computer, the terms Audio Interface and Sound Card still apply, but in that case you're using an ADC. I'll come back to this in a bit.

{{< /hint >}}

If youre confused about how digital 1's and 0's can represent an analog signal in the first place, refer back to samples in [Chapter 2 - Sound Sources]({{< relref "Music/m2-sources" >}}). For more information on how Digital to Analog and Analog to Digital conversion works, check out [this video from xiph.org](https://xiph.org/video/vid2.shtml).

{{< columns >}}

Some devices may have almost everything in this chain internally. This is true of a lot of digital insturments, like the Elektron Digitakt pictured here:

The Digitakt is a drum machine that uses samples saved internally as .wav files. It's basically just a very specialized computer in a box.

<--->

![](/digitakt.jpg)

{{< /columns >}}

Though the really confusing thing to beginers is when the device is digital, but has both analog input and outputs. Just like there's a DAC (**D**igital to **A**nalog **C**onverter) for analog output you'll often be working with ADCs or **A**nalog to **D**igital **C**onverters to take your analog input and use it on your computer (or internally, like in a digital guitar pedal)

For the most basic possible example, let's look at a bit-crusher and sample rate reducer pedal. These pedals basically just hook a DAC directly into an ADC, then let you purposelly mess up the conversion.

{{< columns >}}

Bit crushing, as explained back in the effects chapter, is just purposefully reducing the range of values a sample of digital audio can be. So, while an 8-bit audio point can be any whole number up to {{< katex >}}2^8 = 256{{< /katex >}}, a lower-bit sample might only be able to be represented by {{< katex >}}2^6 = 64{{< /katex >}} possible values, which will really start to sound pretty distorted. Similarly, sample rate reduction distorts the audio by intentionally limiting the rate at which new digital samples of the input audio are aquired. As long as samples are gotten at a rate at least twice that of the highest frequency in the input audio, there will be no difference, but as this goes below that, the convertor simply doesn't get enough data to reproduce the input signal.

<--->

This effect is *inheritly* digital. It's really just purposely doing digital to analog conversion poorly. If we want it as a guitar pedal, that means the pedal has to first convert the analog signal to digital, then convert the digital signal back to analog.

![](/bitcrusher.svg)

{{< attribution >}}note, this isn't meant to be a real schematic. It's heavily simplified.{{< /attribution >}}

{{< /columns >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FNa3uyWfL_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hopefully that was enough to get you up to speed on the basics of analog vs digital. Unfortunately, while some gear is obvious (A normal acoustic guitar is analog, a MIDI controller is digital) some music gear really blurs the lines, or even twists them outright. The Behringer DeepMind line, for example, is a purely analog synth with digital control's and a big ol' screen. Meanwhile, the Modor NF-1 is a digital synth that looks and tries to emulate the sound and feel of analog equipment. Plus, there's a ton of synths now that have analog oscillators and filters, but then do DSP (Digital Signal Processing) based effects or the other way around- with digital oscillators and analog filters. What I'm trying to say is, it's complicated.

There are a lot of 'Analog Purists' out there, who will claim an analog oscillator just sounds better, or that it adds something extra to their sound. To some extent, they're not wrong. But, I think this is also largely because people are comparing often free digital sources and effects to analog ones and, as with most things in life, you often get what you pay for. I'd actually argue that in most cases, paid digital tools and hardware is a better value than the analog gear. <a class="ptr">(1)</a><a class="ptr">(2)</a><a class="ptr">(3)</a> What I'm trying to say is, in most cases, weather or not a tool is analog or digital shouldn't really factor into your choice of what to buy. Your choice should be determined by what sounds good, what is enjoyable to play, and if the device offers all the features you need and want. *In very few cases* will a device being analog be a 'feature' that matters.<a class="ptr">(4)</a> Instead, the feature that matters with analog gear is often the hands on feel that usually comes with a device being analog, like all the articulations that a player can get out of a guitar.<a class="ptr">(5)</a> At the same time, this isn't exclusive to analog instruments anymore, as MPE controllers (I'll get to them later) have made it possible to get a TON of expression out of a digital controller, arguably more than I can out of my guitar- so again, the guitar being *analog* isn't the feature that mattered. When buying gear, try to dig down and ask yourself *why* you want a tool - for how it sounds, how it feels to play, etc. - and ask yourself if there's competing products that meet the same needs, then you'll easily avoid the elitism that analog purists bring with them.<a class="ptr">(6)</a>

A few more notes:

I want to point out that there is a valid concern that your ADCs and DACs are of decent quality. Some people are crazy about this and want to spend thousands of dollars on brand name ADCs and DACs, but honestly I've found that it's more just a matter of 'is it good enough' is really just the bar to hit, as long as it's not causing a ludicrious amount of noise and can capture enough of the dynamic range (difference between playing softly and loud) of your instrument you're good to go. In my experiance, USB powered devices tend to have the worst time with noise, as the power going in is so 'dirty' that the DAC/ADC ends up putting this noise into the signal. A lot of equipment will discuss this in regard to the **S**ignal to **N**oise **R**atio (SNR).

Some people get crazy about sample rate. For a *final recording* there is **absolutely no reason** to exceed 24bit/48khz audio. Even that is really overkill. On the other hand, *during recording* there can be rather significantly audible differences in oversampled (that is 80khz+) audio, as the virtual instruments have more headroom to work with to avoid a side effect of digital audio called aliasing. You can learn more about this in {{< best >}}[Samplerates: the higher the better, right?](https://www.youtube.com/watch?v=-jCwIsT0X8M) from FabFilter on YouTube. {{< /best >}}

Finally, I want to briefly mention that as you add more equipment, you're very likely to run into an issue with [ground loops](https://en.wikipedia.org/wiki/Ground_loop_(electricity)). If you plug in a piece of gear and start hearing a hum or significantly more noise, this is likely the problem. Check out [6 simple and cheap ways to fix hum, buzz and ground loop noise](https://www.youtube.com/watch?v=q2c6fKOu-vo) from Loopop on YouTube.

---

Hopefully that all made sense and you feel a bit less lost about both the differences between analog and digital, and why it is probably one of the most divisive topics in music hardware. Let's move on barreling though all the technical crap so we can get to the fun stuff later on. Let's start with something you're already familiar with, but dive in a little deeper: A normal ol' audio jack.

## TRS? 3.5mm? ¼ inch?

{{< columns >}}

<iframe src="https://merveilles.town/@zens/105891797104825087/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://merveilles.town/embed.js" async="async"></script>

<!-- So, let's start simple, and look at some MIDI controllers, why you might want one, and what features you might want to look for. -->

<--->

Your normal every-day headphones that you'd plug into your phone (or did. Thanks Apple (¬､¬)) use a 3.5mm **T**ip **R**ing **S**leave cable. If your headphones have an in-line mic, they're probably TRRS. The difference, as this meme shows, is how many 'rings' are on the connector. Normally, for headphones, the **T**ip would carry the left channel, the **R**ing the **r**ight and the **S**leave the common ground for each. If there's an inline mic, the connections *usually* go Left, Right, Ground, Microphone on the TRRS pins respectively. 

{{< hint warning >}}

Don't assume all devices will support the TRRS headsets with mics. Some devices will have a dedicated microphone in line, and others will just omit it outright.

{{< /hint >}}

{{< /columns >}}

But, because nothing can ever be simple, that's not always the case. Enter, balanced audio.

While uncommon for 3.5mm cables like most headphones, on a lot of pro audio gear that uses the much beefier ¼ inch jacks will use a TRS cable to carry a mono signal.  

[TODO] Balanced, XLR, 

## MIDI

### What is MIDI?

**M**usical **I**nstrument **D**igital **I**nterface, or **MIDI** is what it sounds like, the primary way to get data between devices digitally. Want to tell a hardware synth to play a sequence you arranged on your computer? MIDI. Want to play notes into your computer using a keyboard? MIDI. Want to sequence drums, with varying 'velocity' on each hit? MIDI.

### Sounds Great?

For the most part, yeah. Everything works together and you can make all your hardware speak the same language. Let your keyboard talk to your computer and then your computer talk to your drums so that you can play the drums with your keyboard! Send automation from your computer to a parameter on your synth to vary the sound over time, whatever.

The Catch? MIDI is outright ancient by technology standards, having come out in 1981. It's so damn old, that it's (mostly) a 7-bit standard. Now, ideally, a musician shouldn't have to know all this shit and the gear should stay out of the way. Unfortunately, we've been sticking with this standard for so damn long that basically everything abuses it in one way or another to the extent you sorta have to know how it works. So, 7-bit, what does that mean?

Well, it's talking about bits, so 1's and 0's. For each message in midi, you get 7 bit's of data. So, when you turn a knob it can range from 0000000 to 1111111, which, works out to be 0 to 127. This means each knob, even if it feels smooth to you, only has 127 distinct levels whatever it's talking to can receive. This is *really* bad. But, wait, it gets worse. This applies to *almost everything in MIDI, so how hard you hit the keys and how finely you can set the volume with a physical slider. Clearly, this blows.

And, it so happens, everyone agrees. Because of that, there's a whole fustercluck of solutions. Some you might see include

* MIDI **N**on-**R**egistered **P**art **N**umber ([NPRN](https://en.wikipedia.org/wiki/NRPN)) is one way MIDI controllers can send higher resolution signals (14bit so, 0 to 16384) by putting two, 7-bit CC's values together such that one controls the **M**ost **S**ignificant **B**yte (MSB) and the other the **L**east **S**ignificant **B**yte (LSB)
* **O**pen **S**ound **C**ontrol (OSC) *isn't* MIDI, but rather a competing standard that's much higher resolution and can work over ip (wifi), but it's not universally supported like MIDI
* **M**ackie **C**ontrol **U**niversal (MCU) is a fustercluck of a non-standard developed by Mackie, a particular hardware manufacture, for one of their products. Originally MCU was made for Logic but eventually the control 'standard' wound its way into other DAWs. It mostly provide a 'universal' mapping for common functions like mute, solo, track select, EQ and what not. It basically just sits on top MIDI.
* **M**idi **P**olyphonic **E**xpression (MPE) is probably the most convoluted of the workarounds, but it will require some more explanation, so I'll come back to this in a second.

"Alright", I hear you thinking, "so MIDI is a fucked up standard, what is it good for then?"

Well, it's pretty much still the only one you can sequence notes in your DAW, that all instruments interface with each other and a computer, and often the only way you can control digital instruments and effects from hardware.

So, let's poke into some of the common MIDI message types, starting with the most obvious: Notes.

### Types of Midi Messages

#### Notes

MIDI notes range from 0 to 127, with the highest note, 127, being a G9 @ 12543.9hz and the lowest, note 0, being a C-1 at 8.176hz. Obviously this is more than the standard full 88-key piano.

Given human hearing starts at about 20hz, the lowest notes are inaudible except for harmonics assuming no octave shifting or other quirks. As such, these lowest notes are often repurposed for control messages, though even then a lot of sound sources will only respond to a limited range of these notes anyway.

While MIDI does have an [extension](https://en.wikipedia.org/wiki/MIDI_tuning_standard) for supporting alternate tunings, it's rarely directly supported. As microtonal and other non-12TET (12 True Equal Temperament) scales have become common, various tools exist to use MIDI pitch to force notes to a chose scale anyway.

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

<ol hidden id="footnotes">
    <li>Plus, digital tools won't suffer as much from the issues with tuning, latency compensation, the need to worry about a noise floor, etc. Digital aliasing might be a problem, but even that can usually be worked around.</li>
    <li>To point out my own hypocrisy now, I'm really into Eurorack, which is an inheritly analog, and stupidly expensive, medium. Making music isn't all logic. If you think a certain tool will just work well for you, you shouldn't deny its value just because something else may provide the same function. Form matters. Your enjoyment matters. To me, there was inherit value in the joy of working with real patch cables and the physical knobs, even if VCV Rack is the 'better' tool and doesn't cost a full months rent per module.</li>
    <li>Okay, So, yes. There is some concern about everything in (1) with digital stuff. Latency compensation with digital tools is still a thing. Your midi controler will still have a delay. A digital <i>hardware</i> synth will still send an analog audio signal out, which will have some latency. MIDI clock may not get distributed around your system perfectly, resulting in issues as well. I'm meaning in general. Like, if you want to record a guitar in and hear any DSP effects you have on the chain in your DAW in real time, you'll have to compensate for that full round trip time, which can easily set you off beat a solid amount when recording in. Plus, <i>most</ii> analog instrument are <i>not</i> balanced audio, so there will be some noise getting in compared to the complete lack of noise in a software source/effect or the very minimal noise of that from a balanced audio source. If you have no idea what this means, that's fine, I'm about to go over it. This is just to prevent some really early 'um, acktually'.</br></br> All that is to say, analog gear is generally a bigger PITA to deal with than digital gear, and often the claims for why to go analog are total shit; however, some of the issues with analog gear are actually just issues with any hardware music tool.
    </li>
	<li>Distortions and anything with feedback is the most obvious counter point, and I'll concede on that one. Digital distortion, drive, and feedback based effects are almost universally worse sounding and eat up a ton of digital resources on your computer.</li>
<li>String bending, plucking, strumming up or down, palm muting, how hard you pluck, whammy bars, harmonics (a type of playing), slapping the strings, slapping the body, tuning live... The guitar is an extraordinarly hands on instrument, it doesn't make just one sound. </li>
<li>If you pick the analog gear because it does offer something better, looks cooler, or it's cheaper for some reason there's obviously no shame in that. Your decesion was still educated. That's what matters.</li>
</ol>