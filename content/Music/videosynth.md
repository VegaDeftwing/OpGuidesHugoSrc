# My Video Synthesis Journey



I'm not being paid to say any of this, I haven't spoken to any of the companies listed here *except* for Noisedeck, which while is made by two really awesome people, also gets a pretty nasty review here because it doesn't work for this. Furthermore, I *have* paid my own money for Visual Synthesizer and Cathodemer, both of which I also review negatively.



There are *many* tools listed in both {{< button relref="Music/software/livecoding" color="music" >}}Live coding Music Software{{< /button >}} and  {{< button relref="Design/gen" color="design" >}}The big list of generative art tools{{< /button >}}, but it seems that none of them really fit my use case: Generating visuals similar to those from analog video synths without being a massive pain in the ass to use.

The best fit for me would *probably* be the [Sleepy Circuit Hypno](https://sleepycircuits.com/hypno). I like the results it produces, it's hands on, and it works with modular synths like I already have. On the other hand, to be a bit overly-reductive, it's just a raspberry pi 3 and a hat, and I'd feel really dumb dropping over $450 on that. So, while I still might do that, I want to see if I can get close to it - maybe gain some functionality even - and not break the bank.

I'd really prefer something that, at least during live use, doesn't take me out of the flow to write a shader in {{< button relref="/Engineering/programming/shaders" >}}GLSL/HLSL{{< /button >}} or require significant work just to get *something* on screen at all. Similarly, not being a massive pain to get it to react to MIDI is a must. Ideally, direct audio input, OSC, etc. would be great too.

One piece of software that immediately stands out as an alternative is Lumen. Problem? It's macOS only. So, while I could set up a hackintosh and go that route, that's beginning to be a larger expense and pain than getting the Hypno. Plus, looking at videos, it has sweet spots but otherwise largely looks like shit. No thanks.

Alright, what about the bluntly named [Visual Synthesizer](https://www.imaginando.pt/products/vs-visual-synthesizer)? Well, I yoink'd it on sale and it lacks UI scaling (sucks on 4k), seemingly can't do feedback (a big part of video synthesis), but most importantly has shit documentation. So, nope.

Next on the plate, what about [synesthesia.live](https://synesthesia.live)? Well, other than half the features - including the ability to pause output - being behind a $300 paywall it's not *bad*. It can import from shadertoy, which is pretty sweet. It meets all my other needs: MIDI, OSC, Audio input, etc. Furthermore, it doesn't have very good built in shaders for what I like - they're all a bit overly complex. So, I'd still have to go write (or find on shadertoy) some of my own shaders, which is time-consuming enough to be annoying. Like, drawing basic lines and shapes should not require writing code. My biggest gripe is the lack of a good layer system, that is, there's no way to load in multiple shaders and blend them together. Between the cost and lack of good shaders (again, a minor gripe, but reflective of it's intended use case) it just doesn't seem right for me.

Moving on, probably the biggest name in the scene is [Touch Designer](https://derivative.ca). Look, I know some people can make some really, really great things in Touch Designer. It does meet all my needs. It's no more expensive than Synesthesia.live, and, man, I fucking hate it. Not only that, but it has all the problems Blender has: Overly complicated UI, non-immediacy in the UI, out-dated tutorials on YouTube making it hard to learn, etc. Only, here, they're worse. Those tutorials? Yeah, the official documentation links to a lot of them as a stand in for real docs. I'm the kind of guy that likes node-based editors and visual programming (hence my love of modular synths) but holy shit is touch designer confusing and annoying to use. I want to love it... I just can't.

Okay, I've gone through a large portion of the good options now, so let me just barrel though a few

[vvvv](https://vvvv.org): Great for interactive art installations, not great for performance and fun noodling around. Also, expensive as hell.

[Cathodemer](https://www.hypertonal.net/cathodemer/): Runs like shit on my system and I have 32 gigs of RAM, a 3900x, and a Vega56. What the fuck. Also doesn't look great.

[Praxis Live](https://www.praxislive.org): Code, but with nodes added for basically no reason. Wait, it's in Java? Why the fuck..... At least it's free

[Noisedeck](https://noisedeck.app): If it would add MIDI output and become a desktop app like was planned, it'd be awesome. As is, it doesn't cut it. Pro version isn't free either. I'm still glad I have pro, but it's not useful for this particular use case. 

Okay, so, now I'll finally get to the good ones, the few that felt like they had potential. I'll start with what was the runner up: [Hydra](https://hydra.ojack.xyz/?sketch_id=flor_1).

Hydra has a lot of problems:

* It's Web based - so, relies on a browser
* There's no good way to record from it without using a screen recorder like OBS
* Even if you could, it's hard to make the code not be in the way
* While it *can* do MIDI, setting it up is a pain. Current I'm using the [hydra-midi](https://github.com/arnoson/hydra-midi) Chrome extension
* Everything has to be live coded.

So why still consider it?

The live code syntax is really, really, **really** good. It's high level enough to let you make things very quickly, but low level enough not to be limiting in most circumstances. Clearly, you can do more in GLSL directly than in Hydra's own language, but it'll take you 10x as long (if not longer) to do it. It feels just right.

Unfortunately, those gripes about recording are major enough that I wasn't quite happy, and so there's [KodeLife](https://hexler.net/kodelife).

... Yes, yes. I know I said "doesn't take me out of the flow to write a shader in {{< button relref="/Engineering/programming/shaders" >}}GLSL/HLSL{{< /button >}}" but once I have the shaders I want set up how I want I can use MIDI to control the parameters I want. Getting that set up is annoyingly tedious, but compared to shelling out $450 for Hypno and still needing to throw an increasingly-hard-to-find Raspberry Pi at it, it actually seems rather reasonable. Kode life, at least at the time of writing is \$20 so, over 20x cheaper than the Hypno, plus is not at all feature limited to try-before-you-buy other than being nag-ware. That's pretty sweet, imho.

It wasn't a huge factor into my decision, but KodeLife also supports [Spout](https://spout.zeal.co) for sharing video streams between tools. This is pretty sweet if I want to use it with other software visual synths and what not, as it seems like about 3/4 of the video synthesis tools out there (including *most* of the tools on this page) support it.

Anyway, with my decision made, I needed to make it work for me. Unfortunately, in this case that means taking a break from writing C during the week work by writing GLSL during the weekend, but, oh well.

The first part of writing code is always figuring out what you need to write:

For generators:

1. **Lines:** The basic oscillator of video synthesis, just a ░▒▓▒░▒▓▒░▒▓▒░▒▓ pattern.
   * This should have Line width, rotation(+speed), color (HSL), offset, scrolling (+speed), and spacing controls
2. **Shapes:** I want a variable shape "oscillator" - just putting a shape on the screen
   * This should have X and Y offset, filled/not-filled, color (HSL), and rotation
     * Rotation should probably be on an LFO with variable speed
3. **Waveforms:** I'd like to be able to draw Sin/Square/Saw/Tri waveforms to the screen
3. **Slime Mold:** I just really like slime mold.
   * Basically only speed control and reset
4. **Bit Patterns:** The hard edges suit some moods.
   * Speed control + pattern
5. **Meta balls:** They look good in feedback
   * Number of balls, amount of "gooyness", min and max size
6. **Fractal Brownian Motion:** Nice smoke/clouds/high details
   * Complexity and speed
8. **Topographic Maps:** Should just be basic math on FBM output
7. **Simplex Noise:** It's nice.
   * Complexity and speed
8. **Julia Set:** FRACTALS!
   * Not sure on the controls yet
9. **Live Texture Read:** I'd like to be able to read in a texture while I change it. This would let me draw live things in. This is probably the weirdest one to implement.
10. **Screen Capture:** This would be nice for mixing in footage of the music software in use
11. **Webcam input:** Well, duh. 

For effects:

1. **Feedback:** I should get this "for free" by putting each generator in a buffer
   * Should also have hue offset per repetition, as well x-y offset, rotation
2. **"Fractalization":**  Basically just recursive (with limited depth) mirroring
   * needs axis (rotation) and number of steps to re-cur
3. **Pixelization:** 
4. **Feedback Pixel Sorting:**
5. **Aberration:**  The "3D Effect"
6. **Color ranging:** Limiting the color range
7. **Mirror:** Horizontal and vertical
8. **Edge Detection:** LINES.

Some of these will be harder than others, but none of them should really be all that difficult.

I do think I want each fragment shader to be in its own pass and so rendering to its own texture, but I'll probably only ever use a maximum of 3 generators at a time. If I do that, I can just set up each generator to have a set of associated CC's and put each one in their own rendering pass/buffer, making feedback easy. This will get a smidgen gross due to the tedious way KodeLife does MIDI mapping, but it should be fine.
