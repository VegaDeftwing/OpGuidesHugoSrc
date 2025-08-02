<img src="/hci/mxpatent.svg" class="lg-no-shadow" style="height:15em;">

</br>
{{< smalltext >}}In 2014, Cherry's [patent](https://patents.google.com/patent/US4467160A/en) for the MX style keyswitch used in most mechanical keyboards expired, allowing for a large variety of new switches and improvements to the original designs to hit the market.{{< /smalltext >}}

# Computing Is Physical

Computers would not serve a purpose to most people if it was not easy to put data in and get data out. If you had a calculator with a broken screen or a broken keypad, it would be useless either way.

The ulility of the devices we use is intrinsically tied to how quickly and comfortably we can put data in and get the data we want out.

# -

One of the frustrating things about shopping for a computer is that we're taught to think about their specs as strictly quantifiable.  You can read something like,

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto+Flex:opsz,wght,GRAD,XOPQ,XTRA,YOPQ@8..144,498,150,152,379,84&display=swap" rel="stylesheet">

<style>
.fjalla-one-regular {
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>


> <h3 style="text-align:left;text-shadow:none;"><span class="fjalla-one-regular" style="color:orange;text-align:left;text-shadow:none;">FauxTechNews</span>:</h3>
>
> <p class="fjalla-one-regular">The 391Q2 is 1.5x faster than the 292U3 but costs 2x as much</p>
>
> But is it the best bang for your buck in Cyberjunk2069?

And make a decision based on your budget and needs, but you can't feel that speed. I mean, sure, you might notice a difference in performance in your applications - and that's important - but an awesome gaming computer with a keyboard covered in mysterious slime and a ball mouse from 1998 isn't something you want to use.

We give a lot of weight to specs we can quantify but which reside out of sight, tucked away in the box under the desk or below the keyboard. That doesn't mean we should ignore the real, tangible differences. For example,

* Maybe that new display is too reflective
* Maybe the keyboard feels terrible to type on
* Maybe that new gadget used low quality parts
* Maybe it's all glued together and can't be repaired
* Maybe the fans are loud
* Maybe you find it ugly

Things we don't traditionally think of as "part of the computer" do change how it feels to use it. If your chair or desk aren't comfortable and don't suit your needs, that's a problem. If you always go chasing the easy, quantifiable (and easily marketable) upgrades, you'll probably miss out on some of these vital points.

To start with, this page will look at direct computer input devices.

The next two will look at the environment (desk, chair, etc.) and output devices (monitors, speakers, etc.) respectively.

Then we'll move on to the main event, juicy discussion of the software, websites, and tools we use, what problems they have, and what can be done about them.

# Input Methods

If we think only in terms of on-the-box specs, it's pretty easy to think "Yep, it's a keyboard, it types." but should we accept "it functions" as the bar for quality for the primary interface between our thoughts and these awesome tools?

By the time home and office computers made it to the masses, we'd more-or-less figured out the primary two input devices that work for people are a mouse and a keyboard. But back then computers were *expensive*, and a more expensive keyboard didn't factor much into the cost:

![ModelM](/hci/modelm.svg)

The venerable IBM Model M keyboard has almost certainly earned its place among computer enthusiast's hearts in part due to survivorship bias, but it was damn good. Each key had an honest to god spring underneath. If there's any valid complaint to be levied at this keyboard it's that the keys may require **too much** force for your fingers.

There were, of course, bad keyboards back then too. But today? Cheap, plastic keyboards with membrane keys is what ships with modern desktops and so have slowly taken over every office and home. They're what's in the box, so they're what your family or business uses.

Gone are the chonky, clicky keys each with their own spring and instead we have thin plastic membranes in a thin plastic shell.

Gone are the clearly defined keys with sculpting to be defined buttons instead of a flat surface.

It's like people forgot what kinds of interfaces human hands are good at using.

{{< light >}}

But only if you don't care to use something else.

There was something of a revival of these better keyboards. You can now buy a cheap mechanical keyboard at your retailer of choice<footnote>Preferably not Amazon. Not because you'll get a bad mechanical keyboard, but because Fuck Amazon.</footnote>, for a relatively low amount of money<footnote>Quick searching of some of the generic cheaper brands put them about $40 for true, mechanical switches</footnote>.

Much cooler, IMHO, is that you can **build** your own keyboard, that's what I've done:

<img src="/hci/ergo.svg" class="lg-no-shadow">

You can make a keyboard in any shape or size. Split, tiny, huge, built in joystick, go nuts. There's a keyboard for everyone. You can pick between hundreds of switches to get the perfect amount of clicky feedback, pressure needed to press, etc. Just give [r/MechanicalKeyboards](https://www.reddit.com/r/MechanicalKeyboards/) a good scroll and look at how pretty they are!

To me, what's cool about these isn't just that they're way more comfortable, durable, and repairable but that the code running on the keyboard can do some real 𝓶𝓪𝓰𝓲𝓬. 

For example, I have [Space Cadet Shift](https://docs.qmk.fm/features/space_cadet) setup, which let's me type opening or closing parentheses by tapping the left or right <kbd>shift</kbd> keys respectively, since you'd otherwise (in normal typing) have no reason to press shift independently.

I. LOVE. THIS.

{{< /light >}}

## One Size, does not in fact, fit all

While the ModelM or a custom built mechanical keyboard would be great to use all the time, there's a few problems with that vision:

1. They don't fit in laptops<footnote>Yes, I'm aware laptops with mechanical keyboards exists. These range from either the ludicrously thick to "Okay, I *guess* we can call that mechanical" though.</footnote>
2. You probably don't want to hook up a USB keyboard though a dongle to your phone every time you send a text.<footnote>There are bluetooth keyboards that have easy "select a device" buttons so you actually could do this at your desk, I guess? Does anybody actually do that?</footnote>
3. Not everybody is physically *able* to use a normal keyboard.

{{< light >}}

Many old laptop keyboards, circa ~'00-'05, were *T H I C K*. This made the laptops thick. Thin and light were the "future", So, we entered the dark ages of kinda shitty keyboards. But we're more-or-less out of that now. So long as you shop around you can find something with a good keyboard. Or you can buy an old, chunky ThinkPad and for 95% of what you want to do with a computer it's still perfectly fast enough.

Both 2. & 3. are addressed by the same point: Innovation **IS** happening.

Do you remember when you were a kid and you constantly wanted to try new things? At some point, as adults, most people settle into their preferences and stop trying as many new things. Well, leeme tell ya', if you're willing to try some different keyboard apps, the variety is mind blowing.

![Dasher Gif](/hci/largedasher.gif)

This is [Dasher](http://www.inference.org.uk/dasher/DasherSummary2.html), a software keyboard using predictive text, primarily made for those that have disabilities.

I, personally, would not like to use this. But there's plenty of other, "weird" keyboard apps that are pretty neat. I'm not about to turn this page into a listicle, but my point is if you actively go looking for them, they exist, and may be more comfortable, faster to use, and let you type with less errors.

{{< /light >}}

## Let's Dig Deeper.

We're talking about keyboards - but this was supposed to a series about the big-picture of technology and our relationship with it. To get to those points, we're going to need to ask some deeper questions.

**Q: Why do we even need to type?**

We don’t. 

We can draw, dictate, or use any of a number of other methods. Typing is convenient because it can be kept semi-private, is tactile (assuming you’re keeb isn’t a 💩), and generally fast enough to keep up with the speed of thought if you know how to touch type.

**Q: What do we want to input in the first place?**

Text (in multiple languages). Links. Images. Diagrams. Code. Commands. Dates. Our wandering thoughts. Spur of the moment ideas. Everything.

Keyboards happen to be a decent input device for some of these things, and tend to pretty much suck for others. (Come on, make art by typing in color values for every pixel. 𝐼 𝒹𝒶𝓇𝑒 𝓎𝑜𝓊)

**Q: What makes something good as an input device?**

It’s easy to list off good qualities of the familiar: 

* Tactile
* Responsive (low latency)
* Customizable
* No αɯƙɯαɾԃ movements
* Keep the users hands and arms<footnote>Assuming they have hands and arms!</footnote> in a natural position
* Characters laid out well for the user’s language(s).

But how do you get down to the core of this question without just listing traits of ‘goodness’ in existing things, what actual goals should we strive for.

Should it be one unified device? With smart phones and tablets, the trend sure seems to be to make everything a touchscreen.

{{< bigquote "*[A Brief Rant On The Future Of Interaction Design](https://opentabletdriver.net)* by Bret Victor" >}}

I call this technology **Pictures Under Glass**. Pictures Under Glass sacrifice all the tactile richness of working with our hands, offering instead a hokey visual facade.

Is that so bad, to dump the tactile for the visual? Try this: close your eyes and tie your shoelaces. No problem at all, right? Now, how well do you think you could tie your shoes if your arm was asleep? Or even if your fingers were numb? When working with our hands, touch does the driving, and vision helps out from the back seat.

{{< /bigquote >}}

So, what goals out weigh others? Is ergonomics more important than tactility?

It depends.

That's why this topic is so interesting. My hands are not your hands. I play music, make art, write stories, and code. Part of the reason I got that fancy keyboard in the first place is because I was starting to experience some nasty hand cramps that were particularly bad if I was switching between guitar and typing a lot. 

I was willing to try just about anything so I switched to Dvorak<footnote><a href="https://en.wikipedia.org/wiki/Dvorak_keyboard_layout#/media/File:KB_Programmer_Dvorak.svg">Programmer's Dvorak</a> is a thing and honestly I want to know if anybody actually uses it? Having the numbers like that hurts my brain.</footnote>, an alternative keyboard layout:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/KB_United_States_Dvorak.svg/1200px-KB_United_States_Dvorak.svg.png" style="filter: invert(0.87);height:10em;">

That helped, but didn't entirely fix my pain so I tried the ergodone (That fancy, split keyboard) and haven't looked back. But that's left a few interesting points, ignoring the obvious reason of price, why are people still using something seems to be obviously *worse* - in a word: Familiarity.

And like, sure, I get it. Being a Dvorak layout user, I feel the pain of not being able to type as fast on anybody else's QWERTY keyboard. I understand not wanting to take the time to re-learn. Even if the grass might be greener on the other side, there's a lot to be said for not needing to do so much god damn lawn care to get it that way. I understand,

**But I disagree. I think it is worth it.**

We can do so much better. Our phones have auto correct and limited [text expansion](https://espanso.org), and, broadly everyone loves it. Sure, it ducks up every now and then, but broadly it's much easier than not having it at all. Similarly, predictive text does a pretty good job. 

So why do our beefier systems not do something a thousand times better with their superior hardware?

The bar is pretty low. At a minimum we could at least make it easier to grab text out of screenshots.

But why are we not doing natural language processing so that I can describe a graph or math equation without needing to have some archaic set of {{< katex >}} \LaTeX {{< /katex >}}symbol names committed to memory? <footnote><a href="http://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf">Seriously,</a>  check these out. You won't believe some of what's in here.</footnote>

Or making it easy to tune mouse acceleration curves?<footnote>There actually are [tools for this](https://github.com/a1xd/rawaccel/blob/master/doc/Guide.md), but really, why is this not in the OS natively?</footnote>

Or letting buttons on the mouse control what keys on the keyboard do or vis-versa?

There's so much opportunity and seemingly low hanging fruit here.

{{< light >}}

 

While it is frustrating that operating systems aren't bundling good utilities for deeper input capabilities, it doesn't mean they don't exist.

For those unfamiliar, text expansion lets you do thing like type `:brb` and have it get instantly replaced with "be right back". I use [espanso](https://espanso.org) for this on all my computers.

Similarly, there are good options for pulling the text out of any image you screenshot. Increasingly, these *are* being bundled with Operating Systems, so we'll be able to use them without downloading extra software.<footnote>Though you may want to be cautious that it processes locally. I for one don't want every screenshot being sent to The Cloud.</footnote>

Alternative input methods exist for nearly anything you can think of and they absolutely are getting better and more affordable with time. I now have a pen-tablet display that only cost marginally more than my first pen-tablet input I got for my computer that *didn't* have a display, and oh-boy is it a million times easier to draw on the screen directly.

Similarly, the input devices I have for playing music have made crazy progress - I'll get to this more later.

Voice transcription software has gone from expensive to free and open, with real-time dictation locally (your vocie never leaves your device) using free, easy to use tools sure to follow soon, and while there are downsides to the AI-ification of everything, I won't complain about better voice-to-text models.

Innovative hardware options will keep appearing too:

{{< columns >}}

![](/hci/leapmotion.webp)

The leap motion hardware is basically just two cameras without an infrared filter and some infrared leds, 

<--->

![](/hci/leapplayground.webp)

but the Leap Motion software does an actually really good job of using this information to reconstruct the finger positions in software.  

{{< /columns >}}

{{< columns >}}

![pu94](/hci/3dmouse.gif)

<--->

Or what about this mouse where it's a mouse!

The entire body of the mouse is joystick, and there's a joystick on the side.

{{< /columns >}}

{{< /light >}}

 

That mouse isn't even remotely practical to use IMHO.



Plus, some of these are doomed to fail. Even if the hardware is good, marketing a "strange" expensive product is hard, especially when your users have something similar but without the gimmick.



{{< light >}}

 

But like with evolution, sometimes a gimmick sticks. Most mice today have forward and back buttons on the side, and a horizontal scroll wheel for the thumb has gotten quite popular.

{{< columns >}}

Making your own input devices has never been easier either. This lil' guy has two knobs which I use in art software for doing things like changing the brush size. 

It just sends a key press on each 'click' while turning (sending a different key depending on direction). It's a 'hack', but it works in pretty much any software and I think that's awesome.

<--->

<img src="/hci/bdn9.svg" class="lg-no-shadow">

{{< smalltext >}}The [BDN9 is roughly $50](https://keeb.io/products/bdn9-rev-2-3x3-9-key-macropad-rotary-encoder-and-rgb) if you want one{{< /smalltext >}}

{{< /columns >}}

While it may not be trivial to do you can at least sometimes steal old, discontinued ideas and build them yourself.

Speaking of, some of those "old ideas" were pretty good, just not attainable by mere mortals without infinite pocket books.

For example, if you want to try stenography, you can! Hardware has gotten much cheaper than back when you'd have to buy a commercial off-the-shelf unit for it, and the software is totally free.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nRp_1S7cj6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /light >}}

 

Most devices are still not made to take good advantage of the shape of human hands though. Take that hand-built split keyboard, for example. It can still be radically improved upon by getting a variant that actually takes the shape of the human hand into account, like the Dactyl Manuform:

![](/hci/dactyl.svg)



{{< light >}}

But as that image shows, it does exist. Expensive to buy? Yep. But it exists! Plus, it's open source. 3D Print your own at home, go nuts. It won't be an easy build, but if you use a keyboard enough, it might be worth it.

Cooler yet, input devices can take advantage of more than just our hands! Trying to optimize for hands first - the part of our bodies were the best at doing fine motor skills with - makes sense, but if we're going to complain about not taking advantage of our bodies, then we should mean our *entire body*.

I have some foot controllers in my setup,

{{< columns >}}

![](/hci/mc6.webp)

MorningStar MC6, a MIDI foot pedal that's highly customizable and has inputs for connecting analog expression pedals (the green thing on the left). 10/10 recommended

<--->

![](/hci/stinky.webp)

[Stinky Footboard](http://www.stinkyboard.com) - it's effectively a 4-key mechanical keyboard for your feet. The driver for this product sucks, so I swapped the controller out for a promicro running QMK. <footnote>The Stinky is almost impossible to find today, but slapping a USB HID device capable microcontroller into a [Heavy Duty Footswitch](https://temcoindustrial.com/heavy-duty-foot-switch-cn0003-cast-aluminum-foot-switch/) works pretty well too!</footnote>

{{< /columns >}}

Or, you might have a good use case for an [eye tracker](https://gaming.tobii.com/product/eye-tracker-5/) or an old XBox Kinect. In either case, my point is there is hardware out there that will let you use more than just your hands.

{{< /light >}}

 

Anybody who has every used a wiimote to type anything longer than their name can tell you how tedious body-tracking point-and-click inputs are though. There's a reason the Kinect was seen as a gimmick and that most of those alternate input devices never took off. They're just not that useful.

Speaking of different input devices though, what about pen tablets?

### Pen Tablets & Displays

<img src="/unsplash/tablet.webp" alt=" ">

{{< attribution >}}Photo by [cece kun](https://unsplash.com/@kucee){{< /attribution >}}

I have a pen-display, but, I don't make art much, so I asked some other artists: What bothers them in tablets:

* Latency/Lag (Drawing lags motion)
* Pen and drawing not aligned (Glass thickness)
* Wires & Portability

A ton of artists I know have moved to using ProCreate on an iPad, which fixes the third point, at the cost of the other two.

There's no great option for hardware here. You can avoid the wires and dramatically improve portability if you use a pen tablet (the ones with no display where you look at a different screen that what you're drawing on), but that's a *much* harder skill to master and just not what a lot of people prefer. You can also use an iPad, but then you're limited in software choice and computing power.

Frankly, I don't imagine there will be a magic bullet for anyone here, there's trade offs in any option.

But, honestly, most pen tablets are reasonably good and there's lots of options so it's *fine*.

**Unfortunately**, everything needs software. Even with more competent driver stacks there's a confusing number options for pen pressure: Wintab, Windows Ink, the option to 'Use the device as a mouse pointer' ... It's so incredibly confusing and the required options per application vary wildly. To make matters worse, many of the drivers completely shit themselves if one display is scaled for High DPI and another isn't. 

YMMV, but for an artist that doesn't have the technical skills yeah, it sucks.

{{<light>}}

But, it's getting better.

Pen displays have pretty dramatically come down in cost compared to a decade ago. Most pens don't need to be recharged anymore. Most pen-tablets and tablet-displays both have pretty good options for built in buttons to map in software.

New ideas keep popping up too.  [Microsoft's Surface Studio 2 + Surface Dial](https://www.youtube.com/watch?v=TpWBHkVI1zA) actually had some really interesting and innovative ideas (albeit it's a *weee bit* on the extremely expensive side at 3,500 USD). I also think the [HP Sprout](https://www8.hp.com/us/en/campaigns/sprout-pro/overview.html) did some really neat things too. Sure, both of these ideas more-or-less died, but things *are* still happening.

The hare is improving too. Screens have gotten thinner, making the "thick glass" problem less pronounced.

Best of all, some of the software hell is improving. For one, it seems like the vibe around the web is that most pen tablets and displays work fine in Linux, and "just work" without needing to figure out which input system to use. Meanwhile, [Open Tablet Driver](https://opentabletdriver.net) supports a huge list and adds a ton of extra features and customizable smoothing via a plugin system.

Finally, for artists that prefer to work traditional but want to scan in digitally options like the [iskn](https://www.iskn.co) Repaper are pretty interesting.<footnote>I had an iskn Slate, an older product. It, uh, sucked. New ones might be better, I don't know.</footnote>

{{</light>}}

### MIDI & Music Input Devices

For those unfamiliar,

MIDI, or **M**usical **I**nstrument **D**igital **I**nterface is a bloody ancient standard that's still (mostly) 7-bit and let's you send control messages about actions on a controller made for music, often a piano keyboard, so, something like Key C4 Down, Velocity 8 or twisting a knob may be on a MIDI Control Channel (CC) and will be like CC43 changed to 127.

These messages go to the computer to tell it to use software to make the actual sound. The controller is just the physical interface to make it more natural to play.

In <script>   document.write(new Date().getFullYear()); </script> having a 7 bit standard is a bit archaic, but I already have a separate page on this website devoted to {{< button relref="Music/midi" color="music" >}}How Bad MIDI is{{< /button >}}. I want to talk hardware.

MIDI controllers come in all shapes and sizes, from a grid of RGB buttons to traditional keyboards to just a large array of knobs, so, naturally people took notice, and MIDI can therefore be used to control things it was never, ever meant for. People often try to use it to control video editors, 3D modeling software, and generally anything that Adobe<footnote>Fuck Adobe.</footnote> makes.

So for how useful they are, I can not believe how bad most of them are.

![Novation Launchkey 2](/hci/launchkey.svg)

This, for example, is the Novation Launchkey MKⅡ. It is, quite possibly, the worst waste of money I have ever seen.

You see, a musical keyboard is supposed to react to how hard you press the keys. This does, but good luck hitting in the perfect lil' sweet spot that doesn't send the minimum or maximum value.

Musical keyboards also, typically, aren't supposed to let the key wiggle much. This one is almost comical in how bad it is.

What about those light up drum pads at the top? Well, I sure hope you're down to punch the ever living fuck out of them to get them to respond.

Now, this isn't a review of Launchkey MkⅡ. Instead, I'm trying to make a point. On paper, the Launchkey has everything. Sliders for controlling the mixer, a drum pad, a fairly large keybed, etc.

But it just absolutely sucks to play.

For everything on this page, though especially for MIDI controllers, people should be able to develop a relationship with tool like a traditional musician does with their instrument. You should be able to play it via muscle memory and know exactly how much pressure and force each key, knob, or switch takes to make movements fluid.

You can't do that if they're not consistent or well made in the first place or if there's not enough tactile feedback. But more than that, they need to multi-dimensional. On a guitar, every tiny movement and change I make will affect the sound. I can bend the string on my finger to make the pitch change, alter the pressure to control how long a note rings out, etc.

On a basic MIDI keyboard? You get how hard you hit the key/button. That's it. You can make good music with that still, of course, but compared to the liveliness of an input method that captures more data it's just not great.

{{< light >}}

Fortunately, MIDI is also pretty awesome.

7-bits? Uni-directional? Yeah. That's bad. But it's also daisy-chain-able and weirdly abusable. If you go read that MIDI page, you'll see you can just combine two messages to get 14-bit controls for a lot of tools. Additionally, **M**idi **P**olyphonic **E**xpression came in to radically push the enevelope by (ab)using the existing standard.

While they're still pretty expensive, we now have **MPE** keyboards where the keys *are* supposed to wiggle horizontally because you can use it to add vibrato, so on this keyboard this motion: 

<img src="/hci/osmose.webp" style="filter: grayscale(1);height:10em;" >

Actually makes the pitch "wiggle" like it would if you did the same to a guitar string!

There's even more keyboards where the pressure, per finger, over time can change the sound. Sure, these are still kinda expensive<footnote>The "big two" MPE controllers at the moment are the OSMOSE (The one with wiggle gif above) and Roli Seaboard, which are ~$1400 and ~$500, respectively. Though, at the low end, there's the K-Board which can be had for a hair over $100. You get what you pay for, but I've owned all of them at one time or another and enjoy each ... even if Roli's software is annoying AF.</footnote>, but they exist!

Plus, MIDI 2.0 is *finally* out and there's starting to be some real hardware products you can buy. Software support is spotty, but it fixes a lot of the old gripes.

There's cool hardware out there and crazy amounts of innovation happening to make input devices for making music with computers not just controllers, but deserving of the title "instrument".

{{< /light >}}



-- TODO: I've made it to here so far on the rewrite. I suspect some of the following sections can be outright removed or at least trimmed down instead of updated/edited though.



### Audio And Video

[Your **webcam** is shit](https://reincubate.com/support/how-to/why-are-webcams-bad/#putting-them-to-the-test). You know how I know? Because it's a webcam. Even the everybody's go-to, the Logitcech C920, is shit<footnote>I will concede the C920 can be made significantly less shit by just turning off most of the 'auto' settings and setting everything by hand. This can be done on Linux with GuvcView, but on Windows I've found all the recent drivers make it impossible, so, I stand by it still being shit.</footnote>. You know what else is shit? Your microphone. When you type on a laptop it sounds like damn earthquake, and if you get comfortable and lean back in your chair you suddenly get quiet. Maybe you have a gamer headset? Cool, the boom mic sounds about as good somebody screaming through a cardboard tube.

But, better cameras do exist, and, if you're willing to shell out the cash, you can get a decent mic. Unfortunately, either way they have a problem.

The default settings are still shit.

On webcams you have auto-white balance, auto-focus, auto-gain, etc. and everything it tries to do is awful. On a laptop where it will legitimately be in a different setting regularly, that's some-what forgivable, but on a desktop webcam? Like, the only variable here is if there's a window letting light in. Make calibration easy and give me a white-balance slider. Please. Or just make better cameras and let the open source community make better drivers. I assure you there are plenty of rage-filled nerds willing to make your product not suck so hard.

Right now, my best webcam is *my phone* running [droidcam](https://www.dev47apps.com). I have the (at time of writing) $80 logitech C920 webcam. A device which is meant to ONLY be a camera. It has one job. Yet, this awkward hack using my phone looks MUCH better. Otherwise, if you have money to throw at the problem you can [Use a "Proper" Camera as a Webcam (Laurence Tratt)](https://tratt.net/laurie/blog/2022/using_a_proper_camera_as_a_webcam.html)

---

Your mic is also shit for the same reason. When doing audio mixing for a video or podcast there's some basic things that will almost always be in the mix chain: A noise supressor, A De-Esser, A Compressor (or multiple), and an Equalizer. For the most part, the settings on these things can be determined pretty algorithmically, or, better, a database of settings for hardware can be created and maintained - You'd still need to adjust for your voice (particularly for if you have a low or high pitch voice) but it could massively help.

If you've gone out and gotten an expensive mic or audio interface to plug you mic into, you may have decided to get one that connects to the computer and is **powered by** USB. This is really, really dumb. I think every audio device I've ever used that connects via USB has had some sort of noise issues because of the USB power. Stop it. Isolate the power and use a real power supply and some real filtering. Please.

{{< details  "Why is USB Power so bad?" >}}

It isn't *universally* bad. It's just *usually* bad. Skipping over the technical details about how the USB spec treats power and ground, how differential signaling works, and all of that noise there's one pretty obvious thing to pick on: Phantom power. A lot of microphones need a low current, 48V DC offset to be applied to them to work. So, think about it, this means you need to take the 5V in from USB and boost it all the way up to 48V (a nearly 10x boost), keep that 48V DC power super clean (no ripple in the voltage) and you only get the 500mA or so from the USB port to do it. Meanwhile, in that same power budget, the processor in the audio interface, DACs, ADCs, and OpAmps all need to run. It's just not practical. Also, consider that most of those parts will need both a positive and negative voltage rail usually at +12 and -12, so, now you're taking 5V and you need to make three different voltages that are quite "far away". This all sounds rather backwards to me.

{{< /details >}}

Though, probably the most obnoxious thing that results from this is the inability to route audio in any reasonable way. Linux and Mac it seems have this done semi-well, Mac with Core Audio and Linux with Jack, but on Windows if you want to use a nice mic to talk on VOIP you better hook up your mic on the first input on the audio interface or you're shit outta' luck my friend. 

I'll expand on this thought later, down in the **Your Audio Sucks** Section.

Finally, *nobody* has ever wanted their notifications to show up when sharing their screen. Why are notifications not deemed as a sort of 'draw over' element by default?

### Application Specific Controllers (MIDI Controllers, Video Editing, etc)

First of all, this is done in a stupid way in most circumstances<footnote>In the case of things that can be used standalone, not connected to a computer, like my afforementioned MorningStar MC6 midi controller, it makes some sense.</footnote>. There is no reason you should have single use hardware that sends specific commands that are not programmable by the user. Like I said above, let's do all the mapping in software. This lets features be added later and users make better use of their controllers.

### Voice Control

The first thing I want to point out is how incredibly English centric voice control is. I only speak English so I lack any more to say on the subject, but come on.

Next, why can my phone do voice control but my computer either can't or just really sucks at it. I know you can use OkGoogle from Chome, That Cortanna is a thing, and that there's multiple open source projects that implement voice control. But, they all sorta suck. None of them can do much beyond just setting a timer or working with a limited set of supported applications in a way that fails more often than not. 

If anything, I think Alexa is a bit ahead of the curve on this making it semi-easy to add custom actions, but does *anybody* actually have Alexa For PCs installed on Windows?

I want voice control that can actually -do- something. Not 15 competing standards. It's okay if they all implement the same standard protocol, but unless there's a standard that all programs can start tieing into and it's given real, time saving capabilities nobody will use it. This mostly comes down to needing much, much better natural language processing - something that [GTP-3](https://en.wikipedia.org/wiki/GPT-3) has shown is possible - and having a way for applications to define accessible inputs and outputs. Think the Unix Philosophy where things can be piped and IO redirected but applied to larger applications and controlled via voice or text entry.

### Object Tracking

What if everything you did was an actionable input? What if you could finger-drum on your desk and get real drum sounds, have your computer pause a video if you get out of you chair, or give the user a warning if they've been sitting with a bad posture for a long time? Between the Kinect, [Leap Motion,](https://www.ultraleap.com) and [Tobii Eye Tracking](https://www.tobii.com) we're staring to get close to this.

I think https://dynamicland.org has a lot of interesting thoughts on this idea and if this vision of the future interests you, you should check it out. [ReacTable](https://www.youtube.com/watch?v=Mgy1S8qymx0&ab_channel=ReacTj) is another interesting concept in the relm of pyhsical computing too.

I do think in the future we'll stop using the basic screen + keyboard + mouse combo and see more 'smarts' integrated into everyday things and our work flows. I really like the idea of having a desk with a camera and projector above it to highlight objects and interact with what it can see- scanning documents, giving feedback on technique with crafts, whatever.

### Game Controllers

Re everything above. Something something make sure they're rechargeable, ergonomic, and simply fun to use. My award for Not Sucking™ goes to the Steam Controller and my award for Best For People With Three Hands™ goes to the N64 Controller.

### RFID Tags

I have RFID tags from Dangerous Things in each hand, I have an RFID based access card for my University, and my parking lot uses RFID tags for entry. Ignoring the obvious security problems with RFID authentication, It's also just not great to have people carry around a card when their phones can already act as an RFID device anyway, it just makes for a very mis-placeable access token which seems rather stupid. I'll talk authentication more in a bit.

### Document Scanners

I will not take this opportunity to rant about printers, no matter how much I want to.

To keep this short: Higher default DPI, options to output via OCR (Optical Character Recognition) directly to the document so you don't have to even store the original document, built in de-noising (remove the dust specs), live scanning of paper via camera for things like helping with math.

## What's worse is half this shit already exists, and it is shit.

Want to look up {{< katex >}} \LaTeX {{< /katex >}} Symbols? [Done.](https://detexify.kirelabs.org/classify.html) Want to have Optical Character Recognition on your screenshots? [Textshot has that covered.](https://github.com/ianzhao05/textshot) But while I could go on with this list, the big problem is of *integration*.

While having an OS like Linux that is tweakabe to the nth degree is unmistakably *fucking incredible*. I also **shouldn't have to**. I should be able to use any computer and trust the OS to have built in methods for getting text from a picture, to trust the OS will let me remap keys so that tapping the [shift keys types perentheses](https://docs.qmk.fm#/feature_space_cadet) or that I can bind the keys to type arbitrary Unicode. The OS should have a **local** - *don't you fucking dare collect all of this data* - store of everything I've looked at so I can go back and search for "mostly purple images" or "links clicked on October 12th". And like, there's about a dozen different chrome extensions that try to do this under the very stupid assumption that essentially all of that interaction will be in browser.



## Ergonomics and you,

You may've noticed I didn't touch on phystical ergonomics on this page much. Sure, it was hinted at with that dome shaped keyboard, but I didn't dive into things like how the angle we hold a mouse at actually causes two bones in our arms to cross in a way that, long term, may not be great because [Insert long winded, difficult to research paragraph on posture, pain, carpel tunnel, etc. here].

The thing is, for *most* people the tradeoff for going full ergo isn't worth it.

I mentioned above that I use the ergodone,

<img src="/hci/ergo.svg" class="lg-no-shadow" style="filter: invert(1);height:10em;" >

But then I mentioned that the Dactyl Manuform as an improvement,

<img src="/hci/dactyl.svg" class="lg-no-shadow" style="height:10em;" >

So, why don't I use it?

I have a keyboard tray, and prefer having room on top my desk. The Dacty Manuform is too tall. I wouldn't be able to close the keyboard tray.

Similarly, ergonomic mice tend to get those ergonomic gains by making the grip vertical. That does improve the grip comfort,  and I'm sure if you got used to it, tracking accuracy would be about the same. But, for most people this makes the dance from having their hand on their keyboard to on the mouse and back-and-forth more awkward. Plus, it will dramatically limit pool of mice you have to pick from, meaning you may need to make trade-offs on other features you care about. And, again, for keyboard try users, makes it too tall.

While I'm a huge proponent of always being willing to at least try things - and meaningfully, not just "Oh I grabbed it and it's different therefore bad" - it has to be in context of the bigger picture of pros and cons.


# TODO:

- MX key profiles, chonkier keys, material type matters.
- Car controls should be physical for safety, and shouldn't lock you out of doing things like typing ever.