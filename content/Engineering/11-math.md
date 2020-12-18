# Chapter 11 - Math

<iframe width="100%" height="450" src="https://www.youtube.com/embed/g8vHhgh6oM0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The next few chapters are, regrettably, necessary for developing your knack. Math, Physics, and Chemistry and fundamental to all engineering fields and while something about each of the three subjects finds a way to make the 16 year old highschooler in us release a long, exasperated groan. I think this is mostly due to each of these things being taught in a way that takes the fun and interesting parts out and replaces them with trying to learn skills that have largely been outdated by the advent of calculators, computers, and the internet. With that, let's jump into it:

{{< tip >}}

As with all of OpGuides, please skip around as necessary. I suspect the start of this math chapter will be stuff many readers already know, especially those currently in college.

{{< /tip >}}

# Chapter 11 - Math

some motivation, Klein bottle guy, non-euclidean games, fractals, colatz conjecture, ...

## 1 - Algebra

{{< hint info>}}

This section is a tad bit misnamed, as instead of covering just Algebra I'll be covering most things you'd learn in a high school Algebra class along side it, plus probably a bit extra. 

{{< /hint >}}

### Number Systems

To get started, let's look at 'Number Systems'. Essentially, there are a variety of 'types' of numbers, rather than get all philosophical let's just dive in and I think you'll get the gist.

#### ℕ - Natural Numbers

Natural Numbers are the dead basic set of numbers, 1, 2, 3, 4, 5, etc. note, this this doesn't include fractions, decimals, etc. or the number 0. **Whole Numbers** is the set of natural numbers *and* the number 0, so 0, 1, 2, 3...

#### ℤ - Integers

Alright, Natural and Whole numbers are great and all, but what if we want to represent a deficit or debt? Negative numbers would definitely be nice- introducing *Integers*, this is just the set of Whole numbers *and* the their inverses, so .... -3, -2, -1, 0, 1, 2, 3 ...

{{< tip >}}

If you come from a programming background, do note that what programming languages call integers is ever so slightly different. Namely, mathematically integers include arbitrarily large numbers, but in programming most `int` types are bounded by how many bits they can store, for example, an 8 bit signed integer can only hold values ranging from -128 to 127.

{{< /tip >}}

#### ℚ - Rational Numbers

Alright, so, what if we want to represent the number of slices in a pie? Sure, we could say that pie has been cut into 6 slices and 1 of the slices is gone, so 5 remain, but the obviously natural way to say this is 5/6 of the pie is left, and like that we've invented rational numbers.

A rational number is any number that can be written as an integer over an integer. so {{< katex >}} \frac{1}{2} \text{ and } \frac{-1}{2} {{< /katex >}} are both obviously valid. 'Improper' fractions, that is fractions where the top is bigger than the bottom, like {{< katex >}} \frac{4}{3} \text{ and } \frac{-3}{2} {{< /katex >}} are both valid too.

Of note, these can be written as *mixed numbers* too, that is {{< katex >}} \frac{4}{3} = 1\frac{1}{3} {{< /katex >}}, as {{< katex >}} \frac{3}{3} = 1 \text{ so the remaining } \frac{1}{3} {{< /katex >}} is just written next to it.

Note, that rational numbers do include numbers with an infinite repeating decimal, that is while {{< katex >}} \frac{1}{2} \text{ can be written as } .5 {{< /katex >}}, {{< katex >}} \frac{1}{3} \text{ has a repeating decimal, } \frac{1}{3} = .333333... = .\overline{33} {{< /katex >}}, where the line over the 3's implies that the 3's repeat infinitely. This *is* still a rational number.

####   - Irrational Numbers

Alright then, what's an irrational number?

Well, this is easier to answer with a few examples, the most well know of which is {{< katex >}} \pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499... {{< /katex >}}

... I think you get the idea.

Irrational numbers are numbers where the decimal doesn't repeat and as such can *not* be written as an integer over another integer. Because pi is a geometrically defined constant, it may be easier to look at something a bit more tangible.

the square root of a number is just the number that when multiplied with itself gives the number in question, so the square root of 4 is 2 because 2*2 is 4, the square root of 9 is 3 because 3\*3 is 9, etc.

But what about the square root of 2? well {{< katex >}} \sqrt{2} = 1.414213562373.... {{</ katex >}} you get the idea. Like with pi, it's a number that goes on forever, with no repeating pattern.

Later on you'll see other irrational constants like {{< katex >}} e = 2.718281828459.... {{</ katex >}} and The Golden Ratio {{< katex >}} \frac{1+\sqrt{5}}{2} = 1.618033988749.... {{</ katex >}}

