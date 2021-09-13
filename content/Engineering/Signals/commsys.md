# 28 - Communication Systems

{{< tip >}}

This chapter is currently just a stub. I'm currently taking a comm systems class at Uni and will be putting the results of my notes as well as external resources into here at some point.

{{< /tip >}}

## What is a communication system?

For the purposes of this page, we're talking about systems that transmit signals over a medium- so that might be your voice over the air, a radio signal though the vaccuum of space, or ultrasonic waves under the water as sonar.

Generally, these systems are made up of a few parts:

{{< columns >}}

{{< mermaid >}}
graph TB
    A[Source] --> B[Transmitter]
    B --> C[Channel]
    C --> D[Reciever]
    D --> E[Output]
{{< /mermaid >}}

<--->

The **source** is just whatever is making the original signal- maybe it's your voice

The **output** is, ideally, the same as the input signal, just on 'the other side'. If the system is a phone network, this is your voice having gone though the other person's phone's speaker

The **channel** is the medium the signal is going to travel though- so in the above examples air, vaccum of space, and water. Pretty much anything goes here. This might even be a copper wire or fiber optic- not all signals we're interested in are wireless. The channel is the whole reason this field of study exists- channels typically add problems that we need to solve. Usually, this problem is noise and distortion.

That just leaves the **Transmitter** and **Reciever**:

{{< /columns >}}

### The Transmitter

The transmitter coverts the signal into a form sutible for transmission though the channel. Typically, this is done by modulation the source signal with a high frequency signal. Two of the easier methods to understand for this are **amplitude modulation** or AM and **frequency modulation** or FM. We'll look at both in detail in a bit.

The channel here comes, again, from the channel. You'll always be limited in **bandwidth** and **power**, and you'll need to design your system to avoid **noise** and **interference** all while keeping complexity and price as low as you can. We'll talk about all of these things in more detail later.

### The Reciever

The reciever grabs the signal from the channel and undoes whatever modulation we did to transmit it, recovering the original signal. While at first we'll assume an ideal reciever, it's worth noting that like the channel, the reciever can add noise too.

### What if it's Digital?

{{< columns >}}

{{< mermaid >}}
graph TB
    A[Source] --> B[Source Encoder]
    B --> C[Encryption]
    C --> D[Channel Encoder]
    D --> E[Digital Modulator]
    E --> F[Channel]
    F --> G[Digital DeModulator]
    G --> H[Channel Decoder]
    H --> I[Decryption]
    I --> J[Source Decoder]
    J --> K[Output]
{{< /mermaid >}}

<--->

This looks a lot more complicated, but it's actually not all that bad. Basically, the only differnce here is that we're taking our analog input message (our voice, for example) and turning it into a digital message - one made out of 1's and 0's.

So, the signal still comes in the same way at the source, then we put it through the **source encoder** now we've digitized the signal (it's made up of 1's and 0's) then it goes though the **channel encoder** at this step we add redundancy. Why? Well, depending on a lot of varibles, we can pretty sure not all of those's 1's and 0's will get there as we want, some 0's will become 1's and vis-versa. for a very stupid example, imagine we just send each bit 3 times, so if we got 011 out of the source encoder, we'd send 000111111 out of the channel encoder. Now, if one of those bits flip, we're safe as we can just assume it's whatever the majority of those three bits are, that is if we got 000101111 we'd still know the original message was 011.

Moving on, the stream of bits coming out of the the channel encoder is sent though the **digital modulator**. At this stage we're treating the digital signal as analog again. Maybe we're using frequency shift keying (FSK) and that means for 0's we send a pulse at one frequency and 1's a pulse at a different frequency. Maybe we're doing amplitude modulation, so a strong signal is a 1 and a weak signal is a 0. Regardless, this method of transmission is the digital modulator's job. This signal then sent though the **channel** like normal.

On the other side, we just do this process in reverse, the **digital demodulator** takes whatever way we used to represent the digital signal in an analog way and spits a stream of bits back out. The **channel decoder** undoes whatever we did to add redundancy, getting us our basic stream of bits that represent our original signal out.

{{< /columns >}}

Finally, the **source decoder** takes the digital signal and turns it back into the analog signal we put in.

Wait a second!? I hear you say, what about **encryption** and **decryption**? Those stages just do complex math on the stream of bits that is really hard to reverse unless you know a secret key. This makes it so that people eavesdropping on the channel can't get our original messages back out without permission. It should be noted that there are ways to secure a normal analog signal like this too, but the technology is just much more robust and cheaper in digital, - many analog methods of securing a signal are easy to break though - so you don't usually see analog communication systems bothering to obfuscate their messages at all.

## Note on Signals & Systems

You absolutely need to understand signals and systems for this page to make any sense. I'll still point out common places you can make mistakes, but you'll need to know what a Fourier transform is and how to use it

## Amplitude Modulation

### Double-sideband suppressed-carrier AM

[Wikipedia](https://en.wikipedia.org/wiki/Double-sideband_suppressed-carrier_transmission)

### Conventional Double-sideband AM

[Wikipedia](https://en.wikipedia.org/wiki/Amplitude_modulation)

### Single-sideband AM

[Wikipedia](https://en.wikipedia.org/wiki/Single-sideband_modulation)

## Transmission Power

## Frequency Modulation

## Phase Modulation

## Digital Modulation Methods

### ASK

#### OOK

### QAM



### FSK

#### MFSK

### PSK

### APSK

### PPM



## Multiplexing

### TDM

[Wikipedia](https://en.wikipedia.org/wiki/Time-division_multiplexing)

### FDM

[Wikipedia](https://en.wikipedia.org/wiki/Frequency-division_multiplexing)

### Packet Switching

{{< tip >}}

This is how most modern networking works, see the <a href="/engineering/networking/networking/">Networking</a> chapter!

{{< /tip >}}

## The Problem of Noise



## A Smidgen of Information Theory



