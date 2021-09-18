# Chapter 20 - (((())(()((()(()))))))

## What is Functional Programming?

<iframe width="100%" height="500" src="https://www.youtube.com/embed/0if71HOyVjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Most of the programming languages in this section up until now have been *imperative* programming languages. Programs are a series of instructions: do this, then do that, then do the other thing.

*Functional* programming languages are another type of language. Like math, they simply define sets, relationships, and then have a process for doing things based on "answering questions" or "getting to a result".

If this sounds like a strange concept, it dates back to the very basics of computation theory.

## Lambda Calculus

<iframe width="100%" height="500" src="https://www.youtube.com/embed/eis11j_iGMs?list=WL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Purity and Side Effects

In order to understand the power of functional languages, consider this function in Python:

```python
def fibonacci(x):
    if x <= 1:
        return x
    return fibonacci(x - 1) + fibonacci(x - 2)
```

This is a very simple function that computes the Nth fibonacci number.

However, calculating `fibonacci(1000)` requires a lot CPU power -- and more importantly, memory for all the stack frames. In fact, it is such an expensive function, Python 3.9.6 can't do it for large values!

```python
>>> fibonacci(1000)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 7, in fibonacci
  File "<stdin>", line 7, in fibonacci
  File "<stdin>", line 7, in fibonacci
  [Previous line repeated 995 more times]
  File "<stdin>", line 2, in fibonacci
RecursionError: maximum recursion depth exceeded while calling a Python object
```

To save that time and space, it is far preferable to write a version that caches intermediate results:

```python
_private_fib_dict = {}
def fibonacci(x):
    cached_answer = _private_fib_dict.get(x, None)
    if cached_answer is not None:
        return cached_answer
    if x <= 1:
        return x
    answer = fibonacci(x - 1) + fibonacci(x - 2)
	_private_fib_dict[x] = answer
    return answer
```

Not only will this run faster, but it allows calculations of otherwise impossibly large values by using the cache (even though it will still take a while):

```python
>>> fibonacci(1000)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 7, in fibonacci
  File "<stdin>", line 7, in fibonacci
  File "<stdin>", line 7, in fibonacci
  [Previous line repeated 995 more times]
  File "<stdin>", line 2, in fibonacci
RecursionError: maximum recursion depth exceeded while calling a Python object
>>> float(fibonacci(500))
1.3942322456169787e+104
>>> float(fibonacci(1000))
4.3466557686937455e+208
```

This is possible, because `fibonacci` is a **pure function**: the same inputs will result in the same outputs, no matter the state of the system as a whole. If you know part (or all) of the answer in advance, you can skip executing some (or all) of the code. In programming language design, this is often called **laziness** (even though it refers to other things in some other languages).

While this is cool concept, sometimes it *does* matter whether you repeat work: reading from files or databases that can change between runs, input and output to the user, updating memory read by other code outside of the current scope, and so on. These secondary concerns are called **side effects**.

We were able to write this in Python, but we had to "do work" in order to "be lazy". Explicit extra code was written to create and maintain the cache, and Python always evaluated every instruction -- we simply added code paths that were *less work in total*.

