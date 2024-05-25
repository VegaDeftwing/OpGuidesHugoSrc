# Chapter 10.10 - The rest of the Owl

<script>
    document.getElementById("codeMenu").open = true;
</script>

Okay, so, we've gone over types and functions and operations and all of that jazz, but there are a few little pieces that have been left out, so, let's do some of them rapid fire

## Multiple files

In any language, once your code gets big enough, working in one really long file is going to become a clusterfuck.

### Python

In python, this is stupidly easy. Lets say we want two files so we make one file containing this:

```python
def double_and_add_one(number):
    return((number * 2) + 1)
```

and name it my_number_tools.py

Then, we make another file **in the same folder**, and call it whatever we want, in it we can put

```python
import my_number_tools

print(my_number_tools.double_and_add_one(1))
```

And, look at that, we've now used multiple files. You can avoid using the file name with a dot before the function name if you import the specific function, that is,

```python
from my_number_tools import double_and_add_one

print(double_and_add_one(1))
```

also works.

If you need anything more complicated than that, here's [Splitting Code Into Multiple Files (teclado - 30 Days of Python)](https://teclado.com/30-days-of-python/python-30-day-21-multiple-files/). <footnote>This 30 days of python series is decent, but paced a little weird and wants you to use web tools instead of running it locally on your computer - basically, if you're going to look at more of it, ignore "day 1" and go get python setup on your actual computer (like we did back in the programming intro) and expect to do like 6 days at a time at first.</footnote>

## C

Multiple files in C is much weirder, because it actually makes you double the amount of files you should need because of design decisions that made sense 60 years ago but are very stupid today. Regardless, in C lets say you have your main file with your `main()` function…

… er, side note, the function called `main()` is very important in C, as it's the entry point to the program. It's where it starts.

And we call that file myProgram.c and it looks like this

```c
int main()
{
    return 0;
}
```

As is, it does literally nothing other than finish by telling the computer it finished correctly (`return 0`) but we have another file with some function we want to call, we'll call this file myOtherFile.c and let's put this in it:

```c
#include <stdio.h>
#inclued <stdint.h>

// Note, with the above include, every file that depneds on a library should include that library.

uint8_t my_other_function(void){
    printf("OWO\n");
    return 0;
}
```

