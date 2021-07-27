+++
bookToC = false
+++
# An Interview With Soatok Dreamseeker

**12/3/2020**

<img src="/soatok.jpg" alt="Soatok" height="200em">

**Thank you for taking the time for this interview Soatok. Your blog at https://soatok.blog shows that you're a furry crypto nerd, but I'd like to hear how you'd put it, so, to get started, can you describe yourself?**

Whenever I'm asked, I usually say something to the effect of, "I'm a security engineer with a dhole fursona that sometimes writes about cryptography on my furry blog."

There's actually a lot more to the story than that, but *comical understatement* is somewhat an unspoken tradition among my technical friends. (I can't tell if it's humility or impostor syndrome with them.)

Outside my fandom persona, I've written the code that helps to secure a double digit percentage of the websites on the Internet. I work on a cryptography team at an unspecified technology company. I'm very deeply immersed in this stuff, for the good of the Internet, and even if I didn't *set out* to talk about cryptography topics, it would leak out (as it often does with my dumb Twitter jokes).

**What are some your favorite projects you've worked on?**

My favorite project is usually whatever I'm working on at a given moment.

In the past, I've implemented a full suite of [constant-time JavaScript algorithms](https://github.com/soatok/constant-time-js), only to discover Thomas Pornin already did [something similar for C](https://github.com/pornin/CTTK).

My current project involves creating a series of open source libraries to make it easier for JavaScript developers to implement end-to-end encryption in their own applications.

**Why Javascript?**

Cryptographers have an orthodoxy that loosely follows the same battle lines as infosec opinions on programming languages: **PHP bad, JavaScript harmful**.

I think the *intent* is, if they neglect these languages, they can exert some sort of bastard lovechild of market pressure and darwinism to coerce developers onto programming languages that are more suitable to secure cryptography than the ones they're already using.

In practice, this just means that the programming languages that most of us use are less safe than they could be, and the ivory tower academics and infosec thought leaders just hold their nose up to the thought of meeting them halfway. This makes the Internet less secure for us all.

**It's interesting to me that you're so openly furry and mix that in with all of your more technical posts about cryptography, much like I have here on OpGuides. Why did you make the decision to do both under one unified identity and what has the reaction to that been like?**

I love the furry fandom and I'm deeply fascinated by security topics, so it's an obvious cross-over for me. But there is more to it than just that!

I mentored a few folks over the years, and tried to nudge many more towards supportive, accepting, and uplifting venues. Almost everyone involved in that was deathly terrified of, for example, hiring managers finding out about their fandom participation.

We both know this, but a lot of business people do not: The furry fandom is widely regarded as a LGBT subculture. Discriminating against people who participate in our community is a good way to undermine your own diversity and inclusion initiatives.

Being openly and shamelessly my furry self is an easy opportunity for me to normalize our community to companies that hire security analysts, programmers, or cryptographers. This has a few effects:

1. Hiring managers are more exposed to furries in tech, which makes them less likely to react badly if someone discloses their hobbies during an interview (whether or not they intended to).
2. Neophytes get to see someone with a lot of experience in the industry be openly weird, so they will be a little more comfortable in their own fur.
3. Queerphobes that use anti-furry hate as a dog-whistle out themselves on social media in droves, which helps identify which companies should be avoided.
4. The rarest consequence, but has happened to me about a half-dozen times in my career: More tech people that were incidentally furry become open about it when they see no significant ill befall me.

I hope it's clear that the end result is a net positive, even if the prospect of doing what I do is a little scary to a lot of people.

**If you could go back and make the decision to post under two different personas, would you? at least in part?**

Nope! Game Theory says it's the optimal strategy.

**Cryptography is under constant attack from the US government. Do you think there are things the US government should do related to crypto?**

The US government should really stop trying to give the Department of Justice a backdoor.

Like, I get it: Their bottoms still need a regular powdering after Edward Snowden revealed the NSA was literally spying on everyone. They wanted to keep abusing their power with impunity and secrecy, and now they can't. Boo hoo.

But if they're really as interested in "protecting the children" as they like to claim, they'd invest more in end-to-end encryption and tougher privacy protections; especially but not exclusively for kids!

**What are your thoughts on cryptocurrency? Are you concerned about the environmental cost from the electricity mining uses?**

Cryptocurrency is a mixed bag, and it's hard to give a succinct answer.

