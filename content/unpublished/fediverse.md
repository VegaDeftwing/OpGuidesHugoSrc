# The Ｆｅｄｉｖｅｒｓｅ

{{< speech big >}}

Hello! This subject is really annoying to research and so I'll be the first to admit I may have something wrong here. If that's the case, please feel free to poke me on any platform you can find me or submit a PR for this website to fix it directly.

{{< /speech >}}

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Fediverse)" >}}

The fediverse (a portmanteau of "federation" and "universe") is an ensemble of federated (i.e. interconnected) servers that are used for web publishing (i.e. social networking, microblogging, blogging, or websites) and file hosting, but which, while independently hosted, can communicate with each other. On different servers (instances), users can create so-called identities. These identities are able to communicate over the boundaries of the instances because the software running on the servers supports one or more communication protocols which follow an open standard. As an identity on the fediverse, users are able to post text and other media, or to follow posts by other identities.

{{< /quote >}}

Alright, that's a lot to disect, so let's break it down.

> interconnected servers [...] independently hosted [...] can communicate with each other

So, basically, a bunch of people are running their own servers but they can talk to one another because they've agreed on a standard.

> [...] create so-called identities

so, make an account

> These identities are able to communicate [...]

but this account is recognized by other servers.

So, what this is getting is that you might have something that's less like Twitter where everything is on one centralized network and more like email. You can have an `@gmail.com`, an `@hotmail.com` or make your own - I could (but don't) have an `@opguides.info`.

Already based on that simplified exlpanation this has a few benefits:

1. You can be host your own server if you really want, so **you** can control your data
2. You can be a part of a server that has as tight or loose of rules as you want. Don't want rascists hanging around, then don't let them.

