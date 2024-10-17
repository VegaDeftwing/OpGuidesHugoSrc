## Storing Information Sucks

Storing your data blows. Users have to contend with backups, backups for you backups, bitrot, file size vs compression, what file system to use, how to make backups actually convenient, mirroring information between systems with limited bandwidth, etc. But to start somewhere let's look at archival:

### Archival

Digital archival on 'cold storage' sucks. For one, that cold storage is often either a PITA to attach in the first place, Usually using either using a slow USB interface, an expensive and far-from-universal thunderbolt one, or, if you want to go very bulk storage, requiring a specialized PCIe card which is meant for servers which brings along it's own pile of issues.

But even once you have everything attached, most of the time backups are pain to run. You can always do the lazy copy-and-replace-existing method, but that's painfully slow as it has to check all the current files instead of just doing the logical thing and comparing two indexes, but, of course, most file systems don't support this index based method. Sure, there's software to add it, like Bvckup, but most that I can find is paid or not something I would trust. Right now, the best thing I can find is using `rsync`, as I have a script with a bunch of lines like 



```bash
rsync -a --delete -P --exclude={'.local/share/Steam'} /home/vega /run/media/vega/BigOlBackup
```

 and, yeah, that works, but it requires a reasonable degree of tech-savvy-ness

Using Git (or GitAnnex) is of course an option, but that has a higher barrier to entry to learn than seems reasonable. At the same time having actual file versioning needs to be a thing, something better than having `untitled.docx`, `untitled.docx`,`untitled3final.docx`, and `untitled3.5.finaler.docx`, even if it is still storing the file in full (though hopefully compressed) behind the scenes.

