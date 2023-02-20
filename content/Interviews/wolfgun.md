+++
bookToC = false
title = "Wolfgun"
+++

<img src="/nonfree/interviews/wolfgun.jpg" alt="Wolfgun" height="200em" style="float:right;padding: 0 1.5em 1em 0;">

# An Interview With Wolfgun

**2/17/2023**

<style>
.book-page {
    padding-top: 0;
    padding-left: 0;
    background: url(/common/texturebg2.webp);
    background-size: cover;
}
h1 {
	padding-top: 1em;
}
</style>
<!--
Some of these questions you may not want to answer for a variety of reasons. Some may be to personal, some may take away from some mystery that you've intentionally created. Please don't feel obligated to answer any question here.

You may think about a natural follow up question for some of what I've asked below. Feel free to add that question using the same format as the other questions below and respond to yourself.
-->

<!-- Feel free to modify this blurb as you see fit -->

<style>
table {
    border-collapse: collapse;
    cellspacing=0;
}
td {
    width: 5em;
    border-style : hidden !important;
    text-align: center;
    font-family: 'Space Mono', monospace;
    font-size: .9rem;
    padding: .1rem !important;
}
.active {
    background-color: #c33;
}
input {
    width: 100%;
    background-color: rgba(1,1,1,.5);
    color: #ddd;
    margin: 0;
}
</style>

<br style="clear: both;">

<div style="float:left;padding: 0 1.5em 0 0;">
    <table>
        <tr></tr>
        <td><input type="text" value="C0" class="pitch" /></td>
        <tr></tr>
        <td><input type="text" value="F#1" class="pitch" /></td>
        <tr></tr>
        <td><input type="text" class="pitch" /></td>
        <tr></tr>
        <td><input type="text" value="D2" class="pitch" /></td>
        <tr></tr>
        <td><input type="text" value="C0" class="pitch" /></td>
        <tr></tr>
        <td><input type="text" value="B2" class="pitch" /></td>
        <tr></tr>
        <td><input type="text" class="pitch" /></td>
        <tr></tr>
        <td><input type="text" value="D2" class="pitch" /></td>
    </table>
    <button id="play" style="width: 4em; display: block; margin-left: 0.3em; margin-bottom: 0.5em;">Play</button>
</div>

Wolfgun is a space obsessed master of synthesizers with 50 albums out on Bandcamp. He primarily makes his music in Renoise, a Digital Audio Workstation (DAW) which combines an old-school tracker workflow - think the equivalent of combining spreadsheets and music software with the sequence of notes and effects entered vertically, like the example on the left - with modern production capabilities.

His music, through his distinctive sound design and smooth vocal delivery, evokes feelings of flying though space and being overwhelmed by its beauty.

