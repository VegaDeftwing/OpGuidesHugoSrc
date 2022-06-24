# Chapter 10.5 - What's a Type? & Going Down Rabbit Holes

Alright, I'll cut to the chase. When programming, you often need to deal with types. On the last page, there was a mix of types, `int`, `uint8_t`, `float`, and `char` all make apperances. While the exact names of each type and what they're capable of may vary a bit from language to language and platform to platform understanding the basics here will help you out a lot, so, let's start with the C language and look at `int`s

### Int

`int`, as you can probably guess, means integer. What's a bit less obvious is that this will have an inherit range. On your laptop or desktop, just using `int` without anything special (like the next example, `uint8_t`) *probably* means a 4-byte integer, so that means you get 32 bits (4*8) to represent your number. Now, there's a catch: The most significant bit is actually used to store if the number is positive (0) or negative (1) using [2's complement](https://en.wikipedia.org/wiki/Two's_complement), so, in total that gives you a range from -2,147,483,648 to 2,147,483,647. If you try to go above or over this range, the result will wrap around. Now, there's also a varient for *unsigned* integers or `uint`, these, as you might expect, can only be positive, but this means you get the full range from 0 up to 4294967295 to play with before you wrap around. Finally, you might find times where you'll want to specify the number of bits in a number, and in the language I've been showing so far, **C**, you can do that by including a library (more on this later) and using `uint8_t`, for example, to get an unsigned, 8 bit integer. This can only range from 0 to 255. So, if we look back above when we did 200+100, while we'd *expect* 300, the place we're trying to store that number simply isn't big enough, so, we wind up wrapping around, 300-256 is indeed 44.

### Floats

### Char (& Encodings)



Before we can look at the remaining types, we need to first understand *pointers*.

## Pointers, Memory, & Arrays

<b>or "Why will knowing C help me write good code?" Part 2</b>

0 indexing



### Const, Volitile, Static

## More on Types

### Strings

### Arrays, Lists, Dictionaries, ...

### Typedef & Struct

### Types & Performance
