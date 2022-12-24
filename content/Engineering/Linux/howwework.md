# Chapter 5 - Working on how we work

## The Terminal

In the world of programming, embedded development, and electrical debugging you will inevitably need to understand how to use a terminal/command line at some point. While the text only interface can look intimidating, it has some clear advantages. Namely it's significantly faster to use the cli or 'command line interface' version of many tools. Because of the nature of this guide you will be using the terminal frequently, so for convince sake information on using it effectively has been moved to Appendix A, I highly recommend you read though it after you finish this page.

For now, at bare minimum, I recommend getting autojump (`j`) setup early as it makes navigating around the terminal much faster, `bat` makes reading code though `cat` not suck, and `tldr` will save you time when you forget how to use `tar`. Set these up early if nothing else. But really, there's a lot in Appendix A that I think is really cool. Do check it out.

## Heads up,

With that out of the way, I want to preface this chapter with a big warning: Getting used to everything we're about to do will be a pretty big leap. There's a good chance you've never used a computer that works in a way like we're going to be setting up, but it's what I and many of my friends use daily and for good reason. This is probably where more opinions are going to show than anywhere else.

I'm not going to repeatedly state how to install packages on Arch, so here's your lil' guide:

`yay` followed by the name or description of a package you want will help you find most packages. For example, running `yay i3 wm` will come up with multiple numbered results.

![yayi3](/eng/yayi3.png)

