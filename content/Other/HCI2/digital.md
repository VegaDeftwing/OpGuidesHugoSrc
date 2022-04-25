#### <div class="wrapper"> <h2 class="glitch">Chapter 2: The Digital</h2></div>

<script>    document.getElementById("hciMenu").open = true;</script>

Alright, now onto the fun stuff, I think I've established that the physical side of how we use a computer is sub optimal, but what about how we actually do the things we do day to day? I think, for the most part, these things can be put into a few categories:

* Finding and Accessing shit
* Looking at shit
* Storing Shit
* Transferring Shit 
* Making Shit

I'm not the first to think on this subject by any means, [Programs are a prison: Rethinking the fundamental building blocks of computing interfaces by Robert Lechte](https://djrobstep.com/posts/programs-are-a-prison) is a particularly good example of other thoughts on this same subject.

## Finding and Accessing Information Sucks

### Search sucks

If you're like most people, you probably use Google Search, but also don't like Google Search. Google's search makes the entire top of the page ads, tracks you, and is just generally a bit invasive, but, you still probably use it instead of DuckDuckGo because the results often get you to what you're looking for faster.

To some extent things have gotten better as it is gotten easier to search directly from the search bar, with more browsers supporting setting the search engine by a prefix in the url bar, so if, for example, I want to search wikipedia and directly go to an article, I can just put a 'w' before what I search:

![](/hci/wsearch.webp)

And this definitely helps, but it's also not enough.

Search now regularly returns a number of results that is completely unprocessable by the human brain

![](/hci/resultcount.webp)

So, what can be done about this? Well, there's already a fair amount of advanced search options:

{{< columns >}}

![](/hci/searchopts.webp)

<--->

![](/hci/advsearch.webp)

But I honestly think these more or less miss the point of how people want to search, not to mention they're not super easy to remember. Being able to take things out in large swaths is often rather helpful, so why are there not options like NO_SOCIAL to get rid of all social media results.

{{< /columns >}}

