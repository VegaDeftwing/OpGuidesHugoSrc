+++
bookToC = false
+++
# An Interview With Cendyne

<!-- If you see a natural follow up question to an answer, feel free to ask yourself. If you want to use some pictures and format things like you do on your website, let me know, we can make it work. Anything you see on https://opguides.info/webdev/ is easy to do, and any HTML, JS, CSS you put in this document should work.-->

**12/30/2022**

<img src="/nonfree/interviews/cendyne_pixel.png" alt="Cendyne" style="height:15em">


{{< iquestion >}}
**Thank you for taking the time for this interview Cendyne. Your blog at [Cendyne.dev](https://cendyne.dev/posts/) has a mix of crytography and tips for leadership and planning. Other than those things, what are your interests? What are you passionate about and why?**
{{< /iquestion >}}

Within tech, security is an ever evolving source of new things to see. I listen to podcasts every other day that mention the new details on where [Lockbit affiliates are targeting hospitals](https://www.beckershospitalreview.com/cybersecurity/feds-warn-healthcare-sector-about-lockbit-3-0-ransomware-threat.html), patch this and that, an analysis of some NSO malware, and so on. I do not run any Microsoft Exchange servers myself or for work, but given how often some of these companies are in the news, I can only sympathize with those that deploy their technology and shake my head at the creators. Furry twitter is fun, but Infosec twitter actually engages me each day. Today, you will find these people on mastodon and the wealth of information there is even more refined than before.

Outside of all the work and tech stuff, I like wood working and modifying my home. There are still open cutouts in the ceiling all over from routing unterminated CAT6 between floors and rooms. I have also done electrical and I have an inspection pass card on my fridge like some children's drawing to be proud of.

{{< iquestion >}}
**You present yourself online as a Lugia-Snake Naga, what's the story behind that?**
{{< /iquestion >}}

I felt disconnected from many qualities of life before the pandemic. My professional interests morphed to an evolving curiosity in cryptography and security and I felt like I needed a fresh take on who I was.
When I realized that I was *wanting* to have a new self, I began collecting any image I felt like I related to in its own album on my ipad. As a collage, it contained many unrelated pieces. Two or three months later I felt I had enough material and examined every piece asking myself "where am I in this?" I think I did a rigorous scientific observational study to find exactly what traits mattered to me.

Then I found an artist who would tolerate a large amount of time between sketches, lines, colors, and so on and worked with them. Once the silhouette was figured out, I felt some sense of peace and the process went smoothly until we hit the colors. It took me two months to figure out the right colors and body patterns. Of course, I was still working, so I could only do this when I had the creative energy to expend. Once the colors were communicated, the rest settled and I joined the furry community again under a new identity. All in all, the creation process took seven months. Establishing myself took another eight. It helped that I could create silly telegram sticker bots to entertain.

![cendyne_anim_sticker](/nonfree/interviews/cendyne_anim_sticker.webp)

{{< iquestion >}}
**What are some of your favorite projects you've worked on?**
{{< /iquestion >}}

Ahaha... If I answered that completely I would give out too much identifying information. Let me just say that exercising cryptography in C was an incredibly enlightening experience. At the same time I read [A Graduate Course in
Applied Cryptography](http://toc.cryptobook.us/) to understand the theory behind the tools I was working with. I learned how incredibly light and generous my university course readings were compared to this book.

Information fatigue is real and this book would put me to sleep each day. Not because it was boring, no no, if a 900 page text book was boring, I would not have read most of the content. My head could only take so much information in one waking period. After a two hour sleep, I could manage another 25 pages and then do my own practical learning. Two years later, I am re-reading this book again while highlighting the practical content that I care about.

My favorite project was actually learning cryptography the first time.

You might feel similar, another favorite is my own blog. It is so customized now that it has its own tech-debt and legacy cruft to deal with. The syntax to write all the things I do is more like LaTeX than markdown.

```
@sticker-left[cendyne/hi]{
  Hello there from the @strong{other side}!
}
```

It is built upon another's static site builder and at times it is truly frustrating.
Not because of the curly braces or lack of syntax highlighting while writing, but because sometimes having a double quote `"` immediately after a `}` causes it to crash. It uses an incredibly powerful [Parsing expression grammar](https://en.wikipedia.org/wiki/Parsing_expression_grammar) (PEG) engine. Anything you see syntax highlighted on my site is a PEG I wrote to actually parse, tokenize, and highlight that code. Unfortunately it is fragile and literally impossible to debug except by brute force experiments of introducing one character at a time to the content being parsed.

Some day I hope to dump the [intermediate representation](https://en.wikipedia.org/wiki/Intermediate_representation) (IR) that it makes and port it into my own. I'd probably shell out to some syntax highlighting tool or service instead of write my own language parsers in the future.

I can complain about it a lot, but like any hobby project, it receives a lot of love and at times allows me to feel incredible.

{{< iquestion >}}
**You've already [written a bit about Twitter's slow demise](https://cendyne.dev/posts/2022-12-11-twitter.html), and on your website you have links to Twitter, Mastodon, and Cohost accounts. What would you like to see be different or the same as Twitter wherever people wind up?**
{{< /iquestion >}}

I want to see more integrations. Tumblr mentioned adding activitypub on a whim and I believe that would be a wonderful thing if they can deliver. I have doubts that they will. I do have a cohost but I feel like I'm just shouting into a literal undiscoverable void there. Artistic web developers are sh\*tposting a lot there and it is enjoyable to see a click-adventure doom demo or whatever when someone shares something creative. It has that whole myspace customization aspect in a post I guess. *And probably the security ramifications of that too.*

But I just *cannot* manage to consistently open Cohost. I am not a lurker (except on orange site), I yearn for mutual interaction and Cohost is not satisfying that for me. Whether mastodon or some other integrated / federated environment, I look forward to a place that is socially easy to navigate and to develop relationships. I think Mastodon is reaching some critical threshold where that is possible with "Infosec twitter" (in quotes as in the community), while "Furry twitter" is becoming fragmented instead.

*Could you imagine a Furry Google+?*

I have hopes that with integrations and a socially accessible platform, the fragmentation is undone to be like Twitter.

For now, we are seeing mostly text on mastodon. Turns out images are expensive and don't load as well in this federated privacy respecting environment. Servers are often overloaded and I am frustrated at the choice of using **the least power efficient web services language out there: ruby.** The cost of running your own hardware is inaccessible to a lot of people. Less tech do-it-yourself people are finding out that media is challenging and resource intensive to upload, to retain, to transmit, to cache, and so on with a personal budget. Donating to a patreon to fund an instance is great and I think anyone on mastodon should support their host in this way, because caring for an instance is out of the question for 99.5% of humanity.

Twitter felt cheap because it was ad supported. An online social experience without ads turns out to be financially and professionally costly. I would like these burdens to decrease over time.

{{< iquestion >}}
**Recently, all of the BigTech™ companies have been laying off significant chunks of their workforce. What do you think the long term consequences of this will be?** <!-- For the companies themselves, for innovation, etc.-->
{{< /iquestion >}}

Gergely Orosz's is a fantastic author if you want to hear about how it is affecting the people, see [The Pragmatic Engineer](https://blog.pragmaticengineer.com/author/gergely/).

As for the big tech companies, I believe that their innovation will stall. Not because they lack talented capable people. Rather, they removed the lubrication that enables their dysfunctional organization to continue forward with inertia. The amount of bullsh\*t spread across the organization is now concentrated on those that remain. Instead of reevaluating and refining a mechanically evolved culture, it is easier to reduce scope by shelving projects like Stadia. It is like there's some sort of invisible dynamic of ever growing bullsh\*t that has to be overcome by throwing more people at it. And humans are expensive, so they are the first thing to go.

I've heard that other companies are eagerly snatching up those who have been laid off. That the market is still hot but **now there is no room for compensation negotiation.** Companies will take advantage of this power dynamic to drop wages back down from the bubble created during the "great resignation" or whatever. (Which I should have joined in retrospect)

Some argue that those who pick up these people will benefit greatly from the talent coming from big tech. I'm not so convinced. Contrary to the "data structures and algorithms" club that Google requires in every interview and the self superiority complex culture they are indoctrinated with, the people I see coming from big tech are not fundamentally better or more talented than outside big tech. In fact, I think they will drain these smaller companies for a while because they have been babied in a way at the bigger organization.

I am not exaggerating when I say that I have seen people who practically have assembly line skills with a salary that is double my own. They figured out **how to grind successfully** in their lane. That grinding does not imply growth in their skill-set, it is dealing with bullsh\*t specific to their employer. Outside of that lane, they really cannot contribute and the gaps they leave are why the SDLC infinity logo exists.

{{< iquestion >}}
**How many Stickers of Cendyne do you have?**
{{< /iquestion >}}

Over six hundred.

{{< iquestion >}}
**Given you have so many, you've clearly paid for a lot of custom art. There's a strong likelihood that some of it was used in training of one of the AI art models. How do you feel about that?**
{{< /iquestion >}}

First a digression.
You know how some artists will refuse to do some species like birds and synths? Many choose to because they lack the experience to produce a work with that type of subject at the same quality that they do for other subjects. They are trained highly on dogs, house cats, and adding details like a second set of ears aren't too cognitively difficult for them.

I have seen the same thing happen in AI art. Outside all the data that it is trained on, that it has "experience" with, it rarely succeeds in making something desirable.

Let's say there's a neural node or a label for "feline". There isn't but for the sake of argument, let's say there is. If we ingest a Cendyne image into the training data, would it recognize this looks like a cat and say the "Cendyne" label also increases the "feline" neural network strength? No, Cendyne does not have any cat features. Likewise, I am inclined to believe that there are so few good pre-existing training data that it can align "Cendyne" against for it to be successful.

Maybe if I had 78,000 suitable images to train a model on "Cendyne", it would develop an understanding to inject Cendyne into things successfully. There might be ways to work around this, like taking a high resolution vr model and doing all sorts of poses and expressions while capturing around 60 unique angles every second. Twenty two hours in VR would be within the realm of achievable effort.

This may accidentally over train it on the style of the model artist, rather than the character itself. I see Jesus come up easily in different styles when I ask stable diffusion to do so, the styles of his rendition are so varied. But when I ask for Obama, I always get a photo appearance of his likeness.

{{< columns >}}

![cendyne_saints](/nonfree/interviews/cendyne_saints.webp)

<--->

![cendyne_obama](/nonfree/interviews/cendyne_obama.webp)

{{< /columns >}}

However, I lack confidence in it unambiguously representing Cendyne while remaining flexible in how it injects Cendyne. In other words, I don't think that it will ever achieve the flexibility of Jesus and will either be between the overtrained state of Obama and something that looks incomprehensible with some facets of Cendyne's appearance.

Your question was how do I feel about my online likeness being used in training data.

**I am curious and skeptical.** I am not worried about impersonation or having my online likeness used like a deepfake for the reasons above.

If someone thinks my design is cool and wants a blue and orange lugia-naga thing they can commission an artist to make it. They don't have to ask me for permission.

{{< iquestion >}}
**Do you think it's ethical for people to use art they've commissioned to train a custom model for generating more art?**
{{< /iquestion >}}

We're stepping into some copyright ground here. Most people do not *also* purchase the copyright to an image and therefore should not use that image in places like business cards, stickers, merchandise, and so on.

Is introducing another's copyright'd material into a training set filled with other's copyrights ethical? Ask OpenAI and Microsoft how that lawsuit is going for them. When the model regurgitates overtrained data verbatim, it is unambiguously reproducing another's copy. A good model should not be overtrained. Could a good model, which is not overtrained, and does not reproduce verbatim content, be useful and not step over another's copyright? I think so.

Then you might prompt, "Is copyright a proxy for ethics", and I'd say no. So why am I talking about copyright? It's more about the verbatim part really. Tracing artwork and posting it online is shamed and not cool in the furry community. This is where verbatim content is retained and that is where many agree on ethics.

{{< columns >}}

But there is no, and should be no push back on taking inspiration to ideas, poses, character features, and so on. Most of my stickers are not originals. They are not traces, but they do have an origin that often references another's artwork and another's idea. I've not had someone once come to me and complain about how my sticker looks like theirs. Instead most people feel excited that I joined the club of having a plastic bag on their head.

<--->

![cendyne_platic_bag](/nonfree/interviews/cendyne_platic_bag.webp)

{{< /columns >}}

{{< iquestion >}}
**What are your thoughts on ChatGPT and it's ability to generate code?**
{{< /iquestion >}}

I've heard a variety of opinions.
Academic institutions are fearful that students will use ChatGPT to cheat.
Managers are excited that their reports might be more productive.
Peers are worried that they are going to spend more time reviewing other's code.
CTOs are excited about the idea of having literally cheaper "Junior Engineers" on the team through ChatGPT.

It is a really capable piece of software and its ability to generate code has been proven in small cases. See [Solving Advent of Code 2022 with ChatGPT](https://github.com/golergka/advent-of-code-2022-with-chat-gpt).

I was thinking about writing about this later: ChatGPT has been used to ghost write [dangerous and harmful lies about cryptography](https://archive.vn/sBfCG) and authors like that only take it down after being ridiculed for the harm they do to their brand, not to society. The author admitted **they did not even fact check what ChatGPT wrote** and that **most of their blog content** was made by ChatGPT lately because SEO and brand growth was their priority.

I am worried we're going to get back to a world where IBM management ranks the performance of their workers based on how many thousands of lines they produce a week and developers are incentivized to use ChatGPT to integrate unsafe and dangerous code in production to meet senseless quotas. Because suddenly someone who is competent and carefully prompts and code reviews along the way uses ChatGPT and scales their code production by 40x and management asks "why can't we have everyone be 40x as productive? Let's add a quota that this is the new excellence we strive for."

This is how you get tickets from manufacturing QA in Taiwan (I am not making this story up) that say "The red light comes on when the power is connected." Well yes there is only one power light indicator and it happens to be red. So everyone's time is slowed down because of quotas and key performance indicators that are not aligned with actually delivering something useful. It just makes everyone look busy. Remember the bullsh\*t I mentioned earlier? It's this kind of stuff.

{{< iquestion >}}
**LastPass recently decided to become a hard pass due to massive breach. Do you think consumers should trust storing their password vaults in the cloud?** <!-- If no, what should they do?-->
{{< /iquestion >}}

Remember how I said a small fraction of humanity is willing or even capable of running a mastodon instance?
Correctly and safely maintaining an offline password vault is quite similar.

We need a solution that works for forgetful honest people who lose their phones in an Uber car after getting tipsy with friends, who get a drive-by malware from an ad on fandom wikis, and yes even those that want to pay money for a picture of a rock on the blockchain.

Look around in the supposedly paranoid "crypto twitter" space and you'll constantly see them **blaming the user** for getting scammed, for having their nazi apes stolen, all while begging for help and understanding. They are humans too and we need to recognize they are having the same problems we are.

*Also:*

![cendyne_crypto](/nonfree/interviews/cendyne_crypto.webp)

Look, technology can solve problems, but it can create so many more problems. We need solutions that work for the most people with the best usability. For passwords, that is a cloud vault.

I absolutely believe that most people should use a cloud password vault.
The apple one is good.
The google one is good.
I used apple for a long time, but I use chrome most of the time because the web is fragmented again on technology support.
Guess what?

Apple **will not** make an integrated password manager for chrome.
Google **will not** make an integrated password manager for safari on Mac or iOS.

So we, as users, are stuck between the politics of two mega companies and have to go for another provider. Unfortunately, many businesses **do not care about doing cryptography correctly** and **do not care about their security being destroyed month after month** because it does not affect their bottom line. **Businesses only care about the law (e.g. CCPA, CPRA) when there is a risk to their bottom line which they could use elsewhere. To mitigate that risk, they will hire a lawyer to council them on their policies and operations.** Those enterprise users are the source of all the megabux that actually pay for their "profit center" sales teams to grow the company through a big "flywheel" strategy. It costs a lot of money, time, and human effort (which is also the previous two) to change away from a vendor. As me how I know. *Actually don't.*

So the companies with the best security to protect consumers fetter about in their tribal politics because ultimately the security service they provide to individual people is being given **for free.**

So maybe a better model in the future is something like mastodon where the clients are studied, audited, and well understood by security professionals and anyone can host theirs and their friends data. Or even store it on github or google drive or iCloud, it does not matter. If I ran a password storage service on cloudflare KV for people, most would fit under 20KB I think and cost me less than a penny per friend. And if someone else doesn't like a client but does like the backend, they can find another or create their own.

**The actual service costs to host encrypted password data is miniscule.**

What matters is having carefully vetted, carefully tested, and active offensive analysis of security tools used by people. A passwordless future is coming, but there will still be passwords.

{{< iquestion >}}
**The push to kill C and C++ has been getting stronger in recent years, with Rust, Zig, Go, Nim, Odin, V, Nelu, and many more. Do you think C and/or C++ should be getting replaced in the first place?** <!-- and why? -->
{{< /iquestion >}}

I've written plenty of C. I actually like C more than C++. The language is simple enough that I can interpret it in my head and if I need some clarity I can dump in some `printf` lines in there and run it to confirm or improve my understanding.

But then I come back a month later and I read it and I realize. "Oh sh*t, if I had a fuzzer on this, it would have spotted this out of bounds access."

The problem with these low level languages is that you can become quite confident in your work only to be oblivious that you're gargling forks. *Don't try this at home, but if your garbage disposal gargles a fork, it makes bad sounds. When you try to clean it up after, you may cut your hand on sharp metal inside.*

The industry is finally realizing that **these issues are avoidable.** In [Security, Cryptography, Whatever: David says](https://share.descript.com/view/PQRb3nsY7N4) these unsafety issues are consistent across the board for critical applications.

{{< quote "David Adrian on the *[Security. Cryptography. Whatever](https://securitycryptographywhatever.buzzsprout.com)* podcast" >}}
And it's basically it's 65% [caused by memory un safety issues] and it holds across Android.
</br>
It holds across iOS.
</br>
It holds across Chrome.
</br>
It holds across windows.
</br>
It holds across Firefox it's CSS sub system.
{{< /quote >}}

Rust, Zig, even Swift show that we do not have to give up performance to have safer applications.

Logic bugs will never go away. But these bugs can.

The same problems happen in cryptography too.
The [how many days since a jwt alg none vuln](https://www.howmanydayssinceajwtalgnonevuln.com/) counter hit around 200 last I checked.
**But look** at the time of writing it says 9 days!!!
[Professional cryptographers hate JWT](https://cendyne.dev/topics/hate-jwt.html) yet we still keep using it.
C is the same.
There is so much inertia and friction to change.

The technology choice is a problem we can move away from.

We need greater tooling to succeed here. To fully adopt these other languages we need thoughtful, supportive, familiar, and effective systems around these tools.

{{< iquestion >}}
**What features of the new contenders are you most interested in?**
{{< /iquestion >}}

I think the [Language Server](https://en.wikipedia.org/wiki/Language_Server_Protocol) idea is the most incredible feature we have.

It seems like such a meta thing to get excited about. Why not the risk reduction on memory safety? Because my goal is to solve a problem and hopefully not make mistakes. I'm not excited to think about the mistakes. But I am excited when I have a useful integrated tool that can assist me with something that is unfamiliar.

Unlike C, Rust has a lot more type and namespace stuff going on and it does not all fit in my head. Inline access to stuff made in the language is so important to be productive and to make competent decisions. *If I have to look through a generated javadoc website one more time to get my job done I'm going to flip a table.*

{{< iquestion >}}
**Do you think they go far enough or are there bigger changes you'd like to see to the languages and the tools we use?** <!-- Should functional programming go more mainstream? Do we need something radically different like GUI-node based programming? If you want some brain-food before answering, https://www.youtube.com/watch?v=8Ab3ArE8W3s is a good watch. -->
{{< /iquestion >}}

All this functional, imperative, whatever you want to label these collections of structured text, are still not accessible to most of humanity. Recall what the most used language out there is: Excel formulas.

And now we got all that no-code stuff going on, but so far it's looking more like VC-backed hype than something useful in isolation. The low-code stuff is interesting. In my professional experience, we still have to side load some developer-made adapter to solve the sharp edges of making it useful. But the low / no code side is more accessible to operations and IT so they can reconfigure on the fly with less consequences. But like any system that gets changed, some invariant is no longer met and something breaks so ultimately a developer has to step in an examine what's happening.

If you're ever interested in a neat book, check out [Flow-based programming by J Paul Morrison](https://jpaulm.github.io/fbp/book.html). It has influenced how I think about and analyze data and the flow of information in existing applications (even across microservices).

I am more convinced each year that our specialty is not dumping structured words on a keyboard, but understanding systems in the real world where we lie to ourselves in saying that abstractions matter. A language environment that helps us understand the system is what we need.

{{< iquestion >}}
**If you could go back and redesign any part of how the internet works, what would you change?**
{{< /iquestion >}}

*If someone ever tells you that we should have stayed with [Token Ring](https://en.wikipedia.org/wiki/Token_Ring), they have to be joking.*

Honestly the tech we have is mostly fit--in the biological sense. It has survived the test of time and deployment in the real world and we should recognize that.

But if I could go back, I would plead for more emphasis on confidential and privacy respecting technology. Remember DNS? It's been unencrypted since inception. DNS was invented in 1983. We did not even have RC4 (which is broken) until 1987. They did not have the technology to produce confidential protocols at the time or at least could not with the US Government having the silly idea that math is a weapon and should have export restrictions.

So in the absence of technology that could enable confidential communications back then, I would ask for 'How would you design this so it could be confidential in the future?' Unfortunately they would not even have the experience of protocol [downgrade attacks](https://en.wikipedia.org/wiki/Downgrade_attack) to consider it competently.

Then we get into [cryptographic agility](https://en.wikipedia.org/wiki/Cryptographic_agility), which is its own can of baked beans that [a dhole has opinions about](https://soatok.blog/2022/08/20/cryptographic-agility-and-superior-alternatives/).

At this point I have to shrug and say: the best that could have happened did happen with the knowledge we had at the time.

Maybe we should have had IPV6 actually win? That would be nice.

{{< iquestion >}}
**What does your work environment look like?** <!-- home/office/whatever. What tools do you use (software/hardware), is it clean/messy, do you have different places for each hobby or one super-station setup? -->
{{< /iquestion >}}

My true professional work environment is a walk in closet that I took the door off and repurposed into an office. I use a 4k screen and have some nice desk speakers with one of those fancy XLR microphones on an articulating stand. My webcam is also on a stand. When I am on zoom calls, it is literally in front of the screen instead of above the screen. My office is under construction so I have been using the basement until I have the energy to resume doing networking and electrical.

My personal environment varies. Sometimes I work on the couch (as I am when I type this) where a projector casts something in the background to sate my excess curiosity. *Otherwise I'd be looking at twitter or something and you know how productive that is.*

I have **three** personal work desks, in addition to the one I use for professional work. It helps to change things up, be it an external screen, tilted stand, speakers, or whatever when I feel restless or prone to some activity that distracts me from my intended goal.

![cendyne_setup](/nonfree/interviews/cendyne_setup.webp)

But at each place of work, besides the couch, I use an ortholinear keyboard and bring my yubikeys. I have four of these keyboards now. I just wish they were more mechanical. A dutch friend introduced them to me in 2011 and I have used them since.

If you say "What about an ergodox?" I have one of those and it chafes my fingers. I need something low profile.

{{< iquestion >}}
**Is there any skill that you spent too much time developing that you wish you hadn’t?**
{{< /iquestion >}}

Not really. I live a life where my time is very goal oriented. Is my goal to relax? Watch anime, read a book. Is my goal to be proud of something in my home that I use every day or every week? Learn wood working.

We're all different, we all have different ideas of what "fun" means. Seeing one of my roommates in university fail the same class twice in a row because they were addicted to league of legends convinced "fun" should be exclusive to "addictive." In my mind, Twitter is not fun, but it is addictive. Games have a propensity to be addictive, so I avoid them. I really do think my observations of said roommate permanently affected my willingness to engage in video games.

I can say that I am unable to find any regret in how I spent my time towards the skills I have. I do think I could balance things to develop more social connection with people though.

{{< iquestion >}}
**What’s the most important skill that you’ve taught yourself?**
{{< /iquestion >}}

A meta answer: the skill to teach myself a skill despite executive dysfunction.

I grew up in an environment where my peers were not expected to learn anything. They'd be financially fine collecting and selling bull semen. I am not joking. That was not the future I wanted, so I took control of it myself.

I taught myself how to program without a book when I was twelve.
*Theoretical cryptography though: I needed a book for that.*

When it comes to focusing on something, I find it incredibly difficult. Some people *can* rely on medication to help them in this area. Unfortunately I cannot.

The second most important skill I have is to consciously recognize when something engages me so I can then plan intentionally with it in mind.

{{< iquestion >}}
**What do you do for fun? Any books, movies, TV shows, etc. that you’d recommend?**
{{< /iquestion >}}

According to kindle, I have read 56 books this year. They're all 200 to 400 page light novels.

If an anime really resonates and has a powerful story behind it, chances are that a light novel is source material. This may sound out of character, but I really enjoy (and in fact set alarms for) the book series: Ascendance of a Bookworm. It is way more than what the cover might suggest of "a cute little girl that likes books." This is a character that would probably dismantle a mafia over burning down a library through sheer economic and technological prowess.

{{< iquestion >}}
**What’s the biggest ‘Oh Shit’ moment you’ve ever had, be it one you caught in time or not?**
{{< /iquestion >}}

I know I have had them. I know I have prevented some of them. But I also know that I have a mechanical tendency to forget them. Sorry but the memory for that has been garbage collected.

{{< iquestion >}}
**Who are your biggest inspirations? What creators do you think are way to underrated and deserve a shout out?**
{{< /iquestion >}}

I'd love to answer who inspires me, but I'd rather not be correlated with leaked security questions from data breaches.

Obviously [Soatok](https://soatok.blog/) has influenced me from afar and now up close. He deserves a shout out. [Xe Iaso](https://xeiaso.net/) too. Both influenced my decision to join the tech blogging scene.

{{< columns >}}

I know [River of Stars](https://ariverofstars.carrd.co/) in person and she deserves all the love I can send in her direction.

<--->

![Cendyneprideicon](/nonfree/interviews/Cendyneprideicon.webp)

{{< /columns >}}

{{< iquestion >}}
**What’s the best advice you’ve ever received? Worst?**
{{< /iquestion >}}

The best advice is to listen to others and not to interrupt them.
Everyone wants to be heard.
I have a tendency to see two or three steps forward in a logical discussion, but preempting the transmission is not healthy to do and I may be wrong.

The worst advice is the financial advice given to me from my own employer.

{{< iquestion >}}
**How do you stay motivated to keep doing cool things?**
{{< /iquestion >}}

I have bright and dark reasons to keep doing cool things.

I'll share the former at least. My goal oriented nature requires that I always have a goal to feel successful. I feel happy when I achieve the goals I set. Being happy is a good thing.

{{< iquestion >}}
**What hobby do you want to get into but haven’t had a chance to dive into yet?**
{{< /iquestion >}}

Would you believe me if I said I wish I could make my own stickers too?

Unfortunately, art requires an equivalent amount of practice that programming does and it is incredibly hard to do self critique without feeling emotional about it. Whenever I draw something, I feel terrible, I judge it against the creative strengths of my peers. Honestly my wood working kind of left me feeling like that too, but its functional nature smoothed that over.

But if we were going into less self-centered hobbies, I suppose doing something like lidar scanning 3d particle maps of interesting locations would be cool. Like just go hike to the top of a local mountain, find a spot with purple colored rocks and moss and let the machine go, then later peek inside and relive the sights, sounds, and scents of the peaceful location. Others might enjoy that too. Might be a bit minority report though.
