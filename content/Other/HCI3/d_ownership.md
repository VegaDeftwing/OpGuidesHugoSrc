DRM, spying, etc. data ownership. cookie banners., Denuov, Ilok

modchips, "resistance" - modchip.jpeg from https://www.reddit.com/r/cableporn/comments/1g2uc0x/ps2_modchip_install_i_recently_finished/

Enshittification

Clarify ownership in the copyright sense and ownership in the ethical creepy sense.


# Ownership & Enshittification
In early 2024 it was headline news for gamers that Ubisoft was displaying the message:

> You no longer have access to this game. Why not check the Store to pursue your adventures?

To anyone who had previously purchased *The Crew*, because Ubisoft was shutting down the servers. This was made particularly egregious because the game has a single player mode which should, in no sane world, require the user be online to play.

A few months later, an executive at of Ubisoft said this,

{{< quote "Ubisoft Exec Philippe Tremblay" >}}
One of the things we saw is that gamers are used to, a little bit like DVD, having and owning their games. That's the consumer shift that needs to happen. [...] So it's about feeling comfortable with not owning your game.
{{< /quote >}}

Needless to say, this was not a popular statement. But this attitude and the business practice of putting the word "BUY" on something that is, in truth, only being licensed to the consumer in a way that may be revoked at any time is not new or exclusive to Ubisoft.

{{< light >}}

Fortunately, there has been push back. California recently passed Bill №2426, which, states

{{< quote "Assembly Bill No. 2426" >}}
It shall be unlawful for a seller of a digital good to advertise or offer for sale a digital good to a purchaser with the terms “buy,” “purchase,” or any other term which a reasonable person would understand to confer an unrestricted ownership interest in the digital good, or alongside an option for a time-limited rental, unless either of the following occur:</br>

(A) The seller receives at the time of each transaction an affirmative acknowledgment from the purchaser indicating all of the following:</br>
(i) That the purchaser is receiving a license to access the digital good.</br>
(ii) A complete list of restrictions and conditions of the license.</br>
(iii) That access to the digital good may be unilaterally revoked by the seller if they no longer hold a right to the digital good, if applicable.</br>

(B) The seller provides to the consumer before executing each transaction a clear and conspicuous statement that does both of the following:</br>
(i) States in plain language that “buying” or “purchasing” the digital good is a license.</br>
(ii) Includes a hyperlink, QR code, or similar method to access the terms and conditions that provide full details on the license.
{{< /quote >}}

I would rather the law explicitly disallow using the word "buy", but this is a good start. 

{{< /light >}}

What's on display here is a specific example of a broader problem though: Enshittification.

{{< bigquote "Cory Doctorow">}}
Here is how platforms die: first, they are good to their users; then they abuse their users to make things better for their business customers; finally, they abuse those business customers to claw back all the value for themselves. Then, they die.

I call this enshittification, and it is a seemingly inevitable consequence arising from the combination of the ease of changing how a platform allocates value, combined with the nature of a "two-sided market", where a platform sits between buyers and sellers, hold each hostage to the other, raking off an ever-larger share of the value that passes between them.
{{< /bigquote >}}

