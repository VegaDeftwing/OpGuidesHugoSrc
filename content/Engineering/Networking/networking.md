# Chapter 38 - Networking

Quick links

---

{{< columns >}}

* [Blip](https://github.com/apenwarr/blip) - Check latency
* [Speedtest.net](https://www.speedtest.net) - Speed test
* [myexternalip.com](https://myexternalip.com) - See your external IP

<--->

* [portchecker.co](https://portchecker.co) - Check if a port is open
* [crt.sh](https://crt.sh) - Certificate search

{{< /columns >}}

---

## The Basics

To get started, let's just get some basic terminology down and take a look at the bigger picture:

### Nodes

These are all the points in the network. There are *terminal nodes* and *intermediate nodes*.

*Terminal nodes* are things like your phone, laptop, desktop, and other user-facing devices, as well as servers, like would be used for hosting games or websites.

*Intermediate nodes*, are things that are internal to the network: Things like modems, hubs, switches, routers, etc.

### Links

Links are the interconnects between two nodes. Generally these fall into two categories: **Guided and Unguided**

*Guided* Links are those that only connect a few nodes (usually only two) and are typically physical, hard-wire links, often copper or fiber optic.

*Unguided* Links are those that propagate to multiple devices, usually though the air, like WiFi.

Not all Links can support the same bandwidth or throughput. In general, Coaxial is worse than Twisted Pair which is in turn worse than fiber.

<img src="/eng/nodes.svg" alt="nodes">

### Applications

These are the things that you want to do: Talk to someone via voice, text, or video; browse the web; download files; etc.

It can also refer to the specific program used to do these things, so like Chrome as your web browser or Zoom for video calling.

an [*API* (Wikipedia)](https://en.wikipedia.org/wiki/API) or 'Application Programming Interface' is what defines how two programs talk to each other. This doesn't have to be over the network, but often is.

### End Systems - Hosts/Server & Clients

Not everything fits the host/server and client terminology, but generally the host/server is the one that is sending data, and the client is the one receiving. Or, another way to look at it, the client is the one making requests and the host/server the one fulfilling them.

### Peer to Peer

In a Peer-to-Peer (P2P) network, the idea of server and client break down a little, as typically all of the users (peers) are helping to share the content around. The most obvious example is torrenting.

### Packets

While we could just send a continual stream of data down a wire, that has a lot of issues. For one, it makes it hard to share the wire with multiple people. Of course you could split the wire so each person gets a split amount of time on the wire (Time Division Multiplexing (TDM)) or, if the wire can carry a range of frequencies give each user a small portion of those (Frequency Division Multiplexing (FDM), which limits the throughput similarly), but both of these sorta suck as they assume a user will always be using their provided channel. Instead, we do a sort of Time Division, but by packet-izing everything. Basically, each stream of data you want to send get's broken up into manageable chunks called packets, and then these packets can be sent though the network. Now, if someone isn't using the network, it's free for others.

{{< columns >}}

It's worth noting, these packets typically have a *header* which carries some information about it, like what version of a protocol is being used, where it should go, and who it is from. Here, for example, is the full packet layout of an IPv4 packet, with the header being in the first 20 bytes.

<--->

<a href="https://commons.wikimedia.org/wiki/File:IPv4_Packet-en.svg#/media/File:IPv4_Packet-en.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/6/60/IPv4_Packet-en.svg" alt="IPv4 Packet-en.svg" width="100%" style="-webkit-filter: invert(.8);filter: invert(.8);"></a>

{{< attribution >}}Image by [Michel Bakni](https://www.wikidata.org/wiki/Q81411358), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0){{< /attribution >}}

{{< /columns >}}

### Routers and Switches

{{< speech big >}}

Heads up! This is a bit confusing, as the consumer "WiFi routers" you can buy typically have both a router and switch in them internally, as well as act as a WiFi access point - all, technically, <u>three different roles</u>.

{{< /speech >}}

Alright, so what are these routers and switches?

#### Routers

A *router* is the device that can

 1. Determine where data should go by use of a *routing table*. 

    Note: This includes differentiating between other, local machines and going out to the Internet

 2. Do Network Address Translation (NAT) (see [NAT traversal (Wikipedia)](https://en.wikipedia.org/wiki/NAT_traversal))

    Note: This is how networks can have a bunch of internal IPv4 IPs (usually 192.168.1.xxx) all be served by one external ip. This isn't necessary for IPv6, where each device can have its own external IP.

    {{< smalltext >}}... and, technically, you could have enough IPv4 addresses to not need NAT too, but that would be very expensive {{< /smalltext >}}

    {{< smalltext >}}</br>... also, sometimes you'll be behind two NAT's because of [CGNAT (Wikipedia)](https://en.wikipedia.org/wiki/Carrier-grade_NAT){{< /smalltext >}}

 3. Deal with congestion (if to much data is being sent to the router, how should it be handled?)

    {{< smalltext >}}... the answer is often just drop packets though.{{< /smalltext >}}

 4. Provide Quality-Of-Service (QoS) to prioritize certain applications

    {{< smalltext >}}... This sometimes breaks things {{< /smalltext >}}

 5. Act as a Dynamic Host Configuration Protocol (DHCP) server to assign ip addresses to devices

#### Switches

A *switch* lets you connect multiple devices together, but does so a bit intelligently as the switch itself figures out what destination port an incoming packet should go to. In a typical setup the switch will have one "upper level" connection going up the network (so, in a home network, to the router that goes to the internet) and many connected devices (potentially including other switches). Except for in some weird scenarios, a connection between two devices connected to the same switch will only need to pass through the switch, not go to the router and back.

Often, switches will have one or two high bandwidth ports (10Gbe, for example) along side many slower ports under the assumption that a server or the internet will be handling most requests. Sometimes, these ports may look different than the others, as they may be for [SFP modules](https://en.wikipedia.org/wiki/Small_form-factor_pluggable_transceiver) instead of the typical RJ-45 jacks seen with most ethernet cables.

If you're looking at getting a network switch, you'll see they come in two flavors: **Managed** and **Unmanaged.**

The majority of the cheap "I just need something to connect multiple devices" switches are **unmanaged.** The don't have any settings. You just plug your devices in and call it a day.

Then there are **managed** switches. These typically have some added features, like rate limiting some ports, allowing for [VLAN setups](https://en.wikipedia.org/wiki/IEEE_802.1Q). It's very uncommon to need these outside of business use.

You may also see the option to get a switch with [Power Over Ethernet](https://en.wikipedia.org/wiki/Power_over_Ethernet) (PoE) which is a ~~collection~~ clusterfuck of standards for powering a connected device via the same line that provides network connectivity - useful for security cameras, office phones, etc.

Note, technically there are also Ethernet Hubs, the key difference being the *lack* of a [forwarding table](https://en.wikipedia.org/wiki/Forwarding_information_base), and (mostly) just blindly merge data: "It has multiple input/output (I/O) ports, in which a signal introduced at the input of any port appears at the output of every port except the original incoming."([Wikipedia](https://en.wikipedia.org/wiki/Ethernet_hub)) (see IEEE 802.3). I've never seen one in use.

### Packet Loss

Sometimes packets in the network don't reach their destination. This can be for a variety of reasons. Maybe a switch along the line was overloaded and it's buffer was full, maybe it took a bad route, maybe you have crappy wifi. ╮(─▽─)╭. It happens. The percent of dropped packets vs total packets is called your packet loss.

### Bandwidth, Throughput, & Latency

One thing a lot of people confuse is **bandwidth** and **throughput**. The two are related, but they're not the same.

**Throughput** is how many bits of useful information you're actually getting out per second. This is the number you *probably* actually want. **Bandwidth** (quite literally how much of a frequency range you're using) is how much information the connection can <u>*theoretically*</u> transmit.

The easiest example of the difference here is a bad WiFi connection. You might have a good amount of bandwidth if you're using a nice silce of spectrum up near 5GHz, but if you're far away from the transmitter, near a running microwave, and your neighbor is using the same specturm for their Wi-Fi, you'll obviously have a lower throughput.

{{< details "What about bit rate and baud rate?">}}

There's also the idea of "bits per second" and "baud rate". The difference is bits is the true number of 1's and 0's you're receiving while baud is the number of *symbols* you're receiving. 

For example, say you want to send the message "Hello" in ASCII, which is
`01001000 01100101 01101100 01101100 01101111` And you're able to send that entire message in 5 seconds. As there are 40 bits in the message, your able to send **8 bits per second.**

However, let's say you're transmitting that signal over radio, and the wave you send looks something like this:

<img src="/eng/baud.svg" alt=" " width="30%">

This does show the same binary, we've just taken groups of two bits at a time and represented each as a different level in the wave. If you want to think of it another way, say we take that binary and make a little look up table:

00 = ░,
01 = ▒,
10 = ▓,
11 = █,

We can now convert it into ▒░▓░ ▒▓▒▒ ▒▓█░ ...

Assuming the message still takes 5 seconds, we're getting 20 baud, because we're able to send 20 **symbols** a second.

The point being, we're literally able to represent the same message with less symbols. We could of course make a special encoding where each character itself is it's own symbol to be transmitted, if we had that - if our symbols were the letters themselves, we'd be getting 1 baud - 1 symbol a second.

The number of **symbols** per second is the **baud rate**. Basically, this means if you're told two devices have the same baud rate that doesn't necessarily mean they both have the same bit rate (bits per second), which is probably the number you *actually* care about. The reason the baud rate is even important is because there's a bunch of fancy things we can do when transmitting signals where we can pack more information into less radio spectrum by using different numbers of symbols that are encoded as different frequencies, amplitudes, and phases. This is really into the weeds and not typically relevant to someone just trying to make a network out of existing equipment. 

Of course, in reality, it's not like we can just keep packing more bits into a given symbol to get faster rates. Typically, the trade off between how many bits are in a symbol and the rate you can transmit symbols works out to make things pretty even. Typically, if you see baud it's talking about serial communication, but it's still usually actually provided in bits/second because there is often only 1 symbol used per bit, so, it's confusing. Regardless, bit/s = baud rate * number of bits per symbol, but number of bits per symbol can be 1.

{{< /details >}}

You should also note that while you're internet provider may sell you 1000Mbit/s you probably won't actually be able to connect to very many severs at that speed, as they simply can't serve everyone at those rates. In my experience, the only servers I've seen handle very fast connections are YouTube for uploads and Steam for downloads. While it's not 100% right, it's not to far off to say that when you pay for a 1000Mbit/s plan, you're telling all the sites you connect to "You can send me 1000M bits a second", it's just that many sites will respond with "Cool. I can't actually go that fast though. Here's 20M bits a second".

Finally, with any connection you'll also have to deal with latency. In networking, this is typically called "ping time", which is simply how long it takes for a round trip - hence the more formal RTT for Round Trip Time. This time will vary depending on the distance from you to the target server/device and how many devices are between. A good sanity check is to ping a local device such as your router with `ping 192.168.1.1` (typically) where the result should be well under 1ms. Following this, you can try to ping a few websites, like `ping google.com` for example. For google.com, I get ~12ms, and for archlinux.org I get ~130ms. Note that some websites may not respond to ping.

Later I'll show you traceroute and derivative software (mtr, visual traceroute, etc.) that will help you see why a particular path may have a high latency.

### LAN Vs WAN

Local Area Network and Wide Area Network- on most home connections your LAN is the network *in your house* while the WAN is the internet at large, so the WAN port on your router is where you connect the cable from your Internet Service Provider (ISP)

Note WAN doesn't *have to* be the internet. It can really just be any network that's broader than the LAN, that usually has multiple smaller, LANs attached.

### Protocol

Usually a network is dependent on a stack of protocols. Each protocol is just a standard for the way too things communicate. As we keep going you'll see more about IP (Internet Protocol), TCP (Transmission Control Protocol), among many others.

Most protocols are determined by standardization bodies such as the Internet Engineering Task Force (IETF) or IEEE Standards Association (IEEE-SA)

### Standards and Governance: IEEE, IETF, ICANN, W3C, ...?

{{< tip >}}

I'm going to be throwing a lot of acronyms in here. Don't try to look up each now- I'll cover them as we go.

{{< /tip >}}

Okay, yeah, so, you'll see these acronyms - among others - a lot. These can be a bit overwhelming, but the gist is there's a fair amount of bureaucracy in how communications standards are defined.

Generally the **IEEE** (Institute of Electrical and Electronics Engineers) standards are more on the hardware and signaling side of things, so you'll mostly see these in the physical layer, such as IEEE 802.11 for Wi-Fi

Meanwhile, the [**IETF**](https://en.wikipedia.org/wiki/Internet_Research_Task_Force) (Internet Engineering Task Force) often publishes technical documents as **RFC**s (Request for Comments) such as the ASCII standard, DNS, UTF-8, SMTP, SSH, POP, NTP, NFS, Kerberos, IRC, IPv4, IPv6, among many, many others. These each have a designated RFC number, and often multiple, such as the many associated with  [DNS](https://en.wikipedia.org/wiki/Domain_Name_System#RFC_documents). There's also the [**IRTF**](https://en.wikipedia.org/wiki/Internet_Research_Task_Force) (Internet Research Task Force) which "focuses on longer term research issues related to the Internet while the parallel organization, the IETF". The IRTF is made up of 14 research groups ranging from cryptography to quantum computing and even human rights.

The **IANA** (Internet Assigned Numbers Authority), a sub group of **ICANN** (Internet Corporation for Assigned Names and Numbers) assigns blocks of IP addresses, runs the root DNS servers, and runs the main time zone database. There are regional organizations (RIR - Regional Internet registry) that the IANA delegates responsibilities to. These are the [American Registry for Internet Numbers](https://en.wikipedia.org/wiki/American_Registry_for_Internet_Numbers) (ARIN),  [Réseaux IP Européens Network Coordination Centre](https://en.wikipedia.org/wiki/RIPE_NCC) (RIPE NCC), [Asia-Pacific Network Information Centre](https://en.wikipedia.org/wiki/Asia-Pacific_Network_Information_Centre) (APNIC), [African Network Information Center](https://en.wikipedia.org/wiki/AFRINIC) (AFRINIC), and [Latin America and Caribbean Network Information Centre](https://en.wikipedia.org/wiki/Latin_America_and_Caribbean_Network_Information_Centre) (LACNIC).

Then there's the **[W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)** (World Wide Web Consortium) which is probably most notable for defining the standards for HTML,  CSS, SVG, WebAssembly, and, more recently, ActivityPub. Of note, the W3C has faced backlash recently for adding DRM-specific [Encrypted Media Extensions](https://en.wikipedia.org/wiki/Encrypted_Media_Extensions) (EME) to HTML5, a move that really *really* pissed of the EFF...

Speaking of, the [**EFF**](https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation) (Electronic Frontier Foundation) is a bit of an odd-one-out on this list, but is effectively to the internet what the ACLU is to the broader public. They regularly provide legal council to high profile cases regarding online rights and digital privacy. They've regularly stood up for the right to encrypt your shit, are anti-DRM, and are basically all-around the good guys. Seriously, please [donate to them](https://supporters.eff.org/donate) or [buy some of their actually awesome merch](https://supporters.eff.org/shop). They're the bad asses protecting your rights online.

Finally, getting even more tangential, you'll also probably see a fair amount of stuff from [DEFCON](https://defcon.org) and related computer security conference influence the web at large - I'll talk more about that in the {{< button relref="/engineering/Networking/Security" >}}Security{{< /button >}} chapter though.

<!--- TODO: IP addresses, Ports, Default Gateway, Routes & kernel routing table, subnet mask - https://www.aelius.com/njh/subnet_sheet.html, ping, traceroute (mtr/lft), dns - resolv.conf, pihole, caching / squid, localhosts, port forwards, DHCP, private nets, firewalls, chromecast port thing, https vs no s,  rsync,scp,samba, cups, databases , pihole, BGP, RIP, OSFI, multi-zone wifi, single ap multi freq wifi, enterprise security, secured ethernet, https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/ -->

<!-- Parallel, Pipelined, Persistance and Performance -->

<script>
    document.getElementById("netMenu").open = true;
</script>
