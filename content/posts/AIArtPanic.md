---
title: "AI Art Panic"
slug: "AiArtPanic"
author: "Vega Deftwing"
date: 2022-11-25
tags:
- technical
- art
---

If you've been on the internet at all lately, you've seen AI generated art and discussion of the impact of the tools. You've also probably seen a lot of hate for AI generated art. There's a lot of drama going on, as art focused communities across the internet decide how to handle this. Does AI generated/assisted art need tagged as such? Should it be allowed at all? There's the whole [Deviant Art situation (ArsTechnica)](https://arstechnica.com/information-technology/2022/11/deviantart-upsets-artists-with-its-new-ai-art-generator-dreamup/). It's all sorta messy right now, so let's talk about it.

## The tools

AI to generate art has been around a while, it's just that until recently, it looked pretty awful. Then, basically overnight, we got a collection of models - which are getting better rapidly still - that don't just look okay, they look better than what a lot of budding artists are capable of. This, obviously, pisses a lot of people off. More on this in a bit.

Let's start by talking about what the tools are capable of:

### Text-to-image (txt2img)

{{< columns >}}

This is the big headline feature.

Describe what you want, get an image out. Sometimes it's unreasonably effective, sometimes it's just unreasonable. More often than not, it'll take a hundred or so generations of turning and refining your prompt to actually get what you want.

This and image-to-image generation (more in a moment) tend to be what scare artists the most. txt2img for the risk of putting artists out of a job, and img2img for art theft.

txt2img prompt crafting is a bit of an art in its own right, as getting the model to spit out what you want isn't always trivial.

Many txt2img systems also allow specifying a negative prompt, which can be used to say certain things *should not* be in the picture.

<--->

![tmp3e20n2s2](/nonfree/blog/ai/tmp3e20n2s2.webp)

{{< smalltext >}}Stable diffusion running Waifu Diffusion v1.3. Prompt: `an Anime girl with long rainbow ((Iridescent hair)) and sharp facial features singing into a microphone and wearing headphones, art station, photograph, realistic, cyberpunk, gothic, eye shadow` → img2img → inpaint. txt2img alone was not enough to get this result. {{< /smalltext >}}

{{< /columns >}}

### Image-to-image (img2img)

Text-to-image is great, but image-to-image is scary powerful too. If you're going through pictures and you find something close to what you want, you can pluck it out and work with variations of it.

{{< columns3 >}}

![A anthro wolf furry in a jean vest with pins Cyberpunk punk rock original](/nonfree/blog/ai/wolf.webp)

{{< smalltext >}}Stable diffusion running yiffy-e18.ckpt. Prompt: `A anthro wolf furry in a jean vest with pins. Cyberpunk, punk rock.`{{< /smalltext >}}

<--->

![grid-0047](/nonfree/blog/ai/grid-0047.webp)

{{< smalltext >}}The prior image through img2img{{< /smalltext >}}

<--->

![grid-0048](/nonfree/blog/ai/grid-0048.webp)

{{< smalltext >}}The prior image with the background through img2img again.{{< /smalltext >}}

{{< /columns3 >}}

Note, the image being used for img2img **does not** need to be generated by the model. You can use an existing picture,  such as a very poorly drawn landscape in 3 colors in MS paint, and let the model work off of that and get astounding results. img2img also lets you specify how much an image should change, from no change to a totally new image based on the prompt. 

### In painting

When photo editing sounds too tedious, just erase and generate!

{{< columns3 >}}

![original](/nonfree/blog/ai/inpaint/original.webp)

{{< smalltext >}} Original (generated by Stable diffusion){{< /smalltext >}}

<--->

![inpaint](/nonfree/blog/ai/inpaint/inpaint.webp)

{{< smalltext >}} Area filled in black marked to be replaced {{< /smalltext >}}

<--->

![inpaint_result](/nonfree/blog/ai/inpaint/inpaint_result.webp)

{{< smalltext >}} Result {{< /smalltext >}}

