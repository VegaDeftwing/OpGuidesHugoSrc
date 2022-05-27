# 29 - Digital Signal Processing

<img src="/eng/dspoverview.svg">

---

{{< best >}}[Spectral Audio Signal Processing](https://ccrma.stanford.edu/~jos/sasp/) by JULIUS O. SMITH III at the Center for Computer Research in Music and Acoustics (CCRMA){{< /best >}}

[The Scientist and Engineer's Guide to Digital Signal Processing](http://www.dspguide.com/pdfbook.htm)  By Steven W. Smith, Ph.D.

[Awesome MusicDSP (Github)](https://github.com/olilarkin/awesome-musicdsp)

[Tom Erbe, Design the Erbe Verb (YouTube)](https://www.youtube.com/watch?v=Il_qdtQKnqk)

https://zserge.com/posts/etude-in-c/ & https://zserge.com/posts/beep/

[Diospyros](https://github.com/cucapra/diospyros) - Search-based compiler for high-performance DSP programming

[Think DSP](https://greenteapress.com/wp/think-dsp/) - DSP in Python, Free book

[Vult DSP Programming Language](https://www.vult-dsp.com/vult-language)

[Writing Efficent VCV Plugins](https://github.com/squinkylabs/Demo/blob/main/docs/efficient-plugins.md) from SquinkyLabs

[Technical Papers from Cytomic](https://cytomic.com/technical-papers/)

**Hardware**

[A Transistor-less sound synthesizer (Hackaday, Jenny List, Dr. Cockroach)](https://hackaday.com/2020/10/24/a-transistor-less-sound-synthesizer/)

[Chua oscillator on CRO during inductance sweep](https://www.youtube.com/watch?v=WRXP0ZeIrlM)

http://www.doepfer.de/DIY/a100_diy.htm

> As a quick note, there are a ton of possible options when choosing what to use as hardware for devloping audio hardware. You can go full analog, work with dedicated DSP hardware, use microcontrollers with full FPUs, use single board computers, use an [FPGA (Like on the Rainmaker)](https://intellijel.com/downloads/manuals/cylonix-rainmaker_manual_v1.09-143.pdf), or try to get by on a 328P (Arduino Uno). The most important part is making something, don't stress too much about what you use to do it- but don't use something prohibitively expensive or outright garbage (like the 328P) either, unless you know what you're doing. The STM32's with FPU's are probably a good bet.

[Digital Vintage Sound: Modeling Analog Synthesizers with the Wolfram Language and System Modeler](https://blog.wolfram.com/2020/07/23/digital-vintage-sound-modeling-analog-synthesizers-with-the-wolfram-language-and-system-modeler/)

[Reverse-engineering the Yamaha DX7 synthesizer's sound chip from die photos (Ken Shirriff's Blog)](https://www.righto.com/2021/11/reverse-engineering-yamaha-dx7.html)

**Software**

[Awesome Audio Visualization (Github)](https://github.com/willianjusten/awesome-audio-visualization)

[Kord (Github)](https://github.com/synestematic/kord) - a music theory development framework in python

[Tutorial: Programming Modules for VCV Rack - Part 1 (YouTube, Leonardo Laguna Ruiz)](https://www.youtube.com/watch?v=7Z7LHAnIIac) (This might be out of date)

[Tutorial: Virtual Analog Modeling Basics, the Vult way (YouTube, Leonardo Laguna Ruiz)](https://www.youtube.com/watch?v=xQYLBS9R_uA)

[Rust For DSP](https://interrupt.memfault.com/blog/rust-for-digital-signal-processing)

[Learn Modern C++ by Building an Audio Plugin w/ JUCE Framework (YouTube - freeCodeCamp.org)](https://www.youtube.com/watch?v=i_Iq4_Kd7Rc)

http://ajaxsoundstudio.com/software/pyo/



I'd like to show DSP with VCV rack as much as I can, but dev sucks without debug, so this helps:

https://medium.com/@tonetechnician/how-to-setup-your-windows-vs-code-environment-for-vcv-rack-plugin-development-and-debugging-6e76c5a5f115

---

[TODO] Discrete time? Nyquist? Z transform(quick review of sig & sys)

[TODO] Quantization & Numerical effects

[TODO] Aliasing, Upsampling, down sampling

[TODO] why not use std::sin

[TODO] Lookup-table generators (Wavetables)

[TODO] Envelopes

[TODO] Convolution reverb/cab

[TODO] IIR

[TODO] FIR & Windowing

[TODO] Brief digression into N-dim dsp (images, etc.)