But the thing is, while there are fediverse connected services like Twitter - the big one being [mastodon](https://joinmastodon.org), which has many many great instances - more on that in a bit, the same protocol can be used for something like a YouTube clone (which is what [PeerTube](https://joinpeertube.org) is), streaming audio (which is what [Funkwhale](https://funkwhale.audio) is), being-a-better-insta-than-insta (which is what [PixelFed](https://pixelfed.org/) is), event planning (see [Gath.io](https://gath.io/)), and quite a few other things if you go looking. The point being, for each of these, an (optionally) unified identitiy can be used and the server you use (or host yourself) can choose who to federate with (talk to). This means it:

* Is censorship resistant

* Allows you to join a community that doesn't allow the things you like

* Lets you control your data as much as you want to. 

It's a win-win-win. In most systems these sound contradictory. How can something be censorship resistant, but still have communities with whatever rules they like? Well, the key word their is **communities**, and that it is plural. These communities are still separete, it's just that they can federate *if and only if* they want to.

If a server is full of racist jerks, nobody will federate with them. They can post all they want on their server, but their reach is limited. Yes, this makes echo chambers worse (in both directions) but, it's a hell of a lot better than the alternative.

Alright, so, this is cool but whenever somebody talks about all of this fediverse stuff, this is only half the picture. The other half is something called Activity Pub. So, uh, what's that.

## Activity Pub

Well, the website for it [activitypub.rocks](https://activitypub.rocks) says:

{{< quote "[activitypub.rocks](https://activitypub.rocks)" >}}

ActivityPub is a decentralized social networking protocol based on the [ActivityStreams 2.0](https://www.w3.org/TR/activitystreams-core/) data format. ActivityPub is an official W3C recommended standard published by the [W3C Social Web Working Group](https://www.w3.org/wiki/Socialwg). It provides a client to server API for creating, updating and deleting content, as well as a federated server to server API for delivering notifications and subscribing to content.

Sounds exciting? Dive in!

{{< /quote >}}

Which, uh, I don't know if sounds exiciting so much as it sounds like a description of a rockwell automation retroencabulator.

So, in English, it's a way for services/websites to talk to eachother ... which is a form of the above mentioned federation. So, basically, it's one way that things can federate. It's just that it's a really good way of doing it that many things are using. You'll often see the term used when people talk about the IndieWeb... wait fuck what's that?

## The IndieWeb

{{< quote "[indieweb.org](https://indieweb.org)" >}}

The IndieWeb is a [people](https://indieweb.org/people)-focused alternative to the "corporate web".

{{< /quote >}}

Uhh, wow, that doesn't tell us much. Fortunately, the website goes on to say basically everything I said about what the fediverse is in the first place. Confused yet? Me too.

Let's go backwards then. 

**Q:** Why would I want my site/service to be on the IndieWeb?

You want your site/service to be able to interact with other sites services

**Q:** Why would I want my site to be able to do that?

See how at the bottom of this page reactions to it on Twitter, Lobste.rs, various mastodon services, etc. all show up? That's using something called [Webmentions](https://indieweb.org/Webmention) which is something that's part of the indieweb movement. It lets things be connected without me needing to post it in any one of those places directly. This means I'm still in full control of this website, you're still in full control of your accounts, but you can talk about this website and people can see that conversation regardless of the platform you're using (assuming it works with ActivityPub)

**Q:** Why do I care if I don't have a website/server?

Even if you're not making your own content on your own platform, it still means you can interact with other people's content without needing to use their platform, that you can join a community that better suits you, and that you don't have to miss out on anything or be discussing things in a bubble.

**Q:** Huh?

You like Twitter but not *that side* of Twitter? Then you can use Mastodon. Mastodon is part of the fediverse, which is made up of indieweb servers, which all federate with eachother. You could join a server like [eldritch.cafe](eldritch.cafe) which is "For queer people, feminists, anarchists and their sympathizers. Mainly French, but other languages welcome" or [sunny.garden](sunny.garden) which is "a community for indie creators who draw, paint, sculpt, write, design, program, play, sing or build, their friends and family, and anyone else who thinks that sounds like a nice place to be.". But whichever you join, you can interact with users on the other, unless they block one-another, like if there were a [wowireallylovebeingracist.club](example.com), the servers can choose not to work with them.

Same concept, different target for the other things listed in the first part of this page.

**Q:** Wait, you just talked about the indieweb and the fediverse, but not activity pub.

Not a question, but yes. That's because it (usually) doesn't matter to a user. Yes, a good-portion of the time the fediverse works using activity pub, but this is transparent to the user.

**Q:** Why is this terminology so confusing?

Feckin' hell, right? In short, if your'e using Mastodon (for example) you are:

* on one of many websites that is interconnected in a way that is refered to as being **federated**
* all of these federated sites together are called **the fediverse**
* *probably* using a site that's part of the **indieweb**. The **indieweb**, though this is as philosophical as technical - the bigger deal being how many people run it. There's nothing stopping a big corporation from making something that's federated, but that's not really indie anymore.
* using **Activity Pub** behind the scenes when your mastodon instance talks to another. This happens all the time as your toot (the equivelent of a tweet) propogates though all the federated instances.

**Q:** I'm still confused.

And that's not a question, but same. Reading [An Introduction to the IndieWeb (Chris Aldrich)](https://boffosocko.com/2017/07/28/an-introduction-to-the-indieweb/) 

# But wait, there's more!

While this article is supposed to be about the fediverse, activity pub, and the indieweb, it would be incomplete without mentioning the overall point of all of this: trying to return to a time when the internet wasn't dominated by monolithic, global-scale systems. These are good for some things, sure, but they're really suck for others. A few other things are helping with this:

## Webrings

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Webring)" >}}

A webring (or web ring) is a collection of websites linked together in a circular structure, and usually organized around a specific theme, often educational or social. They were popular in the 1990s and early 2000s, particularly among amateur websites.

To be a part of the webring, each site has a common navigation bar; it contains links to the previous and next site. By selecting next (or previous) repeatedly, the user will eventually reach the site they started at; this is the origin of the term webring.

{{< /quote >}}

Which, is exactly what this website is a part of. Rather than put the button to go to the next website though, I'll just link the list: https://webring.xxiivv.com. Being a part of a webring is basically a part of having an indieweb website now.

## Decentralized networking

While it's sure as hell taking it's sweet time to get there, there's some really neat projects that are trying to make the backbone of the internet decentralized. The idea here is that it's a bit weird that if you were to instant message your neighbor that it has to go over your cell carrier's or ISPs network instead of your presumably-close-enough wi-fi routers just ... talking. It's almost a little to obvious to the point that it sounds dumb it doesn't work this way already.

To various degrees and in different ways, project like [yggdrasil](https://yggdrasil-network.github.io), [ipfs](https://ipfs.io), [cjdns](https://github.com/cjdelisle/cjdns) + [hyperboria](https://hyperboria.net/), [beaker](https://beakerbrowser.com), 

## The not http-web

When you go to a website and do (almost) anything, all of the content is severed over the **H**yper**t**ext **T**ransfer **P**rotocol (or HTTP**S**, the secure variant). HTTP is great, it's allowed us to make the bad as internet we have today. *But*, it can sometimes be a bit to freeing. That freedom is why we have a lot of websites which sucks for screen readers, are full of obnoxious ads, etc. So, there are alternatives.

The big two are **Gopher** and **Gemini**, and at risk of pissing people off by treating them like they're the same thing, they're both very limited. You can display text, images, etc. but the way those websites actually arrange the content and show it to you is up to your browser. The websites themselves only provide the content, they leave it up to the browser to decide how to display it. If you want to try out a browser, see [Castor](https://sr.ht/~julienxx/Castor/) and noodle around. (or maybe [bombadillo](https://bombadillo.colorfield.space) if you're a TUI person)

If you want to know more in a not incorrect and at least less-simplified way, give [Gopher, Gemini and The Smol Internet (Tales From The Dork Web #22, Steve Lord) ](https://thedorkweb.substack.com/p/gopher-gemini-and-the-smol-internet)a read.