 
{{< light >}}
# The Future

Despite it being regularlly declared dead, Moore's law - the idea that computers will roughly double in speed<footnote>Er, actually transistors, but within some degree of hand-wavy-ness calling it "speed" is fine</footnote> is still holding and while I suspect that sometime soon-ish (<20 years) that will cease to be true for silicon based processors and we'll hit a bump, I think it will still continue after.

**But I don't think the vast majority of people care.** Other than for codecs - the specialized hardware that is deisgned around decoding specific formats in a fast, power efficient way - I think most people could use a 15 year old computer (This was written in 2025, so 2010 tech) and for the vast majority of their computer use, find it totally fine.

Hell, among the most technical crowd old thinkpads like T480 from 2018 (or even older from the same line) are pretty common, because for the vast majority of tasks it's totally useable, the keys feel good, and it's built like a tank. Now, this isn't an ad for an old Lenovo Thinkpad or a recommendation that you run old hardware (You do you), but rather just stating something most people have felt:

Other than for some nieche applications, computers are good enough.

Sure, you can always have more juice for powering the latest games and you might want beefier hardware if you're video editing in 4k or whatever, but even the number of games that demand the latest and greatest is dwindeling because it takes ever increasing resources to even make something that would fully utilize the hardware.

This is good. It means we can focus on optimizing for power, longer battery lives, better screens, and lengthen the usable life which is good for the environment.

{{< /light >}}

But I don't think we've gotten here in the right way. I think this points to some problems:
1. We need to make the hardware last even longer, but making the parts (codecs) upgradable
2. We need to make software that gives people a reason to want again<footnote>Not in like a consumerist "I want more consumption way" (gross), but in a "I want to see technology that helps everyone push what's possible" way</footnote>
3. We need to spend less time making hardware, and more time optimizing software (else just always waste the gains)
4. We need to make something new - add new capabilities - like the 80's, 90's, and 00's again. Weird ports, weird tech, but focus on software and interconnectivity
    * TODO: Protobuf between apps, data as a pool between hardawre.

Up to now, I've tired to focus on the realities of what we have here and now, the facts of computing as it is, not how it could be. This is where I'm dropping that: This is where we talk things that would require top-down changes from the big players. This is where regulation meets politics to get things to happen. Nothing said going forward will happen in our current systems. But ideas big ideas have to start somewhere.

{{< light >}}
# The biggest idea: It's all data

What is a computer?

I know that sounds like an almost snarky question - the intro to someone going on about some weird deep rant about the internalls, how memory and storage and processing power and all that jazz interplay. As a computer engineer, that all interests me deeply. But, your normal person absolutely does not care.

To a normal person, it's a tool to manipulate, send, and receive data with meaning.

Those 1's and 0's could be the file where a kid spent their childhood building a world in Minecraft. They could be a text asking for a divorce. They could be a picture of a new childs first steps.

We don't open our computers to a calculator app and see marvel at how quickly they can multiply two large numbers for fun<footnote>Well, most of us don't. I'm sure I have at least a few readers who would counter...</footnote>

I think our biggest fuck up in all of computing was not making a unfied way to extend systems for data transfer, encoding, and decoding and not exposing as much data as possible to be optionally logged in a useful format.

Let me explain. There are a few things that you can't <footnote>"you" being a normal computer user, and "can't" meaning not without unreasonable effort.</footnote> do:

1. Drag the window of a running game from one your desktop to your laptop and switch that game to be running on the desktop to the laptop, without ever closing the game. Alternatively, just save an application's state to resume later. Not at a SAVE location in a game? Who cares. Snapshot the application state and come back later.
{{< smalltext >}}For the nerds, read as: CRIU + Desktop Network Transparency{{< /smalltext >}}

TODO: Make the SAVE look like Undertale

2. Put all the storage all your devices in a pool, and set easy policies to say how to automatically backup each to one-another, such that you can never loose data **and** keep the most used data the fastest to access.

3. You can't grab data from multiple sources and easily act on it. There's no user-friendly way to say "Plot the volume of the audio output of the games I played over the last week, my health in each game, and my volume into the microphone, all in percent, over the last week"

