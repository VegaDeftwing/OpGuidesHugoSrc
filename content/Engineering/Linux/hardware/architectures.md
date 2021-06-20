# Chapter 3½ - Architectures

[TODO]

From the README.md file at https://github.com/radareorg/radare2

> ## Architectures
>
> i386, x86-64, ARM, MIPS, PowerPC, SPARC, RISC-V, SH, m68k, m680x, AVR, XAP, System Z, XCore, CR16, HPPA, ARC, Blackfin, Z80, H8/300, V810, V850, CRIS, XAP, PIC, LM32, 8051, 6502, i4004, i8080, Propeller, Tricore, CHIP-8, LH5801, T8200, GameBoy, SNES, SPC700, MSP430, Xtensa, NIOS II, Java, Dalvik, WebAssembly, MSIL, EBC, TMS320 (c54x, c55x, c55+, c66), Hexagon, Brainfuck, Malbolge, whitespace, DCPU16, LANAI, MCORE, mcs96, RSP, SuperH-4, VAX.

Which is only further complicated by:

> ## File Formats
>
> ELF, Mach-O, Fatmach-O, PE, PE+, MZ, COFF, OMF, TE, XBE, BIOS/UEFI, Dyldcache, DEX, ART, CGC, Java class, Android boot image, Plan9 executable, ZIMG, MBN/SBL bootloader, ELF coredump, MDMP (Windows minidump), WASM (WebAssembly binary), Commodore VICE emulator, QNX, Game Boy (Advance), Nintendo DS ROMs and Nintendo 3DS FIRMs, various filesystems.

and

> ## Operating Systems
>
> Windows (since XP), GNU/Linux, GNU/Darwin, GNU/Hurd, Apple's {Mac,i,iPad,watch}OS, [Dragonfly|Net|Free|Open]BSD, Android, QNX, Solaris, Haiku, FirefoxOS.

plus, the above lists are by no means exhaustive. Clearly there's no shortage of CPU architectures (virtual or physical) that can be present on a system which can be running any of a number of operating systems which may use a variety of ways of actually storing the executable instructions, so, let's take a look at what all of this actually means. First, let's start with the different architectures you're likely to run into and what makes them different:

[TODO]

For more information on embedded architectures and in-depth comparisons look at Chapter 14.1. For info on Virtual machines (for hosting Linux or for languages like Java) look to Chapters 8 and 17

[TODO] note on hackintoshes

https://manybutfinite.com/post/how-computers-boot-up/