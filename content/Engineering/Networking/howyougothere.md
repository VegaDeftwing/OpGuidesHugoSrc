# Chapter 37.1 - How you got here

So that we have some context through this chapter, lets look at what happens when you visit https://opguides.info (assuming you have a normal network)

0. You've already connected to your home network. Let's make some assumptions about your setup:

    * This is over twisted pair wire (Ethernet), just to keep things simple for now. (Not using Wi-Fi)
    * Let's also assume IPv4, since IPv6 still isn't used everywhere.

    * Your router, at 192.168.1.1, has used DHCP to assign your device a local ip address of 192.168.1.123

    * Your router is connected to the internet on it's WAN port, probably though a modem of some sort that takes care of the "translation" to whatever analog signaling carries your data to your ISP. If you're in a city, this is probably a fiber connection, so the modem translates the electrical signals in twisted pair cable to light to go down a fiber line.

1. You enter the URL (Uniform Resource Locator) into your browser's address bar and press enter

2. Your browser attempts to look up this domain name to turn it into an IP address using DNS

   * Option 1: Having been to the website recently, your computer has cached the DNS request

   * Option 2: Having **not** been to the website recently (or ever before) your computer has to ask a DNS Server where to go

     * This is done over UDP, using a source port over 1023, to connect to a DNS server running on port 53
     * If the DNS request is not cached by your router, this will need to go out to a DNS caching sever ran by your ISP or even higher, and that requires Network Address Translation - more about this in step 4.

     * Your computer needs to find the IP that https://opguides.info points to, and it's not in any cache. It'll look it up by asking whatever Domain Name Service (DNS) servers your network is configured to use. If you haven't set these manually, these are probably set by your Internet Service Provider (ISP). For example, Google runs a DNS server on the memorable IP 8.8.8.8. If you're on Linux, you can run `dig opguides.info` to see the IP.

       ```
       ╭─vega@lyrae ~
       ╰─➤  dig opguides.info          
       
       ; <<>> DiG 9.18.9 <<>> opguides.info
       ;; global options: +cmd
       ;; Got answer:
       ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 32966
       ;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 1
       
       ;; OPT PSEUDOSECTION:
       ; EDNS: version: 0, flags:; udp: 1232
       ;; QUESTION SECTION:
       ;opguides.info.			IN	A
       
       ;; ANSWER SECTION:
       opguides.info.		30	IN	A	185.199.110.153
       opguides.info.		30	IN	A	185.199.108.153
       opguides.info.		30	IN	A	185.199.109.153
       opguides.info.		30	IN	A	185.199.111.153
       
       ;; Query time: 283 msec
       ;; SERVER: 192.168.1.6#53(192.168.1.6) (UDP)
       ;; WHEN: Sun Dec 11 11:58:05 CST 2022
       ;; MSG SIZE  rcvd: 106
       ```

       Of note, these IPs are not just for opguides. OpGuides is hosted through Github Pages, which hosts many other websites on the same IPs. Speaking of, there are multiple IPs for backup servers, distributing the sver load, and optimizing for different regions. 

       You should note, if you just went to 185.199.110.153 you would not get to opguides.info though. This is remedied by the part of the HTTP request itself, which has a [host header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) to specify which site you want to go to in particular - That then ultimately gets you to this website.

   * If you entered http://opguides.info, I have DNS set up to redirect you to the http**s** varient of the site. Even if I didn't, most modern browsers will check to see if https:// is available and redirect you automatically.

