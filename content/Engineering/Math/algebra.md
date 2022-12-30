# 1 - Algebra

<script>
    document.getElementById("mathMenu").open = true;
</script>
{{< hint info>}}

This section is a tad bit misnamed, as instead of covering just Algebra I'll be covering most things you'd learn in a high school Algebra class along side it, plus probably a bit extra. 

{{< /hint >}}

## Number Systems

To get started, let's look at 'Number Systems'. Essentially, there are a variety of 'types' of numbers, rather than get all philosophical let's just dive in and I think you'll get the gist.

### ℕ - Natural Numbers

Natural Numbers are the dead basic set of numbers, 1, 2, 3, 4, 5, etc. note, this this doesn't include fractions, decimals, etc. or the number 0. **Whole Numbers** is the set of natural numbers *and* the number 0, so 0, 1, 2, 3...

### ℤ - Integers

Alright, Natural and Whole numbers are great and all, but what if we want to represent a deficit or debt? Negative numbers would definitely be nice- introducing *Integers*, this is just the set of Whole numbers *and* the their inverses, so .... -3, -2, -1, 0, 1, 2, 3 ...

{{< tip >}}
If you come from a programming background, do note that what programming languages call integers is ever so slightly different. Namely, mathematically integers include arbitrarily large numbers, but in programming most `int` types are bounded by how many bits they can store, for example, an 8 bit signed integer can only hold values ranging from -128 to 127.
{{< /tip >}}

### ℚ - Rational Numbers

Rational numbers are any numbers which can be written as an interger over another integer.

Of note, these can be written as *mixed numbers* too, that is {{< katex >}} \frac{4}{3} = 1\frac{1}{3} {{< /katex >}}, as {{< katex >}} \frac{3}{3} = 1 \text{ so the remaining } \frac{1}{3} {{< /katex >}} is just written next to it.

Note, that rational numbers do include numbers with an infinite repeating decimal, that is while {{< katex >}} \frac{1}{2} \text{ can be written as } .5 {{< /katex >}}, {{< katex >}} \frac{1}{3} \text{ has a repeating decimal, } \frac{1}{3} = .333333... = .\overline{33} {{< /katex >}}, where the line over the 3's implies that the 3's repeat infinitely. This *is* still a rational number.

###   - Irrational Numbers

Alright then, what's an irrational number?

Well, this is easier to answer with a few examples, the most well know of which is {{< katex >}} \pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499... {{< /katex >}}

... I think you get the idea.

Irrational numbers are numbers where the decimal doesn't repeat and as such can *not* be written as an integer over another integer. Because pi is a geometrically defined constant, it may be easier to look at something a bit more tangible.

The square root of a number is just the number that when multiplied with itself gives the number in question, so the square root of 4 is 2 because 2*2 is 4, the square root of 9 is 3 because 3\*3 is 9, etc.

But what about the square root of 2? well {{< katex >}} \sqrt{2} = 1.414213562373.... {{</ katex >}} you get the idea. Like with pi, it's a number that goes on forever, with no repeating pattern.

Later on you'll see other irrational constants like {{< katex >}} e = 2.718281828459.... {{</ katex >}} and The Golden Ratio {{< katex >}} \frac{1+\sqrt{5}}{2} = 1.618033988749.... {{</ katex >}}

### ℝ - Real Numbers

Finally, we're up to the normal number line, that is, we now have the set of all numbers on the number line, all the way from -∞ to +∞, (often written as ±∞) pick any number, with as many random numbers before or after the decimal point as you want, and that's a real number.

### {{< katex >}} i {{</ katex >}} - Imaginary Numbers

![WTF Gif](/eng/wtf.gif)

Yep, that's pretty much everyone's first reaction. What in the hell is an imaginary number?

Well, okay, remember before how I said a square root was just whatever number you need to multiply with itself to get the number, so {{< katex >}} \sqrt{4} = 2 {{</ katex >}}? This has a problem, a negative number times a negative number is always positive, so {{< katex >}} 3 * 3 = 9, -3 * 3 = -9, \text{ but } -3 * -3 = 9 {{</ katex >}} So, what would the square root of a negative number be? There are no two numbers that can multiply to give us -1, so, we made one up! {{< katex >}} \sqrt{-1} = i {{</ katex >}}

