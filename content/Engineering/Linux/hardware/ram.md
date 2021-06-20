# 2 - RAM

<script>
    document.getElementById("hardwareMenu").open = true;
</script>

![RAM](/ram.jpg)

 This is RAM or Random Access Memory. The above two sticks are the normal sized used in desktop PCs, this form factor is called a DIM while the bottom two are from laptops and are called SO-DIMS, the placement of the notch is an indicator of the generation of RAM, with nearly all modern ram being a consecutive generation of the DDR standard. At the time of writing (Q2,2019) DDR4 is common in new, medium to high end devices, with many DDR3 devices still being used. Of note many more compact devices solder the ram chips directly to the board, meaning there is no form factor to consider.

Just like the CPU, RAM has a speed at which it operates as well, Typically it's listed in MHz still, but speeds range from ~1.8Ghz to ~3.8Ghz at the time of writing, dependent DDR3 or 4. While DDR4 has faster clock speeds, it does typically have a higher overall latency, meaning there's a longer delay between when when data is requested to when it's delivered, albeit at a much higher total throughput. This is a massive topic in of itself, yet is also pretty niche as outside of some pretty specialized applications RAM speed and latency has a relatively minor impact, though faster is typically better.

okay, let's move on to ram in Linux.

While support for this will vary depending on your motherboard, you should be able to see information about your ram by running `sudo dmidecode --type 17`

The output will probably repeat multiple times, printing once for each physical stick of ram in your system. I actually have 4 sticks, but I'll just be showing one:

<img src="/dmiram.png" alt="DMI Ram" height="600em">

You should note that many of the things mentioned above can be seen here, though I do want to look at some things here.

First, size. This is an 8Gb or 8192Mb stick of ram. Obviously the more ram the better, but you may find strange ram configurations where there's a mix of ram sizes in a system. This can be bad for performance though, because of memory channels.

Most modern systems use 2 or 3 memory channels, to simplify a bit, it makes it so two sticks of ram can have their speed be used in parallel. Think about it like a parking lot, if you have a total of 4 parking lots you could, theoretically, hook them all up in a straight line with one entrance/exit shared among them. This would be pretty stupid though, as it would severely bottleneck traffic going though. Instead you may want to add a separate entrance and exit for each, but that quickly becomes expensive. Instead, most systems use a mix of the two, connecting a pair of sticks together, allowing for added capacity, but allowing for multiple pairs to be inserted independently. A lot of people don't fully fill all the available memory slots on their motherboard though, so instead of having 4 lots with 2 entrances you should be able to have 2 and 2, unless you mistakingly put the sticks in wrong, leaving one 'entrance' closed entirely while the other now has a ton of capacity. On my motherboard these 'lots' are labeled A1, A2, B1, and B2. Looking above you can see the stick we're looking at here is the A1 lot. It's because of this that you should ideally have a multiple of as many sticks of ram as you do memory channels. For example, if you have a two channel motherboard and CPU then you want either 2, 4, or 8 sticks of ram. Most motherboards top out at 4 sticks though, with 2 channel and 2 sticks being the most common configuration.

Next, I want to look at the line that says 'Type Detail: Synchronous Unbuffered (Unregistered)' this is referencing another type of ram, which is buffered and error correcting (ECC) memory. I'll come back to this.

I also want to point out the voltage. Much like a CPU the voltage a Ram module runs at is important, and needs to be kept very stable. However, it may need bumped up if the RAM is running at a particularly high speed or if it's set higher than factory (overclocked).

Some RAM actually includes a special memory profile, often called XMPP, which can be applied in the BIOS/UEFI settings to make sure you're getting the absolute best performance out of you RAM before manual overclocking. This may actually overclock your CPU a bit as well as a bit of a side effect.

There's a program on your system called `free` which can be used to see how much RAM you have, how much is in use, etc. Let's run free with the -h flag so we can see the amounts with nice units.

```bash
╭─vega@lyrae ~
╰─➤  free -h
              total        used        free      shared  buff/cache   available
Mem:           31Gi       4.5Gi        23Gi       488Mi       3.3Gi        26Gi
```

You can see I have 32Gb of RAM total (it get's truncated to 31 because it's actually like 31.99, units are weird), with ony 4.5Gb used. Most people complain about Chrome eating all their RAM but the truth is unused RAM is wasted RAM. The OS will manage RAM for you, and if you run out start using swap (that partition we made eariler).

Let's take a deeper dive, reading the man page for free with `man free` we can see it uses information from /proc/meminfo, so lets look at that file ourselves using `cat /proc/meminfo`.

One of the most interesting things to point out here is the concept of Dirty memory.

'Dirty' memory is the amount of information that has been modified in memory, but that has not been saved back onto the permanent storage (SSD/HDD). If you were to suddenly lose power this information would be lost.

