+++
bookToC = false
+++
# An Interview with Natanya 
## (A.K.A jan Usawi)

<style>
  #toki-pona-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }

  .markdown {
    background-color: #222;
    margin: -2rem;
    margin-top: 2rem;
    padding: 2rem;
    max-width: 54rem !important;
    border-radius: 1rem;
  }

  .book-footer {
    background-color: #222;
    padding: 1rem;
  }

  .book-page {
    padding: 0;
  }
</style>

<canvas id="toki-pona-bg"></canvas>

<script>
  const canvas = document.getElementById('toki-pona-bg');
  const ctx = canvas.getContext('2d');
  const fontSize = 40;

  // Support for surrogate pair characters
  function fixedFromCharCode(codePt) {
    if (codePt > 0xFFFF) {
      codePt -= 0x10000;
      return String.fromCharCode(0xD800 + (codePt >> 10)) +
             String.fromCharCode(0xDC00 + (codePt & 0x3FF));
    } else {
      return String.fromCharCode(codePt);
    }
  }

  // Build the full glyph list (exclude a, li, la if needed)
  const excluded = new Set([0xF1909, 0xF1921, 0xF1927]);
  const tokiPonaChars = [];
  for (let i = 0; i < 136; i++) {
    const code = 0xF1900 + i;
    if (!excluded.has(code)) {
      tokiPonaChars.push(fixedFromCharCode(code));
    }
  }

//   '#009CDF', '#973999','#E23838','#F78200','#FFB900','#5EBD3E'

  const neonColors = [
    '#39ff14', '#ff00ff', '#00ffff',
    '#ff4444', '#ffcc00', '#00ff88',
    '#ff0088', '#8888ff'
  ];

  function seededRandom(x, y, salt = 0) {
    const seed = x * 73856093 ^ y * 19349663 ^ salt * 83492791;
    return ((Math.sin(seed) + 1) * 0.5) % 1;
  }

  // The two long kijetesentakulu characters to fill the top line:
  const longKijetesentakuluChars = ['󱦚                󱦛󱦀'];

  function draw() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = '#181818';
    ctx.fillRect(0, 0, width, height);

    const scrollY = window.scrollY;
    const cols = Math.ceil(width / fontSize);
    const rows = Math.ceil(height / fontSize) + 1;

    ctx.font = `${fontSize}px "Fairfax HD", monospace`;

    starting_characters = "󱦚        󱦛󱦀"

    for (let col = 0; col < starting_characters.length; col++) {
        ctx.fillText(starting_characters[col], col, 0);
    }

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        if (row != 0) {
            const worldY = row + Math.floor(scrollY / fontSize);
            const r = seededRandom(col, worldY);

            if (r > 0.35) continue;

            const charIndex = Math.floor(seededRandom(col, worldY, 1) * tokiPonaChars.length);
            const colorIndex = Math.floor(seededRandom(col, worldY, 2) * neonColors.length);
            const jitterX = (seededRandom(col, worldY, 3) - 0.5) * fontSize * 0.2;
            const jitterY = (seededRandom(col, worldY, 4) - 0.5) * fontSize * 0.2;

            const char = tokiPonaChars[charIndex];
            const color = neonColors[colorIndex];

            const x = col * fontSize + jitterX;
            const y = row * fontSize + jitterY + fontSize;

            ctx.fillStyle = color;
            ctx.fillText(char, x, y);
        } else {
            if (col == 9) {
                const char = longKijetesentakuluChars;
                const x = col * fontSize;
                const y = fontSize;
                ctx.fillStyle = '#00ffff';
                ctx.fillText(char, x, y);
            }
        }
      }
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
</script>


**08/09/2025**

﻿﻿<!-- This document is wirtten in a format called markdown. If you've never seen it before, that's fine. The gist is all the formatting is done in the text itself. Text with **two asterics** around it is bold, *one* is italic, and the things with less than and greater than signs and dashes you see here are comments that won't appear in the final page. if you want a link just do [link text in the square brackets](https://actuallLinkHere.com). If you really want to go nuts, you can technically mix in html too, so things like YouTube, Bandcamp, or Twitter embeds work too. If you want to put in a table, fancy math, colums of text, pictures, or footnotes let me know and I'll get that done for you. -->

