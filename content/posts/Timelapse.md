---
title: "Time lapse"
slug: "Time lapse"
author: "Vega Deftwing"
date: 2021-02-04
tags: technical
---

Super brief post about one of the more fun projects I setup recently: a lil' time lapse script

```
#!/bin/bash
CAM=$(v4l2-ctl --list-devices | grep C920 -A 1 | grep /dev | awk '{$1=$1};1')
#Uncomment the next line to verify it's using the correct device
#echo $CAM
ffmpeg -f video4linux2 -s 1920x1080 -i $CAM -ss 0:0:2 -frames 1 "/mnt/data/lapse/tl$(date +"%Y-%m-%d_%H-%M-%S").jpg"
```

I have multiple cameras on my system, but only wanted output from the better one, the C920. That's what line 2 is doing, finding the `/dev/videoX` device, where `X` is the correct number for the webcam

Line 5 takes the picture and saves it with the current date and time in the `/mnt/data/lapse` folder

Then, to trigger the script I have a systemd timer and service setup.

I have the timer and service files named fifteen.timer and fifteen.service respectively, and the script above is named fifteen.sh and is stored in `~/.config/fifteen.sh` This is so that I can add extra things do do on fifteen minute intervals if needed super easily. I also have an hourly.sh with a similar setup.

**fifteen.service**

```
[Unit]
Description=run ~/.config/fifteen.sh

[Service]
Type=simple
ExecStart=/bin/bash /home/vega/.config/fifteen.sh
```

**fifteen.timer**

```
[Unit]
Description=Take Hourly Webcam Picture

[Timer]
OnCalendar=*:0/15
Unit=fifteen.service

[Install]
WantedBy=timers.target
```



So with all of that setup, I can finally get poorly timed, slightly blurry pictures of myself drinking directly from a 2L bottle of Mello Yello automatically.

![Me taking a drink of mellow yellow](/tl2021-02-03_19-15-17.jpg)

{{< hint info>}}

Note, this picture has been resized by 50% for web, actual quality is a better

{{< /hint >}}