# Chapter 33½ - Your Guide to Privacy

---

<div style="display: block; width: 84%; text-align: center;margin-left: auto; margin-right: auto;">
<p style="font-size:1.2em;color:#aaa;"><i><b>"</b>Arguing that you don't care about the right to privacy because you have <u>nothing to hide</u> is no different than saying you don't care about free speech because <u>you have nothing to say</u>.<b>"</b></i>
</div>
<div style="display: block; width: 80%; margin-left: auto; margin-right: auto;">
<p style="font-size:.85em;color:#aaa;">- Edward Snowden, in his <a href="https://www.reddit.com/r/IAmA/comments/36ru89/just_days_left_to_kill_mass_surveillance_under/crglgh2?utm_source=share&utm_medium=web2x&context=3">Reddit AMA</a></p>
</div>

---

Privacy online is a joke. No matter what you do, you're still going to be tracked so much that advertisers and the big tech companies (Facebook, Google, Microsoft, etc.) all know way more about you than you'd like. *Technically*, most of these companies will provide various opt-outs. Realistically, you shouldn't expect these to stop anyone. You can be 110% your data is being sold. So, what can you do?

0. **Acknowledge you can not win**, but you can still fight back.

1. **Don't buy *smart*-XYZ devices**. No smart bulbs, toasters, fridges, toasters, ovens, thermostats, TVs, or doorbells. And, look, I get it. Each offers a pretty legitimate convenience. But between the ability for companies to change a one time payment into a [subscribtion after purchase](https://www.consumerreports.org/smart-home/wink-tells-users-pay-up-or-we-will-disable-smart-home-hub/), devices phoning home even if you don't [connect them to your wifi](https://www.amazon.com/Amazon-Sidewalk/b?node=21328123011), and [IOT cameras letting police in without a warrant](https://arstechnica.com/tech-policy/2019/08/police-can-get-your-ring-doorbell-footage-without-a-warrant-report-says/) I think it's pretty clear they don't respect you as a user. Where you draw the line is a personal choice. Obviously, it's hard to function without having a ~~Internet connected camera, microphone, and GPS~~ smartphone in your pocket. But what about a smart watch? Do advertisers need to know your heart rate, how hard you've been trying to work out, or how many steps you got in each day? What can be derived from all this data combined? Can they see if you're on your period or currently sick to advertise pads or drugs directly at you?

   For the love of fuck don't buy a smart speaker or anything Alexa enabled. I honestly can not believe I have to say this.

2. **Block as much shit as you can**. Ads and trackers and cookies may not *all* be malicious, but enough are that the ad industry dug its own grave: block their dumb asses. You won't ever get full coverage, some things will slip though BUT setting up a [Pi-hole](https://pi-hole.net), using uBlock-Origin (or [adnauseam](https://adnauseam.io)), and DuckDuckGo (until you need Google, but defaulting to DDG helps) makes for a good start.

3. **Delete, Opt-Out, or Lie** - Much like reduce, reuse, recycle, this order matters. **Delete** anything you don't need, don't use, or don't trust. If you don't use it for anything other than talking to people you don't like and seeing when someone you haven't talked to in a decade has a kid, delete your [Facebook](https://www.eff.org/deeplinks/2020/12/facebooks-laughable-campaign-against-apple-really-against-users-and-small). If you trust a service's **Opt-out** functionality, do so! Yeah, it's bullshit that you have to opt-out instead of opt-in in the first place, but for now that is what it is. Dig through settings on everything you can and turn off all that tracking, spying, bullshit. Go into your browser settings and turn on 'Do Not Track' for the approximately 0% of site's that respect it. Go into your Google settings and turn off and clear location history. Do all of this about once a year, as this shit will re-enable itself. It's really only about an hour of diving into settings to stop like 75% of the bullshit. 

   **From here, the "This is a pain in the ass" levels starts to surpass what most people will deal with.** This is by design. But, if you *really* care about your privacy, this will make a significant improvement and might result in you getting less spam calls and physical junk mail as a side effect.

   Unfortunately, Opting out requires both that you know who your data is being collected in the first place and that the offending asshats even offer an opt-out in the first place. 

   >  A great example of the latter being [Clearview.ai](https://clearview.ai/legal), which from wikipedia is "an American facial recognition company, providing software to companies, law enforcement, universities, and individuals. The company's algorithm matches faces to a database of more than three billion images indexed from the Internet, including social media applications"- Basically, they stole your face from Facebook, Twitter, and everywhere else, and sell the ability to have a computer recognise you to law enforcments. They're assholes, selling to a [huge list](https://en.wikipedia.org/wiki/Clearview_AI#Customer_list) of other assholes. Want to opt out? Hah, no. Not unless you live in Illinois or California, the only states to pass legislation telling them to fuck off.

   So... What can you do? Well, if you're serious about it you can plow though this ["Big Ass Data Broker Opt-Out List"](https://github.com/yaelwrites/Big-Ass-Data-Broker-Opt-Out-List), and [This list](https://simpleoptout.com), and this [opt-out tool](https://optout.networkadvertising.org/?c=1),  *try* to Opt-Out of as much as you can. Or you could pay out the ass for a service like [DeleteMe](https://joindeleteme.com) or [PrivacyDuck](https://www.privacyduck.com) to do this shit for you, not that I really trust them to be all that though, and there's some they can't really remove you from in the first place. But ultimately, you really can't stop it and you'll just be opt'd back in when these companies change hands or restructure or just feel like it. If you want to use the internet as normal- using YouTube and Twitter and Reddit - you'll just have to acknowledge to to some extent your stuck with it.

   That brings us to **Lie**. If you can't Delete and you can't opt-out then you can still lie. To lie, you must first try to delete the truth. Seach how to reset your advertising ID on as much as you can<a class="ptr">(1)</a>, log out of everything, delete all your cookies, then use tools like ['Track This.'](https://trackthis.link) to 'seed' your new identity, and add something like [Noiszy](https://chrome.google.com/webstore/detail/noiszy/immakaidhkcddagdjmedphlnamlcdcbg) (or this [python based web crawler](https://github.com/essandess/isp-data-pollution)) on top to keep the history polluted. Unfortunately, this still isn't enough because as soon as you log back into Facebook, Twitter, Google, YouTube, etc. your identity will be re-associated. The best way around this is to use a separate browser strictly for social media. Firefox works particularly well, as you can [throw Facebook into it's own little jail](https://addons.mozilla.org/en-US/firefox/addon/facebook-container/). 

   Keep in mind, you're probably used to a pretty tailored experience from *The Almighty Algorithm* such that most YouTube, Google News, etc. recommendations are probably things you'll be interested in and agree with (or *strongly* disagree with, as hate still gets you to read things). If you pollute this ID, you'll likely get complete shit as it's [kinda creepy](https://signal.org/blog/the-instagram-ads-you-will-never-see/) how much the algorithm can figure out the things you like and who you are. If not complete random shit, *The Algorithm* might just see you as something else entirely, and this can *seriously* impact what you get exposed to- check out [TheirTube](http://www.their.tube) for an idea of how bad it gets.

   

There are a lot of things I didn't mention here, such as globally disabling javascript<a class="ptr">(2)</a>, because they're really the nuclear option and end up being significantly inconvenient to even technical users. Being online is a trade of convenience verses privacy by nature, the problem is that many users are either unaware of the trade at all, ignorant of the depth to which they're being mined and exposed, or apathetic. At the same time, advertisers and conglomerates have sought to wring from us every drop of data that can be found and paid off governments to prevent the passage of any consumer protecting legislation. This has resulted in the situation we have now where the only ones that fight back are those with enough of a technical background to do so, and so the tools assume a certain level of technical prowess and ability to make your own replacement. Don't want a ring doorbell? "Just use a raspberry pi and a camera module and host your own server for it!" my fellow hackers will say, as if the average user is capable of setting up a pi, let alone the server, forwarded network connection, firewall, and security shit that is necessary for it.

There's also an ironic point where going to overkill with privacy makes you stand out more. If you don't get 100% anonymization you're going to stand out as one hell of a weird data point. If you don't get banned from the service for looking weird, you'll sure as hell be flagged and watched. If you go from Russia to Canada to Mexico in the three page visits, your reported OS and screen resolution change on each, and you block all trackers and ads you can be sure as shit you show up as a red flag. See ["The Fantasy of Opting Out"](https://thereader.mitpress.mit.edu/the-fantasy-of-opting-out/) from *The MIT Press Reader*.



<ol hidden id="footnotes">
	<li>Or just make a new account dedicated to this false identity. Just make sure to log out of everything first (or use a different browser) otherwise the old account and new account will still be linked, defeating the purpose.</li>
    <li>Or using TOR, a DIY VPN, DNSCrypt, E2E chats, etc. I deemed these a bit to technical for this page for now. I might make a 'for the nerds' section latter, feel free to submit a PR if you think otherwise.</li>
</ol>

There's also the point of not being spied on by the government, but at least for now there's really jack shit you can do about that outside of what's listed above if you still want to even exist on the internet and not join the Amish in how you use technology.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/XEVlyP4_11M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
