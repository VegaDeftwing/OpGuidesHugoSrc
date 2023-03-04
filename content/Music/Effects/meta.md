# Meta

## Mid-Side

Want to apply a different effect to the center of your sound than the more hard-panned left or right sounds - that is, does applying a different effect tho "middle" and "sides" of your audio sound interesting to you?

<iframe width="100%" height="500" src="https://www.youtube.com/embed/dD6_Bajj2DI" title="The Magic Of Mid Side" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Gain-Staging

Gain staging is the practice of setting the gain or level of each stage in a signal chain, such as in a mixer or a sound system, to an optimal level. This is important because it ensures that the signal remains at a consistent level as it passes through each stage of the signal chain, which can help to avoid distortion and other problems.

Gain staging is particularly important in audio applications, where it is critical to maintain a high signal-to-noise ratio in order to produce clear, high-quality sound. By carefully setting the gain at each stage of the signal chain, it is possible to ensure that the signal remains strong and free from distortion. This can affect both software and hardware, but it's *normally* a hardware problem.

For example, if you have hardware amplifiers in your signal chain doing a repeated ½\*2*½\*2\*½\*2, the output will not give you the same signal. Why? Because Every time you need to amplify your signal, you add some noise. Worse, every time you do one of these it-should-balance-out-trips you're at risk of clipping. So, by the end, you've halved your dynamic range and possibly added a bunch of noise.

## Impedance Matching

You'll probably hear about impedance matching issues at some point when working with music. The most likely place for anyone to deal with this - musician or not - is setting up speakers and an amplifier. Some amplifiers are design for 4Ω speakers, some for 8Ω, and as you might guess, speakers to come in either variant. If they don't match, you may have sound quality problems. 

Similarly, you may go to buy headphones and see they come in a variety of different impedances. Usually 32Ω, 80Ω, and something obnoxious, like 300Ω or more. The science as to why it matters here is much more than I want to get into but the short version is higher impedance will sound better **BUT** be harder to drive. That is, if you hook up a 300Ω pair of headphones to your phone with a tiny USB-C to 3.5mm adapter, don't expect it to get to good enough volume. Hell, your laptop or desktop may not be capable either. At that range, you probably need a dedicated headphone amp.

This quickly veers out of the relm of making music and into pro audio and "audiophile" land, which is not a debate I want to get into. Still, if you're looking for headphones and need a recommendation at the typical "I don't want to drop a million dollars but I want something good price point" of ~$150 there's three good options:

