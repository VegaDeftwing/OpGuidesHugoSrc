---
title: "Improper Language Detected"
slug: "scanoss"
author: "Vega Deftwing"
date: 2024-11-03
draft: false
tags:
- meta
---

## Friday, September 13<sup>th</sup>

On Friday, September 13<sup>th</sup> 2024, I found a new issue had been opened on the GitHub repo for this site. This issue has since been deleted (the page 404's) but I still have the email I got as a notification when the issue was made

> Dear *[@VegaDeftwing](https://github.com/VegaDeftwing)*:
> I hope this message finds you well. From ScanOSS, we are constantly reviewing open source code and noticed the use of language that could be considered vulgar or inappropriate on one of your repositories.
> As you have marked your project as Open Source ([www.github.com/VegaDeftwing/opinionatedguide](http://www.github.com/VegaDeftwing/opinionatedguide)), it's important to maintain a professional and respectful tone throughout the codebase. We kindly ask that you refrain from using such language and update your submission accordingly.
> The next table summarizes our detections:
>
> 
>
> | filepath                                                     | version                                                      |
> | ------------------------------------------------------------ | ------------------------------------------------------------ |
> | en.search-data.min.1ab646fd327edc6d46ab3e91d156cc3a5a14242b044cb67808955dc1fbc9bc78.js | [`d69cb56`](https://github.com/VegaDeftwing/opinionatedguide/commit/d69cb5606a28e678b743cc82679a0768ae4bae67) |
> | [Items removed for this blog post for brevity]               | ...                                                          |
> | opinionatedguide-3d767e0c28dfea1b2cd6b5ad0c58b2df3b0ffdf2/en.search-data.min.0191f7605c4d3e5c1818b4af828f29d6f85936c2d8de5f020159757f899a8036.js | [`3d767e0`](https://github.com/VegaDeftwing/opinionatedguide/commit/3d767e0c28dfea1b2cd6b5ad0c58b2df3b0ffdf2) |
>
> 
>
> Your contributions are valuable to all OSS community, and we appreciate your understanding and cooperation in this matter. If you have any questions or need assistance, please feel free to reach out.
>
> Thank you for your attention
> **The ScanOSS Team**
> [*www.scanoss.com*](https://www.scanoss.com/)

I responded to this as I think anybody would, first, with an IRL reaction approximated by this gif:

![WTF Gif](/eng/wtf.gif)

Then, with a quickly written response:

> [@scanoss](https://github.com/scanoss)
>
> OOPS! Did I swear in my own repo? My bad.
>
> Cursing, and how the open source community represents itself, are - and I can not stress this enough - not a business-polite thing. You're welcome to fork (Within my license terms) and remove them, but given part of open source and a healthy hacker ethos is the counter-culture vibe that made the technology I'm sure even you yourselves use possible, you can
>
> 🎀 𝑔o 𝒻𝓊𝒸𝓀 𝓎o𝓊𝓇𝓈𝑒𝓁𝓋𝑒𝓈 🎀
>
> What you're doing is not helpful to the OSS community, it's helpful to your business partners that profit off open source, and given the trend in industry, do so typically without giving back. You want to do something meaningful? Drop a recurring sponsorship of my website so I can take more time to write guides and cool things using whatever 🎀 𝒻𝓊𝒸𝓀𝒾𝓃𝑔 🎀 language I choose to best convey my intent and feelings.

Note - this response was in **my** repo. I'm a lot more comfortable being this rude and blunt when it's on my lawn, so to speak. You'll see things get a lot more civil - or at least less vulgar -, on my end, from here.

Now, it's worth noting here that I @'d SCANOSS. The bot that opened the issue was [@scanoss-sentry-bot](https://github.com/scanoss-sentry-bot), which (to the best of my knowledge) only made it about an hour before the entire account got nuked from GitHub. I did check to see how many other accounts got hit with the same spam message, but unfortunately I don't remember the number exactly. Suffice to say, it was definitely more than *just* me.

It bothered me that the only repercussion SCANOSS may face for behaving like this might be to get a bot account that doesn't really matter to them banned. So, I decided to look into SCANOSS.

I searched SCANOSS's organization on GitHub for swear words, and lo', they have a project which catalogs open source projects which has, therefore, cataloged "[thefuck](github.com/nvbn/thefuck)" a tool for correcting previously entered console commands.

But, importantly to me, this meant they *technically* had swearing in their own repo, so I copied their original template and did it back to them opening [an issue](https://github.com/scanoss/purl2cpe/issues/24) on their repo titled "Improper Language Detected", just as they had done to me:

> Dear [@scanossdev](https://github.com/scanossdev)
> I hope this message finds you well. From ScanOSS, we are constantly reviewing open source code and noticed the use of language that could be considered vulgar or inappropriate on one of your repositories.
> As you have marked your project as Open Source, it's important to maintain a professional and respectful tone throughout the codebase. We kindly ask that you refrain from using such language and update your submission accordingly.
> The next table summarizes our detections:
>
> Line 2 in [f052433](https://github.com/scanoss/purl2cpe/commit/f052433bfab42fb51d9758af6aaaf5974ce2142e) - [purl2cpe/data/the_fuck_project/the_fuck/cpes.yml](https://github.com/scanoss/purl2cpe/blob/f052433bfab42fb51d9758af6aaaf5974ce2142e/data/the_fuck_project/the_fuck/cpes.yml#L2)
>
> Your contributions are valuable to all OSS community, and we appreciate your understanding and cooperation in this matter. If you have any questions or need assistance, please feel free to reach out.
>
> Thank you for your attention
> The ScanOSS Team
> [www.scanoss.com](https://www.scanoss.com/)
>
> ------
>
> Clearly, I'm being facetious here, but your (Now deleted) bot's comments really rubbed me the wrong way, and blindly deleting it without an apology (assuming you did so, and it wasn't just nuked due to GH TOS violations from reports) isn't cool. I hope you guys have learned your lesson about how your product can have negative consequences too. What you did with that bot was definitively in opposition to the ethos of open source and maker/hacker culture and you owe everybody's whose repository's had an issue opened a direct and sincere apology.

Making sure to include a blurb about why this isn't okay.

Or, TLDR:

![Uno Reverse Card Meme](/fairuse/other/unorev.png)

I shared this with a few friends, who joined in on the fun by quoting my making of the issue with the same template, but calling the use of the work fuck in the above the issue, making it recursive. While a bit spammy, I think fighting absurdity with absurdity can make a point.

![Understanding Recursion: Part 1/4 – Perpetual Enigma](/fairuse/other/recurse.jpg)

At this point, I discovered I had not actually lost the text of my original reply (The one with "🎀 𝑔o 𝒻𝓊𝒸𝓀 𝓎o𝓊𝓇𝓈𝑒𝓁𝓋𝑒𝓈 🎀") as I still had the tab open, so, I added that back in with a bit of surrounding context:

> Oh! Looks like I still had my response to your bot open, so here was my raw, unfiltered, and (Oh no!) vulgar original thoughts, before I toned it down to comment here:
>
> > [same text as above]
>
> That project was https://github.com/VegaDeftwing/opinionatedguide in case you interested in fucking sponsoring me <3 I would really fucking appreciate it!

Now, peeking into the future, this reply as been "Marked as abuse", and, yunno', fair. It's rude, it's not civil discussion. Sure.

## Saturday, September 14<sup>th</sup>

A friend with the GitHub username DarkKirb comments

> also for a more general comment, we share code on github because we think it might be useful for others.
>
> we do not share it so that it becomes part of the software supply chain where we would have to follow random professional standards with none of the compensation.
>
> You might also be appalled by the amount of swearing in some corporate code, potentially even your codebase

![Pacha perfect Meme Generator](/fairuse/other/pacha.jpg)

## Sunday, September 15<sup>th</sup>

There is a single comment from the GitHub issue which has been deleted for being too vulgar. Frankly, I kind of agree. Being well spoken in telling someone to go to hell is an art, and, this individual didn't exactly nail it. I'm not going to repost it here, but that person (I don't know them) did make a blog post: https://stuff.tamius.net/sacred-texts/2024/09/15/we-should-have-gatekept-coding-spaces-a-bit-harder/

I bring this up mostly to say that by this point SCANOSS should've been well aware the potential for bad PR was brewing.

## Wednesday, September 18<sup>th</sup>

It had now been the better part of a week and SCANOSS hadn't responded. I decided to open a ticket on their support system as a way of getting their attention.

> At this point, I'm finding it hard to believe your team isn't aware of https://github.com/scanoss/purl2cpe/issues/24 and the frustrations your bot caused.
>
> The longer you take to respond, the more severe the damage to your business reputation is, and will be, when I and yet more who were affected decide to publish blog posts that show up as early results on Google.
>
> Doing the right thing is free, a bad business reputation isn't. You might want to say something sooner rather than later.

Now, I *fully acknowledge* this comes off aggressive, but here's the thing. I'm somebody with a furry profile pic and a personal site, they're a big-boy adult business. I don't have to be playing by their rules. I'm just letting them know the ball is in play.

Within a a few hours they closed the ticket without responding. But, I'd think that means they saw it.

![](/fairuse/other/ntb.jpg)

## Monday, September 30<sup>th</sup>

<img src="/fairuse/other/twoweeks.jpg" alt="Two Weeks Later... | SpongeBob Time Card #103" style="zoom:50%;" />

It had now been a bit over 2 weeks, the issue had remained open, but ScanOSS hadn't replied. Time to nudge. I looked through their other repos and found what looked to be the most active GitHub account and @'d it in a comment on that issue.

> Hey [@agustingroh](https://github.com/agustingroh) it looks like you're the most frequent committer on SCANOSS repos, thought I'd nudge this to get some attention brought to it. Still awaiting an apology myself, though at this point needing to ask for it makes it rather moot personally, it would still be nice for everyone else SCANOSS spam'd.

At this point I think it's relevant to point out SCANOSS is a Spanish company. Their headquarters are in Madrid, Spain. I am in the US, central time. This makes communication go at about 1 message a day.

So, 9 hours later, ~10:43PM my time, 3 things happen:

1. My last two comments on the issue "🎀 𝑔o 𝒻𝓊𝒸𝓀 𝓎o𝓊𝓇𝓈𝑒𝓁𝓋𝑒𝓈 🎀" and "thought I'd nudge this" get marked as abuse. Now only logged in accounts can see them. This prevents me from responding.
2. The CTO of SCANOSS responds:

> We recently conducted a brief experiment involving contributions to a small set of repositories. Our intentions were to gather insights, but we recognize this was misinterpreted by some community members. We sincerely apologize for any confusion or concern this may have caused. Moving forward, we will be more transparent about our processes and engage more closely with repository maintainers before taking similar actions. Thank you for your understanding as we work to improve our approach. Closing this issue.

3. The issue, as stated, is closed, as not planned.

About 2 hours later, my friend DarkKirb chimes back in. At this point I am blissfully unaware that the CTO has even responded, as I'm asleep.

> I do have two questions i want to have answered:
>
> - Do you commit to not filing these issues unless the repository [owners] use ScanOSS or ask ScanOSS to do so?
> - If not, will you provide instructions on preventing further interactions with your broken bot?

## Tues, October 1<sup>st</sup>

To which the CTO responds,

> [@DarkKirb](https://github.com/DarkKirb) as I expressed earlier, this was an experiment and won’t be repeated. No action required at your end. We are sorry for the inconvenience.

A different, prior commenter (one of the ones participating in the recursive "improper language" meme-ing above) by the name "Firepal" comments:

> same vibe, though this swearbot wasn't so bad:
> https://www.theverge.com/2021/4/30/22410164/linux-kernel-university-of-minnesota-banned-open-source
>
> --
>
> it just seems strange to not mention anywhere in the sent messages that this was an experiment.
> "we are constantly reviewing open source code" lead me to believe this was a routine thing that wouldn't halt.
>
> it's easy to "misinterpret" because it is literally impossible to interpret it as the experiment it was from its messages

Finally, I wake up. I see the updates, and I message DarkKirb on another platform, asking it to reply on my behalf, 

> Vega has asked me to relay this here since you have blocked further communication:
>
> > > engage more closely with repository maintainers before taking similar actions
> >
> > > this was an experiment and won’t be repeated
> >
> > So, which is it?
> >
> > > We sincerely apologize for any confusion or concern this may have caused
> > 
> > Not apologizing for the spam? Not for over 2 weeks to respond? but for "confusion". I wasn't confused. I was angry. I knew what had happened. You had chosen my repository for a test of your bot, a bot which violated GH TOS, without my consent.
> >
> > Now, I have two comments that say "This comment was marked as abuse." from your team, presumably strikes on my account. Strikes originating from me replying to you doing something that was a TOS violation so bad you got an account nuked from GitHub.
> >
> > This isn't an acceptable resolution. When things like this happen it shows if a business and company cares, is this how you want the FOSS community to know SCANOSS?
>
> I’d also like to add that neither of us here has signed up for any experiments by your company. It’s unwarranted and arguably unethical for you to subject us to these experiments. I would like to ask again if there was a method to stop further unwarranted contact from your company, or if you are putting mechanisms into place for this to not happen again, for any future product of yours.

Finally, we get to the real highlight of the show. A message so mind-numbingly tone deaf that it has, at the time of writing, garnered **104** 👎 **reactions** on GitHub.

> Hi [@DarkKirb](https://github.com/DarkKirb),
>
> The terms of service of Github (and the Open Source license of your choice under which your contribution was released), openly allow contributions from other users. Therefore, people looking at contributing to your project don't really need your consent before issuing a PR. You always have the right to accept or reject contributions at your discretion.
>
> Our experiment was based on issuing automatic contributions to some components using bad language (detecting and suggesting the removal of such language). The purpose? Contributing to the adoption of those Open Source components. For your information, bad language is banned in most organizations and, therefore, if you are interested in having adoption of your Open Source, it is good practice to avoid such language.
>
> We really don't need to put any mechanisms in place for this not to happen again. This isn't something we do on a regular basis and, as I mentioned, anyone could contribute to any repo as long as it adheres to Github's ToS.
>
> If you are not willing to receive contributions from the community, if you are not interested in your Open Source contribution gaining adoption, or if you prefer people to sign special agreements to make contributions, perhaps you are better off closing down your repository, making it private.
>
> Hope this helps. Ciao!

## Wrapping up on GitHub

From here, over the next few days there are some interesting comments, though no more replies from SCANOSS between the last one and the last comment on the thread at the time of writing. These comments include humor, debate on how to handle the situation, and explanations to the CTO, Julian Coccia, about why that response is morally wrong and frustrates us so much.

Others have assumed the person commenting under "Sigg-mund" is me using an alt-account on account of them ending with "Yes, I am writing this on a throwaway account.". It is not me. I have no idea who it is.

**I encourage you to go read the issue yourself to see these replies:** https://github.com/scanoss/purl2cpe/issues/24 / [archive.org](https://web.archive.org/web/20241004154416/https://github.com/scanoss/purl2cpe/issues/24)

Still on Oct 1st, a friend links me to a Slack channel where another person got the same issue opened on one of their repos by the ScanOSS bot. I feel like the fact that one of my friends could stumble upon someone else being hit by the bot too, unprompted, really shows how many repos this hit.

## Going off platform

Now at this point I've decided SCANOSS clearly has a message they want the world to see, so I post it to [HackerNews](https://news.ycombinator.com/item?id=41711977#41743291) where it quickly climbs to sit on the front page hovering around positions ~24 for a few hours, before suddenly being slammed down to ~50. I assume being struck by Dang (the moderator of Hacker News) for being drama, which, yeah it totally is.

I'm not going to copy-paste in every comment. Suffice to say, for *days* every comment was strictly against SCANOSS. Everybody commenting agreed this response and the original action were absolutely unacceptable.

## Wednesday, October 2<sup>nd</sup>

At this point, many more people pile onto the GitHub issue, expressing their frustration

I also began looking into SCANOSS and [found they're a member](https://www.scanoss.com/post/scanoss-joins-the-ospo-alliance-a-step-forward-in-democratising-open-source-management) of the [OSPO Alliance](https://ospo-alliance.org) which on their about us says. I've bolded the paragraph that I think is relevant.

> The OSPO Alliance was [launched in June 2021](https://newsroom.eclipse.org/news/announcements/leading-european-open-source-non-profit-organizations-announce-ospo-alliance) by European non profit organisations — OW2, Eclipse Foundation, OpenForum Europe, and Foundation for Public Code — and concerned individuals to promote an approach to excellence in open source software management. Together we created the OSPO Alliance — an open experience-sharing platform to facilitate discovery of tools and best practices and help define the state of the art in this domain.
>
> The OSPO Alliance aims to bring actionable guidance and solutions to all organisations willing to professionally manage the usage, contribution to and publication of open source software, regardless of their size, revenue model or whether public and private. In particular it will help organisations make the best out of the inexorable advance of open source software in their information systems and processes. We will facilitate the discovery and implementation of tools and best practices when engaging with open source software.
>
> **By professionalizing the management of open source software, the OSPO Alliance will make engaging with open source software less risky and more predictable. It will lower barriers to adoption of open source and will enable organisations to leverage it to enhance their digital sovereignty.**
>
> Interested in joining the OSPO Alliance? Sign our [statement of support](https://ospo-alliance.org/docs/statement_of_support.pdf) to join our members and partners.

Uh. Sure, I guess. This really reads to me as "We want to use FOSS to make money, so we need to make it look professional", but okay, whatever. Reading some more on their site I found

> - We see open source governance as requiring engaging with the whole ecosystem – supporting local communities, nurturing a healthy relationship with open source software vendors and cultivating service specialists.

and

> - **Different types of people**: People working with open source often have different incentives and mindsets than with pure proprietary, corporate people. Processes and mindsets need to adapt to this community reputation-oriented paradigm, in order to attract new types of talent and retain them along.

So, I don't think they're really fitting that mission all too well.

Digging on their forum, [they have Code Of Conduct](https://forum.ospo-alliance.org/t/code-of-conduct/36). I'd argue what SCANOSS has said so far goes against this, so I threw them a report.

> Hello,
>
> I apologize to first be interacting with OSPO for the sake of a report. It seems as though the organization and it's members generally do great things and have a fantastic shared mission.
>
> Unfortunately, it appears one of your members may not be a good fit.
>
> See https://github.com/scanoss/purl2cpe/issues/24 and ScanOSS's CTO's responses on the thread.
>
> As additional context, the original text of the issue is modified from a template used by a bot made by ScanOSS which opened issues on hundreds of open source repositories, many of which were small, personal projects of individuals, to tell them to not use vulgar language.
>
> This being done by a bot, instead of a human being, is already in violation of GitHub's terms of service and acceptable use policies, but is also just generally morally wrong. The response from ScanOSS, I felt, warranted more accountability such that I'm reaching out to you.
>
> Thank you,
>
> \- Vega Carlson

## Thursday, October 3<sup>rd</sup>

This is when things got **weird**.

The Hacker News thread, which up until now had only had comments that were in agreement with me, had a comment over night. Keep in mind, this is days after the thread being made, so few new people should be seeing it *unless* they have some interest in it.

> From *quiquetdl* 
>
> Honestly, I see no valid reason for users to be upset. What I see is a group of disgruntled individuals who have been reprimanded for their use of vulgar language. These same individuals have made comments that range from violating the code of conduct of an open project to falsifying information, impersonation, and even extortion. For the sake of free
> software, I hope SCANOSS takes legal action against these individuals or their guardians

To which, I replied:

> Account created today, using the username "quiquetdl". Google that user name. Only other account is "Quique Goñi (quiquetdl)" on Pinterest. Google ""Quique" Goñi ScanOSS"
>
> Oh, quique.goni@scanoss.com exists. HM. I wonder if maybe you might have some bias in this?
>
> What CoC did we violate, by the way? You're the ones who came into my repo with a bot and used a bot to tell me not to swear. Which, again, is a violation of GH TOS.
>
> I have not falsified information, impersonated anyone, or extorted anyone. If I have, I welcome you to show it. Make a blog post, post it here, whatever.
>
> Hell, sue me. I've emailed you guys with my personal email a few times and offered to call on Zoom or with phone.
>
> As for "or their guardians" I'm an adult, though given you're pretending not be associated with your employer I'm questioning if anyone at ScanOSS is.

NOW, *technically*, it is possible that this is just some random HN user and not actually the same person. But, really, what are the odds of that?

It is absolutely mind blowing to me that SCANOSS would let an employee comment like this, representing their business. It's even crazier to me that they've lied about me falsifying information, impersonating, and even extorting them. I hope this blog post proves none of that is true.

## Friday, October 4<sup>th</sup>

I found that SCANOSS is also a part of the Eclipse Foundation, so I sent an email their way as well:

> Hello,
>
> SCANOSS, an Eclipse Foundation member, has proven actively hostile to open source projects in the last weeks, with commentary from their CTO not reflecting well on organizations they're a part of.
>
> Please see this GitHub issue: https://github.com/scanoss/purl2cpe/issues/24 , notably comments from the user "juliancoccia" the CTO of SCANOSS.
>
> As for context, the start of that issue is copy-paste of the same message template they used to spam hundreds of open source projects.
>
> Furthermore, see the comment from "quiquetdl", a SCANOSS employee, on the Hacker News comments on this issue, https://news.ycombinator.com/item?id=41711977 .
>
> This is not behavior I would expect of a member of your organization.
>
> Thank you,
>
> \- Vega Carlson

## Who is SCANOSS?

Let me begin with a message to anyone who finds themselves on the wrong end of a parade of people dressed as douches like we have here in the future: Once you've seen more than one, you can assume it keeps going.

In a moment you'll be exposed to references to AI, Blockchain, etc. but I wouldn't have found any of this if it wasn't for one thing:

![bs](/fairuse/other/bs.png)

From the get-go everything I was seeing struck me a business that wanted us normies, those of us that aren't corpo-shills to go away as quickly as possible and wanted to profit off the work of FOSS maintainers without engaging with them politely. As if they don't want to be found by anyone *except* prospective customers. That just absolutely reeks of bullshit. So, I started digging though it. And man, was it.

Perusing https://www.scanoss.com for people that don't speak the corporate drone dialect of English is rough. I've done my best to parse it back out, but it's such dense business speak that I'm not sure I did correctly. So, since I know you're reading this SCANOSS and, presumably, would really like to sue me:

I *might* be wrong about some of this. I don't care to use or even understand why this (as jeroenhd on HN put it) "managerware" works, but I need to know enough to write this post. 

Most basically, they seem to exist to make a "SBOM" or **S**oftware **B**ill **O**f **M**aterials, basically, tracking what software/code is integrated into other software. Mostly, this seems to be being done for license compliance. Making sure their clients don't use open source software in a way that violates the license of that software.

Ostensibly that's a good thing, but actually, I don't know. Far as I can tell, it's required for regulatory compliance in some situations/regions, but if you're using so much fucking open source code in your development of something that you can't keep track of it without automated tooling you're also sure as shit not paying it forward and contributing to those projects with code or money, so, uh, I *personally* think it's a bit gross.

<img src="/fairuse/other/scanossmeme.png" style="height:30em;">

They also have a mostly copy-pasted blurb justifying the same functionality has a use case for Export Compliance (Ensuring that code is actually legal to export, I guess? I've seen stuff like this for FPGA stuff before, so 🤷‍♂️)

Sure, okay, finally to something that starts to put up a not-even-yellow-but-like-hmmmmm-flag for me,

They also have a page about detecting AI generated code or if AI generated code includes other open source code:

> AI-generated code is becoming more pervasive, and the risk of accidentally ingesting fragments of third party code is real. Our language-agnostic platform offers a robust solution for detecting Open Source in AI-generated code across multiple languages: 
>
> * Identification of Open Source components, files, or snippets
> * Alert mechanisms for potential compliance or security risks
> * Flagging of code that may have export or license implications
>
> ---
>
> We use our vast database of over 202 million indexed URLs to offer unparalleled accuracy in detecting Open Source in AI-generated code. Regardless of the programming language, our engine can identify, flag, and help you manage detected Open Source efficiently. 

Okay, this should be sounding some bullshit detectors. For one, poor detection of AI anything has become a bit of a meme of late, as students in high schools and colleges everywhere have been posting about how papers they've written legitimately keep getting flagged as AI. Is it *possible* their system is better? Sure. I have no experience directly with the product to say it's not, but with that mostly just cover my ass disclaimer out of the way: Is it probably? Fuck no. It doesn't take a genius to look at that claim and go "Yep, bullshit."

But, even more relevant to me **"202 million indexed URLs"**. So, again, I don't have an insider knowledge but I can a pretty good educated guess at translating that to "We scanned all of GitHub, GitLab, etc. and built our product on nothing more than selling easy tracking of your hard work to other people, without you" Which, yunno', I think I had the perfect reaction to that earlier, oh, yeah.

🎀 𝑔o 𝒻𝓊𝒸𝓀 𝓎o𝓊𝓇𝓈𝑒𝓁𝓋𝑒𝓈 🎀

Anyway, we're only at the tip of the iceberg here, because remember our good friend Julian Coccia, the CTO of SCANOSS. Let's give him a Google. Huh, first result isn't for SCANOSS, it's for "Fossity" for which he [appears to be the "Founder and CEO"](https://theorg.com/org/fossity/org-chart/julian-coccia), what's that?

Well, we have https://www.fossity.com to tell us. After parsing the corpo speak yet again, I *think* what they do is make a report of what you've used in your code to tell auditors what's there without having to actually share your code,

> The Fossity Probe **captures basic information and fingerprints from your code.** These fingerprints provide auditors with the information they need to perform your audit, without requiring the transfer of any sensitive information from your code or company.

Which, uh, sounds a whole lot like what SCANOSS is. And, like ScanOSS, the company is based in Madrid. I find it a bit curious that he's both the CTO of ScanOSS and CEO of Fossity. At the very least, looks like there might be some corpo-incest taking place. Not enough information for me to go on, but weird. Weird it's not disclosed. Weird that fossity.com doesn't have a cutesy "Meet the team" page. Weird that neither SCANOSS or Fossity have any quotes from happy customers or "Proudly used by [List of customers]". Just, weird. 

But, of course, that's not where this story ends.

Remember our friend `quiquetdl` which I unmasked to be Quique Goñi, an employee of SCANOSS by finding his email, let's google that email. Digging around a bit, we find:

https://www.softwaretransparency.org/board

We have a match, bois. Both Julian Coccia and Quieue (Actually Oscar) are on the board. Given they have transparency in the name, let's see what they're all about.

On the mission page, very first point: **Driving adoption of SBOM**. HMMM. More fun, they have a link in the top right labeled "FREE Scanners" which, if you go to, never uses the name SCANOSS on the page *BUT* the links download from `download.scanoss.com`. That's not very transparent of them.

If we go to the Sponsors page of the Software Transparency Foundation website, we see under "Diamond Sponsors" both SCANOSS and Fossity. Interesting. They're also sponsored by some universities. Let's go check, what *kind* of organization is the STF. 

Well, on Twitter, they list themselves as a "Non-Governmental & Nonprofit Organization"

Googling a bit, I found [This document](https://www.boe.es/boe/dias/2023/05/19/pdfs/BOE-A-2023-11865.pdf). Translating some sections,

> [...] The aforementioned Foundation was established by the commercial entity Scan Open Source
> Solutions, S.L. [...]

So, I don't realllly know what I'm looking at, but it sure looks like yet more corpo-incest but something-something using a non-profit as a shell, maybe for tax reasons?

But, digging a bit deeper we have this nugget on the "Mission" page

> ### Abstraction layer for Blockchain transaction fees
>
> Our goal is not only to develop and maintain the decentralized SBOM ledger, but also to provide easy access to our sponsors by eliminating the need of cryptocurrencies to cover transaction fees.
>
> We are committed to providing our sponsors with free access to the SBOM ledger in the blockchain.

HMMM. So, we have AI, Blockchain, two businesses sharing a CTO/CEO and a "Transparency" foundation that seems like it only exists. 

In case we need a bit of extra proof, Two silver sponsors of the STF are "BAES Blockchain Lab" and "Blockchainfue", which, uh, seems to be itself a bit muddles as BAES's page says "current projects include LegalCripto and BlockchainFUE.", so, I guess they're sponsoring the STF twice?

If you'll allow me to cover my ass for a moment, I'm not saying they're doing anything illegal, immoral, etc.

I am saying, it would be be, uh, interesting, if they got audited. What do you get when you combine AI, Blockchain, layers of business that aren't transparent about their association, and leadership that's so cocky as to say the things seen in this post? I don't know, but it sure would be interesting if someone looked into it.

I honestly think this story goes a bit deeper too, just I don't have the investigative journalism skills too get the full picture. I see SCANOSS is a [Sponsor of the Software Heritage non-profit](https://www.softwareheritage.org/support/sponsors/), which lately seems to be mostly being used as a provider or large datasets to train LLMs on. I wouldn't be shocked to find there's something fucky going on here with ScanOSS operating though the "Software Transparency Foundation" to associate license data with Software Heritage's archive for use by big industry players making LLMs that want to be insulated from the PR consequences of using that data in a commercial way. But, without more information that's just a tin-foil hat guess more than anything.

## Respect sometimes means asking first

While SCANOSS doesn't directly say what repos they scan, we can, given the relationship with the STF, make what seems like a very likely assumption that they are the same repos, and the STF *does* say who they scan: https://www.softwaretransparency.org/osskb

So, simple question: Did they ask first?

Now, I'm not even saying the *need to*, not legally (Though, there may be a legitimate copyright case depending on the licences, what data they collect, and how they use it), at least. Morally, yeah, I think so. If you build your business on "scanning" other people's work, I think you should ask permission.

I opened up two github issues, one for [sl4j.org](https://github.com/qos-ch/slf4j/issues/434) and another for [sudo.ws](https://github.com/sudo-project/sudo/issues/413). I also emailed the maintainer of nmap.org.

A maintainer (the creator?) of sudo.ws replied

>Hello, I saw that SCANOSS was scanning sudo.ws ( They brag about it on https://www.softwaretransparency.org/osskb ) I was curious if they'd gotten permission to do this?

> Nobody contacted me about scanning sudo.ws but I suppose it is not much different from other web crawlers indexing the site. I'm not sure what they are getting out of it that they couldn't just get from GitHub.

Similarly, someone actually affiliated with slf4j replied to the issue I made there:

> Hello, I saw on https://www.softwaretransparency.org/osskb that they're scanning slf4j.org
>
> I was curious if they'd requested prior permission to do this?

> [@VegaDeftwing](https://github.com/VegaDeftwing) What type of information are they extracting?

So, that's a resounding "No" from https://www.sudo.ws, and a less-conclusive-but-certainly-sounds-like-"no" from slf4j.org

Which, again, isn't conclusive, but to me at least implies he wasn't previously aware of the scanning.

What about the other, big sites though? For example, they list StackOverflow. Well, I haven't reached out for comment, but unless they have it would *appear* to me that this is *probably* a violation of their [robots.txt](https://stackoverflow.com/robots.txt) file, at the minimum. I did shoot an email over to StackOverflow about this too, though I don't expect a reply.

## Conclusion

Dear Mr. Coccia,

![](/fairuse/other/fu.gif)

