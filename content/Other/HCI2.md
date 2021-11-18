# The Way We Interact With Computers Sucks.

**What do you see when you sit down to work?** My guess is a desk pressed against a wall, maybe a few shelves, one, maybe two monitors in front of you, and a keyboard and mouse dominating the work area of your desk. How do you access information? Do you simply Google something and if it's not on the first page give up? How do you get reliable information when you have a question? How do you interpret results that you find? How do you store information you've collected? How do you filter information to get exactly what you're looking for?

If you're reading this, I'd wager that you've at least thought about this a little. Maybe you're a Linux user, deep into the tiling window manager rabbit hole. Maybe you already have a fancy keyboard, monitors surrounding you on all sides. But I'm here to tell you that no matter how hard you've tried, **what you're using still probably sucks**.

I think we, as individuals and as business, need to invest more in our work spaces, probably well beyond what most people would even consider. I'm not talking about adding a third monitor or giving everyone an artistic environment. I'm talking about setting up a work environment that's conducive to productivity as instead of merely being the medium on which it takes place, the work environment should actively contribute to finding, accessing, retrieving/storing, consuming, and creating. - where data can be anything: art, documentation, code, whatever.

## HCI?

**Human Computer Interaction** or [HCI](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction) is an interesting topic to me. So many people spend a crazy amount of time in front of a screen , you'd think we'd have some *damn* good hardware and software to use while we further deepen the permanent butt-shaped indentation into our seats, but alas, instead most people use *ˢʰᵘᵈᵈᵉʳ* Windows.

Back in late 2018 I wrote the first version of this post and basically everything in there has been restated here but better. Since then I've talked to many others about this, read *many* other blog posts, and just generally done a lot of new things with computers and learned a lot, so here's HCI2: Electric Boogaloo.

## Chapter 1: The Physical

Computers aren't just about software, websites, and programs. As the most powerful tool that most people have access to and often one that we spend many hours a day looking at, it makes sense that we make working with that tool comfortable, straight forward, and healthy. In general, we've mostly sucked at this, and while some things are getting better (monitor resolution) some things have gotten significantly worse (keyboards). Furthermore, the desks we sit at and the air we breathe while working is in need of attention too. 

### Our Input Methods Suck.

What the fuck is this shit?

![crappy membrane keyboard](/hci/membranekeys.webp)

Well, this shit is membrane keys. They use a lil' membrane of flexible plastic to make a button that when you press completes a circuit. They feel like mush and generally suck to type on. We can do much, much better:

![Mechanical keyboard](/hci/mechanicalkeys.webp)

Okay, cool, a mechanical keyboard. Now at least each switch is, well, mechanical. There's a spring and actual feedback to your fingers and ears when you hit a key. But the keys are still arranged horrendously and it's not at all fitting for human hands. So... What next? 

![ergodone](/hci/ergodone.webp)

Alright, so this is what I use. For me, this is great. It's still attainable and usable by mere mortals without infinitely deep wallets<a class="ptr">(1)</a> and using software as it exists today, but I think that's largely still because it's the furthest edge you can go from normal before things start being a royal pain in the ass, and don't get me wrong. It's not that there's not some PITA incurred from using this weird of a keyboard. Switching to a traditional keyboard will always feel weird, other people can't easily use your computer (not sure this is reallllly a downside...), configuration still basically requires you understand the basics of C programming, and some things that expect keys to be in certain places (games) will often be awkward.

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

A: Now I'm asking myself a hard question. It's easy to list off good qualities of the familiar: Tactile, Responsive (low latency), Customizable, No αɯƙɯαɾԃ movements, keeps the users *hands and arms (hmmmm...) in a natural position, characters laid out well for the users language (and able to be switched live). But how do you get down to the core of this question without just listing traits of 'goodness' in existing things, what actual goals should we strive for. Should it be one unified device? (Hint: Touchscreens are great, but no.) What goals out weigh others? Is ergonomics more important than tactility? **Can there even be a defined list that makes an input deice good?**

**No.**

