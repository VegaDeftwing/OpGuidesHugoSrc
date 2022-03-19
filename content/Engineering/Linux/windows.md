# Appendix 2 - Ugh. Windows.

**Windows? In a Linux Chapter?**

---

{{< columns >}} Okay, so, I hate Windows for many, many reasons. Beyond the Candy Crush being bundled and privacy concerns, it's generally just a pain in the ass- and as a Linux user, that's saying something. That said, you'll probably need to do some stuff with it from time to time regardless. So, in this page I want to do three things:

1. Make it suck less.
2. Help you understand how to fix issues
2. Let you know how to make programming not suck

<--->

<img src="/nonfree/character/shade/blegh.webp" style="width:80%;" />

{{< attribution >}}Character owned by Vega, art by [Shade](https://twitter.com/shadepiplup10){{< /attribution >}}

{{< /columns >}}

# 1. Making Windows Suck Less

### X.x Update your BIOS

While not Windows specific, I reccomend updating your UEFI/BIOS anyway, as occassionally it will fix random issues down the line. The process for this varies, but generally you just need to go to either the page for your specific model of computer or, if a custom system, the page for the motherboard. Download the BIOS from there and follow the update instructions provided. It'll be a little sketchy, but it should be fine. Sometimes, you can do this from within Windows Update via an 'optional update'. **Don't.** This has a tendacy to break shit.

While for some computer updating the UEFI/BIOS just requires running a file from within Windows, on others you'll need to actually reboot into the UEFI/BIOS interface. If the system is anything newer than ancient, you should be able to do this by going into settings and finding "Advanced Startup". In 10, this is under Update→Recovery, on 11, just search for it (it will probably show up as "change advanced start up options") and then "Restart now". After the reboot, you should see a bright blue screen with the options of "Continue", "Troubleshoot", or "Turn off your PC". Select Troubleshoot → Advanced Options → UEFI Firmware Settings. This will bring you into a different settings menu that, unfortunately, looks different on every system. Just arrow-key, tab, and enter around to see what options are there. With luck, you'll stumble into something named "UEFI BIOS Update" or similar, and the process should be fairly straight forward from there. Some systems will even download the update over the internet from within this menu directly. If you plan to run Linux, you might want to come back to this menu and turn off Secure Boot as well.

### 1.1 Removing the shit

I'll be honest with you, even if you run a VPN -> Tor -> Freenet -> IPFS chain that hits every country twice or you manage to set up firewalls so high china wants your phone number, you won't be able to stop windows from knowing more about you than you know about you. 

{{< speech big >}}

Historically, I'd recomend setting up Windows with a local account for a whole mess of reasons as well. Unfortuantely, Microsoft is making this more of a pain in the ass with each update, and basically removing the ability outright in Windows 11. If you haven't yet set up your computer and your coming back to this guide as a "Did I miss anything", this is something you may want to consider trying still. Just realize you'll be fighting Windows every step of the way.

{{< /speech >}}

That's just the way it is. But, It's still good to give it a shot, so, here we go:

First, the easy one. Just run [Shut up 10](https://www.oo-software.com/en/shutup10). Read through each option, do what you want. This can change a bunch of settings to be much more reasonable too, like fixing the start menu search to not search the web.

{{< tip >}} If some not-up-to-the-times guide says to use CCleaner, don't. It's basically a virus now! {{< /tip >}}

Then, you'll want to go through everything and just rip the crap out. Don't forget, Candy Crush is installed with 10 by default. And there's more… so, so much more. If it's an HP, just search the start menu for "hp", Dell, "Dell", and so on. That will help you find a lot of the garbage. I also reccomend opening up task manager (Ctrl+Shift+Esc), selecting more details, clicking the Startup tab, and seeing if there's anything you don't use that you can uninstall or at least disable. From there, just go digging though add/remove programs and start mashing remove until you're satisfied. If you haven't run updates yet, it's possible Windows will install yet more crap, so you might need to double check.

### 1.2 Installing System Stuff

{{< tip >}}Update the OS before drivers - Windows likes to replace new drivers with old sometimes!{{< /tip >}}

#### Drivers

Okay, first up, drivers. Ideally, Windows wouldn't go grab ancient driver to begin with, but here we are. To start with, you'll want to grab the drivers for your graphics card, CPU, and chipset. Should you not know what CPU you have, just open task manager and go to the performance tab. It should say in the top right corner. There's (with some weird exceptions) four possibilities

* AMD CPU with integrated graphics
* AMD CPU without integrated graphics
* Intel CPU with integrated graphics
* Intel CPU without integrated graphics

Now, with *any* of the four options, you *might* also have a dedicated graphics card, which will need its own drivers. This (currently) will either be an AMD or Nvidia card, and you should be able to see it listed under GPU as the last entry in the performance tab in task manager. If you see two graphics cards (GPU0 and GPU1) one of them is probably the integrated graphics. You can confirm if   it's a dedicated or integrated card by looking if there's a "Dedicated GPU memory" field under the graphs. If there is, it's a dedicated card. If there's not (so only "Shared GPU memory") then it's an integrated card. This now means there's really 12 basic system driver options, the above four, plus a variant of each with either a dedicated AMD card or dedicated Nvidia card.

Fortunately, we can group these up pretty easily: 

If you're on an **all AMD** system (no Intel or Nvidia), just go to [the AMD support page](https://www.amd.com/en/support), hit the big download button, run it, and set everything up. You should be good to go.

If you're on an **all Intel** system, head to [the Intel Driver Support page](https://www.intel.com/content/www/us/en/support/detect.html) and download, install, and run the driver assistant. It will open a web browser page with links to the drivers for you to download and install.

If you're on an **AMD CPU + Nvidia GPU** system, congrats on having a cool computer that you probably built yourself. This *might* be a bit tricky if you have an AMD CPU with integrated graphics, as sometimes the big Nvidia card and Integrated AMD graphics drivers don't get along. Ideally, you'd just turn off the integrated graphics in the BIOS. Regardless, your best bet is to do things a bit more manually, on the [the AMD support page](https://www.amd.com/en/support) go down a bit and select your particular CPU, grab its driver. Then, you'll need to know what chipset you have. On AMD systems this can be quite a few different options, so go ahead and download and install [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html#version-history). Open it up, and you'll need two pieces of information. First, your CPU socket. On the man tab this should be under "Package", on any modern system this should be "AM4", then click the mainboard tab, and look for the the "Southbridge" line. This will probably be AMD x370 or x470, etc. Now, you can head back to the driver page, and find the matching entry, for example, Chipsets→AMD Socket AM4→x370. Then just pick the latest one. You probably don't need the ones with "RAID" in the name. Now you've got the AMD part done, go grab [Nvidia's GeForce Experiance](https://www.nvidia.com/en-us/geforce/geforce-experience/) software, set it up and make an account (signing over your first born), and you can then update the Nvidia driver. Done.

If you're one an **Intel CPU + AMD GPU** system, you should be good to head to [the Intel Driver Support page](https://www.intel.com/content/www/us/en/support/detect.html) and download, install, and run the driver assistant, then head over to [the AMD support page](https://www.amd.com/en/support), hit the big download button, run it, and set everything up. This is a relatively uncommon setup though, so you might want to double check this is actually what you have.

Finally, if you're on an **Intel + Nvidia** system, you should be good to head to [the Intel Driver Support page](https://www.intel.com/content/www/us/en/support/detect.html) and download, install, and run the driver assistant and then grab [Nvidia's GeForce Experiance](https://www.nvidia.com/en-us/geforce/geforce-experience/) software, set it up and make an account (signing over your first born), and you can then update the Nvidia driver. Done.

Okay, that's the big uns'. You may still want to go grab up to date drivers for some other things like networking, but, frankly, most of it is in "If it works, don't fuck with it" territory. Now, of course, that's assuming it works. This would be a good time to make sure the system actually does what you think it should. If something is weird (slow disks, networking dropping out, flakey USB, etc.) adjust accordingly. You'll also need to grab drivers for any peripheral drivers you want to take advantage of. Razer, Roccat, Logitech, Corsair, etc. all have their own drivers for their mice, keyboards, webcams, and what not. 

#### System Utilities

Task manager and Windows Settings are great and all, but they're a bit limited. Before we go getting more utilities though, you should know what you have available. 

If you have a dedicated graphics card, if you right click your desktop (with nothing open) you'll probably see that you have either an option for "AMD Radeon Software" or "Nvidia Control Panel".

> Note, on Windows 11, these may be behind "Show more options"!

Both of these let you change settings for your graphics card. The AMD version has the driver update check built in as well, while for Nvidia that's over in GeForce Experience. You might want to poke around options here and see what's available. There's some advanced settings lurking in here, but even touching familiarity will be useful.

As for other hardware utilities, you may want to just type "AMD" or "Intel" into the start menu search as well and see what utilities pop up.

Windows also has a few application specific tools you should be aware exist, like the disk managment tool, device manager, and task scheduler, and services manager. While we're on the subject, now tould be a good time to go check each and make sure everything is sane.

Let's start by opening up "device manager", you should see a bunch of different caterogories ranging from "Audio Inputs and Outputs" to "Universal Serial Bus Controllers". What you shoud be looking for is a any thing showing up as "⚠ Unknown Device" as this is a sign that you have something that's unhappy about drivers. The exact method for figuring out which device this is varies, but a good portion of the time this will be a USB device. If that's the case, a good place to start is to right click the device, select *properties* then the Details tab, then select the "Hardware IDs" property. You should see something like "USB\VID_258A&PID_0013&REV_0100&MI_00" what we actually need from that is the Vendor ID (VID) and Product ID (PID), in this case that's 258A and 0013. If you search the web for these together as VendorID:DeviceID (so, 258A:0013), you'll often be able to figure out what the offending device is. For example, Googling this example "258A:0013" the first result is for a gaming keyboard, which is correct.

Now, let's head over to Disk managment. Here the big thing we should be looking for is any large blocks of unallocated space or partitions you don't recognize (if you've installed Linux, Windows will see these partitions, but have no idea what they are!) - on a normal, single disk, Windows system there will probably be a ~300Mb EFI System Partition, a very large (the majority of the disk in size) "Windows C:/" partition, and one or two recovery partitions, totalling less than 30Gb.

{{< hint info >}}

Heads up, the graphical disk managment utility may not let you do some things! In this case you may need to run `diskpart` in cmd.

{{< /hint >}}

{{< hint warning >}}

Things can get weird if you're using Bitlocker for encryption or if your BIOS is set to to RAID mode (even if there's only one disk) in either case, it will be really tough to access data from Linux. This may not seem like a big deal to you if you don't intend to dual boot, but it can make data recovery or virus removal a massive pain in the ass later.

{{< /hint >}}

> If you're here, you might also be in need of a quick way to make a clone of a disk from within Windows, in that case, I've had luck with [RawDiskCopier (Github)](https://github.com/TalAloni/RawDiskCopier)

> {{< smalltext >}}If you're feeling really adventureous, you can actually [get Windows to run on BTRFS](https://github.com/maharmstone/btrfs). Just know that here be dragons.{{< /smalltext >}}

Next up, lets make sure HP/Dell/Acer/etc. didn't put any dumb things into the task scheduler or services. Open the start menu, search for "Task Scheduler" and open it. Click "Task Scheduler Library" and look through the entries, don't be afraid to web search if you don't know what some are. If there's some you know you don't need, just right click and disable them.

Then, into services. While you can into services by opening the start menu and searching for it, I want to show you the Run dialog, because occasionally the start menu will break on windows and using the run dialog can be a good way to force your way into thing anyway. So, go ahead and hold the windows key and press 'r', a run dialog box should show up where you'd expect the start menu. Type "services.msc". This will bring up the service managment window.  Most of these are nammed fairly well and have good descriptions. If there's something that absolutely doesn't need to run (like the Xbox services on an office computer) it's not a bad idea to just disable it.

For your sanity later, I'm going to recommend a whole host of deeper utilities & basic system improvments

* [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer) (or Process Hacker) can actually let you see what's going on when a particular program is misbehaving
* [EarTrumpet](https://eartrumpet.app) unfucks the audio menu. On 11, it will mean you're stuck with 2 sound buttons, but it's worth it.

* WSL Arch [TODO]


### 1.3 Noodling with settings

Now, I recommend you go through literally all of your settings. Both in the old school control panel and the newer setting nightmare. There's some settings I do want to point out though:

First, is assigining programs to use a dedicated GPU. If you're on a laptop (or desktop, though it'd be rare) with *both* integrated and dedicated graphics, the laptop probably switches between the two to save power. Unfortunately, it might get this wrong sometimes resulting in some programs running like ass. Games are *usually* fine, but for art tools like Krita, PCB design tools like KiCad, or really any other creative tool with a resonably interactive graphical interface Windows often gets it wrong. On 10 [TODO], on 11 this if you just search "GPU" it will bring you to the graphics settings page for this. In either case, just add the program (might need to be done by file path to the .exe) and then set it to use the "High performance" card.

Next, Windows defaults to saving power - even on desktops. In the start menu, search for "choose a power plan", select that, and switch to whatever the highest performance is called on your system ("Ultimate Performance" or whatever). On laptops this will eat more battery though. While you're here, you should see an option on the left for "Choose what the power buttons do". Click that, click "Change settings that are currently unavailable", and **un-**tick  "Turn on fast startup".

Now, onto networking. First of all, go into networking settings and dig around for "Random hardware addresses" and turn that off. It doesn't do jack shit for secutiy or privacy, and it just makes a lot of networks kick you off repeatedly. It's super annoying.

While we're playing with networking, you might want to use a different DNS provider. No matter who you go with, they'll track you, so it may as well be a better one than the stock one. ╮(─▽─)╭ Go to the *old* control panel → Network & Internet → Network & Sharing Center, then, on the left, click "Change Adapter Settings". Your active connection should be pretty obvious- right click whatever it is, select *properties*. You should be in the networking tab, click (But do not un-check!) the "Internet Protocol Version 4 (TCP/IPv4)" option and click *properies*. Now, at the bottom, "Obtain DNS server address automatically" is probably checked. Select "Use the followingDNS server addresses" and enter `1.1.1.1` and `8.8.8.8` as the Preferred and Alternate respectively. 

Next up, let's fix the stupid file explorer settings. In the start menu, search for and open "File Explorer Options". Click the "View tab", turn on "Display the full path in the title bar", "Show hidden files, folders, and drives". Now, you can close that window and open literally any folder to view files. In the file explorer, go to the top ribon and select View→Show, and turn on "File Name Extensions"

Now onto the display. First things first, open the start menu and run "Adjust ClearType Text", go through it and do what looks best to you. Then, let's go make sure you're display settings are sane. You should be able to right click in the desktop (with no window) and select "Display Settings". What you'll want to check is that the resolution is set to the displays maximum (with a few rare exceptions), and *unless you need it* that the scale is set to 100%. Then, go into the advanced options and make sure the refresh rate is set to the maximum supported by the display. Probably 60hz on most, but commonly 120 or 144hz on gaming laptops.

Next up, lets make it so that when a Blue Screen of Death (BSoD) does happen, we can actually figure out why. In the start menu, search for and open "Adavced System Settings", click "startup and recovery" and make sure "Automatic memory dump" is selected in the Write debugging information menu. Close out of the start up and recovery window, but not the system properties window - while we're here we can tweak some visual effects to make things feel snappier. Still on the advanced tab, click the performance button, and then under visual effects. Turn **off** all the "Fade", "Slide" animations, as well as Animate Windows when mimimizing and maximizing. 

Windows really doesn't like to tell you what's going on during updates, with messages like "Getting things ready". Fuck that. Fix this by opening an admin command prompt and running `reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v verbosestatus /d 1 /t REG_DWORD /f` The messages often happen to quickly to read (espically if you have a fast computer and SSD) but it's better than what it was.

If you're on Windows 11, the new right click menus really, really suck. [Follow this to fix that](https://www.laptopmag.com/how-to/get-the-windows-10-context-menu-back-in-windows-11). 

{{< speech big throw >}}

One of my bigger gripes with Windows is that many of these settings that you'd want to change **do** exist, it's just you have to go edit the registry to change them - which means you have to know they exist and what key to add. Basically, this turns into a game of trying to web search the right term to fix the annoyance.

{{< /speech >}}

Finally, for the command line lovers, I *think* that just by having the newer, less shit [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) installed you'll get a "Open In Windows Terminal" context menu added to the file browser.

### 1.4 Installing User Stuff

You probably have your own prefneces in Software. Statistically, you're *probably* a Chrome user. That's cool, you do you. (I'm a [Vivaldi](https://vivaldi.com) guy) Regadless, I reccomend installing all of the software that you can via `winget`, as it makes it much less likely that you'll download shit, and it's just generally easier and faster.

[TODO]

* Autohot key
* WSL
* VLC
* 7-zip
* Windows Terminal
* VS Code
* Audacity
* Typora
* Speed crunch
* Clink

### 1.5 Security & Backups

Just use Windows Defender (built in). If you have Norton or McAffee please just unistall them, they do more harm than good. If you need more, I really just recommend you have a linux live disk with `clamtk` on it as It's amazing how well some viruses protect themselves, but if you boot into a different OS, they're not even able to run.

On top of that, just have backups. If somehow you do manage to get a cryptolocker, it wont matter if you have regular backups.

Really though, the best protection is not being a dumbass. Don't go to weird pron websites, use an adblocker, 

If you want to protect your files there's VeraCrypt, just know that encryption comes with a disk overhead, so, if your on an HDD, windows 10 will be slower than bearable in my experience. 

If you want to be one of the cool kids, use [KeePassXC](https://keepassxc.org) for password managment. It can generate good passwords for you.

[TODO] Security

# 2. Understanding Windows & Fixing issues

One of the most annoying things about Windows is that it's an absolute pain in the ass to figure out what is going wrong when something goes wrong. Still, there's a few things that even knowing about will make fixing issues less awful. Some of identifying issues on Windows is, frankly, blind intuition. It comes from years of experiance and repeatedly cursing Microsoft's shitty forums and help sections.

So, let's dig into some core window's stuff for just a moment. The very TL;DR version:

* Windows, since Vista, is based on the NT kernel
  * This means most low-level fixes and articles you read since then should be reasonably accurate

* Window's disks are formatted as NTFS. NTFS is awful. [TODO] BTRFS
* Windows file permissions are way weirder than linux's `*rwxrwxrwx` structure. Permissions can and will fuck you.
  * If the user has a Microsoft account associated, the username isn't always the username. If you encounter this issue, I wish you luck in figuring out what the correct name actually is.

* Drivers for windows tend to be a mess. Keeping them up to date is awful. Windows update will often install very old (or even incorrect) driver by default.
* Windows programs install themselves all over the fucking place. Yes, there's `program files` and `program files x86`, but sometimes things wind up in `%appdata%` or `ProgramData` or put themselves somewhere else entirely.
  * You may not be able to see these if you don't turn on *show hidden files*
* Some programs are "apps" and these are sort of their own thing too
* Windows is sort of a mess for the sake of retaining backwards compatability
* A lot of windows programs have at least a few dependencies, like Java or Visual C++ 20xx-20xx Redistributable

That said, there are some nuggets of wisdom I can provide, in no particular order:

* Try *rebooting*

  * By default in Windows if you shutdown and then hit the power button to turn your system back on it doesn't actually power off! It only hibernates (stores system state to RAM). If you press **reboot** it will do an actual restart, which tends to fix things. Check uptime in task manager.
  * Window's has weird power settings by default. Shutdown does not mean shutdown. Shutdown and restart actually means update-reboot-update-shutdown.

* Window's power plans can cause weird behavior, sometimes slowing the system down to a crawl- making "high performance" actually run horribly. Try changing this if you notice your CPU is at 100% but doesn't appear to be doing anything.

* If a setting isn't showing up, or you're getting permission denied, check the related setting in the Group Policy Editor (`gpedit`)- rarely, turning the setting off-on-off will fix things too. 

* As a quick sanity check, you can always run `sfc /scannow` and `DISM /Online /Cleanup-Image /RestoreHealth` and sigh is exasperation as that finds and corrects errors

  * If this did find errors, double check the system disk isn't fucked/running like ass/throwing SMART errors

* Windows can and will randomly revert setting on updates. Including registry tweaks.

* If you keep blue-screening, use `windbg` and run `!analyze -v` on a system dump, with luck you might just find it's one driver being weird.

  * Event Viewer will almost never say anything useful.

* If you keep freezing and nothing shows up in event viwer after rebooting and you aren't getting dump files, you might try leaving audio playing. If you still have audio playback on the next freeze, it's a graphics problem - either your graphics driver or hardware.

* If networking is hecked up:

  * **Turn off random hardware addresses**. It doesn't do shit for security and it makes a lot of networks freak the fuck out.
  * Try checing local connection first (go to your router's page, probably at 192.168.1.1) and if that works, it's not Windows ... probably....
  * It *might* be DNS. Even with correct DNS settings, windows sometimes just... fucks off? Usually, the built in "diagnose and fix problems with my network" will actually fix this, just by resetting things.
  * Try a different network adapter- if you're on WiFi, try an ethernet connection or vis-versa. This is a good reason to have a spare USB networking adapter laying around.
  * Run `ipconfig /all`, see if all the settings make sense. Do you have an IP assigned to you? Is the gateway correct?
  
* If your printer isn't working:

  * If you're trying to print to a printer connected via WiFi, assume it's the printer first.
  * Try connecting the printer via USB
  * Place a floppy disk, PS2 keyboard, ball mouse, Intel 8086, and a copy of *System BIOS for IBM® PC/XT™/AT® computers and compatibles* into a pentagram with lines drawn from DB-25 cables. Gather two friends, ideally wearing pagers, but not required. Next, all together, softly begin chanting "C colon backslash, C colon backslash". If done correctly, you should begin to hear the SYN-ACK portion of the dialup handshake. This is your cue to saccrifice which ever of your two friends takes longer to ender a valid `tar` command. With the blood of this friend being absobred by the copy of *System BIOS for IBM® PC/XT™/AT® computers and compatibles* you should now have a five minute window in which you can sucessfully print. Take care to ensure you have first filled the printer with full ink cartridges, as anythig less than completely full will result in a "low on ink" error which may only be resolved by repeating the incantation with fresh supplies.
  * Give up and buy a dot matrix printer.
  
* Can't rename a file with a really weird name? → Boot into Linux and rename it

* Windows Update not working? Try the [update assistant](https://support.microsoft.com/en-us/topic/windows-10-update-assistant-3550dfb2-a015-7765-12ea-fba2ac36fb3f)

* Both `ctrl+alt+delete` and `win+shift+escape` to bring up task manager *should* always work, even if `explorer.exe` isn't responding. This means you can use task manager to restart explorer.exe if necessary.

* If everything is super-duper fucked- random crashing, corrupted files, etc. run a mem test.

* Running out of space? → run "Disk Cleanup → Clean up System Files", and then use [windirstat](https://windirstat.net) to find the offending files

## 2.5 For The Dual Booters

Windows likes to think it's the only OS on your system even if it's not. Sometimes this means it'll just eat your bootloader (so keep a live linux disk around to fix that). Other times it's a comical yet annoying tendancy to have update-and-shutdown actually update-and-reboot-into-Linux making it so the next time you boot Windows it just immediately shuts off. Fun stuff. On top of that, Windows only supporting NTFS [TODO, BTRFS] means if you want to share data between the two, you're pretty much stuck having your data be on an NTFS partition. Finally, Windows is weird and uses a different time standard than everyone else, so if you want Windows to not fuck up your clock every reboot, open an admin command prompt and run `reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f`

## 3. For The programmers

Windows tends to want programmers to do things in a certain way. Visual Studio has a certain workflow, and it's more-or-less expected that you're using it and have fully drank Microsoft's koolaid. If you try to do things your way, it absolutely will be a massive pain in the ass. I don't think this should be a massive revelation, it's sort of the standard across windows. Linux lets you pick your desktop environment, Windows gives you explorer.exe. It's just how it is. 

That said, if you have drank the koolaid, it's actually pretty awesome. Visual Studio is probably the best all rounder' IDE. It's got great integrated tools, the debugger wraps into it well, it has good support for developing for in a lot of languages and for quite a few platforms (Android, Windows win32, windows apps, etc.)

Still, *in my opinion* It's corprate, sterile, and just sucks. MSVC sucks. CMD sucks. PowerShell sucks. All the tools are shit, give awful error messages, and distract from getting work done. You'll be in in a software with infinite drop downs, constantly-reaching-for-your-mouse hell. Worse, most good development tools are Linux only, so, you'll either be running WSL or a VM to do some things anyway.

At the end of the day, to me, it comes down to this: If you want to make yet another generic web app with dotnet and get a code slinging job making software the world really doesn't need, sure, Windows might be the best bet. If you want to actually enjoy writing code, don't fucking use Windows

{{< speech >}}

Okay, I do have to put one more exception in here: Game development. While you can do Unity or Unreal dev in Linux, you'll be shooting yourself in the foot doing so. That said, if you're going for something open like Godot anyway, Linux will be fine.

{{< /speech >}}

Okay, so what do you need to know?

* Windows is *NOT* [POSIX](https://en.wikipedia.org/wiki/POSIX):
  * Windows has weird line endings
  * Being a different OS, it also has diffeernt system calls
  * NTFS *the filesystem* **is** case sensative; however, Windows artifically makes it **not** case sensative- don't put `myasm.S` and `myasm.s` in the same folder! Also, there's a bunch of annoying reserved words, file names can only be 255 characters, and some characters are not allowed. Fun, right?
* You'll probably have to fight compilers a bit
  * Welcome to editing environment variable hell
* ... see the [win32 api](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)
* ... and a different executable format
* [TODO] exe vs MSI

*All of that said,* WSL on Windows is acutally pretty great and solves the vast majority of this. There's a few exceptions if you need pedal-to-the-metal performance or access to `/dev` for not stupid device access (like developing embedded systems) then clearly WSL isn't going to cut it. Furthermore, you'll still need to install a ton of tools to make the windows-y operations less awful, like [clink](https://mridgers.github.io/clink/) to make `cmd` slightly more tollerable, tools like [groupy](https://www.stardock.com/products/groupy/) and [fancyzones](https://docs.microsoft.com/en-us/windows/powertoys/fancyzones) can make the actual window managment in Windows less bad... you get the idea.

### Using Visual Studio



### Setting up Windows compilers, debuggers, git, shells, etc.





​    