# CSS

<script>    document.getElementById("webMenu").open = true;</script>

Let me start by saying that **C**ascading **S**tyle **S**heets - CSS - is not a hard language to write. The problem is not the language<a class="ptr">(1)</a>, but with how humans don't think about style and art in a linear way and dealing with the complexities of different devices.

## How we think about style

Look around this website, there are things that have been made stylistically cohesive - the color theme,  the way I indicate that something is a local link by {{< button relref="/design/web/langs/css" color="design" >}} putting it in a button {{< /button >}} with a color that matches where it goes. That makes sense to the part of our brains that wants to see the full overview and look at the completed picture. We like to think of art from the **macroscopic scale**.

In the vast majority of contexts, this line of thought works. Think about digital art - you put pixels on layers and stack those layers. The only thing you have to worry about is color on each pixel. Sure, if you're stacking layers with weirder blend modes it can start to get more complicated but it's almost always easy to think about what the change you're making will look like before you make it. There is a convenient 1:1 relationship between you and the content on the screen.

We absolutely do not want to have to think about styling every. single. element. on our web page. You would not want to have to set the background color, font sizes, line height, etc. etc. each time you made a new element. You need to be able to set defaults for each type of thing on the page.

At the same time, it's necessary to think about individual elements sometimes and give special attention to one thing on a page. For example, in a few places on this website I have tables where things need color applied to make them easier to read.

For example, over on the {{< button relref="engineering/networking/cloud" >}}"The Cloud"{{< /button >}} page I have this table:

