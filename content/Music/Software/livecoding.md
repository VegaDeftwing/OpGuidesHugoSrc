# Programmable Music Tools

<script>    document.getElementById("softMenu").open = true;</script>

<!-- TODO: Add https://github.com/ldrolez/clyphx-live10 -->

Before getting into this list, I also want to point out that there's an *endless* number of programmable music sequencing tools which can be found built into VST plugins, larger audio software, and even video games. I'm particularly fond of the huge number of interesting sequencers for VCV Rack, such as [Quad Algorithmic Rhythm Generator](https://library.vcvrack.com/FrozenWasteland/QuadAlgorithmicRhythm), [Entropia](https://library.vcvrack.com/Geodesics/Entropia), [Fate](https://library.vcvrack.com/Geodesics/Fate), [Marbles](https://library.vcvrack.com/AudibleInstruments/Marbles), and [Orca's Heart](https://library.vcvrack.com/scanner-darkly-collection-one/SDOrcasHeart) - just to name a few.

This list absolutely can not have everything. Still, I've tried to highlight some of the more novel ideas.

It's also worth mentioning, there are very interesting hardware tools such as the [monome norns](https://monome.org/norns/), and [Toroso T-1](https://www.youtube.com/watch?v=j3Ho3sKDJFg)

Finally, if you're into VJ work, you may want to check out {{< button relref="Design/gen" color="design" >}}The big list of generative art tools{{< /button >}} in the Design section of this website. If you're looking for hardware for this role, you may want to check out the [hypno](https://sleepycircuits.com/hypno) by Sleepy Circuits or the Critter & Guitari [Eyesy](https://www.critterandguitari.com/eyesy). 

---

{{< columns2 >}}

[SonicPi](https://sonic-pi.net/tutorial.html)

<--->

> Sonic Pi is a code-based music creation and performance tool.

<--->

<iframe width="100%" src="https://www.youtube.com/embed/cydH_JAgSfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

{{< best >}}[ORCΑ](https://github.com/hundredrabbits/Orca){{< /best >}}

<--->

[Learn Orca](https://metasyn.github.io/learn-orca/) <br>Extra Tools for ORCA: </li><li> [Cassetter for ORCA](https://person0b.itch.io/cassetter) </li><li>[Aioi - UDP to complex OSC for ORCA](https://github.com/MAKIO135/aioi)</li> <li> [Pilot - 16 voice synth for ORCA](https://github.com/hundredrabbits/Pilot)</li>

<--->

<iframe width="100%" src="https://www.youtube.com/embed/DHYL9hojUTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Noton](https://git.sr.ht/~rabbits/noton)

<--->

A minimal logic gates playground, written in ANSI C. Made by the same developers as ORCΑ

<--->

<iframe width="100%" src="https://www.youtube.com/embed/R653xGU333g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Chuck](https://github.com/ccrma/chuck)

<--->

> Chuck is a programming language for real-time sound synthesis and music creation. It is open-source and freely available on MacOS X, Windows, and Linux. Chuck presents a unique time-based, a concurrent programming model that's precise and expressive (we call this strongly-timed), dynamic control rates, and the ability to add and modify code on-the-fly. In addition, ChucK supports MIDI, OpenSoundControl, HID device, and multi-channel audio.

<--->

<iframe width="100%" src="https://www.youtube.com/embed/xRaD_1UK0bQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Mutateful](https://github.com/carrierdown/mutate4l) **Requires Ableton Live**

<--->

> enables live coding in Ableton Live's session view. Set up transformations that trigger whenever a source clip is changed, including arpeggiation, shuffling, and ratcheting/retriggering.

<--->

![mutateful](https://github.com/carrierdown/mutateful/raw/master/assets/mu4l-walkthrough.gif)

{{< /columns2 >}}

{{< columns2 >}}

[Pure-Data,](https://puredata.info) [Purr Data (a better fork),](https://agraef.github.io/purr-data/) and [Max](https://cycling74.com/products/max) (the one everyone uses in Ableton)

<--->

Max is *much* friendly and more useful than Pure Data, though it's also not FOSS.

Both are visual programming environments which are rather low level (much lower level than VCV Rack, for example) and so are less useful in a live context; however, they're extraordinarily powerful for making your own instruments which you can play live.

The reason I've grouped them together is that both Max and PD share the original author, [Miller Puckette](https://en.wikipedia.org/wiki/Miller_Puckette); however, it's very clear that PD has more or less stagnated while Max has grown

<--->

![MaxDemo](http://cycling74-web-assets.s3.amazonaws.com/images/max8/what-is-max/max-intro-presentation-on-off.gif)

{{< attribution >}}This gif was ripped directly off of https://cycling74.com/products/max{{< /attribution >}}

{{< /columns2 >}}

{{< columns2 >}}

[Zerobrane Studio](https://studio.zerobrane.com) and [Moonlet](https://github.com/elihugarret/Moonlet)

<--->

> ZeroBrane Studio is a **lightweight Lua IDE** with code completion, syntax highlighting, live coding, code analyzer, and debugging support for Lua 5.1

> **Moonlet**: Lua live coding. It only works on Linux and Windows.

<--->

<iframe width="100%" src="https://www.youtube.com/embed/vkTMK1a1_tY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[TidalCycles](https://tidalcycles.org/index.php/Welcome)

<--->

> Live coding music with Algorithmic patterns
>
> Free/open-source software
>
> > Tidal Cycles (or 'Tidal') for short is free/open source software written in Haskell. Tidal is using SuperCollider, another open-source software, for synthesis and I/O.
> 
> Pattern everything
> 
> > Tidal Cycles allows you to make patterns with code. It includes a language for describing flexible (e.g. polyphonic, polyrhythmic, generative) sequences of sounds, notes, parameters, and all kind of information.

<--->

<iframe width="100%" src="https://www.youtube.com/embed/ca3J1cztnrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Krill](https://github.com/Mdashdotdashn/krill)

<--->

Krill is a livecoding environment inspired from [TidalCycles](https://tidalcycles.org/)

<--->

I can't find a demo! If you make one, let me know and I'll put it here!

{{< /columns2 >}}

{{< columns2 >}}

[Mosaic](https://mosaic.d3cod3.org)

<--->

> Mosaic, an openFrameworks based Visual Patching Creative-Coding Platform

<--->

<iframe title="vimeo-player" src="https://player.vimeo.com/video/464702127" width="100%" height="" frameborder="0" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Overtone - Live Code](http://overtone.github.io)

<--->

> **Collaborative Programmable Music**
>
> Overtone is an open source audio environment designed to explore new musical ideas from synthesis and sampling to instrument building, live-coding and collaborative jamming. We combine the powerful [SuperCollider](http://supercollider.github.io/) audio engine, with [Clojure](http://clojure.org/), a state of-the-art lisp, to create an intoxicating interactive sonic experience.
>
> > **VJ Ready:**
> >
> > Synchronize your visuals and noise with ease. Overtone features seamless integration with both [Quil](http://github.com/quil/quil), a Clojure front-end to [Processing](http://processing.org/) and [ShaderTone](https://github.com/overtone/shadertone), a Clojure version of [ShaderToy](https://www.shadertoy.com/) an OpenGL GLSL shader programming environment.

<--->

<iframe width="100%" src="https://www.youtube.com/embed/qUU7WeUiR5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Tweakable](https://tweakable.org)

<--->

> An alternative and fun way to make interactive music in your browser.

<--->

![tweakable](/music/tweakable.webp)

{{< /columns2 >}}

{{< columns2 >}}

[FoxDot](https://foxdot.org)

<--->

>  **FoxDot** - a Python-based language and editor for making music

<--->

<iframe width="100%" src="https://www.youtube.com/embed/CXrkq7u69vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Siren (GitHub)](https://github.com/cannc4/Siren/)

<--->

> *Siren*, is a tracker interface that embodies abstractions where programming is realized as the medium for pattern sequencing in a modular fashion. It is based on a hierarchical structure that consists of scenes and channels. Separate channels have independent patterns; a complete song consists of a master list of repeated patterns.
>
> Supported programming languages :
>
> - SuperCollider
> - Haskell/TidalCycles

<--->

![](https://github.com/cannc4/Siren/raw/master/src/assets/readme_images/main_ss.jpg?raw=true)

{{< /columns2 >}}

{{< columns2 >}}

[Extempore Lang](https://extemporelang.github.io)

<--->

> "Extempore is a programming language and runtime environment designed to support **cyberphysical programming**"

<--->

<iframe width="100%" src="https://www.youtube.com/embed/yY1FSsUV-8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns2 >}}

{{< columns2 >}}

[Bespoke](https://github.com/awwbees/BespokeSynth)

<--->

Software Modular Synth

<--->

![](https://raw.githubusercontent.com/BespokeSynth/BespokeSynth/main/screenshot-1.png)

{{< /columns2 >}}

{{< columns2 >}}

[Music Pattern Generator](https://github.com/hisschemoller/music-pattern-generator)

<--->

Music Pattern Generator is an app to create musical rhythms. It sends MIDI data, so it won’t make any sounds by itself. For that you need to connect it to MIDI soft- or hardware that can handle MIDI data to produce sound.

<--->

![](https://github.com/hisschemoller/music-pattern-generator/raw/develop/assets/img/mpg-2_1-animation.gif)

{{< /columns2 >}}

{{< columns2 >}}

[Nestup](https://nestup.cutelab.nyc)

<--->

> [Nestup](https://github.com/cutelabnyc/nested-tuplets) is an experimental markup language for musical rhythms. It's specifically designed to break away from a fixed musical grid.
>
> The name is a contraction of [nested tuplets](https://en.wikipedia.org/wiki/Tuplet#Nested_tuplets), which are hard to program on a piano roll but easy to notate with Nestup.

<--->

![nestup](/music/nestup.webp)

{{< /columns2 >}}

{{< columns2 >}}

[Audulus](http://audulus.com)

<--->

> Audulus is a modular music processing app with unequaled ease of use.

<--->![audulus](/music/audulus.webp)



{{< /columns2 >}}
