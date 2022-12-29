# Chapter 3: What's Else Is Needed?

<script>    document.getElementById("hciMenu").open = true;</script>

## Script all the things! But Not Like That™

Computers are, generally, really good at repetitive tasks. People are, generally, really bad at telling computers what they want.

This means that developers (which, I assume, is a large portion of those still reading this) need to make systems that let users automate tasks in a more user-friendly way than they would do it.

Previously, I mentioned that I run backups with a little backup script:

{{< details "My basic backup script" >}}

```bash
#!/bin/bash
rsync -a --delete -P /mnt/data /run/media/vega/BigOlBackup
rsync -a --delete -P /mnt/win/VegaProductions /run/media/vega/BigOlBackup
rsync -a --delete -P /etc /run/media/vega/BigOlBackup
rsync -a --delete -P --exclude={'Xilinx','intelFPGA'} /opt /run/media/vega/BigOlBackup
rsync -a --delete -P /srv /run/media/vega/BigOlBackup
rsync -a --delete -P /usr /run/media/vega/BigOlBackup
rsync -a --delete -P --exclude={'.local/share/Steam'} /home/vega /run/media/vega/BigOlBackup
rsync -a --delete -P /mnt/win/ProgramData/Ableton /run/media/vega/BigOlBackup/win
rsync -a --delete -P /mnt/win/Users/Vega/Documents /run/media/vega/BigOlBackup/win
rsync -a --delete -P /mnt/win/Users/Vega/Downloads /run/media/vega/BigOlBackup/win
rsync -a --delete -P /mnt/music /run/media/vega/BigOlBackup/
rsync -a --delete -P /run/media/vega/Archived/SD /run/media/vega/BigOlBackup
notify-send "Backup Complete"
```

{{< /details >}}

