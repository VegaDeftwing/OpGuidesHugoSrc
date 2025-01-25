/+ ptp

* Direwolf / Chattervox
* Winlink / WoAD
* KV4P
* Yagdrasil
* Meshtastic
* RNode/Reticulum





## Transferring Information Sucks

{{< smalltext >}}I mostly mean networking, but things like flash drives too.{{< /smalltext >}}

### The Internet Sucks

Well, okay, the internet is honestly fucking awesome. But some of it is designed horribly and some of it is nowhere near as good as it could be because of users making stupid choices.

To start with, let's look at how horribly shit was designed. As a start, I recommend reading [IPv6 Is a Total Nightmare — This is Why](https://teknikaldomain.me/post/ipv6-is-a-total-nightmare/) by Teknikal, it explains the issues with both IPv4 and IPv6 beautifully. There are other issues with the web, like the fact that neither DNS or IP were designed to be encrypted (and so private) by default, so instead we've had to patch on fixes like http**s**. Of course, there network security problems are found regularly, such as [Nat Slipstreaming](https://samy.pl/slipstream/), a nasty issue that made the rounds recently.

There are also issues of access. In the US at least, most places are part of an ISP regional monopoly. Often they'll argue that you *do* have options, such as satellite internet. However, this is complete and total bull shit. You do *technically* have the option, sure, but this option is slow, usually has data caps, and just generally sucks. If you're in a rural area, you're lucky if the copper in the ground is still good enough to get you something fast enough to watch a YouTube video. Then, on top of all this BS, the ISPs regularly get caught for doing shit to your traffic, whether it be injecting ads, terminating connections early, blocking services (often torrenting), not letting you forward ports, etc. Oh, and then they try to charge you for a modem you don't even have- thankfully that was [just made illegal](https://www.extremetech.com/internet/318570-its-finally-illegal-for-isps-to-charge-rental-fees-for-equipment-you-own).

TLDR: ISPs are evil.

### Centralization Sucks

{{< speech yesbutno big >}}

At the time of writing, a lot of decentralized services are hopping on the cryptocurrency train. This is really fucking stupid. So, while projects like Lbry, Dat, IPFS, and the Beaker Browser are cool, until the space cools down a bit and stops thinking Crypto is a good idea I'd recommenced proceeding with extreme caution.

{{< /speech >}}

Most services on the Internet are *Centralized*. When you get on Facebook, you're connecting to Facebook's servers. YouTube? YouTube's servers. And so on.

What if, instead, when you watched a video it downloaded it to your computer (at least for a little while) and then, when the next person wanted to watch it they got it from you. As more people watch a video, the number of people who have it grows, and so it's faster for the next person to get it. This is a system that naturally scales. It's also resistant to censorship (which is both good and bad). A *slight* variation on this is the idea behind [PeerTube](https://joinpeertube.org). Similarly, there's [mastodon](https://mastodon.social/about) as an alternative to Twitter.

But we can do better. With tools like [ipfs](https://ipfs.io) or ~~[cjdns](https://github.com/cjdelisle/cjdns)~~ [Yggdrasil](https://sudonull.com/post/31578-CJDNS-is-dead-long-live-Yggdrasil) we can replace the entire back-end, the internet itself, with something that is inherently decentralized and peer-to-peer.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/SrA7XTDCtok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

↑ Note, this video has a part 2: [Decentralize 02 / VoluntaryNet: The Digital Public Square](https://www.youtube.com/watch?v=URoRVFfoGMg)