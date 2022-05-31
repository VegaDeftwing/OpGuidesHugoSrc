# Chapter 4: What points contradict?

<script>    document.getElementById("hciMenu").open = true;</script>

## Having Low Level Access and High Level Usability.

Yeah, this is always a problem. It's always been the dream to be able to describe in 'natural language' what you want and to have the computer parse what you want, inferring intent, and do whatever you want for you, but naturally, this will never be totally possible. This point is only conflicting in the sense that it can be overwhelming- if a user has access to work in something as high as natural language and can manipulate those instructions all the way down an the assembly level, that's a lot of open space. Ideally, each layer of the abstraction would be open to tinker and modify for the sake of getting the solution to work correctly, to pipe data around at any level, or to add functionality in it's most natural language: Some tasks are better suited to describing what's needed in English, some are easier to do down in the dirt.

Making everything open this way may sound complicated, but if the UI were presented right it could just be a stack of abstraction that propagates up and down. Changing the assembly could change the source could change the natural language description. Better, the cost of this could be lowered if each layer is only shown and edit-able at request, and that layer just bypassed until needed. Of course, this would mean being able to to make a set of languages that can be can go from higher level to lower level yet have a middle language introduced mid-stack without changing the meaning. This is complicated. It's like asking for a fast python interpreter that can be ran directly or spit out C, then have that C code be editable with it's changes reflected back into the python code. I'm aware of how complicated of a problem that is. Add a natural language description above the python level in the above and it just got much, much more complicated. Still, I think this is something we should aim for.

## Latency/Speed vs Things That Are Inherently Heavy

I'm asking for a lot of inclusion of AI/ML tech into the OS and day-to-day use, yet also asking for much, much faster response times in general. To some extent, hardware with dedicated silicon for AI/ML will make this better, but regardless, there's no way around how much this conflicts. I think the only way to fix this is to recognize what latency is and isn't acceptable.

As mentioned above in **Presentation of Information -> Updates after Initial Draw**, there are some things that are particularly egregious to the user from a UI timing perspective. Waiting on the computer sucks, sure, but having to **babysit** the computer while you wait on a prompt that could easily be given preemptively or make sure a task doesn't time out is completely unacceptable.

But even just directly looking at speed and latency, there's still a ton of room for improvement. Why does the root file system not retain at least an index of other file systems to let you browse while a HDD spins up or a network connection is established? Why do so many damn things have   *s u c h   l o n g*   animations that have to complete before the user can continue? But most of all can we *please* stop building programs with electron or other things that are just full browsers for one program? Use literally anything else. The best way to lower latency is to use as little code as possible, good data structures, good libraries, and good tools. I said it contradicts to keep latency down when doing things that are heavy, but a lot can be done to make so much of what we use day to day substantially lighter to begin with with no loss in functionality. I understand why projects use Electron, but if you must please just use Flutter or Neutralino or Sciter or Ultralight even a game engine. Just, not something so heavy unless you need it? Please?

This [Input Lag (danluu)](https://danluu.com/input-lag/) article really puts into numbers how big of a deal this is.

## Customizeability vs Defaults

I'm writing this at [@292.78](https://minkukel.com/en/clocks/swatch-internet-clock/) on Day 15 of [12,022](https://www.youtube.com/watch?v=czgOWmtGVGs). I'm typing on a Dvorak, split, ortholinear keyboard in a [markdown](https://www.markdownguide.org/basic-syntax/) document using [Arch Linux](https://www.archlinux.org/) instead of M$ Word on Windows.

And It's fucking awesome.

Thing is, nobody else can use my computer. Moreover, if anyone were forced to learn all these weird formats and behaviors instead of what they're used to, they'd give up. What people are used to, that is the *defaults* make a huge difference.

Defaults have a lot of power. There's good reason that (for a while at least) Microsoft had to [inform users about browser options](https://answers.microsoft.com/en-us/ie/forum/ie8-windows_other/what-is-the-browser-choice-update/12fb0294-fd62-4487-a14b-ac37071c1081). What comes ready to use and presented to the user from the start is much more likely to get used than something a user has to go out of their way to get.

Similarly, the ability to even make choices in the first place matters a great deal. For example, on modern versions of Windows, you're pretty much stuck with the stock shell (desktop+file manager) as alternatives are either [pretty similar](https://cairoshell.com) to what's there already or [mostly dead](http://bb4win.sourceforge.net). 

The question then becomes what things *matter* to choose? I think ideally everything *should* be open enough to be replaced, but that doesn't fix anything if options aren't given. At the same time, Systems like [Arch Linux](https://www.archlinux.org/) will likely never have mainstream appeal exactly because none of these choices are made for the user. At the end of the day, most users want a system that *just works*. They don't want to have to choose between a list of 5 different firewall providers, hundreds of desktop environments, and login managers, and shells, and so on. So, defaults have to be chosen.

Fortunately, so long as people have the option to change things if they want to, they can approach a system that works well for them. For me, that's Linux, i3wm, Dvorak, and a bunch of weird hardware. For a lot of people, it's probably just exactly how Windows is now with a few minor tweaks.

## Everything is in the browser now anyway?

Above I said that all of this should be in the OS and not just browser extensions as people still use a lot of non-browser tools, and I think saying that was rather dismissive. It is definitely true that when using a computer today the vast majority of your use will probably be in-browser. The problem lies in that 'vast majority part' - that's likely because in general people spend a lot more time consuming than creating, and the browser is built for media consumption.

On the other hand, most creative software - be it for writing, art, video, music, etc. - is not browser based because, well, it sucks for that. Maybe that will change as WebAssembly makes things faster, but I don't see it happening, so I think we still need full OS integration for it to really matter. Plus, browser based usually implies a monthly, recurring bill - software as a service (SAAS) - which is bullllshiiiiit.

The other point to make here is the browser probbbbabbllyy isn't the best place to implement a lot of what I've mentioned so far given a lot of it is performance sensitive, works with private information, and relies on deeper tie in to the OS - something which for security sake the browser shouldn't really be capable of. 

On the other hand, one of the things I mentioned repeatedly was portability. Browsers actually have this working pretty damn well at this point, syncing beautifully between devices compared to how things are on Windows or Linux (I wouldn't know about mac ¯\\_(ツ)_/¯)

## Unification vs Diversity

Or why **"I wish everybody used Linux!"** is probably not the wisest thing to say.

To keep this short, if everybody used Linux, there'd be less incentive for Linux to compete with Windows. If everybody used Windows, M$ wouldn't have incentive to further their OS. Boiled down, competition is a good thing.

That said, there are limits to how much diversity (in the context of computing) is a good thing too. If I search the Arch User Repository for "i3lock" there are  28 results + original they're all forked <a class="ptr">(1)</a> from. And, okay, not all 28 of those are actual forks, but you get the point. There's a lot of work being duplicated on open source projects, instead of just everybody working together to make one, really good thing.

And, yeah, this provides more choices, but does *anybody* want to research 28 choices for anything to figure out which is best? Especially when most of them are super similar? With desktop environments on Linux at least each is typically novel enough to fun to look at, but if it's something boring, like the given screen-locker example, really?

<ol hidden id="footnotes">
<li>for the non-technical people: A fork is just when you take an existing project and add your own features on top, usually with a rename. If I don't also keep my project up to date with the original, they'll diverge in features even more significantly with time.</li>
</ol>