furthermore, {{< katex >}} \sqrt{-4} = 2i {{</ katex >}}

i being equal to {{< katex >}}\sqrt{-1}{{</ katex >}} has some interesting properties with exponents. Naturally exponentiation is the inverse of a root, that is {{< katex >}} 3^2 = 9, \text{ as } \sqrt{9} = 3 \text{ implies that } \sqrt{9}^2=9{{</ katex >}},

When taken to negative numbers, we can see this effect, so {{< katex >}} \sqrt{-1}^2=-1 \text{ implies } \sqrt{-1}^2 = i^2 = i* i = -1{{</ katex >}}

So what if we keep taking *i* to higher powers?

 {{< katex >}} i * i = i^2 = -1 \text{ and } i * i * i = i^3 = -i \text{ and } i * i * i *i = i^4 = 1{{</ katex >}} then this pattern repeats, so {{< katex >}} i^5 =  i^4 * i = 1 * i = i \text{ and } i^6 = i^4 * i^2 = -1 \text{ and so on,  } i^7 = -i,  i^8 = 1, i^9 = i {{</ katex >}} and so on.

{{< tip >}}

Note, you may also see 'j' used instead 'i' to represent imaginary numbers.

{{< /tip >}}

While your initial reaction may be "Who cares?", I assure you you'll see the value of this in a bit.

### ℂ - Complex Numbers

Complex numbers then, the end of this adventure for most sane people, are just Real numbers with imaginary numbers, written together, so this is numbers like {{< katex >}} 32 + 4i \text{ or } 420.69 - 2i{{</ katex >}}. This brings about something called the complex plane, as now if we want to plot these numbers we can no longer use a simple number line, but instead need an axis for each part, one for the Real (ℝ) part, and one for the imaginary part.

