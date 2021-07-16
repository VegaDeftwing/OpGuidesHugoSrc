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



