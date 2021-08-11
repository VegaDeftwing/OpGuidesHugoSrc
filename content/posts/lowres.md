---
title: "Low Bandwidth Images"
slug: "lowbandwidthimages"
author: "Vega Deftwing"
date: 2021-08-07
tags:
- technical
- art
---

<div id="slider1"></div>

So, you've got a website that you want to make use less bandwidth. Maybe you're paying by the byte for content delivery, maybe you're worried about the environment, either way, let's assume you want to make your images as small as possible. The obvious place to start is just shrinking your images. Here, this is a 4032x2268 .jpg shrunk down to a 1008x567 .jpg - 25% of the original quality. This brings the file down from 3.2Mb to 260.4Kb, so about a 12x reduction in size. We can do better though:

<script src="/js/slider.js"></script>

  <script>
    window.onload = function() {
      new SliderBar({
        el: "#slider1",
        beforeImg: '/COMountain.jpg',
        afterImg: '/COMountain5.jpg',
        width: "90%",
      });
      new SliderBar({
        el: "#slider2",
        beforeImg: '/COMountain5.jpg',
        afterImg: '/COMountain2.png',
        width: "90%",
      })
      new SliderBar({
        el: "#slider3",
        beforeImg: '/COMountain5.jpg',
        afterImg: '/COMountain3.png',
        width: "90%",
      })
      new SliderBar({
        el: "#slider4",
        beforeImg: '/COMountain5.jpg',
        afterImg: '/COMountain.webp',
        width: "90%",
      })
      new SliderBar({
        el: "#slider5",
        beforeImg: '/COMountain.webp',
        afterImg: '/COMountainIM3.png',
        width: "90%",
      })
      new SliderBar({
        el: "#slider6",
        beforeImg: '/COMountain.webp',
        afterImg: '/COMountainIM2.png',
        width: "90%",
      })
    }
  </script>


<div id="slider2"></div>

So, clearly the quality here is lower, but I think it's stylisticly good. This brings us from 260.4Kb down to 39.8kb, so another 6.5x improvment. This black and white only version is a .png because it can compress more heavily with the knowledge it only has the two states than .jpg could. While I like this style, I do have to admit it's not very high detail, eating the quality to the point the vegetation and clouds may as well not be there.

```bash
convert -resize 25% +noise Multiplicative -evaluate median 30% -dither Floyd-Steinberg -monochrome  COMountain.jpg COMountain2.png
```

---

So, What else could we do? Well, color isn't necessarily bad, what about adding in a minimal pallete:

  <div id="slider3"></div>

![redblue-pal](/redblue-pal.png)

```
convert -resize 25% -remap redblue-pal.png -dither Floyd-Steinberg -colors 16 COMountain.jpg COMountain3.png
```

This makes for a file that is still smaller than the full color .jpg, albeit only by half as we've gone from 260.4Kb to 130.7Kb. I do like the look of this and think it's a fair compromise. But now we have a good baseline, what about just using a better format?

<div id="slider4"></div>
{{< attribution >}}This is comparing the 25% resolution .jpg to the .webp at the same resolution, that is both are at 1008x567.{{< /attribution >}}

So, this .webp version is about twice as big as the black and white version, at 60.1Kb. What happens if we combine .webp's performance with the other two images? It doesn't work. .webp does not work well with palettes, the images are actually larger.

But how does this compare to images like on [https://solar.lowtechmagazine.com](https://solar.lowtechmagazine.com) or those at [https://ritualdust.com/works/photo/](https://ritualdust.com/works/photo/), well, those seem to range from ~50kb to ~120kb, and are all black & white. Now, this isn't supposed to be a call out post. There's two reasons to do it the dithered, low palette way: not all browsers supported .webp and, frankly, it's a stylistic choice. The problem is by showing it as a technical choice for conserving data or helping those with limited bandwidth, it promotes the idea that this is the best way to do it, instead of driving adoption of .webp, a format that if had greater adoption would actually greatly benefit the web at large instead of fringe (albeit amazing) websites like these. This is even weirder when you consider that even Safari has caught up and .webp is basically supported everywhere.

---

## Update:

[Boojum](https://lobste.rs/u/Boojum) on lobste.rs had some fantastic insight:

{{< quote "[Boojum](https://lobste.rs/s/oexwrw/low_bandwidth_images#c_cb9vrb)" >}}

For dithered PNG images, you can improve the compression a good bit if you use an ordered dither rather than an error diffusion dither like Floyd-Steinberg. This is because the ordered dither tends to create regions of repeating pixels that the dictionary compression within PNG can identify.

For example, using this command:

```
convert COMountain.jpg -colorspace RGB -filter box -resize 25% -ordered-dither o8x8,3 -colorspace sRGB -quality 96 png24:COMountainIM3.png
```

gives [this result](https://imgur.com/aJ0p7hw) at 44,369 bytes after lossless recompression with optipng and then zopfli.

Or we can go a step down in the palette size with this command (note the 2 instead of 3 on `o8x8,3`):

```
convert COMountain.jpg -colorspace RGB -filter box -resize 25% -ordered-dither o8x8,2 -colorspace sRGB -quality 96 png24:COMountainIM2.png
```

which gives [this result](https://imgur.com/kzPWeGD) for 26,163 bytes after recompression.

*Other details:*

Resampling to downscale assumes linearized colors, and dithering really ought to be done in a linearized colorspace as well. Hence the change to linear RGB as the first step and then back to sRGB for display at the end. Otherwise, you end up with odd color shift after dithering (i.e., it blows out and tends to look too bright).

Ideally you’d use something like sync filter for the resampling (or at least a cubic filter). But that has a slightly sharpening effect and can introduce ringing which negatively impacts compression. Using a box filter does not sharpen and leans towards smoothing so it gives a tiny boost to compression.

For the lossless recompression with optipng and zopfli, I used `optipng -o7 -zm1-9 image.png; advpng -z4 image.png` for both.

{{< /quote >}}

Here's the result of that first command, compared to the .webp:

<div id="slider5"></div>

Here's the result of the second one, again, against the .webp

<div id="slider6"></div>

So, these are 43.0Kb and 25.9Kb respectively, a fair save over the 60.1Kb of the .webp, though the quality difference still speaks for itself.


---

Thanks to [VincentTV](https://github.com/VincentTV/before-after-slider) for his MIT licensed image slider, the only one that didn't horribly break out of the many options I tried. 