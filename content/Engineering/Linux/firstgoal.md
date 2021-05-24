+++
bookToC = false
+++

# Chapter 1 - The first goal

<!-- TODO switch the text blocks to the newer foot notes -->

{{< columns >}}

Every journey needs a place to start, and while many may like to start slow I think a head first approach is best. So that's exactly what we're gonna do. The very first thing we're going to do is install a new **Operating System (OS)** on your computer. This is a pretty involved process. It will require you to **Repartition** your drive, change settings in your **BIOS or UEFI**, and install a new **Bootloader**. I know this sounds really hard, but it's not as bad as it sounds and I assure you it's worth it. The OS we'll be installing is called Linux. Linux is actually what powers both Android and ChromeOS, and is a common descendant of the same system as Mac OSX. Linux is the OS that almost all of the servers on the internet use - from massive website like Facebook and Google to small Minecraft servers you can rent online to play with friends. What's cool about Linux is it lets you get much closer to the hardware and see what's going on, and it just generally makes writing code much easier.

Furthermore, it's super easy to set up an amazing development environment in Linux for getting work done with code or electronics, and at the end of the day you can still watch YouTube, play *most* games that are on Steam, or open up an office suite, just like Windows or Mac. Unlike Windows and (to a lesser extent) Mac though the system is laid out in way so that all the moving parts are exposed and able to be tinkered with. No setting or configuration is locked in and you have total control over your computer with Linux. It's not just easier to *run and use* software and tools for doing hardware and programming development on Linux, but it's also easier to find and install the tools in the first place, as you'll see shortly. Finally, Linux has a great track record of stability, as there are many Linux servers that run 24/7/365 to serve web pages, host services like games, and crunch big data in real time. In fact, all of the world's top 500 super computers run Linux.

Beyond that, there's a degree of respect Linux has for the user that Windows and Mac both lack. In Windows 10 ads are being baked into the preinstalled programs from Minesweeper to the Email client, the OS pesters you to use Edge and Bing while simultaneously spying on everything you do. If you attempt to do even remotely system level things it's increasingly easy to get the Frowny Face Blue Screen of Death (BSOD):

![Bsodwindows10](/Bsodwindows10.png)

Add to this the fact that Microsoft basically laid off their entire testing department, and the [nightmare that windows 10 updates have cause](https://www.howtogeek.com/658194/windows-10s-new-update-is-deleting-peoples-files-again/), [forced online accounts](https://readhacker.news/s/4htmg), or well, just read [this list](https://itvision.altervista.org/why-windows-10-sucks.html). You'll see pretty quickly why most 'nerds' have a pretty deep seeded hatred for Microsoft.

Honestly, the big one for me is just how much Windows tries to [force their tools down my throat](https://www.windowslatest.com/2020/11/15/windows-10-is-now-nagging-users-with-microsoft-edge-recommendations/).

I mean, this was a real error message I saw when trying to upgrade my system from 8.1 to 10:

![somethinghappened](/somethinghappened.png)

{{< attribution >}}

[Image source](https://answers.microsoft.com/en-us/windows/forum/windows_10/unable-to-upgrade-to-windows-10-something-happened/be12b76d-af02-46a1-a00c-4e4af0c29588)

{{< /attribution >}}

do you really think Microsoft is at all competent anymore?

<--->

![Linux Fox](/linuxfox.jpg)

{{< attribution >}}

Art by [@monoxromatik](https://twitter.com/monoxromatik)

{{< /attribution >}}

{{< hint info >}}
**Operating System:** According to Wikipedia, "An operating system (OS) is system software that manages computer hardware and software resources and provides common services for computer programs." put simply on your hardware this is probably Windows or Mac OS, and it's what everything else runs on top of
{{< /hint >}}

{{< hint info >}}
**Repartition:** To partition a drive means to take all the space on the hard drive and divide it into partitions onto which you can put a file system. Most operating systems like Windows, Mac OsX, or Linux, use multiple partitions for the operating system to function. Usually a filesystem is set up on each of these partitions, in windows this is typically NTFS for Hard Drives and FAT32 for flash drives, these file systems are effectively the index for all the files you'll put on the drive, and as you may have multiple partitions and multiple file systems on one disk each will have an index to match. As complicated as it may seem this means the partition table can be seen as an 'index of inecies' of sorts. Don't worry if that's a lot to understand right now, we'll come back to this topic in depth.

You may also need to know how your drive is formatted, this is if it is using MBR (Master Boot Record) or GPT (GUID Partition Table), again, we'll cover this. Don't stress over all the new terms.

{{< /hint >}}

{{< hint info >}}
**BIOS/UEFI:** The Binary Input Output System or Unified Extensible Firmware Interface is the thing you see before you computer loads the operating system, usually prompting to press delete or f2 to change settings. This is the system that is used to change the way all the components around the computer talk to one another and at what speed.
{{< /hint >}}

{{< hint info >}}
**Bootloader:** The bootloader sits at a special place on the hard drive selected for boot in the UEFI or BIOS, and is what the computer uses to load the full operating system, most will let you chose what operating system you want to boot if you have multiple installed on you computer at once
{{< /hint >}}

> Note, for everything on the left, I mostly picked on Microsoft and Windows as that's what most people run. I have just as many, if not more, complaints for Apple and OSX. It's just that I suspect there will be far more Windows users reading this than Apple users.

{{< /columns >}}