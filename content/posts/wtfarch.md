---
title: "A Culture Problem in Arch Linux"
slug: "wtfarch"
author: "Vega Deftwing"
date: 2021-12-29
tags: technical
draft: false
---

I removed this post due to it being a downer. If you view the page source, you can un-comment it, but I have decided the hate from strangers doesn't matter.

![chatswithvoid](/other/chatswithvoid.webp)

[Comic by Chats With The Void (@skullbird) on Twitter](https://twitter.com/skullbird/status/1215695749662429184/photo/1)

<!--

## The Background

I'm going to jump straight to the point, after my last post, somebody saw the Arch install guide on OpGuides and decided they didn't like it, and so opened a [PR deleting the file](https://github.com/VegaDeftwing/OpGuidesHugoSrc/pull/24):

<img src="/nonfree/blog/archwtf/1.webp" alt="image-20211229174649444" style="-webkit-filter:invert(80%);filter: invert(80%);" />

Now, this story could have ended here. I could have closed the issue and moved on with my life, but as a real "I use Arch BTW" user since 2014 I'm just not okay with this attitude in the community, so...

<img src="/nonfree/blog/archwtf/2.webp" alt="image-20211229174835823" style="-webkit-filter:invert(80%);filter: invert(80%);" />

Meanwhile, I started a new discussion the [wiki](https://wiki.archlinux.org/title/Talk:Installation_guide#New_User_Friendliness),

<img src="/nonfree/blog/archwtf/3.webp" alt="image-20211229175002444" style="-webkit-filter:invert(80%);filter: invert(80%);" />

and got into the `#archlinux-wiki` channel on irc,

![image-20211229175146940](/nonfree/blog/archwtf/4.png)

and was talking about the GitHub PR in multiple Telegram chats. Meanwhile, the discussion on GitHub heated up:

<img src="/nonfree/blog/archwtf/5.webp" alt="image-20211229175303703" style="-webkit-filter:invert(80%);filter: invert(80%);" />[Skipping some irreverent back and forth - all of which just make him look like more of an ass]

<img src="/nonfree/blog/archwtf/6.png" alt="image-20211229175418502" style="-webkit-filter:invert(80%);filter: invert(80%);" />

## The Real Problem

And **THIS** is where the story really heats up, because going to that link: 

<img src="/nonfree/blog/archwtf/7.webp" alt="image-20211229175649923" style="-webkit-filter:invert(80%);filter: invert(80%);" />

{{< smalltext >}}

You can't tell here as I've inverted the image as to not burn your eyes, but that pacman ghost has a Joker (like killer clown joker) color scheme, which, I think at least says something about the mindset of the user who wrote it.

{{< /smalltext >}}

Here I've added the box around the relevant bit - that support for arch is dependent on having followed the official guide. Now, that is already questionable enough given how many people will likely need to google for more information or follow YouTube videos when stuck, but the real fucking kicker? **The installation guide isn't the only official way to install arch**: There's an install script in the live iso:

<img src="/nonfree/blog/archwtf/8.webp" alt="image-20211229175910096" style="-webkit-filter:invert(80%);filter: invert(80%);" />

So, I'm sorry, but do want to make it easy or not? Are new users welcome, or do you need to have read all of Brian W. Kernighan and Dennis M. Ritchie's *C Programming* and be able to write a boot loader from scratch before you install? Do the forums not offer support if you used an installation method literally included with the live iso?

Regardless of the asshat that triggered this discussion, the fact of the matter is the Arch community needs to get their shit together. Currently, the Wiki says this:

<img src="/nonfree/blog/archwtf/12.png" alt="image-20211229180740018" style="-webkit-filter:invert(80%);filter: invert(80%);" />

Which to me reads as "It'll be hard, but you can go for it" while the community attitude is summed up by:

![image-20211229180617779](/nonfree/blog/archwtf/9.png)

<img src="/nonfree/blog/archwtf/10.png" alt="image-20211229180740018" style="-webkit-filter:invert(80%);filter: invert(80%);" />

So, which is it? Is arch a system that supports users wanting to learn the depths of Linux and that are willing to dive in head first, or is it exclusively for Linux veterans that already know most of the complexity involved? If it at all is the former, then the arch community needs to quit their bullshit. We absolutely can not expect some one to read up on **8** different boot loaders, **5** different network managers, and **18** different file systems without some guidance - at the very least saying "These options are the most common choices" and explaining why. Similarly, we can not in good conscience have an install guide that doesn't make it extremely clear that a user should make a full disk back up prior to doing anything

Like it or not, Arch Linux is going to start being used by more noobs. With the Steam Deck shipping with Arch Linux from the factory and Linus Tech Tips showcasing Manjaro (Arch with some incompatibility sprinkles on top) this is even more certain.

{{< speech big >}}

Sorry other Arch users, like it or not, you'll have to support Manjaro users. Same way Ubuntu users look to Debian documentation for help

{{< /speech >}}

There will be a lot of new users at the table. So now we have the choice of welcoming them and trying to make the community better, or being aggressive and toxic like the PR that started this. So, are we going to support people, or give them more reasons to think the Linux community is a bunch of elitist ass hats? 

## Official response?

While Head-on-a-stick did get a slap on the wrist,

<img src="/nonfree/blog/archwtf/11.png" alt="image-20211229180228770" style="-webkit-filter:invert(80%);filter: invert(80%);" />

It appears even the moderation team shares in the "Arch is only for pros!" attitude:

<img src="/nonfree/blog/archwtf/13.png" alt="image-20211229191201385" style="-webkit-filter:invert(80%);filter: invert(80%);" />

## What next?

I do want to help make the official guide better. I do care about the Arch project because I think it's a particularly good OS - hence using it for so long. That said, if it doesn't get better my plan is to replace my {{< button relref="/engineering/linux/arch" >}}Arch Install Guide{{< /button >}} with a copy of the official guide split up into blocks with my running commentary and notes along side. Then, when the official guide changes I can merge it back in to the page to keep it up to date.

Of course, I'd rather the official guide be written well enough that I don't need to do this.

---

{{< speech big >}}

Thank you for reading. I know Head-on-a-Stick was a royal ass here, but I still want everyone to take the high road. Please do not harass, abuse, dox, or otherwise be mean to him.

{{< /speech >}}

-->