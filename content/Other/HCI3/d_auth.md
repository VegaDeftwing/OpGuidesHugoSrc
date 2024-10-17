

First, some terminology,



<style>
    .non_quote {
  display:inline-block;
  margin:1em;
  overflow:hidden;
  blockquote {
    background-color:#1F1F1F;
    border: solid 2px #757575;
    display: inline-block;
    margin: 0;
    padding: 1em;
    position: relative;
    &:before {
      background-color: #1F1F1F;
      bottom: -10%;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: -10%;
      transform: rotate(-5deg) skew(50deg);
    }
    cite {
      display: block;
      font-style: italic;
      text-align: right;
      &:before {
        content: "- ";
      }
    }
    > * {
      position: relative;
      z-index: 1;
    }
  }
}
</style>



<div class="non_quote">
  <blockquote>
      <p><b>Authentication</b> is the sign in- the verifying you are who you say you are</p>
      <p><b>Authorization</b> is what the user and service can do, or what 'permissions' you grant the service and what you're allowed to do on the service.</p>
  </blockquote>
</div>



# Authentication & Identity

Authentication is as much a social problem as it is a digital one.

If we all had RFID tags implanted in our hands as I do,

<img src="/hci/rfid.svg" class="lg-no-shadow" style="height:15em;">

it'd be simple, right? We just authenticate with our hands!

Sure, maybe with something like this it *might*, *maybe* be possible to have a good way to verify identity, but that misses an important point in authentication: You don't always want to only have one identitiy.

Maybe you want to keep your work account separate from a personal one. Maybe you're testing the waters with your gender identity and don't want it to be tied back to other accounts. Whatever the case, we don't *want* identity verification to be absolute.

This actually goes a lot deeper, I absolutely recommend giving [A Brief Introduction to Deniability](https://soatok.blog/2020/11/04/a-brief-introduction-to-deniability/) by my friend Soatok a good read.

But, let's ignore all of that. Let's just assume you do only have one identity, that you are 1000% confident you'll never want to change it out, etc.

How do you do that? How do you prove you are you and prevent others from claiming they're you.

Well, historically, passwords.

Today, we'd call this "something you know", and it's one of a few different authentication mechanisms:<footnote>You may also see "Somewhere you are" and "Something you do", but I'm going to ignore those.</footnote>

1. Something you know (Password, pin)
2. Something you have (ID Card)
3. Something you are (Biometrics)

Today, the general advice is to put anything you care about behind multiple factors and to make the "something you know" different on each service.

This is a royal pain in the ass.

This is why people use the same junk password across a ton of different services, and don't use multiple factors.

Which then means when, inevitibly, one of them get's hacked, it's not *one* service that a user has compromised, it's many.

Go find someone's password in previous [security breaches (haveibeenpwned)](https://haveibeenpwned.com/PwnedWebsites) and try in a bunch of services. No dark hacking sorcery required.

But, wait, now you can avoid making 10,000 acounts with different passwords, you just have to 



<button style="
  background-color: #ffffff;
  color: #757575;
  border: 1px solid #dadce0;
  border-radius: 4px;
  padding: 10px 24px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3);
">
  <span style="
    color: #4285F4;
    font-weight: bold;
    margin-right: 8px;
    font-size: 18px;
  ">F<span style="color: #EA4335;">o</span><span style="color: #FBBC05;">o</span><span style="color: #4285F4;">B</span><span style="color: #34A853;">a</span><span style="color: #EA4335;">r</span></span>
  <span style="flex-grow: 1;">Login with your FooBar account</span>
  <span style="margin-left: 8px;">&#x2192;</span>
</button>

<style>
  button:hover {
    background-color: #f1f3f4;
    box-shadow: 0 2px 6px rgba(60, 64, 67, 0.4);
    transform: translateY(-2px);
  }
</style>



But, wait. What if you loose access to your account.

<span>   <span style="color: #4285F4;">G</span><span style="color: #EA4335;">o</span><span style="color: #FBBC05;">o</span><span style="color: #4285F4;">g</span><span style="color: #34A853;">l</span><span style="color: #EA4335;">e</span> </span> absolutely gives negative fucks. You will not get support, you will simply loose access to everything*

{{< smalltext >}}*probably. I'm mosty saying "probably" for legal reasons though. It's become a bit of a meme for the best way to get support from Google, Meta, etc. to be posting online in technical circles until either an engineer sees it or it becomes a big enough PR problem, which is hard for a normal person to do.{{< /smalltext >}}

# OLD

#### Authentication:

I'll bet cold, hard fictional cash that you've put off turning on two factor for a service you don't give two shits about.

I'll double my fictional money to bet that you have a junk password you use by default everywhere you don't give a shit.

Hell, I'll go all in betting on saying you've authenticated with quite a few services by just using the 

<div class="w3-container" style="width:fit-content%;display: inline-block;" ><p><button class="w3-button w3-blue w3-round-xxlarge w3-block">LOGIN WITH SOCIAL MEDIA</button></p></div></br>

button, though possibly only because it was the only way to login to that service at all.

Unfortunately, all of the above are probably not the best decisions.

The top two points combined mean someone can find your password in previous [security breaches (haveibeenpwned)](https://haveibeenpwned.com/PwnedWebsites), and then just login in, easy as that.

Using a social media login means that if you ever lose access to that account, either because Facebook or Google or Twitter or whatever decide to ban you or because you manage to forget you 'master' password and lock yourself out, you'll be locked out of everything you logged into those services with. Not to mention if someone manages to break into your Facebook or Goggle or Twitter or whatever they'll be able to login to any of those services too.

And look, I'm guilty of all of the above too. Sure, a password manager helps with this, but that's still annoying too as sometimes you just need to quickly sign in on a device for a few minutes. As of right now there's just no good solutions that are secure, easy to use everywhere, and fine gained enough to let the user give permissions as they want, and not give extra permissions they don't want to.

Alright, so just follow the normal advice and use long passwords?

![](https://imgs.xkcd.com/comics/password_strength.png)

{{< attribution >}}

[xkcd #936](https://xkcd.com/936/)

{{< /attribution >}}

Yeah. No. Well sorta. Okay, let me explain. Yes, you should use long passwords for exactly the reason this comic explains. But really, we need to stop using passwords outright. They just sorta suck.

Instead, we should go to [Single Sign-On](https://en.wikipedia.org/wiki/Single_sign-on), like the above "Login with Social Media" example, but the *user* should be able to trust and change the identity provider with ease, to avoid the 'Facebook banned me' issue.

The real shitty part is a lot of services already support something like this, letting you setup sign in with Single Sign-On via your own identity server, but it's usually limited to enterprise users.

That said, you can self host Single Sign-On (like the way 'Sign in With Google' works), [keycloak](https://www.keycloak.org), [Dex](https://github.com/dexidp/dex), [Gluu](https://www.gluu.org) are options for doing this. It's just that basically no online services will let you use your self hosted service without an enterprise account.

So, for now, users get fucked. There's really not any good options.

That said, some things have gotten better, [Webauthn](https://en.wikipedia.org/wiki/Single_sign-on) provides a much better way to authenticate with many services, including some that can provide Single Sign-On identities, often via those little [USB keys](https://www.yubico.com/products/) which are hugely better than the typical user name and password paradigm. 

{{< tip >}}

Note, those USB security keys have updated in standard. The newer ones which support WebAuthn are a bit more expensive and less common. The standards are confusing to understand, but the TLDR is you want something that supports WebAuthn/FIDO2.</br>The older standard, U2F, is a two factor system while the FIDO2/Webauth keys can outright replace passwords on the service

{{< /tip >}}

{{< hint info>}}

If you really want advice on what to use for your personal, daily password storage needs I think [keepassxc](https://keepassxc.org) is probably the best option at the moment, though it's still a tad awkward.

<p>For advice on security and privacy see the {{< button relref="/Engineering/Networking/security" >}}Security & Exploitation{{< /button >}} and {{< button relref="/Engineering/Networking/privacy" >}}Privacy{{< /button >}} pages.<p>
{{< /hint >}}


#### Authorization:

{{< columns >}}

<img src="/nonfree/character/shade/hack.webp" alt="Vega hacking on a laptop">

{{< attribution >}}Character owned by Vega, art by [Shade](https://twitter.com/shadepiplup10) {{< /attribution >}}

<--->

Put simply, we need easier to use, fine grain authorization settings that can't be bypassed. I should be able to tell a program, website, or app that I don't want to give it my location, and then, if it asks anyway it should be fed garbage. Refusal should also not stop access to that service<footnote>... unless that service is based around that permission, like denying a recording app access to a microphone.</footnote>. Similarly for storage, microphone, contacts, etc.

Newer versions of Android actually do this really well, including the ability to only grant those permissions for that session. This is amazing. It's not *perfect*, far from it. Like, Bluetooth requires location permissions and, unless you're on a rooted phone, there are some permissions the user can't even give. That's a load of shit, but I'll come back to that. 

{{< /columns >}}