# 10 - Probability/Stats

<script>
    document.getElementById("mathMenu").open = true;
</script>
{{< best >}}[Seeing Theory: A visual Introduction to probability and statistics](https://seeing-theory.brown.edu){{< /best >}}

Why, where are these used, etc.

bring up music things, part failure rates, tolerances, etc.

## Basics

For the following, I'll be using a die roll example, where the events are the total of two die. The *Sample Space* of this is 

{{< katex >}}S = \{2,3,4,5,6,7,8,9,10,11,12\}{{< /katex >}}

Note, that 1 isn't possible as the lowest is both die being '1'. 

Let's look at the probability of these outcomes,

| die2↓, die1→ | 1    | 2    | 3    | 4    | 5    | 6    |
| ------------ | ---- | ---- | ---- | ---- | ---- | ---- |
| **1**        | 2    | 3    | 4    | 5    | 6    | 7    |
| **2**        | 3    | 4    | 5    | 6    | 7    | 8    |
| **3**        | 4    | 5    | 6    | 7    | 8    | 9    |
| **4**        | 5    | 6    | 7    | 8    | 9    | 10   |
| **5**        | 6    | 7    | 8    | 9    | 10   | 11   |
| **6**        | 7    | 8    | 9    | 10   | 11   | 12   |

While there are 11 (2-12) unique outcomes, there are 36 possible outcomes from the two die, which are shown in the table above.

If you follow the diagonal you can see that there is only one way to get 2 or 12, two ways to get 3 or 11, and so on, this gives this table:

| Total of two die | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   |
| ---------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Probability      | 1/36 | 2/36 | 3/36 | 4/36 | 5/36 | 6/36 | 5/36 | 4/36 | 3/36 | 2/36 | 1/36 |

Now, let's say we want the probability that we roll an even total (2,4,6,8,10,12) we can just sum their respective probabilities, so {{< katex >}}\frac{1}{36}+\frac{3}{36}+\frac{5}{36}+\frac{5}{36}+\frac{3}{36}+\frac{1}{36} = \frac{18}{36} = \frac{1}{2}{{< /katex >}}

Let's go ahead and call this event A, so P[A] = 1/2

Similarly, we can define a new rule, Event B, such that the roll total is greater than 9, that comes out to be 1/6, so P[B]=1/6

### Statistical Independence

Event A and event B are statistically independent if and only if (*iff*) {{< katex >}} P[AB] = P[A]P[B]{{< /katex >}}

So, here, P[AB], that is the probability that a number is both greater than 9 *and* the number is even, that would be 1/9. The probability of each event multiplied together, {{< katex >}}P[A]P[B] = \frac{1}{2} * \frac{1}{6} = \frac{1}{54}{{< /katex >}} and, hopefully obviously, that's not the same as 1/9. Therefore, these events are *not* statistically independent. This makes logical sense, if you *know* that the total count of the two die is greater than 9, then you also know that there's a higher chance that the result is even - of 10,11, and 12, 2/3 of the totals are even. That is *dependence*.

If instead, we asked, what is the probability that 1 die is a 6 and the other a 2, both of those would have a probability of 1/6, that is {{< katex >}}P[A]=P[B]=\frac{1}{6} {{< /katex >}}, so now think, in the combined scenario, P[AB] would be the probability of die 1 being a 6, and die 2 being a 2, well, there are 36 different ways the die can land, and they're all unique (assuming the die are labeled somehow) so {{< katex >}}P[AB]=\frac{1}{36} = P[A]P[B] {{< /katex >}} - these events *are* statistically independent.

It's worth noting, the physical relationship is not always this clear. In a lot of situations, you'll just need to do the math and determine if {{< katex >}}P[AB] = P[A]P[B]{{< /katex >}} to check.

### Conditional Probability

Sometimes, knowing something about one event tells us something about the probability of another event. This can be expressed mathematically. When written down, it looks a bit gross, but it's actually really easy to understand:

{{< katex >}}P[A|B]P[B]=P[AB]=P[B|A]P[A]{{< /katex >}}

> This also provides another equation, just by moving things around: </br>{{< katex >}}P[A|B]=\frac{P[AB]}{P[B]} {{< /katex >}}

Here, P[A|B] means, the probability of event A happening given event B has already happened. 

{{< tip >}}NOTE: This means that P[A|B] ≠ P[B|A] (well, not usually). I like to think of it this way: Losing your keys may make you late for work, and being late for work may be from losing your keys; however, the probability that you're late for work GIVEN you've lost your keys may be higher or lower than the probability that you lost your keys GIVEN that you're late to work.{{< /tip >}}

So, looking at just one side of the above equation, we have {{< katex >}}P[A|B]P[B]=P[AB]{{< /katex >}}, this reads as "The Probability of A given that B has happened *times* the Probability of B is equal to the probability of an event that is in both A and B"

The other side of this equation, is just swapping the roles of A and B.

So, let's go off the above example and assume that you're *really* bad at showing up for work:

| Late For Work P[A] | Lost keys P[B] | Both P[AB] |
| ------------------ | -------------- | ---------- |
| .25                | .15            | .05        |

So shoving these values in to the above, we can determine that 

{{< katex display >}}

\begin{aligned}

P[A|B]\times P[B]&=P[AB]\\

P[A|B]\times .15&=.05\\

p[A|B] &= .33

\end{aligned} 

{{< /katex >}}

So, if you lose your keys, you'll be late to work 1/3rd of the time.

---

Alright, but what about a more complicated situation, one where you have to make multiple decisions! Let's 

| Box       | Box 1 | Box 2 |
| --------- | ----- | ----- |
| Red Ball  | 90    | 30    |
| Blue Ball | 10    | 70    |

Keeping the numbers simple here, let's say you want to know the probability that the ball you picked was from box1, given that you've already drawn a blue ball. This is where a Tree diagram comes in handy:

{{< columns >}}

![](/eng/treediagram1.svg)

<--->

This diagram first helps us expose an assumption in the problem: that the initial choice is a 50/50, split chance between which box we start with. So our first choice is really which box are we picking from. Both have a probability of 1/2. Only then do we pick our ball. This stacking of situations gives us the term 'sub experiment' where you perform each sub experiment in order: so our first sub experiment is picking the box, the second is picking the ball.

{{< /columns >}}

This lets us figure out the conditional probabilities super easily, as all that's needed is to look at the respective branch. For example, in the above, we can see P[Red|Box1] is 9/10. Another nice thing is by multiplying across the branches we can get the probability of the entire 'system' easily. Note the ',' instead of a '|' in the diagram below. This is saying that these have both happened, *not* implying conditional probability. That's why adding all of these up will add up to 1 (100%) as it's a look at all the possible events.

![](/eng/treediagram2.svg)

So now we know the probability of a blue ball overall: 0.4 (.05 + .35 )<a class="ptr">(1)</a>, the probability of a blue ball in box 1 (.1), what is the probability that we actually picked from box 1? We know P[Blue|Box1], but what is P[Box1|Blue] ? Well, naturally, there's a handy formula, known as "Bayes Rule" for this situation:

[TODO] [Why Bayes Rule is nicer with odds (YouTube, 3b1b)](https://www.youtube.com/watch?v=lG4VkPoG3ko)

{{< katex >}}P[A|B]=\frac{P[B|A]P[A]}{P[B]}{{< /katex >}}

Applying this, we can see that we get

{{< katex display>}}

\begin{aligned}

0.1&=\frac{P[B|A]0.4}{0.5}\\

(0.1/0.4)*.5&=P[B|A]\\

P[B|A]&=.125

\end{aligned}

{{< /katex >}}

so, there's a 12.5% chance that the box we picked the blue ball from was Box1.

Just to check ourselves, what's the chance that the box was Box2?

{{< katex display>}}

\begin{aligned}

0.7&=\frac{P[B|A]0.4}{0.5}\\

(0.7/0.4)*.5&=P[B|A]\\

P[B|A]&=.875

\end{aligned}

{{< /katex >}}

And this works out, adding to 100%.

There are a few more things to note regarding conditional probability:

* if P[A|B] is 0, the two events are **mutually exclusive**. This happens in dumb situations like "Given you've rolled a 2, what is the probability you rolled a 3" but also more complex events may mean that this is less obvious, so it's nice to be able to math it out.

---

[TODO]

Tree diagram with more branches, some 'incomplete branches'

fair/unfair coin:

/C1-H-H-H
\C2-H-H-H



Sub experiments & Tree diagrams





Counting methods

combinations and permutations

Looking at binary, arrangements of bits

with or without replacement

## Random Variables



<iframe width="100%" height="500" src="https://www.youtube.com/embed/mBCiKUzwdMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Probability Mass Function (PMF)

Types of RV's

[TODO] http://www.math.wm.edu/~leemis/chart/UDR/UDR.html

### Bernoulli

{{< columns2 >}}

{{< katex >}}

\begin{cases}
    q=1-p & \text{if }k=0 \\
    p & \text{if }k=1
 \end{cases}

{{< /katex >}}

<--->

Tossing a coin- if the coin is fair, p and q both equal 1/2. This is literally just a true/false question and the probability of a given answer.

{{< /columns2 >}}

### Geometric

{{< columns2 >}}

![Geometric_pmf](/eng/pmf/Geometric_pmf.svg)</br>{{< attribution >}}Original Image by Skbkekas - Own work, CC BY 3.0, [link](https://commons.wikimedia.org/w/index.php?curid=9578506){{< /attribution >}}

<--->

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Geometric_distribution)" >}}

In probability theory and statistics, the geometric distribution is either one of two discrete probability distributions:

* The probability distribution of the number X of Bernoulli trials needed to get one success, supported on the set { 1, 2, 3, ... }

* The probability distribution of the number Y = X − 1 of failures before the first success, supported on the set { 0, 1, 2, 3, ... }

Which of these one calls "the" geometric distribution is a matter of convention and convenience.

{{< /quote >}}

{{< /columns2 >}}

### Binomial

{{< columns2 >}}

![Binomial_distribution_pmf](/eng/pmf/Binomial_distribution_pmf.svg)</br>{{< attribution >}}Original Image by Tayste - Own work, Public Domain, [link](https://commons.wikimedia.org/w/index.php?curid=3646951){{< /attribution >}}

<--->

Sum of n, independent Bernoulli trials

{{< /columns2 >}}

### Pascal (Negative Binomial)

{{< columns2 >}}

<img src="/eng/pmf/pascal.png" alt=" " style="-webkit-filter: invert(100%); filter: invert(100%);">{{< attribution >}}From Introduction to Probability by [Hossein Pishro-Nik](https://ece.umass.edu/faculty/hossein-pishro-nik),  [CC BY-NC-ND 3.0](https://creativecommons.org/licenses/by-nc-nd/3.0/deed.en_US) ... technically I'm abusing the license a bit, but the 'derivative' here is just a CSS invert, you can open the image in a new tab to see the 'original'{{< /attribution >}}

<--->

Number of trials until k'th success. While *technically* the Pascal distribution is just a specific subset of Negative Binomial distributions, you'll probably only ever use the Pascal distribution. Be aware the more general case exists, though, as someday it may pop up.

{{< /columns2 >}}

### Discrete Uniform

{{< columns2 >}}

![Uniform_discrete_pmf_svg](/eng/pmf/Uniform_discrete_pmf_svg.svg)</br>{{< attribution >}}Original Image by IkamusumeFan - Own work, CC BY-SA 3.0, [link](https://commons.wikimedia.org/w/index.php?curid=27391798){{< /attribution >}}

<--->

It's a uniform distribution. Rolling a fair dice? Great, you have 1/6 chance to get a 1,2,3,4,5, or 6. So your 'a' and 'b' are 1 and 6, 'n' is the number of points, so b-a+1

{{< /columns2 >}}

### Poisson

{{< columns2 >}}

![Poisson_pmf](/eng/pmf/Poisson_pmf.svg)</br>{{< attribution >}}Original Image by Skbkekas - Own work, CC BY 3.0, [link](https://commons.wikimedia.org/w/index.php?curid=9447142){{< /attribution >}}

<--->

Probability of a number of events occurring in a fixed amount of time (or space, or whatever) provided the events happen with a constant average rate and the events are independent.

{{< /columns2 >}}

Cumulative Distribution Function (CDF)

functions of Random Variables

Families of continuous RVs

Conditional Probability Mass Fn & Conditional Expected Value

Gaussian Random Variables / Normal RVs (same thing)

[Cheatsheet](https://static1.squarespace.com/static/54bf3241e4b0f0d81bf7ff36/t/55e9494fe4b011aed10e48e5/1441352015658/probability_cheatsheet.pdf) and [another one](https://web.cs.elte.hu/~mesti/valszam/kepletek)

[TODO] [Gaussian Processes From Scratch (Peter Rlnts)](https://peterroelants.github.io/posts/gaussian-process-tutorial/)

[TODO] https://mc-stan.org/users/documentation/

[TODO] [The Fisher Information (YouTube - Mutual Information)](https://youtu.be/pneluWj-U-o)

## Chaos

<iframe width="100%" height="500" src="https://www.youtube.com/embed/fDek6cYijxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< columns >}}

<iframe width="100%" height="200" src="https://www.youtube.com/embed/idpOunnpKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/ovJcsL7vyrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

<ol hidden id="footnotes">
<li>Technically, this is the "Law Of Total Probability". Don't overthink this. It just means that by adding up all the conditional probalities of a certain event, you get the total probability. Here, we're adding up the probability of a blue ball given we picked box1 AND the probability of a blue ball given we picked box 2. It's sorta obvious this would give us the total probability of a blue ball. </li>
</ol>
