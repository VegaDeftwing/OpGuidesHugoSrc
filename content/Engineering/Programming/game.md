# Chapter 20 - Game Programming & Design

<!-- I've been using Unity lately, for working in VR chat. It pretty much sucks, but I can also see how it's easy in some ways? I don't think it's the best to focus on, but I lack the experiance to say "If you want to make something original, use X" -->

https://www.gameuidatabase.com/index.php

https://www.riotgames.com/en/urf-academy/curriculum-guide

[COMP4300 - Game Programming (David Churchill, YouTube)](https://www.youtube.com/watch?v=LpEdZbUdDe4&list=PL_xRyXins848jkwC9Coy7B4N5XTOnQZzz)

## Engines & Frameworks

### Both 2d and 3d

[Godot](https://godotengine.org/features)

[Luxe](https://luxeengine.com)

[Heaps](https://heaps.io/index.html)

*fine. I'll mention Unity and Unreal, but, like, I hate that the two make up such a huge chunk of the market*

[Unreal Engine](https://www.unrealengine.com/en-US/)

[Unity](https://unity.com)

### 2d

[LEd engine](https://deepnight.itch.io/led) - "LEd is a modern and open-source 2D level editor, specifically designed for indie devs"

[OGMO Editor](https://ogmoeditor.itch.io/editor) - "OGMO Editor is a free, open source 2D level editor built by indie game developers for indie game developers."

[LÖVE](https://love2d.org) - "Hi there! LÖVE is an *awesome* framework you can use to make 2D games in Lua. It's free, open-source, and works on Windows, Mac OS X, Linux, Android and iOS."

[Pyxel](https://github.com/kitao/pyxel) - **Pyxel** is a retro game engine for Python.

### 3d

[pwnfps engine](https://fanzyflani.itch.io/pwnfps-engine) - "An incomplete game engine I made for 7DFPS 2014 using C and a bit of Lua. It's a realtime raytracer that happens to be pretty shiny."

[noeuclid by CNLohr](https://github.com/cnlohr/noeuclid) - A Non-euclidean GPU Raytraced Engine

[euclider](https://github.com/Limeth/euclider) - A higher-dimensional "non-euclidean" ray tracing prototype written in Rust.

[Bevy](https://bevyengine.org/news/bevy-0-3/) - "A refreshingly simple data-driven game engine built in Rust
Free and Open Source Forever!"

[A Minecraft clone in hyperbolic space](https://www.youtube.com/watch?v=K7BwHjs0Il0)

{{< hint info >}}

'Non Euclidean' is a super mathy term and I'm really into it, basically it just means that space doesn't quite work as you expect. The shortest distance between two points doesn't have to be a line, portals connecting spaces, walking in circles takes you new places, etc. [Here's a decent blog post about some](https://zenorogue.medium.com/non-euclidean-geometry-and-games-fb46989320d4).

{{< /hint >}}

There's also been some neat progress in the relm of voxel engines:

{{< columns >}}

<iframe width="100%" height=200 src="https://www.youtube.com/embed/8ptH79R53c0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

<iframe width="100%" height="500" src="https://www.youtube.com/embed/i7vq-HY10hI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}



{{< hint warning >}}

Heads up, not all 3d systems use the same coordinate systems. It's a bit of a pain. Here's a good chart for that ([source - @FreyaHolmer on Twitter](https://twitter.com/FreyaHolmer/status/1325556229410861056/photo/1))

{{< /hint >}}

![CoOrd Systems](/eng/coordinatesystems.webp)



### Physics Engines

https://github.com/erincatto/box2d

## Netcode

https://yal.cc/preparing-your-game-for-deterministic-netcode/


## Interesting ideas

### Procedural Animation:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Did you like it?<br><br>Another creature made using only Procedural Animation<br>with a focus on 3D Navigation. We call it the Tetrad.<br><br>Big Stuff Coming Soon👀👀<br><br>🧬Follow us here for more🧬: <a href="https://twitter.com/SynthSelection?ref_src=twsrc%5Etfw">@SynthSelection</a><a href="https://twitter.com/hashtag/madewithunity?src=hash&amp;ref_src=twsrc%5Etfw">#madewithunity</a> <a href="https://twitter.com/hashtag/unity?src=hash&amp;ref_src=twsrc%5Etfw">#unity</a> <a href="https://twitter.com/hashtag/indiegamedev?src=hash&amp;ref_src=twsrc%5Etfw">#indiegamedev</a> <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://twitter.com/hashtag/indiedev?src=hash&amp;ref_src=twsrc%5Etfw">#indiedev</a> <a href="https://twitter.com/hashtag/SyntheticSelection?src=hash&amp;ref_src=twsrc%5Etfw">#SyntheticSelection</a> <a href="https://t.co/FatzMuyyc6">pic.twitter.com/FatzMuyyc6</a></p>&mdash; Makan Gilani (@Makan_Gilani) <a href="https://twitter.com/Makan_Gilani/status/1321495500575641602?ref_src=twsrc%5Etfw">October 28, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### RougeLikes

[What "Rougelike" Meant](https://zenorogue.medium.com/what-roguelike-meant-fb8b0e1601a)

### Tons of Simulation

[Notia](https://noitagame.com) - Rougelite where every pixel is simulated

[Cogmind](https://www.gridsagegames.com/cogmind/) - Ascii art game with a similarly extreme amount of environment destructibility

A very long thread on ... stairs? Yeah. Look up advice on DND level design if you need general level design or architecture design n advice. The same twitter (Tommy Norberg, @the_Norberg) has **many** other good posts

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/leveldesign?src=hash&amp;ref_src=twsrc%5Etfw">#leveldesign</a> tip of the day! STAIRS 🪜<br>A Long Thread about stairs! Wohoooooo!<br><br>1/12 <a href="https://t.co/Z3TcWwOSaH">pic.twitter.com/Z3TcWwOSaH</a></p>&mdash; Tommy Norberg (@the_Norberg) <a href="https://twitter.com/the_Norberg/status/1359516288087973888?ref_src=twsrc%5Etfw">February 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Game engines for non-games

https://github.com/SebLague/Slime-Simulation