But, on the note of indexes, why are tools to provide a disk-offline index not better. From what I can find, [catcli](https://github.com/deadc0de6/catcli) and [Virtual Volumes View](http://vvvapp.sourceforge.net) are the main two options, and both are bit out of the way to use, compared to just having it be natively in the file browser. 





### Phone ↔ PC is the fucking worst.

MTP needs to die a very painful death. [USB Mass Storage](https://en.wikipedia.org/wiki/Media_Transfer_Protocol#Comparison_with_USB_Mass_Storage), that is, devices that show up the same way a flash drive does, are infinitely easier to work with. On Android, with large folders, I've found [adbfs](https://github.com/zach-klippenstein/adbfs), a tool that lets you do file transfer over Android Debugging Bridge, to be much better than MTP, but, really? No 'normal' user should be expected to use that. Hell, a lot of people are just uploading files to the cloud and then downloading them on the target device because it's easier. There's also a growing number of apps that let users to transfers over wifi by hosting an Samba server on the phone, but why would something wireless be better? It's absolutely crazy that things have gotten this bad.

Also, while I'm bitching, can we *please* stop removing the SD card slot ({{< smalltext >}}and headphone jack{{< /smalltext >}})from phones? I like being able to take my full music collection with me.

### We're using ancient formats

Look, jpeg and png are perfectly fine formats. For 2000. It's 2022. HEIF (or [BPG](https://bellard.org/bpg/)) really should be standard. Instead, it's a motherfucker because M$ is too damn cheap to include the HEVC extensions which it relies on it without either having the user [pay \$0.99](https://www.microsoft.com/en-us/p/hevc-video-extensions/9nmzlz57r3t7) ([or claiming to be the OEM](https://www.microsoft.com/en-us/p/hevc-video-extensions-from-device-manufacturer/9n4wgh0z6vhq)) because a collection of jackasses have it [patented so hard](https://www.hackerfactor.com/blog/index.php?/archives/833-HEIC-Yeah.html) and require licensing fees such that it may as well not exist. HEIF/HEIC or BPG I think have a good chance because of the preexisting hardware acceleration, but other formats like [hific](https://hific.github.io/), which uses GANs to do compression, look promising too.

> As a note about why I wrote about HEIF/C in particular, most phones are capable of storing images in this format now, and IPhones do by default, which is a real PITA if an apple user emails these pictures to a Windows user.

Of course the same applies in other formats. .flac is replacing .wav for high end audio, but why not [Direct Stream Digital (DSD)](https://en.wikipedia.org/wiki/Direct_Stream_Digital)? 

* All the best formats are a pain in the ass
  * format shifting sucks, opening them sucks, patents suck
* People use some really, really shit formats
* A lot of formats are needlessly complicated and not human or computer readable to anyone but the software vendor

### Bit rot?

![xkcd Digital Data](/xkcd/xkcddigitaldata.webp)

{{< attribution >}}

[xkcd #1683](https://xkcd.com/1683/)

{{< /attribution >}}

Data on the internet gets compressed, saved, recompressed, resaved, upscaled, re-colored, and deep-fried pretty quickly.

This combined with more traditional [bit rot](https://en.wikipedia.org/wiki/Data_degradation), where errors result in flipped bits, is a massive PITA.

Sure, tools like [Waifu-2x](https://github.com/nagadomi/waifu2x) help with the first problem, but using AI-up scaling to fix the loss of data isn't ideal. For actual bit rot, tools exist to detect bit errors in most formats and you could always use a better file system that does check summing, but both of these require more technical skill than most people have.

While not exactly related, data accumulation and near-duplication (think having two pictures with one having just a 2px cropped off the top) is a big problem. Trying to sort though a mounting of images, text, or audio files can be nearly impossible if put off for too long, making good digital hygiene a must despite the fact that nobody ever tells anybody how to have good digital hygiene in the first place. {{< smalltext >}}(don't ask me!){{< /smalltext >}}

AI tools to tag and identify images and audio help, but those tools are still limited and often only work well on uncompressed data, so no .jpgs or .mp3s for you. Plus, a lot of them upload your data to get processed (privacy concerns) or just don't work on some data (good look tagging all the pictures in your *homework* folder)

With all of this combined, keeping your files in order, not corrupted, and not having duplicates becomes a growing issue.

### Storage Hardware and File systems suck.

The hardware issue is mostly a side effect of trying to market technical differences to people who ultimately just want a place to drop their files. A normal user shouldn't have to know what all the various specs of a HDD or SSD mean to know what to buy.

That said, holy shit do manufactures suck at this. Everything from [Western Digital redefining 'RPM'](https://arstechnica.com/gadgets/2020/09/western-digital-is-trying-to-redefine-the-word-rpm/) to [Western Digital uses SMR on NAS drives](https://arstechnica.com/gadgets/2020/05/western-digital-gets-sued-for-sneaking-smr-disks-into-its-nas-channel/),   [DRAM-less SSDs](https://www.youtube.com/watch?v=ybIXsrLCgdM) and [Bait-and-switch in regards to SSD performance](https://youtu.be/bGY9hEVk_Bc?t=3744).

> SMR, or Shielded Magnetic Recording, has a few issues that make it problematic for Network Attached Storage (NAS) systems using multiple disks, particularly if the NAS is running ZFS, a common file system made exactly for this use case. So Western Digital doing this was well and truly a massive fucking problem for people needing to store a lot of data.

But the issues go beyond that. While a bit controversial, I think literally any modern filesystem (BTRFS, ZFS, or even EXT4) is *much* better than the mess that is NTFS, yet, Microsoft only officially supports NTFS, FAT(/32), ~~and ReFS~~- all of which sorta suck.

There is no fucking reason everyone - Microsoft, Apple, Linux, etc. - can't fucking agree on *something* and avoid the massive fustercluck that is using FAT32, a filesystem that can only store files up to 4GB, as the only common system that "just works". 

> Note, you can use [BTRFS on Windows](https://github.com/maharmstone/btrfs (WinBtrfs)), using 3rd party tools. This seems to be stable enough and has some real advantages for dual-booters. Technically, the same is true of EXT2/3/4 too, but I don't trust it to not eat my data.

Ideally, we'd be using [Logical Volume Managment](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)) so that the entire filesystem can have snap shots, partitions could be resized, or use multiple physical disks 

I also don't get how in 2022, some systems are still booting off of spinning rust? Hell, why are we really using it at all. Yes, I know the price per GB is much lower, but we're talking about something that is so sensitive to vibration that [Shouting In The Datacenter](https://www.youtube.com/watch?v=tDacjrSCeq4) is a problem. This is extra dumb when you consider a lot of computers or game consoles will be right next to speakers and subwoffers. Every time I pickup a laptop with an HDD and I can feel the inertia of the disk it makes me cringe. 

### Cloud Storage is a terrible idea

{{< columns >}}

To keep the core of this issue brief: The cloud is just someone else's computer. You can never be certain of what they'll do to your data.

You can't be sure they won't have some random DMCA complaint take something down.

You can't be sure they won't suddenly increase price and essentially hold continued access to your data at ransom

You can't be sure they won't mine your data for targeted advertising

You can't be sure your data won't accidentally be public because of bad security.

<p style="text-align: center;"> Just don't put your data in the cloud.</p>

<--->

<img src="/nonfree/character/yellsatcloud2.webp" alt="Old Vega Yells at Cloud">

{{< attribution >}}Character owned by Vega, art by [Talon Creations](https://twitter.com/Talon_Creations) and Vega {{< /attribution >}}

{{< /columns >}}

That said, I will admit two valid uses:

1. Collaborative Editing. GSuite is actually pretty cool.
2. Backup but only if the service is *only* backup and you already have at least an on site backup. For example, I think [Backblaze](https://www.backblaze.com) is actually a pretty neat service and it seems like they do things reasonably. The ship you a hard drive option here is what makes it make sense to me. Note, I've never actually used Backblaze.

But 1. still has issues, especially if the format the collaborative documents are saved as are only valid on that cloud platform. Think like .docx for Word, but what does GSuite use? Can you be sure it'll work offline?

I'd also like to mention the idea of distributed computation here as well, as It can be used for both the storage of and computation on data. I think that having a *true* distributed system in place, one where all users contribute compute and storage for it's use, makes sense. The obvious ask is to get it to be self sufficient. This brings up the idea of balanced usage to contribution, I think the easiest solution is to simply use a system of computational debt tied to each user account. If the user is creating more computational debt than the average debt the system can sustain then that user should be handicapped in bandwidth accordingly. This does sort of bring us full circle in 'can I just trade debt with someone, or sell them my computational time' such that we're back to crypto based services again though, and I **really** don't like this idea for two reasons: 

1. This system needs real time computation and bandwidth, and these vary in value just like how electricity peak hours cost more.
2. This incentives simply paying for compute time instead of actually contributing computational power to the network like it actually needs, which in turns creates an incentive for people to do this at scale *annnndd* look at that we're back to centralization.

The biggest problem with this is that home Internet users very rarely have symmetric connections, so people would probably be very pissed off if their download speed were suddenly tied to their upload speed. This *could* be offset by building up credit, as previously mentioned, but that has the issues, as previously mentioned. I suppose there could simply be a credit cap, but setting that would be exceedingly awkward as a logical number to use would vary by user and how they use the system.

I do hope that someone has a better idea than me for the future of distributed computation, because I really can't see any good solutions despite wanting it to be part of the future.

I'd also be remiss if I didn't mention [Boinc](https://boinc.berkeley.edu), a tool you can use to donate unused computational resources from when your computer would be otherwise idle to good causes such as [Searching for Extraterestial Life](https://setiathome.berkeley.edu) or [Folding protiens](https://foldingathome.org) to look for cures to various diseases.

---

Unfortunately, in response to criticisms, like this one, of cloud storage a lot of providers of "Personal Cloud" devices have cropped up. Though, headlines like *[“I’m totally screwed.” WD My Book Live users wake up to find their data deleted](https://arstechnica.com/gadgets/2021/06/mass-data-wipe-in-my-book-devices-prompts-warning-from-western-digital/)* and *[If you have a QNAP NAS, stop what you're doing right now and install latest updates. Do it before Qlocker gets you](https://arstechnica.com/gadgets/2021/06/mass-data-wipe-in-my-book-devices-prompts-warning-from-western-digital/)* might go to show why that's also a pretty fucking stupid idea.