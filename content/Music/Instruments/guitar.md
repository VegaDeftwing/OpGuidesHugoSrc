# Guitar

<script>
    document.getElementById("instMenu").open = true;
</script>

[TODO] Things I don't know where to put yet:
* Strat plates, they're replaceable
* 

If you're at least brodly 

TODO: General overview, labeled diagram pointing to each component

Les Paul, Gretch, Stratocaster, Telecaster, Jazzmaster

https://www.youtube.com/watch?v=hEOuGs7m8bw might be good to at least link, if not embed

<piano-keybed label="Guitar" variant="Standard (24 fret)" highlight="E2-E6"></piano-keybed>
<piano-keybed variant="Baritone" highlight="B2-B6"></piano-keybed>
<piano-keybed label="Bass" variant="4 string" highlight="E1-D#4"></piano-keybed>

# Guitar Pickups

A guitar pickup is a type of transducer - a device that converts one kind of energy into another.

For a guitar, this is usually done in one of two ways, to start with, let's talk about the kind you already have in mind, the "normal" electric guitar pickup.

For these the steel strings (Note!, this means this kind of pickup doesn't work for nylon strings *and* the string do matter) will interact with a magnetic field created by the magnets (called pull pieces) this disruption of the field will cause an electrical signal to be generated in the copper coils around the magnets.

There's another piece to this too: Ignoring the magnet, that big ol' coil of wire is really an inductor. Inductors are circuit components that let us store energy in a magnetic field (or capture energy from one, like a pickup does), but they don't respond to all frequencies equally.

Additionally, there's a component called a capacitor, these are sorta the inverse of inductors, they store electricity in an electric field.

Both capacitors and inductors are fundamentally really simple: Inductors are coils of wire, capacitors are just two metal pieces with a small gap between them. This is relevant because there are two major places where you'll have capacitance added to your signal before your amp/first pedal: The cable and the "Tone" pot on your guitar, which is literally letting you add more capacitance.

Finally, you have to consider the resistance which will affect the total output volume. Resistance comes from the volume pot (Which is literally a variable resistor), the cable (hopefully not significantly), and the inductor (again, hopefully probably not significantly compared to the volume knob).

Okay, those are a bunch of engineering terms, why should you care?

Lets back up, remember on [page] we looked at spectrum graphs and on [filters_page] we looked at, well, filters? These things together will determine how the pickups naturally filter your signal, as well as how strong the base output of your guitar is and how much dynamic range (Difference between hard and soft picking) there is. Notably, because we have all three horseman (Inductance from the pickup, capacitance from the tone pot and cable, and resistance from all of it) this filter actually has **resonance**. This means there will be a lil' (or not so lil' depending on the specifics) resonant peak that makes the guitar have a lot more character.

One more thing of note: Remember before how I said the resistance matters too? The first thing (amp/pedal/interface) your guitar plugs into will have some resistance as well. This also factors into the sound, and it's why you'll occasionally hear about pedals that don't sound right if they're not the first in the chain: (most) guitars have a pretty high output impedance, and if they don't plug into something that ALSO has a high impedance, it'll "load" the pickups, causing more filtering. You may see, for example, an audio interface has a Hi-Z button: This means "High impedance" and it means that engaging that button should prevent this from being an issue with your guitar.

This means we have a LOT of variables that can affect the sound:
* The type of magnet
* The shape of the magnet
* The type of string
* The number of windings
* The tone capacitor
* The volume pot
* Where the pickup is below the string

There's some less obvious things that matter too, like:
* Is the pickup potted? If so, in wax or expoxy?
* If using multiple pickups at once, are they in phase?

All of this said, I want to step back for a moment: Does the pickup matter? Yes. Should you go out and buy an ultra expensive pickup, a vintage tone capacitor and a pure silver low capacitance cable? No.

The bigger reason to know this is to be informed when buying/trying a guitar, to know how your pedals and amp will affect the sound on different guitars, and to get an idea of what to look for if you do actually encounter a guitar with either missing, broken, or just horrible sounding pickups.

