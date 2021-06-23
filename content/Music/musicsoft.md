---
title: "Music Software"
slug: "Music Software"

---

# Music Software

{{< tip >}}

Some tools on this page are not-free. As such, I've tried to list prices as best I can. Music software **usually** goes on sale pretty significantly around Black Friday or Christmas, so when I can, I've tried to list 'street' prices. Regardless, I'm not affiliated with any of these projects in any way and I don't make any money from these links- so don't complain to me if the prices are wrong ╮(─▽─)╭

{{< /tip >}}

**NOTE: this list is far from exhaustive. Instead, I've tried to list the main ones and some that I think are particularly cool.**

## Digital Audio Workstations+

A **D**igital **A**udio **W**orkstations is software that allows you to record and edit audio, host and play digital instruments, arrange the parts in a time line, and mix the audio together. The most common DAWs you'll see are Ableton Live (Often called just "Ableton" or "Live") and FL Studio, but there are plenty of other options as well, many of which are listed below.

The definition of a DAW is a bit fuzzy, as tools like VCV Rack and Audacity- both of which we've seen previously- have features that make them very DAW like and can be used to make full tracks (assuming you have hardware instruments to record into Audacity)

Before you look at this list I want to stress that every DAW has its issues.

[TODO] why are none of these good

Digital Audio Workstations or 'DAWs' come in many flavors, so let's look at the differences between the above in depth [TODO]

Trackers, vs non liner, vs modular, etc.

## Session View Based:

{{< tabs "Session View Daws" >}}

{{< tab "Ableton Live" >}}

### Ableton Live

**Ableton Live** isn't very stable (lacks plugin sandboxing), has a mediocre piano roll, makes modulation a bit of a pain. Its main feature is its popularity, as there is a ton of educational content, great hardware support, and a fair amount of Ableton specific plugins. As the name implies, it also works pretty well for live recording, and has the best audio stretching and quantization, meaning even if you play slightly out of time it's easy to fix.

lil' aside: Ableton makes organizing VSTs a tad awkward, so you should know it will follow shortcuts in the folder you set as your VST plugin directory.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Popular
- Great hardware support
- Access to Ableton only plugins - Including Max4Live
- Great audio quantization

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Expensive, paid updates
* Piano Roll sorta sucks
* Unstable (No plugin sandboxing)
* M4L devices needed to do many basic things
* Modulation is often awkward
* A lot of the UI is small

{{< /columns3 >}}