Here's a video to help you understand imaginary and complex numbers, albeit it does assume you've at least seen both a little bit before.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/5PcpBw5Hbwo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Hypercomplex numbers](https://en.wikipedia.org/wiki/Hypercomplex_number) are also a thing, this term includes [Quaternions](https://en.wikipedia.org/wiki/Quaternion) which are used in some very high level physics, but otherwise you'll most likely never work with these.

### Infinity

Diving into the weeds for a bit, let's poke the concept of Infinity:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/3s7h2MHQtxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="500" src="https://www.youtube.com/embed/OxGsU8oIWjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Notation

### +, -, *, ÷, mod

If you don't know that addition, subtraction, multiplication, and division are, I think you're in the wrong place...

That said, there are some things you may not be used to. For starters, multiplication can be written in a variety of ways. of course there's the classic {{< katex >}} 2 \times 2 = 4 {{</ katex >}} but you may also see {{< katex >}} 2 \cdot 2 = 4 {{</ katex >}} or {{< katex >}} 2 * 2 = 4 {{</ katex >}} or just {{< katex >}} 2(2) = 4 {{</ katex >}}, where parentheses with no operation in between imply multiplication.

Typically, the {{< katex >}} 2 \cdot 2 = 4 {{</ katex >}} and parentheses methods are used on paper, while the {{< katex >}} 2 * 2 = 4 {{</ katex >}} is used on computer screens as it's easy to type. {{< katex >}} 2 \times 2 = 4 {{</ katex >}} is generally not preferred as it can be confused with other operations you'll see later.

Something to keep in mind is that addition and multiplication are both commutative and associative, while subtraction and division are not. What this means is that while {{< katex >}} 2 + 3 = 3 + 2 \text{ but, } 2 - 3 \neq 3 - 2 {{</ katex >}} (The Commutative Property) similarly, {{< katex >}} 2 * 3 = 3 * 2 \text{ but, } 2 \div 3 \neq 3 \div 2 {{</ katex >}}

Furthermore, {{< katex >}} (2 + 3) + 4 = 3 + (2 + 4) \text{ but, } (2 - 3) - 4 \neq 2 - (3 - 4) {{</ katex >}} and {{< katex >}} (2 * 3) * 4 = 3 * (2 * 4) \text{ but, } (2 \div 3) \div 4 \neq 2 \div (3 \div 4) {{</ katex >}}, by the Associative Property. 

Finally, for multiplication, you should keep in mind how to do multiplication on grouped items

[TODO] $a*(x+y)$ and $(a+b)(x+y)$ - FOIL

For division, there's some terminology you should know. First of all, in {{< katex >}} \frac{a}{b} {{</ katex >}}, a is the *numerator* and b is the *denominator*. The *reciprocal* of {{< katex >}} \frac{a}{b} {{</ katex >}} is {{< katex >}} \frac{b}{a} {{</ katex >}}. This is actually pretty useful, for example, given {{< katex >}} \frac{a}{\frac{b}{c}} {{</ katex >}} you can write this as,  {{< katex >}} a * \frac{c}{b} {{</ katex >}}

Modulo is something you'll see in programming a lot, in programming it's usually represented with the percent sign.

Modulo is just the reminder after division, so 7%3 is 1, because 3 goes into 7 twice, with **1** left over.

### ^, √, !, log()

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
| Negative Exponent                  | {{< katex >}} a^{-x} = \frac{1}{a^x} {{</ katex >}}          |
| Zero Exponent **¡easy to forget!** | {{< katex >}}  a^0 = 1 {{</ katex >}}                        |

alright, so why do I say these are intuitive? Let's take the product rule for example. Let's look at {{< katex >}}  2^2 * 2^3 = 2^5 {{</ katex >}} this is true because {{< katex >}}  2^2 = 2*2 , 2^3 = 2 * 2 * 2 \text{, so multiplied together they're }(2 * 2) * (2 * 2 * 2) \text{ and as multiplication is associative that is } 2*2*2*2*2 =  2^5 {{</ katex >}}, generally, any of these rules can be figured out by just writing out examples like these, expanding the exponent out like this, and seeing what happens.

Alright, so now we can look at roots. The most common root you'll work with is the square root, which is what is implied when seeing a root symbol with no number in the crevice, though can be written explicitly as {{< katex >}} \sqrt[2]{n} {{</ katex >}}, though as you should've notice in the exponent rules other roots are possible, for example the cube root, which is {{< katex >}} \sqrt[3]{n} {{</ katex >}} is just whatever number you need to multiply with itself 3 times to get n, so for example {{< katex >}} \sqrt[3]{8} = 2 \text{ as } 2 * 2 * 2 = 8 {{</ katex >}}

As implied by the Fractional exponent rule, roots can be written as fractional exponents, that is {{< katex >}} \sqrt[2]{n} = n^{1/2} {{</ katex >}} often it's actually more convenient to enter this notation into a calculator or programming language anyway. It can even just be nice for working on paper as when writing something like {{< katex >}} \frac{1}{\sqrt{ \text{some really long equation here}}} {{</ katex >}} it can be easy to miss the top bar and forget it's there, compared to {{< katex >}} \frac{1}{( \text{some really long equation here})^{\frac{1}{2}}} {{</ katex >}} where the power sticks out more.

Next, there's factorial, written with the **!**, it just means to multiply the number with the number prior down to 1, so  {{< katex >}} 4! = 4 * 3 *2 * 1 {{</ katex >}}

Finally, let's look at Logarithms:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/cEvgcoyZvB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

####  Scientific Notation

Say you have a really big number like 2,340,000,000,000,000,000 or a really small number 0.000000567 in either case, writing out and counting the zeros is very cumbersome and easy to mess up. For this reason, scientific notation is common. In scientific notation, those numbers would be written as {{< katex >}} 2.34 \times 10^{18} {{</ katex >}} and {{< katex >}} 5.67 \times 10^{-7} {{</ katex >}} respectively. In each case, it's just a matter of moving the numbers so that there's only one digit before the decimal, then listing to what power of 10 you need to multiply this number by to get the original number- meaning the power will be the same as the number of 0's in the original number. You may see calculators show this with a big 'E' instead of writing the {{< katex >}} x.xxxx \times 10^{y} {{</ katex >}}, for example {{< katex >}} 5.67 \times 10^{-7} {{</ katex >}} is often shown as 5.67E-7

[TODO] beyond scientific notation for REALLY big numbers video... numberphile?

### =, <, >, ≤, ≥, ≠, <<, >>, ≈, ∝

The equal sign is pretty obvious, it just means that what ever is on each side is equal. The implications of this will lead us deeper into algebra though as we actually solve equations. There's some really obvious equalities, those that lack variables, so things like {{< katex >}} 1 + 2 = 3 {{</ katex >}}  or any of the equalities shown to this point really. Where equality gets a bit more interesting is when there's an unknown (variable, same thing). For example, {{< katex >}} 1 + x = 3 {{</ katex >}} here it's pretty obvious that x must be 2. We'll go into how to actually solve for these unknowns with non-obvious equations in a bit.

Less Than and Greater Than are similarly simple, they just state that one side has a bigger number than the other. The '>' or '<' symbols should always 'eat' the bigger number, that is the open side faces the bigger number, and the pointy side points to the smaller. {{< katex >}} 2 < 3 {{</ katex >}} and {{< katex >}} 4 > 3 {{</ katex >}} are examples of this. When variable are involved, it usually means there are multiple solutions. {{< katex >}} x > 3 {{</ katex >}} for example, is satisfied for any x greater than 3, right down to 3.0000000000...00001 all the way up to ∞. Similarly, there are 'or equal to' variants of less than and greater than, which are written with a bar underneath so {{< katex >}} x \geq 3 {{</ katex >}} is satisfied for x equal to 3 to ∞, so the 3 *is* included with the 'or equal to part.'

≠ means 'Not Equal To', and as the name implies it's just saying the two sides can't be equal so with {{< katex >}} x \neq 0 {{</ katex >}},  x can be any value, except for 0.

Next are MUCH greater and less than, written with a double less than or greater than sign, so {{< katex >}} \gg \text{ or } \ll {{</ katex >}} these are weird for people new to the idea, because they're sort of fluid and depend on the situation. Generally they're used to say "This number is so small that it doesn't affect the outcome" or "This number is large that it dominates the outcome"

Next up, is ≈ or "Approximately Equal To". This is for when you know your answer is off by some amount, due to imprecision in computation but it's still close enough for whatever you need to use it for. For example {{< katex >}} \pi \approx 3.1416 {{</ katex >}}

Finally, there's ∝ for 'proportional to'. This just means the two equations are only different by a multiplied constant. For example, say {{< katex >}} y = kx {{</ katex >}}, where k is a constant (some number that can't change) then {{< katex >}} y \propto x {{</ katex >}}. This is useful for when two equations are representing something massively different in scale, but we want to indicate that they have the same behavior.

### |x|, ∆, ⌊x⌋, ⌈x⌉, ±

The {{< katex >}} |x| {{</ katex >}} symbol means "Absolute Value", which, is really just a fancy way of saying "Make it positive.", so {{< katex >}} |3| = 3 {{</ katex >}}, no change, but {{< katex >}} |-3| = 3 {{</ katex >}}.

{{< tip >}}

Later on you'll also see something called the 'Determinate', this uses the same notation, two vertical bars, but is totally different. Thankfully it's not hard to tell apart, as the determinate is a matrix operation, meaning there will be a grid of numbers between the bars instead of a single expression.

{{< /tip >}}

Delta, {{< katex >}} \Delta {{</ katex >}}, is the change between two things, so from 10 to 20 degrees is a delta of 10 degrees. It is usually used with real units like this, giving us the difference between the final and inital values in an experiment. So really it's just Final Value - Initial Value. You may also see {{< katex >}} \Delta t {{</ katex >}} or {{< katex >}} \Delta x {{</ katex >}}, this would be change in time and change in position (usually) respectively. Note that Δ can be negative.

{{< katex >}} \left \lfloor{x}\right \rfloor {{</ katex >}} is the 'floor' of x. Similarly, {{< katex >}} \left \lceil{x}\right \rceil {{</ katex >}} is the 'ceiling' of x. Very basically, for floor this just means to drop everything after the decmial right off, so {{< katex >}} \left \lfloor{1.534}\right \rfloor = 1 {{</ katex >}}. For ceiling, it means to go up 1 and take the decimal off. {{< katex >}} \left \lceil{1.001}\right \rceil = 1{{</ katex >}} 

Finally, for lack of a better place to put it, let's look at ±. This is 'Plus or Minus' and it just means to do both, for example 3±2 gives us 1 and 5 as answers. Usually when this symbol is used, one of the two answers ends up being thrown out as invalid, but not always. 

### *f* (*x*), (*f* ∘ *g*)

[TODO]

### (*a*,*b*), [a, b]

[TODO]

### ∑, Π

[TODO]

https://www.rapidtables.com/math/symbols/Basic_Math_Symbols.html

## Order of Operations

{{< columns >}}

![Math Meme](/eng/mathmeme.jpg)

{{< attribution >}}

[Yes, I did make my own stupid math meme just for this. Fite me.]()

{{< /attribution >}}

<--->

We've all seen these incredibly stupid memes going around social media at one point (Reason №876 to quit FaceBook), but why do people argue over the answer? The real answer is because it's a really stupid problem. It has ambiguity baked into it, because of a lack of parentheses the solution is truly a bit ambiguous. That said, the 'accepted' correct answers will either be 2/3 or 6 because of PEMDAS, which is, in itself a crappy acronym, and sholud probably be written as (PE)(MD)(AS), let me explain.

{{< /columns >}}

PEMDAS stands for Parentheses, Exponents, Multiplication, Division, Addition, Subtraction, and is in general the correct order to do math operations. so given a mess like {{< katex >}} \frac{4*(1 + 2)^3}{2+1} + 1 {{</ katex >}} we can solve it in order. Here though, I have to point out the first failing in the PEMDAS acronym, division *with a bar* implies parentheses, as you'll have to do the 2+1 on the bottom before you can do the divison anyway. That said, let's look at this step by step

{{< katex display >}}

\frac{4*(1 + 2)^3}{2+1} + 1 = \frac{4*(3)^3}{2+1}  + 1= \frac{4*(3)^3}{3} + 1 = \frac{4*27}{3} + 1= \frac{108}{3} +1  = 36+1 = 37

{{< /katex >}}

In step 1 and 2 I did perenthes in top and the implied perenthes on the bottom, then in step 3 I did the exponent, followed by the multipliation and divison in steps 4 and 5, finally in the last step I did the +1 that was hanging off the entire time.

{{< hint info>}}

The P for Perenthes in PEMDAS can mean really any grouping symbol, so brackets [] or braces {}, whatever.

{{< /hint >}}

So, what's the problem with the math equation in the start and why do people disagree? Well, Divison and Multiplication don't have to be done in that order, same for addition and substraction, instead they should be done all together, but going from left to right, so {{< katex >}} 1 + 2 + 3 - 4 + 1 - 2 {{</ katex >}} for example can be done in order left to right giving us 1, **not** doing this: {{< katex >}} (1 + 2 + 3) - (4 + 1) - 2 {{</ katex >}} which gives -1. Just to be crystal clear, **1 not -1** is correct here. So, applying this to the above social media meme, it's the same problem but with multiplication, implied with the 3(3) after doing the addition, and the divison. Some people interpret PEMDAS literally, meaning multiplication is done before division *always*. These people are wrong. So, with the meme the problem looks like this:

{{< katex display >}}

\frac{6}{3(1+2)} = \frac{6}{3(3)} = \frac{6}{9} = \frac{2}{3}

{{< /katex >}}

But see what I did there? I wrote the fraction as a bar, not as **÷**, and here, because this problem is written crappily, that actually changes the solution! And I know what you're thinking- Division is divison, how could that matter?? And you're right, it is. It matters because the bar implies that order, but if I go back to using a division sign look what happens:

{{< katex display >}}

6\div3(1+2) = 6\div3(3) = 2(3) = 6​

{{< /katex >}}

And there's the problem. Now, you're probably thinking **"What fucking dipshit let math be ambiguous?"** and the answer is really that this problem is just stupid. In any real problem the ambiguity here should be fixed by whoever is writing it in the first place, and since other than in textbooks math doesn't just appear from thin air, the true order of the operations should be specified clearly with parentheses, either as:

{{< katex display >}}

6\div(3(1+2))) \text{   -OR-   } (6\div3)(1+2)) \text{   -OR-   } \frac{6}{3(1+2)}​

