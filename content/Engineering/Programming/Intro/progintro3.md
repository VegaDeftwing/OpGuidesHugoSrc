# Chapter 10.3 - Getting Tools

As mentioned above, you'll be learning both Python and C. This means we need to get the tools necessary for working with each. If you're following along with OpGuides as a whole and have Linux setup, this will be easy. If you're on Windows it's not *hard* but there are some annoying steps we'll need to jump through.

## Getting Code To Run

{{< tabs "Tools" >}}

{{< tab "Arch Linux" >}}

Run `pacman -Syu gcc python`, then you'll want to grab `visual-studio-code-bin` from the AUR. you should have `yay` installed, so this should be as simple as `yay -S visual-studio-code-bin`. 

[TODO] code plugins

Finally, let's quickly test both languages. 

Starting with the C language, go ahead and, using VSCode, make a new file containing

```c
#include <stdio.h>
int main() {
   printf("Hello, World!");
   return 0;
}
```

and save it as `hello.c` (pay attention to where you save it to, you may want to make a new folder for programming, and maybe make a new folder in that for C programs), then, using a terminal, get to the folder (using `cd`, `pwd`, and `ls` as necessary). When you're there, go ahead and run `gcc hello.c -o hello`, this will take the code and *compile* it for you to run, so now you should be able to run `./helllo` and you should see `"Hello, World!"` as output.

Next up, let's test python. This is even easier - just run `python`, this should bring up the python **R**ead **E**valuate **P**rint **L**oop or REPL interface. This is a way for you to test code without even saving it as a file, so try just putting in `1+1` and pressing enter. Use `exit()` (or Ctrl+D) to quit. Then, let's try making a file too. Open up VSCode again and this time make a new file containing

```python
print("Hello, World!")
```

and save it as` hello.py`. Again navigate to where it is stored and now just run `python hello.py` and you should see the expected `"Hello, World!"` as output.

{{< /tab >}}

{{< tab "Windows" >}}

[TODO] Win

{{< /tab >}}

{{< tab "Mac" >}}

[TODO] Mac

{{< /tab >}}

{{< tab "Other Linux" >}}

[TODO] Other Lin

{{< /tab >}}

{{< /tabs >}}

## Debugging!

Alright, now that we know we can write and run code in both languages, we also need to make sure we can *debug* code. This is sort of jumping the gun a bit, but it will help to learn if you can actually see things run step-by-step.

Normally, when you run code it runs everything as fast as it can, this is great when it works, but bad when it doesn't and you need to know why. So, let's start with python. Go ahead and make a new file (ctrl+n,ctrl+s) and name it `testdebug.py`. Go ahead and put the following in that file:

```python
my_friends = ["Kiri","Soatok","Loial","Ashlyn","Cendyne","Dusk","Saphire","Cadey","Lint"]

for friend in my_friends:
    print(friend, end='')
    if friend == "Soatok":
        print("\tWARNING: FULL OF PUNS")
    else:
        print()
```

Now, you can run this code from within VSCode by (Ctrl+F5) or going to "Run"→"Run Without Debugging". If you run it, you should notice that "WARNING: FULL OF PUNS" never prints into the terminal that opened at the bottom of your screen:

![image-20220623205136950](../../../../../../home/vega/.config/Typora/typora-user-images/image-20220623205136950.png)

 Now, this bug is easy enough to spot, on line 5, "Soatok" is spelled incorrectly. Still, let's see what happens if we debug. This time, go ahead and run *with* debugging (F5) or "Run" → "Start Debugging". You should notice the exact same thing, the program runs and finishes. What gives! Well, we need to set a **breakpoint**. Next to line 1, click to the left of the line number and you should get a red dot. Now, start debugging again (F5) and you should see the red dot get surounded by a pentagon and some what look like music controls at the top of your screen:

![image-20220623205731541](../../../../../../home/vega/.config/Typora/typora-user-images/image-20220623205731541.png)

If you hover over the controls you'll see that, from left to right, they say "Continue (F5)", "Step Over (F10)", "Step Into (F11)", "Step Out (Shift+F11)", and "Stop (Shift+F5)". If you press Step Over (F10) (the curved arrow), you should see the pointer move to the next line:

![image-20220623205756697](../../../../../../home/vega/.config/Typora/typora-user-images/image-20220623205756697.png)

Go ahead and click it a few more times. You should see it iterate over each name, but not ever hit the `print("WARNING: FULL OF PUNS")`

You should also notice on the right, that as you step though, there's a list of variables and what their current values are. With this you can actually see the name that will be printed next before it does so.

