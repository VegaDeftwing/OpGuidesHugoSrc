# Meta

## Mid-Side

https://www.youtube.com/watch?v=dD6_Bajj2DI

## Gain-Staging

Especially in hardware, doing repeated ½\*2*½\*2\*½\*2 will not give you the same signal back out. Why? Because Every time you need to amplify your signal, you add noise. Worse, every time you do one of these it-should-balance-out-trips you're at risk of clipping.

Lets look at a real example in my setup.

I have my guitar signal come into my first pedal at roughly [TODO]Vpp. After that first pedal, the signal is boosted (internally to the pedal) to [TODO]Vpp. Eventually, I run into my only digital pedal, the Empress Effects Zoia. It will clip if the level exceeds [TODO]Vpp. That signal then needs to come into my eurorack, where signals need to be roughly 10Vpp to be processed in a sane way. That means we need to amplify by [TODO]x. But that's a lot of gain, so just a slight wiggle of that knob and we clip, and this now means that at each stage the volume needs to be kept right for that equipment.

## Impedance Matching



## Playing the Feedback Loop



## Parallel Processing



### Frequency Split processing



### Dealing with phase



## Actually playing the instrument

Effects can be awesome, but the instrument itself shouldn't be ignored. Ex: Playing harmonics on a guitar.