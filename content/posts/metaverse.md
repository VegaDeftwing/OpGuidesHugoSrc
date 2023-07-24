---
title: "A Meta-er-verse"
slug: "Metaverse"
author: "Vega Deftwing"
date: 2021-12-27
tags: technical
draft: false
---

<style>
    .me{
            background-color: #333!important;     
    }
</style>

## Plots of land & Euclidean space

One of the bigger points of the metaverse is the idea of owning a slice of digital property. This is a weird mix of the scarcity and value from real life property and the domain name (like `myfancyname.com`) market. It also makes no god damn sense in this context, and is really just artificially putting limitations into a system for the sake of making yet another crypto currency.

<div style="margin:auto;width:60%;">

{{< speech furby big >}}

But some land will be in more valuable places!

{{< /speech >}}

</div>

Yeah, but only because CryptoBros like you decided some spaces can be more valuable and accessible. That's still artificial.

{{< columns >}}

Really, valuable "land" would only be valuable for two reasons:

1. There's a lot of it
2. It's easily accessible

Let me address point 2 first: There's no reason any area should be any more accessible than any other. Having a space be "close to spawn" is really, really dumb. It's extra dumb when you consider somebody could decide to buy this space and just... not use it? or, worse, use it for something repulsive, like just making the entire thing into a big swastika or something.

<--->

<img src="/nonfree/blog/decentralland.webp" alt=" ">

