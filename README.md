# Opinionated Guides
### Version 4, Contributions welcome

https://opguides.info

---
#### Purpose:
I've got a lot of random knowledge floating around in my skull, and I've done countless of hours of internet browsing to find cool things that intrest me.
Along the way I've tried hundreds of programs, tools, and hacks and I've found which ones work for me and which ones don't. Furthermore, I get asked on a regular basis "How'd your learn all of this?" and the answer is by failure, time commitment, and going down a lot of dead ends. I still think these things are necessary for learning, but I also think a straight forward guide that leads people through these things while still providing a challange would be useful.

There are plenty of 'Awesome Whatever' repos on github, but there's far too much information there to wade through to pick what resources are truly important and avoid reading or watching the same thing a dozen times. After the 256th explanation, I not only know how a buffer overflow works, but I'm tired of hearing about them. The point of this is to save you time as you learn. A crash course that avoids all the repetition and that goes in depth enough to really hit the advanced topics, but friendly enough to not feel like a text book.

That, and it's a pretty slick way of taking notes for my own use and finding gaps in my own knowledge ┐( ˘_˘)┌

---
# Contributing

Please do your best to keep image and gif sizes down, every byte counts If you're comfortable using `optipng` or `jpegoptim`to reduce file size that'd be nice.

On the note of media, do your best to ensure that if copyright content is used that the owner of the copyright is okay with it. This is a free, educational use project but copyright still applies to us nevertheless.

Other than that, just fork this repo, edit the .md files, and submit a pull request.

If you would like to repeatedly contribute, please open an issue and I'll hapily add you as a contributor to avoid the need for many pull requests.

### Running locally

In order to run this site locally (and check the look and feel of your contribution) as this site is based on Hugo the first thing that you'll need is to have Hugo installed on your machine, you can [follow the docs](https://gohugo.io/getting-started/installing/).

Then you need to simply run `hugo server --watch --port=8080 -t bookvega` where:

* The `--watch` attribute indicates hugo to reload the files under any change.
  
* The `--port=8080` attribute indicates the localhost desired port.
  
* And `-t bookvega` indicates the theme to use, otherwise you'll be getting the `failed to extract shortcode: template for shortcode "columns" not found` error.

---
Opguides site is hosted on Github pages and relies on Hugo using the [Hugo Book Theme](https://github.com/alex-shpak/hugo-book), so a massive thank you to all the contributors that have made OpGuides this easy to maintain!