<!-- I'd like to have at least one image of your sona or your face to put in the top, so if you could send me something to put there that you have full permision to let me embed on my site that would be lovely. -->


<!-- if there are any questions you prefer not to answer, that's fine! Just put comment tags like this around the question. -->

<!-- <img src="/nonfree/interviews/usawi.webp" alt="Natanya (Aka jan Usawi)"> -->
<img src="/nonfree/interviews/usawi.webp" alt="Natanya (Aka jan Usawi)" style="float:right;padding: 0 1.5em 1em 1em;height:20em;">

<!-- feel free to edit this intro blurb: -->

**Natanya, also known as jan Usawi, is a musician and conlang enthusiast. But that description does not do them justice. They tend to exist right at the intersection of interests, constantly combining new ideas, fascinations, and personal elements that reflect their unique circumstances and identity which itself is a fascinating mix of backgrounds. While it is common to interview somebody for one or two things, Natanya is the kind of fey that is into everything, and knows enough about all their interests to make things that redefine boundaries of creativity.**

{{< iquestion >}}

**Thank you for taking the time for this interview Natanya. How would you describe yourself? What are you passionate about and why?**

{{< /iquestion >}}

Thank you for having me! I'd describe myself as a fey artist with a lot going on at any given time; saying I'm a "multidisciplinary multihyphenate" would be obnoxious, sure, but very accurate. I usually lead with "I'm a musician" if I've got to save on time—it's my longest-standing artistic pursuit, the one I hope to further as a career, and I'd still have multiple hyphens if it were the only thing I did—but I also love creating poetry, fiction, [essays](https://natanya789.substack.com/), [choreographies](https://www.youtube.com/watch?v=fmX5sNR3ZE0), [conlangs](https://lailology.neocities.org/conlangs), drawings, paintings, [TTRPGs](https://fox-with-a-fountain-pen.itch.io/), divinatory/occult systems, and stories and worlds that will (probably) only ever exist as personal daydreams or two-person fandoms. I apparently dabble in makeup art now, also? Good heavens.

That's the -hyphenate part. The list of things on the -disciplinary end is perhaps constantly expanding, but it tends to cluster around some central themes: Philosophy, religion, magic; language, semantics, rhetoric; worldbuilding, speculative fiction, otherworlds, Faerieland as a broad concept; the design of elegant systems and classifications; and feeling real as a cultivatable skill in a world that breeds dissociation. Some more specific areas of study and passion include (but are by no means limited to) cartomancy, Laban Movement Analysis, lesser-known cults, toki pona, traditional astrology, Internal Family Systems, Aristasia, and performance studies and stage presence.

As for why? Because I want to live an artful and magical life, and I want to give myself as good an edge in that fight against the banal as I can. Because it feels damn good not just to know things, but to see connections and common resonances between people/places/things that haven't yet come into conversation with one another (i.e. in Isaiah Berlin's terms, I'm a hedgehog wearing fox's clothing). Because it keeps yielding such beautiful things, and because I can't help it.

{{< iquestion >}}

**You constantly carry a journal and are always writing about your experiences. How long have you been doing so? Why do you do it?**

{{< /iquestion >}}

<img src="/nonfree/interviews/usawijournal.webp" alt="Natanya's Journal" style="float:right;padding: 0 1.5em 1em 1em;height:20em;border-radius: 2em;">

