# Chapter 43 - Ham Radio

<!-- TODO: https://github.com/jopohl/urh -->

<img src=" /eng/radioart.png " alt="radioart" style="zoom:50%;" />

{{< attribution >}}

'137Mhz' by [u/CashewHut](u/CashewHut)

{{< /attribution >}}

Amateur or "ham" radio is a great hobby to get into for electronics minded people. You can get into the radio hobby without a license, but generally to transmit anything you'll need to take a test to prove you know a reasonable amount about the equipment, electricity, and regulations.

Here in the US, this means taking a multiple-choice test for ~$15. You can actually see the real question bank at https://hamexam.org. Once you have a license, you'll be given a call sign. For example, `KA0XYZ`.

It is not possible for me to cover all the prerequisite knowledge on this page, but the internet is vast and YouTube endless. [newhams.info](https://newhams.info/category/amateur-radio/) is a decent place to start.

Instead, I want to point you to some interesting things you might want to play with and some equipment recommendations.

## Equipment

At the time of writing (Nov 3, '24) the hand held starter transciver I'd recommend is a UV-K5 [due to how hackable it is.](https://spectrum.ieee.org/quansheng-uv-k5-hacking).

<!-- https://hackaday.com/2024/07/05/hacking-a-quansheng-handheld-to-transmit-digital-modes/ -->

If you're looking to do some crazy radio experimentation, software defined radios are also a ton of fun. The two big options currently are the HackRF One - for which you can find clones @ ~$120 - and the LimeSDR MiniV2, which is ~$400.

The Lime is more capable, but more difficult to use. The HackRF is easier, but significantly worse hardware. If you don't want to fight confusing software to start with, get the HackRF.

## Antennas

[TODO] 2.4Ghz patch antenna

[Slinky for 80M (Hackaday)](https://hackaday.com/2017/12/04/slinky-walks-down-stairs-and-picks-up-80m-band/)

[A Cleverly Concealed Magnetic Loop Antenna (Jenny List, Hackaday)](https://hackaday.com/2018/06/23/a-cleverly-concealed-magnetic-loop-antenna/)

## Other equimpent

[TODO] electronically tunable filters

## Misc. interesting Reading



LORA



[National Radio Quiet Zone](https://en.wikipedia.org/wiki/United_States_National_Radio_Quiet_Zone)


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">question of the day:<br>Analog TV is shut down in the US, right? so all the over-the-air TV is digital. And existing analog OTA frequencies are getting repurposed to other uses... so what am I seeing on UHF channel 60? it&#39;s got way more structure than the noise everywhere else. <a href="https://t.co/Jm9W9JsjgF">pic.twitter.com/Jm9W9JsjgF</a></p>&mdash; foone (@Foone) <a href="https://twitter.com/Foone/status/1240011033395073024?ref_src=twsrc%5Etfw">March 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< smalltext >}} [Archive.org backup of the above tweet](https://web.archive.org/web/20220117015416/https://twitter.com/Foone/status/1240011033395073024){{< /smalltext >}}

[Waveguides Explained (Jordan Louis Edmunds)](https://www.youtube.com/watch?v=r9-m17IPOco)

[How a Crystal Radio Works (RimstarOrg)](https://www.youtube.com/watch?v=0-PParSmwtE&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)

[So You Got an SDR (Twitch, DefCon28)](https://www.twitch.tv/videos/703442337) [(Defcon28)](https://www.youtube.com/watch?v=wDMsh7TJuqw)

[2200-meter band](https://en.wikipedia.org/wiki/2200-meter_band)

[Passive Radio with SDR (Stephan Cass, IEEE)](https://spectrum.ieee.org/passive-radar-with-sdr)

[Chattervox](https://github.com/brannondorsey/chattervox)

[Monitor Airplane Traffic with a Raspberry Pi and SDR](https://brianchristner.io/monitor-airplane-traffic-with-a-raspberry-pi/)

[SDR: Digital Adventures in Shortwave Radio (Justus.ws Blog)](https://www.justus.ws/tech/sdr-adventures-in-shortwave/) 

[IRC over LORA for when things go really south(Tom Nardi, Hackaday)](https://hackaday.com/2020/12/12/irc-over-lora-for-when-things-really-go-south/)

[ADS-B Visualizer - adsb.exposed](https://adsb.exposed/?zoom=5&lat=52.3676&lng=4.9041&query=11aea631085a55a6bc0f9b574d7b6c16)

[Scra](https://github.com/myriadrf/ScratchRadio)

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
> If the cable is shielded, you shouldn't need more than 2 ferrites, one at each end.
>
> Source: I've been down this road before…
>
> Edit: Here are some fun articles to read:
>
> https://www.yoctopuce.com/EN/article/usb-cables-shielding-matters-as-well
>
> https://www.totalphase.com/blog/2020/05/what-are-the-guidelines-for-testing-ground-and-shield-resistance-of-usb-cables/
>
> You can get a lot more in depth with the testing if you want… or just buy a higher quality cable :D

?> I've actually set this up using a HackRF and Rock64. It's pretty neat. Just be aware the ADS-b, the radio signals you'll be picking up to do this, are very line-of-sight so you might need to plop the antenna on your roof or something.

<img src="/eng/MorseDecode.webp" alt="Morse Code" style="zoom:50%;" />

https://woad.sumusltd.com/home

## Meshtastic

[Long Range Relay](https://hackaday.com/2024/04/03/long-range-meshtastic-relay/)

[Decoding with GNURadio](https://hackaday.com/2024/06/26/decoding-meshtastic-with-gnu-radio/)