While [advanced compilers can sometimes do this by themselves](https://www.youtube.com/watch?v=w0sz5WbS5AM#t=2958), it is rather hit and miss because it has to be inferred. Functional languages treat laziness as a first-class feature. Their approach is this principle taken to extremes: don't do *any work at all* until it's specifically necessary.

If we defined `fibonacci` in most functional languages, and then use it somewhere in a different calculation, it would not run! It would simply return a **thunk**: an object representing a *future* calculation.

In the case of our example, where we want the value from `fibonacci(1000)`, it wouldn't be until *the answer was printed* that any code would be executed at all. If the calculation is never used, it is never done.

Similarly, there is no caching code to write. Every level of the function would break down into other calls: `fibonacci(999)` and `fibonacci(998)`, then `fibonacci(998)` and `fibonacci(997)`, and so forth. The simple python version takes so long, because these calls are repeated over and over for each "branch".

Because `fibonacci` is pure, calling it with `998` always gives the same result. Functional languages would recognize this, and therefore cause any two thunks with the same arguments to be *the same object*. (For instance, the `998` call is one level down on the left and the next call on the right.)

Since the function is pure, these thunks will execute once, and then simply remember the value. Our "caching" code comes built into the language!

In fact, this is often what makes some functional languages difficult to use: they are lazy *more often* than the programmer expects. Their "cache" of thunks can consume a lot of memory, waiting for an actual imperative operation to be written.


## Types of Things

Because functional languages have a focus on purity, they want to make sure that side-effects can be reduced as much as possible, or failing that, contained and made specifically useful. The way each language does so is different, and will be discussed in a later section.

As a cornerstone of this strategy, functional languages tend to have more complex and "set like" type systems, allowing combinations not available in many other languages. These combinations are often used to make things "pure" and "isolate" side effects, and result in very different ways of doing things.

Advanced typing is an entire course all its own, so we'll consider just one problem: error handling.

How do we do that in Python? The typical way is with exceptions:

```python
try: 
	do_operation()
except OperationError(e):
    print(f"operation failed: {e}")
```

This is error handling based on code flow -- i.e. "doing things." It is just a fancy way to say: do this then that, except if there's an error, then go down here instead.

But functional languages don't want to do things -- they want to be lazy with thunks. So instead, they create a thunk that represents the outcome.

Here is the nearest equivalent in Python:

```python
outcome = do_operation()
if outcome.is_ok():
    pass
else:
    e = outcome.get_error()
    print(f"operation failed: {e}")
```

This is not great Python. Among many other reasons, it's because the type of `outcome` is one class, and the type of `e` is another class. These two have nothing to do with each other, and so must be wrapped (in this case) or cast (in clever code).

It gets even more complex when you realize that Haskell, unlike Python, is *statically typed*. It needs to *type check* both outcomes. How can it do that when the error hasn't happened yet?

From an Object Oriented perspective, this is impossible -- or requires code for casting and/or inheritance that is so ugly no one should ever write it.

But Haskell has a trick up its sleeve: **sum types**. These are types defined in part by other types they are associated with.

The nearest thing Python has to this is `None`. It is a weird type, because you can get it without actually writing any code:

```python
>>> def do_nothing(): pass
>>> x = do_nothing()
>>> type(x)
<class 'NoneType'>
```

In most languages, this would be a compiler error: "you are trying to get a value out of a function that does not return one. Don't do that." But Python can't tell that in advance, because of what you can do with functions. So instead, they return a special value `None` as a "value" when the code tries to read a value that isn't there.

Because of this, a defensive Python programmer has to recognize that *any value could be None if there is a bug*. And it's especially tricky, because of its boolean casting:

```python
>>> x = False
>>> not x
True
>>> not not x
False
>>> x = None
>>> not x
True
>>> not not x
False
```

if you have a boolean output, like in an if check, `None` behaves like `False` -- but it isn't! You must explicitly check `x is not None` as was done in an earlier section.

A Haskeller would say that, in Python, every type is really a *sum type* with `None`. Your f unction could return something of type `Int`, or of type `None`. Either one. So be vigilant!

Unlike Python, Haskell has syntax and tooling to make this explicit. Its similar type is called maybe, and it has two values: `Nothing` or `Just x` -- where x is a value of *some other type* that is defined by the code around it.

That means you can check outcomes like this:

```haskell
case doOperation of
    Just answer -> return answer
    Nothing -> do hPutStrLn stderr "Error: I didn't get an answer"
```

And if you forget to, it's a type error: "in your case statement, you gave me an `answer`, when I wanted a `Just answer`".

The variable `answer` can be whatever type is expected: an integer, a float, a boolean, or something else.

The *surrounding code* requires that `answer` be a specific type, because Haskell is strongly typed. But it is still possible to use `Just` with any of them, whose type is `Maybe`.

Finally, we can return to our original problem: error handling when you don't know the type of error in advance.

It uses a similar idea, but you associate *two* types with it: one type associated with success, and another type associated with the error.

Because all the types are known, it can be lazy to handle errors without executing any code. And more importantly, compared to Python, you cannot forget to check for errors because the types are wrong.

[TODO] Functional Programming languages: lisp, haskell, luna-lang.org, ronin

## Honorable Mention: Rust

Once upon a time, famous C programmer Eric Raymond [wrote](http://vadeker.net/articles/hacker-howto.html):

> LISP is worth learning for [...] the profound enlightenment experience you will have when you finally get it. That experience will make you a better programmer for the rest of your days, even if you never actually use LISP itself a lot.

In other words, as a more accessible member of the functional languages family, it will teach you *concepts* that imperative languages would never teach.

I would argue the same about Rust. It is a steep curve, especially in the middle, and especially for certain problems. But it is still worth it. <a class="ptr">(1)</a>

[Rust](https://www.rust-lang.org/) is an imperative programming language originally developed at Mozilla Research. The idea behind Rust was to take the concepts of functional languages -- laziness, type theory, etc. -- and make them accessible in an imperative language as a replacement for C or C++.

While it is an imperative language, it is so strongly *inspired* by functional languages, it is worthy of mention here. Like functional languages, Rust has a rich type system (though not quite as rich as Haskell), and tries to turn many problems into "type checking problems."

It handles errors the way Haskell does with `Result<T, E>`. `T` is the type upon success and `E` is the type upon error, and you literally cannot fail to check for errors -- even if the check is implicit. There is no exception handling, but you can handle catastrophic and/or unforeseen events (called a `panic`) in their own scope. Their default behavior is to abort the program.

Rust also has a lot of laziness, but you have to write it explicitly. Rather than handling the value, most iterator methods will take closures (aka lambdas in Python), just so they don't have to call them until the iterator is "driven" by outside code. But this is all just API design: Rust is still happy to let you use a `for` loop instead if you want.

The thing that makes Rust unique is that it uses this functional approach not to explore the boundaries of type theory, express new math concepts, or deal with semi-infinite sets. Instead, it uses all of this functional design to allow programmers to write low-overhead code free of certain types of bugs.

In Rust, the compiler analyzes program flow and variable scope (with a concept known as *ownership*). It then makes sure everything is cleaned up when it goes out of scope (known as *dropping*), and has a type checking pass (called the *borrow checker*) which makes it a "type error" to do any of the following:

* Drop/free something with live references to it
* Mutate something without declaring it mutable (immutable is the default)
* Mutate something while there is a second reference to it
* Share an object across threads if it is not thread-safe

Once your code "type checks", the assembly produced is almost the same as C++. There is no runtime and no garbage collector, because every byte of memory is accounted for in the control flow and data flow analysis the compiler already did.

At the same time, the compiler has already statically proven your code is a lot safer that C++. It prevents entire classes of memory safety issues -- the issues that are 70% of all security issues according to both [Microsoft](https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/) and [the Chrome team at Google](https://www.zdnet.com/article/chrome-70-of-all-security-bugs-are-memory-safety-issues/).

Even if you don't spend a lot of time in Rust, writing programs in it -- and getting caught by the compiler for things you cannot do -- will change the way you think about code. While this is especially for similar low-level languages like C++, it can even affect the way you look at Python.

It is definitely worth learning for that experience.

<ol hidden id="footnotes">
        <li>Similar to functional languages, sometimes the only solution is <i>completely rethink your approach to your problem</i>. Learning when this is the case, and what to do about it, is the difference between an intermediate and a skilled Rust programmer.</li>
</ol>
