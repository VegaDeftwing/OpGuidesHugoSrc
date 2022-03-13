# Ugh. Windows.

Okay, so, I hate Windows for many, many reasons. Beyond the Candy Crush being bundled and privacy concerns, it's generally just a pain in the ass. That said, you'll probably need to do some stuff with it from time to time regardless, so, in this page I want to do three things:

1. Make it suck less.
2. Help you understand how to fix issues
2. Let you know how to make programming not suck

# 1. Making Windows Suck Less

### X.x Update your BIOS

While not Windows specific, I reccomend updating your UEFI/BIOS anyway, as occassionally it will fix random issues down the line. The process for this varies, but generally you just need to go to either the page for your specific model of computer or, if a custom system, the page for the motherboard. Download the BIOS from there and follow the update instructions provided. It'll be a little sketchy, but it should be fine. Sometimes, you can do this from within Windows Update via an 'optional update'. Don't.

### 1.1 Removing the shit

I'll be honest with you, even if you run a VPN -> Tor -> Freenet -> IPFS chain that hits every country twice or you manage to set up firewalls so high china wants your phone number, you won't be able to stop windows from knowing more about you than you know about you. 

{{< speech big >}}

Historically, I'd recomend setting up Windows with a local account for a whole mess of reasons as well. Unfortuantely, Microsoft is making this more of a pain in the ass with each update, and basically removing the ability outright in Windows 11. If you haven't yet set up your computer and your coming back to this guide as a "Did I miss anything", this is something you may want to consider trying still. Just realize you'll be fighting Windows every step of the way.

{{< /speech >}}

That's just the way it is. But, It's still good to give it a shot, so, here we go:

First, the easy one. Just run [Shut up 10](https://www.oo-software.com/en/shutup10). This can change a bunch of settings to be much more reasonable too, like fixing the start menu search to not search the web.

{{< tip >}} If some not-up-to-the-times guide says to use CCleaner, don't. It's basically a virus now! {{< /tip >}}

Then, you'll want to go through everything and just rip it out. Don't forget, Candy Crush is installed with 10 by default. And there's more… so, so much more. Go digging though add/remove programs and start mashing remove until you're satisfied. If you haven't run updates yet, it's possible Windows will install yet more crap, so you might need to double check.

### 1.2 Installing System Stuff

{{< tip >}}Update the OS before drivers - Windows likes to replace new drivers with old sometimes!{{< /tip >}}

* Drivers
* Better task man, etc.
* Better volume control
* WSL Arch



### 1.3 Fucking with settings

Now, I recommend you go through literally all of your settings. Both in the old school control panel and the newer setting nightmare.

[TODO] assigining programs to use GPU

[TODO] Power profiles + fast startup

[TODO] MAC randomization

[TODO] TrueType, Refresh rate

[TODO] Unix time

[TODO] Hidden files, extensions

[TODO] kill lock screen

[TODO] dumps

[TODO] Page file size

[TODO] open CMD here

[TODO] Verbose mode

### 1.4 Installing User Stuff

You probably have your own prefneces in Software. Statistically, you're *probably* a Chrome user. That's cool, you do you. Regadless, I reccomend installing all of the software that you can via `winget`, as it makes it much less likely that you'll download shit, and it's just generally easier and faster.

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

* Window's disks are formatted as NTFS. NTFS is awful.
* Drivers for windows tend to be a mess. Keeping them up to date is awful. Windows update will usually only install very old (or even incorrect) driver by default.
* Windows programs install themselves all over the fucking place. Yes, there's `program files` and `program files x86`, but sometimes things wind up in `%appdata%` or `ProgramData` or put themselves somewhere else entirely.
  * You may not be able to see these if you don't turn on `show hidden files`

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

* Windows and Linux do not play together nicely. Windows will ocassionally erase shit

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