<style>
.models {
    width: 100%;
    text-align: center;
}
.models th {
background: #fff3;
word-wrap: break-word;
text-align: center;
}
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(-n) > td:nth-child(1) { background: #F7820055; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n+5) > td:nth-child(2) { background: #F7820055; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n+3) > td:nth-child(3) { background: #F7820055; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n) > td:nth-child(4) { background: #F7820055; }
</style>



<div class="models">

| Traditional:   | Infrastructure as a Service | Platform as a Service | Software as a Service |
| -------------- | --------------------------- | --------------------- | --------------------- |
| Applications   | Applications                | Applications          | Applications          |
| Data           | Data                        | Data                  | Data                  |
| Runtime        | Runtime                     | Runtime               | Runtime               |
| Middleware     | Middleware                  | Middleware            | Middleware            |
| OS             | OS                          | OS                    | OS                    |
| Virtualization | Virtualization              | Virtualization        | Virtualization        |
| Servers        | Servers                     | Servers               | Servers               |
| Storage        | Storage                     | Storage               | Storage               |
| Networking     | Networking                  | Networking            | Networking            |

</div>

Clearly, I wouldn't want *EVERY* table to have that stair-cased highlight to it. It makes sense where it is used, but that alteration **extends** the style that is applied to all tables on the website. It doesn't replace it.

This is the first problem: We have to think about **microscopic** changes as how they **extend** the behavior of the macroscopic. Normally in art, we can just zoom in, change a few pixels, and know that the sum of these small changes will result in a better picture as a whole - yes, even in normal art you'd have to keep the entire composition in mind - but In CSS, you need to think in both directions and be sure you understand what you want to applied on a macroscopic scale and what you want to be microscopic, and decide what you want to be "default".

For example, lets say you have a bunch of images on your website,

{{< columns >}}

<img src="/memes/pantyandstockingpop.webp">

<--->

<img src="/memes/spongebobthreeweeks.webp">

<--->

<img src="/memes/speech100.webp">

{{< /columns >}}

and you decide they'd all look better with rounded corners, so you make a CSS rule to apply rounded corners to ALL images on the site:

```css
img{
	border-radius: 1rem;
}
```

{{< columns >}}

<img src="/memes/pantyandstockingpop.webp" style="border-radius:1rem;">

<--->

<img src="/memes/spongebobthreeweeks.webp" style="border-radius:1rem;">

<--->

<img src="/memes/speech100.webp" style="border-radius:1rem;">

{{< /columns >}}

That looks good, does what we want, great, right…

<img class="center" src="/design/brokenlogo.webp" style="border-radius:20px;">

… Oops, we broke the logo.

Unintended consequences are the bane of your existence when working on CSS because you really want to (and should) apply style to the most generic class that it applies to, but it's easy to accidentally go one step too far and break other things. This problem could technically be resolved in two ways:

From the **microscopic** side the logo image could be assigned a class where it is used

```html
<img class="logo" src="mylogo.svg">
```

and it should specify, in it's style, that it should have no border radius

```css
.logo{
	border-radius: 0rem;
}
```

This is probably the wrong way to do this. Unless you know that the logo is going to be the one and only exception to this rounded corner rule, you're going to be playing wackamole to un-round corners on images from here on out if you do this.

The better solution is just to make a new class for rounded corners

```css
.rounded{
	border-radius: 1rem;
}
```

and then when you insert the images you want to be rounded you can specify their class:

```html
<img class="rounded" src="meme.jpeg">
```

Now, if we did decide to round the logo we could add the rounded class on, (Yes, you can use more than one class)

```html
<img class="logo rounded" src="mylogo.svg">
```

but if we just left the logo alone and didn't specify a class at all, it should be fine, because the defaults we apply to all  `img`  elements shouldn't break it.

If you have something like our situation here, where you have two things which are derived from the same class - here, "rounded images" and "logo images" are both of type `img`, you should never make a change to the parent of both (`img` in this case) for one type of child if it will require an undo of that change in another - just make the change where it belongs in the first place!

The tough part about that is realizing when you need to make a new class and what those classes are. Above I made a `rounded` class, but that may not be sufficient. Maybe you need multiple variants for setting the amounts of rounding, ranging from subtle to full-on-circle. What would you call those classes? You also don't want to go to nuts with different classes, otherwise each element would have a whole pile of classes assigned to it. There is art in organization and picking the right amount of abstraction here. That's an art that's much harder to teach.

## What can CSS do?

<div class="stage">
  <div class="animlayer"></div>
    <a class="ptr" style="z-index:1;float:right;">(2)</a>
</div>

<style>
.stage {
  height: 100px;
  width: 100%;
  margin: auto;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  perspective: 9999px;
  transform-style: preserve-3d;
}
.animlayer {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: effect 5s infinite alternate ease-in-out -7.5s;
  animation-fill-mode: forwards;
  transform: rotateY(40deg) rotateX(33deg) translateZ(0);
}
.animlayer:after {
  font: 50px/0.65 "Roboto", "Trebuchet MS", sans-serif;
  content: "some pretty crazy shit";
  text-align: center;
  height: 100%;
  width: 100%;
  position: absolute;
}
.animlayer:nth-child(1):after {
  transform: translateZ(0px);
}
.animlayer:nth-child(2):after {
  transform: translateZ(-1.5px);
}
.animlayer:first-child:after {
  color: #fff;
  text-shadow: none;
}
@keyframes effect {
  100% {
    transform: rotateY(-30deg) rotateX(-43deg);
  }
}
</style>

That said, you should probably not do to crazy of shit. Not all browsers behave the same or support everything. While nearly everything should work, you will find weird edge cases. For example, this website used to have a nice gradient for the background, but it had awful banding on Firefox and completely broke on the default browser on Samsung phones.

In general though, if you have an idea for a simple animation in mind, you can probably make it work with just CSS… ish. The limitation is if you want to actually change the content, that's a job better suited to javascript, which we'll look at next, though, as a teaser:

<script>
    function getRandomUnicodeLetter() {
  // Generate a random number between 65 (A) and 122 (z)
  const randomNumber = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
  // Convert the number to a Unicode character and return it
  return String.fromCharCode(randomNumber);
}

function updateUnicodeLetters() {
  // Generate 7 random Unicode letters
  const letters = [];
  for (let i = 0; i < 7; i++) {
    letters.push(getRandomUnicodeLetter());
  }
  // Update the text content of the element with the ID "unicode-letters"
  document.getElementById('unicode-letters').textContent = letters.join('');
}

setInterval(updateUnicodeLetters, 70); // Update the letters every second
</script>



```javascript
function getRandomUnicodeLetter() {
  // Generate a random number between 65 (A) and 122 (z)
  const randomNumber = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
  // Convert the number to a Unicode character and return it
  return String.fromCharCode(randomNumber);
}

function updateUnicodeLetters() {
  // Generate 7 random Unicode letters
  const letters = [];
  for (let i = 0; i < 7; i++) {
    letters.push(getRandomUnicodeLetter());
  }
  // Update the text content of the element with the ID "unicode-letters"
  document.getElementById('unicode-letters').textContent = letters.join('');
}

setInterval(updateUnicodeLetters, 70); // Update the letters every 70 milliseconds
```

```
<p> hello <span id="unicode-letters" class="conlang"></span>, how are you?</p>
```

<p> hello <span id="unicode-letters" class="conlang"></span>, how are you?</p>

## Okay, so how do I actually learn it?

Same way as everything else: RTFM, experiment, and get your hands dirty. You've seen enough examples on this page that you've probably accidentally gotten a grasp for some of the syntax.

To start, you'll just need a basic html page with some elements on it, so make a file like `mytest.html` and fill it with some content:

```html
<!DOCTYPE html>
<link rel="stylesheet" href="mystyle.css">
<html>
<h1>Title</h1>
<p>this is <b>HTML</b></p>
</html>
```

then, in the same folder, make a `mystyle.css` file:

```css
h1 {
	color: green;
}
```

and open `mytest.html` with your web browser and start experimenting - just refresh the page each time you change something.

You may want to follow along with some tutorials: https://web.dev/learn/css/ and https://www.w3schools.com/css/ are both decent starting places.

As some homework, I'd recommend trying to get 

{{< columns >}}

columns of text to work, as it it's a good test of your ability to correctly handle padding, grids, etc.

<--->

Plus, you should experiment with how having a smaller browser window breaks this.

{{< /columns >}}

To work smarter not harder, you may want to use the browser's development window and try changing things live - nothing you do there will save after a refresh - just press <kbd>F12</kbd>,  {{< smalltext >}} (You may need to press <kbd>fn</kbd> + <kbd>F12</kbd> depending on your keyboard){{< /smalltext >}} or right click on the page and click "Inspect Element" to look at the HTML and CSS for a specific item on the page. On the Styles tab you should be able to change things and see what they do live. If you want, you can ever try it on this page!

![image-20221231121600624](/design/inspectelement.webp)

## Inline styles

TODO why you shouldn't use them, but why you might want to anyway.

## Units.

px vs rm vs rem

## Further Reading

https://css-tricks.com/css-is-awesome/

https://css-tricks.com/why-is-css-frustrating/

https://www.thinkful.com/blog/top-five-css-mistakes/

https://betterprogramming.pub/10-common-css-mistakes-that-web-developers-often-make-2423d052189b

If you have literal hours to kill, start going though everything on https://css-tricks.com/almanac/



<ol hidden id="footnotes">
<li>Mostly. If you're doing something complex, such as working with animations, the syntax can get a bit weird.</li>
<li>
    <code class="language-css" data-lang="css"><span style="display:flex"><span>.<span style="color:#a6e22e">stage</span> {
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">height</span>: <span style="color:#ae81ff">100</span><span style="color:#66d9ef">px</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">width</span>: <span style="color:#ae81ff">100</span><span style="color:#66d9ef">%</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">margin</span>: <span style="color:#66d9ef">auto</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">position</span>: <span style="color:#66d9ef">relative</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">top</span>: <span style="color:#ae81ff">0</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">right</span>: <span style="color:#ae81ff">0</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">bottom</span>: <span style="color:#ae81ff">0</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">left</span>: <span style="color:#ae81ff">0</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">perspective</span>: <span style="color:#ae81ff">9999</span><span style="color:#66d9ef">px</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">transform-style</span>: <span style="color:#66d9ef">preserve-3d</span>;
</span></span><span style="display:flex"><span>}
</span></span><span style="display:flex"><span>.<span style="color:#a6e22e">animlayer</span> {
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">width</span>: <span style="color:#ae81ff">100</span><span style="color:#66d9ef">%</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">height</span>: <span style="color:#ae81ff">100</span><span style="color:#66d9ef">%</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">position</span>: <span style="color:#66d9ef">absolute</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">transform-style</span>: <span style="color:#66d9ef">preserve-3d</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">animation</span>: effect <span style="color:#ae81ff">5</span><span style="color:#66d9ef">s</span> <span style="color:#66d9ef">infinite</span> <span style="color:#66d9ef">alternate</span> <span style="color:#66d9ef">ease-in-out</span> <span style="color:#ae81ff">-7.5</span><span style="color:#66d9ef">s</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">animation-fill-mode</span>: <span style="color:#66d9ef">forwards</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">transform</span>: rotateY(<span style="color:#ae81ff">40</span><span style="color:#66d9ef">deg</span>) rotateX(<span style="color:#ae81ff">33</span><span style="color:#66d9ef">deg</span>) translateZ(<span style="color:#ae81ff">0</span>);
</span></span><span style="display:flex"><span>}
</span></span><span style="display:flex"><span>.<span style="color:#a6e22e">animlayer</span>:<span style="color:#a6e22e">after</span> {
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">font</span>: <span style="color:#ae81ff">50</span><span style="color:#66d9ef">px</span><span style="color:#f92672">/</span><span style="color:#ae81ff">0.65</span> <span style="color:#e6db74">"Roboto"</span>, <span style="color:#e6db74">"Trebuchet MS"</span>, <span style="color:#66d9ef">sans-serif</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">content</span>: <span style="color:#e6db74">"some pretty crazy shit"</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">text-align</span>: <span style="color:#66d9ef">center</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">height</span>: <span style="color:#ae81ff">100</span><span style="color:#66d9ef">%</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">width</span>: <span style="color:#ae81ff">100</span><span style="color:#66d9ef">%</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">position</span>: <span style="color:#66d9ef">absolute</span>;
</span></span><span style="display:flex"><span>}
</span></span><span style="display:flex"><span>.<span style="color:#a6e22e">animlayer</span>:<span style="color:#a6e22e">nth-child</span><span style="color:#f92672">(</span><span style="color:#f92672">1</span><span style="color:#f92672">)</span>:<span style="color:#a6e22e">after</span> {
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">transform</span>: translateZ(<span style="color:#ae81ff">0</span><span style="color:#66d9ef">px</span>);
</span></span><span style="display:flex"><span>}
</span></span><span style="display:flex"><span>.<span style="color:#a6e22e">animlayer</span>:<span style="color:#a6e22e">nth-child</span><span style="color:#f92672">(</span><span style="color:#f92672">2</span><span style="color:#f92672">)</span>:<span style="color:#a6e22e">after</span> {
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">transform</span>: translateZ(<span style="color:#ae81ff">-1.5</span><span style="color:#66d9ef">px</span>);
</span></span><span style="display:flex"><span>}
</span></span><span style="display:flex"><span>.<span style="color:#a6e22e">animlayer</span>:<span style="color:#a6e22e">first-child</span>:<span style="color:#a6e22e">after</span> {
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">color</span>: <span style="color:#ae81ff">#fff</span>;
</span></span><span style="display:flex"><span>  <span style="color:#66d9ef">text-shadow</span>: <span style="color:#66d9ef">none</span>;
</span></span><span style="display:flex"><span>}
</span></span><span style="display:flex"><span>@<span style="color:#66d9ef">keyframes</span> <span style="color:#f92672">effect</span> {
</span></span><span style="display:flex"><span>  <span style="color:#f92672">100</span><span style="color:#f92672">%</span> {
</span></span><span style="display:flex"><span>    <span style="color:#66d9ef">transform</span>: rotateY(<span style="color:#ae81ff">-30</span><span style="color:#66d9ef">deg</span>) rotateX(<span style="color:#ae81ff">-43</span><span style="color:#66d9ef">deg</span>);
</span></span><span style="display:flex"><span>  }
</span></span><span style="display:flex"><span>}
</span></span></code>
    </li>
</ol>
