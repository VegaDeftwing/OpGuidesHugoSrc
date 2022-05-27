# Chapter 5: What Might Radically Change Things?

<script>    document.getElementById("hciMenu").open = true;</script>

## Breaking Away from Silicon, Binary, and Traditional Architectures

Probably the biggest change in computers that we could see would be rethinking the entire idea of how a computer works. This doesn't *necessarily* mean changing the way users interact with a system, but by having new, radically different hardware designs developers may be inspried to make things that are currently impractical.

To some extent, we're already seeing a glimpse of this future as general purpose use of the massively parellel vector operations done by graphics cards are being used instead for training artifical neural networks as well as slowly crepping into other tools, [such as those for music production (GPU Audio)](https://www.gpu.audio).

While this is cool, I do wonder what other branches we could go down as [Moore's Law](https://en.wikipedia.org/wiki/Moore's_law) slows down and we explore alternatives. I said before I'd love to see open hardware that lets people play with thins like using microfluidics ond diode logic for computation, playing with [FeRam](https://en.wikipedia.org/wiki/Ferroelectric_RAM), or even {{< button relref="posts/Ternay" color="gradient-border2" >}} ternary logic {{< /button >}} - and I stand by that. But if any of these things were to catch on and actually become mainstream enough that developers may be able to expect them in a given system, it may well open up the possibility for completely new software to exist. And the possibilities really don't stop there. We could break away from digital entirely and start doing computation in analog again - There's actually some really interesting research that's [Reusing NAND Flash for multiplication](https://ieeexplore.ieee.org/document/8571188). Or, maybe [Processing in Memory](https://en.wikipedia.org/wiki/In-memory_processing) will catch on. We're already seeing some architectural changes creep their way in, as the new DirectStorage API let's the graphics cards bypass the CPU when needing to get data from an NVMe SSD. This is really a pretty dramatic architectural change.

There's also some real potential for things to advance in a way that's really mind blowing: We might be able to use polarized light or quantum effects for computation instead. We're still a good ways from the miniturization and room-tempature, stable entaglement required for either; however, the ideas shouldn't be discounted or thought to be never coming home. In the 60's the idea of everyone having a computer in the pocket would have seemed just as absurd.

## ML Assisted Creation

I've already mentioned this briefly in the last chapter, so I'll keep this brief: AI/ML tools have massive potential to change how we produce content. Just browsing around, there's

* [cleanvoice.ai](https://cleanvoice.ai) "which removes filler sounds, stuttering and mouth sounds from your podcast or audio recording"
* [descript](https://www.descript.com/video-editing), which let's you edit video or a podcast by editing a text transcirption
* [Magenta](https://magenta.tensorflow.org/demos/native/), which has tools for generating melodies, making new sounds, or having a jam session with an AI, plus a lot more you can [try in the browser](https://magenta.tensorflow.org/demos/web/)
* [Runway](https://runwayml.com) is capable of some video editing black magic
* [Auphonic](https://auphonic.com/landing) will automatically post-processing podcasts, doing level normalization, noise removal, and more
* Various tools allow for ["Alien Dream" (post by Charlie Snell)](https://ml.berkeley.edu/blog/posts/clip-art/) for generating some very strange, but interesting art
* [DALL·E 2](https://openai.com/dall-e-2/), [Imagen](https://imagen.research.google), [MidJourney](https://twitter.com/midjourney) (and free alternatives, lik [DALL·E mini](https://huggingface.co/spaces/dalle-mini/dalle-mini) ) are starting to allow for photo realistic image generation from a prompt that looks just as good as if an artist did it by hand (sorry artists!)
* [GitHub Copilot](https://copilot.github.com), [Second Mate](https://github.com/samrawal/emacs-secondmate), and [OpenAI Codex](https://openai.com/blog/openai-codex/) all stand to help make programming easier by either helping with code suggestions, explaining what code does, or generating code from natural language

So, while there are absolutely ethical, legal, and moral concerns with many of these things (deepfake porn anybody?) it's already here and it will absolutely be changing what we see as possible for both big and small content creators alike.

## Body Modification and Bio-Engineering

Another point is the idea of biohacking and body augmentation. The most common biohacks include implanted [RFID tags](https://dangerousthings.com/) (which I actually have) and magnets for sensing electromagnetic fields (also guilty), but these are still pretty mundane. This Ted Talk I think shows what might be possible a bit better:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/4c1lqFXHvqI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

But I still think there's room for a lot more. While at college, I was fortunate enough to take a class with Dr. Massimilliano Pierobon who is currently the director of the [Molecular and Biochemical Telecommunications Lab (MBITE)](https://mbite.unl.edu) at UNL, and while I'm far from knowledgeable enough to understand everything that they do there I know they're doing some very interesting work that could be summarized as hacking the chemistry and existing networks in biological systems (inc. humans). Here's some work from the MBITE lab I found particularly interesting:

<div style="font-size: .75em">


Bi, D., Deng, Y., Pierobon, M., and Nallanathan, A.  ***"Chemical Reactions-based Microfluidic Transmitter and Receiver Design for Molecular Communication,"*** IEEE Transactions on Communications (Early Access), 10.1109/TCOMM.2020.2993633, May 2020. [[PDF\]](https://mbite.unl.edu/files/papers/2020/J1.pdf)

Marcone, A., Pierobon, M., and Magarini, M. ***"Parity-Check Coding Based on Genetic Circuits for Engineered Molecular Communication Between Biological Cells,"*** IEEE Transactions on Communications, vol. 66, no. 12, pp. 6221-6236, December 2018. [[PDF\]](https://mbite.unl.edu/files/papers/2018/j2.pdf) 

Hanisch, N.,  Pierobon, M. **“Digital Modulation and Achievable Information Rates of Thru-body Haptic Communications,”** In Proceedings of the SPIE International Conference on Defense + Security (DCS), April 2017. [[PDF\]](https://mbite.unl.edu/files/1020603.pdf)

</div>

{{< attribution >}}

These articles, and others from the MBITE lab at UNL, can be found [here](https://mbite.unl.edu/publications)

{{< /attribution >}}

Seeing this makes me wonder if the future of bio-hacking might be a bit more tightly integrated into how our bodies already work, rather than just tossing some electronics inside some silicon or glass to implant somewhere.

## Brain Computer Interfaces

I don't know that BCI are really the future. Elon Musk is working on [Neuralink](https://en.wikipedia.org/wiki/Neuralink) which is neat and all, but I'm not sure I'm convinced. I would welcome the faster computer to brain link as the keyboard→eyes→brain loop is far to slow, but I don't really see anyone going in to have their skull drilled into for elective surgery unless it's to correct or treat something else neurologically. There have been efforts to do BCI [without implants](https://science.slashdot.org/story/20/10/26/2140202/no-implants-needed-for-precise-control-deep-into-the-brain), but I suspect that would suffer from a lack of bandwidth and be less reliable.

I do very much hope to be wrong, as I think BCI has the opportunity to be the biggest leap humanity has ever taken. Soon, it may even be necessary to even deal with how quickly our would is changing and the amount of information we need to process every day. If you'd like to read more, the [Brain Computer Interface article on Wikipedia](https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface) is impressively deep and well cited.

## VR

VR IS THE FUTURE BRO

Yeah, I know. We've gone though the VR and 3D TV fad multipe times. Sure, this time it seems to have at least a little bit more sticking power with the Quest and Index being reasonably popular and Facebook, erm, excuse me ꩇׁׅ݊ꫀׁׅܻtׁׅɑׁׅ֮ (sorry, I can't *not* make fun of them.) going all in on VR and the ｍｅｔａｖｅｒｓｅclearly there's money behind it succeding as well.

And frankly, I agreed with the sentiment that it's a passing fad too. I had a Razer OSVR I got for cheap and it was so awful to use that I gave it away for free to a friend. But, I decided I wanted to try one more time. Not having a grand to drop and lacking good alternatives that don't make me Facebook's bitch, I bought a Quest2. It also sucked. At first.

Then I bought a better facial interface, replaced the strap with the HTC Vive's Deluxe Audio Strap ( making a "Frankenquest" ) and got some controller grips. Connected up to my PC via USB3 and the hardware was actually, dare I say, good.

That left the other side of the problem, software. I still saw VR as a toy. The games as cool, but not dramatically more fun than I could have looking at a monitor anyway.

Then I played VR Chat.

Look, I can't explain what makes it good. Really, it should suck. Being Unity based with all user generated content, the graphics are pretty meh and the performance is often garbage. In a lot of worlds there's a bunch of 12 year olds running around that just got the Quest2 for Christmas. But sometimes you find a world with people you vibe with. It's just... magic.

{{< speech big >}}

I'm also a furry, and one thing I really see VR doing for people is helping them have that behind-a-mask anominity that makes everyone more comfortable in their ~~own~~ body. Sure, this does mean there's some racist douchebags and trolls, but it also means there's people who finally have the confidence to dance in their own living room, the same way a fursuit might let a furry in a fursuit do so when otherwise they'd be too self conscious.

{{< /speech >}}

Assuming the corprate overlords at ~~Facebook~~ Meta don't fuck it up for everyone, VR absolutely has the potential to radically change things.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/hVWlgh8QP5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
