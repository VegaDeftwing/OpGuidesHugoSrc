# Chapter 11½ - Open Source, Licenses, and Copyright


> Open source enables a development method for software that harnesses the power of distributed peer review and transparency of process. The promise of open source is higher quality, better reliability, greater flexibility, lower cost, and an end to predatory vendor lock-in.

-- The Open Source Initiative Mission Statement

## Disclaimer

I am not a lawyer, and neither are any of my contributors to this section. This is not legal advice.

## To Begin

So you've decided to make your project open source. Great!

First, [decide on a definition of success. There is more than one.](https://dzone.com/articles/running-a-successful-open-source-project-1)

Then, you have a list of concerns in that article above.


## Choosing a License

Central to choosing a license is the idea of *copyleft*, [a term created by the Free Software Foundation](https://www.gnu.org/licenses/copyleft.en.html):

> Copyleft is a general method for making a program (or other work) free (in the sense of freedom, not “zero price”), and requiring all modified and extended versions of the program to be free as well.

There has been much internet debate around copyleft due to the strictness of its terms. This has caused a proliferation of licenses, including some license jokes.

For those new to open source licensing, my approach would be to ask yourself two questions:

* Does retaining control of the project and its future matter? Or do I simply want to offer it "as is"?
* If a Fortune 500 company were to use my software in its proprietary product to make money, would I care?

These are the questions that distinguish between "strength" of copyleft licenses actually written by lawyers, and those are your best options:

* If you care about how it is used, particularly but not only with regards to profit making, use [the GNU Affero General Public License (AGPL) v3](https://www.gnu.org/licenses/agpl.html).
* If you care about building a community, and don't care or want to encourage profit making by users, use [the Apache 2.0 Software License](https://www.apache.org/licenses/LICENSE-2.0.html).
* If you don't care at all, you might consider a [Creative Commons Zero Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/).

{{< tip >}}

Why not just put a note saying it's in the public domain? Because in many countries outside the United States, there are restrictions on the public domain. For example, in Germany, an individual cannot fully dedicate something to the public domain in a way that cannot be revoked, so it cannot be trusted for software. The Creative Commons Zero license was written by lawyers, and achieves this effect in such cases.

{{< /tip >}}

### Strong Copyleft: the GPL and friends

The Free Software Foundation envisioned open source software as a collaborative community. To keep it that way, they basically wanted everyone who used the software to become a part of that community, and share.

While I mentioned making money earlier, *the GPL does not forbid profiting*. Instead, it forbits closed source software based on the business model of "trade secret." That is knowledge that should be shared back to the community.

The license also goes to great lengths to make sure that other areas of law -- notably, patent law in the United States -- cannot be abused by the covered software.

### Weak Copyleft: Apache 2.0

The Apache Software foundation exists as a charity to give its software away for the greater good. As a result, it is also a copy-left license, but unlike the GPL, it does not require as much of its downstream users. In particular, they may use it in closed source software and turn a profit.

This is considered to be the least "political" license in the license debates.


### Other Licenses: BSD, MIT, X11, Oh My!

There are other liceses, that are much shorter, that seem to be similar to the Apache 2.0 License in spirit. However, these are inferior in important respects.

I will mention two famous ones. The first is [the MIT license](https://mit-license.org/):

> Copyright © 2021 \<copyright holders>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The second is the "BSD" license, which comes in various flavors. The most common one is [the "2 clause" version](https://opensource.org/licenses/BSD-2-Clause):

> Copyright \<YEAR\> \<COPYRIGHT HOLDER\>
>
>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
>
>1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
>
>2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
>
>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

{{< tip >}}
What is wrong with these licenses? They lack the ways in the GPL to prevent patent trolling, and may be read narrowly by non-US courts. The Apache 2.0 License addresses both of these concerns.
{{< /tip >}}

The Free Software Foundation has [given their own legal analysis of common licenses, and whether they are GPL compatible](https://www.gnu.org/licenses/license-list.html). It is worth reading before choosing anything except one of the three options above.

## What if I don't have a project?

Simple: contribute to someone else's! That's what makes open source work!

[TODO]

actually contribute on github, make an issue, submit a pull request, make a custom repo,

## Links

[Setting new expectations for open source maintainers](https://opensource.com/article/21/8/open-source-maintainers)

[How to break the Internet: Cory Doctorow at TEDxOxbridge (YouTube)](https://www.youtube.com/watch?v=aAWCN0Jed8g)

https://github.com/Marak/faker.js/issues/1046

[No, "Open Source" does not mean "Includes Free Support"](https://raccoon.onyxbits.de/blog/bugreport-free-support/) + [The update to that post.](https://raccoon.onyxbits.de/blog/reactions-bugreport-free-support/)

[My tiny side project has had more impact than my decade in the software industry (Mike's Corner on the Web)](https://mike.zwobble.org/2021/08/side-projects-vs-industry/)

# Chapter 11¾ - Things That Really Need to Exist

[Better than DuckDuckGo [Drew Devault's Blog]](https://drewdevault.com/2020/11/17/Better-than-DuckDuckGo.html)