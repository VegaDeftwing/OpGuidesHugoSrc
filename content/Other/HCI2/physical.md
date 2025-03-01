# Chapter 1: The Physical

<script>    document.getElementById("hciMenu").open = true;</script>

Computers aren't just about software, websites, and programs. As the most powerful tool that most people have access to and often one that we spend many hours a day looking at, it makes sense that we make working with that tool comfortable, straight forward, and healthy. In general, we've mostly sucked at this, and while some things are getting better (monitor resolution) some things have gotten significantly worse (keyboards). Furthermore, the desks we sit at and the air we breathe while working is in need of attention too. 

## Our Input Methods Suck.

What the fuck is this shit?

![crappy membrane keyboard](/hci/membranekeys.webp)

Well, this shit is membrane keys. They use a lil' membrane of flexible plastic to make a button that when you press completes a circuit. They feel like mush and generally suck to type on. We can do much, much better:

![Mechanical keyboard](/hci/mechanicalkeys.webp)

Okay, cool, a mechanical keyboard. Now at least each switch is, well, mechanical. There's a spring and actual feedback to your fingers and ears when you hit a key. But the keys are still arranged horrendously and it's not at all fitting for human hands. So... What next? 

![ergodone](/hci/ergodone.webp)

Alright, so this is what I use. For me, this is great. It's still attainable and usable by mere mortals without infinitely deep wallets<footnote>alright, so, yes they're still expensive as all hell, but like if you go DIY then I think they're mostly attainable to most people. I'm sure there's a bit of privlidge talking there, but ╮(─▽─)╭</footnote> and using software as it exists today, but I think that's largely still because it's the furthest edge you can go from normal before things start being a royal pain in the ass, and don't get me wrong, It's not that there's not some PITA incurred from using this weird of a keyboard. Switching to a traditional keyboard will always feel weird, other people can't easily use your computer (not sure this is reallllly a downside...), configuration still basically requires you understand the basics of C programming, and some things that expect keys to be in certain places (games) will often be awkward.

