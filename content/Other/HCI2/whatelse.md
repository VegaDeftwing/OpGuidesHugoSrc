# Chapter 3: What's Else Is Needed?

<script>    document.getElementById("hciMenu").open = true;</script>

## Script all the things! But Not Like That™

[TODO]

Visual Programming but still supporting text based programming, natural language scripting

everything is a file/folder (inc. full programs)

## Optional Security

[TempleOS](https://en.wikipedia.org/wiki/TempleOS) is a really weird operating system. From Wikipedia

> **TempleOS** is a biblical-themed lightweight operating system designed to be the Third Temple prophesied in the Bible. It was created by the late American programmer Terry A. Davis, who developed it alone over the course of a decade after a series of manic episodes that he later described as a revelation from God.
>
> [...] using an interface similar to a mixture of DOS and Turbo C. Davis proclaimed that the system's features, such as its 640x480 resolution, 16-color display and single audio voice, were designed according to explicit instructions from God.

But the part that's cool to me? TempleOS gives no fucks about security, now, that's at least in part because it doesn't have networking (though there is a [fork with networking](https://github.com/minexew/Shrine)) but even then, there's no concept of an admin or 'normal' user. There's no system-protected processes. You want to flip arbitrary bits, directly send data over IO lines, whatever. The OS will not stop you. The entire thing runs in ring 0, which means you always have total control over the hardware, but it also means there's nothing stopping you from massively fucking everything up and crashing the system, corrupting everything, etc.

[TempleOS (Linus Tech Tips)](https://youtu.be/LtlyeDAJR7A)

And, okay, yeah, that's obviously not ideal for *normal* use, but I think there's something to be said for having the *option* to say fuck it, slam your fist down on the manual override button, and take full control of the system. This is what I mean by optional security - no HAL 9000 in the way. No `sudo`, no 'no'. In this mode it should also be easy to turn off all networking and malware protection, so a super-fuckit No firewallls, no threat scanning, etc. switch.

Running as root in Linux is *almost* this. It could even be argued that it's better since toying with memory though `/dev/kmem` is probably easier than trying to deduce the physical memory map. That said, there's still *[some](https://stackoverflow.com/questions/21761185/is-there-a-difference-between-sudo-mode-and-kernel-mode)* restrictions on the root account compared to running directly in 'kernel mode'.

## Backwards Compatibility via Compatibility Layers

 AnIdiotOnTheNet's Comment on [This Hacker New's Submission - 'Re-Thinking the Desktop OS'](https://news.ycombinator.com/item?id=24783387)

> [...]
>
> 7) Backwards compatibility should be a high priority, but accomplished via shim layers and/or emulation and/or vms when clean breaks are necessary. A wide array of such should be included with the OS from the beginning. In 2020, there is no excuse for not being able to run old software."

And yeah, that pretty much sums it up. Currently backwards compatibility is often a choice of actually going to better technology and fixing bugs - like the Excel [leap year problem](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year) or supporting older files without them massively breaking. There's really no reason we couldn't do both using comparability layers. The cost, I think, would mostly be in accepting that the transition to those comparability layers will be rough and that some thing will just have to be upgraded until that compatibility infrastructure is in place.

There's no reason we shouldn't be able to run very old software, but also no reason to use that as an excuse against moving forward.

A fairly interesting solution to some of this might be to implement hardware compatibility via FPGAs, that is loading either full soft-core CPUs or instruction set translation logic onto a tightly integrated FPGA. Higher end retro console emulators are already using FPGA emulations of the original CPUs anyway, so this isn't some crazy fantasy. To add even further hope, AMD owns Xilinx and Intel own Altera, so the two biggest CPU manufactures both already own the two biggest FPGA manufactures. There's nothing stopping them from making integration standard. (well, other than cost and market segmentation)

## Hardware Modularity, Repairability, and Customization

According to Wikipedia [Right to Repair](https://en.wikipedia.org/wiki/Electronics_right_to_repair) is 

> legislation that is intended to allow consumers the ability to repair and modify their own consumer electronic devices, where otherwise the manufacturer of such devices require the consumer to use only their offered services

This is a big deal, with big player like Apple and John Deer lobbying incredibly hard against it. I can't possibly explain even a fraction of all the nuance in the arguments, so instead I recommend reading [this post](https://www.eff.org/issues/right-to-repair) from the Electronic Frontier Foundation (EFF) for a quick overview.

As for modularity and customization, I mean that hardware should be made such that components can be swapped out. For example, most desktop computers do a decent job o f this, where each component - the CPU, graphics card, power supply, RAM, etc. - can be upgraded individually <a class="ptr">(1)</a>. This concept desperately needs to be more widespread. It simultaneously cuts down on eWaste by increasing longevity, allows consumers to only pay for what they need, and lets consumers buy-now-upgrade-later if they can't afford what they really want to start with.

The only real downside for the consumer is that the products might be hair bit thicker? Yeah, I think that's a fair trade.

## Network Transparency

Network Transparency is a neat concept, basically, it means you can use a program over the network as if it were local. I think the coolest example of this is the X Window System on Linux, which lets you run graphical programs on a remote computer, even one with no screen attached, and have the window be visible on your own computer. For example, while you could always setup a file server to access file remotely, you could also just use X's network transparency to forward the entire file manager window to your computer and browse files like normal.

I'd love to see more applications and backend software (like X) support this. 

## The Ability to go Back In Time

A lot of software already runs on an idea of 'events' or 'transactions', whatever you want to call it. What I want is for these to always be undo-able, at least for window of time or number of past events. This might mean updates, changes to a file, or just scrolling down on a screen.

A refresh should try to bring you to the previous state, dismissed notifications should be able to be un-dissmissed.

As previously mentioned, you should be able to go back to a saved copy of any web page you've visited. You should be able to revert your system to a restore point (Good idea from Windows, poorly implemented).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">EVERY <br>F**IN&#39;<br>TIME<br>💢<br>🦊 <a href="https://t.co/5JGKXqxIwF">pic.twitter.com/5JGKXqxIwF</a></p>&mdash; FPV 🟡 眼鏡の狐 (@F0XnR0LL) <a href="https://twitter.com/F0XnR0LL/status/1347328703987142656?ref_src=twsrc%5Etfw">January 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Open Sensors and Generators

Hardware is gradually becoming more general purpose, and as this happens it would be amazing if they were opened up enough to allow for experimentation. Think using full on software defined radio chips for Wifi and Bluetooth, such that they could be reconfigured on the fly and a different antenna attached to make use of GPS, cellular, or satellite internet. There's already a mini PCI-e card SDR [on the market](https://www.crowdsupply.com/fairwaves/xtrx). like this, but it's my understanding that many wifi chipsets are effectively just limited SDRs running locked down firmware anyway. Why not open it up?

I also want more platform to have GPIO access. On a full on desktop or laptop this would have to be done with care to avoid people straight up frying devices, but I think the [wide array of hats](https://www.adafruit.com/category/286) available for the RaspberryPi shows that having this as an option would really allow for some cool hardware to exist.

I also want senors and IOT devices to be more open and extendable. Give me a serial out, let me wire it up to my own home automation. I mentioned above that I have a CO2 meter from CO2Meter.com, but I'm looking at getting [this](https://www.adafruit.com/product/4867?utm_source=youtube&utm_medium=videodescrip&utm_campaign=newproducts) CO2 sensor just so I can get reading out of it easier.

IOT especially **needs** to be open. In 2020 alone [Wink started charging customers $5/mo](https://www.consumerreports.org/smart-home/wink-tells-users-pay-up-or-we-will-disable-smart-home-hub/) for app access to IOT gear they already owned, and [Sonos bricked devices with 'Recycle Mode'](https://www.theverge.com/2019/12/30/21042871/sonos-recycle-mode-trade-up-program-controversy). 

## Software that breaks the mold

{{< columns >}}

<video width="100%" controls src="/hci/schultzschultzgrafik.mp4"></video>

{{< attribution >}}

[Schultzschultzgrafik on Instagram](https://www.instagram.com/p/CSMiHNXiQeT/)

{{< /attribution >}}

<--->

{{< /columns >}}

[TODO]

[MasterPlan by SolarLune](https://github.com/SolarLune/masterplan)

Habitica?

https://www.craft.do

http://audulus.com

https://dag.s-ol.nu

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FgHMU7m9-I8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Demos of the WIP [Blockhead DAW](https://www.patreon.com/colugomusic):

{{< columns >}}

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/QTdXqJA3TY">pic.twitter.com/QTdXqJA3TY</a></p>&mdash; Colugo (@ColugoMusic) <a href="https://twitter.com/ColugoMusic/status/1378386958817312774?ref_src=twsrc%5Etfw">April 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<--->

<blockquote class="twitter-tweet"><p lang="fr" dir="ltr">bizarre envelope <a href="https://t.co/8AMZwYc1sG">pic.twitter.com/8AMZwYc1sG</a></p>&mdash; Colugo (@ColugoMusic) <a href="https://twitter.com/ColugoMusic/status/1367270893731348481?ref_src=twsrc%5Etfw">March 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< /columns >}}

## Hardware for Open Experimentation

[TODO]

Microfluid computers, diode logic, GPIO

## Wasting time on stupid shit that nobody cares about

Microsoft has been spending a lot of time changing to the new UI, and their calculator has been updated like a dozen times for UI now but still [SpeedCrunch](http://speedcrunch.org) remains 1000x more usable and tools like [WolframAlpha](https://www.wolframalpha.com) remain superior yet. Stop spending time on shit literally nobody gives a shit about.

## Give me a fucking physical knob

[Bring Back Our Knobs: Analog vs. Digital (Popular Mechanics, 2009)](https://www.popularmechanics.com/technology/gadgets/a1531/4213770/) 

{{< smalltext >}}Note, that Popular Mechancics article didn't age all that well, with "I wonder if Apple iPhone will meet with the same success, as [its touchscreen offers no tactile feedback](https://www.popularmechanics.com/technology/gadgets/a1385/4212910/). Will people get tired of having to look down every time they dial a number?" sounding funny today, still, I think the point stands{{< /smalltext >}}



<ol hidden id="footnotes">
<li>Within the normal limits of compatability, you can't drop a crazy fast graphics card in without upgrading the power supply, and often the CPU, Ram, and motherboard all need to be from the same generation.</li>
</ol>
