# 7 - Power Supply

<script>
    document.getElementById("hardwareMenu").open = true;
</script>

The Power Supply Unit or PSU does what you think. It takes power from the wall and turns it into power for the computer. This isn't the chapter on voltage and current, so I'll spare some of the details, but effectively you want a power supply that can deliver plenty of power and that has clean power. A given power supply usually has a rating like '500w' for 500 watts, but this is usually a bad indicator, as they could be referring to multiple things- you see a desktop power supply usually outputs multiple voltages (-12, +12, +5, +3.3) and each one of those lines will have a different maximum power output. Typically, the one that's most relevant is the +12 rail, as both the GPU and CPU will likely run on that and they're what draws the most power. So, you can actually check just this rail by taking the voltage (+12V) times the max current (amperage) on that line (let's use 20A) to see the max power (so 12*20=240 watts)

Also note that the power supply itself may be of varying quality, with the voltage 'ripple' and the efficiency being important as well. Voltage ripple occurs when the supposed-to-be 12V line instead outputs a signal that's varying a little, so let's say you measure the +12V line and it reads 12.2V now, then a minute later reads 11.8V, that's quite a bit of ripple when you expect a constant +12V. Generally you can trust the power supply is decent about this though, so long as the power supply is also pretty efficient. Telling efficiency is easy too, as there's a nifty specification that most PC PSU's have called "80 plus" and it's rated by a metal-value system, so an 80+ bronze power supply is already (typically) much better than one without the rating, and an 80+ Gold is even better, going on up to Platinum.

Most PC PSU's are in the ATX format, the same specification used to size motherboards, and the majority of desktops use a standard ATX power supply, though smaller systems may opt for one of the smaller standards such as SFX. Servers typically have their own power supplies which look a bit strange as they're basically the shape of an elongated brick, but they're like that so they can be easily swapped in and out. Often server power supplies are redundant so a new one could be put in while the system is still on in many cases.

Main takeaway here, if someone is talking about an ATX PSU they're talking about the power supply in a desktop. Often they're (less than safely...) used in other applications, as they're cheap and often easy to find used or salvaged from old systems.

[TODO] add pictures, ATX 12VO, don't use ATX for lab purposes, please. See battery/psu stuff from Linux, `powertop`, [Power Managment on Arch Wiki](https://wiki.archlinux.org/title/Power_management)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/i9ZnaA8DZDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Uninterruptible Power Supplies

[TODO]

<!-- TODO https://github.com/RRZE-HPC/likwid has some stuff that might be nice for power profiling -->