{{< /columns3 >}}

### Out painting

Need a bigger picture? Out painting can be used to extend an image beyond its original borders. Check out the timelapse DALL·E building up a massive version of *Girl with a Pearl Earring* by Johannes Vermeer at https://openai.com/blog/dall-e-introducing-outpainting/.

### Making GIFS

{{< columns >}}

![travel-00013](/nonfree/blog/ai/anim.webp)

<--->

No artist could reasonably do this. This is effectively a new art form.

There's multiple takes on this. Some will navigate though different prompts on the same seed, some will change the seed on the same prompt (like the example here)

{{< /columns >}}

### Upscaling

Upscaling tools have been around for a while now, but along with the rise of the new AI art models they have gotten much better. There's a huge number of different algorithms for doing this upscaling, but the gist is they take a low resolution image and make it much higher resolution, adding in details. These images do not need to be originally generated by the AI tools. You can upload an existing picture. Here, I've generated an octopus picture with Stable Diffusion and then upscaled it.

{{< columns >}}

![Original](/nonfree/blog/ai/octopus.webp)

<--->

![upscaled](/nonfree/blog/ai/upscaled.webp)

{{< /columns >}}

You'll notice the upscaled version has dramatically less noise in the image, which actually makes the octopus look slightly less natural.

### Where the AI models struggle (for now):

#### Ref sheets & custom characters

{{< columns >}}

So far as I can tell, you're probably not going to be using any of the AI art tools to make a reference sheet for a character, nor be able to get it to generate images that consistently have the appearance of a custom character. Traits will change, details will be lost. There's a lot of money to be made in character design, and at least for now, I don't think these tools will be able to make these or use them to make original art.

<--->

![veganewref](/nonfree/character/veganewref.png)