Here I could type 2 followed by pressing enter to install i3-wm. Note that whenever possible, you should prefer packages in core, community, or extra. (or any other repositories you've added to your `/etc/pacman.conf` file) over the AUR, as packages in the AUR are maintained to a slightly lesser standard and are often a bit more annoying to update. That said, the AUR is still *much* better than trying to download a package from some random webpage.

Also keep in mind `yay` is a wrapper for `pacman` and can download AUR packages (`pacman` itself can't), but you can always still use `pacman` directly. Just keep in mind that while `yay` will call `sudo` for you internally to request your password, `pacman` requires it up front, so to do most operations you'll actually need to use `sudo pacman`.

Speaking of, the basic operations you'll need to do with pacman:

`sudo pacman -Syu` will run an update, but just using `yay` is usually better as it will update things in the AUR as well.

`pacman -F name-of-program-here` will let you know what package provides what program. For example `pacman -F lsblk` will tell me that the `lsblk` command comes from the `util-linux` package.

`sudo pacman -R name-of-package` will let you remove a package

For more info, read the ArchWiki page on [Pacman](https://wiki.archlinux.org/index.php/Pacman) and the [AUR](https://wiki.archlinux.org/index.php/Arch_User_Repository). 

## Code editors

People get defensive about the way they work, and frequently try to claim the way they work is the best way. I of course *know* that my way is the best 😉. Really though, it's mostly a matter of settling down into a good workflow and getting very fast with it.



I have three recommendations for code editors, as silly as that may seem.

The first two are terminal based `nano` and `vim`

`nano`, is the most simplistic of all the editors I'll list here. It's stupid simple to use and for quick just opening a text file and changing one line, probably the fastest. It clearly prints it's instructions at the bottom of the terminal:

![nano](/eng/nano.webp)

where `^` is the ctrl key, and `M` the alt key. However, you'll quickly find `nano` rather limiting. You'll still probably need to use it when you're stuck with only having command line access though. That brings me to my second recommendation, `vim` (or [ox](https://github.com/curlpipe/ox)). Unfortunately, `vim` is notoriously difficult to use, to the point that trying to exit vim is a bit of a joke (it's esc→:wq) [this tutorial](https://www.openvim.com/) is pretty good though, and if you want you can get some really nice extensions for vim, or full on plugin packs, like [spcaevim](https://spacevim.org).

Of course, you *probably* don't want to always use a terminal-based text editor (though you should be able to when you have to) so what's good graphically?

Despite it being a Microsoft thing, I really recommend Visual Studio Code with Platform IO<a class="ptr">(1)</a>, Bracket Pair Colorizer 2, and GitLens. If you're looking for more extensions than that, there's also a version of Asciiflow for VSCode, and plenty of extensions for live rendering graphical code (live-p5, glsl-canvas, Processing Language). If you're not okay with Microsoft living in your editor, you can grab [vscodium](https://vscodium.com) instead.

This gives you a pretty kick butt editor on par with most full Integrated Development Environments (IDE). I recommend you try out IDEs, especially if for some unholy reason you want to write in Java, but otherwise this will do fine.

![code](/eng/code.webp)

There are of course a ton of other options, Emacs, Atom, Eclipse ... If what I recommended doesn't suit you, feel free to look into these. Regardless, a text editor should be pretty high up on your list of things to get setup, as it will make the latter steps much easier.

{{< hint gray>}}

Alright, some disclosure. I don't really use Vim. I only use nano and VSCode. This is because if I really need to edit something in a CLI (so on a remote server or when first getting a system running) it's almost always the case that it's either a quick n' dirty config file edit that `nano` is fine for or something complicated enough to justify the annoyance of bringing the file off the server, using VSCode, then uploading it again. Often, I don't even need to do that though, as I'm able to edit the file in VSCode using [VSCode's Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) plugin or just connecting with [sshfs](https://github.com/libfuse/sshfs). That said, I did still learn vim well enough that I can use it if it is the only editor available, and do still recommend learning it as in a lot of professional contexts the servers will not have these modern conveniences.

{{< /hint >}}

## The Desktop Environment

This is the biggest change, I'm going to recommend switching from KDE, which we installed when we setup arch, to i3-wm. i3 is a tiling window manager, this means it looks something like this:

![i3](/eng/newi3.webp)

This is a screenshot of i3-wm with 4 windows open: two instances of `Typora` (the program I'm writing this in), and a file manager (`Thunar`),  a terminal (`deepin-terminal-gtk`) running `ncmpcpp` which is what I use for music. The `Typora` windows are being tabbed by i3 (it's a bit hard to see, but there's two big tabs at the top of the Window).  What's cool about i3 is how it will always use space as efficiently as possible by tiling the windows, and you can navigate between the windows (or multiple monitors) entirely by keyboard (mouse still works obviously) and open multiple virtual workspaces. When programming and using a computer for advanced things it's not uncommon to have a dozen windows open and having things organized like this can be a life saver. Plus, as I showed with the typora tabs, programs can also be tabbed instead of tiled, so I could have one tab of firefox, one of typora, and one of a terminal, so they're all still maximized but I can get between them quickly, and these tabs can be mixed with the tiles, as in that screenshot.

Alright, so i3-wm is great, right? Well yes, but...

i3, when first installed, is very, very minimal, it will greet you with a plain black bar and clicking with either mouse button anywhere will do nothing. You should, however, be able to open a terminal by using your modkey (probably the windows or alt key) and enter.

i3 actually comes in a bunch of separate parts, the most important of which are the window manager itself, the status bar, and the task runner.

The window manager is the thing that actually manages the windows, this is the part most people are referring to when talking about i3 (assuming they're not talking about an i3 Intel CPU) and is sometimes refereed to as i3wm. A very popular 'fork' of i3 is `i3-gaps` which is available in the community repository. It just addes slight gaps at the edge of the screen and between tiled applications for visual clarity. You can customize these gaps to be how ever big or small you want.

On top of the raw window manager you'll probably want a status bar of some kind. While the default `i3bar` which is included with the `i3-gaps` package is fine when paired with `i3status`, it does leave a bit to be desired. Many other options are available. I personally use `polybar` though I have friends that have used `lemonbar` or `i3blocks`.

Finally you'll want a runner/application launcher. While `i3-demu` is the default, I find it rather annoying to use, and much prefer `rofi` -- this is much better explained here than I can briefly: https://github.com/davatorium/rofi

To further make i3 reasonable to use you'll want a few more things:

`picom` is a composite manager. This is used to allow application to have some transparency, prevent screen tearing, and does slight effects, like a shadow behind windows. (You may also see this referred to as Compton, picom is the replacement for `Compton`)

`lxappearance-gtk3` can be used to set the theme used by various graphical applications. I use [Sweet](https://www.gnome-look.org/p/1253385/) but there are nearly endless options

For setting the wallpaper (which you probably wont see much) you can use `nitrogen` or `feh`.

if you have multiple monitors before setting the wallpaper though you'll probably want to arrange your monitors correctly, for this you can use `xrandr` , read the man page for more information. You can add the command you use to set up your displays to your i3 config file to apply them at each reboot. If you're having issuse with `xrandr` you may want to use `arandr` to make the initial config file.

{{< columns >}}

if you have a high resolution monitor and things are small, you may want to look here: https://wiki.archlinux.org/index.php/HiDPI , the best thing from this is to add the text on the right to your `/etc/environment` file.

<--->

```bash
QT_QPA_PLATFORMTHEME=qt5ct
QT_AUTO_SCREEN_SCALE_FACTOR=1
GDK_SCALE=2
ELM_SCALE=1.5
```

{{< /columns >}}

You'll be needing quite a few different utilities beyond this. for a terminal I highly recommend `kitty`,  `rxvt-unicode`, or `Alacritty`, though I actually use `deepin-terminal-gtk`.

For fonts you'll certainly have your own tastes, but I really like Droid Sans Mono, which is in `ttf-droid`, but `ttf-hack` and `otf-fira-code` are pretty cool too. I also recommend installing `noto-fonts`, `noto-fonts-extra`, and `ttf-font-awesome`. The noto packages will provide coverage for weird characters and font awesome is basically icons saved as a font, and many open source projects use it. You'll also probably want `nerd-fonts-complete` which is in the AUR.

### Actually configuring i3, polybar, etc.

Alright, so I just spit a lot of information at you, let's put some of it to use.

The first thing we need to do is get everything installed. If you followed the install guide in Chapter 2, you should have either installed `ssdm` and `kde` or `lightdm` and `mate`. I had you start with those because they're at least somewhat familiar to most people in how they work. Fortunately, display managers like `ssdm` and `lightdm` will let you choose the environment you log into, so for now we can leave everything in place, and just login to it later.

I'm going to give the list of what I want when I get a system set up, you probably won't use all of these right away, but you'll likely need them at some point. Before you do this though, make sure you've enabled `multilib` in `/etc/pacman.conf`, and update (just run `yay`).

`i3-gaps`, `rofi`,  `picom` ,`polybar`(AUR), `lxappearance-gtk3`, `kitty`, `deepin-terminal-gtk`, `polkit-gnome`, `thunar`, `nautilus`, `mpd`, `ncmpcpp`, `evince`, `vivaldi`, `vivaldi-ffmpeg-codecs`, `firefox`, `pavucontrol`, `krita`, `libreoffice-fresh`, `nomacs`, `feh`, `typora` (AUR), `gparted`, `deepin-screenshot`, `audacity`, `vlc`, `kicad`, `obs-studio`, `wine`, `firewall-d`, `zsh`, `tldr`, `autojump` (AUR), `bat`, `lsd`, `duf`, `htop`, `progress`, `youtube-dl`, `hexyl`, `fzf`, `optipng`, `jpegoptim`, `speedcrunch`, `caffeine-ng`, `redshift`

> if you want to game, you'll probably want `steam` too. I recommend using `steam-native-runtime` and installing `steam-fonts`. Steam also provides 'proton' which is like `wine` on steroids. It makes a huge number of Windows games work with no added effort.

{{< details "What are all of these things???" >}}

| Name                  | Use                                                          |
| --------------------- | ------------------------------------------------------------ |
| i3-gaps               | The thing that tiles and tabs windows, draws the title bar on windows, handles window open/close events, resizes windows, etc. Literally the Window manager. |
| rofi                  | The 'runner', opens a window for you to type the name of a program you want to run into |
| picom                 | The 'compositer' - prevents weird graphical bugs, lets you use transparency and shadows, etc. |
| polybar               | provides the bar at the bottom of the screen                 |
| lxappearance-gtk3     | Lets you change the theme of graphical programs              |
| kitty                 | Terminal emulator                                            |
| deepin-terminal-gtk   | Another Terminal emulator                                    |
| polkit-gnome          | allows graphical programs to request your password           |
| thunar                | file manager                                                 |
| nautilus              | another file manager, a bit slower to use but handles remote connections well |
| mpd                   | the 'sever' side of the music player I like                  |
| ncmpcpp               | the 'client' side of the music music player I like           |
| evince                | pdf++ viewer                                                 |
| vivaldi               | my web browser of choice                                     |
| vivaldi-ffmpeg-codecs | lets you watch youtube videos without the browser shitting itself |
| firefox               | spare web browser. Trust me. You want two.                   |
| pavucontrol           | volume control                                               |
| krita                 | art program                                                  |
| libreoffice-fresh     | Word, Excel, etc. alternative. Can open word docs.           |
| nomacs                | good image viewer, with some editing capabilities            |
| feh                   | minimal image viewer                                         |
| typora                | markdown document editor                                     |
| gparted               | storage manager (reformatting hard drives, etc.)             |
| deepin-screenshot     | Screenshot with some editing built in.                       |
| audacity              | audio editor                                                 |
| vlc                   | media player (video++)                                       |
| kicad                 | PCB design software                                          |
| obs-studio            | screen recording++                                           |
| wine                  | run windows programs on Linux. **do not use this for driver software, bios updates, etc.** |
| firewall-d            | Firewall service and config program                          |
| zsh                   | shell, better than bash                                      |
| autojump              | make shell navigation faster                                 |
| bat                   | better in-terminal file preview                              |
| lsd                   | better in-terminal file listing                              |
| duf                   | quick disk usage viewer                                      |
| ncdu                  | disk usage analyzer, find what's filling your entire disk    |
| htop                  | like Task-manager on steroids                                |
| progress              | view progress of a running terminal app                      |
| youtube-dl            | download videos/gifs from basically any website              |
| hexyl                 | hex-dump file                                                |
| fzf                   | dependency for many other things, useful to make quick terminal menus |
| optipng & jpegoptim   | lossless shrink of image file sizes                          |
| speedcrunch           | fast to use calculator program                               |
| caffeine-ng           | ability to turn off screensaver/suspend from tray            |
| redshift              | bluelight filter to prevent your eyes from bleeding          |

{{< /details >}}

> This might work, but also might not, installing packages in bulk fails sometimes
>
> [TODO] one-liner install with --needed

First things first, lets get switched over to `zsh` and setup `oh-my-zsh` and `autojump`.

[TODO]

Pop open your text editor to work on your `~/.config/i3/config` file, and go ahead and open up [the i3 User's Guide](https://i3wm.org/docs/userguide.html) in a browser for reference. We're gonna get cookin'.



[TODO]



inside your i3 config file you may want to set specific actions to take place based on a window's name (bind all social applications to a social workspace for example) to do this you'll need to get the windows class using a tool like `xprop`

### Customization Resources

If you're looking for more ways to make your setup the best it can be or config files you can steal from check out  [r/unixporn](https://www.reddit.com/r/unixporn).

[TODO] https://github.com/mjswensen/themer

## The Physical Environment & Hardware

![penv](/eng/physicalenv.webp)

Working on a laptop with a mushy membrane keyboard is totally fine for some people, but when you're deep into some complicated work having the best possible setup can save a lot of time, frustration, and mental overhead.

Furthermore, the work environment can change how long you can work for and how productive your work time really is. Be it for comfort or productivity, there are many reasons to take care in making sure you're setup is right for you.

If you are on a laptop some of the following is still applicable, but consider how any of what I'm about to mention may be adapted to your own setup.

**Displays**

The way you use your monitor is more important the monitor itself. Don't get me wrong, if you have an 11", 4:3 aspect ratio monitor running though VGA there's a limited amount you can do, but there's still some things.

First and foremost is positioning. I've helped many a office worker complaining about neck and back pain simply by raising their monitor closer to eye level. Ideally you want your eyes to naturally rest right on the on the top 3rd line of your screen, about the level where the left-most knob is on the wallpaper on my right-most monitor in the picture above.

Unfortunately, there is no magic rule for how far away your monitor should be from your face, as this highly depends on your vision, monitor's resolution, and size

> on this note, you'll often hear monitors described by their dots per inch, this is a measure of the number of pixels in a square inch on the screen, the higher this is the finer the details, but the smaller any given element on screen will be. Apple's Retina displays for example have a high DPI rating, which is a large part of the reason they look so good

I personally have my three, 4k (that's 3840x2160, or 4 times the resolution of 1080p) monitors positioned approximately 30 inches from my eyes.

Before moving forward though, I think it would make sense to talk about some of this display terminology. With that, I present far too much information condensed into one box:

{{< tabs "Display Info" >}}

{{< tab "Aspect Ratio" >}}

**Aspect ratio** is the ratio is the ratio of the width to the height of the screen, most modern screens are 16:9, or have 16 units of width for every 9 units of height. Most older displays, often now called square screens, are actually 4:3. Many people actually still prefer this for the extra vertical room it affords at a given size, and some laptops are actually moving back to a more 'square' aspect ratio. On the other hand more exotic ultra-wide displays are also coming out

Sizing of displays is a bit odd. A 27" 16:9 display, is not the same size as a 27" 4:3 display as displays are measured diagonally.

{{< /tab >}}

{{< tab "Resolution" >}}

**Resolution** of a display refers to the number of pixels, HD technically starts at 720p, or 720 pixels across, though this is generally rather low by modern standards, with acceptable usually considered 1080p, which is technically 1920x1080. You may also see 1080i, this is a strange concept, not actually related to resolution, but more to refresh rate. [Interlaced Video (Wikipedia)](https://en.wikipedia.org/wiki/Interlaced_video)

QHD is 1440p and 4k (ignoring the mess of naming there) is usually 2160p. I recommenced against 1440p unless the system is mostly for gaming, as scaling from most content that is in 1080p to 1440p is awkward compared to the direct 2x scaling with 1080p to 2160p

{{< /tab >}}

{{< tab "Interface" >}}

The interface on your display matters greatly as well, the most common at the are HDMI, Display Port, DVI, and VGA

**VGA** is the worst option here, as it's an analog signal. This means the signal can do strange things, getting corrupted between your computer and the monitor. Typically this is a blue, screw in connection with many pins

**DVI** is still pretty common and looks like an even larger VGA connection, with a typically white, screw in connector. This signal is normally digital, though there is a varient of DVI that can be adapted into VGA. Of note, DVI can also be adapted to HDMI though you will not have audio, as DVI does not carry sound

**HDMI**, probably the most well known connector, has multiple revisions, the revision determines many things such as the maximum resolution, refresh rate, and weather or not more obscure things such as HDR are supported. HDMI is usually considered the best of these three options

Taking the crown however, is **Display Port** (DP). Like HDMI display port does have multiple revisions which do differentiate similar things; however, Display Port will generally support high resolutions and more features at any given point. Assuming you're running a bog-standard 60hz 1080p display however, you'll find no difference between DVI, HDMI, and DP - unless you need sound.

{{< /tab >}}

{{< tab "Refresh Rate" >}}

Next, you'll want to note the **refresh rate** of your monitor. This is how many times per second your monitor refreshes the screen. Typically monitors run at 60hz and TVs at 30 or 60. Because unlike a TV you're causing things on screen to change though, 30hz is generally considered bad and can even cause motion sickness. While 60hz may be standard, going for something even higher, with many displays offering well above 120hz, is something you may want to consider, especially if you plan on gaming.

Newer displays may support Freesync or Gsync, and both of these technologies require a supported graphics card in the system as well. These allow the display and computer to adaptively change the refresh rate so the monitor and computer both send and display frames in sync, which can make even a low refresh rate 'feel' much higher. This is a feature typically marketed to gamers and only supported in video games, but this has been changing. Gsync monitors generally have a much better implementation of the technology but it requires an Nvidia graphics card. As of the time of writing both Freesync and GSync are supported on linux, but quite rough around the edges.

{{< /tab >}}

{{< tab "Latency" >}}

Related to refresh rate is **latency**. In general this can actually mean two things, one is how long it takes for an image sent to the screen to actually be displayed. The lower this time the better, with good screens being sub 10 millisecond. Unfortunately, there's no standard among the industry to measure this and many get it wrong.

Also with latency there's grey to grey times, this is a measure of how long it takes a pixel to go from one shade to another. The lower this is the less motion blur the screen will exhibit.

{{< /tab >}}

{{< tab "Color Depth" >}}

The **color depth** of the display determines how precisely a color may be displayed. The higher this is the better, but almost all modern displays will be the same, and unless you're an artist or creative professional you're unlikely to notice a difference

On the other hand, you are likely to notice the color gamut or what range of colors the display is actually capable of displaying.

For example, two displays may both be capable of displaying 255 levels of red, but if one display's range is only from a dingy red to a dark-ish red, while the other is from a brilliant red to a deep dark red, there's a massive difference in color availability. If this is important to you, notably as a creative professionally in photo or video, you may want to read more at https://en.wikipedia.org/wiki/Gamut

{{< /tab >}}

{{< tab "Dynamic Range" >}}

The next obvious thing to mention is **dynamic range**, or how deep the blacks are and how vivid the whites are. Again, this is simple, the higher the better. Many display types (LCD, TN-Panel) will have similar specifications in all these areas, but particularly here. OLED is probably the best when it comes to dynamic range as it can display true black by actually turning the source of the light off, but unfortunately these are quite susceptible to burn in and image persistence.

Actually, display technology overall (OLED, LCD, TN, CRT, etc.) will have more of an impact than anything else. But, this is also getting really into the weeds, and I don't want to recommend one technology over the other since depending on many other factors on each display theres no clear winner, as everything is a trade off - OLED is probably the best as it can display true black by actually turning the source of the light off, but it suffers from bad burn in, plus moving the image quickly can result in a 'purple smear' - something you may have noticed when scrolling though images on your phone. You probably won't find an OLED monitor for sale anyways because of this. Great for movies, but when you have un-changing elements on screen for hours at a time it's not ideal.

There are some newer displays which feature HDR or High Dynamic Range, which allows the panel to selective change the brightness in an area of the screen, giving much better dynamic range in supported applications than a normal display

{{< /tab >}}

{{< tab "Burn in" >}}

**burn in** and **image persistence** are both negative effects on many displays where a pixel either permanently or temporarily resists change in color. This can lead to being able to read previously displayed bright white text on a now black image for example. More commonly you'll find TVs which have a particular station's logo 'burnt in' to one corner of the screen, persisting even after changing channels

{{< /tab >}}

{{< tab "Brightness" >}}

**Brightness** is obvious, how bright or dim is the display. The big thing to note here is weather the brightness is PWM or DC controlled. Displays with PWM controlled brightness are much more common, however, it's a bit of a cheat. Instead of actually changing the intensity of the back light directly, they're simply strobing the light on and off to fast for the eye to see. This can cause eye strain over time though, and generally DC control, which actually does change the brightness directly is preferred. If you have a PWM display and don't mind it at full brightness, this should help with eyes strain, as there is no longer a strobe effect as the display's backlight is just constantly on.

{{< /tab >}}

{{< tab "Subpixels" >}}

Finally, if fonts look bad on a screen, it may be due to **Sub-pixel rendering**. Basically, while most screens pixels go R-G-B in order, not all do. To make text look sharper, most font renders will try to abuse this sub-pixel order to get sharper-than-pixel fonts. This is adjustable in lxappearence on Linux, and should be handled by setting up 'ClearType text'.

{{< /tab >}}

{{< /tabs >}}

clearly there's a lot to be considered here. A no compromise monitor can cost thousands of dollars, but nice 4k 27" monitors like mine can be found for <250 on sale, and I love them. Just figure out what you need and what would be the most beneficial for you and work from there.

---

One of the great things about i3 is how powerful it can be with multiple displays, though even if you're not using i3 having a 'multi head' setup can be a god send for productivity. Even if your monitors don't match it's worth it. If you have the budget to get two matching monitors, great, if not just getting a cheapo used monitor from a thrift store will be a massive improvement. I think 2 is the magic number for most people. 3 monitors take up a lot of room and unless you do some very multi-tasked things you won't see much benefit that using something like i3's workspaces wouldn't provide anyways.

Another thing to mention is red-light filters. While I dont personally use one many people find that reducing the amount of blue light coming from their displays significant helps with eyestrain. If this interests you give `redshift` a shot. I use it every now and then if I have a headache.

**Keyboard**

Probably the most important thing you can do for your workspace is getting a nice keyboard. If you're rocking a rubber dome or membrane keyboard, moving to a mechanical keyboard will make a massive difference.

![keycomp](/eng/mechkey.webp)

{{< attribution >}}[source](https://commons.wikimedia.org/wiki/File:Keyboard_Construction_Button_Press.JPG) {{< /attribution >}}

The membrane/rubber dome keyboard on the left doesn't give much physical feedback to your fingers when you press a key, compared to the mechanical key switch on the right. A decent mechanical keyboard can be found on amazon for <50 USD, though as with anything in life the more you spend the better the product. One thing to keep in mind is the color of the switch used. Above you can see that keyboard has blue switches, blue switches have a noticeable 'bump', that is the switch has a spot of higher resistance before it actually bottoms out, and the key actually presses at this point, furthermore, blue keys are clicky - they are loud and some people find this annoying. Finally, they're also pretty light, not taking too much force to push down. Generally, blues are considered the 'gold standard' among typist, but games on the other hand may prefer a brown, red, or black switch.

|           | Linear | Bump  | Bump + Click |
| --------- | ------ | ----- | ------------ |
| **Light** | Red    | Brown | Blue         |
| **Heavy** | Black  | Clear | Green        |

> these are the common colors and how they feel for Cherry MX switches. Most other mechanical switches are 'clones' of MX switches- though sometimes these clones are actually superior-
> but these clones don't always follow this chart

really it's all a matter of preference, I'm actually using a switch not listed here on my keyboard, but generally finding what you like among the above first is a good place to start. If I'm not using my main keyboard I generally use Blues. If you'd like to try some out before pulling the trigger on a full keyboard you can find switch test boards for sale online.

Furthermore, there are other types of switches like IBM's old Model M line which use a buckling spring, which are quite stiff and have a very unique, heavy feeling. If you don't want to use a 20 year old keyboard Unicomp makes clones that are quite nice.

You should also consider they layout of your keyboard. Some people absolutely need a number pad while others are happy to omit it and have the shorted hand travel to their mouse. Even still others want an extravagant number of keys or a weird split keyboard like mine:![keeb](/eng/splitkeeb.webp)

> This is a custom built ErgoDone keyboard, The Ergodox-ez can be purchased for ~300 USD, or you can build one like mine for a bit under 200

[r/Mechancial Keyboards](https://www.reddit.com/r/MechanicalKeyboards/comments/jqy923/better_than_uwu_keycaps/) is a good place to go for inspiration and more information

{{< columns >}}

Beyond the physical layout you may also consider the keymap or software layout. Not only does my keyboard look weird, but the keys aren't arranged as you'd expect either. Instead of typing in QWERTY, I actually use Dvorak. That layout looks a like this on a normal keyboard:

<---> ![Image result for dvorak](https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/KB_United_States_Dvorak.svg/1200px-KB_United_States_Dvorak.svg.png)

{{< /columns >}}

though obviously anything is possible. A lot of programmers like to disable their Caps key for example and put something more useful there, or you may just want to move around a letter or two. Using a standard layout like Dovark is a bit easier though as I can easily load my keymap pretty quickly on any computer. Plain old Qwerty is fine, but I personally like my 'weird' keymap.

If you're shelling out big bucks on a nice keyboard anyway, you may also want to get a keyboard which supports QMK, a completely open source firmware which gives you total control of your keyboard, allowing you do to cool things like type greek letters ( Ω , α, β) or type parentheses by tapping the shift keys. I find that particularly helpful as my keyboard doesn't actually have enough keys to do have every key nicely available (note how I don't have a function row) for more info check out https://docs.qmk.fm/#/ . You can actually buy an adapter to use a normal keyboard with QMK, but it's a bit hack-y and I really recommend just saving up to get a full keyboard made for it.

Back to ergonomics, you'll want to make sure your keyboard is a t a comfortable height for you and that you can type in a way that isn't putting your wrists at any weird angles

Finally, one of the nice things about i3 is the ability to navigate everything entirely from the keyboard as well as bind as much as you want to as many keys as you'd like. Want a key combo to launch a file manager? easy. Want a key to navigate to open up a terminal and immediately run a command- no problem. Set things up as you like and enjoy being able to use your system at break neck speed while everyone else drags things around slowly.

**Mouse and other input**

Speaking of dragging things around slowly: The mouse

**Sound**

Noise isolation both electrical and physical, headphone types (over, on, in), amplifiers, dacs, ASIO/ sound hardware, connection types

**The Desk and Chair**



**Lighting**



**Air Quality**

[This Is Your Brain On Stale Air (YouTube)](https://www.youtube.com/watch?v=1Nh_vxpycEA&list=FLFMnqfaTa1se1LfbCB3peJQ)



## Various Programs:

**Markdown**

[TODO]

Marktext, Typora, colabrative editing, Github markup, etc

**Taskwarrior & Timewarrior**

[TODO]

Taskweb

**File Explorers & Storage Managment**

[TODO]

Ranger, Thunar, Nautilius, Baobab, Gparted

if you use Nautilius, you may want to run

```bash
dconf write /org/gnome/nautilus/preferences/always-use-location-entry true
```

so that the file paths are displayed in full

**Media (Music, Video, PDF,)**

[TODO]

https://sioyek.info

**Office & Creative Software**

[TODO]

[Masterplan](https://solarlune.itch.io/masterplan)

https://github.com/climech/grit

Libreoffice

Krita

Audacity

DAW? QJackCTL?

OBS

KiCad

darktable

Evince

Feh, nomacs

Wine

Boxes- vm

[asciiflow](http://asciiflow.com)

**Package managment**

[TODO]

Pamac, Steam, AppImg, itch.io, dpkg, snap.

maintaining an aur package, pacman conf stuff

**Web and network protocols**

[TODO]

Vivaldi, Firefox, Syncthing, Beaker, IPFS, IRC - irssi, Telegram, Etherape, Wireshark, gufw,

[Google Images Restored](https://github.com/fanfare/googleimagesrestored)

https://nyxt.atlas.engineer

**Shell Scripts**

[TODO]

## Tools for accessibility

https://joshwcomeau.com/accessibility/hands-free-coding/



**Lil' shoutout**

I've stolen a lot of config files from r/UnixPorn and other websites over the years, but I'd espically like to highlight https://twily.info as twilly actually helped me out a lot when I was a total noob and even helped me steal her website to make my own clone of it at one point

<ol hidden id="footnotes">
<li>PlatfromIO is for working with embedded hardware like Arduino or STM32, etc. Unfortunately, it opens an annoying screen at start up. This can be disabled, but at least in the past this has caused other issues for me. If you do work with embedded hardware though it's still by far the best option as the normal ArduinoIDE is absolute trash.</li>
</ol>

## Gaming?

https://github.com/AdelKS/LinuxGamingGuide