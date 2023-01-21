---
title: "Basic Phil"
slug: "Basic Phil"
---
<div style="text-align:center;">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="450px" height="120px" xml:space="preserve">
  <defs>
    <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
      <path fill="#000" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
    </pattern>
    <text id="text" transform="translate(2,116)" font-family="'Cabin Condensed'" font-size="100">OPINION</text>
    <mask id="text-mask">
      <use x="0" y="0" xlink:href="#text" opacity="1" fill="#ffffff"/>
    </mask>
    <g id="eff">
      <use x="0" y="0" xlink:href="#text" fill="#a2a3a5"/>
  <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" x="-300" y="50" width="1200" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-300" to="0" repeatCount="indefinite" dur="2s"/>
  </rect>
   <rect class="water-fill" mask="url(#text-mask)" fill="#ff9999" y="45" width="1600" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-400" to="0" repeatCount="indefinite" dur="3s"/>
  </rect>
  <rect class="water-fill" mask="url(#text-mask)" fill="#ff3333" y="55" width="800" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-200" to="0" repeatCount="indefinite" dur="1.4s"/>
  </rect>
      <rect class="water-fill" mask="url(#text-mask)" fill="#ff7777" y="55" width="2000" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-500" to="0" repeatCount="indefinite" dur="2.8s"/>
  </rect>
    </g>
  </defs>
	  <use xlink:href="#eff" opacity="0.9" style="mix-blend-mode:color-burn"/>
</svg>
</div>

{{< tip >}}

Before anything else, I think it's necessary to point out this is **opinionated** guides. Philosophy involves looking at the world around us and asking ourselves 'why', then making arguments for how things should be different and what moral frameworks work best to come to conclusions that optimize for something like happiness or 'goodness' in the world. Given that both morals and 'goodness' are not absolutes, the best way for me to write this guide and actually be of service to you as a reader is to provide my **opinion** and talk about why I believe what believe both from a researched 'here are the facts' sense and from a 'here is the moral framework that, with these facts, brought me to this conclusion' sense. You don't have to agree with my opinions, I'd rather you didn't actually, as agreement means talking to you doesn't expose me to new ideas.<a class="ptr">(1)</a> Instead it's my hope that reading my opinion, seeing how I present arguments, and seeing the research that goes into them will show you how to think about how to apply facts to moral frameworks.

{{< /tip >}}

{{< tip >}}

I also want to toss up a **content warning**, for, like, everything. We're gonna get messy. This means assisted suicide, abortion, religion, gun rights, war, labor rights, etc. Just look at the chapters on the left and it reads as a shopping list of topics not to bring up at a family gathering.

{{< /tip >}}

{{< tip >}}

Finally, I will out right dismiss any argument or idea founded in religion. This is not because I can't refute it. This is because I find it to be a complete and total waste of time. If you have a bit more than 3 hours to kill watch [Philosophical Failures of Christian Apologetics](https://www.youtube.com/watch?v=lroKN5gdm08&list=PL3IOkNR8_9gpQa5teO1xQANB-3MiY17uk), and I think you'll understand why I won't bother.

{{< /tip >}}

# Basic Philosophy

First, let's start really simple- what **is** philosophy. Well, for one, [Basically all pages on Wikipedia link back to it](https://en.wikipedia.org/wiki/Wikipedia:Getting_to_Philosophy), so it's obviously pretty fundamental. But, why would that be?

Here's the head of the Wikipedia entry on Philosophy:

> **Philosophy** (from Greek: φιλοσοφία, *philosophia*, 'love of wisdom') is the study of general and fundamental questions about existence, knowledge, values, reason, mind, and language

Alright, so it's the study of knowledge? Wouldn't that make it pretty much the study of everything? Well, yeah. Pretty much. Before each branch of the sciences had enough of a foundation in it's own right to, well, branch off it was just called 'Natural Philosophy'. You can see this in textbooks written as late as the 19th century.

In academic circles, that pretty much means Philosophy departments at universities today focus on what's left when they are not teaching the history of Philosophy: the questions for which there are no concrete or provable answers. This can often be incredibly frustrating.

At its best, Philosophy as a modern study really gives us is a framework to approach and talk about tough problems. To make it useful, most of this section will therefore be spent on Moral Philosophy, aka *ethics*.

This is because Natural Philosophy, as noted, is the sciences. They became their own separate departments mostly because it was easier, knowledge swelled to fit entire careers, and more importantly, they took as given certain answers to those unanswerable questions.

For example:

* Materialist physics: if we can't specifically measure a phenomenon, it doesn't exist.
* Relativist aesthetics: it doesn't matter how something looks as long as it works. There is no "objectively ugly".
* Pragmatic positivist metaphysics: science can discover all knowledge, and no authority can say "do not investigate this"

These answers would have upset philosophers and theologians for centuries prior to the enlightenment. In fact, they were still debated seriously within western academies of Europe until the late 19th century, and remnants of alternatives existed up to the 1950s.

Honestly, I find people who try to talk philosophy either are just trying to look smart, or are trying to convince you of something. The latter is really suspicious if they are into debating the existence of (a) God(s). <a class="ptr">(2)</a><a class="ptr">(3)</a>

If you want to know why, let's start with a different branch of philosophy: Epistemology.

<ol hidden id="footnotes">
	<li>To be transparent and tell you my biases up front, I'm WEIRD, that is I'm from a Western, Eduated, Industrialized, Rich, & Democratic Country- The US. I'm also white, bisexual, liberal with a tinge of libertarian, and Gen Z.</li>
    <li>Yes, I know I'm throwing shade here. This isn't to say Metaphysical and Natural Philosophy are useless. I really enjoy watching videos on YouTube of people pointing out the many, many logical issues that aries when you try to make a Omnipotent (all-powerfull), Onmiscincent (all-knowing), Onmi-present (in all places), Omnibenevolent (all good) being. My favorite argument being the 'If God is all knowing does he know what it's like to feel lust, if he does how is he all good?' or 'If god is all powerful can he microwave a burrito so hot that he can not eat it?' ... you get the idea. This is turning into a massive tangent. Here, have a <a href="https://www.youtube.com/watch?v=gNQkSJXUzjo">link (The Problem of Omnipotence - YouTube)</a></li>
<li> Okay, I also have to concede, there's a lot of really thought provoking stuff in the relm of metaphysics. I espically love  <a href="https://www.youtube.com/c/Exurb1a/videos"> Exurb1a's YouTube Channel</a> as well as a lot of video games, short stories, and other works that dabble in this. For example, I recently read <a href="https://www.sbnation.com/a/17776-football/">17776 Football</a>, and I keep thinking about it. That's what makes metaphysics cool. It keeps you thinking and can inspire you in interesting ways - espically for being creative with writing, art, or music. I just don't see direct value in going in to it in this guide. Please do actually check out some of the amazing content on the subject though!</li>
</ol>

## Epistemology, or Why No One Wins Arguments On The Internet

The classical division by the ancient Greeks created a branch of philosophy known as *epistemology*. This branch is focused on the question of what constitutes knowledge and how we gain it. In other words, *how do we know* what we know?

There have been many answers to this question in western thought, but the dominant answer is a rubric created by Plato: the justified true belief. It is a simple three part test: is it an explainable and actionable belief, is that belief justified by evidence, and is it true (in a logical or absolute sense)? If so, that's knowledge. A true belief without justification is vacuous logic, not knowledge. A justified belief that is untrue is pure sophistry or an error, not knowledge. An observation about the world without any belief about it is a fact, not knowledge.

This rubric has held sway for over two millennia, and remains at the foundation of a lot of western culture. It is the way lots of people think they know things, and is hiding underneath popular philosophies and ideologies. It is also used in theology and religious studies extensively.

Modern science, on the other hand, completely overturns this. It uses the rubric of Scientific Rationalism, which has its own epistemology most eloquently written about by 20th century philosopher <a href="https://plato.stanford.edu/entries/popper">Karl Popper</a>.

This is a relatively recent development, and was a cornerstone of the Enlightenment which began a couple hundred years ago. It was the time when alchemy transformed into chemistry. This change wasn't because the alchemists in centuries past were stupid or had significantly worse tools. For example, the ancient Greeks demonstrated citrus fruit could cure scurvy using a series of blinded medical experiments that would be worthy to publish in medical journals today.

Rather, such examples of modern science were relatively rare because their epistemology led Scholars to believe there was more than one route to knowledge. While Sir Isaac Newton is remembered today for calculus, his work on color and light refraction, and setting the value of the British Pound Sterling for several hundred years (if you're a history nerd), that is not what he spent most of his time on.

He spent most of his time on occult "research" that we today do not consider science at all. He tried to make the philosopher's stone using a symbolic reading of ancient Greek myths as instructions. He created a chronology of the Bible, and calculated the events of Revelation would occur in the year 2060. (Fingers crossed, I'll live to see if he was right!)

These methods of searching for "lost knowledge" in old parchment had gained the Europeans great knowledge after the Dark Ages. They rediscovered lost mathematics, history, and medical knowledge. However, applying these methods to the sciences in general was extremely unreliable.

