# Chapter 11½ - Open Source, Licenses, and Copyright


> Open source enables a development method for software that harnesses the power of distributed peer review and transparency of process. The promise of open source is higher quality, better reliability, greater flexibility, lower cost, and an end to predatory vendor lock-in.

-- The Open Source Initiative Mission Statement

## Disclaimer

I am not a lawyer, and neither are any of my contributors to this section. This is not legal advice.

## To Begin

So you've decided to make your project open source. Great! Before you publish anything, there are two things you should do.

First, [decide on a definition of success for your project.](https://dzone.com/articles/running-a-successful-open-source-project-1) There is more than one, and open source is all about community. Establishing community rules and expectations early is critical.

Second, decide on a license. That's what this section is about.

A license defines the legal terms you will bind your users and contributors to under copyright law. If you release code to the world without specifying a license, it is extremely unclear what people can and cannot do with your software. In fact, it would require actual IP lawyers to untangle exactly what they are allowed to do, and it might be different in different countries!

Fortunately, this is largely a solved problem for open source. Other organizations have already hired lawyers in the past to do the heavy lifting, and have allowed anyone who wants to create an open source project to copy their license text and apply it to their own works.

A good starting point to address both of these can be found by asking yourself:

* Is control of the project's future important? Or do I simply want it to be available to anyone?
* If someone else (perhaps a Fortune 500 company) were to use my software in a proprietary product to make money, would I want some?
* Who are my contributors and why do they contribute?

The next section will address how licenses can help support your intentions.

## Choosing a License

Except for edge cases, there are really only three options you should consider:

* If you want to encourage maximum adoption among a variety of users and contributors, use [the Apache 2.0 Software License](https://www.apache.org/licenses/LICENSE-2.0.html).
* If you want to encourage a hobbyist/community focus and prevent its use in proprietary software for profit, use [the GNU Affero General Public License (AGPL) v3](https://www.gnu.org/licenses/agpl.html).
* If you want to release it "as is" and don't care about its future, consider a [Creative Commons Zero Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

These choices are explained in detail below.

{{< tip >}}

If you want to put it in the public domain, why not just put a note saying so? Because in some countries, there are restrictions on the public domain which make it useless or impossible to use for open source software. Creative Commons Zero acts as a license in such countries, granting the same terms and waivers as the United States public domain.

{{< /tip >}}

### Strong Copyleft: the GPL and friends

The Free Software Foundation envisioned open source software as a collaborative community. To keep it that way, they basically wanted everyone who used the software to become a part of that community and share.

They created the term *copyleft* [to capture this principle](https://www.gnu.org/licenses/copyleft.en.html):

> Copyleft is a general method for making a program (or other work) free (in the sense of freedom, not “zero price”), and requiring all modified and extended versions of the program to be free as well.

While I mentioned making money earlier, *the GPL does not forbid profiting*. Instead, it forbids closed source software based on the business model of "trade secret." In practice, though, this means most of the people who turn a profit from software can't use it.

The license also goes to great lengths to make sure that other areas of law cannot be abused by the covered software. For example, in the United States, a patent troll could use your software, discover it contains a software "invention" they hold the rights to, and sue you and all of your users. Even though you wrote it, and don't even know who they are!

If you think this sounds far-fetched, it isn't. [The craziest things have been patented](https://www.eff.org/search/site/stupid%20patent%20of%20the%20month?f%5B0%5D=type%3Ablog), and patent lawyers are extremely expensive --- even by the standards of other lawyers.

The main drawback (and main source of pushback on the internet) is the way this license interacts with other software. Because the GPL requires that all the same rights be included in the software you distribute, creating software out of both GPL and non-GPL code binds your users to terms that may be confusing, or in the worst case, impossible to follow.

The Free Software Foundation has [given their own legal analysis of common licenses, and whether they are GPL compatible](https://www.gnu.org/licenses/license-list.html).

### Weaker Copyleft: Apache 2.0

The Apache Software foundation exists as a charity to give its software away for the greater good. As a result, it is also a copyleft license, using the terms to encourage use and distribution instead of restriction. Unlike the GPL, it does not require its downstream users to be just as open. In particular, they may use it in closed source software and turn a profit.

This is one of the "least political" licenses in the license debates, and is a safe default if you really don't know what to do about licensing.


### Other Licenses: BSD, MIT, X11, Oh My!

There are other licenses, that are much shorter, that seem to be similar to the Apache 2.0 License in spirit. However, I don't recommend them, and will explain why.

Common other open source licenses include:
* The [MIT license](https://mit-license.org/)
* The BSD license, which comes in flavors. The most common is [the "2 clause" version](https://opensource.org/licenses/BSD-2-Clause).
* The [ISC license](https://www.isc.org/licenses/).
* The [Unlicense](https://unlicense.org/) (auto-suggested by GitHub for option three instead of CC0)

These licenses probably look okay to non-lawyers, and are designed to provide maximum flexibility. However, they have other problems.

First, they lack the protections of the Apache 2.0 and GPL family of licenses against patent trolls.

Second, they may not have been examined by non-US courts. Aside from the Unlicense which relies on the US public domain, the liability protections in the licenses may not fit with product liability law in Europe.

If you still don't like any of the three recommended options, the Free Software Foundation has [given their own legal analysis of common licenses, whether they are GPL compatible, and any flaws in their opinion](https://www.gnu.org/licenses/license-list.html). It is worth reading before choosing anything else.

## Special Case: Cryptography

If you are writing your own cryptography and live in the United States, there are extra legal steps you have to do. This has to do with the history of [The Crypto Wars](https://en.wikipedia.org/wiki/Crypto_Wars).

But you know what? I'm not going to talk about it. It's a bit murky without actual lawyers, but more importantly, **you shouldn't be writing your own cryptography, period.** [Seriously. Don't do it.](https://security.stackexchange.com/questions/18197/why-shouldnt-we-roll-our-own)

Just use the open source algorithms placed into the public domain already. Let Bruce Schneier, Dan Bernstein, and other famous cryptographers worry about export regulations, and just use their stuff.

If you are trying to write your own cryptography to learn, I recommend [doing the Cryptopals Crypto Challenges](https://www.cryptopals.com/) instead. If that's not enough, do [A Self Study Course in Block Ciphers by Bruce Schneier](https://www.schneier.com/wp-content/uploads/2016/02/paper-self-study.pdf).

You will learn more, and avoid regulations, mockery, and public facepalms all over the internet.

## What if I don't have a project?

Simple: contribute to someone else's! That's what makes open source work!

[TODO]

actually contribute on GitHub, make an issue, submit a pull request, make a custom repo,

## Links

[Setting new expectations for open source maintainers](https://opensource.com/article/21/8/open-source-maintainers)

[How to break the Internet: Cory Doctorow at TEDxOxbridge (YouTube)](https://www.youtube.com/watch?v=aAWCN0Jed8g)

https://github.com/Marak/faker.js/issues/1046

[No, "Open Source" does not mean "Includes Free Support"](https://raccoon.onyxbits.de/blog/bugreport-free-support/) + [The update to that post.](https://raccoon.onyxbits.de/blog/reactions-bugreport-free-support/)

[My tiny side project has had more impact than my decade in the software industry (Mike's Corner on the Web)](https://mike.zwobble.org/2021/08/side-projects-vs-industry/)

# Chapter 11¾ - Things That Really Need to Exist

[Better than DuckDuckGo [Drew Devault's Blog]](https://drewdevault.com/2020/11/17/Better-than-DuckDuckGo.html)
