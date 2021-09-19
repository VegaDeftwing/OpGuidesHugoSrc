# Chapter 11½ - Open Source, Licenses, and Copyright


> Open source enables a development method for software that harnesses the power of distributed peer review and transparency of process. The promise of open source is higher quality, better reliability, greater flexibility, lower cost, and an end to predatory vendor lock-in.

-- The Open Source Initiative Mission Statement

## Disclaimer

I am not a lawyer, and neither are any of my contributors to this section. This is not legal advice.

## To Begin

So you've decided to make your project open source. Great!

First, [decide on a definition of success. There is more than one.](https://dzone.com/articles/running-a-successful-open-source-project-1)

Your next step is to decide on a license: the legal terms you will bind your users and contributors to. If you don't specify a license, it is extremely unclear and would require actual IP lawyers to untagle. Always make sure you have one.


## Choosing a License

Central to choosing a license is the idea of *copyleft*, [a term created by the Free Software Foundation](https://www.gnu.org/licenses/copyleft.en.html):

> Copyleft is a general method for making a program (or other work) free (in the sense of freedom, not “zero price”), and requiring all modified and extended versions of the program to be free as well.

There has been much internet debate around copyleft due to the strictness of its terms. This has caused a proliferation of licenses, including some license jokes.

For those new to open source licensing, my approach would be to ask yourself two questions:

* Does my control and the future of the project matter to me? Or do I simply want to offer it "as is"?
* If someone else (perhaps a Fortune 500 company) were to use my software in a proprietary product to make money, would I want some?

Different people have different answers. Some just want the project to be used, others want to build a community, still others have different plans.

Based on the answers, I recommend one of these three options:

* If you care about how it is used, including proprietary uses for profit, use [the GNU Affero General Public License (AGPL) v3](https://www.gnu.org/licenses/agpl.html).
* If you want to encourage maximum adoption, use [the Apache 2.0 Software License](https://www.apache.org/licenses/LICENSE-2.0.html).
* If you want to release it "as is", or it is in certain domains, you might consider a [Creative Commons Zero Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

They are explained in more detail below. In the mean time, it is important to recognize that different contributors will have different expectations (and different willingness to contribute) based on the license you choose.

{{< tip >}}

If you want to put it in the public domain, why not just put a note saying so? Because in some countries, there are restrictions on the public domain which make it useless or impossible to use for open source software. Creative Commons Zero acts as a license in such countries, granting tthe same terms and waivers as the United States public domain.

{{< /tip >}}

### Strong Copyleft: the GPL and friends

The Free Software Foundation envisioned open source software as a collaborative community. To keep it that way, they basically wanted everyone who used the software to become a part of that community, and share.

While I mentioned making money earlier, *the GPL does not forbid profiting*. Instead, it forbits closed source software based on the business model of "trade secret." That is knowledge that should be shared back to the community.

The license also goes to great lengths to make sure that other areas of law -- notably, patent law in the United States -- cannot be abused by the covered software.

The main drawback (and main source of pushback on the internet) is the way this license interacts with other software. Because the GPL requires that all the same rights be included in the software you distribute, creating software out of both GPL and non-GPL code binds your users to terms that may be confusing, or in the worst case, impossible to follow if it is not all open source -- or if it is open source with different restrictions.

The Free Software Foundation has [given their own legal analysis of common licenses, and whether they are GPL compatible](https://www.gnu.org/licenses/license-list.html). It is worth reading to understand this.

### Weak Copyleft: Apache 2.0

The Apache Software foundation exists as a charity to give its software away for the greater good. As a result, it is also a copy-left license, but unlike the GPL, it does not require as much of its downstream users. In particular, they may use it in closed source software and turn a profit.

This is one of the "least political" licenses in the license debates.


### Other Licenses: BSD, MIT, X11, Oh My!

There are other liceses, that are much shorter, that seem to be similar to the Apache 2.0 License in spirit. Popular licenses include:
* The [MIT license](https://mit-license.org/)
* The BSD license, which comes in flavors. The most common is [the "2 clause" version](https://opensource.org/licenses/BSD-2-Clause).
* The [ISC license](https://www.isc.org/licenses/).
* The [Unlicense](https://unlicense.org/) (suggested by GitHub for public domain software)

These licenses probably look okay to non-lawyers, and are designed to provide maximum flexibility. However, they have other problems.

First, they lack the protections of the Apache 2.0 and GPL family of licenses against patent trolls. In the US especially, software ideas are subject to patenting as inventions. That means *regardless of copyright law* (and licenses fall under copyright law), it is possible for you to use a patented idea in your software, or one of your users to patent an idea in the software they derived from yours. In both cases, you could be sued!

If you think this sounds far fetched, it isn't. [The craziest things have been patented](https://www.eff.org/search/site/stupid%20patent%20of%20the%20month?f%5B0%5D=type%3Ablog), and patent lawyers are extremely expensive --- even by the standards of other lawyers!

Second, they may be read narrowly or strangely by non-US courts. Aside from the unlicense which relies on the US public domain, the liability protections in the licenses may not have been tested with product liability law in Europe. The GPL, by contrast, has been used successfully in both the United States and Europe, and was written with international law in mind.

If you still don't like any of the three recommended options, the Free Software Foundation has [given their own legal analysis of common licenses, and whether they are GPL compatible](https://www.gnu.org/licenses/license-list.html). It is worth reading before choosing anything else.

## Special Case: Cryptography

If you are writing your own cryptography, there is special stuff you have to do before you publish it if you live in the United States. This has to do with the history of [The Crypto Wars](https://en.wikipedia.org/wiki/Crypto_Wars).

But you know what? I'm not going to talk about it. It's a bit murky without actual lawyers, but more importantly, **you shouldn't be writing your own cryptography.** [Seriously. Don't do it.](https://security.stackexchange.com/questions/18197/why-shouldnt-we-roll-our-own)

Just use the open source algorithms placed into the public domain already. Let Bruce Schneier, Dan Bernstein, and other famous cryptographers worry about export regulations, and just use their stuff.

If you are trying to write your own cryptography to learn, I recommend [doing the Cryptopals Crypto Challenges](https://www.cryptopals.com/) instead. You will learn more, avoid regulations, and avoid facepalming (and perhaps mockery) all over the internet.

## What if I don't have a project?

Simple: contribute to someone else's! That's what makes open source work!

[TODO]

actually contribute on github, make an issue, submit a pull request, make a custom repo,

## Links

[Setting new expectations for open source maintainers](https://opensource.com/article/21/8/open-source-maintainers)

[How to break the Internet: Cory Doctorow at TEDxOxbridge (YouTube)](https://www.youtube.com/watch?v=aAWCN0Jed8g)

https://github.com/Marak/faker.js/issues/1046

[No, "Open Source" does not mean "Includes Free Support"](https://raccoon.onyxbits.de/blog/bugreport-free-support/) + [The update to that post.](https://raccoon.onyxbits.de/blog/reactions-bugreport-free-support/)

[My tiny side project has had more impact than my decade in the software industry (Mike's Corner on the Web)](https://mike.zwobble.org/2021/08/side-projects-vs-industry/)

# Chapter 11¾ - Things That Really Need to Exist

[Better than DuckDuckGo [Drew Devault's Blog]](https://drewdevault.com/2020/11/17/Better-than-DuckDuckGo.html)
