# Chapter 13½ - Data, Encodings, Compression, etc.

When you write code, you'll inevitably be working with input and output of some sort - even if it's just text. This is *always* more complicated than it seems. For example, text processing is easy, right?

🚫, 🅘🆃 🄸🄣's 🇳ot.

Even text encoding is a massive pain, unless you can ensure you only need to (and do) process basic ASCII characters, that is.

Ultimately, this comes down to understanding text encodings. I recommend watching [Plain Text, at talk by Dylan Beattie @ NDC 2021](https://www.youtube.com/watch?v=_mZBa3sqTrI) and reading https://kunststube.net/encoding/ for a nice intro to this.

That said, it's likely you'll need to work with many, many other data types. You'll see formats like .json and .yaml, need to parse things from .html pages, or get large binary files which lack formatting in the typical sense, but where maybe you've been told ahead of time that every byte is a different reading from some sensor. 

There's also the point of understanding when to load assets into your program from file (like having a folder of images to load from) or when to bake it into the code (like saving a bitmap into the source code as an array).

Finally, you should have at least some familiratiy with the actual structure of the files that make up your code itself, like what 

## File formats

[TODO] wav is easy, mp3 is hard.. show this. WAV format on 767 of POC||GTFO

[Zip - How *not* to design a file format (gamesgreggman)](https://games.greggman.com/game/zip-rant/) 

[PSD is not my favorite file format](https://github.com/gco/xee/blob/master/XeePhotoshopLoader.m#L108)



## Names

[Horrible edge cases to consider when dealing with music (Julien Voisin)](https://dustri.org/b/horrible-edge-cases-to-consider-when-dealing-with-music.html)



## Compression

[H.264 is Magic (Sid Bala)](https://sidbala.com/h-264-is-magic)
