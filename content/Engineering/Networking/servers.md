# Chapter 39 - Servers!

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

{{< speech big>}}

After reading [“I’m totally screwed.” WD My Book Live users wake up to find their data deleted](https://arstechnica.com/gadgets/2021/06/mass-data-wipe-in-my-book-devices-prompts-warning-from-western-digital/) and [New wave of data-destroying ransomware attacks hits QNAP NAS devices](https://arstechnica.com/information-technology/2022/09/new-wave-of-data-destroying-ransomware-attacks-hits-qnap-nas-devices/) I'm less than enthusiastic to recommend this route.

{{< /speech >}}

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
## Virtual machines

Depending on what you want to do in your Home Lab, you may not need any VMs. They have their uses:

* Security: if you are playing around with suspicious software you don't trust
* Legacy support: if you need to emulate ancient hardware to run old software
* Experimentation: you want to build a network but don't want to risk real money yet

While it is possible to use a recipe tool like [Hashicorp Vagrant](https://www.vagrantup.com/), [VirtualBox from Oracle](https://www.virtualbox.org/) will get you started much faster if all you want are a couple machines and don't mind that it is open core [rather than open source](https://opensource.com/article/21/11/open-core-vs-open-source).

## Containers

While containers provide similar benefits of a VM, they have become much more engrained in the open source ecosystem.

There are better in-depth overviews than this one, but a container is best thought of as a way to package up not only a program, but the entire environment around it when it runs.

While different container hypervisors have different options, usually containers get "virtual" versions of:

* The file system. A container will have an isolated directory structure with what appears to be a root directory, but is separate from the rest of the system. It is similar to what [chroot](https://man7.org/linux/man-pages/man2/chroot.2.html) provides, but it is not even a subtree of anywhere else on the host.
* The network stack. This can be anything from a full NAT, to port forwarding, to creating a Linux [network namespace](https://www.man7.org/linux/man-pages/man7/network_namespaces.7.html) and virtual packet routing. The goal here is to let software send and receive packets (usually TCP) with standardized networks, and let the hypervisor handle the weird cases.
* Users, groups, and permissions. Most often containers run as root, but they can also be run as specific users -- including users that don't exist on the host system.
* Environment variables. The process has a UNIX environment when it runs, and it is possible to add to this before it starts.

This idea of packaging not just a binary but an environment allows all sorts of software to be shipped in containers. For open source projects, they are good not only for deployment, but CI/CD. They allow creating "Linux dev environments" to test your builds without "ruining" your machine. I have more on that in the CI/CD section once you get done with this one.

### An Example Container in Docker

As a concrete illustration, let's use the most common container system: docker. While there have been "desktop editions" that are non-commercial software (meaning not open-source), the original daemon (now called Moby) that ships on Linux remains open source.

There are plenty of [getting started with docker](https://github.com/docker/getting-started) articles out there, and they do a better job than this. This is just an example to demo the concepts.

As an example container, we'll use an open-source S3 bucket server called [minio](https://github.com/minio/minio). As noted in the project's README, doing a standalone deployment for development (rather than production use) is as simple as downloading the container and running it. So let's do that.

With docker, the first step is to download an *image* from the public docker repository, DockerHub:

```
docker pull quay.io/minio/minio
```

This will go out and get a list of "layers." These are created by the instructions in the recipe file called a [Dockerfile](https://docs.docker.com/engine/reference/builder/) which define the environment.

Once the image is downloaded, you can *run* it, i.e. create the process and put it into a new *container* (in docker's terminology).

Here is a simple way to do that. (Don't worry about the details of the command line yet.)

```
docker run --name my_minio -p 9000:9000 -p 9001:9001 \
  quay.io/minio/minio server /data --console-address ":9001"
```

This will generate startup output (take note of the default admin credentials for later!) ending with a link to documentation on my version, and then hang in the terminal.

That's because the process is a server, and it's in the foreground. Not helpful, so press Control-C to interrupt it, and it will terminate.

So what happens to the container when the process dies? The process is killed -- but the "husk" of the container is still left behind. If you try to run the exact same command line again, you get an error:

` docker: Error response from daemon: Conflict. The container name "/my_minio" is already in use by container <hash string>. You have to remove (or rename) that container to be able to reuse that name.`

If you type `docker ps -a` you can see it.

While the process is gone, the environment is not. It would be possible, for example, to use `docker cp` to copy files out of the filesystem. Even more powerfully, you could copy a file in and then `docker restart` the container.

The key understanding here is that the "environment" of a container is *persistent*. Any time you create a new container, on the other hand, it starts with the image that was downloaded. Building and managing images I leave to [the official documentation](https://docs.docker.com/get-started/02_our_app/).

Now let's `docker rm my_minio` in order to make the error go away and create a new one. But this time, add a `-d` right after `docker run` (argument order matters!) when you run it again to put it in the background.

Now go to a browser and visit `http://127.0.0.1:9001`. You'll get the Minio admin console!

But wait a minute, how come the browser can talk to it? Wasn't networking supposed to be isolated?

Because specifically the `-p` arguments said to perform listener port forwarding for TCP on those two ports behind a lightweight NAT setup (the default). If you change the number before the colon in the `-p` argument, you will change the port your browser can connect to.

To conclude, let's see where the bucket storage is. Log into the UI (default credentials should be in the output from earlier), create a bucket called "test-bucket", and upload a file into it.

That file has to get stored somewhere on the filesystem, which in this case is defined by a command-line argument the server was called with. I put that line-break in for a reason. It turns out that everything before the container name is arguments to docker and everything after is arguments to the process itself: its command line.

So the process being run is: `/container/path/minio server /data --console-address ":9001"`

As noted in the minio project's docs, the first argument is the path to storage: `/data`. But of course, that's within the "chroot" of the container itself, not the host.

If we want to actually see what's there, we need to run a command inside the container's "context":

```
docker exec my_minio ls /data/test-bucket
```

It does indeed print the uploaded file.

You can use either [volumes or bind mounts](https://docs.docker.com/storage/) to share parts of the filesystem between containers and/or the host, but that's more advanced. Hopefully the concepts and pointers are good enough.

And once again, if you need a practical example of the power of containers, take a look at the [CI/CD section](/engineering/programming/debugbuildtest/) where I discuss an example.

### Why don’t have it physical?

<iframe width="100%" height="500" src="https://www.youtube.com/embed/SCclo-eg0T8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[TODO]
### Local VMs
[TODO]
### Cloud VMs
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

[Saving Energy: Home Server that Automatically Suspends to RAM and Wakes Up Again (Maximillian Golla)](https://maximiliangolla.com/blog/2022-10-wol-plex-server/)

<ol hidden id="footnotes">
    <li>This device is dated, and intentionally so. It is an illustration, not a recommendation.</li>
</ol>
