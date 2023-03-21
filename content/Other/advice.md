# I will dispense this advice now

<link rel="stylesheet" href="/css_overrides/light.css">

Over the last few weeks I've joined a few new communities online, made a few new friends in meat space, and had a repeated conversation with my SO all about the same thing: "How can I be more like you?" {{< smalltext >}}(or, in one case "How can I be you" ... yikes.) {{< /smalltext >}}

This is a really weird question to get. It is simultaneously asking for life advice, placing me on a pedestal as some sort of ideal, and sort of diminishes both my personal quirks and personality and the beauty in everyone's uniqueness.


I also don't want to just dismiss the question with some sort of feel good "Don't be like me, be your best you!" or similarly useless empty talk, so instead I have to dig into the question and figure out what about me they're envious of. In general, I think it's these things:

* Being talented at many hobbies
* Being very confident in myself

## Being Talented At (& finding time for) Many Hobbies

**... and being in many groups, having many neat skills, etc.**

I do a lot of things:
{{< columns >}}
* Play guitar
* Noodle on synths
* Program in a variety of languages
* Make electronics projects
* Make digital art
* Write
* Longboard
* Fursuit
* Nerd about Conlangs
* Burn wood with high voltage
* Build keyboards
* Rice Linux

<--->

<img src="/nonfree/blog/prettydesk.webp" style="border-radius:1em;">

and probably a dozen other things that just aren't at the top of my mind right now. I'm not going to pretend to be great at all - or even any - of them, but I know from an outsider looking in my ability to do these things is often impressive. So, the first and most obvious question:

{{< /columns >}}

### How the fuck do you have time for all of that?

This is a big one, and the answer is also the fuzziest because it depends on what you do already.

I have more free time than those that accidentally spend a 4 hours of their week staring at TikTok, Twitter, Reddit, etc. because I ... don't do that? To some extent, this is just a matter of realizing how much time is going to something that you may not want it going to. This, I *think* is more easily solved not by self-control but by addressing the root cause: **interruptions.**

{{< columns >}}

