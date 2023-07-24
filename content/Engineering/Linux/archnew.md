# Chapter 2 - Installing Arch Linux

<!-- TODO: I'd like to have the user setup ZSH and https://zellij.dev pretty early as it makes doing stuff from a direct TTY signficantly less of a pain in the ass. Similarly, might grab sysz pretty early too. Of course, I don't want to do either until after having done it the old school way at least once. --->

<iframe width="100%" height="500" src="https://www.youtube.com/embed/ezUoiaoQCTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Some Background

<p style="font-size: 30px;text-align: center;">⬤◯◯◯◯◯◯◯◯◯</p>

Unlike Windows or Mac which are primarily differentiated by versions (Windows XP, Vista, 7, 10…), Linux has two important things to look out for:

* The distribution name (Arch, Ubuntu, Mint, Debian, etc.)
* Kernel version number (5.18 last time this page was updated)

So, what do each of these mean?

Well, Linux is actually just the name of the underlying 'core' of the system, known as the kernel, as such, there are literally thousands of Linux variations or '**distributions**'. Some of the well known variants include Ubuntu, Fedora, OpenSuse, and Arch (No disrespect to the other distros out there!). Each of these has a different target audience, with some meant for servers, some meant for casual users as an alternative to Windows, others as work station for hard core computing. They also ship with different software pre-installed to be accessed after the first boot.

The other differentiating factor is the version of the Linux **Kernel** that they use. Some chose to use an older, battle hardened kernel that is known to be very, very stable, others chose a nice middle ground, while yet others continuously release an update to the newest available kernel. There are pros and cons to each model and each has its place; however, the distro I'm going to have you install, Arch, uses the (almost) the newest available, updating very regularly. Arch has a reputation as one of the hardest distros to work with, but also one of the most cutting edge, fun to tinker around in, and best documented.

{{< columns >}}

Arch is what's known as a *rolling release* distribution, which means it gets the bleeding edge features and the newest kernel pretty much as fast as possible, though really the biggest thing that makes Arch special is how bare bones it is out of the box, shipping with basically **no pre-installed software**. In fact, when you first start it up the only thing you'll see is a screen to type and run commands, and that's where we're going to start.

<--->

<img src="/eng/archlogo.png" alt="Arch Logo" height="180em" style="display: block; margin-left: auto; margin-right: auto;">

