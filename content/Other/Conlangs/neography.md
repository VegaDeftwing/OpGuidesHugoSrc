

# Neography & Conlangs:<br>Constructed Information Exchange

TODO: Papers from https://modlang.unl.edu/dr-isabel-vel%C3%A1zquez, https://modlang.unl.edu/dr-patricia-simpson, 

Complete reading Art of Language Invention

Mention intonantinon - how does that work in written text?

I want to make all of this less English centric.

TODO: Why are there multiple programming languages.



<link rel="stylesheet" href="/css_overrides/light.css">

I would like to exchange information with you about the exchange of information. If you would like to continue this information transaction please continue scanning these symbols with your eyeballs and interpreting them in the language you think they are meant to encode using your past knowledge and cultural context. 

---

Broadly speaking, what is the purpose of language?

To communicate ideas and knowledge.

Now, *usually*, the intent is to do this:

* As accurately as possible
* As succinctly as possible 
* As unambiguously as possible 
* In a way that humans can pronounce

Additionally, natural languages will:

* Reflect their culture
* Evolve over time
* Have non-conformities in spelling and pronunciation
* Have a writing system that is capable of being written by humans

Now, some of those can interfere. If we strive for absolute accuracy and no ambiguity, we increase verbosity. Requiring humans to write them may limit how well machines can read them.

What I want to explore on this page is what others have done, limitations and hacks used in language today, why someone might want to make their own language and/or script, and what we can learn from their work. This includes everything from scripts made for fantasy novels to programming languages and music notation.

## Exploring Existing work

I already have a page on this website about {{< button relref="Other/conlangs/tokipona" color="other" >}} toki pona {{< /button >}} , one **con**structed **lan**guage or "conlang" that I particularly enjoy. Being in its community I've been introduced to many interesting ideas in the conlang and the adjacent **con**structed **scripts** (conscript) communities - also sometimes called "**neoscript**", I assume to avoid the existing usage of the term meaning to enlist in the armed services

{{< columns >}}

In these communities, I have seen some absolutely unhinged ideas:

<img src="/other/burgerscript.webp" style="border-radius:1em;">

<--->

</br>

Of course, most of what's on display here isn't this ridiculous. Some of these neoscripts are for conlangs - fully new languages that need their own writing system as no existing system would even work.

Some only make new symbols for existing alphabets - like BurgerScript. 

Some dramatically challenge the idea of what it means to "write" something. 

Some are used for building a world and culture in a fictional story: like Elvish in Lord Of The Rings.

Some serve as a form of artistic expression.

{{< /columns >}}