{{< /katex >}}

where in the last option the bar implies the parentheses.

## Simplification

[TODO] redo with https://github.com/airladon/FigureOne

Before we can get to doing useful things with these operations, it helps to be proficient at simplifying an equation. For example say we have:

{{< katex display>}}
    3x^2+3+(2-x)(4-x)+2=12+(3+(x*2))+2
{{< /katex >}}
Before we ever solve for x, we'll want to turn this into something much easier to work with. When doing this, we need to make sure to keep the equality the same, that is if we had {{< katex >}}3+x=4{{< /katex >}} we need to not accidentally change it into {{< katex >}}3+x=5{{< /katex >}}, changing the answer.

This generally means that we can only either do basic operations to get an equivalent value or do the same operation to both sides. Ironically, often simplification actually requires expansion first, that is doing math like the {{< katex >}}(2-x)(4-x){{< /katex >}} to get {{< katex >}}8-2x-4x+x^2{{< /katex >}} which can then be reduced back down to {{< katex >}}x^2-6x+8{{< /katex >}}.

For the example equation, the most obvious thing to start with is the +2 that's common to both sides. This is our first example of using the same operation on both sides- the idea being as long as we apply the same operation on both sides of the equality the meaning won't change. That is, the solution to {{< katex >}}x+3=2{{< /katex >}} is the same as the solution to {{< katex >}}x+3+2=2+2{{< /katex >}}, but we can take advantage of this to get rid of terms too. For example, with {{< katex >}}x+3=2{{< /katex >}} we can subtract 3 from both sides to get {{< katex >}}x=-1{{< /katex >}} (seeing how this might lead to solving the equation?) In our example equation, both end in a +2 so we can "cancel this out" by subtracting 2 from both sides.