3. Your computer tries to find a vaild way to get to this address with ARP (Address Resolution Protocol)

   * This is also cached, so if it's been done recently, it doesn't need to be done again
   * The routing table is looked up, to see if the Target IP address is on any of the subnets on the local route table.
     * This isn't a local IP, so you have to go to the <span style="color:#CFA5A5">I</span><span style="color:#CFACA5">N</span><span style="color:#CFB3A5">T</span><span style="color:#CFBAA5">E</span><span style="color:#CFC1A5">R</span><span style="color:#CFC8A5">N</span><span style="color:#CFCFA5">E</span><span style="color:#C8CFA5">T</span><span style="color:#C1CFA5">.</span> <span style="color:#BACFA5">T</span><span style="color:#B3CFA5">H</span><span style="color:#ACCFA5">E</span> <span style="color:#A5CFA5">I</span><span style="color:#A5CFAC">N</span><span style="color:#A5CFB3">F</span><span style="color:#A5CFBA">O</span><span style="color:#A5CFC1">R</span><span style="color:#A5CFC8">M</span><span style="color:#A5CFCF">A</span><span style="color:#A5C8CF">T</span><span style="color:#A5C1CF">I</span><span style="color:#A5BACF">O</span><span style="color:#A5B3CF">N</span> <span style="color:#A5ACCF">S</span><span style="color:#A5A5CF">U</span><span style="color:#ACA5CF">P</span><span style="color:#B3A5CF">E</span><span style="color:#BAA5CF">R</span> <span style="color:#C1A5CF">H</span><span style="color:#C8A5CF">I</span><span style="color:#CFA5CF">G</span><span style="color:#CFA5C8">H</span><span style="color:#CFA5C1">W</span><span style="color:#CFA5BA">A</span><span style="color:#CFA5B3">Y</span><span style="color:#CFA5AC">.</span>
   * Your "Router" probably has an internal switch, probably with some other devices wired in, so:
     * The switch will check its local CAM/MAC table to see which connection has the MAC address we are looking for. If the switch has no entry for the MAC address it will rebroadcast the ARP request to all other ports.
       * Assuming this is the switch built into the router, one of the MAC addresses will be the MAC address of the router - so this is used: the switch sends the ARP request to the connection that has the correct MAC address. Note, that this connection is internal, but acts the same as having a separate real-router and real-switch (not the combo unit) wired together.

4. Being a website with http**s** your browser requests your operating system to open a socket on port 443

   * This request is first passed to the Transport Layer where a TCP segment is crafted. The destination port is added to the header, and a source port is chosen at random from within the kernel's dynamic port range (ip_local_port_range in Linux).
   * This segment is sent to the Network Layer, which wraps an additional IPv4 header. The IPv4 address of the destination server as well as that of the current machine is inserted to form a packet.
   * The packet next arrives at the Link Layer. A frame header is added that includes the MAC address of the machine's Network Interface Card (NIC) as well as the MAC address of the gateway (your home router). If the kernel does not know the MAC address of the gateway, it must broadcast an ARP query to find it.

5. The connection from 192.168.1.123 (your computer) to [OpGuide's IP] requires network address translation.

   * Your computer sees the path for this as needing to use your home router

   * When the router (192.168.1.1) gets the TCP SYN out, it records the destination ip, source port, and destination port triplet and uses that to route the incoming responses back to your computer

6. and starts ~~a~~ **TCP** connection(s) to start pulling each file - all the HTML, CSS, images, JavaScript, etc.

   * If you've been here recently, the Browser's cache still has some of this content from a previous visit, and assumes this content is still valid
   * The TCP connection goes though the SYN, ACK, SEQ, FIN process as is typical - more about this later
   * In reality, a lot of TCP connections are made simultaneously.


> Note, we're assuming all of the data is being sent over Ethernet. which means at any point any data is moving from one computer/switch/router to another, all of the complexity of ethernet's packetiziation applies too. The TCP packets of the main connection and UDP packets of the DNS request are all wrapped up in these Ethernet data packets (frames), which include the MAC destination, MAC Source, and some error checking.
>
> This means it's a sort of nesting doll of protocols, where the Ethernet frame holds the IP packet, which holds the UDP or TCP segment, which finally holds the data in question.

7. Being an http**s**, The browser does a TLS handshake to encrypt the transfer.

   * This looks at the certificate of the website - for OpGuides this is issued by Let's Encrypt. Click the lock icon next to the URL in the address bar to see it.

   * The certificate is checked to be valid both in that it hasn't expired and that the certificate is issued by a source the browser has trusted. We can see this ourselves. First, you can see the certificate for this site. On most browsers you can do this by clicking the little lock icon in the address bar, clicking "Connection is secure" →"Certificate is valid". This will bring up the sites certificate. You should see it was issued by "Let's Encrypt".

     Alternatively, if you're on Linux, you should be able to run

     `openssl s_client -showcerts -connect opguides.info:443`

8. Browser starts rendering content from all the files
   * If you play a YouTube video or load a twitter embed, etc. - that content is established via a new connection, which repeats all of these steps.


<script>
    document.getElementById("netMenu").open = true;
</script>
