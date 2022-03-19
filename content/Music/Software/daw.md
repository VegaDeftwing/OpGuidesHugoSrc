# Digital Audio Workstations+

<script>    document.getElementById("softMenu").open = true;</script>

A **D**igital **A**udio **W**orkstations is software that allows you to record and edit audio, host and play digital instruments, arrange the parts in a time line, and mix the audio together. The most common DAWs you'll see are Ableton Live (Often called just "Ableton" or "Live") and FL Studio, but there are plenty of other options as well, many of which are listed below.

The definition of a DAW is a bit fuzzy, as tools like VCV Rack and Audacity- both of which we've seen previously- have features that make them very DAW like and can be used to make full tracks (assuming you have hardware instruments to record into Audacity)

Before you look at this list I want to stress that every DAW has its issues.

[TODO] why are none of these good

Digital Audio Workstations or 'DAWs' come in many flavors, so let's look at the differences between the above in depth [TODO]

Trackers, vs non liner, vs modular, etc.

**NOTE: this list is far from exhaustive. Instead, I've tried to list the main ones and some that I think are particularly cool.** Also, you might want to see [AdmiralBumbleBee's Daw Feature Chart](https://www.admiralbumblebee.com/DAW-Chart.html) for a more analytical overview

## Session View Based:

{{< tabs "Session View Daws" >}}

{{< tab "Ableton Live" >}}

### Ableton Live

**Ableton Live** isn't very stable (lacks plugin sandboxing), has a mediocre piano roll, makes modulation a bit of a pain. Its main feature is its popularity, as there is a ton of educational content, great hardware support, and a fair amount of Ableton specific plugins. As the name implies, it also works pretty well for live recording, and has the best audio stretching and quantization, meaning even if you play slightly out of time it's easy to fix.

lil' aside: Ableton makes organizing VSTs a tad awkward, so you should know it will follow shortcuts in the folder you set as your VST plugin directory.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Popular
- Great hardware support
- Access to Ableton only plugins - Including Max4Live
- Great audio quantization

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Expensive, paid updates
* Piano Roll sorta sucks
* Unstable (No plugin sandboxing)
* M4L devices needed to do many basic things
* Modulation is often awkward
* A lot of the UI is small

{{< /columns3 >}}

[How To Ableton Like a Pro (YouTube)](https://www.youtube.com/watch?v=W8CMgThLpHc)

{{< /tab >}}

{{< tab "Bitwig" >}}

### Bitwig

**Bitwig** is basically Ableton Live but with some added features, and it's more stable. Bitwig also has 'The Grid'- basically a little built in modular synth system. It's not like VCV, as it's a bit lower level but it can still be used for [Generative Music](https://www.youtube.com/watch?v=mu5A7QQbuho&feature=youtu.be&ab_channel=Sparvn%C3%A4tter) or [doing complex routing, like fading between effects](https://www.youtube.com/watch?v=bwi8rVXp-Q0&ab_channel=PolarityMusic). It also has really easy to use modulation, basically letting you drop an LFO, envelope, etc. onto any parameter of a VST or built in device.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- More or less the same as Ableton for the basics
- TONS of modulation options
  - lil' modular synth built in
- Still good - albeit not Ableton good- hardware support
- Great audio quantization

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Expensive, paid updates

  * MPE works beautifully though
* Not as many built in devices as Ableton
* Better multi monitor support than Ableton
* Not as popular as Ableton
  * Less support
  * Can't use Ableton specific devices

{{< /columns3 >}}

{{< /tab >}}

{{< /tabs >}}

## Arrangement View Based:

{{< tabs "Arrangement View Based" >}}

{{< tab "FL Studio" >}}

### FL Studio

**Fruity Loops Studio** is a great DAW. If you're more into hand arranging than recording your MIDI controller for writing songs: FL Studio is *perfect.* The piano roll is so damn good that it will make you hate the piano roll in everything else. Unfortunately, hardware controller support isn't as good as Ableton, the UI is a bit cluttered, and audio quantization just isn't there... well? sorta. There is a paid plugin for pitch correction that kicks the ass out of everything else because it's built into the already awesome piano roll.

If we're being honest, FL is where most EDM producers get their start with a pirated copy. I'm not condoning the piracy, but I'm certainly not about to judge if you want to try before you buy. It's a damn nice DAW, and if I didn't have hardware that works particularly well with Ableton I'd probably use it.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- One time purchase, lifetime free updates
- FUCKING AMAZING PIANO ROLL
- On more expensive versions espically, the built in devices are awesome
- Has a good mobile app, for working on the go

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* UI can get sorta messy
* Complex routing is a bit annoying
* A tad CPU heavy
* Audio recording is awkward as fuck
* Doesn't play well with a lot of hardware
  * MIDI controller support is meh
  * lacks the CV/Gate abilities of Bitwig and Ableton

{{< /columns3 >}}

{{< /tab >}}

{{< tab "Reaper" >}}

### Reaper

**Reaper** is incredibly feature full and probably *technically* the best DAW but it's user interface is pretty bad and requires a lot of menu diving, to the point where in my opinion it's totally unusable. It does offer the ability to view what you've put into your piano roll as actual sheet music and It's hugely customizable, with multiple user-facing programming options- ReaScript and JSFX. If you're already a highly technical user and don't mind getting your hands dirty with code, need a sheet music view, or want something with incredibly low CPU overhead, Reaper is probably your best choice.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Cheap ($60 at time of writing)
  - Free trial that doesn't end... but like, don't be that guy.
- Highly customizable
  - you can script literally everything.
- Stable as hell
- Low CPU usage
- Supposedly sounds better?
- Actual Notation editing
- MIDI (w/ MPE) and OSC support

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Sub menus with sub menus
* Option overload
* Almost total lack of built in instruments and effects
* Kinda shit piano roll
* lack of bulit in support for common MIDI controllers
* Kinda Ugly, even with themes

{{< /columns3 >}}

{{< /tab >}}

{{< tab "Garage Band" >}}

### Garage Band

**Garage Band** [TODO]

{{< /tab >}}

{{< tab "ProTools" >}}

### ProTools

**ProTools** [TODO]

{{< /tab >}}

{{< tab "Luna" >}}

### LUNA

**LUNA** [TODO]

{{< /tab >}}

{{< /tabs >}}

## Modular Based:

{{< tabs "Modular Based" >}}

{{< tab "VCV" >}}

### VCV

**VCV** isn't really DAW, so lacks good ways to do automation and complex sequencing, at least without work arounds. For generative music, it's still probably your best bet. That said, you can absolutely make awesome tracks in it, though they really need to be performed and recorded live. This means you may need to do multiple takes if you accidently mess something up while playing.

For good performances, you'll probably want a MIDI controller with a lot of knobs, which can be epensive or large. Ideally this could be done via banks of knobs that can be changed in hardware (like the Behringer BCR2000 and X-Touch Mini or Faderfox EC4) but this has also been reported to not work totally smoothly.

VCV may also lead you down the path of Eurorack or a hybrid Eurorack and VCV setup, and that is stupid epensive.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Free and open source-ish
- A crazy amount of free modules
- Cross platform (Windows, Linux, Mac)
- Can do things a real hardware rack can't

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Paid modules needed to host VSTs
* Less ideal for structured songs
  * unless using an external sequencer
* Eats CPU, a lot of cool modules un-optimized
* It's not really a DAW?
* Still no support to host VCV as a VST in a 'real' DAW
  * workarounds exist, but they're often awkward
* Not 100% stable

{{< /columns3 >}}

{{< /tab >}}

{{< tab "Reason" >}}

### Reason

**Reason** [TODO]

{{< /tab >}}

{{< tab "Voltage Modular" >}}

{{< /tab >}}

{{< tab "Reaktor" >}}

{{< /tab >}}

{{< tab "Bespoke" >}}

### Bespoke

**Bespoke** [TODO]

{{< /tab >}}

{{< /tabs >}}

## Trackers:

{{< tabs "Trackers" >}}

{{< tab "Renoise" >}}

### Renoise

**Renoise** is a neat combination of a modern DAW and old school trackers. This means there is no classic piano roll, but instead the notes are entered as text into a vertical display. Usually raw samples of audio are used as instruments, and this lets you do neat things like specify a sound to be played backwards, be rapidly rolled, panned per note, etc. Generally, trackers are associated with a few specific genres- most notably Chiptune and Jungle

<iframe width="100%" height="500" src="https://www.youtube.com/embed/OIxFjXE_D0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /tab >}}

{{< tab "OpenMPT" >}}

### OpenMPT

{{< /tab >}}

{{< tab "Deflemask" >}}

### Deflemask

**Deflemask** [TODO]

{{< /tab >}}

{{< tab "Sunvox" >}}

### Sunvox

**Sunvox** [TODO]

available for free on desktop, paid on moblie 

{{< /tab >}}

{{< /tabs >}}

## Almost DAWs

{{< tabs "Almost-Daws" >}}

{{< tab "Audacity" >}}

### Audacity

**Audacity**, like VCV, isn't a DAW. It's really just an audio editor. It's free and open source, and while the UI isn't great, you'll be hard pressed to find anything better for doing quick edits or recording in a few clips. Full songs *could* be made in audacity, but it's not made for that.

{{< columns3 >}}

<p style="color:#77FF77;margin-bottom:0px;" >GOOD</p>

---

- Free and Open Source
- Opens very fast
- Runs on a potato
- Great for quick edits

<--->

<p style="color:#FF4444;margin-bottom:0px;" >BAD</p>

---

* Not really a DAW
* No VST support
* Basic as hell editing, only enveloping is audio level
* Kinda ugly, crappy UI

{{< /columns3 >}}

{{< columns >}}

Audacity, despite being FOSS, did recently change owners and they should be putting a lot more work into it. There has been some missteps with the community since this change, but overall it should bring good things in the future →

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/RMWNvwLiXIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

{{< /tab >}}

{{< tab "Oscistudio" >}}

### Oscistudio

**Oscistudio** [TODO]

{{< /tab >}}

{{< tab "Blockhead" >}}

### Blockhead

**Blockhead** is an audio editor/DAW still in pretty early development, but supporting some really cutting edge features. See the [developer's twitter](https://twitter.com/colugomusic) for examples. It really supports some audio editing ideas I haven't seen anywhere else. Even if it's not to the point where you can make it your main DAW, it's worth looking into just for inspiration.

{{< /tab >}}

{{< /tabs >}}