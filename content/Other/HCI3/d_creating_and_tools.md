TODO:

Tools should be self contained and opinionated: C vs Rust, Fossil Vs Git, etc. ++ How this contradicts, but why it's better.



## Creating New Information Sucks

**Or, People Will Only Make Stuff That Is As Good As The Tools They Have**

{{< speech boba big >}}

Note the "**Will**" and not "**Can**". A very talented musician **can** make [a shovel](https://youtu.be/IyQOw-_H4yE) sound good, a talented photographer [doesn't need a good camera](https://www.kenrockwell.com/tech/notcamera.htm). But in general that's setting the required bar of talent - and therefore time - higher. The better and more efficient our tools are, the better content people can make without putting in more time than they're willing to. 

A better camera won't make you a photographer, but it might be the difference between unusable pictures and a saved memory for someone with less skill.

{{< /speech >}}

I think I've generally made the case that our tools suck so far, but here's where I think things can get really interesting. I'll break this up into multiple problems:

### We Need Faster Input

WYSIWYG (pronounced wizzy-wig) or **W**hat **Y**ou **S**ee **I**s **W**hat **Y**ou **G**et editors (usually for text and images) are those that do their best to make sure that what you see in the software directly relates to what you'd get if you printed it out or sent it to someone else - Like Microsoft Word. Unfortunately, it's often true that WYSINWYW **W**hat **Y**ou **S**ee **I**s **N**ot **W**hat **Y**ou **W**ant. That is, controlling software like Word is a massive pain in the ass. So While WYSIWYG sounds great in theory, it's often hard to use, a menu-dive hell, and is slow compared to something more limited like Markdown. Markdown is what this website uses, in a nut shell

{{< columns >}}

You write text like this

```markdown
# Title

normal text, **something in bold**,
and a *title* in itilics.

* a bulleted list item
* and another

`some code`

| and     | a    | little        |
| ------- | ---- | ------------- |
| table   | with | some          |
| content | for  | demonstration |

> a quote
```



<--->

And it turns into this

# Title

normal text, **something in bold**,

and a *title* in itilics.

* a bulleted list item
* and another

`some code`

| and     | a    | little        |
| ------- | ---- | ------------- |
| table   | with | some          |
| content | for  | demonstration |

> a quote

{{< /columns >}}

The advantage here being that once you've memorized the special characters for formatting, they're really, really fast to type. Plus, if you want to change the style of the content you can just change the way it's rendered - for this website that's defined with the CSS (the "style sheet" of a website) but in an exported document to PDF a given markdown editor probably has a dozen different themes to choose from.

The biggest problem with markdown is that you need to take that text with the special formatting characters and render it. This, historically, meant that you'd have a pane of text you write in and a different pane where you see what the final document should look like. This is confusing and eats all your screen space. Fortunately, tools like [Typora](https://typora.io), [Marktext](https://github.com/marktext/marktext), and [Obsidian.md](https://obsidian.md) all have the ability to render things in the same window as you type, making it feel totally natural.

But, alright, that's a lot about editing text, what about for editing pictures? Making Videos?

Well, I think a large part of that comes down to having tools with AI assisted tools. If you can put in natural text saying  "Perform red eye removal", "blur the background", or "add film grain" that's already a huge leap forward, but with actual object recognition in the photo, it's reasonable to expect we may be able to say something as specific as "remove the dog in the bottom left". Plus, as full realistic image generation tools get better - see [DALL·E 2](https://openai.com/dall-e-2/) - "make this picture look like it was taken at night" may become something you can do.

Even for original digital art, there's a lot that can be done, for example see [PaintingLight](https://github.com/lllyasviel/PaintingLight) which can automatically shade/light digital art.

For video, the same ideas apply. Some of this is already being done by https://runwayml.com (though their pricing is a bit high given it's browser based).

### We Need Tools that Scale With the User

On one hand, I really hate baby sitting users that don't want to learn how to use software - espically software they use every day - on the other, I know not everyone is capable of remembering how to use the deepest features of Word (or, have mercy, Blender) and often just want to do something quickly.

Right now, this problem is largely solved by just having a bunch of different products depending on what a user needs. Just need to quickly draw over an image to circle something? MS Paint will probably work fine. Want to do digital art? You probably want [Krita](https://krita.org/en/). Photo Editing? ~~Photoshop~~ [Affinity Photo](https://affinity.serif.com/en-us/photo/) will work well.

This isn't great, in part because it means that work is being duplicated, but also because it means the UI for actions common to all three isn't the same. We need software that can open, initially, with the bare basic features (The MS Paint equivilant) but can have things added and removed as needed, and profiles with different configurations saved.

This also comes with some responability on part of the developer to provide great documention, user extendability (Let users write their own plugins in Python!), and to have good **in-software** help. That last point is worth the hassle of development. Having the ability to hover over a button for a bit and it telling you what it does is much, much better than digging through docs to find it.

### We Need Interopability

Say you're working in Krita making some digital art and want to load your file into Affinity Photo to use it's lighting system on your art. Well, you *can* do this. One option would be to export the file from Krita as a final render, probably as a .PNG, trust that you wont find anything you won't have to go back and change, and do what you need to do. Another option is to ~~ab~~use the .PSD format (**P**hoto**s**hop **D**ocument) which is, uh, [not a good format](https://github.com/gco/xee/blob/4fa3a6d609dd72b8493e52a68f316f7a02903276/XeePhotoshopLoader.m#L108). This would preserve the layer structure which will allow for more advanced editing, but is clearly not great.

So, I'm just arguing for standardized file formats, right?

{{< columns >}}

<img src="/nonfree/character/shade/yesbutno.webp" alt="Vega hacking on a laptop">

{{< attribution >}}Character owned by Vega, art by [Shade](https://twitter.com/shadepiplup10) {{< /attribution >}}

<--->

Standardized file formats, where possible, do help. But I also realize why we don't have them. Sometimes you want a new feature that just doesn't have a place in the current format. If we wanted a generic format that worked everywhere, the format would effectively have to be able to include arbitary binaries in it to work on everything. So, uh, that doesn't work.

Instead, what I'd like to see is software that does three things to work around this:

**First,** actions should, as much as possible, be **non-destructive**. This means they can always be reversed and or taken out of a chain of actions performed.

**Second,** software should assume that it does **not** have a lock on a file,

**Third,** actions taken in software should be a log of events to recrate the final product (caching expensive actions as possible), not the actual result.

{{< /columns >}}

If you combine these three things, it would mean that *multiple* programs could actively work on the same file at the same time. They just have to look through the shared log file and perform their actions in order according to the log.

Now, if you wanted to work on the same file in Krita and Affinity Photo, you could literally edit it simultaniously in both.  Changes would just propogate for as much of the standard the two have in common. This works best if one program supports a sub-set of the other (as in, if Affinity supported everything Krita did, and more - but not Krita supporting some things Affinity doesn't and Affinity supporting some things Krita doesn't) but even if that isn't the case, it's reasonable to just document the places the overlapp fails and still see this as a win.

To be clear, I know this is a pretty utopian idea. It assumes that multiple organizations will actually standardize, that they can play nicely with interprocess comunniciation, and that people actually keep their software up to date to keep up with standards that will naturally evolve. Still, I think this is the way forward. Integartion and simultainous workflows in multiple programs just opens up so much possibility. Hell, if this was done there's no reason two artists couldn't work on the same piece simulatiously. Imiganie, two artists working on the same piece (though probably in different layers) able to work together.

{{< smalltext >}}I also know copyright and patents are an issue with this idea. Let me dream.{{< /smalltext >}}

### We Need Tool Composition

As an alternative to the file format clusterfuck, it may be better if programs themselves composed nicely. If you're a unix nerd, you may see either of these two ideas as "The Unix Phillosophy". Regardless, my point is that if each primary task someone wanted to do (writing, photo editing, text editing, etc.) had a good, base program different vendors - both free and commercial - could focus on providing extensions to it or making bridges to their own software and allowing for them to work together.

As a motivating example, say you want to write a fantasy book. You'll want something for writing the actual text (duh.), something for mapping how characters know or are related to one another, a tool for making the outline, something for generating a world (land masses, religion, history, etc) and documenting it, etc.

Each of those tools could exist as independent software, sure. But they could *also* exist as plugins for a base, generic program that these tools snap into so that they can share data. For example, maybe the world generation tool could generate a map that has labeled cities, then, whenever that city is mentioned in the text or outline, it would appear as link for the author to store notes about what's happened there.

Ideally, each piece of software would still be able to be function independently, but when ran together they could communicate and comfortably snap together into a better user interface with shared interactivity. 

Arguably, this should actually be the job of the Operating System to provide this backend on which things can request to hook together and each program could expose generic interfaces, like a text editor saying "here's my main text box, feel free to look through it for words to turn into links", and all open programs could say "Yeah, I want to do that" - of course, provided the user wants to give programs permission to do so.

All of this would hopefully mean that any extension written for one program would work for another, and any program could talk to another. For example, currently the realm of music software has a little bit of this with VSTs and MIDI. but it still leaves a lot to be desired.

I'd actually like to take it a step further though and ask that all data of any kind use a common enough format that it can be processed with any extension/program written with this API in mind. Imagine if you could use a synthesizer as a static generator for image manipulation, or color management controls as an EQ. 

Seriously. This idea just blows my mind. If we let data get re-intrepted as things it's not supposed to be, the options are nuts.

Both would and should behave in strange way, and it's this very lack of defined behavior that could lead to interesting art forms. I'd love to see a 'Master' API that works across all formats and ideas with a common data type that allows for program⟺program, program⟺extension, program⟺hardware, etc. communication even in long, complicated chains. After all, if you've taken a signals and systems course you know that basically any data can be treated as a signal.

{{< columns >}}

As for what this would actually look like, having an operating system which presents - as a core to the functionality - some sort of node based programming system would work. While I don't actually know how to use it, I think [Enso](https://enso.org/#Overview) demonstrates this concept fairly well:

If you'd like to try it, you'll want to watch [The tutorial video on YouTube](https://www.youtube.com/watch?v=3f6FE1dgMNw&list=PLk8NuufOVK01GhaObYr1_gqeASlkj2um0).

{{< attribution >}}Image taken from the [Enso GitHub Repository](https://github.com/enso-org/enso){{< /attribution >}}

<--->

 ![Luna](/hci/enso.webp)

{{< /columns >}}

though there are plenty of other examples, like the node editors used for making shaders or programming in Unreal Engine.

Potentially this could also plug into the entire OS as well, making it so an image manipulation program's extension could for example modify anything output to the screen in real time, or an audio program could effect the output of anything. For developer's this may even offer more power, making possible things such as inter-process communication (think pipes, like `$ls -la | grep png`) a matter of connecting two nodes, or reading disk information such as activity, space, or even writeback and inode information, this would literally allow any one piece of information to be accessible to any other. This does have obvious permission issues, but unix permissions should already have this under control. If something like this could also be tied into the previously mentioned internet search and socialization 'web' without massive security concerns the potential use cases are as simple as getting color information from an image hosted online to as complicated as remote access or distributed computing.

This has already been tried to some extent with [Pipeworld (GitHub)](https://github.com/letoram/pipeworld), which bills itself as a "Dataflow 'spreadsheet' desktop environment". There's a [demo of it on YouTube here](https://www.youtube.com/watch?v=FgHMU7m9-I8), though you have to be pretty nerdy to fully appriciate it.

This also does already exist for some workflows. For example, video synthesis (while quite nieche) has [Syphon](http://syphon.v002.info) which many video synthesis applications support for realtime frame sharing with minimal overhead.

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Slightly more impressive from a more technical side is that you can reverse search for methods using an expected input-output pair<br><br>For example if you type in &#39;eureka&#39;, &#39;EUREKA&#39; it will return the method &quot;asUppercase&quot; which performs that string operation!<a href="https://t.co/9DpmCuV9hf">https://t.co/9DpmCuV9hf</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1371612552824766477?ref_src=twsrc%5Etfw">March 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## 