On one paw, it's one of the most reliable revenue sources for advancements in cryptography. A lot of the work on practical zero-knowledge proofs happening today is the result of Zcash and Ethereum developers trading recipes and not being preoccupied with Line of Business development work at their dayjob.

On the other, it's a magnet for unscrupulous hacks and ancap tech bros. You know the type: They hate the state and want governments to get off their back, but they love the hierarchies of capitalism and the privileges of private property and systemic state violence that serves the interests of the wealthy? If you see "Bitcoin maximalist" in someone's Twitter bio, 99 times out of 100, you're dealing with that beast.

**What changes do you think should be made to social media platforms to give users the best combination of privacy, ease of use, and security?** 

Public messages (e.g. tweets) should have slightly more granular access controls than the current all-or-nothing approach (Is your account public or private?).

Public messages should be editable (with a public changelog). Replies should be clearly marked if they were directed at a previous version, and the option to view them *in context* should be available.

Private messages should be end-to-end encrypted, using keys that the platforms cannot access.

**If you could go back and redesign any part of how the internet works, what would you change?**

I would have encrypted every packet from day one, rather than slowly bolting it on years later. For example: Email encryption is *still* opportunistic in 2020. We've only started addressing DNS privacy. (Note: DNS privacy is a good problem to solve; DNSSEC is stupid.)

**Last week the CEO's of Facebook and Twitter just went to a congressional hearing about §230 of the CDA, where many  senators expressed concern about biases in how tweets and posts are flagged for misinformation and how accounts are suspended for Terms Of Service violations. How do you think this problem should be addressed moving forwards?**

Assuming they're being even mildly honest about anything (which I don't really believe), Silicon Valley needs to get over their fear of the perception of having anti-conservative bias. This fear leads to them tolerating hate speech and rallying cries for racist and transphobic violence.

Facebook is unsalvageable.

