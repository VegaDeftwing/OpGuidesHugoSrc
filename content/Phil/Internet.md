---
title: "Phil and The Internet"
slug: "Phil and The Internet"

---

# Let me pass the mic,

* https://sadgrl.online/cyberspace/internet-manifesto
* https://yesterweb.org/#manifesto
* https://sanya.gay/#manifesto
* https://oekeiko.neocities.org/blog/lawofhouse
* https://dheinemann.com/posts/2022-01-09-this-is-not-the-web-ive-known



# Politics and The Internet

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Px6wr3OgnJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The important laws you need to understand:

### CDA (no pronz) & §230

{{< columns >}}

![Hazbin Hotel](/phil/hazbin.gif)

{{< attribution >}}

[Hazbin Hotel Pilot (Viziepop, YouTube)](https://www.youtube.com/watch?v=Zlmswo0S0e0&vl=en&ab_channel=Vivziepop)

{{< /attribution >}}

<--->

> The **Communications Decency Act of 1996** (**CDA**) was the [United States Congress](https://en.wikipedia.org/wiki/United_States_Congress)'s first notable attempt to regulate [pornographic](https://en.wikipedia.org/wiki/Pornography) material on the [Internet](https://en.wikipedia.org/wiki/Internet). In the 1997 landmark case *[Reno v. ACLU](https://en.wikipedia.org/wiki/Reno_v._ACLU)*, the [United States Supreme Court](https://en.wikipedia.org/wiki/United_States_Supreme_Court) struck the act's anti-indecency provisions.

{{< attribution >}}

[Communications Decency Act (Wikipedia)](https://en.wikipedia.org/wiki/Communications_Decency_Act)

{{< /attribution >}}

{{< /columns >}}

Alright, so it was some failed law that tried to ban porn? Well, yeah, **BUT** it did pass and was only later, in the aforementioned Reno v ACLU case, struck down - and there, only the anti-indecency provisions. This left one very, very important little bit, *Section 230*,  that today the entire internet relies on, **The 26 words that created the internet:**

> **No provider or user of an interactive computer service shall be treated as the publisher or speaker of any information provided by another information content provider**

In human language, this means Section 230 is what protects Facebook from being liable when some dipshit posts a pirated movie to Facebook, makes a terrorist threat, or just spreads libel. Similarly, it gives the platforms moderation privileges, that is if some Nazi joins your group chat, you can give him the boot.

The big problem right now is whether fact checking, where a little box shows up under a tweet or YouTube video to say something like "Science knows Climate Change is man made and a big fucking problem" or "Biden won the election, stop being such a little bitch" is allowed, or if it makes the site a *publisher*, there by taking away their §230 protections.

Here, this video covers everything I could say a lot better than I can easily write here, so here's the two things I'd say are pretty much required reading, [Section 230 is Good Actually (EFF.org)](https://www.eff.org/deeplinks/2020/12/section-230-good-actually) and this video from DEF CON:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/678EW8v09z8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[ Everything You’ve Heard About Section 230 Is Wrong from Wired is really god but **is behind a paywall**](https://www.wired.com/story/section-230-internet-sacred-law-false-idol/)

### DMCA (*attempting* to fix 230, poorly)

Alright, so 230 made sites not liable at all (ish) but this actually isn't great either, as what is someone supposed to do if they get their copyrighted work posted online? No reasonable person (or business) can afford to sue literally every time someone posts their shit, so, the DMCA - the *Digital Millennium Copyright Act*-  was born, to steal from Wikipedia:

> It criminalizes production and dissemination of technology, devices, or services intended to circumvent measures that control access to copyrighted works (commonly known as [digital rights management](https://en.wikipedia.org/wiki/Digital_rights_management) or DRM). It also criminalizes the act of circumventing an access control, whether or not there is actual infringement of copyright itself.

But this has a whole host of issues. I'm going to redirect this to [This page from the EFF](https://www.eff.org/pages/unintended-consequences-fifteen-years-under-dmca) though, as I think that does a much better job of explaining the issues, and then you might want to read [This list of Criticisms of the DMCA](https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act#Criticisms) on the Wikipedia page for the DMCA.

More recently, the [DMCA takedown](https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md) of YouTube-dl, a program that lets users download videos from YouTube among many, many other video sites, was a big issue that riled up the technical world, and for which it seems most people think was a flagrant misuse of the DMCA against a tool, not a specific instance of infringing content. Extra stupid when you realize the computer itself could also be argued to be the tool enabling infringement.

The abuse of automated, algorithmic takedowns for the sake of keeping up with the DMCA has also resulted in [cops playing music to prevent videos from being on social media (VICE)](https://www.vice.com/en/article/bvxb94/is-this-beverly-hills-cop-playing-sublimes-santeria-to-avoid-being-livestreamed).

#### Exceptions

Alright, so the DMCA is a dumpster fire burning with a raging satanic hell blaze which only emits darkness, but thankfully the sentient darkness that represents the American people has carved away a few crumbs that we can use to sustain ourselves with in these dire times. The list below are things for which you can safely outright ignore the DMCA and break into things as you please. I'll go over my favorites, but [here's the list in full on Wikipedia](https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act#Anti-circumvention_exemptions).

* Ebooks can be stripped for the sake of using a text-to-speech system
* Snippets of Movie/Video DRM can be stripped for the purposes of criticism/review, education, and accessibility
* while not directly stated, an exception for 'Jailbreaking' and 'Rooting' iPhones and Androids was made, so that's allowed.
* Forcing 3D printers to use 3rd party filament
* "Computer programs, where the circumvention is undertaken on a lawfully acquired device or machine on which the computer program operates solely for the purpose of good-faith security research and does not violate any applicable law"
* In general, if you're doing it so you can repair the device, you're all clear as well.

### FOSTA/SESTA (Breaking 230)

[FOSTA and SESTA (Wikipedia)](https://en.wikipedia.org/wiki/Stop_Enabling_Sex_Traffickers_Act), the 'Fight Online Sex Trafficking Act' and 'Stop Enabling Sex Traffickers Act' are both massive failures. Their original goal is more or less in the name, but even the U.S. Department of Justice said it was a bad idea. Again, I'm going to hand this off to better sources. The first link there, to the Wikipedia article, has a large section on the criticism of the bills. I strongly encourage you read it, and [this article](https://www.eff.org/deeplinks/2018/03/how-congress-censored-internet) from the EFF does a good job of going into its problems too.

These are the bills that caused [Craigslist to remove their 'personals' section](https://www.craigslist.org/about/FOSTA).

### SOPA & PIPA (Trying to break everything)

SOPA, or the [Stop Online Piracy Act (Wikipedia)](https://en.wikipedia.org/wiki/Stop_Online_Piracy_Act) from ~2012 was a *big* deal at the time. Google, Facebook, Twitter, Amazon, eBay, Tumblr, Mozilla (Firefox), Mojang (Minecraft), Wikipedia, and more were all active in letting users know this bill was bad news. It was effective, but it was one hell of a fight. [PIPA (Wikipedia)](https://en.wikipedia.org/wiki/PROTECT_IP_Act), the 'PROTECT IP Act' was just the senate version of the bill, but it is still worth reading up on it quickly, especially the 'Reception' section of the linked Wikipedia article.

For a slightly dramatized, dubstep recap: (skip to 2:28) 

<iframe width="100%" height="300" src="https://www.youtube.com/embed/Hag2JWC8qZ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### COPPA & CIPA (Breaking things... For the children!)

[COPA (Wikipedia)](https://en.wikipedia.org/wiki/Child_Online_Protection_Act), the Child Online Protection Act, passed in '98 and seeks to keep minors online safe, mostly this just resulting in the 'Are you 18?' checks that surely no minor has ever lied to bypass.

Oh, what's that, that's COPA with one 'P', my bad, here's [COPPA (Wikipedia)](https://en.wikipedia.org/wiki/Children's_Online_Privacy_Protection_Act#Criticisms), Child Online *PRIVACY* Protection Act. Which if you read up on you'll see has been a mess for free speech, hurts small business, fails to protect kids anyway, and only seeks to create an artificial (and broken) 'safe space' online for kids, which is especially dumb as it ignores the most obvious problem: no kid *wants* to be treated like a kid. Moreover, why the *fuck* should kids get privacy protection until 13 and then ope, just like that fuck em' we'll collect all their information and sell it to advertisers, what magical thing happens at 14 that makes collecting and selling your data okay? Double standards aside, this has caused real issues in implementation and enforcement, just see [What's Gone Wrong With the FTC's COPPA Agreement With YouTube (Folding Ideas, YouTube)](https://youtu.be/LuScIN4emyo).

[CIPA (Wikipedia)](https://en.wikipedia.org/wiki/Children's_Internet_Protection_Act), the Children's Internet Protection Act, is a free speech fuck you to all children as it requires web filtering. The [ACLU](https://en.wikipedia.org/wiki/American_Civil_Liberties_Union) and [ALA](https://en.wikipedia.org/wiki/American_Library_Association) both challenged CIPA, arguing that the filtering it would necessitate at public libraries would limit free speech, and they won.... and then lost on appeal, with the stipulation that on request a librarian unblock content for an adult. Of course, this is still a major fuck you to kids. It's more or less normalized school web filters that are far too overzealous, as anybody that went to high school since the 2010s can tell you. Hell, my public school even had sites blocked for 'Alternative Beliefs'.

Look, I'm not against protecting kids online, no 8-year-old should be exposed to 2 girls and a cup. I know for a fact that some kids get *fucked up* seeing this shit too early. My mom's a family law attorney, and while obviously case specifics are kept quiet, general ideas like 'saw a kid got addicted to porn because the dad showed it to him' are things I've heard. It's awful. I get it. But you can't stop a shitty parent with legislation, no matter how hard you try.

{{< tip >}}

**Alright, here's my rant:** </br></br>Kids need to be able to look things up and be trusted. I know it's rough, nobody wants a 12-year-old looking up porn, but maybe the **parents** should actually have that talk and explain that stuff, answering any and all questions, rather than making the kid have to look it up in the first place. Sex education (in the US at least) is largely abstinence only and primarily serves to just make teens feel like shit about their bodies and choices. But, even beyond that, kids in general need to be able to fuck up gracefully. I get it, the internet always remembers, so we don't want them exchanging nudes or writing about some illegal thing they did. Sure. But on the other hand, cutting them off from 'real' social media create a divide that tells them they can't even be trusted to make the most basic of responsible decisions, which destroys self-confidence and independence. It keeps kids from looking into alternative religions and values, it keeps kids from having access to resources to cope with potential abuse they may be going though. </br></br>The only reality in which this shit makes any sense is when parents understand to help them bypass it when ready, those parents exclusively have their kid's best interests in mind, and those interests aren't in any way clouded by personal values instead of what is actually best for the kid.</br></br>Kids should be given full access and punished (with adequate calm explanation of why it was wrong) for accessing things they've been told not to, not be restricted from accessing those things in the first place. This still has privacy problems (re: kid trying to look up information about abusive parents) but it's a start. </br></br> This is only made extra stupid when you consider that the only possible filter that will work to completely eliminate the 'bad' sources is an allow-sites list, as otherwise it will be a game of endless wack-a-mole, yet this allowed sites list could never come close to encompassing the wider network of amazing information from smaller sites (like this one) thus depriving kids of resources.</br></br>**TLDR:** Parents need to be parents, not blindly trust content filters.

{{< /tip >}}

### GDPR (They tried)

{{< columns >}}

{{< tip >}}

Note, unlike the rest of the items in this list, the GDPR is NOT legislation from the United States, instead it's applicable to all EU residents

{{< /tip >}}

<--->

<img src="/fairuse/twitter/samantaz.webp" alt="The Virginian-Pilot website: Unfortunately, our website is currently unavailable in most European countries. We are engaged on the issue and committed to looking at options that support our full range of digital offerings to the EU market. We continue to identify technical compliance solutions that will provide all readers with our award-winning journalism." style="border-radius:25px;">

{{< attribution >}} [@SamantazFox](https://twitter.com/SamantazFox) / https://samantaz.fr{{< /attribution >}}

{{< /columns >}}



### EARN IT (Breaking things more)

[All About Section 230, The EARN IT Act and What They Mean for Free Speech and Privacy](https://www.youtube.com/watch?v=fvpWEzOOaRA&feature=youtu.be&t=26931)

### Patriot Act & FISA (Watching you)

### CFAA (Hack The Planet?)

[TODO] internet's own boy: Aaron Swartz

**Update, June 3rd 2021: The Supreme Court has restricted the scope of the CFAA, making it less awful**

The opinion can be read [here](https://www.supremecourt.gov/opinions/20pdf/19-783_k53l.pdf). The average person only really needs read point *(d)* from the syllabus:

> (d) The Government’s interpretation of the “exceeds authorized access” clause would attach criminal penalties to a breathtaking amount of commonplace computer activity. For instance, employers commonly state that computers and electronic devices can be used only for business purposes. On the Government’s reading, an employee who sends a personal e-mail or reads the news using a work computer has violated the CFAA. The Government speculates that other provisions might limit its prosecutorial power, but its charging practice and policy indicate otherwise. The Government’s approach would also inject arbitrariness into the assessment of criminal liability, because whether conduct like Van Buren’s violated the CFAA would depend on how an employer phrased the policy violated (as a “use” restriction or an “access” restriction). Pp. 17–20. 

So, this ruling has significantly reduced the clusterfuck that CFAA created.

### Net Neutrality (and the buying of the FCC)

### HIPAA (attempting to unfuck healthcare a wee bit)

https://www.mnot.net/blog/2020/08/28/for_the_users RFC8890

### EARN IT

https://medium.com/tech-thoughts-by-thegreatonion/how-the-earn-it-bill-undermines-americans-rights-online-8894d17cc427

## Private Internet Policing

[Credit-card firms are becoming reluctant regulators of the web (The Economist)](https://www.economist.com/finance-and-economics/credit-card-firms-are-becoming-reluctant-regulators-of-the-web/21805450)

## Centralization & Monopoly

Cloudflare, AWS, etc.

[Worst Case (Tim Bray @ tbray.org)](https://www.tbray.org/ongoing/When/202x/2021/10/08/The-WOrst-Case)

[Google sends anti-regulation propaganda to small businesses using Google Maps (arsTechnica)](https://arstechnica.com/gadgets/2021/11/google-sends-anti-regulation-propaganda-to-small-businesses-using-google-maps/)

### Protecting general computation

### Encryption and illegal numbers

<iframe width="100%" height="500" src="https://www.youtube.com/embed/CINVwWHlzTY?list=PL96C35uN7xGLLeET0dOWaKHkAlPsrkcha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://en.wikipedia.org/wiki/Illegal_number

[HDCP master key release (Wikipedia) ](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection#Master_key_release) [TODO, + background on what HDCP is]

http://www.catb.org/~esr/hdcp-master.txt

http://libraryofbabel.info

https://www.wikiwand.com/en/Texas_Instruments_signing_key_controversy

https://science.slashdot.org/story/20/05/25/0136238/texas-instruments-makes-it-harder-to-run-programs-on-its-calculators

### Do you own your hardware? software?

### Format shifting

## Data and Privacy

<iframe width="100%" height="500" src="https://www.youtube.com/embed/fCUTX1jurJ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<iframe width="100%" height="500" src="https://www.youtube.com/embed/OFRjZtYs3wY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[COMMENTS on "Facebook criticizes Apple’s iOS privacy changes with full-page newspaper ads" on Hacker News](https://news.ycombinator.com/item?id=25441986)

## Terms of Service and EULAs

[Terms of Service Didn't Read](https://tosdr.org/)

## Stalkerware

[Creeping As A Service](https://every.to/divinations/creeping-as-a-service-craas)

## AI

[Sufficiently Advanced Technology and Justice (Hackaday, Elliot Williams)](https://hackaday.com/2020/12/05/sufficiently-advanced-technology-and-justice/)

## Google Amp

[Google AMP Can go to Hell (Polemic Digital)](https://www.polemicdigital.com/google-amp-go-to-hell/)

## Social Media

[Facebook deliberately made people sad. This ought to be the final straw (The Guardian) (2014)](https://www.theguardian.com/commentisfree/2014/jun/30/facebook-sad-manipulating-emotions-socially-responsible-company)

### Censorship

Parler V Mastodon V Twitter

### Federation

See {{< button relref="other/fediverse" color="other" >}} The post about The Fediverse, ActivityPub, & The IndieWeb {{< /button >}}.

---

## Other Resources

[Who Controls the Internet? And should they? (bert hubert)](https://berthub.eu/articles/posts/who-controls-the-internet/)

<a href="https://sadgrl.online/cyberspace/internet-manifesto">sadgrl's Manifesto</a>,
<a href="https://thewebisfucked.com">The Web Is Fucked</a>

---

<iframe width="100%" height="500" src="https://www.youtube.com/embed/k1BneeJTDcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