On and off since I was a kid. I think there's always been an escapist element to my love of journals; it's a pretty socially acceptable way to exit a situation without actually exiting it and go inward, focus in on   m y   o w n   t h i n g s. I've always used journals as a place for developing and storing creative ideas, though I've found that trying to keep them on a theme all but guarantees I won't finish them; I get a bit too precious about keeping them "perfect" and it clashes with my desire to have the journal on me in basically every situation, in case I think of something that just *has* to be jotted down or get bored and decide to doodle. Wow that was one sentence. Get ready for more of that lol. Point being, my journals end up being a mix of brainstorms, existing things I've made and want to copy down (it's practically a stim), notes on other media or areas of study, loose observations, overheard quotes, more emotionally involved and introspective writing, cool dreams, drawings, grocery lists—the whole shebang. I've started to think of the journals I keep as containers, where these different versions of myself can combine and connect the various things they're up to, and the whole thing gains more *power* in some abstract sense the more goes in. And, crucially, they're a space where no one's watching, where I can be honest with myself, and get up to weird shit.

{{< iquestion >}}

**You have an interesting relationship with religion, could you share a bit about how your beliefs have changed with time and how the've influenced you works?**

{{< /iquestion >}}

I'm Jewish, religiously/ethnically/culturally, and the child of a rabbi, so it's something I've grown up very surrounded by, very actively engaged in, and very grateful for. I love the intellectual traditions, I love the mysticisms, I love the stories, I love the song and dance and silent prayer.

I also, umm, am a witch! Which is not exactly the *most* normative thing a Jew can be lol. 

And I've had a desire to learn and do magic ever since (and, to hell with it, even before) I was first introduced to IRL witchcraft as a kid, so figuring out how to square those two spiritual sources was a big thing on my mind growing up. Learning more about Kabbalah and Jewish folk magic definitely helped me get my foot in the door of where I am now, and they're still a big part of my own current practices. But there was also a point, somewhere in college, where I decided I didn't want to keep constantly cross-referencing my own beliefs and experiences with the ones I assumed my parents 1) held and 2) "needed" me to also hold. Hell, I was also raised with some elements of New Age spirituality; it's not as though any one of us was operating on all-or-nothing rules. 

So I wouldn't call where I am now a compromise between Judaism and witchery. They don't feel nearly so opposite these days. It's more, I pursue magical acts and experiences, with a whole ocean of other symbologies and practices (both external and personal) for me to dive into, and my faith as the scuba gear and the boat.

A lot of my artmaking process is, and has been for a long while, a tool for me to either process or effect change on my current mental/emotional/spiritual/material situation. My song *Cold*

<iframe style="border: 0; width: 30em; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3192549735/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://natanya.bandcamp.com/album/cold">Cold by Natanya</a></iframe>

is a present-tense description of my eventual, not current, self; *Sunshine*

<iframe style="border: 0; width: 30em; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1398924823/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://natanya.bandcamp.com/track/sunshine">Sunshine by Natanya</a></iframe>

 references a couple Kabbalistic and New Age–y concepts because, well partly because they're a piece of how I think about things like romantic love, and partly because the whole love song was mostly an excuse to attack breatharianism (who are you to imply food isn't spiritual? like damn). And the influence is pretty mutual; a lot of my most fun and successful spells felt more like planning and executing art projects than like following ritual procedures. I've tried my fair share of candle spells and rhyming incantations, but got way more mileage from the time I draw a bit of Max/MSP code on a leaf and left it on the outlet block of my keyboard while I played my songs on it. Reading the works of Gray Garland has gotten me to think about making that art↔magic connection more explicit.

{{< iquestion >}}

**What originally got you interested in Conlangs? What keeps you into them and what do you want to pursue next for conlangs?**

{{< /iquestion >}}

Tolkien's work introduced me to the concept of conlangs and really first ignited my interest, around 5th grade or so, but I have memories of making up little language-like things for as long as I've liked fantasy stories. Nowadays, my conlanging interests are much more engelang-y; I like weird and novel approaches, I like very symmetrical and elegant grammars. But the more poetic "what your words are and how you use them say something about you" angle is very much a draw for me too; I've been a sucker for the Dictionary of Obscure Sorrows since I first found it online. 

I'll confess that the idea of a conlang where I can get the grammar usable and jump to banging out the lexicon as soon as possible continues to be rather alluring, despite grammarbuilding usually being a much more fun part of the process for me than wordbuilding lol. The ultimate goal is to have a language I can comfortably journal in that reflects things I care about (alongside [Rhapsodaic](/other/conlangs/rhapsodaic), of course, which is definitely there but by its nature is slower and more demanding to write), and I'm slowly getting there with a couple different in-progress langs. Whichever one gets there first, I guess?

