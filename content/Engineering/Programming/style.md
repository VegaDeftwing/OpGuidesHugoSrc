# Chapter 15½ - Programming Style & Patterns

Good programmers don't just write code that works, they write code that is readable, easy to debug, and well tested. One way to get a leg up on this is to look at tips for programming patterns and styles that make your code better.

For example, take this nugget of advice:

{{< quote "[u/tyg13 on Reddit](https://www.reddit.com/user/Tyg13/)" >}}

Smash back if the intermediate variables don't represent a meaningful value. Sometimes it makes sense to declare an intermediate, and sometimes it doesn't, e.g:

```python
price = get_price()
tax = income_tax * price
full_price = price + tax
```

In this situation, employing intermediate variables is fine, because each has an actual interpretation within the calculation. However, e.g:

```python
x_squared = get_x() ** 2
y_squared = get_y() ** 2
distance = math.sqrt(x_squared + y_squared)
```

This is bad, because `x_squared` and `y_squared` are only meaningful quantities in the context of the distance calculation, and breaking out these variables just obfuscates the computation.

If you ever find yourself asking "what the hell could I even name this variable?" it's a pretty typical sign that you're trying to break things up more than is logically necessary, and just making a mess of things.

{{< /quote >}}

Though for actual deeper understanding there are these things called "Design Patterns" - [Wikipedia has a big ol' list of 'em](https://en.wikipedia.org/wiki/Software_design_pattern#Structural_patterns) which is worth looking into, and if you just google the "software antipatterns" you'll find a huge list of things to avoid in code. A lot of these are high level and tend to miss why the *bad things* are done in the first place: time. Often, you want to make something quick as a Proof of Concept (PoC) to know it's not a dead end. The problem is, we often don't go back and clean up our mess after we get it to work.