That's why this topic is so interesting. My hands are not your hands. I play music, make art, write stories (and blog posts) and code. Part of the reason I got an Ergodone keyboard in the first place is because I was starting to experience some nasty hand cramps that were particularly bad if I was switching between guitar and typing a lot. I was willing to try just about anything, which I did. I switched to Dvorak<a class="ptr">(2)</a>, an alternative keyboard layout. That didn't do the trick so I tried the ergodone (still using Dvorak, my layout is [here](https://github.com/qmk/qmk_firmware/blob/master/keyboards/ergodone/keymaps/vega/keymap.c)) and haven't looked back. But that's left a few interesting points, ignoring the obvious reason of price, why are people still using something seems to be obviously *worse* - in a word: Familiarity.

**Frankly, fuck that.**

We can do so much better. Our phones have auto correct and limited [text expansion](https://espanso.org), why do our beefier systems not do something a thousand times better with their superior on board resources? We could at least make it easier to grab [text out of screenshots](https://github.com/ianzhao05/textshot)- But why are we not doing natural language processing so that I can verbally or textually describe to you a graph or math equation without needing to have committed to memory some archaic set of {{< katex >}} \LaTeX {{< /katex >}}symbol names <a class="ptr">(3)</a>? Why are so many fields limited to ASCII, or maybe UTF-8, giving us those sweet, sweet emoji 🔥🔥🔥💯💯💯💯 when we could have something that allows text, diagrams, pictures, videos, etc.

{{< columns >}}

Why are we limited to only buttons on our keyboards anyway? I have a BDN9 macro pad that has encoders which I can use to input keystrokes too, this lets me map knobs to functions that makes sense, like pageup/down, volume up/down, brush size in an art program, etc.

<--->

![BDN9 keypad with encoders](/hci/bdn9.webp)

{{< /columns >}}

---

Also, if you're the kind of person that needs to write long walls of text with minimal formatting, you might want to check out stenography:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/nRp_1S7cj6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### More than Just the Keyboard:

#### Mice and Touch pads and track balls

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

However, using the Leap for everything would require you hold your hands out to point - something that anybody who ever owned a wii can tell you gets very tiring very quickly - and the Lexip PU94 would be far to awkward to use daily.

So, I honestly don't know what the pointing device of the future looks like. Maybe it involves a mix of a mouse, finger tracking, eye control, and joysticks? The use of [WiiMotes for projection mapping](https://www.youtube.com/watch?v=wEeVMEzOmac) shows that there is room for using different devices for different kinds of input though. Maybe it's more like the [non-game uses the Kinect](https://hackaday.com/2020/11/09/kinect-gave-us-a-preview-of-the-future-though-not-the-one-it-intended/) has gotten over it's post-lifetime? I'm not really sure.

As for issues with current tech, mouse acceleration and touch pad responsiveness, and touch pad dead zone are all big problems and, like, I don't understand how that's a problem in 2021?

To give credit where credit is due, there have been minor changes that are trending positive, such as Logitech's MX Master Line with the infinite scroll wheels, and a general trend for reducing latency and increasing customization options of higher-end mice.

Unfortunately, the drivers for configuring these options are still largely proprietary and anything but standardized, meaning making integration between brands and OS built-in support all but impossible. Of everything listed up to this point, I actually think this is the biggest problem. Without a consistent, extendable interface about the best that can be exposed is awkward hacks where joysticks are mapped as if they're on a full game controller or keys just mapped to a macro of keyboard keys or existing but unused keys like the F13 though F24 keys or scroll lock. This is a massive problem. More on that in a bit.

#### Foot Controllers

{{< columns >}}

![](/hci/mc6.webp)

MorningStar MC6, a MIDI foot pedal that's highly customizable and has inputs for connecting analog expression pedals (the green thing on the left). 10/10 recommended

<--->

![](/hci/stinky.webp)

[Stinky Footboard](http://www.stinkyboard.com) - it's effectively a 4-key mechanical keyboard for your feet. The driver for this product sucks, so I swapped the controller out for a promicro running QMK. 

{{< /columns >}}

And, don't get me wrong, both are great. Being able to use my feet to control my system really allows for a lot of flexibility; however, your feet can only do so fine-grained of control. Unlike keyboards where our fingers are great at hitting a bunch of individual keys, we're better at hitting smaller buttons or controlling pedals (think pressure sensitive like a gas pedal) with our feet. So, with that in mind, you only get a limited number of inputs you can practically control, so those inputs really need to count. That's the problem. They really don't.

Even with all the power that using QMK gives and all the configuration options exposed in the MC6's config editor, they lack one big thing: **Context sensitivity.**

Essentially, if my inputs are limited, there's a limited number of solutions. The MC6 does offer multiple pages of inputs by stepping on two buttons at once to either page up or page down, but that's not as good as just sending messages to the device to let it know that I've switched what I'm doing and that it should switch it's active page/profile/whatever accordingly, the problem there is that has to be set up manually. With context sensitivity in theory devices could change the way they behave to be optimal for what you're working on. Right now I have the Stinky Footboard set to control media playback (⏯️, ⏭️, ⏮️, 🔇) but that's currently *all* it is set to, and that seem like a bit of a waste. Sure, I could set up multiple profiles, but without them being context aware that's a bit of a moot point. And, alright, I think the original driver software for it as well as the software for most of my 'gaming' peripherals supports checking what the running program is, but that seems like a really bad solution and instead should be something the OS handles by letting the devices send generic button up/down events and doing **ALL of the mapping in software**.

The other relevant point would be the ability for **inter-peripheral communication** - basically, your mouse should be able to 'talk' to your keyboard and vis-versa. This becomes a bit redundant if as mentioned above all the mapping and meaning of buttons is defined in software, but the point would be that a key-combo could change your mouse's DPI, or holding a button on your mouse could put your keyboard into a one-handed mode.

#### Pen Tablets

Honestly, most pen tablets are reasonably good. Not all of them have great latency, map super well between the pen's nibb and the actual pointer on the screen, and the majority *don't* support touch, which probably isn't ideal, but in general they do the job well enough, or, would, if you only counted the hardware.

*Warning, the following is a rant about drivers on Windows:* This is interesting as the hardware is actually reasonably competent, while the software is largely so incredibly god awful that it is somehow impressive. While I realize this is totally anecdotal, one pen tablet I've used on Windows the driver software is so bad that it actually randomly takes over as the focused application about once every 15 minutes, meaning whatever line you were in the middle of drawing just *stops* and you have to click on the program again to keep going. But, like, even with more competent driver stacks there's like a 6 different options for pen pressure: Wintab, Windows Ink, the option to 'Use the device as a mouse pointer' ... It's so incredibly confusing and the required options per application vary wildly. To make matters worse, most of the drivers completely shit themselves if one display is scaled for HiDPI and another isn't. On Linux, ironically, I've actually had very good luck with pen tablets. 

But even then most don't handle pressure in a way that's customization in a good way, instead relying on software to do pressure-mapping, which just isn't great. It's often a serious pain in the ass to get it set  𝘫𝘶𝘴𝘵 𝘳𝘪𝘨𝘩𝘵  so that you don't get crazy pressure jumps and even if the driver has in-driver calibration, you still usually have to tweak it more in the specific art/drawing/art application so now you have TWO pressure maps and it begins to feel like trying to balance a double pendulum.

I do still think there's more room for improvement in the hardware too. I think [Microsoft's Surface Studio 2](https://youtu.be/RmVAbB3M-4Y?t=45) actually had some really interesting and innovative ideas albeit it's a *weee bit* on the extremely expensive side at 3,500 USD. I also think the [HP Sprout](https://www8.hp.com/us/en/campaigns/sprout-pro/overview.html) did some really neat things too. Unfortunately, I highly suspect both will suffer from poor long term support.

I also think there's room to allow for workflows that rely more on the physical, possibly something like [Dynamic Land](https://dynamicland.org) or even just the [iskn](https://www.iskn.co) Slate or Repaper (Note, I tried the slate and it really, really sucked. But the *idea* was interesting.)

#### Audio And Video

[Your **webcam** is shit](https://reincubate.com/support/how-to/why-are-webcams-bad/#putting-them-to-the-test). You know how I know? Because it's a webcam. Even the everybody's go-to, the Logitcech C920, is shit<a class="ptr">(8)</a>. You know what else is shit? Your microphone. When you type on a laptop it sounds like damn earthquake, and if you get comfortable and lean back in your chair you suddenly get quiet. But more than anything it sounds like I'm carry a call over cans on a string. Maybe you have a gamer headset. Cool, the boom mic sounds about as good somebody screaming through a cardboard tube.

But, better cameras do exist, and if you are willing to shell out the cash you can get a decent mic, but either way they have a problem.

The default settings are still shit.

On webcams you have auto-white balance, auto-focus, auto-gain, etc. and everything it tries to do is awful. On a laptop where it will legitimately be in a different setting regularly, that's some-what forgivable, but on a desktop webcam? Like, the only variable here is if there's a window letting light in. Make calibration easy and give me a white-balance slider. Please. Or just make better cameras and let the open source community make better drivers. I assure you there are plenty of rage-filled nerds willing to make your product not suck so hard.

Right now, my best webcam is *my phone* running [droidcam](https://www.dev47apps.com). I have the (at time of writing) $80 logitech C920 webcam. A device which is meant to ONLY be a camera. It has one job. Yet, this awkward hack using my phone looks MUCH better.

---

Your mic is also shit for the same reason. When doing audio mixing for a video or podcast there's some basic things that will almost always be in the mix chain: A noise supressor, A De-Esser, A Compressor (or multiple), and an Equalizer. For the most part, the settings on these things can be determined pretty algorithmically, or, better, a database of settings for hardware can be created and maintained - You'd still need to adjust for your voice (particularly for if you have a low or high pitch voice) but it could massively help.

If you have gone out and gotten an expensive mic or audio interface to plug you mic into, you may have decided to get one that connects to the computer and is **powered by** USB. This is really, really dumb. I think every audio device I've ever used that connects via USB has had some sort of noise issues because of the USB power. Stop it. Isolate the power and use a real power supply and some real filtering. Please.

Though, probably the most obnoxious thing that results from this is the inability to route audio in any reasonable way. Linux and Mac it seems have this done semi-well, Mac with Core Audio and Linux with Jack, but on Windows if you want to use a nice mic to talk on VOIP you better hook up your mic on the the first input on the audio interface or you're shit outta' luck my friend. 

I'll expand on this thought later, down in the **Your Audio Sucks** Section.

Finally, *nobody* has ever wanted their notifications to show up when sharing their screen. Why are notifications not deemed as a sort of 'draw over' element by default?

#### Application Specific Controllers (MIDI Controllers, Video Editing, etc)

First of all, this is done in a stupid way in most circumstances<a class="ptr">(9)</a>. There is no reason you should have single use hardware that sends specific commands that are not programmable by the user. Like I said above, let's do all the mapping in software. This lets features be added later and users make better use of their controllers.

But, let's look at some of what exists, and why I'm saying this. While other devices exist to pick on, I'm gong to focus on MIDI controllers as they're what I know.

First though, for those unfamiliar, what is a MIDI controller? MIDI, or Musical Instrument Digital Interface is a bloody ancient standard that's still (mostly) 7-bit and let's you send control messages about actions on a controller made for music, often a piano keyboard, so, something like Key C4 Down, Velocity 8 or twisting a knob may be on a MIDI Control Channel (CC) and will be like CC43 changed to 127. Obviously in 2020 having a 7 bit standard is a bit archaic, and it's a rather stupid that it's taken until earlier this year for the improved MIDI 2.0 standard to even be ratified, but I digress.

MIDI controllers come in all shapes and sizes, from a grid of RGB buttons to traditional keyboards to just a large array of knobs, so, naturally people took notice, and MIDI can therefore be used to control things it was never, ever meant for. People often try to use it to control video editors, 3D modeling software, and generally anything that Adobe<a class="ptr">(10)</a> makes.

![midi controllers](/hci/midicontrollers.webp)

> Pictured here are the Novation Launch Key MkII (The big keyboard),  Launhpad MkII (the 8x8 grid), the Roli Seaboard Block, and two Roli Lightpad Blocks.  <a class="ptr">(11)</a> The Roli equipment uses MPE, a 'standard' that abuses the hell out of midi and does things with it that were never intended.

So now we have a crazy amount of controllers using a shitty standard instead of something that actually exposes more data and allows for finer control being used in ways that abuse the protocol instead of just exposing raw button down/up events and knob twists to the OS.

Note, I'm being careful to say button up and down events instead of button press. This is because it makes a lot more sense to exrpess the events as raw as possible so the OS can do things like detect a double-press, long-hold, etc.

#### Voice Control

The first thing I want to point out is how incredibly English centric voice control is. I only speak English so I lack any more to say on the subject, but come on.

Next, why can my phone do voice control but my computer either can't or just really sucks at it. I know you can use OkGoogle from Chome, That Cortanna is a thing, and that there's multiple open source projects that implement voice control. But, they all sorta suck. None of them can do much beyond just setting a timer or working with a limited set of supported applications in a way that fails more often than not. 

If anything, I think Alexa is a bit ahead of the curve on this making it semi-easy to add custom actions, but does *anybody* actually have Alexa For PCs installed on Windows?

I want voice control that can actually -do- something. Not 15 competing standards. It's okay if they all implement the same standard protocol, but unless there's a standard that all programs can start tieing into and it's given real, time saving capabilities nobody will use it. This mostly comes down to needing much, much better natural language processing - something that [GTP-3](https://en.wikipedia.org/wiki/GPT-3) has shown is possible - and having a way for applications to define accessible inputs and outputs. Think the Unix Philosophy where things can be piped and IO redirected but applied to larger applications and controlled via voice or text entry.

#### Object Tracking

What if everything you did was an actionable input? What if you could finger-drum on your desk and get real drum sounds, have your computer pause a video if you get out of you chair, or give the user a warning if they've been sitting with a bad posture for a long time? Between the Kinect, [Leap Motion,](https://www.ultraleap.com) and [Tobii Eye Tracking](https://www.tobii.com) we're staring to get close to this.

I think https://dynamicland.org has a lot of interesting thoughts on this idea and if this vision of the future interests you, you should check it out. [ReacTable](https://www.youtube.com/watch?v=Mgy1S8qymx0&ab_channel=ReacTj) is another interesting concept in the relm of pyhsical computing too.

I do think in the future we'll stop using the basic screen + keyboard + mouse combo and see more 'smarts' integrated into everyday things and our work flows. I really like the idea of having a desk with a camera and projector above it to highlight objects and interact with what it can see- scanning documents, giving feedback on technique with crafts, whatever.

#### Game Controllers

Re everything above. Something something make sure they're rechargeable, ergonomic, and simply fun to use. My award for Not Sucking™ goes to the Steam Controller and my award for Best For People With Three Hands™ goes to the N64 Controller.

#### RFID Tags

I have RFID tags from Dangerous Things in each hand, I have an RFID based access card for my University, and my parking lot uses RFID tags for entry. Ignoring the obvious security problems with RFID authentication, It's also just not great to have people carry around a card when their phones can already act as an RFID device anyway, it just makes for a very mis-placeable access token which seems rather stupid. I'll talk authentication more in a bit.

#### Document Scanners

I will not take this opportunity to rant about printers, no matter how much I want to.

To keep this short: Higher default DPI, options to output via OCR (Optical Character Recognition) directly to the document so you don't have to even store the original document, built in de-noising (remove the dust specs), live scanning of paper via camera for things like helping with math.

### What's worse is half this shit already exists, and it is shit.

Want to look up {{< katex >}} \LaTeX {{< /katex >}} Symbols? [Done.](https://detexify.kirelabs.org/classify.html) Want to have Optical Character Recognition on your screenshots? [Textshot has that covered.](https://github.com/ianzhao05/textshot) But while I could go on with this list, the big problem is of *integration* While having an OS like Linux that is tweakabe to the nth degree is unmistakably *fucking incredible*. I also **shouldn't have to**. I should be able to use any computer and trust the OS to have built in methods for getting text from a picture, to trust the OS will let me remap keys so that tapping the [shift keys types perentheses](https://docs.qmk.fm#/feature_space_cadet) or that I can bind the keys to type arbitrary Unicode. The OS should have a **local** - *don't you fucking dare collect all of this data* - store of everything I've looked at so I can go back and search for "mostly purple images" or "links clicked on October 12th". And like, there's about a dozen different chrome extensions that try to do this under the very stupid assumption that essentially all of that interaction will be in browser.

### Our Physical Environments Suck

#### Your Chair Sucks

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

#### Your Desk Sucks

**or 'why the fuck is it so hard to find a deep desk with a keyboard tray'**

I've gone though wayyyy to many desks. What I'm currently using is a nice big un' with a surface that is 5' x 2'4" and it's still. not. big. enough. (for reference, a 'normal' cheap desk seems to be ~3' x 1'8"). So I've had to put two desks in an L-shape.

I know that I can pick from pleanty of L or U shaped desks on amazon, but most will be seriously lacking in depth and be less than study, so my 2-desk concoction is the best I can do without making one- which I do intend to do at some point.

![](/hci/desk.webp)

And, alright, I admit, I'm not a typical computer user. I have enough devices hooked up that `lsusb` gives me 36 lines of output<a class="ptr">(15)</a>, I have 3 monitors + a pen display, and my desk is also home to a whole host of lab equipment, a eurorack setup, and other various things. 

Sure, It does actually have a decent sized keyboard tray unlike most where they just expect you to put the keyboard and mouse on top of the desk like some sort of monster, but that tray is still on the small side if I were to use a normal full size keyboard (with numberpad). Worse, if I use a normal keyboard my hands tend to hit the sides of the keyboard tray (where the slides attach). I've seen a ton of wooden desks with this issue. Just move the rails back like 2 inches and angle it. Please. A lot of desks also skimp on the height of keyboard that can fit in the tray. This is a fair trade off, as the better this is the closer it is to your legs when sitting, but still, I've seen multiple where the feet on the keyboard can't be raised to make typing more comfortable otherwise the keyboard tray can't be closed. My desk actually sits in a pretty good sweet spot on this, but...

I still think my desk sorta sucks.

Hear me out. First of all, I have a bad knee. Not like I'm walking around with a cane bad, but more like if I sit in one position for more than ~20 minutes and then move it I get a sharp pain like someone just drove a hot knife directly into it, but it only lasts a second. Yunno' what would be a major help with that? A sit / stand desk (height adjustable) desk.

But that won't work for me, and probably a lot of other nerds reading this for one big reason. **Wire. Hell.** Like, maybe you're thinking "Pssh, what, so you have like a dozen cables down there, power, display, USB mouse/keeb, and audio"

Ha. No.

I won't try to list it out, but Oh. My. God. A sit stand desk wouldn't be possible because that wire hell is truly **untameable** in it's current state, so, we're gonna take a brief detour from the desk stuff:

**You Are Now Entering: The Cable Abyss.**

I could rant to you about how USB-C with it's 42 different standards is a god damn nightmare, and that'd even be pretty relevant here. But that's not the rabbit hole I want to fall down right now, instead I want to introduce you to my friend, MIDI.

MIDI Is a fucking shit of a standard. It's 7 bit, ancient, and the 'standard' <a class="ptr">(4)</a> cable for it has (ᵈᵉᵖᵉⁿᵈᶦⁿᵍ ᵒⁿ ʰᵒʷ ʸᵒᵘ ˡᵒᵒᵏ ᵃᵗ ᶦᵗ) 3 more pins than it even uses. By all metrics it fucking sucks. ***However***, They did do one thing right.

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

More practically though, as mentioned before, it's ideal if the mouse and keyboard aren't in the way of desk space that would otherwise be used for physical craft, note taking, art, etc. So I think three spaces total are ideal: one for primary input devices- today that's a mouse and keyboard; a second for papers, a main project, etc; and a third that is easily accessible added for the interruptions and side projects in life.

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

As a final note, I realize not everyone has space for a massive desk, but in that case, I think things like [this folding desk (YouTube, DIY Persk)](https://www.youtube.com/watch?v=QaoFh1DH51U) should be more common.

Further reading:

[The Complexity of Building a Lie Down Workstation (altwork)](https://altwork.com/blogs/news/the-complexity-of-building-a-lie-down-workstation)

#### Your Audio Sucks

There's a huge range of audio systems. You might not be able to have speakers at all and have to use headphones, maybe you have an awesome setup running [Dolby Atmos](https://en.wikipedia.org/wiki/Dolby_Atmos) like [Deadmau5's](https://www.magneticmag.com/2016/05/deadmau5-shows-off-the-completion-of-his-new-home-studio-finally/) where the room and speakers have been engineered he can virtually drop an instrument on the sound stage wherever he wants.

But nothing like that is even needed in order to make things suck less.

How many times have you watched a YouTube video where the speakers voice had far too much bass or was masked by a high pitch whine? How many streams have you heard where there's some hum or annoying background noise? I'm sure you've turned up your audio because something is quiet only to have your ears ravaged as soon as the audio is fixed in the stream.

All of these things are totally fixable using a mix of hardware and software.

{{< hint warning >}}

Before I get into all the following, I'm not saying all of these things should always be in use. For example when somebody is making music all of this obviously needs to be able to bypassed.

{{< /hint >}}

##### Why *the fuck* do we not have a system-wide limiter?

And not just a dumb decibel limiter, but a [loudness (Wikipedia)](https://en.wikipedia.org/wiki/Loudness) limiter. There's no reason there shouldn't be a toggle-able limiter to protect your ears

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

#### Your Displays Suck

I'm going to assume that if you're reading this you're probably using at minimum a 1080p, 60hz monitor. And like, yeah 2073600 is a ton of pixels. If you assume the normal 8-bit per R-G-B (24bit color) then you get ~2.98Gbit/s which is already pretty impressive if you think about it, but then consider that even cheap single board computers are starting to be capable of 4k, 3840x2160 which at 60hz is ~11.94Gbit/s and, alright, that's already undeniably really cool. But, unfortunately, super not enough and already causing problems. 

If you're like me and running 4k @ 60hz, you've likely had at least some issues as a result of this. Lower quality Display Port <a class="ptr">(6)</a> cables can cause occasional flickering, you're probably limited to 6' DP cables. The reason I bring all of this up at the start is because I want to fully acknowledge that every extra bit we try to push down that pipe is pushing that even further and making it even more expensive.

But, let's go to more day-to-day concerns, the things that suck even assuming everything is working fine.

The first thing is obviously **resolution**.

4k is far from normal still. 1080p just is not enough. It's super easy to see the individual pixels from even a comfortable distance and text is pretty unclear unless sub-pixel rendering<a class="ptr">(5)</a> is used, but that makes things even worse because not all displays use the same sub-pixel layout.

Another problem with resolution is that ohmygod does scaling suck. A ton of applications, especially older ones, were made with the assumption that you'd be viewing everything on a 1080p or lower resolution. In general the move to 1080p actually wasn't felt as much because the size of our displays increased with their resolution, increasing work area but keep the application size roughly the same. The problem is with the move to 4k we're dramatically increasing pixel density at often the same screen size, so everything is ᵗᶦⁿʸ. Software scaling in the OS is pretty universally garbage, with some applications scaling in a way that looks super blurry, some being double scaled as both the OS and the application try to compensate, and some applications just not scaling at all. Because this is inherently a complaint about legacy support there's no easy solutions here. Using 4k instead of other  higher-than-1080p resolutions helps, as integer scaling (scaling exactly 2x) is an option as 4k is exactly equivalent to four 1080p screens stitched together, so you can just map 4-pixels in hardware to 1-pixel of what's trying to render... or you could, if we hadn't already tried to use aforementioned sub-pixel rendering.

I'm not sure that there's really much need to go beyond 4k. While I haven't even personally seen anything higher, I also can only pick out individual pixels when there's like, one lit pixel on a dark background, and I don't know that more innovation in resolution will really matter. Instead, there's a pile of other outstanding issues.

> Little aside first. Some jackasses decided even on digital displays [interlacing](https://en.wikipedia.org/wiki/Interlaced_video) should be a thing. I don't want to lose focus here, but I want to at least mention this, which you'll often see listed as 1080i or 720i, is shit.

##### Refresh Rate

Do a little experiment for me real quick: try changing your display to 30Hz. Most displays will support it.

Now move your mouse around in circles, try doing something where you need things to respond quickly, like playing games.

You'll probably notice it directly, but if not, you will likely at the very least feel a bit motion sick.

Now, realize that the vast, vast majority of displays are only 60hz. Double that, sure, but I think you could easily see how more would be great. This is exactly why most displays sold for gaming advertise being higher refresh rate, often 144hz or more. This is where my above commentary on throughput of DisplayPort and reliability at high rates. If you look at the [Display Port (Wikipedia)](https://en.wikipedia.org/wiki/DisplayPort#1.4) you can see this problem has been mostly addressed, but that only means so much if cables are shit and monitors that are both high res and high refresh rate cost both arms and a leg. Obviously this should get better with time, but it's still a problem.

Some displays may support Freesync or Gsync <a class="ptr">(7)</a>, and both of these technologies require a supported graphics card in the system as well. These allow the display and computer to adaptively change the refresh rate so the monitor and computer both send and display frames in sync, which can make even a low refresh rate 'feel' much higher. This is a feature typically marketed to gamers and only supported in video games, but this has been changing a tiny bit. The big thing to note here is that it's dependent on the frame rate of the application that the user cares about, you could, I guess, sync to your your compositor's (the thing that draws multiple windows onto the desktop simultaneously) frame rate, but I don't think there could even be any benefit there. So, really, this is mostly applicable to games as there's a few other applications you'd even want to run in full screen where this latency and responsiveness improvement would matter.

related to refresh rate is **latency**. In general this can actually mean two things, one is how long it takes for an image sent to the screen to actually be displayed. The lower this time the better, with good screens being sub 10 millisecond. Unfortunately, there's no standard among the industry to measure this and many get it wrong.

Also with latency there's grey to grey times, this is a measure of how long it takes a pixel to go from one shade to another. The lower this is the less motion blur the screen will exhibit.

This, to me, is a big deal. Latency is something you can *feel*. If there's a long total input lag between the time you click something and that action taking place, that's a big fucking problem- and long here doesn't even mean all that much time:

> Testing has found that overall "input lag" (from controller input to display response) times of approximately 200 ms are distracting to the user.[[6\]](https://en.wikipedia.org/wiki/Input_lag#cite_note-6) [(Wikipedia Article on Input Lag)](https://en.wikipedia.org/wiki/Input_lag)

So, the time it actually takes for your display to update once it's gotten a frame is not irreverent.

##### Dimming

Unless you're a fan of melting your eyes out of their sockets, you likely do not have your display set to maximum brightness. Unfortunately, dimming on most displays is absolute garbage.

Instead of doing DC dimming, that is just lowering the voltage of the back light so it is dimmer, the majority of displays do PWM, Pulse Width Modulation, Dimming. 

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Duty_Cycle_Examples.png" style="zoom:75%;" />

{{< attribution >}}

PWM image by [Thewrightstuff](https://commons.wikimedia.org/w/index.php?title=User:Thewrightstuff&action=edit&redlink=1) CC BY-SA 4.0

{{< /attribution >}}

So instead of just lowering the level directly, the back light is turned on and off rapidly, for a varying amount of time. This might be done really fast, sometimes it's fast enough that it really does not matter or there's a reasonable amount of capacitance to smooth this out, effectively making it look like just a DC signal again, good enough. Sometimes, the manufacture sucks and uses shitty, low frequency PWM dimming and even if you can't consciously see it, it will cause headaches and generally suck over long periods.

<video width="70%" height="400" controls>  <source src="/hcir/pwm.mp4" type="video/mp4">  <source src="movie.ogg" type="video/ogg">  Your browser does not support the video tag.</video>

> This is PWM dimming on a fourteen-segment display captured with the 'slow-mo' camera on my phone.

In this video, because it is so incredibly slowed down, you can see the led's flash easily, but at that middle setting I can easily see it in real-time too and it is headache inducing. At the lowest or highest settings it isn't noticeable. [Persistence of vision](https://en.wikipedia.org/wiki/Persistence_of_vision) is why this even works in the first place, but obviously that has limits and crappy PWM dimming on an otherwise nice display can really, really suck.

This has put me in the crappy situation before of having to set the display to max brightness to avoid the headache from the strobing effect (Pulse width at 100% means constantly on so just DC), but dealing with being blinded by any application with a white background.

##### Color and Dynamic Range

If you have multiple displays that aren't exactly the same you know just how annoying un-matched color can be. This is a harder problem to solve than some of the others. Color calibration definitely helps, but that only means so much when the actual display technology may be different. an LCD will look different than an LED will look different than an OLED even if they're color calibrated to match. This, I think, is actually reasonable. What is totally unreasonable is how digital color looks in the first place. Let me start by linking a video:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/h9j89L8eQQk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This sucks. Like, why have we accepted this? Sure, things like [High Dynamic Range (Wikipedia)](https://en.wikipedia.org/wiki/High-dynamic-range_rendering) or HDR - which allows the panel to selective change the brightness in an area of the screen, giving much better dynamic range in supported applications - have helped with this problem indirectly, but it's still not great. 

What we really need is to finally step up from [24bit color](https://www.cambridgeincolour.com/tutorials/bit-depth.htm) to something better, and in fairness, this has been happening. A lot of newer monitors do support 10bit per channel ([30bit color (Wikipedia)](https://en.wikipedia.org/wiki/Color_depth#Deep_color_(30-bit))) and some do 12-bit. Unfortunately, at higher resolutions this sometimes requires trading refresh rate for color depth (want 30bit color? You'll have to run at 30hz.) 

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

### Your Space Sucks

#### Noise

Just looking at the [Wikipedia Article on Noise Polution](https://en.wikipedia.org/wiki/Noise_pollution#Humans), it's pretty obvious that humans like to be somewhere where noise is kept to a minimum. There are of course questions about what you want to consider noise. Like, clearly above I made it clear I prefer mechanical keyboards which, as anyone that has been on a discord call can tell you, are rather loud. The difference is in it being noise you're causing, or background noise that you can't control. Fan noise from your computer, music from another room that you can't quite make out, a rattle from the HVAC system, that's *noise*. Somehow we've all gotten rather used to rather noisy environments.

Don't get me wrong, improvements have been made. A lot of computers don't even run the fans when they're idle or you're just web browsing (plus the fans have gotten bigger, which means lower pitch, which is way less annoying), LED bulbs don't have the ballasts that were required of old fluorescent bulbs that always found a way to whine, we no longer used CRT (Cathode Ray Tube) screens that had flyback transformers whining at the edge of human hearing either. But it's still not great. Even if none of the electronics in a room have fans or speakers or the other things you expect to make noise, you can still notice when a room has been shut off. If you spend a lot of time surrounded by electronics like I do, not having the hum around is a mix of eerie and relaxing. But, still a lot of electronics do have fans, and they're often crap. Even the high end ones that PC building enthusiasts idolize like those from Noctua [are far from amazing](https://www.youtube.com/watch?v=6L4Lbh5GwzA&ab_channel=MajorHardware). 

But, come on. Why are we not integrating at least some sound control into our architecture? Why is acoustic dampening something only used by streamers? Why are devices that we know get nasty [coil whine](https://en.wikipedia.org/wiki/Electromagnetically_induced_acoustic_noise) not being silenced by just adding some wax or glue to the inductors?

It's not like most of the solutions for making noise better aren't available and understood, it's just that it takes an extra bit of consideration and maybe a bit more money.

I'm not sure what the solution should be. Maybe products need to have some sort of testing for this and a label applied, like the ubiquitous 'Energy Star' stickers or the 80 Plus ratings on PC power supplies.

#### Lighting

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

#### CO2

<iframe width="100%" height="500" src="https://www.youtube.com/embed/1Nh_vxpycEA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Alright, so after seeing this I went out and got a [CO2 meter](https://www.co2meter.com/collections/desktop/products/co2mini-co2-indoor-air-quality-monitor). I watched it get above **2000ppm** regularly. I took steps to lower it and now, honestly, I do feel better.

This requires two things to fix:

1. Better indoor ventilation
2. A Carbon tax and other restrictions that scientists and economists have been telling governments for decades that they need to be doing before we lose entire ecosystems, our entire world becomes inhospitable to life as we know it, more cities have [air that is literally toxic](https://www.bbc.com/news/world-asia-india-50280390), and things just generally go to shit.

Coming back around to 'How is this relevant to how we interact with computers'?

Well, I imagine you like to breathe while at your desk, and I also assume that you're using a device that uses electricity to read this, and that device is very likely *not* powered by renewable energy.

### A Good Environment for Thought

It's also worth considering what is in your space to keep visually appealing. Wires dangling over things, pealing paint, unorganized shelves, etc. are obviously off-putting, but I'd go the step further to say they actively interrupt productivity as they stick out and beg to be fixed. It's the standard scenario of not wanting to do homework until the room is clean. On the other hand, adding a bit of tactile flair can go a long way. It is tough to strike a good balance. I personally don't want art or static words (paintings with text, motivational posters etc.) in front of me in my work space as I find that distracting. Instead, some acoustic panels (not cheap acoustic foam) on the wall can go a long way, both for sound in a room and adding visual interest to the wall, and it's pretty cheap too.

To keep your desk tidy a good start is just getting rid of your monitor's base and using a VESA mount to the wall or back of desk. the flexibility in position and extra available desk space goes a long way, and it's much, much more visually appealing.

Rather paradoxically, I do see value in motion in the work space too. For example, [MIT's reactive table](https://www.youtube.com/watch?v=1fV-B0E9rP4) or those [fancy marble in sand tables](https://www.youtube.com/watch?v=Ztax9lCE-Mk) can add much needed visual motion to prevent a space from becoming stale. Hell, even a simple fish tank or plant that adds a bit of change with time make's a huge difference.

{{< hint warning >}}

If you do think "huh, I could go for a fish tank", I will warn you most produce a fair amount of noise with running water and motors for the air pump and filtration. There are some tanks that avoid both though, so don't immediately rule it out, just do your research.

{{< /hint >}}

---

<div class="wrapper">
  <h2 class="glitch">Chapter 2: The Digital</h1>
</div>

<div hidden>

## Chapter 2: The Digital

</div>

Alright, now onto the fun stuff, I think I've established that the physical side of how we use a computer is sub optimal, but what about how we actually do the things we do day to day? I think, for the most part, these things can be put into a few categories:

* Finding and Accessing shit
* Looking at shit
* Storing Shit
* Transferring Shit 
* Making Shit

I'm not the first to think on this subject by any means, [Programs are a prison: Rethinking the fundamental building blocks of computing interfaces by Robert Lechte](https://djrobstep.com/posts/programs-are-a-prison) is a particularly good example of other thoughts on this same subject.

### Finding and Accessing Information Sucks

#### Search sucks

If you're like most people, you probably use Google Search, but also don't like Google Search. Google's search makes the entire top of the page ads, tracks you, and is just generally a bit invasive, but, you still probably use it instead of DuckDuckGo because the results often get you to what you're looking for faster.

To some extent things have gotten better as it is gotten easier to search directly from the search bar, with more browsers supporting setting the search engine by a prefix in the url bar, so if, for example, I want to search wikipedia and directly go to an article, I can just put a 'w' before what I search:

![](/hci/wsearch.webp)

And this definitely helps, but it's also not enough.

Search now regularly returns a number of results that is completely unprocessable by the human brain

![](/hci/resultcount.webp)

So, what can be done about this? Well, there's already a fair amount of advanced search options:

{{< columns >}}

![](/hci/searchopts.webp)

<--->

![](/hci/advsearch.webp)

{{< /columns >}}

But I honestly think these more or less miss the point of how people want to search, not to mention they're not super easy to remember. Being able to take things out in large swaths is often rather helpful, so why are there not options like NO_SOCIAL to get rid of all social media results.

On a similar note, [Ask HN: Is there a search engine which excludes the world's biggest websites?](https://news.ycombinator.com/item?id=23202850) was posted a while back, and I agree with idea: often I can find better information on smaller sites, so I think there should be an option to just say NO_10K to drop the top 10 thousand most popular sites from the search results. I don't know if this is really the right way to do this though. Fortunately, I do think the resurgence of [Webrings](https://en.wikipedia.org/wiki/Webring) is improving that a bit.

Finding something when you don't know the word for it exactly can be challenging too, especially if the correct term is also shared with something else (like looking for skateboard trucks but only searching the word 'Trucks'). This wouldn't be so bad, but sometimes trying to filter out the incorrect results doesn't work either, because of unforeseen overlaps. Unfortunately I don't know of a solution to this problem, as it's one of conveying intent with context, something which has been a problem much longer than the existence of search engines.

Often, I find what I'm looking for faster by just going to as close of a topic as I can think of on Wikipedia and poking around links than I can by directly searching.

It'd also be nice to have the ability to just set a list of bad sites. Like, please never ever show me any results from Pintrest.

Thinking more into the future, I would very much like to see a world where data searching is context aware. For example, say I'm searching for a data sheet for an old vacuum tube and I have a schematic of an old amplifier open in another tab, I would love if the browser saw the context and changed the label in the schematic into a link to this datasheet. Furthermore, it would be great if it crawled the web and finished finding datasheets and linking them, possibly well before I even even got to that page in the first place. I know we don't have the tech to do this yet, especially not as a general purpose tool, but I like to think about the future. ¯\\\_(ツ)\_/¯

Another point is the summery of information and omission of the irrelevant info. Say I were to look up bits in a byte, I don't necessarily need the historical context as to why bits are named bits and bytes, bytes, though even though I didn't search it, presenting that a nybble is 4 bits, and how to tell endinan-ness is more relevant, unless I had recently searched historical information or stated I wanted that explicitly. In my opinion we should be less concerned with finding relevant results and more concerned with discarding the irrelevant, though making the verbose available.

I also think that bringing people together, potentially anonymously, based on search and knowledge could be extraordinary valuable. If as I'm looking up 'How to do X' and somebody else is looking up 'How to Do Y, an advanced topic from X' it would be fantastic if we could talk, albeit unobtrusively to the person being requested. It seems to me that searching is desperately lacking a social element and ranking system. How great would a simple Reddit like upvote system on any given search be? What if browsers added a comment system that was hosted though some sort of distributed network and tied to each page so people could leave comments on any site regardless of if the site has comment functionality built in? (Yes, I know this is ripe for spam and abuse, but let me dream...)

Google also needs to quit their shit with information cards:

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/FPQnLW60Vt">pic.twitter.com/FPQnLW60Vt</a></p>— Randall Munroe (@xkcd) <a href="https://twitter.com/xkcd/status/1333621855001976832?ref_src=twsrc%5Etfw">December 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And it'd be great if something could actually be done about big sites like [Pinterest and Quora gaming Google](https://www.inputmag.com/culture/pinterest-sucks-google-image-photo-search-ruining-internet) 

Finally, I do want to end on a positive note: [Google is trying to show why results are ranked how they are](https://searchengineland.com/google-now-shows-why-it-ranked-a-specific-search-result-350659), and that's actuallypretty cool.

#### Pay-Walls suck

Look, it's not that I don't think journalists shouldn't be paid. They should be. It's just that having everything behind a paywall blows. There's not any fun solution to this. Ads suck too. Nobody wants a web full of micro-transactions, and the idea of news sites mining crypto while I read bothers me too. So, let's just ignore the news sites for a second, and instead, focus on the much more offensive situation: academia and scholarly articles ([not that they're all good to begin with (YouTube, DefCon 26)](https://www.youtube.com/watch?v=ras_VYgA77Q))

It's no secret that access to academic articles is *fucking* expensive. JSTOR alone is \$200 a year for only 85% of the content, some individual articles are well above $20 to read despite a huge portion of it being publicly funded in the first place, yet somehow these sites wonder why so many sites are turning to [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub).

[You Pay to Read Research You Fund. That's *Ludicrous* (WIRED)](https://www.wired.com/2016/04/stealing-publicly-funded-research-isnt-stealing/)

But it's so much worse than that. Tons of information services are subscription based. So, the costs add up way worse. While it may seem like a bit of a stretch, I think it's pretty reasonable to call Netflix, Hulu, etc. all information sources as they often host documentaries, if we look at [The Cost of Every Streaming Service Per Month (TheStreet)](https://www.thestreet.com/lifestyle/best-streaming-services-cost-15166523), and assume just the most popular ones, so Netflix, Prime Video, and Hulu, it's already at **$418 a year.** Is it really any wonder why people are piracy again? Even if you subscribe to the theory that Piracy is a distribution problem and not a price problem, the pay walls are still the problem, as each service has it's own incentive to hoard as much exclusive content as possible and make their platform better than others for the price. This means that each platform runs on it's own standards and cross-compatibility is a real PITA. There are now websites and apps that specialize in just telling you which streaming service has what. Like what in the fresh fuck. 

#### Authentication and Authorization Suck

> **Authentication** is the sign in- the verifying you are who you say you are
> 
> **Authorization** is what the user and service can do, or what 'permissions' you grant the service and what you're allowed to do on the service.

##### Authentication:

I'll bet cold, hard fictional cash that you've put off turning on two factor for a service you don't give two shits about.

I'll double my fictional money to bet that you have a junk password you use by default everywhere you don't give a shit.

Hell, I'll go all in betting on saying you've authenticated with quite a few services by just using the 

<div class="w3-container" style="width:fit-content%;display: inline-block;" ><p><button class="w3-button w3-blue w3-round-xxlarge w3-block">LOGIN WITH SOCIAL MEDIA</button></p></div></br>
button, though possibly only because it was the only way to login to that service at all.

Unfortunately, all of the above are probably not the best decisions.

The top two points combined mean someone can find your password in previous [security breaches (haveibeenpwned)](https://haveibeenpwned.com/PwnedWebsites), and then just login in, easy as that.

Using a social media login means that if you ever lose access to that account, either because Facebook or Google or Twitter or whatever decide to ban you or because you manage to forget you 'master' password and lock yourself out, you'll be locked out of everything you logged into those services with. Not to mention if someone manages to break into your Facebook or Goggle or Twitter or whatever they'll be able to login to any of those services too.

And look, I'm guilty of all of the above too. Sure, a password manager helps with this, but that's still annoying too as sometimes you just need to quickly sign in on a device for a few minutes. As of right now there's just no good solutions that are secure, easy to use everywhere, and fine gained enough to let the user give permissions as they want, and not give extra permissions they don't want to.

Alright, so just follow the normal advice and use long passwords?

![](https://imgs.xkcd.com/comics/password_strength.png)

{{< attribution >}}

[xkcd #936](https://xkcd.com/936/)

{{< /attribution >}}

Yeah. No. Well sorta. Okay, let me explain. Yes, you should use long passwords for exactly the reason this comic explains. But really, we need to stop using passwords outright. They just sorta suck.

Instead, we should go to [Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on), like the above "Login with Social Media" example, but the *user* should be able to trust and change the identity provider with ease, to avoid the 'Facebook banned me' issue.

The real shitty part is a lot of services already support something like this, letting you setup sign in with Single Sign-On via your own identity server, but it's usually limited to enterprise users.

That said, you can self host Single Sign-On (like the way 'Sign in With Google' works), [keycloak](https://www.keycloak.org), [Dex](https://github.com/dexidp/dex), [Gluu](https://www.gluu.org) are options for doing this. It's just that basically no online services will let you use your self hosted service without an enterprise account.

So, for now, users get fucked. There's really not any good options.

That said, some things have gotten better, [Webauthn](https://en.wikipedia.org/wiki/Single_sign-on) provides a much better way to authenticate with many services, including some that can provide Single Sign-On identities, often via those little [USB keys](https://www.yubico.com/products/) which are hugely better than the typical user name and password paradigm. 

{{< tip >}}

Note, those USB security keys have updated in standard. The newer ones which support WebAuthn are a bit more expensive and less common. The standards are confusing to understand, but the TLDR is you want something that supports WebAuthn/FIDO2.</br>The older standard, U2F, is a two factor system while the FIDO2/Webauth keys can outright replace passwords on the service

{{< /tip >}}

{{< hint info>}}

If you really want advice on what to use for your personal, daily password storage needs I think [keepassxc](https://keepassxc.org) is probably the best option at the moment, though it's still a tad awkward.

For advice on security and privacy see the <a href="/engineering/networking/security/">Security & Exploitation</a> and <a href="/engineering/networking/privacy/">Privacy</a> pages.

{{< /hint >}}

##### Authorization:

Put simply, we need easier to use, fine grain authorization settings that can't be bypassed. I should be able to tell a program, website, or app that I don't want to give it my location, and then, if it asks anyway it should be fed garbage. Refusal should also not stop access to that service<a class="ptr">(16)</a>. Similarly for storage, microphone, contacts, etc.

Newer versions of Android actually do this really well, including the ability to only grant those permissions for that session. This is amazing. It's not *perfect*, far from it. Like, Bluetooth requires location permissions and, unless you're on a rooted phone, there are some permissions the user can't even give. That's a load of shit, but I'll come back to that. 

#### Content Linkage sorta sucks

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Search is the biggest scam in UI now. It almost never works. How do you find stuff that is not in your top 10 results of mini snippets? We need more explorative interfaces taking advantage of context and association. <a href="https://t.co/RC1BEekf3X">pic.twitter.com/RC1BEekf3X</a></p>&mdash; Marcin Ignac (@marcinignac) <a href="https://twitter.com/marcinignac/status/1400806180797231104?ref_src=twsrc%5Etfw">June 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

![](https://obsidian.md/images/screenshot.png)

{{< attribution >}}

Screenshot from the homepage of [Obsidian.md](https://obsidian.md)

{{< /attribution >}}

The digital world doesn't have to be lonely pages indexed like a book, why are we treating it as such? Today each page can point to any other page in a beautiful web of interconnected information, where each topic has lines of association spanning such that no two pages are unconnected. Wikipedia sort of has the simplest form of this, but what if we had systems so capable of automatic understanding - not just tagging - of information that any new info could propagate though that web naturally. Social linkage to people in the same graph, even if anonymous, could help connect people that together, due to their very specific knowledge, drive man kind further. I should clarify to, I literally mean a web/graph, possibly in 3D, relating and indexing information, possibly like these 3D views of Wikipedia: (though the data should probably be served 'raw' so that other presentation methods can be developed, as this definitely wouldn't be ideal for actually reading the content)

![](/hci/wikigalaxy.webp)

{{< attribution >}}

[WikiGalaxy: Explore Wikipedia in 3D](http://wiki.polyfra.me#) ([wikiverse.io](https://www.wikiverse.io) is very similar and worth checking out too)

{{< /attribution >}}

Obviously this overly linked system is something that people would need to get used to. Until the advent of the WWW we've read information linearly, page by page. The web has allowed this tree traversal style of navigation so that any missed topic can be reviewed, but generally this is a system where the tree only builds down, to simpler information, from the current node. It seems weird to think about an algebra book where it suddenly references multidimensional calculus, but this is exactly what I'm implying. In my education there was uncountable times I had to learn something because 'it will be used later' with no explanation as to how or why. Linking back up the tree allows for information traversal in both directions, eliminating this problem.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Imagine if you could search through concept-space <a href="https://t.co/U3fSZaN8hR">pic.twitter.com/U3fSZaN8hR</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1356884394628108289?ref_src=twsrc%5Etfw">February 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Presentation of Information Sucks

This section is about how we view information, the presentation of words on a page, graphs, and information in general. To start, I want to look at something a little bit different.

![](/hci/gemini.webp)

This is the home page for a project called [Gemini](https://gemini.circumlunar.space), which is a sort of alternative internet, but, wait, hang on...

{{< columns >}}

![](/hci/gemini2.webp)

<--->

![](/hci/gemini3.webp)

{{< /columns >}}

These are both that same page, loaded in different browsers. Why do they look different?

Well, Gemini does something you may thing strange: It let's the browser (client) handle the look of the page. It only serves the raw text. That's it. That's all you get.

Now, I *do not* think this is a good idea for the general web. But, I do think as an idea, it can give us some valuable insights.

Put a pin in it for now though, let me jump ahead into Dark Patterns:

#### 'Dark Patterns'

> A **dark pattern** is "a user interface that has been carefully crafted to trick users into doing things, such as buying overpriced insurance with their purchase or signing up for recurring bills"

That's the definition from from Wikipedia anyway. I think it's a bit better put as "Dark Patterns are what happens when UI designed are a bag of dicks"

[This Site](https://darkpatterns.org/types-of-dark-pattern.html) has a lot of really good info on Dark Patters, and I recommend heading over there and then coming back over here. 

Oh, cool, you're back.

The biggest dark pattern that drives me nuts is a bit of what that site calls 'Confirm Shaming' and a bit of 'Misdirection', I'm talking about sites that do this

<div class="w3-container"><p><button class="w3-button w3-green w3-round-xxlarge w3-block">DO THE THING HERE</button></p></div>
<div class="w3-container"><p><button class="w3-button w3-black w3-tiny w3-round-xxlarge">or don't and watch the world burn</button></p></div>
<p>where the design is actively pursing an agenda. But it's not just those. Even ones that look semi reasonable can still be annoying if they don't include the action directly.  The affirmative action should be stated on the button that triggers it and both actions given equal weight to the user.</p>
<div class="w3-bar">
  <button class="w3-bar-item w3-button w3-red" style="width:50%">Don't Do Action</button>
  <button class="w3-bar-item w3-button w3-green" style="width:50%">Do Action</button>
</div>
<p>for example</p>
<div class="w3-bar">
  <button class="w3-bar-item w3-button w3-red" style="width:50%">Leave Items in Place</button>
  <button class="w3-bar-item w3-button w3-green" style="width:50%">Delete Items</button>
</div>

Note here by Action I literally mean to **include the verb.** Delete. Replace. Print. Etc. Yes or No *is not* good enough.

With destructive or irreversible actions, such as deletion (not recycling), given a confirmation dialogue, and if particularly important, a dialogue that require *meaningful* user input, like this prompt when deleting a repo on GitHub

<img src="/hci/delconfirm.webp" alt="DelConfirm" style="zoom:50%;" />

Alright, so back to Gemini: Making more things like it wouldn't totally solve this problem, designers could still totally chose to make the text confirm shame, but by letting more elements be controlled by the user (or their browser), we could at least do a little bit better by letting that ensure options to confirm or deny are given equal weight and that they are colored appropriately.

It's not like this system couldn't be abused still of course, and there will always be a balance between the user trusting the service and it's UI and the beauty of that UI, but I think we could stand to go a bit in the direction of Gemini.

#### Misleading Information

> "Global warming relies on the theory that we are destroying ecosystems. There is no evidence that we could destroy ecosystems."

{{< attribution >}}

Rush Limbaugh, recipient of the Medal Of Freedom.

{{< /attribution >}}

Yes. Misinformation online is a royal fucking shit show. There's no way to possibly preserve total free speech, [not that we should](https://en.wikipedia.org/wiki/Paradox_of_tolerance), and also have a system that doesn't spread misinformation to the extent that people stop vaccinating their kids or thinking that COVID is a hoax. I'm not trying to address that problem. If I could, I would. But I honestly think that's a genie we can't really put back in the bottle now.

Instead, I think we could do some things to make it a bit harder to spread stupid, false information by making it a bit harder to present data in misleading ways. Sure, the data itself may still be bad, but, we can make an attempt to increase transparency and display data accurately. How? Well, first, go have a look at some [comically bad graphs (Statistics How To)](https://www.statisticshowto.com/misleading-graphs/). 

A lot of these come down to graphs that purposefully play with axis or do other bullshit with the express intent of tricking you.

So, fuck their formatting. We should do it the Gemini way: Let the client handle the data display, and make the graphs interactive. If it's a two bar chart with one bar at 54.5% and one bar at 55.0%, that should be what the user sees first and only then can zoom in.

> This is already easy enough to do with something like https://d3js.org/, but it would need to be on the client side, and the server would just have to send the raw data + a preferred way to render it (bar chart or whatever), otherwise the problem is still there. Over time standards could grow to support more display formats. This would have the side effect of making it easier to author data and make web pages in the first place.

This also makes it easier to compare data sets, as now the client actually has access to the source data, or at least the data that drew the graph.

This practice could be incentivized too, as news, shopping, and review sites that use it could do so as a way to build trust with their users, and, probably more importantly for adoption, shit on their competitors that don't do the same.

For those that still don't, it might be possible to spin up a system with some machine learning to extract data from graphs in static images, and then re-display them as dynamic content.

This may not ensure the data is good, but at least it makes progress in increasing how we can trust data to some extent.

This could have extra uses too. Having something that could take two 2D graphs with a common axis and turn it into one 3d graph would be incredible, particularly if that data could come from multiple sources across multiple domains. Combine this with the ability to change the type of graph and this could help expose otherwise non obvious trends.

Beyond that, content moderation needs improvements too - I don't even mean fake news or porn here (Though we could stand to have better nsfw tagging on most social media). I mean the bullshit reviews on Amazon or the fake products when shopping online (mostly fake electronics). If those services are going to be allowed to make stupid amounts of money, they should be required to do at least a tiny bit of consumer protection.

#### Information Overload

{{< attribution >}}Yes, I see the irony in a post this long.{{< /attribution >}}

<img src="/hci/times-square.webp" alt="Times Square" style="zoom: 33%;" />

{{< attribution >}}

Bobby Mikul, Times Square :CC0 -- [Source](https://www.publicdomainpictures.net/en/browse-author.php?a=2185)

{{< /attribution >}}

Information overload is increasingly becoming a problem. As more and more information is accessible at our fingertips and more advertisements have the opportunity to be beamed via any one of a number of surrounding screens directly into our retinas we need a way to filter it down to levels the human brain can cope with and digest.

This is a complicated subject, on one hand, it's amazing to have an infinite wealth of information. On the other, an ever growing amount of that information is shit and irreverent, and eats away at our very limited mental processing time for the day, we can only ingest and actively pay attention to or throw out so much information, and when much of the information we seek to avoid (ads) are actively doing everything in their power to demand attention from our brains, be it with sex appeal, bright colors, or even humor, it's an uphill battle. So what can we do? Well, a good start would be to legally limit advertising to be less distracting from normal content **and** make the advertising more easily distinguishable from the real content. But I don't think that's enough. I think if we're going to make systems that have machine learning to get better and better at sucking our time we need to put in just as much effort to making design that promotes health and consumption in moderation.

An example of this is Netflix's 'Are you still watching?' while this was implemented on their end to prevent unnecessary usage of data, it has the side effect of letting a user know they've been on the couch longer than should probably be advised. I'm not advocating for interruptions at every corner, just affirmative action by the user before bombardment with data. I do think as much data as possible should be linked to or aggregated, but force me to see more than what I request plus some surface level information. For something like YouTube this might mean playing a playlist is fine, but don't start playing another 'related' video when that list is over.

Beyond that, keeping the design minimal but powerful. I think markdown is a great example of this. Users aren't as dumb as people seem to think, we can, and do, learn the ways to make interaction with the things we use daily faster, so make the 'speed limit' as fast as it can be while lowering the need for menu diving and learning to do complex actions. Putting a frequently used option into a menu that needs to be clicked at all is much slower than assigning it a keyboard shortcut.

But, okay, back to information overload: The biggest problem is still that there's just too much. I don't really think there is a solution, maybe  [Banning Outdoor Ads like Brazil's Largest City Did](https://newdream.org/blog/sao-paolo-ad-ban), would be a start. Maybe requiring that the Terms of Service for any service a user signs up to be a limited length and actually commendable would help. But I just don't know. I think the world has just simply progressed to a point where FOMO has gone from a fear of missing out has gotten to a point where missing out is just a fact of life as [500 hours of content are uploaded to YouTube every minute.](https://www.tubefilter.com/2019/05/07/number-hours-video-uploaded-to-youtube-per-minute/) 

What I do know is that trusting the YouTube or Facebook or Twitter algorithm to decide the content I see is incredibly dangerous, but that the alternative is overwhelming.

Meanwhile, legislation that has been passed to try to fix some of this often results in other issues, like all the 'Can we give you cookies?' prompts on websites: [Why The Web Is Such A Mess (Youtube - Tom Scott)](https://www.youtube.com/watch?v=OFRjZtYs3wY&ab_channel=TomScott)

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Imagine: drag to select text, pinch to summarize, vertical unpinch to generate alternatives, *inspiration*, record new sentence to replace the old one<br><br>And voilà, you&#39;ve explored multiple directions on the landscape of meaning and rewrote a sentence in just a few moments<br><br>4/4 🧵 <a href="https://t.co/LlcmcY3kpw">pic.twitter.com/LlcmcY3kpw</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1331623023460421632?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Updates after Initial Draw

Fuck your shit. Compute first, then display.

This may be *the most irritating* thing I encounter with modern computers. Our brains and bodies, as much as we may wish them to, don't respond to stimuli right away. So, when I search for something, go to click something, and then while I'm moving the mouse to click the screen updates and a different link or icon is now in the spot I meant to click it's *really* fucking annoying.

Window's built in search, especially with web results on, is a huge offender on this but Google and other search engines do it too.

It's not just search either, I'm sure everyone has encountered this in various places.

All you have to do is not change shit until you're done computing the answer, and then only change it once. This is about as simple as it gets and it avoids magical re-arranging menus that make everyone lose their shit.

#### Everything needs to be more damn responsive

*Fuck your 𝒻𝒶𝓃𝒸𝓎 animations.* I love eye candy, and a little bit is fine, but I shouldn't have to wait as a menu slowly drops down with some pretty animation. If I've used that menu before I probably already know where I want to click, and now because I expect to be able to do so instantly I just clicked whatever is behind it. Fuck that. If the animation is masking some load time, sure, but *as soon as* it is loaded, quit it, and show the damn content. If the animation is necessary to avoid suddenly flipping from black to white and blinding users, again, I get it. But it doesn't need to take more than 100ms. 

#### Advertising

If I have to spend more than a fraction of a second to process what is being shown to me is an ad, it should be fucking illegal. If you want to put ads mixed into the content, then it should be required to be a lot of a lot more visually obvious.

{{< columns >}}

**Original:**

![](/hci/adbado.webp)

<--->

**Edited:**

![](/hci/adbade.webp)

{{< /columns >}}

Here the original at least has some color differentiation (Using the Boost app to view Reddit) but on the official Twitter client I actually have to stop and look to avoid accidentally clicking an ad link. That's some bull shit.

Yunno what else is bullshit? The fact that all of these ads are 'personalized' to the point that collecting crazy amounts of information on individuals is expected and almost inevitable online, even with a pile of tracking blocking extensions and a DNS blackhole like [pi-hole](https://pi-hole.net). This could, and should, be a rant of it's own. Being spied on by our own devices is 100% not okay and it's one of the biggest reasons that they way we interact with computers sucks.

### Storing Information Sucks

Storing your data blows. Users have to contend with backups, backups for you backups, bitrot, file size vs compression, what file system to use, how to make backups actually convenient, mirroring information between systems with limited bandwidth, etc. But to start somewhere let's look at archival:

#### Archival

Digital archival on 'cold storage' sucks. For one, that cold storage is often either a PITA to attach in the first place, Usually using either using a slow USB interface, an expensive and far-from-universal thunderbolt one, or, if you want to go very bulk storage, requiring a specialized PCIe card which is meant for servers which brings along it's own pile of issues.

But even once you have everything attached, most of the time backups are pain to run. You can always do the lazy copy-and-replace-existing method, but that's painfully slow as it has to check all the current files instead of just doing the logical thing and comparing two indexes, but, of course, most file systems don't support this index based method. Sure, there's software to add it, like Bvckup, but most that I can find is paid or not something I would trust.

Using Git (or GitAnnex) is of course an option, but that has a higher barrier to entry to learn than seems reasonable. At the same time having actual file versioning needs to be a thing, something better than having `untitled.docx`, `untitled.docx`,`untitled3final.docx`, and `untitled3.5.finaler.docx`, even if it is still storing the file in full (though hopefully compressed) behind the scenes.

But, on the note of indexes, why are tools to provide a disk-offline index not better. From what I can find, [catcli](https://github.com/deadc0de6/catcli) and [Virtual Volumes View](http://vvvapp.sourceforge.net) are the main two options, and both are bit out of the way to use, compared to just having it be natively in the file browser. 

#### Phone ↔ PC is the fucking worst.

MTP needs to die a very painful death. [USB Mass Storage](https://en.wikipedia.org/wiki/Media_Transfer_Protocol#Comparison_with_USB_Mass_Storage), that is, devices that show up the same way a flash drive does, are infinitely easier to work with. On Android, with large folders, I've found [adbfs](https://github.com/zach-klippenstein/adbfs), a tool that lets you do file transfer over Android Debugging Bridge, to be much better than MTP, but, really? No 'normal' user should be expected to use that. Hell, a lot of people are just uploading files to the cloud and then downloading them on the target device because it's easier. There's also a growing number of apps that let users to transfers over wifi by hosting an Samba server on the phone, but why would something wireless be better? It's absolutely crazy that things have gotten this bad. 

#### We're using ancient formats

Look, jpeg and png are perfectly fine formats. For 2000. It's 2020. HEIF (or [BPG](https://bellard.org/bpg/)) really should be standard. Instead, it's a motherfucker because M$ is too damn cheap to include the HEVC extensions which it relies on it without either having the user [pay \$0.99](https://www.microsoft.com/en-us/p/hevc-video-extensions/9nmzlz57r3t7) ([or claiming to be the OEM](https://www.microsoft.com/en-us/p/hevc-video-extensions-from-device-manufacturer/9n4wgh0z6vhq)) because a collection of jackasses have it [patented so hard](https://www.hackerfactor.com/blog/index.php?/archives/833-HEIC-Yeah.html) and require licensing fees such that it may as well not exist. HEIF/HEIC or BPG I think have a good chance because of the preexisting hardware acceleration, but other formats like [hific](https://hific.github.io/), which uses GANs to do compression, look promising too.

> As a note about why I wrote about HEIF/C in particular, most phones are capable of storing images in this format now, and IPhones do by default, which is a real PITA if an apple user emails these pictures to a Windows user.

Of course the same applies in other formats. .flac is replacing .wav for high end audio, but why not [Direct Stream Digital (DSD)](https://en.wikipedia.org/wiki/Direct_Stream_Digital)? 

* All the best formats are a pain in the ass
  * format shifting sucks, opening them sucks, patents suck
* People use some really, really shit formats
* A lot of formats are needlessly complicated and not human or computer readable to anyone but the software vendor

#### Bit rot?

![XKCD Digital Data](/xkcd/xkcddigitaldata.webp)

{{< attribution >}}

[XKCD #1683](https://xkcd.com/1683/)

{{< /attribution >}}

Data on the internet gets compressed, saved, recompressed, resaved, upscaled, re-colored, and deep-fried pretty quickly.

This combined with more traditional [bit rot](https://en.wikipedia.org/wiki/Data_degradation), where errors result in flipped bits, is a massive PITA.

Sure, tools like [Waifu-2x](https://github.com/nagadomi/waifu2x) help with the first problem, but using AI-up scaling to fix the loss of data isn't ideal. For actual bit rot, tools exist to detect bit errors in most formats and you could always use a better file system that does check summing, but both of these require more technical skill than most people have.

While not exactly related, data accumulation and near-duplication (think having two pictures with one having just a 2px cropped off the top) is a big problem. Trying to sort though a mounting of images, text, or audio files can be nearly impossible if put off for too long, making good digital hygiene a must despite the fact that nobody ever tells anybody how to have good digital hygiene in the first place.

AI tools to tag and identify images and audio help, but those tools are still limited and often only work well on uncompressed data, so no .jpgs or .mp3s for you.

With all of this combined keeping your files in order, not corrupted, and not having duplicates becomes a growing issue.

#### Storage Hardware and File systems suck.

The hardware issue is mostly a side effect of trying to market technical differences to people who ultimately just want a place to drop their files. A normal user shouldn't have to know what all the various specs of a HDD or SSD mean to know what to buy.

That said, holy shit do manufactures suck at this. Everything from [Western Digital redefining 'RPM'](https://arstechnica.com/gadgets/2020/09/western-digital-is-trying-to-redefine-the-word-rpm/) to [Western Digital uses SMR on NAS drives](https://arstechnica.com/gadgets/2020/05/western-digital-gets-sued-for-sneaking-smr-disks-into-its-nas-channel/),   [DRAM-less SSDs](https://www.youtube.com/watch?v=ybIXsrLCgdM) and [Bait-and-switch in regards to SSD performance](https://youtu.be/bGY9hEVk_Bc?t=3744).

> SMR, or Shielded Magnetic Recording, has a few issues that make it problematic for Network Attached Storage (NAS) systems using multiple disks, particularly if the NAS is running ZFS, a common file system made exactly for this use case.

But the issues go beyond that. While a bit controversial, I think literally any modern filesystem (BTRFS, ZFS, or even EXT4) is *much* better than the mess that is NTFS, yet, Microsoft only officially supports NTFS, FAT(/32), and ReFS- all of which sorta suck.

There is no fucking reason everyone - Microsoft, Apple, Linux, etc. - can't fucking agree on *something* and avoid the massive fustercluck that is using FAT32, a filesystem that can only store files up to 4GB, as the only common system that "just works". 

> Note, you can use [BTRFS on Windows](https://github.com/maharmstone/btrfs (WinBtrfs)), using 3rd party tools. Technically, the same is true of EXT2/3/4 too, but I don't trust it to not eat my data.

Ideally, we'd be using [Logical Volume Managment](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)) so that the entire filesystem can have snap shots, partitions could be resized, or use multiple physical disks 

I also don't get how in 2021, some system are still booting off of spinning rust? Hell, why are we really using it at all. Yes, I know the price per GB is much lower, but we're talking about something that is so sensitive to vibration that [Shouting In The Datacenter](https://www.youtube.com/watch?v=tDacjrSCeq4) is a problem. This is extra dumb when you consider a lot of computers or game consoles will be right next to speakers and subwoffers. Every time I pickup a laptop with an HDD and I can feel the inertia of the disk it makes me cringe. 

#### Cloud Storage is a terrible idea

{{< columns >}}

To keep the core of this issue brief: The cloud is just someone else's computer. You can never be certain of what they'll do to your data.

You can't be sure they won't have some random DMCA complaint take something down.

You can't be sure they won't suddenly increase price and essentially hold continued access to your data at ransom

You can't be sure they won't mine your data for targeted advertising

You can't be sure your data won't accidentally be public because of bad security.

<p style="text-align: center;"> Just don't put your data in the cloud.</p>

<--->

<img src="/nonfree/character/yellsatcloud2.webp" alt="Old Vega Yells at Cloud">

{{< attribution >}}Character owned by Vega, art by [Talon Creations](https://twitter.com/Talon_Creations) and Vega {{< /attribution >}}

{{< /columns >}}

That said, I will admit two valid uses:

1. Collaborative Editing. GSuite is actually pretty cool.
2. Backup but only if the service is *only* backup and you already have at least an on site backup. For example, I think [Backblaze](https://www.backblaze.com) is actually a pretty neat service and it seems like they do things reasonably. The ship you a hard drive option here is what makes it make sense to me. Note, I've never actually used Backblaze.

But 1. still has issues, especially if the format the collaborative documents are saved as are only valid on that cloud platform. Think like .docx for Word, but what does GSuite use? Can you be sure it'll work offline?

I'd also like to mention the idea of distributed computation here as well, as It can be used for both the storage of and computation on data. I think that having a *true* distributed system in place, one where all users contribute compute and storage for it's use, makes sense. The obvious ask is to get it to be self sufficient. This brings up the idea of balanced usage to contribution, I think the easiest solution is to simply use a system of computational debt tied to each user account. If the user is creating more computational debt than the average debt the system can sustain then that user should be handicapped in bandwidth accordingly. This does sort of bring us full circle in 'can I just trade debt with someone, or sell them my computational time' such that we're back to crypto based services again though, and I **really** don't like this idea for two reasons: 

1. This system needs real time computation and bandwidth, and these vary in value just like how electricity peak hours cost more.
2. This incentives simply paying for compute time instead of actually contributing computational power to the network like it actually needs, which in turns creates an incentive for people to do this at scale *annnndd* look at that we're back to centralization.

The biggest problem with this is that home Internet users very rarely have symmetric connections, so people would probably be very pissed off if their download speed were suddenly tied to their upload speed. This *could* be offset by building up credit, as previously mentioned, but that has the issues, as previously mentioned. I suppose there could simply be a credit cap, but setting that would be exceedingly awkward as a logical number to use would vary by user and how they use the system.

I do hope that someone has a better idea than me for the future of distributed computation, because I really can't see any good solutions despite wanting it to be part of the future.

I'd also be remiss if I didn't mention [Boinc](https://boinc.berkeley.edu), a tool you can use to donate unused computational resources from when your computer would be otherwise idle to good causes such as [Searching for Extraterestial Life](https://setiathome.berkeley.edu) or [Folding protiens](https://foldingathome.org) to look for cures to various diseases.

---

Unfortunately, in response to criticisms, like this one, of cloud storage a lot of providers of "Personal Cloud" devices have cropped up. Though, headlines like *[“I’m totally screwed.” WD My Book Live users wake up to find their data deleted](https://arstechnica.com/gadgets/2021/06/mass-data-wipe-in-my-book-devices-prompts-warning-from-western-digital/)* and *[If you have a QNAP NAS, stop what you're doing right now and install latest updates. Do it before Qlocker gets you](https://arstechnica.com/gadgets/2021/06/mass-data-wipe-in-my-book-devices-prompts-warning-from-western-digital/)* might go to show why that's also a pretty fucking stupid idea.

### Transferring Information Sucks

I mostly mean networking, but things like flash drives too.

#### The Internet Sucks

Well, okay, the internet is honestly fucking awesome. But some of it is designed horribly and some of it is nowhere near as good as it could be because of users making stupid choices.

To start with, let's look at how horribly shit was designed. As a start, I recommend reading [IPv6 Is a Total Nightmare — This is Why](https://teknikaldomain.me/post/ipv6-is-a-total-nightmare/) by Teknikal, it explains the issues with both IPv4 and IPv6 beautifully. There are other issues with the web, like the fact that neither DNS or IP were designed to be encrypted (and so private) by default, so instead we've had to patch on fixes like http**s**. Of course, there network security problems are found regularly, such as [Nat Slipstreaming](https://samy.pl/slipstream/), a nasty issue that made the rounds recently.

There are also issues of access. In the US at least, most places are part of an ISP regional monopoly. Often they'll argue that you *do* have options, such as satellite internet. However, this is complete and total bull shit. You do *technically* have the option, sure, but this option is slow, usually has data caps, and just generally sucks. If you're in a rural area, you're lucky if the copper in the ground is still good enough to get you something fast enough to watch a YouTube video. Then, on top of all this BS, the ISPs regularly get caught for doing shit to your traffic, whether it be injecting ads, terminating connections early, blocking services (often torrenting), not letting you forward ports, etc. Oh, and then they try to charge you for a modem you don't even have- thankfully that was [just made illegal](https://www.extremetech.com/internet/318570-its-finally-illegal-for-isps-to-charge-rental-fees-for-equipment-you-own).

TLDR; ISPs are evil.

#### Centralization Sucks

https://lbry.io/

https://datproject.org/

https://ipfs.io/

#### Transferring Your Profile Sucks

 AnIdiotOnTheNet's Comment on [This Hacker New's Submission - 'Re-Thinking the Desktop OS'](https://news.ycombinator.com/item?id=24783387)

> [...]
> 
> 5) Switchable "user profiles" instead of "user accounts", which are an artifact of giant shared computer systems. User profile just contains personalized settings and can be located anywhere, including removable media so you can take yours to other computers. If you want to keep things safe from others, encrypt them. Otherwise there are no permissions except those applied to applications themselves.

I think Solid, a project by Prof. Time Berners-Lee, the guy behind the World Wide Web, is a decent implementation of this if it were to gain enough traction to actually be used.

> Solid's central focus is to enable the discovery and sharing of information in a way that preserves privacy. A user stores personal data in "pods", personal online data stores, hosted wherever the user desires. Applications that are authenticated by Solid are allowed to request data if the user has given the application permission.

{{< attribution >}}

[Solid Wikipedia Article](https://en.wikipedia.org/wiki/Solid_(web_decentralization_project))

{{< /attribution >}}

But the point I'm trying to convey is that right now setting up a new device or logging into a service sorta blows. The user profile needs to be secure, user-owned, and decentralized. For those that know Linux, it's what making your `~/.config` folder into a git repo *should* be like.

#### Local Backups By Default

Most web pages are reasonably small, especially if you ignore java script crap. Why do browsers not just backup all web pages we go to (on desktops and laptops where storage is a non-issue) ? This would provide the benefit of being able to do a local text search of everything browsed recently as well as backups in case the page goes offline or moves.

There are tools that do this already (like [Archivebox](https://archivebox.io)) which can be automated but it's still not user friendly to normies. There are also sites like [Waybak Machine](https://archive.org/web/) and [Perma.cc](https://perma.cc) that will save copies of websites for you and provide a link that should always work, even if the website goes down or the address changes, but again, this is a bit of a pain. It also can lead to copyright issues for these services.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Why can’t you easily search all of the text you read on any screen (desktop + mobile) over the past day?<br><br>It’s strange how much obvious, low-hanging fruit of this form still exists.</p>— Patrick Collison (@patrickc) <a href="https://twitter.com/patrickc/status/953011978217205760?ref_src=twsrc%5Etfw">January 15, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Physical Interaction

I also think the boundaries of physical and digital should be more blurred. I'd love if I could set a book on my desk and search though it for an idea or concept by mere image recognition of the cover, or if it's an unknown book at least being able to digest any pages shown to it explicitly. Say a section was highlighted? It would be great if that were automatically added to a *personal journal file of sorts* for future reference, especially if related data were automatically associated with online sources, or links made to people who are interested in similar subjects.

[The Screenless Office (Screenl.es)](http://screenl.es/why.html) and [Dynamic Land](https://dynamicland.org) both show this idea pretty well.

### Creating New Information Sucks

**Or, People Will Only Make Stuff That Is As Good As The Tools They Have**

{{< hint info >}}

Note the **Will** and not **Can**. A very talented musician can make [a shovel](https://youtu.be/IyQOw-_H4yE) sound good, a talented photographer [doesn't need a good camera](https://www.kenrockwell.com/tech/notcamera.htm). But in general that's setting the required bar of talent - and therefore time - higher. The better and more efficient our tools are, the better content people can make without putting in more time than they're willing to. 

A better camera won't make you a photographer, but it might be the difference between unusable pictures and a saved memory

{{< /hint >}}

I think I've generally made the case that our tools suck so far, but here's where I think things can get really interesting.

[TODO]

* Faster input
  * WYSIWYG sucks
  * Needing to compile your views also sucks
* Tools need to scale in complexity with the user
  * Start by showing an intro UI, let the user add more features to the UI as needed
  * Great in application documentation
  * Included examples
  * on UI help and highlighting
* Program data type interopability
  * Common in-progress formats for video editors, image editing, sound editing, etc.
* Variety of formats, hard to shift between
  * mp4 or .gif?
* Copyright is a real pain

As far as how all of these tools should work and interact, well, I think they should all use standardized file formats, even if they have to abuse them a little to do so and that they should all have a common Application Programming Interface (API) for interaction. This would hopefully mean that any extension written for one program would work for another, and any program could talk to another. For example, currently the realm of music software has a little bit of this with VSTs and MIDI. but it still leaves a lot to be desired. I'd actually like to take it a step further though and ask that all data of any kind use a common enough format that it can be processed with any extension/program written with this API in mind. Imagine if you could use a synthesizer as a static generator for image manipulation, or color management controls as an EQ. Both would and should behave in strange way, and it's this very lack of defined behavior that could lead to interesting art forms. I'd love to see a 'Master' API that works across all formats and ideas with a common data type that allows for program⟺program, program⟺extension, program⟺hardware, etc. communication even in long, complicated chains. After all, if you've taken a signals and systems course you know that basically any data can be treated as a signal.

This could be done with some sort of node based programming system. While I don't actually know how to use it, I think [Luna](https://www.luna-lang.org/) demonstrates this concept fairly well:

 ![Luna](/hci/luna.webp)

though there are plenty of other examples, like the node editors used for making shaders or programming in Unreal Engine

Potentially this could also plug into the entire OS as well, making it so an image manipulation program's extension could for example modify anything output to the screen in real time, or an audio program could effect the output of anything. For developer's this may even offer more power, making possible things such as inter-process communication (think pipes, like `$ls -la | grep png`) a matter of connecting two nodes, or reading disk information such as activity, space, or even writeback and inode information, this would literally allow any one piece of information to be accessible to any other. This does have obvious permission issues, but unix permissions should already have this under control. If something like this could also be tied into the previously mentioned internet search and socialization 'web' without massive security concerns the potential use cases are as simple as getting color information from an image hosted online to as complicated as remote access or distributed computing.

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Slightly more impressive from a more technical side is that you can reverse search for methods using an expected input-output pair<br><br>For example if you type in &#39;eureka&#39;, &#39;EUREKA&#39; it will return the method &quot;asUppercase&quot; which performs that string operation!<a href="https://t.co/9DpmCuV9hf">https://t.co/9DpmCuV9hf</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1371612552824766477?ref_src=twsrc%5Etfw">March 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Oh, and our systems are fucking racist and suck for anyone with special needs.

#### Racist, how can a computer be racist?

Well, okay, this depends on the definition of 'racist' I guess, but there's definitely some issues. There's the more mundane and debatable stuff such as using 'Master/Slave' to denote device control schemes or using the terms whitelist and blacklist for allowed and dis-allowed lists respectively, but those are all results of human naming decisions.

The bigger issue is with AI. There have been a ton of stories now where facial recognition software, used for [test taking](https://www.technologyreview.com/2020/08/07/1006132/software-algorithms-proctoring-online-tests-ai-ethics/) or by [government and police](https://www.aclu.org/news/privacy-technology/how-is-face-recognition-surveillance-technology-racist/), have built in racial biases as a result of learning the same racial biases that made up the data sets to begin with. This is, to put it extremely mildly, not great.

#### Special Needs?

Well, yeah. How often do you see more common needs like color blindness accounted for, let alone issues like screen readers. If anything, some of these things are getting *worse*. For example, web design is becoming more and more javascript heavy, which can often result in screen readers just not being able to process much of the text on screen. Meanwhile, applications that everyone is expected to use are becoming complex enough, with more and more rarely used features being shoved into sub-menus that it's harder to interact with them in non traditional ways.

Sure, we're making better hardware to tackle these issues, but a lot of it is pretty expensive.

There's also the problem of making computers accessible to people with metal handicaps. And I'll be honest, this one's rough. Just like how power tools are an extension of our ability to do physical works, computers, I think, are naturally an extension of the mind. If a subset of users have less capable minds to begin with, it's going to be really hard to design around that.

I'm not the best to talk on these issues to begin with though as for the most part my body and mind don't impede the way I work or require special tools. So, instead I'll link to some other articles:

[Software development 450 words per minute](https://www.vincit.fi/fi/software-development-450-words-per-minute/)

[Chapter 3 of 'Buliding Accessible Websites' by Joe Clark](https://joeclark.org/book/sashay/serialization/Chapter03.html) (I think this is written a bit... bluntly. I don't agree with everything here. That said, it's still a good resource)

#### Access

While not an issue strictly pertaining to race or disability, there's certainly a bias for those groups to also be poor or in worse circumstances that limit their internet connection or hardware's speed. The solution? Stop making shit so fucking bloated. If you're developing on a high end computer with umpteen cores and enough ram to store the English-only copy of Wikipedia <a class="ptr">(12)</a> make sure to at least *try* it on something else and see if it still works.

### We basically don't even own our computers anymore

Like many things in this far-to-long article, this could be post on its own, but I do think it's necessary to bring up the fact that there's an on going war against general purpose computation. If you've got an hour to kill (or half an hour if you can tolerate 2x speed), this video is basically required viewing:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/HUEvRyemKSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< hint info >}}

A few notes on this video. 

[SOPA](https://en.wikipedia.org/wiki/Stop_Online_Piracy_Act), the Stop Online Piracy Act, is mentioned because at the time it was a big deal. Thankfully, it was indeed stopped.

[Illegal Numbers](https://en.wikipedia.org/wiki/Illegal_number) are a thing, and the history of them is incredibly interesting

{{< /hint >}}

There are also issues on ownership, for example:

[Amazon Sued For Saying You've 'Bought' Movies That It Can Take Away From You](https://www.techdirt.com/articles/20200505/23193344443/amazon-sued-saying-youve-bought-movies-that-it-can-take-away-you.shtml)

[Microsoft Is Closing Its Ebook Store and Taking the Books With It](https://www.popularmechanics.com/technology/a27021744/microsoft-ebook-store-shutdown/)

## Chapter 3: What's Else Is Needed?

### Script all the things! But Not Like That™

[TODO]

Visual Programming but still supporting text based programming, natural language scripting

everything is a file/folder (inc. full programs)

### Optional Security

[TempleOS](https://en.wikipedia.org/wiki/TempleOS) is a really weird operating system. From Wikipedia

> **TempleOS** is a biblical-themed lightweight operating system designed to be the Third Temple prophesied in the Bible. It was created by the late American programmer Terry A. Davis, who developed it alone over the course of a decade after a series of manic episodes that he later described as a revelation from God.
>
> [...] using an interface similar to a mixture of DOS and Turbo C. Davis proclaimed that the system's features, such as its 640x480 resolution, 16-color display and single audio voice, were designed according to explicit instructions from God.

But the part that's cool to me? TempleOS gives no fucks about security, now, that's at least in part because it doesn't have networking (though there is a [fork with networking](https://github.com/minexew/Shrine)) but even then, there's no concept of an admin or 'normal' user. There's no system-protected processes. You want to flip arbitrary bits, directly send data over IO lines, whatever. The OS will not stop you. The entire thing runs in ring 0, which means you always have total control over the hardware, but it also means there's nothing stopping you from massively fucking everything up and crashing the system, corrupting everything, etc.

[TempleOS (Linus Tech Tips)](https://youtu.be/LtlyeDAJR7A)

And, okay, yeah, that's obviously not ideal for *normal* use, but I think there's something to be said for having the *option* to say fuck it, slam your fist down on the manual override button, and take full control of the system. This is what I mean by optional security - no HAL 9000 in the way. No `sudo`, no 'no'. In this mode it should also be easy to turn off all networking and malware protection, so a super-fuckit No firewallls, no threat scanning, etc. switch.

Running as root in Linux is *almost* this. It could even be argued that it's better since toying with memory though `/dev/kmem` is probably easier than trying to deduce the physical memory map. That said, there's still *[some](https://stackoverflow.com/questions/21761185/is-there-a-difference-between-sudo-mode-and-kernel-mode)* restrictions on the root account compared to running directly in 'kernel mode'.

### Backwards Compatibility via Compatibility Layers

 AnIdiotOnTheNet's Comment on [This Hacker New's Submission - 'Re-Thinking the Desktop OS'](https://news.ycombinator.com/item?id=24783387)

> [...]
> 
> 7) Backwards compatibility should be a high priority, but accomplished via shim layers and/or emulation and/or vms when clean breaks are necessary. A wide array of such should be included with the OS from the beginning. In 2020, there is no excuse for not being able to run old software."

And yeah, that pretty much sums it up. Currently backwards compatibility is often a choice of actually going to better technology and fixing bugs - like the Excel [leap year problem](https://docs.microsoft.com/en-us/office/troubleshoot/excel/wrongly-assumes-1900-is-leap-year) or supporting older files without them massively breaking. There's really no reason we couldn't do both using comparability layers. The cost, I think, would mostly be in accepting that the transition to those comparability layers will be rough and that some thing will just have to be upgraded until that compatibility infrastructure is in place.

There's no reason we shouldn't be able to run very old software, but also no reason to use that as an excuse against moving forward.

A fairly interesting solution to some of this might be to implement hardware compatibility via FPGAs, that is loading either full soft-core CPUs or instruction set translation logic onto a tightly integrated FPGA. Higher end retro console emulators are already using FPGA emulations of the original CPUs anyway, so this isn't some crazy fantasy. To add even further hope, AMD owns Xilinx and Intel own Altera, so the two biggest CPU manufactures both already own the two biggest FPGA manufactures. There's nothing stopping them from making integration standard. (well, other than cost and market segmentation)

### Hardware Modularity, Repairability, and Customization

According to Wikipedia [Right to Repair](https://en.wikipedia.org/wiki/Electronics_right_to_repair) is 

> legislation that is intended to allow consumers the ability to repair and modify their own consumer electronic devices, where otherwise the manufacturer of such devices require the consumer to use only their offered services

This is a big deal, with big player like Apple and John Deer lobbying incredibly hard against it. I can't possibly explain even a fraction of all the nuance in the arguments, so instead I recommend reading [this post](https://www.eff.org/issues/right-to-repair) from the Electronic Frontier Foundation (EFF) for a quick overview.

As for modularity and customization, I mean that hardware should be made such that components can be swapped out. For example, most desktop computers do a decent job o f this, where each component - the CPU, graphics card, power supply, RAM, etc. - can be upgraded individually <a class="ptr">(14)</a>. This concept desperately needs to be more widespread. It simultaneously cuts down on eWaste by increasing longevity, allows consumers to only pay for what they need, and lets consumers buy-now-upgrade-later if they can't afford what they really want to start with.

The only real downside for the consumer is that the products might be hair bit thicker? Yeah, I think that's a fair trade.

### Network Transparency

Network Transparency is a neat concept, basically, it means you can use a program over the network as if it were local. I think the coolest example of this is the X Window System on Linux, which lets you run graphical programs on a remote computer, even one with no screen attached, and have the window be visible on your own computer. For example, while you could always setup a file server to access file remotely, you could also just use X's network transparency to forward the entire file manager window to your computer and browse files like normal.

I'd love to see more applications and backend software (like X) support this. 

### The Ability to go Back In Time

A lot of software already runs on an idea of 'events' or 'transactions', whatever you want to call it. What I want is for these to always be undo-able, at least for window of time or number of past events. This might mean updates, changes to a file, or just scrolling down on a screen.

A refresh should try to bring you to the previous state, dismissed notifications should be able to be un-dissmissed.

As previously mentioned, you should be able to go back to a saved copy of any web page you've visited. You should be able to revert your system to a restore point (Good idea from Windows, poorly implemented).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">EVERY <br>F**IN&#39;<br>TIME<br>💢<br>🦊 <a href="https://t.co/5JGKXqxIwF">pic.twitter.com/5JGKXqxIwF</a></p>&mdash; FPV 🟡 眼鏡の狐 (@F0XnR0LL) <a href="https://twitter.com/F0XnR0LL/status/1347328703987142656?ref_src=twsrc%5Etfw">January 7, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Open Sensors and Generators

Hardware is gradually becoming more general purpose, and as this happens it would be amazing if they were opened up enough to allow for experimentation. Think using full on software defined radio chips for Wifi and Bluetooth, such that they could be reconfigured on the fly and a different antenna attached to make use of GPS, cellular, or satellite internet. There's already a mini PCI-e card SDR [on the market](https://www.crowdsupply.com/fairwaves/xtrx). like this, but it's my understanding that many wifi chipsets are effectively just limited SDRs running locked down firmware anyway. Why not open it up?

I also want more platform to have GPIO access. On a full on desktop or laptop this would have to be done with care to avoid people straight up frying devices, but I think the [wide array of hats](https://www.adafruit.com/category/286) available for the RaspberryPi shows that having this as an option would really allow for some cool hardware to exist.

I also want senors and IOT devices to be more open and extendable. Give me a serial out, let me wire it up to my own home automation. I mentioned above that I have a CO2 meter from CO2Meter.com, but I'm looking at getting [this](https://www.adafruit.com/product/4867?utm_source=youtube&utm_medium=videodescrip&utm_campaign=newproducts) CO2 sensor just so I can get reading out of it easier.

IOT especially **needs** to be open. In 2020 alone [Wink started charging customers $5/mo](https://www.consumerreports.org/smart-home/wink-tells-users-pay-up-or-we-will-disable-smart-home-hub/) for app access to IOT gear they already owned, and [Sonos bricked devices with 'Recycle Mode'](https://www.theverge.com/2019/12/30/21042871/sonos-recycle-mode-trade-up-program-controversy). 

### Software that breaks the mold

{{< columns >}}

<video width="100%" controls src="/hci/schultzschultzgrafik.mp4"></video>

{{< attribution >}}

[Schultzschultzgrafik on Instagram](https://www.instagram.com/p/CSMiHNXiQeT/)

{{< /attribution >}}

<--->

{{< /columns >}}

[TODO]

[MasterPlan by SolarLune](https://github.com/SolarLune/masterplan)

Habitica?

https://www.craft.do

http://audulus.com

https://dag.s-ol.nu

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FgHMU7m9-I8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Demos of the WIP [Blockhead DAW](https://www.patreon.com/colugomusic):

{{< columns >}}

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/QTdXqJA3TY">pic.twitter.com/QTdXqJA3TY</a></p>&mdash; Colugo (@ColugoMusic) <a href="https://twitter.com/ColugoMusic/status/1378386958817312774?ref_src=twsrc%5Etfw">April 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<--->

<blockquote class="twitter-tweet"><p lang="fr" dir="ltr">bizarre envelope <a href="https://t.co/8AMZwYc1sG">pic.twitter.com/8AMZwYc1sG</a></p>&mdash; Colugo (@ColugoMusic) <a href="https://twitter.com/ColugoMusic/status/1367270893731348481?ref_src=twsrc%5Etfw">March 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< /columns >}}

### Hardware for Open Experimentation

[TODO]

Microfluid computers, diode logic, GPIO

#### Wasting time on stupid shit that nobody cares about

Microsoft has been spending a lot of time changing to the new UI, and their calculator has been updated like a dozen times for UI now but still [SpeedCrunch](http://speedcrunch.org) remains 1000x more usable and tools like [WolframAlpha](https://www.wolframalpha.com) remain superior yet. Stop spending time on shit literally nobody gives a shit about.

## Chapter 4: What points contradict?

### Having Low Level Access and High Level Usability.

Yeah, this is always a problem. It's always been the dream to be able to describe in 'natural language' what you want and to have the computer parse what you want, inferring intent, and do whatever you want for you, but naturally, this will never be totally possible. This point is only conflicting in the sense that it can be overwhelming- if a user has access to work in something as high as natural language and can manipulate those instructions all the way down an the assembly level, that's a lot of open space. Ideally, each layer of the abstraction would be open to tinker and modify for the sake of getting the solution to work correctly, to pipe data around at any level, or to add functionality in it's most natural language: Some tasks are better suited to describing what's needed in English, some are easier to do down in the dirt.

Making everything open this way may sound complicated, but if the UI were presented right it could just be a stack of abstraction that propagates up and down. Changing the assembly could change the source could change the natural language description. Better, the cost of this could be lowered if each layer is only shown and edit-able at request, and that layer just bypassed until needed. Of course, this would mean being able to to make a set of languages that can be can go from higher level to lower level yet have a middle language introduced mid-stack without changing the meaning. This is complicated. It's like asking for a fast python interpreter that can be ran directly or spit out C, then have that C code be editable with it's changes reflected back into the python code. I'm aware of how complicated of a problem that is. Add a natural language description above the python level in the above and it just got much, much more complicated. Still, I think this is something we should aim for.

### Latency/Speed vs Things That Are Inherently Heavy

I'm asking for a lot of inclusion of AI/ML tech into the OS and day-to-day use, yet also asking for much, much faster response times in general. To some extent, hardware with dedicated silicon for AI/ML will make this better, but regardless, there's no way around how much this conflicts. I think the only way to fix this is to recognize what latency is and isn't acceptable.

As mentioned above in **Presentation of Information -> Updates after Initial Draw**, there are some things that are particularly egregious to the user from a UI timing perspective. Waiting on the computer sucks, sure, but having to **babysit** the computer while you wait on a prompt that could easily be given preemptively or make sure a task doesn't time out is completely unacceptable.

But even just directly looking at speed and latency, there's still a ton of room for improvement. Why does the root file system not retain at least an index of other file systems to let you browse while a HDD spins up or a network connection is established? Why do so many damn things have   *s u c h   l o n g*   animations that have to complete before the user can continue? But most of all can we *please* stop building programs with electron or other things that are just full browsers for one program? Use literally anything else. The best way to lower latency is to use as little code as possible, good data structures, good libraries, and good tools. I said it contradicts to keep latency down when doing things that are heavy, but a lot can be done to make so much of what we use day to day substantially lighter to begin with with no loss in functionality. I understand why projects use Electron, but if you must please just use Flutter or Neutralino or Sciter or Ultralight even a game engine. Just, not something so heavy unless you need it? Please?

https://danluu.com/input-lag/

### Customizeability vs Defaults

I'm writing this at [@292.78](https://minkukel.com/en/clocks/swatch-internet-clock/) on Day 15 of [12,020](https://www.youtube.com/watch?v=czgOWmtGVGs). I'm typing on a Dvorak, split, ortholinear keyboard in a [markdown](https://www.markdownguide.org/basic-syntax/) document using [Arch Linux](https://www.archlinux.org/) instead of M$ Word on Windows.

And It's fucking awesome.

Thing is, nobody else can use my computer. Moreover, if anyone were forced to learn all these weird formats and behaviors instead of what they're used to, they'd give up. What people are used to, that is the *defaults* make a huge difference.

Defaults have a lot of power. There's good reason that (for a while at least) Microsoft had to [inform users about browser options](https://answers.microsoft.com/en-us/ie/forum/ie8-windows_other/what-is-the-browser-choice-update/12fb0294-fd62-4487-a14b-ac37071c1081). What comes ready to use and presented to the user from the start is much more likely to get used than something a user has to go out of their way to get.

Similarly, the ability to even make choices in the first place matters a great deal. For example, on modern versions of Windows, you're pretty much stuck with the stock shell (desktop+file manager) as alternatives are either [pretty similar](https://cairoshell.com) to what's there already or [mostly dead](http://bb4win.sourceforge.net). 

The question then becomes what things *matter* to choose? I think ideally everything *should* be open enough to be replaced, but that doesn't fix anything if options aren't given. At the same time, Systems like [Arch Linux](https://www.archlinux.org/) will likely never have mainstream appeal exactly because none of these choices are made for the user. At the end of the day, most users want a system that *just works*. They don't want to have to choose between a list of 5 different firewall providers, hundreds of desktop environments, and login managers, and shells, and so on. So, defaults have to be chosen.

Fortunately, so long as people have the option to change things if they want to, they can approach a system that works well for them. For me, that's Linux, i3wm, Dvorak, and a bunch of weird hardware. For a lot of people, it's probably just exactly how Windows is now with a few minor tweaks.

### Everything is in the browser now anyway?

Above I said that all of this should be in the OS and not just browser extensions as people still use a lot of non-browser tools, and I think saying that was rather dismissive. It is definitely true that when using a computer today the vast majority of your use will probably be in-browser. The problem lies in that 'vast majority part' - that's likely because in general people spend a lot more time consuming than creating, and the browser is built for media consumption.

On the other hand, most creative software - be it for writing, art, video, music, etc. - is not browser based because, well, it sucks for that. Maybe that will change as WebAssembly makes things faster, but I don't see it happening, so I think we still need full OS integration for it to really matter.

The other point to make here is the browser probbbbabbllyy isn't the best place to implement a lot of what I've mentioned so far given a lot of it is performance sensitive, works with private information, and relies on deeper tie in to the OS - something which for security sake the browser shouldn't really be capable of. 

On the other hand, one of the things I mentioned repeatedly was portability. Browsers actually have this working pretty damn well at this point, syncing beautifully between devices compared to how things are on Windows or Linux (I wouldn't know about mac ¯\\_(ツ)_/¯)

### Unification vs Diversity

Or why **"I wish everybody used Linux!"** is probably not the wisest thing to say.

To keep this short, if everybody used Linux, there'd be less incentive for Linux to compete with Windows. If everybody used Windows, M$ wouldn't have incentive to further their OS. Boiled down, competition is a good thing.

That said, there are limits to how much diversity (in the context of computing) is a good thing too. If I search the Arch User Repository for "i3lock" there are  28 results + original they're all forked <a class="ptr">(13)</a> from. And, okay, not all 28 of those are actual forks, but you get the point. There's a lot of work being duplicated on open source projects, instead of just everybody working together to make one, really good thing.

And, yeah, this provides more choices, but does *anybody* want to research 28 choices for anything to figure out which is best? Especially when most of them are super similar? With desktop environments on Linux at least each is typically novel enough to fun to look at, but if it's something boring, like the given screen-locker example, really?

## Chapter 5: What Might Radically Change Things?

### Body Modification and Bio-Engineering

Another point is the idea of biohacking and body augmentation. The most common biohacks include implanted [RFID tags](https://dangerousthings.com/) (which I actually have) and magnets for sensing electromagnetic fields, but these are still pretty mundane. This Ted Talk I think shows what might be possible a bit better:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/4c1lqFXHvqI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

But I still think there's room for a lot more. Last semester I was fortunate enough to take a class with Dr. Massimilliano Pierobon who is currently the director of the [Molecular and Biochemical Telecommunications Lab (MBITE)](https://mbite.unl.edu) at UNL, and while I'm far from knowledgeable enough to understand everything that they do there I know they're doing some very interesting work that could be summarized as hacking the chemistry and existing networks in biological systems (inc. humans). Here's some work from the MBITE lab I found particularly interesting:

<div style="font-size: .75em">

Bi, D., Deng, Y., Pierobon, M., and Nallanathan, A.  ***"Chemical Reactions-based Microfluidic Transmitter and Receiver Design for Molecular Communication,"*** IEEE Transactions on Communications (Early Access), 10.1109/TCOMM.2020.2993633, May 2020. [[PDF\]](https://mbite.unl.edu/files/papers/2020/J1.pdf)

Marcone, A., Pierobon, M., and Magarini, M. ***"Parity-Check Coding Based on Genetic Circuits for Engineered Molecular Communication Between Biological Cells,"*** IEEE Transactions on Communications, vol. 66, no. 12, pp. 6221-6236, December 2018. [[PDF\]](https://mbite.unl.edu/files/papers/2018/j2.pdf) 

Hanisch, N.,  Pierobon, M. **“Digital Modulation and Achievable Information Rates of Thru-body Haptic Communications,”** In Proceedings of the SPIE International Conference on Defense + Security (DCS), April 2017. [[PDF\]](https://mbite.unl.edu/files/1020603.pdf)

</div>

{{< attribution >}}

These articles, and others from the MBITE lab at UNL, can be found [here](https://mbite.unl.edu/publications)

{{< /attribution >}}

Seeing this makes me wonder if the future of bio-hacking might be a bit more tightly integrated into how our bodies already work, rather than just tossing some electronics inside some silicon or glass to implant somewhere.

### Brain Computer Interfaces

I don't know that BCI are really the future. Elon Musk is working on [Neuralink](https://en.wikipedia.org/wiki/Neuralink) which is neat and all, but I'm not sure I'm convinced. I would welcome the faster computer to brain link as the keyboard->eyes->brain loop is far to slow, but I don't really see anyone going in to have their skull drilled into for elective surgery unless it's to correct or treat something else neurologically. There have been efforts to do BCI [without implants](https://science.slashdot.org/story/20/10/26/2140202/no-implants-needed-for-precise-control-deep-into-the-brain), but I suspect that would suffer from a lack of bandwidth.

I do very much hope to be wrong, as I think BCI has the opportunity to be the biggest leap humanity has ever taken. Soon, it may even be necessary to even deal with how quickly our would is changing and the amount of information we need to process every day.

[Brain Computer Interface article on Wikipedia](https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface)

## Wrapping up

In all honestly I'm not exactly sure what everything I just wrote is about. Mostly it's just a lot of ranting, but hopefully it has been interesting. To round things off with a bit of a closing note though, I don't actually foresee many of the things I mentioned becoming common place or many even being possible, if not simply because they're require so many people to agree on [standards](https://xkcd.com/927/), but there is one glimmer of hope, and it's one of proof of uniformity. The terminal. Yes. This terminal:

![terminal](/eng/proc.webp)

The terminal emulator above is still compatible with the VT220 from 1983 (as are most terminal emulators) yet from it, with a good shell (like ZSH) I can do everything I can really think of: [browse the web](https://askubuntu.com/questions/29540/browsing-the-internet-from-the-command-line), [chat with friends](https://www.omgubuntu.co.uk/2016/10/use-telegram-cli-in-terminal-ubuntu),[ listen to music](https://wiki.archlinux.org/index.php/ncmpcpp), [basically anything](http://www.tuxarena.com/2014/03/20-great-terminal-replacements-for-gui-applications/). I'm not saying we should all stop using chrome, but I think part of the reason so many neck beards and sysadmins still use the terminal is you can do so much with it, everything that uses it as a common interface, and it has programming capabilities. You can automate or string together just about anything, exactly as I described above. 

Finally, I'd like to say I understand we don't all get the choice, be it by monetary, physical, or other restrictions, to have a 'perfect' work environment. If you live in the city there will be noise, If you live in the country, you may be limited by your internet connection, I get that. Obviously I don't expect everyone to go out and make their own versions of some of the high tech, borderline art installations that I linked either. I also don't think everyone's down to go get an RFID tag in their hand. I just wanted to present what I see as 'the future'. It probably won't come in 2021 or even 20021. I do, however, hope this has inspired you to look at the way you work, the environment you work in, and how you can improve it.

### Other hardware and software pushing things forward

[TODO]

https://hookproductivity.com -- Link all the things

[Atlas Informatics (TechCrunch Article)](https://techcrunch.com/2017/10/18/atlas-informatics-calls-it-quits-after-less-than-a-year/) - search all the things

https://apse.io -- a photographic memory of all the text that goes across your screen

https://desktopneo.com -- a UI mockup for a better system

https://arcan-fe.com/2020/02/10/leveraging-the-display-server-to-improve-debugging/ - it's in the URL

### Other people that have ranted about similar things, but usually a bit more politely

[A Proposal for a Flexible, Composable, Libre Desktop Environment (Michael McThrow)](https://mmcthrow-musings.blogspot.com/2020/04/a-proposal-for-flexible-composable.html)

[What do I care the open web is dying? (Abhinav Sharma, Cofounder Insight. ex Mozilla & Facebook)](https://insightbrowser.com/blog/open-web-dying-why-care)

[I hate computers: confessions of a sysadmin (TechCrunch)](https://techcrunch.com/2010/04/22/i-hate-computers-confessions-of-a-sysadmin/)

<ol hidden id="footnotes">
<li>alright, so, yes they're still expensive as all hell, but like if you go DIY then I think they're mostly attainable to most people. I'm sure there's a bit of privlidge talking there, but ╮(─▽─)╭</li>
<li><a href="https://en.wikipedia.org/wiki/Dvorak_keyboard_layout#/media/File:KB_Programmer_Dvorak.svg">Programmer's Dvorak</a> is a thing and honestly I want to know if anybody actually uses it? Having the numbers like that hurts my brain.</li>
<li><a href="http://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf">Seriously,</a>  check these out. You won't believe some of what's in here.</li>
<li>MIDI is currently in a transition period from MIDI on a 5-pin Din to over TRS exactly because of this reason. Unfortunately, there's now two competing versions of MIDI over TRS called TRS-A and TRS-B where the signals on each pin are mixed around. Making it even worse, there's even a version that runs on 'mono' TS cables. It's a <a href="https://minimidi.world">mess.</a></li>
<li>Sub-Pixel Rendering is effectively abusing the fact that monitors will have a sort of trippled horizonal resolution, where each individual R, G, and B sub pixel is treated like an individual pixel that can be rendered to. This can make text look substantially sharper, but is why when you take a screenshot and blow it up you might see weird colors around the text. It's a hacky work around.</li>
<li>The interface on your display matters greatly as well, the most common at the are HDMI, Display Port, DVI, and VGA<br>
VGA is the worst option here, as it's an analog signal. This means the signal can do strange things, getting corrupted between your computer and the monitor. Typically this is a blue, screw in connection with many pins
DVI is still pretty common and looks like an even larger VGA connection, with a typically white, screw in connector. This signal is normally digital, though there is a variant of DVI that can be adapted into VGA. Of note, DVI can also be adapted to HDMI though you will not have audio, as DVI does not carry sound<br>
HDMI, probably the most well known connector, has multiple revisions, the revision determines many things such as the maximum resolution, refresh rate, and weather or not more obscure things such as HDR are supported. HDMI is usually considered the best of these three options<br>
Taking the crown however, is Display Port (DP). Like HDMI display port does have multiple revisions which do differentiate similar things; however, Display Port will generally support high resolutions and more features at any given point. Assuming you're running a bog-standard 60hz 1080p display however, you'll find no difference between DVI, HDMI, and DP - unless you need sound, in which case you'll want to use HDMI.</li>
<li>FreeSync is the open standard made by AMD, and, even most FreeSync monitors will work fine on Nvidia card. GSync is Nvidia only and is more expensive to impliment - in part because it uses a full damn FPGA shoved into the back of the monitor - but does offer more features except when it doesn't and it's just rebranded FreeSync with a lil' Nvidia Approved sticker. It's complicated and a mess to understand. As of the time of writing both Freesync and GSync are supported on Linux, but quite rough around the edges.</li>
<li>I will concede the C920 can be made significantly less shit by just turning off most of the 'auto' settings and setting everything by hand. This can be done on Linux with GuvcView, but on Windows I've found all the recent drivers make it impossible, so, I stand by it still being shit.</li>
<li>In the case of things that can be used standalone, not connected to a computer, like my afforementioned MorningStar MC6 midi controller, it makes some sense. </li>
<li>Fuck Adobe.</li>
<li>The Launchkey MK2 has an almost impressively bad keybed. Roli, the company behind the Seaboard Block and Lighpad Blocks is a bit controversial. Not like, Behringer levels of controversial, but still. ╮(─▽─)╭</li>
<li>Currently 17.5Gb - <a href="https://dumps.wikimedia.org/enwiki/20201001/"> https://dumps.wikimedia.org/enwiki/20201001/ </a></li>
<li>for the non-technical people: A fork is just when you take an existing project and add your own features on top, usually with a rename. If I don't also keep my project up to date with the original, they'll diverge in features even more significantly with time.</li>
<li>With the normal limits of compatability, you can't drop a crazy fast graphics card in without upgrading the power supply, and often the CPU, Ram, and motherboard all need to be from the same generation.</li>
<li>
 this is without anything extra connected, like flash drives or RFID tools, or my SDR, ...</br>
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
    </code>
</li>
<li>... unless that service is based around that permission, like denying a recording app access to a microphone.</li>
</ol>



{{< tip >}}

if you have a link to add, feel free to tweet at me @Vega_DW

{{< /tip >}}