{{< attribution >}}Character owned by me, art by [@Talon_Creations](https://mobile.twitter.com/talon_creations){{< /attribution >}}

{{< /columns >}}

This might be different if you have an extremely generic character such as "red head with big muscles" or "a white wolf with red eyes", but otherwise, no way.

It also tends to suck at pieces with many characters. It likes one subject, maybe two, in the piece.

#### Counting

Getting a specific number of anything can be difficult, especially body parts (eyes, legs, etc.). This otter should have 3 eyes, but convincing the model to actually add those eyes is tough.

{{< columns >}}

![otter3eye](/nonfree/blog/ai/otter3eye.webp)

{{< smalltext >}}`portrait of an otter with (((three eyes)))`{{< /smalltext >}}

<--->

Changing the text to a number and doing a few more generations, I eventually ran into this:

![otter3eye](/nonfree/blog/ai/otter3eye2.webp)

{{< smalltext >}}`portrait of an otter with (((3 eyes)))`{{< /smalltext >}}

{{< /columns >}}

#### Body horror

{{< columns >}}

If you look closely above, you'll notice the Octopus image generated for the upscaling example has a tentacle that forms a loop. Now, in the AI's defense, an octopus is a pretty hard prompt, still, getting extra or incorrect limbs is a pretty common occurrence. You'll also occasionally find doubled up torsos, weird eyes and mouths, and unsettling numbers of fingers. Generally, there's plenty of body horror to be found. The following examples are actually on the pretty tame side. You'll often get some really, really creepy things out

<--->

With my experience using Stable Diffusion, It does particularly poorly if you attempt to generate images outside of the size the model was trained for (512x512, square images).

![The Faces](/nonfree/blog/ai/bodyhoror2.webp)

{{< smalltext >}} `((Portrait)) of a ((single)) Anime waifu with long Iridescent hair and sharp facial features  singing into a studio microphone and wearing studio headphones, in a recording booth` - Using Waifu Diffusion{{< /smalltext >}}

<--->

![doublebust](/nonfree/blog/ai/bodyhoror1.webp)

{{< smalltext >}}`A couple getting married, wedding, alter photo, dslr, photograph`{{< /smalltext >}}

{{< /columns >}}

#### Text

{{< columns >}}

While these examples are a bit extreme as they explicitly ask for text, the point stands that generating anything with text on it (t-shirts, mugs, etc) - intentionally or not - tends to make people feel like they might be having a stroke.

![worldsbestdad](/nonfree/blog/ai/worldsbestdad.webp)

{{< smalltext >}}`A coffee cup that says "Worlds best dad!"`{{< /smalltext >}}

<--->

![newspaper](/nonfree/blog/ai/newspaper.webp)

{{< smalltext >}}`Newspaper headline story, "Boy in hot air balloon"`{{< /smalltext >}}

{{< /columns >}}

This may be changing soon, see [Nvidia’s eDiffi is an impressive alternative to DALL-E 2 or Stable Diffusion (the Decoder)](https://the-decoder.com/nvidias-ediffi-is-an-impressive-alternative-to-dall-e-or-stable-diffusion/). I don't imagine it'll be spitting out full comics any time soon, but I could be wrong.

#### 3D art

3D art is getting there, and getting there rapidly. There are papers where it's been done - see https://deepimagination.cc/Magic3D/ - but currently they're all a bit... off? Regardless, it's already to a point where I'd expect it to be hitting 3D artist's workflows within a year.

## So it's not just generation?

Clearly. Even just generating subtle variations of your art or restyling it is possible. If you only think of it as a text-to-image tool, it's clear why it can be seen as something coming for artist's jobs, but it's not. It's a lot of different tools, and many of them are directly useful for creating original art. The resulting art won't be human or AI made. It'll be both. That's a reality we're going to have to get used to. All of this is useful as a tool to help make art mixed with traditional tools. This is not black and white, it's shades of gray.

## It moves the barrier to entry.

For most hobbies/professions, there are barriers to entry. For some it's expensive equipment, for others it's training and hard work to acquire a skill.

AI art does something weird: it makes generating good looking art so easy that unless you want to pour tens of thousands of hours of practice in, you're not going to outdo it (for *most* styles, lot's of disclaimer here). At the same time, it allows people who would otherwise not make any art to make art via tools that have not previously existed.

Calling this a barrier to entry is wrong I guess, what I really mean is a barrier to personal relevancy: if I wanted custom art of something before, my options were either to learn to make good art (thousands of hours, one time cost + dozens of hours per piece) **or** to commission someone who is already good at that art (potentially expensive). In either case, if I don't **really** want that art, I'm not going to spend the time or money. For the casual desire of custom artwork, AI art models move that barrier from the sky to the floor.

From a life of the hobby perspective, this means less people will learn to make art in the traditional way because, for their use case, a tool to do all they need exists.

Related to this, the barrier has moved in another way: the cost of generation isn't free.

Want to use **DALL·E**? 115 image credits is $15. Not crazy, but not free.

**Midjourney**? $10/Mo for ~200 or \$30/mo for unlimited.

**Stable Diffusion**? Well, that's free-ish. Problem is, you'll probably want to run it locally, which requires a really, really beefy graphics card. I was struggling to run it on a Vega56 - a GPU that goes for ~$150 used now - so I went out and got a RTX3090 for about \$1,000. If you're already a gamer with a GPU with 8Gb+ of VRAM you're probably good, but for most people this is a bit absurd. It's even worse If you want to train your own models to make specific-purpose models ([such as these, most of which are NSFW](https://rentry.org/sdmodels)).

## The photography analogy

I don't know who said it first, but this entire problem isn't a new one. This has all happened before such as when artists got up in arms because the camera was coming for their jobs as portrait artists. And you know what? They were right. It cost them money and lowered the need for painters. As a society, we gained the ability to capture moments instantly. Eventually this turned into recordings (and something in between, like "Live Photos") and the idea of hiring a painter to come to events to get a picture sounds incredibly foreign. If the goal is to capture life as it is, the camera is clearly more accurate than any painter.

The camera also spawned a new industry, as operating one well - while it is getting easier - is still an art in it's own right and so photography is a business.

Where AI image generators enters the picture (pun mildly intended) is still fuzzy. What industry will it most displace and alter? As much as artists fear it, the answer could well be photo editing or colorization of film.

But, to wrap back around to the larger point: did the invention of the camera entirely end the desire for painted artwork? Of course not. It dramatically lowered demand for portraits, but over time the lower cost of photography also meant more money on hand for art works with actual creative intent instead of those simply aiming to capture still headshots. I don't think there are many artists who'd want to paint headshots in the same style every day for a living.

AI art models may have this same effect: picking some of the low hanging fruit so that artists must climb up the tree of originality and expression to justify their works. This is related to the barrier of entry above, but I think it finally lets me state the biggest takeaway from this entire post:

AI art will replace demand for artwork that artists made in bulk anyway. It will not prevent those with a passion for making art from making it.

## Is it replacing something valuable?

Artists, please hear me out. How much Furry Pron is out there? Even before AI I'm convinced we've exceed the rate of output where a single person, with their eyes glued to a screen unsleeping, could spend more than a second appreciating a given Furry Pron piece and still get though the existing body of work in a single life time.

I'm not saying an individual artwork isn't worth anything. Drawing custom characters in various trendy poses does take time and effort.

I'm saying, globally, supply and demand is not in your favor. This could easily descend into a conversation about economic systems, capitalism, and the how art is undervalued, but no matter how much I write about those, I can't change the state of things.

Your art is valuable, but in the emotional sense. Monetarily, there's a reason artists - even really good artists - often struggle to get minimum wage. It's wrong, it sucks, but ultimately custom art is a luxury good that takes many many hours to make, and to make it broadly palatable price-wise, the prices have to be that low. I hate this too! My SO is an artist (went to school for it, works at a restaurant) and I'm a musician (as a hobby, an engineer by trade) and we make diddly squat on our artistic passions, and not for lack of effort or time put into it. I worked my ass off to make an album that has sold once. Making art is to be human. To want to share it is just as human. If everybody makes art and everybody shares it, the market for it is abysmal. The addition of AI models does make this problem worse right?

## ... right?

If you're already doing the work for less than minimum wage, does it being free matter? I'm asking that as a real question, not rhetorical. Do you care if the people that already weren't willing to pay you above minimum wage now have a tool that will generate something of lesser-but-near quality to use instead? Maybe you do, maybe you make art in a way where you are making above minimum wage, either by high prices or by doing it incredibly fast. I'm not trying to give you an opinion, I'm trying to help you ask the questions to make an informed one.

Another thing to consider: will it actually lower your sales? Could it have the opposite effect even?

If someone generates something *close* to what they want but just can't convince the model to get it to where it needs to be, they can now send you, the artist, a reference and say what they want to be changed. This may mean you get work you wouldn't have at all otherwise.

It also serves to allow projects that would otherwise be blocked due the costs of artists to get started. That is, by *not paying for art*, different ideas can be lower risk to try. For example:

{{< columns >}}

![monsutawip](/nonfree/blog/ai/monsutawip.webp)

<--->

*Monsuta* is a module I've been working on for [VCV rack](https://vcvrack.com). I needed panel art for it and while I could either draw something myself or pay an artist, the former cuts into my available development time and the latter would be a financial cost on something I have no idea if I'll see any reward for. Plus I may have needed many iterations as positions of knobs, switches, etc changed on the panel. This design, which I made with Stable Diffusion<footnote>Only the background. The font is <a href="https://fonts.google.com/specimen/Pirata+One/about?preview.text=monsuta&preview.size=98&preview.text_type=custom">Pirata One</a> and the components (knobs, switches, etc.) are bundled with VCV rack for use by module developers.</footnote>, cost me nothing more than a few image generations and a couple of minutes to convert it to an SVG. 

{{< /columns >}}

If I hadn't had an AI model available to me, it would've just gotten worse art or a basic, solid color background.

This situation, where the AI is generating art for places that would otherwise have little or none, is something I think will be quite common. Talking to [Xe Iaso](https://xeiaso.net) about this prior to publishing, xe mentioned that on xer blog that xe has used AI generated artwork frequently. This apparently lead to some friends having gotten a bit uppity about it being generated, until xe pointed out that xe wouldn't have paid for human made art anyway. It wasn't AI art being used as an alternative to human-made art, it was AI art being used as an alternative to an otherwise plain page.

## It's far from "replacing" anyway, yet

Frankly, while the current models can and do spit out some damn good art and realistic looking photos, style dependent, it's still far from beating human artists. Photo realism? Yeah, you're probably out a job. Digital art? I don't think so. Plus, once you want something specific enough, the AI won't be able to do it. If you just want a wolf in a suit, sure. If you want a Wolf in a suit using a synthesizer, maybe. If you want a wolf in a suit using a Nord keyboard with a fox drummer with two kick drums and an otter guitarist playing a Les Paul with a whammy bar on a stage with colorful lighting? No way in hell. It's the little things that make art good, and getting those specific details isn't going to happen, at least not yet.

Plus, this is only digital art. The AI isn't coming for your paint brushes or your needle and thread, nor your stained glass, sculpture, etc. It may assist in 3D modeling soon, but it doesn't take away your ability to be creative.

## Digital art's image problem

I have talked to a few artists that specialize in digital art in the past that have talked to me a lot about how people don't take digital art seriously. That some people say "it's not real art" or that "it's cheating". I'm not oblivious to the introduction of AI tools harming the reputation of digital artists even further. I also do

n't have a good solution here. I'd love to say just ignore the haters, but that only goes so far. If the introduction of AI makes it so that artists that don't use it can't stay competitive, this will be extra difficult to deal with for artists as they're forced to use a tool which their industry is criticized for using.

I would like to think that after a few years, it becomes a minority of people that are seen as having a bad opinion - similar to the "electronic music isn't *real* music" crowd. It's still too early to say if that will happen though.

## Copyright & Fair use

{{< tip >}}

The following section is probably the most controversial on this page. If you disagree with what you're about to read, that's great! I'd love to hear why you think what you do and advance my own opinions as well. I'm here for debate and learning, not to say I'm right. 

{{< /tip >}}

{{< bigquote "A mutual in a telegram chat" >}}

It's a tool that uses other people's work without permission! AI pictures have even tried copying watermarks before!

{{< /bigquote >}}

<div style="float:right;width:30%;padding: 10px 4px 10px 25px;">

<img src="/nonfree/blog/ai/copyleftnewlogo.svg" alt=" ">

{{< smalltext >}}`copyleft open source symbol gnu linux free software piracy theft crow bird talon logo minimal`, Bit map traced in inkscape to convert to SVG.  CC0, Vega Deftwing (Feel free to steal this one){{< /smalltext >}}

</div>

Due to the way the model works, just because a watermark is present, doesn't mean it's at all related to the art generated. With the way the model works, it doesn't draw inspiration from one source or draw inspiration from specific pieces. If a recognizable watermark appears, it's because the model has found that pictures with watermarks in general tend to look better/match your prompt, and so generates one. There *can* be relationships - if you ask for a generic corporate art picture you might see a Shutterstock logo - but if there's a large pool of artists making art that is valid for the prompt then the particular watermark is unrelated. It's effectively random chance.

Now, that does leave the moral question of training on watermarked photos, but the act of training a neural network on datasets like this has already been decided to be legal and for good reason:

If it wasn't, then all artists are using other artists work without permission as they draw upon past pictures they've seen mentally, from memory, to envision what their subject even looks like. If you draw a piano, do the brands that have designed every piano you've seen in your life get shared copyright of the final piece? Of course not. The AI model is no different in function<footnote>This is a bold claim, I know. Clearly, there's some distinction between a mechanical and biological process at the very least. You're free to reject the premise, but if you do, I'd love to know why!</footnote>. It's not some magical file that has a saved picture of every image ever made compressed down. If you can make compression that works that well, you've got something worth a lot more than the art generating capability. While the math-y bits work quite different from how a human brain does, the morality of it is actually quite similar - It's trained on existing art, just like human artists.

Of course, this can get to various shades of gray. In traditional art, you can be just a little too inspired by another piece and it's clearly a problem. Similarly, trademarks are a thing. I'm not going to give examples because where than line is legally and morally aren't one thing and that's a whole essay on it's own.

Clearly, the same thing still applies in AI. If someone makes a fine tuned model without an artist's permission, that's pretty fucked. But it's not like that problem didn't exist before, this just - you guessed it - lowers the barrier to entry for doing so. It also allows for it do be done en mass, which is pretty bad.

On the flip side of this copyright conundrum: currently the unmodified output of an AI model can not be copyrighted, at least in the US. This means if you just generate a picture and directly post it online, anyone is free to steal your work. They can put it on a t-shirt and sell it, and you can't do anything about it. This is the total opposite of the status quo in the US, where by default you get copyright on anything you make and you have to go out of your way to make it public domain. See [U.S. Copyright Office Rules A.I. Art Can’t Be Copyrighted (Mithsonian Magazine)](https://www.smithsonianmag.com/smart-news/us-copyright-office-rules-ai-art-cant-be-copyrighted-180979808/).

## "I'd rather look at art made by a human"

{{< columns >}}

This is a really hard argument to even talk about because it lacks a "why" that we can put in any scientific sense. If art is really good and we find out that - while it does require some human input - it is done via AI, we feel cheated or we feel that the creator cheated.

Recently, [someone won a state fair with AI art](https://www.smithsonianmag.com/smart-news/artificial-intelligence-art-wins-colorado-state-fair-180980703/), but he didn't tell them that ahead of time. We were unwittingly pitting human against machine and for reasons that are hard to explain, that feels wrong, right?

<--->

![womandrawing](/nonfree/blog/ai/womandrawing.webp)

{{< smalltext >}}`An artist using a digital drawing tablet`, yes, this is still Stable Diffusion.{{< /smalltext >}}

{{< /columns >}}

Similarly, there's now quite a few Pron subreddits that are entirely focused on AI generated imagery. For example, [r/MonsterGirlAI (NSFW, obviously)](https://www.reddit.com/r/MonsterGirlAI/). We're letting computers make something that we find sexually interesting. Sure, if you're in the act you can just not think about it, but afterwards? You have to come to grips with having just waxxed your carrot (or having completed a finger painting) when looking at pictures that a human didn't even draw. There is something about that which sets off alarm bells in the same uncanny valley section of my brain which some humanoid robots do, while the images in that subreddit themselves don't. It's uncomfortable.

Ultimately, we're implying art "generated" by a human is better than art generated by a machine for some intrinsic quality that we can not measure. You could claim it to be scarcity, but in what sense? We've already established there's more art than anybody could view in a lifetime being produced at a rate exceeding our ability to view it as humans.<footnote>Technically, I don't know this to be true, but if it's true for number of minutes uploaded to YouTube per second, I'd at least assume it to be the case.</footnote> What does adding AI matter if that threshold has been crossed?

This gets deeply philosophical quickly, and while I'm usually quick to dismiss this line of thought, I don't think that's the right call here. Something about the knowledge of the effort by a human adds value even if the end result is exactly the same.

This, I think (though don't know) is the true reason why so many people are uncomfortable with AI art. It's good enough to pass. Often, you can tell if an image is AI generated visually, and if by nothing else, the embedded metadata added with most existing tools. But, sometimes, you can't. That means we can feel deceived into thinking someone put more effort into their work than they truly did, and we as a society aren't used to valuing art not made by man. This makes us be skeptical of the value of any artwork we see, lest it be made my a machine.

I suspect this is something that those of us that have been brought up in a culture without this will never know how to respond to or feel about, and the coming generations will find natural, leading them to find ways to use these tools to do things we can't imagine.
