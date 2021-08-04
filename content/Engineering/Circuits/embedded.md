# Chapter 25 - Embedded Systems

<iframe title="vimeo-player" src="https://player.vimeo.com/video/571259885" width="100%" height="500" frameborder="0" allowfullscreen></iframe>

{{< attribution >}}By [Make It With Me](https://www.instructables.com/Cheapest-Plug-Play-Room-Automation-Setup/){{< /attribution >}}

## What is an Embedded System?

{{< columns >}}

![pos](/pos.png)

{{< attribution >}}

[TODO] need source

{{< /attribution >}}

<--->

These little devices are *Pocket Operators* made by Teenage Engineering, they're realatively inexpensive synths that can be chained together, and I think they're a great example of what an embedded system is, but for the sake of clarity, here's how wikipedia defines it:

{{< quote Wikipedia>}}

An embedded system is a computer system—a combination of a computer processor, computer memory, and input/output peripheral devices—that has a dedicated function within a larger mechanical or electronic system.

{{< /quote >}}

{{< /columns >}}

Alright, so how do these pocket operators show this well? Well, the pocket operators have a *Microcontroller* on them as well as a fair amount of things connect to it, but let's hang on for a second- Microcontroller? Microcontrollers, sometise written as *μC*, *MCU*, or just *micro* are the heart of most embeed projects

{{< quote "Wikipedia, minor edits" >}}

**A microcontroller** is a small computer contained in an integrated circuit (IC) chip. A microcontroller contains one or more CPUs (processor cores) along with memory and programmable input/output peripherals. Microcontrollers are designed for embedded applications, in contrast to the microprocessors used in personal computers.

Microcontrollers are used in automatically controlled products and devices, such as automobile engine control systems, implantable medical devices, remote controls, office machines, appliances, power tools, toys and other **embedded systems**.

{{< /quote >}}

Alright, so that's a lot of words. The gist of it is you're getting a tiny computer that's roughly comprable in specs to a computer from the 80's, but is inexpensive (usually under $0.25, espcially in bulk) and that has a ton of pins that you can connect other things to- LEDs, motors, buttons, etc. These computers (usually) don't run a full operating system, and instead (usally) just run a loop of your code forever. They also usually have some special pins that can do things like read analog voltages, communicate over SPI or {{< katex >}}\text{I}^2 \text{C}{{< /katex >}}, trigger interupts, or be used for PWM (Puse Width Modulation).

{{< columns >}}

Probably the most commonly reccomend microcontroller for begineers is the ATMEGA328P on the Arduino Uno. The 328P and Uno are both... not awesome. But, for first learning and getting your toes wet they're fine.

It's worth noting, the μC itself is the Atmega328P- the really big black rectangular chip. The board that breaks these pins out to the headers for you to plug wires into, provides the USB connection, power filtering, reset button, etc. is the Development Board- in this case it's been named the Arduino Uno.

<--->

![](/duino.jpg)

{{< attribution >}}Image by [Sahand Babali](https://unsplash.com/@sahandbabali){{< /attribution >}}

{{< /columns >}}

{{< columns >}}

![](/pi.jpg)

{{< attribution >}}Image by [Vishnu Mohanan](https://unsplash.com/photos/rZKdS0wI8Ks){{< /attribution >}}

<--->

Sometimes the lines for what's a microcontroller or embedded system can get blurry. This is espically the case when using development board on a finished product or when a full computer that runs a desktop OS is involved.

For exmaple, the Raspberry Pi, pictured here, is an embeed system; *however*, it has a full blow ARM System On a Chip (SoC) that can run Linux and be used as a full desktop computer. More confusing still, the Pi itself has multiple embedded systems *in* the embedded system- for exmaple the dedicated chip on the Pi3b+ that provides the ethernet connectivity could be considered part of it's own embedded system. Yet, the Pi has General Purpos Input Output (GPIO) pins like most microcontrollers.

{{< /columns >}}

All of this is to say, don't worry about it too much. As you work with it more, you'll learn the differences. This is all just jargon anyway, and sometimes not everything fits cleanly under a single label. Instead, you should focus on what matters: Knowing what parts to use, what features they offer, and how to program them to do what you want.

## PWM, SPI, I2C, What's going on?!

[Driving a PAL TV over RF thanks to PWM harmonics (Hackaday)](https://hackaday.com/2020/08/26/driving-a-pal-tv-over-rf-thanks-to-pwm-harmonics/)

## Playing around - Hello World and blink

[TODO] breadboards, don't cheap out

## Making an Embedded System project - 1 - Humidity Sensor

## Making an Embedded System project - 2 - MIDI Controller (with piezzo)

## Making an Embedded System project - 3 - Stepper Motor Music

adapted from floppy drives, but less expensive

---

[TODO] [From Zero to main() (Interupt)](https://interrupt.memfault.com/blog/tag/zero-to-main/)

## Real Time Operating Systems

RIOT-OS, MBED, etc

[TODO note, MBED was used on the euclidean drum project for its event queue]

talk about scheduling (CFS, etc)

## Other weird and cool projects:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">a lot of people have been mocking this video but having tried it, I can confirm this is actually the most reliable way to fake keyboard events on windows 10. <a href="https://t.co/kTz5a6YlTI">https://t.co/kTz5a6YlTI</a></p>&mdash; foone (@Foone) <a href="https://twitter.com/Foone/status/1247233159596367883?ref_src=twsrc%5Etfw">April 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Of Course It Leaks!](https://groups.google.com/forum/message/raw?msg=comp.lang.ada/E9bNCvDQ12k/1tezW24ZxdAJ)

["The Simplest of Pseudo Random Number Generators" - Hackaday](https://hackaday.com/2019/04/23/the-simplest-of-pseudo-random-number-generators/)

[Reverse Engineering an Unknown Microcontroller (Dmitry.GR)](https://dmitry.gr/?r=05.Projects&proj=30.%20Reverse%20Engineering%20an%20Unknown%20Microcontroller)

# Chapter 14.1 - Embedded Hardware comparison

[TODO, Pi V RockPi4 V Arduinos V x86, ref architecture information from chapter 3.3]

mention pi sd card performance / stability limits and pi advantages in how common it is

## Arduino ≠ Atmega32p

{{< tip >}}

I **really** want to make this clear: Arduino is a framework. Not a specific hardware platform. Different Arduino devices can run with wildly different specs and support wildly different features.

{{< /tip >}}

## STM 32

[The 'Black Pill' (STM32F411) is replacing the 'Blue Pill' (STM32F103) (Hackaday)](https://hackaday.com/2021/01/20/blue-pill-vs-black-pill-transitioning-from-stm32f103-to-stm32f411/)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">First up is the brains of the operation: an STM32F103. Not a lightweight chip: It&#39;s a Cortex M3 @ 72MHz. It&#39;s got 256kB of flash and 48kB of RAM and that&#39;s a 100-pin TQFP package!<a href="https://t.co/oPCeo7XMpe">https://t.co/oPCeo7XMpe</a> <a href="https://t.co/niDPuIFBPT">pic.twitter.com/niDPuIFBPT</a></p>&mdash; Stargirl 🌠 (@theavalkyrie) <a href="https://twitter.com/theavalkyrie/status/1328555704676913153?ref_src=twsrc%5Etfw">November 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Getting Started in Robotics (Arthur Allshire's Blog)](https://allshire.org/getting-started-robotics/)



## Things you'll want to know exist that I don't know where else to put:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qKy98Cbcltw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>