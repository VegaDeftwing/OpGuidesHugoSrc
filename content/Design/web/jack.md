# Jack of All Trades

You probably noticed the mildly ugly gradient heading this section, that was my warning to you that you're about to walk into something that requires an interesting mixture of design and engineering skills. Making a good website requires a fair understanding of computers, some basic programming skills, and a willingness to dive into some technical topics. There's a good reason most blogging now happens on Medium or Tumblr and that social media has boomed: The barrier to entry is significantly lower. There's also really good reasons to want to make your own website and have your own little digital garden.

Before diving into anything, I want to level with you, teaching web development is hard for two big reasons:

1. **The scope can vary wildly**: For a personal blog, you can probably get away with googling enough HTML and CSS snippets to scrape by, never writing any JavaScript. 

   Going up a step, if you want to make an interactive page or want to add some flair to your site, you'll need some real understanding. But if you want to make full-blow interactive dynamic website, like YouTube or Facebook, that will require *way* more skill. If you're managing user data, you'll need to know about encryption and probably how to manage a database. If you're making something that serves a lot of data you'll need to worry about Content Distribution Networks (CDNs), if the site being down can make customers angry, you'll have to worry about redundancy, backups, DDOS protection, etc. There's really a huge variety of hats that you need to wear if you want to single-handedly manage something with a lot of features, especially if money is involved.

2. **There's just a lot of ground to cover**: Multiple languages, how basic networking works, how to make something actually look good on the web, etc. In a larger organization, these things would all be done by different teams of people, who don't worry all that much about how the layers above or below them work - designers don't usually think about networking.

**So, what will you need to know?**

## The Technical Stuff:

1. **How to write HTML - EASY**

	often you can actually write in Markdown which is trivial to use, and you'll use a tool which builds the HTML from that.

{{< columns >}}

**Markdown**

---

```markdown
### Heading
text **bold text** more text
* list item 1
* list item 2
```

<--->

**HTML**

---

```html
<h3>Heading</h3>
<p>text <b>bold text</b> more text </p>
<ol>
<li> list item 1 </li>
<li> list itcem 2 </li>
</ol>
```
<--->

**Rendered**

---

<h3>Heading</h3>
<p>text <b>bold text</b> more text </p>
<ol>
<li> list item 1 </li>
<li> list itcem 2 </li>
</ol>

{{< /columns >}}

2. **How to write CSS - MODERATE**

   * CSS is what stylize your website. CSS is what *usually* defines the colors, font sizes, arrangement of content, etc. but, strangely, now sometimes does animations and other relatively complicated things
   * Unfortunately sometimes CSS can be pretty hard to work with, with things sometimes [interacting in](http://wtfhtmlcss.com) [weird ways](https://css-tricks.com/css-is-awesome/). Worse, more and more (legitimately useful) features have been added to CSS over the years, some of which are now the right way to do things, but are still hard to learn (... fucking [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))
   * It's really, really hard to make a website not break when viewed on both a phone and a normal monitor
   * You *might* want to use frameworks here, like https://tailwindcss.com, https://www.bonsaicss.com, https://getbootstrap.com, https://picturepan2.github.io/spectre/index.html
   * ... and you might want to use something that added extra features to CSS then gets turned back into CSS, the most common of these is [SCSS](https://github.com/sass/sass), but https://lesscss.org is neat too.
   
   Here's a neat example of using CSS to make some nice looking background stars, a fairly complex example
   
   <p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="BKJun" data-editable="true" data-user="saransh" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
     <span>See the Pen <a href="https://codepen.io/saransh/pen/BKJun">
     Parallax Star background in CSS</a> by Saransh Sinha (<a href="https://codepen.io/saransh">@saransh</a>)
     on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
   
   {{< attribution >}}Code by [Saransh Sinha](https://codepen.io/saransh){{< /attribution >}}

3. How to write Javascript - IT DEPENDS

   * So, JS is weird in that you will *sometimes* want to use it plain, and work with the language as is but often you'll end up using frameworks (such as React, Angular, Vue) and libraries (Like JQuery, three.js, d3.js)
   * The complexity of the thing you want to do and the libraries you're using will make a big difference here, something like this text reveal effect is simple (Click Rerun in the bottom right corner to see the animation again)

   <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="VwwXMOe" data-editable="true" data-user="AliAmmarDev" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
     <span>See the Pen <a href="https://codepen.io/AliAmmarDev/pen/VwwXMOe">
     Text Reveal Animation</a> by Ali Ammar (<a href="https://codepen.io/AliAmmarDev">@AliAmmarDev</a>)
     on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

   {{< attribution >}}Code by [Ali Ammar](https://codepen.io/AliAmmarDev){{< /attribution >}}

   But something like this is a lot harder 

   <p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="dyzqdKR" data-editable="true" data-user="Coderesting" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
     <span>See the Pen <a href="https://codepen.io/Coderesting/pen/dyzqdKR">
     Chaos Pendulum</a> by Yannick Brandt (<a href="https://codepen.io/Coderesting">@Coderesting</a>)
     on <a href="https://codepen.io">CodePen</a>.</span>
   </p>
   <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

   {{< attribution >}}Code by [Yannick Brandt](https://codepen.io/Coderesting){{< /attribution >}}

4. How to setup a domain

   * You'll probably want to buy a domain name "mycoolsitename.com" or whatever, and you'll need to know how to buy that and actually use it
   * ... and probably make it HTTPS

5. How to setup hosting

   * Github pages, AWS, a VPS, whatever

6. Some general CS shit

   * Git
   * Licenses