<img src="../../../../../../home/vega/.config/Typora/typora-user-images/image-20220623204834721.png" alt="image-20220623204834721" style="zoom:33%;" />

In theory, you could watch for when friend took on the value `soatok` and you would see that it does *not* trigger that `if`. So, go ahead and change the line to `if friend == "Soatok"` and re-run the program. This time, you'll be warned that Soatok is full of puns.

Now, let's do the same thing with C. Again make a new file with (Ctrl+n), followed by (Ctrl+s) and name this file `testdebug.c`.

{{< speech math big >}}

You're about to see code written in the C programming language for the first time. Unlike the Python you've seen up until now, it's not really digestable without having some prior experiance. I do encourage you to try, but don't get hung up on it. I'll show you how to read it in upcoming sections.

{{< /speech >}}

Go ahead and put this code in:

```c
#include <stdio.h>
#include <string.h>

#define NUMBER_OF_FRIENDS 9

// Longest string + 1 for the terminating character
#define STRING_LENGTH 8

int main(int argc, char const *argv[])
{
    const char my_friends[NUMBER_OF_FRIENDS][STRING_LENGTH] = {"Kiri","Soatok","Loial","Ashlyn","Cendyne","Dusk","Saphire","Cadey","Lint"};

    for (int i = 0; i < NUMBER_OF_FRIENDS; i++)
    {
        printf(my_friends[i]);

        if (!strcmp(my_friends[i],"Soatok"))
        {
            printf("\tWARNING: FULL OF PUNS\n");
        } else {
            printf("\n");
        }
    }

    return 0;
}
```

{{< tip >}}

Heads up! `strcmp()`, the function that compares strings (strings are what we call a sequence of characters in programming), is a bit odd in that it **doesn't** just check if they're equal and and return 1 (true) if they are and return 0 (false) if they're not. It acutally returns 0 if they **are** equal, a number greater than 0 (any number that's not 0 is "true" in C) if the first non-matching letter has a greater ASCII value, and less than 0 if it has a lower ASCII value. </br></br>Confused? Yeah, so is everyone else.</br></br>This is very counter intuitive to new programmers, but, this is why on line 17 there's an `!` (the sign for a logical `not`) which in this context basically means not-anything-other-than-zero, so `not-true`. It also would have been valid to switch the prints around, but this is just as confusing.</br></br>Anyway, don't worry about it. The gist is that this program does the same thing as the python one, it's just C and so has a lot more moving parts you'll need to lean how work.

{{< /tip >}}

You know the drill now. Press (Ctrl+F5) and see if it runs. This time, it may ask you what compiler you want to use - for now, we'll just use GCC.

Then, set a break point - this time probablyon line 13, `for (int i = 0; ...`, and run it *with* debugging and step through.

## Extra Things To Make Life Easier

* Ligatures
* Code Completion
* Linting
* Colored brackets
* Auto-formatting
* TODOS
* Transformer package

# Chapter 10.π - Intermission

Before we actually talk about the basic building blocks of programming - variables, for loops, etc.- I want to clear up a misconception.

<u>Programming isn't about writing code.</u>

The vast majority of a good programmer's time is spent reading documention, reseaching how others have solved the same or similar problems, and finding problems in the code they've written (so, testing and debugging).

So, if as you're reading you're thing "But, man, this sure is a lot of reading, when do we get to the **good stuff**", then, hate to tell 'ya, this *is* the good stuff.

# Chapter 10.ψ - Rant about C

Like I said, we need to dive into C so you can understand how some of the lower-level things work - pointers, bit manipulations, etc.

Unfortuantely, C is a massive cluster fuck and seemingly exists exclusively to make you fuck up. It is brutally difficult to write safe code in, with even it's standard library functions known to have security problems unless used very carefully. So even though I don't expect you to understand these ~~fully~~ really at all, I want to show you some of why C is hard and let you know that even people with years of experiance writting in C still ocassionaly make really stupid mistakes.

## Example 1: Out-Of-Bound Doesn't Always Fail

The language will happily let you write and compile code like this:

```c
int main()
{
    int my_array[3] = {1,2,3};
    int my_other_array[3];

    my_array[3] = 42;

    return 0;
}
```

which is **very** wrong because arrays start at 0 (so these arrays have 3 items, for example at `my_array[0]`,`my_array[1]`, and `my_array[2]`  - more on this later). This might make your code crash outright, but it might still *sort of* work, just when you write 42 to `my_array[3]` it might be clobbering the value of some other variable, maybe setting `my_other_array[0]` to 42, maybe something else entirely. 