And for those that know what they're looking at, this is pretty basic. The problem is, a lot of users would feel totally overwhelmed by this. The idea of reading through the [rysnc man page](https://man.archlinux.org/man/rsync.1.en) alone would make many people run away. So, one option is to just make application specific software that provides a nice GUI. And sure, that works. The problem is that prevents people from being able to do some of the more complex operations, doesn't allow for convenient triggering (for example, I could put this script on a [Systemd timer](https://wiki.archlinux.org/title/Systemd/Timers) or have it trigger as soon as it detects that my removable media has been inserted).

But there's a lot more than backups at stake. There are a surprising number of people out there whose entire job could be replaced by a 100 line python script, especially if you use OpenCV or TensorFlow. These people could be doing something much more meaningful with their lives.

The problem isn't that the tools don't exist to do this automation, it's that a lot of people *don't know* they exist and that they don't have the skills to apply them.

How do I propose we fix this?

Visual programming.

Yeah. I know a lot of people hate it. But, provided it's high enough level - so, probably higher than [Pure Data](https://puredata.info) or [Node-RED](https://nodered.org) or even the [Enso language](https://enso.org/#Overview) mention in the last chapter. I think the right way forward is something that generates nodes based on a small text description and some provided examples as text, images, or other data. This would let a user, for example, scan in and manually enter the data from a form a few times, then leave the computer to do it moving forward - probably with a little output indicating if it was under a threshold of confidence in a certain transcription. 

The other big necessity to make this work is using the Linux philosophy of treating everything as a file (or folder). This would make it much easier for this language/interface to let users, say, open a running program's 'file' and - with support - grab data out. This could be as mundane as how many browser tabs are open or as advanced as pulling the current geometry or live rotation angle out of 3D modeling software. With enough support from applications, the work flow potential is mind-blowing, hence the previous mention of this in the last chapter with tool composition.

My point here is that by making user-friendly but open tools we could dramatically reduce the amount of repetitive work done by many people and, more importantly, not just support one-off use cases with application specific software but instead empower people to make their own tools that fit their specific needs that developers could never anticipate. Will this result in some mildly horrific tools being made? Probably. But that's the beauty of it.

## Optional Security

[TempleOS](https://en.wikipedia.org/wiki/TempleOS) is a really weird operating system. From Wikipedia

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/TempleOS)" >}}

**TempleOS** is a biblical-themed lightweight operating system designed to be the Third Temple prophesied in the Bible. It was created by the late American programmer Terry A. Davis, who developed it alone over the course of a decade after a series of manic episodes that he later described as a revelation from God.

[...] using an interface similar to a mixture of DOS and Turbo C. Davis proclaimed that the system's features, such as its 640x480 resolution, 16-color display and single audio voice, were designed according to explicit instructions from God.

{{< /quote >}}

But the part that's cool to me? TempleOS gives no, and I mean absolutely zero, fucks about security, now, that's at least in part because it doesn't have networking (though there is a [fork with networking](https://github.com/minexew/Shrine)) but even then, there's no concept of an admin or 'normal' user. There's no system-protected processes. You want to flip arbitrary bits, directly send data over IO lines, whatever. The OS will not stop you. The entire thing runs in ring 0, which means you always have total control over the hardware, but it also means there's nothing stopping you from massively fucking everything up and crashing the system, corrupting everything, etc.

( You may want to watch [TempleOS (Linus Tech Tips, YouTube)](https://youtu.be/LtlyeDAJR7A) if this is interesting to you)

And, okay, yeah, that's obviously not ideal for *normal* use, but I think there's something to be said for having the *option* to say fuck it, slam your fist down on the manual override button, and take full control of the system. This is what I mean by optional security - no HAL 9000 in the way. No `sudo`, no 'no'. In this mode it should also be easy to turn off all networking and malware protection, so a super-fuckit No firewalls, no threat scanning, etc. switch.

Running as root in Linux is *almost* this. It could even be argued that it's better, since toying with memory though `/dev/kmem` is probably easier than trying to deduce the physical memory map. That said, there are still *[some](https://stackoverflow.com/questions/21761185/is-there-a-difference-between-sudo-mode-and-kernel-mode)* restrictions on the root account compared to running directly in 'kernel mode'.

## Backwards Compatibility via Compatibility Layers

{{< quote "[AnIdiotONTheNet](https://news.ycombinator.com/user?id=AnIdiotOnTheNet) comment on the [Re-Thinking the Desktop OS](https://twitter.com/patrickc/status/1316475471203360769) Hacker News Submission" >}}

[...]

7) Backwards compatibility should be a high priority, but accomplished via shim layers and/or emulation and/or vms when clean breaks are necessary. A wide array of such should be included with the OS from the beginning. In 2020, there is no excuse for not being able to run old software."

{{< /quote >}}

And yeah, that pretty much sums it up. Currently, backwards compatibility is often a choice of actually going to better technology and fixing bugs - like the Excel [leap year problem](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year) or supporting older files without them massively breaking. There's really no reason we couldn't do both using comparability layers. The cost, I think, would mostly be in accepting that the transition to those comparability layers will be rough and that something will just have to be upgraded until that compatibility infrastructure is in place.

There's no reason we shouldn't be able to run very old software, but also no reason to use that as an excuse against moving forward.

A fairly interesting solution to some of this might be to implement hardware compatibility via FPGAs, that is, loading either full soft-core CPUs or instruction set translation logic onto a tightly integrated FPGA. Higher end retro console emulators are already using FPGA emulations of the original CPUs anyway, so this isn't some crazy fantasy. To add even further hope, AMD owns Xilinx and Intel own Altera, so the two biggest CPU manufactures both already own the two biggest FPGA manufactures (which, is a problem in some ways). There's nothing stopping them from making integration standard. (well, other than cost and market segmentation)

## Hardware Modularity, Repairability, and Customization

According to Wikipedia, [Right to Repair](https://en.wikipedia.org/wiki/Electronics_right_to_repair) is 

> legislation that is intended to allow consumers the ability to repair and modify their own consumer electronic devices, where otherwise the manufacturer of such devices require the consumer to use only their offered services

This is a big deal, with big player like Apple and John Deer lobbying incredibly hard against it. I can't possibly explain even a fraction of all the nuance in the arguments, so instead I recommend reading [this post](https://www.eff.org/issues/right-to-repair) from the Electronic Frontier Foundation (EFF) for a quick overview.

As for modularity and customization, I mean that hardware should be made such that components can be swapped out. For example, most desktop computers do a decent job of this, where each component - the CPU, graphics card, power supply, RAM, etc. - can be upgraded individually <a class="ptr">(1)</a>. This concept desperately needs to be more widespread. It simultaneously cuts down on eWaste by increasing longevity, allows consumers to only pay for what they need, and lets consumers buy-now-upgrade-later if they can't afford what they really want to start with.

The only real downside for the consumer is that the products might be hair bit thicker? Yeah, I think that's a fair trade.

## Network Transparency

Network Transparency is a neat concept, basically, it means you can use a program over the network as if it were local. I think the coolest example of this is the X Window System on Linux, which lets you run graphical programs on a remote computer, even one with no screen attached, and have the window be visible on your own computer. For example, while you could always set up a file server to access file remotely, you could also just use X's network transparency to forward the entire file manager window to your computer and browse files like normal (not that you should)

I'd love to see more applications and backend software (like X) support this. 

## The Ability to go Back In Time

A lot of software already runs on an idea of 'events' or 'transactions', whatever you want to call it. What I want is for these to always be undo-able, at least for a window of time or number of past events. This might mean updates, changes to a file, or just scrolling down on a screen.

A refresh should try to bring you to the previous state, dismissed notifications should be able to be un-dissmissed.

As previously mentioned, you should be able to go back to a saved copy of any web page you've visited. You should be able to revert your system to a restore point (Good idea from Windows, poorly implemented).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">EVERY <br>F**IN&#39;<br>TIME<br>💢<br>🦊 <a href="https://t.co/5JGKXqxIwF">pic.twitter.com/5JGKXqxIwF</a></p>&mdash; FPV 🟡 眼鏡の狐 (@F0XnR0LL) <a href="https://twitter.com/F0XnR0LL/status/1347328703987142656?ref_src=twsrc%5Etfw">January 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< smalltext >}}[Archive.org backup of the above tweet](https://web.archive.org/web/20211028012633/https://twitter.com/F0XnR0LL/status/1347328703987142656){{< /smalltext >}}

## Open Sensors and Generators

Hardware is gradually becoming more general purpose, and as this happens, it would be amazing if they were opened up enough to allow for experimentation. Think using full on software defined radio chips for Wi-Fi and Bluetooth, such that they could be reconfigured on the fly and a different antenna attached to make use of GPS, cellular, or satellite internet. There's already a mini PCI-e card SDR [on the market](https://www.crowdsupply.com/fairwaves/xtrx). Like this, but it's my understanding that many Wi-Fi chipsets are effectively just limited SDRs running locked down firmware anyway. Why not open it up?

I also want more platform to have GPIO access. On a full on desktop or laptop, this would have to be done with care to avoid people straight up frying devices, but I think the [wide array of hats](https://www.adafruit.com/category/286) available for the RaspberryPi shows that having this as an option would really allow for some cool hardware to exist.

I also want senors and IOT devices to be more open and extendable. Give me a serial out, let me wire it up to my own home automation. I mentioned above that I have a CO2 meter from CO2Meter.com, but I'm looking at getting [this](https://www.adafruit.com/product/4867?utm_source=youtube&utm_medium=videodescrip&utm_campaign=newproducts) CO2 sensor just so I can get reading out of it easier.

IOT especially **needs** to be open. In 2020 alone, [Wink started charging customers $5/mo](https://www.consumerreports.org/smart-home/wink-tells-users-pay-up-or-we-will-disable-smart-home-hub/) for app access to IOT gear they already owned, and [Sonos bricked devices with 'Recycle Mode'](https://www.theverge.com/2019/12/30/21042871/sonos-recycle-mode-trade-up-program-controversy). 

## Software that breaks the mold

There's endless software out there, but a lot of it does mundane tasks in a mundane way. I'd like to showcase a few things that I think really found new ways of doing things.

{{< columns >}}

<video width="100%" controls src="/hci/schultzschultzgrafik.mp4"></video>

{{< attribution >}}

[Schultzschultzgrafik on Instagram](https://www.instagram.com/p/CSMiHNXiQeT/)

{{< /attribution >}}

<--->

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/QTdXqJA3TY">pic.twitter.com/QTdXqJA3TY</a></p>&mdash; Colugo (@ColugoMusic) <a href="https://twitter.com/ColugoMusic/status/1378386958817312774?ref_src=twsrc%5Etfw">April 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< attribution >}}This is the WIP [Blockhead DAW](https://www.patreon.com/colugomusic){{< /attribution >}}

{{< /columns >}}

* Along with Blockhead, [Radium](https://users.notam02.no/~kjetism/radium/) is a very strange Digtal Audio Workstation with its own interesting workflow
* [ORCΛ](https://github.com/hundredrabbits/Orca) is a really neat esoteric programming language music sequencer... thing. It's so different from everything else it's hard to describe.
  * You may want to look at the {{< button relref="/Music/Software/livecoding" color="music" >}}Live Coding Music Tools{{< /button >}} from the Music section of this website.
* [MasterPlan by SolarLune](https://github.com/SolarLune/masterplan) is a task management program focused on Indie game development with a really need mind-map style workflow
* [Habitica](https://habitica.com/static/home) is task and habit tracking software that gamifies things
* [Hexels](https://marmoset.co/hexels/) is an art program where you can work with hexgons or triangles instead of big squares for "pixel" art.
* On the note of art, [Black Ink](https://blackink.bleank.com) has some really neat brushes and support for a crazy high resolution canvas, and a node based language for making brushes or working with the layers.
* ... Clearly this list can't be exhaustive, but I do hope this has provided at least some inspiration.

For even more, you may want to check out The big list of  {{< button relref="Design/gen" color="design" >}}Generative Art Tools{{< /button >}} in the Design section of this website

While all of this is cool, I do want to point out I really, really wish there were more tools that made the more mundane tasks better too. There's been very little innovation in the user interface of browsers (like, [Vivaldi](https://vivaldi.com) may have vertical tabs but Firefox has had [Tree Style Tabs](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/) for much longer) text editors, and spreadsheets<a class="ptr">(3)</a>. The was, briefly, a bit of innovation in the slideshow space with [Prezi](https://prezi.com) but it was still pretty gimmicky and not a dramatic improvement.

Developers have gotten better tools pretty rapidly recently though, as there's a crazy number of replacements {{< button relref="/Engineering/Linux/Linuxshell#alternative-commands" >}}Alternatives to coreutils and other basic tools{{< /button >}} that have come out over the last few years. This gives me hope that tools for "normies" will catch up and see innovation too.

{{< speech >}}

If you happen to know of something else that should be on this list, feel free to tweet at me [@Vega_DW](https://twitter.com/Vega_DW)!

{{< /speech >}}

## Hardware for Open Experimentation

Microcontrollers, like the infamous Arduino UNO (ATMEGA 328p) and the much nicer Raspberry Pi Pico (RP2040) are awesome for letting people experiment and make crazy contraptions. {{< button relref="/Engineering/Deeper/fpga1" >}}FPGAs{{< /button >}} are finally starting to get open source toolchains and low enough price options to allow for people to make their own soft core CPUs and custom logic. Single board computers like the Raspberry Pi 3B+ are cheap enough to be thrown at many problems. This is all awesome.

Unfortunately, I see one big thing being left behind: the PC. If we really want innovation, it'd be awesome if there was an affordable PCIe FPGA card that could have bitstreams flashed onto it for specific applications to accelerate different workloads. GpGPU programming is nice, but custom accelerators would be even better!

Furthermore, I'd really like to see high speed not-USB-based GPIO for desktops so that people could experiment with crazy ideas like using microfluidics and diode logic for computation, playing with [FeRam](https://en.wikipedia.org/wiki/Ferroelectric_RAM), or even {{< button relref="posts/Ternay" color="gradient-border2" >}} ternary logic {{< /button >}} - Even if most of these ideas are dead ends, they're cool and I want to see more of them.

## Stop wasting time on stupid shit that nobody cares about

Microsoft has been spending a lot of time changing to the new UI, and their calculator has been updated like a dozen times for UI now but still [SpeedCrunch](http://speedcrunch.org) remains 1000x more usable and tools like [WolframAlpha](https://www.wolframalpha.com) remain superior yet. Stop spending time on shit literally nobody gives a shit about and that nobody should be using. If something is dumb for the sake of being dumb, like [Harder Drive: Hard drives we didn't want or need (Tom7, YouTube)](https://www.youtube.com/watch?v=JcJSW7Rprio) sure, but otherwise, let's make things *actually* better.

## Give me a fucking physical knob

<img src="/eng/modular.webp">

{{< attribution >}}↑ My eurorack setup, for making something vaguely resembling music{{< /attribution >}}

I can keep this one brief. I love [VCV Rack](https://vcvrack.com), I've even developed [my own modules for it](https://library.vcvrack.com/?query=&brand=LyraeModules&tag=&license=) yet here you can see I have a hardware modular music setup? So, why? Because physical, real, tactile knobs make a difference <a class="ptr">(2)</a> . I'm not saying everything needs to be physical, I'm saying that even if [Popular Mechanics](https://www.popularmechanics.com/technology/gadgets/a1531/4213770/) was wrong back in 2009 when they said:

{{< quote "[Popular Mechanics](https://www.popularmechanics.com/technology/gadgets/a1385/4212910/)" >}}

I wonder if Apple iPhone will meet with the same success, as its touchscreen offers no tactile feedback. Will people get tired of having to look down every time they dial a number?

{{< /quote >}}

We should be careful of getting too comfortable with our touch screens and not forget the value of having a physical interface. Hell, in that same picture above is a ROLI Seaboard Block (a product I actually recommend against, for various reasons) which is *Amazing* for its ability to convey a boatload of information to the computer in a tactile way, like, seriously, look at the MIDI data from this little jam session:

<img src="/eng/mpedata.webp">

{{< smalltext >}}To be clear, those aren't sound waves, those lines represent the pressure of each finger on the keyboard, individually, over time. The lines in the notes represent sliding the finger after the note was held, allowing for smooth pitch transitions or vibrato on a single key.{{< /smalltext >}}

There's just no way I could have programmed that in manually, and despite the chaos, I can assure you the sound of this was amazing.

So as Bret Victor put it all the way back in 2011 in [A Brief Rant On The Future Of Interaction Design](http://worrydream.com/ABriefRantOnTheFutureOfInteractionDesign/), "Our hands feel things, and our hands manipulate things. Why aim for anything less than a **dynamic medium that we can see, feel, and manipulate?**"

<ol hidden id="footnotes">
<li>Within the normal limits of compatability, you can't drop a crazy fast graphics card in without upgrading the power supply, and often the CPU, Ram, and motherboard all need to be from the same generation.</li>
<li>Well, and there's some techniques that VCV rack can't do well, like feedback, on account of every cable incurring one sample of delay. This is getting into the weeds though.</li>
    <li>There has been <i>some</i> innovation in spreadsheets, but none of it is really crazy. There's <a href="https://cubeweaver.com">Cubeweve</a> which bills itslef as a "Multidimensional" spreadsheet, but is rather lame and awkwardly mouse driven from what I can see. <a href="https://subset.so">subset.so</a> looks promising as well; however, it seems like a pretty small improvment. Getting a bit deeper, <a href="https://python.natto.dev/example/41d0697bfc63402a82e8bd6039ea3a79">natto.dev</a> and <a href="https://www.trymito.io">Mito</a> both use python in their data processing, albeit with radically different interfaces. Mito is <i>probably</i> the closest to what I'd actually consider a real improvment. </li>
</ol>
