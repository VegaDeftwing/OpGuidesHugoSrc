# 10.4 - Getting to know our tools

<script>
    document.getElementById("codeMenu").open = true;
</script>

Okay, we now have the ability to run and debug code but we still need set up and go over a few features in your text editor (VSCode) to make things easier. Plus, now's a good time to introduce comments and indentation and why they matter in code.

This may seem a bit out of order, but at this stage there's problems with prioritizing how much to learn about the tool versus the craft. To equate to something more tangible, it's like learning the skills to design and craft a wood working project verses learning to use a saw. Ultimately, you need to do both. While, yes, learning the tool will come with experience, you still need to know enough not to cut your fingers off - or, in this case, to not waste a ton of time and think programming is overly difficult and tedious.

Most of this comes down to learning a few extra shortcuts and setting some preferences. Imagine using a computer without <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">C</span> for copy, <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">V</span> for paste, etc.? It would be really slow and annoying to copy, paste, select all, save, and other basic actions. Well, just like any other software learning how to use your text editor and related tools for writing code will make it way less awful.

{{< details "Generic shortcut reference" >}}

It occurs to me that enough people today are growing up on a smart phone that it's possible not everyone will know all of the common shortcuts. Don't feel bad if this is you. Here's a quick table:

| Key Combo                                                    | Typical Action                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">C</span> | Copy                                                         |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">V</span> | Paste                                                        |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">X</span> | Cut (Copy & Remove)                                          |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">S</span> | Save                                                         |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">F</span> | Find                                                         |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">H</span> | Find & Replace                                               |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">Z</span> | Undo                                                         |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">A</span> | Select All                                                   |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">N</span>  (or  <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">T</span> , depending on the program) | Make a new document (or new tab)                             |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">+</span> </br>OR</br> <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + mouse wheel up | Zoom in / Increase font size                                 |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">-</span>  </br>OR</br> <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + mouse wheel down | Zoom out / Decrease font size                                |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">→</span> / <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">←</span> | Move one word to the right/left                              |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">backspace</span> | Delete whole word (depending on your hands, keyboard, and typing style this might be uncomfortable) |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">W</span> | Close document                                               |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">P</span> | Open print dialogue (VS code doesn't have one!)              |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">tab</span> | Change tab (works in browsers, VSCode, etc.)                 |

---

| Function Key                                                 | Typical Action                                            |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">F11</span> | Make the program full screen                              |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">F5</span> | Refresh the page                                          |
| <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">alt</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">F4</span> | Close application (In Windows, may not work in Linux/Mac) |
| F12                                                          | Open up developer tools (Usually in a web browser)        |

Keep in mind, the specific program you're using will almost certainly have many more than this, and may actually override some of these. As we go through this page I'll be showing you some of VSCode's shortcuts, but there's a full cheat-sheet that depends on your os - here a link to each:

* [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
* [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
* [macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

They're **mostly** the same, but the mostly may trip you up, so ╮(─▽─)╭

{{< /details >}}

## Indentation

In Python, indentation is relevant to the meaning of the code, in C, while not necessary,<a class="ptr">(1)</a> reading it without sucks. So, how does one indent well? Well, there's been an ongoing fight between programs on if you should indent by using tabs, 2 spaces, 3 spaces, or 4 spaces. 

Honestly, it doesn't matter much as long as it's consistent in a given project. VS Code will default to trying to match the style of whatever file you open - this works because either way, you should be able to literally hit the tab key. If the project uses spaces, it will insert the correct number of spaces. Tabs? a tab. Magic.

With this, hitting backspace will remove however many spaces one tab inserts automatically - this is actually the default in VSCode, with a tab key being 4 spaces. This can be a bit strange when navigating code though, as if tabs get turned into spaces, you'll have to hit arrow keys an unnatural amount of times. If you set `File→Prefrences→Settings→"Editor: Stick Tab Stops"` to "on", they'll always "feel" like tabs even if they're not and you can just never think about it again. {{< smalltext >}}(unless you have to open it in another editor){{< /smalltext >}}

```python
# Here's a comment in Python

def my_function():
    # This line is indented in by one tab
    # code that is indented like this in
    # python is a child of the block above
    # (where it makes sense)
    # so, these next to lines belong to
    # my_function()
    a = 1
    return a

# This code, going back to no-indent,
# is not in my_function()
for i in range(10):
    # but this print is in this for loop
    print(i)
    
def my_other_function():
    for i in range(10):
        for j in range(20):
            # This will run 200 times
            # Do you see why?
            print(i * j)
```

## White space

When writing code, you'll want to add some empty lines where they make sense. I'm not going to provide to much guidance on this because it's really something that's a you'll-know-it-when-you-see-it, but don't be afraid to add blank lines in C or python to make your code more clear.

## Comments

Before we actually start writing code, I want to show you that you can mix in comments - that is messages to yourself - into your code. Writing useful comments is an artform. It's often much more relevant to write **why** you've done something than how code works - mostly because if the code isn't pretty obvious to read it's *probably* not good code (there are exceptions, obviously.)

{{< columns3 >}}

# C

In C you can type comments in two ways, either by beginning a line with

`// two slashes`

or

`/* using these */`

The advantage to the latter is it works for multiple lines

```c
int a = 12;
/* The comment starts here.
 This is still a comment.
 And so is this.
 The comment ends after this → */
printf("%d",a);
```

though, a lot of people (myself included) prefer to only use `//` and just put it at the start of each line in a multi-line comment.

<--->

# Python



All comment in python start with a `#`. If we want multiple lines, we just need to start each one with a `#`

```python
a = 12
# The variable a sholud be 12 
# here so this will print 12
print(a)
```

{{< /columns3 >}}

One nice thing you can do with comments is put them before a line of code to "comment out" a section you don't want to run. For example, using python:

```python
a = 12
b = 8
c = 0
# The following line won't run because we've put it in a comment:
# c = a + b
# So this will print 0:
print(c)
```

But if we removed the `# ` from before the `c = a + b` it would run again. You can do the same thing in C, just using the different comment syntax. Sometimes, this is really helpful for debugging.

In VSCode, if you want to comment out a single line, just type <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">ctrl</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">/</span>  when on the line in question and that line will have the language's comment symbol added to it. If you select multiple lines, that'll work as you expect too. You can do this on a blank line to start typing a new comment too.

## Autoformatting

It's pretty easy to have your code get gross with mixed indentation types, weirdly wrapped lines, etc. Autoformatters are often a bit overly aggressive, but are helpful for keeping your code clean. For example, say we had this messy C:

```c
int main()
{
    for(int i = 0; i < 10; i++){if(i%2==1){
    printf("%d\n",i);
}
}
}
```

This is really awkward to read. Technically valid, but awkward. If we run it though an autoformatter it can turn it back into something reasonable:

```c
int main() {
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 1) {
            printf("d\n", i);
        }
    }
}
```

[TODO] Setting this up

## Fonts!

One thing you should notice about code editors is that they exclusively use fonts. This means that every character takes up the same amount of room. Most fonts don't do this. This is really important for readability and editing code. Another important note is making characters very distinct. You don't want to be confused if something is an i, I, l, L, or 1, or if it's a 0, o, or O

### Ligatures

A few years ago, somebody had the neat idea of making fonts where if you type some common programming symbol combinations, they'll visually turn into a symbol with the meaning. For example, `!=` means "not equal" in almost every language, so, if you use a font that supports it, it will **visually** replace that combination of characters with a ≠ symbol (though, it'll be two characters wide to keep it monospace but true to the actual length) - see https://www.programmingfonts.org/#firacode for an example. Try changing line 21 to be `if (gutterClass != "CodeMirror-linenumbers") {` and you'll see what I'm talking about.



## Multiple selections, symbol renaming, folding, etc.

### Multiple Selections & Folding

Next up, I want to point out is using multiple selections at once. Go look at https://code.visualstudio.com/docs/editor/codebasics and it's one of the first things on the page. If you keep scrolling, eventually you'll see Folding as well. That can be handy for large files - though you probably shouldn't let files get that big to begin with.

### Rearranging lines

In code, the order you do things matters. If you have code like

```python
do_thing_a()
do_thing_b()
```

and you wanted it to be 

```
do_thing_b()
do_thing_a()
```

You could cut and paste, or you could just do <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">alt</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">↑</span>  with the cursor on the `do_thing_b()` line or  <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">alt</span> + <span style="border: 1px solid #fff;border-radius: 3px;padding: 4px;">↓</span> with the cursor on the `do_thing_a()` line. Either way, the point is you can move lines up and down as you please.

### Symbol renaming

[TODO] explaining what this is without having actually explained what a symbol is weird.

### Colored Brackets

First up is colored brackets. These will make it so each bracket pair is colored so it's more obvious what goes with what, for example, with the above code:

<pre>
int main() <span style="color: white">{</span>
    for <span style="color: red">(</span>int i = 0; i < 10; i++ <span style="color: red">)</span><span style="color: red"> {</span>
        if <span style="color: cyan">(</span>i % 2 == 1<span style="color: cyan">)</span> <span style="color: cyan">{</span>
            printf<span style="color: green">(</span>"d\n", i<span style="color: green">)</span>;
        <span style="color: cyan">}</span>
    <span style="color: red">}</span>
<span style="color: white">}</span>
</pre>

Of course, this in addition to the other coloring that happens. The end result is that almost everything is colorful, which is a bit odd, but this change is worth it.

In VS Code, you can turn this on in `File→Prefrences→Settings→"Editor: Bracket Pair Colorization: Enabled"`

### Code navigation

There's quite a few little tricks to navigate between code, but one you'll want to know of for sure is the ability to control+click on a function name (we'll get to what functions are eventually) and be brought to the code that makes it work. This is particularly helpful when that code is in another file - also something we'll see later. So, just stow this little knowledge nugget away: ctrl+click a function name will bring you to the function's code.

<ol hidden id="footnotes">
<li>They're not techncially needed in C because curly braces - { and } - define sections of code. However, while the computer may still be able to understand code without reasonable indentation, humans (including you) won't be able to easily, so it still matters.  </li>
</ol>