Some of his work directly delves deep into story telling, such as his incredible *[CHRONICLES FROM OTHER WORLDS](https://wolfgun.bandcamp.com/album/chronicles-from-other-worlds)* album.

More than a musician, he has delved into [video production](https://wolfgun.space/video/), [photography](https://wolfgun.space/photos), digital art, and has made an action arcade game with some serious style that's out on Steam:

<iframe src="https://store.steampowered.com/widget/1348800/" frameborder="0" width="646" height="190" align="right"></iframe>

<br style="clear: both;">

---

<script>
const table = document.querySelector('table');
const pitches = table.querySelectorAll('.pitch');
const playButton = document.getElementById('play');
let activeStep = 0;
const audioContext = new AudioContext();
let sampleBuffer = null;

function loadSample(url) {
    return fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(decodedBuffer => {
            sampleBuffer = decodedBuffer;
        });
}

function playSample(pitch) {
    const source = audioContext.createBufferSource();
    source.buffer = sampleBuffer;
    const semitones = getSemitonesFromPitch(pitch);
    source.playbackRate.value = getPlaybackRateFromSemitones(semitones);
    source.connect(audioContext.destination);
    source.start();
    console.log(`Playing sample at pitch ${pitch}`);
}

function getSemitonesFromPitch(pitch) {
    const octave = parseInt(pitch.slice(-1));
    const note = pitch.slice(0, -1);
    const noteOffset = {
        'C': -9,
        'C#': -8,
        'D': -7,
        'D#': -6,
        'E': -5,
        'F': -4,
        'F#': -3,
        'G': -2,
        'G#': -1,
        'A': 0,
        'A#': 1,
        'B': 2
    } [note];
    return octave * 12 + noteOffset;
}

function getPlaybackRateFromSemitones(semitones) {
    return 2 ** (semitones / 12);
}

function updateStep() {
    pitches.forEach((pitchInput, index) => {
        if (index === activeStep) {
            pitchInput.parentNode.classList.add('active');
        } else {
            pitchInput.parentNode.classList.remove('active');
        }
    });
}

function stepForward() {
    activeStep = (activeStep + 1) % pitches.length;
    const pitch = pitches[activeStep].value;
    updateStep();
    playSample(pitch);
}

let intervalId = null;
let isPlaying = false;
let tempo = 180; // beats per minute
let millisecondsPerBeat = 60000 / tempo;

loadSample('/sounds/rings2.wav').then(() => {
    playButton.addEventListener('click', () => {

        playButton.textContent = 'Stop';
    
        if (!isPlaying) {
            isPlaying = true;
            intervalId = setInterval(() => {
                stepForward();
            }, millisecondsPerBeat / 2);
        } else if (isPlaying) {
            isPlaying = false;
            clearInterval(intervalId);
            playButton.textContent = 'Play';
        }
    
    });
});
</script>

{{< iquestion >}}
**Thank you for taking the time for this interview Wolfgun. Your work has explored many ideas, ranging from high-energy synth filled riffs to thought provoking story telling. But that's what you've made, not who you are. So, how would you describe yourself?**
{{< /iquestion >}}

Thank you for reaching out to me to begin with. I would say that my work is an inseparable extension of me and who I am. If you study my work, then you will already know a lot about me. If you're asking who I am outside of my work and what I do, then I'd say I am a pretty average person. I enjoy getting to know people, I play games, I don't like talking on the phone about problems with my bank account. I dream, I wake, I work, I eat. Perhaps a mundane answer?

{{< iquestion >}}
**As mentioned above, you make your music in [Renoise](https://www.renoise.com). Why do you use Renoise and it's tracker workflow instead of a more traditional DAW?**
{{< /iquestion >}}

Trackers are what I started with way back when I was a teenager, and I feel that the way they organize information is easier for me to parse. Adding information, expanding the area for information, structuring, editing, and viewing existing data in Renoise is all very immediate and direct. I think with time, any tool can become immediate and direct, but trackers are what work for me.

{{< iquestion >}}
**Given that your music is so synthesizer heavy and the abundance of fantastic sounding virtual synthesizers - many of which are free - what do you think having physical synthesizers brings to the table?**
{{< /iquestion >}}

Well, for about seven years now I've been collecting hardware synthesizers and I'd say they dramatically changed the way I design sound, as well as my workflow. In a purely digital arrangement you can simply copy and paste a VST synthesizer and suddenly you have two. You can't copy and paste synths in reality, unfortunately, so recording them is necessary. Integrating recorded files into my workflow was extremely difficult at first, because I was used to making changes on the fly to every element of a song.

This seemed like a bad thing for a while that caused me to stumble, but the challenge was good for me. I began recording a lot of passages live, and I focused more on my ability to play, as well as completely changed the way I design sound. It altered significantly how I approach the production, and the structure, of music.

{{< iquestion >}}

**You've shown a few pictures before of your Eurorack setup,**

<img src="/nonfree/interviews/wolfgunrack.webp" alt="A picture of Wolfgun's eurorack setup" style="border-radius:1rem;">

**What are your goals in your eurorack setup? Crisp leads? Crazy sound design?**

{{< /iquestion >}}

My eurorack synth, which I call Vega, is a box that I began building with the explicit desire to create complicated noise. The modules in it I chose to gear it toward generating unusual sound, specifically non-musical tones. I consider it to be a tone-generating machine more than a synthesizer, however it is flexible. 

Nearly all of the sounds in "She Dreams" from the Projections OST were created on Vega, and played in realtime. Without much effort you can get sounds out of it that sound like radio static from strange places, screaming drones, and ghostly sounding hums that evolve in nuanced ways. There are a few things I want to change about it, but overall, Vega is a box for tuning in to bizarre vibrations.

{{< iquestion >}}
**Your vocal delivery and processing really stands out for its space-defying, ethereal sound. How do you do it?**
{{< /iquestion >}}

If you're asking technically, I use a combination of methods to achieve my vocal sound. Up close micing with a nice condenser and careful editing give me super clean files to start with. On the software side, I have used Melodyne for over ten years now to edit vocals in a variety of ways - Sometimes subtle, sometimes harsh, always with surgical precision.

You really have to strain over the small things with vocals to make them perfect. Even today, I am improving the ways that I handle my vocal processing, and mastering music in general. 

If you're asking creatively, then, it must be said that I simply have a particular inclination toward a specific kind of vocal sound. I know how I want to sound when singing, I know how I want specific words pronounced. I only use words that I consider to be beautiful in my music, and I only synchronize those words with melodies that appropriately support the emphasis on the syllables. All of those things and much more must be considered when arranging words with time. 

{{< iquestion >}}
**What inspired you to make your game *PROJECTIONS*?**
{{< /iquestion >}}

A friend of mine told me that making a game solo would be too difficult for me to manage.

So I made one. 

That really is how it started. The idea began in a simple way, and became way more complicated over time, because I can't do anything simply. The size and scope of PROJECTIONS grew to the point that I thought I would not even finish it. But I am extremely happy with how it turned out. I have many complicated opinions about what should and shouldn't be done in games to make them better, and I look forward to exploring that in future projects.

{{< iquestion >}}
**What did you find most rewarding when working on the game?**
{{< /iquestion >}}

Creating the visual effects for attacks. Often, entities (things you fight in the game) were originated simply based on what their attack might be, and how beautiful it might look and feel for it to attack you in such a way. I'd call myself 'obsessed' with explosions and the clockwork of impacts, so player attacks, entity attacks, and the visuals which accompany them were a literal goldmine of joyful creativity for me to play with.

I considered from the very start that PROJECTIONS would have an emphasis on details with its visual effects. Everything had to be glorified with intricate and rapidly evolving detail-work - Each line, each burst of light, every motion would be supported by beautiful and completely unnecessary details. It had to be overwhelming.

This mentality is something that has always existed in my music, but being able to express and explore it visually was new and exciting. This way of thinking also transitioned back into my music production (and every other kind of media I play with) and has improved my art in a very general way.

{{< iquestion >}}
**Most of your stories feature the warping of time and space. What about that topic draws you in so much?**
{{< /iquestion >}}

It's broad of me to say it like this, but, I like the idea that there is something wrong, all the time, and we just don't know it. I sort of feel that way in day-to-day life. There's something wrong. A strange feeling that hides in the shadow of other, more normal, more comfortable things.

Regarding 'time', I feel very particularly that time is not as straightforward as it seems to be. I like the idea of cycles - Repeating moments, or sensing the same thing again. My music does this on purpose. In many of my songs, the lyrics from the start are also the lyrics in the middle and the lyrics at the end, just with a few words changed to shift the tone. It's the same, but different. Melodies appear and re-appear, specific notes that appear at specific times across my entire discography, become symbols that carry the weight of everything before them, and give context to what you are hearing, as well as gain new meaning each time.

After more than ten years of writing music, I feel that I have developed a pretty clear vocabulary of symbols in my work that speak to this idea. As for 'space', I do not think there is a difference between time and space, so the same thing applies.

{{< iquestion >}}
**What inspires the stories you've written for your story-based songs and your game?**
{{< /iquestion >}}

My dreams, for the most part.

I engage in oneiric writing a lot of the time. This goes for my stories, my lyrics, my melodies, art, poetry - Basically anything. I have kept a dream diary for over a decade. I study my own dreams, and from them I hear many things about myself. I encourage everyone I know, and often people I don't know, to keep dream diaries. Dream recollection is a skill which can be trained. If you can remember even a small part of a dream, write it down. The act of doing so will help to solidify it, and you may recall more about it. 

This process of partial reconstruction leading to more complete reconstruction is what matters, because it trains you to both fill in the blanks and to better understand how that works when recalling future dreams.

{{< iquestion >}}
**Having released as many albums as you have, most in roughly the same genre, do you ever feel limited by meeting expectitions of fans for your music to fit that style?**
{{< /iquestion >}}

Always. But I do not let that stop me from writing what comes to me. It has always been that I write what I feel, and in whatever medium feels correct for it. There is something special about drum and bass music that keeps me coming back to it. I'm always chasing that energy. But there are many kinds of music which are describable in genre terms, and also those which are not describable in any terms, that I wish to make, and am actively pursuing. If people only come to me for a specific genre or sound, then to them I say: <b><span style="text-shadow: 0px 4px 0px black;">Begone.</span></b>

{{< iquestion >}}
**Which of your past albums did you most enjoy making?** 
{{< /iquestion >}}

It may be surprising, but the album which I had the most fun making was absolutely [RUNNING](https://wolfgun.bandcamp.com/album/running). I have a lot of fun making many kinds of music, and there is always some level of fun when making things no matter what it is or how it sounds, but RUNNING stands out to me as a particularly special gem that was too beautiful and too pure. It is a specific kind of music that has no 'genre' that I wish to make, which I think of as many different things, but the words 'chaotic' and 'playful' come to mind. It's childish, irreverant, even 'bad' at times. I love it and I miss it when I am not listening to it. I wish to drown in that energy.

{{< iquestion >}}
**How has being a part of the furry fandom influenced you and your art?**
{{< /iquestion >}}

For a long while I wasn't sure how to 'be' furry. I have very specific feelings about identity, and it is definitely out of the scope of this question, but it is enough to say that: The wolf 'persona' was exactly that - a persona, which I adopted at a time in my life when I felt vulnerable and needed strength to go on, but I couldn't find it within myself. So I made a 'mask', which was Wolfgun, and that persona was full of imagined strength.

It was everything I wanted to be, but wasn't. When I had to do things I wasn't prepared to do myself, or didn't have the strength to do myself, I would wear 'Wolfgun' instead. From this imaginary thing, I drew strength. Over the last couple years, a lot of things have happened, and my association with 'Wolfgun' is no longer that of 'Wolfgun' being a thing I need to wear - that is to say, 'Wolfgun' is a part of me, but I don't wear it for strength. I actually consider myself a Big Cat these days. 

To be extremely specific about it, I feel like I have always been 'Big Cat', and 'Wolfgun' is just a thing I wore until I understood that. But I feel much more comfortable as a cat. I feel like it fits me, instead of me simply wearing it to make up for what I lack. With regard to me and my art, the aspect of my identity which can be called "Furry" helped me to more clearly define myself, understand myself, and in general, feel more like myself. In my art, this means expressing my emotions as raw and real as I can. Of course, I do that in reality, every day, as well.

{{< iquestion >}}
**How do you feel about AI tools being used for digital art? What about for music?** 
{{< /iquestion >}}

This question leads us to complications that are impossible to resolve. 

First, I believe they're an unavoidable technology at this point. Any tool is only as good as what it is used for. Are we speaking legally? Ethically? I don't agree with an AI being trained on billions of scraped images from visual artists, painters, and photographers, to create a service that will ultimately be used for profit by a specific company. The same goes for music. But if we're speaking about the value of art, I recall when Spotify actively sanctioned the use of a neural network generating thousands of hours of music to be placed onto their service to fill up people's playlists. I shrugged. The music which I am talking about is music that is made to fill up space. If we consider "intent" when talking about art, the lines are drawn so much more clearly. "Music made to fill up space" specifically is already a thing that happens in every genre of music, and indeed, it is a thing which happens in every medium of artistic creation. But more directly, when did it become so important to fill up that space? We have to consider why a space would need to be filled. This question can be extended to AI generated visual art. For what reason would a space need to be filled with AI Generated Art? AI Generated Music? AI Generated Words? The answer should be obvious, and it is nothing new. Neural Networks and AI-Generated media are just the latest tool which can be used to accomplish such a thing, but I don't think it is a threat to the value of art, and it is not a threat to me. I create art because I am compelled by the experience of living to understand and express myself to the best of my abilities. Music is the key to the universe, and the language with which time is written. No neural network can comprehend that, and so cannot be adequately expressed through it. 

Many artists make what they make as a form of monetary income. I do not think that neural networks, as tools, can usurp that kind of artistic creation. The wonderful act of making things is too complex to begin to describe. The way that an idea might hit an artist, how their emotions mix with it, how their years of experience factor into it, and how their comprehension of the thing, as well as the translation of the idea from a Concept to a Completed Piece, are all just a few pieces of part of the equation of making art, of any kind. A neural network made to generate art has no personality, no part of itself which can reflect ideas more or less strongly, and importantly, lacks any transformative aspect to its method of creation. It is true that people mimic in order to learn, and I agree that neural networks do mimic people, with convenient precision. However, I would argue that there is no part of that neural network which represents its "Self" with which to mix the ideas that it is exposed to. More than that, a neural network which has been trained on billions of images is undoubtedly going to represent an 'average' of art with each of its generations. Humans lack the ability to memorize and learn from literally billions of images. We have to fill in the blanks with ourselves, and that is what artists do. We learn from mimicking, and where the mimicry ends, we fill in that space with ourselves. Humans do not average images, or music, or words - We learn some, and we fill in the shadows with the light of our being. That light is constantly changing, too - As we age, gain more experience, form opinions which grow and change, learn new skills, and take in new information - We change. That constant evolution plays into what we create, as artists, no matter the medium. The value of such a thing absolutely can not be understated.

Secondly, AI Generated Art moves art into the realm of being a product. To an artist, the product is not the goal. I will say it simply. Creating music is to me as shitting is to a wild animal. When an animal is hungry, it eats. Do they eat in order to shit? No. The goal is to feed their hunger and sustain their body. The animal's shit is a by-product of the process of being alive. In the same way, art which I create is a by-product. It is not the goal, but rather a natural part of being an artist. Any thing which turns art into an end product - whether it is musical, visual, literary, or any other type of art - is putting the emphasis on the shit, instead of the process. That's fine if that is the goal. But the goal of creation is not the product. It's the process, and how it enriches our lives, and others, as a result.

Finally, we must not undervalue artists by equating them to 'black boxes'. Neural Networks are black boxes made to do something. They are tools. Artists are not tools. It bears being said that artists are not machines trained to do one very specific thing. Artists are undervalued and underappreciated globally, universally, everywhere, no matter their age, what industry they work in, whether or not they are independent, and regardless of what type of media they create. Commission artists you like. They are worth it.

{{< iquestion >}}
**Is there any skill that you spent too much time developing that you wish you hadn't?**
{{< /iquestion >}}

No. Learning, and excelling at what you learn, is always good no matter the context. You find that as you go through life, one skill leans into another, to varying degrees. It is worth it to learn things and become better, always, because that is one of life's most noble goals.

{{< iquestion >}}
**What's the most important skill that you've taught yourself?**
{{< /iquestion >}}

The ability to be self-aware and self-critical. 

With regard to art, the skill to recognize new information and absorb it into my creative process. Sometimes when creating, things don't 'work out' the way that you imagine. In almost all of my experience, this is based on a deficiency of information and awareness - Not being 'aware' of a thing means you can't manipulate it. Constantly being critical of myself means never being certain that what I am doing is correct. By questioning constantly, I am in a constant state of learning, and that means very frequently becoming aware of new things I hadn't considered before. There is a lot that could be said about this further, but that would extend beyond the scope of this question I think.

{{< iquestion >}}
**Any books, movies, TV shows, etc. that you'd recommend?**
{{< /iquestion >}}

Books: 
* The Quadrivium. 

Movies: 
* Cloud Atlas (2012)
* Beyond The Black Rainbow (2010)
* Solaris (1972)
* The Color of Pomegranates (1969). 

TV Shows: 
* Star Trek: TNG
* Star Trek: DS9.

{{< iquestion >}}
**What's the biggest 'Oh Shit' moment you've ever had, be it one you caught in time or not?**
{{< /iquestion >}}

Nearly being struck by lightning.

I used to stand outside and film storms to try and catch lightning bolts on camera. One day during a storm I stepped outside of my house to film the front as it approached. I was holding my phone, recording ahead of me, and saw a flash of blue light, along with a very loud static click. I assumed that the flash of light and the click was just some kind of static discharge, and about a second later heard an extremely loud thunderclap. 

I later learned after examining the video and sharing among friends that the blue flash and click was a "lightning streamer", which are basically the stored static electricity searching for a place to discharge. That streamer could have lead that bolt of lightning to strike directly in front of me, and I'd definitely have died.

I don't go out in storms anymore.

{{< iquestion >}}
**Who are your biggest inspirations? What creators do you think are way to underrated and deserve a shout out?**
{{< /iquestion >}}

I don't put people up on pedestals. For context, I collect and absorb many things that I like. I strictly avoid collecting or absorbing too much from a single individual or outlet, in general. I don't really mingle with other creators, and I don't like to call myself a musician, an artist, a creator, etc. 

Nature, and exploring my own emotions and especially my dreams, lead to my inspiration always.

{{< iquestion >}}
**What's the best advice you've ever received? Worst?**
{{< /iquestion >}}

The best advice I ever received was from my precious grandmother, who taught me how to love, and how to express myself without regret. The amount of bad advice I have received from people totals to such an amount that I would spend hours complaining about it here if given the opportunity.

No one has ever told me this, but I will share it with you for free. Love comes from a place that is infinite, and you cannot run out of it. We measure forms differently from ideals. The form of love can be measured. But love is an ideal, and is infinite. For example, if I hug a person, that hug has a beginning and an end - It can be measured, in this way. But the thing which made me hug - Love - did not reduce in quantity or intensity. Why is this? Ideals are infinite, and forms are finite. The love you have inside of you is boundless, if you let it be. You are boundless, if you let yourself be.

{{< iquestion >}}
**What advice do you have for anyone interested in making works similar to yours?**
{{< /iquestion >}}

Chase whatever it is that moves you, and chase the reason it moves you. Do not create simply for the sake of creating. Know why you want to create. Do not build a ship - First, love the ocean. The ship will build itself. 

As for practical advice, do your research. Use free tools. Educate yourself. Absorb as much as you can. Find artists whos works you like and imitate them. Imitate my work, if you want. Humans learn best by mimicking, so mimic. The skills you learn by going through the motions will transform inside of you, along with your life experience, and all of your desires, and when filtered through you will become something new. You are a transformative engine. Make the best of it.

{{< iquestion >}}
**How do you stay motivated to keep doing cool things?**
{{< /iquestion >}}

A healthy fear of dying. I do not want to die without making the things I want to make and saying the things I want to say. Every day I find a new thing I want to say, so, it is a never-ending race. I never stop running. Very often I am tired. But I have to keep going, because the alternative is dying, and I don't want to die yet.

{{< iquestion >}}
**What hobby do you want to get into but haven't had a chance to dive into yet?**
{{< /iquestion >}}

Architecture. I am strongly motivated toward understanding, and excelling at, architectural design.

---
</br></br>
{{< attribution >}}
Animated stars effect from https://github.com/H0rn0chse/NightSky
{{< /attribution >}}