A while back I read [Programmers, Teach Non-Geeks The True Cost of Interruptions (By Erik Dietrich)](https://daedtech.com/programmers-teach-non-geeks-the-true-cost-of-interruptions/) and I think it covers half of what I mean here, but the other half is not human interruption, but interruption from your tools. This can be as obvious as long delays as tools work (video rendering, program compilation, etc.) to as subtle as just being a slow typist. Identify and squish these interruptions with extreme prejudice. They don't just slow you down by the cost of the task like this [XKCD](https://daedtech.com/programmers-teach-non-geeks-the-true-cost-of-interruptions/) Implies:

<--->

<img src="/xkcd/xkcdtime.webp" style="filter:sepia(.2);">

{{< /columns >}}

But rather, I think this is **wrong** because the equation isn't {{< katex display >}} T_{cost} = frequency \times T_{task} {{< /katex >}} but is rather {{< katex display >}} T_{cost} = frequency \times T_{task} \textcolor{blue}{+ T_{exit \char`_ alternate \char`_ task}} {{< /katex >}}

That is, if a task takes a second, you will find something else to occupy your mind for that time and there is an additional cost added in coming back from that task. If you know anything about operating systems or programming, this is the equivalent of the cost of a context switch, just on a human scale. 

This is even worse if there's no obvious cue that the task is finished and to resume so letting a 5 second distraction become a 15 minute one.

Find these slow downs and find solutions for them. If an off the shelf solution doesn't exist, make one. Even if the solution is mildly awful to adapt to short term, killing these time sinks will always pay off either in the amount of time saved or in your willingness to do the thing (that is, if you're constantly not doing something because of a repeated micro-annoyance, fixing it may take more time, but it'll make you actually do the thing again).

Let me provide a few examples:

* To work on this website, I regularly have to type blocks that look like this: `⟮⟮< smalltext >⟯⟯ whatever ⟮⟮< /smalltext >⟯⟯` to get something like {{< smalltext >}}whatever{{< /smalltext >}}. Typing these out is annoying enough both in memorizing the format and in hitting the symbols that I set up [espanso](https://espanso.org) to make it so typing `:small` automatically turns into the above with the cursor between the two so I can just keep typing.

* I was slow at typing, so I put blank keycaps on my keyboard to learn to type correctly.

* After learning to type correctly, typing so much would cause pain which would distract me as I needed small breaks, so I got an ergonomic keyboard. No more little breaks necessary to prevent pain.
	* (I do still try to do the every 20 min look at something 20+ ft away for 20+ seconds though)

* Using Windows default calculator is slow, so I use [speedcrunch](https://heldercorreia.bitbucket.io/speedcrunch/). If I need to do algebra or anything remotely complicated, I use [sympy](https://docs.sympy.org/latest/tutorials/intro-tutorial/intro.html#what-is-symbolic-computation) with a little script that prints out basic usage and defines a few symbols so I don't have to remember how to do it every time.
* Longboarding to classes: Walking between classes everyday freshman year got very old, very fast. So, I learned to longboard. That saved a lot of time. Probably literal weeks of my life.
* Sorting parts: Spending time to sort all of my electrical components makes me want to even make things, otherwise just finding the part takes is enough of a headache that I dread doing anything.



## How did you learn all of that?

There's already a learn-how-to-learn page on OpGuides, but to add to it:

* **Just do the fucking thing.** Start with a simple example, but bring it from start to finish as quickly as possible. This lets you learn the high level steps quickly without getting bogged down on the finer details. This is particularly important as if you haven't done the thing from start to finish at least once and you try to make the really good version first, you'll probably end up realizing halfway though you need to restart and now you've just wasted a ton of time compared to just making the dumb toy version first.

* **Constantly fail**. There's this Edison quote "I have not failed 10,000 times—I've successfully found 10,000 ways that will not work.” and I think it's really close to being profound, but misses the mark. I'd put it as "“I have failed 10,000 times, but I've found 100,000 hints to the correct solution". They **are** failures, it's just that failing is awesome and while the entire system doesn't work, each time you probably made it so more of it does or gotten it to work more reliably. 

* **Know what you don't want to know.** Part of learning many skills is to try a lot of things and for some say "Yeah, this isn't for me". Yes, every thing you may want to learn will have a skill bump where the first little bit is extra difficult, but being able to say "Wow, yeah, I thought I'd be into this but I'm absolutely not" and bail is important too.
  
* **Have enough interests to rotate.** Life is weird. At only roughly 80 trips around the sun, you'd think any interest should have enough to not get bored, but the simple fact is if you do something every day you'll start to question if you even care about it anymore. "Should I just sell my all my guitars?", "Do I even want to write code?", etc. These thoughts will go through even the most confident person's mind. While they can be healthy to consider occasionally (see the above point) they can also be tickets to the depression express. Having multiple interests to rotate between does two things:
  * First, it gives you the opportunity to put something down when you're not feeling it.
  * Second, it lets you get cross-interest ideas. I like to program synthesizer software, write about my other interests, etc. Doing something for one interest will often provide interest for another in a positive feedback loop.

* **Give it 60 seconds.** If you're trying to learn something new, give it a tiny bit of effort every day. Just 60 seconds, if that. Pick up the guitar, strum one chord. Open the IDE, write one line. That's all. The effort of the context switch is typically the hardest hurdle mentally. This idea is mostly stolen from [There are no more zero days (/u/ryans01)](https://www.reddit.com/r/NonZeroDay/comments/1qbxvz/the_gospel_of_uryans01_helpful_advice_for_anyone/) which is a really good read.
* **Planned (but not too many) "Fuck it" days.** Roughly once every two weeks, I give myself a "fuck it" day where the most productive thing I do is shower. Otherwise, I wear PJ's, watch anime, and fuck off. These are vital for recharging, but not for the reason you'd think: after about 6 hours I'm itching to do **something**. I try to not let myself as long as I can. It's not that I need to relax, it's that I need to remind myself why I don't.

{{< speech triode >}}

So you're a workaholic?

{{< /speech >}}

{{< speech right big >}}

Sorta? I don't see it as work though. Like I enjoy making music, programming, etc. just like I enjoy watching Anime. The difference is while watching anime I only get to reward the consumption part of my brain while on the other hand when making things like this post, a new song, etc. I get to fulfill both the consumption and creation side because I actively look for inspiration and do research while doing any of those things. 

It gives purpose to the consumption and the rewards of creation - the victories at getting each step to work and the big pay-off at the end.

{{< /speech >}}

* **Set scheduled goals, know you'll fail.** I have a huge list of things I try to do every week. Some of them only happen like once every 2 months. But I still **try** every week. I also usually have some monthly "I want to do this thing" goals or at least a theme "month of health" or "month of art" etc.

## Confidence

I'm very confident as a person, but I also know that saying "HEY KID HAVE YOU TRIED JUST BEING CONFIDENT?" is about as useful as a therapist asking "Have you tried just being less depressed?"

Still, I want to share how *I* stay confident.

### Being amazed by own body

I'm not really in great shape, I had to get Lasik to have even remotely useful vision without glasses, and like, humans are kinda derpy looking, right? Like, we're just this big ol' fur-less sack of bones. It's mildly gross.

But dude. Our bodies are fucking awesome!

I can absolutely fly on a longboard, keeping balance, and stop on a dime trusting myself to slam a foot down and pull the board out from underneath myself.

What our brains are capable of is fucking nuts. Just think about all of the amazing power to create that sits a few inches behind your eyes.

When we **trust** our bodies - the complete and total trust that's required to maintain balance on a bike or skateboard, or reliably hit notes on an instrument at high speeds - they're capable of incredible feats.

You may think "But I'm [suboptimal in some way]" but even if that's the case, your body is still doing some crazy shit - from your immune system to your eyes or ears. Even if one of them doesn't work quite right for you, the ones that do, man, they're awesome, right?

### If that fucker can do it, then I can do it too!

Having an **"If [he/she/they], then I can do it too!"** attitude goes a long way. 

Being able to see someone do a thing, think it's impressive, and say "huh, fuck it, let's try it!" and having the mental fortitude to get over the being-a-total-noob bump will go a long ways. 

To some extent, I'm advocating for intentional overconfidence. Trick your brain into being able to look at somebody doing something at a pro level with years of training and go "Yeah, I can learn that in a weekend." and into not being disappointed when you fail but going "Hell yeah, I'm already getting there!" when you do even the first step.

{{< tip >}}

This has absolutely lead me to do some very dangerous things. I'm glad I did them, but, yunno' - don't be too stupid.

{{< /tip >}}

If you struggle with this, just take the advice of [Baz Luhrmann - Everybody's Free To Wear Sunscreen](https://www.youtube.com/watch?v=LZmi7InKU0I)* and "Do one thing every day that scares you" </br>{{< smalltext >}}*Yes, this is a remix, I like it more ╮(─▽─)╭{{< /smalltext >}}
