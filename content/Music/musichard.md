---
title: "Music Hardware"
slug: "Music Hardware"

---

<iframe width="100%" height="500" src="https://www.youtube.com/embed/a_90uFCrWWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Music Hardware

While you *could* make all of your music with just computer, you’ll probably want some tools that make your life as a musician easier and let you explore ideas faster. Like I said back in the {{< button relref="music/effects" color="music" >}}Audio Effects Chapter{{< /button >}}, in my experience, making music depends on a really quick brain to input device feedback loop. Being able to turn a physical knob and mash physical keys will often lead to better results if only because you’re able to try things both faster and by physically interacting with something that you may not have thought of otherwise. It’s why guitars, MPE keyboards, and Eurorack are so great: they all give you a crazy amount of control and expression that is *literally* at your finger tips. The brain to input interface there is just so much better.

So, while I don't think you should go *crazy* deep into hardware and spend your life savings, there's some things that just make sense to get, like a good keyboard MIDI controller, some knobs, and at least one realllly expressive instrument like a guitar or MPE controller. Something that really lets you *feel* what you're playing.

---

{{< columns >}}

First things first, I also want to go over the difference between Digital and Analog in music hardware:

<--->

<p class="dshift">Digital: 1010111010010010110100101110101</p><p class="ashift">Analog: ∿∿~∿~∿∿∿~∿∿~∿~∿∿∿~∿∿~∿</p>

<script>
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

A quick note before you read anything further: you can only hear an analog signal. At the end of the chain, everything needs to be analog, as ultimately sound waves exist not as the 1’s and 0’s of binary, but as waves of pressure in the air- which is an analog medium.

To start, let’s look at an all-analog signal path. Here, a guitar string is plucked, the signal is picked up by the guitar’s pickup (as the metal string causes a magnet to move, generating a weak electrical signal), the signal is amplified (twice), and then the amplified signal is used to move a speaker cone, which in turn moves the air, so you can hear it.

![](/music/allanalog.svg)

---

{{< hint gray >}}

Note, I’ve drawn a light gray cable along side all the analog signals. This is the ground cable. Audio circuits are no different from any other circuit, and require a full, well, circuit. A circuit is a full loop, with ground. Where the cables come out of the amplifier, I’ve drawn these two wires much more distinctly, with a red wire- meant to visualize the ‘live’ wire that carries the signal- and gray wire the ground. This is by convention. If you ever have to wire up an amplifier, you’ll probably see one red and one black wire, representing these in turn. In many cases (but definitely not always), things will still work if you get these backwards, but you’ll end up with audio that is out of phase, as your signal is quite literally flipped. In the case of a guitar amp with a single speaker, this probably won’t matter. But, if you have two speakers (left and right) and only flip one, this is very likely to make things sound awful.

{{< /hint >}}

Hopefully that made sense, now let's look at a digital setup. Keep in mind even the most digital of paths needs to end in analog so that there's something for you to hear.

Here, a digital keyboard is hooked up to a laptop, presumably running some sort of sound-generating software - Maybe a DAW or VCV Rack. Here I've shown the audio Interface (labeled DAC) as an external box hooked up over USB, but this could also just be internal to the computer. All computers or phones will have an internal audio interface, it's just that most musicians end up attaching their own that offer better features.

![](/music/digitalsound.svg)

Here, everything on the blue cables is digital, it's only 1's and 0's. The first cable is only carrying information about what note you're playing and knobs you're turning, while the second one (between the laptop and the the DAC) is carrying digital information that represents the audio, but it hasn't yet been turned into an analog signal. That's the job of the DAC. It takes those 1's and 0's and turns it back into an analog signal.

{{< hint warning >}}

Often you'll hear the terms Audio Interface, Sound Card, and DAC used interchangeably. They're not all the same thing, but generally it's the part that turns the digital signal into an analog one. If you're plugging a guitar or microphone into your computer, the terms Audio Interface and Sound Card still apply, but in that case you're using an ADC. I'll come back to this in a bit.

{{< /hint >}}

If you're confused about how digital 1's and 0's can represent an analog signal in the first place, refer back to samples in {{< button relref="music/sources" color="music" >}}Chapter 2 - Sound Sources{{< /button >}}. For more information on how Digital to Analog and Analog to Digital conversion works, check out [this video from xiph.org](https://xiph.org/video/vid2.shtml).

{{< columns >}}

Some devices may have almost everything in this chain internally. This is true of a lot of digital instruments, like the Elektron Digitakt pictured here:

The Digitakt is a drum machine that uses samples saved internally as .wav files. It's basically just a very specialized computer in a box.

<--->

![](/music/digitakt.webp)

{{< /columns >}}

Though the really confusing thing to beginners is when the device is digital, but has both analog input and outputs. Just like there's a DAC (**D**igital to **A**nalog **C**onverter) for analog output you'll often be working with ADCs or **A**nalog to **D**igital **C**onverters to take your analog input and use it on your computer (or internally, like in a digital guitar pedal)

For the most basic possible example, let's look at a bit-crusher and sample rate reducer pedal. These pedals basically just hook a DAC directly into an ADC, then let you purposely mess up the conversion.

{{< columns >}}

