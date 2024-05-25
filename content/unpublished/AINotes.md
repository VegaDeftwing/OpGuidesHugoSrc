# AI Tools

{{<tip>}}

This page does is not a guide on how to use or setup any of the tools listed. Instead it's a sort of reference for what's possible.

{{</tip>}}

## Large Language Models

Obviously, ChatGPT is well ahead of everyone else. Unfortunately, it keeps getting lobotomized. At the time of writing, it's very insistent on outputting overly long, bulleted lists. For this reason alone, I think it's worth looking into options for self hosting.

- https://github.com/oobabooga/text-generation-webui
- https://github.com/SillyTavern/SillyTavern
- https://github.com/LostRuins/koboldcpp

## Generative Art

There are multiple big players, but the only one I think worth mentioning is Stable Diffusion due to how much more is possible with it due to it being open source.

The "Go To" front end for Stable Diffusion right now is [AUTOMATIC1111's Stable Difusion WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) due to the crazy number of plugins that are available for it. Alternatively, [ComfyUI](https://github.com/comfyanonymous/ComfyUI) makes some incredible automated workflows possible via a node based UI. Interestingly, there is a [plugin for adding ComfyUI to AUTO1111](https://github.com/ModelSurge/sd-webui-comfyui/), which works relatively well.

Not all models have inpainting variants. You can do inpainting with any model, but inpainting specific models tend to perform better.

There are *many* stable diffusion models out there for specific styles, characters, etc. See https://civitai.com. These vary between being based on SD 1.5, SD 2.0, and SDXL. Each of these has it's own quirks. Most notably, 1.5 models takes less prompting to get good results, but 2.0 can get better results if you know what you're doing. The general consensus is 1.0 still performs better for non-photo-realistic images. 2.0 models usually support generating at higher resolutions (768x)

2.0 Does allow for depth map based image editing though, which can be neat for retaining objects in a scene.

SDXL broadly out performs both, but is much harder to run - but for good reason. The base resolution is increased from 512x to 1024x.

[TODO] https://stable-diffusion-art.com/lcm-lora/

[TODO] Control Net

[TODO] Afterdetailer

### Upscaling

Upscaling can bring an image from good to great.

The best way right now is to manual send the picture to Img2Img first and doubling the resolution and play with the denoising strength then send it through [UltraSharp](https://openmodeldb.info/models/4x-UltraSharp)

For a 1-pass upscale (not doing an Img2Img pass) using just LDSR, ESRGAN, or SwinIR may give you better results, depending on the style you want. 

---

https://github.com/paul-gauthier/aider