## Pickup Types

### Common: Single V Humbuck V P90

Splitting & Tapping

Passive V Active – + the importance of impedance matching

### Acoustic: Piezo

Normal circle ones V PVDF

### Vintage Tone: Lipstick, Goldfoil

### Weird: 
* Hexa-phonic
* MIDI
* Optical
* Sustainiac
* Triad
* Combined P90 w/ rail (SHPR-1n)
* Half rail, half pull piece (Railhammer)

Sustaniac vs Fernandes Sustainer

## How it’s Made:

### Magnet Types

 AlNiCo (II, III, V), Ceramic, Neodymium, CuNiFe
 
 Magnet shape

### Windings (Over & Under wound)

#### RWRP: Reverse Wound Reverse Polarity

### Potting

Wax, Epoxy

### Noise Canceling

(stacked coils, dummy coils) 

## Pickup Arrangement

### Placement (Neck, Middle, Bridge)

3 way, 5 way, rotary, push-pull pots

### Tone Pots

- Tone Capacitors:  
  - Ceramic vs. film, Popular values (e.g., 0.022µF, 0.047µF)

### Notable wiring alternatives
* Push/pull voicings
* Push/Pull split
* Blend pots on 5-way
* Piezo blend
* Toggle switches
* Kill switches

## Necks

### Neck (Scale) Length

[TODO]

### Fret Count and Type

Most guitars have 21, 22, or 24 frets, with 22 being the most common for traditional electric guitars and 24 allowing for extended high-note access, letting the player have two octaves of range on each string. Some custom and experimental designs push beyond this, with guitars featuring 27 or more frets for extreme upper-range playability. 

{{< columns >}}

Microtonal guitars take things even further, utilizing either fixed fretboards—often divided into non-standard intervals like 19-tone equal temperament (EDO)—or movable fret systems that allow for flexible tuning. These let you hit notes that don't exist in the western scale.

<--->

<iframe width="100%" height="270" src="https://www.youtube.com/embed/dHLG5dAlfaA" title="Demo piece for utonal just intonation guitar: Ron Sword, Microtonal Guitarist" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

{{< /columns >}}

Fret size and material also play a role in both feel and durability. Standard options include jumbo, medium, and narrow frets, each affecting string bending and note articulation. On the extreme end, the frets can be normal and the actual fretboard <a href="#scalloped-necks">can be scalloped instead</a>. Really the only reason not to go with jumbo frets is because you like to feel the wood of the fretboard or you play with a strong grip as larger frets make it easier to bend notes but can lead to notes being out of tune if pressed too hard. 

Material choice is another choice: traditional nickel-silver frets wear down over time, while stainless steel frets offer extended durability and a slicker feel, though they can be harder to work with for luthiers performing refrets. An alternative material, EVO gold, offers a middle ground with greater longevity than nickel but without the extreme hardness of stainless steel.

<img src="/fairuse/other/cortmulti.webp">