But, that's not where I want to go with this blog post. There's plenty of people that have gone on for like 20 pages about how amazing [QMK](https://qmk.fm) and the Ergodox are, I want to go **deeper**.

Let me start by lubing your brain up a little.

![Dasher Gif](/hci/largedasher.gif)

This is [Dasher](http://www.inference.org.uk/dasher/DasherSummary2.html), a software keyboard using predictive text that should sort of blow your mind. Cool init'? Now, your thoughts probably went something like this

1. What **the fuck** am I looking at?
2. Oh damn that's really cool, I want to try it.
3. Oh, hmm, but honestly even with tons of practice I can still probably type faster on a normal keyboard...

And Yep, that's about the right conclusion. End of story, let's all go home, blog post over.

But wait?

What if -->**insert your preferred mechanical keyboard here**<-- wasn't the best possible typing experience? What would something better look like?

Here is where our story really begins. You have to start asking some questions that sound like you just smoked a bowl, please feel free to read all of the following with the mental voice of a stoned dude saying "Like, man, " before each point:

* Why do we even need to type?
* What is it we want to input in the first place?
* What makes something good as an input device?

Effectively, Just keep asking Why's and What's until we're at the core of the question.

So, let's start at the top:

**Q: Why do we even need to type?**

A: We don't. We can draw, dictate, or use any of a number of other methods. Typing is convenient because it can be kept semi-private, is tactile (assuming you're keeb isn't a 💩), and generally fast enough to keep up with the speed of thought if you know how to touch type.

**Q: What do we want to input in the first place?**

A: Text (in multiple languages), Links, Images, Diagrams, Code, Commands? Dates? Our wandering thoughts? Spur of the moment ideas? Everything. Keyboards happen to be a decent input device for some of these things, and tend to pretty much suck for others. (Come on, make art by typing in RGB values for every pixel. 𝐼 𝒹𝒶𝓇𝑒 𝓎𝑜𝓊)

**Q: What makes something good as an input device?**

A: Now I'm asking myself a hard question. It's easy to list off good qualities of the familiar: Tactile, Responsive (low latency), Customizable, No αɯƙɯαɾԃ movements, keeps the users hands and arms (Assuming they have hands and arms!) in a natural position, characters laid out well for the user's language (and able to be switched live). But how do you get down to the core of this question without just listing traits of 'goodness' in existing things, what actual goals should we strive for. Should it be one unified device? (Hint: Touchscreens are great, but no.) What goals out weigh others? Is ergonomics more important than tactility? **Can there even be a defined list that makes an input deice good?**

**No.**

That's why this topic is so interesting. My hands are not your hands. I play music, make art, write stories (and blog posts) and code. Part of the reason I got an Ergodone keyboard (the spit keyboard shown above) in the first place is because I was starting to experience some nasty hand cramps that were particularly bad if I was switching between guitar and typing a lot. I was willing to try just about anything, which I did. I switched to Dvorak<footnote><a href="https://en.wikipedia.org/wiki/Dvorak_keyboard_layout#/media/File:KB_Programmer_Dvorak.svg">Programmer's Dvorak</a> is a thing and honestly I want to know if anybody actually uses it? Having the numbers like that hurts my brain.</footnote>, an alternative keyboard layout. That didn't do the trick so I tried the ergodone (still using Dvorak, my layout is [here](https://github.com/qmk/qmk_firmware/blob/master/keyboards/ergodone/keymaps/vega/keymap.c)) and haven't looked back. But that's left a few interesting points, ignoring the obvious reason of price, why are people still using something seems to be obviously *worse* - in a word: Familiarity.

**Frankly, fuck that.**

We can do so much better. Our phones have auto correct and limited [text expansion](https://espanso.org), why do our beefier systems not do something a thousand times better with their superior on board resources? We could at least make it easier to grab [text out of screenshots](https://github.com/ianzhao05/textshot)- But why are we not doing natural language processing so that I can verbally or textually describe to you a graph or math equation without needing to have committed to memory some archaic set of {{< katex >}} \LaTeX {{< /katex >}}symbol names <footnote><a href="http://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf">Seriously,</a>  check these out. You won't believe some of what's in here.</footnote>? Why are so many fields limited to ASCII, or maybe UTF-8, giving us those sweet, sweet emoji 🔥🔥🔥💯💯💯💯 when we could have something that allows text, diagrams, pictures, videos, etc.

{{< columns >}}

Why are we limited to only buttons on our keyboards anyway? I have a BDN9 macro pad that has encoders which I can use to input keystrokes too, this lets me map knobs to functions that makes sense, like pageup/down, volume up/down, brush size in an art program, etc.

{{< smalltext >}}The [BDN9 is roughly $50](https://keeb.io/products/bdn9-rev-2-3x3-9-key-macropad-rotary-encoder-and-rgb) if you want one{{< /smalltext >}}

<--->

![BDN9 keypad with encoders](/hci/bdn9.webp)

{{< /columns >}}

---

Also, if you're the kind of person that needs to write long walls of text with minimal formatting, you might want to check out stenography:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nRp_1S7cj6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## More than Just the Keyboard:

### Mice and Touch pads and track balls

Take your hand off your phone screen or mouse for a second and hold your hand in front of your face. Wiggle you fingers, move your wrists. With that last instruction what did you do? Did you rotate your hand, move it up and down, or twist it? Now, consider how each of your fingers possess such fine motor controls. Is a mouse really made to take advantage of this?

What would be better? Clearly pointing with a mouse is actually already pretty good. If you just need more functions a gaming mouse with a plethora of buttons goes a long way, but I think that's more of a stop-gap. What could we do better?

Well, There's already the Leap Motion

{{< columns >}}

![](/hci/leapmotion.webp)

The leap motion hardware is basically just two cameras without an infrared filter and some infrared leds. 

<--->

![](/hci/leapplayground.webp)

The Leap Motion software does an actually really good job of using this information to reconstruct the finger positions in software.  

{{< /columns >}}

and the Lexip 3D mouse - https://www.lexip.co

![pu94](/hci/3dmouse.gif)

{{< hint warning >}}

Note, This mouse, the Lexip pu94, is a complete disaster and the result of what is effectively a failed kickstarter. The windows drivers are broken, I'm currently working on a custom Linux driver for it but like, yeah. Don't buy one.

{{< /hint >}}

However, using the Leap for everything would require you hold your hands out to point - something that anybody who ever owned a Nintendo Wii can tell you gets very tiring very quickly - and the Lexip PU94 would be far to awkward to use daily.

So, I honestly don't know what the pointing device of the future looks like. Maybe it involves a mix of a mouse, finger tracking, eye control, and joysticks? The use of [WiiMotes for projection mapping](https://www.youtube.com/watch?v=wEeVMEzOmac) shows that there is room for using different devices for different kinds of input though. Maybe it's more like the [non-game uses the Kinect](https://hackaday.com/2020/11/09/kinect-gave-us-a-preview-of-the-future-though-not-the-one-it-intended/) has gotten over it's post-lifetime? I'm not really sure.

As for issues with current tech, mouse acceleration and touch pad responsiveness, and touch pad dead zone are all big problems and, like, I don't understand how that's a problem in 2022?

To give credit where credit is due, there have been minor changes that are trending positive, such as Logitech's MX Master Line with the infinite scroll wheels, and a general trend for reducing latency and increasing customization options of higher-end mice.

Unfortunately, the drivers for configuring these options are still largely proprietary and anything but standardized, meaning making integration between brands and OS built-in support all but impossible. Of everything listed up to this point, I actually think this is the biggest problem. Without a consistent, extendable interface about the best that can be exposed is awkward hacks where joysticks are mapped as if they're on a full game controller or keys just mapped to a macro of keyboard keys or existing but unused keys like the F13 though F24 keys (yes, those still exist in your OS even you can't type them) or scroll lock. This is a massive problem. More on that in a bit.

{{< smalltext >}}See also: [The ThinkPad Trackpoint Mouse](https://www.theverge.com/circuitbreaker/2020/6/30/21292182/thinkpad-trackpoint-mouse-nub-button-trackpad-challenges-design-user-input){{< /smalltext >}}

### Foot Controllers

{{< columns >}}

![](/hci/mc6.webp)

MorningStar MC6, a MIDI foot pedal that's highly customizable and has inputs for connecting analog expression pedals (the green thing on the left). 10/10 recommended

<--->

![](/hci/stinky.webp)

[Stinky Footboard](http://www.stinkyboard.com) - it's effectively a 4-key mechanical keyboard for your feet. The driver for this product sucks, so I swapped the controller out for a promicro running QMK. 

{{< /columns >}}

Both of the above are great. Being able to use my feet to control my system really allows for a lot of flexibility; however, your feet can only do so fine-grained control. Unlike keyboards where our fingers are great at hitting a bunch of individual keys, we're better at hitting smaller buttons or controlling pedals (think pressure sensitive like a gas pedal) with our feet. So, with that in mind, you only get a limited number of inputs you can practically control, so those inputs really need to count. That's the problem. They really don't.

Even with all the power that using QMK gives and all the configuration options exposed in the MC6's config editor, they lack one big thing: **Context sensitivity.**

Essentially, if my inputs are limited, there's a limited number of solutions. The MC6 does offer multiple pages of inputs by stepping on two buttons at once to either page up or page down, but that's not as good as just sending messages to the device to let it know that I've switched what I'm doing and that it should switch it's active page/profile/whatever accordingly, the problem there is that has to be set up manually. With context sensitivity in theory devices could change the way they behave to be optimal for what you're working on. Right now I have the Stinky Footboard set to control media playback (⏯️, ⏭️, ⏮️, 🔇) but that's currently *all* it is set to, and that seem like a bit of a waste. Sure, I could set up multiple profiles, but without them being context aware that's a bit of a moot point. And, alright, I think the original driver software for it as well as the software for most of my 'gaming' peripherals supports checking what the running program is, but that seems like a really bad solution and instead should be something the OS handles by letting the devices send generic button up/down events and doing **ALL of the mapping in software**.

The other relevant point would be the ability for **inter-peripheral communication** - basically, your mouse should be able to 'talk' to your keyboard and vis-versa. This becomes a bit redundant if as mentioned above all the mapping and meaning of buttons is defined in software, but the point would be that a key-combo could change your mouse's DPI, or holding a button on your mouse could put your keyboard into a one-handed mode.

### Pen Tablets

Honestly, most pen tablets are reasonably good. Not all of them have great latency, map super well between the pen's nibb and the actual pointer on the screen, and the majority *don't* support touch, which probably isn't ideal, but in general they do the job well enough, or, would, if you only counted the hardware.

Unfortuantely, everything needs software. This sucks, as the hardware is actually reasonably competent, while the software is largely so incredibly god awful that it is somehow impressive. While I realize this is totally anecdotal, one pen tablet I've used on Windows the driver software is so bad that it actually randomly takes over as the focused application about once every 15 minutes, meaning whatever line you were in the middle of drawing just *stops* and you have to click on the program again to keep going. But, like, even with more competent driver stacks there's like 6 different options for pen pressure: Wintab, Windows Ink, the option to 'Use the device as a mouse pointer' ... It's so incredibly confusing and the required options per application vary wildly. To make matters worse, most of the drivers completely shit themselves if one display is scaled for HiDPI and another isn't. On Linux, ironically, I've actually had very good luck with pen tablets. 

But even then most don't handle pressure in a way that's customization in a good way. Many rely on software to do pressure-mapping, which just isn't great (despite what I said above) as It's often a serious pain in the ass to get it set  𝘫𝘶𝘴𝘵 𝘳𝘪𝘨𝘩𝘵  so that you don't get crazy pressure jumps. Worse, even if the driver has in-driver calibration, you still usually have to tweak it more in the specific art/drawing/art application so now you have TWO pressure maps and it begins to feel like trying to balance a double pendulum.

I do still think there's more room for improvement in the hardware too. I think [Microsoft's Surface Studio 2](https://youtu.be/RmVAbB3M-4Y?t=45) actually had some really interesting and innovative ideas albeit it's a *weee bit* on the extremely expensive side at 3,500 USD. I also think the [HP Sprout](https://www8.hp.com/us/en/campaigns/sprout-pro/overview.html) did some really neat things too. Unfortunately, I highly suspect both will suffer from poor long term support.

I also think there's room to allow for workflows that rely more on the physical, possibly something like [Dynamic Land](https://dynamicland.org) or even just the [iskn](https://www.iskn.co) Slate or Repaper (Note, I tried the slate and it really, really sucked. But the *idea* was interesting.)

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

But, let's look at some of what exists, and why I'm saying this. While other devices exist to pick on, I'm gong to focus on MIDI controllers as they're what I know.

First though, for those unfamiliar, what is a MIDI controller? MIDI, or Musical Instrument Digital Interface is a bloody ancient standard that's still (mostly) 7-bit and let's you send control messages about actions on a controller made for music, often a piano keyboard, so, something like Key C4 Down, Velocity 8 or twisting a knob may be on a MIDI Control Channel (CC) and will be like CC43 changed to 127. Obviously in 2022 having a 7 bit standard is a bit archaic (something I've ranted about previously {{< button relref="Music/midi" color="Music" >}} here {{< /button >}}) and it's a rather stupid that it's taken until earlier this year for the improved MIDI 2.0 standard to even be ratified, but I digress.

MIDI controllers come in all shapes and sizes, from a grid of RGB buttons to traditional keyboards to just a large array of knobs, so, naturally people took notice, and MIDI can therefore be used to control things it was never, ever meant for. People often try to use it to control video editors, 3D modeling software, and generally anything that Adobe<footnote>Fuck Adobe.</footnote> makes.

![midi controllers](/hci/midicontrollers.webp)

> Pictured here are the Novation Launch Key MkII (The big keyboard),  Launchpad MkII (the 8x8 grid), the Roli Seaboard Block, and two Roli Lightpad Blocks.  <footnote>The Launchkey MK2 has an almost impressively bad keybed. Roli, the company behind the Seaboard Block and Lighpad Blocks is a bit controversial. Not like, Behringer levels of controversial, but still. ╮(─▽─)╭</footnote><footnote>Since I took this picture I have upgrade to a Launchpad Pro MK3 - which was pretty good - but then sold that too for an Ableton Push2. I also sold the Roli Seaboard and got an ExpressiveE Osmose. Both the Osmose and Push are huge upgrades, but have a cost to match.<footnote> The Roli equipment uses MPE, a 'standard' that abuses the hell out of midi and does things with it that were never intended.

So now we have a crazy amount of controllers using a shitty standard instead of something that actually exposes more data and allows for finer control being used in ways that abuse the protocol instead of just exposing raw button down/up events and knob twists to the OS.

Note, I'm being careful to say button up and down events instead of button press. This is because it makes a lot more sense to exrpess the events as raw as possible so the OS can do things like detect a double-press, long-hold, etc.

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

## Our Physical Environments Suck

### Your Chair Sucks

{{< columns >}}

Did you get a gaming, racing chair that cost about $100 off of ebay? Yeah, you'll regret that one soon enough.

![](/hci/racingchair.webp)

Even if you got a normal office chair, if it wasn't exorbitantly expensive it probably sucks. I did like two weeks of stressing about finding something good and thankfully finally got a good recommendation from a friend, but otherwise it's like $500 SteelCase chair or having a bolt poke though the seat's foam until it's leaving a permanent indentation into your butt.

It's not like we even *need* innovation here, (as proven by the influx of hot garbage 'gaming' chairs) we just need something affordable that's not garbage or plagued by fake reviews or reviews from another product attached to the new listing (Fix your shit amazon.)

> The chair on the right is the one my friend recommended, [here's a link to it on Amazon](https://www.amazon.com/dp/B00450P182/ref=cm_sw_r_other_apa_i_oG.1EbSZR4NZP)

<--->

![](/hci/chair.webp)

{{< /columns >}}

But, I'm here to talk about the future, so what do I think can be better than anything I've even seen? Well, a good start would be threshold latches. Nicer office chairs often have a lock for allowing leaning back or not, but it'd be great if it was 'locked' until a pressure threshold so you can lean back and stretch without un-locking and necessitating re-adjusting the chair, a sort of temporary unlock done by just leaning back harder.

But the biggest reason your chair sucks? It's a chair. I'm not advocating for a treadmill desk, or sitting on one of those big ball things, I'm simply saying having the only reasonable way of interacting with our second-brains being in a seated, unmoving position does nasty things to our bodies. While it would make more sense to adapt our peripherals and input methods, it's worth considering how we may re-shape our seats to work with us. A little while ago ["I built a lay down desk"](https://blog.luap.info/drafts/i-built-a-lay-down-desk.html?hnn) was trending on Hacker News, and it's something I'd considered before too, but I want to think bigger: What if our desk and chair acted as one piece of furniture, one that was flexible between sitting, laying, and standing positions, and the chair bent to an appropiate shape to match the position of the desk? [Design doesn't have to be static](https://youtu.be/xN9hTo3iR6A?t=182).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9Yhc6mmdJC4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Your Desk Sucks

**or 'why the fuck is it so hard to find a deep desk with a keyboard tray'**

I've gone though wayyyy to many desks. What I'm currently using is a nice big un' with a surface that is 5' x 2'4" and it's still. not. big. enough. (for reference, a 'normal' cheap desk seems to be ~3' x 1'8"). So I've had to put two desks in an L-shape.

I know that I can pick from pleanty of L or U shaped desks on amazon, but most will be seriously lacking in depth and be less than study, ~~so my 2-desk concoction is the best I can do without making one- which I do intend to do at some point.~~

![](/hci/desk2.webp)

And, alright, I admit, I'm not a typical computer user. I have enough devices hooked up that `lsusb` gives me 36 lines of output<footnote> this is without anything extra connected, like flash drives or RFID tools, or my SDR, ...</br>
<code>
Bus 006 Device 003: ID 2109:0812 VIA Labs, Inc. VL812 Hub </br>
Bus 006 Device 002: ID 2109:0812 VIA Labs, Inc. VL812 Hub </br>
Bus 006 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub </br>
Bus 005 Device 011: ID 331b:0003 Morningstar Engineering Morningstar MC6MK2 </br>
Bus 005 Device 008: ID 1235:007c Focusrite-Novation Launchkey MK2 49 </br>
Bus 005 Device 009: ID 045e:028e Microsoft Corp. Xbox360 Controller </br>
Bus 005 Device 006: ID 05e3:0608 Genesys Logic, Inc. Hub </br>
Bus 005 Device 012: ID f182:0003 Leap Motion Controller </br>
Bus 005 Device 013: ID 0c45:6340 Microdia Camera </br>
Bus 005 Device 007: ID 1235:8201 Focusrite-Novation Scarlett 18i20 USB </br>
Bus 005 Device 005: ID 2109:2812 VIA Labs, Inc. VL812 Hub </br>
Bus 005 Device 004: ID 2109:2812 VIA Labs, Inc. VL812 Hub </br>
Bus 005 Device 014: ID 1935:000d Elektron Music Machines Elektron Digitakt </br>
Bus 005 Device 003: ID feed:e60d K.T.E.C. ErgoDone </br>
Bus 005 Device 002: ID 1a86:7523 QinHeng Electronics CH340 serial converter </br>
Bus 005 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub </br>
Bus 004 Device 003: ID 2109:0813 VIA Labs, Inc. VL813 Hub</br>
Bus 004 Device 002: ID 2109:0813 VIA Labs, Inc. VL813 Hub</br>
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub</br>
Bus 003 Device 005: ID 256c:006e  Tablet Monitor</br>
Bus 003 Device 009: ID 1235:0069 Focusrite-Novation Launchpad MK2</br>
Bus 003 Device 008: ID 046d:082d Logitech, Inc. HD Pro Webcam C920</br>
Bus 003 Device 007: ID 1337:6007 Vega Deftwing Stinky</br>
Bus 003 Device 006: ID cb10:1133 Keebio BDN9 Rev. 1</br>
Bus 003 Device 004: ID 2109:2813 VIA Labs, Inc. VL813 Hub</br>
Bus 003 Device 003: ID 2109:2813 VIA Labs, Inc. VL813 Hub</br>
Bus 003 Device 002: ID 1e7d:2e4a ROCCAT Tyon Black Mouse</br>
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub</br>
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub</br>
Bus 001 Device 002: ID 1235:0123 Focusrite-Novation Launchpad Pro MK3</br>
Bus 001 Device 007: ID 04d8:eef2 Microchip Technology, Inc. FH-2</br>
Bus 001 Device 006: ID 28de:1142 Valve Software Wireless Steam Controller</br>
Bus 001 Device 005: ID 0bda:8771 Realtek Semiconductor Corp. Bluetooth Radio</br>
Bus 001 Device 004: ID 05e3:0745 Genesys Logic, Inc. Logilink CR0012</br>
Bus 001 Device 003: ID 1a40:0201 Terminus Technology Inc. FE 2.1 7-port Hub</br>
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub</br>
    </code></footnote>, I have 3 monitors + a pen display, and my desk is also home to a whole host of lab equipment, a eurorack setup, and other various things. 

Sure, It does actually have a decent sized keyboard tray unlike most where they just expect you to put the keyboard and mouse on top of the desk like some sort of monster, but that tray is still on the small side if I were to use a normal full size keyboard (with numberpad). Worse, if I use a normal keyboard my hands tend to hit the sides of the keyboard tray (where the slides attach). I've seen a ton of wooden desks with this issue. Just move the rails back like 2 inches and angle it. Please. A lot of desks also skimp on the height of keyboard that can fit in the tray. This is a fair trade off, as the better this is the closer it is to your legs when sitting, but still, I've seen multiple where the feet on the keyboard can't be raised to make typing more comfortable otherwise the keyboard tray can't be closed. My desk actually sits in a pretty good sweet spot on this, but...

I still think my desk sorta sucks.

Hear me out. First of all, I have a bad knee. Not like I'm walking around with a cane bad, but more like if I sit in one position for more than ~20 minutes and then move it I get a sharp pain like someone just drove a hot knife directly into it, but it only lasts a second. Yunno' what would be a major help with that? A sit / stand desk (height adjustable) desk.

But that won't work for me, and probably a lot of other nerds reading this for one big reason. **Wire. Hell.** Like, maybe you're thinking "Pssh, what, so you have like a dozen cables down there, power, display, USB mouse/keeb, and audio"

Ha. No.

I won't try to list it out, but Oh. My. God. A sit stand desk wouldn't be possible because that wire hell is truly **untameable** in it's current state, so, we're gonna take a brief detour from the desk stuff:

**You Are Now Entering: The Cable Abyss.**

I could rant to you about how USB-C with it's 42 different standards is a god damn nightmare, and that'd even be pretty relevant here. But that's not the rabbit hole I want to fall down right now, instead I want to introduce you to my friend, MIDI.

MIDI Is a fucking shit of a standard. It's 7 bit, ancient, and the 'standard' <footnote>MIDI is currently in a transition period from MIDI on a 5-pin Din to over TRS exactly because of this reason. Unfortunately, there's now two competing versions of MIDI over TRS called TRS-A and TRS-B where the signals on each pin are mixed around. Making it even worse, there's even a version that runs on 'mono' TS cables. It's a <a href="https://minimidi.world">mess.</footnote> cable for it has (ᵈᵉᵖᵉⁿᵈᶦⁿᵍ ᵒⁿ ʰᵒʷ ʸᵒᵘ ˡᵒᵒᵏ ᵃᵗ ᶦᵗ) 3 more pins than it even uses. By all metrics it fucking sucks. ***However***, They did do one thing right.

This beautiful port:

![](/nonfree/permissiongranted/midithru.jpg)

{{< attribution >}}

Image © Shira Wolven 2020, used with permission

{{< /attribution >}}

This, is a midi through. On most gear, it's accompanied by (at least) a MIDI IN, so, you can take your MIDI info in, and then, because a single midi cable carries 16 channels, chain other gear on.

{{< columns >}}

From this,

{{< mermaid >}}
graph LR
    A[Controller] --> B(Device 1)
    A --> C(Device 2)
    A --> D(Device 3)
{{< /mermaid >}}

<--->

To this:

{{< mermaid >}}
graph LR
    A[Controller] --> B(Device 1)
    B --> C(Device 2)
    C --> D(Device 3)
{{< /mermaid >}}


{{< /columns >}}

And, okay, so what? Well, I'll tell you what. This is rad as hell. I currently have 3 6' Display Port cables running from my desktop on the floor up to my displays on my desk. The monitors are 4k and get pissy if I go over a 6' cable, so with my tower on my right, the left-most monitor has to have this perfectly 45' cable making the connection, so I can't even organize the cables in the first place. But what if I could just route all of that to one monitor then piggy-back each one going forward?

I'm not going act like this doesn't have issues. I get it. There's questions of signal integrity, making sure everyone follows the same standard (obviously can't do that...), and realistically it would probably mean adding more conductors and increasing cost. I get it. But I also see a ton of other benefits, especially if we made that same monstrosity of a cable capable of a fair amount of power. The same 12V ATX PSU in the desktop could justifiably power the monitors, giving us the efficiency gain inherit in using 1 PSU over the god only knows how many fire hazards that are currently on chained power strips down there.

**Departing Cable Abyss Hell, Back to your Regularly Scheduled Ranting** 

Where was I? Ah, right. Desks.

{{< columns >}}

Next is adequate space for interruptions. While I'm a strong proponent of [separating a space's responsibilities](https://www.youtube.com/watch?v=snAhsXyO3Ck&ab_channel=CGPGrey) (not eating where you work, not working where you consume media, not consuming media where you sleep, etc.) I understand that sometimes it's necessary, and there's nothing worse than not having a flat surface to put your bowl of soup on.

So, why are desks with pull outs (as pictured on the right) not more common?

More practically though, as mentioned before, it's ideal if the mouse and keyboard weren't in the way of desk space that would otherwise be used for physical craft, note taking, art, etc. So I think three spaces total are ideal: one for primary input devices- today that's a mouse and keyboard; a second for papers, a main project, etc; and a third that is easily accessible added for the interruptions and side projects in life.

<--->

![](/hci/deskpullout.webp)

{{< /columns >}}

In summary

* Desks need a lot more surface area
  * L or U shaped desks seriously help with this
* We need keyboard trays that are longer, and often taller
* Sit/Stand needs to come down in cost, be available in L and U shapes
* Desks need built in wire management
* Desks need to have pull outs

As a final note, I realize not everyone has space for a massive desk, but in that case, I think things like [this folding desk (DIY Persk)](https://www.youtube.com/watch?v=QaoFh1DH51U) should be more common.

Further reading:

[The Complexity of Building a Lie Down Workstation (altwork)](https://altwork.com/blogs/news/the-complexity-of-building-a-lie-down-workstation)

### Your Audio Sucks

There's a huge range of audio systems. You might not be able to have speakers at all and have to use headphones, maybe you have an awesome setup running [Dolby Atmos](https://en.wikipedia.org/wiki/Dolby_Atmos) like [Deadmau5's](https://www.magneticmag.com/2016/05/deadmau5-shows-off-the-completion-of-his-new-home-studio-finally/) where the room and speakers have been engineered so he can virtually drop an instrument on the sound stage wherever he wants.

But nothing like that is even needed in order to make things suck less.

How many times have you watched a YouTube video where the speakers voice had far too much bass or was masked by a high pitch whine? How many streams have you heard where there's some hum or annoying background noise? I'm sure you've turned up your audio because something is quiet only to have your ears ravaged as soon as the audio is fixed in the stream.

All of these things are totally fixable using a mix of hardware and software.

{{< hint warning >}}

Before I get into all the following, I'm not saying all of these things should always be in use. For example when somebody is making music all of this obviously needs to be able to bypassed.

{{< /hint >}}

##### Why *the fuck* do we not have a system-wide limiter?

And not just a dumb decibel limiter, but a [loudness](https://en.wikipedia.org/wiki/Loudness) limiter. There's no reason there shouldn't be a toggle-able limiter to protect your ears

##### Why *the fuck* do we not have per-stream audio compression?

Not file-compression but volume-compression. the 'make loud sounds quieter and quieter sounds louder' kind. Generally this is something the music industry over-uses and it doesn't sound great on music, but for voice it can make a huge difference for keeping things understandable and not distracting. Ideally this would be done before the content is ever published or sent though the network, but that won't always be the case. So, you should be able to easily take any audio stream (say, a YouTube video playing in a tab) and apply a compressor to it.

This is particularly helpful when you consider input streams (your mic) as generally having compression on your mic will make it so that as you change the distance between you and the mic the volume stays more consistent, and also just sounds better in general.

##### Why do we not have live Speech to Text?

Not all systems will be able to do this live without completely shitting the bed because of lack of processing power, but as our graphics cards are now including specific hardware for doing AI/ML based computation, there's no reason we shouldn't be using in the OS for the sake of grabbing the text out of all audio that goes in or out of the system. (of course, storing it securely and locally, nobody wants to wiretap themselves)

##### Why is Audio and Video Not Routable?

Alright, so this is mostly a dig at Windows, where everything is Garbage. Mac has CoreAudio which is pretty cool, and Linux can mostly do this for audio via [Jack Audio](https://jackaudio.org/faq/about.html) and work is being done to make something for both audio and video with [Pipewire](https://pipewire.org).

![](/hci/catia.webp)

> This is a screenshot of 'Catia' - a graphical program for audio routing with Jack Audio. Here I just have pulseaudio set to use my first two outputs as my speaker outputs (Sink -> System) , and the first input (my microphone, which is mono) set to be the input to the stereo 'virtual microphone' that pulse audio provides to applications (System->Source). All the orange and green stuff is for MIDI devices, which catia can also route.

The reason this is necessary is with routable audio and video you can do things like route your webcam's video first though software that does some video effects, then to a recording program and to a streaming program easily. Sure, this can be done anyway right now, but it often means creating a 'virtual' webcam in the middle, and this scenario was already a fairly basic one. If you add in the aforementioned limiting and compressing as options you can see where this starts to matter.

##### Why are we not calibrating our audio devices?

While it may seem like it at times- with big fancy tube amps, planar magnetic headphones, and silver cables for that hi-fi sound- audio is not black magic. It's math. More over, while everybody's ears are a bit different, the frequency response that most people want from their devices is [more or less known](https://www.headphonesty.com/2020/04/harman-target-curves-part-1/). No device can perfectly meet this, at least not at a cost a mere mortal can afford. As that linked article details, this isn't super straight forward anyway, as your head and ear size, room acoustics, etc. all mater. But here's the thing:

Computers are really stupidly powerful. We can make our audio quality better, even on sub-optimal equipment. I'm going to gloss over most of the math, but the gist is by putting a special microphone with know frequency response at the desired listening point and doing a frequency sweep from each speaker (or headphone) and all the speakers at once we can math out each speaker's (or headphone's) frequency response and phase cancellation characteristics, then, being careful not to cause resonant peaks or really obnoxious phase shifting effects, use a parametric EQ to get the speakers (or headphones) as close to ideal as possible.

Of course, the better the starting point the better this correction will work. You won't make some cheap iFrogs sound like Senheisers, but you might make them better.

There is software that does [some of this](https://github.com/jaakkopasanen/AutoEq), but I really think it needs hardware acceleration (hell, maybe an [FPAA](https://zrna.org/shop)) and to be more common.

### Your Displays Suck

I'm going to assume that if you're reading this you're probably using at minimum a 1080p, 60hz monitor. And like, yeah 2073600 is a ton of pixels. If you assume the normal 8-bit per R-G-B (24bit color) then you get ~2.98Gbit/s which is already pretty impressive if you think about it, but then consider that even cheap single board computers are starting to be capable of 4k, 3840x2160 which at 60hz is ~11.94Gbit/s and, alright, that's already undeniably really cool. But, unfortunately, super not enough and already causing problems. 

If you're like me and running 4k @ 60hz, you've likely had at least some issues as a result of this. Lower quality Display Port <footnote>The interface on your display matters greatly as well, the most common at the are HDMI, Display Port, DVI, and VGA<br>
VGA is the worst option here, as it's an analog signal. This means the signal can do strange things, getting corrupted between your computer and the monitor. Typically this is a blue, screw in connection with many pins
DVI is still pretty common and looks like an even larger VGA connection, with a typically white, screw in connector. This signal is normally digital, though there is a variant of DVI that can be adapted into VGA. Of note, DVI can also be adapted to HDMI though you will not have audio, as DVI does not carry sound<br>
HDMI, probably the most well known connector, has multiple revisions, the revision determines many things such as the maximum resolution, refresh rate, and weather or not more obscure things such as HDR are supported. HDMI is usually considered the best of these three options<br>
Taking the crown however, is Display Port (DP). Like HDMI display port does have multiple revisions which do differentiate similar things; however, Display Port will generally support high resolutions and more features at any given point. Assuming you're running a bog-standard 60hz 1080p display however, you'll find no difference between DVI, HDMI, and DP - unless you need sound, in which case you'll want to use HDMI.</footnote> cables can cause occasional flickering, you're probably limited to 6' DP cables. The reason I bring all of this up at the start is because I want to fully acknowledge that every extra bit we try to push down that pipe is pushing that even further and making it even more expensive.

But, let's go to more day-to-day concerns, the things that suck even assuming everything is working fine.

The first thing is obviously **resolution**.

4k is far from normal still. 1080p just is not enough. It's super easy to see the individual pixels from even a comfortable distance and text is pretty unclear unless sub-pixel rendering<footnote>Sub-Pixel Rendering is effectively abusing the fact that monitors will have a sort of trippled horizonal resolution, where each individual R, G, and B sub pixel is treated like an individual pixel that can be rendered to. This can make text look substantially sharper, but is why when you take a screenshot and blow it up you might see weird colors around the text. It's a hacky work around.</footnote> is used, but that makes things even worse because not all displays use the same sub-pixel layout.

Another problem with resolution is that ohmygod does scaling suck. A ton of applications, especially older ones, were made with the assumption that you'd be viewing everything on a 1080p or lower resolution. In general the move to 1080p actually wasn't felt as much because the size of our displays increased with their resolution, increasing work area but keep the application size roughly the same. The problem is with the move to 4k we're dramatically increasing pixel density at often the same screen size, so everything is ᵗᶦⁿʸ. Software scaling in the OS is pretty universally garbage, with some applications scaling in a way that looks super blurry, some being double scaled as both the OS and the application try to compensate, and some applications just not scaling at all. Because this is inherently a complaint about legacy support there's no easy solutions here. Using 4k instead of other  higher-than-1080p resolutions helps, as integer scaling (scaling exactly 2x) is an option as 4k is exactly equivalent to four 1080p screens stitched together, so you can just map 4-pixels in hardware to 1-pixel of what's trying to render... or you could, if we hadn't already tried to use aforementioned sub-pixel rendering.

I'm not sure that there's really much need to go beyond 4k. While I haven't even personally seen anything higher, I also can only pick out individual pixels when there's like, one lit pixel on a dark background, and I don't know that more innovation in resolution will really matter. Instead, there's a pile of other outstanding issues.

> Little aside first. Some jackasses decided even on digital displays [interlacing](https://en.wikipedia.org/wiki/Interlaced_video) should be a thing. I don't want to lose focus here, but I want to at least mention this, which you'll often see listed as 1080i or 720i, is shit.

##### Refresh Rate

Do a little experiment for me real quick: try changing your display to 30Hz. Most displays will support it.

Now move your mouse around in circles, try doing something where you need things to respond quickly, like playing games.

You'll probably notice it directly, but if not, you will likely at the very least feel a bit motion sick.

Now, realize that the vast, vast majority of displays are only 60hz. Double that, sure, but I think you could easily see how more would be great. This is exactly why most displays sold for gaming advertise being higher refresh rate, often 144hz or more. This is where my above commentary on throughput of DisplayPort and reliability at high rates. If you look at the [Display Port](https://en.wikipedia.org/wiki/DisplayPort#1.4) you can see this problem has been mostly addressed, but that only means so much if cables are shit and monitors that are both high res and high refresh rate cost both arms and a leg. Obviously this should get better with time, but it's still a problem.

Some displays may support Freesync or Gsync <footnote>FreeSync is the open standard made by AMD, and, even most FreeSync monitors will work fine on Nvidia card. GSync is Nvidia only and is more expensive to impliment - in part because it uses a full damn FPGA shoved into the back of the monitor - but does offer more features except when it doesn't and it's just rebranded FreeSync with a lil' Nvidia Approved sticker. It's complicated and a mess to understand. As of the time of writing both Freesync and GSync are supported on Linux, but quite rough around the edges.</footnote>, and both of these technologies require a supported graphics card in the system as well. These allow the display and computer to adaptively change the refresh rate so the monitor and computer both send and display frames in sync, which can make even a low refresh rate 'feel' much higher. This is a feature typically marketed to gamers and only supported in video games, but this has been changing a tiny bit. The big thing to note here is that it's dependent on the frame rate of the application that the user cares about, you could, I guess, sync to your compositor's (the thing that draws multiple windows onto the desktop simultaneously) frame rate, but I don't think there could even be any benefit there. So, really, this is mostly applicable to games as there's a few other applications you'd even want to run in full screen where this latency and responsiveness improvement would matter.

Related to refresh rate is **latency**. In general this can actually mean two things, one is how long it takes for an image sent to the screen to actually be displayed. The lower this time the better, with good screens being sub 10 millisecond. Unfortunately, there's no standard among the industry to measure this and many get it wrong.

Also with latency there's grey to grey times, this is a measure of how long it takes a pixel to go from one shade to another. The lower this is the less motion blur the screen will exhibit.

This, to me, is a big deal. Latency is something you can *feel*. If there's a long total input lag between the time you click something and that action taking place, that's a big fucking problem- and long here doesn't even mean all that much time:

{{< quote "[Wikipedia Article on Input Lag](https://en.wikipedia.org/wiki/Input_lag) citing [Console Gaming: The Lag Factor](https://www.eurogamer.net/digitalfoundry-lag-factor-article?page=2) from eurogamer.net" >}}

Testing has found that overall "input lag" (from controller input to display response) times of approximately 200 ms are distracting to the user.

{{< /quote >}}

So, the time it actually takes for your display to update once it's gotten a frame is not irreverent.

##### Dimming

Unless you're a fan of melting your eyes out of their sockets, you likely do not have your display set to maximum brightness. Unfortunately, dimming on most displays is absolute garbage.

Instead of doing DC dimming, that is just lowering the voltage of the back light so it is dimmer, the majority of displays do PWM, Pulse Width Modulation, Dimming. 

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Duty_Cycle_Examples.png" style="zoom:75%;" />

{{< attribution >}}

PWM image by [Thewrightstuff](https://commons.wikimedia.org/w/index.php?title=User:Thewrightstuff&action=edit&redlink=1) CC BY-SA 4.0

{{< /attribution >}}

So instead of just lowering the level directly, the back light is turned on and off rapidly, for a varying amount of time. This might be done really fast, sometimes it's fast enough that it really does not matter or there's a reasonable amount of capacitance to smooth this out, effectively making it look like just a DC signal again, good enough. Sometimes, the manufacture sucks and uses shitty, low frequency PWM dimming and even if you can't consciously see it, it will cause headaches and generally suck over long periods.

{{< tip >}}

WARNING! This video has a bright, flashing light

{{< /tip >}}

<video width="70%" height="400" controls>  <source src="/hci/pwm.mp4" type="video/mp4">  <source src="movie.ogg" type="video/ogg">  Your browser does not support the video tag.</video>

> This is PWM dimming on a fourteen-segment display captured with the 'slow-mo' camera on my phone.

In this video, because it is so incredibly slowed down, you can see the led's flash easily, but at that middle setting I can easily see it in real-time too and it is headache inducing. At the lowest or highest settings it isn't noticeable. [Persistence of vision](https://en.wikipedia.org/wiki/Persistence_of_vision) is why this even works in the first place, but obviously that has limits and crappy PWM dimming on an otherwise nice display can really, really suck.

This has put me in the crappy situation before of having to set the display to max brightness to avoid the headache from the strobing effect (Pulse width at 100% means constantly on so just DC), but dealing with being blinded by any application with a white background.

##### Color and Dynamic Range

If you have multiple displays that aren't exactly the same you know just how annoying un-matched color can be. This is a harder problem to solve than some of the others. Color calibration definitely helps, but that only means so much when the actual display technology may be different. an LCD will look different than an LED will look different than an OLED even if they're color calibrated to match. This, I think, is actually reasonable. What is totally unreasonable is how digital color looks in the first place. Let me start by linking a video:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/h9j89L8eQQk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This sucks. Like, why have we accepted this? Sure, things like [High Dynamic Range](https://en.wikipedia.org/wiki/High-dynamic-range_rendering) or HDR - which allows the panel to selective change the brightness in an area of the screen, giving much better dynamic range in supported applications - have helped with this problem indirectly, but it's still not great. 

What we really need is to finally step up from [24bit color](https://www.cambridgeincolour.com/tutorials/bit-depth.htm) to something better, and in fairness, this has been happening. A lot of newer monitors do support 10bit per channel ([30bit color](https://en.wikipedia.org/wiki/Color_depth#Deep_color_(30-bit))) and some do 12-bit. Unfortunately, at higher resolutions this sometimes requires trading refresh rate for color depth (want 30bit color? You'll have to run at 30hz.) 

You're also likely to notice the color gamut or what range of colors the display is actually capable of displaying.

For example, two displays may both be capable of displaying 255 levels of red, but if one display's range is only from a dingy red to a dark-ish red, while the other is from a brilliant red to a deep dark red, there's a massive difference in color availability. If this is important to you, notably as a creative professionally in photo or video, you may want to read more on the Wikipedia page for [Color Gamut](https://en.wikipedia.org/wiki/Gamut). In general, displays particularly suck at displaying a wide range of green.

Next up is **dynamic range**, or how deep the blacks are and how vivid the whites are. Here, OLED is probably the best as it can display true black by actually turning the source of the light off, but unfortunately these are quite susceptible to burn in and image persistence, plus moving the image quickly can result in a 'purple smear' - something you may have noticed when scrolling though images on your phone.

> Note, OLED isn't really ready to be used for normal desktop or laptop monitors yet, as it can suffer from really bad burn in or image persistence. Looks great for movies, but when you have un-changing elements on screen for hours at a time it's not ideal.

#### Non pixel displays

{{< columns >}}

You know what would really help with the search for the perfect display though? Needing it for less things.

As time has moved on computers have taken over the role of more and more tools on our desk, but that also means the screen has had more responsibilities - I doubt you have a physical clock on your desk.

I love analog meters. They can be backlit like old VU meters in stereo equipment, or they can totally illuminated by the environment. Regardless, they're quick and easy to read. Needle high, needle low. On the right I have a picture from my (horribly implemented) [CPU meter project](https://github.com/VegaDeftwing/Civil-Defense-System-Meter) that just shows my CPU usage on the radiation meter and ram usage on the RGB led.

Of course, other forms of more passive indication are great too: Little e-ink or oled display, not-too-bright leds (or VFDs or Nixie tubes if you're feeling adventurous) - not everything needs to be on your screen. Let your eyes look away to a dedicated device now and then.

Often though, they're just beautiful to look at, like this lil' Nixie clock:

![nixieclock](/hci/nixieclock.webp)

<--->

![radiation meter](/hci/radiation_meter.webp)

![nimbus](/hci/nimbus.webp)

{{< attribution >}}The discontinued Quirky Nimbus, a nightmare of an IOT product {{< /attribution >}}

![eink](/hci/eink.webp)

{{< attribution >}}my '[Powonagotchi](https://pwnagotchi.ai)' 🖤 , with its e-ink display {{< /attribution >}}

{{< /columns >}}

## Your Space Sucks

### Noise

Just looking at the [Wikipedia Article on Noise Polution](https://en.wikipedia.org/wiki/Noise_pollution#Humans), it's pretty obvious that humans like to be somewhere where noise is kept to a minimum. There are of course questions about what you want to consider noise. Like, clearly above I made it clear I prefer mechanical keyboards which, as anyone that has been on a discord call can tell you, are rather loud. The difference is in it being noise you're causing, or background noise that you can't control. Fan noise from your computer, music from another room that you can't quite make out, a rattle from the HVAC system, that's *noise*. Somehow we've all gotten rather used to rather noisy environments.

Don't get me wrong, improvements have been made. A lot of computers don't even run the fans when they're idle or you're just web browsing (plus the fans have gotten bigger, which means lower pitch, which is way less annoying), LED bulbs don't have the ballasts that were required of old fluorescent bulbs that always found a way to whine, we no longer used CRT (Cathode Ray Tube) screens that had flyback transformers whining at the edge of human hearing either. But it's still not great. Even if none of the electronics in a room have fans or speakers or the other things you expect to make noise, you can still notice when a room has been shut off. If you spend a lot of time surrounded by electronics like I do, not having the hum around is a mix of eerie and relaxing. But, still a lot of electronics do have fans, and they're often crap. Even the high end ones that PC building enthusiasts idolize like those from Noctua [are far from amazing](https://www.youtube.com/watch?v=6L4Lbh5GwzA&ab_channel=MajorHardware). 

But, come on. Why are we not integrating at least some sound control into our architecture? Why is acoustic dampening something only used by streamers? Why are devices that we know get nasty [coil whine](https://en.wikipedia.org/wiki/Electromagnetically_induced_acoustic_noise) not being silenced by just adding some wax or glue to the inductors?

It's not like most of the solutions for making noise better aren't available and understood, it's just that it takes an extra bit of consideration and maybe a bit more money.

I'm not sure what the solution should be. Maybe products need to have some sort of testing for this and a label applied, like the ubiquitous 'Energy Star' stickers or the 80 Plus ratings on PC power supplies.

### Lighting

If you're in an office right now, I can take a pretty good guess that the lights above you are some of those 4ft long fluorescent tube bulbs, probably in an excruciating 6500k.

{{< columns >}}

The problem with that color temperature isn't necessarily that it's too 'cool', it's that it's fixed at that point. 6500k is about the same as the sun on a clear day... at about noon. The problem is our bodies expect warmer colored light closer to night or it screws up our sleep cycle. The website for the software [f.lux](https://justgetflux.com) has aggregated some good [research](https://justgetflux.com/research.html) on this subject, but I think at this point it's actually pretty common knowledge as even Samsung phones ship with the ability to turn a blue light filter on.

<--->

<img src="/hci/Color_temperature_black_body_800-12200K.svg" style="background-color:white;">

{{< attribution >}}

Image from [Bhutajata](https://en.wikipedia.org/wiki/Color_temperature#/media/File:Color_temperature_black_body_800-12200K.svg) on this [Wikipedia article](https://en.wikipedia.org/wiki/Color_temperature)

{{< /attribution >}}

{{< /columns >}}

> Brief aside, if you use Linux, [Redshift](http://jonls.dk/redshift/) is a good alternative to f.lux

Right now we're still in the annoying stages of this sort of system, most RGB or color temperature variable bulbs have rather crappy [Color Rendering Index](https://en.wikipedia.org/wiki/Color_rendering_index) (CRI), so even if the temperature is variable the quality still sucks.

> This is purely anecdotal, and it seems the Phillips Hue bulbs at least have a decently high CRI, but like, they're also a tad bit on the expensive and privacy invade-y side of things sooo ¯\\_(ツ)_/¯ 

But worse, the software to keep these bulbs in sync is pretty gross, and some bulbs will just end up snapping from one color to another every 15 minutes or so, which is more distracting than it's worth.

{{< columns >}}

The next worst offender with lighting is all way to bright (often blue) leds on ***E V E R Y T H I N G*** . For the love of god guys, the lights are supposed to be indicators, not light the entire room. There shouldn't be a product with over a [thousand reviews on Amazon](https://www.amazon.com/LightDims-Original-Strength-Electronics-Appliances/dp/B009WSJNCW) with the sole purpose of dimming obnoxious LEDs. Like, leds aren't even the best thing for the job anyway most of the time. I'd think an e-ink screen, like on the [pwnagotchi](https://pwnagotchi.ai) below, would be sooo much better for most applications that need multiple indicators. For a power on indicator, an led is fine, but please just make it like 20x dimmer or put it near the power input instead of somewhere normally visible.

Like, my center display has a **blue** led that is on when the monitor is on instead of the more normal standby indicator that goes off when the display is on found on TVs. It's immensely distracting. Sure it can be fixed with a tiny piece of electrical tape, but whyyyy?

Further Reading: [LED History (Tedium.co)](https://tedium.co/2020/07/10/led-indicator-light-history/), [We Ruined Status LEDs (Hackaday)](https://hackaday.com/2020/02/20/we-ruined-status-leds-heres-why-that-needs-to-change/comment-page-2/) 

<--->

![](/hci/offensiveled.webp)

> An offending LED indicator on the Mackie CR4 speakers. It's meant to illuminate the volume knob in the dark but it mostly fails at that, especially since the all-black knob relies on a bump for indication rather than a white stripe.

{{< /columns >}}

{{< columns >}}

On a far less useful but neat note- I think 'ambilight' systems need to be more common, obviously user choice whether or not to use it, but yeah. 10/10 need more ambilight in my life.

Basically ambilight is just a system for letting the colors from the pixels near the edge of the screen be mirrored onto some RGB leds so that the color spills onto the wall behind. It's a really neat effect for games or movies.

<--->

![](/hci/Ambilight-2.webp)

{{< attribution >}}

Ambilight image from [Wikipeda user Stephan Legachev](https://commons.wikimedia.org/wiki/File:Ambilight-2.jpg), resized for this blog.

{{< /attribution >}}

{{< /columns >}}

### CO2

<iframe width="100%" height="500" src="https://www.youtube.com/embed/1Nh_vxpycEA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Alright, so after seeing this I went out and got a [CO2 meter](https://www.co2meter.com/collections/desktop/products/co2mini-co2-indoor-air-quality-monitor). I watched it get above **2000ppm** regularly. I took steps to lower it and now, honestly, I do feel better. (If you follow my lead, I recommend hooking it up to a Pi and using [this python package to log the data](https://github.com/vfilimonov/co2meter) )

This requires two things to fix:

1. Better indoor ventilation
2. A Carbon tax and other restrictions that scientists and economists have been telling governments for decades that they need to be doing before we lose entire ecosystems, our entire world becomes inhospitable to life as we know it, more cities have [air that is literally toxic](https://www.bbc.com/news/world-asia-india-50280390), and things just generally go to shit.

Coming back around to 'How is this relevant to how we interact with computers'?

Well, I imagine you like to breathe while at your desk, and I also assume that you're using a device that uses electricity to read this, and that device is very likely *not* powered by renewable energy.

## A Good Environment for Thought

It's also worth considering what is in your space to keep visually appealing. Wires dangling over things, pealing paint, unorganized shelves, etc. are obviously off-putting, but I'd go the step further to say they actively interrupt productivity as they stick out and beg to be fixed. It's the standard scenario of not wanting to do homework until the room is clean. On the other hand, adding a bit of tactile flair can go a long way. It is tough to strike a good balance. I personally don't want art or static words (paintings with text, motivational posters etc.) in front of me in my work space as I find that distracting. Instead, some acoustic panels (not cheap acoustic foam) on the wall can go a long way, both for sound in a room and adding visual interest to the wall, and it's pretty cheap too.

To keep your desk tidy a good start is just getting rid of your monitor's base and using a VESA mount to the wall or back of desk. the flexibility in position and extra available desk space goes a long way, and it's much, much more visually appealing.

Rather paradoxically, I do see value in motion in the work space too. For example, [MIT's reactive table](https://www.youtube.com/watch?v=1fV-B0E9rP4) or those [fancy marble in sand tables](https://www.youtube.com/watch?v=Ztax9lCE-Mk) can add much needed visual motion to prevent a space from becoming stale. Hell, even a simple fish tank or plant that adds a bit of change with time make's a huge difference.

{{< hint warning >}}

If you do think "huh, I could go for a fish tank", I will warn you most produce a fair amount of noise with running water and motors for the air pump and filtration. There are some tanks that avoid both though, so don't immediately rule it out, just do your research.

{{< /hint >}}
