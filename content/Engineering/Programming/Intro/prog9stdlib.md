# Chapter 10.9 - The Standard Library

<script>
    document.getElementById("codeMenu").open = true;
</script>

Yunno' how you've been using `print()` and `printf()` all over the place? Well, those are functions, but where are they from?! 

Well, for C, in `printf()`'s case it's pretty obvious - you can't use it unless you have `#include <stdio.h>` at the top of the file, so, clearly your computer has that file, and the associated `.c` file, somewhere. And frankly? That's good enough for the moment. Later, you may need to learn how to download C libraries from the Internet. But for now, just know you have many more than `<stdio.h>` available, which cover a lot of basic functionality.

For Python, well, the language's motto is "Batteries Included", basically, you should be able to do everything you need without adding libraries? Is this totally true, well, it depends. But still, the idea is very core functionality - a [list of built-in functions](https://docs.python.org/3/library/functions.html) - is always ready to go and there are [many more](https://docs.python.org/3.10/library/index.html) libraries with more specialized functions which should come with every python install and so be a `import whatever` away.

So, let's look at each language's standard library. Maybe not everything in detail, but lets at least see what there is, so we don't try to reinvent any wheels and have a better idea of what's available to us when we go to solve bigger problems.

## Python

Okay, so, we have the [built-in functions](https://docs.python.org/3.10/library/index.html) - things like `print()`, `sum()`, `len()`,`id()`,`input()`,etc. Most of these are pretty straight forward and do what you'd think. Some are a bit weirder. Generally, if you read the function name and go "What?" it's probably not something you need to worry about quite yet.

Then we've got [string](https://docs.python.org/3.10/library/string.html) with constants predefined like `string.ascii_letters` which has all the letters a-z and A-Z as well as a few functions.

[re](https://docs.python.org/3.10/library/re.html) lets us evaluate "regular expressions" - little snippets in a sort-of language of its own that can help match patterns in text. For example, `^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$` may look crazy, but it's actually a way for [identifying if a string is a phone number](https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number).

Skipping over [difflib](https://docs.python.org/3.10/library/difflib.html), [textwrap](https://docs.python.org/3.10/library/textwrap.html), [unicodedata](https://docs.python.org/3.10/library/unicodedata.html), [stringprep](https://docs.python.org/3.10/library/stringprep.html), [struct](https://docs.python.org/3.10/library/struct.html), [codecs](https://docs.python.org/3.10/library/codecs.html), and a few even less entertaining ones, we wind up at [datetime](https://docs.python.org/3.10/library/datetime.html) which has data structures and functions for working with time, including `datetime.date.today()` to get the current date.

Skipping over [zoneinfo](https://docs.python.org/3.10/library/zoneinfo.html) and [calendar](https://docs.python.org/3.10/library/calendar.html) we come to [collections](https://docs.python.org/3.10/library/collections.html) which has functions like `counter()` for seeing how many times something in a list is repeated. It also has `deque` (pronounced "deck") which is like a list, but much faster if you need to append or remove elements from either end often.

Skipping over [heapq](https://docs.python.org/3.10/library/heapq.html) and [bisect](https://docs.python.org/3.10/library/bisect.html) there's [array](https://docs.python.org/3.10/library/array.html), which is a lot like the python built in list because it's *basically* a raw C array - that is, unlike a python list which may have mixed types (`a = ["string", 2, 3.14159]`), an array has a static type. I mostly bring this up to say... don't. This is where you'd start wanting to use external libraries like [numpy](https://numpy.org) which is much, must more powerful and faster.

Skipping over many boring bits, we run into [copy](https://docs.python.org/3.10/library/copy.html) which will be very, very useful later as you'll see when we get deeper into object orientation. So, remember this exists.

Skipping many more we finally hit [math](https://docs.python.org/3.10/library/math.html) which has a wide array of useful mathematical functions: `ceil()`, `comb()` (combinations), `factorial()`, `log()`, `sqrt()`, all the trig functions, and many more. Plus, it has constants for pi and e. There's also [cmath](https://docs.python.org/3.10/library/cmath.html) for those in need of functions working with complex numbers.

[decimal](https://docs.python.org/3.10/library/decimal.html)'s uses are niche, but if you're trying to avoid the problems of floating point, it may help.

Skipping over a few more, we hit [random](https://docs.python.org/3.10/library/random.html) which can get you a wide range of ways to get random numbers. Speaking of, there's [statistics](https://docs.python.org/3.10/library/statistics.html) too! Everybody's favorite package for working with everything from averages to correlations and standard deviations.

With [itertools](https://docs.python.org/3.10/library/itertools.html) we're diving into some rather weird territory, but if you're wanting to learn functional programming (which, uh, is not what you think it is if you're thinking functions from the last page) then this will be handy.

[functools](https://docs.python.org/3.10/library/functools.html) has some black magic that lets you speed things up dramatically if you know what you're doing. Really handy if you're in the situations of "Ahh, shit, my python code isn't fast enough" but caching (a topic for another day) is the answer.

For reasons to do with functional programming (again, advanced topic, don't worry about it yet) you sometimes need to use the normal comparison operators as functions. That's where [operator](https://docs.python.org/3.10/library/operator.html) comes in. So, uh, I guess I lied? `add()` is technically a thing? Don't use it unless you actually need it, and since we haven't gone over functional programming (again, not programming with functions - it's a bad name) you don't need it yet.

Then the file-y stuff. You've got all the stuff you'd expect for reading and writing files and file paths (folders) and some weird stuff you won't know what's for.

Next up is stuff for data persistence and the ever entertainingly named [pickle](https://docs.python.org/3.10/library/pickle.html) which will let you save an object (like, an object orientation style object from before) to a file and then un-pickle it later. There's also some libraries for connecting to databases.

There's also libraries for compressing and de-compressing data in .zip, .lzma (.7z), .tar, etc.

Moving more quickly now, you'll also find libraries for:

* Secrets and Hashlib - Generating secure random numbers (for use with passwords)
* OS - Determining what OS you're on (among other, more advanced uses)
* Along with Datetime and Calendar there's also just Time, which is useful for very precise times.
* A whole pile related to threading - These will let you use multiple cores.

  * This is pretty difficult to program around. We'll talk about multithreaded programming in a future chapter.
* Another pile of em' related to networking, email, HTML, HTTP, URLs, ip addresses, etc.
* Some (limited) for working with .wav audio files and color systems
  * If you need to work with audio or color, you're probably going to want some 3rd party libraries.

* A bunch for debugging related stuff that you probably won't use directly
  * Though you will still want to use a debugger, which does use them


And many, many, many more that you'll probably realize if you need and end up doing a web search for as necessary.

Okay, so, uh, that's a big ol' list of libraries alright. Why should you care?

Well, you'll notice that pretty much covers the majority of things you'd want to do with a computer, at least if you're willing to do a fair amount of heavy lifting. Like, if you wanted to make a Twitter bot, there's a networking library here and you could go read the twitter API docs and, using nothing more than what python comes with, you could make it. 

That's pretty cool, and makes Python really powerful.

On the other hand - remember what I said about not reinventing wheels? Making a Twitter bot in Python is the kind of thing that has probably been done tens thousands of times and there will certainly be existing libraries which make it an even easier problem.

Let's do a quick search for "Python twitter bot" - come on, you do it too. Open up a new tab and search it.

You'll probably notice multiple of the results mentioning something called Tweepy. (as an aside, many python libraries end in py)

Let's look that up directly. If we do, we'll find https://docs.tweepy.org/ and, more importantly, the documentation for it at https://docs.tweepy.org/en/stable/. If we were to dig around enough there, we'd see how to install it, how to get an access token from Twitter, and how to make a very simple program using it. Sure, it's a bit of reading, but so was getting to this point. Fortunately, the more you read and work with this kind of stuff the faster it is to get though and to start actually doing cool things.

To be clear, you shouldn't reach for third party libraries for every problem. If the basic python libraries are enough, that's a good thing. You'll need to build up this intuition for when the time and complexity cost in doing it yourself (and maintaining that solution) isn't worth it.

## C

It's relatively uncommon to use third party C libraries, but extremely common to use the built in ones. So far you've seen:

* `<stdio.h>` which provides `printf()` as well as file operations, and the ability to take in user input as text.
* `<math.h>` which provides most trig function, pow, log, exp, sqrt, etc.
* `<string.h>` which provides `memcpy()` as seen, but also has functions for taking a character array holding character-numbers and turns it into an interger or float (or, errors if it fails because the character-error holds letters, special characters, etc.). It also provides `malloc()` and `free()` which we'll get into later.
* `<time.h>` which has data types and functions for working with time
* `<stdint.h>` which has the specific bit types like `uint8_t`
* `<stdbool.h>` which defines `true` and `false`	{{< smalltext >}}(The fact that this isn't just built in hurts me){{< /smalltext >}}

And, yunno, that's pretty much the only ones you'll use for at least a good while. Eventually we'll probably need `<signal.h>`, but other than that, ╮(─▽─)╭. There are a few more, but they're rare to see.

Now, you're probably seeing that and thinking "Wow, compared to python that's not much!"

Yep. Now, there **are** third party libraries - here's a "awesome" list on github of quite a few useful ones: https://github.com/oz123/awesome-c.

One thing worth noting, some libraries will say they're "header only". These libraries tend to be much easier to use. It's not always the case, but, it's often a win if you see it. We'll talk about headers soon, because if you're going to write anything remotely complicated in C, you have to use them.

You'll also probably notice many of them claiming to be very small. This is because C is often used on embedded systems. We'll talk about this more later, but on an embedded system, you often only have a few killobytes of RAM, practically no storage, and a CPU roughly as fast as a home computer from 1980 - so small is really important.

With all of the libraries you can find, you may think "oh, huh, I could write a fully featured program in C", and, Yep. You can. It'll probably be a much, much larger pain in the ass than a language better suited for the task. If you knew what libraries C++ or Rust had for the equivalent problems, you'd quickly see why plain C isn't used for really anything big.

{{< speech big >}}

Though, frankly, even if C had perfect libraries, the language doesn't scale super well for massive projects unless you're very, very, very, very, very careful and have very, very rigorous testing and quality checks.

{{< /speech >}} 
