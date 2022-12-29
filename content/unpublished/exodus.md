---
title: "Exodus"
slug: "exodus"
author: "Vega Deftwing"
date: 2022-12-21
bookToC: false
tags:
- technical
---

{{< quote "ChatGPT + human editing" >}}

The year is 2022. In the world of social media, Twitter has long been the platform of choice for politicians, celebrities, and everyday users alike. But as the years have passed, the once-mighty site has struggled to keep up with the rapidly changing landscape of the internet.

As the lines between the virtual and the physical world blur, Twitter becomes a battleground for hackers, activists, and corporate interests. Despite the ~~best~~ efforts of ~~its engineers and~~ executives, the site is plagued by outages and security breaches, causing frustration and anger among its remaining user base.

As the situation grows dire, a group of rebels emerges, determined to take down the beleaguered social media giant and replace it with a platform of their own design. Led by a charismatic young hacker named <span id="unicode-letters" class="conlang"></span>, the rebels planned to launch a series of coordinated attacks on Twitter's servers and infrastructure, crippling the site and sending it spiraling into oblivion, but found there to be no need as the organization succumbed to necrosis. 

A new era of social media is upon us. Without the constraints of the old guard, users are free to connect and share in new and exciting ways, paving the way for a brighter, more connected future.

{{< /quote >}}

<script>
function getRandomUnicodeLetter() {
  // Generate a random number between 65 (A) and 122 (z)
  const randomNumber = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
  // Convert the number to a Unicode character and return it
  return String.fromCharCode(randomNumber);
}

function updateUnicodeLetters() {
  // Generate 7 random Unicode letters
  const letters = [];
  for (let i = 0; i < 7; i++) {
    letters.push(getRandomUnicodeLetter());
  }
  // Update the text content of the element with the ID "unicode-letters"
  document.getElementById('unicode-letters').textContent = letters.join('');
}

setInterval(updateUnicodeLetters, 70); // Update the letters every second
</script>

---

{{< columns >}}

I don't think I need to explaining how and why Twitter got to be the 5-star, world class dumpster fire that is today, nor should I need to explain the financial situations or complexities of social media-competition in a world where TikTok dominates and ~~FaceBook~~ Meta is desperately trying win people over by [giving them legs](https://techcrunch.com/2022/10/11/meta-announces-legs/). 

Not because I expect you to know all of that - following the tech news lately has been exhausting. I don't think I need to explain it because you probably shouldn't care. Ultimately, what you *should* care about is keeping connections, finding inspiration, and generally having a good time online.

<--->

![exoduscover](/nonfree/blog/ai/exoduscover.webp)

{{< attribution >}} Made with Waifu Diffusion 1.3 {{< /attribution >}}

{{< /columns >}}

Unfortunately, those things become a lot harder to do as some psychotic rich fuckers have taken over the social media landscape and made actually using the platforms akin to having a morning routine of stepping on legos.

It'd be different if this were a new occurrence, but given Tumblr's downfall ({{< smalltext >}}Though it is sort of coming back {{< /smalltext >}}); ~~Facebook~~ Meta buying WhatsApp, Oculus, Instagram, Giphy, and about a dozen up-start competitors; Reddit & TikTock being massively financially controlled by China; Telegram thinking Cryptocurrency is a good idea; YouTube being YouTube; etc. I've been burned too many times.

It boggles the mind that we put up with this shit.

