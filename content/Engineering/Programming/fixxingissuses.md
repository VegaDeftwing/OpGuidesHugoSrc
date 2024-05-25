# Chapter 13 - Fixing Issues & Debugging 

Alright, so your code/electronics/computer/life was working fine just a second ago, and now it's just not working at all. Take a deep breath, and relax. Let's work though this.

# 🦆 Grab a rubber duck

This won't always be applicable, but assuming it's a system- code, or electronics, or a math problem, something that can be analyzed - explain it. Out loud. To a rubber duck. If it's code, do so line by line. if it's electronics, go connection by connection. Don't assume anything is working, just drop all assumptions and find the problem.

# ☑️ Check your assumptions again.

Did you actually check *all* of your assumptions? Compilers aren't always perfect. Your oscilloscope probe might need calibrated. Don't dive into the weeds until you've double checked everything first, but if you still can't figure it out, dig for what assumptions you're making. Did something actually change between now and when it was last working? Is something else giving you false readings?

… just make sure to stop short of questioning your own sanity.

# 👀 Fix by working comparison

Yeah, not always applicable advice, but if you have something that's even similar, first check that it still works, then check for what the differences are between what you're doing and the reference you have.

# 🧪 Check your Test Cases are Valid

What are your conditions for success? Are you even testing for these conditions correctly?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The author posted this video in the comments. It&#39;s a truck full of traffic lights. <a href="https://t.co/h2LwyL65ck">pic.twitter.com/h2LwyL65ck</a></p>&mdash; FSD in 6 months (@FSD_in_6m) <a href="https://twitter.com/FSD_in_6m/status/1400207129479352323?ref_src=twsrc%5Etfw">June 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< smalltext >}} [Archive.org backup of Twitter embed](https://web.archive.org/web/20210604001818/https://twitter.com/FSD_in_6m/status/1400207129479352323){{< /smalltext >}}

# 🐜 Actually use a debugger

For some reason a ton of programmers are allergic to their debuggers. There's more to life than print debugging. Set a break point. You can do it. I believe in you. If you want to know more about debugging, keep reading on this page.

# ➗ Binary Search Debugging

The binary search algorithm looks a bit like this:

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Binary_Search.png" style="zoom:67%; -webkit-filter: invert(.85);" />



{{< attribution >}}

Chad250, [CC BY-SA 4.0](<https://creativecommons.org/licenses/by-sa/4.0>), via Wikimedia Commons

{{< /attribution >}}

So, what does this have to do with debugging? Apply the same idea- find things you can try to narrow down the problem seach space. Comment out some of the non-vital code, then bring it back in half at a time until the problem comes back, etc. Often, finding the problem is the hardest part, so having a strategy to search for it can be a big help.

# 📋 Keep a list of what you've tried and what you haven't tried

This is easy, just make a todo style list, if you come up with a new idea halfway though and try it real quick, add it and immediately check it off. This prevents the possibility of being 3 hours in and repeating the same 'fixes' as an exercise in insanity.

---

## Other Resources:

[How Game Designers Solved These 11 Problems (Game Maker's Toolkit, YouTube)](https://www.youtube.com/watch?v=rJZyPdYIbZI&list=PL5cGwrD7cv8hK-qxPqRB25Dzs0BtLWhXz)



## Debugging

[./missing-semester - Debugging and Profiling](https://missing.csail.mit.edu/2020/debugging-profiling/)

see: [Print Debugging Should Go Away](https://robert.ocallahan.org/2021/04/print-debugging-should-go-away.html) and the tools recommended in it, like [rr](https://rr-project.org).

### Software Debugging

[TODO]

GDB with Gef, interpreted languages, embedded systems, non-code issues (boot problems, glitchy behavior), hardware failures, valgrind, various trace programs, print debugging extended

### Debuggers

[GDB Frontend](https://github.com/rohanrhu/gdb-frontend)

[GDB + GEF](https://gef.readthedocs.io/en/master/)

[The State of Linux Debuggers (Jamie Brandon's Blog)](https://scattered-thoughts.net/writing/the-state-of-linux-debuggers/) ← This is a decent rant about why most debuggers sort of suck. And yeah, they do. But we still sorta need them

[Advanced GDB Usage (Interrupt)](https://interrupt.memfault.com/blog/advanced-gdb)

https://rr-project.org

\+ valgrid in here somewhere, ref 11- low level prog

#### Static Analysis

[CodeChecker using LLVM/Clang (GitHub)](https://github.com/Ericsson/codechecker)

### Hardware Debugging

common interfaces, simulation, serial/print debugging (slow), internal data logging, physical indicators of internal state, hardware to facilitate debugging (LED 'byte')

[TODO] [Embedded C/C++ Unit Testing Basics (Interrupt)](https://interrupt.memfault.com/blog/unit-testing-basics)

[TODO] [Faster Debugging with Watchpoints (Interrupt)](https://interrupt.memfault.com/blog/cortex-m-watchpoints)

TODO: Mention looking at peripheral registers, how to handle interrupts, etc.
