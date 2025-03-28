# How to make OpGuides Better

[From 3b1b:](https://www.youtube.com/watch?v=ojjzXyQCzso)

* Restructure things to go from Concrete to Abstract, not the other way around; Show patterns & examples, before going to the symbolic and abstract
* Go really esoteric and specific - it builds a loyal audience
* Do not start with definitions - let people think they could have come to those definitions themselves
* Start with motivating problems

 [source](https://mastodon.social/@zensaiyuki/102683452946911475)

* 19. Don't force the user to remember things if you can help it. Humans are really bad at remembering things. This includes passwords, sms codes, sums, function names, and so on.
* 22. show, don’t tell. lengthy tutorials and “protips” forced on the user at app start usually do nothing other than get in the way of the user’s task. if you want to teach the user about a feature, include easy to find examples.

From others but I forgot where:

* Start with misconceptions
* Put icons on all lists

My own thoughts:

* Everything should be made concrete as soon as possible, with demos

  * Ideally, these demos should rely on free software or inexpensive or salvage hardware

* Everything should refer back to reality- mention if something might work out mathematically but not be practical for reasons like noise, floating point precision, cost, power.

* To some extent, it will always be necessary to cover trivial examples first. Call these out. Ex: If we're only making resistor networks, point out that these do literally nothing but make heat

  

# Tools for making OpGuides

https://excalidraw.com - for 'hand drawn' svg diagrams

[detexify](https://detexify.kirelabs.org/classify.html) - for Latex symbol lookup

http://shapecatcher.com - for unicode symbol lookup

https://rawgraphs.io - for making pretty graphics with data (csv, json, etc.)

https://ivanceras.github.io/svgbob-editor/ - ASCII text to SVG

# Hacks

> note, youtube "copy embed code" depends on current size on screen of the embed, this can be fixed a bit by changing the start to <iframe width="100%" height="500"

# Style Checking (h1)

## h2 The Quick Brown Fox

test

### h3 The Quick Brown Fox

test

#### h4 The Quick Brown Fox

test

##### h5 The Quick Brown Fox

test

###### h6

test

<div style='color: red'>

- listitem
- listitem
- listitem

Markdown can be wrapped in html to apply theming or do other things:

</div>


<details>
<summary>Click to expand</summary>

- Abc
- Abc

</details>



[cinwell website](https://en.wikipedia.org/wiki/Webring ':include :type=iframe width=100% height=400px')



<link href='https://fonts.googleapis.com/css?family=Cabin+Condensed:700' rel='stylesheet' type='text/css'>



<details>
<summary>Bunch of Codepen Links</summary>

https://vincentgarreau.com/particles.js/

https://codepen.io/alexzaworski/pen/mEkvAG

https://codepen.io/P1N2O/pen/pyBNzX

https://codepen.io/saransh/pen/BKJun

https://codepen.io/fabiowallner/pen/ozkoYo

https://codepen.io/lbebber/pen/EVxvWN

https://codepen.io/wagerfield/pen/wftcE

</details>

[decrypting effect](https://medium.com/chingu/decrypting-effect-c5fc2a071354) & https://github.com/bartobri/no-more-secrets#the-nms-library

> Columns2 shortcode is a very shittily done shortcode that is just a slight mod on cols, it centers the text and adds a line under each box. This works well for making pseudo-tables that don't fuckup content width or have issues with rendering on mobile

# Shortcodes

## Speech

{{< tip >}}

these images have to be added manually in `themes/bookvega/assets/_shortcodes.scss`; however, only the one varient need be added, the `right` style is generic and can be applied as the first argument, that is: `{\{\< speech right boi >\}\}` will work, with only the varient for the `boi` picture needing added.

{{< /tip >}}

This is filler text.

{{< speech boi >}}

Wouldn't it be cool if I had conversation blocks?

{{< /speech >}}


{{< speech right >}}

At least both left and right aligned blocks are working

see?

{{< /speech >}}

{{< speech throw>}} Yep. 

And I can set the image for each one

{{< /speech >}}

{{< speech halo >}}

halo

{{< /speech >}}

{{< speech suit >}}

suit

{{< /speech >}}

{{< speech math >}}

math

{{< /speech >}}

{{< speech blegh >}}

blegh

{{< /speech >}}

{{< speech hack >}}

hack

{{< /speech >}}

{{< speech boba >}}

boba

{{< /speech >}}

{{< speech yesbutno >}}

yesbutno

{{< /speech >}}

{{< speech paper >}}

paper

{{< /speech >}}

{{< speech yeet >}}

yeet

{{< /speech >}}

{{< speech tired >}}

tired

{{< /speech >}}

{{< vale >}}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra arcu tortor, et mattis erat tempor in. Sed ipsum eros, lacinia at efficitur vitae, tempus sed arcu. Morbi neque neque, ullamcorper vel luctus et, viverra nec felis. Aliquam erat volutpat. Proin mattis sapien sapien, vitae iaculis leo rhoncus tincidunt. Nunc tincidunt mauris quis placerat aliquam. Vivamus consequat consectetur justo eu sollicitudin. Vestibulum porttitor mattis feugiat. Fusce et lacinia lacus.{{< /vale >}}

## Spoiler

This text is before a spoiler {{< spoiler >}} This is spoiler text {{< /spoiler >}} This text is after a spoiler

## Attribution

<img src="/nonfree/character/opguidesSiplick.png" alt="opguidesSiplick" style="zoom:34%;" />

{{< attribution >}}Character is owned by me, art is by [Siplick](https://www.deviantart.com/siplick){{< /attribution >}}

## Best

{{< vale >}}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra arcu tortor, et mattis erat tempor in. Sed ipsum eros, lacinia at efficitur vitae, tempus sed arcu. The website {{< best >}}[Hackaday](https://hackaday.com/){{< /best >}} is pretty neat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra arcu tortor, et mattis erat tempor in. Sed ipsum eros, lacinia at efficitur vitae, tempus sed arcu. {{< /vale >}}

## Big Quote

{{< vale >}}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra arcu tortor, et mattis erat tempor in. Sed ipsum eros, lacinia at efficitur vitae, tempus sed arcu.{{< /vale >}}

{{< bigquote "source" >}}

Something really inspirational here.

{{< /bigquote >}}

{{< vale >}}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra arcu tortor, et mattis erat tempor in. Sed ipsum eros, lacinia at efficitur vitae, tempus sed arcu.{{< /vale >}}

## Quote

{{< quote "source" >}}

Something still worth putting a block around here

{{< /quote >}}

## Button

buttons can  be inline {{< button relref="/music/gettingstarted">}}Music - Getting Started{{< /button >}} and look pretty snazy.
Note that internal links to local pages will self style like buttons anyway.

## Columns

### Basic

{{< columns >}}

{{< vale >}}Praesent at convallis turpis. Donec vitae tincidunt turpis. Mauris sed auctor ipsum, at semper erat. Aliquam elementum enim id hendrerit vulputate. Vestibulum in enim mi. Praesent blandit vitae quam a sodales. Nunc lorem eros, efficitur quis sollicitudin non, eleifend accumsan diam. Phasellus varius nulla lorem. Nunc sem diam, posuere sit amet eros non, finibus iaculis lectus.{{< /vale >}}

<--->

{{< quote "source" >}}

Something still worth putting a block around here

{{< /quote >}}

{{< vale >}}In posuere orci id malesuada pharetra. Cras odio augue, imperdiet accumsan nibh eget, facilisis tempus turpis. Integer sodales nisl nec mollis accumsan. Sed ut eros rutrum, vehicula enim at, accumsan sem{{< /vale >}}

<--->

<img src="/nonfree/character/opguidesSiplick.png" alt="opguidesSiplick" style="zoom:34%;" />

{{< attribution >}}Character is owned by me, art is by [Siplick](https://www.deviantart.com/siplick){{< /attribution >}}

{{< /columns >}}

### Varient 2 - use for tables when possible

{{< columns2 >}}

{{< vale >}}Praesent at convallis turpis. Donec vitae tincidunt turpis. Mauris sed auctor ipsum, at semper erat. Aliquam elementum enim id hendrerit vulputate. Vestibulum in enim mi. Praesent blandit vitae quam a sodales. Nunc lorem eros, efficitur quis sollicitudin non, eleifend accumsan diam. Phasellus varius nulla lorem. Nunc sem diam, posuere sit amet eros non, finibus iaculis lectus.{{< /vale >}}

<--->

{{< quote "source" >}}

Something still worth putting a block around here

{{< /quote >}}

{{< vale >}}In posuere orci id malesuada pharetra. Cras odio augue, imperdiet accumsan nibh eget, facilisis tempus turpis. Integer sodales nisl nec mollis accumsan. Sed ut eros rutrum, vehicula enim at, accumsan sem{{< /vale >}}

<--->

<img src="/nonfree/character/opguidesSiplick.png" alt="opguidesSiplick" style="zoom:34%;" />

{{< attribution >}}Character is owned by me, art is by [Siplick](https://www.deviantart.com/siplick){{< /attribution >}}

{{< /columns2 >}}

**Note, this ends with this bottom line**

### Varient 3

{{< columns3 >}}

{{< vale >}}Praesent at convallis turpis. Donec vitae tincidunt turpis. Mauris sed auctor ipsum, at semper erat. Aliquam elementum enim id hendrerit vulputate. Vestibulum in enim mi. Praesent blandit vitae quam a sodales. Nunc lorem eros, efficitur quis sollicitudin non, eleifend accumsan diam. Phasellus varius nulla lorem. Nunc sem diam, posuere sit amet eros non, finibus iaculis lectus.{{< /vale >}}

<--->

{{< quote "source" >}}

Something still worth putting a block around here

{{< /quote >}}

{{< vale >}}In posuere orci id malesuada pharetra. Cras odio augue, imperdiet accumsan nibh eget, facilisis tempus turpis. Integer sodales nisl nec mollis accumsan. Sed ut eros rutrum, vehicula enim at, accumsan sem{{< /vale >}}

<--->

<img src="/nonfree/character/opguidesSiplick.png" alt="opguidesSiplick" style="zoom:34%;" />

{{< attribution >}}Character is owned by me, art is by [Siplick](https://www.deviantart.com/siplick){{< /attribution >}}

{{< /columns3 >}}

**Note, this has vertical bars separating content**

## Details

{{< vale >}}Praesent at convallis turpis. Donec vitae tincidunt turpis. Mauris sed auctor ipsum, at semper erat. Aliquam elementum enim id hendrerit vulputate.{{< /vale >}}

{{< details "Title" open >}}

{{< vale >}}In posuere orci id malesuada pharetra. Cras odio augue, imperdiet accumsan nibh eget, facilisis tempus turpis. Integer sodales nisl nec mollis accumsan. Sed ut eros rutrum, vehicula enim at, accumsan sem{{< /vale >}}
{{< /details >}}

## Embed PDF

{{< embed-pdf url="./nonfree/blog/ternary.pdf" >}}

## Expand

{{< tip >}}Technically, the Expand shortcode is deprecated and you'll get a warning saying to use details. For now I don't care as it looks significantly better. They can always be changed latter.{{< /tip >}}

**also note that details tags look much better if, for some reason, you need to stack multiple**

{{< vale >}}Praesent at convallis turpis. Donec vitae tincidunt turpis. Mauris sed auctor ipsum, at semper erat. Aliquam elementum enim id hendrerit vulputate.{{< /vale >}}

{{< expand >}}

{{< vale >}}In posuere orci id malesuada pharetra. Cras odio augue, imperdiet accumsan nibh eget, facilisis tempus turpis. Integer sodales nisl nec mollis accumsan. Sed ut eros rutrum, vehicula enim at, accumsan sem{{< /vale >}}

{{< /expand >}}

## Hints

[TODO] make a matching color varient for each section

{{< hint info >}}

info hint

{{< /hint >}}

normal text

{{< hint warning >}}

warning hint

{{< /hint >}}

normal text

{{< hint >}}

default hint

{{< /hint >}}

normal text

{{< hint gray >}}

gray hint

{{< /hint >}}

normal text

{{< hint danger >}}

danger hint

{{< /hint >}}

**For comparison, a markdown quote block:**

> quote block.

## Tips

{{< tip >}}

this looks similar to a hint, but is more stark on the page and has the "!"

{{< /tip >}}

## Katex

$ \LaTeX $ this syntax can be enabled if I end up doing a lot of math again: https://gohugo.io/content-management/mathematics/

can be used to render {{< katex >}}\LaTeX{{< /katex >}}

note, the 'display' option changes the look.

{{< katex display >}} f(x) = \int_{-\infty}^\infty\hat f(\xi),e^{2 \pi i \xi x},d\xi {{< /katex >}}

also, aligned does work to keep the equal signs aligned though each equation

{{< katex display >}}

\begin{aligned}

3x^2+3+(2-x)(4-x)+2&=12+(3+(x*2))+2​ \\

3x^2+3+(2-x)(4-x)&=12+(3+(x*2))​

\end{aligned} 

{{< /katex >}}

## Mermaid

[TODO] Not all the mermaid charts are styled nicely, but they should at least render

{{< mermaid >}}

sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
            

{{< /mermaid >}}

## Section

Don't use this.

## Smalltext

This is {{< smalltext >}}very similar to attribution, but leaves less white space{{< /smalltext >}} and can be used inline.

{{< smalltext >}}

very similar to attribution, but leaves less white space

{{< /smalltext >}}

or not.

## Tab & Tabs

{{< tabs "hashing" >}}
{{< tab "Windows" >}}

# Windows

open up a command prompt by pressing ctr+r and typing 'cmd' then enter, and we'll need to navigate to the location of the downloaded file it should be named something along the lines of archlinux-20xx.xx.xx-x86_64.iso and be in your Downloads folder. When you open a command prompt on Windows it should start out in your user folder (C:\Users\%username%\). To list the folders in this folder you can type 'dir' and press enter. You should, at minimum, see folders like 'Downloads' 'Desktop' and 'Documents' to enter the Downloads folder simply type 'cd Dow' and press tab, the line should auto-complete to 'cd Downloads', then press enter. Now you can type 'certutil -hashfile arch' , press tab to complete it to 'certutil -hashfile archlinux-20xx.xx.xx-x86_64.iso' then add 'sha1' on the end so the finally command looks like

```bash
certutil -hashfile archlinux-20xx.xx.xx-x86_64.iso sha1
```

> Note, if this spits out "The process cannot access the file because it is being used by another process." you'll need to close your torrent client or stop seeding the file first!

So let's look at this command. The first part, certutil, is a program on your computer, '-hashfile' says the next string of text is the name of the file we want to examine, and the last part sha1 is the checksum as mentioned before. Finally, if you go back to https://www.archlinux.org/download/ and look under 'Checksums' you can compare the output of the command you just ran against the SHA1 sum provided to be sure you didn't have any errors in the file. This is mostly a security check as in theory someone could provide a 'bad' version of the OS containing malware, but such a version would produce an incorrect checksum, in practice this is extraordinarily uncommon. Though this does also serve to ensure the download wasn't corrupted in any way either.
{{< /tab >}}

{{< tab "Mac" >}}

# Mac

open up a terminal by going to the Utilities fore in Applications and open 'Terminal'. The mac terminal is very, very similar to what you'll use in Linux actually, and the commands here are actually identical. You should see something like

```bash
MacBook:~ username$
```

waiting for input.

That `~` represents that you're in your user or 'home' folder, and assuming you downloaded Arch's install image to your downloads folder you should be able to type

`MacBook:~ username$ shasum -a 1 Downloads/arch`

followed by pressing tab to make that auto complete to something like

`MacBook:~ username$ shasum -a 1 Downloads/archlinux-20xx.xx.xx-x86_64.iso`

upon pressing enter the terminal should print out a long string of text.

So let's look at this command. The first part, shasum, is a program on your computer, '-a 1' says to use the sha1 algorithm instead of something like sha256, and the last part is the filename we want to compute the checksum of. Now, if you go back to https://www.archlinux.org/download/ and look under 'Checksums' you can compare the output of the command you just ran against the SHA1 sum provided to be sure you didn't have any errors in the file. This is mostly a security check as in theory someone could provide a 'bad' version of the OS containing malware, but such a version would produce an incorrect checksum, in practice this is extraordinarily uncommon. Though this does also serve to ensure the download wasn't corrupted in any way either.

{{< /tab >}}

{{< /tabs >}}

# Hack-y stuff:

## Footnotes

The following should be in a footnote: <footnote>This is a test footnote</footnote> cont. 

## Colored Tables

**NOTE the in document `<style>` block above the table.**



<style>
.models {
    width: 100%;
    text-align: center;
}
.models th {
background: #fff3;
word-wrap: break-word;
text-align: center;
}
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(-n) > td:nth-child(1) { background: #009cdf55; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n+5) > td:nth-child(2) { background: #009cdf55; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n+3) > td:nth-child(3) { background: #009cdf55; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n) > td:nth-child(4) { background: #009cdf55; }
</style>


<div class="models">

| Traditional:   | Infrastructure as a Service | Platform as a Service | Software as a Service |
| -------------- | --------------------------- | --------------------- | --------------------- |
| Applications   | Applications                | Applications          | Applications          |
| Data           | Data                        | Data                  | Data                  |
| Runtime        | Runtime                     | Runtime               | Runtime               |
| Middleware     | Middleware                  | Middleware            | Middleware            |
| OS             | OS                          | OS                    | OS                    |
| Virtualization | Virtualization              | Virtualization        | Virtualization        |
| Servers        | Servers                     | Servers               | Servers               |
| Storage        | Storage                     | Storage               | Storage               |
| Networking     | Networking                  | Networking            | Networking            |

</div>

Note, https://www.tablesgenerator.com/html_tables may be of use

## Table Sorting

Tables need to be raw html, not markdown and then use `<table id="sort" style="position:relative; width:130%; left: 0%;">` (width flag not required). Again, https://www.tablesgenerator.com/html_tables may be of use.

See <a href="/music/software/plugin/">Music/software/plugin.md</a>

## Image slider

use `<script src="/js/slider.js"></script>` from [VincentTV](https://github.com/VincentTV/before-after-slider). See posts/lowres.md

# Compression

Please use the `.webp` format for new images, or at the very least run them though `optipng` or `jpegoptim`. At some point I intend to go though and convert every image on opGuides.

# Easy mistakes

* Youtube Embeds need to have the `list?=` part removed or they're almost always broken.

{{< details "expand for full code" >}}

```python
this
is
a
very
long
code
block
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o 
p
q
r
s
t
u
v
w
x
y
z
1
2
3
4
5
6
7
8
9
43
```

{{< /details >}}

# Fairfax HD

The website already has https://www.kreativekorp.com/software/fonts/fairfaxhd/#coverage for the tokipona page, so might as well use it. This gives us some fairly handy symbols too.

mocktation 

 question comma

󿃇 powerline 󿃆

  win,  pi,  apple

🯰 🯱 🯲 🯳 🯴 🯵 🯶 🯷 🯸 🯹

🮖🮖🮖🮖🮖🮖

if you want to use a conlang, put it in a `<div class="conlang">` or it will still probably render incorrectly.

# Other useful tools:

* https://charlesstover.github.io/rainbow-text/

<kbd> test </kbd>



<div class="egg">
<p style="font-family:London Underground Regular;">This is a test</p>
</div>
</br>

<div class="scifi">
<p>WARNING: Test test test</p>
</div>

## Testing page links

Link to section on the same page [test link](#compression)

[Engineering](/engineering) </br>
[Music](/music) </br>
[Design](/design) </br>
[Phil](/phil) </br>
[Interviews](/interviews) </br>
[Other](/other) </br>

[Section on Engineering Page](/engineering/#int) </br>
[Section on Music Page](/music/#int) </br>
[Section on Design Page](/design/#int) </br>
[Section on Phil Page](/phil/#int) </br>
[Section on Interviews Page](/interviews/#int) </br>
[Section on Other Page](/other/#int) </br>

[youtube video](youtube.com)

[Wikipedia](https://en.wikipedia.org/wiki/Exam)

[github page](github.com)

[other page](example.com)