{{< katex display >}}

\begin{aligned}

3x^2+3+(2-x)(4-x)+2&=12+(3+(x*2))+2​ \\

3x^2+3+(2-x)(4-x)&=12+(3+(x*2))​

\end{aligned} 

{{< /katex >}}

but because we did the same operation to both sides of the equality, the answer didn't change

{{< hint warning >}}

☠☠☠ The following is an easy place to screw up ☠☠☠

{{< /hint >}}

Keep in mind, whatever you do you need to do to both sides and *the entirety* of both sides, not just one term. For example, If you were to only divide one term on each side by 2 this is **not** keeping equivalence. You *can* divide both sides in full by two, sure, but you can't just pick one term from each side and selectively divide that *term* by two. That is {{< katex >}}4+2x=8{{< /katex >}} can become {{< katex >}}2-x=4{{< /katex >}} but *not* {{< katex >}}\frac{4}{2}+2x=\frac{8}{2}{{< /katex >}} which is {{< katex >}}2+2x=4{{< /katex >}}. You can see this as the solution to {{< katex >}}4+2x=8{{< /katex >}} is {{< katex >}}x=2{{< /katex >}} but the solution to {{< katex >}}2+2x=4{{< /katex >}} is {{< katex >}}x=1{{< /katex >}}. So, just be sure if you do some arbitrary operation you do it to **both sides** and the entirety of the side, not just one term. 



