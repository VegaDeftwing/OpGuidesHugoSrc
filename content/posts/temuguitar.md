---
title: "I Built a Headless Temu Guitar"
slug: "temuGuitar"
author: "Vega Deftwing"
date: 2025-02-22
tags: music
---

At the start of January, my coworker and former-roommate sent me a message with a link to a guitar kit on Temu,

<style>
.bubble {
  --r: 25px; /* the radius */
  --t: 30px; /* the size of the tail */
  max-width: 30em;
  padding: calc(2*var(--r)/3);
  -webkit-mask:
    radial-gradient(var(--t) at var(--_d) 0,#0000 98%,#000 102%)
      var(--_d) 100%/calc(100% - var(--r)) var(--t) no-repeat,
    conic-gradient(at var(--r) var(--r),#000 75%,#0000 0)
      calc(var(--r)/-2) calc(var(--r)/-2) padding-box,
    radial-gradient(50% 50%,#000 98%,#0000 101%)
      0 0/var(--r) var(--r) space padding-box;
  background: linear-gradient(135deg,#FE6D00,#1384C5) border-box;
  color: #fff;
  font-family: "Fairfax HD", Fairfax;
  font-size: 1em;
}
.left {
  --_d: 0%;
  border-left: var(--t) solid #0000;
  margin-right: var(--t);
  place-self: start;
  background: linear-gradient(0deg, rgba(255,150,0,1) 0%, rgba(253,216,45,1) 100%);
  color: #000;
}
.right {
  --_d: 100%;
  border-right: var(--t) solid #0000;
  margin-left: var(--t);
  place-self: end;
  color: #000;
  background: linear-gradient(0deg, rgba(0,252,255,1) 0%, rgba(45,168,253,1) 100%) ;
}
</style>

<div class="bubble left">[temu guitar link]</br>Not gonna build the Temu Electric Guitar?
</div></br>

<div class="bubble right">similar kits are on ebay and I thought about it because there were some fretless ones. They're, uh, not good.
</br></br>
I think the one reason to get them is the body. Throw away everything else.
</div></br>

<div class="bubble left">lmao. I'd venmo you half the cost if you buy it
</div>

And this is how we wound up here, because in return, he wanted me to write about building this Temu monstrosity.

I wound up getting [this kit](https://www.temu.com/-diy-electric-guitar-kit-basswood-body-rosewood-fingerboard-maple-neck-24--6-strings--pickup-selector-volume-tone-controls-2--1-dual-coil-pickups-28-1-cable-no--unfinished-build-set-diy-guitar-kit-g-601099914783488.html).

<img src="\fairuse\other\temuguitar.webp" style="border-radius:20px;height:30em;">

I'm going to skip to the conclusion first,

<p style="font-size:5em"> Don't buy it.</p>

Surprising nobody, it's a massive piece of shit. While I got mine to be roughly playable when done, I don't even know what to do with it. It's not good enough that I'd even want to give it to someone starting out, and it's not worth putting any money or effort into.

But in the unfortunate chance that you're here because you bought this yourself or the off chance you just enjoy watching someone with no experience work with sub-par parts to make a mostly useless end result, let's continue.

First up, I wanted to make the body look cool. I did this via high voltage wood burning. So, before I show that off, I need to give my standard warning:


{{< tip >}}

DO NOT DO HIGH VOLTAGE BURNING.

Seriously. I cannot overstate how dangerous this is.

I burnt this myself. I have an electrical engineering degree and that, still, isn't even the slightest bit of qualification to be doing this. Veterans with far more experience have been killed.

It is so dangerous, [you cannot show off your work at professional woodworking events](https://www.woodturner.org/Woodturner/Woodturner/Resources/Safety-Materials/Safety-Fractal-Burning-Lichtenburg-Burning.aspx).

The plans to make a burning setup are only available on the internet because none could retail while passing common electrical safety standards. If you are an aspiring EE or maker, that sentence should strike terror into your heart.

It's exceptionally stupid to even try this. It can and will kill you.

{{< details "But I really want to though....">}}

</br>

I'm not going to give you directions for this, sorry. But if you absolutely must, here are my tips:

* Use good high voltage testing and safety equipment. If you don't know how to check that, or what ratings to look for when buying things, then don't
* Make sure you're using high voltage rated components, especially wire
* Fully understand the circuit diagram of the device you are using/building inside and out. That includes all of its failure modes and what can short or overload
* Stand a good ways away when you flip the switch. Watch from that distance
* Completely unplug it every time you go to move the contact points

But please, just don't even.

{{< /details >}}

{{< /tip >}}

With that out of the way, here's a fun video (2x speed):

<video width="100%" autoplay loop muted>
  <source src="/nonfree/blog/temu/bodyburn.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

From there, I stained the wood, epoxy'd in the burn, and lacquer'd over the rest. I had never used lacquer before and about half my attempts with epoxy in the past were failures. This time was no exception, and it came out... meh. I couldn't get the finish level due to how bumpy the epoxy came out. I wasn't too worried about it though. In my mind, this is all an experiment, so the looks don't matter *that* much.

<img src="/nonfree/blog/temu/body.jpg" alt=" ">

To hurry this along to the real problems, let's rapid fire out the other things I did (and didn't do) before getting to the actual assembly:

* The fret ends were all quite sharp. I bought a fret end dressing file and **cleaned up the sharp ends**.
* The frets aren't seated very well. **I choose not to fix this**, waiting to see if it was worth the time investment once it was built.
* **I didn't level the frets either**, both because I hadn't fixed how they're seated and because, again, time vs what I saw as possibly a totally bust build in the first place.
* **I used Feed-N-Wax to make the fretboard feel less awful**.

At this point, I had a reasonably good feeling neck, a body I thought looked good enough. Time to slap it all together.

First, I attached the neck to the body. This went fine. I pre-drilled the holes a bit bigger in the body than the neck, it went on well. It fit perfectly into the cavity, an extremely snug, nice fit.

Then, I put the electronics in. This is where things started to go south. The pickups didn't fit. They didn't route the holes for them big enough and I, in my infinite wisdom, didn't think to check that first. After significant frustration with a dremel, I said screw it and put the the biggest bit I had on a wall-plug drill and ran around the holes like a router to make em' bigger.

It worked, the pickups fit, and I didn't even really mess up the finish.

Then, I put in the switch and pots. These came partially pre-wired. I still had to solder the pickups to the switch and the output jack in, but that's fine.

This did give me two pain points

1. Either the screws for the 5-way switch were too long or the wood was too thin, because when fully screwed in they tried to pop the top. This left two very small dots in the finish by the pickup switch - fortunately, I caught it happening very quickly so it's hardly noticeable.
2. It was only at this point I realized I have an extra wire. A wire that should be used to connect to the bridge for extra grounding to prevent noise. Via a hole they didn't drill. FUCK.

I, being most of the way done, decided to ignore this for now. I wanted to get it done and verify that it was functional. This left the final pieces: The bridge and the ... uh, what do you call the head piece on a headless guitar? The anti-bridge? Neck cap?

This guitar uses a rough clone of the bridge and tremolo system that Steinberger guitars use. It's almost floyd-rose esque with a floating bridge. One YouTube video about how to do it later, and it was in, huzzah!

Okay, last piece. The neck-cap string-catch-y end-of-neck thing.

This is where this guitar gets completely fucked.

You see, this particular neck and kit uses what's called a 0-fret. I'm going to steal a picture and description from the  people over at Halo Guitars (Who seemingly make actually good guitars, unlike where this is going) to show you what this should look like:

<img src="https://www.haloguitars.com/store/image/catalog/blog/halo-entelechy-zero-fret.jpg">

{{< quote "[Halo Guitars](https://www.haloguitars.com/store/zero-fret-guitar)" >}}

The picture above shows a zero fret installed on one of our custom headless guitars. Notice there is no nut, only a zero fret. 

The zero fret serves as the starting point of the vibrating length of the guitar strings (the ending point being the string saddles at the bridge). This means the guitar strings will be resting on the surface of the zero fret when the open strings are being played. This is not the case for guitars with regular nuts, as the strings would be resting on the surface of the nut in those cases. 

{{< /quote >}}

Do you see where this is going?

After getting it built, the angle between the string end catches and the 0-fret wasn't enough (or, another way to put it would be the 0-fret wasn't tall enough - though, if it was taller, that would sort of defeat the purpose of a 0-fret)

Therefore, I present to you, a guitar which only functions thanks to a toothpick:

<img src="/nonfree/blog/temu/toothpick.jpg" style="height:20em;">

Now, at this point you should ask, "But did you just install it wrong?"

See, I thought so too! Which is why, before this picture, I actually tried to fix it by removing that metal cap piece, and removing a fair amount of the wood behind it to get it to sit back a bit further. It is now as far back as it can get, resting against some of the trusrod, and it's still not enough. The strings still don't make contact with the 0-fret.

The keen-eyed will also notice the weird screw instead of the bolt for first two strings: That's because the bolt they provided, given there are no grooves cut into the nut-washer-string-holding-thing, weren't long enough and on first string up it ended up stripping. I was just fortunate to find a screw that would work to replace it.

So, all said and done, the guitar *technically* plays,

<iframe width="100%" height="450" src="https://www.youtube.com/embed/WZsmP5xnruw" title="Temu Headless Guitar Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You notice something though? The locking nut for the lower strings is missing again. It literally flew off on my first attempt to record this.

Can I make this guitar sound good. Sure. Do I want to play it compared to literally any of my other guitars or even a cheap baby's first strat from guitar center? No. And neither should you. Don't waste your time on one of these.