Bit crushing, as explained back in the effects chapter, is just purposefully reducing the range of values a sample of digital audio can be. So, while an 8-bit audio point can be any whole number up to {{< katex >}}2^8 = 256{{< /katex >}}, a lower-bit sample might only be able to be represented by {{< katex >}}2^6 = 64{{< /katex >}} possible values, which will really start to sound pretty distorted. Similarly, sample rate reduction distorts the audio by intentionally limiting the rate at which new digital samples of the input audio are acquired. As long as samples are gotten at a rate at least twice that of the highest frequency in the input audio, there will be no difference, but as this goes below that, the converter simply doesn't get enough data to reproduce the input signal.

<--->

This effect is inherently digital. It's really just purposely doing digital to analog conversion poorly. If we want it as a guitar pedal, that means the pedal has to first convert the analog signal to digital, then convert the digital signal back to analog.

![](/music/bitcrusher.svg)

{{< attribution >}}note, this isn't meant to be a real schematic. It's heavily simplified.{{< /attribution >}}

{{< /columns >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FNa3uyWfL_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hopefully that was enough to get you up to speed on the basics of analog vs digital. Unfortunately, while some gear is obvious (A normal acoustic guitar is analog, a MIDI controller is digital) some music gear really blurs the lines, or even twists them outright. The Behringer DeepMind line, for example, is a purely analog synth with digital control's and a big ol' screen. Meanwhile, the Modor NF-1 is a digital synth that looks and tries to emulate the sound and feel of analog equipment. Plus, there's a ton of synths now that have analog oscillators and filters, but then do DSP (Digital Signal Processing) based effects or the other way around- with digital oscillators and analog filters. What I'm trying to say is, it's complicated.

There are a lot of 'Analog Purists' out there, who will claim an analog oscillator just sounds better, or that it adds something extra to their sound. To some extent, they're not wrong. But, I think this is also largely because people are comparing often free digital sources and effects to analog ones and, as with most things in life, you often get what you pay for. I'd actually argue that in most cases, paid digital tools and hardware is a better value than the analog gear. <a class="ptr">(1)</a><a class="ptr">(2)</a><a class="ptr">(3)</a> What I'm trying to say is, in most cases, whether or not a tool is analog or digital shouldn't really factor into your choice of what to buy. Your choice should be determined by what sounds good, what is enjoyable to play, and if the device offers all the features you need and want. *In very few cases* will a device being analog be a 'feature' that matters.<a class="ptr">(4)</a> Instead, the feature that matters with analog gear is often the hands on feel that usually comes with a device being analog, like all the articulations that a player can get out of a guitar.<a class="ptr">(5)</a> At the same time, this isn't exclusive to analog instruments anymore, as MPE controllers (I'll get to them later) have made it possible to get a TON of expression out of a digital controller, arguably more than I can out of my guitar- so again, the guitar being *analog* isn't the feature that mattered. When buying gear, try to dig down and ask yourself *why* you want a tool - for how it sounds, how it feels to play, etc. - and ask yourself if there's competing products that meet the same needs, then you'll easily avoid the elitism that analog purists bring with them.<a class="ptr">(6)</a>

A few more notes:

I want to point out that there is a valid concern that your ADCs and DACs are of decent quality. Some people are crazy about this and want to spend thousands of dollars on brand name ADCs and DACs, but honestly I've found that it's more just a matter of 'is it good enough' is really just the bar to hit, as long as it's not causing a ludicrous amount of noise and can capture enough of the dynamic range (difference between playing softly and loud) of your instrument you're good to go. In my experience, USB powered devices tend to have the worst time with noise, as the power going in is so 'dirty' that the DAC/ADC ends up putting this noise into the signal. A lot of equipment will discuss this in regard to the **S**ignal to **N**oise **R**atio (SNR).

Some people get crazy about sample rate. For a *final recording* there is **absolutely no reason** to exceed 24bit/48khz audio. Even that is really overkill. On the other hand, *during recording* there can be rather significantly audible differences in oversampled (that is 80khz+) audio, as the virtual instruments have more headroom to work with to avoid a side effect of digital audio called aliasing. You can learn more about this in {{< best >}}[Samplerates: the higher the better, right?](https://www.youtube.com/watch?v=-jCwIsT0X8M) from FabFilter on YouTube. {{< /best >}}

If you hear someone raving about tube amps, you should know that -yes- they do have a pretty distinct sound, but it's not necessarilly *better*- here's a fun video from JHS Pedals showing this: [Solid State Amps Suck](https://youtu.be/x9TYCes1lTU). For a bit more technical detail see [Tube Amp vs Solid State – What's the Difference?](https://youtu.be/QoGiW2h68k4) from Sweetwater on YouTube. I do think this video might over-sell how good tube-amps can sound and honestly today I don't think there's a huge difference. That said, I do still have a tube amp because there's something that makes the little kid in me happy about seeing a glowing tube

<a href="https://commons.wikimedia.org/wiki/File:Solton_BV60_Bassamp.jpg#/media/File:Solton_BV60_Bassamp.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Solton_BV60_Bassamp.jpg" alt="Solton BV60 Bassamp.jpg"></a>

{{< attribution >}}

Picture by Christopher Schirner, <a href="https://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">CC BY-SA 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=53326983">Link</a>

{{< /attribution >}}

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

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sYaLBPUZnkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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