Back to our big equation: next, let's FOIL out that {{< katex >}}(2-x)(4-x){{< /katex >}}...

{{< katex display >}}

\begin{aligned}

3x^2+3+(8-2x-4x+x^2)&=12+(3+(x*2))​\\

3x^2+3+(x^2-6x+8)&=12+(3+(x*2))​

\end{aligned} 

{{< /katex >}}

with that done, we can get rid of some of those parentheses

{{< katex display >}}3x^2+3+x^2-6x+8=12+3+2x{{< /katex >}}

then, we can combine like terms...

{{< katex display >}}4x^2-6x+11=15+2x{{< /katex >}}

and subtract {{< katex >}}2x{{< /katex >}} from both sides

{{< katex display >}}

\begin{aligned}

4x^2-6x-2x+11&=15+2x-2x​\\

4x^2-8x+11&=15​

\end{aligned} 

{{< /katex >}}

then subtract 15 from both sides

{{< katex display >}}

\begin{aligned}

 4x^2-8x+11-15&=15-15​\\

 4x^2-8x-4&=0​

\end{aligned} 

{{< /katex >}}

And now we're fully simplified. You **can't** combine the {{< katex >}}x^2{{< /katex >}} and x terms.

This general process applies to any equation. It's like a little puzzle, you just want to take the complex equation you have, do the same thing to both sides or do the math that's internal to one side. Sometimes it's more complicated to do this. For example, you might need to square root both sides to "cancel out" both sides being squared, for example {{< katex >}}x^2=25{{< /katex >}} to {{< katex >}}\sqrt{x^2} = \sqrt{25}{{< /katex >}} to {{< katex >}}x=5{{< /katex >}}, but here this only works because we're square rooting everything on both sides.