#### ℝ - Real Numbers

Finally, we're up to the normal number line, that is, we now have the set of all numbers on the number line, all the way from -∞ to +∞, (often written as ±∞) pick any number, with as many random numbers before or after the decimal point as you want, and that's a real number.

#### {{< katex >}} i {{</ katex >}} - Imaginary Numbers

![](/wtf.gif)

Yep, that's pretty much everyone's first reaction. What in the hell is an imaginary number?

Well, okay, remember before how I said a square root was just whatever number you need to multiply with itself to get the number, so {{< katex >}} \sqrt{4} = 2 {{</ katex >}}? This has a problem, a negative number times a negative number is always positive, so {{< katex >}} 3 * 3 = 9, -3 * 3 = -9, \text{ but } -3 * -3 = 9 {{</ katex >}} So, what would the square root of a negitive number be? There are no two numbers that can multiply to give us -1, so, we made one up! {{< katex >}} \sqrt{-1} = i {{</ katex >}}

furthermore, {{< katex >}} \sqrt{-4} = 2i {{</ katex >}}

i being equal to {{< katex >}}\sqrt{-1}{{</ katex >}} has some interesting properties with exponents. Naturally exponentiation is the inverse of a root, that is {{< katex >}} 3^2 = 9, \text{ as } \sqrt{9} = 3 \text{ implies that } \sqrt{9}^2=9{{</ katex >}},

When taken to negitive numbers, we can see this effect, so {{< katex >}} \sqrt{-1}^2=-1 \text{ implies } \sqrt{-1}^2 = i^2 = i* i = -1{{</ katex >}}

So what if we keep taking *i* to higher powers?

 {{< katex >}} i * i = i^2 = -1 \text{ and } i * i * i = i^3 = -i \text{ and } i * i * i *i = i^4 = 1{{</ katex >}} then this pattern repeats, so {{< katex >}} i^5 =  i^4 * i = 1 * i = i \text{ and } i^6 = i^4 * i^2 = -1 \text{ and so on,  } i^7 = -i,  i^8 = 1, i^9 = i {{</ katex >}} and so on.

{{< tip >}}

Note, you may also see 'j' used instead 'i' to represent imaginary numbers.

{{< /tip >}}

While you're inital reaction may be "Who cares?", I assure you you'll see the value of this in a bit.

#### ℂ - Complex Numbers

Complex numbers then, the end of this adventure for most sane people, are just Real numbers with imaginary numbers, written together, so this is numbers like {{< katex >}} 32 + 4i \text{ or } 420.69 - 2i{{</ katex >}}. This brings about something called the complex plane, as now if we want to plot these numbers we can no longer use a simple number line, but instead need an axis for each part, one for the Real (ℝ) part, and one for the imaginary part.

