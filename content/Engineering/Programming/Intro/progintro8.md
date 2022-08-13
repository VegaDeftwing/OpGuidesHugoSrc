# Chapter 10.8 - The Standard Library

Yunno' how you've been using `print()` and `printf()` all over the place? Well, those are functions, but where are they from?! 

Well, for C, in `printf()`'s case it's pretty obvious - you can't use it unless you have `#include <stdio.h>` at the top of the file, so, clearly your computer has that file, and the associated `.c` file, somewhere. And frankly? That's good enough for the moment. Later, you may need to learn how to download C libraries form the interent. But for now, just know you have many more than `<stdio.h>` available which cover a lot of basic functionality.

For Python, well, the language's motto is "Batteries Included", basically, you should be able to do everything you need without adding libraries? Is this totally true, well, it depends. But still, the idea is very core functionality - a [list of built in functions](https://docs.python.org/3/library/functions.html) - is always ready to go and there are [many more](https://docs.python.org/3.10/library/index.html) libraries with more specialized functions which should come with every python install and so be a `import whatever` away.

So, let's look at each lanugage's standard library. Maybe not everything in detail, but let's at least see what there is so we don't try to reinvent any wheels.

## Python

Okay, so, we have thu [built in functions](https://docs.python.org/3.10/library/index.html) - things like `print()`, `sum()`, `len()`,`id()`,etc.

Then we've got [string](https://docs.python.org/3.10/library/string.html) with constants predefined like `string.ascii_letters` which has all the letters a-z and A-Z as well as a few functions.

[re](https://docs.python.org/3.10/library/re.html) lets us evaluate "regular expressions" - little snippets in a sort-of language of it's own that can help match patterns in text. For example, `^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$` may look crazy, but it's actually a way for [identifying if a string is a phone number](https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number).

Skipping over [difflib](https://docs.python.org/3.10/library/difflib.html), [textwrap](https://docs.python.org/3.10/library/textwrap.html), [unicodedata](https://docs.python.org/3.10/library/unicodedata.html), [stringprep](https://docs.python.org/3.10/library/stringprep.html), [struct](https://docs.python.org/3.10/library/struct.html), [codecs](https://docs.python.org/3.10/library/codecs.html), and a few even less entertaining ones, we wind up at [datetime](https://docs.python.org/3.10/library/datetime.html) which has data structures and functions for working with time, including `datetime.date.today()` to get the current date.

Skipping over [zoneinfo](https://docs.python.org/3.10/library/zoneinfo.html) and [calendar](https://docs.python.org/3.10/library/calendar.html) we come to [collections](https://docs.python.org/3.10/library/collections.html) which has functions like `counter()` for seeing how many times something in a list is repeated. It also has `deque` (pronounced "deck") which is like a list, but much faster if you need to append or remove elements from either end often.

Skipping over [heapq](https://docs.python.org/3.10/library/heapq.html) and [bisect](https://docs.python.org/3.10/library/bisect.html) there's [array](https://docs.python.org/3.10/library/array.html), which is a lot like the python built in list because its *basically* a raw C array - that is, unlike a python list which may have mixed types (`a = ["string", 2, 3.14159]`), an array has a static type. I mostly bring this up to say... don't. This is where you'd start wanting to use external libraries like [numpy](https://numpy.org) which is much, must more powerful and faster.

Skipping over many boring bits we run into [copy](https://docs.python.org/3.10/library/copy.html) which will be very very useful later as you'll see when we get to object orientiton. So, remember this exists.

Skipping many more we finally hit [math](https://docs.python.org/3.10/library/math.html) which has a wide array of useful mathematical functions: `ceil()`, `comb()` (combinations), `factorial()`, `log()`, `sqrt()`, all the trig functions, and many more. Plus, it has constants for pi and e. There's also [cmath](https://docs.python.org/3.10/library/cmath.html) for those in need of functions working with complex numbers.

[decimal](https://docs.python.org/3.10/library/decimal.html)'s uses are nieche, but if you're hitting the limits of floating point math, it's a place to start.

Skipping over a few more, we hit [random](https://docs.python.org/3.10/library/random.html) which can get you a wide range of ways to get random numbers. Speaking of, there's [statistics](https://docs.python.org/3.10/library/statistics.html) too! Everybody's favorite package for working with everything from averages to correlations and standard deviations.

With [itertools](https://docs.python.org/3.10/library/itertools.html) we're diving into some rather weird territory, but if you're wanting to learn functional programming (which, uh, is not what you think it is if you're thinking functions from the last page) then this will be handy.

[functools](https://docs.python.org/3.10/library/functools.html) has some blackmagic that let's you speed things up dramatically if you know what you're doing. Really handy if you're in the situations of "Ahh, shit, my python code isn't fast enough" but caching (a topic for another day) is the answer.

For reasons to do with functional programming (again, adavanced topic, don't worry about it yet) you sometimes need to use the normal comparison operators as functions. That's where [operator](https://docs.python.org/3.10/library/operator.html) comes in. So, uh, I guess I lied? `add()` is technically a thing? Don't use it unless you actually need it.

Then the file-y stuff. You've got all the stuff you'd expect.

## C



