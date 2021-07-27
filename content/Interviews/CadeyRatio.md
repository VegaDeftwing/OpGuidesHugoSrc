+++
bookToC = false
+++
# An Interview with Cadey Ratio

<!-- used for the Mara segment later on -->
<style>
.conversation { display: flex; }
.conversation-picture { flex: 1; min-width: 9rem; max-width: calc(((70rem - 2rem)/6)); }
</style>
**3/10/2021**

<img src="/cadey1.png" alt="Cadey Ratio" height="200em">

**Thank you for taking the time for this interview Cadey. Your blog at [christine.website/blog](https://christine.website/blog) shows that you really have a wide range of interests. So, to get started, what are you passionate about and why?**

I'm passionate about making computers understandable. We work with these impossibly complex mechanical creations like they are nothing. They dominate our culture. With the onset of COVID, the internet has gone from an essential part of our lives to a vital method of communication.

I've also been taking up fiction writing a lot in recent days. Fiction is a great canvas to explore ideas and talk about topics that people generally don't deal with. I have a few longer stories in planning right now that I hope to use to refine my writing skills. Another side goal of them is to create the kind of fiction that I wish there was more of. Philosophy is also a fun thing to deal with, and it has some surprising links into the tech and writing I do. 

You know on second thought, I think that the real core thing I am passionate about is making _things_ in general understandable. My dayjob has me working on [social proximity networks](https://tailscale.com/blog/social-proximity-networks/). A lot of my open source code allows me to explore ideas and different ways of thinking. My technical writing has been a fantastic canvas to build my basic writing skills on top of (it's gotten me to the front page of Orange Site more than 5 times as well as a throwaway comment of mine on /r/programmingcirclejerk twice in the same day, so I'm probably doing something right, I hope). The fiction I write aims to help explain complicated moods and ideas that other forms of media struggle with (such as [Readaptation](https://christine.website/blog/readaptation-2021-02-21), which is about gender dysphoria with some dysmorphia thrown in for good measure).

**What are some your favorite projects you've worked on?**

I could be here all day listing the fun things I work on but I'll list my top favorites:

- [olin](https://github.com/Xe/olin) and [pa'i](https://github.com/Xe/pahi) - these projects were how I learned userspace->kernel API design as well as Rust
- [The Source](https://withinstudios.itch.io/the-source) - a collections of ideas for the rules/homebrew system I use when dming tabletop RPGs
- [mi](https://github.com/Xe/mi) - a personal API that powers a lot of boring-to-you things that I use to glue my online presence together
- [christine.website](https://github.com/Xe/site) - the code that powers [christine.website](https://christine.website)
- [hlang](https://h.christine.website) - the h "programming language"
- [when-then-zen](https://when-then-zen.christine.website/) - BDD descriptions of meditation methods
- Backplane (defunct) - a reverse reverse proxy for web applications hosted behind firewalls
- My eBook/website generation pipeline built on top of `nix-build` that I really need to write about at some point

**What part of what project has been the most difficult and/or most rewarding thing you've ever worked on?**

I'm gonna break this up into two parts. 

First, the most difficult project I've worked on has been the WebAssembly research that culminated in Olin and pa'i. You think it's hard to write WebAssembly programs, but it gets even harder when you had to debug them when I had to. It was really the wild west of WebAssembly at that point. My most reliable debugging method was to dump the WebAssembly memory to disk and then go hexdump diving with xxd. Yes, seriously. Tracing through execution usually meant puking up a pointer to the thing that I wanted to inspect and then adding `let _ = 0/0` or something to the code so it would puke and die without modifying the heap. It was hell. Then I got things working and it was not hell anymore. But it was hell.

By any empirical measure, my most rewarding project has been [my blog](https://christine.website/blog). It has been _the reason_ why prospective employers reach out to me. This has made job hunting _so much easier_. When you are a gender minority like I am it can be very difficult to find people willing to hire you. My blog does a _hilarious_ amount of traffic, at least 70 GB per month. My blog is mostly text save the cute sharkgirl images, so this means that my blog is _very widely enjoyed_.

**What aspect of how the web works would you change if you could?**

The internet in general is no longer a human-scale network. If I had ultimate authority I would want to make the internet a superstructure for human-scale subnetworks between friends, coworkers and colleagues. I'm actually quite lucky because I have the privilege to work for a company that allows me to act on that desire.

Also I'd want to probably figure out an alternative method of funding creative work. A lot of those ideas have an unfortunate habit of depending on systems like Universal Basic Income though. Artists get fucked over by capitalism.

**On your site and though your blog posts I see that you use quite a wide array of programming languages, which ones are your favorite to work in? Least favorite? why?**

I work with many tools because I do many things. Every tool is not useful for every task. By knowing a variety of tools I'm able to pick the tool that is the best fit for the job. That being said though, my least favorite tool to use as of late is the [Go programming language](https://golang.org/). It's not really about the language itself. I definitely feel like I cannot really flex my muscle and express myself in Go the way I would want to because Rob Pike says we can't have nice things. The biggest problems I have with it at the moment are rooted in the tooling, specifically with how they have been handling Go modules. 

Without getting too deep into semiotics, Go modules change the definition of major versions of software in ways that are shocking to people. There are so many scripts that have been written to make Go modules Do The Right Thing™️ that frankly wouldn't have to exist if Go modules wasn't such an exciting feature. Some days I want to try and bolt Rust's cargo to the side of the Go toolchain. Go does have its uses though.

One of my favorite tools is [Rust](https://www.rust-lang.org/). Rust is a programming language that gives developers a lot of freedom of expression and implementation while also making it hard for developers to do sad things in the process. It was frustrating learning Rust at first. I had learned a lot of bad habits. But the net result is that when I am writing programs in Rust, I simply do not have to have as much in my head at any given time. Entire classes of errors are eliminated by the compiler. Errors that do not compile to machine code _cannot_ be deployed to production. This also really makes the SRE side of me very happy, because I can be more sure that Rust programs won't crash because of a hidden gotcha.

It's a shame that more people don't use Rust.

**From [various](https://github.com/Xe/creators-code) [things](https://christine.website/blog/how-to-handle-pedophiles-in-communities-2021-03-07) [that](https://christine.website/blog/identity-model-software-2021-01-31) [you've](https://christine.website/blog/thoughts-on-community-2014-07-31) [written](https://christine.website/blog/social-media-mistake-2021-01-26) it's clear that you care about how people interact and communicate in a safe, comfortable enviroment where they can be themselves. At the same time, you have social media accounts across a variety of platforms that hold these values to different standards (twitter vs mastodon, for example).**

**How do you manage your social media experience to get the most good and least bad from it?**

To be honest, I am probably one of the worst people to ask about this. I do not have a healthy relationship with social media and online platforms in general. I've been trying to correct it, but most of those efforts got thrown into the trash can when COVID happened. I do try to avoid the siren song of the timeline though. The addiction algorithms have a deep hook into the happy chemical part of my brain though. It's made it hard for me to focus on longer writing projects like the novel I've been planning out off and on for years.

The biggest problem is chatrooms for communities. I've been in a few offshoots of the same community's chatroom for almost a decade and had the unfortunate pleasure of serving as a chat moderator. Those things can either be very boring in the best ways (with your moderator status mostly boiling down to a symbolic gesture of "hey this person is trustable and stuff") or very exciting in the worst ways (like when all the adults in the room move on to Bigger and Better Things, leaving you to play adolescent daycare). 

**What do you think more people could do to make their social media experience online better?**

If you can, try to keep your circle of people you actively follow and engage with below [Dunbar's Number](https://en.wikipedia.org/wiki/Dunbar%27s_number). On bigger social platforms there is a tendency to follow hundreds if not thousands of people that you barely know. This is more people than you can really keep track of. I used to follow people back that replied to my tweets, but I recently had to stop doing that to keep my feed under control.

A lot of this is a sociological problem though. Humans really aren't ready for social media. All of our existing systems and laws are predicated on the "old way of doing things". Police departments haven't been able to keep up with the ways that crime is being committed online. The vast scale of everything is difficult to comprehend. Thousands of **HOURS** of content are uploaded to YouTube every minute. That is the equivalent of over a month of content. That's not like a month of 40 hour work weeks, that's the _entire month_.

We deal with human-scale things, not the scale that social media has become. It's difficult for us to comprehend the monsters we have created.

**What do you think are the biggest things that social media platforms could do to improve?**

Stop optimizing for engagement. It's optimizing for addiction. It's optimizing for users to be angry. It's optimizing for dividing people, and they have the _audacity_ to claim that they are bringing the world closer together too! 

Make your technology calm. Don't make things scroll infinitely. It's okay for people to miss notifications. Let things happen as they do.

**Since making [The Source](https://withinstudios.itch.io/the-source) and [Mara: Sh0rk of Justice](https://withinstudios.itch.io/mara-sh0rk-justice) what advice would you give to someone that wanted to make a game of their own?**

Fuck it, yolo, go for it. You'll learn a bunch. There's really no risk to trying stuff out to see how you like it. The Source started as a collection of DM notes that grew out of hand. Mara: Sh0rk of Justice was done in one particularly long weekend because I was bored. There is so little risk in throwing something onto Itch.
I plan to release all of my future paid projects on Itch.

**As a [fellow Split-keyboard user](https://christine.website/blog/zsa-moonlander-first-impressions-2020-10-27) and non-QWERTY user, how have both been going for you? Any complaints?**

It was hard to adapt in the first few days. It got a lot easier though, and now I can swap between qwerty and colemak mod-dh at will. I've even had some occasions where I've had one hand on a qwerty keyboard and the other on my moonlander. This really broke me for a moment. I'm probably not going to get to the level of using steno on my keyboard to dab on the haters at 200 words per minute though.

I just hate it when games don't let you rebind inputs. My Steam Controller helps with those, but it would be nice if they could just allow you to bind the keys to what you want to use. Cyberpunk 2077 is particularly bad at this because you can't rebind use from `f` to something else. I want to use frst as my wasd cluster so it's more comfortable on my Moonlander. I may end up having to make a gaming layer in addition to my qwerty layer.

**On your blog you've talked about how tulpamancy has helped you out, care to dive into that a bit? How has it been going since your last [post about how it helps you with development](https://christine.website/blog/plurality-driven-development-2019-08-04) about two years ago?**

Wow, it's hard to believe that post was written almost two years ago. Time files eh?

As a note, we are going to use the plural first person pronoun `we` to refer to the collective group (or system if you prefer that term) of all of us for the remainder of this post. Any time I use `I`, it's referring to me (Cadey) in particular.

Yes, our plurality has been _absolutely catalytic_ to our career. It's the secret sauce to how we come across as a 10xer. Each of us has our own specialty and we chord them together to express a balanced composite. A lot of the different skills in tools and methodologies are divided between us. 

I really wonder some days if my coworkers have caught onto the notable differences between us. Nicole is very much a shitposter that has some quite insightful things to say when she wants to. Jessie has some lovely metaphors that she invents on the fly. Ashe is the one that is out on the days that shit gets _really chaotic_ (including getting on the front page of Orange Site, not sure how that keeps happening so consistently). Sephie is much more security and SRE focused. Mai is the really creative one that comes up with a lot more of the "terrible ideas" than the others do. I sorta sit in the middle between them all, and at large we sorta kinda even out.

I really do wonder when we will feel _safe enough_ at a job to want to come out as plural to our coworkers. We've been fearing it though, it's all of the social problems of coming out as transgender with none of the legal protections. It's sad that there is a legitimate fear of alienating our coworkers. Coming out as plural to my (note: we have no idea what pronoun to use here) brother is a huge part of why he isn't really present in our lives. Tailscale might be the place we do it though. The stigma around the topic is a hard fear to work around (if only because it is justified).

<div class="conversation">
    <div class="conversation-picture">
        <picture>
            <source srcset="https://cdn.christine.website/file/christine-static/stickers/mara/hacker.avif" type="image/avif">
            <source srcset="https://cdn.christine.website/file/christine-static/stickers/mara/hacker.webp" type="image/webp">
            <img src="https://cdn.christine.website/file/christine-static/stickers/mara/hacker.png" alt="Mara is hacker">
        </picture>
    </div>
    <div>
        <p>
            <b>Mara</b>
        </p>
        <blockquote>
            Before any of you ask, I am not actually a systemmate/tulpa up in their head. My lines (including this one) are written by Nicole. They have gotten this question a lot and they figured this would be the best way to answer it. 
        </blockquote>
    </div>
</div>

Collectively, we share the username Xe and the legal name Christine. There's some stacked jokes regarding our VRChat avatar being based on the character that it's based on, however we'll leave those as an exercise to the reader to avoid spoiling too much of Xenoblade Chronicles 2.

Plurality isn't a magic bullet though. Sometimes the Big Sad can affect multiple of us at once. It becomes hard to work normally in those cases. Our strategy usually is to pass the baton when one of us gets stuck. Sometimes that doesn't work. It can be kinda annoying.

**What's the most important skill that you've taught yourself?**

How to break things down into their component parts and tackle those piecemeal. This is a skill that is _absolutely vital_ yet seemingly nobody wants to teach it. If it is even teachable that is. A lot of it really boils down to [play](https://youtu.be/lOXrfSvfW9o) as a legitimate work strategy.

Things don't have to be boring. They can be fun.

**Is there any skill that you spent too much time developing that you wish you hadn't?**

How to report child abuse to authorities. It's unfortunate that I've had to do it often enough that we had to write a [CW: Pedophilia discussions] [guide for myself](https://christine.website/blog/how-to-handle-pedophiles-in-communities-2021-03-07) on how to properly report it to the right people.

Other than that we try to live life without regrets. The past has happened [and can't unhappen, time is a blockchain](https://christine.website/blog/all-there-is-is-now-2019-05-25). It has been a tough pill to swallow, but overall it's helped a lot.

**What do you do for fun? Any books, movies, TV shows, etc. that you'd recommend?**

We are boring nerds when it comes to having fun. Lots of YouTube, video games and absolutely atrocious Nicolas Cage movies. In terms of recommendations here's some of our top picks:

- [Quantusum by James Mahu](https://www.goodreads.com/book/show/16110648-quantusum) - Quantusum is one of the best examples of spiritual fiction I have ever read, and has been a huge influence on my writing style and the kinds of stories I want to tell. It's annoyingly hard to get a legit copy of it though. Certain websites may help with that.
- The Matrix, which tragically never got a sequel. 
- [Xenoblade Chronicles 2](https://www.nintendo.com/games/detail/xenoblade-chronicles-2-switch/) - Xenoblade Chronicles 2 is easily one of the best games for the Nintendo Switch. You will get at least 50 hours out of a playthrough. It tells the story of a boy and his blade as they try to save the world from decay. It's almost worth buying a Switch for if you don't have one already. It also has an <a href="https://www.getrevue.co/profile/theprincessxena/issues/plurality-as-portrayed-in-cyberpunk-2077-and-xenoblade-chronicles-2-313929">amazing portrayal of plurality</a> that needs to be experienced by more people. It's got the story equivalent of an entire 5 season anime packed into a 13.2 gigabyte package. Highly reccomend.
- Battlestar Galactica (2002) - This show was really influential to me while I was growing up. It is the story of good intentions taken to the worst possible extremes. Please watch it. The parts where the Cylon method of projection is used to customize the inputs they get have been instrumental in how I perceive things.
- Star Trek: The Next Generation and Deep Space Nine - These shows together comprise what I love the most about science fiction. The worldbuilding for the Federation has been instrumental in so many other science fiction media. Deep Space Nine is why we have the concept of season-long arcs in media. The Next Generation is probably one of the best visions for a utopian ideal I've ever seen. Deep Space Nine did corrupt that ideal a bit in the more realistic setting aboard a space station that has a chronic case of exciting things happening, but overall it used that corruption as a tool. Well worth the watch.

**What's the biggest 'Oh Shit' moment you've ever had, be it one you caught in time or not?**

One time at work I typoed a reboot command to run on the wrong host. The server number was transposed (AF1373 instead of AF1337 or something like that) and I accidentally rebooted a production redis server. One of the bigest redis servers with over 500 GB of ram. So much data in ram that it took 8 hours to come back up, and most of that time was spent loading things back into ram. We were so lucky that we had a replica that we could promote to the primary server. That was almost a very very bad incident. It's been a few years though, so I don't remember too many details beyond that.

**Who are your biggest inspirations? What creators do you think are way to underrated and deserve a shout out?**

One of my bigger inspirations is the idea of chaos magick as a universal hammer. Distilling things down, you can reduce chaos magick to these two axioms:

1. Try many things
2. Do more of what "works"
3. There is no third axiom

Things can extend out from there infinitely.

The [WingMakers materials](https://wingmakers.com/) have also been a huge influence on my projects and writing. It is kind of way out there for most people, but 

**What's the best advice you've ever received? Worst?**

Know when to give up. This is a tough pill to swallow for me at times, as I am really really inclined to want to Make Thing Work, but sometimes I have to give up. It hurts, but sometimes you actually do need to move on to something else.

**How do you balance doing whatever you have [the itch](https://christine.website/blog/the-itch-2020-10-11) for at the moment with doing things to unwind?**

Poorly! Meditation helps. The most effective method I use is to just focus my awareness on the sensations of breath. The pressure. The movement. The constant change. The inhale. The expanding. The exhale. The shrinking. The cycle of breath. The calming cool air going in my nose. The warm air coming out of my mouth. The sensations of breathing.

Worst case there's tools like CBD oil. Thankfully I have managed to avoid needing to use them very often.

**What is your favorite 'hidden gem' tool?**

Nix and NixOS. The most magical thing about NixOS is that you can deploy stuff to a server and then you can undo it if it messes things up. I use it to deploy everything from my blog, my git server, my ebooks, my services and just about everything I can. It's a shame the documentation is so terrible though. I've been working on making better documentation though. 

**What hobby do you want to get into but haven't had a chance to dive into yet?**

At this point the only hobby I haven't gotten into yet is growing certain kinds of plants for my own private enjoyment. I've wanted to do it for a while but haven't really found a place to do it yet. I may have more luck when my fiance and I finally settle down and get a house. Every other hobby I've wanted to play with is something I've been able to play with though.