Also, whoever's reading this, I now consider you to be holding me to my intention of completing a submission for this year's [Cursed Conlang Circus](https://www.youtube.com/playlist?list=PLZI8zCShyGT9gy0jKUWLmNVtert_CJNEy). I swear this time I'm gonna do it.

{{< iquestion >}}

**Where do you find interests? How do you curate your media consumption?**

{{< /iquestion >}}

I like to "joke" that I don't do anything particularly special to find my interests, I'm just missing whatever part of the brain is supposed to see weird things and go "oh, that's *weird* lol, lemme move on." This is how I have tabs on (checks Notes doc) like 13 different niche cults at this point. I've gone looking for exactly none of them, I just catch a stray reference to one somewhere and decide to Google what exactly it is, and then curiosity takes me the rest of the crazy way. This is how a lot of my interests start. It's how I found Toki Pona (I kept seeing the name mentioned and only meant to find out whether it was a natlang or conlang when I first searched it), it's how I found witchcraft (I was Googling images of magic potions just to look at, as you do when you're a kid with an escapist streak, and fatefully clicked through to magic-spells-and-potions.com), it's how I found personal color and style analysis (...genuinely I don't remember what led me to this one)—you get the picture.

Maybe this painted the picture for you but I'm not exactly the *best* at curating my media consumption. Not yet, at least. I am, bit by bit, actually internalizing the knowledge that passive and aimless media consumption makes me feel worse—markedly, extremely predictably, and for long stretches of time—and that researching my current cult of interest, in particular, will do a number on my nervous system much the same. I don't so much curate what I consume (is this a bad idea? Eh, that's the next horse to deal with. Hey brain why was that the phrase you supplied me with. I mean I like it enough to type it but why "horse." Anyway) as much as how much and how often I consume. I do actually have to spend uninterrupted time with myself and, you know, *do* things.

Not that all problems can be fixed by buying stuff, but getting a dumbphone has definitely helped.

{{< iquestion >}}

**What track of yours are you most proud of and why?**

{{< /iquestion >}}

do-over // ALL DOGS FALL FROM HEAVEN

<iframe style="border: 0; width: 30em; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3381483841/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/track=3196479870/transparent=true/" seamless><a href="https://natanya.bandcamp.com/album/all-dogs-fall-from-heaven">All Dogs Fall From Heaven by Natanya</a></iframe>

 is an obvious but true pick. I mean, as far as sheer *effort* behind a song goes, there's probably no beating the 9-minute 2-songs-in-one song, for sure, but there's a lot behind the scenes I'm proud of there. Reaching out to someone I knew to ask if they could record guitar/bass/drums for the song instead of throwing my hands up about how "it's not feasible for me to produce," for example! I'm *really* good at throwing my hands up about things, so it meant a lot to me that I didn't take the easy route of, just, *not* making this thing real. I learned how to belt an E5 (and like barely~ an F5), which is new for me, and how to do it more-or-less *properly*—and like, that too was a juncture where the vision for the song was beyond what I was used to being able to create, and I worked to get there anyway. And as far as that vision goes, oh boy was there emotional heft behind this one. I thought I was just writing the ALL DOGS FALL FROM HEAVEN part, which was a big enough statement on its own, until I hit myself with a gut-wrenching meltdown-inducing personal realization that all but necessitated that do-over get written and added onto the beginning. This is, umm, how I roll, and I don't think I would have it any other way. Which in a sense is what the whole musical diptych is about. There's also the inclusion of that passage from the Song of Songs in the second bridge, with my dad (the rabbi!) reading a related line from the Tosefta Sanhedrin right before it, and like ***that's*** me following up on part of an ongoing magic spell I started casting like 3 years ago. Which is a story for another time ;)

{{< iquestion >}}

**Furry? Therian? How do you identify?**

{{< /iquestion >}}

Furry, broadly animalhearted, fairykin/fae, and shapeshifter. That's the current state of things, at least. If I try to hold onto a specific label too closely I end up stoking a whole bunch of unnecessary anxiety about it, however much I might sometimes be miffed about that fact. Miffed is a fun word. More people should use it, I think. I'm a being of magic, I'm practically allergic to modern screens (that's not my pretentiousness talking, my mom has called my screen headache situation an "allergy to the 21st century" on a couple occasions), I regularly get flight urges and I get them more often, not less, whenever my mental health is doing better. Conceptualizing of myself as a fairy just tends to fit right. The mythos is tasty, as is the social frisson. It's a good way to move through the coarse and deadened bits of the world.

