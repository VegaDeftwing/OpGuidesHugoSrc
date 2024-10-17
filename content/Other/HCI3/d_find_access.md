## Finding and Accessing Information Sucks

### Search sucks

If you're like most people, you probably use Google Search, but also don't like Google Search. Google's search makes the entire top of the page ads, tracks you, and is just generally a bit invasive, but, you still probably use it instead of DuckDuckGo because the results often get you to what you're looking for faster.

To some extent things have gotten better as it is gotten easier to search directly from the search bar, with more browsers supporting setting the search engine by a prefix in the url bar, so if, for example, I want to search Wikipedia and directly go to an article, I can just put a 'w' before what I search:

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

Thinking more into the future, I would very much like to see a world where data searching is context aware. For example, say I'm searching for a data sheet for an old vacuum tube and I have a schematic of an old amplifier open in another tab, I would love if the browser saw the context and changed the label in the schematic into a link to this datasheet. Furthermore, it would be great if it crawled the web and finished finding datasheets and linking them, possibly well before I even got to that page in the first place. I know we don't have the tech to do this yet, especially not as a general purpose tool, but I like to think about the future. ¯\\\_(ツ)\_/¯

Another point is the summery of information and omission of the irrelevant info. Say I were to look up bits in a byte, I don't necessarily need the historical context as to why bits are named bits and bytes, bytes, though even though I didn't search it, presenting that a nybble is 4 bits, and how to tell endinan-ness is more relevant, unless I had recently searched historical information or stated I wanted that explicitly. In my opinion we should be less concerned with finding relevant results and more concerned with discarding the irrelevant, though making the verbose available.

I also think that bringing people together, potentially anonymously, based on search and knowledge could be extraordinary valuable. If as I'm looking up 'How to do X' and somebody else is looking up 'How to Do Y, an advanced topic from X' it would be fantastic if we could talk, albeit unobtrusively to the person being requested. It seems to me that searching is desperately lacking a social element and ranking system. How great would a simple Reddit like upvote system on any given search be? What if browsers added a comment system that was hosted though some sort of distributed network and tied to each page so people could leave comments on any site regardless of if the site has comment functionality built in? (Yes, I know this is ripe for spam and abuse, but let me dream...)

Google also needs to quit their shit with information cards:

<blockquote class="twitter-tweet"><p lang="und" dir="ltr"><a href="https://t.co/FPQnLW60Vt">pic.twitter.com/FPQnLW60Vt</a></p>— Randall Munroe (@xkcd) <a href="https://twitter.com/xkcd/status/1333621855001976832?ref_src=twsrc%5Etfw">December 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< attribution >}}[Archive.org backup of tweet](https://web.archive.org/web/20211121235409/https://twitter.com/xkcd/status/1333618685882363904){{< /attribution >}}

And it'd be great if something could actually be done about big sites like [Pinterest and Quora gaming Google](https://www.inputmag.com/culture/pinterest-sucks-google-image-photo-search-ruining-internet).

There is some progress being made here, as [Google Says AI Generated Content Is Against Guidelines](https://www.searchenginejournal.com/google-says-ai-generated-content-is-against-guidelines/444916/); however, a user on Hacker News had an interesting take on this:

{{< quote "[npunt](https://news.ycombinator.com/user?id=npunt) on Hacker News" >}}

This internal tension between chasing AI tooling and avoiding AI-generated content is just a prelude to the bigger shift of search engines getting reinvented around generated results instead of found results.
Fast forward 10+ years and for knowledge-related queries search is going to be more about generated results personalized to our level of understanding that at best quote pages, and more likely just reference them in footnotes as primary inputs.

These knowledge-related queries are where most content farms, low quality blogs, and even many news sites get traffic from today. If the balance of power between offense (generating AI content) and defense (detecting AI content) continues to favor offense, there will be a strong incentive to just throw the whole thing out and go all-in on generated results.

Big question is how incentives play out for the people gathering the knowledge about the world, which is the basis for generated results. Right now many/most make money with advertising, but so do content farms, and more generated results means more starving of that revenue source. For a portion of info that people want to know (e.g. factual info, not opinions, guidance, etc), Wikipedia is an alternative fact- and context-gathering model, but if search relies on it more, it will strain Wikipedia's governance model and become more of a single point of failure.

Really interesting stuff ahead.

{{< /quote >}}

Finally, ~~I do want to end on a positive note~~: [Google is trying to show why results are ranked how they are](https://searchengineland.com/google-now-shows-why-it-ranked-a-specific-search-result-350659), and that's actually pretty cool - though it does still seem [that search results are getting worse, at least according to Hacker News users.](https://news.ycombinator.com/item?id=29392702) Fortunately, there are interesting search engines, both general purpose like [you.com](https://you.com) and more specific, like [lieu](https://lieu.cblgh.org) for searching the [XXIIVV webring](https://webring.xxiivv.com) or the data-oriented [WolframAlpha](https://www.wolframalpha.com). There's also the neat [Hypersearch](https://chrome.google.com/webstore/detail/hypersearch/feojagelicdlhnmldaiplbppfbolnnag) extension which does make google search at least a bit better. Speaking of, the author of Hypersearch has a great blog post on the subject: [If Google sucks then why is everyone still using it?](https://abhinavsharma.com/blog/google-alternatives)

EDIT: Never-fuckin'-mind on that positive note. I wish for the executives that have [abused market dominance and intentionally made their product worse in anti-competitive ways (The Man Who Killed Google Search,
Edward Zitron)](https://www.wheresyoured.at/the-men-who-killed-google/) a 1-way trip straight to a whole new level of hell. 

### Pay-Walls suck

Look, it's not that I don't think journalists shouldn't be paid. They should be. It's just that having everything behind a paywall blows. There's not any fun solution to this. Ads suck too. Nobody wants a web full of micro-transactions, and the idea of news sites mining crypto while I read bothers me too. So, let's just ignore the news sites for a second, and instead, focus on the much more offensive situation: academia and scholarly articles ([not that they're all good to begin with (YouTube, DefCon 26)](https://www.youtube.com/watch?v=ras_VYgA77Q))

It's no secret that access to academic articles is *fucking* expensive. JSTOR alone is \$200 a year for only 85% of the content, some individual articles are well above $20 to read despite a huge portion of it being publicly funded in the first place, yet somehow these sites wonder why so many sites are turning to [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub).

[You Pay to Read Research You Fund. That's *Ludicrous* (WIRED)](https://www.wired.com/2016/04/stealing-publicly-funded-research-isnt-stealing/)

But it's so much worse than that. Tons of information services are subscription based. So, the costs add up way worse. While it may seem like a bit of a stretch, I think it's pretty reasonable to call Netflix, Hulu, etc. all information sources as they often host documentaries. Yet, if we look at [The Cost of Every Streaming Service Per Month (TheStreet)](https://www.thestreet.com/lifestyle/best-streaming-services-cost-15166523), and assume just the most popular ones, so Netflix, Prime Video, and Hulu, it's already at **$418 a year.** Is it really any wonder why people are piracy again? Even if you subscribe to the theory that Piracy is a distribution problem and not a price problem, the pay walls are still the problem, as each service has it's own incentive to hoard as much exclusive content as possible and make their platform better than others for the price. This means that each platform runs on it's own standards and cross-compatibility is a real PITA. There are now websites and apps that specialize in just telling you which streaming service has what. Like what in the fresh fuck. 

As an aside, if you want to get around paywalls you can use [Switch your user agent](https://chrome.google.com/webstore/detail/user-agent-switcher/iojaoainolpgkpojokmeclhidjolocci) to Googlebot, and that will usually immediately let you through.