[How To Ableton Like a Pro (YouTube)](https://www.youtube.com/watch?v=W8CMgThLpHc)

{{< /tab >}}

{{< tab "Bitwig" >}}

### Bitwig

**Bitwig** is basically Ableton Live but with some added features, and it's more stable. Bitwig also has 'The Grid'- basically a little built in modular synth system. It's not like VCV, as it's a bit lower level but it can still be used for [Generative Music](https://www.youtube.com/watch?v=mu5A7QQbuho&feature=youtu.be&ab_channel=Sparvn%C3%A4tter) or [doing complex routing, like fading between effects](https://www.youtube.com/watch?v=bwi8rVXp-Q0&ab_channel=PolarityMusic). It also has really easy to use modulation, basically letting you drop an LFO, envelope, etc. onto any parameter of a VST or built in device.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- More or less the same as Ableton for the basics
- TONS of modulation options
  - lil' modular synth built in
- Still good - albeit not Ableton good- hardware support
- Great audio quantization

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Expensive, paid updates
* Piano Roll sorta sucks- doesn't even have scale highlighting
  * MPE works beautifully though
* Not as many built in devices as Ableton
* Better multi monitor support than Ableton
* Not as popular as Ableton
  * Less support
  * Can't use Ableton specific devices

{{< /columns3 >}}

{{< /tab >}}

{{< /tabs >}}

## Arrangement View Based:

{{< tabs "Arrangement View Based" >}}

{{< tab "FL Studio" >}}

### FL Studio

**Fruity Loops Studio** is a great DAW. If you're more into hand arranging than recording your MIDI controller for writing songs: FL Studio is *perfect.* The piano roll is so damn good that it will make you hate the piano roll in everything else. Unfortunately, hardware controller support isn't as good as Ableton, the UI is a bit cluttered, and audio quantization just isn't there... well? sorta. There is a paid plugin for pitch correction that kicks the ass out of everything else because it's built into the already awesome piano roll.

If we're being honest, FL is where most EDM producers get their start with a pirated copy. I'm not condoning the piracy, but I'm certainly not about to judge if you want to try before you buy. It's a damn nice DAW, and if I didn't have hardware that works particularly well with Ableton I'd probably use it.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- One time purchase, lifetime free updates
- FUCKING AMAZING PIANO ROLL
- On more expensive versions espically, the built in devices are awesome
- Has a good mobile app, for working on the go

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* UI can get sorta messy
* Complex routing is a bit annoying
* A tad CPU heavy
* Audio recording is awkward as fuck
* Doesn't play well with a lot of hardware
  * MIDI controller support is meh
  * lacks the CV/Gate abilities of Bitwig and Ableton

{{< /columns3 >}}

{{< /tab >}}

{{< tab "Reaper" >}}

### Reaper

**Reaper** is incredibly feature full and probably *technically* the best DAW but it's user interface is pretty bad and requires a lot of menu diving, to the point where in my opinion it's totally unusable. It does offer the ability to view what you've put into your piano roll as actual sheet music and It's hugely customizable, with multiple user-facing programming options- ReaScript and JSFX. If you're already a highly technical user and don't mind getting your hands dirty with code, need a sheet music view, or want something with incredibly low CPU overhead, Reaper is probably your best choice.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Cheap ($60 at time of writing)
  - Free trial that doesn't end... but like, don't be that guy.
- Highly customizable
  - you can script literally everything.
- Stable as hell
- Low CPU usage
- Supposedly sounds better?
- Actual Notation editing
- MIDI (w/ MPE) and OSC support

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Sub menus with sub menus
* Option overload
* Almost total lack of built in instruments and effects
* Kinda shit piano roll
* lack of bulit in support for common MIDI controllers
* Kinda Ugly, even with themes

{{< /columns3 >}}

{{< /tab >}}

{{< tab "Garage Band" >}}

### Garage Band

**Garage Band** [TODO]

{{< /tab >}}

{{< tab "ProTools" >}}

### ProTools

**ProTools** [TODO]

{{< /tab >}}

{{< tab "Luna" >}}

### LUNA

**LUNA** [TODO]

{{< /tab >}}

{{< /tabs >}}

## Modular Based:

{{< tabs "Modular Based" >}}

{{< tab "VCV" >}}

### VCV

**VCV** isn't really DAW, so lacks good ways to do automation and complex sequencing, at least without work arounds. For generative music, it's still probably your best bet. That said, you can absolutely make awesome tracks in it, though they really need to be performed and recorded live. This means you may need to do multiple takes if you accidently mess something up while playing.

For good performances, you'll probably want a MIDI controller with a lot of knobs, which can be epensive or large. Ideally this could be done via banks of knobs that can be changed in hardware (like the Behringer BCR2000 and X-Touch Mini or Faderfox EC4) but this has also been reported to not work totally smoothly.

VCV may also lead you down the path of Eurorack or a hybrid Eurorack and VCV setup, and that is stupid epensive.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Free and open source-ish
- A crazy amount of free modules
- Cross platform (Windows, Linux, Mac)
- Can do things a real hardware rack can't

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Paid modules needed to host VSTs
* Less ideal for structured songs
  * unless using an external sequencer
* Eats CPU, a lot of cool modules un-optimized
* It's not really a DAW?
* Still no support to host VCV as a VST in a 'real' DAW
  * workarounds exist, but they're often awkward
* Not 100% stable

{{< /columns3 >}}

{{< /tab >}}

{{< tab "Reason" >}}

### Reason

**Reason** [TODO]

{{< /tab >}}

{{< tab "Voltage Modular" >}}

{{< /tab >}}

{{< tab "Reaktor" >}}

{{< /tab >}}

{{< /tabs >}}

## Trackers:

{{< tabs "Trackers" >}}

{{< tab "Renoise" >}}

### Renoise

**Renoise** is a neat combination of a modern DAW and old school trackers. This means there is no classic piano roll, but instead the notes are entered as text into a vertical display. Usually raw samples of audio are used as instruments, and this lets you do neat things like specify a sound to be played backwards, be rapidly rolled, panned per note, etc. Generally, trackers are associated with a few specific genres- most notably Chiptune and Jungle

<iframe width="100%" height="500" src="https://www.youtube.com/embed/OIxFjXE_D0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /tab >}}

{{< tab "OpenMPT" >}}

### OpenMPT

{{< /tab >}}

{{< tab "Deflemask" >}}

### Deflemask

**Deflemask** [TODO]

{{< /tab >}}

{{< tab "Sunvox" >}}

### Sunvox

**Sunvox** [TODO]

available for free on desktop, paid on moblie 

{{< /tab >}}

{{< /tabs >}}

## Almost DAWs

{{< tabs "Almost-Daws" >}}

{{< tab "Audacity" >}}

### Audacity

**Audacity**, like VCV, isn't a DAW. It's really just an audio editor. It's free and open source, and while the UI isn't great, you'll be hard pressed to find anything better for doing quick edits or recording in a few clips. Full songs *could* be made in audacity, but it's not made for that.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Free and Open Source
- Opens very fast
- Runs on a potato
- Great for quick edits

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Not really a DAW
* No VST support
* Basic as hell editing, only enveloping is audio level
* Kinda ugly, crappy UI

{{< /columns3 >}}

{{< columns >}}

Audacity, despite being FOSS, did recently change owners and they should be putting a lot more work into it. There has been some missteps with the community since this change, but overall it should bring good things in the future →

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/RMWNvwLiXIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

{{< /tab >}}

{{< tab "Oscistudio" >}}

### Oscistudio

**Oscistudio** [TODO]

{{< /tab >}}

{{< /tabs >}}

## Live Coding Tools

| Name & Link                                                  | Description                                                  | Screenshot / Demo                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SonicPi](https://sonic-pi.net/tutorial)                     |                                                              |                                                              |
| {{< best >}}[ORCΑ](https://github.com/hundredrabbits/Orca){{< /best >}} | [Learn Orca](https://metasyn.github.io/learn-orca/) <br>Extra Tools for ORCA: </li><li> [Cassetter for ORCA](https://person0b.itch.io/cassetter) </li><li>[Aioi - UDP to complex OSC for ORCA](https://github.com/MAKIO135/aioi)</li> <li> [Pilot - 16 voice synth for ORCA](https://github.com/hundredrabbits/Pilot)</li> |                                                              |
| [Noton](https://git.sr.ht/~rabbits/noton)                    | A minimal logic gates playground, written in ANSI C. Made by the same developers as ORCΑ |                                                              |
| [Chuck](https://github.com/ccrma/chuck)                      | "Chuck is a programming language for real-time sound synthesis and music creation. It is open-source and freely available on MacOS X, Windows, and Linux. Chuck presents a unique time-based, a concurrent programming model that's precise and expressive (we call this strongly-timed), dynamic control rates, and the ability to add and modify code on-the-fly. In addition, ChucK supports MIDI, OpenSoundControl, HID device, and multi-channel audio." |                                                              |
| [Mutateful](https://github.com/carrierdown/mutate4l) **Requires Ableton Live** | "enables live coding in Ableton Live's session view. Set up transformations that trigger whenever a source clip is changed, including arpeggiation, shuffling, and ratcheting/retriggering." |                                                              |
| [Pure-Data](http://write.flossmanuals.net/pure-data/introduction2/) and [Purr Data (a better fork)](https://agraef.github.io/purr-data/) |                                                              |                                                              |
| [Zerobrane Studio](https://studio.zerobrane.com) and [Moonlet](https://github.com/elihugarret/Moonlet) |                                                              |                                                              |
| [Krill](https://github.com/Mdashdotdashn/krill)              | Krill is a livecoding environment inspired from [TidalCycles](https://tidalcycles.org/). |                                                              |
| [TidalCycles](https://tidalcycles.org/index.php/Welcome)     |                                                              |                                                              |
| [Mosaic](https://mosaic.d3cod3.org)                          |                                                              | <iframe title="vimeo-player" src="https://player.vimeo.com/video/464702127" width="640" height="360" frameborder="0" allowfullscreen></iframe> |
| [Overtone - Live Code](http://overtone.github.io)            |                                                              |                                                              |
| [Tweakable](https://tweakable.org)                           |                                                              |                                                              |
| [Siren (Github)](https://github.com/cannc4/Siren/)           | Tracker meets livecode                                       |                                                              |
| [FoxDot](https://foxdot.org)                                 | Livecoding with Python                                       |                                                              |
| [Extempore Lang](https://extemporelang.github.io)            | "Extempore is a programming language and runtime environment designed to support **cyberphysical programming**" |                                                              |
| [Bespoke](https://github.com/awwbees/BespokeSynth)           | Software modular synth                                       | ![](https://github.com/awwbees/BespokeSynth/raw/master/screenshot-1.png) |
| [Music Pattern Generator](https://github.com/hisschemoller/music-pattern-generator) | Music Pattern Generator is an app to create musical rhythms. It sends MIDI data, so it won’t make any sounds by itself. For that you need to connect it to MIDI soft- or hardware that can handle MIDI data to produce sound. | ![](https://github.com/hisschemoller/music-pattern-generator/raw/develop/assets/img/mpg-2_1-animation.gif) |

### VSTs and other Plugins

[TODO] Daws usually have built in instruments and effets [I Made A Song Using Only Ableton Stock Plugins (YouTube, Composerily)](https://www.youtube.com/watch?v=Xgm1bGh-eyM)

{{< hint warning >}}

This is probably where the most bias of any of the lists on this page will show as I obviously can't list every possible VST. Instead, I'll list those that I think are particularly good both in terms of value and function.

{{< /hint >}}

VSTs are a really weird standard, for one, unlike most standards that are ratified by a collection of involved interests, VST is the child of a single company - Steinberg.

Generally, there are a few things you need to know:

1. Some VSTs are distributed as VST2 others as VST3, obviously one is newer than the other. Unfortunately, not all DAWs support VST3 and worse, new applications by new devs have to be VST3 due to Stienberg no longer issuing new licenses. Generally, VST2 will be downloaded as `.dll` files while vst3 will be `.vst3`
   * VST3 does support a few extra features, and tend to perform better
   * Some VST3's can do neat stuff so that if multiple instances are loaded they can communicate together, this is useful for some mastering plugins.
2. Some VSTs are 64 bit, some are 32 bit. Not all modern DAWS support running 32bit VSTs
3. VSTs can do 1 (or a mix of) three things
   * act as a virtual instrument (guitar, synth, etc.)
   * act as a virtual effect (delay, reverb, etc.)
   * act as a midi effect (arpeggio, quantizer, etc.)

There are some other, not-VST plugin formats you may encounter, namely [LV2](https://en.wikipedia.org/wiki/LV2) and Apple's [Audio Units](https://en.wikipedia.org/wiki/Audio_Units), as well as the various plugins for particular DAWs, like Reason's 'Rack Extensions' or Ableton Live's M4L (Max For Live) Devices.

While VST3 does have a linux SDK, most plugins aren't released for Linux. You may still be able to make it work using a bridging program like [Yabridge](https://github.com/robbert-vdh/yabridge).

You may also see VSTi or VSTfx, these aren't anything new, 'i' or 'fx' just denote if the plugin is an instrument or effects plugin.

#### Free (But might have better paid version)

##### Audio Sources

| Name & Link                                                  | Description                                                  | Screenshot |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| [Ample Percussion Cloudrum](https://www.pluginboutique.com/product/1-Instruments/64-Virtual-Instrument/4194-Ample-Percussion-Cloudrum) | Steel Tongue Drum                                            |            |
| [Alter Ego](https://www.plogue.com/products/alter-ego.html)  | Virtual Singer, Text to Speech                               |            |
| [Dexed](https://asb2m10.github.io/dexed/)                    | Yamaha DX-7 Emulation                                        |            |
| [Surge Synthesizer](https://surge-synthesizer.github.io)     | FOSS hybrid synth                                            |            |
| [Daichi Synth 1](http://daichilab.com)                       | Emulation of Nord Lead 2, but better. You'll probably want the preset pack |            |
| [Distocore Bazz::Murda](https://distocore.online)            | Bass Drum maker, looks like it fell right out of 2004.       |            |
| [Kairatune](https://futucraft.com/kairatune/)                |                                                              |            |
| [Lord Of The Springs](http://www.taron.de/lots/)             | Physically modeled synthesis with a bunch of Springs         |            |
| [Helm](https://tytel.org/helm/)                              |                                                              |            |
| {{< best >}}[Vital](https://vital.audio){{< /best >}}        | Spectral warping wavetable synth (Free and Paid tiers)       |            |

##### Effects

| Name & Link |      |      |
| ----------- | ---- | ---- |
|             |      |      |
|             |      |      |
|             |      |      |
|             |      |      |
|             |      |      |
|             |      |      |
|             |      |      |


##### Other

| Name & Link                                                  | Description                                                  | Screenshot |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| {{< best >}}[Signalizer VST](https://www.jthorborg.com/index.html?ipage=signalizer){{< /best >}} | An amazing VST Oscilliscope, Vectorscope, and general analysis tool |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |

#### Paid (But might have limited free version)

{{< hint warning >}}

No prices are listed below because they can fluctuate so much. VSTs and other music software tends to go on sale a lot, and usually quite good sales at that. **You probably shouldn't pay full price!**

{{< /hint >}}

##### Audio Sources

| Name & Link                                                  | Description                                                  | Screenshot |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| [ABL3](https://www.audiorealism.se/audiorealism-bass-line-3.html) | Emulation of the classic TB303. You can buy a Behringer hardware clone for not much more, but this is easier to use imho, and Behringer is a horrible company so please don't support them. |            |
| [Various from SugarBytes](https://sugar-bytes.de/products)   | I really like <li>Consequence - Chord Grovebox</li><li>Factory - Mod Matrix Polysynth</li><li>Guitarist - Guitar Emulation, easy to program</li><li>Drum Computer - Drum Synth</li><li>Obscurium - I don't even know, but it's cool.</li><li>Cyclop - Neat Synth, good for bass</li><li>Egoist - Weird audio stem re-groover?</li><li>Thesys - MIDI Sequencer </li> |            |
| [Various from Artuira](https://www.arturia.com/products) (Go to Software Instruments) | <li>CS-80 V - CS-80 Emulation</li><li>DX7 V - DX-7 Emulation, better UI than the free '[Dexed](https://asb2m10.github.io/dexed/)'</li><li>SEM V - Oberheim Sem Emulation</li><li>Modular V - Moog Modular Emulation (Could just use [VCV](https://vcvrack.com))</li><li>Pigments - Artuira's take on a modern digital VST synth it's pretty awesome</li> |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |
|                                                              |                                                              |            |

##### Effects

| Name & Link | Description | Screenshot |
| ----------- | ----------- | ---------- |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |


##### Other

| Name & Link | Description | Screenshot |
| ----------- | ----------- | ---------- |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |
|             |             |            |

##### Kontakt Libraries



### Music Apps (Android)

| Name & Link | Description | Screenshot/Demo |
| ----------- | ----------- | --------------- |
| FractalBits |             |                 |
| Sunvox      |             |                 |
| Grainstorm  |             |                 |
| WaveEditor  |             |                 |
| Kaossilator |             |                 |
| Hexpress    |             |                 |
| SynprezFM   |             |                 |
| NodeBeat    |             |                 |
| OSCSurface  |             |                 |
| Spectroid   |             |                 |

### Websites

[Google Drum Machine (Like XO)](https://experiments.withgoogle.com/ai/drum-machine/view/)

## Tools dependent on other hardware or software

{{< details "Max4Live Devices" >}}

**These devices only work inside of Ableton Live using Max For Live**

[lil' pup](https://llllllll.co/t/smartphones-lil-pup/35749) - "Tools for generative music and live performance"

[Survey](https://patches.zone/max-for-live/survey) - "Survey acts as a kind of macro control for your project’s most important parameters. Save collections of settings across multiple devices and tracks for simple recall or to creatively morph between them." **$20**

[Scenery](https://patches.zone/max-for-live/scenery) - Convient ambience tool **$10**

[Cartographer](https://patches.zone/max-for-live/cartographer) - "When the *Follow* feature is engaged, the Loop Brace will always follow the set’s playhead, meaning you’re ready to loop whatever you’re listening to at any given moment without breaking your flow." **$5**

[Swatches](https://patches.zone/max-for-live/swatches) - Easily recolor everything in Ableton Live

[Clyphx old, free version](https://github.com/ldrolez/clyphx-live10) & [Clyphx Pro](https://isotonikstudios.com/product/clyphx-pro/) - Scripting Language for live, seriously recomend this one. Paid version is **$43.33**, not sure it supports the latest live or is getting worked on?

{{< best >}}[Magenta Studio](https://www.ableton.com/en/blog/magenta-studio-free-ai-tools-ableton-live/) - AI based MIDI generator for live. Honestly spits out some really good progressions. Can do drums, extent what you've writen for a melody, and a lot more. Tons of fun.{{< /best >}}

[Various tools from Zuzuki Kentaro](https://gumroad.com/szk_1992?sort=page_layout) - these include some great complex complex modulation tools that are free, along with paid tools ranging from granular synths and reverbs.

{{< best >}}[Nestup](https://gumroad.com/l/nestup) - "[...] approaches rhythm in a completely new way. It embeds [Nestup](https://nestup.cutelab.nyc/)—a powerful language for expressing complex rhythms—directly into Live."{{< /best >}}

[Szk! Devices](https://gumroad.com/szkdevices?recommended_by=search&sort=page_layout) - A bunch of crazy devices, including fractal and chaos tools. Some real crazy stuff here

[Ctrl-Z's Talk To Machines](https://gumroad.com/ctrlz?recommended_by=search) - weird ASCII→Binary→MIDI conversion as well as some DNA inspired stuff

[4phgp by Ferenc Vincze](https://gumroad.com/prepetuum?recommended_by=search#KHZsH) - a free 'Four Playhead Granular Player'

{{< /details >}}

{{< details "Monme Norns Devices" >}}

</br>

{{< tip >}}

I previously maintained a 'best of' list for Norns scripts, but the community has now made a much better resource https://norns.community

{{< /tip >}}

{{< details "JSFX and Scripts for Reaper DAW" >}}

https://github.com/JoepVanlier/JSFX

{{< /details >}}

{{< details "Patches & Info for Empress Zoia" >}}

https://sensai7.github.io/ZOIACheatsheet/

https://patchstorage.com/platform/zoia/

{{< /details >}}

**These 'plugins' only work on Monome's Norns hardware**

[Segments Audio Looper](https://llllllll.co/t/segments-audio-looper-for-norns/32937)

[oooooo - 6x digital tape loops](https://llllllll.co/t/oooooo/35828) (demo below)

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CEeMRPDhCt_/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CEeMRPDhCt_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CEeMRPDhCt_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by infinitedigits (@infinitedigits)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-08-29T11:35:46+00:00">Aug 29, 2020 at 4:35am PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

[euclidigons - euclidian sequencer but not like that™](https://llllllll.co/t/euclidigons/36666)

{{< /details >}}

# Audio backends

[TODO]

## Windows

### ASIO

### Direct Sound

### WSAPI

## Linux

{{< hint gray>}}

Seriously check out [Making Sense of The Linux Audio Stack on Venam's Blog](https://venam.nixers.net/blog/unix/2021/02/07/audio-stack.html). It's a rather painfully long read, but if you're trying to do Linux audio it's probably less painful than trying to figure it all out by stumbling though it.

{{< /hint >}}

### ALSA

### Pulse Audio

### Jack

{{< hint warning >}}

A few programs you wouldn't expect to run directly though jack, one of the more annoying is Telegram. To fix Telegram at least, just use `alsoft-config` and go to Backends->General, then right click Disabled backends and add JACK.

{{< /hint >}}

### Pipewire

# Really weird stuff that doesn't fit elsewhere

https://github.com/oakes/ansiwave