On a similar note, [Ask HN: Is there a search engine which excludes the world's biggest websites?](https://news.ycombinator.com/item?id=23202850) was posted a while back, and I agree with idea: often I can find better information on smaller sites, so I think there should be an option to just say NO_10K to drop the top 10 thousand most popular sites from the search results. I don't know if this is really the right way to do this though. Fortunately, I do think the resurgence of [Webrings](https://en.wikipedia.org/wiki/Webring) is improving that a bit.

Finding something when you don't know the word for it exactly can be challenging too, especially if the correct term is also shared with something else (like looking for skateboard trucks but only searching the word 'Trucks'). This wouldn't be so bad, but sometimes trying to filter out the incorrect results doesn't work either, because of unforeseen overlaps. Unfortunately I don't know of a solution to this problem, as it's one of conveying intent with context, something which has been a problem much longer than the existence of search engines.

Often, I find what I'm looking for faster by just going to as close of a topic as I can think of on Wikipedia and poking around links than I can by directly searching.

It'd also be nice to have the ability to just set a list of bad sites. Like, please never ever show me any results from Pintrest.

Thinking more into the future, I would very much like to see a world where data searching is context aware. For example, say I'm searching for a data sheet for an old vacuum tube and I have a schematic of an old amplifier open in another tab, I would love if the browser saw the context and changed the label in the schematic into a link to this datasheet. Furthermore, it would be great if it crawled the web and finished finding datasheets and linking them, possibly well before I even even got to that page in the first place. I know we don't have the tech to do this yet, especially not as a general purpose tool, but I like to think about the future. ¯\\\_(ツ)\_/¯

Another point is the summery of information and omission of the irrelevant info. Say I were to look up bits in a byte, I don't necessarily need the historical context as to why bits are named bits and bytes, bytes, though even though I didn't search it, presenting that a nybble is 4 bits, and how to tell endinan-ness is more relevant, unless I had recently searched historical information or stated I wanted that explicitly. In my opinion we should be less concerned with finding relevant results and more concerned with discarding the irrelevant, though making the verbose available.

I also think that bringing people together, potentially anonymously, based on search and knowledge could be extraordinary valuable. If as I'm looking up 'How to do X' and somebody else is looking up 'How to Do Y, an advanced topic from X' it would be fantastic if we could talk, albeit unobtrusively to the person being requested. It seems to me that searching is desperately lacking a social element and ranking system. How great would a simple Reddit like upvote system on any given search be? What if browsers added a comment system that was hosted though some sort of distributed network and tied to each page so people could leave comments on any site regardless of if the site has comment functionality built in? (Yes, I know this is ripe for spam and abuse, but let me dream...)

Google also needs to quit their shit with information cards:

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/FPQnLW60Vt">pic.twitter.com/FPQnLW60Vt</a></p>— Randall Munroe (@xkcd) <a href="https://twitter.com/xkcd/status/1333621855001976832?ref_src=twsrc%5Etfw">December 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And it'd be great if something could actually be done about big sites like [Pinterest and Quora gaming Google](https://www.inputmag.com/culture/pinterest-sucks-google-image-photo-search-ruining-internet).

There is some progress being made here, as [Google Says AI Generated Content Is Against Guidelines](https://www.searchenginejournal.com/google-says-ai-generated-content-is-against-guidelines/444916/); however, a user on Hacker News had an interesting take on this:

{{< quote "[npunt](https://news.ycombinator.com/user?id=npunt) on Hacker News" >}}

This internal tension between chasing AI tooling and avoiding AI-generated content is just a prelude to the bigger shift of search engines getting reinvented around generated results instead of found results.
Fast forward 10+ years and for knowledge-related queries search is going to be more about generated results personalized to our level of understanding that at best quote pages, and more likely just reference them in footnotes as primary inputs.

These knowledge-related queries are where most content farms, low quality blogs, and even many news sites get traffic from today. If the balance of power between offense (generating AI content) and defense (detecting AI content) continues to favor offense, there will be a strong incentive to just throw the whole thing out and go all-in on generated results.

Big question is how incentives play out for the people gathering the knowledge about the world, which is the basis for generated results. Right now many/most make money with advertising, but so do content farms, and more generated results means more starving of that revenue source. For a portion of info that people want to know (e.g. factual info, not opinions, guidance, etc), Wikipedia is an alternative fact- and context-gathering model, but if search relies on it more, it will strain Wikipedia's governance model and become more of a single point of failure.

Really interesting stuff ahead.

{{< /quote >}}

Finally, I do want to end on a positive note: [Google is trying to show why results are ranked how they are](https://searchengineland.com/google-now-shows-why-it-ranked-a-specific-search-result-350659), and that's actuallypretty cool - though it does still seem [that search results are getting worse, at least according to Hacker News users.](https://news.ycombinator.com/item?id=29392702) Fortunately, there are interesting search engines, both general purpose like [you.com](https://you.com) and more specific, like [lieu](https://lieu.cblgh.org) for searchinging the [XXIIVV webring](https://webring.xxiivv.com) or the data-orriented [WolframAlpha](https://www.wolframalpha.com). There's also the neat [Hypersearch](https://chrome.google.com/webstore/detail/hypersearch/feojagelicdlhnmldaiplbppfbolnnag) extension which does make google search at least a bit better. Speaking of, the author of Hypersearch has a great blog post on the subject: [If Google sucks then why is everyone still using it?](https://abhinavsharma.com/blog/google-alternatives)

### Pay-Walls suck

Look, it's not that I don't think journalists shouldn't be paid. They should be. It's just that having everything behind a paywall blows. There's not any fun solution to this. Ads suck too. Nobody wants a web full of micro-transactions, and the idea of news sites mining crypto while I read bothers me too. So, let's just ignore the news sites for a second, and instead, focus on the much more offensive situation: academia and scholarly articles ([not that they're all good to begin with (YouTube, DefCon 26)](https://www.youtube.com/watch?v=ras_VYgA77Q))

It's no secret that access to academic articles is *fucking* expensive. JSTOR alone is \$200 a year for only 85% of the content, some individual articles are well above $20 to read despite a huge portion of it being publicly funded in the first place, yet somehow these sites wonder why so many sites are turning to [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub).

[You Pay to Read Research You Fund. That's *Ludicrous* (WIRED)](https://www.wired.com/2016/04/stealing-publicly-funded-research-isnt-stealing/)

But it's so much worse than that. Tons of information services are subscription based. So, the costs add up way worse. While it may seem like a bit of a stretch, I think it's pretty reasonable to call Netflix, Hulu, etc. all information sources as they often host documentaries, if we look at [The Cost of Every Streaming Service Per Month (TheStreet)](https://www.thestreet.com/lifestyle/best-streaming-services-cost-15166523), and assume just the most popular ones, so Netflix, Prime Video, and Hulu, it's already at **$418 a year.** Is it really any wonder why people are piracy again? Even if you subscribe to the theory that Piracy is a distribution problem and not a price problem, the pay walls are still the problem, as each service has it's own incentive to hoard as much exclusive content as possible and make their platform better than others for the price. This means that each platform runs on it's own standards and cross-compatibility is a real PITA. There are now websites and apps that specialize in just telling you which streaming service has what. Like what in the fresh fuck. 

As an aside, if you want to get around paywalls you can use [Switch your user agent](https://chrome.google.com/webstore/detail/user-agent-switcher/iojaoainolpgkpojokmeclhidjolocci) to Googlebot, and that will usually immediately let you through.

### Authentication and Authorization Suck

> **Authentication** is the sign in- the verifying you are who you say you are
>
> **Authorization** is what the user and service can do, or what 'permissions' you grant the service and what you're allowed to do on the service.

#### Authentication:

I'll bet cold, hard fictional cash that you've put off turning on two factor for a service you don't give two shits about.

I'll double my fictional money to bet that you have a junk password you use by default everywhere you don't give a shit.

Hell, I'll go all in betting on saying you've authenticated with quite a few services by just using the 

<div class="w3-container" style="width:fit-content%;display: inline-block;" ><p><button class="w3-button w3-blue w3-round-xxlarge w3-block">LOGIN WITH SOCIAL MEDIA</button></p></div></br>

button, though possibly only because it was the only way to login to that service at all.

Unfortunately, all of the above are probably not the best decisions.

The top two points combined mean someone can find your password in previous [security breaches (haveibeenpwned)](https://haveibeenpwned.com/PwnedWebsites), and then just login in, easy as that.

Using a social media login means that if you ever lose access to that account, either because Facebook or Google or Twitter or whatever decide to ban you or because you manage to forget you 'master' password and lock yourself out, you'll be locked out of everything you logged into those services with. Not to mention if someone manages to break into your Facebook or Goggle or Twitter or whatever they'll be able to login to any of those services too.

And look, I'm guilty of all of the above too. Sure, a password manager helps with this, but that's still annoying too as sometimes you just need to quickly sign in on a device for a few minutes. As of right now there's just no good solutions that are secure, easy to use everywhere, and fine gained enough to let the user give permissions as they want, and not give extra permissions they don't want to.

Alright, so just follow the normal advice and use long passwords?

![](https://imgs.xkcd.com/comics/password_strength.png)

{{< attribution >}}

[xkcd #936](https://xkcd.com/936/)

{{< /attribution >}}

Yeah. No. Well sorta. Okay, let me explain. Yes, you should use long passwords for exactly the reason this comic explains. But really, we need to stop using passwords outright. They just sorta suck.

Instead, we should go to [Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on), like the above "Login with Social Media" example, but the *user* should be able to trust and change the identity provider with ease, to avoid the 'Facebook banned me' issue.

The real shitty part is a lot of services already support something like this, letting you setup sign in with Single Sign-On via your own identity server, but it's usually limited to enterprise users.

That said, you can self host Single Sign-On (like the way 'Sign in With Google' works), [keycloak](https://www.keycloak.org), [Dex](https://github.com/dexidp/dex), [Gluu](https://www.gluu.org) are options for doing this. It's just that basically no online services will let you use your self hosted service without an enterprise account.

So, for now, users get fucked. There's really not any good options.

That said, some things have gotten better, [Webauthn](https://en.wikipedia.org/wiki/Single_sign-on) provides a much better way to authenticate with many services, including some that can provide Single Sign-On identities, often via those little [USB keys](https://www.yubico.com/products/) which are hugely better than the typical user name and password paradigm. 

{{< tip >}}

Note, those USB security keys have updated in standard. The newer ones which support WebAuthn are a bit more expensive and less common. The standards are confusing to understand, but the TLDR is you want something that supports WebAuthn/FIDO2.</br>The older standard, U2F, is a two factor system while the FIDO2/Webauth keys can outright replace passwords on the service

{{< /tip >}}

{{< hint info>}}

If you really want advice on what to use for your personal, daily password storage needs I think [keepassxc](https://keepassxc.org) is probably the best option at the moment, though it's still a tad awkward.

For advice on security and privacy see the <a href="/engineering/networking/security/">Security & Exploitation</a> and <a href="/engineering/networking/privacy/">Privacy</a> pages.

{{< /hint >}}

#### Authorization:

Put simply, we need easier to use, fine grain authorization settings that can't be bypassed. I should be able to tell a program, website, or app that I don't want to give it my location, and then, if it asks anyway it should be fed garbage. Refusal should also not stop access to that service<a class="ptr">(1)</a>. Similarly for storage, microphone, contacts, etc.

Newer versions of Android actually do this really well, including the ability to only grant those permissions for that session. This is amazing. It's not *perfect*, far from it. Like, Bluetooth requires location permissions and, unless you're on a rooted phone, there are some permissions the user can't even give. That's a load of shit, but I'll come back to that. 

### Content Linkage sorta sucks

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Search is the biggest scam in UI now. It almost never works. How do you find stuff that is not in your top 10 results of mini snippets? We need more explorative interfaces taking advantage of context and association. <a href="https://t.co/RC1BEekf3X">pic.twitter.com/RC1BEekf3X</a></p>&mdash; Marcin Ignac (@marcinignac) <a href="https://twitter.com/marcinignac/status/1400806180797231104?ref_src=twsrc%5Etfw">June 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

![](https://obsidian.md/images/screenshot.png)

{{< attribution >}}

Screenshot from the homepage of [Obsidian.md](https://obsidian.md)

{{< /attribution >}}

The digital world doesn't have to be lonely pages indexed like a book, why are we treating it as such? Today each page can point to any other page in a beautiful web of interconnected information, where each topic has lines of association spanning such that no two pages are unconnected. Wikipedia sort of has the simplest form of this, but what if we had systems so capable of automatic understanding - not just tagging - of information that any new info could propagate though that web naturally. Social linkage to people in the same graph, even if anonymous, could help connect people that together, due to their very specific knowledge, drive man kind further. I should clarify to, I literally mean a web/graph, possibly in 3D, relating and indexing information, possibly like these 3D views of Wikipedia: (though the data should probably be served 'raw' so that other presentation methods can be developed, as this definitely wouldn't be ideal for actually reading the content)

![](/hci/wikigalaxy.webp)

{{< attribution >}}

[WikiGalaxy: Explore Wikipedia in 3D](http://wiki.polyfra.me#) ([wikiverse.io](https://www.wikiverse.io) is very similar and worth checking out too)

{{< /attribution >}}

Obviously this overly linked system is something that people would need to get used to. Until the advent of the WWW we've read information linearly, page by page. The web has allowed this tree traversal style of navigation so that any missed topic can be reviewed, but generally this is a system where the tree only builds down, to simpler information, from the current node. It seems weird to think about an algebra book where it suddenly references multidimensional calculus, but this is exactly what I'm implying. In my education there was uncountable times I had to learn something because 'it will be used later' with no explanation as to how or why. Linking back up the tree allows for information traversal in both directions, eliminating this problem.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Imagine if you could search through concept-space <a href="https://t.co/U3fSZaN8hR">pic.twitter.com/U3fSZaN8hR</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1356884394628108289?ref_src=twsrc%5Etfw">February 3, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Presentation of Information Sucks

This section is about how we view information, the presentation of words on a page, graphs, and information in general. To start, I want to look at something a little bit different.

![](/hci/gemini.webp)

This is the home page for a project called [Gemini](https://gemini.circumlunar.space), which is a sort of alternative internet, but, wait, hang on...

{{< columns >}}

![](/hci/gemini2.webp)

<--->

![](/hci/gemini3.webp)

{{< /columns >}}

These are both that same page, loaded in different browsers. Why do they look different?

Well, Gemini does something you may thing strange: It let's the browser (client) handle the look of the page. It only serves the raw text. That's it. That's all you get.

Now, I *do not* think this is a good idea for the general web. But, I do think as an idea, it can give us some valuable insights.

Put a pin in it for now though, let me jump ahead into Dark Patterns:

### 'Dark Patterns'

> A **dark pattern** is "a user interface that has been carefully crafted to trick users into doing things, such as buying overpriced insurance with their purchase or signing up for recurring bills"

That's the definition from from Wikipedia anyway. I think it's a bit better put as "Dark Patterns are what happens when UI designed are a bag of dicks"

[This Site](https://darkpatterns.org/types-of-dark-pattern.html) has a lot of really good info on Dark Patters, and I recommend heading over there and then coming back over here. 

Oh, cool, you're back.

The biggest dark pattern that drives me nuts is a bit of what that site calls 'Confirm Shaming' and a bit of 'Misdirection', I'm talking about sites that do this

<div class="w3-container"><p><button class="w3-button w3-green w3-round-xxlarge w3-block">DO THE THING HERE</button></p></div>
<div class="w3-container"><p><button class="w3-button w3-black w3-tiny w3-round-xxlarge">or don't and watch the world burn</button></p></div>
<p>where the design is actively pursing an agenda. But it's not just those. Even ones that look semi reasonable can still be annoying if they don't include the action directly.  The affirmative action should be stated on the button that triggers it and both actions given equal weight to the user.</p>
<div class="w3-bar">
  <button class="w3-bar-item w3-button w3-red" style="width:50%">Don't Do Action</button>
  <button class="w3-bar-item w3-button w3-green" style="width:50%">Do Action</button>
</div>
<p>for example</p>
<div class="w3-bar">
  <button class="w3-bar-item w3-button w3-red" style="width:50%">Leave Items in Place</button>
  <button class="w3-bar-item w3-button w3-green" style="width:50%">Delete Items</button>
</div>


Note here by Action I literally mean to **include the verb.** Delete. Replace. Print. Etc. Yes or No *is not* good enough.

With destructive or irreversible actions, such as deletion (not recycling), given a confirmation dialogue, and if particularly important, a dialogue that require *meaningful* user input, like this prompt when deleting a repo on GitHub

<img src="/hci/delconfirm.webp" alt="DelConfirm" style="zoom:50%;" />

Alright, so back to Gemini: Making more things like it wouldn't totally solve this problem, designers could still totally chose to make the text confirm shame, but by letting more elements be controlled by the user (or their browser), we could at least do a little bit better by letting that ensure options to confirm or deny are given equal weight and that they are colored appropriately.

It's not like this system couldn't be abused still of course, and there will always be a balance between the user trusting the service and it's UI and the beauty of that UI, but I think we could stand to go a bit in the direction of Gemini.

### Misleading Information

> "Global warming relies on the theory that we are destroying ecosystems. There is no evidence that we could destroy ecosystems."

{{< attribution >}}

Rush Limbaugh, recipient of the Medal Of Freedom.

{{< /attribution >}}

Yes. Misinformation online is a royal fucking shit show. There's no way to possibly preserve total free speech, [not that we should](https://en.wikipedia.org/wiki/Paradox_of_tolerance), and also have a system that doesn't spread misinformation to the extent that people stop vaccinating their kids or thinking that COVID is a hoax. I'm not trying to address that problem. If I could, I would. But I honestly think that's a genie we can't really put back in the bottle now.

Instead, I think we could do some things to make it a bit harder to spread stupid, false information by making it a bit harder to present data in misleading ways. Sure, the data itself may still be bad, but, we can make an attempt to increase transparency and display data accurately. How? Well, first, go have a look at some [comically bad graphs (Statistics How To)](https://www.statisticshowto.com/misleading-graphs/). 

A lot of these come down to graphs that purposefully play with axis or do other bullshit with the express intent of tricking you.

So, fuck their formatting. We should do it the Gemini way: Let the client handle the data display, and make the graphs interactive. If it's a two bar chart with one bar at 54.5% and one bar at 55.0%, that should be what the user sees first and only then can zoom in.

> This is already easy enough to do with something like https://d3js.org/, but it would need to be on the client side, and the server would just have to send the raw data + a preferred way to render it (bar chart or whatever), otherwise the problem is still there. Over time standards could grow to support more display formats. This would have the side effect of making it easier to author data and make web pages in the first place.

This also makes it easier to compare data sets, as now the client actually has access to the source data, or at least the data that drew the graph.

This practice could be incentivized too, as news, shopping, and review sites that use it could do so as a way to build trust with their users, and, probably more importantly for adoption, shit on their competitors that don't do the same.

For those that still don't, it might be possible to spin up a system with some machine learning to extract data from graphs in static images, and then re-display them as dynamic content.

This may not ensure the data is good, but at least it makes progress in increasing how we can trust data to some extent.

This could have extra uses too. Having something that could take two 2D graphs with a common axis and turn it into one 3d graph would be incredible, particularly if that data could come from multiple sources across multiple domains. Combine this with the ability to change the type of graph and this could help expose otherwise non obvious trends.

Beyond that, content moderation needs improvements too - I don't even mean fake news or porn here (Though we could stand to have better nsfw tagging on most social media). I mean the bullshit reviews on Amazon or the fake products when shopping online (mostly fake electronics). If those services are going to be allowed to make stupid amounts of money, they should be required to do at least a tiny bit of consumer protection.

### Information Overload

{{< attribution >}}Yes, I see the irony in a post this long.{{< /attribution >}}

<img src="/hci/times-square.webp" alt="Times Square" style="zoom: 33%;" />

{{< attribution >}}

Bobby Mikul, Times Square :CC0 -- [Source](https://www.publicdomainpictures.net/en/browse-author.php?a=2185)

{{< /attribution >}}

Information overload is increasingly becoming a problem. As more and more information is accessible at our fingertips and more advertisements have the opportunity to be beamed via any one of a number of surrounding screens directly into our retinas we need a way to filter it down to levels the human brain can cope with and digest.

This is a complicated subject, on one hand, it's amazing to have an infinite wealth of information. On the other, an ever growing amount of that information is shit and irreverent, and eats away at our very limited mental processing time for the day, we can only ingest and actively pay attention to or throw out so much information, and when much of the information we seek to avoid (ads) are actively doing everything in their power to demand attention from our brains, be it with sex appeal, bright colors, or even humor, it's an uphill battle. So what can we do? Well, a good start would be to legally limit advertising to be less distracting from normal content **and** make the advertising more easily distinguishable from the real content. But I don't think that's enough. I think if we're going to make systems that have machine learning to get better and better at sucking our time we need to put in just as much effort to making design that promotes health and consumption in moderation.

An example of this is Netflix's 'Are you still watching?' while this was implemented on their end to prevent unnecessary usage of data, it has the side effect of letting a user know they've been on the couch longer than should probably be advised. I'm not advocating for interruptions at every corner, just affirmative action by the user before bombardment with data. I do think as much data as possible should be linked to or aggregated, but force me to see more than what I request plus some surface level information. For something like YouTube this might mean playing a playlist is fine, but don't start playing another 'related' video when that list is over.

Beyond that, keeping the design minimal but powerful. I think markdown is a great example of this. Users aren't as dumb as people seem to think, we can, and do, learn the ways to make interaction with the things we use daily faster, so make the 'speed limit' as fast as it can be while lowering the need for menu diving and learning to do complex actions. Putting a frequently used option into a menu that needs to be clicked at all is much slower than assigning it a keyboard shortcut.

But, okay, back to information overload: The biggest problem is still that there's just too much. I don't really think there is a solution, maybe  [Banning Outdoor Ads like Brazil's Largest City Did](https://newdream.org/blog/sao-paolo-ad-ban), would be a start. Maybe requiring that the Terms of Service for any service a user signs up to be a limited length and actually commendable would help. But I just don't know. I think the world has just simply progressed to a point where FOMO has gone from a fear of missing out has gotten to a point where missing out is just a fact of life as [500 hours of content are uploaded to YouTube every minute.](https://www.tubefilter.com/2019/05/07/number-hours-video-uploaded-to-youtube-per-minute/) 

What I do know is that trusting the YouTube or Facebook or Twitter algorithm to decide the content I see is incredibly dangerous, but that the alternative is overwhelming.

Meanwhile, legislation that has been passed to try to fix some of this often results in other issues, like all the 'Can we give you cookies?' prompts on websites: [Why The Web Is Such A Mess (Youtube - Tom Scott)](https://www.youtube.com/watch?v=OFRjZtYs3wY&ab_channel=TomScott)

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Imagine: drag to select text, pinch to summarize, vertical unpinch to generate alternatives, *inspiration*, record new sentence to replace the old one<br><br>And voilà, you&#39;ve explored multiple directions on the landscape of meaning and rewrote a sentence in just a few moments<br><br>4/4 🧵 <a href="https://t.co/LlcmcY3kpw">pic.twitter.com/LlcmcY3kpw</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1331623023460421632?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Updates after Initial Draw

Fuck your shit. Compute first, then display.

This may be *the most irritating* thing I encounter with modern computers. Our brains and bodies, as much as we may wish them to, don't respond to stimuli right away. So, when I search for something, go to click something, and then while I'm moving the mouse to click the screen updates and a different link or icon is now in the spot I meant to click it's *really* fucking annoying.

Window's built in search, especially with web results on, is a huge offender on this but Google and other search engines do it too.

It's not just search either, I'm sure everyone has encountered this in various places.

All you have to do is not change shit until you're done computing the answer, and then only change it once. This is about as simple as it gets and it avoids magical re-arranging menus that make everyone lose their shit.

### Everything needs to be more damn responsive

*Fuck your 𝒻𝒶𝓃𝒸𝓎 animations.* I love eye candy, and a little bit is fine, but I shouldn't have to wait as a menu slowly drops down with some pretty animation. If I've used that menu before I probably already know where I want to click, and now because I expect to be able to do so instantly I just clicked whatever is behind it. Fuck that. If the animation is masking some load time, sure, but *as soon as* it is loaded, quit it, and show the damn content. If the animation is necessary to avoid suddenly flipping from black to white and blinding users, again, I get it. But it doesn't need to take more than 100ms. 

### Advertising

If I have to spend more than a fraction of a second to process what is being shown to me is an ad, it should be fucking illegal. If you want to put ads mixed into the content, then it should be required to be a lot of a lot more visually obvious.

{{< columns >}}

**Original:**

![](/hci/adbado.webp)

<--->

**Edited:**

![](/hci/adbade.webp)

{{< /columns >}}

Here the original at least has some color differentiation (Using the Boost app to view Reddit) but on the official Twitter client I actually have to stop and look to avoid accidentally clicking an ad link. That's some bull shit.

Yunno what else is bullshit? The fact that all of these ads are 'personalized' to the point that collecting crazy amounts of information on individuals is expected and almost inevitable online, even with a pile of tracking blocking extensions and a DNS blackhole like [pi-hole](https://pi-hole.net). This could, and should, be a rant of it's own. Being spied on by our own devices is 100% not okay and it's one of the biggest reasons that they way we interact with computers sucks.

## Storing Information Sucks

Storing your data blows. Users have to contend with backups, backups for you backups, bitrot, file size vs compression, what file system to use, how to make backups actually convenient, mirroring information between systems with limited bandwidth, etc. But to start somewhere let's look at archival:

### Archival

Digital archival on 'cold storage' sucks. For one, that cold storage is often either a PITA to attach in the first place, Usually using either using a slow USB interface, an expensive and far-from-universal thunderbolt one, or, if you want to go very bulk storage, requiring a specialized PCIe card which is meant for servers which brings along it's own pile of issues.

But even once you have everything attached, most of the time backups are pain to run. You can always do the lazy copy-and-replace-existing method, but that's painfully slow as it has to check all the current files instead of just doing the logical thing and comparing two indexes, but, of course, most file systems don't support this index based method. Sure, there's software to add it, like Bvckup, but most that I can find is paid or not something I would trust.

Using Git (or GitAnnex) is of course an option, but that has a higher barrier to entry to learn than seems reasonable. At the same time having actual file versioning needs to be a thing, something better than having `untitled.docx`, `untitled.docx`,`untitled3final.docx`, and `untitled3.5.finaler.docx`, even if it is still storing the file in full (though hopefully compressed) behind the scenes.

But, on the note of indexes, why are tools to provide a disk-offline index not better. From what I can find, [catcli](https://github.com/deadc0de6/catcli) and [Virtual Volumes View](http://vvvapp.sourceforge.net) are the main two options, and both are bit out of the way to use, compared to just having it be natively in the file browser. 

### Phone ↔ PC is the fucking worst.

MTP needs to die a very painful death. [USB Mass Storage](https://en.wikipedia.org/wiki/Media_Transfer_Protocol#Comparison_with_USB_Mass_Storage), that is, devices that show up the same way a flash drive does, are infinitely easier to work with. On Android, with large folders, I've found [adbfs](https://github.com/zach-klippenstein/adbfs), a tool that lets you do file transfer over Android Debugging Bridge, to be much better than MTP, but, really? No 'normal' user should be expected to use that. Hell, a lot of people are just uploading files to the cloud and then downloading them on the target device because it's easier. There's also a growing number of apps that let users to transfers over wifi by hosting an Samba server on the phone, but why would something wireless be better? It's absolutely crazy that things have gotten this bad. 

### We're using ancient formats

Look, jpeg and png are perfectly fine formats. For 2000. It's 2020. HEIF (or [BPG](https://bellard.org/bpg/)) really should be standard. Instead, it's a motherfucker because M$ is too damn cheap to include the HEVC extensions which it relies on it without either having the user [pay \$0.99](https://www.microsoft.com/en-us/p/hevc-video-extensions/9nmzlz57r3t7) ([or claiming to be the OEM](https://www.microsoft.com/en-us/p/hevc-video-extensions-from-device-manufacturer/9n4wgh0z6vhq)) because a collection of jackasses have it [patented so hard](https://www.hackerfactor.com/blog/index.php?/archives/833-HEIC-Yeah.html) and require licensing fees such that it may as well not exist. HEIF/HEIC or BPG I think have a good chance because of the preexisting hardware acceleration, but other formats like [hific](https://hific.github.io/), which uses GANs to do compression, look promising too.

> As a note about why I wrote about HEIF/C in particular, most phones are capable of storing images in this format now, and IPhones do by default, which is a real PITA if an apple user emails these pictures to a Windows user.

Of course the same applies in other formats. .flac is replacing .wav for high end audio, but why not [Direct Stream Digital (DSD)](https://en.wikipedia.org/wiki/Direct_Stream_Digital)? 

* All the best formats are a pain in the ass
  * format shifting sucks, opening them sucks, patents suck
* People use some really, really shit formats
* A lot of formats are needlessly complicated and not human or computer readable to anyone but the software vendor

### Bit rot?

![XKCD Digital Data](/xkcd/xkcddigitaldata.webp)

{{< attribution >}}

[XKCD #1683](https://xkcd.com/1683/)

{{< /attribution >}}

Data on the internet gets compressed, saved, recompressed, resaved, upscaled, re-colored, and deep-fried pretty quickly.

This combined with more traditional [bit rot](https://en.wikipedia.org/wiki/Data_degradation), where errors result in flipped bits, is a massive PITA.

Sure, tools like [Waifu-2x](https://github.com/nagadomi/waifu2x) help with the first problem, but using AI-up scaling to fix the loss of data isn't ideal. For actual bit rot, tools exist to detect bit errors in most formats and you could always use a better file system that does check summing, but both of these require more technical skill than most people have.

While not exactly related, data accumulation and near-duplication (think having two pictures with one having just a 2px cropped off the top) is a big problem. Trying to sort though a mounting of images, text, or audio files can be nearly impossible if put off for too long, making good digital hygiene a must despite the fact that nobody ever tells anybody how to have good digital hygiene in the first place.

AI tools to tag and identify images and audio help, but those tools are still limited and often only work well on uncompressed data, so no .jpgs or .mp3s for you.

With all of this combined keeping your files in order, not corrupted, and not having duplicates becomes a growing issue.

### Storage Hardware and File systems suck.

The hardware issue is mostly a side effect of trying to market technical differences to people who ultimately just want a place to drop their files. A normal user shouldn't have to know what all the various specs of a HDD or SSD mean to know what to buy.

That said, holy shit do manufactures suck at this. Everything from [Western Digital redefining 'RPM'](https://arstechnica.com/gadgets/2020/09/western-digital-is-trying-to-redefine-the-word-rpm/) to [Western Digital uses SMR on NAS drives](https://arstechnica.com/gadgets/2020/05/western-digital-gets-sued-for-sneaking-smr-disks-into-its-nas-channel/),   [DRAM-less SSDs](https://www.youtube.com/watch?v=ybIXsrLCgdM) and [Bait-and-switch in regards to SSD performance](https://youtu.be/bGY9hEVk_Bc?t=3744).

> SMR, or Shielded Magnetic Recording, has a few issues that make it problematic for Network Attached Storage (NAS) systems using multiple disks, particularly if the NAS is running ZFS, a common file system made exactly for this use case.

But the issues go beyond that. While a bit controversial, I think literally any modern filesystem (BTRFS, ZFS, or even EXT4) is *much* better than the mess that is NTFS, yet, Microsoft only officially supports NTFS, FAT(/32), and ReFS- all of which sorta suck.

There is no fucking reason everyone - Microsoft, Apple, Linux, etc. - can't fucking agree on *something* and avoid the massive fustercluck that is using FAT32, a filesystem that can only store files up to 4GB, as the only common system that "just works". 

> Note, you can use [BTRFS on Windows](https://github.com/maharmstone/btrfs (WinBtrfs)), using 3rd party tools. Technically, the same is true of EXT2/3/4 too, but I don't trust it to not eat my data.

Ideally, we'd be using [Logical Volume Managment](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)) so that the entire filesystem can have snap shots, partitions could be resized, or use multiple physical disks 

I also don't get how in 2021, some system are still booting off of spinning rust? Hell, why are we really using it at all. Yes, I know the price per GB is much lower, but we're talking about something that is so sensitive to vibration that [Shouting In The Datacenter](https://www.youtube.com/watch?v=tDacjrSCeq4) is a problem. This is extra dumb when you consider a lot of computers or game consoles will be right next to speakers and subwoffers. Every time I pickup a laptop with an HDD and I can feel the inertia of the disk it makes me cringe. 

### Cloud Storage is a terrible idea

{{< columns >}}

To keep the core of this issue brief: The cloud is just someone else's computer. You can never be certain of what they'll do to your data.

You can't be sure they won't have some random DMCA complaint take something down.

You can't be sure they won't suddenly increase price and essentially hold continued access to your data at ransom

You can't be sure they won't mine your data for targeted advertising

You can't be sure your data won't accidentally be public because of bad security.

<p style="text-align: center;"> Just don't put your data in the cloud.</p>

<--->

<img src="/nonfree/character/yellsatcloud2.webp" alt="Old Vega Yells at Cloud">

{{< attribution >}}Character owned by Vega, art by [Talon Creations](https://twitter.com/Talon_Creations) and Vega {{< /attribution >}}

{{< /columns >}}

That said, I will admit two valid uses:

1. Collaborative Editing. GSuite is actually pretty cool.
2. Backup but only if the service is *only* backup and you already have at least an on site backup. For example, I think [Backblaze](https://www.backblaze.com) is actually a pretty neat service and it seems like they do things reasonably. The ship you a hard drive option here is what makes it make sense to me. Note, I've never actually used Backblaze.

But 1. still has issues, especially if the format the collaborative documents are saved as are only valid on that cloud platform. Think like .docx for Word, but what does GSuite use? Can you be sure it'll work offline?

I'd also like to mention the idea of distributed computation here as well, as It can be used for both the storage of and computation on data. I think that having a *true* distributed system in place, one where all users contribute compute and storage for it's use, makes sense. The obvious ask is to get it to be self sufficient. This brings up the idea of balanced usage to contribution, I think the easiest solution is to simply use a system of computational debt tied to each user account. If the user is creating more computational debt than the average debt the system can sustain then that user should be handicapped in bandwidth accordingly. This does sort of bring us full circle in 'can I just trade debt with someone, or sell them my computational time' such that we're back to crypto based services again though, and I **really** don't like this idea for two reasons: 

1. This system needs real time computation and bandwidth, and these vary in value just like how electricity peak hours cost more.
2. This incentives simply paying for compute time instead of actually contributing computational power to the network like it actually needs, which in turns creates an incentive for people to do this at scale *annnndd* look at that we're back to centralization.

The biggest problem with this is that home Internet users very rarely have symmetric connections, so people would probably be very pissed off if their download speed were suddenly tied to their upload speed. This *could* be offset by building up credit, as previously mentioned, but that has the issues, as previously mentioned. I suppose there could simply be a credit cap, but setting that would be exceedingly awkward as a logical number to use would vary by user and how they use the system.

I do hope that someone has a better idea than me for the future of distributed computation, because I really can't see any good solutions despite wanting it to be part of the future.

I'd also be remiss if I didn't mention [Boinc](https://boinc.berkeley.edu), a tool you can use to donate unused computational resources from when your computer would be otherwise idle to good causes such as [Searching for Extraterestial Life](https://setiathome.berkeley.edu) or [Folding protiens](https://foldingathome.org) to look for cures to various diseases.

---

Unfortunately, in response to criticisms, like this one, of cloud storage a lot of providers of "Personal Cloud" devices have cropped up. Though, headlines like *[“I’m totally screwed.” WD My Book Live users wake up to find their data deleted](https://arstechnica.com/gadgets/2021/06/mass-data-wipe-in-my-book-devices-prompts-warning-from-western-digital/)* and *[If you have a QNAP NAS, stop what you're doing right now and install latest updates. Do it before Qlocker gets you](https://arstechnica.com/gadgets/2021/06/mass-data-wipe-in-my-book-devices-prompts-warning-from-western-digital/)* might go to show why that's also a pretty fucking stupid idea.

## Transferring Information Sucks

I mostly mean networking, but things like flash drives too.

### The Internet Sucks

Well, okay, the internet is honestly fucking awesome. But some of it is designed horribly and some of it is nowhere near as good as it could be because of users making stupid choices.

To start with, let's look at how horribly shit was designed. As a start, I recommend reading [IPv6 Is a Total Nightmare — This is Why](https://teknikaldomain.me/post/ipv6-is-a-total-nightmare/) by Teknikal, it explains the issues with both IPv4 and IPv6 beautifully. There are other issues with the web, like the fact that neither DNS or IP were designed to be encrypted (and so private) by default, so instead we've had to patch on fixes like http**s**. Of course, there network security problems are found regularly, such as [Nat Slipstreaming](https://samy.pl/slipstream/), a nasty issue that made the rounds recently.

There are also issues of access. In the US at least, most places are part of an ISP regional monopoly. Often they'll argue that you *do* have options, such as satellite internet. However, this is complete and total bull shit. You do *technically* have the option, sure, but this option is slow, usually has data caps, and just generally sucks. If you're in a rural area, you're lucky if the copper in the ground is still good enough to get you something fast enough to watch a YouTube video. Then, on top of all this BS, the ISPs regularly get caught for doing shit to your traffic, whether it be injecting ads, terminating connections early, blocking services (often torrenting), not letting you forward ports, etc. Oh, and then they try to charge you for a modem you don't even have- thankfully that was [just made illegal](https://www.extremetech.com/internet/318570-its-finally-illegal-for-isps-to-charge-rental-fees-for-equipment-you-own).

TLDR; ISPs are evil.

### Centralization Sucks

https://lbry.io/

https://datproject.org/

https://ipfs.io/

### Transferring Your Profile Sucks

 AnIdiotOnTheNet's Comment on [This Hacker New's Submission - 'Re-Thinking the Desktop OS'](https://news.ycombinator.com/item?id=24783387)

> [...]
>
> 5) Switchable "user profiles" instead of "user accounts", which are an artifact of giant shared computer systems. User profile just contains personalized settings and can be located anywhere, including removable media so you can take yours to other computers. If you want to keep things safe from others, encrypt them. Otherwise there are no permissions except those applied to applications themselves.

I think Solid, a project by Prof. Time Berners-Lee, the guy behind the World Wide Web, is a decent implementation of this if it were to gain enough traction to actually be used.

> Solid's central focus is to enable the discovery and sharing of information in a way that preserves privacy. A user stores personal data in "pods", personal online data stores, hosted wherever the user desires. Applications that are authenticated by Solid are allowed to request data if the user has given the application permission.

{{< attribution >}}

[Solid Wikipedia Article](https://en.wikipedia.org/wiki/Solid_(web_decentralization_project))

{{< /attribution >}}

But the point I'm trying to convey is that right now setting up a new device or logging into a service sorta blows. The user profile needs to be secure, user-owned, and decentralized. For those that know Linux, it's what making your `~/.config` folder into a git repo *should* be like.

#### Speaking of "Your Profile"...

[TODO] bad gender pickers, forced "real name", etc.

### Local Backups By Default

Most web pages are reasonably small, especially if you ignore java script crap. Why do browsers not just backup all web pages we go to (on desktops and laptops where storage is a non-issue) ? This would provide the benefit of being able to do a local text search of everything browsed recently as well as backups in case the page goes offline or moves.

There are tools that do this already (like [Archivebox](https://archivebox.io)) which can be automated but it's still not user friendly to normies. There are also sites like [Waybak Machine](https://archive.org/web/) and [Perma.cc](https://perma.cc) that will save copies of websites for you and provide a link that should always work, even if the website goes down or the address changes, but again, this is a bit of a pain. It also can lead to copyright issues for these services.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Why can’t you easily search all of the text you read on any screen (desktop + mobile) over the past day?<br><br>It’s strange how much obvious, low-hanging fruit of this form still exists.</p>— Patrick Collison (@patrickc) <a href="https://twitter.com/patrickc/status/953011978217205760?ref_src=twsrc%5Etfw">January 15, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Physical Interaction

I also think the boundaries of physical and digital should be more blurred. I'd love if I could set a book on my desk and search though it for an idea or concept by mere image recognition of the cover, or if it's an unknown book at least being able to digest any pages shown to it explicitly. Say a section was highlighted? It would be great if that were automatically added to a *personal journal file of sorts* for future reference, especially if related data were automatically associated with online sources, or links made to people who are interested in similar subjects.

[The Screenless Office (Screenl.es)](http://screenl.es/why.html) and [Dynamic Land](https://dynamicland.org) both show this idea pretty well.

## Creating New Information Sucks

**Or, People Will Only Make Stuff That Is As Good As The Tools They Have**

{{< hint info >}}

Note the **Will** and not **Can**. A very talented musician can make [a shovel](https://youtu.be/IyQOw-_H4yE) sound good, a talented photographer [doesn't need a good camera](https://www.kenrockwell.com/tech/notcamera.htm). But in general that's setting the required bar of talent - and therefore time - higher. The better and more efficient our tools are, the better content people can make without putting in more time than they're willing to. 

A better camera won't make you a photographer, but it might be the difference between unusable pictures and a saved memory

{{< /hint >}}

I think I've generally made the case that our tools suck so far, but here's where I think things can get really interesting.

[TODO]

* Faster input
  * WYSIWYG sucks
  * Needing to compile your views also sucks
* Tools need to scale in complexity with the user
  * Start by showing an intro UI, let the user add more features to the UI as needed
  * Great in application documentation
  * Included examples
  * on UI help and highlighting
* Program data type interopability
  * Common in-progress formats for video editors, image editing, sound editing, etc.
* Variety of formats, hard to shift between
  * mp4 or .gif?
* Copyright is a real pain
* Specific Tools for specific needs - a book writing program sholud have world building, outline, and character refrence tools, as well as good revision history 

As far as how all of these tools should work and interact, well, I think they should all use standardized file formats, even if they have to abuse them a little to do so and that they should all have a common Application Programming Interface (API) for interaction. This would hopefully mean that any extension written for one program would work for another, and any program could talk to another. For example, currently the realm of music software has a little bit of this with VSTs and MIDI. but it still leaves a lot to be desired. I'd actually like to take it a step further though and ask that all data of any kind use a common enough format that it can be processed with any extension/program written with this API in mind. Imagine if you could use a synthesizer as a static generator for image manipulation, or color management controls as an EQ. Both would and should behave in strange way, and it's this very lack of defined behavior that could lead to interesting art forms. I'd love to see a 'Master' API that works across all formats and ideas with a common data type that allows for program⟺program, program⟺extension, program⟺hardware, etc. communication even in long, complicated chains. After all, if you've taken a signals and systems course you know that basically any data can be treated as a signal.

This could be done with some sort of node based programming system. While I don't actually know how to use it, I think [Luna](https://www.luna-lang.org/) demonstrates this concept fairly well:

 ![Luna](/hci/luna.webp)

though there are plenty of other examples, like the node editors used for making shaders or programming in Unreal Engine

Potentially this could also plug into the entire OS as well, making it so an image manipulation program's extension could for example modify anything output to the screen in real time, or an audio program could effect the output of anything. For developer's this may even offer more power, making possible things such as inter-process communication (think pipes, like `$ls -la | grep png`) a matter of connecting two nodes, or reading disk information such as activity, space, or even writeback and inode information, this would literally allow any one piece of information to be accessible to any other. This does have obvious permission issues, but unix permissions should already have this under control. If something like this could also be tied into the previously mentioned internet search and socialization 'web' without massive security concerns the potential use cases are as simple as getting color information from an image hosted online to as complicated as remote access or distributed computing.

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Slightly more impressive from a more technical side is that you can reverse search for methods using an expected input-output pair<br><br>For example if you type in &#39;eureka&#39;, &#39;EUREKA&#39; it will return the method &quot;asUppercase&quot; which performs that string operation!<a href="https://t.co/9DpmCuV9hf">https://t.co/9DpmCuV9hf</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1371612552824766477?ref_src=twsrc%5Etfw">March 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Oh, and our systems are fucking racist and suck for anyone with special needs.

### Racist, how can a computer be racist?

Well, okay, this depends on the definition of 'racist' I guess, but there's definitely some issues. There's the more mundane and debatable stuff such as using 'Master/Slave' to denote device control schemes or using the terms whitelist and blacklist for allowed and dis-allowed lists respectively, but those are all results of human naming decisions.

The bigger issue is with AI. There have been a ton of stories now where facial recognition software, used for [test taking](https://www.technologyreview.com/2020/08/07/1006132/software-algorithms-proctoring-online-tests-ai-ethics/) or by [government and police](https://www.aclu.org/news/privacy-technology/how-is-face-recognition-surveillance-technology-racist/), have built in racial biases as a result of learning the same racial biases that made up the data sets to begin with. This is, to put it extremely mildly, not great.

### Special Needs?

Well, yeah. How often do you see more common needs like color blindness accounted for, let alone issues like screen readers. If anything, some of these things are getting *worse*. For example, web design is becoming more and more javascript heavy, which can often result in screen readers just not being able to process much of the text on screen. Meanwhile, applications that everyone is expected to use are becoming complex enough, with more and more rarely used features being shoved into sub-menus that it's harder to interact with them in non traditional ways.

Sure, we're making better hardware to tackle these issues, but a lot of it is pretty expensive.

There's also the problem of making computers accessible to people with metal handicaps. And I'll be honest, this one's rough. Just like how power tools are an extension of our ability to do physical works, computers, I think, are naturally an extension of the mind. If a subset of users have less capable minds to begin with, it's going to be really hard to design around that.

I'm not the best to talk on these issues to begin with though as for the most part my body and mind don't impede the way I work or require special tools. So, instead I'll link to some other articles:

[Software development 450 words per minute](https://www.vincit.fi/fi/software-development-450-words-per-minute/)

[Chapter 3 of 'Buliding Accessible Websites' by Joe Clark](https://joeclark.org/book/sashay/serialization/Chapter03.html) (I think this is written a bit... bluntly. I don't agree with everything here. That said, it's still a good resource)

### Access

While not an issue strictly pertaining to race or disability, there's certainly a bias for those groups to also be poor or in worse circumstances that limit their internet connection or hardware's speed. The solution? Stop making shit so fucking bloated. If you're developing on a high end computer with umpteen cores and enough ram to store the English-only copy of Wikipedia <a class="ptr">(2)</a> make sure to at least *try* it on something else and see if it still works.

## We basically don't even own our computers anymore

Like many things in this far-to-long article, this could be post on its own, but I do think it's necessary to bring up the fact that there's an on going war against general purpose computation. If you've got an hour to kill (or half an hour if you can tolerate 2x speed), this video is basically required viewing:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/HUEvRyemKSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< hint info >}}

A few notes on this video. 

[SOPA](https://en.wikipedia.org/wiki/Stop_Online_Piracy_Act), the Stop Online Piracy Act, is mentioned because at the time it was a big deal. Thankfully, it was indeed stopped.

[Illegal Numbers](https://en.wikipedia.org/wiki/Illegal_number) are a thing, and the history of them is incredibly interesting

{{< /hint >}}

There are also issues on ownership, for example:

[Amazon Sued For Saying You've 'Bought' Movies That It Can Take Away From You](https://www.techdirt.com/articles/20200505/23193344443/amazon-sued-saying-youve-bought-movies-that-it-can-take-away-you.shtml)

[Microsoft Is Closing Its Ebook Store and Taking the Books With It](https://www.popularmechanics.com/technology/a27021744/microsoft-ebook-store-shutdown/)

Not to mention the fact that [updates keep changing how IOT devices work](https://staceyoniot.com/the-unbearable-fussiness-of-the-smart-home/), making them more "needy" as they display more notifications and interupt the user more in a plea to get used (so they can harvest even more data)

<ol hidden id="footnotes">
<li>... unless that service is based around that permission, like denying a recording app access to a microphone.</li>
<li>Currently 17.5Gb - <a href="https://dumps.wikimedia.org/enwiki/20201001/"> https://dumps.wikimedia.org/enwiki/20201001/ </a></li>
</ol>