Pagefaults and misses are also important. Because these topics are a bit hard to summarize I'm going to recommend you read [the Wikipedia page on Pagefaults](https://en.wikipedia.org/wiki/Page_fault) and on [Cache Misses](https://en.wikipedia.org/wiki/CPU_cache#Cache_miss). It's okay if you don't understand everything you're reading. Hopefully as you read more later and gain more experience the terms you didn't know will 'click' and you'll understand. 

Going back to when cache was mentioned though, RAM's primary job is to hold bulk information that's in use a bit closer to the CPU. For example if you load a large image file it'll first get copied to ram and then be processed though cache in chunks, this is because there just simply isn't enough cache on the CPU to hold a large image.

## Virtual Memory

### Dirty bit

### Pages

[TODO] Huge Pages ref [this](https://www.chaoticafractals.com/manual/getting-started/enabling-large-page-support-windows)

## Memory issues, ECC, and Memtest86

Memory can have quite a few issues, sometimes resulting in random Blue Screen of Death (BSoD) or Linux Kernel Panics, other times just occasionally corrupting data with no way to know. 

If you're working with super critical data, you can at least know that something has gone wrong by using Error Correction Code (ECC) memory. In an ideal world ECC would just be standard on everything. Unfortunately, Intel is a bag of dicks and uses it for product segmentation and people are cheap: ECC is also more expensive because it requires an extra bit for every byte. This also means that instead of the normal 8 memory dies per stick of RAM, ECC memory actually has 9 dies (usually). The reason there are normally 8 dies is simple- there's 8 bits in a byte. Servers don't work on some magic 9-bit in a byte system, instead, this extra bit per byte is used to ensure the data hasn't been corrupted. 

{{< columns >}}

The math to do this is generally capable of detecting and fixing a single bit flip per byte, and at least detecting a double flip.

This video explains how that works if you're interested:

<--->

<iframe width="100%" height="250" src="https://www.youtube.com/embed/X8jsijhllIA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

It is worth noting that along with being more expensive, ECC is also usually a tad slower. There's also such thing as Registered/Buffered memory, which you may see with ECC as well. Buffered memory is basically just adding an extra 'buffer' between the read/write and again, it's a server thing- you're unlikely to ever see it on a consumer platform. Just know that if you're buying RAM for a server you may need to be careful to ensure you're getting the right thing.

When DDR5 comes along, ECC is built into the spec for all levels to some extent because as memory speeds have increased, the likelihood of an error has as well. It's becoming necessary for basic functionality at DDR5 speeds.

Now, ECC would be great and all, but the memory in the system you're reading this on almost certainly isn't using it, so what can you do?

{{< columns >}}

Well, for one, you need to get a feel for when something might be a memory error. Generally, if you see issues that you can't attribute to anything in software, where there's no obvious pattern, it's a good bet that it's memory. Assuming you're on an x86(_64) system, like *most* laptops or desktops, you can check with [Memtest86(+) (Wikipedia)](https://en.wikipedia.org/wiki/Memtest86). It often needs to run for a few hours to find anything, but when it does you'll get a big red error.

Unfortunately, this probably means you need to buy new RAM. In the absolute worst case, maybe a new CPU if the memory controller has gotten damaged, but this is unlikely.

<--->

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Memtest86%2B_15_million_errors_2017.jpg/2560px-Memtest86%2B_15_million_errors_2017.jpg" style="zoom:50%;" />

{{< attribution >}}

Image by Андрей Крижановский on Wikipedia, Public Domain

{{< /attribution >}}

{{< /columns >}}

You're far more likely to get RAM errors if you Overclock your RAM as well, so just be smart if you do OC your RAM- though I really don't recomend doing so beyond applying the [XMP profile (Tom's Hardware)](https://www.tomshardware.com/reviews/how-to-enable-xmp-ddr4-overclocking,6133.html#:~:text=Intel%20XMP%20is%20an%20automated,few%20clicks%20and%20compatible%20hardware.) your RAM may have shipped with. 

## The Future of RAM

[TODO]

[In-Memory Processing by UPMEM](https://www.anandtech.com/show/14750/hot-chips-31-analysis-inmemory-processing-by-upmem)

[Intel Optane Persistant Memory](https://www.storagereview.com/news/intel-optane-dc-persistent-memory-module-pmm)

## Row Hammer

{{< columns >}}

Row Hammer is vulnrability that arrieses due to the way memory is arranged physically and electrically on a memory stick. It let's you flip bits you shouldn't be able to by 'hammering' on the row above or below the target row, hoping that you can induce a bit flip in the target row.

[Row Hammer's Wikipedia Page](https://en.wikipedia.org/wiki/Row_hammer) has some a very good overview as well as some example assembly to explain the exploit

<--->

<iframe width="100%" height="250" src="https://www.youtube.com/embed/rGaF15-ko5w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{< /columns >}}

