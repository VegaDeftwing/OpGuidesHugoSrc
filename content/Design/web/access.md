# Accessibility

<style>
.access_container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 20px;
  border-radius: 10px;
}
.item {
  background-color: #80cbc4;
  background-clip: padding-box;
  border-radius: 10px;
  border: 4px solid #fff0;
  padding: 7px;
  font-size: 22px;
  text-align: center;
}
.style1 {
  color: blueviolet;
  background-color: #d9e6e9;
  grid-column-start: 1;
  grid-column-end: 4;
}
.style2 {
 color: red;
  background-color: #011728;
  grid-column-start: 1;
  grid-column-end: 4;
}
.style3
{
color: gold;
  background-color: #6b3850;
      grid-column-start: 1;
  grid-column-end: 3;
}
.style4{
color: yellow;
  background-color: #8607bb;
  grid-column-start: 2;
  grid-column-end: 4;
}
.style5{
 color: #aeedad;
  background-color: indigo;
     grid-column-start: 1;
  grid-column-end: 4;
}
.style6{
 color: #6562e5;
  background-color: #ffffbd;
}
.style7{
color: #247849;
  background-color: #faf8d8;
}
.style8{
color: #cc580e;
  background-color: #11020f;
}
.style9{
color: #2672c8;
  background-color: #f9f9e4;
      grid-column-start: 1;
  grid-column-end: 4;
}
.style10{
 color: #f9f9e4;
  background-color: #2672c8;
   grid-column-start: 2;
  grid-column-end: 4;
}
.style11{
 color: #200F0F;
  background-color: #0C000F;
   grid-column-start: 1;
  grid-column-end: 4;
}
</style>

## Contrast.

<div class="access_container">
    <div class="item style1">░▒▓ Accessability <u>doesn't mean ugly</u>. ▓▒░</div>
    <div class="item style2">♚ <b>High contrast colors</b> can look good. ♛</div>
    <div class="item style7">🙟Like this, nice nature-y theme.🙝</div>
    <div class="item style4"><b>→</b> Or this in-your-face purple <b>←</b></div>
    <div class="item style3">🗹🗹🗹 All of these boxes are <b>high contrast.</b></div>
    <div class="item style6">!<b>!</b>!</div>
    <div class="item style9">And it's not like this is hard to do. &nbsp&nbsp Hell, it's easier!</div>
    <div class="item style8">All of these palettes were made with </div>
    <div class="item style10">https://randoma11y.com</div>
    <div class="item style5"> Though it's not hard to make your own.</div>
    <div class="item style11"> You just have to give a shit.</div>
</div>


## Image alt-text

## Using basic-ass HTML the way it was intended.
Don't make your buttons divs.


## Finding a balance.
A lot of sites that preach accessibility miss a point that everyone is thinking "If I'm focused on accessibility, I won't be able to work as fast or make as many cool things.". Yep. That's true.

Hell, above where I wrote "🗹🗹🗹 All of these boxes are <b>high contrast.</b>"

It's likely a screen reader will read that as

<p style="font-family: 'Courier New', monospace;">ballot box bold check ballot box bold check ballot box bold check all of these boxes are <b> high contrast bold text end. </b></p>

With the bold text being in a, uh, bold voice? It depends on the user's screen reader.

And, yeah, ｏｏｆ. That's not a good experience. So, it's worth trying to balance your use of text, images, and (do-as-I-say-not-as-I-do) unicode abusing spice. 

## Not being a dick™
TODO: Facebook putting each letter of sponsored in a different div breaking things.