Here's a video to help you understand imaginary and complex numbers, albeit it does assume you've at least seen both a little bit before.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/5PcpBw5Hbwo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Hypercomplex numbers](https://en.wikipedia.org/wiki/Hypercomplex_number) are also a thing, this term includes [Quaternions](https://en.wikipedia.org/wiki/Quaternion) which are used in some very high level physics, but otherwise you'll most likely never work with these.

### Notation

#### +, -, *, ÷, mod

If you don't know that addition, subtraction, multiplication, and division are, I think you're in the wrong place...

That said, there are some things you may not be used to. For starters, multiplication can be written in a variety of ways. of course there's the classic {{< katex >}} 2 \times 2 = 4 {{</ katex >}} but you may also see {{< katex >}} 2 \cdot 2 = 4 {{</ katex >}} or {{< katex >}} 2 * 2 = 4 {{</ katex >}} or just {{< katex >}} 2(2) = 4 {{</ katex >}}, where parentheses with no operation in between imply multiplication.

Typically, the {{< katex >}} 2 \cdot 2 = 4 {{</ katex >}} and parentheses methods are used on paper, while the {{< katex >}} 2 * 2 = 4 {{</ katex >}} is used on computer screens as it's easy to type. {{< katex >}} 2 \times 2 = 4 {{</ katex >}} is generally not preferred as it can be confused with other operations you'll see later.

Something to keep in mind is that addition and multiplication are both, both commutative and associative, while subtraction and division are not. What this means is that while {{< katex >}} 2 + 3 = 3 + 2 \text{ but, } 2 - 3 \neq 3 - 2 {{</ katex >}} (The Commutative Property) similarly, {{< katex >}} 2 * 3 = 3 * 2 \text{ but, } 2 \div 3 \neq 3 \div 2 {{</ katex >}}

Furthermore, {{< katex >}} (2 + 3) + 4 = 3 + (2 + 4) \text{ but, } (2 - 3) - 4 \neq 2 - (3 - 4) {{</ katex >}} and {{< katex >}} (2 * 3) * 4 = 3 * (2 * 4) \text{ but, } (2 \div 3) \div 4 \neq 2 \div (3 \div 4) {{</ katex >}}, by the Associative Property. 

For division, there's some terminology you should know. First of all, in {{< katex >}} \frac{a}{b} {{</ katex >}}, a is the *numerator* and b is the *denominator*. The *reciprocal* of {{< katex >}} \frac{a}{b} {{</ katex >}} is {{< katex >}} \frac{b}{a} {{</ katex >}}. This is actually pretty useful, for example, given {{< katex >}} \frac{a}{\frac{b}{c}} {{</ katex >}} you can write this as,  {{< katex >}} a * \frac{c}{b} {{</ katex >}}



Modulo is something you'll see in programming a lot, in programming it's usually represented with the percent sign.

Modulo is just the reminder after division, so 7%3 is 1, because 3 goes into 7 twice, with **1** left over.

#### ^, √, !

exponents, written as either {{< katex >}} a^x \text{ or }  {{</ katex >}}a^x or exp(x) if the base is 'e', that is {{< katex >}} e^x {{</ katex >}}, are pretty simple to understand, they're just repeated multiplication, so {{< katex >}} a^3 = a * a * a  {{</ katex >}}

This results in a few 'rules' for exponents which are fairly easy to understand, with the exception of the not at all intuitive {{< katex >}} a^0 = 1  {{</ katex >}}

| Exponent Rule                      | Assume a≠0 and b≠0                                           |
| ---------------------------------- | ------------------------------------------------------------ |
| Product Rule                       | {{< katex >}} a^x * a^y = a^{x+y}  {{</ katex >}}            |
| Quotient Rule                      | {{< katex >}} a^x / a^y = a^{x-y}  {{</ katex >}}            |
| Power Rule                         | {{< katex >}}  (a^x) ^y = a^{x*y}{{</ katex >}}              |
| Power of a Product Rule            | {{< katex >}} (a*b)^x = a^x*b^x  {{</ katex >}}              |
| Power of a Fraction Rule           | {{< katex >}} (\frac{a}{b})^x = (\frac{a^x}{b^x}) {{</ katex >}} |
| Fractional Exponent                | {{< katex >}} a^{\frac{x}{y}} = \sqrt[y]{a^x} {{</ katex >}} |
| Negitive Exponent                  | {{< katex >}} a^{-x} = \frac{1}{a^x} {{</ katex >}}          |
| Zero Exponent **¡easy to forget!** | {{< katex >}}  a^0 = 1 {{</ katex >}}                        |

alright, so why do I say these are intuitive? Let's take the product rule for example. Let's look at {{< katex >}}  2^2 * 2^3 = 2^5 {{</ katex >}} this is true because {{< katex >}}  2^2 = 2*2 , 2^3 = 2 * 2 * 2 \text{, so multiplied together they're }(2 * 2) * (2 * 2 * 2) \text{ and as multiplication is associative that is } 2*2*2*2*2 =  2^5 {{</ katex >}}, generally, any of these rules can be figured out by just writing out examples like these, expanding the exponent out like this, and seeing what happens.

Alright, so now we can look at roots. The most common root you'll work with is the square root, which is what is implied when seeing a root symbol with no number in the crevice, though can be written explicitly as {{< katex >}} \sqrt[2]{n} {{</ katex >}}, though as you should've notice in the exponent rules other roots are possible, for example the cube root, which is {{< katex >}} \sqrt[3]{n} {{</ katex >}} is just whatever number you need to multiply with itself 3 times to get n, so for example {{< katex >}} \sqrt[3]{8} = 2 \text{ as } 2 * 2 * 2 = 8 {{</ katex >}}

As implied by the Fractional exponent rule, roots can be written as fractional exponents, that is {{< katex >}} \sqrt[2]{n} = n^{1/2} {{</ katex >}} often it's actually more convenient to enter this notation into a calculator or programming language anyway. It can even just be nice for working on paper as when writing something like {{< katex >}} \frac{1}{\sqrt{ \text{some really long equation here}}} {{</ katex >}} it can be easy to miss the top bar and forget it's there, compared to {{< katex >}} \frac{1}{( \text{some really long equation here})^{\frac{1}{2}}} {{</ katex >}} where the power sticks out more.

Finally, there's factorial, written with the **!**, it just means to multiply the number with the number prior down to 1, so  {{< katex >}} 4! = 4 * 3 *2 * 1 {{</ katex >}}

#### <, >, ≤, ≥, ±, ≠, ≈, ∝, <<, >>,

#### ±, |x|, ∆

#### *f* (*x*), (*f* ∘ *g*)

#### (*a*,*b*), [a, b]

#### ∑, Π

https://www.rapidtables.com/math/symbols/Basic_Math_Symbols.html

### Order of Operations

stupid facebook memes

### Looking at some equations

#### Linear

#### Polynomial



Imaginary numbers, systems of equations

## 1½ - Primes

## 2 - Discrete Math

http://discrete.openmathbooks.org/dmoi3/

[Math For Programmers (pdf)](https://yurichev.com/writings/Math-for-programmers.pdf)

### Notation

https://en.wikipedia.org/wiki/List_of_mathematic_operators

## 3 - Trig

### Very brief Geometry Lesson

#### Notation

∥, ⊥, 

### Notation



## 4 - Calculus

{{< hint info >}}

Below is a 12 video series that totals about 3.25 hours.

{{< /hint >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[The Exponential Function is a Miracle (Mark Dominus)](https://blog.plover.com/math/exponential.html)



## 5 - Differential Equations

{{< hint info >}}

Below is a 5 video series that totals about 1.5 hours.

{{< /hint >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 6 - Matrix Theory / Linear Algebra

{{< hint info >}}

Below is a 15 video series that totals a bit under 3 hours.

{{< /hint >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Matricies, Diagrammatically](https://graphicallinearalgebra.net/2015/06/09/matrices-diagrammatically/)

[Linear Algebra - Jim Hefferson](http://joshua.smcvt.edu/linearalgebra/book.pdf)

[Linear Algebra and Applications: An Inquiry-Based Approach](https://scholarworks.gvsu.edu/cgi/viewcontent.cgi?article=1021&context=books)

## 7 - Signals & Systems

{{< hint warning >}}

There's a ton of content available on Signals and Systems in Video form, but honestly I don't think any of it is great. The MIT OpenCourseWare series linked below is probably the best I can find, but it's also still only 480p

{{< /hint >}}

[MIT Signals and Systems Lectures (YouTube)](https://www.youtube.com/watch?v=-FHm2pQmiSM&list=PLUl4u3cNGP61kdPAOC7CzFjJZ8f1eMUxs&ab_channel=MITOpenCourseWare)

But, if you'd rather learn out of a textbook, if you go looking online you might just be able to stumble upon a 100% super-duper legal way to obtain `Alan V. Oppenheim, Alan S. Willsky, with S. Hamid-Signals and Systems` with ISBN `978-0138147570` published by Prentice Hall which is now a subsidiary of Pearson, a textbook publisher which can, and this is 100% true, go fuck themselves.

---

One of the most important things in Signals is the Fourier Transform. Fortunately, quality content about it is abundant. This site, [An Interactive Introduction to the Fourier Transform](http://www.jezzamon.com/fourier/), provides a great introduction for developing an intuition about it graphically, while "[But what is the Fourier Transform? A visual introduction. (YouTube, 3Blue1Brown)](https://www.youtube.com/watch?v=spUNpyF58BY)" goes a bit more into the math by the end.

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

[Tripple Pendulum on a Cart](https://www.youtube.com/watch?v=cyN-CRNrb3E&ab_channel=TobiasGl%C3%BCck) & [Inverted Pendulum on a Cart (Steve Brunton's Control Bootcamp on YouTube)](https://www.youtube.com/watch?v=qjhAAQexzLg&ab_channel=SteveBrunton)

## 8 - Probability/Stats

Why, where are these used, etc.

bring up music things, part failure rates, tollerences, etc.

### Basics

Statistical Independence

Conditional probability

Sub experiments & Tree diagrams

Law of total probability

Bayes Rule

Counting methods

combinations and permutations

with or without replacement

### Random Variables

Probability Mass Function (PMF)

Types of RV's

| Distribution Name | PMF  | Mean | Variance |
| ----------------- | ---- | ---- | -------- |
| Bernoulli         |      |      |          |
| Geometric         |      |      |          |
| Binomial          |      |      |          |
| Pascal            |      |      |          |
| Discrete Uniform  |      |      |          |
| Poisson           |      |      |          |

Cumulative Distribution Function (CDF)

functions of Random Variables

Families of continuous RVs

Conditional Probability Mass Fn & Conditional Expected Value

Gaussian Random Variables / Normal RVs (same thing)





<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I did it. <a href="https://t.co/eMEmUw0HSY">pic.twitter.com/eMEmUw0HSY</a></p>&mdash; Zillion Ross (@ZillionRoss) <a href="https://twitter.com/ZillionRoss/status/1331387290887680000?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

