# Chapter 23 - Security & Exploitation

{{< hint warning >}}

I'm going to assume at least some prior knowledge here, if you want a quick intro, I recommend going through [./missing-semester-Security](https://missing.csail.mit.edu/2020/security/) so that we can all be on the same page.

{{< /hint >}}

{{< columns >}}

Often when we think about Exploitation, better known as hacking, we conjure images of a more-punk-than-cyber cyberpunk person clicking away wildly on a keyboard as code flies by, like the [1995 movie, Hackers](https://en.wikipedia.org/wiki/Hackers_(film)), and to some extent this isn't wrong, as one look around the floor at [DefCon](https://www.defcon.org/), will show you. And honestly, that's not by accident. While there are strictly professional security experts, those that work at corporations and banks, a large number do it for the lolz and to bring a little fun back into computing. Calling exploitation 'hacking' is almost a misnomer, as hacking encompass a lot more than exploitation, and exploitation a lot more than hacking. For that reason, before we start, I recommend you watch [this video](https://www.youtube.com/watch?v=wjge1bVobN0), on speed running Super Mario 64, this is a prime example of hacking in a non-harmful manner done for fun.

<--->

![STACK](https://imgs.xkcd.com/comics/stack.png)

{{< attribution >}}

[XKCD #2166](https://xkcd.com/2166/)

{{< /attribution >}}

{{< /columns >}}

---

Most books on hacking or security start out either painfully formal talking about how to secure a system or jump straight into breaking into a system.

Neither of these are probably your biggest concern.

Instead, you should be thinking "How do I write code that isn't horribly fucked for security?" then wrap back around to getting a deeper understanding so that you can know how to actually know how to make some of the more complex decisions, and why they matter.

Let's start with an example:

```c
#include <stdio.h>
void main(int argc, char **argv){
    int i = 0;
    printf(argv[1], &i);
    if(i == 1){
        printf("OWO\n");
    }
}
```

> Save as ploit1.c,  compile and run with gcc ploit1.c -o ploit

Here, we've got 8 lines of code, if run it normally, it just echos the input.

```bash
╭─vega@lyrae ~  
╰─➤  ./ploit "test"
test%
```

But hang on, the `printf` isn't doing any checking on the input, what if we put an interger substitution character in there?

```bash
╭─vega@lyrae ~  
╰─➤  ./ploit "%d"  
1875151412%
```

hmmm, alright, can we print a stack pointer?

```bash
╭─vega@lyrae ~  
╰─➤  ./ploit "%p"
0x7ffdaa912034%
```

neat, alright, well there's an interesting printf sequence, %n, which ouputs the number of characters in the string

```bash
╭─vega@lyrae ~  
╰─➤  ./ploit "%n"
```

There's no output... but that should tip you off to what's about to happen

```bash
╭─vega@lyrae ~  
╰─➤  ./ploit "a%n"
aOWO
```

Got it. By making the string one character (not including the %n itself) %n's character count output is stored into the interger i, and we trigger the if, printing the string.

Hopefully you see that this is a big problem. The user was able to change code flow on a *print* statement. With a little more work the input could be crafted to access arbitary memory of the program, potentially getting the print to divuldge something in memory you'd really rather keep private- maybe a password?

{{< hint info>}}

[This video from Live Overflow](https://youtu.be/0WvrSfcdq1I) explains this much more in depth in just 10 minutes. Give it a watch.

See [These Lecture notes on Format String Vulnerabilities from Syracuse University](https://web.ecs.syr.edu/~wedu/Teaching/cis643/LectureNotes_New/Format_String.pdf) and [Intoduction to Format String Exploits from Code Arcana](https://codearcana.com/posts/2013/05/02/introduction-to-format-string-exploits.html) for even more.

{{< /hint >}}

The main thing I want you to take away from this example is this:

<center><p style="font-size:4em;">
    SANITIZE YOUR <i>FUCKING</i> INPUTS    
</p></center>

Seriously, it's *nuts* how many exploits are caused by inputs not being checked, allowing for injection attacks. SQL injection letting somebody either read or delete your database? Yep. Cross Site Scripting (XSS). Yep. File Upload attacks? You Bet. Input isn't just text either. It's anything a user can, well, input. Don't be stupid.

Also note, input includes *anything* the program reads. There's nothing stopping a user from diving into the programs files and changing some config file or loading in a different .dll/.so library file. Of course, this technically extends all the way to modifying the binary of the executable itself, but at that point the threat modeling is entirely different.

{{< tip >}}

Along with sanitizing inputs, you should also sanitize output where applicable. If the program shouldn't be able to do something, not only should they not be able to force that command in, but that state should be checked for and prevented. </br>See [Don’t try to sanitize input. Escape output.](https://benhoyt.com/writings/dont-sanitize-do-escape/) from Ben Hoyt.

{{< /tip >}}

## DO NOT

### DO NOT use random crypto libraries or write your own

I would hope I don't have to justify this. If the library isn't common, hasn't been audited, and you're not super confident that it's safe: DO NOT use it.

Similarly, crypto is hard, unless you want to go into it (which is cool, go for it, just be prepared for a lot of math) and understand what you're getting yourself into, don't try to write crypto code yourself.

### DO NOT use algorithms that are broken

I would seriously hope this is a 'No Shit'. Unfortunately, it seems it's not. So, allow me:

DO NOT USE: MD5, DES (Including Tripple DES), SHA-1*, AES-EBC, AES-CBC without a [MAC](https://en.wikipedia.org/wiki/CBC-MAC)

Alright, so what should you use? Well, the answer is obviously "It depends on what you want", but in general the recommendations from [Cryptographic Right Answers](https://latacora.micro.blog/2018/04/03/cryptographic-right-answers.html) are probably a good place to start.

### DO NOT think encryption is a magic bullet

> Our mysterious hero ran from the evil forces, carrying his trusty cyberdeck with all the information the resistance needed to win, but if it fell into the wrong hands it would all be over. Unfortunately, there were to many- He was surrounded! He feared not though, for his disk was encrypted by AES-4096! While the resistance may not get the data, the evil forces wouldn't have it either! He taunted his captors, "You'll never get that data!"
>
> They took his cyberdeck from his bag, and wiggled the mouse to find it had only been asleep, the disks still accessible.

Full disk encryption probably doesn't do you any good. - https://sockpuppet.org/blog/2014/04/30/you-dont-want-xts/

### DO NOT assume the crypto algo 'Just Works'

**YOU have to know how to apply it**

[TODO]

https://soatok.blog/2021/01/20/please-stop-encrypting-with-rsa-directly/



### DO NOT assume the hardware is secure

<iframe width="100%" height="500" src="https://www.youtube.com/embed/FktI4qSjzaE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This is one of *many* side channel attacks on hardware directly. My point here is simple: it's ~~turtles~~ compromised all the way down.

Along with this, you also shouldn't make to many assumptions that your code is running in a 'real' environment. The code may well be running in a virtual machine or in a container.

### DO NOT assume that things won't break

#### Overflow

#### Stack Smashing

#### Active Tampering

### DO NOT manage your own memory

Okay, so, this is weird advice. Obviously, sometimes, you literally have to play around with pointers, there's nothing you can do about it. The thing is [70 percent of all security bugs are memory safety issues](https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/). So, this is a big fucking problem.

To some extent, you can mitigate this by using a higher level language, but that then requires you actually know what you're doing anyway, and the abstraction can actually bite you in the ass even harder. To prove this point, let's look at python.

```python
>>> x = 1
>>> y = 1
>>> x is y
True
>>> x = 257
>>> y = 257
>>> x is y
False
```

so 1 is 1, but 1001 is not 1001? Well, yes and no

```python
>>> x = 1
>>> y = 1
>>> id(x)
140514241382704
>>> id(y)
140514241382704
>>> x = 257
>>> y = 257
>>> id(x)
140514228628624
>>> id(y)
140514228628496
```

The reference (pointer) for values below 256 are the same, in the documentation

>  The current implementation keeps an array of integer objects for all integers between `-5` and `256`, when you create an int in that range you actually just get back a reference to the existing object.

So, the problem her is that instead of `x is y` this comparison should have been `x == y`

```python
>>> x = 257
>>> y = 257
>>> x == y
True
```

The point being, memory management is really, really fucking hard to get right and full of gotcha's, even in something as high level as Python.

There is no silver bullet here. What can help is, first of all, not using C if you can. Rust, C++, whatever. While I'm not a huge fan of object orientation, It does at least, when used correctly, help avoid some of these fuckups. Rust's forced compile-time check's do a great job of ensuring safety too. You should also put your program though [valgrind](https://valgrind.org) and probably some sort of [source code analysis tools](https://owasp.org/www-community/Source_Code_Analysis_Tools) like [splint (C)](http://splint.org), flawfinder, [bandit (Py)](https://github.com/PyCQA/bandit), or CPPcheck. Still, don't expect the tools to catch everything. Memory leaks may still sneak by, you may somehow still manage to do a use-after-free, or have some corner case that can segfault. 

Assert statements help too, forcing things to break when conditions aren't met.

```python
>>> x = 2
>>> assert x == 1, "x should be 1"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError: x should be 1
```

### DO NOT assume that you know who is on the other side

I'm not trying to be ᏕᎮᎧᎧᏦᎩ, I mean that the server, human, client, whatever that you *think* you're talking to, may not actually be who you *are* talking to. By this I generally mean one of two things:

Either you have a Man In The Middle (MITM) or somebody is being a sneaky douchebag and pretending to be someone else.

For MITM, it's more or less what it sounds like. If Alice (A) is trying to talk to Bob (B), it would normally look like A⇄B, but for a MITM, there's someone (let's call them Mallory (M)) receiving and forwarding all the traffic bidirectionally, that is A⇄M⇄B, yet to both Alice and Bob, this is transparent, that is both Alice and Bob only see A⇄B despite it actually being A⇄M⇄B. M *could* only be eavesdropping, not changing the content at all, could be changing only the data necessary to see the conversation (hijacking the key exchange and message signatures), or change the messages outright.

It could also be the case that M is just a sneaky douchebag (that's a technical term), and is just pretending to be B outright, B isn't even part of the connection.

Some things you should consider:

* Neither side needs to be a machine. It's very possible that the deceit is that somebody is simply lying about who they are on a call.
* It's not just that you need to trust the other side is who they say they are, you need to know they wont listen to someone that pretends to be you.
  * This exact problem leads to people being able to carry out a [SIM swap scam (Wikipedia)](https://en.wikipedia.org/wiki/SIM_swap_scam)
* While verification of identity is important, so is looking up that identity in the first place. If you always call the wrong number, always connect to the wrong URL, etc. You're asking for someone to come along and fill that role.

### DO NOT claim 'unhackability'

If you do, and you get hacked, it goes from being tragic to funny, and it's a huge welcome sign to bored hackers that *will* find a way in.

{{< details "Examples of 'unhackable' systems:" >}}

[‘Unhackable’ encrypted flash drive eyeDisk is, as it happens, hackable (TechCrunch)](https://techcrunch.com/2019/05/10/eyedisk-encrypted-flash-drive-unhackable/)

---

![unhackable](/unhackable1.jpg ':size=50%')

{{< /details >}}

### DO NOT think that code=binary

The code you write is not the code that will run.

{{< columns >}}

```c
int main(){
    int result = 0;
    for(int i=0; i < 999; i++){
            result = result + i;
    }
    return(result%255);
}
```

<--->

When this code is compiled with even basic optimization (`-O`), this is the assembly output:

```assembly
main: # @main
  mov eax, 231
  ret
```

{{< /columns >}}

Notice it's not actually doing any math? It's just storing the result as a constant in the program. The compiler did some magic, realized the programmer was being lazy and not doing math ahead of time, so did the math once. This is normal. Don't make the assumption that the code you write will necessarily be the code the machine runs.

### DO NOT assume that your users give a half a shit about security...

They don't. Maybe a small fraction do. Maybe a few will even have fancy USB authentication keys, be generating random 64 character long passwords filled with symbols. The majority though? The majority will be using some standard password they use everywhere else that has already been compromised, which they'd know if they bothered to check https://haveibeenpwned.com

Also don't think that even halfway decent password requirements will stop users from using shit passwords or just frustrate the hell out of them. Instead, let them know there's a minimum length, that passphrases like [CorrectHorseBatteryStaple](https://xkcd.com/936/) work well, and that any password that's common will be denied - check if the hash of their password matches the hash of any of the passwords in some common password dictionary like [this list of the top 10 million passwords](https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-1000000.txt). 

Similarly, unless you know you're audience is already technical, don't assume that your users will have the even the slightest clue about what an HTTPS certificate is, how to use a public/private key pair, or anything else related to crypto.

There's a reason torrent clients verify the hash automatically, that browsers show a little lock, and that telegram lets users [check their keys with emoji](https://www.slashgear.com/telegram-debuts-voice-calls-uses-emoji-codes-to-verify-security-30480357/).

Also don't make your users change passwords on a schedule. We all hate it, [It's not even recomended anymore](https://pages.nist.gov/800-63-FAQ/#q-b05), and it's just a royal PITA. 

### ...Or that they have a single clue about privacy

[TODO]

https://0l.wtf/posts/4_visual_browser_fingerprinting.html

#### What about on the job or at school?

### DO NOT think that Old ≠ Good & New ≠ Good

... Middleaged doesn't mean good either I guess.

Basically, just because something is new and shiny and claims to be 200% as fast and 4x as secure, doesn't mean it's safe. Similarly, just because something is old and well vetted, doesn't mean it is perfect either. Code that's been living in the Linux Kernel for decades or even in the [sudo binary](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3156) can have bugs.

Basically, what I'm saying is you should be careful when choosing what to use, patch shit when vulnerabilities are found, and despite how handy using some new kid on the block library looks, you might wanna avoid it if you're handling sensitive data.

### DO NOT get over confident

You should expect something to fail. Data **will** leak. You **will** have an 'oh shit' moment. The shit will, in fact, hit the fan, splatter all over the room, and seep into the carpet.

The best you can do is have a plan for when this happens and do your best to make sure that when it does the damage- both short and long term- is minimal.

Basically this comes down to two things: Backups and maintaining uptime. For backups:

> The 3-2-1 rule can aid in the backup process. It states that there should be at least 3 copies of the data, stored on 2 different types of storage media, and one copy should be kept offsite, in a remote location

For uptime, well, that's more complicated. If you're trying to keep 99.99%+ uptime, you'll have to get creative with automatic failovers, software defined networking/storage, etc.

That said, trying to get umpteen 9's of uptime is a bit crazy for most things anyway.

### DO NOT trust humans

Customer support exists to bypass security. Users exist to find bugs you wouldn't think possible. hackers exist to show you that you suck at programming. humans in general exist to do things that to other humans seems totally illogical.

Don't trust humans. [They're Made Out of Meat.](https://www.youtube.com/watch?v=7tScAyNaRdQ)

---

<img src="https://imgs.xkcd.com/comics/messaging_systems.png" alt="xkcd messaging systems" style="zoom:100%; display: block; margin-left: auto; margin-right: auto;" />

> 'SMS is just the worst, but I'm having trouble convincing people to adopt my preferred system, TLS IRC with a local server and a patched DOSBox gateway running in my mobile browser.'

{{< attribution >}}

[XKCD #2365](https://xkcd.com/2365/)

{{< /attribution >}}

Before we go any further, I want to get something out of the way:

Security is important, and should be taken seriously. **But** it's also a field of people who are tired of your shit, Karen. We don't wear suits and we won't do something just to look 'professional'.

If I want to curse, if I want to put furry art on these pages, I will do as I fucking please.

Real 'Security Professionals' own the word hacker, and real hackers don't give a shit about what society tells them to do. Hacking is about finding how systems can do something far outside of what the original desigener ever even considered, about finding solutions so elegant they're art, about breaking boundries. If you want to keep with professionalism or tradition you're in the wrong place.

As [Soatok](https://soatok.blog/2020/10/08/vanity-vendors-and-vulnerabilities/) put it:

> If people who are sharing great content–be it on Twitter or on their personal blog–do something that prevents you from sharing their content with your coworkers, the problem isn’t us.
>
> No, the real problem is your coworkers and bosses, and the unquestioned culture of anal-retentive diversity-choking bullshit that pervades business everywhere.

---

## Authentication & Authorization

Authentication != Identity

## Cryptography

[How To Learn Cryptography as a Programmer (Soatok)](https://soatok.blog/2020/06/10/how-to-learn-cryptography-as-a-programmer/)

[A furry writes about Cryptography but trust me you should actually read this (Soatok)](https://soatok.blog/2020/10/23/solving-for-why-furry-blogging-about-cryptography/)

## Hashing

<iframe width="100%" height="500" src="https://www.youtube.com/embed/S9JGmA5_unY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Note there's general two 'classes' of hashing- hashing for cryptographic security (Passwords) and for just general usage, the cryptographic ones typically are significantly more computationally intensive to make it harder to brute force all possible keys. Also most cryptographic hashing algorithms go to much greater lengths to avoid collisions. Also, salting is relevant here: [Salting (Wikipedia)](https://en.wikipedia.org/wiki/Salt_(cryptography))

## Security Policies

Metadata can bite you in the ass

## Threat Modeling

## Network Security

{{< columns >}}

* Email sucks

* PGP really sucks

* Firewalls, intrusion detection, DNS blackholes, Fail2Ban, etc.

* DoS/DDoS

  MitM

  XXS

  [How The Self-Retweeting Tweet Worked: Cross-Site Scripting (XSS) and Twitter (Youtube - Tom Scott)](https://www.youtube.com/watch?v=zv0kZKC6GAM&ab_channel=TomScott)

  MAC/IP spoofing

  sniffing

  DNS: [idn-phishing](https://www.xudongz.com/blog/2017/idn-phishing/)

  [Wifi Cactus](https://blog.adafruit.com/2017/08/02/wificactus-when-you-need-to-know-about-hackers-wearablewednesday/)

<--->

![phyxius](/phyxius.jpg)

> [Source](https://furrynetwork.com/artwork/1647029/hacker-dragon/), [Artist](https://www.furaffinity.net/user/halybs/) (used with permission from Phyxius)

{{< /columns >}}



## Types of exploits

[TODO] - where to put return oriented programming, super old hardware/software - 'the home router',

Otherwise known as hacking, exploitation of software is always alluring, though in reality like many things it is much less glamorous than the news or tv make it out to be. Before I get into it I want to plug 'The Art of Exploitation' by Jon Erickson again, as it truly is a masterpiece that describes exploiting in a way that just makes sense

[TODO]

passive V active attacks - monitoriring/obtaining contents of message V Tampering, Dos, Replay, Faking ID

### Software

`strings`

Injection - SQL

breaking hashes

Heap/buffer overflow

dangling pointers

code-injection

places you don't expect to have code like PDFs

clock attacks

Race conditions

Path traversal 

format string

pseudo-random

Fuzzing

### Hardware

[Intro to Hardware Reversing: Finding a UART and getting a shell (YouTube)](https://www.youtube.com/watch?v=ZmZuKA-Rst0&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

Talk about CPU bugs

Power side channel

Timing attacks

pseudo-random (hardware side)

Hardware trust (HID injection)

replay attacks

radio, rfid, etc

rowhammer, Heartbleed

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Holly s**t. Keyboard tap audio keylogger 🧐<a href="https://t.co/EAzwaVMyp3">https://t.co/EAzwaVMyp3</a> <a href="https://t.co/40hzZSEVWJ">pic.twitter.com/40hzZSEVWJ</a></p>&mdash; gorelics (@gorelics) <a href="https://twitter.com/gorelics/status/1338897626109014019?ref_src=twsrc%5Etfw">December 15, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Social Engineering

Phishing

spoofing (email, phone)

UTF-8 v ASCII

click jacking

expired certificate

default passwords

honey pots

stalkerware (Should this be moved?)

### Physical security

Lock picking as a last resort

[Law School for Lockpickers [YouTube, DEF CON 28]](https://www.youtube.com/watch?v=HGg9mypLcH0)

data destruction

## Malware

> Section here about not being a dick

Viruses

polymorphic

boot-record/rootkit

trojan

logic/compression bomb

logic/time bombs

ransomware

adware/spyware

## Tools of the trade

Many tools in common with debugging (gdb - gef, hex editors, logic analzer)

and testing (fuzzing)

decompilers, dissassembly, analysis

https://github.com/plasma-disassembler/plasma

Wireshark

Cheatengine

dynamic linking

Sandboxing

## Responsible Disclosure

https://adamcaudill.com/2015/11/19/responsible-disclosure-is-wrong/

## IOT

## Infrastructure

## Elections



## Getting some practice

https://gtfobins.github.io

[A 64 bit bind shell ELF binary in 172 bytes. (GitHub Gist)](https://gist.github.com/netspooky/c6db0034d2728a6906fe27248061d4ac)

### CTF-Time

### PWNie Island

[Let's Play/Hack - Pwn Adventure 3: Pwnie Island (YouTube, LiveOverflow)](https://www.youtube.com/watch?v=RDZnlcnmPUA) (Here he's playing a game where you have to exploit it to win)

[How To Learn Something New? - Game Devlog #1 (YouTube, LiveOverflow)](https://www.youtube.com/watch?v=LTlBElDPDDM) (Here he's making a game where you're supposed to exploit it)

## Where to learn even more:

Live Overflow, Youtube: https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w/playlists

Phrack : http://www.phrack.org/

Defcon Media Server : https://media.defcon.org/

As mentioned above in [Chapter 17- Compilers and Assemblers](#chapter-17--compilers-and-assemblers) At this point I highly recommend '[The Art of Exploitation](https://nostarch.com/hacking2.htm)' by Jon Erickson

https://microcorruption.com/ , https://ctftime.org/ ,

CTF time,

https://nagarrosecurity.com/blog/interactive-buffer-overflow-exploitation

[Writehat (GitHub)](https://github.com/blacklanternsecurity/writehat) - "A pentest reporting tool written in Python. Free yourself from Microsoft Word."

## Some Hacking Community Fun

[Bash injection without letters or numbers (YouTube, LiveOverflow)](https://www.youtube.com/watch?v=6D1LnMj0Yt0&ab_channel=LiveOverflow)

[Pwned By The Owner: What Happens When You Steal A Hacker's Computer (YouTube, Defcon)](https://www.youtube.com/watch?v=Jwpg-AwJ0Jc)

[How a Hacker Convinced Motorola to Send Him Source Code](https://www.youtube.com/watch?v=UBaVek2oTtc)

[Diabetics Are Hacking Their Own Insulin Pumps](https://www.youtube.com/watch?v=bouYRMItWnI)



<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Wow. <a href="https://twitter.com/sparkfun?ref_src=twsrc%5Etfw">@sparkfun</a> made an app that searches for nearby bluetooth devices that might be ATM/gas pump skimmers.<br><br>That&#39;s some real cyberpunk shit. <a href="https://t.co/CLsI5RKxMC">pic.twitter.com/CLsI5RKxMC</a></p>&mdash; foone (@Foone) <a href="https://twitter.com/Foone/status/910217984098017281?ref_src=twsrc%5Etfw">September 19, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Does register selection matter to performance on x86 CPUs? ](https://readhacker.news/s/4hqd9)

[Leap Day Bugs](https://codeofmatt.com/list-of-2020-leap-day-bugs/)

[DEF CON 18 - Zoz - Pwned By The Owner: What Happens When You Steal A Hacker's Computer (YouTube)](https://www.youtube.com/watch?v=Jwpg-AwJ0Jc)

[Diabetics Are Hacking Their Own Insulin Pumps (YouTube)](https://www.youtube.com/watch?v=bouYRMItWnI)

[Big List of Naughty Strings (Github)](https://github.com/minimaxir/big-list-of-naughty-strings)

[Widevine L3 Decryptor](https://github.com/tomer8007/widevine-l3-decryptor)

[αcτµαlly pδrταblε εxεcµταblε](https://justine.storage.googleapis.com/ape.html)

## Sacred texts of hacking:

From https://wiki.xxiivv.com/#development:

> The Four Essential Freedoms:</br>
> The freedom to run the program as you wish, for any purpose.</br>
> The freedom to study how the program works, and change it.</br>
> The freedom to redistribute copies so you can help others.</br>
> The freedom to distribute copies of your modified versions to others.

The hacker and information freedom community has multiple 'sacred texts' if you will, which I think do a good job of outlining some of the ideologies of the communities. Probably the most famous is the Guerrilla Open Access Manifesto written by Aaron Swartz, an amazing man that, according to Wikipedia "was involved in the development of the web feed format RSS and the Markdown publishing format, the organization Creative Commons, and the website framework web.py, and was a co-founder of the social news site Reddit". Due to his extensive work in online politics his Wikipedia page almost acts like a hub of sorts for relevant information: https://en.wikipedia.org/wiki/Aaron_Swartz. His most famous text though is probably the Guerrilla Open Access Manifesto.

{{< details "'Guerrilla Open Access Manifesto:" >}}

> Information is power. But like all power, there are those who want to keep it for
> themselves. The world's entire scientific and cultural heritage, published over centuries
> in books and journals, is increasingly being digitized and locked up by a handful of
> private corporations. Want to read the papers featuring the most famous results of the
> sciences? You'll need to send enormous amounts to publishers like Reed Elsevier.
>
> There are those struggling to change this. The Open Access Movement has fought
> valiantly to ensure that scientists do not sign their copyrights away but instead ensure
> their work is published on the Internet, under terms that allow anyone to access it. But
> even under the best scenarios, their work will only apply to things published in the future.
> Everything up until now will have been lost.
>
> That is too high a price to pay. Forcing academics to pay money to read the work of their
> colleagues? Scanning entire libraries but only allowing the folks at Google to read them?
> Providing scientific articles to those at elite universities in the First World, but not to
> children in the Global South? It's outrageous and unacceptable.
>
> "I agree," many say, "but what can we do? The companies hold the copyrights, they
> make enormous amounts of money by charging for access, and it's perfectly legal —
> there's nothing we can do to stop them." But there is something we can, something that's
> already being done: we can fight back.
>
> Those with access to these resources — students, librarians, scientists — you have been
> given a privilege. You get to feed at this banquet of knowledge while the rest of the world
> is locked out. But you need not — indeed, morally, you cannot — keep this privilege for
> yourselves. You have a duty to share it with the world. And you have: trading passwords
> with colleagues, filling download requests for friends.
>
> Meanwhile, those who have been locked out are not standing idly by. You have been
> sneaking through holes and climbing over fences, liberating the information locked up by
> publishers and sharing them with your friends.
>
> But all of this action goes on in the dark, hidden underground. It's called stealing or
> piracy, as if sharing a wealth of knowledge were the moral equivalent of plundering a
> ship and murdering its crew. But sharing isn't immoral — it's a moral imperative. Only
> those blinded by greed would refuse to let a friend make a copy.
>
> Large corporations, of course, are blinded by greed. The laws under which they operate
> require it — their shareholders would revolt at anything less. And the politicians they
> have bought off back them, passing laws giving them the exclusive power to decide who
> can make copies.
>
> There is no justice in following unjust laws. It's time to come into the light and, in the
> grand tradition of civil disobedience, declare our opposition to this private theft of public
> culture.
>
> We need to take information, wherever it is stored, make our copies and share them with
> the world. We need to take stuff that's out of copyright and add it to the archive. We need
> to buy secret databases and put them on the Web. We need to download scientific
> journals and upload them to file sharing networks. We need to fight for Guerilla Open
> Access.
>
> With enough of us, around the world, we'll not just send a strong message opposing the
> privatization of knowledge — we'll make it a thing of the past. Will you join us?
>
> Aaron Swartz
>
> July 2008, Eremo, Italy

If you'd like more information on Swartz's infulence you can watch a documentry on him [here](https://www.youtube.com/watch?v=vXr-2hwTk58&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz&index=367&t=0s)

{{< /details >}}

Another one that you should read is *The Conscience of a Hacker* written by 'The Mentor' in '86:

{{< details "The Conscience of a Hacker" >}}

> Another one got caught today, It's all over the papers.
> "Teenager Arrested in Computer Crime Scandal", "Hacker arrested
> after Bank Tampering"...
>
> Damn kids. They're all alike.
>
> But did you, in your three-piece psychology and 1950's
> technobrain, ever take a look behind the eyes of a hacker? did
> you ever wonder what made him tick, what forces shaped him, what
> may have molded him?
>
> I am a hacker. Enter my world.
>
> Mine is a world that begins with school... I'm smarter than
> most of the other kids, this crap they teach us bores me...
> Come on...  Ain't Got All Day!!
> Damn underachiever. They're all alike.
>
> I'm in junior high or high school. I've listened to the
> teachers explain for the fifteenth time how to reduce a
> fraction. I understand it. "No Ms. Smith, I didn't show my work.
> I did it in my head..."
>
> Damn kid. Probably copied it. They're all alike.
>
> I made a discovery today. I found a computer. Wait a xecond,
> this is cool. It does what I want it to. if it makes a mistake,
> it's because I screwed it up. Not Because it doesn't like me...
> Or feels threatend by me...
> Or thinks I'm a smart ass...
> Or doesn't like teaching and shouldn't be here...
>
> Damn kid. All he does is play games. They're all alike.
>
> And then it happened... a door opened to a world... rushing
> through the phone line like junk through an addict's veins, an
> electronic impulse is sent out, a refuge from the day-to-day
> incompetencies is sought... a board is found.
>
> "this is it... this is wwhere I belong..."
>
> I know everyone herre... even if I've never met them, never
> talked to them, may never hear from them again... I know you
> all...
>
> Damn kid. tying up the phone line again. They're all alike...
> Come on...  Ain't Got All Day!!
> You bet your ass we're all alike... we've been spoon-fed baby
> food at school when we hungered for steak... the bits of meat
> that you did let slip through were prechewed and tasteless.
> We've been dominated by sadist, or ignored by the apathetic. The
> few that had something to teach us found us willing pupils, but
> those few are like drops of water in the desert.
>
> This is our world now... the world of the electron and the
> switch, the beauty of the baud. We make use of a service already
> existing without paying for what could be dirt-cheap if it
> wasn't run by profiteering gluttons, and you call us criminals.
> we explore... and you call us criminals. We seek after
> knoledge... and you call us criminals. We exist without skin
> color, without nationality, without religous bias... and you
> call us criminals. You build atomic bombs, you wage wars, you
> murder, cheat, and lie to us and try to make us believe it's for
> our own good, yet we're the criminals.
>
> Yes, I am a criminal. My crime is that of curiosity. My crime
> is that of judging people by what they say and think, not what
> they look like. My crime is that of outsmarting you, something
> that you will never forgive me for.
>
> Come on...  Ain't Got All Day!!
>
> I am a hacker, and this is my manifesto. You may stop this
> individual, but you can't stop us all... after all, we're all alike.
>
> +++The Mentor+++
> Racketeers

{{< /details >}}

<div hidden><img src="/irules.jpg" alt="internet rules" style="zoom:100%; display: block; margin-left: auto; margin-right: auto;" /></div>