---
bookCollapseSection: true
weight: 20
---

<script>

function hover(num) {
  document.querySelector("body > main > div > article > div.nerd-container >   img:nth-child(8)").setAttribute('src', "/nonfree/permissiongranted/nerd_lineup/" + num + "_a.webp");
}

function unhover(num) {
  document.querySelector("body > main > div > article > div.nerd-container >   img:nth-child(8)").setAttribute('src', "/nonfree/permissiongranted/nerd_lineup/" + num + ".webp");
}

preloads = "red.gif,green.gif,blue.gif".split(",")
var tempImg = []

for(var x=1; x < 8;x++) {
    tempImg[x] = new Image()
    tempImg[x].src = "/nonfree/permissiongranted/nerd_lineup/" + x + "_a.webp"
}

</script>

<!-- This height needs to depend on the image.-->

<style>
region:hover{
}
.grid-container {
  display: grid;
  grid-template-columns: 15% 15% 14% 12% 17% 13% 14%;
  position: absolute;
  width: 100%;
  height: inherit;
}


.nerds{
	height: inherit;
}

.nerd-container{
width: 100%
}

.grid-item:{
	background-color: blue;
	z-index: 100 !important;
}

img{
pointer-events: none;
}
</style>

<div class="nerd-container">


<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/1.webp" alt="Soatok" style="position: absolute;z-index: 3;">

<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/2.webp" alt="Cadey" style="position: absolute;z-index: 2;">


<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/3.webp" alt="Loial" style="position: absolute;z-index: 3;">


<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/4.webp" alt="Vega" style="position: absolute;z-index: 1;">


<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/5.webp" alt="Cendyne" style="position: absolute;z-index: 1;">

<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/6.webp" alt="Mimir" style="position: absolute;z-index: 1;">

<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/7.webp" alt="Vordex" style="position: absolute;z-index: 3;">

<img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/placeholder.webp" alt="Vordex" style="position: absolute;z-index: 3;">

<div class="grid-container">
  <div class="grid-item" onmouseover="hover(1);" onmouseout="unhover(1);"><img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/hoverregion.webp" alt="Placeholder" style="z-index: 3;"></div>
  <div class="grid-item" onmouseover="hover(2);" onmouseout="unhover(2);"> </div>
  <div class="grid-item" onmouseover="hover(3);" onmouseout="unhover(3);"> </div>
  <div class="grid-item" onmouseover="hover(4);" onmouseout="unhover(4);"> </div>
  <div class="grid-item" onmouseover="hover(5);" onmouseout="unhover(5);"> </div>
  <div class="grid-item" onmouseover="hover(6);" onmouseout="unhover(6);"> </div>
  <div class="grid-item" onmouseover="hover(7);" onmouseout="unhover(7);"> </div>

  </div>

  </div>

  <img class="nerds" src="/nonfree/permissiongranted/nerd_lineup/placeholder.webp" alt="Vordex" style="z-index: 3;">

