# Appendix 1 - Using the Linux Shell

<!-- TODO: Add xprop, xev, xrandr, xinput to command list -->

<!-- Alt + <num> + . shortcut, and other navigation tricks grouped together -->

[./missing-semester - The Shell](https://missing.csail.mit.edu/2020/course-shell/)

[./missing-semester - Shell Tools and Scripting](https://missing.csail.mit.edu/2020/shell-tools/)

[./missing-semester - Data Wrangling](https://missing.csail.mit.edu/2020/data-wrangling/)

[Linux Productivity Tools Presentation PDF (Ketan M.)](https://www.usenix.org/sites/default/files/conference/protected-files/lisa19_maheshwari.pdf)

<!---

Commenting out this custom style because it makes this page a pain to read.

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet">

<style>
	:root {
		--body-background: linear-gradient(90deg, #121, #030, #121);
		--text-color: #f5f5f5cc;
		--link-color: #090;
	}
	body,p {
        color: var(--text-color);
	}
	code{
		font-family: 'VT323', monospace;
		font-size: 22px !important;
        color: var(--text-color);
	}
	body{
		background: var(--body-background);
		color: var(--text-color);
	}
	h1,h2,h3,h4,h5,h6,nav{
		font-family: 'Press Start 2P', cursive !important;
		font-size: 18px;
	}
	a{
		font-size: 12px;
		color: var(--link-color);
		font-family: 'Press Start 2P', cursive;
	}
	.book-brand{
		img {
			image-rendering: pixelated !important;
		}
	}
	dt,dd{
		font-size: 18px !important;
		font-family: 'VT323', monospace;
        color: var(--text-color);
	}
	dd{
		font-size: 10px !important;
	}
    .blogdd{
        font-size: 10px !important;
        font-family: 'Press Start 2P', cursive;
    }
    .navhead{
        font-size: 14px !important;
        text-align:left;
    }
    aside nav ul li, .navbak{
        font-size: 14px !important;
        color: var(--body-background);
    }
    img{
    }
    span{
        color: var(--text-color);
    }
    nav{
    	background: #0000 !important; //This makes the BG of the nav invible
    }
    div.speech {
		border-bottom-right-radius: 0px !important;
		border-left: 2px solid #777;
		border-top-right-radius: 0px !important;
		padding: 12px 24px 12px 70px;
		border-radius: 0% !important;
	}
    div.speech:before {
		background-color: #181818;
		background-image: url("/nonfree/character/opguidesSiplick.png");
		background-size: 75px;
		border-radius: 0% !important;
		border: 1px solid #777;
		content: "";
		left: -40px;
		top: 4px;
		position: absolute;
		height: 75px;
		width: 75px;
	}
    div.speech, tr:nth-child(2n) {
		background-color: #151 !important;
	}
    div.speech.right {
        background-color: #020 !important;
    }
    ::-webkit-scrollbar-thumb{
        background: #ccc !important;
    }
    ::-webkit-scrollbar-track {
    	background: #040;
	}
    .navbak{
        background: #282 !important;
    }
    .navhead{
        color: #0f0a !important;
    }
    .webhead{
		background:linear-gradient(90deg,#050 0%,#2d2 50%,#0d0 75%) !important;
		-webkit-background-clip:text !important;
		-webkit-text-fill-color:transparent;
		margin-bottom:0;
    }
    .markdown{
        line-height: 1.6;
    }
</style>

--->

## What The Shell?

Okay, first question you probably have after I've been using them interchangebly 'What is a Shell and is it different from a terminal?'

Yes, they're different, but before I talk about the shell it's easier to talk about the Terminal.

The Terminal is a piece of hardware, or, rather *was* a piece of hardware. For example, here's an old IBM 3151:
<!---
<img src="/eng/mergedterms.webp" style="filter: grayscale(80%);filter: sepia(100%);filter: hue-rotate(90deg);">
--->
<img src="/eng/mergedterms.webp">


Now, don't mistake this for a CRT monitor like everyone was using in the early 2000's, this is a *terminal* it has a serial connection in the back that only reciveves messages of text from the computer it's attached to, and it can only display text on it's dim green screen. Before the days of graphical computing everything was though a text only interface that you'd usually read on one of these. Fortunately, technology has gotten much, much better.

So in the exact same way that you can *emulate* an old video game console to play retro games on your computer, the terminal itself is emulated on Linux. If you really wanted to you could hook up an old terminal like the above, but it's much easier to open a terminal emulator. Of course, just as there are multiple different emulators for some old consoles, there are multiple options for terminal emulation. A few different terminals are shown on the right in that picture (Cool Retro Terminal, Terminus α, and Kitty), and just as hardware may have different features, different terminals can as well. 

{{< smalltext >}}If you're curious about how this emulation works, see [Anatomy of a Terminal Emulator (Aram Drevekein)](https://www.poor.dev/blog/terminal-anatomy/). Then, you may want to read up on the actual character sequences, see [everything you ever wanted to know about terminals (Lexi Summer Hale)](http://xn--rpa.cc/irl/term.html) and [XTerm Control Sequences (Edward Moy)](https://invisible-island.net/xterm/ctlseqs/ctlseqs.html).{{< /smalltext >}}

Just like the hardware however, the terminals don't do anything on their own, that is where the **shell** comes in. The shell is the program your terminal is usually running when it opens. By default on most Linux Systems it's Bash and on Windows it's CMD or Powershell, but there's many, many alternative shells. These shells all serve a few main functions.

*  Provide sort of dispatcher for other commands. For example, when you run `ls` the shell let's `ls` print to the terminal before taking back control)
* Provide content redirection facilities. For example, when you run `ls > somefile` the shell is handling the `>` which tells it to take the output from the running program (`ls`) and put it into the file (`somefile`).
* Provide scripting capability. Allowing for programming by chaining other commands. We'll look at this more in a bit.
* Provide basic niceities (history, tab completion, automatic suggestions, etc.)

But others may include some weirder things, for example, [xonsh](https://xon.sh) is a shell that will let you mix python and other commands. (note, it tends to act weird for somethings. I like having it as a secondary shell that's available, but use ZSH as my primary shell.)

In the above picture, all of the text prompts on the emulated terminals are being generated by ZSH, the difference in color and font is due to the settings for the terminal emulator - again restating how the terminal handles 'hardware' things while the Shell only sends text.

You may also here terminals called a TTY or Teletype, both are for historical reasons. On that note, you can change your active tty in Linux by using `CTRL+ALT+F[n]` where `F[n]` is any of the function keys. Interestingly, the graphical 'shell' actually runs in one of these TTYs, usually TTY7. You can actually interact with these TTYs by sending text to `/dev/tty[n]` without switching to it directly, similarly `/dev/tty` is always your current terminal, so for example `echo hello > /dev/tty` will echo hello normally, but `echo hello > /dev/tty2` will send hello to the terminal you could get to with `CTRL+ALT+F2`

As a very brief aside, you may see pictures in some terminals. This is possible with some neat hackery both on part of the shell and terminal emulator. I've even seen some that can render 3D graphics. This isn't your grandpa's terminal anymore.

## The Basic Commands

Of note, while the majority of these commands should be available on nearly any unix system you may use, many of the alternate recommendations may not be.

- **man** "man [command/topic]", ex, "man ascii", bring up an in depth manual page for a given command/topic.
  
  - Alternative recommendation: [**tldr**](https://github.com/tldr-pages/tldr) actually digestible and much faster when it gives enough info 
  
    </br>
  
- **pwd** - Print working directory - literally just a command to tell you the file path to where you are

- **ls** - list - list the files/folders in the current directory, lots of flags available
  
  - Alternative recommendation: **[lsd](https://github.com/Peltoche/lsd)** or **[eza](https://github.com/eza-community/eza)**
  
- **cd** - change directory, if you can't use this may god have mercy
  
  - Alternative recommendation: **j (for [autojump](https://github.com/wting/autojump))** 
  - note that `cd ..` will move back by one folder.
  
- **mv** - move (or rename) a file to a new location (or name)
  
  - Alternative recommendation: **rsync**
  
- **rm** - remove a file

- **touch** - create an empty file, or change last accessed time of existing file

- **mkdir & rmdir** - make or remove an empty directory (folder)

- **cat** - output the contents of a file
  
  - Alternative recommendation: **bat**, **less**, **more**, **fltrdr**, or an editor like **vim** or **nano** 
  
- **date** - output current date and time

- **chmod & chown** - change a file or folders permissions or owner

- **ln** - make a symbolic / hard link (shortcut)

- **du & df** - Disk usage and disk free, **df** will show you how much room you have left per disk, **du** serves to help find what's using up your disk
  
  
  - Alternative recommendation: **ncdu** and [**duf**](https://github.com/muesli/duf)
  
- **clear** - clear the screen of text- (only use in scripts)
  
  - Alternative recommendation: **ctrl + l** , much faster
  
- **passwd** - change a users password

- **sudo & su** - run a command as another user, typically root

- **head & tail** - print a number of lines from the top or bottom of a file

- **tee** - mostly used with pipes to print output to terminal as well as put it into a file

- **grep, sed, awk, tr** - the 'big four' commands used for text processing in a terminal. **grep** (and **egrep**) are used for search, for example running `ls | grep myfile` to confirm a file is indeed in a folder. **sed** is used for text/character replacement. **awk** is a programming language in it's own right, used primarily for selecting text fields by separator, for example only printing the permissions column in the output of `ls -l` 

  - Alternative recommendations: [**choose**](https://github.com/theryangeary/choose), [**sd**](https://github.com/chmln/sd), [**ripgrep**](https://github.com/BurntSushi/ripgrep)

- **w** -  show who is currently logged in and what they're running, epically applicable on shared servers if you need to see if there's an active ssh connection to your system

- **tar, gzip, bzip, zip** - all used for making compressed folders (like .zip files)

- **ssh , scp, ftp** - used for doing remote access, letting you run commands on one system from another

- **diff** - show the differences between two files

- **sort** - sort input by a number of criteria

- **uniq** - remove duplicate entries

  - **fdupes** is recommended if the goal is to identify duplicate files 

- **export** - used to set environment variables, these for example use `export EDITOR=nano` to use nano as your terminal text viewer by default.

- **systemctl** - literally system control, wayyy to big to cover quickly, used for everything from setting services to run on boot, shutting down/restarting the system, to viewing logs. Look up Systemd for more information. This is probably the least-universal of the tools listed here, but *most* linux systems have switched to Systemd now for better or worse.

  - **[sysz](https://github.com/joehillen/sysz)** provides a decent UI to systemd functions, check it out

- **ip, ping, & dig** - **ip** is used to view as well as modify aspects of network configuration at the more hardware-level, such as turning on/off a networking interface.  **ping** allows you to see if you're able to reach a site/ip address, and **dig** allows you to check if you're able to turn a domain name to an ip, such as checking the ip address that archlinux.org points to with `dig archlinux.org` along with other DNS query tasks

  - Alternative recommendation: [dog](https://github.com/ogham/dog) is a nice user friendly alternative to dig
  - See [How to use dig (Julia Evans)](https://jvns.ca/blog/2021/12/04/how-to-use-dig/)

- **ps** - process management: listing processing, finding the parent of a particular process, etc.

  - Alternative recommendation: [procs](https://github.com/dalance/procs)

- **free** - display information about system RAM usage

- **top** - a graphical-ish view of the running processes, ram, and CPU usage

  - Alternative recommendation: **htop** or **[btop++](https://github.com/aristocratos/btop)**

  - Also be aware of task-specific 'top' programs like [**iotop**](https://github.com/Tomas-M/iotop), **irqtop**, [**powertop**](https://wiki.archlinux.org/title/powertop), [**radeontop**](https://github.com/clbr/radeontop) (or [**nvtop**](https://github.com/Syllo/nvtop) if you have an Nvidia card) 

    ![](/eng/btop.png)

    {{< attribution >}}btop screenshoot{{< /attribution >}}

- **kill**, murder a process in various ways

  - if you're running an xsession and want to kill a graphical terminal, `xkill` is useful too

- **whereis** - find the location of an executable, ex `whereis ls` will tell you it's in `/usr/bin/ls`

- **wget, curl** - retrieve a web page

  - Alternative recommendation: **lynx**, **w3m**, **brow.sh**, or **[xh](https://github.com/ducaale/xh)**

    {{< tip >}} Heads up, you may ocassionly see installation instructions for things on GitHub that ask you to use `curl www.example.com/script.sh | bash` - **DON'T**. It's [not safe](https://www.idontplaydarts.com/2016/04/detecting-curl-pipe-bash-server-side/). Instead, you can curl the script, check that it's something you want to run with `cat script.sh`, and then run it with `./script.sh`. {{< /tip >}}
    
  - [Parsing HTML with w3m and awk (Joe Ferner's Blog)](https://joeferner.github.io/2015/07/15/linux-command-line-html-and-awk/)

  - **lynx** + **fltrdr** can be paired together to read web pages super fast 
    
    ```
    lynx -dump http://www.example.com | fltrdr
    
    w/ shell script below in /bin named 'q' 
    (or whatever you want) you can just run 'q example.com'
    
    #!/bin/bash
    lynx -dump $1 | fltrdr
    ```

- **ldd** - see what dynamically linked libraries an executable uses

  - Alternative recomendation: **[libtree](https://github.com/haampie/libtree)**, provides a tree output, with color


## Tab Completion and faster navigation

Probably the most useful shortcut for using the shell is tab completion. This is used when you need to type a really long command or chain of commands, say I want to run ncmpcpp, a name that is both long and hard to remember, instead of just typing the full name I can type `ncm` and press tab, and ta-da suddenly the full name is inserted. If you happen to have another package that has multiple possible endings say you want to run ``lstopo`` but you have `ls, lsusb, lstopo` all on your system, most shells will display a menu underneath with all the possible options. This is nice for commands, but the true power comes in file names, say I want to run `cat /etc/pacman.d/mirrorlist` while that's not too awful to type out, you could easily type `cat /e` press tab, get `cat /etc/` add pac to get `cat /etc/pac` press tab, get `cat /etc/pacman.d/` type mir and tab and get the full command, while that sounds complicated it actually speeds using the command line up rather significantly and prevents spelling mistakes

Next up for navigation is directory shortcuts, these can be massive time savers, the most obvious is `~` which is just short hand for the location of the current shell users home directory, so in my case `~` is the exact same as typing out `/home/vega`. The next two have already been touched on which are `.` for the current directory and `..` for the previous directory. Depending on the shell and arbitrary number of dots may take you back and arbitrary number of directories. Give it a shot! If nothing else you can always use `../../..` to navigate back as necessary. Finally, `-` represents the last directory you were in so if your in `~/Downloads` and then `cd /etc/pacman.d/`, running `cd -` will bring you back to downloads.

The most advanced form of built in linux navigation comes in the form of `pushd` and `popd`, which as their names imply push and pop directories to a stack (a special kind of list) of directories. Like a stack of any item you can put or 'push' an item on top, and take or 'pop' an item off. Running `dirs -v` will show you a numbered list of the stack, you can navigate to the top item with `popd` or and arbitrary item with `cd ~#` where # is the number as shown by `dirs -v`.

Finally, there's one more super handy way to get around your file system but it's a non-standard tool so most systems or servers you use other than your own will not have it installed, and that's autojump. Put simply it takes a good guess about where you want to go by only typing part of the name of a folder you've navigated to before, so say you have a long file path `/mnt/data/archived/january2000/pictures/family/vacation/` you can get back to it again by simply running `j vac` which is obviously much simpler. It works the vast majority of the time in practice, only having issues if you don't include enough letters leading to ambiguity.

## I/O redirection

for the hard core, you can read good documentation here: https://www.tldp.org/LDP/abs/html/io-redirection.html

* stdin (<) (<<)

[TODO]

* stdout (>) (>>)

[TODO]

* stderr (2>) (2>>)

[TODO]

Note, `&>` redirects both stderr and stdout

* pipes ( | ) and [nammed pipes](https://www.networkworld.com/article/3251853/why-use-named-pipes-on-linux.html)

Make sure to read [Why pipes sometimes get "stuck": buffering (Julia Evans)](https://jvns.ca/blog/2024/11/29/why-pipes-get-stuck-buffering/).

[pv - Pipe Viewer](http://www.ivarch.com/programs/pv.shtml)

Finally, the weirdest and rarely used `<>` operator can be used to directly attch file descriptions and read/write files dirctly, this is rearely used as it's kind of a pita, but if you need to script something advanced it's available. Stollen from the above advanced link:

> [j]<>filename
> 
> Open file "filename" for reading and writing,
> and assign file descriptor "j" to it.
> If "filename" does not exist, create it.
> If file descriptor "j" is not specified, default to fd 0, stdin.
> 
> An application of this is writing at a specified place in a file.
> 
> echo 1234567890 > File    # Write string to "File".
> exec 3<> File             # Open "File" and assign fd 3 to it.
> read -n 4 <&3             # Read only 4 characters.
> echo -n . >&3             # Write a decimal point there.
> exec 3>&-                 # Close fd 3.
> cat File                  # ==> 1234.67890
> 
> Random access, by golly.

## Wild Cards & Regex

Regular Expressions or 'Regex' are an incredibly powerful tool used to match strings in a logical way. For example, say you wanted to find all the phone numbers on page that started with the area code 555, the next three digits were any number, and the last four digits could be represented as either numbers or letters, and '-' separating each group. With regex that's easy, the regular expression for this looks like:

`5{3}-[0-9]{3}-[a-zA-Z0-9]{4}`

Which while I could explain, I think just staring at that a little while should make it obvious and ideally the mental effort will lead to a better understanding. Regex can do a lot more than this though. Go ahead and checkout https://regex101.com and give it a shot.

regex can be used with a bunch of common tools like awk, sed, and grep. This means you can do fancy things like chain ls and grep together with a pipe to find any file matching a pattern or chain commands to rename any file containing characters which may be invalid in NTFS ( The file system used by Windows) to be valid before doing a transfer.

Also, you may find [The Regular Expression Visualizer, Simulator & Cross-Compiler Tool](https://blog.robertelder.org/regular-expression-visualizer/) useful.

If you're really lazy, [Grex](https://github.com/pemistahl/grex) is "[automatically generates] a single regular expression from user-provided test cases. The resulting expression is guaranteed to match the test cases which it was generated from."

Note that not all things that seem like a good fit are a good fit for regex, for example, [email](http://www.ex-parrot.com/pdw/Mail-RFC822-Address.html).

[TODO] https://www.debuggex.com

[Regular Expressions - Enough to be Dangerous (Engineer man)](https://www.youtube.com/watch?v=bgBWp9EIlMM)

[Crex (Octobanana git repo)](https://octobanana.com/software/crex) - "Explore, test, and check regular expressions in the terminal."

[Pyrexp](https://pythonium.net/regex) - A regex tester that also allows visualization of the pattern graphically.

Also see https://pomsky-lang.org as an alternative to regex.

## Job Control

[TODO]

* fg: brings a specified suspended job from the background to foreground. 

* bg: send a specified job to the background or lists background jobs if no jobs are specified

* jobs: list all running jobs 

* & operator: when added after a command, it runs the job in the background and outputs its PID. 

## Shortcuts

#### Jobs

- Ctrl+z: suspend a job to the background.
- Ctrl+c: sends a SIGNINT to the current running job and kills it; if sent before entering a command, it clears the current line in the prompt
- Ctrl+d: sends a quit signal - can be used to exit certain applications or exit a terminal
- jobs -l or ps -a: see jobs

#### Screen 

- Ctrl+l: clear screen except current line
- Ctrl+u: clear current prompt line

#### Command History

- Ctrl+r: search through command history in reverse

#### Directory Navigation

- cd -: to last dir
- cd: go to home if entered without arguments
- reptyr to move
- <style>
- 
  </style>

- history, and !№ to run that cmd
- ctrl-left/right to nav args
- expansion with mv /path/meh.{md,txt}

## Performance Analysis

![Linux Performance Tools](/eng/linuxperftools.webp)

## Aliases and customization

### Aliases

Aliases are custom names assigned to commands. The command `alias` will display the current aliases set in your shell. An alias maps to a specific command which is run when the alias in entered. 
Aliases are useful if you have long commands that are used often. Entering `alias suinstall='sudo apt-get install'` will temporarily allow you to use `suinstall` instead of typing `sudo apt-get install`. Any switches and arguments the command takes can be used with the alias. The alias is lost when the current terminal session is closed.

To make aliases permanent, add them to your shell's configuration file (.bashrc or .zshrc). 

### Customization

Aliases are one way to customize your shell. Most shell customization occurs in the shells configuration file, usually stored as a hidden file in the home directory. .bashrc and .zshrc are the configuration files for bash and zsh. The files are loaded every time a terminal is started up and can set up its environment by loading aliases and custom functions and setting terminal colors and variables like PATH and EDITOR.

https://github.com/zsh-users/zsh-autosuggestions

[TODO]

## Shell Scripting

[TODO] xargs, sed, awk, fzf, grep,

https://shellmagic.xyz/

https://wiki.bash-hackers.org/

{{< columns >}}

[TODO] text on what shell scripting is

<--->

![b0rk bash erros](/eng/basherrorsb0rk.webp ':size=70%')

{{< attribution >}}

source: [b0rk on Twitter](https://twitter.com/b0rk), check out https://wizardzines.com for more

{{< /attribution >}}

{{< /columns >}}

[Minimal Safe Bash Script Template (Maciej Radzikowski)](https://betterdev.blog/minimal-safe-bash-script-template/)

```bash
for file in *
do
	whatever command on $file
done
```

```bash
for file in *.png
do
	waifu2x-ncnn-vulkan -n 1 -s 2 -i $file -o $file
done
```

You may also be interested in [Funky](https://github.com/bbugyi200/funky) or [Direnv](https://direnv.net) for having scripts that load/unload when you enter and leave a folder in the terminal

## Alternative Shells

When we installed arch we actually changed the default shell from bash to zsh, but there are other options such as fish, csh, and xonsh among others

[TODO]

## Alternative commands

* bat
  * alternative to `cat`, capable of syntax highlighting and line numbering
* exa, lsd
  * alternatives to `ls`, eaiser on the eyes
  * You could also use `ranger` or `nnn` two fully featured terminal file browsers
* fd
  * altertnative to `find`, doesn't suck
* htop, gtop
  * alternatives to `top`, doesn't suck
* prettyping
  * alternative to `ping`, pretty
  * Also see [cnping](https://github.com/cntools/cnping) which is *not* CLI.
* diff-so-fancy, icdiff, [Delta](https://github.com/dandavison/delta), [Difftastic](https://github.com/Wilfred/difftastic), [pdf-diff](https://github.com/serhack/pdf-diff)
  * alternatives to `diff`, but with more features (or different target files). Difftastic is particularly nice for having an understanding of what Syntax actually means.
* ncdu and [dust](https://github.com/bootandy/dust)
  * while much slower than `du` it's great for finding out what's eating storage space
* [choose](https://github.com/theryangeary/choose)
  * user friendly, simple alternative to awk/cut
* [ripgrep](https://github.com/BurntSushi/ripgrep)
  * "ripgrep is a line-oriented search tool that recursively searches your current directory for a regex pattern. By default, ripgrep will respect your .gitignore and automatically skip hidden files/directories and binary files. ripgrep has first class support on Windows, macOS and Linux, with binary downloads available for [every release](https://github.com/BurntSushi/ripgrep/releases). ripgrep is similar to other popular search tools like The Silver Searcher, ack and grep."
  * **TLDR**: Search into your text files really fast with regex support.
  * [RGA](https://phiresky.github.io/blog/2019/rga--ripgrep-for-zip-targz-docx-odt-epub-jpg/) is like ripgrep on steroids- seaches though PDFs, ebooks, office docs, compressed files, etc.
  * [Semgrep](https://semgrep.dev/docs/getting-started/) may be a better fit for doing code stuff
* [echowo](https://fluff.haus/kokoscript/echowo)
  * alternative to echo, but significantly furrier
* [broot](https://github.com/Canop/broot)
  * alternative to `tree`, but optimizes for available screen space, and navigate the tree and cd to it
* [mosh](https://mosh.org)
  * alternative to ssh, but better for unstable connections, shows local typing without the input-loop (and so is more responsive) and is just genearlly a lot better... just not standard. You can make it work with only ssh though, no root needed.

## Useful Non-Stock CLI Tools

* tldr
  
  * tldr, 'for too long didn't read' provides a quick, easy to read version of the man page for many common linux commands. Forget how to use `tar` ? just run `tldr tar`

* autojump
  
  * refrence above description in faster navigation

* mpd + ncmpcpp
  
  * 'music player daemon' and 'ncurses music player client plus plus' are two cli tools that work in tandem to provide an experiance that I presonally find superiour to any graphical music player

* irssi
  
  * full featured IRC client, chat right from your terminal

* screenfetch
  
  * get some nift stats about your terminal, add to your shell's RC file to be one of the cool kids

* [moreutils](https://joeyh.name/code/moreutils/)
  
  * "moreutils is a growing collection of the unix tools that nobody thought to write long ago when unix was young."

* [hr](https://github.com/octobanana/hr)
  
  * Need some way to visually seperate things, this literally just makes a horizontal line in the terminal

* [fltrdr](https://github.com/octobanana/fltrdr)
  
  * Wanna read at 1000wpm, this is the tool for you.

* [crex]( https://github.com/octobanana/crex)
  
  * test regular expressions in the terminal

* lynx, w3m, browsh
  
  * Browse the web from a terminal (not a joke and actually useful)

* entr
  
  * monitor file system for changes

* noti
  
  * send a graphical system notification when a command finishes

* [ntfy.sh](https://ntfy.sh)
  
  * Send push notifications to your phone or desktop via PUT/POST

* progress

  * start a command and have no way to see what its doing (rsync, cp, etc)? This is your tool

* figlet, toilet, banner

  * makes big text, run `figlet Your Text Here` and see your text in big, ascii letters

* no more secrets

  * reveal text in a martix effect.. I'm streching the meaning of useful here

* stress-ng

  * stresstest your system in pretty much any super specific way you can think of, or hammer your cpu to test an overclock

* pandoc

  * convert between damn near any text format to any other format
  * also see [pdfsandwich](http://www.tobias-elze.de/pdfsandwich/) for OCR on PDFS

* taskwarrior

  * keep track of To-Do's and tasks, can also be paired with timewarrior for timetracking

* waifu2x (many forks available)

  * Upscale and de-noise images zoom-and-enhance style but for real-    this ones' a bit GPU intensive because it uses AI

* youtube-dl

  * despite the name this tool can download videos or audio from almost any page on the internet, even supporting playlists in many cases too.

* [gallery-dl](https://github.com/mikf/gallery-dl) is good for grabbing albums from photo hosting websites

* [rat](https://github.com/ericfreese/rat)

  * "Compose shell commands to build terminal applications"

* magic-wormhole

  * tool for getting a file between two systems easily and secure, just run `wormhole send` and `wormhole recive` on the respective systems

* Ix, Gist

  * Paste tools, like pastebin

* DMIDecode

  * get info from BIOS

* hexyl

  * pretty terminal based hex viewer

* [UXY](https://github.com/sustrik/uxy)

  * "UXY tool also wraps some common UNIX tools and exports their output in UXY format."
    
    "UXY is a tool to manipulate UXY format, which is a basically a two-dimenstional table that's both human- and machine-readable."
    
    This gives a nice format for manipulation of commands though pipes for super complex shell scripting

* lsof

  * list what files a runnig process has open

* [glow](https://github.com/charmbracelet/glow) or [mdcat](https://github.com/lunaryorn/mdcat)

  * display markdown files in the terminal

* [nethogs](https://github.com/raboof/nethogs)

  * see what applications are using your network bandwidth

* [exodus](https://github.com/intoli/exodus)

  * "Exodus is a tool that makes it easy to successfully relocate Linux ELF binaries from one system to another. This is useful in situations where you don't have root access on a machine or where a package simply isn't available for a given Linux distribution." [...] 

    With exodus, transferring a piece of software that's working on one computer to another is as simple as this.

    ```
    exodus [binary name] | ssh [server ip]
    ```

* [usbtop](https://github.com/aguinet/usbtop) - show usb device bandwidth usage, requires `sudo modprobe usbmon` first.

While some of these may be included, they're some of the OG addons or tools to make included things better:

* tmux
  
  * multiplex your termianal, open multiple terminals in your terminal, usefull in non-graphicas ttys espically
* vim + extensions (neovim, spacevim, etc)
  
  * the old school text editor meets new school
* GDB + gef
  
  * GDB, the original debugger, has it's faults. GEF, a config file for GDB on steroids, fixes many of them. While originally made for exploit developers, many people use it for everyday debugging
  * also see [rr](https://rr-project.org) for recording a program execution so it can be replayed
* resh
  
  * replacement for ctrl+r history seach
* optipng, jpegoptim
  * Each works with it's respective image format and does some trial-and-error magic to re-compress the file no-lossy-er than it was to save space. No info loss but often a large file size reduction!
* [pup](https://github.com/ericchiang/pup)
  * "pup is a command line tool for processing HTML. It reads from stdin, prints to stdout, and allows the user to filter parts of the page using CSS selectors."


## Displaying Data in the terminal

{{< columns >}}

[TODO] info about various librarier and tools that show data using text based graphics or via terminals that can render SVGs/images

<--->

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">💡FAQ about displaying stuff in a terminal <a href="https://t.co/XQBOezyJAx">pic.twitter.com/XQBOezyJAx</a></p>&mdash; Kate (but with plastic reindeer antlers on) (@thingskatedid) <a href="https://twitter.com/thingskatedid/status/1316074032379248640?ref_src=twsrc%5Etfw">October 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< smalltext >}} [Archive of embedded Tweet available here](https://web.archive.org/web/20221222051841/https://twitter.com/thingskatedid/status/1316074032379248640){{< /smalltext >}}

[graphviz](https://graphviz.org) provides `dot` among other tools, this thread also mentions [libsixel](https://saitoha.github.io/libsixel/), [plot.awk](https://gist.github.com/katef/fb4cb6d47decd8052bd0e8d88c03a102), [KGT (Kate's Grammer Tools)](https://github.com/katef/kgt/), [libFSM](https://github.com/katef/libfsm/) for turning regex into FSMs.

{{< /columns >}}

## A note on Graphical-ish terminal programs

like [brow.sh](https://www.brow.sh) [TODO]

### Ncurses?

[TODO] why Ncurses is bad

https://github.com/dankamongmen/notcurses

## How might the terminal evolve?

[CLUI: Building a Graphical Command Line (Repelit)](https://blog.replit.com/clui)

## Common Graphical Linux Utils

[TODO]

Mostly taken from https://wiki.archlinux.org/index.php/List_of_applications and https://github.com/Kickball/awesome-selfhosted

## Graphical Environments++

Gnome, KDE, Pantheon,

Rofi, Polybar, j4,

Compton

Nitrogen, pywal, (feh),

## Free Graphical Utilities

### Office & Daily

Libreoffice, Xournal++,

thunar + bulk rename, nautilus, Filezilla, Deluge, qBitTorrent,

Firefox, Min, Vivalidi,

Marktext, Typora, Notable

Geogebra

Evolution

Evince

### A/V

Feh, Nomacs

Rawtherepee, Krita, Gimp, Darktable

Inkscape,

Blender, Pencil2D, OpenToonz

Goxel,

Pithos, Gnome-Music,

Cadence (jack2)

Audacity, Ardour, LMMS, non, Radium

Giada

VCV Rack

Guitarix

PureData, SonicPi, ORCA

Processing, VVVV,

VLC

DaVinci Resolve

Cheese, Motion, OBS

### Social

Thunderbird

LBRY

Discord, Telegram, qTox, HexChat, SRain, Riot/Fractal ,

### Programming

Okteta

Gitkraken

Code, Atom, Sublime, Code::Blocks, Eclipse, Netbeans, IntelliJ, Sublime

PyCharm, Spyder

Cutter, Node-Red

Etherape/cap, Wireshark

### Engineering

FreeCAD, LibreCAD, KiCad, CircuitSim, Fritzing

PulseView, Arduino, PlatformIO

### System

Alacritty, urxvt, Deepin-Terminal, Hyper,

Baobab, Filelight, GParted, VeraCrypt

Syncthing

Etcher

lsusb, lshw, lstopo, usbview,

Firewall frontend?

ClamAV

deepin-screesshot, scrot

### IRL

Gnome-Maps

Gnome-Weather

Celestia

Stellarium

### Other

GnuRadio, SDRAngel

## Paid Graphical Utilities

Renoise, Bitwig

## Self hosted / Services

Netdata

VPN (Wiregaurd)

Snort, Suritica

Gitea, Gitlab

Mathics

LAMP stack

Couchpotato, headphones

mpd, ampache

Owncloud, NextClound

Samba

DAT, IPFS

Convos.by

Ix , 0bin (pastebin)

Mathics

TaskWeb (TaskWarrior)

## Other Linux Distros that are neat

[Gobo Linux](https://www.gobolinux.org)

> GoboLinux is an alternative **Linux distribution** which
> redefines the entire filesystem hierarchy.
>
> In GoboLinux you don't need a package database because
> the **filesystem is the database**: each program resides in its own directory,
> such as /Programs/LibX11/1.6.9 and /Programs/GCC/9.2.0. 

[Bedrock Linux](https://bedrocklinux.org)

> Bedrock Linux is a meta Linux distribution which allows users to mix-and-match components from other, typically incompatible distributions. Bedrock integrates these components into one largely cohesive system.
>
> For example, one could have:
>
> - Debian's stable coreutils
> - Arch's cutting edge kernel
> - Void's runit init system
> - A pdf reader with custom patches automatically maintained by Gentoo's portage
> - A font from Arch's AUR
> - Games running against Ubuntu's libraries
> - Business software running against CentOS's libraries
>
> All at the same time and working together mostly as though they were packaged for the same distribution.

[NixOS](https://nixos.org)

> Nix builds packages in isolation from each other. This ensures that they are reproducible and don't have undeclared dependencies, so **if a package works on one machine, it will also work on another**.

[Qubes OS](https://www.qubes-os.org)

> see https://www.qubes-os.org/intro/ - basically everything gets it's own VM for security sake

[Tails Linux](https://tails.boum.org)

> Tails is a portable operating system that protects against surveillance and censorship.

[Debian Dog](https://debiandog.github.io/doglinux/zz01debiandogjessie.html)

> This is the only distro I could find that will actually work somewhat well on systems with *ancient* x86 CPUs (586,686-pae)



