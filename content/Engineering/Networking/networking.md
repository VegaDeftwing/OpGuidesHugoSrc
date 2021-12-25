# Chapter 37 - Networking

[TODO] Add follow along making a network stack

[TODO] https://iximiuz.com/en/posts/computer-networking-101/

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

While we could just send a continual stream of data down a wire, that has a lot of issues. For one, it makes it hard to share the wire with multiple people. Of course you could split the wire so each person gets a split amount of time on the wire (Time Division Multiplexing (TDM)) or, if the wire can carry a range of frequencies give each user a small portion of those (Frequency Division Multiplexing (FDM), which limits the throughput similarly), but both of these sorta suck as they assume a user will always be using their provided channel. Instead, we do a sort of Time Division, but by packet-izing everything. Basically, each stream of data you want to send get's broken up into manageable chunks called packets, and then these packets can be sent though the network.

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

    </br>{{< smalltext >}}... also, sometimes you'll be behind two NAT's because of [CGNAT (Wikipedia)](https://en.wikipedia.org/wiki/Carrier-grade_NAT){{< /smalltext >}}

 3. Deal with congestion (if to much data is being sent to the router, how should it be handled?)

    {{< smalltext >}}... the answer is often just drop packets though.{{< /smalltext >}}

 4. Provide Quality-Of-Service (QoS) to prioritize certain applications

 5. Act as a Dynamic Host Configuration Protocol (DHCP) server to assign ip addresses to devices

#### Switches

A *switch* lets you connect multiple devices together, but does so a bit intelligently as the switch itself figures out what destination port an incoming packet should go to. In a typical setup the switch will have one "upper level" connection going up the network (so, in a home network, to the router that goes to the internet) and many connected devices (potentially including other switches). Except for in some weird scenarios, a connection between two devices connected to the same switch will only need to pass through the switch, not go to the router and back.

Often, switches will have one or two high bandwidth ports (10Gbe, for example) along side many slower ports under the assumption that a server or the internet will be handling most requests. Sometimes, these ports may look different than the others, as they may be for [SFP modules](https://en.wikipedia.org/wiki/Small_form-factor_pluggable_transceiver) instead of the typical RJ-45 jacks seen with most ethernet cables.

[TODO] Managed vs Unmanaged

[TODO] store and forward - buffering vs cutthrough https://www.networkacademy.io/ccna/ethernet/store-and-forward-vs-cut-through-switching

Note, there are also Ethernet Hubs, the key difference being the *lack* of a [forwarding table](https://en.wikipedia.org/wiki/Forwarding_information_base), and (mostly) just blindly merge data: "It has multiple input/output (I/O) ports, in which a signal introduced at the input of any port appears at the output of every port except the original incoming."([Wikipedia](https://en.wikipedia.org/wiki/Ethernet_hub)) (see IEEE 802.3)

### Packet Loss

Sometimes packets in the network don't reach their destination. This can be for a variety of reasons. Maybe a switch along the line was overloaded and it's buffer was full, maybe it took a bad route, maybe you have crappy wifi. ╮(─▽─)╭. It happens. Usually the percent of dropped packets is called your packet loss.

### Bandwidth Vs Throughput

[TODO] physcics of link vs data of link - expand on FDM vs TDM

[TODO] and bps/baud

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

Then there's the **[W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)** (World Wide Web Consortium) which is probably most notable for defining the HTML,  CSS, SVG, WebAssembly, and, more recently, ActivityPub. Of note, the W3C has faced backlash recently for adding DRM-specific [Encrypted Media Extensions](https://en.wikipedia.org/wiki/Encrypted_Media_Extensions) (EME) to HTML5, a move that really really pissed of the EFF...

Speaking of, the [**EFF**](https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation) (Electronic Frontier Foundation) is a bit of an odd-one-out on this list, but is effectively to the internet what the ACLU is to the broader public. They regularly provide legal council to high profile cases regarding online rights and digital privacy. They've regularly stood up for the right to encrypt your shit, are anti-DRM, and are basically all-around the good guys. Seriously, please [donate to them](https://supporters.eff.org/donate) or [buy some of their actually awesome merch](https://supporters.eff.org/shop)

Finally, getting pretty tangential, you'll also probably see a fair amount of stuff from the [DEFCON](https://defcon.org) computer security conference influence the web at large - I'll talk more about that in the {{< button relref="/engineering/Networking/Security" >}}Security{{< /button >}} chapter though.

## A typical network

[TODO]

IP addresses, Ports, Default Gateway, Routes & kernel routing table, subnet mask - https://www.aelius.com/njh/subnet_sheet.html, ping, traceroute (mtr/lft), dns - resolv.conf, pihole, caching / squid, localhosts, port forwards, DHCP, private nets, firewalls, chromecast port thing, https vs no s,  rsync,scp,samba, cups, databases , pihole, BGP, RIP, OSFI, multi-zone wifi, single ap multi freq wifi, enterprise security, secured ethernet, https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/

IETF & RFCs

IEEE-SA

Parallel, Pipelined, Persistance and Performance

The **OSI model of networking** is the model of networking most classes will cover. It is slightly different from the one used by the internet, which is the **TCP/IP** model.

In the **TCP/IP** model, the **Physical** and **Data Link** Layers are viewed as a **unified 'Network Acces Layer'**

The **Network Layer** is called the **Internet Layer**

The Transport Layer *stays the same*,

and The **Session, Presentation, and Application** layer are all part of a **larger Application** Layer.

But, because I think it's easier to cover it with things more broken up, I'll go over the **OSI** model from here:

## 1 - The physical Layer

**The [series of tubes](https://www.youtube.com/watch?v=R8XSo0etBC4), wireless media, etc. that you shove your information into**

We've already talked about Routers, Switches, Hubs, Nodes, and Links - all of these are part of the physical layer. Let's look at some of the details though:

### Ethernet

Over Coax, fiber , twisted pair(+ CAT_ ratings), wet string

\+ Sneakernet, Infiniband, Multigig

### Wi-Fi, Wi-Gig, ...

Wi-Fi is a part of the IEEE 802.11 standard and *normally* uses 2.4GHz and 5GHz. However, there are varients that use 60Ghz (WiGig, CMMW) and sub 1Ghz (Wi-Fi HaLow, White-Fi).

Generally, the high frequency will have worse coverage but higher data throughput. Each frequency range is split up into multiple channels. It is generally good practice to not be on the same channel as your neighbor.

<div class="wifi">

| Generation Name / IEEE Standard                              | Year | Frequency Range**                              | Max Rate                                       | Note                                                         |
| ------------------------------------------------------------ | ---- | ---------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| Wi-Fi 6E (802.11ax)                                          | 2020 | 2.401-2.495+5.030-5.990+"6Ghz"(5.925-7.125Ghz) | 9608 {{< smalltext >}}Mbit/s{{< /smalltext >}} | {{< smalltext >}}the "E" is to denote this extra spectrum{{< /smalltext >}} |
| [Wi-Fi 6](https://en.wikipedia.org/wiki/Wi-Fi_6) (802.11ax)  | 2019 | 2.401-2.495+5.030-5.990GHz                     | 9608 {{< smalltext >}}Mbit/s{{< /smalltext >}} | {{< smalltext >}}dramatic under-the-hood changes: notably [OFDMA](https://en.wikipedia.org/wiki/Orthogonal_frequency-division_multiple_access), more spatioal streams, and **uplink** MU-MIMO{{< /smalltext >}} |
| Wi-Fi 5 ([802.11ac](https://en.wikipedia.org/wiki/IEEE_802.11ac-2013)) | 2014 | 5.030-5.990GHz                                 | 6933 {{< smalltext >}}Mbit/s{{< /smalltext >}} | {{< smalltext >}}Allows for wider channels, [MU-MIMO](https://en.wikipedia.org/wiki/MU-MIMO), Beamforming{{< /smalltext >}} |
| Wi-Fi 4* ([802.11n](https://en.wikipedia.org/wiki/IEEE_802.11n-2009)) | 2008 | 2.401-2.495+5.030-5.990GHz                     | 600{{< smalltext >}}Mbit/s{{< /smalltext >}}   | {{< smalltext >}}Adds basic [MIMO](https://en.wikipedia.org/wiki/Multiple-input_multiple-output), [Spatial Division Multiplexing added](https://en.wikipedia.org/wiki/Spatial_Division_Multiplexing), [frame aggregation](https://en.wikipedia.org/wiki/Frame_aggregation), and possibility for 40Mhz channels  {{< /smalltext >}} |
| Wi-Fi 3*  ([802.11g](https://en.wikipedia.org/wiki/IEEE_802.11g-2003)) | 2003 | 2.401-2.495GHz                                 | 54 {{< smalltext >}}Mbit/s{{< /smalltext >}}   | {{< smalltext >}}Basically a speed bump from Wi-Fi 2. Runs slower if there are any Wifi 1 devices on the network.{{< /smalltext >}} |
| Wi-Fi 2* ([802.11a](https://en.wikipedia.org/wiki/IEEE_802.11a-1999)) | 1999 | 5.030-5.990GHz                                 | 54 {{< smalltext >}}Mbit/s{{< /smalltext >}}   | {{< smalltext >}}Basically just defines the addition of the 5GHz band{{< /smalltext >}} |
| Wi-Fi 1*  ([802.11b](https://en.wikipedia.org/wiki/IEEE_802.11b-1999)) | 1999 | 2.401-2.495GHz                                 | 11{{< smalltext >}}Mbit/s{{< /smalltext >}}    | {{< smalltext >}}Yes, b is worse than a, but was short lived- you'll mostly see b/g/n support on low end devices.{{< /smalltext >}} |
| Wi-Fi 0*  ([802.11](https://en.wikipedia.org/wiki/IEEE_802.11_(legacy_mode))) | 1997 | 2.401-2.495GHz                                 | 2 {{< smalltext >}}Mbit/s{{< /smalltext >}}    | {{< smalltext >}}Initial spec, Extremely rare{{< /smalltext >}} |

</div>

{{< smalltext >}}\* Wi-Fi 0-4 are unoffical names</br>\*\* Frequencies/Channels may be limited by region: see [List of WLAN Channels](https://en.wikipedia.org/wiki/List_of_WLAN_channels){{< /smalltext >}}

| Generation Name / IEEE Standard                              | Year               | Frequency Range** | Note                                                         |
| ------------------------------------------------------------ | ------------------ | ----------------- | ------------------------------------------------------------ |
| ([802.11y-2008](https://en.wikipedia.org/wiki/IEEE_802.11y-2008)) | 2008               | 3.65-3.7Ghz       | {{< smalltext >}}A spectrum licenseing shit storm, can run at higher power{{< /smalltext >}} |
| ([802.11j](https://en.wikipedia.org/wiki/List_of_WLAN_channels)) | 2004               | 5Ghz only         | {{< smalltext >}}Mostly Japanese. Might(?) be used in the US by Law Enforcment?{{< /smalltext >}} |
| WiMax ([802.16](https://en.wikipedia.org/wiki/IEEE_802.16))  | 2005</br>(802.16e) | 2-11Ghz           | {{< smalltext >}}Spectrum used may require licence. Hardware is actually available.{{< /smalltext >}} |
| White-Fi ([802.11af](https://en.wikipedia.org/wiki/IEEE_802.11af))*** | 2014               | 755-928**Mhz**    | {{< smalltext >}}Also known as "White-Fi". Uses Licenced Spectrum. Also see [802.22](https://en.wikipedia.org/wiki/IEEE_802.22){{< /smalltext >}} |
| Wi-Fi HaLow ([802.11ah](https://en.wikipedia.org/wiki/IEEE_802.11ah))*** | 2017               | 900**Mhz**        | {{< smalltext >}}Also known an Wi-Fi HaLow. Some consumer products available, dubious legality{{< /smalltext >}} |
| CMMW (802.11aj)                                              | 2018               | 45Ghz             | {{< smalltext >}}Mostly used in China, CMMW = Chinna Milimeter Wave{{< /smalltext >}} |
| ([802.11ay](https://en.wikipedia.org/wiki/IEEE_802.11ay))    | 2021               | 57.24 to 70.20Ghz | {{< smalltext >}}Extension of ad{{< /smalltext >}}           |
| WiGig ([802.11ad](https://en.wikipedia.org/wiki/IEEE_802.11ad)) | 2012               | 57.24 to 70.20Ghz | {{< smalltext >}}Used by Dell and Lenovo for a bit, hardware compatability & drivers may be rough{{< /smalltext >}} |

{{< smalltext >}}\*\*\* Also see [LoRa](https://en.wikipedia.org/wiki/LoRa), [Zigbee](https://en.wikipedia.org/wiki/Zigbee), [BLE](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy), and [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave){{< /smalltext >}}

Also note, WiFi generally uses the same 2.4Ghz spectrum as [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) (IEEE 802.15.1) and [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) (BLE, **not from an IEEE standard**). 

This is not all of the 802.11 standards. There's a bunch of extensions/application specific cases like [802.11p](https://en.wikipedia.org/wiki/IEEE_802.11p) for use in moving vechicals 

#### SSIDs

[TODO]

#### Multiple Acccess Points, Repeaters, 



#### Security

WEP, WPA(v2), EAP, TKIP, RADIUS, PEAP, LEAP ---> Maybe redirect to security chapter

#### Not Using Wi-Fi

[Ethernet over power](https://en.wikipedia.org/wiki/G.hn), wired tethering (USB)

### Other Wireless Systems

Satelite, geostationary & LEO

### End to End Delay

d_ECE = 2 (L/R)

where L = bits per packet, R = tx rate of link

### Queuing Delay

### Hubs, Repeaters, Taps

### Carrier Pidgeon, Can, etc.

## 2 - Data Link

**Organize the information in the meduium into a packet, control who get's that packet**

MAC and LLC

### Ethernet

### PPP - Point-to-Point Protocol

### Switch

### Bridge

### Frames

### VLAN - Virtual LAN

## 3 - Network Layer/IP Layer

**Find paths though the mesh of links and forward the packets though it**

### Service Models

Not guaranteed delivery, bounded delay, or throughput. Sorta sucks, but it's cheap

### Packets

### IPV4, IPV6

[IPV6 is a total nightmare](https://teknikaldomain.me/post/ipv6-is-a-total-nightmare/) & [Hacker News comments on this blog post](https://news.ycombinator.com/item?id=24994587) (note, I don't agree with everything here, just providing it as another person's comments)

IPV4->6 Tunneling

Logical: [6] <-> [6] <- ------------------- -> [6] <-> [6]

Physical: [6] <-> [6] <-> [4] <-> [4] <-> [6] <-> [6]

{{< columns >}}

[TODO] ipv4 exhastion

<--->

![](https://www.caida.org/research/id-consumption/census-map/images/2013-hilbert-plot.png)

{{< /columns >}}

### MAC

### ICMP - Internet Control Message Protocol

### IGMP - Internet Group Management Protocol

traceroute

<script id="asciicast-458108" src="https://asciinema.org/a/458108.js" data-speed="4" data-rows="30" async></script>

### Subnets

https://www.aelius.com/njh/subnet_sheet.html

![devnullnetwork](/eng/devnullnetwork.webp ':size=70%')

### Static and Dynamic Routes

### BGP - Boarder Gateway Protocol

BGP is one of those things that you should basically never have to worry about, and if you do, it's almost certainly because *somebody else* fucked up. That said, it does still matter. In 2021, a BGP mis-configuration [took FaceBook down globally](https://www.theverge.com/2021/10/4/22709260/what-is-bgp-border-gateway-protocol-explainer-internet-facebook-outage) and in 2008 Pakistan used a BGP hijack to [take down YouTube](https://www.cnet.com/news/how-pakistan-knocked-youtube-offline-and-how-to-make-sure-it-never-happens-again/). But, uh, what is it.

Well, if you'll allow me to follow the lead of the late Alaskan Senator Ted Stevens' less-than-ideal analogy: "The Internet is a series of tubes!" and BGP is the logic that dictates where things get routed to go from one tube to the next, and tries to adapt to find the fastest, most efficient route when there are multiple available paths, but, while I could try to explain it, [This article from Cloudflare](https://www.cloudflare.com/learning/security/glossary/what-is-bgp/) will do a much better job than I ever could, so just, read that and come back here.

Hai, welcome back - so, okay, BGP is only something for the ISPs and big players, right? Well, no.

First of all, you *might*, *occasionally* want to check something isn't taking a very stupid route, which means digging into BPG yourself. Julia Evans wrote a great blog post ["Tools to explore BGP"](https://jvns.ca/blog/2021/10/05/tools-to-look-at-bgp-routes/) that does a good job of showing how to poke around things. If you actually want to get hands on, you can use [GNS3](https://www.gns3.com) to simulate a network, or join https://dn42.eu/ to try something more tangible.

There's some fantastic other pages I recommend reading too. Most notably, [EVE Online internet](https://blog.benjojo.co.uk/post/eve-online-bgp-internet) from https://blog.benjojo.co.uk is a really neat look at BGP and just a fun read!

{{< smalltext >}}BTW, Ben Cox blog has a ton of other *really* neat posts, like [The Speed of BGP network propagation](https://blog.benjojo.co.uk/post/speed-of-bgp-network-propagation), [BGP Stuck Routes](https://blog.benjojo.co.uk/post/bgp-stuck-routes-tcp-zero-window), and [Hacking Ethernet out of Fibre Channel cards](https://blog.benjojo.co.uk/post/ip-over-fibre-channel-hack) {{< /smalltext >}}

To finish things up, the [Wikipedia article](https://en.wikipedia.org/wiki/Border_Gateway_Protocol) for BGP is quite nice as well, and does a really good job of explaining the more technical operation in plain english.

## 4 - Transport Layer

**Better reliability of the network by keeping packets in order, retransmitting lost packets, etc.**

Multiplexing, Demultiplexing

Reliable data tx/rx - checksums

flow and congestion control



### TCP - Transmission Control Protocol

https://research.swtch.com/tcpviz

tcp header diagram

### UDP - User Datagram Protocol

### QUIC - Quick UDP Internet Connections

### Raw

### A brief dive into FSMs

### Go-Back-N

### Selective Repeat

### Timeout and Retransmission from Estimated RTT



## 5 - Session Layer

### Authentication

### Sockets

### API - Application Programming Interface 

### NetBios - **Network Basic Input/Output System**

### PAP - 

### RPC - Remote Procedure Call

### SMB - Server Message Block

### SOCKS - Socket Secure

## 6 - Presentation Layer

### TLS - Transport Layer Security

### SSL - Secure Sockets Layer (Deprecated)

### IMAP - Internet Message Access Protocol

## 7 - Application Layer

### HTTP(s)  - Hypertext Transfer Protocol

http://bright28677.tripod.com/proj2/httpformat.htm (both images)

response codes - 200, 300's, 400's, etc.

In header lines

Host, user agent, accept-language, connection (keep-alive), ...?

GET, POST, HEAD, PUT, DELETE

![Codes](/eng/http-status-codes.webp ':size=50%')

{{< attribution >}}https://www.monkeyuser.com/2017/http-status-codes/{{< /attribution >}}

http1 vs 2 v 3

cookies because stateless

in-band

### FTP - File Transfer Protocol

still TCP, out-of-band, maintains state, passive v active mode

### DNS - Domain Name Service

**TTL?**

[Stop Using Rediculously Low DNS TTLs (Frank Denis)](https://00f.net/2019/11/03/stop-using-low-dns-ttls/)

**record types**

[You Smart TV is probably ignoring your PiHole (LabZilla)](https://labzilla.io/blog/force-dns-pihole)

[72% of Smart TVs, 46% of Consoles hardcode DNS Settings](https://arxiv.org/abs/2001.08288), [(Hacker News Comments on article)](https://news.ycombinator.com/item?id=25313480)

### DHCP - Dynamic Host Configuration Protocol

Some texts will put this in Data or Network layer or Link Layer, it's a bit ambiguous. It's not -technically- necessary, much like DNS, but it's used as a core part of the network in most networks. It does appear the [RFC 2131](https://tools.ietf.org/html/rfc2131) says it's Link Layer, but it seems most people think it belongs in Application Layer.

### SSH - Secure Shell

### IRC - Internet Relay Chat

### EMail (SMTP, IMAP, POP)

mail servers and useragents

### UPNP - Universal Plug and Play

### NTP - Network Time Protocol

### Telnet

### NFS - Network File System

### Torrents

Distributed Hash Tables

## Time

Real time clocks, timezones, utc, etc.

## VPNs

### OpenVPN

### Wireguard

[Wireguard Quickstart page](https://www.wireguard.com/quickstart/)

[Wireguard entry on the (Arch Wiki)](https://wiki.archlinux.org/index.php/WireGuard)

#### Tailscale

## Networking Tools

### Etherape

### Wireshark

https://wiki.wireshark.org/CaptureFilters

[Enable Packet Diagram View](https://www.cellstream.com/reference-reading/tipsandtricks/541-wireshark-packetdiagram)

### Nmap

### Scapy / Kamene

[Kamene](https://kamene.readthedocs.io/en/latest/introduction.html)

### (G)NS

### HTTPie 

[HTTPie [Github]](https://github.com/httpie/httpie) - human-friendly CLI HTTP client for the API era

## Further Reading

[What happens when... [Github]](https://github.com/alex/what-happens-when) - An attempt to answer the age old interview question "What happens when you type google.com into your browser and press enter?"

Ben Eater's Networking Tutorial Series is pretty good:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PLowKtXNTBypH19whXTVoG3oKSuOcw_XeW" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



# Chapter 37.1 - Weird Networking, because why not!

[Weird URL Protocols (YouTube, ThioJoe)](https://www.youtube.com/watch?v=WcLmMLqnKCM)

[cjdns](https://github.com/cjdelisle/cjdns) + [hyperboria](https://hyperboria.net)

[ipfs](https://ipfs.io)

[dat](https://dat.foundation)

[Netsukuku](http://netsukuku.freaknet.org)

[Beaker Browser](https://beakerbrowser.com)

[Bombadillo](https://bombadillo.colorfield.space) is a non-web browser, designed for a growing list of protocols operating outside of the web.

Software Defined Networking, ActivityPub

[GreenTunnel](https://github.com/SadeghHayeri/GreenTunnel) - "GreenTunnel bypasses DPI (Deep Packet Inspection) systems found in many ISPs (Internet Service Providers) which block access to certain websites."

[Alternative Internet (Github list)](https://github.com/redecentralize/alternative-internet)

[Awesome Mesh (Github list)](https://github.com/moarpepes/awesome-mesh)

[List of tools in the BlackArch repo](https://blackarch.org/tools.html), meant mostly for security research, though obviously many of these are network related and so might give some inspiration or lead to interesting rabbit holes

[Defcon channel (YouTube)](https://www.youtube.com/user/DEFCONConference/videos), DefCon is a security confrence, and naturally that means a lot of network security, including [Including some on hacking sex toys](https://www.youtube.com/watch?v=RnxcPeemHSc&ab_channel=DEFCONConference)

[Why do we use the Linux Kernel's TCP Stack (Julia Evans Blog)](https://jvns.ca/blog/2016/06/30/why-do-we-use-the-linux-kernels-tcp-stack/)

[A smol tcp stack (Github)](https://github.com/smoltcp-rs/smoltcp)

[The Cost of CPU Networking on a Host (David Ahern's Blog)](https://people.kernel.org/dsahern/the-cpu-cost-of-networking-on-a-host)

[Encapsulation of TCP over UDP](https://tools.ietf.org/id/draft-cheshire-tcp-over-udp-00.html)

[WORST POSSIBLE quality on YouTube? (YouTube, FlyTech Videos)](https://youtu.be/uc9USAE6nJ0)

['Nerfnet' tunnells TCP/IP over cheap NRF24L01 Radios (Hackaday, Tom Nardi) ](https://hackaday.com/2020/12/04/nerfnet-tunnels-tcp-ip-over-nrf24l01-radios/)

[RFC for 700 HTTP Status Codes (Github, Joho)](https://github.com/joho/7XX-rfc)

[Fun with IP address parsing (David Anderson's Blog)](https://blog.dave.tf/post/ip-addr-parsing/)

[http-wtf](https://httptoolkit.tech/blog/http-wtf/)

<blockquote class="twitter-tweet" data-conversation="none"><p lang="et" dir="ltr">midi <a href="https://t.co/5zd4dWJ3U4">pic.twitter.com/5zd4dWJ3U4</a></p>&mdash; Ravarcheon (@ravarcheon) <a href="https://twitter.com/ravarcheon/status/1383045683037413376?ref_src=twsrc%5Etfw">April 16, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

[Netcat - All you need to know](https://blog.ikuamike.io/posts/2021/netcat/)

