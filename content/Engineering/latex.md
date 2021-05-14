# Appendix 5 - {{< katex >}}\LaTeX{{< /katex >}} & Markdown

## Like the kink?

{{< katex >}}\LaTeX{{< /katex >}}, pronounced Lay-Tech, is a document writing and formatting 'language' that acts pretty different from MS Word. It's primarily used for writing fancy math equations, academic, journal, or conference papers, as such, you might *have* to use it at some point to conform to one standard or another (like IEEE).

As an example of what {{< katex >}}\LaTeX{{< /katex >}} formatting looks like, check this equation out:

{{< columns >}}

x = a_0 + \cfrac{1}{a_1+ \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cfrac{1}{a_4} } } }

<--->

{{< katex >}}

x = a_0 + \cfrac{1}{a_1+ \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cfrac{1}{a_4} } } }

{{< /katex >}}

{{< /columns >}}

Of course, it can both be much simpler and much more complex than this. On the simple side, basic {{< katex >}}\LaTeX{{< /katex >}} supports just writing a paragraph with no special symbols or commands, just basic text, and this will be rendered normally. On the 'middling' side, you'll see {{< katex >}}\LaTeX{{< /katex >}} figures, tables, and citations, which allow you to do things like easily make a figure add `\label{fig:my_thing}`to it, then reference in the text with code like `\ref{fig:my_thing}`, making it so you don't if you add a figure later you don't have to go back and increment all following figure references by one. The syntax can get a bit brutal though, so using tools like [tablesgenerator.com](https://www.tablesgenerator.com) and [detexify](https://detexify.kirelabs.org/classify.html) can be a life saver.

You'll probably end up googling how to do most things in {{< katex >}}\LaTeX{{< /katex >}}, find that a lot of things don't really sit where you want them to ("Why is this figure in the wrong spot?"), and end up using a lot of packages to write it. Frustratingly, most of the desktop {{< katex >}}\LaTeX{{< /katex >}} clients suck, so it seems most people just use [Overleaf](https://www.overleaf.com/) now, which does have a free tier, but is a paid web-app. Fortunately, it actually works incredibly well and has very nice Google-docs like multi-user features.

---

## Markdown?

Markdown is what most of this website is written in, though there are various additional features this site uses that are *not* part of the common markdown standard. In general, markdown is just a stupid fast way to spit out formatted text that can still be interpreted as plain text. If you're thinking "Formatted Plain text? What the fuck?" Yeah, that's a valid response. Let me show you:

{{< columns >}}

# This is a title

here are some words.

This **word** is bold.

*italics* too.

* here's a list
* item two

here's a separator line

---

- [ ] here's a task list
- [x] with an item checked

## heading

```python
if foo:
    do bar()
```

### smaller heading

> Quote block

This is a [link](http://localhost:1313/engineering/latex/).

<--->

```markdown
# This is a title

here are some words.
This **word** is bold.
*italics* too.

* here's a list
* item two

here's a separator line

---

- [ ] here's a task list
- [x] with an item checked

## heading

​```python
if foo:
    do bar()
``'

### smaller heading

> Quote block

This is a [link](www.google.com).
```

{{< /columns >}} 

As you can see, it's pretty simple to read and write. With a markdown render, it will look pretty and formatted like it does on this page, but if you have to view it as raw, plain text, it's still totally human readable, and syntax highlighting for markdown is common.

Some things in markdown are a bit less obvious though, for example, images and tables:

{{< columns >}}

| This | is a | Table |
| ---- | ---- | ----- |
| 1    | 2    | 3     |
| 4    | 5    | 6     |
| 7    | 8    | 9     |

![this description helps for blind people](/box.png)

<--->

```markdown
| This | is a | Table |
| ---- | ---- | ----- |
| 1    | 2    | 3     |
| 4    | 5    | 6     |
| 7    | 8    | 9     |

![this description helps for blind people](/box.png)
```

{{< /columns >}}

Weirder yet, a lot of markdown supports mixed in html, css, and sometimes {{< katex >}}\LaTeX{{< /katex >}}, although support for all of these is not always available. When this is available though, it's a pretty awesome way to make custom document templates and hammer out shareable html pages with embedded YouTube videos or Tweets, or make a pdf with an html header or other elements (letting you do things like centering, custom text sizes, etc. which markdown doesn't normally support) while still hammering out the body in pure text, which is super fast to type.

You'll find a lot of the web actually supports markdown input, including Github, Reddit,  Disquis forums, a lot of chat clients, etc. Unfortunately, the extent to which they support the more advanced features varies.

For writing markdown, I generally use [Typora](https://typora.io), which is *not* FOSS. It's listed as 'Free during beta' but it's been in beta for a very long time now, and I suspect the old builds would still work even if it does go paid, so I'm comfortable recommending it.

---

This page really is just to inform you of the *existence* of Markdown and {{< katex >}}\LaTeX{{< /katex >}}, though honestly I'm not sure how you could have gotten this far without writing a `README.md` on GitHub. Regardless, the internet really does have a lot of good sources on both.



For S&Gs, check out this StackExchange question: "[How do I make my document look like it was written by a Cthulhu-worshipping madman?](https://tex.stackexchange.com/questions/29402/how-do-i-make-my-document-look-like-it-was-written-by-a-cthulhu-worshipping-madm)"



If you would like practice with at least one flavor of Markdown (with [Hugo](https://gohugo.io) 'Shortcodes', {{< katex >}}\LaTeX{{< /katex >}}, html, css, and more baked in poorly), feel free to find a page in need of love on this website and submit a pull request on GitHub.