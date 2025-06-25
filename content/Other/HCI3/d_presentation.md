## Presentation of Information Sucks

---
Thoughts:
* Windows Taskbar sizing

---

This section is about how we view information, the presentation of words on a page, graphs, and information in general. To start, I want to look at something a little bit different.

![](/hci/gemini.webp)

This is the home page for a project called [Gemini](https://gemini.circumlunar.space), which is a sort of alternative internet, but, wait, hang on...

{{< columns >}}

![](/hci/gemini2.webp)

<--->

![](/hci/gemini3.webp)

{{< /columns >}}

These are both that same page, loaded in different browsers. Why do they look different?

Well, Gemini does something you may thing strange: It let's the browser (client) handle the look of the page. It only serves the raw text. That's it. That's all you get.

Now, I *do not* think this is a good idea for the general web. But, I do think as an idea, it can give us some valuable insights.

Put a pin in it for now though, let me jump ahead into Dark Patterns:

### 'Dark Patterns'

{{< quote "[Wikipedia](https://en.wikipedia.org/wiki/Dark_pattern)" >}}

A **dark pattern** is "a user interface that has been carefully crafted to trick users into doing things, such as buying overpriced insurance with their purchase or signing up for recurring bills"

{{< /quote >}}

That's the definition from Wikipedia anyway. I think it's a bit better put as "Dark Patterns are what happens when UI designers are a bag of dicks"

[This Site](https://darkpatterns.org/types-of-dark-pattern.html) has a lot of really good info on Dark Patters, and I recommend heading over there and then coming back over here. 

Oh, cool, you're back.

The biggest dark pattern that drives me nuts is a bit of what that site calls 'Confirm Shaming' and a bit of 'Misdirection', I'm talking about sites that do this

<div class="w3-container"><p><button class="w3-button w3-green w3-round-xxlarge w3-block">DO THE THING HERE</button></p></div>
<div class="w3-container"><p><button class="w3-button w3-black w3-tiny w3-round-xxlarge">or don't and watch the world burn</button></p></div>
<p>where the design is actively pursing an agenda. But it's not just those. Even ones that look semi reasonable can still be annoying if they don't include the action directly.  The affirmative action should be stated on the button that triggers it and both actions given equal weight to the user.</p>
<div class="w3-bar">
  <button class="w3-bar-item w3-button w3-red" style="width:50%">Don't Do Action</button>
  <button class="w3-bar-item w3-button w3-green" style="width:50%">Do Action</button>
</div>
<p>for example</p>
<div class="w3-bar">
  <button class="w3-bar-item w3-button w3-red" style="width:50%">Leave Items in Place</button>
  <button class="w3-bar-item w3-button w3-green" style="width:50%">Delete Items</button>
</div>



Note here by Action I literally mean to **include the verb.** Delete. Replace. Print. Etc. Yes or No *is not* good enough.

With destructive or irreversible actions, such as deletion (not recycling), given a confirmation dialogue, and if particularly important, a dialogue that require *meaningful* user input, like this prompt when deleting a repo on GitHub

<img src="/hci/delconfirm.webp" alt="DelConfirm" style="zoom:50%;" />

Alright, so back to Gemini: Making more things like it wouldn't totally solve this problem, designers could still totally chose to make the text confirm shame, but by letting more elements be controlled by the user (or their browser), we could at least do a little bit better by letting that ensure options to confirm or deny are given equal weight and that they are colored appropriately.

It's not like this system couldn't be abused still of course, and there will always be a balance between the user trusting the service and it's UI and the beauty of that UI, but I think we could stand to go a bit in the direction of Gemini.

### Misleading Information

{{< quote "Rush Limbaugh, recipient of the Medal Of Freedom." >}}

Global warming relies on the theory that we are destroying ecosystems. There is no evidence that we could destroy ecosystems.

{{< /quote >}}

Yes. Misinformation online is a royal fucking shit show. There's no way to possibly preserve total free speech, [not that free speech is always perfect](https://en.wikipedia.org/wiki/Paradox_of_tolerance), and also have a system that doesn't spread misinformation to the extent that people stop vaccinating their kids or thinking that COVID is a hoax. I'm not trying to address that problem. If I could, I would. But I honestly think that's a genie we can't really put back in the bottle now.

Instead, I think we could do some things to make it a bit harder to spread stupid, false information by making it a bit harder to present data in misleading ways. Sure, the data itself may still be bad, but, we can make an attempt to increase transparency and display data accurately. How? Well, first, go have a look at some [comically bad graphs (Statistics How To)](https://www.statisticshowto.com/misleading-graphs/). 

A lot of these come down to graphs that purposefully play with axis or do other bullshit with the express intent of tricking you.

So, fuck their formatting. We should do it the Gemini way: Let the client handle the data display, and make the graphs interactive. If it's a two bar chart with one bar at 54.5% and one bar at 55.0%, that should be what the user sees first and only then can zoom in.

> This is already easy enough to do with something like https://d3js.org/, but it would need to be on the client side, and the server would just have to send the raw data + a preferred way to render it (bar chart or whatever), otherwise the problem is still there. Over time standards could grow to support more display formats. This would have the side effect of making it easier to author data and make web pages in the first place.

This also makes it easier to compare data sets, as now the client actually has access to the source data, or at least the data that drew the graph.

This practice could be incentivized too, as news, shopping, and review sites that use it could do so as a way to build trust with their users, and, probably more importantly for adoption, shit on their competitors that don't do the same.

For those that still don't, it might be possible to spin up a system with some machine learning to extract data from graphs in static images, and then re-display them as dynamic content.

This may not ensure the data is good, but at least it makes progress in increasing how we can trust data to some extent.

This could have extra uses too. Having something that could take two 2D graphs with a common axis and turn it into one 3d graph would be incredible, particularly if that data could come from multiple sources across multiple domains. Combine this with the ability to change the type of graph and this could help expose otherwise non obvious trends. After all, some of the best discoveries come from random people making cross disciplinary connections.

Beyond that, content moderation needs improvements too - I don't even mean fake news or porn here (Though we could stand to have better nsfw tagging on most social media). I mean the bullshit reviews on Amazon or the fake products when shopping online (mostly fake electronics). If those services are going to be allowed to make stupid amounts of money, they should be required to do at least a tiny bit of consumer protection. Hell, Amazon was even selling [Negative Ion/Anti-5g Products Are Actually RADIOACTIVE (The Thought Emporium)](https://www.youtube.com/watch?v=C7TwBUxxIC0).

### Information Overload

{{< attribution >}}Yes, I see the irony in a post this long.{{< /attribution >}}

<img src="/hci/times-square.webp" alt="Times Square" style="zoom: 33%;" />

{{< attribution >}}

Bobby Mikul, Times Square :CC0 -- [Source](https://www.publicdomainpictures.net/en/browse-author.php?a=2185)

{{< /attribution >}}

Information overload is increasingly becoming a problem. As more and more information is accessible at our fingertips and more advertisements have the opportunity to be beamed via any one of a number of surrounding screens directly into our retinas we need a way to filter it down to levels the human brain can cope with and digest.

This is a complicated subject, on one hand, it's amazing to have an infinite wealth of information. On the other, an ever growing amount of that information is shit and irreverent, and eats away at our very limited mental processing time for the day, we can only ingest and actively pay attention to or throw out so much information, and when much of the information we seek to avoid (ads) are actively doing everything in their power to demand attention from our brains, be it with sex appeal, bright colors, or even humor, it's an uphill battle. So what can we do? Well, a good start would be to legally limit advertising to be less distracting from normal content **and** make the advertising more easily distinguishable from the real content. But I don't think that's enough. I think if we're going to make systems that have machine learning to get better and better at sucking our time we need to put in just as much effort to making design that promotes health and consumption in moderation.

An example of this is Netflix's 'Are you still watching?' while this was implemented on their end to prevent unnecessary usage of data, it has the side effect of letting a user know they've been on the couch longer than should probably be advised. I'm not advocating for interruptions at every corner, just affirmative action by the user before bombardment with data. I do think as much data as possible should be linked to or aggregated, but force me to see more than what I request plus some surface level information. For something like YouTube this might mean playing a playlist is fine, but don't start playing another 'related' video when that list is over.

Beyond that, keeping the design minimal but powerful. I think markdown is a great example of this. Users aren't as dumb as people seem to think, we can, and do, learn the ways to make interaction with the things we use daily faster, so make the 'speed limit' as fast as it can be while lowering the need for menu diving and learning to do complex actions. Putting a frequently used option into a menu that needs to be clicked at all is much slower than assigning it a keyboard shortcut.

But, okay, back to information overload: The biggest problem is still that there's just too much. I don't really think there is a solution, maybe  [Banning Outdoor Ads like Brazil's Largest City Did](https://newdream.org/blog/sao-paolo-ad-ban), would be a start. Maybe requiring that the Terms of Service for any service a user signs up to be a limited length and actually commendable would help. But I just don't know. I think the world has just simply progressed to a point where FOMO has gotten to a point where missing out is just a fact of life as [500 hours of content are uploaded to YouTube every minute.](https://www.tubefilter.com/2019/05/07/number-hours-video-uploaded-to-youtube-per-minute/) 

What I do know is that trusting the YouTube or Facebook or Twitter algorithm to decide the content I see is incredibly dangerous, but that the alternative is overwhelming.

Meanwhile, legislation that has been passed to try to fix some of this often results in other issues, like all the 'Can we give you cookies?' prompts on websites: [Why The Web Is Such A Mess (Youtube - Tom Scott)](https://www.youtube.com/watch?v=OFRjZtYs3wY&ab_channel=TomScott)

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Imagine: drag to select text, pinch to summarize, vertical unpinch to generate alternatives, *inspiration*, record new sentence to replace the old one<br><br>And voilà, you&#39;ve explored multiple directions on the landscape of meaning and rewrote a sentence in just a few moments<br><br>4/4 🧵 <a href="https://t.co/LlcmcY3kpw">pic.twitter.com/LlcmcY3kpw</a></p>&mdash; Azlen Elza (@azlenelza) <a href="https://twitter.com/azlenelza/status/1331623023460421632?ref_src=twsrc%5Etfw">November 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{{< smalltext >}}[Backup of thread on Archive.org](https://web.archive.org/web/20220720072949/https://twitter.com/azlenelza/status/1331623023460421632){{< /smalltext >}}

### Updates after Initial Draw

Fuck your shit. Compute first, then display.

This may be *the most irritating* thing I encounter with modern computers. Our brains and bodies, as much as we may wish them to, don't respond to stimuli right away. So, when I search for something, go to click something, and then while I'm moving the mouse to click the screen updates and a different link or icon is now in the spot I meant to click it's *really* fucking annoying.

Window's built in search, especially with web results on, is a huge offender on this but Google and other search engines do it too.

It's not just search either, I'm sure everyone has encountered this in various places.

All you have to do is not change shit until you're done computing the answer, and then only change it once. This is about as simple as it gets and it avoids magical re-arranging menus that make everyone lose their shit.

### Everything needs to be more damn responsive

*Fuck your 𝒻𝒶𝓃𝒸𝓎 animations.* I love eye candy, and a little bit is fine, but I shouldn't have to wait as a menu slowly drops down with some pretty animation. If I've used that menu before I probably already know where I want to click, and now because I expect to be able to do so instantly I just clicked whatever is behind it. Fuck that. If the animation is masking some load time, sure, but *as soon as* it is loaded, quit it, and show the damn content. If the animation is necessary to avoid suddenly flipping from black to white and blinding users, again, I get it. But it doesn't need to take more than 100ms. 

### Advertising

I think this section could stand to be less biased. It's easy to say ads are evil, but, like, not everything can be free, but there's still a balance to be found.

TODO: https://www.nextpit.com/ads-consume-half-of-your-mobile-data

TODO: https://modem.io/blog/blog-monetization/

If I have to spend more than a fraction of a second to process what is being shown to me is an ad, it should be fucking illegal. If you want to put ads mixed into the content, then it should be required to be a lot of a lot more visually obvious.

{{< columns >}}

**Original:**

![](/hci/adbado.webp)

<--->

**Edited:**

![](/hci/adbade.webp)

{{< /columns >}}

Here the original at least has some color differentiation (Using the Boost app to view Reddit) but on the official Twitter client I actually have to stop and look to avoid accidentally clicking an ad link. That's some bull shit.

Yunno what else is bullshit? The fact that all of these ads are 'personalized' to the point that collecting crazy amounts of information on individuals is expected and almost inevitable online, even with a pile of tracking blocking extensions and a DNS blackhole like [pi-hole](https://pi-hole.net). This could, and should, be a rant of it's own (and is, again, see the {{< button relref="/Engineering/Networking/privacy" >}}Privacy{{< /button >}} page) Being spied on by our own devices is 100% not okay and it's one of the biggest reasons that they way we interact with computers sucks.

---

(TODO: Move this)

https://worrydream.com/MagicInk/

## Data Filtering

In {{< best >}}[MagicInk](https://worrydream.com/MagicInk/){{< /best >}} Bret Victor makes many arguments about how information is often centered around the computer and ease to the programmer or utility to the presenter, showing various redesigns and ...

Yunno' what? <u>Just go read it.</u> It's an amazing piece. 

Welcome back,

I do have one big complaint with it though, though which may be at least partially attributable to it's age as it was written in 2006: it argues that we got here mostly by technical means rather than intentional mal intent. I don't believe that. Instead, as we can see as AI invades everything or going though reviews on Amazon is intentionally made more difficult, etc. etc. that, often, these poor designs are known regressions done to make money. This isn't even some conspiracy theory: Google being sued for antitrust with the government claiming they've intentionally made results worse to make people have to make multiple queries so they can show more ads.

I do not want to belabor the advertising point any more than necessary, but I do think it pertinent to point out that the idea of providing information the user wants - context sensative information in which it is easy to, as Bret puts it, "Winnow the data" inheritly means displaying it in its true order. Advertising inhertly means promoting something outside of the order it would be in without that financial incentive and so is inheritly at odds with the idea of optimal, user focused, fast access to information.

[TODO: Transition]

If I look at https://modulargrid.net to browse modules (You don't need to know what these actually are for this example), you'll see the presentation is pretty complicated, but also reasonably intuitive.

<img src="/hci/mg.webp" alt=" " style="background-color: #fffD;padding: .1em;">

I can choose to narrow down my search by name, manufacturer, what it does, how big it is, if it's currently in production, etc.

Furthermore, I can sort the results by their age, how popular they are, their price, the manufacture, etc.

*But,* you know what I *can't* do? I can't sort by a mix of two results. I can't say weight results by age and price, show newer, cheaper things at the top, older, more expensive things at the bottom.

If instead the data were provided to my client directly rather than dynamically accessed though this restrictive interface, I could.

In my mind, I'm thinking something sorta like this:

<div>
  <label>Weight: Price <input type="range" id="priceWeight" min="0" max="100" value="33"> <span id="priceLabel">33%</span></label><br>
  <label>Weight: Newness <input type="range" id="dateWeight" min="0" max="100" value="33"> <span id="dateLabel">33%</span></label><br>
  <label>Weight: Rating <input type="range" id="ratingWeight" min="0" max="100" value="34"> <span id="ratingLabel">34%</span></label>
</div>

<div style="margin-top: 1em;">
  <label>Min Rating:
    <select id="minRating">
      <option value="1">⭐</option>
      <option value="2">⭐⭐</option>
      <option value="3">⭐⭐⭐</option>
      <option value="4">⭐⭐⭐⭐</option>
      <option value="5">⭐⭐⭐⭐⭐</option>
    </select>
  </label>
  <label style="margin-left:1em;">Price: <input type="number" id="minPrice" value="0" style="width:5em;"> - <input type="number" id="maxPrice" value="1000" style="width:5em;"></label>
  <label style="margin-left:1em;">Release Year: <input type="number" id="minYear" value="2020" style="width:5em;"> - <input type="number" id="maxYear" value="2025" style="width:5em;"></label>
</div>

<table id="productTable" style="width:100%">
  <thead>
    <tr><th>Name</th><th>Price ($)</th><th>Release Date</th><th>Rating</th></tr>
  </thead>
  <tbody>
    <tr><td>HotNewThing™</td><td>1000</td><td>2025-06-11</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td>FooBar Mk2</td><td>900</td><td>2025-06-10</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td>FooBar Mk1 Pro</td><td>850</td><td>2022-07-30</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td>FooBar Mk1</td><td>700</td><td>2024-06-05</td><td>⭐⭐⭐</td></tr>
    <tr><td>Blooper I</td><td>89</td><td>2024-05-18</td><td>⭐⭐</td></tr>
    <tr><td>Blooper II</td><td>179</td><td>2025-04-25</td><td>⭐⭐⭐⭐⭐</td></tr>
    <tr><td>Blooper II Mini</td><td>95</td><td>2024-12-10</td><td>⭐⭐⭐</td></tr>
    <tr><td>UwU</td><td>219</td><td>2024-03-15</td><td>⭐⭐⭐⭐</td></tr>
    <tr><td>OwO</td><td>109</td><td>2020-09-02</td><td>⭐⭐</td></tr>
    <tr><td>Ziggy Ultra</td><td>500</td><td>2023-02-19</td><td>⭐⭐⭐</td></tr>
    <tr><td>Ziggy Flip</td><td>139</td><td>2021-11-03</td><td>⭐⭐</td></tr>
    <tr><td>Ziggy Pro</td><td>249</td><td>2024-05-22</td><td>⭐⭐⭐</td></tr>
    <tr><td>Ziggy +</td><td>119</td><td>2023-07-10</td><td>⭐⭐⭐</td></tr>
    <tr><td>Ziggy Pro+</td><td>169</td><td>2022-10-05</td><td>⭐⭐⭐</td></tr>
    <tr><td>Ziggy</td><td>100</td><td>2020-09-01</td><td>⭐</td></tr>
    <tr><td>CheapToy</td><td>10</td><td>2022-01-17</td><td>⭐</td></tr>
  </tbody>
</table>

<script>
  const table = document.querySelector("#productTable tbody");
  const sliders = {
    price: document.getElementById("priceWeight"),
    date: document.getElementById("dateWeight"),
    rating: document.getElementById("ratingWeight")
  };
  const labels = {
    price: document.getElementById("priceLabel"),
    date: document.getElementById("dateLabel"),
    rating: document.getElementById("ratingLabel")
  };
  const filters = {
    minRating: document.getElementById("minRating"),
    minPrice: document.getElementById("minPrice"),
    maxPrice: document.getElementById("maxPrice"),
    minYear: document.getElementById("minYear"),
    maxYear: document.getElementById("maxYear")
  };

  function parseDate(dateStr) {
    return new Date(dateStr).getTime();
  }

  function getRatingValue(stars) {
    return stars.trim().length;
  }

  function balanceWeights(changed) {
    const total = Object.values(sliders).reduce((acc, el) => acc + parseInt(el.value), 0);
    if (total === 100) return;

    const remaining = 100 - parseInt(sliders[changed].value);
    const others = Object.keys(sliders).filter(k => k !== changed);
    const even = Math.floor(remaining / 2);
    sliders[others[0]].value = even;
    sliders[others[1]].value = remaining - even;

    Object.keys(sliders).forEach(k => labels[k].textContent = sliders[k].value + "%");
  }

function rescoreAndSort() {
  const weights = {
    price: parseInt(sliders.price.value) / 100,
    date: parseInt(sliders.date.value) / 100,
    rating: parseInt(sliders.rating.value) / 100
  };

  Object.keys(labels).forEach(k => labels[k].textContent = sliders[k].value + "%");

  const minR = parseInt(filters.minRating.value);
  const minP = parseFloat(filters.minPrice.value);
  const maxP = parseFloat(filters.maxPrice.value);
  const minY = parseInt(filters.minYear.value);
  const maxY = parseInt(filters.maxYear.value);

  const allRows = Array.from(table.querySelectorAll("tr"));
  let filteredRows = [];

  let maxPrice = 0, maxDate = 0, maxRating = 5;

  allRows.forEach(row => {
    const price = parseFloat(row.cells[1].textContent);
    const date = new Date(row.cells[2].textContent);
    const rating = getRatingValue(row.cells[3].textContent);

    const inPriceRange = price >= minP && price <= maxP;
    const inYearRange = date.getFullYear() >= minY && date.getFullYear() <= maxY;
    const meetsRating = rating >= minR;

    if (inPriceRange && inYearRange && meetsRating) {
      row.style.display = ""; // show row
      filteredRows.push(row);
      maxPrice = Math.max(maxPrice, price);
      maxDate = Math.max(maxDate, date.getTime());
    } else {
      row.style.display = "none"; // hide row
    }
  });

  filteredRows.sort((a, b) => {
    const [ap, bp] = [a, b].map(r => parseFloat(r.cells[1].textContent));
    const [ad, bd] = [a, b].map(r => parseDate(r.cells[2].textContent));
    const [ar, br] = [a, b].map(r => getRatingValue(r.cells[3].textContent));

    const aScore = (1 - (ap / maxPrice)) * weights.price +
                   (ad / maxDate) * weights.date +
                   (ar / maxRating) * weights.rating;
    const bScore = (1 - (bp / maxPrice)) * weights.price +
                   (bd / maxDate) * weights.date +
                   (br / maxRating) * weights.rating;

    return bScore - aScore;
  });

  filteredRows.forEach(row => table.appendChild(row));
}



  Object.keys(sliders).forEach(key => {
    sliders[key].addEventListener("input", () => {
      balanceWeights(key);
      rescoreAndSort();
    });
  });

  Object.values(filters).forEach(el => el.addEventListener("input", rescoreAndSort));

  balanceWeights("price");
  rescoreAndSort();
</script>


This toy example clearly leaves a lot to be desired (A real page with only 2 slider should probably be a single, balance slider; 3 should be a triangle; 4 a square; and only 5 or more should be sliders like this. Furthermore, it should have product images and just genally look nicer, along with integrating the review devicisive ness ticks as were suggested in that article by Bret Victor)

Don't see this example and miss the forest for the hastily thrown together tree: What I want is for the webserver to send your webbrowser all of that data (or be able to directly query it) and for your computer and web browser to be what decides how its shown.

The example above is to show you a small taste of what that could do. If done right, you could pipe this though, say, a spreadsheet tool and have it do more complicated filtering. Buying a laptop? You might be able to quickly enter an equation to say

`IF $PRICE > 1000 AND RAM < 16GB -> DROP`

Hell, if done they way I'm suggesting you should even be able to do

`IF $RAM_SPEED NOT DEFINED -> DROP` to just say "Yeah, if you're not gonna tell me how fast the RAM is, I don't want to buy it"

And in either case not have to hope that the site is respecting what you're asking. If I go to Amazon and search laptop and set the price slider to $2000 to $2500, the 3rd result is $645. Last I checked 2000 < 645 > 2500 wasn't true mathematically, but what the fuck do I know, right? 

# The Point I'm Trying To Make

All of these things have the same problem in common: We relinquished control to the provider at the language and protocol layer. We let it become normal to not be in control of what is displayed on our screens by tying the presentation to the data, and for what, making the web general purpose?

Like, sure, each web page can do *anything* but we didn't have to give that up in the first place. We could still have websites as they exist today, an open platform for experimentation, while still having standards that would - oh my god I'm about to use a capitalism argument I hate this - naturally win over their competition by providing a better user experience.

Right now, if you go to browse amazon for laptops the sorting is .. uh, bad.

It does at least recognize the search term and offer some sorting options - price, amount of RAM, screen size, etc. - but the processor selection is all sorts of wrong (For example, it doesn't differentiate between processors of a different generation but same name. An i5 from 2009 will perform much differently than one from 2025)

{{< light >}}

But what if you could go to, say, dell.com, hp.com, and say "Send my computer a list of products you offer, their prices, and their specs" and then go to Reddit to find other brands people trust and do the same from other brands you can vet yourself.

Agregator shipping and middle men could still exist, you could, of course, still go to Amazon (If they conformed to this standard and cleaned up their data enough to work with it) and have them provide their list or even just the option to have it sold and shipped by them if it matches exactly from another vendor.

You could then load a community made page which allows you to search these sources all together, or try other data filtering pages which themseves only provide your client with the interface. They wouldn't even have to have access to the data or facilitate the transaction. Sure, Amazon or Dell might provide their own interface to do this, but the idea is you could plumb the same data through multiple of them.

Think about how radically different this is from Amazon.

You would have much, much lower fraud and abuse as individual vendors are the ones listing their own products and you're choosing to trust them.

You would have more price competition as different sites are forced to actually compete instead of consumers all centralizing on a monopoly shopping service

I could keep going, but shopping isn't the only example. I think an even better one is social media because there this isn't just a hypothetical.

[TODO: Mastodon clients, and historically reddit clients, how reddit got worse.]

{{< /light >}}