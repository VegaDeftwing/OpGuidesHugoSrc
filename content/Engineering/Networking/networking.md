# Chapter 30 - Networking

[TODO] Add follow along making a network stack

[TODO] https://iximiuz.com/en/posts/computer-networking-101/

## Basics

**Nodes**

These are all the points in the network. There are terminal nodes and intermediate nodes.

Terminal nodes are things like your phone, laptop, desktop, and other user-facing devices, as well as servers, like would be used for hosting games or websites.

Intermediate nodes, are things that are internal to the network: Things like modems, hubs, switches, routers, etc.

**Links**

Links are the interconnects between two nodes. Generally these fall into two categories: **Guided and Unguided**

*Guided* Links are those that only connect a few nodes (usually only two) and are typically physical, hard-wire links, often copper or fiber optic.

Not all Links can support the same bandwidth or throughput. In general, Coaxial is worse than Twisted Pair which is in turn worse than fiber.

<img src="/nodes.svg" alt="nodes" style="-webkit-filter: invert(.85);">

**Applications**

These are the things that you want to do: Talk to someone via voice, text, or video; browse the web; download files; etc.

It can also refer to the specific program used to do these things, so like Chrome as your web browser or Zoom for video calling.

an [*API* (Wikipedia)](https://en.wikipedia.org/wiki/API) or 'Application Programming Interface' is what defines how two programs talk to each other. This doesn't have to be over the network, but often is.

**End Systems - Hosts/Server & Clients**

Not everything fits the host/server and client terminology, but generally the host/server is the one that is sending data, and the client is the one receiving, or another way to look at it, the client is the one making requests and the host the one fulfilling them.

**Peer to Peer**

[TODO]

**Packets**

While we could just send a continual stream of data down a wire, that has a lot of issues. For one, it makes it hard to share the wire with multiple people. Of course you could split the wire so each person get's a split amount of time on the wire (Time Division Multiplexing) or, if the wire can carry a range of frequencies give each user a small portion of those (Frequency Division Multiplexing, which limits the throughput similarly), but both of these sorta suck as they assume a user will always be using their provided channel. Instead, we do a sort of Time Division, but by packet-izing everything. Basically, each stream of data you want to send get's broken up into manageable chunks called packets, and then these packets can be sent though the network.

[TODO] packet headers

**Routers and Switches**

Take data in and out, usually though bi-directional links, and can switch which link goes where. Usually with the help of a forwarding table

[TODO] image here

[TODO] store and forward - buffering, 

**End to End Delay**

d_ECE = 2 (L/R)

where L = bits per packet, R = tx rate of link

**Queuing Delay**

**Packet Loss**

Sometimes packets in the network don't reach their destination. This can be for a variety of reasons. Maybe a switch along the line was overloaded and it's buffer was full, maybe it took a bad route, maybe you have crappy wifi. ╮(─▽─)╭. It happens. Usually the percent of dropped packets is called your packet loss.

**Forwarding Table**

**Bandwidth Vs Throughput**

[TODO] physcics of link vs data of link - expand on FDM vs TDM

**LAN Vs WAN**

Local Area Network and Wide Area Network- on most home connections your LAN is the network *in your house* while the WAN is the internet at large, so the WAN port on your router is where you connect the cable from your Internet Service Provider (ISP)

**Protocol**

Usually a network is dependent on a stack of protocols. Each protocol is just a standard for the way too things communicate. As we keep going you'll see more about IP (Internet Protocol), TCP (Transmission Control Protocol), among many others.

Most protocols are determined by standardization bodies such as the Internet Engineering Task Force (IETF) or IEEE Standards Association (IEEE-SA)

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

### Coax, Twister Pair, Fiber & More

### Wireless (Terrestrial and Satellite)

geostationary vs LEO

### Hubs, Repeaters, Taps

### Carrier Pidgeon, Can, etc.

## 2 - Data Link

**Organize the information in the meduium into a packet, control who get's that packet**

MAC and LLC

### Ethernet

### PPP

### Switch

### Bridge

### Frames

### VLAN

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

### ICMP, IGMP

traceroute

### Subnets

https://www.aelius.com/njh/subnet_sheet.html

![devnullnetwork](/devnullnetwork.png ':size=70%')

### Static and Dynamic Routes

### BGP

https://blog.benjojo.co.uk/post/bgp-stuck-routes-tcp-zero-window

[EVE Online internet](https://blog.benjojo.co.uk/post/eve-online-bgp-internet) from https://blog.benjojo.co.uk, which has a ton of other really, really neat posts, like [The Speed of BGP network propagation](https://blog.benjojo.co.uk/post/speed-of-bgp-network-propagation), or [Hacking Ethernet out of Fibre Channel cards](https://blog.benjojo.co.uk/post/ip-over-fibre-channel-hack)

open, update, keepalive, notification

## 4 - Transport Layer

**Better reliability of the network by keeping packets in order, retransmitting lost packets, etc.**

Multiplexing, Demultiplexing

Reliable data tx/rx - checksums

flow and congestion control



### TCP

https://research.swtch.com/tcpviz

tcp header diagram

#### QUIC

### UDP

### Raw

### A brief dive into FSMs

### Go-Back-N

### Selective Repeat

### Timeout and Retransmission from Estimated RTT



## 5 - Session Layer

### Authentication

### Sockets

### API's

### NetBios

### PAP

### RPC

### SMB

### SOCKS

## 6 - Presentation Layer

### TLS

### SSL

### IMAP

## 7 - Application Layer

### HTTP(s) 

http://bright28677.tripod.com/proj2/httpformat.htm (both images)

response codes - 200, 300's, 400's, etc.

In header lines

Host, user agent, accept-language, connection (keep-alive), ...?

GET, POST, HEAD, PUT, DELETE

![Codes](/http-status-codes.png ':size=50%')

> https://www.monkeyuser.com/2017/http-status-codes/

http1 vs 2 v 3

cookies because stateless

in-band

### FTP

still TCP, out-of-band, maintains state, passive v active mode

### DNS

**TTL?**

[Stop Using Rediculously Low DNS TTLs (Frank Denis)](https://00f.net/2019/11/03/stop-using-low-dns-ttls/)

**record types**

[You Smart TV is probably ignoring your PiHole (LabZilla)](https://labzilla.io/blog/force-dns-pihole)

[72% of Smart TVs, 46% of Consoles hardcode DNS Settings](https://arxiv.org/abs/2001.08288), [(Hacker News Comments on article)](https://news.ycombinator.com/item?id=25313480)

### DHCP

Some texts will put this in Data or Network layer or Link Layer, it's a bit ambiguous. It's not -technically- necessary, much like DNS, but it's used as a core part of the network in most networks. It does appear the [RFC 2131](https://tools.ietf.org/html/rfc2131) says it's Link Layer, but it seems most people think it belongs in Application Layer.

### SSH

### IRC

### EMail (SMTP, IMAP, POP)

mail servers and useragents

### UPNP

### NTP

### Telnet

### NFS

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



# Chapter 10.1 - Weird Networking, because why not!

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

