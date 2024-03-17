# Chapter 11½ - Ethics & Copyright

Programming is awesome. If you get into creative coding, you'll be able to use it to make art. You'll likely use it to automate tasks you find boring. If you're like me, you might use it to make your own website or start to make products you intend to sell. That's great. But there are a few things you need to consider as what you make becomes more professional. If you're just making something for you and a few friends, don't worry about it- hack it together and have fun. But as you start making things for a business or that something impact systems that are deeply meaningful in someone's life, you need to be careful.

{{< best >}}[The Code I'm Still Ashamed Of](https://www.freecodecamp.org/news/the-code-im-still-ashamed-of-e4c021dff55e/) {{< /best >}} is great. Ever since I read it, it has come back to me every now and then. And sure, it's a pretty extreme example, but it's also a lot easier to put into that kind of situation than you'd probably like to think.

There's a pretty big list of considerations you should keep in mind when what you're making starts to grow in impact, but honestly most of them just come down to being an empathetic, good person as best you can.

### **User Data & Privacy**

* Is user data secure?
* Do users have control over their data?
* Do users have a way to export their data?
* If this data were leaked, what would the impact be?
* Should the users have [deniability (Soatok.blog)](https://soatok.blog/2020/11/04/a-brief-introduction-to-deniability/)
* Can the code be open source?
* Is there an open API?
  * Maybe what you're making can't be open, but interaction could be. Sorta like having 3rd party Twitter or Reddit apps.

### **Development Considerations**

* Does it rely on other tools or libraries that don't follow these ideals?
  * *ᶜᵒᵘᵍʰ* Windows *ᶜᵒᵘᵍʰ*
* Have you given credit to any tools or libraries you depend on?
  * Have you given funding to any of those tools, if you're making money off of them?
  * Have you contributed code to any of them?
* Do you really need to use that library?
  * Every library is a threat vector
  * ... at the same time, not using industry standard stuff can be bad. For example, you probably shouldn't ever use your own cryptography code.


###  **Localization**

* Can users of other in other regions still use it?
* Qwerty isn't standard everywhere, neither is left-to-right text.
  * Hell, [᚛ᚅᚑᚈ ᚐᚂᚂ ᚄᚚᚐᚉᚓᚄ ᚐᚏᚓ ᚄᚚᚐᚉᚓᚄ᚜ (YouTube, Tomm Scott)](https://www.youtube.com/watch?v=2yWWFLI5kFU) 
* Does it comply with local laws and regulations?
  * Not all illegal services are morally wrong- take [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub) for example.
* Does it force units of measurement?

### **Monetization**

- How is copyright infringement handled?
  - This gets *very* complicated, read more in {{< button relref="Phil/copyright" color="phil" >}}Philosophy: Copyright{{< /button >}} after finishing the Copyright secion focused on code specifically below!
- If something on what you're making is paid,  is [Purchasing Power Parity](https://en.wikipedia.org/wiki/Purchasing_power_parity) an option so that users in less fortunate areas can still have access?
  - If you know what you're making will be pirated, can you release a 'Here, but seriously please pay me' version?

### **User Experience**

* Can differently-abled people still use it?
  * <a href="https://www.color-blindness.com/coblis-color-blindness-simulator/"><p style="background: -webkit-linear-gradient(90deg, #F00, #0F0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> Color Blindness? </p> </a>
  * Hearing Impaired?
  * Bad vision?
    *  <p style="font-size:.3em"> super tiny text </p>
  * Motion? Flashing Lights? Light sensitivity? 
* Are the elements of interaction standard / automatable
  * This largely ties into differently-abled access
* Does it really need to use as many resources as it does?
  * Could it still work if your internet was 100x slower?
  * Could it still work if your hardware was 10 years older?
* How long does it take a user to find a feature they know exists without help?
* Avoid ['Dark Patterns'](https://darkpatterns.org)
  * Don't use stupid [progress bars](https://web.eecs.utk.edu/~azh/blog/fixprogressbars.html)

### **Social Duties**

- Can it be used for Hate Speech? Spreading misinformation?
  - How does content moderation work?
  - How does this conflict with free speech?
    - Does it matter that it does?
- Can it be used for exploitation of vulnerable people?
  - The elderly? Children? Those in abusive relationships?
- Does it make assumptions about social norms?
- Does it assume something about FirstName LastName naming conventions?
- Does it assume binary sex/gender fields? Does it assume Hetro relationships?
  - [36C3 ChaosWest: "Hello, I'm your Edge Case!"](https://www.youtube.com/watch?v=nMTNatBC4mI)

Here's a nice video from TomScott on this topic:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/LZM9YdO_QKk?list=PL96C35uN7xGLLeET0dOWaKHkAlPsrkcha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[The Rise of User Hostile Software (Den Delimarsky)](https://den.dev/blog/user-hostile-software/) and [Hacker News Comments](https://news.ycombinator.com/item?id=28291478)

[CAPTCHAs don't prove you're human - They prove you're American](https://shkspr.mobi/blog/2017/11/captchas-dont-prove-youre-human-they-prove-youre-american/)

[Stop over validating your forms](https://hugotunius.se/2016/01/04/stop-over-validating-your-forms.html)

[Moral Machine](https://www.moralmachine.net) - "A platform for gathering a human perspective on moral decisions made by machine intelligence, such as self-driving cars."

[TODO] Racist AI, Deepfake loods

[TODO] [Amazon Demands Echo not be referred to as a Microphone (Jason Koebler on Twitter, from Vice.com) ](https://nitter.net/jason_koebler/status/1303383712160190469#m)

---

# Open Source, Licenses, and Copyright

{{< quote "The Open Source Initiative Mission Statement" >}}

Open source enables a development method for software that harnesses the power of distributed peer review and transparency of process. The promise of open source is higher quality, better reliability, greater flexibility, lower cost, and an end to predatory vendor lock-in.

{{< /quote >}}

{{< tip >}}

###### Disclaimer

I am not a lawyer, and neither are any of my contributors to this section. This is not legal or financial advice.

{{< /tip >}}

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