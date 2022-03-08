# Chapter 34 - Reverse Engineering

## Software

{{< speech right >}}
Anyone know of good resources for learning binary reversing?
Not particular tools necessarily, but like theory and how to think

{{< /speech >}}

{{< speech mimir big >}}

{{< attribution >}}[@XMPPwocky on Twitter](https://twitter.com/XMPPwocky){{< /attribution >}}

[An Opinionated Guide on How To Reverse Engineer Software](https://margin.re/media/an-opinionated-guide-on-how-to-reverse-engineer-software-part-1.aspx) is decent.

for me personally:

know some assembly, and in particular make sure you know the calling conventions for your platform.

when starting out, do it on binaries you can actually run in a debugger and see what's actually happening at runtime.

learn common patterns for things like "looping over an array", "iterating over a linked list", etc. this is very important.

the process, at least for me and most of the folks i've talked to, is one of iteration - start with what you know, use that to figure out other stuff. now you know more things, repeat.

So:

1. go for easy wins as much as you can. Strings! I love strings (mind you I don't do malware much). See a `printf("access_check: ACL rule %d check denies action %s for user %s", foo, bar, baz)`? Rename that function to access_check, rename foo to "acl_rule", rename bar to "acl_action", rename baz to "user". Now follow those back as far as you can, with everything that calls access_check. Something calls `access_check(woof, bark, meow)`? woof is acl_rule, bark is acl_action, meow is user. if you use Binary Ninja right it'll do a lot of this for you, not sure about other tools these days.

Look for logging functions especially - not only are they helpful, often they're called by macros that pass the function name as an argument - you can set the name of hundreds of functions with a script that way.

Also, symbols obviously help- not just exported/local symbols either. Use imports! if something's passed as the first argument to `open`, that's a filename.

2. structs structs structs structs. again, binary ninja does really well here because it propagates type information. but for most binaries I encounter, figuring out a handful of structs and looking at how they're passed between functions pretty much makes it clear exactly what's going on.
3. DON'T GET STUCK. if you can't figure out roughly what a function does (enough to give it a name) within a few minutes or so of looking at it, bookmark the function and move on- reverse other stuff. Very good chance that'll make it obvious what the function does. If not - remember why you are reversing this binary. If you're doing it to hunt for vulns... does the function handle user input or do security-critical things? If not, MOVE ON. 
4. Cheat! see an interesting string? Google it, and search GitHub for it! You never know where open-source code pops up... (or where some helpful engineer has accidentally put proprietary code on GitHub). Not sure what protocol something's using? Look up the company's engineers on LinkedIn- what do they have experience with? Don't be afraid to use things other than the specific binary you're reversing to figure out how it works.

---

oh also if you see a function with loads of xrefs to it that seems really complicated, maybe does a bunch of bitwise operations, maybe uses weird vector instructions you don't understand, and takes at least one pointer as an argument... it's probably memcpy/memset/bzero/str[n]len/str[n]cpy. if it's not obviously something else, assume it is - if its prototype matches memcpy's, call it memcpy_maybe and DON'T GET STUCK trying to figure it out exactly unless something else means you need to (e.g. if a vuln would be exploitable only if it's strncpy instead of memcpy

{{< /speech >}}

---

[Reversing for dummies - x86 assembly and C code (Beginner/ADHD friendly) (0x41.cf)](https://0x41.cf/reversing/2021/07/21/reversing-x86-and-c-code-for-beginners.html) and [pwn.college](https://pwn.college/modules/reversing.html) also look good, but I haven't gotten the chance to go though either link yet!

## Circuits

[TODO]

## Tools?

### Hardware:

Most tools for reverse engineering are really tools you'd use for otheng things anyway *plus* some special sauce. For circuits, your logic analyzer, OScope, etc. are all still valid; however, you may want to add some tools like a software defined radio, [Jtagulator](http://www.grandideastudio.com/jtagulator/), [Proxmark-3](https://proxmark.com/proxmark-3-hardware/proxmark-3-easy), a Bus Pirate/Shikra, and the [ChipWhisperer](https://www.youtube.com/watch?v=FktI4qSjzaE). Don't like race out to buy these things though - you'll know if you need them. On top of this, you'll need some actual tools - screwdrivers with those weird torx security bit, pry tools to take off a screen, etc. Hardware hacking tends to get rather crazy rather fast, so dont be suprised if you find you need some acids to get at the die in an IC, to throw a board in a freezer to get it nice and cold, or to shine a bright light on an IC to get it to crash.

Don't forget your search enginer either though- looking up the FCC certification, patents, and documention on anything and everything you can is likely to tell you a lot more a lot faster than you can figure it out by actually poking the thing.

### Software:

#### Binaries:

As for software, the big one is an executable reverse engineering tool like Radare2, Cutter, Ida, BinaryNinja, etc. 

These let you take a compiled program and work your way back to source code... slowly. Of course, this sometimes isn't necessary. Hell, sometimes you just need to throw `strings` at the problem. Other times, the reverse engineering tool won't be enough, and you may need to throw [DIE](https://github.com/horsicq/Detect-It-Easy), [WCC](https://github.com/endrazine/wcc), etc. at the problem. Of course, you shouldn't forget about watching the actually active state about the problam either, so GDB is still your friend - and [rr](https://rr-project.org) and [gef](https://gef.readthedocs.io/en/master/) make great companions to GDB. Other times, [cheatengine](https://www.cheatengine.org) may be useful for finding an important piece of memory, Valgrind for finding when memory goes wrong, and you've always got `strace` & `ltrace` handy. Keep in mind that there may be special binary reversing tools for your platform too, like apktool or 

Resource hacker may be handy too.

If all else fails, there's always the ever-unfriendly hex-editor at your disposal.

#### Networking:

Assuming things start to get network-y, you'll need to be familiar with network-y tools. See the {{< button relref="/engineering/networking/networking" >}}Networking{{< /button >}} page, but the short version is you'll want to know:

* Traceroute (or mtr)
* Dig
* Wireshark
* netcat (or socat)
* Scapy
* Airmon-ng
* ... and your firewall system, be it [iptables](https://wiki.archlinux.org/title/iptables) or something else
* ... and your network config tool. On Linux, `ip`; on Windows, pain & suffering.

With those, you really should be able to about 99% of the reversing & security reseach for networking you'd want to do, at least assuming you don't need to setup some crazy, emulated networking environment or that you're not trying to just crack a wifi-password or router password or bypass a captive portal (which is boring *and* illegal, so not usually worth doing)

#### Breaking Things and Watching Them Scream:

Of course, sometimes you just need to break things to see how they work. For that, having a whole pile of fuzzers tends to come in handy

Trust me, you'll want a VM of basically every system you can think of ready to go. Windows XP through 11, Arch, Ubuntu, MacOS, android, *out of date* Ubuntu and Android... everything. *On each of these*, you'll want a full suite of system analsis tools. Task Manager and Top isn't going to cut it here - you're gonna want Process Explorer (or Process Hacker), Process Monitor for Windows and htop for Linux at minimum, though [procmon](https://github.com/Sysinternals/ProcMon-for-Linux), [sysdig](https://github.com/draios/sysdig), VmStat, lsof, netstat, iotop, nethogs, pmap, and nmon are all awesome in Linux too. Also, in Windows being able to trigger a BSOD is sometimes nice. For that there's [NotMyFault](https://docs.microsoft.com/en-us/sysinternals/downloads/notmyfault) and the good ol' [WinDbg](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/debugger-download-tools). Occasionally, [vmmap](https://docs.microsoft.com/en-us/sysinternals/downloads/vmmap) might come in handy as well. Keep in mind that on Linux systems you can dive into /proc, /sys, and /dev to get information too.

#### But what about X?

Of course, this list is **far** from exhaustive. There's a lot of other tools that you'll want depending on the situation - so naturally a search engine is your №1 friend. Hell, you can probably assume it was the №1 friend of whoever wrote what you're poking too, so don't be afraid to google "how do I X?", look at stack overflow, and assume that is the same code you're trying to reverse.

# 34.1 - Is This Even Legal?

I am not a lawyer, but a lawyer would tell you "It depends".

It'd be nice if you could do whatever you want to anything you own, but IP is a bitch and if you put Linux on your PlayStation, Sony can probably sue you and win- same for emulating a Switch on your PC, getting root on your TV, etc. 

Will they? Probably not. If you're actually woried about it, talk to a lawyer. If you think this is bullshit, then join me in giving everyone the middle finger and getting root on everything you own.