## Plotting functions

[TODO]

['Plotting' on Algorithm Archive](https://www.algorithm-archive.org/contents/plotting/plotting.html)



## Looking at some equations

### Linear

[TODO] replaces these desmos graphs with something custom using https://jsxgraph.uni-bayreuth.de/wp/index.html

it'll be uglier, but I don't like loading something this large, and jsxgraph will be more flexible anyway. Since I literally never write js this is proving to be a bit rough. Working on getting something that will show the slope and intercept values as two arbitrary points on the line are moved on a graph.

```js
var b = JXG.JSXGraph.initBoard('jxgbox', { 
    boundingbox: [-5, 5, 5, -5], axis:true
});
var p1 = b.create('point',[-1,1], {name:'A',size:4});
var p2 = b.create('point',[2,-1], {name:'B',size:4});
var li = b.create('line',["A","B"], {strokeColor:'#00ff00',strokeWidth:2});
var p3 = b.create('point',[p1.X, p2.Y], {name:'S',size:4});
var li2 = b.create('line',["A","S"], {strokeColor:'#00ff00',strokeWidth:2});
var i = -1;
setInterval(function(){p3.moveTo(p1.X,p2.Y); i++; },1000);
```

 is what I have so far, but it appears the .X and .Y getters are not working as I expect. This should give me an 'S' point that I can then line segment to A and B to get the right angle 'stair' step slope. 

<iframe src="https://www.desmos.com/calculator/srmm3mfqcj" width="100%" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

### Polynomials

#### Parabolas

<iframe src="https://www.desmos.com/calculator/teki6din5m" width="100%" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

### Systems of Equations

Nobody should do these by hand unless they're dead simple



Imaginary numbers, systems of equations

# 1¼ - Accuracy and Precision

For lack of a better place to put it and not wanting to wait until the much latter section on probability, I'd like to briefly mention the difference between Accuracy and Precision. Typically, this is represented as 

# 1½ - Coordinate Systems

So, up until now you've only seen the XY 'Cartesian' coordinate system, but I did gloss over some details. For starters, when refering to points in the Cartesian plane, you may hear the term quadrants, these are the 4 infinite corners of the plane, coming out from the '+' shape at (0,0). Slightly counter intuitively, they're numbered from starting in the top right and going *counter* clockwise. 

[TODO] picture here

The Cartesian coordinate system can be expanded into high dimensions as well, but you're unlike to work with more than 3, to form space defined with XYZ

[TODO] picture here

There are a few other coordinate systems you'll likely come across though: Polar, Cylindrical, and Spherical.

[TODO] all 3 of those 



# 1¾ - Primes & Factors

Alright, so maybe not something you'll use everday, but you still should know the basics of primes, especially if you want to understand [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). So, what's a prime?

A prime is a number where the only two whole numbers that you can multiply to get to that number are 1 and itself.

2? Prime. 1*2 is the only option.

3? Prime. 1*3 is the only option.

4? Not Prime. 2\*2 = 4, as does 1*4

103801? Prime. only two numbers that can multiplied together to get it are 1 and 103801. 

I think you get the gist. One of the neat applications of primes is that multiplying two prime numbers together makes for a number that's not quite prime, but whose only other factors are two numbers that you multiplied together, so say we take 103801 * 7 to get 726607, the only two whole numbers other than 1 and itself that can be multiplied to get 726607 are 103801 and 7.

There are also 'antiprimes' (or 'highly composite numbers'), from Wikipedia:

> ... an **antiprime number**, is a [positive](https://en.wikipedia.org/wiki/Positive_number) [integer](https://en.wikipedia.org/wiki/Integer) with more [divisors](https://en.wikipedia.org/wiki/Divisor) than any smaller positive integer has

so, technically 1, 2, 4, and 6 are all antiprime. But where it gets interesting is with larger numbers. For example, 360 is anti prime as you get get to it with {{< katex >}} 2*2*2*2*3*3*5​{{< /katex >}}, which is 7 primes multiplied together, more than it takes to get to any number prior. These numbers are really easy to work with because of this, and it makes it really convenient for the number of degrees in a circle as it can be divided so easily.

# 1⅘ - Number Bases

[Number Bases Strech the Mind (Hackaday)](https://hackaday.com/2021/01/01/number-bases-stretch-the-mind/)

