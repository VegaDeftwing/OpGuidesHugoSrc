# Chapter 31 - Servers!

First of all, let's demystify the servers, they are not something to be afraid of ... they are just normal computers that execute processes, the main difference is that these computers do not have a direct interface, that is: there is no need for them to have peripherals (most of the time) since they only SERVE resources for other needs.

A good example of a server is this one, in which you are reading this, the only function of the server where this content is hosted is to provide it, nothing more and nothing less. 

## The DIY Homelab

A homelab is basically a "sandbox" where we can practice our Server-Fu (and sometimes do something useful), a homelab can be as basic or as complex as we want, the only thing we need to start with is a couple of virtual (or physical) machines. 

### Why?

Let's imagine that you decided to start working in a huge company, you applied for the vacancy and got the job!

or

Maybe you want to self-host a cloud backup for all that important files.

It would be bad for all of us to start pasting commands copied from StackOverflow to perform actions on a productive or "real" server, right?

This is where our small (or large) HomeLab comes in, where we can paste googled commands and learn the functionality of those commands and the worst that can happen is that we spend a day of a weekend formatting one of our servers but ... in exchange for acquiring this ability is a good exchange right? 

### Firewalls

First of all a firewall is simply a system with a set of rules that dict whatever or not a network communication should be permitted, lets think of it as the "bar security" of our network or server.

There are some commercial firewalls but lets be honest, we are no willing to pay ~500 USD for a commercial grade firewall only to practice right?

So there are some interesting OpenSource projects that can me implemented, my preferred one is called "PfSense" the project is much more than a firewall (And we will be looking at in other sections) but it comes with a pretty nice firewall capabilities.

### Routing

The router in a network setup is like "a set of traffic signs" to redirect some network communications trough a certain path, with routers we are stepping in a rabbit hole of network protocols, VLANs and other tings but for our purpose lest keep it simple.

Here as well my defecto choice for a Low cost and easy to implement solution for a HomeLab will be PfSense as It can work in a single machine as Router, Firewall, DHCP server, etc...

### VPN services

### The self-hosted experience (or hassle)

## Server Types (in a nutshell)

### Web Servers

Before we get to business there's some necessary viewing: http://motherfuckingwebsite.com/

### File Servers and NAS
[TODO]
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