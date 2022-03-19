---
title: "Quantization, Polarization, & Indoctrination"
slug: "quantized"
author: "Vega Deftwing"
date: 2022-03-18
tags: personal
---

{{< quote "[wikipedia](https://en.wikipedia.org/wiki/Quantization)" >}}

**Quantization** is the process of constraining an input from a continuous or otherwise large set of values (such as the real numbers) to a discrete set (such as the integers). 

{{< /quote >}}

I'm less than two months from graduating with degrees in both Electrical Engineering and Computer Engineering. One subject that comes up a lot in both fields is *Quantization*. Reading audio in to a micocontroller from a DAC? That continuous signal, represented physically by infinite values, now may only have 12 bits of resolution. Turning a knob on MIDI controller? There you get 7 bits. 128 possible values. 

{{< columns >}}

Mapping a smooth knob into a stair-stepped value range like this is limiting. Toggling a physical switch? 1 bit. 2 values. But, still, the signal being read may not change immediately (taking some time to go from ground to the higher voltage) or the metal contacts may bounce off each other rapidly, causing a flip to register as multiple.

<--->

<img src="/music/quantization.webp" alt=" ">

{{< /columns >}}

While this problem is usually called debouncing, it's not wrong to think about it as quantization of a signal both in time and value. This is to say, It's very common for an engineer to spend a fair amount of timing fighting the negative side effects of quantization.

Meanwhile, quantization isn't always bad. I also make music using modular synthesizers. There, a module literally called a quantizer, that takes in continuous voltage signals and snaps the value to 1/12th of a volt, a voltage step for each key in an octave. This allows for turning knobs to set up a sequence of notes without needing to get the knobs set exactly right. Similarly, there are many, many computer algorithms which rely on the fact that truncation of integer division is fast on computers, that is 5/2 = 2, when you throw away the decimal. This is still effectively quantization.

In pursuit of my degrees, I've also had to take a plethora of math classes. Occasionally, I'll learn something and, as human minds are often over optimized for pattern matching, start to see it everywhere. Just like all the memes of seeing the Fibonacci spiral on everything or fractals in every leaf.

So, naturally, my mind fell down this hole with quantization, and sure there are example in nature, but here I noticed more social and political analogies, as people quantized politics into a 7-level signal of 

Crazy-Left, Mid-Left, Lean-Left, Centrist, Lean-Right, Mid-Right, Crazy-Right.

