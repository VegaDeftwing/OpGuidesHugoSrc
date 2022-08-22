# 10 - How to Know What to Buy

<script>
    document.getElementById("hardwareMenu").open = true;
</script>
**I've tried writing this like 5 times, trying to work around the fucked up GPU market, I just can't even show the process of finding parts when things are this messed up. I can't reccomend a pre-built system either, since [DELL is awful](https://www.youtube.com/watch?v=4DMg6hUudHE) but [so is everyone else](https://www.youtube.com/watch?v=cKxBogvUe_c). Fuck this. Unless you litterally don't have a computer just don't buy anything for a while.**

---

So you want to build a computer? Great! Now you're probably wondering what to buy.

The very first things you should ask yourself are:

1. What will this system be used for?
2. What's my budget?
3. Are used parts okay?

That first question will dramatically narrow down your options, whether you realize it or not. If this system *needs* to have Microsoft Office (Word, Excel, etc.) and Libreoffice won't do the trick, you're pretty much limited to Intel and AMD based systems, instead of throwing a cheap Raspberry Pi at the problem. If you need utmost stability, like 24/7/365 this system absolutely can not go down, you'll probably have to plan on getting something more server grade, possibly with redundant power supplies, hard drives, and (traditionally) ECC RAM. If you're making something and just need it to be as fast as possible, you'll still want to consider what software you're running. Some tasks are heavily dependent on your CPU speed, while others need you to have a kick ass graphics card.

The second question will be the one that hurts to admit. If you only have $300 to throw at a gaming computer, it's not that you can't make it work, it's that you'll probably not have as good of a time as you'd like. That is where the third question comes in. If used parts are okay, you can probably get a way better deal. Just be sure not to get totally fucked on over-used hardware. Graphics cards used for crypto mining and hard drives that have been on for 6 years straight in a server aren't good, and it's easier than you'd think to end up with either on accident. You'll also have to be careful that the older hardware still supports everything you need. That old graphics card may not have hardware video encoding, making it less than awesome if you want to stream your games on Twitch, and that older CPU might not let you watch Netflix in 4k (yes, this is a real problem- there's shitty digital rights managment stuff built into the CPU). There's a lot of little snafus like this you might not be aware of.

Okay, so, let's look at building a computer. I'm going to try to put together a gaming and streaming computer with a budget of $750 (exculding mouse, monitor, keyboard). I'm going to assume that the streamer also wants to connect their console to the system, so we need a way to do HDMI capture as well, let's walk though building a system with that in mind.

{{< tip >}}

<div class="progress-ww">
<dl>
<!--<dt>10 </dt><dd> <a href="/engineering/programming/codeintro/">Let's Write Some Code</a>-->
</dd>
    <dt>10 </dt><dd> <details id="codeMenu"> <summary><a href="/engineering/programming/intro/progintro0">Let's Write Some Code</a></summary>
    <dt class="sub">10.1</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro1"> It's Math?</a></dd>
	  <dt class="sub">10.2</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro2"> Turtles!</a></dd>
    <dt class="sub">10.3</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro3"> Getting Tools</a></dd>
    <dt class="sub">10.4</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro4"> 2 for 1</a></dd>
    <dt class="sub">10.5</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro5"> Types</a></dd>
    <dt class="sub">10.6</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro6"> logic & Functions</a></dd>
    <dt class="sub">10.7</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro7"> Data Structures</a></dd>
    <dt class="sub">3.8</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro8"> Libraries</a></dd>
    <dt class="sub">3.9</dt><dd class="sub"> <a href="/engineering/programming/intro/progintro9"> Getting Real</a></dd>
   </details> </dd>
<dt>10½</dt><dd> <a href="/engineering/programming/consequences/">Consequences</a></dd>
<dt>11 </dt><dd> <a href="/engineering/programming/lowlvl/">Low Level Programming</a></dd>
<dt>11½</dt><dd> <a href="/engineering/programming/fosscopyright/">FOSS & Copyright</a></dd>
<dt>12 </dt><dd> <a href="/engineering/programming/codecont/">Yet More Programming</a></dd>
<dt>12½</dt><dd> <a href="/engineering/programming/fixxingissuses/">Fixing Issues</a></dd>
<dt>13 </dt><dd> <a href="/engineering/programming/languages/">Programming Languages</a></dd>
<dt>14 </dt><dd> <a href="/engineering/programming/algorithms/">Algorithms and More</a></dd>
<dt>15 </dt><dd> <a href="/engineering/programming/bigprog/">Writing a Big Program</a></dd>
<dt>16 </dt><dd> <a href="/engineering/programming/debugbuildtest/">Debugging, CI & CD</a></dd>
<dt>17 </dt><dd> <a href="/engineering/programming/multithread/">We've Got Cores!</a></dd>
<dt>18 </dt><dd> <a href="/engineering/programming/guiprog/">Graphical Programming</a></dd>
<dt>19 </dt><dd> <a href="/engineering/programming/shaders/">Shaders + GpGPU</a></dd>
<dt>20 </dt><dd> <a href="/engineering/programming/game/">Game Programming</a></dd>
<dt>21 </dt><dd> <a href="/engineering/programming/funcprog/">(((())(()((()(()))))))</a>
</dd>
</dil>
</div>

I'm also writing this during the fucking nighmare of a GPU market caused by crypto currency, plus the added mess of Chia, a crypto currency that eats hard drives, plus a global silicon shortage. You should be able to get something btter than this for this amount of money.

{{< /tip >}}

Okay, so we know that we'll want a fair number of CPU cores for dealing with gaming and streaming simulatiously. Even if conventional wisdom is that games (usually) only benefit from 4 cores, with streaming and other background tasks we'll need more. We might be able to lessen this need if we can score a decently priced Nvidia gpu though, as Nvidia cards have really nice hardware video encoding called "NVENC", and that has improved with each generation of cards from Nvidia. That said, if we find a really cheap but better performing AMD GPU, we can just put the money into a better process and it'll balance out. To keep things at least sorta modern, I think it's reasonable to say nothing older than about 2017. That leaves cards as old as AMD's Vega series and some of Nvidia's 10 series, but newer would still be nice. At the time of writing, finding a graphics card is still a massive pain in the ass due to crypto miners, but let's check new egg just to get a base line. Nvidia's cards are a bit easier to follow with the model number. The first number is the generation, with higher being newer. (10,16,20,30) and the second how high end it is (90>80>70, etc.) if there's a '"ti" or "super" on the end, it's a bit better.

Let's go over to [PCPartPicker](https://pcpartpicker.com) and start with the GPU then. As a rough baseline, we should probably put about half the budget into the GPU since this *is* a gaming computer. So, that puts us at a $375ish limit on that. Let's look a bit higher though, as there might be a good deal. 

