# Chapter 37.2 - The OSI Model

The **OSI model of networking** is the model of networking most classes will cover. It is slightly different from the one used by the internet, which is the <u>**TCP/IP**</u> model, but it's a bit more regularly used when talking about networking, so it's the one I'll cover here. Note, the big difference is really just that In the **<u>TCP/IP</u>** model, the **Physical** and **Data Link** Layers are viewed as a **unified '<u>Network Acces Layer</u>'**, the **Network Layer** is called the **<u>Internet</u> Layer,** The Transport Layer *stays the same*, and the and The **Session, Presentation, and Application** layer are all part of a **larger <u>Application</u>** Layer.

Seriously though, don't think about this to much. It usually doesn't matter and the OSI Model is fine.

## 1 - The physical Layer

**The [series of tubes](https://www.youtube.com/watch?v=R8XSo0etBC4), wireless media, etc. that you shove your information into**

We've already talked about Routers, Switches, Hubs, Nodes, and Links - all of these are part of the physical layer. Let's look at some of the details though:

### Ethernet

Over Coax, fiber , twisted pair(+ CAT_ ratings), wet string

\+ Sneakernet, Infiniband, Multigig

### Wi-Fi

Wi-Fi is a part of the IEEE 802.11 standard and *normally* uses 2.4GHz and 5GHz. However, there are varients that use 60Ghz (WiGig, CMMW) and sub 1Ghz (Wi-Fi HaLow, White-Fi).

<div class="wifi">

| Generation Name / IEEE Standard                              | Year | Frequency Range**                              | Max Rate    | Note                                                         |
| ------------------------------------------------------------ | ---- | ---------------------------------------------- | ----------- | ------------------------------------------------------------ |
| Wi-Fi 6E (802.11ax)                                          | 2020 | 2.401-2.495+5.030-5.990+"6Ghz"(5.925-7.125Ghz) | 9608 Mbit/s | The "E" is to denote this extra spectrum                     |
| [Wi-Fi 6](https://en.wikipedia.org/wiki/Wi-Fi_6) (802.11ax)  | 2019 | 2.401-2.495+5.030-5.990GHz                     | 9608 Mbit/s | dramatic under-the-hood changes: notably [OFDMA](https://en.wikipedia.org/wiki/Orthogonal_frequency-division_multiple_access), more spatial streams, and **uplink** MU-MIMO |
| Wi-Fi 5 ([802.11ac](https://en.wikipedia.org/wiki/IEEE_802.11ac-2013)) | 2014 | 5.030-5.990GHz                                 | 6933 Mbit/s | Allows for wider channels, [MU-MIMO](https://en.wikipedia.org/wiki/MU-MIMO), Beamforming |
| Wi-Fi 4* ([802.11n](https://en.wikipedia.org/wiki/IEEE_802.11n-2009)) | 2008 | 2.401-2.495+5.030-5.990GHz                     | 600 Mbit/s  | Adds basic [MIMO](https://en.wikipedia.org/wiki/Multiple-input_multiple-output), [Spatial Division Multiplexing added](https://en.wikipedia.org/wiki/Spatial_Division_Multiplexing), [frame aggregation](https://en.wikipedia.org/wiki/Frame_aggregation), and possibility for 40Mhz channels |
| Wi-Fi 3*  ([802.11g](https://en.wikipedia.org/wiki/IEEE_802.11g-2003)) | 2003 | 2.401-2.495GHz                                 | 54 Mbit/s   | Basically a speed bump from Wi-Fi 2. Runs slower if there are any Wifi 1 devices on the network. |
| Wi-Fi 2* ([802.11a](https://en.wikipedia.org/wiki/IEEE_802.11a-1999)) | 1999 | 5.030-5.990GHz                                 | 54 Mbit/s   | Basically just defines the addition of the 5GHz band         |
| Wi-Fi 1*  ([802.11b](https://en.wikipedia.org/wiki/IEEE_802.11b-1999)) | 1999 | 2.401-2.495GHz                                 | 11 Mbit/s   | Yes, b is worse than a, but was short lived- you'll mostly see b/g/n support on low end devices. |
| Wi-Fi 0*  ([802.11](https://en.wikipedia.org/wiki/IEEE_802.11_(legacy_mode))) | 1997 | 2.401-2.495GHz                                 | 2 Mbit/s    | Initial spec, Extremely rare                                 |

</div>

{{< smalltext >}}\* Wi-Fi 0-4 are unoffical names{{< /smalltext >}}

[TODO WIFI channels]

Frequencies/Channels may be limited by region: see [List of WLAN Channels](https://en.wikipedia.org/wiki/List_of_WLAN_channels)

It is generally good practice to not be on the same channel as your neighbor.

{{< details "More about those weird standards:">}}

Generally, transmitting at higher the frequency will yield worse range but higher data throughput. This isn't strictly true, but it's mostly true.

| Generation Name / IEEE Standard                              | Year               | Frequency Range** | Max Rate\*\*\*\*                                             | Note                                                         |
| ------------------------------------------------------------ | ------------------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ([802.11y-2008](https://en.wikipedia.org/wiki/IEEE_802.11y-2008)) | 2008               | 3.65-3.7Ghz       | ???                                                          | A spectrum licenseing shit storm, can run at higher power    |
| ([802.11j](https://en.wikipedia.org/wiki/IEEE_802.11j-2004)) | 2004               | 5Ghz only         | ???                                                          | Mostly Japanese. Might(?) be used in the US by Law Enforcment? |
| WiMax ([802.16](https://en.wikipedia.org/wiki/IEEE_802.16))  | 2005</br>(802.16e) | 2-11Ghz           | ~40 Mbit/s normally, 1Gbit/s for fixed stations              | Spectrum used may require license. Hardware is actually available. |
| White-Fi ([802.11af](https://en.wikipedia.org/wiki/IEEE_802.11af))*** | 2014               | 755-928**Mhz**    | 35.6 Mbit/s, 426.7 Mbit/s with channel bonding --extremely variable | Also known as "White-Fi". Uses Licenced Spectrum. Also see [802.22](https://en.wikipedia.org/wiki/IEEE_802.22) |
| Wi-Fi HaLow ([802.11ah](https://en.wikipedia.org/wiki/IEEE_802.11ah))*** | 2017               | 900**Mhz**        | 150**K**bit/s to 78**M**bit/s -- extremely variable          | Also known an Wi-Fi HaLow. Some consumer products available, dubious legality |
| CMMW (802.11aj)                                              | 2018               | 45Ghz             | ~15**G**bit/s                                                | Mostly used in China, CMMW = Chinna Milimeter Wave           |
| WiGig ([802.11ay](https://en.wikipedia.org/wiki/IEEE_802.11ay)) | 2021               | 57.24 to 70.20Ghz | 277(?)Gbit/s - (When running with basically all of the spectrum dedicated to one link) | Extension of ad                                              |
| WiGig ([802.11ad](https://en.wikipedia.org/wiki/IEEE_802.11ad)) | 2012               | 57.24 to 70.20Ghz | ~7Gbit/s                                                     | Used by Dell and Lenovo for a bit, hardware compatability & drivers may be rough |

{{< smalltext >}}\*\*\* Also see [LoRa](https://en.wikipedia.org/wiki/LoRa), [Zigbee](https://en.wikipedia.org/wiki/Zigbee), [BLE](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy), and [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave)</br>\*\*\*\* Max Rate is a bit hard to research here, so take these numbers with a grain of salt{{< /smalltext >}}

{{< /details >}}

Also note, WiFi generally uses the same 2.4Ghz spectrum as [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) (IEEE 802.15.1) and [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) (BLE, **not from an IEEE standard**). 

This is not all of the 802.11 standards. There's a bunch of extensions/application specific cases like [802.11p](https://en.wikipedia.org/wiki/IEEE_802.11p) for use in moving vechicals 

#### SSIDs - Service Set Identifier

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

### Modems?

[TODO] http://www.whence.com/minimodem/

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

It's very reasonably to scan literally every IPv4 address. See [A Census of Minecraft Servers](https://blog.bithole.dev/mcmap.html) or [Harder Drive](https://www.youtube.com/watch?v=JcJSW7Rprio) for examples of this being done.

### MAC

### ICMP - Internet Control Message Protocol

https://xkln.net/blog/icmp-ping-and-traceroute--what-i-wish-i-was-taught/

### IGMP - Internet Group Management Protocol

traceroute

<script id="asciicast-458108" src="https://asciinema.org/a/458108.js" data-speed="4" data-rows="30" async></script>

### Subnets

https://www.aelius.com/njh/subnet_sheet.html

{{< columns >}}

<--->

![devnullnetwork](/eng/devnullnetwork.webp ':size=70%')

{{< /columns >}}

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

 [Multipath TCP](https://en.wikipedia.org/wiki/Multipath_TCP)

https://github.com/appneta/tcpreplay

### UDP - User Datagram Protocol

### QUIC - Quick UDP Internet Connections

\+ https://multipath-quic.org

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

https://fasterthanli.me/articles/the-http-crash-course-nobody-asked-for

http://bright28677.tripod.com/proj2/httpformat.htm (both images)

response codes - 200, 300's, 400's, etc.

In header lines

Host, user agent, accept-language, connection (keep-alive), ...?

GET, POST, HEAD, PUT, DELETE

{{< columns >}}

<--->

![Codes](/eng/http-status-codes.webp ':size=50%')

{{< attribution >}}https://www.monkeyuser.com/2017/http-status-codes/{{< /attribution >}}

{{< /columns >}}

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

#### Bonjour / Zeroconf

Occassionally, you may find things that want a name given to them by the local system. If two systems are running Bonjour / Zeroconf, then you can have a local name that should always point to the device. This is particularly handy for setting up devices like the Raspberry Pi Zero as a USB gadget and letting it show up as a network device on the system it's plugged into- now it'll have a local name. See [Bonjour (Zeroconf) Networking for Windows and Linux (Adafruit)](https://learn.adafruit.com/bonjour-zeroconf-networking-for-windows-and-linux).

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

---

# No Good Place In The Model:

## VPNs

### OpenVPN

### Wireguard

[Wireguard Quickstart page](https://www.wireguard.com/quickstart/)

[Wireguard entry on the (Arch Wiki)](https://wiki.archlinux.org/index.php/WireGuard)

#### Tailscale



<script>
    document.getElementById("netMenu").open = true;
</script>

