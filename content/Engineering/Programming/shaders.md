# Chapter 19 - Shaders

![](/common/arrow.svg)

{{< best >}} [The Book Of Shaders](https://thebookofshaders.com){{< /best >}}

![](/common/arrowthis.svg)

---

I'm going to assume you read through The Book Of Shaders because, frankly, it's fantastic and there's no way I'm going to to be able to do better for now- that said, I do have some commentary, that maybe you'll find useful. Each of these tabs corolates to the respective page in The Book, and is really just what I stumbled into as I tried to fill in the gaps for myself. Of note, the book is open source, but is *not* under a permissive licence (it's outright, bog-standard copyright) so I can't display any of it here, which is why I'm asking you to alternate tabs to here and back.

{{< tabs test >}}

{{< tab "Getting Started ">}}

{{< tabs "Getting Started">}}

{{< tab "1 - What Is?" >}}

I got into shaders for a bit of a backwards goal - I'm into the art, sure, but it's more that I found the *idea* of running code on the graphics card cool, and wanted to know how to use the multi-hundred watts of computational horse power in my desktop to my advantage. However, I knew better than to dive head-first into a difficult language like Vulkan (more on that in a sec) and that it would be much easier to get to the point of running complex, not-necessarily-for-graphics code on the GPU if I went through the normal for-art path first.

On top of this, I was also just getting into VR Chat, which lets users submit their own worlds and avtars made in Unity.

This is where some of the confusion begins:

[TODO - unity's 3 pipelines, multiple languages (HLSL vs ...), multiple node editors (Amplify), and wanting to have debug, etc.]

- Show an actual shader doing actual shader things
- What else is there other than GLSL
  - how do other things play into this, HLSL & Shader Model Version; DX9,10,11,12 vs Direct3D Metal; Cg; SPIR-V, .shader in unity

{{< /tab >}}

{{< tab "2 - Hello World!" >}}

* Syntax Highlighting?
* These names aren't totally standard

{{< /tab >}}

{{< tab "3 - Uniforms" >}}

* Other uniforms, in Unity, Shadertoy, etc.
* Full list of functions

{{< /tab >}}

{{< tab "4 - Running" >}}

* Debuggers
* Development environment
* Visual Editors

{{< /tab >}}

{{< /tabs >}}

{{< /tab >}}

{{< tab "Algorithmic Drawing" >}}

{{< tabs "Algorithmic Drawing" >}}

{{< tab "5 - Shaping" >}}

* Graph toy is nice, Shadershop sorta sucks
  * I'd like to find a better tool, one that's visual for 2d or 3d functions
* Init a git repo to hold snippits early

{{< /tab >}}

{{< tab "6 - Colors" >}}

* What about Oklab, or something else with better uniformity
  * https://www.shadertoy.com/view/WlGyDG
    * has rgb_to_oklab, and vis-versa
  * https://www.shadertoy.com/view/WtccD7

{{< /tab >}}

{{< tab "7 - Shapes" >}}

{{< /tab >}}

{{< tab "8 - Matricies" >}}

* Intuition for the rotation math
* Intuition for scale (though it's rather obvious)

... This does go into YUV colorspace, see tab 6

{{< /tab >}}

{{< tab "9 - Patterns" >}}

{{< /tab >}}

{{< /tabs >}}

{{< /tab >}}

{{< tab "Generative Designs ">}}

{{< tabs "Generative Designs ">}}

{{< tab "10 - Random" >}}

{{< /tab >}}

{{< tab "11 - Noise" >}}

{{< /tab >}}

{{< tab "12 - Cellular" >}}

{{< /tab >}}

{{< tab "13 - Brownian" >}}

{{< /tab >}}

{{< /tabs >}}

{{< /tab >}}

{{< tab "...Not Yet Covered" >}}

* Multiple Buffers
  * Render Textures
* Feedback

{{< /tab >}}

{{< /tabs >}}

---

{{< columns >}}

[TODO] text on lighting & physics as shaders in egines, vulkan, etc.

<--->

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">What started a year and a half ago as just some Vulkan <a href="https://twitter.com/hashtag/voxel?src=hash&amp;ref_src=twsrc%5Etfw">#voxel</a> ray tracing experiment has evolved into something far beyond my wildest of dreams. The sky&#39;s the limit from here, and I intend to take it beyond, so stay tuned. <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://t.co/nNwqrY7tdZ">pic.twitter.com/nNwqrY7tdZ</a></p>&mdash; John &quot;Lin&quot; (@ProgrammerLin) <a href="https://twitter.com/ProgrammerLin/status/1392808532538396678?ref_src=twsrc%5Etfw">May 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< /columns >}}

https://wwwtyro.net/2019/11/18/instanced-lines.html

http://glsl.erogenous-tones.com/e#1341.0

https://smoothstep.io/anim/534226b1d5ed

https://acko.net/blog/frickin-shaders-with-frickin-laser-beams/

https://github.com/stackgl/shader-school
