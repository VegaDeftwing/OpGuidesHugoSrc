# Chapter 7½ - Consequences

Programming is awesome. If you get into creative coding you'll be able to use it to make art. You'll likely use it to automate tasks you find boring. If you're like me, you might use it to make your own website or start to make products you intend to sell. That's great. But there are a few things you need to consider as what you make becomes more professional. If you're just making something for you and a few friends, don't worry about it- hack it together and have fun. But as you start making things for a business or that something impact systems that are deeply meaningful in someone's life, you need to be careful. This story, [The Code I'm Still Ashamed Of](https://www.freecodecamp.org/news/the-code-im-still-ashamed-of-e4c021dff55e/), ever since I've read it, has come back to me every now and then. And sure, it's a pretty extreme example, but it's also a lot easier to put into that kind of situation than you'd probably like to think.

There's a pretty big list of considerations you should keep in mind when what you're making starts to grow in impact, but honestly most of them just come down to being an empathetic, good person as best you can.

{{< columns >}}

**User Data & Privacy**

* Is user data secure?
* Do users have control over their data?
* Do users have a way to export their data?
* If this data were leaked, what would the impact be?
* Should the users have [deniability (Soatok.blog)](https://soatok.blog/2020/11/04/a-brief-introduction-to-deniability/)
* Can the code be open source?
* Is there an open API?
  * Maybe what you're making can't be open, but interaction could be. Sorta like having 3rd party Twitter or Reddit apps.

**Development Considerations**

* Does it rely on other tools or libraries that don't follow these ideals?
  * *ᶜᵒᵘᵍʰ* Windows *ᶜᵒᵘᵍʰ*

* Have you given credit to any tools or libraries you depend on?
  * Have you given funding to any of those tools, if you're making money off of them?
  * Have you contributed code to any of them?

**Localization**

* Can users of other in other regions still use it?
* Qwerty isn't standard everywhere, neither is left-to-right text.
  * Hell, [᚛ᚅᚑᚈ ᚐᚂᚂ ᚄᚚᚐᚉᚓᚄ ᚐᚏᚓ ᚄᚚᚐᚉᚓᚄ᚜ (YouTube, Tomm Scott)](https://www.youtube.com/watch?v=2yWWFLI5kFU) 
* Does it comply with local laws and regulations?
  * Not all illegal services are morally wrong- take [Sci-Hub](https://en.wikipedia.org/wiki/Sci-Hub) for example.
* Does it force units of measurement?

**Monetization**

- How is copyright infringement handled?
  - This gets *very* complicated, read more in  [Philosophy Ch.8 - Copyright]({{< relref "Phil/p8-copyright" >}})
- If something on what you're making is paid,  is [Purchasing Power Parity](https://en.wikipedia.org/wiki/Purchasing_power_parity) an option so that users in less fortunate areas can still have access?
  - If you know what you're making will be pirated, can you release a 'Here, but seriously please pay me' version?

<--->

**User Experience**

* Can differently-abled people still use it?
  * <p style="background: -webkit-linear-gradient(90deg, #F00, #0F0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> Color Blindness? </p>
  * Deaf?
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

**Social Duties**

- Can it be used for Hate Speech? Spreading misinformation?
  - How does content moderation work?
  - How does this conflict with free speech?
    - Does it matter that it does?
- Can it be used for exploitation of vulnerable people?
  - The elderly? Children? Those in abusive relationships?
- Does it make assumptions about social norms?
- Does it assume something about FirstName LastName naming conventions?
- Does it assume binary sex/gender fields? Does it assume Hetro relationships?

{{< /columns >}}

Here's a nice video from TomScott on this topic:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/LZM9YdO_QKk?list=PL96C35uN7xGLLeET0dOWaKHkAlPsrkcha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[CAPTCHAs don't prove your human - They prove you're American](https://shkspr.mobi/blog/2017/11/captchas-dont-prove-youre-human-they-prove-youre-american/)

[Stop over validating your forms](https://hugotunius.se/2016/01/04/stop-over-validating-your-forms.html)