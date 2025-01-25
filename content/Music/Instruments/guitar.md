# Guitar

# **1. Guitar Pickups**  

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

Passive V Active

### Acoustic: Piezo

Normal circle ones V PVDF

### Vintage Tone: Lipstick, Goldfoil, Triple-coil

### Weird: Hexa-phonic, MIDI, Optical, Sustainiac, Triad

Sustaniac vs Fernandes Sustainer

## How it’s Made:

### Magnet Types

 AlNiCo (II, III, V), Ceramic, Neodymium, CuNiFe

### Windings (Over & Under wound)

#### RWRP: Reverse Wound Reverse Polarity

### Potting

Wax, Epoxy

### Noise Canceling

(stacked coils, dummy coils) 

## Pickup Arrangement

### Placement (Neck, Middle, Bridge)

3 way, 5 way, rotary, push-pull pots


---

## **2. Fret Count and Type**  
- Standard and Extended Ranges:  
  - 21, 22, 24 frets, Custom ranges (27+ frets)  
- Fret Design:  
  - Jumbo, medium, narrow  
  - Stainless steel vs. nickel-silver  
- Specialized Frets:  
  - Fanned frets (multiscale designs), True temperament frets  
  - Scalloped frets  
  - Compound radius fretboards  
  - Bound fretboards and their impact on feel  
  - Alternative fret materials (e.g., EVO gold)  

—


## **3. Pedals**  

For electric guitar, a lot of the crazy sounds you hear aren’t just a guitar plugged into an amp. Instead, there’s a box which modifies the sound between the guitar and amp. These are pedals.

[TODO] pedal board pic here

There are tens of thousands of different pedals out there, from brands that make millions of each pedal to limited run, hand-made boxes. Every effect and combination of effects you could ever want in a pedal exists in one form or another.

### What is a pedal (and what’s not)

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

## **4. Amplifiers**  
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

---

## **5. Guitar Cables**  
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

---

## **6. Guitar Components**  
- Body and Neck:  
  - Tonewoods (mahogany, alder, ash, etc.)  
  - Bolt-on vs. set-neck vs. neck-through designs  
  - Neck profiles (C, D, V shapes)
  - Slide Guitar
- Hardware:  
  - Tuning machines (locking, non-locking, ratio tuners)  
  - String trees, Nuts (bone, Tusq, brass, locking)  
  - Saddles (material and design differences)  
- Bridges:  
  - Fixed bridges, Tremolo systems (Floyd Rose, Kahler, Wilkinson)  
  - Evertune bridges, Tune-o-matic  
- Controls:  
  - Volume and tone pots, Push-pull potentiometers  
  - Toggle switches, Kill switches  
- Tone Capacitors:  
  - Ceramic vs. film, Popular values (e.g., 0.022µF, 0.047µF)  
- Pickguards:  
  - Single-ply vs. multi-ply, Custom shapes and materials  
- B-benders and G-benders (country-style pitch-shifting systems)  
- Roller nuts and bridges for reduced friction  
- Luminlay and glow-in-the-dark fret markers  

---

## **7. Strings**  
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

---

## **8. Specialized Components**  
- Multi-output jacks for stereo or hexaphonic configurations  
- Tension-adjustable truss rods  
- String dampeners (FretWraps and similar devices)  
- Piezo pickup integration with electric guitars  
- Side-mounted jack plates vs. top-mounted  
- Custom cavity routs for onboard effects  

---

## **9. Bridge Systems**  
- Vibrato arm mechanics (floating vs. fixed tremolo arms)  
- Stoptail pieces and their effect on sustain  
- Microtuners for fine-tuning adjustments  

---

## **10. Miscellaneous Components**  
- Piezo pickup integration with electric guitars  
- Side-mounted jack plates vs. top-mounted  
- Custom cavity routs for onboard effects  

---

## **11. Extended Guitar Types and Designs**  
- 12-string Guitars:  
  - Double-course string configurations, Electric vs. acoustic 12-strings  
- Baritone Guitars:  
  - Scale length differences, Applications in various genres  
- Bass Guitars:  
  - Active EQ systems, Extended-range basses (5/6/7+ strings)  
- Headless Guitars:  
  - Tuning systems and string clamping mechanisms, Advantages in ergonomics  
- Sitar Guitars
- Harp Guitars

---

## **12. Acoustic Guitar Electronics**  
- Internal mic systems vs. undersaddle piezo pickups  
- Blended pickup systems (mic + piezo + magnetic)  
- Soundhole covers to reduce feedback  

---

## **13. Signal Chains and Connectivity**  
- ABY splitters for multiple amp setups  
- Wet/dry rigs and stereo signal chains  
- Wireless systems:  
  - Analog vs. digital wireless, Latency and interference considerations  

---

## **14. Alternate Guitar Tunings and Setups**  
- Open tunings (e.g., Open G, Open D)  - relate to string choice
- Extended-range tuning setups (drop A, F#) - relate to scale length  
- Adjustable nut height for slide guitar

---

## **15. Studio and Live Integration**  
- Reamping techniques for guitar tracks  
- Impulse responses (IRs) for cabinet simulation  
- MIDI foot controllers for live effect switching  

---

## **16. Experimental and Niche Gear**  
- Fretless guitars and basses  
- Harp guitars and their additional string setups  
- Guitar synths and processors (e.g., Roland GR series)  
- Sustained notes using E-Bows and similar devices
- Guitorgan
- "Sine" Guitar which has the moveable pickups and body

## 17 - Playing Techniques
* Harp Harmonics
* Harmonics
* pinch harmonics
* finger picking

