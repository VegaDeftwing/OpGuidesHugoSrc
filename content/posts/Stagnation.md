---
title: "Stagnation is solved by Absurdity"
slug: "absurdstagnation"
author: "Vega Deftwing"
date: 2022-04-18
tags: technical
draft: true
---

There's a sort of glass half full or half empty question that goes through my head a lot - Have we invented everything "major". That is, is there a *next big thing* after the smart phone, microwave ovens, and the electric car? On the one hand, there's the obvious answer:

{{< speech furby >}}

Well no shit there's more to come! You didn't even mention VR, or Bitcoin, or [voice speeds up to untillegible chattering, presumably a listing of new technologies]

{{< /speech >}}

And, I mean, yeah? I guess. But while love VR chat and hate cryptocurrency as much as the next guy, I don't see either actually penetrating daily life with ubiquity that improves our core existence. There's a piece of me, the part some would call a  {{< button relref="posts/natives" color="gradient-border2" >}} Digital Native {{< /button >}} that looks with jealousy back on the technology that existed before I was born and how quickly it matured. Now things seem to have hit a sort of wall of this-is-now-a-solved-problem, like, does each release of Microsoft Word really add anything anybody gives a shit about? No. It's a **solved problem**. If anything, much of what's being made now is just worse, with always-online DRM, micro-transactions, etc. But that's not what this post is about.

And, sure, to placate the glass half-full minded, I'll admit there's some damn cool tech, honestly recent that's actually improved things meaningfully. GaN advancements making for smaller chargers, the commodification of LED lighting, the dramatic improvements in ML, etc.

But I want *more*. I want something that, like the internet or smart phone, defines a break in history. For that, I think we need to do absurd things, and make doing absurd things easier.

## Doing Absurd Things

