# Chapter 10.1

Let's talk math and look at some real code.

I think a lot of people **over** estimate how hard it is to handle even the more complex math. As an example, let's estimate π. (You should never actually do this in code - just use a library which will provide a pre-computed value of pi anywhere you need it!) To do this, we need a formula. Now, I don't know about you, but I don't have a formula for estimating pi in my head, but look at [Wikipedia](https://en.wikipedia.org/wiki/Approximations_of_%CF%80) we can use Madhava's method, which looks like this:

{{< katex >}}\pi ={\sqrt {12}}\sum _{k=0}^{\infty }{\frac {(-3)^{-k}}{2k+1}}={\sqrt {12}}\sum _{k=0}^{\infty }{\frac {(-{\frac {1}{3}})^{k}}{2k+1}}={\sqrt {12}}\left({1 \over 1\cdot 3^{0}}-{1 \over 3\cdot 3^{1}}+{1 \over 5\cdot 3^{2}}-{1 \over 7\cdot 3^{3}}+\cdots \right){{< /katex >}}

and, yeah, I can see you thinking "WHAT THE FUCK!" when you see that, espically if you're a high schooler reading this and have never seen the {{< katex >}}\sum{{< /katex >}} symbol. So, let's break this down. That symbol just means to take the sum of some numbers, for example, {{< katex >}}\sum _{k=1}^{\infty }{k}{{< /katex >}} just means to add up numbers infinitely, starting at 1, so, 1+2+3+...;however, this symbol is really helpful if we want do something with each number, for exampe, {{< katex >}}\sum _{k=1}^{\infty }{\frac{1}{k}}{{< /katex >}} would mean that we want to do {{< katex >}}\frac{1}{1}+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+...{{< /katex >}}, so, now, hopefully, the first line makes a bit more sense. So, how would we put this into code?

Well, in programming we can do something called a `while` loop, this means to do something as long as a condition is true. If we want something to happen forever, we can just make that condition *always* be true, so, we can say, `while True:` to do something forever, over and over again. Then, we just need to make a variable to store what place where at (k) and a place to keep adding up the result. Finally, computers are really fast, so to make it so that we can see each step in the process, we need to slow it down by telling the program to sleep for a little while after each step. So, even if you don't know how to read code yet, you should be able to see how this is is the same math, just in code:

```python
import math
import time
# Calculate Pi using Madhava's method
k = 0 # start at 0
result = 0 # make a place to store our answer
while True:
    numerator = (-3)**(-k)
    denominator = ((2*k)+1)
    result += numerator/denominator 
    # The above is the same as result = result + (numerator/denominator)
    print(math.sqrt(12)*result)
    k += 1 # increment k
    time.sleep(.25) # wait before running again
```

And, if we run that code (written in the Python programming language):

```
╭─vega@lyrae ~  
╰─➤  python3 madhavapi.py
3.4641016151377544
3.0792014356780038
3.156181471569954
3.1378528915956805
3.1426047456630846
3.141308785462883
3.1416743126988376
3.141568715941784
3.141599773811506
3.1415905109380797
3.1415933045030813
3.1415924542876463
3.14159271502038
3.141592634547314
3.141592659521714
3.1415926517339976
3.1415926541725754
3.141592653406165
3.1415926536478262
3.1415926535714034
3.141592653595635
3.1415926535879337
3.1415926535903864
3.1415926535896035
3.141592653589854
3.141592653589774
3.1415926535897998
3.1415926535897913
3.141592653589794
3.1415926535897936
3.141592653589794
```

You can see it does indeed zero in on pi! It will repeat that last answer, 3.141592653589794, forever though as we've actually ran out of precision. The way this code was setup we're limited by the number of digits after the decimal point Python can represent without some work arounds. Also, that answer is actually *wrong* as the last digit is wrong. Without enough precision in the calculations, it never get's corrected. Still, we got 14 digits after the decimal correct, which for nearly everything you'd ever want to do is plenty. We'll talk about this more later though.

All of that said, at the start of this program, we ran `import math` to give us that square root function, well, it turns out the math library just has pi built in as a constant value (saved, so it doesn't need computed on the fly) so we could just use `math.pi`, which gives 3.141592653589793, so the last digit is correct. Should you ever need to use pi in your code, this is how you *should* do it.

Back to the point though, going from {{< katex >}}{\sqrt {12}}\sum _{k=0}^{\infty }{\frac {(-3)^{-k}}{2k+1}}{{< /katex >}} to code may look scary, but as you can see it's actually quite straight forward.