{{< smalltext >}}Screenshot from [Decentraland.org](https://market.decentraland.org/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/2041694201525630780780247644590609268798)</br>5,888 MANA = 22,132.68 USD at the time of writing{{< /smalltext >}}

{{< /columns >}}

Bringing that point further, there's also no reason the space joining these virtual worlds needs to even be euclidean or that each land plot needs to be on the same scale. If you realllllly insist on having a system of land "ownership" that makes some land more valuable, then that will quickly lead to the scale hack anyway, where land owners just scale down users avatars upon entering the plot so the space feels bigger. This makes land value based on point 1. really weird, and goes a good step towards fixing the accessibility issue.

<div style="margin:auto;width:70%;">

{{< speech furby big >}}

We won't let people scale things like that though! That's a bad user experience!

{{< /speech >}}

</div>

**No**. A bad user experience is limiting what the users can experience in the first place. For a system to enforce scale it would need to have many, many other restrictions which would also limit the creativity of the worlds being made.

Going back an idea though, I said there's no need land even be euclidean- what do I mean?

<!-- https://pixabay.com/vectors/mandala-triangles-geometric-4917181/ -->

<img src="/unsplash/mandala.webp" width="15%" style="float:left;padding: 10px 10px 0;">

You ever played a game where if you go around in a circle, you can wind up in a different room. It sort of feels like two places are occupying the same space. Yeah, that is non-euclidean. We can use that, portals, and warped space in general to define how places are related to each other. This would dramatically increase the possibilities for navigation in a virtual world where things are all connected... {{< smalltext >}}Plus it's just really fucking cool{{< /smalltext >}}

<br style="clear: both;">

<img src="/nonfree/blog/portal.webp" alt="Nether Portal" width="30%" style="float:right;padding: 10px 10px 0;">

That said, I'm not convinced anyone would navigate this way anyway? Like, it's not as if moving in VR is as smooth as walking around (at least not without some special equipment), so really, methods of fast travel like VR Chat's implementation where users can drop a temporary portal to another world for users to follow them makes a lot of sense. This basically totally eliminates the idea of how accessible a plot is, as users can just warp anywhere from anywhere anyway.

<br style="clear: both;">

Speaking of, a *good* design would let users have their own private home plot with a warp/portal hub, so they can get to their favorite locations quickly. 

## Game Engines and Standards - A crazy idea

On the web, there's a few core things that make everything work, namely HTML, JavaScript, and CSS (as well as WebAssembly, WebGL, and a few other things) but these things can be used to make everything from a super basic http://motherfuckingwebsite.com to [full on VR content in the browser](https://aframe.io/examples/showcase/a-blast/). I think a good metaverse would be similarly flexible, and I think the only way to achieve that would be to offer engine interopability. This would be really, really fucking technically challenging. I'm suggesting a user be able to fluidly move between a Unity world and an Unreal Engine world and then be able to jump into something more obscure like [No! Euclid!](https://www.youtube.com/watch?v=tl40xidKF-4) or other completely custom engines. I'd love to speculate on *how* this could work, as making it so you can visually look into and fluidly walk between borders of two engines is a really interesting (albeit mildly crazy) question, but I think that'd be a full blog post (or even life's work) of it's own. That said, with enough cooperation and a decent standard I think this is totally possible.

## The 'cost' of a less constrained metaverse

One of the ideas of Meta's (FaceBook's) metaverse is acquiring digital belongings (Fuck NFTs) and being able to bring   these from one place to another. Presumably, this would include being able to level up your character in games and bring increased health/experience/mana etc. from game to game.

<div><p style="float:left;">This is the <p style="font-size: 22px;float:left;">stupidest.</p> <p style="font-size: 24px;float:left;">fucking.</p> <p style="font-size: 28px;float:left;">idea.</p></p> <p style="float:left;">I have ever heard.</p><br style="clear: both;"></div>

<p style="font-size: 22px;display:inline;">First of all,</p> without strict controls users will just make worlds that let you get increased stats (high health/level/etc.) either instantly, or by making grinding things that can be done to get these things trivial.
</br></br>

<p style="font-size: 22px;display:inline;">Second,</p> why should leveling up in something like Candy Crush make it so you have a better player in Doom? This is extra stupid when you consider difficultly usually scales with the player's level and actual game play experience, so players might be starting new games at a difficulty they can't handle.
</br></br>

<p style="font-size: 22px;display:inline;">Third,</p> even outside of gaming contexts, in almost no crafted world would it make sense to let users bring in arbitrary assets, more so if they have functionality (and so code). Even without this though, it will almost certainly lead to somebody making a lag cube™ that is a mesh with umpteen gazillion vertices that tanks all users FPS without a mod to not render it. Though, again, not allowing for the users to make worlds that support things like this (at least in the world it's supposed to be in) would require restrictions that ruin the entire thing. This is of course still a problem if worlds are connected but there's an easy fix for that:

A ~~web~~ portal of trust.

No world should have a wall/door/border/portal/etc. that connects to and renders another world's assets without that user *trusting* that world and explicitly putting it into their world. If a user drops down a VR chat style portal to another world, it should do what VR chat does and render a screenshot of that world, preventing arbitrary code and assets leaking between the two. Sure, assets *should* be transferable, but this should be the exception, not the rule.

There are sort of two times where I can see item transfer being used and actually working:

1. The same base game/experience being hosted by multiple worlds/servers
2. Multiple different experiences sharing low-functionality items (cosmetics, etc.)

For 1. - If two worlds are both running a meta-verse-ized Minecraft, and they agree that a user can carry their inventory from one to another, that makes sense. But this shouldn't be enforced, otherwise, there's nothing to stop a third instance from just handing out free diamonds and ruining the experience for everyone else. This also gets tricky if you consider unsupported items between instances. Sticking with the Minecraft example, imagine that one of the two servers is running a mod that adds emerald tools - what should happen if the user tries to take the inventory to a server without the mod? Should supported stats (tool durability, mining speed, the item texture, etc.) all be imported or should the item be ignored?

For 2. - If multiple experiences shared something functional, there'd be a lot of potential for either abuse or unbalanced mechanics. For example, say game A lets you get an extra life item, and game B doesn't, but both are paid games, and B let's you import the extra life item from A. Well, now there's a pay-to-win mechanic. 

Finally, there's the "issue" of avatar customization. If you look at VRChat or Minecraft, you'll see that users tend to care pretty deeply about their skins/avatar. How should these be transferred from world to world? VRChat just lets the same avatar be used in all worlds - which is a good call in a lot of ways - but would be really weird in full, separate video games. Again, thinking to what Minecraft in the metaverse would be like, it'd be really weird if a highly textured, many polygon character that was 20 blocks tall were playing. Plus, this may not even be supported by the engine of the world a user is going to. So, what do? I think the easiest solution is to define a standard and let games/experience use the user's primary character wherever possible, and then let games say "Actually, no. I'm gonna need you to go though my character creator real quick" 

## "Meta" should mean more than VR or AR

It's uh, in the heading: But, yeah, a true metaverse needs to incorporate the "worlds" we've already made, including everything from the physical (probably with AR) to the 2D, digital - traditional websites and 2D/3D games. It also seems pretty reasonable that this links in IoT devices and existing hardware. 

I actually have to give props to Facebook a bit for this, with the Oculus Quest 2's [keyboard pass through](https://uploadvr.com/quest-passthrough-keyboard-found/) feature. Ideally, I'd like to see models 3D scanned and interpreted to seamlessly mesh with the VR environment, but this is a good start. Long term, I think it'd be really cool if the tracking and digitization were good enough and generic enough that most common objects could be interacted with in VR with on-the-fly generated models. Being able to play my MIDI keyboard or guitars in VR comfortably would be amazing.

As for the IoT side of things, it'd be great if IoT devices could be scripted to respond naturally, controlling a room's lighting depending on if a headset is being worn, or to mach the lighting of a virtual space for those with AR systems. The current way to do this would be an IFTT or Node-Red shit storm, but I think these things could all be incorporated into better standards for generic lighting, 3D sound, etc. control to eventually provide open, generic interfaces to act as standards for all of these things.

Still, it's unreasonable to expect everyone to jump on the VR or AR hype train and there's no reason the metaverse should need to be 3D entirely anyway. There's a lot of content that works best as a flat, 2D page on a monitor and a lot of times where playing games is better without a headset (especially if you're gaming with snacks)

Finally, I want to make a point about AR - I think it should be able to go both directions. Zuckerburg's idea of the Nintendo mii like characters is deeply creepy, but I think having a point-cloud tracked person walking in VR could actually work quite well, especially if that point could is rendered pretty matter-of-fact-ly as a point cloud, not some creepy low-poly textured interpretation of what that point cloud might be.

## This is a chance to make better standards

Here's where things are going to get a bit nerdy, so buckle up:

Currently, the internet as a whole is pretty *centralized*. This means when you go to Facebook, you're going to Facebook's servers- not directly pulling the data from your friend's computer to get their latest status updates. If Facebook goes down, it *all* goes down. Other than the issue of fault tolerance, there's also problems with control and scalability. Control: on Facebook, Facebook is king. If they decide to ban you, that's that. Scalability: If every Facebook user was online at once, Facebook's servers would need to deal with this load.

So, the alternative? **De**centralized systems. Here, each user contributes to the network and things naturally scale. A lot of Cryptocurrency bros will say

<div style="margin:auto;width:70%;">

{{< speech furby big >}}

YEAH MAN! This is why we need **web 3.0**! [My Cryptocurreny of choice] is decentralized and NFTs and...

<p style="margin: auto;width: 50%;">*starts foaming at mouth*</p>

{{< /speech >}}

</div>

<br style="clear: both;">

And, like, CryptoBro here has the spirit I guess? I don't think *anybody* with a brain wants the entire web to be behind a crypto currency paywall though, and existing systems like torrents, IPFS, etc. all prove it isn't necessary either. So, no.

So, with the cryptobros now thoroughly angry and having probably clicked away, the adults in the room can get back to looking for legitimate solutions to problems again - so what are those problems?

1. Centralization
2. Lack of user control of data
3. Infrastructure that makes p2p sorta meh
4. Old, complex, ill-defined backwards-compatible standards
5. Latency and UI
6. Search

Having already covered point 1, let's jump forward to 2 - Lack of user control of data

### 2 - Lack of user control of data

I don't think I need to write a lot here- Facebook, [clearview.ai](https://www.clearview.ai/), and Google have an incredibly creepy amount of information about you - even if you've enable Do Not Track in your browser, even if you have a [pi-hole](https://pi-hole.net), even if you have [_nomap](https://support.google.com/maps/answer/1725632?hl=en#zippy=,how-do-i-opt-my-access-point-out-of-google-location-services) in your Wi-Fi's name. It doesn't matter, because you don't own your data, and some how all of that bullshit is legal (and being done by the NSA too). So, how do we fix it?

First, we make it illegal to do it without consent, then we stop fucking giving them the data. Our *protocols* for our new Metaverse should assume each user has the ability to store their data and provide it when necessary, but it should never be stored on a 3rd party server. The end goal is that shared personal data can be granularly controlled, have access revoked, seeded with random offsets, given per-service variations (like [GMail's me+whatever@gmail.com feature](https://support.google.com/a/users/answer/9308648?hl=en)) and everything should be opt-in (not opt-out) by default. Users should be able to store their preferences: Fuck your cookie banners, you shouldn't have to ask.

All of this should be part of the standards of the ~~web~~ Metaverse, non-optional, and enforced all the way down at the information exchange level.

I do think there should be one exception to this: Trust. I think there's damn good reason for worlds/servers/teams/whatever to want to have a way of establishing a user is trustworthy, and I think it's reasonable  that this be tracked and stored somewhere the user can't just arbitrarily change it. More on this later. 

### 3 - Infrastructure that makes p2p sorta meh

The metaverse (VR/AR + content) is going to require approximately twelve metric fucktons of data traverse the series of tubes at any given moment. Even if the US (let's face it, we're the worst) pulls our craniums from our collective rectums and replaces all of our aging copper with fiber and gets everything to IPv6 overnight, we'd still be fucked - less fucked, but still fucked. Why?

Our entire model of networking is pretty dumb. Up above I mentioned the issues with centralization and how with **de**centralization "each user contributes to the network and things naturally scale". Well, that *would* be true, unfortunately, our networks largely look a lot like this:

<img src="/eng/centralized.png" alt="Centralized Network Graph">

When for good decentralization we need them to look a lot more like this:

<img src="/eng/distributed.png" alt="De-Centralized Network Graph">

What this equates to is if I want to send a picture to my neighbor our networks should just talk without needing to go halfway up state and back. This could mean our Wi-Fi routers are able to mesh together nicely and exchange data directly, or that the ISP configures the networks sanely such that at the switch box at the end of the block, the packets go "ooh! We can turn here" instead. Ideally? Both. But on a huge scale. Everyone's Wi-Fi, cellular connection, fiber internet, everything- make it one giant mesh, with lots of redundant connections.

Now, you'll notice that I still have some big central nodes in that decentralized network image. Hell, it's even setup such that the left most big node is required for the three smaller connection in the top left to get to anyone else. I think this is realistic. The fact of the matter is economies of scale are still a thing and some services will always require centralized coordination. Even in a decentralized network, there will still be more important nodes. That's just reality. This is still even a bit optimistic, as there will certainly be outliers that have only one way to get to everyone else (think a house in the country with no cell service and only one, wired connection provide by an ISP)

Now, there's one problem here that I think stands out: If my neighbor can connect through me, what's to stop them from just mooching off of me and not buying their own connection to the internet to contribute back?

<div style="margin:auto;width:47%;">

{{< speech furby big >}}

<p style="margin: auto;width: 100%;">*salivates onto a pile of Ethereum*</p>

{{< /speech >}}

</div>

Down boy! Let's first assume you both have nice internet connections: It's logical that one of you may be a technomancer while the other is a tech-illiterate Karen and so use differing amounts of bandwidth. This is fine! It still benefits both of you, as it means you, the technomancer, can look at content early and have it cached before the Karen ever gets to it. Plus, if the Karen isn't using bandwidth, it's not as if it's a hoardable resource - **bandwidth only exists at a fixed point in time** - it may as well be used. Plus, it might be that this Karen's link is the only thing connecting you directly to someone else that's also a technomancer running a bunch of services you use.

But, okay, back the point - let's say the Karen decides not to have her own connection, and try to mooch off of you entirely. That's still a problem. Fortunately, there's an easy fix. The network can still let you route through her by noting if the destination is actually her network - you can still connect to your other technomancer friend. This alone gives you something in return for you bandwidth - Karen is giving you faster, lower latency connection to someone else. But, wait, that's still not totally fair, so, the fix? Three conditions: 

One: put a cost on your bits - no, not cryptocurrency, but bits for bits. The simplest option is a 1:1 ratio. If Karen doesn't directly provide bits from the internet, she'll at least need to forward as many bits as she wants on from your technomancer friend. 

Two: So long as you have extra bandwidth (remember, not a hoardable resource) let Karen accrue a negative balance. 

Three: Have a local graph of the network. If Karen is an 'edge' (having no other peers or access to the Internet) then she can't provide anything. Cut her off if she doesn't have a positive balance. This lets her build up bits to spend, but she still has the consequence of risking losing connection entirely if she isn't forwarding useful traffic back to you and you don't have bandwidth to spare.

There might be reasonable modifications to be made here, such as slowly forgiving a negative balance, adjusting the bit price ratio depending on latency, etc. But, in theory, something like this should work. Obviously this is sparse on technical details, but I'm sure there's some networking engineers reading this that can caress [DHTs](https://en.wikipedia.org/wiki/Distributed_hash_table) to do what is required - and without the need for cryptocurrency.

Really though, this problem is two fold. We need the hardware infrastructure and protocols/software that support this p2p meshing system to be common place.

### 4 - Old, complex, ill-defined backwards-compatible-ish standards

I might be wrong, but I think the Zuck's intention is to have the metaverse replace the web. Which, uhh, is a choice. 

So, let's go with it. Let's assume we're gonna abandon the web. We'll still need to make tools that do what the web does anyway, which is let people author content. I'll talk about these tools more in a bit (Creation Vs Consumption below), but the tools themselves will still need to assume some standards. It's worth remembering that even in 3D, there will still be a fair amount of 2D interfaces and content, and we'll probably want to render the old stuff. This means the current shitstorm where HTML, CSS, JS, etc. don't look the same in every browser is still a problem, but obviously we can't fix that for old content.

We can, however, learn from our mistakes for the new content. So, what did the web get wrong? I think this comes down to three things:

First mistake: I think the big one was using multiple languages. HTML, CSS, JS, ... it's a full stack that can get sloppy at the intersections, it's why the `<center>` html tag had to deprecated, for example. I think we just need a single, unified language that handles content, style, and interactivity. Now, this language would almost certainly have to have a rather odd syntax to support the three roles, but I think it would be a positive change. Plus, this could wrap in a few more roles more relevant to 3D, such as object position, rotation, style, and maybe lighting. This would have be balanced with supporting reasonable file formats for the actual definition of those objects, but it would make sense to have the 3D objects be exposed in the code as a, well, object - as in object oriented programming. Having these systems interconnected like this would be incredibly convenient for letting things interact, like letting text wrap around a 3D object, and changing that text based on user interactions. I also think it would be helpful for making a powerful user-facing editor that exposes a lot of functionality - again, more about this in Creation Vs Consumption below. Finally, this should also allow for big version bumps in the future. A world could just say "I want language version x.y.z" and being self contained, the older version could still be used.

{{< speech big me >}}

I hear the skeptics among you, and yes, I do actually think this could work and be a good programming experience. I think it would require us to re-think our tools a bit though and combine graphical/node based programming, "normal" text based programming, and tools that generate data/code for us - like world editors that update the position of an object in the code.

{{< /speech >}}

Second mistake: the lack of a reference implantation. Chromium and Firefox based browsers (really the only two left) still disagree on a lot of things because there's just not a great reference for what's correct. Having a good reference implementation would help avoid ambiguities in the standard.

Third mistake: making a platform that was restricted. A lot of the differing features between Chromium and Firefox browsers comes down to supporting weird, hardware specific standards introduced by Google for Chrome, like WebMIDI, WebUSB, etc. many of these serve the role of letting web pages access hardware more directly. So, the fix? Make things open to begin with. Obviously, a permission system is needed - but a good platform shouldn't need something to be tacked on to add low level functionality like this.

### 5 - Latency and UI

We need shit to be much faster. {{< smalltext >}}We also need to stop drawing after the intial load. It just makes people click the wrong thing. Like, fuck, this is UX 101 guys.{{< /smalltext >}}

I'm not going to try to reinvent the wheel here, so see https://danluu.com/keyboard-latency/ and https://danluu.com/input-lag/ for context

The gist is that latency isn't getting better, if anything it's getting worse, and user experiences are worse off for it. As someone that makes ~~synthesizer and guitars make funny noises~~ music, I can tell you from first hand experience that at some point, it just starts to make things unusable, but *a little bit before that point* it's usable but literally makes you feel sick and uncomfortable withing being able to tell why. It just sucks.

So, what does this have to do with the metaverse?

Well, largely the "metaverse" means VR/AR, which means strapping something to our faces to try to convince our easily tricked monkey brains into thinking we're somewhere we're not and experiencing things that largely don't exist. For this to not totally suck, this needs to be able to respond to input really, really fast. Otherwise the side effects range from a loss of immersion to motion sickness bad enough to necessitate a barf bag.

Okay, so, better standards- where does that come into play with latency and UI? Well, for the UI, whatever is used to render to the screen needs to be able to enforce certain things be done by the rendering engine, like not strobing the screen or drawing new content after a certain point (yes, I'm still mad about that), but it's hard to really stop someone from making a bad design without limiting them.

For latency, honestly? I think we just need to give a shit and make everything better at real-time from the ground up. On most OS's today, getting low latency audio requires using a completely separate audio stack, like, what the fuck?? Plus, somehow we got stuck with 60Hz screens being standard, though even then the applications or compositor (or both) usually need to store a full frame in the buffer to avoid V-sync issues, so the latency is made even worse.

In the metaverse, where we're probably going to need to stream voice as well as large assets over the network this is going to be a much bigger deal. To some extent this will be able to be remedied with a mix of neural-network-y predictive-voodoo that preloads content based on a ton of metrics and by the implementation of the previously mentioned p2p networking stuff (avoiding long trips in the first place) - but actual local input still needs to be captured and processed much faster too. 

### 6 - Search

{{< speech big me >}}

When doing research for this I stumbled upon [Re-Organizing the World’s Information: Why we need more Boutique Search Engines](https://sariazout.mirror.xyz/7gSSTJ96SEyvXeljymglO3zN4H6DCgVnrNZq8_2NX1A) by Sari Azout, which other than being pro-NFT at the end, I think is a really good overview of why right now everything is Situation Normal: All Fucked Up.

{{< /speech >}}

It's a bit weird to think about, but the web hasn't always been what it is today, and it also didn't just suddenly switch to being dominated by Google and Facebook. It evolved. Services came and went - AOL, MySpace, MSN Messegner - Along with the expansion there was an increased need for search to wade though the increasing number of sites and services and endless wastes of spam. At first there were curated lists, then small search engines with rudimentary web crawlers. Things grew. Sites started abusing search engine indexing. Search Engine Optimization (SEO) became an entire industry.

Along the way, big websites were able to completely dominate results. Now, if you enter a search term (assuming you have adblock on to remove the shit) the first results are almost certainly Reddit, Quora, YouTube, Facebook, Amazon, and a handful of other sites you'll immediately recognize. Honestly, I have no idea how you'd ever find a website like this one. We no longer surf the web for new websites, we float along the same archipelago.

So, we're making a metaverse - what should we do differently? I'm honestly asking, I'm not totally sure. I have ideas:

* Require search tags be added by users with enough reputation, not the creator
* Reddit-style content ranking systems on search results
* An entertainment to informational slider
* Context aware search - if I'm looking at the wikipedia page for CPU's and search RAM, I probably don't want pictures of the animal or ads for a truck.
* Connecting people - if two people are looking up the same thing let them chat!
  * Or leave a note on their search asking a question for the next person to see and answer

There are already projects doing some of these things, like https://yacy.net, https://search.marginalia.nu, https://lieu.cblgh.org, among many others.

The thing is, despite not having any good suggestions or answers for what to do, this is probably one of the most important things for a metaverse to get right and that's why I'm including it in this section- I think search, indexing, and ranking needs to be considered from the start, at the protocol level when we're building these systems from the ground up. It can't be tacked on as an application in the end, or we'll end up with the mess we have now.

This is made even more complicated in VR, as in an almost endless maze of interconnected worlds that may contain anything from games to classrooms, navigation in this 3D space is also analogous to search. Falling down an internet rabbit hole will be all the more literal. Society can not afford for these holes to act as a game of plinko where there's a good chance you'll be bounced into a hole of neo-nazi fanaticism or ant-vax conspiracies. If these things are already dangerous now, multiply that by the grip of a loner finally finding a community where they can interact in something much closer to real life: leaving the radical group will mean the loss of friends and the loss of a safety net far worse than the current equivalent.

At the same time, these rabbit holes still need to be deep and wide, and allow for small, new creators to find an audience otherwise we're still back where we started.

I wish I had something more to offer than just stating how high the stakes are, but this problem is really, really hard.

(I've written about search a bit before, see {{< button relref="/other/hci2/digital#search-sucks" >}}HCI2: Search sucks{{< /button >}})

## Creation with Consumption

So far I've talked about worlds and land and experiences and games, but all of these are things you go to, play, and see but aren't really things normal users will be able to create with. While gaming certainly can be social, I think the games that do the best job of this are the games were you can *make* something with others - again, like Minecraft.

{{< columns >}}

<img src="/nonfree/blog/pico8/spriteeditor.png" alt="sprite editor" style="width:48%;" /><img src="/nonfree/blog/pico8/pico8tracker.png" alt="tracker" style="width:48%;float:right;" />

{{< smalltext >}}Pico-8's Sprite Editor for graphics and Tracker for making music{{< /smalltext >}}

<--->

It seems odd to me that most of the visions of a metaverse I've seen so far assuming you'll be using external tools to make 3D models, code, etc. to make the worlds themselves. What I'd really like to see is the integration of 3D modeling and painting, programming and scripting, and audio workstation tools all exposed in one environment, sort of like how the [pico-8](https://www.lexaloffle.com/pico-8.php) has all of these things. 

{{< /columns >}}

I think the ideal way to build a **meta**verse is to let people is to let people change the meta without leaving it. "Meta" literally means self referential: it seems weird that you wouldn't be able to create the words from within it. That's like an operating system that can't compile itself. 

<p hidden>More than that, I think that (with very few exceptions) the content served should be entirely compiled and rendered client-side - sort of like how the web works - so that users can clone and edit and make derivatives of existing work super easily: just like copying HTML from web pages in the '90's.<p>
<img src="/nonfree/blog/htmlref.png" alt="inspect element" style="-webkit-filter:invert(90%);filter: invert(90%);" />

Ideally, I think this should work all the way down. I think it'd be awesome if a user working in a dedicated VR world scripting language could inspect a `print` function in a script that actually calls a C++ library, and be brought to that code to edit it and recompile it on the fly, hot-reloading everything in place. It's not like the technology to do this doesn't exist - then, the same for models, textures, and music. Let a user enter mesh edit mode and drag some vertices to deform an object. Where possible, serve music as MIDI and synthesizers and samples, so that notes and timbers can be edited by the users, in real time. This has advantages for the creators too: for example, if the music is being rendered client side from notes and synthesizers, then the notes could be generated algorithmically and the parameters of the synth set to vary randomly with time to make generative music that doesn't get boring.

{{< speech big me >}}

Of these, I think the audio one is the biggest stretch, only because rendering complex audio in real time with lots of effects would need *a lot* of CPU/DSP horsepower. To have this not impose a lot of limitations on artists would be difficult, but it wouldn't be a huge change from back in the early days of computer music with trackers and MIDI based music for games, where the game's soundtrack massive varied depending on the soundbanks of the computer being used. I think for most things, this trade off would be worth it.

{{< /speech >}}

Just, step into my imagination for a bit, imagine:

* Playing VR minigolf with friends, and, as the game host, you can change the models of objects, so you jokingly make a friends ball a cube.
* You're playing a VR shooter and want to play a 1-hit-kill game, so you edit the code live to make everyone's guns do max_int damage.
* You're listening to a song and want to hear it accapella and with a more distorted guitar - so you just look into the song editor and turn off the vocal track(s) and add a distortion to the guitar track

And, yeah, there's obviously copyright and monetization problems abound here but if you have ever walked into a world in VR chat and seen the sheer amount of available avatars or how many worlds are derivative, you'd see why this is both something nobody is respecting now anyway and why this open system would be immediately loved.

Also, I do want to point out that above I said "[...] in almost no crafted world would it make sense to let users bring in arbitrary assets" which seems to contradict this, but what I mean is in ***public*** worlds it doesn't make sense. If a user duplicates and self hosts the world as a private destination for friends, they should be able to do whatever still.

In my opinion, if you want a metaverse, this level of openness, customization, and hackery isn't just a suggestion, <u>it's a necessity</u>.

## Moderation

There could again be an entire post devoted to what content moderation does and should look like in VR and the metaverse. The TL;DR of that post would probably be "If it's decentralized, you can't stop it, but you sure as shit don't have to federate with it" if you go along with idea of federation and Mastodon. <a class="ptr">(1)</a>

This is made a bit more complicated if per-user restrictions are made a thing, as there's a conflict between letting users maintain and create multiple identities and making it easy for servers to moderate. This might be fixed by associating a "trust level" with user accounts that federated servers share, and where established users can vouch for a friend by wagering some of their own trust for a set period of time. If the user doesn't do anything bad (cheat, post illegal content, act like a douche) then the original users gets their trust back, and the target user gains some trust on top. {{< smalltext >}}(No, trust doesn't need to be an NFT or currency. I can't believe I even feel the need to clarify this, but here we are.){{< /smalltext >}}

Making it so this trust level couldn't be gamed like Reddit's Karma may be difficult, but I think as long as the actions that can generate trust are pretty limited, high effort, and require a human it should be fine. I'm thinking things like having a friend request accepted by another high-trust user, playing a game without being flagged as a bot, or even putting a "Trust me?" button on the bottom of a blog post like this so that users can wager trust. Things that can cost trust should vary, though mean comments and being a douche should probably have a cap on how much can be lost.

If a user makes a new account, they'd just have to trust themselves a few times with a very large wager to get the trust built up.

## Monetization & The DRM-verse

{{< columns >}}

The inclusion of Digital Rights Management (DRM) in something strapped to my face is already horrific enough, but add in the idea of potentially locking these systems down so that I'm forced to watch an advertisement sounds like a scene out of Black Mirror.

I'm not naïve, I understand DRM will be pretty much necessary in order to have big publishers make games and other content for the metaverse, as they're worried about piracy dramatically cutting into their profits. I get it. That said, maybe if they don't make buying the product a massive pain in the ass or include the anti-features of DRM (like how [Denuvo makes games slower and have longer load times](https://www.youtube.com/watch?v=n_DD-txK9_Q) or [just become unplayable when servers are shutdown](https://torrentfreak.com/denuvo-protected-games-rendered-unplayable-after-domain-expires-211108/)),

<--->

<img src="/nonfree/blog/sonypatent.png" alt="Sony Patent" style="-webkit-filter:invert(80%);filter: invert(80%);" />

{{< attribution >}}[US8246454B2 - System for converting television commercials into interactive networked video games - Sony Interactive Entertainment LLC](https://patents.google.com/patent/US8246454?oq=8246454){{< /attribution >}}

{{< /columns >}}

the sucking up and selling of user data, and the inclusion of things nobody wants (like Bixby on Samsung phones) then the DRM wouldn't be necessary in the first place. Maybe I'm wrong, but for most content I think piracy is more of a distribution and anti-feature problem than a price one. I really don't think most people who are pirating out of price would have actually paid for the content legitimately anyway. Hell, if anything, it drives more sales as people want to try before they buy.

So, let's just draw the line in sand and say no. If we're going to have a metaverse, it doesn't need DRM.....

... -ish. I will admit there's a few hiccups here, and that's online services - like video game multiplayer. If it's not 100% p2p (reasonable if a central authority is needed), the game server has to coordinate things, then there is an overhead associated that necessitates checking players have actually bought the game - it's one thing to not make money on a sale, it's another to lose money.

This only really requires relatively minimally invasive key based authentication though, and there's still incentive not to share your key, as doing so would mean someone could steal your account and get you banned from online play. While I supposed this is *technically* DRM, it's more so just user authentication, and I think that's fine? It's not really any different than letting users host private rooms/worlds. That said, I think there should be something that ensures the server code/software is also freely available so others can self host still - A digital world you can't control isn't a metaverse. Plus, we don't want a server going offline and a digital world suddenly being lost forever.

I also want to preemptively respond to the "But movies and music and content creators deserved to get paid!" comment. Yes, I agree with you. Problem is, DRM isn't going to stop the piracy, and it will only make it a worse experience for those actually paying.

{{< speech triode right >}}

But won't someone just make an "everything is free" store?

{{< /speech >}}

<br style="clear:both;">

Probably - but again, it's a distribution problem. Even if everything is p2p capable by default, I would still hope a "legitimate" store could provide faster downloads, easier updates, and an all-around better user experience than a piracy dominated one, if for no other reason than it would bring in funding for its own development. - not to mention all the packages could be more reliably verified to not be malware.

Plus, studios could incentivize paying: show a development blog and tease upcoming features, but point out that development cost time and money. The fire under their asses to make a good distribution platform to justify the cost should help prevent the current shit storm where there's umpteem game stores and a further fustercluck of clients for mod management. If they don't make it easy, central, and capable (so mod management, community interaction, etc.) then people will just use the one where games are free. Plus, there are legitimately centralized features only a legitimate distribution platform could provide, like achievements (Yes, technically, you could probably make achievements as NFTs and make them decentralized, but why tho - We don't want them to be able to be traded, so they have no value in that sense.)

Of course, that only works for ongoing developments and if the buyer is interested in those developments. For something like a movie or album, that's a lot harder to sell. One option is to attach your personality to your work and do the YouTuber/Twitch thing, but not everyone that makes music or videos is interested in doing that, plus the world really doesn't need more parasocial relationships. It's not like this problem is exclusive to the Metaverse though, and I don't know that we should expect a new platform to solve all of society's problems anyway. That said, if we really want to try, there are options. 

* The current idea of Patreon/Supporter only discord servers could be extended to access to VR worlds
* Giving users plots of land in the supporter world
  * This seems to contradict what I said in the start, but here the difference is it's a special private world-in-a-world, and would probably be primarily hosted from the content creator's computer/server ... though the p2p stuff above should limit the cost to the creator anyway.

I would love to add digital items like "a collectible artwork for your virtual home" to the list, but the only "good" way to do that is NFTs, and frankly, I don't think anyone is about to check the cryptographic certificate of ownership associated with anything in the virtual world, and all my prior points would make it so you can copy-and-paste the art/object anywhere anyway - it would just still hold the NFT owner's name. Maybe I'm wrong, maybe that is something people are into? If it's done with something not using ludicrous amounts of electricity (see https://github.com/memo/eco-nft) then I don't particularly care. I don't personally understand why any one would want it, but I don't care.

<div style="margin:auto;width:60%;">


{{< speech furby big >}}

<p style="margin: auto;width: 100%;">Vindication! NFTs RULE. WEB3 4 TEH MASSES!</p>

{{< /speech >}}

</div>

Finally, we do need to find a fair way to balance content quality with availability if there's a big, unified store. This is a real challenge. Obviously some content is outright illegal and can't be on the platform, but there's also a question of if low effort unity flips should be able to be uploaded easily? One solution would be to give individual users store pages, where there content can be promoted to the main page with enough up-votes from users that have accumulated enough trust, but that's still messy. 

## Anti-Cheat

On a similar note, Anti-cheat is becoming a bigger problem, recently making an increasing number of games require deep access into the Windows kernel (something that is usually a sign of a virus). This is also fucked, but again has a two part solution: 

1. Stop providing any tangible rewards (better/cooler-looking armor/guns/etc.) from online play - remove the incentive

2. Stop making random online matches! This is a human problem not a technical one. 

   Friends playing together don't run cheat software because they know it makes everyone hate them. So, make games be between friends, friends-of-friends, and so on. Bring back the idea of guilds and big teams, and make one cheater reflect negatively on the entire guild/team so they have incentive to self police. You don't need access to my kernel, you need my Steam Friends List.

Obviously, this applies in the current-verse, but in the meta-verse, where a cheater has the potential to do so much more harm. How? Physically, view distortion effects could be abused to make someone sick. Psychologically, the increased interconnection of services implied by a metaverse means higher risk of a whole new kind of cyber stalking, and one where blocking may mean other people end up talking to a ghost in the same room as you, lacking a better way to handle it.

I suspect any user shitty enough to do these things would get a very low trust rating pretty quickly though, so if that system were used, I think it would fix this problem reasonably well anyway.

---

{{< speech big me >}}

Thank you for reading!

A little housekeeping: if at some point someone tries to patent these ideas or uses copyright of code to claim ownership of them I will happily serve as a witness in court. You can't patent or copyright an idea. Fuck software patents 🖤

Btw, the glitchy-furby gif used here to represent the NFT/Cryptocurrency shill is made by me, and not a real NFT. If you'd like to use the gif in your own post that needs a profile picture to depict and a cryptocurrency shill, poke me and I'll almost certainly give you permission.

Finally, if you liked this post, please consider donating by throwing me cash on venmo @vegadeftwing, [paypal](https://github.com/sponsors/VegaDeftwing), or sponsoring my work with GitHub Sponsors:

<iframe src="https://github.com/sponsors/VegaDeftwing/button" title="Sponsor VegaDeftwing" height="35" width="116" style="border: 0;"></iframe>

{{< /speech >}}



<ol hidden id="footnotes">
    <li>If you don't know what I mean by that, the TL;DR of that is that Mastodon (a service a lot like Twitter) has separate servers more-or-less the same as someone might have a gmail or a hotmail account, but can still email eachother. Here, what I mean is that a group of worlds working together could simply say, "nah, we don't want to work with you guys" and maintain either an allow-list of other world (or groups of worlds) they do want to wort with or a block-list of worlds they'd rather not deal with.<li>
</ol>
