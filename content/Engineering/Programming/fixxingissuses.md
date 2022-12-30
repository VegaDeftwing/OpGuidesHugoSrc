# Chapter 12½ - It Was Working Just A Second Ago...

Alright, so your code/electronics/computer/life was working fine just a second ago, and now it's just not working at all. Take a deep breath, and relax. Let's work though this.

# 🦆 Grab a rubber duck

This won't always be applicable, but assuming it's a system- code, or electronics, or a math problem, something that can be analyzed - explain it. Out loud. To a rubber duck. If it's code, do so line by line. if it's electronics, go connection by connection. Don't assume anything is working, just drop all assumptions and find the problem.

# ☑️ Check your assumptions again.

Did you actually check *all* of your assumptions? Compilers aren't always perfect. Your oscilloscope probe might need calibrated. Don't dive into the weeds until you've double checked everything first, but if you still can't figure it out, dig for what assumptions you're making. Did something actually change between now and when it was last working? Is something else giving you false readings?

... just make sure to stop short of questioning your own sanity.

# 👀 Fix by working comparison

Yeah, not always applicable advice, but if you have something that's even similar, first check that it still works, then check for what the differences are between what you're doing and the reference you have.

# 🧪 Check your Test Cases are Valid

What are your conditions for success? Are you even testing for these conditions correctly?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The author posted this video in the comments. It&#39;s a truck full of traffic lights. <a href="https://t.co/h2LwyL65ck">pic.twitter.com/h2LwyL65ck</a></p>&mdash; FSD in 6 months (@FSD_in_6m) <a href="https://twitter.com/FSD_in_6m/status/1400207129479352323?ref_src=twsrc%5Etfw">June 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< smalltext >}} [Archive.org backup of Twitter embed](https://web.archive.org/web/20210604001818/https://twitter.com/FSD_in_6m/status/1400207129479352323){{< /smalltext >}}

# 🐜 Actually use a debugger

For some reason a ton of programmers are allergic to their debuggers. There's more to life than print debugging. Set a break point. You can do it. I believe in you.

see: [Print Debugging Should Go Away](https://robert.ocallahan.org/2021/04/print-debugging-should-go-away.html) and the tools recommended in it, like [rr](https://rr-project.org) - also refer back to Chapter 11, [Low Level Programming]({{< relref "/Engineering/programming/lowlvl" >}}) where tools like valgrid were mentioned.

You may also want to skip ahead to Chapter 16, [Debugging, CI & CD]({{< relref "/Engineering/programming/debugbuildtest" >}}).

# ➗ Binary Search Debugging

The binary search algorithm looks a bit like this:

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Binary_Search.png" style="zoom:67%; -webkit-filter: invert(.85);" />



{{< attribution >}}

Chad250, [CC BY-SA 4.0](<https://creativecommons.org/licenses/by-sa/4.0>), via Wikimedia Commons

{{< /attribution >}}

So, what does this have to do with debugging? Apply the same idea- find things you can try to narrow down the problem seach space. Comment out some of the non-vital code, then bring it back in half at a time until the problem comes back, etc. Often, finding the problem is the hardest part, so having a strategy to search for it can be a big help.

# 📋 Keep a list of what you've tried and what you haven't tried

This is easy, just make a todo style list, if you come up with a new idea halfway though and try it real quick, add it and immediately check it off. This prevents the possibility of being 3 hours in and repeating the same 'fixes' as an exercise in insanity.
