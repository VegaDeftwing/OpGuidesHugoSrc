---
title: "Video"
slug: "Video"

---

# Video & Streaming

[TODO, basically the entire page]

## Cameras

If you're like most people, the best camera you own is probably you're phone camera.

## Lighting

{{< hint info >}}

I found hanging up some of those string light LED edison bulbs (like you'd see at a wedding) on the ceiling works well as an alternative to a softbox. It's so many point lights that it adds up to a similar effect- albeit with the downside that you can't move them around.

{{< /hint >}}

## Recording

## Streaming

{{< hint info>}}

If you're following along with the rest of OpGuides and have joined me in using Arch Linux *and* you happen to be using an AMD GPU, you'll need to tweak some settings in OBS

Settings→Output→Streaming→set 'Encoder' to 'FFMPEG VAAPI', then to make that work and not just throw errors, you'll need the `libva` and `libva-mesa-driver`. You'll probably want Settings→Output→Recording set to 'Standard', the encoder to be 'use Stream Encoder' and keep the format as mkv.

These settings aren't necessarily the best for quality, but they should prevent eating your CPU from being overloaded

{{< /hint >}}

## Visualization Software/Tools

| Name & Link                                                  | Description                                                  | Screenshot/Demo                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [music_visualizer (Github)](https://github.com/bradleybauer/music_visualizer) | Shader viewer / music visualizer for Windows and Linux       | Too many variations to easily show, look at the github repo. |
| [Soundshader (Github)](https://github.com/soundshader/soundshader.github.io) | Uses fancy 'AutoCorrelation' - info on the github page       | https://soundshader.github.io                                |
| [Metagroove (Itch.io)](https://marumari.itch.io/metagroove)  |                                                              |                                                              |
| [Signalizer VST](https://www.jthorborg.com/index.html?ipage=signalizer) | Listed above in Free VSTs, but it's so good I'm listing it here again. An amazing VST Oscilliscope, Vectorscope, and general analysis tool, looks very good too. Has full screen modes. |                                                              |

Note that most of the fancy music animations you see on YouTube are *probably* made in Adobe After Effects, with the exception of some that are done in programs like TouchDesigner or other node-based programming environments. You can read more about these in [Design Chapter 6 - Generative Tools]({{< relref "Design/d6-gen" >}})

Some people also use hardware such as the [Sleepy Circuits 'Hypno'](https://sleepycircuits.com/hypno) or [Critter & Guitari 'Eyesy'](https://www.critterandguitari.com/eyesy) - though both of these platforms are really just running a Raspberry Pi (a lil' computer) under the hood.

On very rare occasion you may also see some outright analog video synthesis, but this is generally very, very expensive. Just search [YouTube for 'Analog Video Synthesizer'](https://www.youtube.com/results?search_query=analog+video+synthesizer).

I also recomend making your visuals in weirder ways. Here are some videos with visuals I really like:

* [Max Cooper - Aleph 2 (Official Video by Martin Krzywinski)](https://www.youtube.com/watch?v=tNYfqklRehM)



## Other people talking about their setups

<iframe width="100%" height="500" src="https://www.youtube.com/embed/HwY3R_VE6so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[EposVox](https://www.youtube.com/c/EposVox/videos) is a great YouTube channel for learning about streaming stuff