{{< attribution >}} Art by [Talon Creations](https://mobile.twitter.com/talon_creations). Characters from Left to Right: [Soatok](https://soatok.blog), [Cadey](https://xeiaso.net/blog), [Loial](https://www.hackster.io/news/this-vfd-clock-exquisitely-echoes-the-craftsmanship-of-its-mechanical-analog-cousins-of-yesterday-eaa73a60adb1), Vega, [Cendyne](https://cendyne.dev), [Mimir](http://meow.social/@mimir), [Vordex](http://yote.tech) {{< /attribution >}}

# Ⅰ - Community

When you think engineer, what traits come to mind? 

If you're anything like most people, you probably thought "smart" and "antisocial". 

While I can't speak to how truthful that stereotype may be, I can tell you for sure that in engineering, not knowing how to make friends, ask for help, and talk with others will make you all but useless.

The only way to be successful in this journey is to make friends along the way. Some of this gets really, really difficult. You *will* get stuck. Having friends to help makes it possible. Find group chats on telegram, join IRC channels, get on some forums, and ask questions on Reddit. Working with people is a lot more fun, and you'll learn so much more.

<!--

While I don't want to recommend specific smaller communities as to avoid them getting overwhelmed and growing to a size that makes them a worse quality, I'll put a few bigger ones here:

{{< columns >}}

[r/EngineeringStudents](https://www.reddit.com/r/EngineeringStudents/)



<--->



{{< /columns >}}

-->

While a small community of people you can talk to 1-on-1 is better, having inspiration each day can provide a huge boost to your motivation and creativity, so I recommend following some nerdy news sites. This also helps with staying current on the cutting edge and security issues. Some sites I use nearly daily for finding good, new material are:

{{< columns >}}

[Hacker News](https://news.ycombinator.com/)

[Hackaday.io](https://hackaday.io/)

[Hackster.io](https://www.hackster.io/)

[Bleeping Computer](https://www.bleepingcomputer.com/)

[Morning Cup Of Coding](https://www.humanreadablemag.com/morningcupofcoding)

<--->

While much less active, I've found some of these to have great information as well:

[N-O-D-E](https://n-o-d-e.net/index.html)

[POC||GTFO](https://www.alchemistowl.org/pocorgtfo/)

{{< best >}} [Defcon Videos on YouTube](https://www.youtube.com/user/DEFCONConference) {{< /best >}}

{{< /columns >}}

(There are many more links in Appendix A3 - 'Other Great Resources'

{{< columns >}}

You don't need to be great at everything to participate, plus you probably know more than you think.

Yes, there is always a relevant XKCD, and yes, you will always feel like everyone knows more than you. Don't stress about asking stupid questions:

<--->

![Image result for dunning kruger effect xkcd](https://imgs.xkcd.com/comics/impostor_syndrome.png)

{{< attribution >}}

[xkcd #1954](https://xkcd.com/1954/)

{{< /attribution >}}

{{< /columns >}}

## Advice for communication

{{< quote "https://bad.pet/q/" >}}

Frequently in chats, whether telegram, IRC, slack, or discord, someone says something like this:

<AnonOtter> Anyone know rust? Having an issue.

How that question is often read:

<AnonOtter> Can someone to commit to being able to solve my problem with rust, spending as much time as necessary, without them even knowing what the actual problem is or if it's even a rust problem?

Hopefully it's clear why questions like this rarely result in direct answers.
 - There are very few people who could be called experts in every facet of whatever is being asked
- Imposter syndrome is common
- Most people won't write that blank check for time/help commitment

Instead, share:

- The goal - "Trying to query for a list of tags on a post" - See [The XY Problem](http://xyproblem.info/)
- The problem - "I'm getting back these results"
- The expectation - "but it should be these results"
- If possible, a simplified example. 3v4l for php, jsfiddle for html/js/css, etc. are great, otherwise a paste site.
- What you've already tried

This allows anyone there to try to help. Many skills transfer well to other languages or platforms. At minimum, you might get an idea for something you haven't tried yet. Sometimes you'll even solve your own problem while narrowing down the simplest possible test case.

Oh, and don't snark at well-intentioned answers. It's rude and discourages participation.

{{< /quote >}}

The technical community can be ruthless with it comes to expecting people to have 'basic' knowledge sometimes, but don't let it get to you. I do want to provide some general ideas that, while not universally, are generally shared among the engineering and surrounding community:

Ⅰ - Any good solution is fast, easy to understand, and above all elegant.

Ⅱ - Any task which can be automated should be - if a computer can do it faster than you, then you shouldn't do it by hand

Ⅲ - Any problem that has been solved in a way that satisfies the above two rules should be looked at for reuse before reinventing the wheel

Ⅳ - Any question which has already been answered should not be left to a human to answer again.

Ⅴ- All knowledge should be free†

† within practicality, trade secrets are obviously a thing, and I'm not crazy. I mean, like publicly funded research and what not. While the specifics of this rule vary among engineering types, it is generally a core belief.

On the note of point Ⅲ…

![Standards](https://imgs.xkcd.com/comics/standards.png)

Though the one I was stressing here was really **Ⅳ**. 

You should **always** check the internet before asking in chat. 

It's not that we're being rude, it's just a matter of courtesy. If you're unsure of the answer, or it's validity, by all means ask! But asking **good** questions, and only when necessary, will quickly help you make friends in chat much faster. 

Note, there is one exception: if chat is currently talking about something that you don't know about and it's already relevant to the conversation, it's totally reasonable to interject and ask for a super quick primer on what's going on or a relevant link. 

This may seem obvious, but a good number of technical chats die because of exactly the aforementioned problems. (or gatekeeping, but that's a whole different matter…) so please don't ask things a search engine can already answer (but don't feel bad asking a question when the all mighty Google can't)

TLDR: RTFM & STFW http://www.catb.org/esr/faqs/smart-questions.html#rtfm

## Balancing Interests

I think balancing your creativity among other interests and looking for ties between them can lead to more good than any of the things mentioned above. 

To drive this point home, here's a little idea generator with some data baked in from various hobbies of mine:

<button id="concatenateButton">GIMME AN IDEA!</button> 

<h4 id="output" style="border-image: linear-gradient(to bottom, #2b68c4 0%,#cf2d6e 100%)1;"></h4>

<!-- TODO: Make this higher effort with a list of adjectives / verb / nouns to mostly make good sentences -->

<script>
const button = document.getElementById("concatenateButton");
const output = document.getElementById("output");


// Adj or Nouns work here.
const adjectives = ["Dynamic methods of", "Using binaural audio for", "Strange ways of", "Parametric", "Analog signals", "Freakin' Lasers", "Background noise", "Using video for",, "Using planar magnetic drivers for", "Reverse", "Intentional intermodulation", "Microtonal methods for", "High quality ways of",  "Matrix based methods of", "Using projection for", "Genetic Engineering for", "Using Software Defined Radio (SDR) for ", "Conway's Game of life for", "Using an esoteric programming language for", "Using Ferroelectric RAM for", "Using the OKLAB color space for", "Using the piezo electric effect for ", "Using full body tracking for",  "Using depth cameras (Kinect, Leap Motion, or even DIY) for ", "Using Unicode for", "Mesh networking for", "Using pressure for"];

const verbs = ["designing", "generating", "modulating", "routing", "mapping", "bending", "monitoring", "removing", "mapping", "repairing", "sensing"];

const nouns = ["audio", "lighting", "magnet implants","RFID Implants" "computers", "tubes", "tracking", "synthesier", "unicode", "equalizer", "3D Audio",  "transducer", "Antenna" , "Lithium-Ion Capacitors", "Lighting", "Pulse Width Modulation (PWM)","Bi-directional (2 color) LEDs","PCB inductor coils", "high voltage", "renewable power generation", "Constructed languages",  "Mechanical keyboards",  "Rhythm games",  "Roguelike games",  "Puzzle games",  "Strange 3D printer filaments",  "3D Printing",  "Pen plotters",  "Generative art",  "Parametric 3D modeling",  "Ternary computers",  "Analog computers",  "Nixie tubes",  "Vacuum tubes",  "Freakin' lasers","Cosplay/Fursuits",  "Cluster computing",  "Hydroponics",  "Data bending",  "Pressure sensitive input devices",  "Radiation monitoring",  "CO2 Monitoring",  "Video game moding", "Application reverse engineering", "Mesh networks",  "Retro gaming",  "Haptic feedback",  "Cryptography",  "Smart home automation",  "Neural networks",  "Solar panels",  "Video synthesis",  "Glass blowing",  "Beer brewing",  "Growing mushrooms",  "CNC",  "VR Chat", "Fractals", "Biological computing", "Fursuits", "Skateboarding", "Cameras", "Audio effects" ];

// Function to generate a random element from an array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Generate a random idea
function generateIdea() {
  const adjective = getRandomElement(adjectives);
  const verb = getRandomElement(verbs);
  const noun = getRandomElement(nouns);
  return `${adjective} ${verb} ${noun}`;
}

// Example usage: generate a new idea
console.log(generateIdea());

button.addEventListener("click", () => {
  // const randomIndex1 = Math.floor(Math.random() * strings.length);
  // const randomIndex2 = Math.floor(Math.random() * strings.length);
  // const randomString1 = strings[randomIndex1];
  // const randomString2 = strings[randomIndex2];
  //const concatenatedString = randomString1 + " " + randomString2;
  output.textContent = generateIdea();
});
</script>

I enjoy playing music, reading, and writing, so I find inspiration in these media. There are countless electrical hardware and software tools that use hands on programming when playing music. In books, I find ideas for what an author may have thought only futuristic when written. I never know when my mind will strike similar gold when writing for myself. 

Find a hobby and bend it to this as you go along. 

Like photography? Learn about the internals of a camera.

Like cars? Look up how the ODB2 interface actually works. 

Nothing is magic and the internet will likely have answers and give you ways to apply this knowledge that you care about.

In general, I've found site specific forms and Reddit to be the best platforms for most things, with some others finding their main following in other places though. For example, I'm in a large technical chat group with Furries on Telegram and some open source tools still thrive on IRC. 

{{< columns >}}

Also, if your reaction to that is "Furries? How can that be relevant?" Well, normally it's not. Most of what we talk about is just normal engineering-y topics, but having something else in common helps. That said, there's more cross over in any community than you might think:

<--->

<iframe width="100%" height="250" src="https://www.youtube.com/embed/VWSfo0KpTMI" title="Protogen mouth sync test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

No matter what you care about, know there's a wide range of communities that would be thrilled to have you, and you can always combine what you learn here with any of the other interests you have to make the things you're passionate about better!

<iframe width="100%" height="450" src="https://www.youtube.com/embed/0QO0yZldC2M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The maker and hacker communities tend to focus a lot on popularity and getting your name out there. While obviously it's cool to do so, don't let likes and followers be your motivation. Make cool things to make cool things, and people will come. The number one best thing to see on the internet is someone that is passionate about something sharing those passions. It's better to have a dozen good friends that share those passions, than 25k followers that just go 'oh, neat' anyway.

<img src="/nonfree/permissiongranted/twitter/woni/woniComic.webp" alt="Art by Wonivero" style="border-radius:50px;">
{{< attribution >}} Art by [@Wonivero](https://linktr.ee/wonivero) {{< /attribution >}}

## Further reading 

(Seriously, all of these are **very** good)

[Hacker Spaces are Awesome! (YouTube, LiveOverflow)](https://www.youtube.com/watch?v=HJy-Y4nok3g)

[Assholes: A Probing Examination](https://www.nomachetejuggling.com/2019/06/03/dont-hire-assholes/)

[Death to Bullshit](https://deathtobullshit.com/) [(mirror)](https://web.archive.org/web/20191217003321/http://deathtobullshit.com/)

[Hacker-Laws (Github)](https://github.com/dwmkerr/hacker-laws)

[Proof of X](https://julian.digital/2020/08/06/proof-of-x/)

## Hackerspaces [TODO]

[Building a Hackerspace](https://fahrplan.events.ccc.de/congress/2007/Fahrplan/attachments/1003_Building%20a%20Hacker%20Space.pdf)
