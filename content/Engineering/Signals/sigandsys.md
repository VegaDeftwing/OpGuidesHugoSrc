# 28 - Signals & Systems

When I took ECEN 304 Signals & Systems Ⅰ with the fantastic Dr. Sayood at UNL I remember how in awe I was at how he concisely he managed to describe the core idea of this class. While I can not hope to convey the same level of brilliance or inspiration, I do hope that my poor attempt at mimicking his introduction to the course may be of value:

<div style="padding: 2px 7% 10px 7%;"><p style="font-size:1.2em;text-align: center;line-height:1.6;">Signals and Systems as a field, fundamentally, is exactly what it says on the tin. It's the study of signals - from the periodic to the instanenous and high energy - and systems - the source of that data and the mechanism that produces it. This may be used to study how a circuit works, to fine tune the movement of a robot's arm, or to detect pockets of oil deep underground by studying how shock waves traverse thouugh the depths. This is truly applied mathematics. Sure, we may still idealize our models but with these tools we can dive into the nitty gritty when need be. You'll see how any system can be modeled. How even the motion of walking comes about from signals and systems. Further, you'll see how almost all interesting systems, including walking, are systems on the brink of total instability. Everytime you take a step, you let yourself fall before catching yourself, propulsion via constantly recoving from a state of instability. With our bodies, we have our own trained muscles and mind to thank for our ability to catch ourselves, but to design great things, we need to make circuits, write code, and devise ways of making and capturing data that takes advantage of these same facts. Signals and Systems is about harnessesing instability to make it do work for us.</p></div>

---



<script>
    document.getElementById("mathMenu").open = true;
</script>

{{< hint info>}}

Below is a 54 video series that totals around 13 hours

{{< /hint >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/playlist?list=PLOunECWxELQRYwsuj4BL4Hu1nvj9dxRQ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[MIT Signals and Systems Lectures (YouTube)](https://www.youtube.com/watch?v=-FHm2pQmiSM&list=PLUl4u3cNGP61kdPAOC7CzFjJZ8f1eMUxs&ab_channel=MITOpenCourseWare)

But, if you'd rather learn out of a textbook, if you go looking online you might just be able to stumble upon a 100% super-duper legal way to obtain `Alan V. Oppenheim, Alan S. Willsky, with S. Hamid-Signals and Systems` with ISBN `978-0138147570` published by Prentice Hall which is now a subsidiary of Pearson, a textbook publisher which can, and this is 100% true, go fuck themselves.

---

One of the most important things in Signals is the Fourier Transform. Fortunately, quality content about it is abundant. This site, {{< best >}} [An Interactive Introduction to the Fourier Transform](http://www.jezzamon.com/fourier/) {{< /best >}}

provides a great introduction for developing an intuition about it graphically, while "[But what is the Fourier Transform? A visual introduction. (YouTube, 3Blue1Brown)](https://www.youtube.com/watch?v=spUNpyF58BY)" goes a bit more into the math by the end.

[TODO] put in all notes from class here to provide a half decent resource

**Extra Resources:**

[Intuitive Guide to Convolution](https://betterexplained.com/articles/intuitive-convolution/)

https://en.wikibooks.org/wiki/Signals_and_Systems

[A 313 Part - not even kidding - playlist on Signals and Systems on YouTube](https://www.youtube.com/watch?v=s8rsR_TStaA&list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO&index=1&ab_channel=NesoAcademy)

[A 95 Video series, in case that 313 parter left you needing more.](https://www.youtube.com/playlist?list=PL5D4A7494C03A0227)

[The Scientist & Engineer's Guide to Digital Signal Processing, 1999 (Analog Devices)](https://www.analog.com/en/education/education-library/scientist_engineers_guide.html#Foundations)

[DSP Spreadsheet: The Goertzel Algorithm is Fourier's Simpler Cousin (Hackaday, Al Williams)](https://hackaday.com/2020/11/13/dsp-spreadsheet-the-goertzel-algorithm-is-fouriers-simpler-cousin/)

[What does the Laplace Transform really tell us? (Zach Star, YouTube)](https://www.youtube.com/watch?v=n2y7n6jw5d0&ab_channel=ZachStar)


[What does frequency mean in an image (Stack Exchange)](https://photo.stackexchange.com/questions/40401/what-does-frequency-mean-in-an-image)

[Triple Pendulum on a Cart](https://www.youtube.com/watch?v=cyN-CRNrb3E&ab_channel=TobiasGl%C3%BCck) & [Inverted Pendulum on a Cart (Steve Brunton's Control Bootcamp on YouTube)](https://www.youtube.com/watch?v=qjhAAQexzLg&ab_channel=SteveBrunton)

[Poisson's Equation is the Most Powerful Tool not yet in your Toolbox (Matt Ferraro)](https://mattferraro.dev/posts/poissons-equation)

## What Is a Signal?

[TODO] Properties of waves + Discrete signals

- Phase, Frequency, Wavelength, Amplitude & Db & LuFS, Bandwidth

## How Do I work with signals?

[TODO] Basic signal transformations, shifts, scaling, etc. sneak peek at Frequency Domain

## Important Signals

[TODO] Sinusoidal

[TODO] Unit Step

[TODO] Impulse (delta)

[TODO] Triangle

[TODO] Rectangle

[TODO] Sinc

## Properties of Signals

[TODO] Memory - system is only dependent on input at the same time as the input

[TODO] Invertability - inputs give distinct outputs

[TODO] Causal - output doesn't depend on future events/data

[TODO] Stability - small inputs don't cause divergence, easier to think of it as fragility?

[TODO] Time Invariance - Running the same experiment at a different time will still yield the same results

[TODO] Linearity - if you put in A and get Y, put in B and get Z, then putting in A+B should give you Y+Z. Similarly, 2A should give you 2Y.

## LTI - Linear Time Invariant Systems

- Distributive, Associative, Invertability, Stability (if summable < inf)

[TODO] Convolution

[TODO] Fourier Decomposition

[TODO] Filtering

[TODO] Fourier Transform - Discrete & Continuous

[TODO] Sampling

- Nyquist
- Aliasing
- Interpolation & Sinc fn

[TODO] Laplace Transform, Region Of Convergence

[TODO] Pole-Zero Plots

[TODO] Z-Transform & Inverse

	- and properties, ref *The Book* pg. 775

[TODO] Linear Feedback Systems

[TODO] PLLs



---

<iframe width="100%" height="500" src="https://www.youtube.com/embed/jnxqHcObNK4?list=WL" title="Wavelets: a mathematical microscope" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
