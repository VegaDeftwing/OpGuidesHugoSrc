---
title: "How I Make OpGuides"
slug: "howIMakeOpGuides"
author: "Vega Deftwing"
date: 2021-02-07
tags: meta
---

## History

Before I can get into how OpGuides works now, I need to provide some history so that you can learn from my mistakes.

The first iteration of OpGuides was OpinionatedEngineering.md. A single markdown file so long that the scroll bar was hard to grab. It was meant to be viewed and distributed not as a website, but as a file to be opened with https://typora.io (so that the html and everything rendered- though in theory any markdown editor would do)

That quickly became tedious, and I decided an actual website would be a lot better, so, I made a website using [Jekyll](https://jekyllrb.com). At least for OpGuides, Jekyll really didn't work all that well. I had to hack things together and in general getting some of the features I needed to work (like math rendering and footnotes) was a disaster.

The next iteration of OpGuides used [Docsify](https://docsify.js.org/#/). If you want a site similar to opguides and want it to *just work* this is probably your best option. Honestly it can still do a lot of thigs better than the current iteration of OpGuides. The biggest issues I had with it came down to lack of extendability and it not being a static site (though the latter can be solved by using [Server Side Rendering](https://docsify.js.org/#/ssr)). If I ever had to just do docs for a project I'd use docsify without blinking. It's stupid fast to use and requires no maintence or mental overhead.

Unfortunately, docsify really couldn't cleanly be expanded to handle some of what I wanted to do on OpGuides, so after trying out a few other static site generators ([Zola](https://www.getzola.org) being the most interesting) I settled on [Hugo](https://gohugo.io). In part this was because of the absolutely incredible [Hugo Book](https://github.com/alex-shpak/hugo-book) theme on which the theme for OpGuides is derived from.

The site is still hosted on GitHubPages, which makes my anual fee for hosting OpGuides just the price of the domain, though if you're willing to stick with an .github.io domain or grab a free .tk or other weird tld name you can get around that too.

## Actually making OpGuides

The absolute most important thing that has made OpGuides work for me is one very important change from almost everything else I've made:

**I don't wait until something is done,** or even "ready for public consumption" before making it live. OpGuides is *very* unfinished. I don't think there's a single page that I'd call finished. Some pages are effectively just stubs or maybe outlines if you're generous.

Another huge help has been [Typora](https://typora.io). While the view in Typora is still rather far off from what I'll actually see on the live site, it's mostly good enough to let me focus on writing. There are still some annoyences, for exmaple, typora defines {{< katex >}} \LaTeX {{< /katex >}} code blocks with two dolar signs $\LaTeX$ while for hugo I need to use the katex short code, \{\{\< katex >}} \LaTeX \\{\{\< /katex >}} or, more obviously, images which are stored in the `static` folder have to have a their image tags in the markdown set for how they'll be located on the rendered site, not the path relative to the raw markdown files that I write the site with, so images only render in the web preview, not Typora. ╮(─▽─)╭

That's still not a big deal though, as should I actually need to look at the live output and make sure things look good I can just leave `hugo server --miniy --theme bookvega` running in a terminal, connect to the local address, and as I ctrl+s in typora I can see the rendered site update in my browser.

Because writting those hugo shortcode tags (like  \{\{\< katex >}} \) can be a bit tedious, I've set up quite a few entries for [espanso](https://espanso.org), for example, I can just type ':ka' to get the afforemention katex tags.

It's still not the perfect development system. In a perfect world a lot of the experiance would be smoother. I'd love to be able to tell Typora how to handle the image directory problem and add custom logic for rendering the shortcodes. (actually, with enough time and CSS magic I *might* be able to do that, but It's not worth the effort)

On the note of CSS- that has been a major pain point for me. Web dev is both easy and incedibly difficult. Doing it is actually pretty simple- CSS, HTML, and JS are pretty straight forward, there's plenty of resources online, and the webdev panels in both Firefox and Chome make trying changes live nice. On the other hand *ohmygod* is it a pain in the ass. You will have issues you couldn't possibly think of ahead of time. For example, one that I left in because it's funny is on the [Math]({{< relref "/Engineering/math/math" >}}) chapter where the digits of pi just overflow off the right edge of the screen <footnote>I did have to do a small fix because of that though, as originally it also made for a tiny horizontal scroll bar. Definitely not ideal.</footnote>, and sure, I think the site actually looks pretty good now, but there's still some outright disgusting outstanding issues. For exmaple, I'm using markdown tables,

| like     | this      | table |
| -------- | --------- | ----- |
| for      | example,  | to    |
| display  | content   | it    |
| probably | shouldn't | .     |

This is most obvious in the [Generative Tools]({{< relref "Design/gen" >}}) chapter of the Design section. The page has great content, but renders like a dumpster fire and I still don't know how to fix it cleanly. Probably something with CSS Grids but after repeated attempts to make something work I gave up, so at least for now it will remain as the dumpster fire it is.

{{< tip >}}

This has been fixed. See [this commit](https://github.com/VegaDeftwing/OpGuidesHugoSrc/commit/73bb04b86982b3576cbe0e5113461b9c03a447fa#diff-7faf8ce9ea81d4773cbb5c72fd6d6e292a949bfdb3e5f779dd39834e62e7f101) if you're interested in how.

{{< /tip >}}

Ontop of the technical, there's also the stylistic challanges. I'm actually really happy with how OpGuides looks right now, but there was a lot of heachache inducing research, trial and error, and humbly asking for help for making the text readable and getting everything to look good. I'd very gladly never read another word about typography or contrast for accesibility.

And while the site is definitely functional, it's also built on less-than-study foundations. I've hacked together quite a few things because getting it to work was more valuable to me than getting it to work right. For example, the javascipt for the footnotes <footnote>like this one</footnote> is loaded using script tags in the [base html](https://github.com/VegaDeftwing/OpGuidesHugoSrc/blob/main/themes/bookvega/layouts/_default/baseof.html) file for every page, and the different colors for different sections is [very poorly](https://github.com/VegaDeftwing/OpGuidesHugoSrc/blob/main/themes/bookvega/layouts/partials/docs/html-head.html) thrown into the hugo templating html. This is to say I've valued getting a website that works and looks the way I want over doing it right. Partially this is ignorance (either of webdev or hugo), and partially this is laziness ("I got it working, no need to make it elgant"). But ultimately I think of it as a time trade off. I could spend way more time getting everything exactly right, acrue no technical debt (albeit this is debt that I rather doubt I'll ever have to pay on) or I can just make a damn website and spend that time doing the part people *actually* care about: Writing content.

Ultimately, I think the take away for anybody wanting to make their own website should be this:

You're not making a website for a fortune 500 company, and the most important thing on the page is the content<footnote>assuming you don't want to be a webdev for hire - if that's the case you should probably give more of a shit</footnote>. Find a good, free, template for a static site generator you don't hate using- or if you want a site similar to mine, use docsify - and start writing and deploy as you go. You can always go back and edit later, but not putting anything out there doesn't do anybody any good.

---

I've also found some other sites useful for making my website:

https://excalidraw.com is great for making 'hand drawn' svg diagrams. They look good and the file sizes are small.

https://detexify.kirelabs.org/classify.html is hand for looking up {{< katex >}}\LaTeX{{< /katex >}} symbols.

http://shapecatcher.com is pretty much the same, but for unicode symbols.