For the first time I can think of, it looks like we have a sliver of a chance to move to something better. Mastodon. Is Mastodon perfect? No. [It lacks E2E encryption (soatok.blog)](https://soatok.blog/2022/11/22/towards-end-to-end-encryption-for-direct-messages-in-the-fediverse/), it [makes discovery difficult (cendyne.dev)](https://cendyne.dev/posts/2022-12-11-twitter.html), and instances might crash and burn. But, again, that's not what this post is about. I do care about the advantages and shortcomings of Mastodon as a platform, but more than anything I care about cool people doing cool things.

You probably already have a list of people - The ones you follow on Twitter. I'd advise you get those backed up so that when the lights go out and the party is over you can find them again. 

The best way I've found to do this is to head over to https://unflwrs.syfaro.com, export all your followers followers. Then, use Twitter's built in [Archive Download](https://help.twitter.com/en/managing-your-account/how-to-download-your-twitter-archive) to get you your tweets and everything else in a .zip. You can slap that into [twitter-archiver](https://github.com/dariusk/twitter-archiver) if you want it to look pretty.

From there, you can head over to https://www.movetodon.org and let it find anyone your following with a mastodon account link on their profile and follow them all at once.

Now you can feel free to mash that delete account button or [intentionally cost Melon Husk some money (soatok.blog)](https://soatok.blog/2022/11/07/contemplating-the-future/) and probably the "collect on class action" button in a year ~~when you find out~~  Twitter fucked up with your data, but that's just speculation (for now).

>  ... While writing this post [it already happened](https://nakedsecurity.sophos.com/2022/12/28/twitter-data-of-400-million-unique-users-up-for-sale-what-to-do/).  ಠ_ಠ

But, again, none of that is the point I'm trying to make. Instead, what I really want to say is...

# IM HECKIN EXCITE

Yes, Twitter is on it's death bed, but out of those ashes I think we're going to get an internet that has some individuality again!

Don't get me wrong, I like my website and this clean style I've made here. I've spent a lot of time trying to make it easy on the eyes- But I also really, really miss the days of crazy Tumblr blog themes with built in audio players and MySpace accounts that bordered on the illegible. 

{{< speech big >}}

I must admit, being 23, I'm right at the edge of the generation that got to see MySpace when it was popular, but I do feel nostalgia for what I've missed - I actually have a blog post on that already though: {{< button relref="posts/xx80" color="gradient-border2" >}} xx80 {{< /button >}}

{{< /speech >}}

There was a level of simple child-like fun and anti-corporate punk spirit that makes things amazing that, while not lost, has been buried for a long time. 

The thing about centralization is it also generally means uniformity. Facebook and Twitter are centralized and they are same-y. I'm not going to pretend that from one instance to another Mastdon looks all that different (they are almost all running the same server software, after all.) but with the options ranging from https://girldick.gay/ to https://furry.engineer I have no doubt that we're about to see some incredible individualism and expression shine though, and I think things will diverge but stay compatible in a way that means we can all finally have more on our profiles than an icon and a hero image. I think the common protocol, combined with the very inclusive mindset of the users so far, will still mean things remain largely accessible despite this too.

{{< bigquote "[Vince Falconi on tattooed.dev](https://tattooed.dev/wrote/some-thoughts-at-the-end-of-the-timeline/)" >}}

I'm on Mastodon. It feels like trying out a new coffee shop or bar, components are familiar but the overall space is foreign. The app feels a lot like Twitter circa 2008-2010, but the experience itself is not that. I like the federated design, it feels like the old web.

{{< /bigquote >}}

It also stands to put an end to a significant amount of the problems of social media. Before it was at least a debate if we should kick out cryptobros and TERFs (no matter how bad they are) from the platforms because it really was cutting them off from the only places they could go. But now? 

Now we can kick them off of our little islands without feeling bad. 

If they want to make their own toxic little bubble, they can, but we don't have to deal with it. Yes, this may make echo cambers worse, but I think most people will just generally be miserable hanging out in those communities given enough time and mellow out. Could I be wrong? Sure. But trying something is better than the status quo.

Basically, I feel like this is finally the first <img src="/common/crack.svg" alt=" " height="80rem" style="position: absolute;"></span>crack in a wall and that soon that crack will spread and the entire creativity that has been held back from platforms that offered a limited palette of expression will break free.

I mean this. I think Mastodon is just the start. {{< button relref="other/fediverse" color="other" >}} The Fediverse, ActivityPub, & The IndieWeb {{< /button >}} are currently at this tipping point of going mainstream and with it [Webrings](https://webring.xxiivv.com/#icons) and [88x31 pixel badges](https://anlucas.neocities.org/88x31Buttons) might become common again, and the new standards might mean the entire obnoxious idea of platform lock-in becomes simply bad for business, because why would users ever want to use something that has the chance to implode like Twitter or Tumblr did.

Put simply, I think we're finally getting back to seeing more things like these Tumblr pages:

<img src="/fairuse/tumblrscreens/tumblr1.webp" width="20%" alt=" ">

<img src="/fairuse/tumblrscreens/tumblr2.webp" width="18%" alt=" ">

<img src="/fairuse/tumblrscreens/tumblr3.webp" width="18%" alt=" ">

<img src="/fairuse/tumblrscreens/tumblr4.webp" width="20%" alt=" ">

<img src="/fairuse/tumblrscreens/tumblr5.webp" width="18%" alt=" ">

{{< attribution >}}Left to right: [ms-dos](https://ms-dos5.tumblr.com) , [meatdemon](https://meatdemon.tumblr.com/) , [wartorling](https://wartortling.tumblr.com) , [uzicopter](https://uzicopter.tumblr.com) , [retronator](https://www.retronator.com) {{< /attribution >}}

... or these [NeoCities](https://neocities.org/browse) sites:

<img src="/fairuse/neocities/cinnamuff.webp" width="23%" alt=" ">

<img src="/fairuse/neocities/desertjaguar.webp" width="23%" alt=" ">

<img src="/fairuse/neocities/mirrorteru.webp" width="24%" alt=" ">

<img src="/fairuse/neocities/tarraxahum.webp" width="24%" alt=" ">

{{< attribution >}}Left to right: [Cinnamuff](https://cinnamuff.neocities.org/home), [desertjaguar](https://desertjaguar.casa), [mirrorteru](https://mirrorteru.neocities.org), [tarraxahum](https://tarraxahum.neocities.org){{< /attribution >}}

and less of this:

{{< columns >}}

![facebook_example](/nonfree/blog/facebook_example.webp)

<--->

![twitter_example](/nonfree/blog/twitter_example.webp)

{{< /columns >}}

But that's only the start. My true hope is to see the death of this:

![tumblr_post](/fairuse/tumblrscreens/tumblr_post.webp)

For those that don't recognize this, these are the options for making a new Tumblr post, but I think they encapsulate pretty much all social media platforms as they are now. You can post text, a picture/gif, a video, or an audio clip.

But guess what! That doesn't fit every need!

Let me introduce you to https://www.dwitter.net, it's about page says:

{{< quote "[dwitter.net](https://www.dwitter.net/about)" >}}

Dwitter.net is a challenge to see what awesomeness you can create when limited to only 140 characters of javascript and a canvas. Give it a go!

{{< /quote >}}

<iframe width=500 height=570 frameBorder="0" src="https://www.dwitter.net/e/19615" allowFullScreen="true"></iframe>

That's not a gif! That's actually the code in the dweet running in your browser.

Now, this isn't necessarily anything new - [@bbcmicrobot](https://www.bbcmicrobot.com) on both Twitter and Mastodon has been around for a while:

{{< quote "[bbcmicrobot.com](https://www.bbcmicrobot.com)" >}}

BBC Micro bot is a Twitter bot that runs your tweet on an 8-bit computer emulator. Tweet-sized programs are written in BBC BASIC

{{< /quote >}}

But that required a sort of middle man - the bot account - to function. That layer, which is necessary due to the lack of native support, means less people will even think about making something like this.

To me, this is a real shame, as projects like [@FlameReactorBot (Twitter)](https://twitter.com/flamereactorbot) / [flameReactor@mastodon.social](https://mastodon.social/@flameReactor) are limited by the interactivity of a tweet.

Think about what could be possible if this weren't the case!

Ultimately, I want people to be able to express themselves as much or as little as they want in each post they make. Is there potential for bad actors? Yes. Will it be hard to stop people from abusing the system just to talk over each other? 

{{< speech furby>}}

# CAPS LOCK AND BIG TEXT MAKE POST GO BURRRRR.

{{< /speech >}}

Yes. Yes it will. But I think we can find solutions to these problems. Maybe it means making each post note limited to ~~140~~ 280 characters, but being limited to 512x512 pixels. Maybe it means a moderation system with a mix of algorithmic and crowd sourced moderation can take down abusive posts. I don't know how to do it.<a class="ptr">(1)</a> I don't think anybody does. It'll take multiple iterations, some nasty security problems, and some of the brightest minds on this planet - but I think we can make a platform which combines the best of totally custom websites with a scrollable content feed. 

I **know** pictures, video, audio, and text absofuckinglutly are incredibly limiting. Just think about what artists and creative minds could do given mixed media options. 

I **know** we can make a platforms that lets shader and game devs make interactive media.

I **know** we can make a platforms that lets novelists - graphic or traditional - embed full stories with a page-turning interface.

I **know** we can make a platform that lets 3D artists upload models for live preview.

I **think** we can make a platform that lets programmers make totally new types of posts that take in real time data from all the viewers.

I **think** we can make a platform where the definition of what a post is and what it contains is flexible, where it can be  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
<path fill="#FFFFFF" fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg>forked, tweaked, and forked again.

{{< smalltext >}}

>  Do you hear that? It's the sound of a million infosec professionals screaming at this website in horror.

{{< /smalltext >}}

Reddit absolutely lost it's shit over r/place when it first happened.

Wordle happened and we all got to see this:

<pre>
⬛🟨⬛⬛⬛
🟨⬛🟨⬛⬛
⬛⬛⬛🟨🟨
🟨🟨🟨🟨⬛
🟩🟩🟩🟩🟩
</pre>
A hundred times before we had and idea what it meant.

But what if r/place <a class="ptr">(2)</a> were a post from some random user. What if when you saw those box-y emoji's you could play right there, in the post - maybe with the post having saved how that user did so you could race them?

We'd see new ideas flourish. 

I think mastodon and the indie web +++ is the start of this. It's a seed for this to finally happen. I think we have a real chance here to make a web that has the browsability and network effects of microblogging (Twitter, Mastodon, Cohost, etc.) combined with the expressiveness of Flash Games, VR Chat Worlds, and the indieweb. 

## It's about people.

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

Having a platform that allows for awesome creativity doesn't matter if nobody uses it. What matters most is making connections with people that inspire you to push boundaries, that make you laugh and enjoy life, and that you feel comfortable being yourself around.

One of my big goals with OpGuides has been to make a website that can compete with full textbooks by acknowledging that the best information for a given topic can never come from a single author or live in a single medium. It takes videos, links, quotes, interactive media, and - above all - a community. Before publishing this post I spent a significant amount of time doing my best to replace or ensure there are archives of as many of the tweets that had been embedded in this website as I could. 

There were nearly 100 Twitter embeds in this website.

This site wouldn't be what it is without linking to and displaying the hard work of talented creators, engineers, artists, makers, and hackers from across the web.

I want to make sure I acknowledge that and showcase how amazing the communities I'm in are. I plan to dramatically ramp up the number of interviews on the site in 2023 and also start posting rapid-fire community showcases where I look at what some of the amazing people in the communities I'm in. **Such as,**

{{< columns3 >}}

[@mylo_calibre](https://twitter.com/mylo_calibre/status/1606412768130867200), A synth obsessed tiger making Eurorack modules and noodling with FPGAs and micro controllers. He can slam out full PCB designs faster than I can make a bad sounding euororack patch.

<img src="/fairuse/twitter/mylo.webp" style="border-radius:10px;">

<--->

[Blinry](https://blinry.org/operation-mindfuck-5/), completer of [Game Jams](https://flauschzelle.de/the-floor-is-lava/), [creator of arts](https://blinry.org/inkdiary-2021/), [speaker of toki pona](https://blinry.org/toki-pona-cheat-sheet/), [seer of colors](https://blinry.org/what-is-color/), but most importantly, **[master of HTML sliders](https://sliderland.blinry.org)!**

![blinry](/fairuse/other/blinry.webp)

<--->

[Kiri](https://vt.social/@ExpiredPopsicle), an absolute bad ass lamia that can throw out 6800 & x86 ASM in her sleep and has forged game engines in the depths of GPU code not meant for mere mortals. She made her 3D model, she makes games, art, and streams on Twitch. 

<!-- Add a placeholder for the Twitch embed -->

<div id="twitch-embed" width="100%"></div>

<!-- Load the Twitch embed script -->
<script src="https://player.twitch.tv/js/embed/v1.js"></script>

<!-- Create a Twitch.Player object. This will render within the placeholder div -->
<script type="text/javascript">
  new Twitch.Player("twitch-embed", {
    video: "1687999975"
  });
</script>



{{< /columns3 >}}



<ol hidden id="footnotes">
    <li>I may not know the right way, but I know the wrong way: If you suggest blockchain or NFTs you're part of the problem.</li>    
    <li>BTW, there's a few r/place clones that are going strong, such as https://pxls.space/ </li>
</ol>

