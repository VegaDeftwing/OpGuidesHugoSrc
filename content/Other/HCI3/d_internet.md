# The Web is shallow

The web, I think, has two major problems.

1. It's not very well connected physically
2. It's not very well connected digitally

## Missing physical links

By "Physically" I mean look at how much networking equipment the average person has. 

At minimum, most people will have an internet connection to their home and a phone plan with data - probably 5G, plus everybody's phone is capable of bluetooth.

If you have a modern Amazon Echo, it probably has a LoRa radio in it too.

Of course, it's not just *you* that has this equipment, it's your neighbors too.

Why is it, if you're riding in the car with a friend and neither of you have phone service, you can't text each other over bluetooth?

Why is it you can't easily set your network up such that if you lose home internet you can share your phone's network connection with every other device on the network?

Why, if you want to play a game with a friend that lives in the apartment next to you, do you need to shoot a packet through the internet, routing halfway around the city just to get back to them?

This isn't a new problem, or even only one problem.

How would you prevent some people from leaching free connectivity from those paying for it?

How can you ensure security when sharing your connectivity if you don't know who will be on the network?

How do you determine the best path if there are multiple routes, over multiple physical mediums? Do you prioritize reliability, throughput, or low latency?

Suffice to say, this isn't a simple question. Let's stew on this for a second while we look at the other problem:

## Limited Digital Interconnection

The top ranking website globally for traffic starts with Google at 1st place, getting ~130 **billion** visits per day (So far more than 1 visit/person/day), but at the bottom of the 100 websites like Figma or Yelp get ~130 **million**, so dropping from #1 to #100 gets 1/1000 of the traffic.

In the top 100, we have YouTube, Facebook, Insta, WhatsApp, Reddit, TikTok, and Twitter, with Facebook being #3, and the parent company, Meta, owning Insta and WhatsApp as well.

If these websites are absolutely dominating the traffic rankings, it means they get to censor, filter, etc.

And yunno what? That's pretty much fine with me.

I don't really want to see beheadings or nudity or have a platform overtaken with bots. (Well, that last one is a problem anyway)

What *really* bothers me about it isn't the filtering or lack there of, it's the limitations of content in the first place.

{{< light >}}

The web is fucking awesome.

TODO: Indieweb, neocities, mastodon, etc.

## Indie Web Projects: The Personal Touch that Matters

Enter platforms like **Neocities**, where the old web's spirit of creativity, personalization, and experimentation is alive and well. These sites may lack the pristine polish of modern platforms, but what they lack in convention, they make up for in character. 

Every site feels like a window into the creator’s world, with unique choices of color palettes, animated gifs, background music, and personal touches that make browsing feel more like a conversation than a transaction. It’s a reminder that the web doesn’t have to be a monotonous scroll — it can be an *experience*.

We’re seeing a resurgence in people seeking out indie apps, quirky interfaces, and visually striking designs not because they’re perfect, but because they feel **human**. This isn’t nostalgia — it’s our desire for **connection** and **self-expression**.

"Design isn't just what it looks like and feels like. Design is how it works." — Steve Jobs
<footnote>Yeah, Jobs was a massive douche, but the quote is still good.</footnote>

---

[TODO] Add a bunch of web badges here

{{< /light >}}

## Solving the Physical Link Problem

Mastodon is (barring some technical notes about cryptography) a pretty good analogy for what I want in the physical space. A bunch of networks that can federate together, build chains of trust, but still have local, distributed moderation.

Unfortunately, it also shows the same issues most existing solutions have:
* High technical overhead to use
* (Currently) low adoption
* Other, centralized solutions remain more popular

But, I still think it's worth looking at what exists, because, honestly, it's all really cool!

-- dark

Ugh. Okay, we have to go into the pit of darkness and despair for a moment here.

A lot of interesting, decentralized, mesh-networking software and hardware has been co-opted by Cryptocurrency bros. I will not try to pretend to be unbiased here. I have a well informed, well researched, opinion and that is that Cryptocurrency and anyone that uses it, mines it, buys it, or otherwise interacts with it is morally black. Not gray. Not sorta-kinda bad, just, plain, stupid, bad. If this is news to you and you've made it this far into this series of posts the best I can do is express my incredible distaste for the practice and hope you agree It's a massive waste of electricity for what is mostly used either as a pyramid scheme or for criminal activity.

I'm even saying this as someone who was given free cryptocurrency and made a few bucks on it. See [Cryptocurrency is an abject disaster (Drew DeValut's Blog)](https://drewdevault.com/2021/04/26/Cryptocurrency-is-a-disaster.html), [This Twitter Thread from @ummjackson](https://twitter.com/ummjackson/status/1415353989323841537), [this one from @Pinboard](https://twitter.com/Pinboard/status/1399058952336277505), or [This video](https://www.youtube.com/watch?v=YQ_xWvX1n9g) … I could keep going. If reading these, and looking at their sources, doesn't convince you, then you're obviously so biased as to not consider the arguments fairly. Yes, I see why cryptocurrency is cool, and I see its use as governments become increasingly interested in spy tech, etc. This isn't the solution, and anyone that can separate their morals from their wallet can see that.

So, I will be immediately ruling out and refusing to talk about any p2p networking solution which relies on cryptocurrency.

-- dark

Before we get into the list of neat projects, I want to lay a few more ground rules on what I'll cover:
* It must be open source. The web we have now is built on open standards. There's no reason to look at something that's a regression of that.
* No mesh VPNs (Tailscale, ZeroTier, Netbird, etc.)
	* Though Tailscale is very cool!
	* So is [Weron](https://github.com/pojntfx/weron)!
* It must be active/usable
* No IP overlay networks. If current implementations can only run on top of IP connections (WiFi / Ethernet) it doesn't count.

Let's work our way up from what I see as a sort of progression in features, even if this isn't in "Goodness" or in time of release.

### Winlink (And WoAD)

### Direwolf + Chattervox

### Adding a portable Radio
KV4P or similar
### Meshtastic

### Reticulum + Rnode


* Direwolf / Chattervox
* Winlink / WoAD
* KV4P
* Yagdrasil (CJDNS - does it solve something Reticulum doesn't?)
* Meshtastic
* RNode/Reticulum









