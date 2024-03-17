# 

<div class="glitch">
<div class="centered-over-image"><h1 style="text-shadow: 0 0 3px #000000, 0 0 5px #000000;">EMBRACE FAILURE</br>  KEEP MAKING</h1></div>
	<img src="/pixabay/glitch-2463363_1280.webp" alt="">
		<div class="glitch__layers">
		<div class="glitch__layer"></div>
		<div class="glitch__layer"></div>
		<div class="glitch__layer"></div>
		</div>
</div>

# Ⅱ - Learn how to learn

Nobody learns (effectively) by being shown what to do. You can watch hundreds of hours of people playing guitar, even explaining how they do it, but you won't be able to randomly pick one up and play if you never have before.

Furthermore, as much as you can learn from direct reading and instruction, it has its place and limits. This guide, book, whatever you want to call it, was never meant to be followed like instructions. You should go out on your own and poke around, get lost in the weeds as you go. If you find a topic dull, don't read it as in depth. I don't want you wasting your time.

Break things. Make mistakes. 


By the end of this, you should know what a burning resistor smells like, what it's like to try to recover from a Linux system that just won't boot, and how it feels when a bug has been eluding you for hours and your code still doesn't work.

The only way that happens is if you try ideas when you get them and do more than what's in this guide. So, please, if you find a topic interesting, don't make this website you're one stop shop - go surf the web.

Failing is part of learning and proof that you're doing well. 

{{< columns >}}

These experiences should teach you things in their own right. The smell of burning electronics may help you diagnose a future circuit, the lesson to not fall into a pit of technical debt may help when a bug has engulfed your code, and the late night of terminal only based work as you try to get your computer working again will teach you more than this book ever can.

To quote someone much smarter than myself→

<--->

<img src="/fairuse/twitter/liveoverflow.webp" alt=" " style="border-radius:25px;">

{{< attribution >}}[@LiveOverflow](https://twitter.com/LiveOverflow/status/1037296510583689216){{< /attribution >}}

{{< /columns >}}

You should also constantly be looking for how to break, modify, or look into how things work. For example, try right-clicking on this sentence and select `Inspect`, like this:

<img src="/eng/inspectElement.webp" alt="inspectElement" style="zoom:50%; border: 5px solid #555;" />

<p hidden> <b> OwO, What's this? </b> <p>

You should see a `<p hidden>` element, try editing it to remove the word hidden, then the text from that element should appear above this.  (this sometimes doesn't work correctly right away, so you might have to right-click and inspect twice, but then you should see the HTML source for this section of the page)

But try to take this lesson elsewhere, try renaming a .docx (word) file to a .zip and extracting it, or looking through the ventilation of your electronics to see if you can see what makes them tick, whatever. Curiosity is my primary incentive to learn, and often taking a peek into the innards of electronics or code or machines can reveal a lot.

If you're looking for some more advice, see this page, {{< button relref="Other/advice" color="other" >}}literally titled "Advice"{{< /button >}}

## Other Resources

[How To Learn Stuff Quickly (Josh W Comeau)](https://www.joshwcomeau.com/blog/how-to-learn-stuff-quickly/)

[Use Google like a pro](https://markodenic.com/use-google-like-a-pro/)

[Learn about problems, not solutions (Gareth Dwyer)](https://dwyer.co.za/problems-not-solutions.html)

[How to learn things at 1000x the speed (Pranay Prakash)](https://pranay.gp/how-to-learn-things-at-1000x-the-speed)

[My Engineering Axioms (Martin Rue's Blog)](https://martinrue.com/my-engineering-axioms/)

![](https://imgs.xkcd.com/comics/average_familiarity.png)

{{< attribution >}}[xkcd №2501](https://xkcd.com/2501/){{< /attribution >}}

<style>
.glitch {
	position: relative;
	overflow: hidden;
	text-align: center;
	height: 10em;
}
.glitch img {
	position: relative;
	z-index: 1;
	display: block;
    filter: brightness(50%)
}
.glitch__layers {
	position: absolute;
	z-index: 2;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
    filter: brightness(70%)
}
.glitch__layer {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-image: url(/pixabay/glitch-2463363_1280.webp);
	background-repeat: no-repeat;
	background-position: 0 0;
}
.glitch__layer:nth-child(1) {
	transform: translateX(-5%);
	animation: glitch-anim-1 2s infinite linear alternate;
}
.glitch__layer:nth-child(2) {
	transform: translateX(3%) translateY(3%);
	animation: glitch-anim-2 2.3s -.8s infinite linear alternate;
}
.glitch__layer:nth-child(3) {
	transform: translateX(5%);
	animation: glitch-anim-flash 1s infinite linear;
}
@keyframes glitch-anim-1 {
	0% {
		clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
	}
	10% {
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	20% {
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	40% {
		clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
	}
	50% {
		clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
	}
	60% {
		clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
	}
	70% {
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	80% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	90% {
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	100% {
		clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
	}
}
@keyframes glitch-anim-2 {
	0% {
		clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
	}
	15% {
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}
	25% {
		clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	45% {
		clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
	}
	50% {
		clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%);
	}
	65% {
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	75% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	80% {
		clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
	}
	95% {
		clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
	}
	100% {
		clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
	}
}
@keyframes glitch-anim-flash {
	0% {
		opacity: .2;
	}
	30%, 100% {
		opacity: 0;
	}
}
.centered-over-image {
  position: absolute;
  left: 40%;
  transform: translate(-50%, -30%);
  color: #fff; 
  font-size: 1.2em; 
  text-align: center;
  z-index: 3;
}
</style>

