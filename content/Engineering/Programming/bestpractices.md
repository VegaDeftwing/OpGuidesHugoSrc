# Chapter 11 - Best Practices

{{< quote "[Hunor Karamán @ hex22.org](https://hex22.org/)">}}

### Manifesto

1. **Everything should be a tool.** A tool transforms data without adding to its source limitations. It's a function: returns an output for a given input.
2. **A great tool is [ambient](https://are.na/alex-singh/ambient-product-design).** It should disappear and flow through your actions. You should never need it because it's always at your hands. You should never ignore it because it's never in your way.
3. **Tools should be adaptable, changeable and personalisable**. If a tool does not perfectly fit your needs, you should be able to change, mix or remove its parts.
4. **Data should be reusable, text-editable, human-readable.** Produces a higher chance that (1.) is passed.
5. **Tools should be lightweight, available and timeless.** Computing power or internet speed shouldn't be the limitation for most tasks. It works in the past and in the future.

{{< quote "Devine Lu Linvega">}}
"Only through open sources, open standards, human-readable formats and their independencies, might they survive this fleeting age of self-destructing informatics."
{{< /quote >}}

{{< /quote >}}

---

If you're on this page, presumably you're feeling ready to tackle making some bigger programs. Fortunately for you, the core building blocks are the same. The biggest difference is the amount of discipline required. This is why the first thing I want to touch on is the equivalent of janitorial work for code:

## Organization, Naming, and Style

There is one absolutely universal rule of code organization 

<p style="text-decoration-line: underline;
text-decoration-thickness: 3px;">Do not write large, monolithic functions</p>

Read that again. And again. Burn this idea into your brain. Even if the function will only ever be called in one place and there's no repeated segments in it, if it gets to big you absolutely have to split it up. This is rule №1, do not break it.

To quickly barrel though some of the others.

### Function names should have verbs

Even if this is just `get_whatever()`, "get" is a verb. If it doesn't have a verb, it's a bad name.

### Variable names should be descripive

{{< smalltext >}} \*Unless it's really, really dumb, like using `i`, `j`, and `k` for loop counters {{< /smalltext >}}

Don't name your variables `bool blunt_master_420`. Give it a name that actually means something in the code.

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

### Peren all the things

`if(a < b || b > c)` isn't bad to read, but under some circumstances statements like these can get super confusing, so always use extra parentheses to enclose each idea `if((a < b) || (b > c))` is a lot easier to read.

If you had something like `if(a && (b || ((c << (d + e)) == f) || ((g << h) == !l)))` those parentheses become vital to have any chance in hell of reading what's going on. This shouldn't happen anyway though. If you're doing anything like that you should store the result  of  `((c << (d + e)) == f)` and `((g << h) == !l)` into some temporary variables to make this easier to read in the first place.

### Avoid nesting


Don't write

```c
void main(void){
    if(a){
        if(b){
            if(c){
                if(d){
                    // ...
                }
            } else if (e){
                if(g){
                   // ...
                }
            }
        } else {
            // ...
        }
    } else{
        // throw error and return
    }
}
```

It's fucking impossible to read and debug. 

There's a few ways to fix this. First is moving some of the nested blocks into their own functions

```c
bool my_func(c,e,d,g){
	if(c){
		if(d){
			// ...
		}
	} else if (e){
		if(g){
			// ...
		}
	}
}

void main(void){
	if(a){
		if(b){
			my_func(c,d,e,g);
		} else {
        	// ...
    	}
	} else {
 	   // throw error and return
	}
}
```

The other is to reverse-logic and move a conditional out of the chain.

```c
bool my_func(c,e,d,g){
	if(c){
		if(d){
			// ...
		}
	} else if (e){
		if(g){
			// ...
		}
	}
}

void main(void){
	if(!a){
		// throw error and return
	}
	
	if(b){
		my_func(c,d,e,g);
	} else {
        // ...
    }

}
```

### Avoid Potential Infinite Loops


This is less code organization and more just general best practice, but only using `while` when absolutely necessary and - in cases where you do have to - making damn sure it can't get stuck in an infinite loop will save you  a lot of pain.

Similarly, don't use floats in the conditional of your loops (for or while) if you can help it. Floats are weird and annoying as hell to debug.

### Don't hard code values (avoid "Magic Numbers")


```c
int main() {
    for (int i = 0; i < 10; i++) {
        if(!do_something()){
            break;
        }
        
        if(i == 9){
            printf("ERROR, failed after 10 attemps");
        }
    }
}
```

Is a pretty common block of code, just retry the thing 10 times, allowing some room for a function to fail. This is also a terrible way to write it. If we wanted to update the number of times it can retry, we have to update the code in 3 different places which is very error prone. Instead, we could do something like this,

```c
#define RETRIES 10

int main() {
    for (int i = 0; i < RETRIES; i++) {
        if(!do_something()){
            break;
        }

        if(i == (RETRIES - 1)){
            printf("ERROR, failed after %u attemps", RETRIES);
        }
    }
}
```

### Pick a naming scheme

Generally you'll see variable and functions named with either `PascalCase`, `camelCase`, `snake_case`. Some code basses will mix styles to differentiate between variable, functions, or classes. It's also common to use `UPPERCASE` for some lesser used things, like constants. If you're working in an existing code base, it's vital that you match the style in use. If you're writing your own code from scratch, ensure you're consistent with your naming unless you have a damn good reason to break your own rules.

You'll also probably see some naming styles that add characters to specify something. For example, in C, using `_t` at the end of a new type is common - as you should be used to with types like `uint8_t`. You may also see `_f` for float things.

### Check all the things for failure

Opening a file? What if it doesn't exist.

Accessing a value at a pointer? What if somebody passed you a `NULL`.

Checking the size of a string? What if the `\0` is missing.

Writing good code requires thinking about all the ways it can fail. Some of this becomes routine, like adding `if (ptr == NULL){//complain}` to the start of any function your write in C that takes in pointers or arrays

{{< speech big >}}

Notice that 3 of my 4 examples are more-or-less C specific? This the biggest reasons people complain about it as a language. It's a shit show for "safety" - it makes you constantly think about everything that can go wrong, otherwise you're writing security vulnerabilities and the potential for your program to crash super hard. 

{{< /speech >}}

Alternatively, write functions so they **can not fail**. This is pretty hard to do though.

When you're writing functions, if they can fail, make sure they can tell the caller if they failed. Usually you do this by returning a `bool` of true for success and false for failure.

[TODO]

* Use tools to help
  * Colored regions
* Autoformatters
  * Should probably pick some of the important options in clang-format and talk about them.

* Static Analysis
* Comments & Doxygen
  * Document the 'Why' not the 'How' - Future you can read code, but future you probably won't remember why it's there or why it was done this way.
* Test your code.
* Make your tools work for you - especially your compiler.
* Track your TODOs
  * Often, you want to make something quick as a Proof of Concept (PoC) to know it's not a dead end. The problem is, we often don't go back and clean up our mess after we get it to work.

https://medium.com/@msandin/strategies-for-organizing-code-2c9d690b6f33

---

{{< quote "[xxiivv/development](https://wiki.xxiivv.com/site/development.html)" >}}

* Prototype before polishing. Get it working before optimizing it.
* Separate policy from mechanism, separate interfaces from engines.
* Write simple modular parts connected by clean interfaces.
* Design programs to be connected to other programs.
* Write programs to write programs when you can.
* Design for the future, because it will be here sooner than you think.
* In interface design, always do the least surprising thing.
* When a program has nothing surprising to say, it should say nothing.
* When a program must fail, it should fail noisily and as soon as possible.
* Write big programs only when it is clear by demonstration that nothing else will do.
* Consider how you would solve your immediate problem without adding anything new.

{{< /quote >}}

## Why You Shouldn't Write Big Programs: </br>"The Unix Philosophy"

There are absolutely times you'll need to write large, single purpose, cotained programs. For example, a video game fit's this description pretty well.

However, the vast majority of programs you may want to write probably don't need written, at least not in the way you're envisioning.

If you dug deep into the {{< button relref="Engineering/Linux/linuxshell" >}}Linux Shell{{< /button >}} and learned a bit of shell programming, you'd have come across the [Unix Philosophy](https://opguides.info/engineering/linux/linuxshell/) which is beautifully summed up by Peter H. Salus,

{{< quote "Peter H. Salus in A Quarter-Century of Unix " >}}

- Write programs that do one thing and do it well.
- Write programs to work together.
- Write programs to handle text streams, because that is a universal interface.

{{</ quote >}}

The idea is that for most programs - the actual process-data-and-move-on-with-life kind of programs - we can make them by stringing together simpler programs in our shell (or, today, in Python if it's a bit more complex) This means that for many "big programs" you might want to write, a "big program" is the wrong solution to begin with.

The main advatages of this design are that you'll have a pile of reusable parts and that each part has been tested independently.

For example,

`lynx -dump www.example.com | fltrdr`

Uses [Lynx](https://lynx.invisible-island.net) to get the text of a webpage and shoves it into [fltrdr](https://github.com/octobanana/fltrdr) to allow for very fast reading. That's two otherwise unrelated programs, chained together.

`for file in *.wav; do lame "$file" "$(basename "$file" .wav).mp3" ; done;` 

Is another good one from [this thread](https://stackoverflow.com/questions/68372/what-is-your-single-most-favorite-command-line-trick-using-bash) that will convert all the .wav files in a folder to .mp3.

If you get clever you can really get these chains to do some crazy shit. By reading log files, poking things on the network, and chaining together commands, you'll realize a large portion of the programs you might otherwise make can be be much simpler chains of existing tools or you may only need to make one custom tool to sit somewhere in that chain. You might do this in Bash (the language used above) or Python if there a fair amount of logic (writing conditionals and error handling in Bash is a tad awkward) but either way, that mindset of "I can make this by chaining together existing tools, maybe adding just a bit of my own code" will avoid tedious wheel reinvention.

Still, not *all* problems can be solved this way. Sometimes you actually do have to either reinvent some wheels or make a large program that isn't just a combination of existing tools. Generally, this is because of one or more of these reasons:

* You want to sell something and don't want to make it open source, and so you cant use existing open source tools (viral licenses)
* You're working on a very constrained system (needs to be high performance, low memory, low power, etc.)
* You have an original idea (You've looked everywhere and nobody's done it *or* it's something artistic, like a video game, audio effect, etc.)

or you just want to learn how something works, so you're making it from scratch, like making your own game engine.

Regardless, if you're on this page you're clearly thinking about writing something bigger than you've made so far. Depending on the language, your goals, and you're experience this can mean a lot of different things so to be clear, here I'm meaning writing something that is, at minimum, going to occupy multiple files.

## Object Oriented Programming

We already talked about {{< button relref="Engineering/Programming/Intro/prog8oo" >}}Object Oriented Programming{{< /button >}} a bit in the intro pages but there's a few more things that come with it you should know about:

[TODO]

Templates - https://www.geeksforgeeks.org/templates-cpp/ (Not technically OOP but it sorta fits here)

Operatator and Function overloading

Private & Public methods (also not necessarliy OOP, but make more sense in this context)

explain `this`

## Planning

## Design Patterns

For more advice on writing good code, are these things called "Design Patterns" - [Wikipedia has a big ol' list of 'em](https://en.wikipedia.org/wiki/Software_design_pattern#Structural_patterns) which is worth looking into, and if you just google the "software antipatterns" you'll find a huge list of things to avoid in code. A lot of these are high level and tend to miss why the *bad things* are done in the first place: time.

## Software Engineering

Software Engineering is a fucking nightmare. 

You'll hear terms like [Agile](https://en.wikipedia.org/wiki/Agile_software_development), [Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)), [Stand-up](https://en.wikipedia.org/wiki/Stand-up_meeting), Sprints, [Kanban Boards](https://en.wikipedia.org/wiki/Kanban_(development)), [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development), and the word "Actionable" enough that it makes you want to puke. The entire process is the corporatization of code, the distillation of a creative art into something gray and bland, lifeless and dull. They'll tell you it makes your code better, more organized, better tested. That this is the true way to do software development, and that it's necessary for writing good code. That all the best startups use all of these things 110% percent of the time and look how great they are, all the employees have access to an arcade at work, unlimited beer and soda at work, a pool table at work, a gym at work. Hell, they even do work at work! But maybe, just maybe, there should be some things that... aren't work?

Is that a radical idea, that a work-life balance means going home at the end of the work day and not working 60-hour weeks for a 40 hour salary so that you can meet a deadline of self-assigned deadlines. No, I will not talk about software engineering in earnest on OpGuides because the entire field is one of masochism and unsustaniability, where the only focus is to make a product good enough to sell to a larger, more abusive corporate overlord.

I'm not saying all the buzzwords above are bad things, I don't think they are. My problem is with the workaholic to burnout culture they tend to come along with as well as the inability to understand that humans do have emotions and are not, in fact, machines. Sometimes talking about something that is not actionable is still important just for the sake of thinking and letting the brain wander a bit. Sometimes it's hard to write the test case before the code is written, as you may not understand the problem 100% yet.

**It's the blind following of these ideas without thought about why they're used that's the problem**. It often results in more code that is harder to maintain, instead of good, clean code. Being overly rigid with any workflow- ironically even agile- without consideration for why it is used leads to a bad and unproductive work environment.

Having standards, workflows, tests, roadmaps, etc. are all good! You shouldn't just merge in any shit code. The problems start when working with others it becomes expected to work and write code in one super specific way -not just like, use camelCase, but like, actual restrictions on logic or over adherence to SOLID to the point the code is made unnecessarily complicated and hard to follow, as more and more boilerplate code forms to tie all the mess together.

Development teams do need a good way to stay organized, I just think a lot of how it's done in the Hail Corporate™ world results in worse code with more bugs and employees that need therapy.

Yes, you should test your code.</br>Yes, some of these methods can help.</br>No, you shouldn't turn this shit into a bonafide religion and your workers into cultists.

If in talking to others you can only think "What they're saying isn't actionable" you cease to be human.

<img class="center" src="/nonfree/character/throw.png" alt="Table Flip" height="200em">
