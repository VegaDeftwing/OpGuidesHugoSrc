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

## Playing around - Hello World and blink

Alright, so you have a microcontroller, presumably on a dev board, maybe even afforementioned Arduino Uno (though serisouly, the 328p is trash- coming back to that in a bit) but you want to make it *do something*. Generally, the first thing you'll want to do with a devboard is the exact same as you do when learning any programming language, make it say "Hello World". Now, this is pretty easy, if you have a controller that can run the arduino framework (this is more than just boards from Arduino- Arduino the framework runs on a bunch of other boards that aren't made by Arduino the foundation), you can download the Arduino IDE, write this code:

```c++
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("Hello World!");
}

void loop() {
  // put your main code here, to run repeatedly:
}
```

connect your board, press upload, and if you go to *Tools → Serial Monitor* you should see the the arduino send back the words "Hello World!". Now, this is super not exciting as it doesn't reall seem any different than just running similar code on your computer. However, keep in mind that code spitting out that text *didn't* execute on your computer. It ran on that lil' board and then that text was sent back over the usb cable.

But, there's a few things I want to adress first:

1. The arduino IDE is fucking garbage (for now, it should be getting better with Version 2.0)
2. This code leaves a lot obsucerd. Where is `Serial` from? What's up with `setup()` and `loop()` instead of `main()`? Why `9600`?

So, to answer 1. - Yeah, don't use the Arduino IDE. For now, the best option is [PlatformIO](https://platformio.org) on VSCode.

To rapid fire 2. - `Serial` is from a library that gets installed by default with Arduino and by using a call to it in your code, the Arduino IDE links it in for you, without the need for `#include` like we saw back in the low level programming chapter. This may sound nice, but it's actually really annoying. There's a bunch of libraries like this and often you won't realize you're even using something non standard- like `setup()` and `loop()` Arduino actually has a file sitting elsewhere that literally has the code:

```c++
#include <Arduino.h>

int main(void)
{
    init();

#if defined(USBCON)
    USBDevice.attach();
#endif
    
    setup();
    
    for (;;) {
        loop();
        if (serialEventRun) serialEventRun();
    }
        
    return 0;
}
```

which, while may look a bit weird, you'll see does contain our typical `main()` and just executes `setup()` once then whatever we put in `loop()` in an infinite for loop. Really, this abstraction is just in our way. There's no need for these libraries to sit between us and the code!

Finally, just to be though, that `9600` which may seem like a magic number, is the baudrate the board was sending data to the computer at. `9600` is stupidly slow, yet is the default that many programs with the arduino framework will use- most boards can do `115200`, which is 12 times faster.

All of this is to say, a lot of "Makers" will only learn to use the Arduino functions and way of donig things. Yeah, they might make some things easier, but long term they'll seriously limit what you can do. There's often nothing wrong with this! Sometimes, a quick n' dirty solution will work. If you just want to make some LEDs blink or switch a realy to turn something on and off, sure. The problem is, sooner or later you'll find something where you need fast response times and need to use interupts, or where you need to get fine control over PWM and need to twiddle bits, and the Arduino library will make doing so a massive pain in the ass.