I previously touched on [defeating coordinated inauthentic behavior at scale](https://medium.com/@soatok/defeating-coordinated-inauthentic-behavior-at-scale-a872badf721) in my Medium writing days.

(My Medium writing days ended because I got tired of their constant pressure to monetize my writing. I'm happy to pay for the privilege of publishing my ideas, ad-free, without a paywall.)

**Having just gone though the 2020 election, with what seem to be mass unfounded allegations of voter fraud, do you think electronic voting, potentially over the internet, should have been used?**

No.

What's the failure mode for a hacked election? You can't just *roll back* a political career advancement.

The threat model for elections is incompatible with the BYOB mental model of consumer electronics (which is what people imply when they talk about electronic voting).

Paper ballots. You need an audit trail that technology cannot tamper with.

**The repository for YouTubeDL, a popular tool for downloading videos off of many more sites than just YouTube, was taken down from GitHub recently as a result of a DMCA take down notice from the RIAA, in part because they were using copyrighted videos in their test cases to ensure their method of bypassing YouTubes 'Rolling Cipher' code worked. What do you think about this?**

The RIAA is a blight upon the Internet and needs to be dismantled, but only after we tear down JSTOR and Elsevier. Remember Aaron Swartz.

The EFF does a lot of good work to oppose tyrants like the RIAA.

**What are your thoughts about bypassing Digital Rights Management (DRM) in general?**

DRM is diametrically opposed to endpoint security, transparency, and trustworthy computing. Only corporate shills that sold their soul to the intellectual property machine ever think DRM is a good idea for consumer devices.

*That being said*, the notion of using DRM to run code in "the cloud" that the cloud service providers cannot understand or tamper with is very attractive. But that's an inversion of the normal power dynamic.

**Do you think society has been negatively or positively impacted by the way the Internet and social media has changed how people interact?**

I think it's mildly positive. It'd be significantly more positive if tech companies took coordinated inauthentic behavior, misinformation, and propaganda more seriously 10 years ago.

There's a lot to hate. But I wouldn't have known about the furry fandom--let alone ever participated in it--if it weren't for the Internet and social media.

**As time moves on there is at least some growing public understanding of cryptographic security, like HTTPs and why someone may want their phone to be encrypted, etc. - Do you think it's necessary that the public have an even better understanding than what is currently normal? What things do you think most people miss that could be easily taught?**

People don't need a graduate course in number theory and CS101 descriptions of RSA, which is what the cryptography orthodoxy pawned off on the public.

I wrote a guide to [learning cryptography as a programmer](https://soatok.blog/2020/06/10/how-to-learn-cryptography-as-a-programmer/) earlier this year.

We as an industry need to spend some time talking to the UX experts, technical writers, and science communicators of the world and devise a concise and coherent public education strategy. Until that happens, we'll continue to flounder around in the dark *but* some of us will make better and easier-to-use tools, so things won't be so bad.

**Is there any skill you wish you had developed in a formal education that you didn't?**

There's a lot of academic formality that I missed out on, including:

 * How to write a whitepaper for a scientific journal. In {{< katex >}} \LaTeX {{< /katex >}}.
 * Familiarity with the mathematician jargon (especially lambda calculus) that obfuscates intuition.
 * How to not be a filthy degenerate (or so my detractors say).

**When doing crypto stuff, what does your work environment look like?**

It depends what I'm doing.

Most of my open source security work over the years involved a web browser with Github.com on one monitor, and Notepad++ in the other. Nothing too fancy.

If I'm reverse engineering (e.g. Android apps), I'll boot up a Virtualbox machine and fullscreen it on one of the monitors.

I do find good background music indespensible to deep analytic work. [Time I by Wintersun](https://vimeo.com/51606428) and [Malcom Robinson's *Chrono Trigger Orchestral Selections*](https://www.youtube.com/watch?v=ECc-kDhobls&list=OLAK5uy_niuMMAdpm1ZjjBi3jFfRap7UlOQIAJNQE) are two playlists you'll hear emit from my bedroom all day long.

I've worked from home for most of my career, and for the entire past 6 years, so my home computer setup is pretty sweet.

**Is there any skill that you spent too much time developing that you wish you hadn't?**

Not particularly. There’s no such thing as useless knowledge; only stuff you don’t want to use, or don’t know how.

**What's the most important skill that you've taught yourself?**

Active listening. Hands down.

The most stressful problems you will ever encounter in almost any profession is either, at its core, a communication problem, or the consequence of one.

That being said, I didn't entirely teach it to myself. My close friends (a.k.a. chosen family) were all deeply involved in those lessons. :3

**What do you do for fun? Any books, movies, TV shows, etc. that you'd recommend?**

I frequently play co-op video games with my chosen family. We're currently experiencing Final Fantaxy XIV together, and looking forward to Corepunk when it comes out.

(Sometimes we even stream our gameplay, but usually on [this channel](https://twitch.tv/doomalorian).)

**What's the biggest 'Oh Shit' moment you've ever had, be it one you caught in time or not?**

One time I was migrating a PostgreSQL cluster at night, and I accidentally typed the `rm` command into the wrong terminal.

I called my boss and then we discovered the backup software had been failing for nearly a month. (I did have a manual snapshot from a week ago, but that was a week of data lost.)

Not a fun year.

**Who are your biggest inspirations? What creators do you think are way to underrated and deserve a shout out?**

There are too many people to list. I feel like I'd do everyone a disservice if I tried. Too many artists, too many musicians, too many videographers, too many photographers, too many dancers.

Maybe if I could Ctrl+A, Ctrl+C the furry fandom (sans the alt-right), that'd be closer to the comprehensive list.

Outside of the fandom, [my best friend](https://twitter.com/Doomalorian) of 12+ years [recently made a fursona](https://twitter.com/BelmontLion).

I'm very fortunate to count [@SwiftOnSecurity](https://twitter.com/SwiftOnSecurity) among my friends too.

**What's the best advice you've ever received? Worst?**

Best (all from my best friend over the years):

 * *Just because you can doesn't mean you should.*
 * *The truest measure of a person is what they do when they think no one is watchng.*
 * *Power is temporary; what you do with it when you have it is what counts.* 

Worst:

 * *You need to find God* -- annoying person in my high school

**How do you stay motivated to keep doing cool things?**

At this point, it's a habit for me. But early on, I was motivated largely by *spite*.

I got my start in tech by playing with a program called RPG Maker, and I decided to make a website for my personal projects. The indie game community back then was **super toxic**, so people in the community kept hacking my website. (My early PHP wasn't very good.) I got angry and decided I would learn about web application security to stop them from breaking in.

Years later, one of the perpetrators admitted to me what they were doing. By then, I was long over it.

**What hobby do you want to get into but haven't had a chance to dive into yet?**

I have absolutely no musical talent. I'm getting a fursuit soon. Therefore, I figured learning to dance would be pretty cool :3