The [Wikipedia article](https://en.wikipedia.org/wiki/Enshittification) on the subject has many examples.

By far the worst offenders come from those that seek to profit from their users at all costs by way of ads, I don't mean how the ads themselves are intrusive and platform destroying (but the [TODO] presentation page covers that in more depth), rather I mean what the ad-tech industry has done to our data.
## Adtech
In 2012, Forbes ran the headline:

[*How Target Figured Out A Teen Girl Was Pregnant Before Her Father Did*](https://www.forbes.com/sites/kashmirhill/2012/02/16/how-target-figured-out-a-teen-girl-was-pregnant-before-her-father-did/)

Of which the short version is Target sent targeted, physical ads based on people's searching and shopping habits online.


# OLD
--- 

### Transferring Your Profile Sucks

Say you want to move off of Twitter and go to Mastodon, how do you do that? Well, there are options. You can run a bridge account and have toots from Mastodon get automatically posted to Twitter and just leave a pinned tweet saying you'll only reply over on Mastodon. But, wouldn't it be better if you could import all of your tweet history?

What if you get a new computer, wouldn't it be nice if setting it up was as easy as just copying over a settings file that has everything you want, all your programs, configurations, accounts logged in, etc? Sure, you can get close by using a few "super accounts" like signing into Chrome, Steam, etc. but then your both trusting other services with your passwords and all your data.

I think this comment points to a better idea:

{{< quote "[AnIdiotONTheNet](https://news.ycombinator.com/user?id=AnIdiotOnTheNet) comment on the [Re-Thinking the Desktop OS](https://twitter.com/patrickc/status/1316475471203360769) Hacker News Submission" >}}

[...]

5) Switchable "user profiles" instead of "user accounts", which are an artifact of giant shared computer systems. User profile just contains personalized settings and can be located anywhere, including removable media so you can take yours to other computers. If you want to keep things safe from others, encrypt them. Otherwise there are no permissions except those applied to applications themselves.

{{< /quote >}}

For this, I think Solid, a project by Sir. Tim Berners-Lee, the guy behind the World Wide Web, is a decent implementation of this if it were to gain enough traction to actually be used.

{{< quote "[Solid Wikipedia Article](https://en.wikipedia.org/wiki/Solid_(web_decentralization_project))" >}}

Solid's central focus is to enable the discovery and sharing of information in a way that preserves privacy. A user stores personal data in "pods", personal online data stores, hosted wherever the user desires. Applications that are authenticated by Solid are allowed to request data if the user has given the application permission.

{{< /quote >}}

But the point I'm trying to convey is that right now setting up a new device or logging into a service sorta blows. The user profile needs to be secure, user-owned, and decentralized. For those that know Linux, it's what making your `~/.config` folder into a git repo *should* be like.

#### Speaking of "Your Profile"...

While, yes, advertisers collect a bunch of information about you to advertise to you in a profile that you can't control and that sucks, others have spoken about that extensively, probably most entertaining for this [Data Brokers: Last Week Tonight with John Oliver](https://www.youtube.com/watch?v=wqn3gR1WTcA). But, most people also have some intentionally public online presence, where they have some information they've decided they want people to be able to find. The comfort with this varies from person to person, but for many it may include age, birthday, gender, name, place of work, and a few hobbies.

You'd think this would be easy enough to get right.

It's not.

First of all, let's pick on gender selection. 

If you make a website or app and do this:

<form action="/action_page.php">
  <p>Please select your gender:</p>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">Male</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">Female</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">Trans</label>
</form>


You can go fuck yourself. "Trans" is not a gender. If someone is trans, they are now identifying as a different gender than the one assigned at birth. If you really must know, this can be a box, but, it's also probably none of your fucking business. What you should *probably* have is something either asking for preferred pronouns, or, if you absofuckinglutly must have their gender and know if they're trans (which, uh, no, you probably don't.) then proceed with caution. Otherwise you [may end up in one](https://threadreaderapp.com/thread/1235703750448353280.html) of [@Foone's](https://twitter.com/Foone/status/1455300158271352834) many [Twitter Threads](https://twitter.com/Foone/status/977304714978062336) making [fun of bad UI choices](https://twitter.com/foone/status/1343959530321788928).

Even with names, this is easy to fuck up. Like Google+ (now dead) wanting only ["real names"](https://www.forbes.com/sites/kashmirhill/2012/01/24/google-relaxes-real-name-policy-but-might-make-you-provide-proof-of-your-nickname/?sh=34c057854697) which is a privacy disaster and has real issues for some people with uncommon or long names, and it's even worse for those with either weird characters or no last name. (Different Cultures are a thing, remember.)

Basically, anticipate there being *someone*, *somewhere* that doesn't fit nicely into your design. Someone will have a name with a substring that contains a curse word when interpreted in a different language. An intersex person may sign up for your website and be neither Male or Female while also not being trans or gender fluid or anything else you anticipated.

As a user, this means we really, really need to be able to fully control our profiles. Let people enter their own preferred pronouns, names, etc. Don't make it a checkbox.  



## We basically don't even own our computers anymore

Like many things in this far-to-long article, this could be post on its own, but I do think it's necessary to bring up the fact that there's an on going war against general purpose computation. If you've got an hour to kill (or half an hour if you can tolerate 2x speed), this video is basically required viewing:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/HUEvRyemKSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< hint info >}}

A few notes on this video. 

[SOPA](https://en.wikipedia.org/wiki/Stop_Online_Piracy_Act), the Stop Online Piracy Act, is mentioned because at the time it was a big deal. Thankfully, it was indeed stopped.

[Illegal Numbers](https://en.wikipedia.org/wiki/Illegal_number) are a thing, and the history of them is incredibly interesting

{{< /hint >}}

There are also issues on ownership, for example:

[Amazon Sued For Saying You've 'Bought' Movies That It Can Take Away From You](https://www.techdirt.com/articles/20200505/23193344443/amazon-sued-saying-youve-bought-movies-that-it-can-take-away-you.shtml) and [Microsoft Is Closing Its Ebook Store and Taking the Books With It](https://www.popularmechanics.com/technology/a27021744/microsoft-ebook-store-shutdown/)

Not to mention the fact that [updates keep changing how IOT devices work](https://staceyoniot.com/the-unbearable-fussiness-of-the-smart-home/), making them more "needy" as they display more notifications and interupt the user more in a plea to get used (so they can harvest even more data).