Some are an attempt to make a writing system that [fits an existing language better](https://www.omniglot.com/conscripts/finnishscript.htm) than system used today. 

Some are made to allow for sharing or concealing messages in mediums that wouldn't normally be thought of as places thoughts could be recorded at all.

### Conlangs

There are a few categories of conlangs:

* Those that try to act as "a global lanugage for all", formally called "International auxiliary languages"
* "Engineered Languages" usually try to make a language that's all about making it as good as possible given some restrictions or intended use case.
* "Artistic languages" - Like for TV, books, etc.

For the purposes of this page, I think engineered languages are the most interesting.

[TODO conlang critic]

I think I need to talk about a few interesting conlangs and what makes them interesting. 

* Tokipona - 
* Esparanto -

So, let's look at some scripts, what makes them interesting, and talk about what we can learn from them.

To get started, I want to look at scripts that have particularly interesting applications - that is, scripts which exist because the typical writing systems don't work well where they're used.

### (Somewhat) Practical Neoscripts

There's one of these you probably already know of, as you've probably seen a fair number of 7-segment displays in your life.

<span class="conlang" style="font-size:1.2em;">󿜿 󿜆 󿝛 󿝏 󿝦 󿝭 󿝽 󿜧 󿝿 󿝯 󿝷 󿝼 󿜹 󿝞 󿝹 󿝱 󿜽 󿝶 󿜅 󿜞 󿝴 󿜸 󿜫 󿜷 󿝫 󿝳 󿝧 󿜱 󿜭 󿜇 󿜾 󿝪 󿝾 󿝉 󿝮 󿜛 󿝙<span>

Now, you could probably debate if this is a new script or just a font, since clearly the intent is to show Latin characters - but because of the limitation being so severe, I think it counts.

But, more true to the actual spirit, lets start with [HexCasting](https://www.curseforge.com/minecraft/mc-mods/hexcasting), a Minecraft mod which requires the user learn to write spells into this hexagonal grid,

![](https://media.forgecdn.net/attachments/456/342/screenshot1.png)

Okay, neat, but maybe that's a contrived example - it's solving a problem that could've been done by just letting the user type out commands (albeit that would be less fun). So, what about working around a real limitation...

[Pixelscript](https://omniglot.com/conscripts/pixelscript.htm) exists for people working on pixel art. At extremely low resolutions, there's just not room to add a normal signature and have it be legible anyway <a class="ptr">(1)</a>. Unlike with the 7-segment display Script/Font, this doesn't try to look like an existing alphabet.

![img](https://omniglot.com/images/langsamples/udhr_pixelscript.gif)

{{< attribution >}}From [omniglot.com](https://omniglot.com/conscripts/pixelscript.htm). Text is *"All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."* which is Article 1 of the Universal Declaration of Human Rights{{< /attribution >}}

Of course, there are other cases of fitting in writing when the tools or space for doing so are limited. I particularly like [Nailscript](https://omniglot.com/conscripts/nailscript.htm) for its simplicity in construction, compactness, and use of the 3rd dimension as nails lay over one another. 

When I tried writing my name I did realize you might want to wear ear protection when using this script!

![NailScript for English - Single Row Version](https://omniglot.com/images/writing/nailscript1.gif)

![Sample text in the Nail Script - Rats Nest style](https://omniglot.com/images/langsamples/udhr_nailscript4.gif)

{{< attribution >}}Again from [omniglot.com](https://omniglot.com/conscripts/nailscript.htm), and again this is Article 1 of the Universal Declaration of Human Rights {{< /attribution >}} 

As you can imagine, there's many more of these, but maybe Nailscript got you thinking, there's another use here: hiding messages. We'll talk about this more when we get to "why you might want to do this yourself" section.

## Limitations of Hacks

### Music

Sometimes people will say that "Musical notation is a universal language among musicians"

and, uh, I have to call BS. It's <s>great</s> fine if you want to convey the idea as expressible by the instruments of western traditions for classical arrangements, but it's not universal. Its popularity sure helps, but that popularity does mean many ideas which probably shouldn't be written or evaluated with the script are stuck using it. So, what else is there?

Well, most any guitarist will be familiar with tabs,

<pre>
e|---------------------------------------------------------------|
B|---------------------------------------------------------------|
G|-----------------------------------2---------------------------|
D|------------------2------4---5--4-------5---4--------2---------|
A|---------------------------------------------------------------|
E|---------------------------------------------------------------|



e|---------------------------------------------------------------| 
B|----2--3--2--2-0-----------------------------------------------| 
G|--4--------2-------------0--2------0---------------------------| 
D|-------------------0---2------4--2---4--2-4--------------------| 
A|-----------------2--------------------------5---7--------------| 
E|---------------------------------------------------------------|

</pre>

{{< attribution >}}

Part of the theme for the Halo games, ripped from ultimate-guitar.com, which is a dumpster fire of a website which I will not link directly to.

{{< /attribution >}}

Which can have various flavors of markings, including using `~` for vibrato, putting `X`'s above the lines for palm mutes, `/` for sliding from one fret to another, etc. It's a bit crude compared to sheet music and requires your guitar's tuning match the one listed, but it's quite easy to read.

But music today is often made in a piano roll,

[TODO] picture

and has historically been made in trackers,

[TODO] picture

In either case, the notes can carry a lot of added information - pitch bend (now sometimes per-note) and multiple data streams to represent the virtual turning of knobs. That interface is a writing system of sorts - you could even argue different input devices and instruments, as long as they're just giving a computer digital data, are really just different writing utensils.

There have been some efforts to make new music notation systems [Hummingbird](https://www.hummingbirdnotation.com) and [Clairnote](https://clairnote.org) both make moderate improvements (depending on who you ask) to the existing common music notation system, but don't really attempt to totally reinvent the wheel. [Dodeka](https://www.dodekamusic.com) goes a bit further, but mostly feels like an advert for a piano that just flattens the keybed.

{{< columns >}}

Where things can get more interesting is in attempts to use microtonality, (more than 12 notes per scale), but, again, most implementations are just modifications to common notation.

<--->

<iframe width="100%" height="250" src="https://www.youtube.com/embed/y_nQgNKSl5Y" title="Rare Chords: Supermothrian Polychords | Maj7b4b8♮13‡14⇂16b23 (harmony in 31-edo)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

{{< /columns >}}

{{< speech >}}

This I find frustrating. Musical notation, I feel, needs some help to convey information as our musical ideas become more dependent on the changes in timber and tonality that are possible with effects and synthesizers in a way the notation that is so old just can't keep up with.

{{< /speech >}}

I should also point out there are other musical notation systems from cultures I am less familiar with. The [Musical Notation Wikipedia page](https://en.wikipedia.org/wiki/Musical_notation) shows some of these, but I'm not even sure how to go about research most of these in depth.

https://ofb.net/~elaforge/karya/doc/overview.md.html

microtonal stuff

Orca + that hex one

### Everyday use, Emoji, Math, ...

{{< speech triode >}}

Okay, but, what about Emoji? 🤔

{{< /speech >}}

Well, yeah, they're a writing system. They may not be incredibly precise if the exact symbol you need doesn't exist, but they can be rather information dense. 

👔💼🔜🏠👉👌 👨‍❤️‍💋‍👨 🍑🍆❓

Is a pretty clear message.

I think the better question is, where do you draw the line? Personally, I think the definition of what should be considered language should be pretty board. It clearly includes this text itself and most of the writing systems above. It obviously includes speech, braille, sign language (it's, uh, in the name), and I think most would agree that both math and music constitute "language"

{{< columns3 >}}

{{< katex >}}

x = a_0 + \cfrac{1}{a_1+ \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cfrac{1}{a_4} } } }

{{< /katex >}}

</br></br>

{{< smalltext >}}{{< button relref="Engineering/WrappingUp/latex" >}}{{< katex >}}\LaTeX{{< /katex >}}{{< /button >}} was used to format this math, it's pretty much the language for typesetting math digitally.{{< /smalltext >}}

<--->

{{< smalltext >}}[SMuFL](https://www.smufl.org/fonts/) is used to display this music on the web - it's basically just a really clever way of (ab)using fonts.{{< /smalltext >}}

{{< /columns3 >}}

Now, this isn't to say there aren't some definitional lines. I don't think I'd consider a video a language - a medium on which multiple different languages can be expressed, sure - but not a language itself. Where I think the line is significantly more blurry, espically as you dive into data visualization and interactive content.

Plus, those - like the {{< katex >}}\LaTeX{{< /katex >}} above - have the fun of being a language which is has another language used to write it. I don't think that disqualifies them as languages (or at least writing systems) after all, if you have Google Translate translate something from English to Spanish, (and it works) it's not as if we think of the result as just "modified English" - it's Spanish.

Yet, there is still some fun to be had in this line of thought. If I type out 

"Hello World"

That string of text is being stored, transferred across the great series of tubes, and being understood by your computer as Binary. Does that make binary - or any base for that matter - it's own language? What if we display it in an interesting way like Hobbits does, as shown above?

Does showing an audio spectogram qualify as a writing system? I think it can. Someone trained to do so could absolutely look at waveform or spectogram of a recording to understand what was being said - this idea has been taken further, see [Elektrum (omniglot.com)](https://omniglot.com/conscripts/elektrum.htm).

This quickly devolves into interpreting encodings as their own "language" which, like, I *guessssss* could have an argument made for, but it's a stretch. Still, I think there's value in the metaphor, and especially for the technically inclined, thinking about encodings and APIs as forms of communication and taking inspiration from the conlang and conscript/neoscript community can only stand to bring about clever, innovative ideas in storage, compressing, representation, and elegance. I think that's worth being open to. But lets come back to that - 

{{< speech triode >}}

What about fonts?

{{< /speech >}}

Note on fonts being this but baby steps, with some being pretty wild - espically with ligatures

Music fonts... I forgot what these are called.

tools of communication - keyboards, hand gestures, voice, graphs, braille, etc. What weird ones exist?

Encodings

### Tone markers & txting styl 

If I'm in the car with someone and they ask me to send a text for them, I get uncomfortable because I don't know *how* they text.

Think about texting someone young that you've texted every day for years, they *probably* don't normally put full stops/periods at the end of sentences, so when they text

> Hey. We need to talk.

That's a different text from

> Hey we NEED to talk

Which is different from

> hey. we need 2 talk

I mean, most people would find any of the above alarming, but 1. probably has you going "Ah shit." while 2. has you frantically trying to figure out why and hoping that it's not something you did, while 3. might have you concerned about their happiness.

Related, usage of `\s` and other [tone markers could be better](https://www.youtube.com/watch?v=3bYXy1jT3m8).

So, what if we just had some additions to the way we represent text? I'm not going to pretend to have any good ideas for what this would be, but 🤷‍♂️ it's a thought.

Somewhat related, I really wish emoji would display consistently on different platforms. It boggles my mind that it's a crap shoot for if 🏳️‍⚧️ is a trans flag, or a trans symbol followed by a white flag (⚧️🏳️). Pride or surrender? 

## Why Someone Would Make Their Own Language (or script)

### Hiding Messages

Hiding messages is an art form of itself, and can have a myriad of different requirements:

* Maybe you want any onlooker in the know to be able to decode the message
* Maybe you want it to be difficult to see there's a message at all
* Maybe you want it to be obvious there's a message and make it difficult to decode
* etc. etc.

This does start to go into a conversation about [steganography (Wikipedia)](https://en.wikipedia.org/wiki/Steganography). <a class="ptr">(2)</a>

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Steganography)" >}}

**Steganography** is the practice of representing information within another message or physical object, in such a manner that the presence of the information is not evident to human inspection. In computing/electronic contexts, a computer file, message, image, or video is concealed within another file, message, image, or video.

{{< /quote >}}

{{< columns >}}

I have even made a tool for hiding binary data into the least significant bits of .WAV files (and it's even GPU accelerated!), and I suppose that means you could do something like stack ideas, using one of the few-pixel fonts with a binary data visualization tool like hobbits (pictured) but that's a bit meta.

<--->

![](https://github.com/Mahlet-Inc/hobbits/raw/master/docs/hobbits_screenshot.png)

{{< attribution >}}Example image from [the Hobbits Github repo](https://github.com/Mahlet-Inc/hobbits){{< /attribution >}}

{{< /columns >}}

To avoid losing the topic of this page, let's look at a few scripts that fill this function:

* [Babuk](https://www.omniglot.com/conscripts/baduk.htm) can be used to hide messages in a game of Go

## Same language, new system

Intriguingly, some neoscripts use an existing language but instead of just mapping the letters to new symbols change the way we think about a 'character' all together. 

<div style="float: right; width: 30%;">
<img src="https://www.omniglot.com/images/langsamples/udhr_fontok.gif" style="border-radius:.4em;filter: sepia(40%) hue-rotate(-50deg);">

{{< attribution >}}Example text in Fontok. Again, this image is from [omniglot](https://www.omniglot.com) and is Article 1 of the Universal Declaration of Human Rights{{< /attribution >}}

</div>

Of these, I particularly like [fontok](https://www.omniglot.com/conscripts/fontok.htm) which adds a significant number of characters as each *sound* (not character) in English is given its own symbol. Of course it doesn't hurt that text written in fontok is breathtakingly beautiful.

<br style="clear: both;">

## World Building & Art

Getting into the more artistic uses, in *[The Art of Language Invention](https://www.amazon.com/Art-Language-Invention-Horse-Lords-World-Building/dp/0143126466)* by David J. Peterson - the guy who made Dothraki for *A Song of Ice and Fire* / *Game of Thrones* - discusses how Dothraki wasn't just a jumble of foreign looking language ideas but was informed by the culture of its fictional speakers and built up around their ideas and values. This same attitude applies to the script [which is on omniglot as well](https://omniglot.com/conscripts/dothraki.htm). 

Perusing omniglot there were some scripts that stood out to me as having a strong "for non-humans this would be good" flavor - these really make sense if you want to make a world feel alive for more than just the humans in it.

* [Scar](https://www.omniglot.com/conscripts/scar.htm) looks to be a good option for creatures lacking the dexterity afforded by fingers
* [12480](https://www.omniglot.com/conscripts/12480.htm) looks well suited to something which would communicate with binary but need a way for it to be legible to meat-based creatures if necessary.

There are many, many more that have been used for creating fictional fantasy or sci-fi stories of course. The most obvious that everyone knows is Tolkien's various languages from the *Lord of the Rings* trilogy and related works, such as Quenya (which is written in Tengwar),

<div class="conlang">
    <blockquote>             </blockquote>
</div>

{{< attribution >}}This font is [Fairfax HD](https://www.kreativekorp.com/software/fonts/fairfaxhd/) by [KreativeKorp](www.kreativekorp.com), which is licensed under the [open font license](https://github.com/kreativekorp/open-relay/blob/master/FairfaxHD/OFL.txt) It is used for all of the conlang displays on this page which are not static images. Some of the examples on this page are also copied directly from that page. {{< /attribution >}}

Of course, even for humans just having a new script and language alone can go a long way. 

Interestingly, even the discussion of language itself can be moving and artistic, as anybody who has seen Arrival (2016) can attest to,

<img src="/other/arrival.webp" style="border-radius:.4em;filter: sepia(70%);">

More fundamentally though, a script with meaning only to the author can still be beautiful. The calligraphy and attention to detail can still be inspiring even if the viewer doesn't know the full meaning. Hell, sometimes not knowing the meaning can be a statement in itself - making a script that looks like an existing language for commentary on a culture isn't unheard of. It's also not uncommon to hear songs using words in a meaningless (or at least grammatically incorrect) way for how they sound.  

On top of this, some tools which effectively have their own language for interacting with them can inspire new art because of the limitations or paths of least resistance of the language. On that note,

## Domain Specific ~*Languages*~

In programming, there's this idea of domain specific languages. These are programming languages that don't really do everything - instead they do one thing really well. The most famous two are [regex (Wikipedia)](https://en.wikipedia.org/wiki/Regular_expression) and [SQL (Wikipedia)](https://en.wikipedia.org/wiki/SQL). I think you can apply that idea can apply in other niches too. If you think about *speech* vs *writing* vs *signing* vs *braille* and how each can have multiple co-existing (or competing) standards / systems, it's really not a stretch of the imagination.

My friend jan Usawi recently made a fantastic language called {{< button relref="Other/conlangs/rhapsodaic" color="other" >}} Rhapsodaic {{< /button >}} which is detailed on this website, but as a TL;DR: Rhapsodaic, as a core design philosophy, values preserving emotional meaning over all else... and I mean all. It means the actual meaning <s>might</s> will be ambiguous, but you'll definitely know how the speaker is feeling and it can be said more accurately than in most any other language. It's also very pretty as a script.

Where I see it as particularly interesting is using it along side a native language to either add context or clarity to something that's already written or have it be intermixed, mid sentence, with the native language as necessary - similar to how Regex and SQL are used in programming, sprinkled into other code written in a more capable but less in specific purpose language.

This really got me thinking about what else we could do to make specific languages for talking or writing about different subjects. I mean, to some extent this is already extremely common. From musical notation to circuit diagrams we've agreed on symbols to use as a short hand and each has their own grammar for making sensible structures.



But, I do want to wrap back around to that programming idea briefly. There are some programming languages that are pretty radically different in the way we input and output information, so while they may not be "writing systems" in the traditional sense, I think they're worth a look in this list.



Open SCAD

Orca

Geometry Nodes





If you're into DSLs, 

https://www.omniglot.com/conscripts/conway.htm

Ligatures? Old school ascii art fonts. Emoji + unicode, Visual programming (node based)

Zoia, VCV





Within the realm of what we'd still call language, there's some I want to showcase just for being beautiful

* kelen https://www.terjemar.net/kelen/lajathin.php
* https://www.reddit.com/r/neography/comments/pj8xw4/griddy_script_font_finally_see_comment/
* https://www.omniglot.com/conscripts/sticks.htm
* https://www.omniglot.com/conscripts/beringin.htm
* https://www.omniglot.com/conscripts/chiri.htm
* https://www.omniglot.com/conscripts/keble.htm

Finally, there's some really, really bizzare ones I want to mention

* Pipeline 3D
* Conway Script
* https://www.omniglot.com/conscripts/alfakinetix.php
* https://www.omniglot.com/conscripts/betamaze.htm (also see https://www.omniglot.com/conscripts/patternscript.htm and https://www.omniglot.com/conscripts/spintype.php)
* https://www.omniglot.com/conscripts/6color.php
* https://www.omniglot.com/conscripts/eganes.htm (maybe move this one)

## How does this tie in to the current AI boom?

I don't know if tools like ChatGPT will be something we all use every day. I also don't know if I *like* it. I have a big ol' blog post about it, {{< button relref="/posts/ai2" color="gradient-border2">}} Does It Still Count As A Tool? {{< /button >}} ,
of which the TL;DR is that I like computers to be deterministic and to feel in control, but using natural language makes me feel like I'm losing some of that, but I also appreciate its utility.

I do wonder if there's room (or necessity) for changes to languages and scripts to fill in some gaps here? 

Would it be good to have a sort of water-mark font that is used to say "An AI wrote this" - maybe having a reserved space in Unicode for it?

Obviously, this would depend on people not intentionally putting it back into the "human use" fonts, which would absolutely happen anyway. There might be some cryptographic way this could be done, but that assumes nobody will just run the generators locally to avoid this and that nobody would want to only partially alter the output - so not a great call. Plus this does sound like a massive pain, doubly so for users with accessibility needs.

What about putting tone indication or other elements into the UI or responses?

{{< speech ai >}}

AI systems could incorporate symbols or icons to indicate the tone of their responses. For example, a thumbs-up symbol could represent a positive or affirmative tone, while a warning sign could indicate caution or a serious tone. These visual cues help users quickly grasp the intended tone of the AI's message, even without relying on punctuation or writing style variations.

{{< /speech >}}

I think applying this the other way could be interesting too. What if we had bots to tell us what the tone of a received message probably is? As an accessibility tool that could be useful. Going a little into black-mirror territory, this could even be used to intentionally filter things. If the text to be shown is interpreted as being overly persuasive and so likely to be advertising, it could be rendered in a different font so the user can be trained to know to take it with a gain (or heaping pile of) salt. This could get pretty nuts.

## What happens as we push boundaries

### Completely new forms of expression

Language and the symbols we use to communicate influence the way we think and how we approach problems. If we think of instruments as a writing utensil of sorts, the difference between a guitar and a piano are more than just their sound it's how we interact with them leading to some expressions being easier and harder.

I've already mentioned Rhapsodic allowing for much more emotional expression than existing languages (albeit at the cost of other functions) but I also love how the musical sequencing programming language [ORCΛ](https://github.com/hundredrabbits/Orca) pushes boundaries of creative expression.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DHYL9hojUTQ" title="bequa la froth ~ armadillidiids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



### Radically enhanced expressiveness

* Geometry nodes

### More powerful tools

* Open SCAD
* Regex

### Easier to understand standards

* The music ones

### Inteopability

The ORCA + Ronin + etc system (+ their themes)

### Better exploration of data and connection

* The Hyperlink + Obsidian
* https://docs.kanaries.net/rath/explore-data/data-painter
  * link to Computers Suck section about making web data exposed and rendered locally 

## Why are we **not** pushing boundaries?

* Our input methods have become relatively static (keyboards and the keys on them)
* Our systems are designed for rendering plain ass text and have a hard time with implied style (AST aware syntax highlighting, language servers)
* Legacy compatability - show Arcan/Lash/Cat9

Simple, Fast, Expressive, Style points (does it look good)

Before we wrap up, I want to say there's an *insane* number of scripts I was unable to link here that I thought were more than deserving of being featured. It's also notable that the only language I speak fluently is English, so my ability to even appreciate the scripts and conlangs more heavily rooted in other cultures is significantly more limited. This has lead me to not feature any of the beautiful scripts that are heavily inspired by existing, natural Arabic, Asian, or braille scripts. If you'd like to see more, I highly encourage you to dive into this yourself and take a stroll though the conscript world without my biases filtering it.

## Resources

Obviously this page is littered with links to [omniglot.com](https://www.omniglot.com) and I can not express enough gratitude to Simon Ager for all the effort that must go into maintaining such an incredibly large resource.

Additionally, [r/neography](https://www.reddit.com/r/neography/) has some great posts and is awe inspiring to scroll through.

Other links you may want to check out include:

* http://www.skyknowledge.com/perssonsscripts
* [neography.com](https://neography.info/writing-systems/)

<ol hidden id="footnotes">
    <li>FWIW, I think <a href="https://www.omniglot.com/conscripts/kfg.htm">KFG</a> may be a better choice if you're working at only a moderately low resolution, as while it's still not a text anybody can read super easily, it's more recognizably text at all, and the differention between glyphs makes it a hair easier to read.</li>
    <li>Not to be confused with Stenography, which is the process of writing in shorthand. Most commonly today this term is used to talk about how court reporters use special keyboards.</br>Also not to be confused with Stegography, the process of writitng with the tail of a Stegosaurus.</li>
</ol>


