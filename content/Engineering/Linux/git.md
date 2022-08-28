# Chapter 5½ - Git.

... Despite the chapter name, `git` isn't just a Linux thing - it's actually more of a programming thing, but you'll still probably want to use it for storing your configuration files for Linux, and it's worth learning *before* you really get into programming, which is why it's here. So, uh, what's `git`? 

The ELI5 of it is that it's a **Version Control System**, which really just means it can give you the equivalent of save states on your files, like in a video game- and just like a video game, you can save (or go back to a previous save) and have two different **branches** where you make a different decision in each. The only big point where this analogy breaks down is that you can **merge** two branches, resolving conflicts between them and that two different people can work on two different branches for them to be merged together. Rather than reinvent the wheel trying to teach you the basics, you should go read

<style>
    .cool{
		background: #333;
		padding-bottom: 10px;
    }
</style>


{{< best >}} [./missing-semester - Version Control](https://missing.csail.mit.edu/2020/version-control/) {{< /best >}}

![](/common/arrowthis.svg)

{{< tip >}}

The above link does a better job of covering the vast majority of what I'd say than I could hope to put here. Just check it out. But do come back here!

{{< /tip >}}

Oh, hai! Welcome back.

So, a lot of people conflate Git and Github, the largest git cloud service on the internet. This isn't totally without reason: Github is actually super nice to use, and is often the only way a lot of people use git. For better or worse, you'll probably want to know how to use it and use it well.

One of the first things you ~~should~~ have to do when using Github is set up authentication, that is a method for logging in from the command line so that you can push your changes in your code to Github's servers. For security reasons, you can't just use a password (This is a good thing) and instead need to set up key based authentication.

I'm going to save the nitty-gritty about how public-private key based authentication works for the <a href="/engineering/networking/security/">Security & Exploitation</a> chapter, but for now what you need to know is having a key pair will let you securely access git and ssh services on various servers, so we need to get keys setup.

{{< tabs >}}

{{< tab "Windows" >}}

Assuming you're running a somewhat recent release of Windows 10 or Windows 11, `ssh` should be installed by default. SSH is something we'll use later for it's intended purpose, but right now we need to use something included along with it, called `ssh-keygen`. If you open up a command prompt window, you should be able to run, well, exactly that- just type `ssh-keygen` and press enter. It should prompt you for where to save it - leave it the default by pressing enter. Then, it'll ask if you want to put a password on it, that's up to you, it's not strictly necessary. When done, that will make some new files for you in a folder at `C:/Users/{YourUserName}/.ssh` (note, this isn't in your documents, it's literally in your user folder, one below documents) the two files you just made are `id_rsa` and `id_rsa.pub`, these are your private and public keys respectively. 

{{< columns >}}

It'll also probably generate a pretty picture, something sorta like this:

As the names imply, you should keep your private key private, while you need to share your public key - in this case that means sharing it with Github. To do so, you can open `id_rsa.pub` in a text editor (if you have office installed, it might try to open it with "Publisher" - don't. Notepad or VSCode will work though)

You should see text that looks something like this:

<--->

<pre>
+---[RSA 3072]----+
|             ..oo|
|            o  ++|
|        .  + o .=|
|       + . E= ..*|
|      = S...   +.|
|     o =o=o=  .  |
|      o ooX.=.   |
|       + =.B +.o |
|        . +...=  |
+----[SHA256]-----+

</pre>

{{< /columns >}}

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCXdDCxYNL58FFxfeDRuokZGfvmo1S7cTr7tXOjQ1oAFAF4cWNjcNsFWUVO5oHkY59yVcLM0OSe029rCIP8ecGsXQdDP9wi3sRgpWBfaEf0vTKQ8oAJN1ipw+J2e57gV+UOMIapoTPHSSp3pCyUVS9GnZHct5vorLOCdr6V6JCTMj0KzvrlF67FV8pX9/6kiRjAQuFdFkYzeXwebW2l2GSe7nF/WfkZWMK6KAYPltnWjN9sXXbv5SXyeU6UmrnmKFJAygUj24AK8eXT8wqxIJBsIMUtO1pplLM/XJUCYC8XGcAmjo+E4heWmj3PAHO3A7GltmZoBNzsYdAvYbqVWNpn [YourUserName]@[YourComputersName]
```

We need to copy that and upload it to GitHub. Just head on over to https://github.com/settings/keys and click New SSH Key and paste that text in, name it whatever you like.

When done, you should see something like this:

<img src="/eng/gitkeys.webp" alt="keysongithub" style="zoom:50%;" />

Now, you need to actually go install git to Windows. There are plenty of ways to do this, but since you're in the command prompt anyway. You can use `winget`, Microsoft's package manager to grab it - just run `winget install -e --id Git.Git`. If you're on an older system without winget or just don't want to use it, you can [grab git for windows here](https://gitforwindows.org).

{{< speech >}}

By the way, `winget` is pretty awesome and has a lot of packages. Everything from Chrome to VLC is available, and it's a nice way to quickly set up a new computer.

{{< /speech >}}

Now we can set up your user in a `.gitconfig` file, fortunately, you can do this directly from the same command prompt you're at. Just run `git config --global user.email "YourEmail@InQuotesHere"` followed by `git config --global user.name "Your Username In Quotes Here"`. For simplicity, you might want to make sure the email and username both match the ones you use on GitHub, though (I think?) the username can be different without issue.

{{< /tab >}}

{{< tab "Linux & Mac" >}}

Mac OS X `ssh` should be installed by default, as should almost any Linux distro, if it's not, it'll usually be in the `openssh` package, so just install that with your package manager. SSH is something we'll use later for it's intended purpose, but right now we need to use something included along with it, called `ssh-keygen`. If you open up a terminal, you should be able to run, well, exactly that- just type `ssh-keygen` and press enter. It should prompt you for where to save it - leave it the default by pressing enter. Then, it'll ask if you want to put a password on it, that's up to you, it's not strictly necessary. When done, that will make some new files for you in a folder at `~/.ssh` the two files you just made are `id_rsa` and `id_rsa.pub`, these are your private and public keys respectively. 

{{< columns >}}

It'll also probably generate a pretty picture, something sorta like this:

As the names imply, you should keep your private key private, while you need to share your public key - in this case that means sharing it with Github. To do so, you can open `id_rsa.pub` in a text editor, such as TextEdit on Mac or VSCode/Nano/Sublime/Whatever on Linux.

You should see text that looks something like this:

<--->

<pre>
+---[RSA 3072]----+
|             ..oo|
|            o  ++|
|        .  + o .=|
|       + . E= ..*|
|      = S...   +.|
|     o =o=o=  .  |
|      o ooX.=.   |
|       + =.B +.o |
|        . +...=  |
+----[SHA256]-----+

</pre>

{{< /columns >}}

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCXdDCxYNL58FFxfeDRuokZGfvmo1S7cTr7tXOjQ1oAFAF4cWNjcNsFWUVO5oHkY59yVcLM0OSe029rCIP8ecGsXQdDP9wi3sRgpWBfaEf0vTKQ8oAJN1ipw+J2e57gV+UOMIapoTPHSSp3pCyUVS9GnZHct5vorLOCdr6V6JCTMj0KzvrlF67FV8pX9/6kiRjAQuFdFkYzeXwebW2l2GSe7nF/WfkZWMK6KAYPltnWjN9sXXbv5SXyeU6UmrnmKFJAygUj24AK8eXT8wqxIJBsIMUtO1pplLM/XJUCYC8XGcAmjo+E4heWmj3PAHO3A7GltmZoBNzsYdAvYbqVWNpn [YourUserName]@[YourComputersName]
```

We need to copy that and upload it to GitHub. Just head on over to https://github.com/settings/keys and click New SSH Key and paste that text in, name it whatever you like.

When done, you should see something like this:

<img src="/eng/gitkeys.webp" alt="keysongithub" style="zoom:50%;" />

Now we need Git. On Mac, `git` is *kinda* installed by default. If you go to run it, you'll get prompted to install "Command Line Developer Tools". Do that.

On Linux, you probably already have git, but if not, it's probably in your distro's repositories as `git`, so just install it as you normally would.

Now we can set up your user in a `.gitconfig` file, fortunately, you can do this directly from the same command prompt you're at. Just run `git config --global user.email "YourEmail@InQuotesHere"` followed by `git config --global user.name "Your Username In Quotes Here"`. For simplicity, you might want to make sure the email and username both match the ones you use on GitHub, though (I think?) the username can be different without issue.

{{< /tab >}}

{{< /tabs >}}

That's half the battle, you have successfully set up keys for your account, but GitHub has a second layer of authentication that's worth setting up too, which adds a sort of virtual signature to each change you push to GitHub as a confirmation to people that what they see was really written by you.

{{< details "But I already had repos on GitHub, how do I make them use these keys?">}}

There's a good chance that when you made the repo and pulled it down to your computer you used the URL of the repo on GitHub, such as running `git clone https://github.com/VegaDeftwing/OpGuidesHugoSrc`, while this does work, it sets GitHub to use the HTTP protocol for authentication, which isn't what we want, instead we need to use the git protocol.

<img src="/eng/gitclone.webp" alt="GitHub Code Button" style="zoom:35%;" />

Like this, where the link is instead `git@github.com:VegaDeftwing/OpGuidesHugoSrc.git` (so the command you need to run might be `git clone git@github.com:VegaDeftwing/OpGuidesHugoSrc.git`) but the problem is you already cloned your repo, so what now? You don't need to delete everything and restart, you just need to change the remote. 

1. Start by running `git remote -v` to see what the current URL is
2. Copy the `git` based URL from GitHub (or wherever you host your repo)
3. Run `git remote set-url origin git@github.com:UserName/repo.git`, using the URL you copied
4. run `git remote -v` again to confirm it changed over.

For example:

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

---

Note though, you probably don't want to clone *everything* as git, especially if it's someone eles' repo you're grabbing to build yourself, as sometimes it will try to authenticate with git and fail because you don't have permissions to access the repo. This is an annoying edge case and *usually* doesn't matter, but it can.

{{< /details >}}

[TODO] adding GPG key to account for Github verified thing

[TODO] Github PR to OpGuides

## Making A PR on GitHub

1. Go to [OpGuide's GitHub Repo](https://github.com/VegaDeftwing/OpGuidesHugoSrc)

2. Click "<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
    <path fill="#FFFFFF" fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
    </svg> Fork " in the top right
    
3. Clone your copy of the repo, `git clone git@github.com:YouUserName/OpGuidesHugoSrc.git`

4. Go to this file (content→Engineering→Linux→git.md)

5. Add your name to the list below using a text editor.

6. Run `git add .`, followed by `git commit -m "added [yourname] to Cool People"`

6. Run `git push` to push your changes to *your* copy of the repo on GitHub

7. Go back to the [OpGuide's GitHub Repo](https://github.com/VegaDeftwing/OpGuidesHugoSrc)

8. You'll see a banner at the top of the page that looks something like this:

    [TODO]

    Click [TODO]

9. You'll be prompted with the checklist that's in the [pull_request_template.md](https://github.com/VegaDeftwing/OpGuidesHugoSrc/blob/main/pull_request_template.md) file. Since you're just adding your name, please check the first box "Everything I'm contributing..." and the first box on the Public Domain option.

10. Click [TODO]. Now the Pull Request has been summited but should be marked as "Open". This means that I now need to either approve it or not. If it gets approved you'll see "Merged" otherwise you'll see "Closed". This may take a few days. Once I've merged the change, it may not go live right away, as I still have to push it to the live version of the website.

11. Optionally, once the PR is done, you may want to delete your copy of the repo from your repositories.

<div class="cool">

## Cool People that Have Submitted A PR To Edit This Page

1. [Your Name Here]

</div>

[Bit, an alternative git CLI (Github)](https://github.com/chriswalz/bit)

[learngitbranching.js.org](https://learngitbranching.js.org) (more than just branching)

[μGit- DIY Git in python](https://www.leshenko.net/p/ugit/)

[SSH keys article on the (Arch Wiki)](https://wiki.archlinux.org/index.php/SSH_keys)

`ssh-keygen` 

you may need to change the existing repo to use a git based origin rather than a HTTPS one:

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

[TODO] Git on not-github, DIY hosting

https://dhwthompson.com/2019/my-favourite-git-commit

[TODO] Files Git works with

https://blog.martinfenner.org/2014/08/25/using-microsoft-word-with-git/

[TODO] Not committing private info to Git

[What will happen when you commit secrets to a public Git repo? ](https://tinysubversions.com/spooler/?url=https://twitter.com/andrzejdyjak/status/1324360914812940293)

http://www.ndpsoftware.com/git-cheatsheet.html#loc=index;

https://onlywei.github.io/explain-git-with-d3/

## Notes on GitHub and competition

[Stop using number of git commits as any metric (u/Sajjon on Reddit)](https://www.reddit.com/r/CryptoCurrency/comments/cub9c2/stop_using_number_of_git_commits_as_any_metric/)

[![trophy](https://github-profile-trophy.vercel.app/?username=vegadeftwing)](https://github.com/ryo-ma/github-profile-trophy)

> generated using https://github.com/ryo-ma/github-profile-trophy, the above are the stats on my GitHub profile

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

[CSS in Github READMEs](https://github.com/sindresorhus/css-in-readme-like-wat)

## Further Reading

[./missing-semester - Metaprogramming](https://missing.csail.mit.edu/2020/metaprogramming/)

# Chapter 6¾ - Documentation

[Let's talk about changelogs, or, how I loathe 'bugfixes and performance improvements' (Remy van Elst's Blog)](https://raymii.org/s/blog/Rant_Lets_talk_about_changelogs.html)

https://keepachangelog.com/en/1.0.0/