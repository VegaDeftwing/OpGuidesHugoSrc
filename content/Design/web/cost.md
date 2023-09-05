# Cost

A pretty big question you should ask right away is "How much does this cost?", and you probably already know the answer.

It depends.

First thing you should worry about is the cost of hosting. 

## What Is Hosting?

If you want to, you *can* run a web server off of your home internet connection. This has problems though: 

* It means everyone will know your public IP and any attacks on your site will be attacks directly on your network
  * This isn't the end of the world, but it does mean you have to be reasonably smart and good about network security
  * You can use something like [Cloudflare](https://www.cloudflare.com/plans/#overview) to remedy this, but at that point, why?
* *Most* home internet connections in the US are asymmetric, with a lot more download speed than upload. If you get a small amount of traffic a day, this might be fine, but if you have a viral post it's unlikely to be able to handle the traffic
* *Most* home internet providers charge for a static IP address (Often at about $5/mo)
  * You *can* get around this with something like dyn-DNS, but that's weird.
* *Most* home internet connections are less reliable. If uptime matters to you, it may not be the best call
* The hardware costs money. Even a Raspberry Pi isn't free, and neither is the power to run it.
  * Even a pi 3b+ will use ~$5 of electricity a year, and the cost of the pi is ~\$40 not counting the power supply, case, SD card, etc.

**TL;DR:** economies of scale will hit you here, it's cheaper, safer, and typically better for users if you host with either a {{< vale >}}**V**irtual **P**rivate **S**erver{{< /vale >}} (VPS) or use a web hosting solution- either free or paid.

If you're making a small-ish personal (read: non-commercial / advertising) site like this one, then the best bet IMHO is to use free hosting from [GitHub Pages](https://pages.github.com), [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/) or with a free VPS, though there are cheap VPS options that may be less of a headache, see https://lowendbox.com for some. Depending on your needs, it's totally within reason to get well under $20 a year.

{{< vale >}}**HOWEVER:**{{< /vale >}} If you're following this guide for the sake of learning the technical side, it's totally reasonable to want to setup your own web sever on your own hardware and network! I'm not trying to dissuade you from doing so, I just want to make sure nobody is doing it "Because it's cheaper", because it's probably not.

{{< speech big>}}

Hi nerds!

There are some cool esoteric hosting options too!

* "tilde sites" are basically shared servers, check out [tildeverse.org](https://tildeverse.org/members/ ) for a list of options. There is a bit of a community aspect to tilde sites though, and while you could setup a redirect URL, it's normal that your page will be a sub page of whatever domain you end up using. 
* [Neocities](https://neocities.org) (a modern take on GeoCities)
* Hosting via [IPFS](https://www.ipfs.com) if you're feeling like experimenting with the future
* [Gopher](https://web.cortland.edu/flteach/methods/obj1/gopher.html) or [Gemini](https://gemini.circumlunar.space) are cool if you're nostalgic or minimal. Realize that some of these may limit your reach or impose bandwidth limits, though.
* You might also consider going REALLLY old school and running a [BBS](https://en.wikipedia.org/wiki/Bulletin_board_system), probably with [Mystic](http://www.mysticbbs.com) or [Synchronet](http://www.synchro.net)

{{< /speech >}}

---

### VPS? - A brief detour

Alright, so, what the heck is a VPS? As stated above, it's a {{< vale >}}**V**irtual **P**rivate **S**erver{{< /vale >}}. This means you're getting a {{< vale >}}**V**irtual{{< /vale >}} machine (basically a fake computer running in software) that is acting as a tiny slice of a larger server (note that servers are just fancy computers) but because all the other users are on {{< vale >}}**V**irtual{{< /vale >}} machines, it's {{< vale >}}**P**rivate{{< /vale >}}: even though you're sharing a physical computer, you have no way of seeing anything about your neighbors, and they can't see anything about you. {{< vale >}}Finally{{< /vale >}}, it's a {{< vale >}}**S**erver{{< /vale >}}, which means it's purpose is to, well, serve something, in our case a website, and is probably running an operating system that is better suited to that - almost always Linux.

What this means is you *might* need to know at least a tiny bit about Linux and using the command line to get up and running if you go this route, but it shouldn't be all that much.

If you're already a tech-head, there is an advantage to the VPS route in that it gives you more control. You might even be able to run more than one service from the single VPS: A web server, a game server, a torrent box, etc.

---

For the actual guide on making your own website, I'll be going over all three options: Using GitHub Pages, using a VPS, and self-hosting, I'll come back to that though, for now, what else costs money?

## The domain name

{{< vale >}}**D**omain **N**ame **S**ystem{{< /vale >}}, or DNS, is what makes it so you can go to (at the time of writing) to https://facebook.com instead of 157.240.2.35 - it's the thing that prevents you from needing to memorize a ton of numbers. Now, there's a whole ton of complexity I'm going to gloss over, but what you need to know for right now is you *probably* want a custom domain name for your site. I say *probably* because if you're using something like GitHub Pages, you'll be able to use {{< vale >}}htt<span>p</span>s://y<span>ourwebsitename.github.io</span>{{< /vale >}} for free, and you'll get similar names for free with some of the other options, but for something more custom like opguides.info, you'll have to pay for it.

<!--The spans in the above link are a hack to make it inactive on the site, so that someone doesn't come along and make that go to something weird-->

### How do you do that and how much does it cost?

Well, the how to do is pretty simple to buy, a bit weird to use, but we'll get to that point in a bit. To buy it, you'll want to find a reputable domain marketplace - [Namecheap](https://www.namecheap.com) and [Google Domains](https://domains.google) are nice - and see what you can find. Note that some {{< vale >}}**T**op **L**evel **D**omains{{< /vale >}} are more expensive and have weird requirements, 

for example, 

`pleaseend.us` is a .us domain, so {{< vale >}}is supposed{{< /vale >}} to be strictly be for use [by US citizen or entities](https://en.wikipedia.org/wiki/.us#Restrictions_on_use_of_.us_domains)

`isholdinghands.gay` is a .gay domain, so prohibits anti LGBTQ content (and 20% of all registration revenue gets donated to LGBTQ non-profit organizations) 

domains with `.app` or `.dev` require an SSL certificate, `.edu` and `.gov` for their respective institutions, etc.

But, assuming you want to be a normie and use `.com`, `.net`, or `.org`, it depends on if someone is already using that name or [squatting on it](https://en.wikipedia.org/wiki/Cybersquatting) (in which case you'd have to buy it from them at increased cost), but if not it's not bad, for example `iwanttobuythisdomain.com` is $12/yr from google domains, while something like `permium.autos` is \$2,160/yr. Sometimes what domains cost though the roof can feel pretty arbitrary, so you'll want to have more than one idea in mind

### A Detour into TLS

You've probably heard that you should try to trust websites starting with {{< vale >}}http**s**://{{< /vale >}} more than those with just {{< vale >}}http://{{< /vale >}}. This is a bit of a failing of security nerds to explain things well. In short, the "s" just means that:

1. Other people on your network shouldn't be able to eaves drop on what you're doing on that website (though they could still snoop and see that you're using that website)
2. They can't Man-In-The-Middle your connection to the website, meaning an attacker can't change what you see on that page

What it does not mean is that the site is any more trustworthy, an https:// site totally can still give you a virus or scam you or whatever. For something like OpGuides, I don't think https:// is necessary. It does still make the site look more legit though and, thanks to Let's Encrypt, is free. [Let's Encrypt](https://letsencrypt.org) is "A nonprofit Certificate Authority providing TLS certificates", which they do for free. If you use something like GitHub Pages, they handle this behind the scenes for you. If you use a VPS you'll have to set it up with https://certbot.eff.org 

## Okay… so… how much then?

OpGuides costs me a little $20/yr for the domain name, and I host the site with GitHub Pages, which also provides SSL via Let's Encrypt. Before I bought the domain I was using https://opinionatedguide.github.io which was free, and… that's it. That's the entire cost to me for this website, the under \$20/yr for the domain. That cost gets entirely covered by generous supporters of the OpGuides project. {{< vale >}}*However*{{< /vale >}}, if you're running a commercial website (and so can't use GitHub Pages), need to send lots of data (Videos, big downloads), or need deeper control of the server (PHP code, extra servers like games or torrenting) the cost will go up. As I stated at the top of the page, it's a big {{< vale >}}'ol{{< /vale >}} **"it depends"**