{{< /light >}}

Of course, there are reasons for all those examples:

1. You'd need all computer to use a common instruction set and share a common environment for the running system, and have a way to deal with the brief freezing, transfer, and resumption of a running task.

2. You'd need all your devices to coordinate information about how much storage they have, how fast each piece of storage is, report if any of it is failing, keep track of how often something is accessed (and if used infrequently but on a schedule that's easily predictable, that too), plus you'd have to able to handle if a device goes offline - so you still probably need a server. Plus, this would cost companies money: you'd need less total storage - and possibly no "cloud" storage - if your own devices made your own cloud. 

3. This would require a few things: Notably, a user would have to have an OS that lets them specifiy that each audio stream in and out should be recorded. It would also require each game provide a way to log data like player health.


{{< light >}}

## How we could transition to this:

What we need:

1. Environment abstraction or unification: I really, really hate extra, unnecessary layers of abstraction like containerization. I think they make our computers slower, worse, take up a bunch of space, etc. and don't provide enough of a benefit.

TODO: Weirdly, proton is already making this more possible.
TODO: Mention how we basically have this with emulators for old games.
TODO: Long rant about how Linux doesn't break userspace but libraries do, but how we could hack old libraries to do this anyway.
TODO: CRIU. Plus, this makes apps open fast AF.
TODO: https://arcan-fe.com/2020/10/28/a12-advancing-network-transparency-on-the-desktop/

2. Standardized Device capability exposure:

TODO: See Linux or Embassy. 

3. Application data exposure: This doesn't have to be baked in, but it's easier with developer support, but we **can** do it anyway. We already crowd source ad-blocking lists: Why not crowd source data parsers? - This means we need very quick, OS supported, ways to inspect memory and storage, cheat-engine meets IMHex meets GlamerousToolkit meets https://arcan-fe.com/2020/02/10/leveraging-the-display-server-to-improve-debugging/ and https://arcan-fe.com/2021/04/12/introducing-pipeworld/ and https://arcan-fe.com/2015/02/08/next-experiment-senseye/ + https://www.divergent-desktop.org/blog/2020/08/10/principles-overview/

{{< /light >}}

## Where this gets tough:

1. a

2. Standardization of new behavior: We need consistent naming - fortunately, it's rare that anything is new. Most things are either combonations (Screen & knobs on keyboards)

... Plus, there are hardware considerations. While storage is more-or-less abundent now (As in multiple TB per person is totally reasonable), we don't want to constantly wear it out. Avoiding that means a lot more volatile storage and normalizing "If you didn't save it, it's gone at reboot / when the buffer rolls over" - want more history? Buy more RAM.

This would probably mean more tiers of storage. I could see this being good though. DDR3 or DDR4 are cheap and plentiful, why not have systems have two tiers of memory? Or, yunno, revive Optane and make it cheap.

* All data is parseable and shareable. Browser history, games, etc. all data has an associated parser
    - Something, something protobufs, structs, and signals
* Something combining GlamorousToolkit, Obsidian, etc.
* Storage: You only need your HDD/SSD to move to a new system
* Storage: You just treat everything, across all computers, as a pool. Specify redundancy

TYPE 1: Permanent. Keep me forever. Ask for tags and info. Allow for pre-populating off last DL for assumed series DL's. Timestamp'd
TYPE 2: Temp. Put in RAM. Expire at reboot

storage pools can be setup with smart caching, syncing locally or over the internet (Syncthing style) with the most recently used data + context of device usage patterns. Storage pools can be set as backup and it'll just work, and factor in redundancy across the network.

* Debuggability, easy very low level ops (think image corruption tool)

* Cache'd execution state. Apps sholud launch faster by just saving ram state after launch to disk.

* Capability exposure. A standard for defining what kind of data can be consumed and output, latency/cost to do so, etc.

* Internet P2P torrent style

* FPGAs with common handling for new protocols
* Slot in upgrades for smaller changes
* Unified memory (ish)


Relate to the 80's - faster improvement, but no backwards compatibility. At some point we need to do that again.