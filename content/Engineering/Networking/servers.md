# Chapter 38 - Servers!

First of all, let's demystify the servers, they are not something to be afraid of ... they are just normal computers that execute processes, the main difference is that these computers do not have a direct interface, that is: there is no need for them to have peripherals (most of the time) since they only SERVE resources for other needs.

A good example of a server is this one, in which you are reading this, the only function of the server where this content is hosted is to provide it, nothing more and nothing less. 

## The DIY Home lab

A home lab is basically a "sandbox" where we can practice our Server-Fu (and sometimes do something useful), a home lab can be as basic or as complex as we want, the only thing we need to start with is a couple of virtual (or physical) machines. 

### Why?

Let's imagine that you decided to start working in a huge company, you applied for the vacancy and got the job!

or

Maybe you want to self-host a cloud backup for all that important files.

It would be bad for all of us to start pasting commands copied from StackOverflow to perform actions on a productive or "real" server, right?

This is where our small (or large) Home Lab comes in, where we can paste googled commands and learn the functionality of those commands and the worst that can happen is that we spend a day of a weekend formatting one of our servers but ... in exchange for acquiring this ability is a good exchange right? 

### Firewalls

First of all a firewall is simply a system with a set of rules that dict whatever or not a network communication should be permitted, let's think of it as the "bar security" of our network or server.

There are some commercial firewalls but let's be honest, we are not willing to pay ~500 USD for a commercial grade firewall only to practice right?

So there are some interesting Open Source projects that can me implemented, my preferred one is called "PfSense" the project is much more than a firewall (And we will be looking at in other sections) but it comes with a pretty nice firewall capabilities.

### Routing

The router in a network setup is like "a set of traffic signs" to redirect some network communications through a certain path, with routers we are stepping in a rabbit hole of network protocols, VLANs and other tings but for our purpose lest keep it simple.

Here as well my defecto choice for a Low cost and easy to implement solution for a Home Lab will be PfSense as It can work in a single machine as Router, Firewall, DHCP server, etc...

### VPN services

### The self-hosted experience (or hassle)

## Server Types (in a nutshell)

### Web Servers

Before we get to business, there's some necessary viewing: http://motherfuckingwebsite.com/

### File Servers and NAS

Some people would ask: why use a NAS? Don't all of my computers have hard disks in them?

This is a question of optimization versus cost. To illustrate, let's compare four options to store a large collection of movies and music that is 300 GB.

#### Option 1: A Plain Old Disk

Whether internal or external, this is the cheapest option. If your PC already has storage with 300 GB available, this option is "free." Just make a partition, set some permissions, and call it a day.

While that is good enough for a lot of people, you're probably reading this section for a reason. Consider the questions a large data set raises:

1. How will you share with or stream to devices besides the PC itself?
1. How will you recover lost data if something goes wrong?
1. What level of redundancy do you want against hardware failures?
1. What degree of uptime do you expect?
1. What level of data security do you expect?
1. How much performance do you expect, e.g. concurrent access?

The standard hardware configuration for desktop PCs and laptops is not thinking about these questions. It is thinking about productivity not data preservation and management.

Similarly, common Linux distros has software support for these, but there is significant assembly required.

For reasons of performance, integrity and optimization, data storage is a problem that often benefits from a dedicated device. Let's see what that looks like.

#### Option 2: A Turn-Key Desktop NAS

These devices are marketed to solve the above issues to people who consider themselves "non-technical" or otherwise don't want the hassle. An example is the [QNAP TS-128A](https://www.qnap.com/en/product/ts-128a).<a class="ptr">(1)</a>


Reading through their marketing, their dedicated box handles the storage and their software handles most of the common problems. They even have extra features for movies and music specifically: a playlist manager for music, and a Plex "app" you can install for movies.

However, all of this is proprietary. Sure, you can configure it to be a file sharing server and nothing else, but then you're still taking on most of the problems yourself.

#### Option 3: Buy the Hardware, Install the Software

There is quite a bit of software that is designed to be focused on a data storage appliance, VM host, or certain other dedicated problems. Such software includes [unRAID](https://unraid.net/), [Synology](https://www.synology.com/en-us), and [TrueNAS](https://www.truenas.com/truenas-core/).

Some are proprietary, some are open source, but all are optimized for the problem of storing, managing, sharing, and backing up large data sets.

A lot of these are offered by companies who want to sell you the hardware, but building your own likely makes more sense for a 300 GB dataset instead of a 300 TB dataset. With this approach, you would buy a high-end, storage-focused PC and make it a dedicated device using software.

Even that might seem much for 300 GB, though, even if it had only 16 TB of disks in it. Aside from growth in the data set, the main advantage this has is hardware redundancy. A lot of these servers will use multiple disk configurations and provide redundancy in hardware or software. That's in addition to the better performance you will likely get.

#### Option 4: Build it Yourself

If you have the skill and interest in option 1, but want the better performance, data security, and redundancy of option 3, then this is the answer. Just set up a Linux machine exactly how you want, and then put something like [the Open ZFS filesystem](https://openzfs.org/wiki/Main_Page) on it.

You will learn a lot, and you will get exactly what you want. But it's a lot of effort, 80% of which would be saved by simply installing the open source [TrueNAS Core OS](https://www.truenas.com/truenas-core/) instead.

### Application servers
[TODO]
## Virtual machines and containerization
[TODO]
### Why don’t have it physical?
[TODO]
### Local VMs
[TODO]
### Cloud VMs
[TODO]
### Containers and the convenience of not breaking things
[TODO]
## The voodoo magic of… serverless?
[TODO]
## Why build a server
[TODO]
## DIY Networking: Routing, firewall, etc.
[TODO]
## Web hosting
[TODO]
## File Storage, Sharing, Backups
[TODO]
## Remote Access
[TODO]
## Git, Games, and Glory
[TODO]
## Virtual Machines
[TODO]
## Containerization
[TODO]
## Fault tolerance
[TODO]
## Serverless?
[TODO]

## Interesting Related Articles:

[Why All My Servers Have an 8GB Empty File (Brian Schrader)](https://brianschrader.com/archive/why-all-my-servers-have-an-8gb-empty-file/) (It's to buy time in case of a full disk)

<ol hidden id="footnotes">
    <li>This device is dated, and intentionally so. It is an illustration, not a recommendation.</li>
</ol>