{{< iquestion >}}

**so, uh, 𝑔𝑒𝓃𝒹𝑒𝓇?**

{{< /iquestion >}}

Yesssssss hehehe. Gender questioning started out for me in quarantine, as I think it did for a lot of other soon-to-be she/they-users who were suddenly performing gender a lot less, and it's only gotten queerer since then. The pendulum has done some swinging between feeling obligated to be more femme to feeling obligated to be more masc, and now I'm just sorta comfortably in the "fuck it do what you feel like" zone. I like engaging with gender from the outside in, finding the interesting mixes-and-matches that arise when the whole conceptual buffet is available. Stuff like the way bruised knees are gender-subversive whether you're a man or woman, depending on how you frame it.

Also, my current set of pronouns (they/he/fae/she) is a genuine reflection of preference (she/her pronouns feel *almost* too interior and personal to have others use, but leaving them out of the set also paints the wrong picture; go ahead and use 'em, just not exclusively, ya know?), but was in no small part settled upon because it rhymes. \#justfairythings

{{< iquestion >}}

**How do you feel about your celebrity status in the toki pona community? Have you had any thought on para-social relationships and how you want to handle them?**

{{< /iquestion >}}

It's interesting! Especially recently, as I've become like less socially active in the community and been making music as jan Usawi a little less frequently. I do find myself feeling guilty for things like that, in a way that I know logically is a thing that solely exists on my end. I think I sorta treat the celebrity status more seriously than any of my fans do, in a way—knowing that people are going to be compassionate and understanding, people will meme and adore just as much during suno pi toki pona, but still f e e l i n g like I should be doing more.

That said, it's by and large been such a positive experience. I'm so fucking thankful that, like, not only did I happen to find a way to skirt the question of building an audience for my music by kinda just finding the audience first (TikTok has demoralized me twice now ffs), but I also found an audience I could hang out with and make friends in. It feels a lot less parasocial, and a lot more comfortable, when I can just hop into voicechat as jan Usawi the person, and talk about my art like I talk about my art with my friends (because that's what I'm doing), or not talk about it at all.

It makes me think that, underneath the more superficial "oh no I've got to meet this wholly-imagined celebrity standard" worry (and the equally empathizable-but-pernicious "oh no I need to make money" worry), a lot of that feeling is just the knowledge that I'm not gonna get this anywhere else, and it would be a mistake for me to neglect it. Yeah, ough, I'm gonna sit with that one lol.

{{< iquestion >}}

**How did you choose your fursona**?

{{< /iquestion >}}

Pretty simply. I became aware of the blanc de hotot rabbit breed, and the thought of a badass rabbit chick who takes no shit from anyone and has constant killer emo eyeliner baked right into the fur—who nonetheless is fucking fluffy and will melt at a good head scritch from a friend—felt very compelling. The name Arabella is lifted straight from the thusly-titled Arctic Monkeys song.

I also have a general concept for a luna moth sona who's performed some mad science experiments to give themself a stomach and proboscis, something very high drag body horror. When I was a kid and had basically a behavioral aide to provide "positive intervention" (heavy sarcasm on the positive) for my as-of-then undiagnosed autism, I remember telling the guy that the work we were doing was like a caterpillar becoming a butterfly, because a butterfly doesn't go back to being a caterpillar. I was wrong! And it felt much more like becoming a luna moth and being much nicer to look at, but also very distressed to find that my hunger had disappeared. The IRL "mad science" I've been doing on this front has shown great promise so far. Thanks for reminding me I'd come up with this, I still gotta give them a name.

{{< iquestion >}}

**Do you try to keep interests largely separate (music as Natanya, furry, toki pona, religion, etc) or do you conceptualize yourself as a single person all the time?**

{{< /iquestion >}}

Keeping different projects and interests under different names and banners is definitely something I do and have done, but I'm not sure it's what comes naturally to me, and I've been slowly experimenting with moving away from it. I consider one of my biggest strengths as a creative to be my tendency to make connections between the various things I'm learning about and working on, using them to reinforce one another, finding my Big Ideas™ in the sentiments I see articulated in slightly different ways across vastly dissimilar sources. Seems natural that I should do whatever most facilitates that.

That said, it does make "personal brand"—or whatever slightly more savory word for it you want to substitute in there—tricky. I like to wear lots of different costumes. One of the Ideas™ I've been toying with lately is that, to be impactful in a performance, you've got to be able to describe your "whole deal" as either One Thing (a type) or Two Things (a subversion of type)—three or more and stuff gets too watered down. That's something I can get behind doing event to event, project to project, but I don't even know that I'd want to try that across all of them. Hell, I should hope we've established it by now, but I am not describable as either One Thing or Two Things lol. What works for strategic artistic performance does not (always) work for the rest of life. 

There's a utility to having different names for different characters, as it were. It just sounds kinda exhausting to keep up.

{{< iquestion >}}

**The one word answer: Can you [olin a potato](/other/conlangs/janolin)?**

{{< /iquestion >}}

Try.

{{< iquestion >}}

**What scares you?**

{{< /iquestion >}}

Some of the very things that I most adore 🙃 

So, yes, for those who know me, the big obvious one is that I have a phobia of hypnosis, mind control, mind-altering substances, etc. the whole such gamut. It's simultaneously mellowed and intensified as I've gotten older, like. Have I been hypnotized, explicitly (i.e. guided meditations don't count) and of my own volition? Yep. Have I gotten high? Yep (oh hey this is how my parents learn about that. Oh shit, and also the kin thing. This is an awesome interview ^^). Was it all ultimately fine and actually pretty cool? Yep. Did I get less weird about the object of my phobia as a result? Absolutely the fuck not. If anything, I've gotten weirder about it, just in a mentally healthier way. As a musician, in an art where you know the artist has done something right if the work gets called "hypnotic," it might even pay off a little to have really hyped-up pattern recognition specifically for things that resemble mind control, however tenuously.

What else scares me? My metaphorical permeability. The prospect of there being no way out of something. Having to do something perfectly. Stinging insects. Diving into water headfirst.

{{< iquestion >}}

**You've talked before about your synesthesia. How does it affect your day-to-day? Do you view it a positive, negative, or neutral thing?**

{{< /iquestion >}}

So yes! I experience music and other sounds, musical notes/chords/keys (yes this one's distinct actually), letters/numbers/words, physical sensations and emotions as having color (+shape, texture, motion, etc.). My synesthesia is all associative (meaning I get spontaneous mental imagery or just knowledge of associations, but no physical hallucinations), and most of the time it hangs out in the back of my mental awareness (though with deliberate focus on it, non-deliberate focus (e.g. meditation or trance states), an intense enough sensory stimulus, or just dumb luck, it can come to the front). I initially doubted what I was experiencing really counted until I tried listening to some songs specifically to pay attention to their colors in my mind, and I "saw" things that looked familiar—I remembered passively thinking about them, paying no real mind to it, when I'd heard the songs before. There are also a lot of associations my brain makes that are sort of in a fuzzy zone with regards to whether they're full synesthesia—tastes having color, songs having tastes, musical keys having personalities, etc. I think this is just a mode my brain occupies quite naturally.

And I like that it does; by and large this is a neutral-to-positive thing in my life. I like being just that much better at remembering random strings of letters/numbers, I like watching my little mental movies and crawling around my webs of associations, I like worming strange-yet-sensical metaphors into what I write, I like having an easier time weathering painful sensations or emotions cause they all look so damn pretty, I like continually surprising myself. 

{{< iquestion >}}

**What's the most important skill that you've taught yourself?**

{{< /iquestion >}}

So my first thought was to say: More-or-less reliably knowing what's going on in my own psyche. Knowing what I'm actually feeling, knowing what it's like bodily/mentally when I'm saying something I don't really mean, acting for some reason other than what I'd thought, feeling some kind of pressure or attraction that was *probably* supposed to stay subconscious, etc. and catching it in real time. Sort of the negative skill of not being able to bullshit myself. I'm not perfect at it—nor do I particularly want to be—but I'm better at it than I used to be, and the times when I'm most able to do it are the times when I'm most able to do and *enjoy* doing, well, most other things I enjoy.

Thing is, this is a useless, probably awful, and maybe also impossible? skill to have without the parallel skill (and it is one) of meeting what you find in the process with compassion and patience and good sense. [So that's probably the more important one](https://ilinx.substack.com/p/the-joy-of-forgetting-yourself-is).

{{< iquestion >}}

**Is there any skill that you spent too much time developing that you wish you hadn't?**

{{< /iquestion >}}

An extremely good question, and I'm so sorry to do this to it, but no. Like, my reoccurring thought here is to do something clever and snarky and talk about masking and capitulating to the wills of others as a skill that I developed as a kid and wish I had less of—except that I have to admit that that's saved my ass a fair number of times. Could I stand to be worse at internalizing other people's beliefs? Maybe, but that version of me is also worse at cognitive empathy and hasn't made some of my favorite analytical insights. And all the "useless" practical skills I have lying around are just waiting for an opportunity to be unexpectedly applied elsewhere. Sorry, man, I'm too cracked at silver linings. Martha Graham was right about that whole quickening business. Everything I've picked up is gonna find its place in my life or so help me.

{{< iquestion >}}

**What do you do for fun? Any books, movies, TV shows, etc. that you'd recommend?**

{{< /iquestion >}}

I dance, I doodle, I read books (less often than I'd like but we're working on it), I go to parks, I practice quadrobics, I watch video essays, I make memes, I daydream. Now that it's summer, I try to make a point of walking outside whenever it rains. Highly recommend that.

As for media I'd recommend? Always Coming Home, Proverbs of Hell, Severance, Game Changer, The Blues Brothers, I Saw The TV Glow, On the Ethics of Boinking Animal People.

{{< iquestion >}}

**What's the best advice you've ever received? Worst?**

{{< /iquestion >}}

Worst first, I'm thinking, and it's probably something from that one god-awful witchcraft Discord I was a member (and eventually moderator) of for about a couple years. The things the server owner said that impacted me most weren't so much advice as they were "call-outs," but they did scare/shame me out of some of my favorite magical practices for a time. The actual worst straight-up advice they told me, though, which I clocked as being shit advice at the time, was "If you're going to take psilocybin, which you should, *definitely* do it before your brain has finished maturing."

Best might have to go to something my Taekwondo teacher was told by a Navy Seal friend of his and then passed on to the class during warmups (he was very fond of saying "our warmup is their workout," to give you a sense of the vibe in the room at the time), which was "Embrace the suck." Not "put up with," crucially, which would make it probably some of the worst advice I’ve received. But "embrace": Find the good in it, *make* good if there isn't any, have *fun* with it. If "doing things you enjoy is an important part of being good to yourself" is the thesis and "sometimes you won't enjoy things you have to do" is the antithesis, then this is a synthesis I've gotten a lot of mileage out of. Yes, shit sucks sometimes, but if I can get into my body about it, make a game of it, encourage and commiserate with myself through it, think about the stories I'll tell once it's done, just sense it and see if there's anything savorable there—even when the sucky thing is that I need to stop persisting and tap out—then it gets so much easier to stay *with* myself while it happens. And that always makes it suck less.

{{< iquestion >}}

**Do you have any *other* obscure hobbies?**

{{< /iquestion >}}

Perfume making—very amateurishly, with essential oils and my friend's Everclear. Dæmonism—the mental construct practice inspired by Philip Pullman's *His Dark Materials* series, nothing to do with demons. Maybe bookbinding? I've now hollowed out two old books and sewn my own sets of pages into them to create a mixed media sketchbook and a junk journal respectively, and I wanna do more of it. And heraldry design/blazonry. I'm a sucker for anything with elegant design and a unique set of jargon.

{{< iquestion >}}

**What hobby do you want to get into but haven't had a chance to dive into yet?**

{{< /iquestion >}}

I keep thinking it'd be so cool to get into drawing people, at least somewhat more realistically, to be able to draw parts of self or characters getting up to things. Or natural things, to keep a real artsy field journal. Just gotta let myself be bad at it for long enough.

Also, learning to recognize my local flora and fauna by name. Feels like it'll be good for the soul in more ways than I'm even anticipating yet.