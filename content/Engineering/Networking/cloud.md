# Chapter 36½ - "The Cloud"

{{< columns >}}

Some people will tell you the cloud is the future, that someday everybody will rent computational power from a handful of services like AWS.

These people are nuts.

The cloud is just someone eles's computer. Unless your business is going though a period of extreme growth it makes no sense to use a cloud provider like AWS or Azure. It does make plenty of sense to buy a VPS (Virtual Private Server) for hosting a website or game server or a personal website like this one, but at scale? No.

Unfortunately, "The Cloud" isn't going anywhere. AWS, Azure, and Google Cloud probably host the vast majority of websites you visit and the backends for apps you use. So we may as well understand it... if for no other reason than to be able to hold educated arguments against it.

<--->

<img src="/nonfree/character/yellsatcloud2.webp" alt="Old Vega Yells at Cloud">

{{< attribution >}}Character owned by Vega, art by [Talon Creations](https://twitter.com/Talon_Creations) and Vega {{< /attribution >}}

{{< /columns >}}

So, my opinion out of the way, let's look at what the cloud is. Generally, there are a few kinds of cloud services, here they're listed in increasing level of abstraction:

* **IaaS** - Infrastructure as a Service
  * Hardware servers, virtual machines, storage, networking, etc. The depth of services provided varies, but generally this is just getting a bare system, with no
* **PaaS** - Platform as a Service
  * Generally PaaS adds another layer of abstraction, as the client (you) don't need to worry about the underlying hardware, but instead can use provider specific programming languages and development tools to setup what you need. 
* **SaaS** - Software as a Service
  * SaaS goes up yet another layer, here the client (you) are not buying something on which you can host your own software and tools, but are buying the (usually monthly) access and support for existing tools. Adobe's CreativeCloud and Office365 are good (albeit evil) examples.
* **FaaS / Serverless** - Function as a Service
  * The provider starts up or shuts down virtual machines and otherwise allocates resources on demand as they are called upon. It's not that there is no sever, it's just that the computation is done on demand and then the results saved to disk, such that they can be called upon later.
  * See [Serverless Computing](https://en.wikipedia.org/wiki/Serverless_computing) on Wikipedia for more information, as well as a list of advantages and disadvantages.

To put this in a nice lil' table, the stuff in blue is *done for you*, while you need to handle the things shown in gray.

<style>
.models {
    width: 100%;
    text-align: center;
}
.models th {
background: #fff3;
word-wrap: break-word;
text-align: center;
}
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(-n) > td:nth-child(1) { background: #009cdf55; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n+5) > td:nth-child(2) { background: #009cdf55; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n+3) > td:nth-child(3) { background: #009cdf55; }
.models > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(n) > td:nth-child(4) { background: #009cdf55; }
</style>


<div class="models">

| Traditional:   | Infrastructure as a Service | Platform as a Service | Software as a Service |
| -------------- | --------------------------- | --------------------- | --------------------- |
| Applications   | Applications                | Applications          | Applications          |
| Data           | Data                        | Data                  | Data                  |
| Runtime        | Runtime                     | Runtime               | Runtime               |
| Middleware     | Middleware                  | Middleware            | Middleware            |
| OS             | OS                          | OS                    | OS                    |
| Virtualization | Virtualization              | Virtualization        | Virtualization        |
| Servers        | Servers                     | Servers               | Servers               |
| Storage        | Storage                     | Storage               | Storage               |
| Networking     | Networking                  | Networking            | Networking            |

</div>

Obviously, for each thing done for you you've giving up more control, abstracting away that complexity to the provider.

[GCP Outpaces Azure, AWS in the 2021 Cloud Report (Cockroarch Labs)](https://www.cockroachlabs.com/blog/2021-cloud-report/)

[Dropbox saved almost $75 million over two years by building its own tech infrastructure (GeekWire)](https://www.geekwire.com/2018/dropbox-saved-almost-75-million-two-years-building-tech-infrastructure/)

[TODO] Service Level Agreements, reallly cheap VPS, 

## Comparison of Vendors

[TODO] Add Google Cloud to list, mention they're all sorta evil.

> Note, I'm not going to directly compare pricing between these services because that's both rather variable and because the cost is often in terms of resource usage, which can be calculated in so many different way that the only real way to compare is to actually run something. Similarly, comparing uptime is also mostly useless as there are different metrics used and because of service contracts any provider will do everything in its power to appear to have umpteen 9's of uptime.

### Compute

#### CPU

For x86-64 CPU compute both offer a range of speed tier both for GPU and CPU, making direct comparison difficult. 

AWS EC2-C5 offers Intel Skylake CPUs that support AVX-512, nice if you have a highly vectorized workload. Azure does offer some of the same CPU, with AVX-512, but many of their CPUs are AMD's EPYC line which while EPYC should give Azure the lead in efficiency that should lead to reduced costs for the consumer, no AMD CPUs have AVX-512 and the EPYCs in particular sometimes have a hard time distributing compute over their internal CCX complexes. 

Also interesting, AWS offers EC2 A1, which lets you deploy to 64 bit arm cores instead of x86, which for workloads that work well on it can lead to cost savings or security benefits given the mess that was Meltdown and Spectre. 

#### GPU

AWS appears to only offer Nvidia GPUs, buying into the Nvidia CUDA ecosystem while Azure offers a mix of GPUs from AMD and Nvidia, covering both CUDA and OpenCL workloads well.

### Storage

AWS-S3, EBS, EFS, Glacier, ... There's a lot here. There's flexibility among offerings that suit various needs, from 'object storage', network file systems, and long term backups on cheap, bulk storage.

Azure offers similar (and much better named) flexibility, with options like Azure Disks for bulk storage attached to a VM, 'Azure Blobs' for an S3 equivalent, and "Azure Files" for a network file system.

Generally it seems there's a pretty 1-to-1 match between Microsoft's and Amazon's offerings. The differences start to show a bit more when it comes to dev tools and libraries available to work with them though.

### Databases

So that I can talk about this all without trying to name everything, so just go look at [This list of datbase products offered from AWS](https://aws.amazon.com/products/databases/) and [This page from Azure](https://azure.microsoft.com/en-us/product-categories/databases/)

As you can see, both offer products covering all the normal database options. Azure, rather strangely, offers hosting of multiple SQL back ends, while AWS has [multiple instance types](https://aws.amazon.com/rds/instance-types/) for RDS, while Azure seems to just offer flexible options that automatically scale. This means less control, but also less management overhead and concerns for needing to upgrade or downgrade the instance latter. That said, for very large projects the industry is starting to move to non-relational anyway for it's lower overhead and ease in making it distributed and Cosmos DB, is, uh, lacking. The first chat I included from Azures' docs shows that Azure dos have some Redis cache options, but AWS has Dynamo, Memcached, and Redis.

On top of all of that AWS offers a graphDB, which I can't find Azure even competing with at all.

The only advantage that I can really find in Azure's database offerings is the options for SQL being varied enough to support multiple SQL implementations.

### Security

The [number of open AWS S3 buckets](https://buckets.grayhatwarfare.com) that can be found on GitHub shows right off the bat that security is more down to the developer than the ecosystem. Anything I can write here is going to be largely marketing fluff from each company, that said, there are some security offerings:

AWS offers 'Inspector' which " automatically assesses resources for vulnerabilities or deviations from best practices, and then produces a detailed list of security findings prioritized by level of severity" - so in plain English, it tries to find anywhere your code or deployed app is vulnerable to a known CVE. Azure offers "Azure Security Center" which is similar.

Further, though all of 2020 AWS has had 3 CVEs and two other notices ([source](https://aws.amazon.com/security/security-bulletins/?card-body.sort-by=item.additionalFields.bulletinDateSort&card-body.sort-order=desc&awsf.bulletins-year=year%232020)) but Microsoft has made even finding a list of vulnerabilities difficult, but I think going [here](https://msrc.microsoft.com/update-guide/vulnerability) setting the date range to all of 2020 and searching for azure is as close as I'll get. That turns up 26 CVEs, of which 25 are really on them, 9 of them are elevation of privilege and and one of them is an RCE. Given Azure is the significantly smaller of the two so will have less attention on it, that's especially not great.

### Dev Tools

AWS powers enough of the internet that when it goes down it seems the entire internet follows suit. Anadectodely this popularity seems to be from AWS's extensive dev tools and documentation. Further, AWS's larger popularity means many 3rd party libraries for various languages and frameworks exist to make development even easier.

Further separating things, while Microsoft has tried to make their development more platform agnostic recently with the whole "MS <3 Linux" thing, from personal experience I can tell you their stuff is rather annoying to work with if you don't buy in to the platform as a whole, while AWS has been pretty OS and development environment agnostic from the start. 

So, while Azure effectively has the [single bullet point of visual studio](https://azure.microsoft.com/en-us/product-categories/developer-tools/), AWS has all of this

<img src="/eng/awstools.webp" alt="AWS Tools" height="700em" style="-webkit-filter: invert(.85);">

As a very lazy metric, just searching Github (Which is owned by MS and hosted on Azure), we find this:

{{< columns >}}

<img src="/eng/azurerepos.webp">

<--->

<img src="/eng/awsrepos.webp">

{{< /columns >}}

I'm not going to pretend that having double the repos means AWS is twice as good, but what it does mean is that developers are choosing it. That could be because it's cheaper or some other unrelated factor, but it could well be because it has much better documentation  (something extremely evident in trying to do find this information in the first place) and because it has better tools developed by Amazon and the community.