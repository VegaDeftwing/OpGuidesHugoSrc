# Chapter 24 - Security

{{< tip >}}

This chapter will be getting merged into Chapter 23

{{< /tip >}}

Before we get started on these next two chapters I want to get something out of the way:

Security is important, and should be taken seriously. **But** it's also a field of people who are tired of your shit, Karen. We don't wear suits and we won't do something just to look 'professional'.

If I want to curse, if I want to put furry art on these pages, I will do as I fucking please.

Real 'Security Professionals' own the word hacker, and real hackers don't give a shit about what society tells them to do. Hacking is about finding how systems can do something far outside of what the original desigener ever even considered, about finding solutions so elegant they're art, about breaking boundries. If you want to keep with professionalism or tradition you're in the wrong place.

As [Soatok](https://soatok.blog/2020/10/08/vanity-vendors-and-vulnerabilities/) put it:

> If people who are sharing great content–be it on Twitter or on their personal blog–do something that prevents you from sharing their content with your coworkers, the problem isn’t us.
>
> No, the real problem is your coworkers and bosses, and the unquestioned culture of anal-retentive diversity-choking bullshit that pervades business everywhere.

**With that out of the way, let us begin:**

[./missing-semester - Security](https://missing.csail.mit.edu/2020/security/)

![xkcd messaging systems](https://imgs.xkcd.com/comics/messaging_systems.png)

> 'SMS is just the worst, but I'm having trouble convincing people to adopt my preferred system, TLS IRC with a local server and a patched DOSBox gateway running in my mobile browser.'

{{< attribution >}}

[XKCD #2365](https://xkcd.com/2365/)

{{< /attribution >}}

focus on how to write secure programs, protect hardware, etc.

ESDA is bad

## Passwords

https://pages.nist.gov/800-63-FAQ/#q-b05

## Cryptography

[How To Learn Cryptography as a Programmer (Soatok)](https://soatok.blog/2020/06/10/how-to-learn-cryptography-as-a-programmer/)

[A furry writes about Cryptography but trust me you should actually read this (Soatok)](https://soatok.blog/2020/10/23/solving-for-why-furry-blogging-about-cryptography/)

## Hashing

<iframe width="100%" height="500" src="https://www.youtube.com/embed/S9JGmA5_unY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Note there's generall two 'classes' of hashing- hashing for cryptograhic security (Passwords) and for just general usage, the cryptograhic ones typically are siginicantly more computationally intensive to make it harder to brute force all possible keys. Also most cryptograhpic hashing algorithms go to much greater lengths to avoid collisions. Also, salting is relevent here: [Salting (Wikipedia)](https://en.wikipedia.org/wiki/Salt_(cryptography))

## Network Security

{{< columns >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna leo, tincidunt sed ex at, rhoncus tempus purus. Aenean feugiat a massa quis rutrum. Nulla gravida euismod lobortis. Praesent in blandit libero. Ut tincidunt nibh in facilisis viverra. Aliquam auctor, diam id accumsan porta, turpis erat faucibus urna, ut convallis metus ipsum in nisl. Ut semper metus vitae lacinia pulvinar. Praesent at congue lectus, ac ultrices ante. Quisque tempor semper mi scelerisque hendrerit. Vivamus rhoncus odio quam, in pulvinar mauris tristique quis. Duis vitae lacus et dolor semper interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Ut gravida venenatis luctus. Fusce sagittis quam vehicula porttitor condimentum. Cras luctus rutrum orci, vel consequat diam faucibus sit amet. Praesent blandit dui arcu, sed ultricies purus congue sed. Etiam scelerisque porttitor tempor. Vestibulum tincidunt pharetra neque. Maecenas rhoncus ac mauris ac ultrices. Morbi pulvinar auctor turpis, nec molestie odio egestas id. Phasellus ornare orci quis ligula pulvinar, nec bibendum lorem dictum. Praesent euismod tincidunt accumsan. Mauris sodales magna est. Maecenas eu malesuada neque. Aenean nec leo a sapien rutrum porttitor.

<--->

![phyxius](/phyxius.jpg)

> [Source](https://furrynetwork.com/artwork/1647029/hacker-dragon/), [Artist](https://www.furaffinity.net/user/halybs/) (used with permission from Phyxius)

{{< /columns >}}

## Responsible Disclosure

https://adamcaudill.com/2015/11/19/responsible-disclosure-is-wrong/



[TODO - thinking about an outline, please ignore this...]

* DOs and DO-NOTs
  * DO sanitize *all* your inputs
  * DO NOT use random crypto libraries
  * DO NOT manage your own memory
    * DO NOT trust something to abstract away memory managment perfectly either
      * python x=1 is y=1 but x=101 is not y=101
  * DO NOT assume...
    * the hardware is secure
      * Are you in a VM? Are their hardware sidechannel attacks?
    * that things wont break
      * that things wont overflow
      * that the stack can't be smashed
      * that there's not somebody trying to break your shit
    * That you're talking to who you think you are
    * That data won't get leaked
    * That your users will have any idea why a signature, key, or anything else is
    * That your users give a shit about security
    * The code you write is the code that will run
      * The compiler may not be magic, but it sure does feel like it
  * DO NOT claim unhackability
  * DO NOT use the cool, flashy, new thing on the block for sensative data
  * DO NOT assume that just because it's old and nobody has found a bug, that it's secure
  * DO NOT trust humans, espically those in customer support
* Email sucks
* PGP really sucks
* Authentication!=Authorization ; Auth!=Identity
* Metadata can bite you in the ass
* Threat modeling
* Sandboxes
* Firewalls, intrusion detection, DNS blackholes, Fail2Ban, etc.
* Malware types
  * ++ Cryptolockers, rootkits, and the real nasty shit
* Privacy on the Web, Fingerprinting
  * What should your employer be able to see?
* Stalkerware
* Expect everything to go to shit
  * Backups
  * Keeping uptime
* IOT, Elections, and Infrastructure