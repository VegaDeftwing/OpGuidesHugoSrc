# Chapter 5½ - Git.

![](/common/arrow.svg)

{{< best >}} [./missing-semester - Version Control](https://missing.csail.mit.edu/2020/version-control/) {{< /best >}}

![](/common/arrowthis.svg)

{{< tip >}}

The above link does a better job of covering the vast majority of what I'd say than I could hope to put here. Just check it out. But do come back here!

{{< /tip >}}

Oh, hai! Welcome back.

So, a lot of people conflate Git and Github, the largest git cloud service on the internet. This isn't totally without out reason: Github is actually super nice to use, and is often the only way a lot of people use git. For better or worse, you'll probably want to know how to use it and use it well.

One of the first things you ~~should~~ have to do when using Github is setup authentication, that is a method for logging in from the command line so that you can push your changes in your code to Github's servers. For security reasons, you can't just use a password (This is a good thing) and instead need to setup key based authentication.

I'm going to save the nitty gritty about how public-private key based authentication works for the <a href="/engineering/networking/security/">Security & Exploitation</a> chapter, but for now what you need to know is having a key pair will let you securely access git and ssh services on various servers, so we need to get keys setup.

[TODO]



---

[Bit, an alternative git cli (Github)](https://github.com/chriswalz/bit)

[learngitbranching.js.org](https://learngitbranching.js.org) (more than just branching)

[μGit- DIY Git in python](https://www.leshenko.net/p/ugit/)

[TODO] Show how to setup SSH keys for Git

[SSH keys article on the (Arch Wiki)](https://wiki.archlinux.org/index.php/SSH_keys)

`ssh-keygen` 

After you have a key generated, you'll need to add the public key to github,

<img src="/eng/gitkeys.webp" alt="keysongithub" style="zoom:50%;" />

you may need to change existing repo to use a git based origin rather than an https one:

```bash
╭─vega@lyrae ~/git/local/opguides  ‹master› 
╰─➤  git remote -v
origin	https://github.com/VegaDeftwing/opinionatedguide (fetch)
origin	https://github.com/VegaDeftwing/opinionatedguide (push)
╭─vega@lyrae ~/git/local/opguides  ‹master› 
╰─➤  git remote set-url origin git@github.com:VegaDeftwing/opinionatedguide.git
╭─vega@lyrae ~/git/local/opguides  ‹master› 
╰─➤  git remote -v
origin	git@github.com:VegaDeftwing/opinionatedguide.git (fetch)
origin	git@github.com:VegaDeftwing/opinionatedguide.git (push)
```

[TODO] show graphical git tools

https://desktop.github.com

https://extrawurst.itch.io/gitui

https://aurees.com

https://gitfiend.com

http://cong.tools (Windows only)

https://gitahead.github.io/gitahead.com/

https://github.com/FredrikNoren/ungit

https://gitextensions.github.io (Windows only)

https://tortoisegit.org/download/ (Windows only)

[TODO] comparison of Bit, Git, GithubCLI

[TODO] .gitignores

[TODO] show `git log --all --graph --decorate --oneline` and adding it to the gitconfig

[TODO] git diff

https://github.com/dandavison/delta

[TODO] Git on not-github, diy hosting

https://dhwthompson.com/2019/my-favourite-git-commit

[TODO] Files Git works with

https://blog.martinfenner.org/2014/08/25/using-microsoft-word-with-git/

[TODO] Not commiting private info to Git

[What will happen when you commit secrets to a public Git repo? ](https://tinysubversions.com/spooler/?url=https://twitter.com/andrzejdyjak/status/1324360914812940293)



https://onlywei.github.io/explain-git-with-d3/

## Notes on GitHub and competition

[Stop using number of git commits as any metric (u/Sajjon on Reddit)](https://www.reddit.com/r/CryptoCurrency/comments/cub9c2/stop_using_number_of_git_commits_as_any_metric/)

[![trophy](https://github-profile-trophy.vercel.app/?username=vegadeftwing)](https://github.com/ryo-ma/github-profile-trophy)

> generated using https://github.com/ryo-ma/github-profile-trophy, the above are the stats on my github profile

<img src="/eng/gitcontrib.png" alt="Vegas git contrib graph" style="zoom:50%;" />

<img src="/eng/badmetric.png" alt="badmetric" style="zoom:50%;" />

> ahh, much better. Made using https://github.com/gelstudios/gitfiti, inspired by someone else that wrote the same thing, but I can't find the original.

## Other Version Control Systems

{{< tip >}}

Git is by far the most used VCS out there. If you want to use something else I encourage you to try it and learn it, but realize if the point is to work with others it might be a pain

{{< /tip >}}

[TODO]

Subversion

Mercurial

CVS

Fossil

## Weird Git

https://radicle.xyz 

[CSS in Github READMEs](https://github.com/sindresorhus/css-in-readme-like-wat)

## Further Reading

[./missing-semester - Metaprogramming](https://missing.csail.mit.edu/2020/metaprogramming/)

# Chapter 6¾ - Documentation

[Lets talk about changelogs, or, how I loathe 'bugfixes and performance improvements' (Remy van Elst's Blog)](https://raymii.org/s/blog/Rant_Lets_talk_about_changelogs.html)