[Overton Window](https://en.wikipedia.org/wiki/Overton_window) be damned, even if the center point of the spectrum is moving, the idea of a spectrum out right is wrong. It's getting quantized! While maybe I'm reflecting my own experience onto others, it seems people often only have 3-bits of space in their head per person to store political leaning. I suppose that's better than the polarization into well, polar (2) groups that is often discussed though.

But this isn't a politics post. I'm an engineer, not a politician or sociologist. Instead, it's a religion post, because any fuckwit on the internet can spew shit about religion!

<img src="/memes/gods.webp" alt="American Gods Quote" style="float: right;width:40%;padding:10px">

In both Neil Gaiman's *American Gods* and Kevin Hearne's *Iron Druid Chronicles* there's this neat idea that the Gods (and in both, this means *all* the gods) are created by and get their power from human belief. In other words, God is created in the image of man.

Now, you might be thinking "So, you're going to argue that we shouldn't be picking one religion - don't quantize our choice."

No. I couldn't give less of a shit what Gods you believe in. What I do care about is technology and the culture and ethics of those that work in my field. This is where my argument finally begins: 

We've quantized ourselves into cults where devices, tools, and developers are our Gods. Worse, we keep giving them more power as the cults around them grow more entrenched in their personalities or mission. We're turning tech into a holy war battle ground. Some worship Elon Musk, others see him as a devil. Either way he's being deified. Same for Satoshi Nakamoto, Linus Torvalds. Same for particular platforms: Linux users  ({{< smalltext >}}I use Arch BTW.{{< /smalltext >}}) don't help you learn Linux, they 𝕔𝕠𝕟𝕧𝕖𝕣𝕥 you. You become one of them. You're expected to hate Windows.

Nuance is getting lost as people identify with their choices in technology and they decide who they want to look up to. I must admit guilt here as well, as I've firmly put myself into the "Hate Musk, Hate Crypto; Use Linux, Hate Windows" bin. On one hand, I feel like my opinions are well researched and well founded. On the other, I have to wonder to what extent my own biases prevent me from listening to a good argument (is there an *actual, good* use case case for Cryptocurrency?). This is a mental dialog that I'm sure a lot of people reading have had themselves, and this point isn't new- others have pointed it out too. What I think is harder to admit is being aware of these biases does not mean you're able to look past them. Knowing your biased is a good start, but it doesn't immediately mean you're able to do anything about it.

Now, I could go into how the 🄰🄻🄼🄸🄶🄷🅃🅈 🄰🄻🄶🄾🅁🄸🅃🄷🄼 on YouTube, Twitter, and Facebook make finding good, dissenting opinions harder to find. But you know this as well as I do. Again, being aware of the machine doesn't help you escape it. 

For example, the editor wars: Emacs vs vim vs VSCode vs notepad++ vs __ . Even if you personally think one is superior, even if it is *technically* superior (more features, faster, etc.) you've still quantized things into, at the very least, a ranked system. In reality, some of the choices are going to be almost identical, and for some of the others the difference is huge. Mentally ranking them from first to last has the *implication* of same-sized discrete steps. If we loop back around to the idea of politics, it's easy to see that graph as being even tick marks, each group in an equally sized bin.

<img src="/nonfree/blog/quantized/equidistantpol.svg" alt="equidistantpol" style="zoom:50%;" />

even though if we *realllllly* insist on making it a 1 dimensional spectrum (already dumb) the reality is that while mentally we see it as equidistant steps, the actually placement of those steps on the spectrum is probably a lot more like this - though you should be imagining a bell curve sitting atop this graph, so the vast majority of people are still in the bounds of normalcy.

<img src="/nonfree/blog/quantized/realitypol.svg" alt="realitypol" style="zoom:50%;" />

The problem being two fold:

1. The distance between the crazies and the normies looks closer when everything is equi-distant. This makes it easy to play the mental game of "All [Other party] is just a step away from nuts"

2. If someone is just barely over that line, you now mentally see them as fucking nuts (the criss cross zone here) even if there's still a lot further to go into the deep end.

Keep in mind, we've now jumped from mentality to reality, our lil' monkey brains are probably still thinking we're impartial and putting things into equi-distant steps. But, frankly, it's probably worse than this. Given you're here, on my quite liberal site, it's also likely that to *you* the situtation is more like this:

<img src="/nonfree/blog/quantized/liberalpol.svg" alt="liberalpol" style="zoom:50%;" />

But that, mentally, you'd like to think you're still thinking this:

<img src="/nonfree/blog/quantized/equidistantpol.svg" alt="equidistantpol" style="zoom:50%;" />

This is {{< smalltext >}}(one of the many reasons){{< /smalltext >}}why the 💩 is currently well past the fan and now covering the walls - not just for politics, but for everything. From Cryptocurrency to the Music Industry. It's not just a matter of polarization. If it was, people could see that. It's a problem of recognizing that not everyone *is* polarized. Hell, <u>the majority oppinion on any subject is **apathy**</u>. Readers of this site are quite likely to have *very* strong opinions on crypto currency. Do you how most people feel about it? [They don't even know what it is.](https://theharrispoll.com/new-survey-shows-nearly-half-of-americans-are-unfamiliar-with-cryptocurrency/) But when we see the bins as all being so close together, it's easy to think everyone must have an opinion, after all, it's so easy to fall into one side or the other! But we forget, the plateau of not giving a shit followed by the ocean of mild opinions far outweighs the crazy. If we quantize the bins to all be the same size, we loose this perspective.

So, that sure sounds like I'm just screaming into the void "Stop putting people into mental bins" or "Don't be prejudice!". Yeah, no. I'll be realistic. You're going to anyway. Humans are tribal creatures. We thrive on the idea of an in-group and an out-group. What I'm arguing for is taking a step back, looking at your biases, and asking two questions:

1. Are the states being quantized to reasonable (ex: being split by a normal distribution, if applicable)
2. Do you have enough states you're quantizing into? (not just "Liberal" and "Conservative")

---

Okay, so now I want to look at a few "cults" in particular. For the sake of being at least a bit less of an asshole, all of these are groups I'm a part of to some extent - so, yunno, I'm calling myself out here too.

<img src="/memes/speech100.webp" alt="Skyrim Speech 100" style="float: right;">

I'm also not going to comment on any of the fan/hate clubs around a particular personality. To be clear, I absolutely do think these fan clubs around tech leaders as a massive problem I just don't think I have a high enough speech level to talk about any of them in particular without getting myself harassed by an angry mob, which would just distract from my points. So, instead I'm going to focus on particular groups and technologies.

### Case study 1: Linux

I could rehash most of the [Linux Sucks](https://www.youtube.com/watch?v=5pOxlazS3zs) series, but that's not what I'm here for. Yes, Linux sucks for all the reasons all of those reading this already knows it sucks. But the *CULT* of Linux is also the fucking worst. Do you know how most distro offer support? Well, assuming they even do and don't just say "nup, that's not supported!" the actual, offical support channel itself is often IRC. If we want the year of the Linux desktop to come, maybe we ought to realize it's not 1998 and that asking people to use a chat software where incredible hoops must be jumped through in order to get messages while your computer is off is, uh, not great. Now, I'm not saying Discord, or Telegram, or Matrix, or yet another Discourse forum is the right call either, but IRC? Really?

I bring this up to make a point. Enough of the Linux community has a massive boner for the good ol' days of Slackware and enough hate for Systemd to power a small city that it's no wonder [that Linux is having trouble finding young talent](https://thenewstack.io/growing-new-linux-kernel-developers/). It's like they looked at the ham radio community and said "Oh! Nice Gameplan!". I'm 23 and I can see this from a mile away.

And yeah, there's some awesome new stuff going on, from Valve's work on SteamOS & Proton to novel projects like [Arcan](https://github.com/letoram/arcan).

But let me wrap this back around to the point about people mentally binning people into groups. As a Linux user, I tend to bin people into Mac Users, Windows Users, and then into Noob-y Linux users and Linux Wizards. This, clearly, is a massive mental simplification. Even ignoring the lack of buckets in which I group other Linux users, this assumes that all Windows users are of the same technical proficiency, when in reality there's probably *more* people that are extreme Windows power users (able to dive into the registry with ease) than there are Linux users that can use `tar` correctly on the first try. Of course, the *average* Windows user will still be nooby-er than the *average* Linux user - but then that's just because they never even had to learn how to install the OS where using Linux implies someone already has gone out of their way to lean something- again, the most common stance is apathy. The bigger problem here is just that my mental catalog of users dosen't even include a list of "expert Windows users" because that's just not a bucket I want to see as existing. "If you're an expert, you wouldn't be using Windows" being the common, albeit subconcious, belief among Linux users. 

For me at least, this is roughly the metal map:

<img class="center" src="/nonfree/blog/quantized/linuxgrid.svg" alt="linuxgrid" style="zoom:30%;" />

And while I know there's at least a few dozen other WSL users out there, the fact that I have yet to encounter one in the wild makes it so that my metal picture of things just doesn't even include that upper quadrant. If someone says the use Windows to, I immediately lump them into the same group as the Grandmas on XP. I know it's wrong - hell, I'd actually bet that a healthy majority of PC gamers have tweaked at least a few registry values and a still healthy percentage able to do things like diagnose faulty RAM and comfortably navigate around command prompt. But still, this is the mental picture I get, and I assume many Linux users have too.

We've managed to make it a cult, and because there's this sort of persumption that all Linux users are pros, as if booting into the OS one time awakens some sort of inert ability, it makes choices like using IRC as a support channel seem sane.

**Lesson:** Letting a technical choice turn into an ideological one can lead to one hell of a superiority complex

### Case study 2: Ham Radio

<style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet">
.major{
    font-family: 'Major Mono Display', monospace;
}
</style>



<p style="font-family: 'Major Mono Display', monospace; padding: 20px;">CQ,CQ,CQ, This KE0WGV, Killo Echo Zero Whiskey Golf Victor calling CQ and standing by.<p>
Ham radio is, despite what it may seem, not dead. However, the average of license holders is, according to very official sources, really fucking old. Unfortunately, it's quite hard to know if the hobby is growing or not, as any counts of license holders is likely to include a fair number of the deceased, as, it turns out to be quite difficult to contact the FCC office from beyond the grave (and the jurisdiction of the FCC in such circumstance is questionable)

So, this creates an interesting problem. Getting kids interested in radio in the age of cell phones is already tough (let me restate, I'm 23 - but I still have tried, and failed, to get quite a few younger kids into this) but add onto this the clusterfuck that comes with the ageing radio population:

1. They are largely stuck in their ways
   * Seeing Software Defined Radios (SDR) as "cheating" is quite common
2. They often take up the air waves with politics or medical descriptions
   * Trump and the decay of the human body, just what every gen Z kid wants to talk about!
3. There's a *lot* of hams with a supuriority complex 
   * You don't *work with* an older ham, you get taught by one.

This then acts as a feedback loop, since the lack of young blood deters other kids from particpating too. The entire point of radio is to be social, both on the air and at in person meetups making radios, doing fox hunts, etc. - but if everyone else there is multiple generations from you, you're just not going to have much in common, so it takes all the fun out of it. No fun ⇒ No kids ⇒ No kids talking about it to other kids.

So, let's view this through this quantization lens. Here, the steps are really obvious: generations. From Boomers to Zoomers. The big problem is that the distribution of ages in the hobby is so horribly uneven that instead of being *roughly* a bell curve that corresponds to age<a class="ptr">(1)</a>, the distribution *feels* (again, I can't find good data) more like this:

<img class="center" src="/nonfree/blog/quantized/hamgrid.svg" alt="hamgrid" style="zoom:30%;" />

The effect being that, mentally, ham's are *either* young or old. It's no longer a continuous spectrum of age. As soon as that polarization has happened, the above points I made become a lot more sinister - sure, not *all* old hams act in the way describe above, but there's enough that they get the association.

**Lesson:** Having a demographic split, even if it forms slowly, can damage a community - so **inclusivity** needs to be a priority to avoid one demographic standing out.

{{< speech big >}}

Popping in quick to point out, this point can lead others to the opposite conclusion, that **exclusivity** is the answer. That's how shitty groups like Proud Boys form, and while it is *sustainable* (making such groups dangerous) it's still the exact effect we're trying to avoid!

{{< /speech >}}

### Case study 3: Gear: Keebs, GPUs, and Synthesizers

Up above I said that there's cults around some devices, one that really stands out for this is mechanical keyboards. In fairness, the mechanical keyboard enthusiast community itself is actually pretty friendly, welcoming, and diverse. so I'm not calling anyone out there. Instead, the actual subject matter is... odd. I mean, yeah, building your own keyboard is already something your average person would ask "but... why?" to. The thing is, that list of reasons is pretty extensive:

1. Ergonomic key layouts
2. Added buttons/knobs/screens
3. Ability to type μ𝕟ιcⓞdε keys directly.
4. Choice in switches, to get the exact right tactile feel
5. Choice in keycaps for looks.

However, if you go over to [r/MechanicalKeyboards](https://www.reddit.com/r/MechanicalKeyboards/) a good portion of what's there has exactly one advantage: They look cool. A fair number of enthusiast have enough keyboards they display them on shelves, and a lot of these would be pretty awful to use daily. There's a tiny bit of my soul that dies when I see that. It's just this weird cult where these tiny, awful to type on keyboard that absolutely don't have enough keys that are popular and give people a rush on fake internet points. This, in turn, creates a mad fever for competition to make the most artisan keyboard with hand made keys and rare woods - individual keycaps going for $50 is common.

<img src="/nonfree/blog/keysticker.webp" alt="Key switch sticker" style="float: right; width:16%">

Now, it's a hobby, and as with any hobby purchasing decisions don't have to be justified with their utility, if the end goal is to provide happiness, I'm not really going to judge. I just really question that it does for most people, at least long term. Like, after the rush of internet points... what? You're going to show your fancy key to your friends when they come over? Like, if it were stickers on a laptop lid I'd even understand a bit more - other people are more likely to see that. You might make a friend from a conversation struck up by one. Hell, I actually have a mechanically keyboard sticker on my own laptop.

Let me wrap back around to this though, and talk about two other communities, though I'll keep it brief:

There's this sort of joke among PC gamers that by the time anyone can afford a good GPU, they don't have time to game and that when they finally do have time, they spend all their time overclocking and tuning<a class="ptr">(2)</a> - they never sit down and play a game.

Then, there's the synthesizer community. Here, among the many, many problems in the community itself, there's this issue of people collecting and hoarding a huge amount of gear... and not actually making music with it. Now, I'm absolutely guilty of this as well, and to some extent it's not as big of a deal as it may seem: for many, the fun is in sound design, so making music isn't even the end goal. Still, there's a lot of people who spend more time hunting for gear on reverb.com or planning out a eurorack system on modulargrid.net than actually using the gear they have.

So, my real point is that if passion for gear is taken to far it tends to result in forgetting why you cared in the first place. This leads to this weird situation where the people who are most hevily invested (literally) in a hobby tend to be the least actually involved with it, yet everyone else develops this unhealthy lust for that position.

This essentially divides every community into two: The gear snobs, and the people actually using the thing.

**Lesson:** Recognize if you're about to fall into the pit of gear snobbery or lust

### Case study 4: 3D Printing

3D Printers are really cool, I mean, really, you can bring your ideas from 3D model into reality! So why wouldn't you want one?

Well, first, consider some things:

1. Whatever you're printing needs to be, well, printable. This means minimal overhangs, a decent sized flat base, etc.
2. You're limited by size
3. You can *probably* only print in one color (or a single, multi-color filament, like rainbow)
4. Nothing you print will be food or body safe
5. Good quality or solid = very long print time
6. Your melting plastic
   * This means you're making something that will basically never biodegrade
   * There's some nasty fumes put off
7. The end result will probably be fragile
8. Printers are a pain to calibrate, you will have a lot of failed prints - especially at first.
   * Even more non biodegradable plastic waste.
   * Even more time per print.

So, with all of those things in mind, they're a lot less cool. I'm not saying you shouldn't try it out, what I'm saying is if you don't really have any ideas for what you'd want to print or you've only had the once-or-twice yearly time where you've wanted to use one, you're probably better off ordering the part pre-made from a print farm.

Now, maybe you do have tons of things you want to print! Maybe you're into modeling and painting figurines from your favorite games and anime. Maybe you need a ton of props for a big model train setup. That's cool! But I don't think that's the majority of 3D printing enthusiasts. 

It could also be the case that you're just fascinated by the idea of working on the mechanics and optimization of 3D printing, you're really into tuning systems and trying out new materials. If that's the case, go for it. Please do consider what you'll do with all the failed print plastic noodles though.

**Lesson:** Don't jump on hype trains without having a reason to ride

{{< smalltext >}}... Also consider if what you're making is worth the environmental cost{{< /smalltext >}}

{{< smalltext >}}... Also don't forget the worth of your own time{{< /smalltext >}}</br>

{{< smalltext >}}... Also please don't buy anything cheaper than the Ender3. eWaste isn't just low end graphics cards.{{< /smalltext >}}

### Case study 5: Furries

<img src="/nonfree/character/vega.gif" alt="Vega Dancing" style="float: right; width:20%">

This post has been really negative, as I've gone out of my way to portray multiple groups and hobbies as being bad in one way or another, with the reason often boiling down to falling to deep down a rabbit hole. While that absolutely can be dangerous and that's a point I wanted to make, it can be incredibly positive as well. Largely, it's a matter of avoiding the bad and cultivating the good.

For example, I'm a furry. To have a website as big as this one on the internet and own a fursuit, it's pretty clear I've gone pretty deep down the rabbit hole<a class="ptr">(3)</a>. In this case, it was 100% worth it, as some furs are really heckin' awesome. I mean, just look at (almost) all of the {{< button relref="Interviews/interviews" color="interview">}}Interviews{{< /button >}} on this site. But at the same time, there's a lot of issues in the fandom. Honestly, while the media like to play up the sexual nature of it, that's honestly pretty tame and I haven't seen many issues with it personally. Instead, to me, the issue is the sheer amount of alcoholism. It's honestly a bit morbidly impressive. For me, being a furry has been an immensely positive experience. I have made some of my best friends, been given amazing professional advice and opportunities, become more confident, and just generally had a good time.

<img src="/nonfree/character/box.png" alt="Vega in a box" style="float: left; width:18%">

Mentally, I think I categorize furies into having tags - like metadata on a file. This is unlike the above where the categories had all been exclusive and on a spectrum that's just been chopped up. Here, they're just labels I put on for my own mental catalog. These include Nerd, Artist, Lood, Closeted-fur, LGBTQ+, Friendly, Creepy, among many others.  You'll notice that, largely, this isn't furry exclusive. This is just a matter of assigning labels to people from your own perspective. It's not really great to do, and it may even be harmful, but you're going to regardless so you may as well be conscious of it and the failings there in.

For example, mentally only having one tag for artist means I'll forget if someone can do 2D or 3D art or if they can animate. Similarly, only having one mental tag for "nerd" may cause me to forget if they're deep into programming FPGAs or if they're more into JS and web dev; only remembering LGBT+ means I occasionally forget pronouns. Clearly, that's not a fine grained enough system. Unfortunately, these mental systems aren't something we consciously make, so it's hard to fix.

Still, for me the relevant part is that from that list of tags I give someone, I can decide to prune them from my mental list of people I bother to stay friends with or I can try to maintain that relationship<a class="ptr">(4)</a> This is a healthy thing to do, both at a personal level and a community level.

**Lesson:** Not all nerdy cults are bad, but you should pay attention to avoid the bad connections and cultivate the good.

---

### He Who Shall Not Be Named.

Look, clearly the absolute worst offender on all of this is the NFT & Crypto mess. The God like status of Musk, the toxic "to the moon" and "everyones going to make it" atmosphere where any honest criticism is just ignored and assumed to be haters spreading Fear Uncertainty and Doubt (FUD) is the most toxic cesspool I have ever seen.

<img src="/memes/greed.gif" alt="MrKrabs being greedy" style="float: right;width:40%;padding:10px;">

Still, **I know you might disagree with this,** so I wanted to save this full on assault until now because, while *I am anti-cryptocurrency & NFT* I acknowledge that you, the reader, may not be and I think that if you are in that bubble having tho opportunity to think for yourself is valuable and I want to respect your decisions while showing you what questions I asked myself that lead to the conclusions I have. If you are pro cryptocurrency & NFTs, I do ask that you look up and watch some opposing views. I would say the same for those that are anti; however, I have yet to read anything actually convincing outside of arguments that it can make you a lot of money. If you legitimately have good points to be made, feel free to [tweet articles at me](https://twitter.com/Vega_DW). (within limits, please don't drown me in it)

## Conclusion

Clearly this post had next to nothing to do with quantization, not really. The thing I really want you to take away from all of this is that you should occasionally take some to reflect on your hobbies, interests, politics, etc. and ask a few questions of each, first the big two from the start:

1. Are the states being quantized to reasonable (ex: being split by a normal distribution, if applicable. Are the biased?)
2. Do you have enough states you're quantizing into? (not just "Liberal" and "Conservative")

Then,

3. Do you need to untangle your relationship with the thing from your identity as a person?

   {{< smalltext >}}**Remember:** It's not always a bad thing to identify with something, but you should at least be aware of it!{{< /smalltext >}}

4. Are you getting what you want to out of the thing in question, or do you want to return to a previous state?

5. Would investing into the thing in question more actually make you happier? What about less?

Also, as I tried to point out with the 3D printing section, it's worth considering if you really want to invest yourself in the thing at all. Each of us only has so many hours and so many dollars to spend.

Take it easy,

\- Vega

{{< smalltext >}}... and maybe next time I'll sneak in a conversion about respect with a title about aliasing or gun control under the guise of the Fourier Transform. You can't stop me!{{< /smalltext >}}

<ol hidden id="footnotes">
    <li>Yes, I know this is wrong too. Like, in most non-athletic hobbies you <i>should</i> expect more old than young as people get into something and stay in it life long. </li>
    <li>... or trying to win the NewEgg raffle to even be able to buy a graphics card</li>
    <li>I am very aware of the pun here. It's not indended.</li>
    <li>even if I do so poorly 😬, If I haven't messaged you in a while, it's more likely you just floated down to the bottom of my recent messages list...</li>
</ol>

