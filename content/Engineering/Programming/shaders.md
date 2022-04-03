# Chapter 19.0 - Shaders

![](/common/arrow.svg)

{{< best >}} [The Book Of Shaders](https://thebookofshaders.com){{< /best >}}</br>

{{< best >}}[GLSL 2D Tutorials by Vug](https://www.shadertoy.com/view/Md23DV){{< /best >}}



![](/common/arrowthis.svg)



{{< details "Here for VRChat Stuff?">}}

Cool! VR chat is a really neat platform to work with and it's really fun to be able to hold or walk around your art. Unfortuantely, there's some added complexity that comes with handeling VR, Unity, and even just 3D stuff outright that, all together, takes a hot minute to build up to. That said, there are some particularly good resources for getting started in VR Chat and Unity development that aren't available for anything else. So, after you've gone though the above links, in no particular order, I reccomend looking at:

* ~~This 5 hour long [Intro to Shader Coding in Unity](https://youtu.be/9WW5-0N1DsI) is pretty great~~ → Replaced by the newer [Shader Basics, Blending & Textures • Shaders for Game Devs](https://www.youtube.com/watch?v=kfM-yu0iQBk) which is a bit under 4 hours... I watched both.
* [cnlohr's *Shadertrixx* repo](https://github.com/cnlohr/shadertrixx)

{{< /details >}}

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

While the book goes into ways to run the code written there elsewhere, I think it misses the mark for most people who are interested in using shaders for game development. If that's you, you're *probably* wanting to write shaders for Unity, Unreal, or Godot. In both cases, you may actually want to start by trying out visual shader programming, espically if you're not used to code. **However,** I do reccomend coming back to code at some point as the visual editors are usually both limited and generate kinda slow code.

If you're using Unity, you'll want to use the built in [Shader Graph](https://unity.com/features/shader-graph) if you're using either the Scriptable Render Pipelines (SRP)  ( so the High Defintion Render Pipeline (HDRP) or .Universal Render Pipeline (URP)) Unfortunately, it doesn't work with the Built-In render pipeline (yes, it's confusing) - though you can use the $80 [Amplify Shader Editor](https://assetstore.unity.com/packages/tools/visual-scripting/amplify-shader-editor-68570) for Built-In. If you're doing development for VR chat, this is probably your best bet unless you want to jump right into code - which is fine! You can do it!

If you're using Unreal [TODO]

If you're using Godot, good news, you can use [its visual shader editor](https://docs.godotengine.org/en/stable/tutorials/shaders/visual_shaders.html).

If you're going right for code, having something with a debugger may come in handy. Debuggers for shaders are still rather novel, but [Shadered](https://shadered.org) is pretty neat, albeit a bit confusing to use at first.

If you're developing for Unity and want decent syntax highlighiting, code completion, etc. your options are forking over  the better part of a grand for [dotUltimate](https://www.jetbrains.com/lp/dotnet-unity/) or grabbing [ShaderlabVS Pro](https://assetstore.unity.com/packages/tools/utilities/shaderlabvs-pro-186176?aid=1011lGoJ&utm_campaign=unity_affiliate&utm_medium=affiliate&utm_source=partnerize-linkmaker) for $35

{{< /tab >}}

{{< /tabs >}}

{{< /tab >}}

{{< tab "Algorithmic Drawing" >}}

{{< tabs "Algorithmic Drawing" >}}

{{< tab "5 - Shaping" >}}

While the book tries to instill into you the importance of this chapter, I think it's still a bit understated. Seriously, read this page three times. Mess around with the functions, and actually get a good feel for all of them.

It also failed to go into some of the trig options. Yes, you have `sin()`, `cos()`, `tan()`, but you also have  `asin()`, `acos()`, `atan()`, and *depending on the version* `sinh()` , `cosh()`, and `tanh()` as well as  `asinh()` , `acosh()`, and `atanh()`. 

Because most people don't know what those look like off the top of their heads, here's a quick refrence - You can click the colored circles to turn functions on and off. 

{{< katex >}}\text{Note,  }sin^{-1}(){{< /katex >}} is the same as {{< katex >}}asin(){{< /katex >}}, {{< katex >}}sinh^{-1}(){{< /katex >}} is the same as {{< katex >}}asinh(){{< /katex >}}

{{< tip >}}Make sure you re-center the graph about (0,0), otherwise some will appear to be missing! {{< /tip >}}

<iframe src="https://www.geogebra.org/calculator/r8guft9v?embed" width="110%" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>

Of particular use is `tanh()` as it can be used as a smooth clamping function

There's also `dFdx()` and `dFdy()` for derivatives ([see documentation](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/dFdx.xhtml)). These do what you think if you know calculus, but you can check [This Shadertoy Example from HLorenzi](https://www.shadertoy.com/view/lsXSzn) if you want to see it in action. These can be quite useful for things like [Edge Detection](https://www.shadertoy.com/view/Xtd3W7) (try the reccomendation from jump89 in the comments); **However,** support for them is hit-or-miss (try [this](https://www.shadertoy.com/view/WtKcRW) and [this](https://www.shadertoy.com/view/WdccRS) to check your system) 

If you're using https://graphtoy.com to make your shaping functions, keep in mind it does lack the derivative functions.

Also, keep in mind everything in the book and that I've said so far applied to **OpenGL/GLSL**. [There are other languages](https://alain.xyz/blog/a-review-of-shader-languages), probably most notably for game developers is **HLSL**. HLSL is quite similar to OpenGL (See [GLSL-to-HLSL reference](https://docs.microsoft.com/en-us/windows/uwp/gaming/glsl-to-hlsl-reference)) but along with the sytax differences, also has a *slightly* [different set of functions available](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-intrinsic-functions). One to point out that may leave you scratching your head: HLSL's mod is a bit broken. Just use `#define glsl_mod(x,y) (((x)-(y)*floor((x)/(y))))` ({{< smalltext >}}from [bgolus in this forum thread](https://forum.unity.com/threads/translating-a-glsl-shader-noise-algorithm-to-hlsl-cg.485750/){{< /smalltext >}})

{{< /tab >}}

{{< tab "6 - Colors" >}}

While the RGB and HSB colorspaces mentioned on the color page of The Book of Shaders are nice, It's worth mentioning that both can be a bit annoying to work with in computer graphics because of non-uniformities in actual, percieved brightness as the hue and saturation are changed. For this reason, we might want to use the relatively recently released [Oklab](https://bottosson.github.io/posts/oklab/) colorspace. Fortunately, the work for converting to and from this color space has been done for us,

* What about Oklab, or something else with better uniformity
  * https://www.shadertoy.com/view/WlGyDG
    * has rgb_to_oklab, and vis-versa
  * https://www.shadertoy.com/view/WtccD7

{{< /tab >}}

{{< tab "7 - Shapes" >}}

{{< /tab >}}

{{< tab "8 - Matricies" >}}

This chapter is probably the first that will have math that makes you go "WTF?", espically if math with matricies and/or programming are new to you in the first place. While ideally you'd understand the math, it's not honestly a big deal if you don't. That said I think this chapter also just sort of fails to explain the rationaile behing rotation. If we look at the rotation matrix:

```glsl
mat2(cos(_angle),-sin(_angle),
     sin(_angle),cos(_angle));
```

we have x = x.cosθ-y.sinθ and  y = x.sinθ+y.cosθ. Let's just test some values:

| θ                         | x    | y    |
| ------------------------- | ---- | ---- |
| 2π (360°, full rotation)  | 1    | 1    |
| 3π/2 (270°)               | 1    | -1   |
| π (180°)                  | -1   | -1   |
| π/2 (90°)                 | -1   | 1    |
| **0** (0°, no rotation)   | 1    | 1    |
| -π/2 (90°)                | 1    | -1   |
| -π (180°)                 | -1   | -1   |
| -3π/2 (270°)              | -1   | 1    |
| -2π (360°, Full rotation) | 1    | 1    |

If you think about this, at 0 (no angle of rotation) both are being multpied by 1, so, no change. At either ±π/2 only one of the x or y are being multiplied by -1, a 90° rotation (albeit in oposite directions). At ±π, the shape is being rotated 180° (so, the same either way), then at ±3π/2 were at more than 180°, so we could have gotten there faster by only going π/2 in the other direction that is, 270° = -90° and 90° = -270° (since things repeat at 360°)

---

I do think the book does a good job of covering scaling; however, keep in mind you can scale x and y independently, so on line 38 of the example code, `st = scale( vec2(sin(u_time)+1.0) ) * st;` that `vec2` could have different scaling factors for each. Try `st = scale( vec2(sin(u_time)+1.0,cos(u_time*.3)+1.0) ) * st;` for example. You'll see the shape gets scaled differently in x and y over time- it's not just a simple closer/further from the camera effect.

---

This chapter does go into YUV colorspace, see tab 6 for more about color. 

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

{{< /tabs >}}

---

## Beyond The Book

At the time of writing, *The Book of Shaders* ends at *Chapter 13 - Fractional Brownian Motion*. Continuting where the book leaves off, I'd like to round out generative design by talking about fractals and simulation:

## Generative

### Fractals

### Simulation

#### Cellular Automata & Bit manipulation

https://www.shadertoy.com/view/XlcyD8

#### Slime mold

https://www.shadertoy.com/view/WtBcDG

#### Fluids

Diffusion

## Textures & Filters



## 3D Graphics

{{< button relref="Design/3d" color="design" >}}3D Design{{< /button >}} has information on 3D modeling, file types, etc. This section is only for the nerdy bits as they relate to shaders

### UV Maps

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/UV_mapping)" >}}

UV mapping is the 3D modeling process of projecting a 2D image to a 3D model's surface for texture mapping. The letters "U" and "V" denote the axes of the 2D texture because "X", "Y", and "Z" are already used to denote the axes of the 3D object in model space

{{< /quote >}}

Want to paint on a 3D object? Well, you need a way to store the color of each pixel in a 2D image and a way to map that 2D image onto the 3D object. So, you'll need to *unwrap* the object to have a place to paint on, and then you can color as you please. As for this unwrapping, well, it tends to look what you'd expect:

[TODO] image here

Though some special consideration needs to be made to where the *cuts* are - these are the places where the 2D texture is cut, but the actual 3D object is continuous - and how dense the pixels are in a given region. If you think about a map projection of the globe, some places always get made to be visually larger or smaller than reality, the larger areas have more pixels to hold texture, while the visually-smaller areas have less. 

As far as software is concerned, Substance Painter and Desginer by Adobe are pretty much the standard. Adobe is Adobe though, so you may want to see if either [Quixel](https://quixel.com/mixer), [Armorpaint](https://armorpaint.org), and/or [Materialize](https://boundingboxsoftware.com/materialize/index.php) are good enough for you.

If you're working in Unity, you might want to grab [UVee](https://assetstore.unity.com/packages/tools/modeling/uvee-6933).

### Lighting & Shading

### Bump and Normal Maps

Hard vs Soft normals on vertex edges are a thing.

* For hard normals 2 verticies actually get placed at the same place. Extra weird.

#### Getting Maps

Usually, you'll have a normal map from whatever material / texture painting software you used. If you don't have one and need one, there are options. [Awesome Bump](https://github.com/kmkolasinski/AwesomeBump), [NormalMap-Online](https://cpetry.github.io/NormalMap-Online/), or, if you need some extra-oompf, there's [Shadermap for $30 personal / $50 commercial](https://shadermap.com/home/). As a last resort, you can use a combonation of angled high pass filters / edge dection in Krita and careful, manual shapening, blurring, and erasing to get what you need. It's tedious, but possible.

### Kernel Convolution

### Filtering

### Clipspace, Worldspace, ...?

### Culling, Z-test

## Performance



> In HLSL and Cg a ternary operator will never lead to branching. Instead both possible results are always evaluated and the not used one is being discarded. To quote the HLSL documentation:
>
> <span class="smalltext">[Soulsource on StackOverflow](https://stackoverflow.com/users/759323/soulsource)</span>
>
> > Unlike short-circuit evaluation of &&, ||, and ?: in C, HLSL expressions never short-circuit an evaluation because they are vector operations. All sides of the expression are always evaluated.
> >
> > <span class="smalltext">[Microsoft HLSL Documentation](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-operators?redirectedfrom=MSDN#Boolean_Math_Operators)</span>



{{< columns >}}

* Multiple Buffers
  * Render Textures
* Feedback

[TODO] text on lighting & physics as shaders in egines, vulkan, etc.

<--->

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">What started a year and a half ago as just some Vulkan <a href="https://twitter.com/hashtag/voxel?src=hash&amp;ref_src=twsrc%5Etfw">#voxel</a> ray tracing experiment has evolved into something far beyond my wildest of dreams. The sky&#39;s the limit from here, and I intend to take it beyond, so stay tuned. <a href="https://twitter.com/hashtag/gamedev?src=hash&amp;ref_src=twsrc%5Etfw">#gamedev</a> <a href="https://t.co/nNwqrY7tdZ">pic.twitter.com/nNwqrY7tdZ</a></p>&mdash; John &quot;Lin&quot; (@ProgrammerLin) <a href="https://twitter.com/ProgrammerLin/status/1392808532538396678?ref_src=twsrc%5Etfw">May 13, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< /columns >}}

https://wwwtyro.net/2019/11/18/instanced-lines.html

http://glsl.erogenous-tones.com/e#1341.0

https://smoothstep.io/anim/534226b1d5ed

https://acko.net/blog/frickin-shaders-with-frickin-laser-beams/

https://github.com/stackgl/shader-school

# 19.1 - GpGPU

{{< tip >}}

If you want to learn how to do GpGPU programming, I highly reccomend you learn how to do basic shader programming first. They both generally have the same limitations imposed by the hardware and, depending on the environment you're working in, it may be that using the normal graphics languages (GLSL, HLSL, etc.) to write **compute shaders** is what you want anyway. In that case, you may as well learn the language from the more used and well documented side first. Even if you know you don't need the image output, still try it, as it's a much nicer introduction than jumping right into GpGPU and you'll have a much better idea of what's going on.

{{< /tip >}}

So, we've got this extra massively parrallel co-processor just hanging out in our computer, and unless we're running games or complex 3D programs, it's probably sitting nearly completely idle. So, how do we put it to use?

Well first of all, we need to know a few things about the GPU:

1. There's a *lot* of overhead for just using the GPU. You need to detect it, reserve some memory, copy your data to it, process it, and copy it back.
2. There's a lot of different GPUs. Different vendors, models, etc. These will have wildly different capabilities, support different APIs, etc.

Basically, this means you need to both be sure you're workload will actually benefit. It needs to be parrallizable in the first place, you need to be processing *a lot* of data to justify the overhead, and you need to know you have a GPU in the system(s) that can actually use it. As a general rule of thumb, if you're not processing an array/matrix with at least 100,000 items, it's probably not worth it. For context, assuming each item is a byte, that's about 100 killobytes.

So, if it's not enough data or if it's not a parallizable task, the anser to "how do we put it to use?" is "Don't."

{{< hint info >}}

If you hadn't guessed from the mentioning of there being overhead, various platforms, and thresholds for the amount of data before it makes sense: Profiling matters. You will absolutly need to profile your code for this. Generating [Flamegraphs](https://www.brendangregg.com/flamegraphs.html) (if you can) is particularly helpful.

{{< /hint >}}

But, if you've got an applicable problem, the sitation is still messy. There's a whole variety of GPU vendors and APIs in a venn diagram from hell making actually utilizing this stuff a massive pain. So while you could go write openCL or CUDA (or Vulkan, or Halide) code directly, you'll probably find a bunch of weird edge cases across systems and it's just generally more of a pain than it's worth. So, frankly, I'm not even going to look into those languages anymore than to let you know that it's quite likely the ones we will look into will actually still use their APIs, so, you'll probably still need their respective compilers/headers/toolchain on your system. Of special note, if you're using Cuda this probably means the full 11GB-or-so or so install with the `nvcc` compiler, which you can grab [Here](https://developer.nvidia.com/cuda-downloads) for Windows or Linux (though, if Linux you should try your package manager first). 

So, reading that probably just made you go "Oh this is going to be compiler hell, isn't it?". Yes. It will be. Espically on Windows. So, is it worth it? Well, just running one of the [example programs](https://github.com/arrayfire/arrayfire-python/blob/master/examples/benchmarks/monte_carlo_pi.py) for the [Arrayfire](https://arrayfire.com) library I got an **88x speedup** (though I'm pretty sure this doesn't count the overhead of initalizing the GPU) when the code was ran on the GPU. So, yes, even if we did have to use OpenCL or Cuda directly, it probably would be. 

Fortunately, we dont. 

From my digging I've found two good options that play nice with a lot of languages and different system configurations:  [Futhark](https://futhark-lang.org) and [Arrayfire](https://arrayfire.com). I'll focus on these two, but you should know there are other options. If you're into Rust, there's [emu](https://github.com/calebwin/emu). Nim? check out [shady](https://github.com/treeform/shady). JS? [this library called "GPGPU "](https://github.com/DanRuta/GPGPU) should do the trick. If you use Matlab, it should already be GPU accelerated, at least assuming you have an Nvidia graphics card. For these more specific ones  I don't have experance with these to know if they're good or bad. All of that said, you can *probably* make Futhark work damn near anywhere on account of the fact that it spits out C code for using either OpenCL, Cuda, Ptheads, or - failing all else - normal ol' sequantial processing (just C, no special sauce). So, anywhere you can load C code, Futhark should work too. This is pretty much everywhere, as almost all languages have at least some way to load in a library written in C for speed sake. It also can generate python libraries easily, which is nice too.

So, why do I have two reccomendations? **Futhark** is a programming language, just not a general purpose one. You really only use it to make small, individual functions that utilize the GPU that you then call from another language. **Arrayfire**, on the other hand, is more of a bucket of functions, your more typical library. If arrayfire happens to have the [functions you need](https://arrayfire.org/docs/group__func__categories.htm) - or those you need to compose your program, ranging from basic operations up to a ready to use functions ranging from signal processing to computer vision - then it's easy to import and pretty much good to go. So, if you know you only really ever grind your wheels on one big operation that accounts for a majority of your programs run time and it's a commo problem, Arrayfire is worth trying. If you know you're going to need to do a weird opeartion that isn't in Arrayfire's bag of tricks ore you need to have finer control, Futhark probably makes sense.

{{< tip >}}

Arrayfire, at the time of writing, has bindings for C++, Python, Rust, Julia, and Nim, with a plethora of other langauge bindings in progress. **However,** not all of these bindings are created equal. I had to use Futhark for a project because while the C++ version of Arrayfire has bitwise operations, the python version does not. So, YMMV.

{{< /tip >}}

So, what about Futhark?

Futhark is a weird language, at least to most people. This is because it's *functional*. We'll talk about this more in a few chapters - that's what the weird looking {{< button relref="/Engineering/programming/funcprog" >}}(((())(()((()(())))))){{< /button >}} chapter is. Honestly, you might just want to skip ahead and read it now. Though, as a TL;DR: In functinoal programming, functions are *functions* in the math-y sense. They don't store any state, they simply transform input and produce an output. So, while you might want to write

```python
def myweirdfunc(input)
	for i in range(0,10):
		c += input**i
	return c
```

in a normal lanuage, here, you can't because you're storing the state of `i` internally as it gets incremented. As you can imagine, this means that you have to get rather creative with your code.

So, why is futhark like this? Basically, because the limitations of the language make it so that it can generate very, very well optimized code for you. This should also make sense if you think back to learning about traditional fragment shaders above, as back there we learned that each GPU thread is memoryless anyway. So, this is really a pretty good abstraction with that in mind.

Anyway, the end result is that the code looks weird. For example, here's some code I wrote which takes in an array of data and strips out set of 2 bits of every byte to put them in a new array of 4 times the length (basically, if we have `[0b11001001,0b00110011]`, we want `[0b11,0b00,0b10,0b01,0b00,0b11,0b00,0b11]`)

```haskell
-- Shift the bits over accordingly, so that we actually get the 
-- bits into the LSBs of each byte
def shiftbits [n] (data: [n]i64) (shift: i64) : [n]i64 = 
	let bits = map (\x -> shift * x % 8) (0..<n) in map2 (>>) data bits

-- Get the top two bits of each byte in x
def gettop (data: []i64) (num: i64) : []i64 = map (&((2**num)-1)) data

-- replicate each element in the arary four times,
-- [1,2,3] -> [1,1,1,1,2,2,2,2,3,3,3,3]
-- stolen from https://futhark-book.readthedocs.io/en/latest/language.html#size-types
def rep4 [n] (data: [n]i64): []i64 = map (\i -> data[i/4]) (0..<n*4)

-- Do the thing
def bitpack [n] (data: [n]i64): []i64 =
    let data2 = rep4 data
    let data3 = shiftbits data2 2
    in gettop data3 2
```

And while bitshifting is sometimes black magic looking in any language, I fully expect some wide eyes. This does make marginally more sense if you read through the [Parallel Programming in Futhark](https://futhark-book.readthedocs.io/en/latest/index.html) book (at least through Chapter 2) but if you, like me, have no prior experiance with programming like this it *will* be painful. While I dove straight in I *suspect* it will be significantly less painful if you first look at a [tutorial for Haskell programming](http://learnyouahaskell.com/introduction), as Futharks syntax and programming style is very similar to it but gentler introductions to Haskell are readily available compared to the assume-you've-already-done-functional-programming style of the Futhark book.



## The Future of GpGPU

[GPU Accelerated RAID (Linus Tech Tips, YouTube)](https://www.youtube.com/watch?v=12l326jQML8)





<!-- TODO: Look into [halide](https://halide-lang.org), [emu](https://github.com/calebwin/emu) --> 

<!-- TODO: WebGL + https://observablehq.com/@rreusser/the-double-pendulum-fractal?collection=@rreusser/writeups -->



