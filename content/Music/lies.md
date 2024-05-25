# I lied

Well, sort of. I haven't told you anything that's wrong, but I have been omitting something.

The software we're using, VCV Rack, is very *weird*. It lacks many features that most people expect in a **DAW** - **D**igital **A**udio **W**orkstation. We'll talk significantly more about DAWs in a coming page, but I need to bring them up now because there's some things that VCV absolutely does not do well that will make creating full songs that sound like music you're probably used to unnecessarily difficult.

This should leave you with two questions:

## 1. Why the heck did we start with VCV Rack then?

Three reasons:

1. VCV is a lot "lower level" than working in a DAW. We'll be making larger effects and sounds from their fundamental components, gaining a deeper understanding of how they work.

   If for no other reason, you should care about this because the world of music technology is ALWAYS trying to sell you on a new tool (software or hardware) to make music but if you know how things work you'll say "Why do I care, I can already do that!" instead of "I NEED IT".

2. Most DAWs are *VERY* expensive. There are low cost options - [Reaper](https://www.reaper.fm/purchase.php), for example, is $60. But, it's also really hard to use. Most musicians use either [Ableton Live](https://www.ableton.com/en/shop/live/) which is \$750 for the version you actually want<footnote>Ableton Live has Into, Standard, and Suite versions. Intro has some weird limitations, and Standard still lacks "Max4Live" a tool you'll almost certainly want for doing many basic things in Ableton. Plus, Ableton will make you pay <b>AGAIN</b> for major version updates.</footnote> or [FLStudio](https://support.image-line.com/jshop/shop.php) which is much more reasonable at \$200 for the version that's good enough for most users (+free upgrades for live, unlike Ableton Live).

    I'm not cool with asking you to shell out \$200 for software to even get started. When we do need to use a DAW, I'm going to go with FL Studio (Despite being an Ableton user) both because they have a really nice trial where pretty much the only thing you can't do is save your work and because unless you *realllllly* need some of Ableton's niche features, it's the better DAW anyway. <span style="color:#fff1">mostly because the Ableton piano roll sucks.<span> 

3. DAWs are complicated. Sure, learning VCV isn't a walk in the park, but DAWs throw a lot at you very quickly. Most will let you immediately press buttons and get sound, sure, but the actual in depth usage of the features that make it worth paying for take some time to actually understand.

## 2. What am I missing?

### Timelines, Tracks, Automation, & Clips 

[TODO] Screenshot

In you're typical rock band you have five parts - Lead guitar, Rhythm guitar, Bass Guitar, Drums, & Vocals. Each of these parts will have at least one *track* on your *timeline*. If the same bit is repeated a few times, that can be put into a clip on the timeline, and that clip can be duplicated and moved around. You may decided you want to add automation, such as having the volume fade in and out.

In most software, these tracks can contain either actual sounds or, if you're using a virtual instrument, they can re-generate the sound each time they play and so they only need to store the notes that the instrument should play. <footnote>In the case of drums being played back this way, usually each drum sound is associated to a note. It's a bit hacky, but makes sense in practice</footnote>

### Sample & File Management

[TODO] Screenshot

This is something VCV does very, very poorly. Often, when making music you'll want to use samples - pre-recorded sounds - and use them in various ways. Maybe it's the vocals. Maybe you have some drum samples to load up into a drum utility that will let you finger-drum out a beat. Either way, you'll probably be building up a good library of sounds to work with. VCV Doesn't have a built in way to organize and dig though your sample library. Basically every other DAW does.

### Plugins

[TODO] Screenshot

Plugins are virtual instruments or effects you can load into your DAW similar to the modules we've been loading up in VCV Rack, though unlike the modules each plugin is usually a fully featured, ready to use ***thing***. Some plugins may emulate the sound of other instruments (guitar, piano, vintage synthesizers) some may be full, ready to use effects (Delays with various modes that automatically sync to the tempo, guitar amp emulations, full glitch-machines, etc.). Usually all of the knobs and settings in these plugins can be automated in the DAW itself.

In the majority of cases, plugins will load as another window on top of the DAW.

VCV Itself is very strange in that if you pay for it, you can get it to either be a plugin (The primary benefit of the $100+ pro version - letting you load VCV into you DAW) or get it to open plugins (VCV acting like a DAW, using [Host](https://vcvrack.com/Host) - \$30<footnote>If you're thinking of buying Host, there's a downside you need to be aware of with hosting plugins in VCV. Due to the underlying structure of how VCV works, plugins loaded in VCV will incur some extra delay getting sound in and out of them. It's not enough that you're likely to hear it cause things to go out of sync, but it is enough to cause the phase of your waveforms to shift. </br></br>This becomes a problem when you do somethig like split a signal so that it goes though a plugin loaded in Host and through a module in VCV then mix them back together. The resulting waves will have enough phase differences that they'll cancel out and generally just not sound like you want them to.</footnote>).  You can also use [Cardinal](https://github.com/DISTRHO/Cardinal/releases/tag/22.12), which is a legally made "fork" of the VCV project which adds the ability to use what is effectively the same software as a plugin for free.

Soon we'll be going over some of what I deem to be the best-of-the-best plugins for you to use. They do vary wildly in price, from free to $400+. You can absolutely get away with only using the free stuff.

---

So, for now, I'm going to stick in VCV Rack. We'll come back to DAWs soon, but I wanted to point this out because on the next page you're going to be doing some stuff with samples, which has a pretty crappy workflow in VCV, and I don't want you to think that is normal.

