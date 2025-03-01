---
title: "Slow Down!"
slug: "slowdown"
author: "Vega Deftwing"
date: 2021-01-14
tags: technical
---

I use [VCV Rack](https://vcvrack.com) a lot. I normally use it on Windows as running VSTs in Linux is still a bit of a PITA and If I'm going to make music I want to have access to all of my tools. However, I still want to be able to use VCV on Linux for processing guitar when taking breaks from working on other things without having to reboot over to Windows.

Unfortunately, for a good while now VCV has had an annoying bug. I'm not sure when the bug first appeared, but at some point it started eating my GPU. Like, absolutely wrecking it.

![](/nonfree/blog/VCVfail.png)

{{< attribution >}}

[Radeontop](https://github.com/clbr/radeontop)

{{< /attribution >}}

It was still technically usable, in fact it ran butter smooth... 

![](/nonfree/blog/fps.png)

Oh wait, I wonder if killing [picom](https://github.com/yshui/picom), the X11 compositor I use will help

![](/nonfree/blog/nocomp.png)

Nopeeee.

Alright, obviously this is far from ideal. I actually only knew to check the FPS because of an interesting quirk, I think when the FPS got this high my GPU was getting jobs at that rate, so 930ish times per second, but still finishing them quickly enough to cause the GPU load to constantly change going 100% → 0% → 100% → 0% ... in a loop, really fast. It caused the physical GPU, an AMD Vega56, to whine in my tower. I don't *think* it was [coil whine](https://en.wikipedia.org/wiki/Electromagnetically_induced_acoustic_noise), but it was also very loud and sounded similar.

First I tried just changing the FPS target value in VCV and then I tried playing with settings in the `settings-v1.json` file, but nothing worked.

My next attempt to fix it was to try rebooting and loading my system with the Zen Linux kernel as I knew it used a different scheduler and did some extra stuff for real time computation (nice to have anyway when doing audio stuff like VCV).

Unfortunately, that was a bust. Still rocking the 930 FPS.

From here I had to ask for more help. Thankfully, a friend in my modular music chat on telegram was able to point me to a few ideas. I ran `glxinfo`, made sure everything looked sane, and it was. Next I tried using `LIBGL_THROTTLE_REFRESH=1` and `WGL_SWAP_INTERVAL=1` with no luck either.

Failing other ideas I Googled "linux limit frame rate environment variables" and one of the top results was [libstrangle (GitLab)](https://gitlab.com/torkel104/libstrangle) which limits frame rate by using `LD_PRELOAD` to dynamically link it's own library that does the FPS limiting. This reeks of hacky bullshit. But I'm *always* down for some hacky bullshit. For S&Gs I check, and `lo and behold it's in the AUR. 

![strangle](/nonfree/blog/strangle.png)

I still have no idea what's going on. The easy guess is "You have a Vega56, it's a weird GPU with HBM2" and, yeah, that makes sense, but then there's [This Issue](https://github.com/VCVRack/Rack/issues/1829) in VCV Rack's GitHub repo where someone else is having the same problem on an Nvidia card on Ubuntu. I'm using an AMD Card on Arch! Other than the commonality of Linux, these systems couldn't be much more different. 

That issue shows the original poster had traced it down to [one line](https://github.com/VCVRack/Rack/blob/e334902e8addf96ad726192c665d806f0952def0/src/window.cpp#L415), but I'm hesitant to accept that explanation when VCV works fine for me on Windows and the issue has no other comments from other people with the same issue.

prior to this fix, VCV could outright lockup my entire system as my GPU screamed bloody murder, but it got me thinking- while VCV is by far the most violent I've seen this issue get, I think I've seen it elsewhere, and yep:

![nuklearfps](/nonfree/blog/nuklearfps.png)

This is the example project for [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear), "A single-header ANSI C immediate mode cross-platform GUI library", exhibiting the same issue. I'm curious how many projects based on Nuklear this affects. 

LibStrangle again works to fix this, but without it my graphic card still makes an annoying whine, a whine that I don't get under even very high load when gaming.

I won't include anymore FPS screenshots, but I get the exact same behavior in [Radium](https://users.notam02.no/~kjetism/radium/), a neat tracker-like Digital Audio Workstation.

I suspect there are many, many more. I'm not going to go checking every program on my system, but I found this behavior weird enough to be worth documenting.