I recently watched [Harder Drive: Hard drives we didn't want or need](https://www.youtube.com/watch?v=JcJSW7Rprio) by Tom7, and, to spoil one of the punch lines, he ends up storing the ROM for Tetris in the Tetris blocks of 8640 NES emulators running Tetris. This is absolutely absurd. But it's also one of the most impressive, technologically interesting things I've seen done in a while.

Some other absurd things? How about a [game engine that renders everything as very small voxels](https://www.youtube.com/watch?v=8ptH79R53c0), [a game taking place in hyperbolic space](https://www.youtube.com/watch?v=VYfWfrk5P7w), [Real time physically modeled acoustic simulations](https://youtu.be/t952yS8tcg8?t=156), [an interactive model of the human vocal tract](https://dood.al/pinktrombone/), [Listening to the Mandelbrot set](https://www.youtube.com/watch?v=GiAj9WW1OfQ), [a map of all the outputs from a Double Pendulum](https://observablehq.com/@rreusser/the-double-pendulum-fractal?collection=@rreusser/writeups), [a 2D GPU accelerated Alien life simulation](https://github.com/chrxh/alien) ... I could go on.

All of these things at the very least boarder on the absurd. Voxels? Aren't those just a dead end that happened before polygons took over for rendering? Non-euclidean games? Won't that be to confusing? Modeling acoustics in real time? Isn't that uselessly computationally expensive? Modeling the vocal tract? Why not just use machine learning? Listening to the Mandelbrot set, a map of the double pendulum, and simulating alien life? What purpose could any of those serve?

Yet, these things are all things that have massively inspired me recently, and I think that the only way forward is to continue looking for the impractical, doing things that seem absurd, and seeing what insights we can glean from them.

Unfortunately, I fear that even with all of these cool things being done and the ever loosening of limitations on doing even the impractical with computers that we're loosing a motivating force behind innovation and doing cool, absurd things: limitations. The [demoscene](https://en.wikipedia.org/wiki/Demoscene) is dead, and has been that way as long as I've been alive. Why? Because you almost have to go out of your way to not run in to artificially imposed limitations, at least any that can't be solved by just throwing more money at computer hardware.

This leaves us in a weird position, as engineers historically have chased optimization and solving a problem with elegance as the way of pushing things forward, it seems to now be necessary to say "We have the CPU cycles to spare, let's get absurd." I *want* to *want*. I want you to make software that my high end gaming computer struggles to or even simply can not run. Be the next piece of software that replaces the "Can it run Crysis?" meme. If we want to optimize it after the fact we can, but I want to throw new ideas at everything.

Why have our game worlds be polygons when we could have everything be destructible voxels?

Why have our game worlds take place in traditional 3D space?

Why apply a reverb and some basic effects when we can model the acoustics in real time?

Why have pre-recorded character speech when we can synthesize it on the fly, giving them actual lungs and a vocal tract?

Why limit audio creation tools to simple oscillators and familiar sounds of instruments when we can listen to fractals and simulations of pendula, use polyhythms, and microtunings.

Why have basic pools of water in our virtual worlds when they could be teaming with alien life?

Imagine a VR world, where everything is simulated and destructible. Where the life is evolving with genetic algorithms. Where some space isn't euclidean, like a scene from Inception or Dr. Strange. Imagine meeting your friends there, and one of them pulls out a strange looking orb filled with that fractals that change colors depending on what direction you look at it. Then, with an ultrasonic haptic feedback system that requires no gloves and a thin and light, view filling VR headset they're able to comfortably feel around this orb and it's internal fractals to play from it music unlike anything you've heard. Meanwhile, the far from human vocal tract simulation of the life that has evolved though genetic algorithms in our virtual world provides a responsive melody. The sounds of it all bounce off of the non-euclidean space to create a reverb that is other worldly.

The programming skill required and hardware to acomplish this is, currently, not practical. But, that's my point-: we need to be doing impractical things now, so we can have goals to reach.

Good science fiction has always had it's hits and misses. We don't have flying cars, but surveliance capitalism sure hit like a brick. Let's pick the absurd science fiction reality we want to create and go for it. Let's put all those SIGGRAPH research papers to use.

**However,** to do absurd things and make inspirational projects you <u>absolutely **do not** need to be on the bleeding edge</u>, have research funding, or be doing anything overly difficult. More than anything you just need an idea, and be willing to try it even if it will probably fail.

## Make doing absurd things easier

[TODO] - research papers need to have demo code, open source, integratabel into existing systems. If you're going to do it, make people want to use it. Make open source cool by dumping these things into Blender, GoDot, etc. Commodoize

[TODO] - YouTube demos, share your work. Write good docs.

[TODO] - ARCAN

## Don't let Ideas die

[TODO] - revive old methods. Nixes, GaN, NuTubes, PlasmaDrive

## Integrate!

One way I think the open source community has been working less than ideally for a while now is in failing to library-ize literally everything. I don't like the idea of microservices, but I do like the idea of everything being written in way that it's easy to take existing, open work and drop it into a larger system. Obviously this touches on my above points about sharing work and writing good documentation, but what I'd really like to see is more projects made in a way that make cool new features able to be transplanted for the things they were made for into systems the authors didn't envision. To some extent, this means using good software engineering practices ... something that is generally expensive and timing consuming, hence it not always being done. It's also sometimes a matter of competing standards- do you support Linux, Windows, Mac? If it's something in a 3D enigne do you use Unity, Unreal, or something else? It's not practical to support everything, yet competition is good.

On the flip side, the benefits of having a standard that things hook in to speak for themselves. As my favorite point of refrence, consider modular synthesizers

[TODO] allude to modular system's flexability because of Merge, ES-3/6, VCV, pedals, MIDI, etc.

Now imagine if all of those amazing game engine demos, and even software at large supported this. In Linux, we have the pipe (`|`) but imagine the pipe on steroids, able to pass around video, audio, files, connection, etc in a way where all your applications could act as one cohesive system. Assuming enough compute horsepower, you could have your text editor feed into your video editor to syncronize your video and your script, highlighting discrepencies. You could have your video editor's time line be the same as the one used by the audio software, changes to the sound propagating from one to the other. Have the video's color tempature effect a filter, etc. This sounds like a standards ([relevant xkcd](https://xkcd.com/927/)) nightmare because, well, it is - but if we want meaningful improvment, I think this is where it's to be found.