So, let's try this again, this time, don't use the arduino IDE, but grab PlatformIO and make a new project. I'll assume that most people reading this are- *despite how much of a massive pile of shit they are*- using an Arduino Uno (or clone). If that's all you have, frankly, the Arduino library is still your best bet for *some* things, so when you make a new project because it does provide some things that are a total pain to do by hand, like setup afforementiond `Serial`. That said, the other library that works in PlatfromIO for the Uno, [Simba](https://simba-os.readthedocs.io/en/latest/index.html) is pretty cool and will abstarct out a lot of that mess too. The biggest reason to use the Arduino framework is that there's a mountain of libraries written for it, so if you get a lilttle board for RFID or tempature sensing or GPS or whatever there's probably already a drop in library with example code. But, frankly, the 328P is so underpowered and old that I just can not justify learning on it. Instead, I'm going to reccomend the STM32F411CE - or, as it's more commonly known the "Black Pill"

{{< tip >}}

If you're buying one to follow along, be careful. There are varients of the BlackPill that have the F401 or F103. The F103 boards almost universally have issues, so at the very least make sure it's an F401 or F411.

{{< /tip >}}

But, I hear you asking, **"why?"**

|                | Arduino Uno/Nano (328p)                                      | BlackPill (STM32F411CE)*         |
| -------------- | ------------------------------------------------------------ | -------------------------------- |
| Price          | ~$6.00                                                       | ~$6.00 + ~\$7 debugger           |
| № Bits         | 8                                                            | 32                               |
| Clock Speed    | 20Mhz                                                        | 100Mhz                           |
| Program Memory | 32Kb                                                         | 512Kb                            |
| Ram            | 2Kb                                                          | 128Kb                            |
| I/O Voltage    | 5V                                                           | 3.3V (lots of 5V tollerent pins) |
| Debugging      | Kinda, but not really.                                       | With ST-Link                     |
| USB            | that big ol' printer style on the uno, or micro-usb on the Nano | USB-C                            |

{{< attribution >}}*The STM32F4**0**1CE boards are a smidgen worse, but honestly, they're both so good it probably won't matter to you. Get whatever is cheaper.{{< /attribution >}}

If that doesn't convince you, then I don't know what will. Oh, and it still supports the Arduino framework. Now, to be fair, there's a lot more to this than these specs. The 328p will almost certainly have better library support than the BlackPill, the Uno has a bunch of snap-on accessories, and some things do actually work better with the 5V i/o of the Uno. You'd also want to consider what protocols and inputs the boards can handle. In this case, the BlackPill is basically better in everyway in that front too. If you were looking at other options though, some boards may not have analog input pins, for example, and that might be a deal breaker for some projects. I'll talk more about how to find the right μC / Devboard for your project later, for now, let's move on assuming you have the BlackPill infront of you.

So, let's try making our `Hello World!` again.

[TODO] Blinking the onboard LED

[TODO] Using the Arduino framework in PlatformIO, then setting up STM32CubeIDE because it's actually good. But explain that PlatformIO is still great because of support for ATmega, ESP8266/32, bigger STM boards like the STM32F7xx, Longan Nano, BBC Micro:bit, pi pico

## PWM, SPI, I2C, What's going on?!

{{< tip >}}

For this you'll probably actually want a few devices to experiment with. Unless you've already gone out and gotten a kit of stuff, I **strongly** reccomend against those "Lean Arduino" kits, and instead insist you buy the parts yourself. It's a tad more epensive just to get started, but honestly a lot of the kit shit, is, well, shit. </br></br>For this section, I'll be talking about and using a strip of WS2812b RGB Leds (~\$5), the MPU GY-521 Gyroscope/Accelerometer (\$1), a HC-SR04 ultasonic distance sensor ($5), and a ENC28J60 ethernet breakout (~\$8), as well as various parts from the [Digilent Analog Parts Kit](https://store.digilentinc.com/analog-parts-kit-by-analog-devices-companion-parts-kit-for-the-analog-discovery/) (~\$55) and breadboards (don't cheap out, get good ones ~\$11) that I reccomended earlier. I do realize this makes the total cost probably peak a smidge above the \$100 mark. Sorry ¯\\ \_(ツ)\_/¯

{{< /tip >}}

Alright, so making the board send text to the computer or blink an LED is cool and all, but, that's not really all that insteresting. Let's go further, lets... uh... blink a **different** LED!

[TODO] LED pull up/down

[TODO] PWM dimming, show in slow-mo

[TODO] WS2812b, but without a library

Alright, hopefully you're not totally bored of making lights flash, let's have a bit more fun! We'll start by looking at that Ultrasonic sensor

[TODO] ultrasonic sensor, basic digital input and timing, interupts, etc.

Now, let's look at that MPU GY-521 Gyroscope/Accelerometer

[TODO] i2c? SDA, SCL, and interupt handeling (not on all devices)

So, that's i2c, which is nice, but sometimes you'll want to talk to a device with *full duplex* communication. "*Full duplex*?" I hear you ask. Well, While {{< katex >}}\text{I}^2 \text{C}{{< /katex >}} is a great protocol and is easy to use, it's also only *half duplex* this means that, like a radio, only one side can talk at a time. *Full duplex* communication methods let both sides talk at once. While in a phone call this might be chaotic, there's often times where it's helpful to be able to send data to a device while we get data from it- for example, when working with that ethernet adapter I said we'd be using above. For ethernet, this is often necessary, as with TCP, a networking protocol I'll dive into in the programming chapter, you need to repeated send replies saying "Yep, I got what you last sent, keep em' coming" while still listening for more data.

[TODO] SPI Ethernet

[TODO] mention UART & CAN bus

[Driving a PAL TV over RF thanks to PWM harmonics (Hackaday)](https://hackaday.com/2020/08/26/driving-a-pal-tv-over-rf-thanks-to-pwm-harmonics/)

## Project 1 - Calculator

[TODO] diode matrix inputs, LED matrix outputs (7-seg), beeper, 

## Project 2 - MIDI Controller

[TODO] Gyro + photo-resistor + a few knobs & buttons

## Project 3 - ADC to the DAC

[TODO] ADC → μC →DAC , floating point

## Project 4 - LEDs... again?

[TODO] Power with transistors, filtering, PWM. Color input from temp and magnetic field sensors

## Project 5 - Euclidian Rhythms

[TODO] Power with high, spiky loads, code with events and scheduling, watchdogs- using stepper, servo, and solenoids

## Project 6 - The Epochalypse

<img src="/Year_2038_problem.gif" style="-webkit-filter: invert(.87);" alt=" ">

[TODO] low power (sleep states), graphics (eink), RTC

only 24 most significant bits, which should only change every 255 seconds, or every 4.25 minutes. Plenty of time to sit in sleep mode

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

## Arduino ≠ Arduino

{{< tip >}}

I **really** want to make this clear: Arduino is a framework. Not a specific hardware platform. Different Arduino devices can run with wildly different specs and support wildly different features, and not all devices that run the Arduino framework are made by the Arduino foundation. The Arduino Uno (ATmega328p) is both an Arduino foundation project *and* runs the Arduino framework. The STM32 BlackPill, NodeMCU, PiPico, etc. are all *not* made by the Arduino foundation, but can run the Arduino framework.

{{< /tip >}}

## STM 32

[The 'Black Pill' (STM32F411) is replacing the 'Blue Pill' (STM32F103) (Hackaday)](https://hackaday.com/2021/01/20/blue-pill-vs-black-pill-transitioning-from-stm32f103-to-stm32f411/)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">First up is the brains of the operation: an STM32F103. Not a lightweight chip: It&#39;s a Cortex M3 @ 72MHz. It&#39;s got 256kB of flash and 48kB of RAM and that&#39;s a 100-pin TQFP package!<a href="https://t.co/oPCeo7XMpe">https://t.co/oPCeo7XMpe</a> <a href="https://t.co/niDPuIFBPT">pic.twitter.com/niDPuIFBPT</a></p>&mdash; Stargirl 🌠 (@theavalkyrie) <a href="https://twitter.com/theavalkyrie/status/1328555704676913153?ref_src=twsrc%5Etfw">November 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Getting Started in Robotics (Arthur Allshire's Blog)](https://allshire.org/getting-started-robotics/)

