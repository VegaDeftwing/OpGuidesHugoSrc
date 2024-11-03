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

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Dark_pattern)" >}}

A **dark pattern** is "a user interface that has been carefully crafted to trick users into doing things, such as buying overpriced insurance with their purchase or signing up for recurring bills"

{{< /quote >}}

That's the definition from Wikipedia anyway. I think it's a bit better put as "Dark Patterns are what happens when UI designers are a bag of dicks"

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

{{< quote "Rush Limbaugh, recipient of the Medal Of Freedom." >}}

Global warming relies on the theory that we are destroying ecosystems. There is no evidence that we could destroy ecosystems.

{{< /quote >}}

Yes. Misinformation online is a royal fucking shit show. There's no way to possibly preserve total free speech, [not that free speech is always perfect](https://en.wikipedia.org/wiki/Paradox_of_tolerance), and also have a system that doesn't spread misinformation to the extent that people stop vaccinating their kids or thinking that COVID is a hoax. I'm not trying to address that problem. If I could, I would. But I honestly think that's a genie we can't really put back in the bottle now.

Instead, I think we could do some things to make it a bit harder to spread stupid, false information by making it a bit harder to present data in misleading ways. Sure, the data itself may still be bad, but, we can make an attempt to increase transparency and display data accurately. How? Well, first, go have a look at some [comically bad graphs (Statistics How To)](https://www.statisticshowto.com/misleading-graphs/). 

A lot of these come down to graphs that purposefully play with axis or do other bullshit with the express intent of tricking you.

So, fuck their formatting. We should do it the Gemini way: Let the client handle the data display, and make the graphs interactive. If it's a two bar chart with one bar at 54.5% and one bar at 55.0%, that should be what the user sees first and only then can zoom in.

> This is already easy enough to do with something like https://d3js.org/, but it would need to be on the client side, and the server would just have to send the raw data + a preferred way to render it (bar chart or whatever), otherwise the problem is still there. Over time standards could grow to support more display formats. This would have the side effect of making it easier to author data and make web pages in the first place.

This also makes it easier to compare data sets, as now the client actually has access to the source data, or at least the data that drew the graph.

This practice could be incentivized too, as news, shopping, and review sites that use it could do so as a way to build trust with their users, and, probably more importantly for adoption, shit on their competitors that don't do the same.

For those that still don't, it might be possible to spin up a system with some machine learning to extract data from graphs in static images, and then re-display them as dynamic content.

This may not ensure the data is good, but at least it makes progress in increasing how we can trust data to some extent.

This could have extra uses too. Having something that could take two 2D graphs with a common axis and turn it into one 3d graph would be incredible, particularly if that data could come from multiple sources across multiple domains. Combine this with the ability to change the type of graph and this could help expose otherwise non obvious trends. After all, some of the best discoveries come from random people making cross disciplinary connections.

Beyond that, content moderation needs improvements too - I don't even mean fake news or porn here (Though we could stand to have better nsfw tagging on most social media). I mean the bullshit reviews on Amazon or the fake products when shopping online (mostly fake electronics). If those services are going to be allowed to make stupid amounts of money, they should be required to do at least a tiny bit of consumer protection. Hell, Amazon was even selling [Negative Ion/Anti-5g Products Are Actually RADIOACTIVE (The Thought Emporium, YouTube)](https://www.youtube.com/watch?v=C7TwBUxxIC0).

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

But, okay, back to information overload: The biggest problem is still that there's just too much. I don't really think there is a solution, maybe  [Banning Outdoor Ads like Brazil's Largest City Did](https://newdream.org/blog/sao-paolo-ad-ban), would be a start. Maybe requiring that the Terms of Service for any service a user signs up to be a limited length and actually commendable would help. But I just don't know. I think the world has just simply progressed to a point where FOMO has gotten to a point where missing out is just a fact of life as [500 hours of content are uploaded to YouTube every minute.](https://www.tubefilter.com/2019/05/07/number-hours-video-uploaded-to-youtube-per-minute/) 

What I do know is that trusting the YouTube or Facebook or Twitter algorithm to decide the content I see is incredibly dangerous, but that the alternative is overwhelming.

Meanwhile, legislation that has been passed to try to fix some of this often results in other issues, like all the 'Can we give you cookies?' prompts on websites: [Why The Web Is Such A Mess (Youtube - Tom Scott)](https://www.youtube.com/watch?v=OFRjZtYs3wY&ab_channel=TomScott)

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Imagine: drag to select text, pinch to summarize, vertical unpinch to generate alternatives, *inspiration*, record new sentence to replace the old one<br><br>And voilà, you&#39;ve explored multiple directions on the landscape of meaning and rewrote a sentence in just a few moments<br><br>4/4 🧵 <a href="https://t.co/LlcmcY3kpw">pic.twitter.com/LlcmcY3kpw</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1331623023460421632?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< smalltext >}}[Backup of thread on Archive.org](https://web.archive.org/web/20220720072949/https://twitter.com/azlenelza/status/1331623023460421632){{< /smalltext >}}

### Updates after Initial Draw

Fuck your shit. Compute first, then display.

This may be *the most irritating* thing I encounter with modern computers. Our brains and bodies, as much as we may wish them to, don't respond to stimuli right away. So, when I search for something, go to click something, and then while I'm moving the mouse to click the screen updates and a different link or icon is now in the spot I meant to click it's *really* fucking annoying.

Window's built in search, especially with web results on, is a huge offender on this but Google and other search engines do it too.

It's not just search either, I'm sure everyone has encountered this in various places.

All you have to do is not change shit until you're done computing the answer, and then only change it once. This is about as simple as it gets and it avoids magical re-arranging menus that make everyone lose their shit.

### Everything needs to be more damn responsive

*Fuck your 𝒻𝒶𝓃𝒸𝓎 animations.* I love eye candy, and a little bit is fine, but I shouldn't have to wait as a menu slowly drops down with some pretty animation. If I've used that menu before I probably already know where I want to click, and now because I expect to be able to do so instantly I just clicked whatever is behind it. Fuck that. If the animation is masking some load time, sure, but *as soon as* it is loaded, quit it, and show the damn content. If the animation is necessary to avoid suddenly flipping from black to white and blinding users, again, I get it. But it doesn't need to take more than 100ms. 

### Advertising

TODO: https://modem.io/blog/blog-monetization/

If I have to spend more than a fraction of a second to process what is being shown to me is an ad, it should be fucking illegal. If you want to put ads mixed into the content, then it should be required to be a lot of a lot more visually obvious.

{{< columns >}}

**Original:**

![](/hci/adbado.webp)

<--->

**Edited:**

![](/hci/adbade.webp)

{{< /columns >}}

Here the original at least has some color differentiation (Using the Boost app to view Reddit) but on the official Twitter client I actually have to stop and look to avoid accidentally clicking an ad link. That's some bull shit.

Yunno what else is bullshit? The fact that all of these ads are 'personalized' to the point that collecting crazy amounts of information on individuals is expected and almost inevitable online, even with a pile of tracking blocking extensions and a DNS blackhole like [pi-hole](https://pi-hole.net). This could, and should, be a rant of it's own (and is, again, see the {{< button relref="/Engineering/Networking/privacy" >}}Privacy{{< /button >}} page) Being spied on by our own devices is 100% not okay and it's one of the biggest reasons that they way we interact with computers sucks.