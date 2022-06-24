# Chapter 10.3 - Getting Tools

As mentioned above, you'll be learning both Python and C. This means we need to get the tools necessary for working with each. If you're following along with OpGuides as a whole and have Linux setup, this will be easy. If you're on Windows it's not *hard* but there are some annoying steps we'll need to jump through.

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

# Chapter 10.π - Intermission

Before we actually talk about the basic building blocks of programming - variables, for loops, etc.- I want to clear up a misconception.

<u>Programming isn't about writing code.</u>

The vast majority of a good programmer's time is spent reading documention, reseaching how others have solved the same or similar problems, and finding problems in the code they've written (so, testing and debugging).

So, if as you're reading you're thing "But, man, this sure is a lot of reading, when do we get to the **good stuff**", then, hate to tell 'ya, this *is* the good stuff.