Okay, now we want to call this function from `main()`. Welp, to do this, we actually need to make yet another file called a header file, which, importantly, ends in `.h` instead of `.c` (like the libraries we've been using so far). In this header file we need to put the function *declaration*. This is different from the function definition, which is what we put in the `.c` file and has the actual logic (in this case, just the print). The declaration is just what the outside code needs to know about the function - that is what it takes in and what it returns.

In our case, we made a function that takes in no argument (the `void` after the function name) and returns an 8 bit integer, so our header file, which should be named the same thing but end in `.h` - so be named myOtherFile.h should have the declaration of the function and any includes that declaration needs to make sense.

Which, uh, that's a long way of saying it should look like this:

```c
#include <stdint.h>

uint8_t my_other_function(void);
```

with the `#include <stdint.h>` being necessary because the function definition needs to know what `uint8_t ` means even in this header.

Now, things get weirder yet. The file that header goes to and any file that calls this function now needs to `#include` this header file, so, for **both** myProgram.c and myOtherFile.c we need to add the line

`#include "myOtherFile.h"`

But, if you're eagle eyed, you'll notice here that file name is in quotes while where we did `#include <stdint.h>` it was in "angle brackets" (yes, that's what we call them in this context.)

The reason for this (glossing over a few details), is `"filename.h"` says to check nearby folders/local paths, while `<filename.h>` checks for the file in the system include path, which should be set by default to something sane on literally every operating system and will have all of the standard files we expect - that is, you shouldn't have to think about or even know where a file in `<>` is from, but a file in `""` should be near by or in the same project.

Okay, but this still isn't everything because C is super-duper fucked and we need to do one more thing in our header, we need to add ["include guards" (Wikipedia)](https://en.wikipedia.org/wiki/Include_guard) which, if you're not stuck in the 90's, is most easily done like this:

```c
#pragma once
#include <stdint.h>

uint8_t my_other_function(void);
```

It's just that extra `#pragma once`, but understanding why this is necessary is pretty important and will save you some hair pulling later (thanks, C.) so seriously check out the parent/grandparent/child example on that Wikipedia page and you'll see why we want this at the top of every .h file.

Okay, so total you should have three files: `myOtherFile.c`, `myOtherFile.h`, and `myProgram.c`. If you followed along, you should now be able to call the function in `myProgram.c`:

```c
#include <stdint.h>

#include "myOtherFile.h"

int main()
{
    return my_other_function();
}
```

and the code should compile and run… almost. Now we get to deal with the joy of getting C to compile and link multiple files, 

{{< speech triode right >}}

Wait. Slow down, link?

{{< /speech >}}

<div style="clear:both;"></div>

Yep. Link. And here's where things get even more fun - there's a third kind of file. Fortunately, you don't have to write this one - it gets generated automatically. It'll a **.o** or "object" file. 

Object files are the individual chunks of complied code from each file. They exist as a sort of in-between as a program  is turned into an executable program and your source code.

As an analogy, imagine you're working with Legos and you're building a plane. You might have instructions for building a wing, engines, the main body, the nose, and the tail.

The wings may say they need you to attach the engines, and the body the wings (with the engines on them), the nose, and the tail. When you're done, you'll have a plane.

The **instructions** for each piece are the .c files, but the places in those instructions where it says to attach one assembled unit to another (like a wing to the body) is sort of like a header (.h) file. Importantly though, at this point, you've only got instructions.

If you finish making a wing, that's now an object (.o) and, so long as how the wings attach (the .h) doesn't change, you could rebuild the body (change the .c and make a different .o for the body) repeatedly without re-building the wing.

On a more technical level, this going from the .c to .o is compiling and assembling (yep, two steps, there's actually a .s in there too, but normally we don't care) and the .o to the finished executable program is linking. 

Doing all of this for a lot of files tends to get messy and hard to keep sorted though, so, naturally, we made a programming language for building our programs. Yep, not kidding. That language is Make and you'll make a **Makefile**. Super clear and not confusing at all, right?

{{< hint warning >}}

A point of confusion from this - we'll call the entire process compiling/compilation and the tools to do it compilers even though they're usually full compilers, assemblers, and linkers. This is because, unlike ye' olden days where these were separate tools, anymore you just shove it though GCC or Clang and it does everything for you. You really don't need to think about it being multiple steps except for when you're writing the **Makefile**

{{< /hint >}}

so, buckle up, because we're gonna learn Make. And by we're going to learn, I mean I'm going to throw you at some links because, like writing code, I don't want to reinvent the wheel and, more importantly, leaning to read technical resources (like this website) is an important skill - and one you'll get better at if you see different styles of technical writing.

{{< columns >}}

[A Simple Makefile Tutorial (Bruce A. Maxwell @ Colby College)](https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/)

[Using make and writing Makefiles (Tia Newhall @ Swarthmore College)](https://www.cs.swarthmore.edu/~newhall/unixhelp/howto_makefiles.html)

<--->

{{< tip >}}

These are pretty dense and you may not actually understand everything! That's 100% okay. For now, we just need to `make` something that works. Even if it's almost entirely done via copy and paste.

{{< /tip >}}

{{< /columns >}}

{{< hint info >}}

Both of these mention **.o** files along side the **.c** and **.h** you've seen. **.o** files are "object" files and are (as a very minor simplification) the individual chunks of complied code from each file, they're not something you'll ever write directly. Instead, they exist as a sort of in-between as a program builds.

As an analogy, imagine you're working with Legos and you're building a plane. You might have instructions for building a wing, engines, the main body, the nose, and the tail.

The wings may say they need you to attach the engines, and the body the wings (with the engines on them), the nose, and the tail. When you're done, you'll have a plane.

The **instructions** for each piece are the .c files, but the places in those instructions where it says to attach one assembled unit to another (like a wing to the body) is sort of like a header (.h) file. Importantly though, at this point, you've only got instructions.

If you finish making a wing, that's now an object (.o) and, so long as how the wings attach (the .h) doesn't change, you could rebuild the body (change the .c and make a different .o for the body) repeatedly without re-building the wing.

On a more technical level, this going from the .c to .o is compiling and assembling (yep, two steps, there's actually a .s in there too, but normally we don't care) and the .o to the finished executable is linking. 

> A point of confusion from this - we'll call the entire process compiling/compilation and the tools to do it compilers even though they're usually full compilers, assemblers, and linkers. This is because, unlike ye' olden days where these were separate tools, anymore you just shove it though GCC or Clang and it does everything for you. You really don't need to think about it being multiple steps except for when you're writing the Makefile

{{< /hint >}}

Cool, what you should've wound up with is something like a file literally named `MAKEFILE` containing:

[TODO]

```

```

One more thing - while MAKEFILEs are great, we do want something will integrate with whatever we're using for development a bit better so that debugging and testing is faster and easier. I'm going to assume you're using VSCode, so let's setup a VS code workspace for our little 3 file demo project too:

[TODO]

Some advantages to having gone though all of that:

1. re-making our program will only make the parts that have changed. For something small, this doesn't matter. For something big, this can save multiple minutes every time.



Okay, so you've just leaned Make - here's a little secret - like C itself, many people aren't thrilled with the state of Make either. It was great for its time, but it came out in 1976. Clearly, it's been updated, but the problems (and complexity of our code) of 1976 and the problems of today aren't the same. Why still learn it? Same reason as C - everything uses it and all the new stuff assumes you already know it. 

But, again, the problems of 1976 aren't today's problems, so it's actually more fucked than this, mostly because Make is a massive pain if you want to support more than one OS or architecture, and hand-writing make files is a recipe for making stupid, small mistakes, so, naturally, we made yet another language for generating code for our language to compile code written in C. This language (er, it's more a set of tools with their own language) is Automake and, because anything involving C is at minimum 20 years behind, it was released in 1996.

Still, if we don't at least acknowledge that there may be better tools out there, then we'll never stop using the ones made back in the 70's. So, of all the modern Make alternatives, the most notable are probably SCons, [Waf](https://waf.io), Bazel, 
