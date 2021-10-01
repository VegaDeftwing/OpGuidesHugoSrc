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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra arcu tortor, et mattis erat tempor in. Sed ipsum eros, lacinia at efficitur vitae, tempus sed arcu. Morbi neque neque, ullamcorper vel luctus et, viverra nec felis. Aliquam erat volutpat. Proin mattis sapien sapien, vitae iaculis leo rhoncus tincidunt. Nunc tincidunt mauris quis placerat aliquam. Vivamus consequat consectetur justo eu sollicitudin. Vestibulum porttitor mattis feugiat. Fusce et lacinia lacus.

{{< speech boi >}}

Wouldn't it be cool if I had conversation blocks?

{{< /speech >}}


{{< speech right >}}

At least both left and right aligned blocks are working

see?

{{< /speech >}}

{{< speech throw>}}

Yep.

And I can set the image for each one

{{< /speech >}}


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra arcu tortor, et mattis erat tempor in. Sed ipsum eros, lacinia at efficitur vitae, tempus sed arcu. Morbi neque neque, ullamcorper vel luctus et, viverra nec felis. Aliquam erat volutpat. Proin mattis sapien sapien, vitae iaculis leo rhoncus tincidunt. Nunc tincidunt mauris quis placerat aliquam. Vivamus consequat consectetur justo eu sollicitudin. Vestibulum porttitor mattis feugiat. Fusce et lacinia lacus.
