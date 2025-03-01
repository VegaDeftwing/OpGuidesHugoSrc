---
title: "Effects"
slug: "Effects"

---

# Audio Effects

<script>
    document.getElementById("effectMenu").open = true;
</script>
{{< tip >}}This chapter is broken up into subsections, check the menu and it should have expanded!{{< /tip >}}

# Please Read This, for real

### Automation Lanes Are Your Friend

A lot of audio effects boil down to automating some simple parameter. Sometimes you may not actually need a dedicated effect and can instead get by with using [Automation Lanes (once upon a synth)](https://www.youtube.com/watch?v=WmgXmb2V6zE) in your Digital Audio Workstation (DAW)

### Talk To Your Doctor About Gear Acquisition Syndrome 

{{< columns >}}

Don't get too deep into gear envy. Effects are awesome and it's tempting to either want to collect them and hoard them like a happy dragon on a pile of gold or feel like you can't make music without that one perfect effect. Unless you're falling down the rabbit hole of a DAWless setup and have a very limited amount of gear, you can almost certainly find something digital for free that will fill the need, or already have something. Most DAWs come with an impressive amount of built-in effects: **Use these first!** They're usually lighter on your CPU and still sound really good.

</br>

{{< attribution >}}Bearded Dragon photo by [Karl JK Hedin](https://unsplash.com/photos/khzZanoEsgQ), pedal images ripped from Modular Grid, which in turn stole them from around the internet{{< /attribution >}}

<--->

![pedaldragon](/music/pedaldragon.webp)

{{< /columns >}}

### It's All About Trying New Ideas Quickly

Immediately contradicting myself though, don't undervalue workflow either. In my experience, making music depends on a really quick brain to input device feedback loop. Being able to turn a physical knob and mash physical keys will often lead to better results if only because you're able to try things faster and try things by physically interacting with something that you may not have thought of otherwise. It's why guitars, MPE keyboards, and Eurorack are so great: they all give you a crazy amount of control and expression that is *literally* at your fingertips. The brain to input interface there is just so much better.</br></br>Find a happy middle ground. This often means getting some basic effects and gear that doesn't actually let you do anything new, but instead gives you a faster way of working with it that may open your mind to new possibilities.

**With that out of the way, feel free to dive into the list of effects!**

# What order should my effects be in?

That's up to you!

For guitar pedals, a pretty typical order looks like this,

{{< mermaid >}}
graph LR
    A("Signal In") --> B["Compression"]
    B --> C["Distortion/Drive/Fuzz"] 
    C --> D["Delay"]
    D --> E["Some modulations (Chorus, Tremmelo, etc.)"]
    E --> F["Reverb"]
    F --> H["Other modulations (Phaser, Wah, etc)"]
    H --> Z("Signal Out")
{{< /mermaid >}}

and there are a few reasons for this. 

If you put a reverb before your distortion, it tends to get a bit muddy. If you put delay after your reverb, you're delaying the reverb tails, not adding reverb to the dealy tails (which is fine, but weird) etc. 

So, I would consider the above order pretty "normal" but I really cant stress this enough: <span style="color:#FFB8B8">T</span><span style="color:#FFD4B8">H</span><span style="color:#FFF1B8">E</span><span style="color:#F1FFB8">R</span><span style="color:#D4FFB8">E</span> <span style="color:#B8FFB8">A</span><span style="color:#B8FFD4">R</span><span style="color:#B8FFF1">E</span> <span style="color:#B8F1FF">N</span><span style="color:#B8D4FF">O</span> <span style="color:#B8B8FF">R</span><span style="color:#D4B8FF">U</span><span style="color:#F1B8FF">L</span><span style="color:#FFB8F1">E</span><span style="color:#FFB8D4">S</span>

If you want to put reverb after distortion, knock yourself out. Hell, almost every time I've done so I've fallen in love with the result. More than anything you should try different orders to understand why this order is common and figure out where you can bend it.

# Neat tricks with effects

[My first WET / DRY / WET Guitar Pedal Rig (Mark Johnston)](https://www.youtube.com/watch?v=uptuRNXR0Mw)

[How to Experiment with your effects pedal signal chain (MusicRadar)](https://www.musicradar.com/news/pedal-signal-chain-experiment)

