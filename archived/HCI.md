>  This page is being removed from and edited as it gets merged into HCI2. If you want to see it historically, look though the git log.
>
>  The old HCI1.1 has been completely merged.


---

> This was originally written as a furthering of ideas developed in the first HCI blog post, and goes into implementation. I may still write a blog post like this, but for now it's not relevant to new HCI2 post.
>
> Should I explore this idea more and move it to it's own blog post? It's pretty wild. Go past self on thinking creatively I guess.

To begin with, my idea faces a crippling problem: mixed data sources and types. How on a graph could users profiles, web pages, system devices, local files, and data manipulation nodes all coexist? The answer, to me, is they don't have to, at least not all at once. I think the easiest implementation isn't of a 3 dimensional graph, but rather an 2+1 dimensional graph, by this I mean giving a control which selects what's held in the main plane (in the XY, Z=0), and then a choice of a third node source that exists in planes behind this (XY plane, Z<0).

Alright, that's still very hard to visualize. What this might mean is that all file types, data, web pages, local files, etc.,  are represented as a graph only on the XY, while functions on this data are held in the same plane, but *behind this data*. Say there's content on example.com that you want to store into a file on your local system: a link could be taken from the site and fed into a functional node that exists in a plane behind this main file navigation one, then a link created from this function into a new file node that's in a branch:

Though by defining dimensions to be able to hold whatever you like this could be incredibly flexible. For example, instead of storing a third data type in a constant plane behind the main one, the depth into the Z plane could be set as a log() of the time since file modification, showing the relative age of data visually. Even more interesting though, the relationship in the primary plane wouldn't have to be strict. Up until now I've been implying a file tree like stricture of the data; so files in folders, web pages following the navigation of the site, etc; However, this could instead be based on attributes of the data at hand, sorting audio files all together. For example this could show links between any audio files, which are then clustered by genre, and then even more tightly clustered by artist, with a now surrounding outlined region linking the encompassed nodes to the artist. This, existing in a visually outlined region of the genre and so on. Bringing this back to the concept of having functions in a further back plane, these functions could act on linked sets of data now, allowing for easy processing of data based on various selected attributes.

Say you wanted to apply an EQ profile to any song by X artist that is also instrumental, these two criteria could be filtered for and then linked into that processing function.

All of this would allow for graphs that can vary in complexity and representation based on what is most useful to the user.

To be extra clear though this primary, top-most plane wouldn't have to contain files or web pages, it could be aforementioned programs in the front with data types in the back, or system devices on the main plane (keyboard, mouse, gpu, cpu, mem, usb devices, disks...) with user profiles 'behind' this. I'm not sure *why* you would do that but the point is that you should be able to. Finally, from the navigation of data side is the idea of letting nodes contain graphs in themselves, Luna and Audulus both have this concept implemented pretty well. It can do a pretty good job of abstracting more complicated structures were desired. To make this clear I mean nodes could contain smaller networks of nodes when 'entered' as a way of reducing outward complexity when only a higher level view is desired. Ie, if all you care is a car drives that's fine, but inside a 'car' data structure you may find nodes storing data with inputs and outputs for things like an engine, transmission, etc. in the engine node you may see inputs and outputs and data storage for things like pistons firing. This makes it so layers of abstraction can literally be represented visually the same way functions can encompass complex behavior when programming. Again, this is not an original idea. Basically any flow based programming language has some aspect of this.

Moving on to how individual nodes would be 'defined' they should have a textual and visual representation, sort of like in Luna. This allows for a scalpel to be taken to the things that require it without 'diving into' nodes to the point of confusion where you get n layers of nodes deep in something like the above mentioned car example. Each node, as well as literally every file, program, and data source/sink on the system should be defined with some sort of common data wrapper which is used to generate the nodes structure, I'm imagining something like this:

```c
Inputs:
Outputs:
metadata:
data:
```

Where a specific example, a .wav may have a wrapper that looks something like this

```c
Inputs:
	null
Outputs:
	AudioData:
		ChannelL:
			Frequency:
				data.frequency.left
			Amplitude:
				data.amplitude.left
		ChannelR:
			Frequency:
				data.frequency.left
			Amplitude:
				data.amplitude.left
metadata:
	NodeType: "Audio"
	Album: "Only Solutions","Journey","Separate Ways (Worlds Apart)"
	Title: "Separate Ways","World's Apart"
	Artist: "Jounery of Zepplin"
	Lyrics: "..."
	Tags: "Rock", "80's"
	//Begin format dpndt wrapper
	extension: ".wav"
	format: 16
	samplingfrq: 48000
    ...


data:
	...
	0x0000130 0x0101010101010101c0ff11000108012c
	0x0000140 0x032c2201020001111103ff0100c4001f
	0x0000150 0x01000105010101010001000000000000
	0x0000160 0x010003020504070609080b0ac4ffb500
	0x0000170 0x00100102030304020503040500040100
	0x0000180 0x017d0302040005112112413113066151
	0x0000190 0x220714718132a1912308b14215c1d152
	0x00001a0 0x24f0623382720a0917161918251a2726
	0x00001b0 0x2928342a363538373a39444346454847
	0x00001c0 0x4a495453565558575a59646366656867
	0x00001d0 0x6a697473767578777a79848386858887
	0x00001e0 0x8a899392959497969998a29aa4a3a6a5
	...
```

This would initially define one node with an output of type 'AudioData' worth noting, this doesn't actually handle decode, that would be left to another type of node, one that contains a music player most likely. Also, this node would only appear to have one output, but another type of node could be defined like:

```c
Inputs:
	//lamda represent a fuction to be exectued to inorder to build the node, where as something without the lamda is actually a visually represented i/o on the nod
	λinput = getinput()
    //declaring an input that can become any type should be possible. I'm not saying this void syntax is good, but this also purly a hypothetical idea at this point.
    input = void
    //also note the lack of a funcitonal lamda means this would be an attachable input
Outputs:
	//outputs can use vars declared input, I can't think of a situation that would need to be the other way around.
	λtemp = input.getoutputs().totree()
    temp.traverse(2)
    //note the lack of a funcitonal lamda means this would be an attachable input too,
    //though it's varible in size and complexity based on the second level of the output definiton of the input node
metadata:
	NodeName: input.NodeType + "Data Splitter"
data:
	null
```

So that the data output of each channel could be interacted with directly, say to be piped though an EQ or filter first.

Also, this is actually generic, so it could be used to access the second level of any input, though if someone wanted theres also no reason the header of the wrapper for the wav file couldn't be modified to just remove the original audio data grouping in the first place; however, it would probably need to be regrouped before getting to a decode application. Or the outputs could be defined fictionally meaning the node could be entered and this could just be remapped inside the node visually. Or, even weirder yet this system would let you define your file as separate data structures all together, with one node that functionally one gets it's data from the left channel and another that only got the data from the right. Obviously the options here are infinite but different solutions and approaches are probably better than others, thought that choice is left to the user/developer.  

One more example just to get this idea defined:

```c
Inputs:
	λinput = read(/dev/hidraw0)
    input
Outputs:
	λoutput = map(input,keymap)
    output
metadata:
	NodeName: "HID Device" + input.getvendorid()
data:
	keymap:
		//dvorak key map
		"~":"~"
		...
		'q':"'",
		'w':",",
		...
        "/":'z'        
```

Which would be one way of setting up a keyboard and assigining it a Dvorak layout, now, ironically this example probably isn't the best, since that map would make more sense if it were defined as it's own node. Though, to some extent, due to the lamda, it would be since that would make the map fiction be an internal function if you were to 'enter' the node.

This wrapper could extend to literally everything in the system from image files where you have resolution, (R, G, B) @ pos, etc., to the generic wrapper for programs- exposing the virtual memory mapping and data, cpu usage, running status, etc., For example, a node for a text editor process may, when displayed on the 3D view with the system nodes, expose the connection to the input devices, the output of the window to the frame buffer... you get the idea. Also this brings up the idea of contextual i/o

Part of the beauty behind this is there's no reason any data type couldn't be mapped to another. This would mean something meant to control the color profile of a picture may be able to be repourposed into an EQ for music, or a synthesizer used as a source for noise generation in photo editing.   

Because I/O can be seen visually by the user, if something like a virus wanted to 'phone home' it would at least temporarily be forced to make a visual connection on screen. Speaking of, connection and node color can carry a lot of visual information for the user. For example an node outputting audio could change in color based on frequency and in saturation based on amplitude. The process doing this could be just be internally connected (not shown unless the node is 'entered') node in of itself.

One of the bigger ideas this network could implement is machine learning and tag based recognition of data to make connections between nodes and their internal data even easier to find. To avoid repeating myself to much, just checkout the **Finding Information** section of the last post. Furthermore, the methods for distributing the computational workload imposed by this as well as how I think it should be stored are covered to a reasonable extent in the **Retrieving and storing data** section.

Finally, I think it's worth mentioning to what extent I think this could be made a reality, or at the very least a decent proof of concept. Linux, by nature of the '[everything is a file](https://en.wikipedia.org/wiki/Everything_is_a_file)' concept, should allow for this, though this even has it's limits I do think it would allow for the vast majority of this functionality given enough work/effort. From a display and rendering perspective I think the Arcan display server is well suited to this concept and makes it a far less ambitious (though far less ambitions than needing to make a new display server and/or OS isn't exactly lowering the bar much). It's also worth noting that as I described in the parent post to this, the old school Linux terminal is in a way a proof of concept to this, as it already supports data flow programming in the form of [i/o redirection](https://www.tldp.org/LDP/abs/html/io-redirection.html), ([2](https://ryanstutorials.net/linuxtutorial/piping.php)) like pipes.

### Relevant Links:

[Unreal Engine Blueprints](https://docs.unrealengine.com/en-us/Engine/Blueprints), [Luna](https://www.luna-lang.org/#Overview), [PureData](https://puredata.info/), [VSXu](http://www.vsxu.com/), [PSCircle](https://github.com/tuxarch/pscircle), [Xcruiser](http://xcruiser.sourceforge.net/), [vvvv](https://vvvv.org/), [GNU Radio Comanion](http://www.joshknows.com/grc#screenshots), [Walrus](https://www.caida.org/tools/visualization/walrus/), [Arcan](https://github.com/letoram/arcan), [Durden](https://github.com/letoram/arcan), [Senseye](https://github.com/letoram/senseye/wiki), [Netsukuku](https://en.wikipedia.org/wiki/Netsukuku) ([2](https://github.com/Netsukuku/netsukuku)), [Patchmarix](https://github.com/OpenMusicKontrollers/patchmatrix), [Lbry](https://lbry.io), [Dat](https://datproject.org), [IPFS](https://ipfs.io), [3DWikipedia,](http://wiki.polyfra.me/) ([2](http://www.wikiverse.io/))
