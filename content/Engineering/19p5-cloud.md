# Chapter 19½ - "The Cloud"



# Comparison of Vendors

[TODO] Add Google Cloud to list, mention they're all sorta evil.

> Note, I'm not going to directly compare pricing between these services because that's both rather variable and because the cost is often in terms of resource usage, which can be calculated in so many different way that the only real way to compare is to actually run something. Similarly, comparing uptime is also mostly useless as there are different metrics used and because of service contracts any provider will do everything in its power to appear to have umpteen 9's of uptime.
>

## Compute

### CPU

For x86-64 CPU compute both offer a range of speed tier both for GPU and CPU, making direct comparison difficult. 

AWS EC2-C5 offers Intel Skylake CPUs that support AVX-512, nice if you have a highly vectorized workload. Azure does offer some of the same CPU, with AVX-512, but many of their CPUs are AMD's EPYC line which while EPYC should give Azure the lead in efficiency that should lead to reduced costs for the consumer, no AMD CPUs have AVX-512 and the EPYCs in particular sometimes have a hard time distributing compute over their internal CCX complexes. 

Also interesting, AWS offers EC2 A1, which lets you deploy to 64 bit arm cores instead of x86, which for workloads that work well on it can lead to cost savings or security benefits given the mess that was Meltdown and Spectre. 

### GPU

AWS appears to only offer Nvidia GPUs, buying into the Nvidia CUDA ecosystem while Azure offers a mix of GPUs from AMD and Nvidia, covering both CUDA and OpenCL workloads well.

## Storage

AWS-S3, EBS, EFS, Glacier, ... There's a lot here. There's flexibility among offerings that suit various needs, from 'object storage', network file systems, and long term backups on cheap, bulk storage.

Azure offers similar (and much better named) flexibility, with options like Azure Disks for bulk storage attached to a VM, 'Azure Blobs' for an S3 equivalent, and "Azure Files" for a network file system.

Generally it seems there's a pretty 1-to-1 match between Microsoft's and Amazon's offerings. The differences start to show a bit more when it comes to dev tools and libraries available to work with them though.

## Databases

So that I can talk about this all without trying to name everything:

[TODO] this references local files. I need to figure out how to present this better

<img src="../../../../../../../../home/vega/.config/Typora/typora-user-images/image-20201115151852791.png" alt="image-20201115151852791" style="zoom:50%;" />

<img src="../../../../../../../../home/vega/.config/Typora/typora-user-images/image-20201115152353844.png" alt="image-20201115152353844" style="zoom:50%;" />

As you can see, both offer products covering all the normal database options. Azure, rather strangely, offers hosting of multiple SQL back ends, while AWS has [multiple instance types](https://aws.amazon.com/rds/instance-types/) for RDS, while Azure seems to just offer flexible options that automatically scale. This means less control, but also less management overhead and concerns for needing to upgrade or downgrade the instance latter. That said, for very large projects the industry is starting to move to non-relational anyway for it's lower overhead and ease in making it distributed and Cosmos DB, is, uh, lacking. The first chat I included from Azures' docs shows that Azure dos have some Redis cache options, but AWS has Dynamo, Memcached, and Redis.

On top of all of that AWS offers a graphDB, which I can't find Azure even competing with at all.

The only advantage that I can really find in Azure's database offerings is the options for SQL being varied enough to support multiple SQL implementations.

## Security

The [number of open AWS S3 buckets](https://buckets.grayhatwarfare.com) that can be found on GitHub shows right off the bat that security is more down to the developer than the ecosystem. Anything I can write here is going to be largely marketing fluff from each company, that said, there are some security offerings:

AWS offers 'Inspector' which " automatically assesses resources for vulnerabilities or deviations from best practices, and then produces a detailed list of security findings prioritized by level of severity" - so in plain English, it tries to find anywhere your code or deployed app is vulnerable to a known CVE. Azure offers "Azure Security Center" which is similar.

Further, though all of 2020 AWS has had 3 CVEs and two other notices ([source](https://aws.amazon.com/security/security-bulletins/?card-body.sort-by=item.additionalFields.bulletinDateSort&card-body.sort-order=desc&awsf.bulletins-year=year%232020)) but Microsoft has made even finding a list of vulnerabilities difficult, but I think going [here](https://msrc.microsoft.com/update-guide/vulnerability) setting the date range to all of 2020 and searching for azure is as close as I'll get. That turns up 26 CVEs, of which 25 are really on them, 9 of them are elevation of privilege and and one of them is an RCE. Given Azure is the significantly smaller of the two so will have less attention on it, that's especially not great.

## Dev Tools

AWS powers enough of the internet that when it goes down it seems the entire internet follows suit. Anadectodely this popularity seems to be from AWS's extensive dev tools and documentation. Further, AWS's larger popularity means many 3rd party libraries for various languages and frameworks exist to make development even easier.

Further separating things, while Microsoft has tried to make their development more platform agnostic recently with the whole "MS <3 Linux" thing, from personal experience I can tell you their stuff is rather annoying to work with if you don't buy in to the platform as a whole, while AWS has been pretty OS and development environment agnostic from the start. 

So, while Azure effectively has the [single bullet point of visual studio](https://azure.microsoft.com/en-us/product-categories/developer-tools/), AWS has all of this

<img src="../../../../../../../../home/vega/.config/Typora/typora-user-images/image-20201115153209894.png" alt="image-20201115153209894" style="zoom:50%;" />

As a very lazy metric, just searching Github (Which is owned by MS and hosted on Azure), we find this:

![image-20201115153407866](../../../../../../../../home/vega/.config/Typora/typora-user-images/image-20201115153407866.png)

![image-20201115153432332](../../../../../../../../home/vega/.config/Typora/typora-user-images/image-20201115153432332.png)

I'm not going to pretend that having double the repos means AWS is twice as good, but what it does mean is that developers are choosing it. That could be because it's cheaper or some other unrelated factor, but it could well be because it has much better documentation  (something extremely evident in trying to do this lab itself) and because it has better tools developed by Amazon and the community.