{{< attribution >}}A multiscale guitar. Image stolen from [Cort Guitars](https://www.cortguitars.com/dp/kx507-multi-scale/). Note how the frets change in angle as you go across the neck.{{< /attribution >}}

Beyond standard designs, specialized fret types have emerged to improve ergonomics and intonation. Multiscale or fanned fret guitars use a slanted fret layout where lower strings have a longer scale length than higher strings, optimizing string tension and tone consistency. If you want to drop tune an extend range guitar, you'll probably want multi-scale to avoid the tension being uncomfortable. Of course some people are repulsed by multiscale, so it may not be for you. It does take some getting used to.

<img src="/fairuse/other/ttneck.webp">

{{< attribution >}}True temperament neck picture from [truetemperament.com](https://truetemperament.com/produkt/fretboards-electric-guitar-2475/){{< /attribution >}}

True temperament frets take this concept even further, using precision-calculated curved frets to "[correct](https://www.guyguitars.com/truetemperament/eng/tt_thidellF1.html)" <footnote>Most people would consider corrected intonation to be making the guitar intonated the same as a piano, that is equal temperament. True temperament frets don't do that. I don't think they're bad, it's just *not* equal temperament and I think they sorta hide that and people assume "true" means "equal".</footnote> intonation across the neck. Compound radius fretboards provide another refinement, gradually shifting from a rounder curve near the nut to a flatter shape near the higher frets, making chording easier while improving lead playability.

Additionally, bound fretboards—where the fret ends are embedded in a smooth binding—can enhance comfort by eliminating exposed fret edges. It's worth note that these may pose issues for long term maintenance though. 
  
### Neck Profiles
 Neck profiles (C, D, V shapes, that weird stranberg shape
  
### Scalloped Necks

<img src="/fairuse/other/Scalloped_fretboard.jpg" alt="Scalloped fingerboard of Yngwie Malmsteen's Stratocaster" style="border-radius:20px;">

The main purpose of a scalloped neck is that it is much easier to bend strings. 

I actually bought a cheap scalloped guitar on eBay so I could try this out. Going into it I had a few questions.

{{< iquestion >}}
**Q:** Do you feel the bumps as you slide your hand up and down the neck?
{{< /iquestion >}}

If you do the stereotypical fret-end inspection of sliding your hand up/down the neck, sure. But when actually playing, no, it's not noticnoticible or in the way, at least not for me.

{{< iquestion >}}
**Q:** Is it actually easier to bend the strings?
{{< /iquestion >}}

Yes. Significantly.

{{< iquestion >}}
**Q:** How hard was it to adapt to it.
{{< /iquestion >}}

For me, I took to it immediately. Like, a few minutes. This probably won't be true for everyone. If you have an iron grip, it'll probably feel pretty weird to you and you might struggle not to press so hard it goes out of tune.

{{< iquestion >}}
**Q:** Are chords harder to play?
{{< /iquestion >}}

Eh? Big complex ones, a bit. Because it's so much easier to bend the strings if you're already at the limit of what your hand can strech to, you're liable to start bending a string unintentionally, and more so than you would on a normal guitar.

{{< speech big >}}

I still use chords when playing, but I definitely lean more on the single-note / lead type playing side than rhythm/chords, so I'm not the best judge of this.

{{< /speech >}}

Additionally, I noticed a few things I didn't expect:
* Hammer-ons are a bit easier. This makes taping easier as well.
* It's so much easier to bend strings, I managed to accidently push the high e off the neck. I haven't done that on a normal neck in *years*.

Finally, I should note some input from friends: If you play a scalloped guitar a lot and manage to after years of heavy playing and bending wear the frets down, it's likely it will cost more than a normal guitar to get fretwork done on, just because there's a lot more that can go wrong.

### Neck attachment
Bolt-on vs. set-neck vs. neck-through designs 

### Inlays and Markers

Luminlay and glow-in-the-dark fret markers
### Tuning machines
*	Locking tuners
* Ratio tuners
* Riot tuners / stranberg tuners
* Hipshot tuners 

## Strings

Brand?
How long are they good for?
Initial brightness
Coatings

- Gauge Options:  
  - Light, medium, heavy, Hybrid sets  
- Materials:  
  - Nickel-plated steel, Pure nickel, Stainless steel, Coated strings  
- Specialty Strings:  
  - Flatwound, Half-round, Acoustic-electric hybrid strings  
  - Extended-range string sets  
- Double-ball end strings (Steinberger and similar systems)  
- Multi-scale string tension considerations  
- Custom string sets for alternate tunings  



## Pedals

For electric guitar, a lot of the crazy sounds you hear aren’t just a guitar plugged into an amp. Instead, there’s a box which modifies the sound between the guitar and amp. These are pedals.

[TODO] pedal board pic here

There are tens of thousands of different pedals out there, from brands that make millions of each pedal to limited run, hand-made boxes. Every effect and combination of effects you could ever want in a pedal exists in one form or another.

### What is a pedal (and what’s not)

Just to limit our scope here, it's worth noting not all effects are pedals. Some guitarist prefer rack unit effects for example 

[TODO] picture here.

It's also notable that fx pedals don't have to be used with guitars. It's pretty common to use them with synths or other instruments that have electronic outputs as well. It's pretty common even for electric-acoustic guitar players to use at least a reverb pedal.

Pedals, multi-fx, why stomp switches, rack-fx, non-guitar uses,

### Analog Vs Digital 

### Derivatives

There may be tens of thousands of pedals to choose from, but there are significantly less circuits than that: Many pedals are clones of each other. Most clones will make some modifications, but many are nearly identical. While there might be a good reason to buy a more expensive version of the same circuit (Better mechanical design, better art, better fits on your pedal board, better components, etc) they’ll broadly sound the same. So, let’s talk about some of the most popular (and so most cloned) pedals you’ll see:

TODO: I’ll put these in tabs for levels of detail. I think a full circuit breakdown of each would be really cool, enough that people getting into pedals can start to understand things like clipping diodes, op-amp fuzzes, etc. Being able to see “Hey, this pedal I already have does most of the same things” I think is useful, and with most circuits being online now it’s actually practical. I want to walk people though seeing that. This will require tying back to the https://opguides.info/engineering/circuits/intro/1-intro/ pages, to avoid duplicating effort here.

[NOTE]: I don’t love this list.I might need to ask more for opinions.

RAT
Tubscreamer
Plumes
Fuzz Face
Big Muff
Klon
Mosky Golden
Tumus
BluesBreaker
Morning Glory
Memory Man
Rangemaster
DS-1
HM-2
Wurm
Univibe
CE-2
Phase-90
OCD
Tonebender

New Community Favorites - “Modern Classics”

TODO: Should this exclude anything we can’t talk about the circuit for?
Broadcast
Plasma Pedal (Bass)
Superego / Plus / Sustainers
Afterneath
Rainbow Machine
Po2 / DigiWhammy / PtichFork
Shallow Water
Something from DBA?
Zoia?
Simplifier?

Sorta guitar-specific effects, things that wouldn’t be on past pages
Green ringer

The most common sub-circuit things to look for:
OpAmp clipping
Diode clipping
Tone stacks
Basic volume/LFO depth control
PT2399
Voltage boosters
BBDs
Rectifier octave ups
FV1 (Vs ARM based like Daisy)

Expression pedals (and their standards)

Insert cables
Utility pedals -> Parallel mixers, frequency splitters, AB/Y, tuners (vs clip on), swithing systems (MLX-10, etc.)

Trails on effects

MIDI controlled pedals (and MIDI standrads, and how many MIDI controlled pedals sorta mid with the standard)

How some pedals need to have a cable in to turn on

 
- Circuit Types:  
  - Analog vs. digital 
     - Mention the FV1, Daisy Seed, and Linux Based (Like Plethora) and pros and cons 
  - Op-amp vs. transistor-based  
  - True bypass vs. buffered bypass  
- Modding and DIY:  
  - Common mods (e.g., Keeley mods)  
  - Component swapping (e.g., diodes, op-amps)  
- Fuzz Variations:  
  - Germanium vs. silicon transistors  
  - Octave fuzzes (e.g., Octavia)  
- Multi-effects units vs. single pedals  
- Power supply considerations (isolated vs. daisy-chained)  
- Vintage-style pedal enclosures vs. modern designs  
- Fx loop

## Amplifiers
- Types of Amps:  
  - Tube (valve), Solid-state, Hybrid, Digital modeling amps  
  - Acoustic amps  
- Configuration:  
  - Combo vs. head and cab  
  - Wattage considerations  
- Speaker Types:  
  - Common sizes (e.g., 8", 10", 12")  
  - Open-back vs. closed-back cabs  
- Amp Features:  
  - Effects loops, Built-in reverb/tremolo, EQ options  
- DI (Direct Injection) Systems:  
  - Active vs. passive DI boxes  
  - Amp simulation in DI systems  
- Specialty amps for 7/8-string and baritone guitars  

Make sure to mention latency, aliasing, and how well it takes for anything digital

## Guitar Cables
- Electrical Considerations:  
  - Capacitance, Shielding, Length impact on tone  
- Connector Types:  
  - Straight vs. angled plugs, Balanced vs. unbalanced  
- Specialty Cables:  
  - Low-noise cables, Coiled cables  
  - Multi-channel cables (for hexaphonic/MIDI setups)  
- Directional cables (debate and science behind them)  
- Specialty cables for stereo/multi-output guitars  
- Right-angle connectors vs. pancake connectors  

## Guitar Body
- Body shape
- Tonewoods (mahogany, alder, ash, etc.)   
- Resonator guitars
- Slide guitars
- Side-mounted jack plates vs. top-mounted vs rear mount
- Pickguards:  
  - Single-ply vs. multi-ply, Custom shapes and materials  

## Specialized Components
- Multi-output jacks for stereo or hexaphonic configurations  
- Tension-adjustable truss rods  
- String dampeners (FretWraps and similar devices)  
- Piezo pickup integration with electric guitars  
- Side-mounted jack plates vs. top-mounted  
- Custom cavity routs for onboard effects  

## Bridge Systems, Nuts, and String Trees
- Fixed
- Vibrato arm mechanics (floating vs. fixed tremolo arms)  
- Stoptail pieces and their effect on sustain  
- Microtuners for fine-tuning adjustments  
- Evertune
- Bigsby
- (Floyd Rose, Kahler, Wilkinson)  
- Evertune bridges
- Tune-o-matic
- Roller nuts and bridges for reduced friction  (Ref here or in nuts? Maybe move nuts to here?)
- String trees
- Nuts (plastic, bone, Tusq, brass, locking)
- Saddles (material and design differences)
- Roller bridges

## Extended Guitar Types and Designs
- 12-string Guitars:  
  - Double-course string configurations, Electric vs. acoustic 12-strings  
- Baritone Guitars:  
  - Scale length differences, Applications in various genres  
- Bass Guitars:  
  - Active EQ systems, Extended-range basses (5/6/7+ strings)  
- Headless Guitars:  
  - Tuning systems and string clamping mechanisms, Advantages in ergonomics  
- Sitar Guitars
- Harp guitars
- Slide Guitar

## Acoustic Guitar Electronics
- Internal mic systems vs. undersaddle piezo pickups  
- Blended pickup systems (mic + piezo + magnetic)  
- Soundhole covers to reduce feedback  

## Signal Chains and Connectivity
- ABY splitters for multiple amp setups  
- Wet/dry rigs and stereo signal chains  
- Wireless systems:  
  - Analog vs. digital wireless, Latency and interference considerations  

## Alternate Guitar Tunings and Setups
- Open tunings (e.g., Open G, Open D)  - relate to string choice
- Extended-range tuning setups (drop A, F#) - relate to scale length  
- Adjustable nut height for slide guitar

## Studio and Live Integration
- Reamping techniques for guitar tracks  
- Impulse responses (IRs) for cabinet simulation  
- MIDI foot controllers for live effect switching  

## Experimental and Niche Gear 
- Fretless guitars and basses  
	Metal vs wood necks
	Inlay lines or dots to help
- Harp guitars and their additional string setups  
- Guitar synths and processors (e.g., Roland GR series)  
- Sustained notes using E-Bows and similar devices  
- Micotonal guitars
- Sustained notes using E-Bows and similar devices
- Guitorgan
- "Sine" Guitar which has the move-able pickups and body
- Double neck
- Mixed fretted/fretless
- Partially scalloped
- Custom cavity routs for onboard effects  
- B-benders and G-benders (country-style pitch-shifting systems)
- Lap Steel & Pedal Steel

## Playing Techniques
* Harp Harmonics
* Harmonics
* pinch harmonics
* finger picking

# Bass

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qxIHAGzb6lc" title="RESPECT THE BASS!!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[TODO]

* Active Pickups, 3 vs 2 band EQ, string count, picking methods, slap

https://www.reddit.com/r/Guitar/comments/muwb6/learning_bass_after_guitar/