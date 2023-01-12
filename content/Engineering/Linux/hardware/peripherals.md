# 9 - Peripherals

<script>
    document.getElementById("hardwareMenu").open = true;
</script>
## USB

The below two videos do a really good job of covering USB, but there's one thing I want to add: Some cables lie! They don't have data pins at all, and instead are only carry power. This can be a massive pain when you have a box of cables and need to know which ones are "real" cables.

While there are testers available on Amazon, almost all of them are USB2. While https://github.com/alvarop/usb_c_cable_tester isn't perfect - It won't tell you if cables are crossed, though that's really rare - it's pretty good. Plus, ordering it will give you experience ordering a PCB with assembly service, which will be a good experience for when you want to design your own boards. 

<iframe width="100%" height="500" src="https://www.youtube.com/embed/36CKsP9YQ1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="500" src="https://www.youtube.com/embed/gShRBsahzXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**BUT WAIT! THERE'S MORE!** USB 4.0 is a thing now, butttt it's actually based on Thunderbolt 3 and is only on USB-C. But what is Thunderbolt, then? Let's move on

{{< attribution >}}

... but for the really nerdy that want more, see [USB3: why it's a bit harder than USB2](https://lab.ktemkin.com/post/why-is-usb3-harder/), [How Does A USB Keyboard Work? (Ben Eater, YouTube)](https://www.youtube.com/watch?v=wdgULBpRoXk), and [How does USB device discovery work? (Ben Eater, YouTube)](https://www.youtube.com/watch?v=N0O5Uwc3C0o)

{{< /attribution >}}

## Thunderbolt, FireWire, PS-2?

Alright, so we'll get to Thunderbolt in a second, but first, let's look at how we got here:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/4mi0kLLLAOs?list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

okay, so that's the really legacy stuff, but you may also see some FireWire <img src="/common/FireWire_symbol.svg" alt=" " height="20em"> (IEEE 1394) devices lying around. FireWire was *mostly* found on gear made for Apple devices, but it can be found on generic hardware too. It's a bit faster than USB 2.0 but still dramatically slower than 2.0. To use it today, you'll probably need to add an expansion card to your computer, but because of that added cost, sometimes you can find good deals on FireWire accessories- just be aware that drivers with FireWire are often a massive pain in the ass.

Finally, then, we can get to Thunderbolt!

[TODO]

## Keyboards

HID or Human Interface Device, is the standard over which most mice, keyboards, and game controllers talk to the computer. Unfortunately, it's also a pretty lame standard. You can't just input arbitrary Unicode or send fancy data back to the keyboard to control fancy RGB lights, because of this it's common to need extra drivers per device

[TODO]

5pin din, PS2, USB

[What Happens When (Github)](https://github.com/alex/what-happens-when)

<video width="100%" src="/memes/morse2-spiffyapprehensivecockerspaniel.mp4" controls></video>

{{< attribution >}} by [u/veggiedefender](https://www.reddit.com/r/ProgrammerHumor/comments/ft97ie/typing_in_morse_code_by_opening_and_closing_my/) {{< /attribution >}}