Sir Isaac Newton was trying to be a good scholar, and lived just a bit too early to realize that most of his work was useless. It was just the beginning of the Enlightenment, and it would be another several decades until the shift in epistemology got going.

That shift was not only a toward rationalism and materialism (away from Newton's interests), but also shifting the basis of knowledge to the *reliability* of the methods of investigation. Very unreliable methods that created lots of false results -- like eyewitness accounts, studying folk traditions, reading Greek poems for secret meanings, and testing medicines without a placebo -- should be thrown out. More reliable methods -- like specific, quantitative experiments that can be repeated, especially in different places or under different conditions -- should be refined.

Once that happened, scholars began not only growing their body of knowledge much more quickly, but deleting incorrect things and declaring them *psudeoscience*. This process continued from the 18th century all the way to the early 20th.

A recent example is the Ether Theory of light. It is taught today as a historical footnote in science classes (if at all), but it was a very serious, if speculative, scientific theory that survived in scientific papers until the 1920s. The "ether" was a fluid in space through which light travelled, and its "ripples" (created by traditional convention as the Earth moved through space) were detected in a famous experiment by Albert Michelson (the first to accurately measure the speed of light) and Edward Morley (who made research advances in the study of Oxygen) using a very clever technique.

This remained the dominant theory of electromagnetism (of which one form is light) until a newcomer named Albert Einstein brought the physics community his unified theory of light, time, and space known as General Relativity. It received a lot of skepticism at first, being difficult to test and written in advanced niche math indecipherable to most Professors of Orbital Mechanics. It even seemed at first glance to contradict Newton's laws of motion.

But at the same time, some scholars believed it could solve previously unsolved problems. Two famous ones were the perihelion of mercury (which had a continuous tracking error on the calculations in Newtonian mechanics) and a twin binary star system whose identical twins emitted different wavelengths of light.

And it turned out that it does match Newton's laws of motion under human lab conditions. Newton was a good first approximation that breaks down when you are talking about solar systems and galaxies. But just as important was repeating ether experiments, which had "detected" it as recently as 1905. It took a lot of investigation, analysis, and just plain persuasion to build consensus against it as a figment of unreliable instruments.

Many professors at the time, unable to adjust to General Relativity, retired and died believers in classical mechanics. Still today, many physics cranks on the internet are bent on proving Einstein was wrong, and think that the Ether Theory was elegant and underappreciated.

They focus on what they can understand and experiments they can come up with, rather than considering the reliability of their methods or the current (very large) set of facts that only relativity can explain, from the cosmic microwave background to de-syncing atomic clocks on Earth. In other words, compared to science, they are using a different epistemology.

In conclusion, think back to any arguments on the internet, but especially political ones. At some point, you will see this:

> Person A: you can't argue with facts! Here, look at this study/statistic!
>
> Person B: that doesn't mean anything! That's cherry picked!

This is not a disagreement about facts. Person A isn't being accused of lying or making something up. Instead, Person B is arguing that Person A's fact does not matter in their argument about the truth. It's really about *how Person A knows* what they know, and *that* is invalid to Person B.

That mismatch in epistemology leaves no room for any genuine debate. It is why no one ever won an argument on the internet with facts. The smart among us don't bother to try.

# Ethics

With that out of the way let's stick to (mostly) moral philosophy (often just called Ethics) then. What does that entail?

> **Ethics** or **moral philosophy** is a branch of philosophy that "involves systematizing, defending, and recommending concepts of right and wrong behavior".

{{< attribution >}}

https://en.wikipedia.org/wiki/Ethics

{{< /attribution >}}

To start with, most ethics arguments depend on an ethical framework, this is the set of ideals/rules/principals that establish how to make decisions. To get started, let's look at some of these ethical frameworks:

## Utilitarianism

[Utilitarianism](https://en.wikipedia.org/wiki/Utilitarianism) is the most dead simple philosophical theory. Basically, do whatever you can that brings the most happiness to the world (or, if all options are a negative, do the the least-worst option).

The most common example for which utilitarianism is applied is the trolley problem:

>  There is a runaway trolley barrelling down the railway tracks. Ahead, on the tracks, there are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolley will switch to a different set of tracks. However, you notice that there is one person on the side track. You have two options:
>
> 1. Do nothing and allow the trolley to kill the five people on the main track.
> 2. Pull the lever, diverting the trolley onto the side track where it will kill one person.
>
> Which is the more ethical option? Or, more simply: What is the right thing to do?

{{< attribution >}}

https://en.wikipedia.org/wiki/Trolley_problem

{{< /attribution >}}

The basic idea being, that, assuming there's not some special circumstances or that you simply don't have a way to know those circumstances, the moral option is to pull the switch, because it saves the most lives.

Utilitarianism is a neat idea that, in my opinion, fails almost immediately for three reasons:

### Moral Calculus

> The **felicific calculus** is an algorithm formulated by utilitarian philosopher Jeremy Bentham (1747–1832) for calculating the degree or amount of pleasure that a specific action is likely to cause. Bentham, an ethical hedonist, believed the moral rightness or wrongness of an action to be a function of the amount of pleasure or pain that it produced.

{{< attribution >}}

https://en.wikipedia.org/wiki/Felicific_calculus

{{< /attribution >}}

The Wikipedia article goes on to explain this algorithm and the things that should be taken into account. 

To cut to the chase, the problem is you need to take into consideration an absolutely crazy amount factors and it's effectively impossible to confidently know that what you're doing will *actually* bring about the most happiness.

For example, the Trolley problem makes a hell of a lot of assumptions. Not the least of which is ignoring the long term survivor guilt the more-populated side and conductor will feel. I'm being pedantic, of course, but still.

### Trade offs

Often we have to pick between good things that bring happiness. Unless you have a way to actually quantify happiness, which notably varies by activity for each person, how do you optimize. Further, how could you know how *strong* your feelings of happiness are to others? Do you *feel* more or less than others such that you should prioritize your happiness or others happiness in different ways? 

Like above, this boils down to a knowledge problem

### Justifying things it probably shouldn't

Say 90% of the population would be *much* happier if all of *insert religion here* suddenly died.

Or, the argument about Baby Farming:

> A critic of utilitarianism, in *Innocence and Consequentialism* (1996), [Jacqueline Laing](https://en.wikipedia.org/wiki/Jacqueline_Laing) argues that utilitarianism has insufficient conceptual apparatus to comprehend the very idea of innocence, a feature central to any comprehensive ethical theory. In particular, [Peter Singer](https://en.wikipedia.org/wiki/Peter_Singer) on her view, cannot without contradicting himself reject [baby farming](https://en.wikipedia.org/wiki/Baby_farming) (a thought experiment that involves mass-producing deliberately brain-damaged children for live birth for the greater good of organ harvesting) and at the same time hold on to his "personism" a term coined by [Jenny Teichman](https://en.wikipedia.org/wiki/Jenny_Teichman) to describe his fluctuating (and Laing says, irrational and discriminatory) theory of human moral value. His explanation that baby farming undermines attitudes of care and concern for the very young, can be applied to babies and the unborn (both 'non-persons' who may be killed, on his view) and contradicts positions that he adopts elsewhere in his work.

{{< attribution >}}

https://en.wikipedia.org/wiki/Utilitarianism#Baby_farming

{{< /attribution >}}

So, uh, depending on how you look at it, it might justify genocide. Maybe not the best ¯\\_(ツ)_/¯

---

note, there are a lot of other arguments against Utilitarianism, but I think a lot of them misrepresent the idea, such as the one about Average vs. Instantaneous Happiness - like no shit optimizing for instantaneous happiness is bad 

## Consequentialism

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Consequentialism)" >}}

Consequentialism is a class of normative, teleological ethical theories that holds that the consequences of one's conduct are the ultimate basis for judgment about the rightness or wrongness of that conduct. Thus, from a consequentialist standpoint, a morally right act (or omission from acting) is one that will produce a good outcome. Consequentialism, along with eudaimonism, falls under the broader category of teleological ethics, a group of views which claim that the moral value of any act consists in its tendency to produce things of intrinsic value.[1] 

{{< /quote >}}

Which, uh, is a good thought but also - like Utilitarianism, which is itself just a specific branch of consequentialism - requries the practationer to either know the future or do moral calculus for every decesion, which is impractical.

## Rapid Fire Ideas that suck

All quote blocks from https://en.wikipedia.org/wiki/Normative_ethics

### Egoism

> [Egoism](https://en.wikipedia.org/wiki/Ethical_egoism) [is] the belief that the moral person is the self-interested person, holds that an action is right if it maximizes *good for the self*.

I shall kill my enemies and dispose of the bodies so that no one ever knows... 

### Intellectualism

> [Intellectualism](https://en.wikipedia.org/wiki/Intellectualism) dictates that the best action is the one that best fosters and promotes *[knowledge](https://en.wikipedia.org/wiki/Knowledge)*.

Yeah, you don't mind if I experiment on you, do you?

### Role Ethics

> [Role ethics](https://en.wikipedia.org/wiki/Role_ethics) is based on the concept of family roles.

The Daddy makes the money, the Mommy raises the kids, and the kids learn to worship God! Just as it should be!

ಠ_ಠ

## Kantianism

Skipping to the juicy bit:

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Kantianism)" >}}

The formulations of the categorical imperative:

1. Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.
2. Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end.
3. Therefore, every rational being must so act as if he were, through his maxim, always a legislating member in the universal kingdom of ends.

{{< /quote >}}

Which, uh, is really a fancy way of saying treat others the way you want to be treated + don't take away other's freedoms. Now, there's more to it than that, but that's the real gist. The problems here are pretty obvious:

* What if you, personally, want to feel pain?
* What if taking away somebody's freedoms is good for society - ie, sending someone to rehab / prison.
* There's abolutely no concern for historical or social precedent - if someone want's to walk around naked, should they be able to?
* Kant's ethics also say lying is always wrong, which, uh. Not great. I shouldn't have to tell a cancer patient they look like they're on the edge of death if they ask "how do I look" or not be able to let kid's believe in fairy tales.

## Moral Relativism

So, this is the philosophical framework I like the most as, while it is less *solid* in a way -  that is, some things may or may not be morally correct depdening on circumstance - it's also, in my oppinion, the most realistic.

So, what is Moral Relativism? Well, it's an umbrella term for multiple ideas, so let me yoink' some text from Wikipedia:

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Moral_relativism)" >}}

Meta-ethical moral relativists believe not only that people disagree about moral issues, but that terms such as "good", "bad", "right" and "wrong" do not stand subject to universal truth conditions at all; rather, they are relative to the traditions, convictions, or practices of an individual or a group of people.

[...]

Meta-ethical relativists are, first, descriptive relativists: they believe that, given the same set of facts, some societies or individuals will have a fundamental disagreement about what a person ought to do or prefer (based on societal or individual norms). What's more, they argue that one cannot adjudicate these disagreements using any available independent standard of evaluation—any appeal to a relevant standard would always be merely personal or at best societal.

{{< /quote >}}

Now, some people take this a step further and are *Normative moral relativists*, which means they think what we *ought* to do in a given situation is also culturally dependent. This, I think, is both wrong and makes everything useless to debate. If **everything** is relative, then there's no reason debating anything.

For example, let's think about the Abortion debate. If we go by relativism as our standard we can establish, right away, that because of our culture, we may disagree on if it is right or wrong. Where we can still stand to debate, and where I still thing there's a right answer, is in *what do we do about it*. If we say everything is relative, that means it may be reasonable for a culture with a large enough majority of a belief that it's wrong to make it illegal, which is counter my belief. Instead, because we've already gotten the we disagree part out of the way, we can now debate what ought to be done. This means we can prioritize certain things, like other philosphical systems do, and, because we know people are likely to disagree on some things, we can immediately see that prioritizing *choice* makes sense. If you think Abortion is wrong, then don't have one!

## The Melting Pot of Ideas

So, relativism it is then, right?

No. If we follow that line of thought, we hit another problem: if we always prioritize choice, what do we do if someone is making a choice that limits someone else's freedoms or might bring them harm?

You see the problem, and how this just wraps back around to needing another framework. This is why it's good to have a mixed bag of phillosphical frameworks. Now, we can sort of mix all of these ideas together. How you do that is up to you ... I guess you could even say it's *relative* to you and your culture.

Some people, after taking a philosophy class think "I have found the answer, the one **true** framework" and, I've got news for you, what you're describing is religion. In Ethics, there is no right answer, only doing the best you can - and the best we have isn't one system, it's internally digesting all of the existing ideals, filtering them, and making your own system and holding yourself to be the best you can.

## Evaluating a philosphical system

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Trolley_problem)" >}}

The **trolley problem** is a series of thought experiments in ethics and psychology, involving stylized ethical dilemmas of whether to sacrifice one person to save a larger number. The series usually begins with a scenario in which a runaway tram or trolley is on course to collide with and kill a number of people (traditionally five) down the track, but a driver or bystander can intervene and divert the vehicle to kill just one person on a different track. Then other variations of the runaway vehicle, and analogous life-and-death dilemmas (medical, judicial etc.) are posed, each containing the option to either do nothing, in which case several people will be killed, or intervene and sacrifice one initially "safe" person to save the others.

{{< /quote >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/JWb_svTrcOg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Political Compas

<iframe width="100%" height="500" src="https://www.youtube.com/embed/ULYWIDcUOY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Some other terms you might hear

[BreadTube](https://en.wikipedia.org/wiki/BreadTube)



[TODO] [Ask HN: Learning Philosophy (Hacker News)](https://news.ycombinator.com/item?id=25312681)

