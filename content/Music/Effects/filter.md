## Filters (LP, HP, BP, Notch)

<script>
    document.getElementById("effectMenu").open = true;
</script>

https://www.perfectcircuit.com/signal/learning-synthesis-filters

### Low Pass Filters

Low Pass filters do what you think, they let the low frequencies pass and cut out the high frequencies. As with most filters, this will typically not be a sharp cutoff but instead be a gradual fading of the higher frequencies. Despite this, there is still a point called the cut off frequency, which is defined as the point where the signal is cut by 3db (what this means is discussed below). It's also pretty common for Low pass filters to have some resonance, where the frequency right at the cut off has a bit of a bump, as can be seen in this gif:

![lfofilt](/filter.gif)

#### Slew Limiting

#### Effect on Square Waves

### High Pass Filters

High pass filters act pretty much the same as low pass filters, except they do they cut the lows and pass the highs. High pass filters are ironically often actually used to give a bump in the bass using the resonant peak.

### Band Pass Filters

There's two kinds of bandpass filters, one, is a Lowpass and Highpass filter in series, where there's only a band left that can pass giving two potential resonant peaks, and then theres band pass filters which are more 'true' band pass filters that have a resonant peak in the middle.(need to confirm this)

### Notch Filters

Again, as the name implies, notch filters create a notch in the sound. Often used to correct for an issue in the sound, such as removing a 60hz hum. In Notch filters the resonance control actually changes how steep the notch is, so low resonance (Low Q) will cause the notch to be wider as the slope isn't very steep, but a high resonance (Q) will let you really pick out a specific frequency.

### Peak Filters

### Low and High Shelf Filters

Unlike all the filters until now which have a resonant peak, shelf filters actually boost or lower the volume all the way to the cut off frequenecy. Here, (1) is a low shelf filter, boosting all the lows (by a lot more than you'd ever actually want to) and (8) is a high-shelf set to cut the highs. for some context, (5) is a peak filter. With a normal Low/High pass filter, adding resonance, (dragging the point above the +0db line in this graph) would only make make a spike like this at the cut off point, not make a 'shelf'.

![](/filtershelves.jpg)

### Comb Filters

### All-Pass Filters (Phaser)

### Types of Filters

#### State Variable (Steiner-Parker)

#### Transistor Ladder

#### Diode Ladder

#### Sallen-Key

#### Operational Transconductance Amplifiers (OTA Filters)

CEM3320

#### Chebbychev

#### SEM

#### Wasp

#### Formant Filters

#### Polivoks

### Slope, Pole-Zero plots, dB

different analog models

### Filter Resonance (Q)

#### Self Oscillation

Filters with resonance can often be put into self oscillation by turning the resonance above a threshold for normal operation. In digital filters, you may need to give the filter some sort of brief input before it starts oscillating. With analog hardware, noise in the system, even if not normally noticeable, is typically enough to start the process. Most filters will output a pure sine wave when self oscillating. 

Here I start by feeding this filter an input from an oscillator module which is off screen, and sweep though the frequencies. Then I turn up the resonance a bit, do another sweep. Then I unplug the oscillator and sweep frequencies, you can see that it is silent. Finally, I turn the resonance above the self oscillation threshold, and you can hear output.

> Note, this module is a multi-mode filter, it's top 4 outputs are various poles of a low pass filter and the bottom four outputs are a highpass, 'band bost + notch', Phase-shifter, and Band Pass, respectively. Here, you're hearing the output of the band pass filter. The sound of self oscillation will be a sine wave for any of the outputs though. 

<iframe width="100%" height="500" src="https://www.youtube.com/embed/_12dHnLS474" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Pinging Filters

<script>
    document.getElementById("effectMenu").open = true;
</script>

This filter module actually has a dedicated ping input, which is why I can 'ping' it with a square wave, but typically you'd want to ping filters with a trigger (a very short pulse) rather than a square wave (which is high as much as it is low). You can think of this as the difference between striking a drum head and slapping a drum, but keeping your hand pressed on to the drum's skin when you do. Clearly the latter is going to mute the sound.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/11rZJGvAimk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Auto Wah

an Auto Wah or Envelope filter uses an envelope follower to control a filter's cut off. Essentially this means how loud you play will change the filter. These are normally used on guitar, but you can put them on anything really.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Dp1s0Ow2BJU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Equalizers

### Parametric

### Graphic

### Dynamic

### Fixed Filter Banks

## Phaser

![phase](/phase.png)