This is really, really bad. Now, modern tools try to prevent this and actually include some of their own code to try to stop you from doing this *particular* fuck up, but it's not bullet proof. In pretty much any other language you could either be 100% sure it will crash outright (again, this is better in this case) or it will just refuse to run at all.

## Example 2: Strings should be Null-Terminated (Usually)

Say you want to make every noob's first program, one that just says "Hello, World!", let's do that **wrong** in C:

```c
#include <stdio.h>

int main()
{
    char greeting[] = "Hello World!";

    printf(greeting);

    return 0;
}
```

This looks fine, right? Well, mostly, yes. But it will probably not act as you want because after saying "Hello World!" there won't be a new line for the terminal to print to.

It *should* be `char greeting[] = "Hello World!\n";` or `printf("%s\n",greeting);`. This is weird, and kind of annoying.

## Example 3: Stupid Code is Still Valid Code

Pop Quiz (for something you haven't been taught yet), which is right:

{{< columns >}}

```c
if(a = b){
	return 1;
}
```

<--->

```c
if (a == b){
	return 1;
}
```

{{< /columns >}}

Well, unless your intent was to check if b was anything other than 0, it's not the one on the left. As with most programming languages, C uses one equal sign to **assign** a value, and two equal signs to **compare** values. Unlike most languages, C will let you write and compile code with the assignment where the comparison sholud be, without any real, intentional comparison taking place.

## But Wait, There's More!

There's many other annoyances.

* C only *sort of* supports variable length arrays - that is something like `int size = 12;
  int my_array[n];` will *probably* work (it depends on your compiler), but shouldn't be used.

* It's really hard to prevent something from accessing memory you don't want it to in the same program

* There is no boolen (True / False) type built in, you actually have to `#include <stdbool.h>`

* The compliation process requires functions be declared before they're called, basically:

  ```c
  int main(){
      int a = 1;
      int b = 2;
      int c = 0;
      c = add(a,b); // don't ever actually turn add into a function
      return 0;
  }
  
  int add(int a, int b){
  	return a + b;
  }
  ```

  will fail because `add()` is defined **after** main. To fix this, you're supposed to add `int add(int a, int b);` to a different file, called a header file, and then use `#include whatever.h` at the top of the `whatever.c` file. This is really annoying, and requires the programmer to change things in two places if the definition of a function ever changes.

* The default types are bad. You've seen me use `int`, `int8_t`, `uint8_t`, `char`, etc. so far. These are types. C's pretty much suck. The basic `int` may varry in how big of numbers it can handle depending on the platform. `int8_t` is always 8-bits, but it requires you `#include <stdint.h>`. On top of this, there's no string type, you only get arrays of characters. This is really annoying to work with.

* `a = b = c = d = e;` is valid code, for some fucking reason. 

... I could keep going, and list some much more technical problems there's absolutely no chance you'd understand yet. But my point is this: **C is hard**, and you will get frustrated because of small errors that are hard to figure out what *exactly* you did wrong. Missing a single semicolon on the end of a line will cost you a few hours of your life at some point. This struggle will make you a better programmer, but you will definitely hate it.

C has also been the dominant programming lanuguage for low level programming for 50 years. That's one hell of a legacy, and only now in the last few years is something *finally* starting to compete: Rust. Rust, as a language, is still really hard to write in - espically for begineers with no prior knowledge - but it at least doesn't let you make the crazy fuckups C does. I'll go into why you'd ever want to use either later, but for now, just trust me, no matter how bad is sucks, you have to learn C.

{{< details "Chapter 10.ψ? ">}}

ψ is a fun number a bit bigger than π. 🤷

{{< quote "[Reciprocal Fibonacci Constant, Wikipedia](https://en.wikipedia.org/w/index.php?title=Reciprocal_Fibonacci_constant)" >}}

The '''reciprocal Fibonacci constant''', or ψ, is defined as the sum of the Reciprocals of the Fibonacci numbers:

{{< katex >}}\psi = \sum_{k=1}^{\infty} \frac{1}{F_k} = \frac{1}{1} +  \frac{1}{1} + \frac{1}{2} + \frac{1}{3} + \frac{1}{5} + \frac{1}{8} + \frac{1}{13} + \frac{1}{21} + \cdots.{{< /katex >}}

The value of ψ is known to be approximately

{{< katex >}}\psi = 3.359885666243177553172011302918927179688905133732\dots .{{< /katex >}}

{{< /quote >}}

{{< /details >}}