{{< attribution >}}Arch Linux Logo from [archlinux.org](https://archlinux.org){{< /attribution >}}

{{< /columns >}}

For most distros like Ubuntu or OpenSuse (feel free to look these up, this page isn't going anywhere) there's a nice graphical, point and click installer which helps you install the system and somewhat mitigates potential risk of killing your original OS (Mac/Win) or losing data; however, the goal of this guide is to learn. Arch's install process, entirely by typing commands in this terminal is hard, but that difficulty leads to a deeper understanding and respect for the system as a whole

When we're done you'll have a system that has exactly what you need and nothing you don't. You won't find weird forcibly installed software like Win 10's Candy Crush App here, and your system will only do exactly what you tell it. Of course, this implies you know how to speak it's language and tell it what you want. Thankfully with some practice you'll get used to running Arch and you'll wonder why you ever dealt with other systems to begin with.

<p style="font-size: 22px;display:inline;">However,</p> and I really can't stress this enough, <p style="font-size: 22px;display:inline;">Arch Linux expects you to fully understand your system</p>. This is "enforced" by making the installation process DIY with relatively little guidance. You're expected to research everything and understand the differences, pros & cons, of each choice.</br></br>

<p style="font-size: 22px;display:inline;">TLDR; STFW:</p> Arch is a distro that really expects you to put in the effort. The community, while typically fine, can be a bit… <i>unsavory</i> if you ask questions that are easily answered by google (STFW = Search The Fucking Web) or reading a wiki page.</br></br> That said…

<p style="font-size: 22px;display:inline;">You shouldn't have to R <u>all</u> TFMs.</p> (RTFM = Read The Fucking Manual) The problem with this is Linux (and everything with computers) is complicated and getting more complicated by the year. Not that it's the best way of looking at things, but for context, back when I was first getting started with Arch Linux in 2014, the kernel had about 13 million lines of code. Now it has almost 30 million lines. In that time there have been countless additions and changes to the number of options for low level configurations.</br></br>
So, I want to help you understand your system and the choices you'll be making, but I want to help narrow the scope at least a little bit.

## The Boring Intro Part Of The Manual That You Should Still Actually Read

<p style="font-size: 30px;text-align: center;">⬤⬤◯◯◯◯◯◯◯◯</p>

We'll be following along with the [Official Arch Linux Installation Guide](https://wiki.archlinux.org/title/installation_guide), so you'll see this page has a lot of quote boxes:

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

This document is a guide for installing [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux) using the live system booted from an installation medium made from an official installation image. The installation medium provides accessibility features which are described on the page [Install Arch Linux with accessibility options](https://wiki.archlinux.org/title/Install_Arch_Linux_with_accessibility_options). For alternative means of installation, see [Category:Installation process](https://wiki.archlinux.org/title/Category:Installation_process).

{{< /quote >}}

Okay, that's a lot, so let's break it down. By "live system" this means we're going to be booting into an operating system from our installation media - for almost all situatations, this is a flash drive. This OS is "live" in that it is a true, full, Linux operating system. It's just running directly off the flash drive. In this case, this live system is really just used so that we can install Linux to a more permanent drive. So, rather ironically, we'll be using Linux to install Linux.

The "with accessibility options" page is if you need something like a screen reader or if you have a braille display. I have no experiance helping with these things. More relevant to most readers, the [Category:Installation process](https://wiki.archlinux.org/title/Category:Installation_process) page has a bunch of *very* important steps that aren't on this page. Most importantly, there's a page about [Setting up a Dual Boot system with Windows](https://wiki.archlinux.org/title/Dual_boot_with_Windows) - which I'll be going through here. I won't be covering the process if you have a Mac, but there is a page for that: [Mac Installation](https://wiki.archlinux.org/title/Mac#Installation). Note that Apple's newer computers with their own processors ~~aren't supported.~~ are still a massive pain in the ass to get working.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

Before installing, it would be advised to view the [FAQ](https://wiki.archlinux.org/title/FAQ). For conventions used in this document, see [Help:Reading](https://wiki.archlinux.org/title/Help:Reading). In particular, code examples may contain placeholders (formatted in `*italics*`) that must be replaced manually.

{{< /quote >}}

Alright, let's buzz over to the FAQ and see the relevant bits:

{{< quote "[FAQ](https://wiki.archlinux.org/title/Frequently_asked_questions) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Why would I not want to use Arch?

You may **not** want to use Arch, if:

- you do not have the ability/time/desire for a 'do-it-yourself' GNU/Linux distribution.
- you require support for an architecture other than x86_64.
- you take a strong stance on using a distribution which only provides free software as defined by GNU.
- you believe an operating system should configure itself, run out of the box, and include a complete default set of software and desktop environment on the installation media.
- you do not want a rolling release GNU/Linux distribution.
- you are happy with your current OS.

{{< /quote >}}

All of these are very good points. The fact of the matter is Arch does take time and know how to maintain. You're standing on the edge of a cliff here. You have to be dedicated and willing to learn. You also have to have hardware that actually works with Arch (which should be the case with most anything but Chromebooks and newer Apple hardware). The one that I think is hard for users starting out with Arch is the last point "you are happy with your current OS." - I'm going to take a bet and say you don't really fully understand why you'd be unhappy, let alone un happy with things enough to justify all this work. All I can say is trust me and you'll see.

There's also that [Help:Reading](https://wiki.archlinux.org/title/Help:Reading) (which, yes, sounds like it really wants to insult your intelligence) but it *is* helpful. The most notable thing here is 

{{< quote "[Help:Reading](https://wiki.archlinux.org/title/Help:Reading) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

Some lines are written like so:

```
# mkinitcpio -p linux
```

Others have a different prefix:

```
$ makepkg -s
```

The numeral or hash sign (`#`) indicates that the command needs to be run as *root*, whereas the dollar sign (`$`) shows that the command should be run as a *regular user*.

{{< /quote >}}

which will be exteremly relevant later.

There are other things of relevance in the FAQ, but I think a lot of it won't mean much at this point, so let's move on.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

For more detailed instructions, see the respective [ArchWiki](https://wiki.archlinux.org/title/ArchWiki) articles or the various programs' [man pages](https://wiki.archlinux.org/title/Man_page), both linked from this guide. For interactive help, the [IRC channel](https://wiki.archlinux.org/title/IRC_channel) and the [forums](https://bbs.archlinux.org/) are also available.

{{< /quote >}}

A little self referential here, but good advice- the ArchWiki is really awesome and if you need help it's a good idea to just search the Wiki for the topic you're stuck on. This also mentions "man pages". This is where I have to go down a bit of a tangent.

To install Linux, you'll have to use a lot of commands. For example running `ls` from the terminal will list your files, while `cd` can be used to change what folder you're working with. But these commands have other, more complex uses which you can read about from the terminal itself by running `man ls` or `man cd`. Generally, if you want a manual for any command, you can just put the word man before it.

The latter two reccomendations are ways to get live help from real people. IRC is a really, really old chat platform that is still heavily used by tech-heads, but can be a bit difficult to get setup. The forums are what you expect, but I've noticed they're not all that welcoming of new users. There's not many good options though, so if you do need more help, there's really either the [Arch Linux Telegram Chat](https://t.me/archlinuxgroup) or you'll have to figure out how to use IRC.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

Arch Linux should run on any [x86_64](https://en.wikipedia.org/wiki/X86-64)-compatible machine with a minimum of 512 MiB RAM, though more memory is needed to boot the live system for installation.[[1\]](https://lists.archlinux.org/pipermail/arch-releng/2020-May/003957.html) A basic installation should take less than 2 GiB of disk space. As the installation process needs to retrieve packages from a remote repository, this guide assumes a working internet connection is available.

{{< /quote >}}

In English:

* Your computer needs to not be a new mac or a chromebook
* Your system needs to have better hardware than something from 2001
* You'll need some room on your computer's storage to actually install Arch
* You'll need an internet connection

Finally, before we get do actually doing the thing, you might want to read [Arch Community Ethos](https://xyne.dev/notes/arch/ethos.html) by Xyne. To some extent, the *existance* of this page goes against the community ethos, but the install guide is also needlessly dense, as stated above.

## Actually Starting To Do Something - Downloading

<p style="font-size: 30px;text-align: center;">⬤⬤⬤◯◯◯◯◯◯◯</p>

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Pre-installation

##### Acquire an installation image

Visit the [Download](https://archlinux.org/download/) page and, depending on how you want to boot, acquire the ISO file or a netboot image, and the respective [GnuPG](https://wiki.archlinux.org/title/GnuPG) signature.

{{< /quote >}}

Alright, so you need to actually download the live OS installer "image" (it's called an image for historical reasons - same for .iso, it's for CDs, but you can put the file onto a flash drive). If you go to that download page you'll see an ton of options and some mention of using something called `dd` to get the image onto a flash drive. Ignore almost everything. The only thing we need to worry about is the section labeled **BitTorrent Download (recommended)**

This has the advantage of verifying the PGP signarute for us, which is what that extra line about the GunPG signature line is telling us about. *TL;DR* of PGP (and GPG, which is an implimention of PGP, as confusing as that is) is that it can be used to confirm that a file is actually what it says it is and is from who it says it's from. This makes sure your download isn't corrupted and that it actually came from the people that it claims to be from.

So, to download this then you'll need a *Torrent client*.

Torrenting is type of download that runs over distributed peer to peer connections, this means you're directly downloading the file from multiple people rather than from one large server. For projects like Arch this is important as they don't really have the cash to put up to host centralized servers. Popular programs for downloading torrents on Windows include uTorrent, qBittorrent, and Deluge. I personally use [Deluge](https://deluge-torrent.org) on Windows, so it's what I'll reccomend if you don't already use something else. If you're on a Mac, here's a link to [qBittorrent](https://www.qbittorrent.org/download.php).

Regardless, once you have the torrent client installed you *should* be able to back to that [download](https://archlinux.org/download/) page and click the magnet link - which *should* open up whatever torrent client you installed and prompt you to start the Download.

**Note,** when the download completes, your torrent client will continue to serve the file to other people looking to download it to using your internet connection. Generally, this is a good thing to do, but you'll want to turn it off, at least temporarily, as we move forward. If you don't, some of the next steps may complain at you saying the file is open/in use. This also might end up eating all of your bandwidth or be undesirable if you're on a metered internet connection.

---

☕ The download shouldn't take long, but this depends on your connection. Feel free to go get a drink or take a break while you wait.

---

Once that's done downloading your torrent client should automatically confirm the image by using PGP, but as this is a good learning opportunity let's do a manual double check as well.

{{< tabs "hashing" >}}
{{< tab "Windows" >}}

# Windows

open up a command prompt by pressing ctr+r and typing 'cmd' then enter, and we'll need to navigate to the location of the downloaded file it should be named something along the lines of archlinux-20xx.xx.xx-x86_64.iso and be in your Downloads folder. 

When you open a command prompt on Windows it should start out in your user folder (C:\Users\\%username%\). To list the folders in this folder you can type 'dir' and press enter. You should, at minimum, see folders like 'Downloads' 'Desktop' and 'Documents' to enter the Downloads folder simply type 'cd Dow' and press tab, the line should auto-complete to 'cd Downloads', then press enter. Now you can type 'certutil -hashfile arch' , press tab to complete it to 'certutil -hashfile archlinux-20xx.xx.xx-x86_64.iso' then add 'sha256' on the end so the finally command looks like

```bash
certutil -hashfile archlinux-20xx.xx.xx-x86_64.iso sha256
```

> Note, if this spits out "The process cannot access the file because it is being used by another process." you'll need to close your torrent client or stop seeding the file first!

So let's look at this command:

The first part, certutil, is a program on your computer, '-hashfile' says the next string of text is the name of the file we want to examine, and the last part sha1 is the checksum as mentioned before. 

Finally, if you go back to https://www.archlinux.org/download/ and look under 'Checksums' you can compare the output of the command you just ran against the SHA1 sum provided to be sure you didn't have any errors in the file. This is mostly a security check as in theory someone could provide a 'bad' version of the OS containing malware, but such a version would produce an incorrect checksum, in practice this is extraordinarily uncommon. Though this does also serve to ensure the download wasn't corrupted in any way either.

We're not quite done though, as this only really checks the integrity of the file, not that you got it from someone trusted as, in theory, someone could hack the Arch website and put the checksum of virus-filled version there. So, now we want to check the GPG signature. To do this, install [GPG4Win](https://gpg4win.org/download.html). Close your command prompt and reopen it (ctrl+r "cmd"). Go back to your browser and scroll down on the download page and you'll see a link to download the "ISO PGP signature" - do that. You'll also see a long command prefixed by "WKD Lookup" that should start with `gpg --auto-key-locate clear,wkd -v --locate-external-key ` and end in an arch maintainer's email. **WKD** stands for **W**eb **K**ey **D**irectory, so this is looking up the maintainer's public key which they used to sign the image, which we'll check matches the image signature and the file together with the next command which uses both files we've downloaded: 

`gpg --verify archlinux-xxxx.iso.sig archlinux-xxx.iso`

What you should see is something like:

<pre>
gpg: Signature made 1/1/2023 9:49:49 AM Central Standard Time
gpg:                using EDDSA key 3E80CA1A8B89F69CBA57D98A76A5EF9054449A5C
gpg: Good signature from "Pierre Schmitz <pierre@archlinux.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 3E80 CA1A 8B89 F69C BA57  D98A 76A5 EF90 5444 9A5C
</pre>

Which should concern you, right? `This key is not certified with a trusted signature!` sounds bad? Well, if we look back on the download page, there's a link with some hex characters ( looks like 0xABCEDF ) that, if you go to, you should see the same long string of numbers as that last line on the top of the page (Search results for '0x3E80CA…, in this case.). Congrats, while that was incredibly tedious and more-or-less unnecessary, you should at least somewhat understand there's some cryptographic systems at play to ensure what you've downloaded is what you think it is and signed to be from the person it says it's from. 

Why do you care? Because Linux will do this automatically for almost all software you install in the future. This gives us trust. Could someone still do something malicious / make a virus? Sure. It's just much, much, much harder for it to wind up on your computer.

{{< /tab >}}

{{< tab "Mac" >}}

# Mac

open up a terminal by going to the Utilities fore in Applications and open 'Terminal'. The mac terminal is very, very similar to what you'll use in Linux actually, and the commands here are actually identical. You should see something like

```bash
MacBook:~ username$
```

waiting for input.

That `~` represents that you're in your user or 'home' folder, and assuming you downloaded Arch's install image to your downloads folder you should be able to type

`MacBook:~ username$ shasum -a 1 Downloads/arch`

followed by pressing tab to make that auto complete to something like

`MacBook:~ username$ shasum -a 1 Downloads/archlinux-20xx.xx.xx-x86_64.iso`

upon pressing enter the terminal should print out a long string of text.

So let's look at this command. The first part, shasum, is a program on your computer, '-a 1' says to use the sha1 algorithm instead of something like sha256, and the last part is the filename we want to compute the checksum of.

Now, if you go back to https://www.archlinux.org/download/ and look under 'Checksums' you can compare the output of the command you just ran against the SHA1 sum provided to be sure you didn't have any errors in the file. This is mostly a security check as in theory someone could provide a 'bad' version of the OS containing malware, but such a version would produce an incorrect checksum, in practice this is extraordinarily uncommon. Though this does also serve to ensure the download wasn't corrupted in any way either.

We're not quite done though, as this only really checks the integrity of the file, not that you got it from someone trusted as, in theory, someone could hack the Arch website and put the checksum of virus-filled version there. So, now we want to check the GPG signature. To do this, install [GPG Tools](https://gpgtools.org). Once you have that, go back to your browser and scroll down on the download page and you'll see a link to download the "ISO PGP signature" - do that. You'll also see a long command prefixed by "WKD Lookup" that should start with `gpg --auto-key-locate clear,wkd -v --locate-external-key ` and end in an arch maintainer's email. **WKD** stands for **W**eb **K**ey **D**irectory, so this is looking up the maintainer's public key which they used to sign the image, which we'll check matches the image signature and the file together with the next command which uses both files we've downloaded: 

`gpg --verify archlinux-xxxx.iso.sig archlinux-xxx.iso`

What you should see is something like:

<pre>
gpg: Signature made 1/1/2023 9:49:49 AM Central Standard Time
gpg:                using EDDSA key 3E80CA1A8B89F69CBA57D98A76A5EF9054449A5C
gpg: Good signature from "Pierre Schmitz <pierre@archlinux.org>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 3E80 CA1A 8B89 F69C BA57  D98A 76A5 EF90 5444 9A5C
</pre>


Which should concern you, right? `This key is not certified with a trusted signature!` sounds bad? Well, if we look back on the download page, there's a link with some hex characters ( looks like 0xABCEDF ) that, if you go to, you should see the same long string of numbers as that last line on the top of the page (Search results for '0x3E80CA…, in this case.). Congrats, while that was incredibly tedious and more-or-less unnecessary, you should at least somewhat understand there's some cryptographic systems at play to ensure what you've downloaded is what you think it is and signed to be from the person it says it's from. 

Why do you care? Because Linux will do this automatically for almost all software you install in the future. This gives us trust. Could someone still do something malicious / make a virus? Sure. It's just much, much, much harder for it to wind up on your computer.

{{< /tab >}}

{{< /tabs >}}

Now, we finally have file that we can 100% trust. Realistically, this level of scruntiny isn't really necessary, but I wanted you do go through it and understand it at least once for reasons you'll understand later.

## Making The Installer

<p style="font-size: 30px;text-align: center;">⬤⬤⬤⬤◯◯◯◯◯◯</p>

Okay, so we have the OS, how do you install the damn thing? Well, get ready for a fun time. The first thing you'll need is a flash drive with nothing on it you care about, as it's going to be reformated, which will **wipe any data on it**. To install an OS you have to create 'bootable media' this used to be done with a CD, though mostly it's done with flash drives now. You'll actually be putting the OS on the flash drive and then using that to put it on your hard drive / SSD.

Let's not get ahead of ourselves though, we need room to put the new operating system in! Thankfully Linux is small- really small. Even 50Gb should be plenty for the OS, all your programs, and tons of room to spare for data, but I typically recommend at least 100GB, and since we'll be installing a lot of development tools, it makes sense to do this right to begin with.

{{< tip >}}

The following guide will be assuming you're installing Linux on the same drive as Windows or MacOS, making it applicable for most systems right away; however, I strongly recommend getting an extra SSD and giving Linux it's own disk outright instead. This is far easier to do in a desktop, but if you have a laptop with a CD drive you may be able to put a SSD in it's place, or the system may just have an unused slot.</br></br>SSD prices have been steadily declining over the past few years, but as of the time of writing a 250Gb SSD should be available for under 50 USD. I'd recommend a larger disk though, with 500Gb being plenty for most people. You'll want to do research about what works best in your computer. There's multiple form factors (2.5" and M.2) as well as connection standards (NVMe and SATA), but not all computers will support everything, so look first! If you need help with this, first see [M.2 As Fast As Possible (YouTube, Techquickie)](https://www.youtube.com/watch?v=opwON-7J_wI)<a class="ptr">(1)</a> but if you still need help you can [reach out to me directly](https://twitter.com/Vega_DW).

{{< /tip >}}


{{< tabs "Install" >}}

{{< tab "Windows" >}}

# Windows

When you got your computer with windows is likely that all of the room on your main storage (Hard driver or SSD) was preallocated for windows (as it should be!) so we'll need to shrink this down and make room for Linux to live along side Windows. Open the start menu and type `disk managment` and hopefully "create or format hard drive partitions" will show up as an option. Open that. At the bottom you should see a few bars showing partitions on your disk(s). If you have multiple drives there will be multiple rows of bars, otherwise there will be only one row. If you have multiple drives it's likely that one is a larger hard drive (HDD) and the other a smaller solid state drive (SSD), if you have room on your SSD use that, if you don't using the HDD will be fine, but the OS may feel slower than you're accustomed to. If you only have one drive, ignore this. Right click in what is likely the largest box, labeled 'primary partition' and chose 'Shrink Volume'. After it finishes querying available disk space enter 102400 as the amount of room to shrink (This is 100GB as there are 1024MB in a GB) or a lower or higher value as you please, but realize this is data you will not be able to access from windows.

> If the window shows 0MB of available shrink space first try running "disk cleanup" and choose "cleanup system files". Then, if that doesn't work, try turning off system restore. If it's still angry, disable the page file. In my experince it's usually the pagefile, which kinda sucks. You'll probably need to google how to do these things.
>
> If none of this works, you do have another option: wiping everything and installing linux. This is actually easier, however, it's a bit more extreme, as you won't be able to boot back to windows for anything. You may instead want to try linux out on an old, usused computer first. Either way, you do you, but I'm not liable if things go wrong.
> See [This Medium Article](https://medium.com/@terajournal/increasing-size-of-available-shrink-space-for-hard-drive-partition-in-windows-8fffa50535d3) for additional info on getting Windows to let you make room.

Alright, we're getting there I promise. You should now have a gray block next to that blue block of space that shows unused space, that's perfect. Next up we'll need to turn Fast Boot **off**. In my experience turning this off doesn't effect windows boot time at all, and by having it off we'll be able to access window's file from inside linux later. To do this: go to 'edit power plan', then in the top bar navigate back to 'Power Options', select 'Chose what the buttons do' on the left side, click 'Change settings that are currently unavailable' and then un-check 'Turn on Fast Startup'.

Okay, now we're finally ready to copy the OS to a flash drive so we can install Arch, to do this, you'll need to download a program called Etcher from https://www.balena.io/etcher/. Download, run, etc. When it opens select the flash drive as your 'device' , press the select button under that and select the archlinux-20xx.xx.xx-x86_64.iso file we downloaded earlier. 

{{< tip >}}

The `.iso` file **NOT** the `.iso.sig` , the one you got from torrenting.

{{< /tip >}}

Everything else should be fine, so click start. This may take a second, in the mean time, open this guide on **another computer** as the next few steps will require a lot of restarting and doing things outside of windows.
{{< /tab >}}
{{< tab "Mac" >}}

# Mac

Before we go any further I really want to warn you of two things, one, it's going to be harder to follow this guide on a MAC. More steps are involved, and some work arounds are necessary, and more importantly, I have no experience with it. so I'm mostly regurgitating other things I've read. Pages like https://wiki.archlinux.org/index.php/Mac#Installation may prove helpful later.

First, you'll need to open up 'Disk Utility' in Applications/Utilities, then pick your disk and click 'Partition' and click the '+' button to make a new partition. Choose how much space you want to leave on the disk for MacOS and how much you want for Arch. The format of the new partition doesn't matter.

> Note, if your disk is encrypted, you'll need to decrypt first.

Now, you'll need to open a terminal like you did back when checking the checksum. Plug in either an empty flash drive or one which you don't mind erasing, and run

`diskutil list` and you should see something like `/dev/diskX (external, physical)` which is your flash drive. Now run `diskutil unmountDisk /dev/diskX` where X is your flash drive disk number from above, then finally run `dd if=path/to/arch.iso of=/dev/rdiskX bs=1m`. Note that the `of` part has /**r**diskX . The path to your arch iso is probably something like `~/Downloads/archlinux-20xx.xx.xx-x86_64.iso`

**Be extremely careful not to use the wrong /dev/disk[letter] as you could wipe your data**

This command won't print anything while it's running, but when it's done you'll see a new line asking for input. Two more notes ripped straight from https://wiki.archlinux.org/index.php/USB_flash_installation_media#In_macOS:

> To view progress, send SIGINFO by pressing `Ctrl+t`. Note `diskX` here should not include the `s1` suffix, or else the USB device will only be bootable in UEFI mode and not legacy. After completion, macOS may complain that "The disk you inserted was not readable by this computer". Select 'Ignore'. The USB device will be bootable.

Next, you'll need to make room on your drive for Arch. I'm absolutely no help here, so, see [Arch Linux with OS X or other operating systems](https://wiki.archlinux.org/title/Mac#Arch_Linux_with_OS_X_or_other_operating_systems) from the Arch Wiki and try to follow along, assuming that went well, you should be good to carry on with this page.

{{< /tab >}}
{{< /tabs >}}

Before we move on, I think it's good to sight see a bit:

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Prepare an installation medium

The installation image can be supplied to the target machine via a [USB flash drive](https://wiki.archlinux.org/title/USB_flash_installation_medium), an [optical disc](https://wiki.archlinux.org/title/Optical_disc_drive#Burning) or a network with [PXE](https://wiki.archlinux.org/title/PXE): follow the appropriate article to prepare yourself an installation medium from the chosen image.

{{< /quote >}}

If you followed along, you should have already prepared the installation image on a flash drive, but you could have put it on a CD or use PXE. You're probably thinking "WTF is PXE?" Well, it's a way to send a new operating system image to a computer *over the network*. This is *mostly* used by really big sever farms/datacenters, but you should still know it exists, even if you're unlikely to ever use it.

## Booting Up The Live Environment

<p style="font-size: 30px;text-align: center;">⬤⬤⬤⬤⬤◯◯◯◯◯</p>

<p class="tip">☠☠☠</br>
    Seriously, <b>backup your shit.</b> I've done this countless times and have still managed to accidentally wipe a drive. There's a non-0 chance you're about to completely murder your windows install, It shouldn't happen, but it can. This is a necssary evil to learn, and I assure you'll be happy you've done all this, but this next bit is actual hell for people. I'm sorry it gets so bad so early. I promise it's worth it, okay?
The next section requires a lot of reboots and has steps where you can't have this guide open on the computer you're working on, so you may want to have a spare system (or this page open on your phone) next to you to follow these insturctions on and Google if anything goes wrong.</br>☠☠☠ </p>


{{< speech right big >}}

To be fair, you should probably be doing backups anyway. We'll talk about this at some point, but, if you don't have a regular back up solution + an occasional full disk backup you sholud remedy that sooner rather than later

{{< /speech >}}

Okay, so we're finally ready to enter Arch Linux's installation environment, which as previously mentioned, is actually itself Arch Linux…

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Boot the live environment

**Note:** Arch Linux installation images do not support Secure Boot. You will need to [disable Secure Boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Disabling_Secure_Boot) to boot the installation medium. If desired, [Secure Boot](https://wiki.archlinux.org/title/Secure_Boot) can be set up after completing the installation.

{{< /quote >}}

… or we would be, if Microsoft didn't try to shove Secure Boot mess down our throats. This is the most in-flux part of this guide, as it's a bit unclear what the implications of Windows 11 requiring Secure Boot will be. This mess is in part described in [This article (nerdschalk.com)](https://nerdschalk.com/can-you-disable-tpm-and-secure-boot-after-installing-windows-11-what-happens/) but the TL;DR is Microsoft is really doing their best to turn a "security feature" into an Antitrust lawsuit. 

{{< speech >}}

Poping in to let you know that despite the name, disabling secure boot is pretty much not a problem when it comes to malmare.

{{< /speech >}}

**Assuming your system is new enough to be using secure boot,** you have two options

1. Follow that [disable Secure Boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Disabling_Secure_Boot) link and do what's necessary to get that done
2. You can go down the rabbit hole of [Making the installer work with secure boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Remastering_the_installation_image). To say this is a massive pain in the ass would be an understatment.
   * In *theory* the five step in [this stack exchange answer](https://unix.stackexchange.com/questions/320078/how-to-boot-arch-linux-installation-medium-with-secure-boot-enabled) should be enough to get it working, at least enough to boot the installation image. You'll still need to work a bit harder later to work around things.

If your system is older then congrats(?) you don't need to worry about this.

For now, I'm going to assume option 1. as upon asking others, you can still disable Secure Boot in Windows 11 and everything seems to be working fine. If this changes, please let me know, and I'll update this guide.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

1. Point the current boot device to the one which has the Arch Linux installation medium. Typically it is achieved by pressing a key during the [POST](https://en.wikipedia.org/wiki/Power-on_self_test) phase, as indicated on the splash screen. Refer to your motherboard's manual for details.

2. When the installation medium's boot loader menu appears, select

   *Arch Linux install medium*

   and press `Enter` to enter the installation environment.

   **Tip:** The installation image uses [systemd-boot](https://wiki.archlinux.org/title/Systemd-boot) for booting in UEFI mode and [syslinux](https://wiki.archlinux.org/title/Syslinux) for booting in BIOS mode. See [README.bootparams](https://gitlab.archlinux.org/mkinitcpio/mkinitcpio-archiso/blob/master/docs/README.bootparams) for a list of [boot parameters](https://wiki.archlinux.org/title/Kernel_parameters#Configuration).

3. You will be logged in on the first [virtual console](https://en.wikipedia.org/wiki/Virtual_console) as the root user, and presented with a [Zsh](https://wiki.archlinux.org/title/Zsh) shell prompt.

{{< /quote >}}

With secure boot disabled (or the modified installation image) you should, finally, be able to reboot your computer into the installation image. Mash the whatever key is required to get to the boot menu on your system (F11,Delete,F12,F7, and F2 are common). Do this and select the flash drive from the list.

You *might* have a system that makes the time in the UEFI loading screen to short to be able to get to a boot menu. As recommended on the disabling secure boot page, you can also do `Settings > Update & Security > Recovery > Advanced startup (Restart now) > Troubleshoot > Advanced options > UEFI Firmware settings` and *hopefully* you can find a setting to change to give yourself some time on load to change boot device, but you'll almost certainly see a boot order or boot override option. Chance things as necessary so that the next boot will be off of the flash drive.

{{< tip >}}

For some reason some times the flash drive will show up multiple times. If this is the case and it doesn't work the first try, try one of the other entries.

{{< /tip >}}

Until this point I've been avoiding going over the difference between UEFI and BIOS, but now we really need to cover it. For most newer systems (~2015ish) the computer will be using UEFI, while if it's older it's probably using BIOS. The Binary Input Output System or Unified Extensible Firmware Interface both more-or-less serve the same purpose: When you turn the system on, they initialize the firmware of all of the components inside your system and sort of serve as the initial system to get everything working before handing things off to the boot loader, which then boots up the operating system. So, the process goes:

BIOS/UEFI → Boot loader→ OS (Windows/Linux/Mac) 

From our perspective, the biggest difference is really just that UEFI is newer and a bit easier to work with, but there are a lot of interesting changes I encourage you to read up on later. We do still need to know which we're using though. Assuming you had to deal with Secure Boot, you're using UEFI. If you didn't, you're probably using BIOS. Fortunately, we can now check by running a command. So, go ahead and get your keyboard layout set so you can comfortably type, and then run the command under "Verify the boot mode" →

## Connecting to the Internet

<p style="font-size: 30px;text-align: center;">⬤⬤⬤⬤⬤⬤◯◯◯◯</p>

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Set the console keyboard layout

The default [console keymap](https://wiki.archlinux.org/title/Console_keymap) is [US](https://en.wikipedia.org/wiki/File:KB_United_States-NoAltGr.svg). Available layouts can be listed with:

```
# ls /usr/share/kbd/keymaps/**/*.map.gz
```

To set the keyboard layout, pass a corresponding file name to [loadkeys(1)](https://man.archlinux.org/man/loadkeys.1), omitting path and file extension. For example, to set a [German](https://en.wikipedia.org/wiki/File:KB_Germany.svg) keyboard layout:

```
# loadkeys de-latin1
```

[Console fonts](https://wiki.archlinux.org/title/Console_fonts) are located in `/usr/share/kbd/consolefonts/` and can likewise be set with [setfont(8)](https://man.archlinux.org/man/setfont.8).

#### Verify the boot mode

To verify the boot mode, list the [efivars](https://wiki.archlinux.org/title/Efivars) directory:

```
# ls /sys/firmware/efi/efivars
```

If the command shows the directory without error, then the system is booted in UEFI mode. If the directory does not exist, the system may be booted in [BIOS](https://en.wikipedia.org/wiki/BIOS) (or [CSM](https://en.wikipedia.org/wiki/Compatibility_Support_Module)) mode. If the system did not boot in the mode you desired, refer to your motherboard's manual.

{{< /quote >}}

{{< smalltext >}}If you're a dvorak user, like me, the command you want is `loadkeys dvorak`{{< /smalltext >}}

Take note of if you're using BIOS or UEFI, because it will be relevant later. For now, we need to get you connected to the internet.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Connect to the internet

To set up a network connection in the live environment, go through the following steps:

- Ensure your network interface is listed and enabled, for example with [ip-link(8)](https://man.archlinux.org/man/ip-link.8): `# ip link`

- For wireless and WWAN, make sure the card is not blocked with [rfkill](https://wiki.archlinux.org/title/Rfkill).

- Connect to the network:

  - Ethernet—plug in the cable.
  - Wi-Fi—authenticate to the wireless network using [iwctl](https://wiki.archlinux.org/title/Iwctl).
  - Mobile broadband modem—connect to the mobile network with the [mmcli](https://wiki.archlinux.org/title/Mmcli) utility.

- Configure your network connection:

  - [DHCP](https://wiki.archlinux.org/title/DHCP): dynamic IP address and DNS server assignment (provided by [systemd-networkd](https://wiki.archlinux.org/title/Systemd-networkd) and [systemd-resolved](https://wiki.archlinux.org/title/Systemd-resolved)) should work out of the box for Ethernet, WLAN, and WWAN network interfaces.
  - Static IP address: follow [Network configuration#Static IP address](https://wiki.archlinux.org/title/Network_configuration#Static_IP_address).

- The connection may be verified with 

  ping: `# ping archlinux.org`

**Note:** In the installation image, [systemd-networkd](https://wiki.archlinux.org/title/Systemd-networkd), [systemd-resolved](https://wiki.archlinux.org/title/Systemd-resolved), [iwd](https://wiki.archlinux.org/title/Iwd) and [ModemManager](https://wiki.archlinux.org/title/ModemManager) are preconfigured and enabled by default. That will not be the case for the installed system.

{{< /quote >}}

Okay, so, there's a lot here, let's just step back and go over this. The first step here is just making sure the system detected your hardware and has a driver for connecting to the network. Linux has *most* network drivers you'd ever want baked in, so that should *just work*. In this case, when running `ip link` you should see either something like `enp6s0` or `wlan0`. In this case, the former is a wired interface while the latter is for Wi-Fi.

If this didn't work and there's only a device called `lo`, there are options, but they're a bit complicated.

If you can, getting things working by using a wired connection is much, much easier. If you had a wired connection attached when you booted into the installation environment, it should just be working. in which case you can r

Then, congrats, you're good to move on. 

{{< tabs >}}

{{< tab "Wi-FI" >}}

{{< tip >}}

Unless you really have to use Wi-Fi, please don't. While sometimes it works easily, sometimes connecting to Wi-Fi from the installation image is a massive headache. We can still make it work later, but just getting through the installer with a wired connection is usually easier. If your computer doesn't have an ether port and you don't mind dropping a few bucks, you can buy pretty much any cheap USB-Ethernet adapter, usually it's about $15 for a good, gigabit, adapter.

{{< /tip >}}

Okay, so you're really gonna use Wi-Fi to install, fine.

Again, this assumes that `ip link` showed up with something like `wlan0` in its output, as otherwise you're probably in for a bad time, as you need to switch over to the "I don't see a network interface" tab.

Now, as the guide says, let's double check the interface isn't blocked with rfkill:

{{< quote "[Network Configuration](https://wiki.archlinux.org/title/Network_configuration/Wireless#Rfkill_caveat) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Rfkill caveat

Many laptops have a hardware button (or switch) to turn off wireless card, however, the card can also be blocked by kernel. This can be handled by *rfkill*. To show the current status:

```
# rfkill list
0: phy0: Wireless LAN
	Soft blocked: yes
	Hard blocked: yes
```

If the card is *hard-blocked*, use the hardware button (switch) to unblock it. If the card is not *hard-blocked* but *soft-blocked*, use the following command:

```
# rfkill unblock wifi
```

{{< /quote >}}

Then, just run `iwctl` and follow the instructions on https://wiki.archlinux.org/title/Iwd#iwctl to get connected. This tends to be a massive pain in the ass on anything but consumer-security level Wi-Fi networks, so if you're on a University network, please, please, please just try to find a wired adapter.

Still, this *should* just work. If it doesn't you might need to play around with things a bit. As the guide install guide says, this will be different if you're using a local, static-IP, but you're *probably* not. If you are, just follow the link back up above to set that up.

{{< /tab >}}

{{< tab "Wired" >}}

This *should* have just worked. If not, there's a few possibilities:

* You just need to turn the interface on
* Your wired connection requires a login
  * This is rather uncommon, but might be the case at a University or other large network
* You plugged in the wire after you started the installer and so DHCP failed and while you could restart it, it's literally easier to just restart the computer. Do that.

{{< /tab >}}

{{< tab "I don't see a network interface" >}}

It is *possible* that you're running a weird network card that just outright is not supported at all, but this is unlikely. Instead, you're probably just running something that's pretty uncommon and isn't supported by default on the installation image.

This means we'll need to first figure out what networking driver you need, then see if it can run on Linux at all, and (if it can) we need to get it installed and working.

So, first things first, Assuming it's not a USB based network adapter, run `lspci -k | grep -i net`. This should tell you the manufacturer and specific part of you network interface. On my desktop where networking works outright, this returns,

`06:00.0 Ethernet controller: Intel Corporation I211 Gigabit Network Connection (rev 03)`

while on a little tablet of mine which doesn't work right away, I get:

`01:00.0 Network controller: Qualcomm Atheros QCA6174 802.11ac Wirelss Network Adapter (rev 32) `

So, I'll walk you through how I tackled that one:

The ArchWiki is actually (at the time of writing) out of date for Atheros Wi-Fi adapters, with this chip currently using the `ath10k_pci` driver. This was determined by running  `lspci -v`. While the  [Network Configuration: Troubleshooting Drivers and Firmware](https://wiki.archlinux.org/title/Network_configuration/Wireless#Troubleshooting_drivers_and_firmware)  page only mentions `ath5k` and `ath9k` drivers. Let this be a lesson: The Arch Wiki is great. It's also not perfect. So, now we need to get more information. Let's start by running `dmesg | grep -i ath`, this goes though the system diagnostic messages and searches for the letters "ath". The '-i' is to make it case-insensitive. This shows us, that yes, the `ath10k_pci` driver is trying to load, but failing to do so. The full output is this:

```
ath10k_pci 0000:01:00.0: board_file api 2 bmi_id N/A crc 32 318825bf
ath10k_pci 0000:01:00.0: htt-ver 3.60 wmi-op 4 htt-op 3 cal otp max-sta 32 raw 0 hwcrypto 1
ath: EEPROM regdomain: 0x5f
ath: EEPROM indicates we should expect a direct regpair map
ath: invalid regulator domain/country code 0x5f
ath: invalid EEPROM contents
ath10k_pci 0000:01:00.0: failed to initialize regulatory: -22
ath10k_pci 0000:01:00.0: could not register to mac80211 (-22)
```

Okay, so, that's really dense and technical. Let's break it down. I have no clue what the first few lines mean, but lines 3, 5, and 7 all seem to be complaining about something to do with a regulatory domain, which is also called a country code on line 5. From past experience, I know Wi-Fi has different regulations and capabilities depending on where you are in the world, and so you're expected to tell the OS what regulatory domain you're in (the US for me). I can set that with `# iw reg set US` and then reload the driver by running `rmmod ath10k_pci` and then loading it back up with `modprobe ath10k_pci`. And no dice. Okay, something's fishy still. What's about that regulatory code `0x5f`? What does that correspond to? Well, Googling, both [This link](http://web.mit.edu/freebsd/head/sys/dev/ath/ath_hal/ah_regdomain/ah_rd_regenum.h) and this one [This link](https://patchwork.kernel.org/project/linux-wireless/patch/20210915185611.6195-1-ebmajor.dev@gmail.com/) confirm that the regulatory domain is being set to `APL10_WORLD` which is a South Korean regulatory domain. 

{{< speech >}}

Given this is a Samsung laptop-ish-thing (Galaxy Tab Pro S 12") I'm trying to get up and running 🖕Samsung for shipping out a device which a hardware locked regulatory domain to something non standard.

{{< /speech >}}

The latter of those two links is from https://patchwork.kernel.org - a page for tracking Linux kernel changes/patches, and was last updated under a month ago at the time of writing. So, clearly I'm working with something a bit more bleeding-edge here. (Though the laptop is actually rather old, the driver is still bleeding) This means I can assume that support will be directly baked into Linux at some point, it's just not *yet*. 

Alright, so, failing that, I just googled the laptop name + Linux. Eventually, I wound up at [this GitHub repo](https://github.com/infernix/samsung_tabpro_s) with a folder of files for Wi-Fi, labeled as being for Linux 4.7 (Current arch installer is using 5.15) and a script for controlling the screen brightness. Okay, let's see what we can do with this.

In that folder is a board.bin and firmware-4.bin file. These seem to be actual device specific drivers, probably yoinked out of the Windows driver. So, we can loading these. Without Wi-Fi to load the file, we can either plug in a second USB stick and copy from it, or, just shut down and place them onto the installer drive from another computer. I loaded them up, and checked if the files were even different from those currently in `/lib/firmware/ath10k/QCA6174` and… the firmware-4.bin file was exactly the same. Still, the board.bin file was different. Tried swapping them out, still no dice.

Okay, what now? … Now we call it a day. This driver *will not* work on Linux without some serious work. Maybe it'll be working in a future version, but this should still be a lesson: Not everything is going to work on Linux. I tried as hard as I'm willing to before the number of hours put in just isn't worth it to me. So, what options do I have?

* I could just… not use this laptop. It's severely under powered with a CPU that only goes to like 1GHz and it's just not fun to use

  * Yes, I know this is a privileged option, but seriously, while this laptop is sleek and good looking, it runs like a potato. A cheap, used laptop from some tech recycling place will massively outperform this. 
  * Yes, I know this doesn't apply as well if you're actually on something like an expensive gaming laptop

* I could decide to always use a USB adapter- either a Wi-Fi or Ethernet adapter

  * This is a mild PITA, will probably provide worse performance, and eats a USB port

* If this Laptop were able to be opened up & the Wi-Fi card was removable I could try swapping out the Wi-Fi card for something better supported

  * Unfortunately, this one can't be opened
  * Unfortunately-er, a lot of laptops use vendor-locked Wi-Fi cards with weird pinout. Still, it's worth a Google to try.

**You may have better luck than I did,** it's entirely possible that by following the [Network Configuration: Troubleshooting Drivers and Firmware](https://wiki.archlinux.org/title/Network_configuration/Wireless#Troubleshooting_drivers_and_firmware) page on the Wiki you'll find the answer you need and get up and running quickly. I just wanted to set realistic expectations and show that even pretty experienced users some times throw in the towel.

Frankly, I also would have never purchased the laptop with this Wi-Fi card in it myself anyway - in part because of it's aforementioned lame CPU, but also because I search to see if hardware I want to buy supports Linux decently before I click the purchase button. If it doesn't, there's also a good chance it will also cease to get Windows updates in the future too - like this laptop did. Now it's basically a brick. Not getting Windows updates (including security updates) and unable to run Linux reasonably.

{{< /tab >}}

{{< /tabs >}}

---

Again, run `ping archlinux.ong` and if after a few seconds you see something like

`64 bytes from archlinux.org (░░.░░░.░░░.░░░): icmp_seq=░ ttl=░░ time=░░░ms`

Then you're good to move on.

> Press Ctrl+C to stop ping

While it may seem like an odd time to do so, now that you're connected to the internet, go ahead and get the time of your system fixed. This uses Network Time Protocol to get the time, which is why we had to do it *after* connecting to the internet.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Update the system clock

Use [timedatectl(1)](https://man.archlinux.org/man/timedatectl.1) to ensure the system clock is accurate:

```
# timedatectl set-ntp true
```

To check the service status, use `timedatectl status`.

{{< /quote >}}

With that done, we're onto the fun bit.

## The Part Where You can Really Fuck Up

<p style="font-size: 30px;text-align: center;">⬤⬤⬤⬤⬤⬤⬤◯◯◯</p>

<p class="tip">☠☠☠</br>
    Seriously, <b>backup your shit.</b> Last Warning.</br>☠☠☠ </p>

This is the part where we need to partition the disks. Remember before how I told you needed to make free space on your hard drive in the Windows Disk Management utility? This is where that comes into play.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Partition the disks

When recognized by the live system, disks are assigned to a [block device](https://wiki.archlinux.org/title/Block_device) such as `/dev/sda`, `/dev/nvme0n1` or `/dev/mmcblk0`. To identify these devices, use [lsblk](https://wiki.archlinux.org/title/Lsblk) or *fdisk*.

```
# fdisk -l
```

Results ending in `rom`, `loop` or `airoot` may be ignored.

The following [partitions](https://wiki.archlinux.org/title/Partition) are **required** for a chosen device:

- One partition for the [root directory](https://en.wikipedia.org/wiki/Root_directory) `/`.
- For booting in [UEFI](https://wiki.archlinux.org/title/UEFI) mode: an [EFI system partition](https://wiki.archlinux.org/title/EFI_system_partition).

If you want to create any stacked block devices for [LVM](https://wiki.archlinux.org/title/LVM), [system encryption](https://wiki.archlinux.org/title/Dm-crypt) or [RAID](https://wiki.archlinux.org/title/RAID), do it now.

{{< /quote >}}

{{< hint info >}}

I've written this assuming you're installing alongside Windows. If it's a mac, it should be more-or-less the same, but mentally substitute NTFS for HFS+ - I'll explain what these are in a second.

{{< /hint >}}

Okay, first things first, `fdisk -l` is going to give you a ton of information that you probably don't know how to read, so let's just use `lsblk `, and while it's a lot to type, running

`lsblk --output NAME,MODEL,TRAN,SIZE,FSTYPE,MOUNTPOINT` will give us a lot of useful info in a digestable format. On a typical system with one or maybe two disks, you should be looking for the drive with multiple partitions where one of them is a small vfat partition, one is a large NTFS partition, and there's a big unformulated block that you free'd up earlier. There might also be an extra, probably NTFS, recovery partition for Windows.

Now, that you have the output of this command for yourself as reference, let's talk about what's going on here:

### A tangent about File Systems & Partition Table Schemes

Okay, here we have to go off into the weeds to understand something real quick - partition tables and file systems.

To begin with, let's look at what good ol' Wikipedia has to say:

{{< quote "[Wikipedia - \"Partition Table\"](https://en.wikipedia.org/wiki/Disk_partitioning#Partition_table)" >}}

A partition table is a table maintained on a disk by the operating system that outlines and describes the partitions on that disk. The terms partition table and partition map are similar terms and can be used interchangeably. The term is most commonly associated with the MBR partition table of a Master Boot Record (MBR) in PCs, but it may be used generically to refer to other formats that divide a disk drive into partitions, such as: GUID Partition Table (GPT), Apple partition map (APM), or BSD disklabel.

{{< /quote >}}

Well, uh, that was a lot of words that didn't say much, we have to go deeper. MBR? That sounds familiar {{< smalltext >}}click.{{< /smalltext >}}

{{< quote "[Wikipedia - \"Master Boot Record\"](https://en.wikipedia.org/wiki/Master_boot_record)" >}}

A master boot record (MBR) is a special type of boot sector at the very beginning of partitioned computer mass storage devices like fixed disks or removable drives intended for use with IBM PC-compatible systems and beyond.

[…]

The MBR holds the information on how the disc's sectors are divided into partitions, each partition notionally containing a file system. The MBR also contains executable code to function as a loader for the installed operating system—usually by passing control over to the loader's second stage, or in conjunction with each partition's volume boot record (VBR). This MBR code is usually referred to as a boot loader.

[…]

The organization of the partition table in the MBR limits the maximum addressable storage space of a partitioned disk to 2 TiB

[…]

Therefore, the MBR-based partitioning scheme is in the process of being superseded by the GUID Partition Table (GPT) scheme in new computers.

{{< /quote >}}

Okay, so, the **Partition Table** is basically an index of partitions - divided sections of your disk - and what file system each one uses. Old computers used to use a MBR partition table, new computers use GPT.

What about these *File Systems* then, what's that? Let's ask the all knowing Wikipedia again:

{{< quote "[Wikipedia - \"File System\"](https://en.wikipedia.org/wiki/File_system)" >}}

In computing, a file system or filesystem (often abbreviated to fs) is a method and data structure that the operating system uses to control how data is stored and retrieved. Without a file system, data placed in a storage medium would be one large body of data with no way to tell where one piece of data stopped and the next began, or where any piece of data was located when it was time to retrieve it. </br></br>By separating the data into pieces and giving each piece a name, the data are easily isolated and identified. Taking its name from the way a paper-based data management system is named, each group of data is called a "file". The structure and logic rules used to manage the groups of data and their names is called a "file system."

{{< /quote >}}

Wow, uh, that was strangely readable for tech stuff, right? There is one bit of context missing here though - there's more than one way to sort your files - similarly, different file systems have been made over time.

The two you're likely familiar with are NTFS and FAT32. NTFS is the one Windows uses by default for your operating system and storage drives, FAT32 is what most flash drives use. You may have ran into limitations of FAT32 before, most notably that you can't store a file larger than 4GB - making moving a large video or ZIP archive an issue.

But, why? If NTFS doesn't have this problem, why would anything use NTFS? Moreover, what does Apple use HFS+ and Linux use EXT4 or BTRFS (commonly, there's many others).

Well, the answer is complicated. Some of it is politics with patents, some of it is backwards compatibility, some of it is for speed vs stability, some of it for supporting different physical media (spinning platters vs solid state vs tape)

While there's literally hundreds of file systems in existence, only some are used enough to be worth knowing about. Here's the extreme TLDR of each: 
* **NTFS** -The only decent file system that Windows supports. Stable, does the job. Annoying to mount on Apple devices, but can accessed on most systems.
* **FAT32, exFAT** - Old, shit, but it works on everything easily. The default for SD cards and flash drives.
* **EXT3, EXT4** - Common on Linux. Stable, does the job. Very annoying to mount on Windows.
* **HFS, HFS+, APFS** - 🍎, Think Different.
* **ZFS** - Need to store an ever living fuck load of data across a boat load of drives? ZFS will do that, make sure some drives can fail without loosing anything, let you speed it up by using an SSD or RAM for cache, and do some crazy voodoo to ensure data never gets corrupted + snapshotting (file history) + automaticly using spare disks if one fails + per-user limits… Awesome, right? Yep. And also a true pain in the ass to setup, a RAM hog, etc. Basically, ZFS is *perfect* for a file server and not worth the pain & RAM use at all in a normal setup. 
* **BTRFS** - Somewhere between ZFS and EXT4. A sane option for most personal Linux setups. Has had broken RAID 5 for a long time, don't use that and you're fine.
* **F2FS** - I have a NEED, A NEED FOR SPEED … and data corruption… Shit. For SSDs, the new kid on the block, and ready to eat your data if you have to hard shutdown. Only use this if you know what you're doing. But, it do zoom.

For setting up your system to dual boot Linux and Windows, you'll need to use NTFS to read your existing data, FAT for the boot partition (more on that soon), and I'll be showing setting up the Linux root using BTRFS, but using EXT4 is also a fine choice.

There are a few weird not-true-filesystems you should be aware of too:

* **CIFS/SAMBA** - Used to mount network shared storarge
* **SWAP** - Swap isn't actuallllly a file system, it's actually more like explicitly saying you don't want a filesystem here.  This is used for storage when you're out of RAM or when something in RAM hasn't been used in while it gets swapped to, well, swap. You can't directly put files here.
* **TMPFS** - Almost the inverse of Swap, TMPFS is a special file system for storing data directly in RAM. This makes it stupidly fast. It's also *volatile*, data written to TMPFS will be lost when your computer reboots.

You may want to dive into the [Arch Wiki page on File systems](https://wiki.archlinux.org/title/File_systems).

#### An aside about size

If you bought a computer and were told it has a 1TB SSD, it does, but your computer may tell you it's only 931GB. What gives!?

Well, the problem is we have two ways of specifying size, **Mega**bytes and **Mebi**bytes, and often the "wrong" term is used. I say "wrong" as it's very rare anybody uses the **Mebi** version at all, and instead **Mega** is used for both. But, okay, what's the difference?

In SI units, we have prefixes that you should known killo=1000, mega=100000, Gig=1000000000, etc. So a **Kilo**byte should be 1000 bytes, right? Well, by definition yes, but often people will mean **Kibi**bytes where it's actually 1024 Bytes. Why 1024?

Computers work in base-2 (binary) and so if we do `1 << 10`, an operation that literally means take `1` (in binary, which is also 1 in decimal) and move it over 10 places, to put 10 zeros behind it, we get the number, in binary, `10000000000`, now, to read a binary number you start at the right most digit and that's your 1's place (just like decimal) but then the 2nd digit is your 2's, the 3rd your 4's, and so on. Finally, you'll hit the 11'th digit which is your 1024's place. so this number, with only the 11th digit being 1, is equal to 1024 in decimal.

Basically, 1024 is a much more convenient number to work with for the computer than 1000, which in binary would be  `1111101000`.

Finally, we can work our way up and the problem get's worse. A megabyte is a thousand killobytes, but a mebibyte is 1024 kibibytes. So now the difference is 1000\*1000 vs 1024\*1024, then repeat up to Terabyte. That's why your numbers may not match.

Fortunately, this rarely matters as if you're doing something where you have to think about the difference it'll usually be with other numbers that set your constraints and the difference won't matter. For example, we're about to format your drive for Linux, but you'll be constrained by the remaining size for each partition and for the few small ones we need to make being off by the difference of the binary or decimal version just won't matter. Still, good to know.

### FUSE, Encryption, LVM, RAID, WTFFFF‽?

#### FUSE

Okay, I swear we'll get to the actual formatting soon, but there are a few more things you need to know about first.

First, FUSE, 

{{< quote "[Archwiki - FUSE](https://wiki.archlinux.org/title/FUSE)" >}}

[Filesystem in Userspace](https://en.wikipedia.org/wiki/Filesystem_in_Userspace) (FUSE) is a mechanism for Unix-like operating systems that lets non-privileged users create their own file systems without editing kernel code. This is achieved by running file system code in *user space*, while the FUSE kernel module provides only a "bridge" to the actual kernel interfaces.

{{< /quote >}}

You're eyes probably just glazed over reading that. I don't blame you. Basically, Linux will normally assume only the root (admin) user can create a files system as doing so is something that typically happens at the kernel (operating system core) level. FUSE, well, fuses fyle systems on to kernel interfaces that are already there so that a non-admin user can mount things.

Why is this helpful?

Well, the most obvious is flash drives. It'd sort suck if you had to provide a password and do low level management every time you want to read a flash drive. FUSE let's you not do that.

But that's not all. With extra software on top,

* It'll let you mount a .iso so you can peruse it's contents without actually writing it to flashdrive/CD.
* It'll let you mount network shares via SSH (the normal tool used to remotely manage Linux devices)
* It'll let you mount NTFS file systems with an older, more stable, and faster implementation of the file system driver
* It'll let you mount your GoggleDrive as a local folder for easier use

Among other things.

There's a catch to all of this though. FUSE is generally a bit slow. The NTFS situation as mentioned above is an outlier here, but there are some negatives to its convenience. 

#### Encryption

I'm sure you know what Encryption is broadly, and generally that it's a good thing for security. But I want to point out a few things before we jump on the "Let's encrypt all the things!" train.

* Encryption makes your computer do a bit more work on every read and write, making it a hair slower and use more battery.

* Encryption makes recovering your system if something has gone wrong more difficult

* Encryption can be a pain to setup

* Encryption only protects your files when the computer is off *

  {{< smalltext >}}\*  -ish. It is possible to setup encryption that locks most of your files if the computer goes to sleep or locks after you've been away for a while, but this doesn't lock *everything*.{{< /smalltext >}}

It's up to you to decide if it's worth it to you. If you do want full system encryption, I do recommend making an extra, unencrypted FAT32 partition with a singe .txt file with details to contact you if you loose your computer - or, better, put an "IF FOUND RETURN TO" sticker on it.

I'll lead you though setting up home directory encryption on this page, as I think it's a happy middle ground.

#### LVM

I swear we'll be getting back to the install for real in a second, the last thing related to drive formatting you should know about is **L**ogical **V**olume **M**anagement. To Wikipedia we go!

{{< quote "source" >}}

LVM is used for the following purposes:

* Creating single logical volumes of multiple physical volumes or entire hard disks (somewhat similar to RAID 0, but more similar to JBOD), allowing for dynamic volume resizing.
* Managing large hard disk farms by allowing disks to be added and replaced without downtime or service disruption, in combination with hot swapping.
* On small systems (like a desktop), instead of having to estimate at installation time how big a partition might need to be, LVM allows filesystems to be easily resized as needed.
* Performing consistent backups by taking snapshots of the logical volumes.
* Encrypting multiple physical partitions with one password.

LVM can be considered as a thin software layer on top of the hard disks and partitions, which creates an abstraction of continuity and ease-of-use for managing hard drive replacement, repartitioning and backup.

{{< /quote >}}

Plus, not on that page, it can be used to cache frequently used content on a faster disk. This is awesome for making an old HDD feel snappy on a system with a big HDD(s) and a small SSD.

So, basically, it's a layer in between the physical device (SSD, HDD, whatever) and the file systems to make it so you can resize and mess with them while the system is still running, use encryption in a sane way, and easily add or remove drives.

There is a big ol' fuck you here: Using LVM makes it more annoying to access the Linux files from Windows. So while in nearly any other situation I'd say you should use it, if you're setting up dual boot, don't. Since that's the setup I'm assuming you're going for here, I will not be showing LVM setup on this page.

If you're not setting up a dual boot system and you're up to the challenge, these two pages are very nice:

[Arch Wiki - LVM](https://wiki.archlinux.org/title/LVM) & [Arch Wiki - Installing on LVM](https://wiki.archlinux.org/title/Install_Arch_Linux_on_LVM)

### Be very, very, very sure you know the disk/partition you're about to nuke

Okay, so, we from here on this guide has a lot of commands that are not exactly what you should type, as the exact command will vary depending on your hardware. The most important variable here is the disk you're planning to install to. If you get this wrong, you'll eat Windows. Just be careful and you'll be okay.

### Doing the Actual Partitioning & mkfs

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

Use [fdisk](https://wiki.archlinux.org/title/Fdisk) or [parted](https://wiki.archlinux.org/title/Parted) to modify partition tables. For example:

```
# fdisk /dev/the_disk_to_be_partitioned
```

{{< hint info >}}

**Note:**

- If the disk does not show up, [make sure the disk controller is not in RAID mode](https://wiki.archlinux.org/title/Partitioning#Drives_are_not_visible_when_firmware_RAID_is_enabled).
- If the disk from which you want to boot [already has an EFI system partition](https://wiki.archlinux.org/title/EFI_system_partition#Check_for_an_existing_partition), do not create another one, but use the existing partition instead.
- [Swap](https://wiki.archlinux.org/title/Swap) space can be set on a [swap file](https://wiki.archlinux.org/title/Swap_file) for file systems supporting it.

{{< /hint >}}

---

#### Example layouts

**UEFI with** [GPT](https://wiki.archlinux.org/title/GPT):

| Mount point  |           Partition           | [Partition type](https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_type_GUIDs) |     Suggested size      |
| :----------: | :---------------------------: | :----------------------------------------------------------: | :---------------------: |
| `/mnt/boot`1 | `/dev/*efi_system_partition*` | [EFI system partition](https://wiki.archlinux.org/title/EFI_system_partition) |    At least 300 MiB     |
|   `[SWAP]`   |    `/dev/*swap_partition*`    |                          Linux swap                          |    More than 512 MiB    |
|    `/mnt`    |    `/dev/*root_partition*`    |                    Linux x86-64 root (/)                     | Remainder of the device |

1. [Other mount points](https://wiki.archlinux.org/title/EFI_system_partition#Typical_mount_points), such as `/mnt/efi`, are possible, provided that the used boot loader is capable of loading the kernel and initramfs images from the root volume. See the warning in [Arch boot process#Boot loader](https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader).

**BIOS with** [MBR](https://wiki.archlinux.org/title/MBR):

| Mount point |        Partition        | [Partition type](https://en.wikipedia.org/wiki/Partition_type) |     Suggested size      |
| :---------: | :---------------------: | :----------------------------------------------------------: | :---------------------: |
|  `[SWAP]`   | `/dev/*swap_partition*` |                          Linux swap                          |    More than 512 MiB    |
|   `/mnt`    | `/dev/*root_partition*` |                            Linux                             | Remainder of the device |

See also [Partitioning#Example layouts](https://wiki.archlinux.org/title/Partitioning#Example_layouts).

{{< /quote >}}

Okay, what this is saying is that when we got to make our partitions - assuming we're on a not-ancient computer - We'll need 3 partitions. One for booting, one for swap, and one for everything else. This is where things start to get weird in this guide, as, if you're dual booting with Windows, we can commandeer the Windows EFI system partition (the boot partition) to make our lives easier. First though, we need to check we can actually do that.

Above, what probably feels like forever ago with all this reading, you should have ran 

`lsblk --output NAME,MODEL,TRAN,SIZE,FSTYPE,MOUNTPOINT`

and you should get output at least sorta-kinda similar to this:

```
NAME        MODEL                           TRAN     SIZE FSTYPE   MOUNTPOINT
loop0                                              702.1M squashfs /run/archiso/airootfs
sda         Cruzer Blade                    usb     29.3G iso9660       
├─sda1                                               801M iso9960
└─sda2                                                15M vfat
nvme1n1     CT4000P3SSD8                    nvme     3.6T        
├─nvme1n1p1                                 nvme     300M vfat
├─nvme1n1p2                                 nvme     128M        
├─nvme1n1p3                                 nvme     3.6T ntfs
└─nvme1n1p4                                 nvme     714M ntfs   
nvme0n1     SPCC M.2 PCIe SSD               nvme   953.9G        
```

Now, there's bound to be some differences. Here, I have a separate, unused disk to install Linux onto - `nvme0n1` down there with no file system, no partitions, and nearly a whole terabyte free to use. If you instead had to shrink Windows to make room for the install, you'll probably have something closer to this:

```
NAME        MODEL                           TRAN     SIZE FSTYPE   MOUNTPOINT
loop0                                              702.1M squashfs /run/archiso/airootfs
sda         Cruzer Blade                    usb     29.3G iso9660       
├─sda1                                               801M iso9960
└─sda2                                                15M vfat
nvme1n1     CT4000P3SSD8                    nvme     3.6T        
├─nvme0n1p1                                 nvme     300M vfat
├─nvme0n1p2                                 nvme     128M        
├─nvme0n1p3                                 nvme     1.6T ntfs
├─nvme0n1p4                                 nvme     714M ntfs   
└─nvme0n1p5                                 nvme      2TB 
```

Where instead of having a second disk, you have a large (hopefully 128GB+) partition with no file system on it. Either is fine. Regardless, what you need to note is the name of disk or partition. In the first example that's `nvme0n1`, as the entire disk is free for use to use as windows is on an entirely different drive. In the second example it's `nvme0n1p5` as we're going to be splitting up and using that partition, but you'll also still need to note the drive, which in that case is also `nvme0n1`.

In either case, we can avoid the need to make a new boot partition because that `vfat` partition on the same drive that has the NTFS partitions is a boot partition. It's the one Windows uses and the one we're going to steal.

{{< tip >}}

My examples here all use `nvmeXnX` but your drives may be `sdX` which is fine. It won't matter.

{{< /tip >}} 

So, let's do it. In both examples above - the made-space and fresh drive - the drive name we're targeting is `/dev/nvme0n1` so, we can run `cfdisk /dev/nvme0n1` . That `c` on the start of the command the guide recommends will give us a nicer interface.

(note, this is a screenshot of a drive with Windows without free space, as I can't easily screenshot from a system mid-install)

![](/eng/cfdisk.png)

What you should do is first make 10GB SWAP partition. To do this, arrow-key down to the big block of free space on your drive (or, if it's a fresh disk, it's the only thing there) and use the left and right arrows to highlight "new" at the bottom. Press enter. It'll ask you for a size. It should default to all the remaining size. We don't want that. Backspace it and write `10G` for 10 gigabytes. This is a good amount of swap on most systems.

Alright, that should have made the partition, but it'll say "Linux Filesystem" on the right. We want this to be swap. With it highlighted, go over to "Type" and press enter. That'll bring up a big dialog, select "Linux Swap".

Now, arrow down to your remaining free space and hit New. Leave it with all your remaining space. Press enter. This new partition should say Linux Filesystem, it should be at least 100GB in size, and conveniently, if we hover over it should say at the bottom `Filesystem: BTRFS` - it's making a BTRFS file system on the partition for us. Sweet.

Okay, that's done, we can now use the arrow keys to select "Write" and press enter. It'll warn you this is where shit can hit the fan. Type "yes" to say you want to do it, to which it should respond with "The partition table has been altered."

Congrats, you made the partitions and formatted the drive. Easy, right? arrow over to quit, and press the up arrow a few times until the previously entered `lsblk --output NAME,MODEL,TRAN,SIZE,FSTYPE,MOUNTPOINT` command shows up, and press enter. You should now see your new partitions - one with the FSTYPE `btrfs` and one `swap`. Hell yeah!

{{< tip >}}

At the time of writing, there appears to be a bug with how `cfdisk` makes the btrfs partition. To remedy this, look for the btrfs partition name in the above output and run </br>`mkfs.btrfs -f /dev/[name of partition]` for example, `mkfs.btrfs -f /dev/nvme0n1p2`.

{{< /tip >}}

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Format the partitions

Once the partitions have been created, each newly created partition must be formatted with an appropriate [file system](https://wiki.archlinux.org/title/File_system). See [File systems#Create a file system](https://wiki.archlinux.org/title/File_systems#Create_a_file_system) for details.

For example, to create an Ext4 file system on `/dev/*root_partition*`, run:

```
# mkfs.ext4 /dev/root_partition
```

If you created a partition for [swap](https://wiki.archlinux.org/title/Swap), initialize it with [mkswap(8)](https://man.archlinux.org/man/mkswap.8):

```
# mkswap /dev/swap_partition
```

{{< hint info >}}

**Note:** For stacked block devices replace `/dev/**_partition*` with the appropriate block device path.

{{< /hint >}}

If you created an EFI system partition, [format it](https://wiki.archlinux.org/title/EFI_system_partition#Format_the_partition) to FAT32 using [mkfs.fat(8)](https://man.archlinux.org/man/mkfs.fat.8).

{{< hint warning >}}

**Warning:** Only format the EFI system partition if you created it during the partitioning step. If there already was an EFI system partition on disk beforehand, reformatting it can destroy the boot loaders of other installed operating systems.

{{< /hint >}}

```
# mkfs.fat -F 32 /dev/efi_system_partition
```

{{< /quote >}}

AYYYY, we already did this. We already have our swap and BTRFS partitions. (We're using BTRFS, but the above shows using EXT4 for the same use - it doesn't matter much). That big warning in yellow is exactly the step we're **not doing** because we're using Windows EFI partition.

### Mounting

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Mount the file systems

[Mount](https://wiki.archlinux.org/title/Mount) the root volume to `/mnt`. For example, if the root volume is `/dev/*root_partition*`:

```
# mount /dev/root_partition /mnt
```

Create any remaining mount points (such as `/mnt/efi`) and mount their corresponding volumes.

**Tip:** Run [mount(8)](https://man.archlinux.org/man/mount.8) with the `--mkdir` option to create the specified mount point. Alternatively, create it using [mkdir(1)](https://man.archlinux.org/man/mkdir.1) beforehand.

For UEFI systems, mount the EFI system partition:

```
# mount --mkdir /dev/efi_system_partition /mnt/boot
```

If you created a [swap](https://wiki.archlinux.org/title/Swap) volume, enable it with [swapon(8)](https://man.archlinux.org/man/swapon.8):

```
# swapon /dev/swap_partition
```

[genfstab(8)](https://man.archlinux.org/man/genfstab.8) will later detect mounted file systems and swap space.

{{< /quote >}}

Okay, when we ran `lsblk` to confirm we have our partitions, we can see what the partition name is. For me, on the fresh disk, this gave me

```
NAME        MODEL                           TRAN     SIZE FSTYPE   MOUNTPOINT
loop0                                              702.1M squashfs /run/archiso/airootfs
sda         Cruzer Blade                    usb     29.3G iso9660       
├─sda1                                               801M iso9960
└─sda2                                                15M vfat
nvme1n1     CT4000P3SSD8                    nvme     3.6T        
├─nvme1n1p1                                 nvme     300M vfat
├─nvme1n1p2                                 nvme     128M        
├─nvme1n1p3                                 nvme     3.6T ntfs
└─nvme1n1p4                                 nvme     714M ntfs   
nvme0n1     SPCC M.2 PCIe SSD               nvme   953.9G   
├─nvme1n1p1                                 nvme     10GB swap
└─nvme1n1p2                                 nvme   943.9G btrfs  
```

So to mount my btrfs partition I'm going to run `mount /dev/nvme1n1p2 /mnt`. This will make the storage we made accessible at the folder `/mnt`. Finally. We could actually go store a file there now if we wanted. We don't want to, but we could.

Okay, now we need to mount the boot partition, the place we're going to store the information Linux needs to start itself. Like I said, we're commandeering the Windows spot for this. Fortunately both can live along side eachother fine. You're looking for the moderately sized `vfat` partition on the same drive as some `NTFS` partitions. Here, that's `nvme1n1p1`.

We want to mount this inside of the existing `/mnt`  This may seem weird, but it's like saying if you go to this folder inside of this file system, you're *actually* going to a different file system all together. This is really common in Linux and admittedly a bit weird to think about.

Anyway, we need to put this boot partition at `/mnt/boot`, so with this example I'll run `mount --mkdir /dev/nvme1n1p1 /mnt/boot`. The `--mkdir` part of that makes the folder named "boot" on the btrfs partition to mount this in. If that doesn't make sense don't worry about it to much.

Finally, we'll enable our swap, you know the drill. Find the partition the swap is on - above it's `nvme1n1p1` so I'll run `swapon /dev/nvme1n1p1`.

## Congrats, Now you can actually install Arch.

<p style="font-size: 30px;text-align: center;">⬤⬤⬤⬤⬤⬤⬤⬤◯◯</p>

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Select the mirrors

Packages to be installed must be downloaded from [mirror servers](https://wiki.archlinux.org/title/Mirrors), which are defined in `/etc/pacman.d/mirrorlist`. On the live system, after connecting to the internet, [reflector](https://wiki.archlinux.org/title/Reflector) updates the mirror list by choosing 20 most recently synchronized HTTPS mirrors and sorting them by download rate.

The higher a mirror is placed in the list, the more priority it is given when downloading a package. You may want to inspect the file to see if it is satisfactory. If it is not, [edit](https://wiki.archlinux.org/title/Textedit) the file accordingly, and move the geographically closest mirrors to the top of the list, although other criteria should be taken into account.

This file will later be copied to the new system by *pacstrap*, so it is worth getting right.

{{< /quote >}}

Technically you should check this and make sure it's sane. In reality, if you have internet connection - which we made sure you did above - it should be. Doing this manually is a pain, so I'll just assume it's fine.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Install essential packages

Use the [pacstrap(8)](https://man.archlinux.org/man/pacstrap.8) script to install the [base](https://archlinux.org/packages/?name=base) package, Linux [kernel](https://wiki.archlinux.org/title/Kernel) and firmware for common hardware:

```
# pacstrap /mnt base linux linux-firmware
```

{{< hint info >}}

**Tip:**

- You can substitute [linux](https://archlinux.org/packages/?name=linux) for a [kernel](https://wiki.archlinux.org/title/Kernel) package of your choice, or you could omit it entirely when installing in a [container](https://en.wikipedia.org/wiki/Container_(virtualization)).
- You could omit the installation of the firmware package when installing in a virtual machine or container.

{{< /hint >}}

The [base](https://archlinux.org/packages/?name=base) package does not include all tools from the live installation, so installing other packages may be necessary for a fully functional base system. In particular, consider installing:

- userspace utilities for the management of [file systems](https://wiki.archlinux.org/title/File_systems) that will be used on the system,
- utilities for accessing [RAID](https://wiki.archlinux.org/title/RAID) or [LVM](https://wiki.archlinux.org/title/LVM) partitions,
- specific firmware for other devices not included in [linux-firmware](https://archlinux.org/packages/?name=linux-firmware) (e.g. [sof-firmware](https://archlinux.org/packages/?name=sof-firmware) for [sound cards](https://wiki.archlinux.org/title/Advanced_Linux_Sound_Architecture#ALSA_firmware)),
- software necessary for [networking ](https://wiki.archlinux.org/title/Networking)(e.g. a network manager or DHCP client),
- a [text editor](https://wiki.archlinux.org/title/Text_editor),
- packages for accessing documentation in [man](https://wiki.archlinux.org/title/Man) and [info](https://wiki.archlinux.org/title/Info) pages: [man-db](https://archlinux.org/packages/?name=man-db), [man-pages](https://archlinux.org/packages/?name=man-pages) and [texinfo](https://archlinux.org/packages/?name=texinfo).

To [install](https://wiki.archlinux.org/title/Install) other packages or package groups, append the names to the *pacstrap* command above (space separated) or use [pacman](https://wiki.archlinux.org/title/Pacman) while [chrooted into the new system](https://wiki.archlinux.org/title/Installation_guide#Chroot). For comparison, packages available in the live system can be found in [packages.x86_64](https://gitlab.archlinux.org/archlinux/archiso/-/blob/master/configs/releng/packages.x86_64).

{{< /quote >}}

FINALLY. This is the fun command. It's called `pacstrap` because it uses `pacman` (the system package-manager) to pull the system up by it's bootstraps - We're finally getting this thing rockin`.

So, lets do it. run `pacstrap /mnt base base-devel linux linux-firmware linux-headers`. That'll take a hot minute and fill you screen with many lines of text. When it's done you'll have a very minimal (read: Mostly useless) Linux install done. Unfortunately, you can't even boot into it yet as you haven't even installed a boot loader.

## Getting The Basics Configured

<p style="font-size: 30px;text-align: center;">⬤⬤⬤⬤⬤⬤⬤⬤⬤◯</p>

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Fstab

Generate an [fstab](https://wiki.archlinux.org/title/Fstab) file (use `-U` or `-L` to define by [UUID](https://wiki.archlinux.org/title/UUID) or labels, respectively):

```
# genfstab -U /mnt >> /mnt/etc/fstab
```

Check the resulting `/mnt/etc/fstab` file, and [edit](https://wiki.archlinux.org/title/Textedit) it in case of errors.

{{< /quote >}}

Do the thing ↑. We'll need to edit it later, but for now that command alone should do the trick.

In short, this is generating (gen) your filesystem (fs) tabulation (tab) file which is what Linux looks for on startup to figure out what filesystems to load, where they're at, and how to load them.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Chroot

[Change root](https://wiki.archlinux.org/title/Change_root) into the new system:

```
# arch-chroot /mnt
```

{{< /quote >}}

Run that command ↑.

What this is doing is changing our root (chroot = change root) to our new install. This means when we edit files from here on out we're working on the system we'll actually be using instead of the one that booted off the flash drive.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Time zone

Set the [time zone](https://wiki.archlinux.org/title/Time_zone):

```
# ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
```

Run [hwclock(8)](https://man.archlinux.org/man/hwclock.8) to generate `/etc/adjtime`:

```
# hwclock --systohc
```

This command assumes the hardware clock is set to [UTC](https://en.wikipedia.org/wiki/UTC). See [System time#Time standard](https://wiki.archlinux.org/title/System_time#Time_standard) for details.

{{< /quote >}}

To see your options you can type `ln -sf /usr/share/zoneinfo/` and press tab. Type the region and the slash, then press tab again. Obviously the city doesn't have to be where you live, it just has to be in the same time zone.

The second command synchronizes the computer's hardware clock.

This does have an annoying side effect. When you boot back to Windows, the time will be wrong. You can fix that by next time your in windows, opening an admin command prompt and running

`reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f`

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Localization

[Edit](https://wiki.archlinux.org/title/Textedit) `/etc/locale.gen` and uncomment `en_US.UTF-8 UTF-8` and other needed [locales](https://wiki.archlinux.org/title/Locale). Generate the locales by running:

```
# locale-gen
```

[Create](https://wiki.archlinux.org/title/Create) the [locale.conf(5)](https://man.archlinux.org/man/locale.conf.5) file, and [set the LANG variable](https://wiki.archlinux.org/title/Locale#Setting_the_system_locale) accordingly:

**/etc/locale.conf:**

```
LANG=en_US.UTF-8
```

If you [set the console keyboard layout](https://wiki.archlinux.org/title/Installation_guide#Set_the_console_keyboard_layout), make the changes persistent in [vconsole.conf(5)](https://man.archlinux.org/man/vconsole.conf.5):

**/etc/vconsole.conf:**

```
KEYMAP=de-latin1
```

{{< /quote >}}

Ironically, the `edit` part of this is the awkward part as you don't actually have a text editor yet. So, lets go install one.

Because your system has just been installed, we know it's list of packages that are available is up to date, so we can run `pacman -S nano` to **-S**ynchonize the `nano` package to our system using `pacman`. `nano` is the name of a basic, terminal-user-interface (TUI) text editor. You'll be asked if you want to install it. Press 'y' and 'enter'.

Now, we can edit that file. Run `nano /etc/locale.gen`. For pretty much any of my readers your LANG should be `en_US.UTF-8` so scroll down in the file that opened with your arrow keys until you find that and then remove the `#` before it. Then, to save the change, do Ctrl+o (the `^` character in the usage guide at the bottom means Ctrl). Then do Ctrl+x to exit.

Then make the /etc/locale.conf file, to do this run `nano /etc/locale.conf` and fill it with what you need, `LANG=en_US.UTF-8` as in the example above is probably applicable to most readers. Save it and exit nano again.

Finally, run `locale-gen`. 

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Network configuration

[Create](https://wiki.archlinux.org/title/Create) the [hostname](https://wiki.archlinux.org/title/Hostname) file:

**/etc/hostname:**

```
myhostname
```

Complete the [network configuration](https://wiki.archlinux.org/title/Network_configuration) for the newly installed environment. That may include installing suitable [network management](https://wiki.archlinux.org/title/Network_management) software.

{{< /quote >}}

Okay, so, right now you have access to the network in your chroot because the networking as setup from the flash-drive's live system is still active, but if were to reboot (and you had a bootloader, which you don't yet) you wouldn't have networking because you have no networking stack setup to provide it!

Let's fix that.

First, you should do what the guide says and set your host name. This is the name other computers on the network can use to identify your computer. You could make it say "bobs-laptop" but you can also have fun and make it more-or-less whatever you want. Don't use spaces or weird characters though.

Like before, you just need to `nano /etc/hostname`. Type the name you want. Save. Close.

Okay, now we need to actually set up the networking software. I recommend using [NetworkManager](https://wiki.archlinux.org/title/NetworkManager). We can install that with `pacman -S networkmanager` 

We'll set it up in full later.

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Root password

Set the root [password](https://wiki.archlinux.org/title/Password):

```
# passwd
```

{{< /quote >}}

This is effectively the admin password. Do not forget this, or you're pretty much fucked.

While we're at it, let's set up the very start of a user account, as using root all the time is very unsafe. To do so run:

```bash
useradd -m -G wheel mycrappyusername
```

followed by,

```bash
passwd mycrappyusername
```

(I recommend using the same password you used for root)

Now, we need to make it easy to use your account as an admin account via the `sudo` command (**s**uper **u**ser **do**).

run

```bash
EDITOR=nano visudo
```

then find the line that says

```bash
# %wheel ALL=(ALL) ALL
```

and remove the '#'

As an explanation, the '#' is turning that line in that file into a comment. In programming it's common practice to use comments to disable sections of code so say we had a program:

```python
for i in range(5)
    #print(i)
    print(i/2)
```

the `#` before `print(i)` is preventing it from actually executing so the output of this would be {1/2,1,3/2,2,5/2} instead of {1,1/2,2,1,3,3/2,4,2,5/2,5}

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Boot loader

Choose and install a Linux-capable [boot loader](https://wiki.archlinux.org/title/Boot_loader). If you have an Intel or AMD CPU, enable [microcode](https://wiki.archlinux.org/title/Microcode) updates in addition.

{{< /quote >}}

This gets to be all kinds of fun, because this is where some computers just say "Nah, fuck you." And you'll have to either debug from hell to figure out why something isn't working or you'll have to try another option.

If you're computer is UEFI (so, not ancient) [systemd-boot](https://wiki.archlinux.org/title/Systemd-boot) has historically work quite well for me, but because I want to be 100% sure if you're following this guide that your computer will actually work, I'm going to reccomend the ol' reliable: [Grub](https://wiki.archlinux.org/title/GRUB).

To do so, first actually install the packages `pacman -S grub efibootmgr os-prober` 

We need to set grub to detect the Windows install. `nano /etc/default/grub` and remove the `#` on the line with `GRUB_DISABLE_OS_PROBER=false`

then actually install grub with 

`grub-install --efi-directory=/boot --bootloader-id=GRUB`

In it's output it should say `os-prober will be executed…` somewhere.

## Finally Removing The Flash Drive

<p style="font-size: 30px;text-align: center;">⬤⬤⬤⬤⬤⬤⬤⬤⬤⬤</p>

{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Reboot

Exit the chroot environment by typing `exit` or pressing `Ctrl+d`.

Optionally manually unmount all the partitions with `umount -R /mnt`: this allows noticing any "busy" partitions, and finding the cause with [fuser(1)](https://man.archlinux.org/man/fuser.1).

Finally, restart the machine by typing `reboot`: any partitions still mounted will be automatically unmounted by *systemd*. Remember to remove the installation medium and then login into the new system with the root account.

{{< /quote >}}

[TODO] make sure the UEFI loads the new bootloader

When you boot into the new system it will ask you for a username and password. The username is and password is whatever you set before. When you type the password it won't look like you're entering anything, don't worry, it's still registering the input. Just type it and press enter.

Now, we can load up networking. Run `systemctl enable NetworkManager` and `systemctl start NetworkManager`. Enabling makes it start up on each boot, starting it starts it now for this boot. You won't need to run these again. Now, we can actually configure the network - if you're wired in, it should just work, but if you're on WiFi just run `nmuti`  → "Activate a connection" → find your network, enter your password. Keep pressing escape to get back to the terminal when done.

Run `ping archlinux.org` and if after a few seconds you see something like

`64 bytes from archlinux.org (░░.░░░.░░░.░░░): icmp_seq=░ ttl=░░ time=░░░ms`

Then you're good to go. Press Ctrl+c to stop ping.

## But Wait? This is worse than when we started?

<p style="font-size: 30px;text-align: center;">⬢⬡⬡⬡⬡⬡⬡⬡⬡⬡</p>

Yep, as it is right now you'll have a terminal that pretty much does nothing. Great! Time to go grab all the things you want.

#### Dual boot? Getting access to the other disk

Before we do that though, if you're dual booting, you'll want to set up your system so that it automatically mounts your other OS's disk. The easiest way to do this is to.

1. If it's not already, make sure you have ntfs-3g installed. Just do a `pacman -S ntfs-3g`.

2. Run `lsblk -o name,mountpoint,label,size,fstype,uuid` 

3. Figure out which Partition has Windows on it. If you have multiple disks, this may be a bit awkward. Here, for example is mine:

   ```
   nvme1n1                                            953.9G          
   ├─nvme1n1p1 /boot                                      2G vfat     EAEC-8D86
   ├─nvme1n1p2                                           16M          
   ├─nvme1n1p3                                        951.2G ntfs     D00CEBCB0CEBAB24
   └─nvme1n1p4                                          715M ntfs     DA1E14C51E149C97
   nvme0n1                                            953.9G          
   ├─nvme0n1p1                                            1G vfat     96EE-30CD
   └─nvme0n1p2 /                                      952.8G ext4     629cedc3-e5bf-4496-a75b-78d6d1c30d88
   
   ```

   What you should see is one partition that has a mount point of `/boot` (`nvme1n1p1`, in my case) and one that has a mountpoint of just `/` (`nvme0n1p2` in my case). Assuming nothing else weird about your setup, (no extra drives, etc.) you're looking  for a large (probably 250G+) ntfs partition that has no mount point. The only thing matching that above is `nvme1n1p3`. Note, your disks may start with "sd_" instead of "nvme_"

   Let's see if that's the right partition

4. Run `mount /dev/[partition name] /mnt/win` (for me, this would be `mount /dev/nvme1n1p3 /mnt/win`)

5. Run `cd /mnt/win` then `ls -a` . You should see all the folders you'd expect to see at the base of a C drive, "Users", "Windows", "Program Files", etc.

   If you don't - don't panic. Do you see anything other than `. ..`? Do you recognize the folders? It's possible you have multiple big partitions - maybe when your in Windows you also have another disk (probably D:/) - this might be that. This is good! It means we now know the partition with some of your data on it. Note this down somewhere - like `sda3 has data` and start from 1. again, pick another big NTFS partition, but when you go to mount change the path to `/mnt/win[number you increment]`, and go from there.

   If you don't see anything other than `. ..` it's likely nothing got mounted at all. Re-run the big `lsblk` command and see if the partition shows up as mounted - see how this has the `/mnt/win` next to it now?

   ```
   ├─nvme1n1p3 /mnt/win                               951.2G ntfs     D00CEBCB0CEBAB24
   ```

   If `/mnt/win` is next to none of them, then the mount didn't even work. Start from 1. If you still can't get anywhere, ask around for some help.

6. Okay, so your disk is mounted and you have access to your files, but you really don't want to do that every time you boot. Let's add the partition(s) (multiple, if you have a data disk) to our FSTAB. Run `nano /etc/fstab` (with `sudo`, if you've jumped ahead and made a user) and add the line:

   ````
   UUID=[Your disks UUID] /mnt/win      ntfs-3g defaults,nofail,noatime,uid=1000,umask=0011 0 0
   ````

   For example, for mine, this would be:

   ```
   UUID=D00CEBCB0CEBAB24 /mnt/win      ntfs-3g defaults,nofail,noatime,uid=1000,umask=0011 0 0
   ```

   Now, if you reboot, your disk should automatically be mounted to /mnt/win.

   As a brief explanation. `ntfs-3g` sets what NTFS driver to use. `ntfs3` instead should in theory be *much* faster, but it's not super stable at the time of writing. As for the other flags:

   * `defaults` just sets sane mounting options for most things based on filesystem (NTFS, in this case) type
   * `nofail` sets it so that if it can't mount the Windows partition, Linux doesn't say "Nope!" and drop you into a "recovery shell".
   * `noatime` sets it not to store access times. There's a not-insignificant performance impact in doing so, so may as well turn it off.
   * `uid=1000,umask=0011` - set's it so that files are the users (well, when you make one) which should be of id 1000 and that all files are set to be able to be read, written, or executed. This is bad for security, but as your computer is *probably* single user, it's fine.
   * The `0 0` at the end The first one should always be 0 as it's for marking if the disk should be backed up using an old back up system nobody should use, and the second if a system should be checked for file system checking, and in what order. If it's an NTFS disk and you dual boot, set it to 0. Your root `/` partition should be set to 1, if you care, you can set the others (if you have any) to 2, but, like, FS checking (fsck) is usually one of those things you'll know if you need to do, so as long as the system boots, fuck it.

   

   



{{< quote "[Install Guide](https://wiki.archlinux.org/title/installation_guide) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Post-installation

See [General recommendations](https://wiki.archlinux.org/title/General_recommendations) for system management directions and post-installation tutorials (like creating unprivileged user accounts, setting up a graphical user interface, sound or a touchpad).

For a list of applications that may be of interest, see [List of applications](https://wiki.archlinux.org/title/List_of_applications).

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Making a User Account

#### Users and groups

A new installation leaves you with only the [superuser](https://en.wikipedia.org/wiki/Superuser) account, better known as "root". Logging in as root for prolonged periods of time, possibly even exposing it via [SSH](https://wiki.archlinux.org/title/SSH) on a server, [is insecure](https://apple.stackexchange.com/questions/192365/is-it-ok-to-use-the-root-user-as-a-normal-user/192422#192422). Instead, you should create and use unprivileged user account(s) for most tasks, only using the root account for system administration. See [Users and groups#User management](https://wiki.archlinux.org/title/Users_and_groups#User_management) for details.

Users and groups are a mechanism for *access control*; administrators may fine-tune group membership and ownership to grant or deny users and services access to system resources. Read the [Users and groups](https://wiki.archlinux.org/title/Users_and_groups) article for details and potential security risks.

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Privilege elevation

For a list of applications to allow running commands or starting an interactive shell as another user (e.g. root), see [List of applications/Security#Privilege elevation](https://wiki.archlinux.org/title/List_of_applications/Security#Privilege_elevation).

{{< /quote >}}

### Setting up System-y Stuff (Logs, Background tasks, etc.)

<p style="font-size: 30px;text-align: center;">⬢⬢⬡⬡⬡⬡⬡⬡⬡⬡</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Service management

Arch Linux uses [systemd](https://wiki.archlinux.org/title/Systemd) as the [init](https://wiki.archlinux.org/title/Init) process, which is a system and service manager for Linux. For maintaining your Arch Linux installation, it is a good idea to learn the basics about it. Interaction with *systemd* is done through the *systemctl* command. Read [systemd#Basic systemctl usage](https://wiki.archlinux.org/title/Systemd#Basic_systemctl_usage) for more information.

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### System maintenance

Arch is a rolling release system and has rapid package turnover, so users have to take some time to do [system maintenance](https://wiki.archlinux.org/title/System_maintenance). Read [Security](https://wiki.archlinux.org/title/Security) for recommendations and best practices on hardening the system.

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Booting

This section contains information pertaining to the boot process. An overview of the Arch boot process can be found at [Arch boot process](https://wiki.archlinux.org/title/Arch_boot_process). See [Category:Boot process](https://wiki.archlinux.org/title/Category:Boot_process) for more.

#### Hardware auto-recognition

Hardware should be auto-detected by [udev](https://wiki.archlinux.org/title/Udev) during the boot process by default. A potential improvement in boot time can be achieved by disabling module auto-loading and specifying required modules manually, as described in [Kernel modules](https://wiki.archlinux.org/title/Kernel_modules). Additionally, [Xorg](https://wiki.archlinux.org/title/Xorg) should be able to auto-detect required drivers using `udev`, but users have the option to configure the X server manually too.

#### Microcode

Processors may have [faulty behaviour](https://www.anandtech.com/show/8376/intel-disables-tsx-instructions-erratum-found-in-haswell-haswelleep-broadwelly), which the kernel can correct by updating the *microcode* on startup. See [Microcode](https://wiki.archlinux.org/title/Microcode) for details.

#### Retaining boot messages

Once it concludes, the screen is cleared and the login prompt appears, leaving users unable to gather feedback from the boot process. [Disable clearing of boot messages](https://wiki.archlinux.org/title/Disable_clearing_of_boot_messages) to overcome this limitation.

#### Num Lock activation

[Num Lock](https://en.wikipedia.org/wiki/Num_Lock) is a toggle key found in most keyboards. For activating Num Lock's number key-assignment during startup, see [Activating numlock on bootup](https://wiki.archlinux.org/title/Activating_numlock_on_bootup).

{{< /quote >}}

### Installing and Removing Software

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬡⬡⬡⬡⬡⬡⬡</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

## Package management

This section contains helpful information related to package management. See [FAQ#Package management](https://wiki.archlinux.org/title/FAQ#Package_management) and [Category:Package management](https://wiki.archlinux.org/title/Category:Package_management) for more.

**Note:** It is imperative to keep up to date with changes in Arch Linux that require manual intervention **before** upgrading your system. Subscribe to the [arch-announce mailing list](https://mailman.archlinux.org/mailman/listinfo/arch-announce/) or the [recent news RSS feed](https://archlinux.org/feeds/news/). Alternatively, check the front page [Arch news](https://archlinux.org/) every time before you update.

### pacman

[pacman](https://wiki.archlinux.org/title/Pacman) is the Arch Linux *pac*kage *man*ager: it is highly encouraged to become familiar with it before reading any other articles.

See [pacman/Tips and tricks](https://wiki.archlinux.org/title/Pacman/Tips_and_tricks) for suggestions on how to improve your interaction with *pacman* and package management in general.

### Repositories

See the [Official repositories](https://wiki.archlinux.org/title/Official_repositories) article for details about the purpose of each officially maintained repository.

If you plan on using 32-bit applications, you will want to enable the [multilib](https://wiki.archlinux.org/title/Multilib) repository.

The [Unofficial user repositories](https://wiki.archlinux.org/title/Unofficial_user_repositories) article lists several other unsupported repositories.

You may consider installing the [pkgstats](https://wiki.archlinux.org/title/Pkgstats) service.

### Mirrors

Visit the [Mirrors](https://wiki.archlinux.org/title/Mirrors) article for steps on taking full advantage of using the fastest and most up to date mirrors of the official repositories. As explained in the article, a particularly good advice is to routinely check the [Mirror Status](https://archlinux.org/mirrors/status/) page for a list of mirrors that have been recently synced.

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Arch Build System

*Ports* is a system initially used by BSD distributions consisting of build scripts that reside in a directory tree on the local system. Simply put, each port contains a script within a directory intuitively named after the installable third-party application.

The [Arch Build System](https://wiki.archlinux.org/title/Arch_Build_System) offers the same functionality by providing build scripts called [PKGBUILDs](https://wiki.archlinux.org/title/PKGBUILD), which are populated with information for a given piece of software: integrity hashes, project URL, version, license and build instructions. These PKGBUILDs are parsed by [makepkg](https://wiki.archlinux.org/title/Makepkg), the actual program that generates packages that are cleanly manageable by *pacman*.

Every package in the repositories along with those present in the AUR are subject to recompilation with *makepkg*.

### Arch User Repository

While the Arch Build System allows the ability of building software available in the official repositories, the [Arch User Repository](https://wiki.archlinux.org/title/Arch_User_Repository) (AUR) is the equivalent for user submitted packages. It is an unsupported repository of build scripts accessible through the [web interface](https://aur.archlinux.org/) or through the [Aurweb RPC interface](https://wiki.archlinux.org/title/Aurweb_RPC_interface).

{{< /quote >}}

### Making your mouse serve a purpose again

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬢⬡⬡⬡⬡⬡⬡</p>

Most mere mortals will prefer working in a graphical environment instead of the terminal for literally everything (though it is possible to do some crazy things so you can browse the web comfortably from one). So, that means we'll need to grab display drivers corosponding to your graphics card (AMD, Nvidia, or Intel), pick a desktop environment and/or window manager (How everything looks and feels), and set up the Display Manager (What mostly serves as a login screen).

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Graphical user interface

This section provides orientation for users wishing to run graphical applications on their system. See [Category:Graphical user interfaces](https://wiki.archlinux.org/title/Category:Graphical_user_interfaces) for additional resources.

#### Display server

[Xorg](https://wiki.archlinux.org/title/Xorg) is the public, open-source implementation of the [X Window System](https://en.wikipedia.org/wiki/X_Window_System) (commonly X11, or X). It is required for running applications with graphical user interfaces (GUIs), and the majority of users will want to install it.

[Wayland](https://wiki.archlinux.org/title/Wayland) is a newer, alternative display server protocol and the Weston reference implementation is available.

{{< /quote >}}

If you're wanting to dive into something very strange but very cool, you might give [Arcan](https://github.com/letoram/arcan) a shot too. Just be warned, you'll probably have to compile it from source!

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Display drivers

The default *modesetting* display driver will work with most video cards, but performance may be improved and additional features harnessed by installing the appropriate driver for [AMD](https://wiki.archlinux.org/title/Xorg#AMD) or [NVIDIA](https://wiki.archlinux.org/title/NVIDIA) products.

{{< /quote >}}

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Desktop environments

Although Xorg provides the basic framework for building a graphical environment, additional components may be considered necessary for a complete user experience. [Desktop environments](https://wiki.archlinux.org/title/Desktop_environment) such as [GNOME](https://wiki.archlinux.org/title/GNOME), [KDE](https://wiki.archlinux.org/title/KDE), [LXDE](https://wiki.archlinux.org/title/LXDE), and [Xfce](https://wiki.archlinux.org/title/Xfce) bundle together a wide range of *X clients*, such as a window manager, panel, file manager, terminal emulator, text editor, icons, and other utilities. Users with less experience may wish to install a desktop environment for a more familiar environment. See [Category:Desktop environments](https://wiki.archlinux.org/title/Category:Desktop_environments) for additional resources.

#### Window managers

A full-fledged desktop environment provides a complete and consistent graphical user interface, but tends to consume a considerable amount of system resources. Users seeking to maximize performance or otherwise simplify their environment may opt to install a [window manager](https://wiki.archlinux.org/title/Window_manager) alone and hand-pick desired extras. Most desktop environments allow use of an alternative window manager as well. [Dynamic](https://wiki.archlinux.org/title/Category:Dynamic_WMs), [stacking](https://wiki.archlinux.org/title/Category:Stacking_WMs), and [tiling](https://wiki.archlinux.org/title/Category:Tiling_WMs) window managers differ in their handling of window placement.

{{< /quote >}}

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Display manager

Most desktop environments include a [display manager](https://wiki.archlinux.org/title/Display_manager) for automatically starting the graphical environment and managing user logins. Users without a desktop environment can install one separately. Alternatively you may [start X at login](https://wiki.archlinux.org/title/Start_X_at_login) as a simple alternative to a display manager.

{{< /quote >}}

If you're feeling particularly weird, you might want to try [ly](https://github.com/fairyglade/ly) too.

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### User directories

Well-known user directories like Downloads or Music are created by the `xdg-user-dirs-update.service` user service, that is provided by [xdg-user-dirs](https://archlinux.org/packages/?name=xdg-user-dirs) and enabled by default upon install. If your desktop environment or window manager does not pull in the package, you can [install](https://wiki.archlinux.org/title/Install) it and run `xdg-user-dirs-update` manually as per [XDG user directories#Creating default directories](https://wiki.archlinux.org/title/XDG_user_directories#Creating_default_directories).

{{< /quote >}}

### Mouse and Keyboard Configuration

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬢⬢⬡⬡⬡⬡⬡</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Input devices

This section contains popular input device configuration tips. See [Category:Input devices](https://wiki.archlinux.org/title/Category:Input_devices) for more.

#### Keyboard layouts

Non-English or otherwise non-standard keyboards may not function as expected by default. The necessary steps to configure the keymap are different for virtual console and [Xorg](https://wiki.archlinux.org/title/Xorg), they are described in [Keyboard configuration in console](https://wiki.archlinux.org/title/Keyboard_configuration_in_console) and [Keyboard configuration in Xorg](https://wiki.archlinux.org/title/Keyboard_configuration_in_Xorg) respectively.

#### Mouse buttons

Owners of advanced or unusual mice may find that not all mouse buttons are recognized by default, or may wish to assign different actions for extra buttons. Instructions can be found in [Mouse buttons](https://wiki.archlinux.org/title/Mouse_buttons).

#### Laptop touchpads

Many laptops use [Synaptics](https://www.synaptics.com/) or [ALPS](https://www.alps.com/) "touchpad" pointing devices. For these, and several other touchpad models, you can use either the Synaptics input driver or libinput; see [Touchpad Synaptics](https://wiki.archlinux.org/title/Touchpad_Synaptics) and [libinput](https://wiki.archlinux.org/title/Libinput) for installation and configuration details.

#### TrackPoints

See the [TrackPoint](https://wiki.archlinux.org/title/TrackPoint) article to configure your TrackPoint device.

{{< /quote >}}

### Making your computer not drink power and run like ass

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬢⬢⬢⬡⬡⬡⬡</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Power management

This section may be of use to laptop owners or users otherwise seeking power management controls. See [Category:Power management](https://wiki.archlinux.org/title/Category:Power_management) for more.

See [Power management](https://wiki.archlinux.org/title/Power_management) for more general overview.

#### ACPI events

Users can configure how the system reacts to ACPI events such as pressing the power button or closing a laptop's lid. For the new (recommended) method using [systemd](https://wiki.archlinux.org/title/Systemd), see [Power management with systemd](https://wiki.archlinux.org/title/Power_management#Power_management_with_systemd). For the old method, see [acpid](https://wiki.archlinux.org/title/Acpid).

#### CPU frequency scaling

Modern processors can decrease their frequency and voltage to reduce heat and power consumption. Less heat leads to more quiet system and prolongs the life of hardware. See [CPU frequency scaling](https://wiki.archlinux.org/title/CPU_frequency_scaling) for details.

#### Laptops

For articles related to portable computing along with model-specific installation guides, please see [Category:Laptops](https://wiki.archlinux.org/title/Category:Laptops). For a general overview of laptop-related articles and recommendations, see [Laptop](https://wiki.archlinux.org/title/Laptop).

#### Suspend and hibernate

See the main article: [Power management/Suspend and hibernate](https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate).

{{< /quote >}}





{{< quote "[Improving Performance](https://wiki.archlinux.org/title/improving_performance) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}



{{< /quote >}}





{{< quote "[SSDs](https://wiki.archlinux.org/title/Solid_state_drive) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}



{{< /quote >}}

### Audio would be nice

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬢⬢⬢⬢⬡⬡⬡</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Multimedia

[Category:Multimedia](https://wiki.archlinux.org/title/Category:Multimedia) includes additional resources.

#### Sound system

[ALSA](https://wiki.archlinux.org/title/ALSA) is a kernel [sound system](https://wiki.archlinux.org/title/Sound_system) that should work out the box (it just needs to be [unmuted](https://wiki.archlinux.org/title/Advanced_Linux_Sound_Architecture#Unmuting_the_channels)). [Sound servers](https://wiki.archlinux.org/title/Sound_server) such as [PulseAudio](https://wiki.archlinux.org/title/PulseAudio) and [PipeWire](https://wiki.archlinux.org/title/PipeWire) can offer additional features and support more complex audio configuration.

See [Professional audio](https://wiki.archlinux.org/title/Professional_audio) for advanced audio requirements.

{{< /quote >}}

### Networking-y Stuff

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬢⬢⬢⬢⬢⬡⬡</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Networking

This section is confined to small networking procedures. See [Network configuration](https://wiki.archlinux.org/title/Network_configuration) for a full configuration guide and [Category:Networking](https://wiki.archlinux.org/title/Category:Networking) for related articles.

#### Clock synchronization

The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is a protocol for synchronizing the clocks of computer systems over packet-switched, variable-latency data networks. See [Time synchronization](https://wiki.archlinux.org/title/Time_synchronization) for implementations of such protocol.

#### DNS security

For better security while browsing the web, paying online, connecting to [SSH](https://wiki.archlinux.org/title/SSH) services and similar tasks consider using [DNSSEC](https://wiki.archlinux.org/title/DNSSEC)-enabled [DNS resolver](https://wiki.archlinux.org/title/DNS_resolver) that can validate signed [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) records, and an encrypted protocol such as [DNS over TLS](https://en.wikipedia.org/wiki/DNS_over_TLS), [DNS over HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS) or [DNSCrypt](https://en.wikipedia.org/wiki/DNSCrypt). See [Domain name resolution](https://wiki.archlinux.org/title/Domain_name_resolution) for details.

#### Setting up a firewall

A firewall can provide an extra layer of protection on top of the Linux networking stack. While the stock Arch kernel is capable of using [Netfilter](https://en.wikipedia.org/wiki/Netfilter)'s [iptables](https://wiki.archlinux.org/title/Iptables) and [nftables](https://wiki.archlinux.org/title/Nftables), neither are enabled by default. It is highly recommended to set up some form of firewall. See [Category:Firewalls](https://wiki.archlinux.org/title/Category:Firewalls) for available guides.

#### Network shares

To share files among the machines in a network, follow the [NFS](https://wiki.archlinux.org/title/NFS) or the [SSHFS](https://wiki.archlinux.org/title/SSHFS) article.

Use [Samba](https://wiki.archlinux.org/title/Samba) to join a Windows network. To configure the machine to use Active Directory for authentication, read [Active Directory integration](https://wiki.archlinux.org/title/Active_Directory_integration).

See also [Category:Network sharing](https://wiki.archlinux.org/title/Category:Network_sharing).

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Printing

[CUPS](https://wiki.archlinux.org/title/CUPS) is a standards-based, open source printing system developed by OpenPrinting for Linux. See [Category:Printers](https://wiki.archlinux.org/title/Category:Printers) for printer-specific articles.

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

{{< /quote >}}

### Making things look pretty

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬢⬢⬢⬢⬢⬢⬡</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Appearance

This section contains frequently-sought "eye candy" tweaks for an aesthetically pleasing Arch experience. See [Category:Eye candy](https://wiki.archlinux.org/title/Category:Eye_candy) for more.

#### Fonts

You may wish to install a set of TrueType fonts, as only unscalable bitmap fonts are included in a basic Arch system. There are several general-purpose [font families](https://wiki.archlinux.org/title/Fonts#Families) providing large [Unicode](https://en.wikipedia.org/wiki/Unicode) coverage and even [metric compatibility](https://wiki.archlinux.org/title/Metric-compatible_fonts) with fonts from other operating systems.

A plethora of information on the subject can be found in the [Fonts](https://wiki.archlinux.org/title/Fonts) and [Font configuration](https://wiki.archlinux.org/title/Font_configuration) articles.

If spending a significant amount of time working from the virtual console (i.e. outside an X server), users may wish to change the console font to improve readability; see [Linux console#Fonts](https://wiki.archlinux.org/title/Linux_console#Fonts).

#### GTK and Qt themes

A big part of the applications with a graphical interface for Linux systems are based on the [GTK](https://wiki.archlinux.org/title/GTK) or the [Qt](https://wiki.archlinux.org/title/Qt) toolkits. See those articles and [Uniform look for Qt and GTK applications](https://wiki.archlinux.org/title/Uniform_look_for_Qt_and_GTK_applications) for ideas to improve the appearance of your installed programs and adapt it to your liking.

{{< /quote >}}

### Back to the Terminal

<p style="font-size: 30px;text-align: center;">⬢⬢⬢⬢⬢⬢⬢⬢⬢⬢</p>

{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

### Console improvements

This section applies to small modifications that improve console programs' practicality. See [Category:Command-line shells](https://wiki.archlinux.org/title/Category:Command-line_shells) for more.

#### Tab-completion enhancements

It is recommended to properly set up extended [tab completion](https://en.wikipedia.org/wiki/Command-line_completion) right away, as instructed in the article of your chosen shell.

#### Aliases

Aliasing a command, or a group thereof, is a way of saving time when using the console. This is especially helpful for repetitive tasks that do not need significant alteration to their parameters between executions. Common time-saving aliases can be found in [Bash#Aliases](https://wiki.archlinux.org/title/Bash#Aliases), which are easily portable to [zsh](https://wiki.archlinux.org/title/Zsh) as well.

#### Alternative shells

[Bash](https://wiki.archlinux.org/title/Bash) is the shell installed by default in an Arch system. The live installation media, however, uses [zsh](https://wiki.archlinux.org/title/Zsh) with the [grml-zsh-config](https://archlinux.org/packages/?name=grml-zsh-config) addon package. See [Command-line shell#List of shells](https://wiki.archlinux.org/title/Command-line_shell#List_of_shells) for more alternatives.

---

#### Console prompt

The console prompt (`PS1`) can be customized to a great extent. See [Bash/Prompt customization](https://wiki.archlinux.org/title/Bash/Prompt_customization) or [Zsh#Prompts](https://wiki.archlinux.org/title/Zsh#Prompts) if using Bash or Zsh, respectively.

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Bash additions

A list of miscellaneous Bash settings, history search and [Readline](https://wiki.archlinux.org/title/Readline) macros is available in [Bash#Tips and tricks](https://wiki.archlinux.org/title/Bash#Tips_and_tricks).

#### Colored output

This section is covered in [Color output in console](https://wiki.archlinux.org/title/Color_output_in_console).

#### Compressed files

Compressed files, or archives, are frequently encountered on a GNU/Linux system. [Tar](https://wiki.archlinux.org/title/Tar) is one of the most commonly used archiving tools, and users should be familiar with its syntax (Arch Linux packages, for example, are simply [zstd](https://archlinux.org/packages/?name=zstd) compressed tarballs). See [Archiving and compression](https://wiki.archlinux.org/title/Archiving_and_compression).

{{< /quote >}}



{{< quote "[General Recommendations](https://wiki.archlinux.org/title/General_recommendations) - [GNU Free Documentation License](https://www.gnu.org/licenses/fdl-1.3.html)" >}}

#### Mouse support

Using a mouse with the console for copy-paste operations can be preferred over [GNU Screen](https://wiki.archlinux.org/title/GNU_Screen)'s traditional copy mode. Refer to [General purpose mouse](https://wiki.archlinux.org/title/General_purpose_mouse) for comprehensive directions. Note that you can already do this in [terminal emulators](https://wiki.archlinux.org/title/Terminal_emulator) with the [clipboard](https://wiki.archlinux.org/title/Clipboard).

#### Session management

Using terminal multiplexers like [tmux](https://wiki.archlinux.org/title/Tmux) or [GNU Screen](https://wiki.archlinux.org/title/GNU_Screen), programs may be run under sessions composed of tabs and panes that can be detached at will, so when the user either kills the terminal emulator, terminates [X](https://wiki.archlinux.org/title/X), or logs off, the programs associated with the session will continue to run in the background as long as the terminal multiplexer server is active. Interacting with the programs requires reattaching to the session.

{{< /quote >}}

<ol hidden id="footnotes">
    <li>This video has aged a bit. Sata Express effectively doesn't exist now and some M.2 NVMe drives are now PCIe 4.0, though the 3.0 ones are still stupid fast.</li>
</ol>
