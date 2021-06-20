# 10 - Probability/Stats

<script>
    document.getElementById("mathMenu").open = true;
</script>

Why, where are these used, etc.

bring up music things, part failure rates, tollerences, etc.

### Basics

For the following I'll be using a dice roll example, where the events are the total of two die. The *Sample Space* of this is 

$ S = \{2,3,4,5,6,7,8,9,10,11,12\}$

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

Now, let's say we want the probability that we roll an even number (2,4,6,8,10,12) we can just sum their respective probabilities, so $\frac{1}{36}+\frac{3}{36}+\frac{5}{36}+\frac{5}{36}+\frac{3}{36}+\frac{1}{36} = \frac{18}{36} = \frac{1}{2}$

Lets go ahead and call this event A, so P[A] = 1/2

Similarly, we can define a new rule, Event B, such that the roll total is greater than 9, that comes out to be 1/6, so P[B]=1/6

Statistical Independence

Event A and event B are statistically independent if and only if (*iff*) 

$P[AB] = P[A]P[B]$

Conditional probability

$ P[A|B]P[B]=P[AB]=P[B|A]P[A]$

Sub experiments & Tree diagrams

Law of total probability

Bayes Rule

Counting methods

combinations and permutations

with or without replacement

### Random Variables

<iframe width="100%" height="500" src="https://www.youtube.com/embed/mBCiKUzwdMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Probability Mass Function (PMF)

Types of RV's

[TODO] http://www.math.wm.edu/~leemis/chart/UDR/UDR.html

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

[TODO] https://mc-stan.org/users/documentation/

[TODO] [The Fisher Information (YouTube - Mutual Information)](https://youtu.be/pneluWj-U-o)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I did it. <a href="https://t.co/eMEmUw0HSY">pic.twitter.com/eMEmUw0HSY</a></p>&mdash; Zillion Ross (@ZillionRoss) <a href="https://twitter.com/ZillionRoss/status/1331387290887680000?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Chaos

<iframe width="100%" height="500" src="https://www.youtube.com/embed/fDek6cYijxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< columns >}}

<iframe width="100%" height="200" src="https://www.youtube.com/embed/idpOunnpKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<--->

<iframe width="100%" height="200" src="https://www.youtube.com/embed/ovJcsL7vyrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

