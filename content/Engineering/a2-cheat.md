# Appendix B - Cheat Sheets and quick info

## Electrical Part Tables

[TODO]

* package types

* reading specs

* datasheets
  
  *



## Markdown

```html
# heading1
## heading2
### heading3

--- on it's own line will give you a diveder line

* for a bulleted list
*
alternatively,
- works too
- 

~~The world is flat.~~ for a strike though,
**to bold**
*to itilicize* 

1. for a numbered list
2.

​```python

​```

for a code box, where 'python' can be whatever language you want syntax highlighting for

`single backticks (note, these aren't apostrophes) for in line code too`

> lets you make a block quote

markdown also lets you use inline HTML, so, depending on the intent to render out to a pdf or webpage, you may be able to embed YouTube Videos or Tweets or whatever like I have through out this guide.

[title](https://www.example.com) for links
![alt text](image.jpg) for images

| Tables | Can     |
| ------ | ------- |
| Be     | Made    |
| Like   | This    |

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

- [x] This is a task list
- [ ] As we go down this page
- [ ] Some of this syntax may not be supported

$ may let you type inline math in \LaTeX $, and $$$ for blocks, same as the code syntax

1^2 or 1~2 may let you write super and sub-script text as well.
```

## Nice Libraries & Resources

### Multi-Language

[Ultralight](https://github.com/ultralight-ux/Ultralight) - "Next-generation HTML renderer for apps and games"

> Bit like Electron, but less shit. Supports C, C++, C#, Rust, Java, and Go

### C

[Awesome-C](https://github.com/oz123/awesome-c) - "A curated list of awesome C frameworks, libraries, resources and other shiny things. Inspired by all the other awesome-... projects out there."

[Nuklear](https://github.com/Immediate-Mode-UI/Nuklear) - A single-header ANSI C immediate mode cross-platform GUI library

[GuiLite.h](https://github.com/idea4good/GuiLite) - "!The smallest header-only GUI library (4 KLOC) for all platforms"

[Protothreads](http://dunkels.com/adam/pt/index.html) - "extremely lightweight stackless threads designed for severely memory constrained systems"

### C++

> Keep in mind everything from the above should still work

https://github.com/alandefreitas/matplotplusplus

[Rang](https://github.com/agauniyal/rang) - "A Minimal, Header only Modern c++ library for terminal goodies"

[NanoGUI](https://github.com/mitsuba-renderer/nanogui) - "Minimalistic C++/Python GUI library for OpenGL, GLES2/3, Metal, and WebAssembly/WebGL"

[Midifile](https://github.com/craigsapp/midifile) - C++ classes for reading/writing Standard MIDI Files

[Elements](https://github.com/cycfi/elements) - "lightweight, fine-grained, resolution independent, modular GUI library."

[Fast IO](https://github.com/expnkx/fast_io) - "a new C++20 library for extremely fast input/output and aims to replace iostream and cstdio. It is header-only"

[Interactive C++ for Data Science](https://blog.llvm.org/posts/2020-12-21-interactive-cpp-for-data-science/) - Like Jupyter Notebooks

[NanoLog](https://github.com/PlatformLab/NanoLog) - "an extremely performant nanosecond scale logging system for C++ that exposes a simple printf-like API."

### Rust

[Nannou](https://github.com/nannou-org/nannou) - Creative Coding Framework for Rust

[pyo3](https://github.com/PyO3/pyo3) - Rust bindings for python, write python modules in rust

### Go

[Lorca](https://github.com/zserge/lorca) - "A very small library to build modern HTML5 desktop apps in Go. It uses Chrome browser as a UI layer. Unlike Electron it doesn't bundle Chrome into the app package, but rather reuses the one that is already installed."

[Pixel](https://github.com/faiface/pixel) - "A hand-crafted 2D game library in Go"

### Python

[NumPy Illustrated: The Visual Guide to NumPy (Lev Maximov)](https://medium.com/better-programming/numpy-illustrated-the-visual-guide-to-numpy-3b1d4976de1d)

[Full Stack Python Course, has some info on more comon libraries](https://www.fullstackpython.com/table-of-contents.html)

[Python-Cheatsheet](https://github.com/gto76/python-cheatsheet) by gto76 on github

> Only including the less common ones here. If you're new to python you should look into Numpy, Matplotlib, Pygame, Pandas, and Requests. Those more or less make up the

[Sympy](https://www.sympy.org/en/index.html) - Symbolic computation for python. 

[Pretty Errors](https://github.com/onelivesleft/PrettyErrors) - "Prettify Python exception output to make it legible."

[Pampy](https://github.com/santinic/pampy) - Pattern Matching for Python

[Rich](https://github.com/willmcgugan/rich) -  library for rich text and beautiful formatting in the terminal

[Manim](https://github.com/3b1b/manim) - "Animation engine for explanatory math videos" used by 3Blue1Brown

https://github.com/mitsuba-renderer/nanogui

[PyNuklear](https://github.com/billsix/pyNuklear) - Nuklear (see above) binding for python

[Guietta](https://github.com/alfiopuglisi/guietta) - "A tool for making simple Python GUIs"

[Kivy](https://kivy.org/#home) - GUI framework

[Typer](https://github.com/tiangolo/typer) - "Typer, build great CLIs. Easy to code. Based on Python type hints."

[Python-Fire](https://github.com/google/python-fire) - "a library for automatically generating CLIs from absolutely any Python object."

[Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - Web scraping

[bokeh](https://docs.bokeh.org/en/latest/docs/user_guide/quickstart.html#userguide-quickstart) - "Bokeh is an interactive visualization library for modern web browsers" (yes, it uses python)

[MoviePy](https://pypi.org/project/moviepy/) - "a Python library for video editing: cutting, concatenations, title insertions, video compositing (a.k.a. non-linear editing), video processing, and creation of custom effects"

> Also see pyO3 in rust above, which allows for writing python modules. Of course python modules can be written [in C or C++](https://docs.python.org/3/extending/extending.html), but doing so in Rust is safer, because, Rust.

> For Matplotlib, I do recomend looking at the aviailable [Matplotlib colormaps](https://matplotlib.org/stable/tutorials/colors/colormaps.html) and [color map normalization](https://matplotlib.org/stable/tutorials/colors/colormapnorms.html#sphx-glr-tutorials-colors-colormapnorms-py) as the colors used to view your data can make a huge difference in how readable it is

#### Python Machine Learning

> Obviously Tensorflow, PyTorch, Keras, etc. exist. This list is for the stuff you don't already know about
>
> That said, it's worth noting that `tensorflow-rocm` exists, which *might* work for you if you have an AMD graphics card and don't want to shell out for a different GPU just for CUDA support.

[SpaCy](https://github.com/explosion/spaCy) - "Industrial-strength Natural Language Processing (NLP) in Python"