Need good sound isolation (don't want others hearing you or hearing others?)

* Making EDM-y stuff? Get the [AT M50x](https://www.audio-technica.com/en-us/ath-m50x)
* Want a good all-rounder? [Get the Beyerdynamic DT-770 (80Ω)](https://www.amazon.com/dp/B0016MNAAI/ref=twister_B07H5HM6F6?_encoding=UTF8&psc=1) 

Want better sound stage at the cost of isolation:

* [Beyerdynamic DT-990's (80Ω)](https://www.amazon.com/beyerdynamic-Over-Ear-Studio-Headphones-construction/dp/B0011UB9CQ/) will be decent.
* [Senheiser HD599](https://www.amazon.com/Sennheiser-HD-599-Open-Headphone/dp/B01L1IICR2/ref=sr_1_6?keywords=sennheiser+headphones&qid=1677896005&sprefix=senh%2Caps%2C132&sr=8-6) or [HD6xx](https://drop.com/buy/massdrop-sennheiser-hd6xx) are both really good choices.

Okay, that tangent aside, the other really big place impedance comes up is when recording "electric" instruments - like electric guitar, violin, etc. usually they'll have pretty high impedance, usually around about 20kΩ, but it varies a ton. To make things play along better, your audio interface (which you should really get one if you intend to record your instrument) will probably have an input labeled (or button to configure an input) "Hi-Z" or "Inst.". In either case, this makes your audio interface and instrument have better impedance matching, usually making it sound better (better tone), have less noise, and generally feel better to play....

BUT

This isn't always needed. If you have a pedal between your instrument and your audio interface or *sometimes* if your instrument has an "active pickup" (Does it need batteries? Then it's probably active.) Then this may make things sound worse.

This explanation is intentionally non-technical, because if you're just making music what matters more than anything is it sounds the way you want. This should be enough for you to at least get a rough idea of what to try if it doesn't. 

If you want to know more about impedance, you may want to dig into some of the {{< button relref="Engineering/Circuits/circuits1" >}}Circuits{{< /button >}} pages on this website.

## Playing the Feedback Loop

Imagine you have a weird effect with two inputs and a way to split the output such that it doesn't half the volume of to do so, and you wire it in a seemingly stupid way,

{{< mermaid >}}
graph LR
    A("Signal In") --> B["Weird Effect"]
    B --> B
    B --> G("Signal Out")
{{< /mermaid >}}

This pedal is going to cause a feedback loop - the same thing that happens when you put a microphone to close to a speaker that outputs the mics signal. Only, you can actually tame feedback. If you put something in the loop to lower the volume (which an effect with this will probably have) you can get it right on the edge of exploding into chaos, which can allow you to make some really neat sounds.

## Parallel Processing

The most obvious way to route effects is something like this:

{{< mermaid >}}
graph LR
    A("Signal In") --> B
    B[Compressor] --> C
    C["Drive"] --> D
    D["Delay"] --> E
    E["Reverb"] --> F("Signal Out")
{{< /mermaid >}}

And more often than not, that is what you'll want, but this isn't always the case.

For example, you could setup something like this:

{{< mermaid >}}
graph LR
    A("Signal In") --> B
    A --> D
    B[Compressor] --> C
    C["Drive"] --> F
    D["Delay"] --> E
    E["Reverb"] --> F("Signal Out")
{{< /mermaid >}}

In this case, the compressed and driven signal wouldn't end up going though the delay and reverb, the result would be all the punch of distotion, but with the trails of the clean signal though the delay and reverb.

Another common trick is to do something like this:

{{< mermaid >}}
graph LR
    A("Signal In") --> B
    B[Compressor] --> C
    C["Drive"] --> D
    D["Delay"] --> E
    E["Reverb"] --> F["Mixer"]
    A --> F
    F --> G("Signal Out")
{{< /mermaid >}}

Most effect pdeals will have some sort of Dry/Wet (Amount of effect) knob, but with a lot of effects stacked together it's pretty easy to loose some of the charm in the original signal. By doing this, you can blend some of the original signal back in. This is typically reall handy for getting some of the initial transiant (pluck) sound back in after a long chain.

### Frequency Split processing

One very neat option for routing into different paths like this is to set a filter or EQ setup oposite to eachother in each path, such that one gets the lows in your signal and the other the highs. Commonly, this will be done to add distortion to the low end without making the high end to harsh, while also adding reverb to high end that would other wise make the low end dirty.

{{< mermaid >}}
graph LR
    A("Signal In") --> B
    B["⦧ HPF"] --> D
    A --> C["⦦ LPF"]
    C --> H["Fuzz"] --> I["Octave up"] --> F
    D["Delay"] --> E
    E["Reverb"] --> F["Mixer"]
    F --> G("Signal Out")
{{< /mermaid >}}

[KMA Machines TYLER DELUXE Demo (YouTube)](https://www.youtube.com/watch?v=5Q8rzOkBKxA) does a good job of showing off what this is capable of. This is *very* easy to do in software for free by just running two EQ's with one only using a low shelf and the other a high shelf.


### Dealing with phase

If you do any parallel chains, be aware it can and will fuck your day with phase. You may need to adjust for timings to fix this (use some micro-timing tools) or, if it's close to worst-case, just invert the phase and you'll be good to go. Just be aware it's an issue.

## Actually playing the instrument

Effects can be awesome, but the instrument itself shouldn't be ignored... I realize that may be a massive "Well no shit" but what I mean is that most traditional instruments have a whole world of advanced techniques that can allow you to make new, interesting sounds that then can be processed with the effects you know. It's why cool effects are no replacement for a skilled player.

My favorite example is playing harmonics on a guitar, which [this video (YouTube)](https://www.youtube.com/watch?v=psHGG_a6ORQ) demonstrates well.

<script>
    document.getElementById("effectMenu").open = true;
</script>

