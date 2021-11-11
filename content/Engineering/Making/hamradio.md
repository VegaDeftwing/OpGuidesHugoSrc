# Chapter 42 - Ham Radio

TODO: https://github.com/jopohl/urh

<img src=" /radioart.png " alt="radioart" style="zoom:75%;" />

{{< attribution >}}

'137Mhz' by u/CashewHut

{{< /attribution >}}

LORA

2.4Ghz patch antenna

electronically tunable filters

[National Radio Quiet Zone (Wikipedia)](https://en.wikipedia.org/wiki/United_States_National_Radio_Quiet_Zone)

https://newhams.info/2017/02/17/rf-connector-types/

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">question of the day:<br>Analog TV is shut down in the US, right? so all the over-the-air TV is digital. And existing analog OTA frequencies are getting repurposed to other uses... so what am I seeing on UHF channel 60? it&#39;s got way more structure than the noise everywhere else. <a href="https://t.co/Jm9W9JsjgF">pic.twitter.com/Jm9W9JsjgF</a></p>&mdash; foone (@Foone) <a href="https://twitter.com/Foone/status/1240011033395073024?ref_src=twsrc%5Etfw">March 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[Waveguides Explained (YouTube)](https://www.youtube.com/watch?v=r9-m17IPOco)

[How a Crystal Radio Works (YouTube)](https://www.youtube.com/watch?v=0-PParSmwtE&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

[So You Got an SDR (Twitch, DefCon28)](https://www.twitch.tv/videos/703442337) [(Youtube, Defcon28)](https://www.youtube.com/watch?v=wDMsh7TJuqw)

[Radi-uhoh : What is this SDR thing and how do I use it?: Josh Conway (Youtube)](https://www.youtube.com/watch?v=jLVDgP4dQ)

[2200-meter band (Wikipedia)](https://en.wikipedia.org/wiki/2200-meter_band)

[Chattervox (Github)](https://github.com/brannondorsey/chattervox)

[Monitor Airplane Traffic with a Raspberry Pi and SDR](https://brianchristner.io/monitor-airplane-traffic-with-a-raspberry-pi/)

[SDR: Digital Adventures in Shortwave Radio (Justus.ws Blog)](https://www.justus.ws/tech/sdr-adventures-in-shortwave/) 

[IRC over LORA for when things go really south(Tom Nardi, Hackaday)](https://hackaday.com/2020/12/12/irc-over-lora-for-when-things-really-go-south/)

[A Cleverly Concealed Magnetic Loop Antenna (Jenny List, Hackaday)](https://hackaday.com/2018/06/23/a-cleverly-concealed-magnetic-loop-antenna/)

{{< columns >}}

<video controls width="80%">    <source src="/eng/kahviccradio.mp4"            type="video/mp4"> </video> <br>

{{< attribution >}}

Video courtesy of OH6BPL

{{< /attribution >}}

<--->

Here OH6BPL is using the [Computer Craft](https://www.computercraft.info/download/) Minecraft mod to mirror the settings of his radio!

{{< /columns >}}

[From u/irresponsible_owl on Reddit](https://www.reddit.com/r/amateurradio/comments/jt4crn/when_one_ferrite_doesnt_do_the_trick/gc3fwvk?utm_source=share&utm_medium=web2x&context=3), in response to a picture of a USB cable with a dozen ferrite cores on it:

> Are you sure the cable is shielded? One quick way to tell is to put a continuity tester on the outside metal parts of each end. If it beeps, the cable is likely shielded. I've seen tons of cables that aren't, where there's no connection between the jack covers - even though the USB specification says there must be. If there's continuity it doesn't guarantee it's shielded, but lack of continuity is a sure sign it's not.
>
> If the cable is shielded you shouldn't need more than 2 ferrites, one at each end.
>
> Source: I've been down this road before...
>
> Edit: Here are some fun articles to read:
>
> https://www.yoctopuce.com/EN/article/usb-cables-shielding-matters-as-well
>
> https://www.totalphase.com/blog/2020/05/what-are-the-guidelines-for-testing-ground-and-shield-resistance-of-usb-cables/
>
> You can get a lot more in depth with the testing if you want... or just buy a higher quality cable :D

?> I've actually set this up using a HackRF and Rock64. It's pretty neat. Just be aware the ADS-b, the radio signals you'll be picking up to do this, are very line-of-sight so you might need to plop the antenna on your roof or something.

<img src="/eng/MorseDecode.webp" alt="Morse Code" style="zoom:50%;" />