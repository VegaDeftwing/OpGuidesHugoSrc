# VCV Rack Tips & Tricks

{{< tip >}}

I am not affiliated with VCV or the Rack software in any way.

{{< /tip >}}

Despite [the mess](https://aria.dog/barks/why-i-will-never-create-modules-for-vcv-rack-anymore/) in the VCV community, I've still put in a lot of time in the software and run a pretty large group chat on Telegram where it (along side hardware Eurorack) is the main focus. In that chat, there's been a feel recurring questions, this page is just some of those questions and answers.

## How do I protect my ears from loud sounds?

Put a [ZZC SC-VCA](https://library.vcvrack.com/ZZC/SC-VCA) or [Bogaudio LMTR](https://library.vcvrack.com/ZZC/SC-VCA) as the last module your sound passes though before going to the audio interface module. On the ZZC VCA, the big knob is master volume, the little knob controls at what volume it starts clipping out, limiting the volume. It actually sounds really nice as a distortion too.

## When is VCV 2.0 coming out?

Go to the [Rack Development Blog](https://community.vcvrack.com/t/rack-development-blog/5864/65) and scroll to the bottom. You might want to read the [2.5 months, anything new?](https://community.vcvrack.com/t/2-5-months-anything-new) thread as well, if you're curious about the drama around that situation at all. The TLDR: It hasn't been announced. I have heard whispers that the goal is September of '21, but I'm very skeptical that will happen.

## How does polyphony work in VCV?

VCV's manual does have a page on [polyphony](https://vcvrack.com/manual/Polyphony) but it's kinda shit. Basically, it lets you with **some** modules carry up to 16 signals in one cable. There's also modules made for working with this, like *Merge* and *Split* which let you take a bunch of mono signals and merge them into one polyphonic cable, or split the the polyphonic cable into 16 individual outputs respectively. The polyphonic cables are easy to tell apart because they're thicc.

Do keep in mind, you're still making the same patches as with mono. Just like in mono, if you don't have something to stop the signal from an oscillator when you don't want it to be playing, it will drone on. If you set 16 channel polyphony and don't have something to gate the unused channels, they will just drone on, but now with 16 channels it might be like smashing 16 keys on the piano at once, which can be an ear rupturing experience. What you *probably* want is a VCA hooked up such that only the notes you're hitting on your keyboard or using in the chord play, so make sure you hook up a VCA - the stock VCV one will divide it's green bar so you can see all the polyphonic channels in the visualizer. 

![](/gatedpolyphony.png)

### With a MIDI controller

Add a MIDI-CV module, right click it, and set **Polyphony Channels** to anything other than monophonic.

If you want to play with the mode you can too, what the modes do is documented [MIDI-CV](https://vcvrack.com/manual/Core#midi-cv) official manual page.

If you want to use MPE (with like a Roli Seaboard or Artiphon Insturment One) you'll probably want to use the [MoDllz Midi Poly + MPE](https://library.vcvrack.com/moDllz/MIDIpolyMPE) module instead.

### With a Sequencer and/or Chord Generator

Use a merge module to get the outputs into a thick, polyphonic cable. You can sequence multiple notes in a chord directly, but it's usually easier to use a chord generation module (like the [Instruō harmonàig](https://library.vcvrack.com/Instruo/harmonaig) used here)

![](/chordseq.png)

<audio controls loop src="/ChordSeq02.mp3"></audio>

Something of note, Basal, the oscillator here does have a mono signal going into the *MOD1* input, this is because if a mono signal goes into a module that's running polyphonically, the mono signal will be applied to all the poly channels. You don't need to duplicated the same signal into how ever many poly channels the thick wires are carrying just to hook up modulation, unless you want that modulation to be different on every channel. Speaking of:

### Using Polyphony For Modulation

I like to use random modulation a lot, and [Vult's Caudal](https://library.vcvrack.com/VultModulesFree/Caudal) module is awesome for this, but it doesn't have global attenuation and offsets, if you want to add that in you can set up a patch like this, using a Merge, Split, and the [Wiqid 2at](https://library.vcvrack.com/wiqid-anomalies/2at): 

![](/abusedpoly.png)

By doing this, you can either make a nice, random signal poly cable, great for keeping all the notes coming from a polyphonic source from being identical or you can run it through split, effectively just adding a global attenuator and offset to Caudal for quick control over your patch.

## When I send clock to [Module Name] it doesn't work right! 

Different modules have different clocking standards. [Topograph](https://library.vcvrack.com/Valley/Topograph), for example, needs an input clock that's multiplied by 24 by default. You might see this written as 24ppqn which is **p**eaks **p**er **q**uarter **n**ote. Strangely, [μGraph](https://library.vcvrack.com/Valley/uGraph), the smaller version of Topograph, defaults to only 4ppqn. The advantage to the higher clock multiplier is if you change your tempo these modules can adapt to the new tempo more quickly, as they need to 'hear' at least two clicks before they can lock on.

If you're trying to send clock to external gear via CV-MIDI, you'll probably need to give it 24ppqn too. Also, racks MIDI clock out is... not great. It's pretty unstable and can make some gear unhappy.

### More on Clocking:

{{< columns >}}

While you'll often see [Impromptu's Clocked](https://library.vcvrack.com/ImpromptuModular/Clocked) used as the main clock source on YouTube, I actually recommend using ZZC's [Clock](https://library.vcvrack.com/ZZC/Clock) and [Div expander](https://library.vcvrack.com/ZZC/DivExp), especially since you can use the phase outputs they provide with [FN-3](https://library.vcvrack.com/ZZC/FN-3) to get clock sync'd lfo's very easily. Even cooler, if you use a sequencer on the Div expander and FN-3, you can get amazing clock sync'd modulation sequences.

<--->

![](/clocksyncdmod.png)

{{< /columns >}}

I also recommend keeping your clocking interesting. It you just have your sequencer be driven by a constant clock it might not be as interesting as you like. You can always use a gate sequencer as a 'clock' source for your sequencer and have gates be triggered more rhythmically. 

If you want some random clocking, try using [Geodesics' Fate](https://library.vcvrack.com/Geodesics/Fate) (which is also amazing at adding randomness to note sequences), [Audible Instruments' Bernoulli Gate (Branches)](https://library.vcvrack.com/AudibleInstruments/Branches) or [Random Sampler (Marbles)](https://library.vcvrack.com/AudibleInstruments/Marbles), [Grayscale's Permutation](https://library.vcvrack.com/Grayscale/Permutation6),  or [SLM's Mux Freak](https://library.vcvrack.com/SLM/mux-freak). Each has it's own method of adding madness to clocking.

{{< attribution >}}or, if you're feeling really spicy, there's [Arias Salvatrice's Darius](https://library.vcvrack.com/AriaSalvatrice/Darius), which is basically a lot of Bernoulli Gates chained together{{< /attribution >}}

## CV-MIDI doesn't work

If you want to constantly update the note value you're sending out of a sequence, you'll need to tie the gate input high. Otherwise, the note will only change on each gate activation/trigger. Also, if your triggers are too short, some midi interfaces will miss the message too.

## How do I add those labels onto modules?

[Stoermelder Glue](https://library.vcvrack.com/Stoermelder-P1/Glue) 

## How do I change my wire colors?

[Submarine WM-101](https://library.vcvrack.com/SubmarineFree/WM-101)

## How do I add CV control of a knob that doesn't have a CV input?

Stoermelder's [μMAP](https://library.vcvrack.com/Stoermelder-P1/CVMapMicro) or [CV-MAP](https://library.vcvrack.com/Stoermelder-P1/CVMap). You'll probably want to check out [CV-PAM](https://library.vcvrack.com/Stoermelder-P1/CVPam) too, for getting CV from changing any other knob. 

## How do I get that fancy dimmed with bright lights effect I've seen in YouTube videos?

[Modular Fungi Lights Off](https://library.vcvrack.com/ModularFungi/LightsOff) - right click it, set active, and drag the dim slider to whatever you want. Not all module's lights use the system it does to know what shouldn't be dimmed. While the stock VCV scope will stay dim, [Modular Fungi's Opsylloscope](https://library.vcvrack.com/ModularFungi/Opsylloscope) does work. Just be aware it uses more CPU

![](/lightsout.png)

## VCV runs like shit

VCV needs a computer with a good CPU and not totally shit graphics processing. It probably won't run super well on your laptop, especially with some of the more CPU-heavy modules, like Plateau. You might be able to get it to run better by going to Engine → Threads in the top menu, and selecting whatever says "most modules" by it. Though, in my experience, going one or two down from that can help on very powerful systems. If you've got 16 threads, 6 or 7 seems to be the sweet spot, for example.

Also make sure you have Engine→Sample Rate set to something sane. I run at 44100 because I like to use CPU heavy modules and make big patches, but if you want a bit better sound VCV does actually benefit quite a bit from oversampling, just be aware setting this higher will absolutely tank performance.

If you're running Linux and extraordinary unlucky, you might be dealing with a bug that's causing Rack to try to render at like 3000 FPS, which tanks performance and can crash your entire graphics stack to lock up. [LibStrangle](https://gitlab.com/torkel104/libstrangle) fixes the problem.

## How do I interface VCV with other software?

The most common way you'll see is uning VCV Bridge. Unfortunately, Bridge is sorta a pain to get, eats CPU, and just doesn't run well.

So, your options are:

* Use VCV Bridge, hope it doesn't crash or eat too much CPU
* Wait until VCV rack 2.0 drops, and with it the $100 version that works as a VST Plugin
* You can use [ASIO Link Pro](https://give.academy/downloads/2018/03/03/ODeusASIOLinkPro/) on Windows, or Jack on Linux (which you should be anyway). [This video from *VCV Rack Ideas*](https://www.youtube.com/watch?v=e5au-hkvnFA) explains how to setup ASIO Link Pro.
* Use [VeeSeeVST Rack](https://github.com/bsp2/VeeSeeVSTRack), which is based on a pretty old version of Rack and has limited plugin selection
* Use something other than VCV entirely, like [Voltage Modular](https://cherryaudio.com/voltage-modular), [Softube Modular](https://www.softube.com/modular), or maybe [Reason Rack](https://www.reasonstudios.com/en/reason/rack-plugin), 

If you want to load VSTs inside of Rack, you'll have to get [VCV Host](https://library.vcvrack.com/VCV-Host/Host), which is not free. It's also not perfect about plugin support, but it's still by far the biggest bang for your buck you can add to rack, albeit the UI is a bit clunky at times.

## How do I interface VCV with Eurorack hardware?

Pretty much the only way to do it directly is with either the Expert Sleepers ES-8 or ES-9 or with an audio interface that supports ADAT and the ES-3 and ES-6. Just like all things eurorack, these are expensive.
