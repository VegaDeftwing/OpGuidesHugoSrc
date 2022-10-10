# Plugins

{{< tip >}}

This page is a massive work in progress. Even the things that look done may be wrong.

{{< /tip >}}

<script>    document.getElementById("softMenu").open = true;</script>

[TODO] break list up more

* Sound Sources
  * Vintage Synths
  * Modern Synths
  * Bass Synths
  * Sampled / Acoustic Modeling
  * Percussive
* Effects
  * Dynamics
  * Filter
  * Reverb
  * Delay
  * Trivial
  * Weird as fuck
  * Misc
* Tools
  * Organization
  * MIDI generation

{{< hint >}}

This is probably where the most bias of any of the lists on this page will show as I obviously can't list every possible plugin. Instead, I'll list those that I think are particularly good both in terms of value and function. While the list below does have ranking (copper, silver, gold) **everything** I'm listing I think is good, even the 'copper' ones!

You *DO NOT NEED* everything on these lists! Many of these plugins will have overlapping features, and as mentioned plenty of times before, your DAW probably has the majority of this functionality built in, as stated back in the start of the effects chapter: USE THESE FIRST. They're lighter on CPU, fit into the DAW's workflow better, and generally are good enough for most things. Check out <a href="https://www.youtube.com/watch?v=Xgm1bGh-eyM">I Made A Song Using Only Ableton Stock Plugins (YouTube, Composerily)</a> if you don't believe me.

I have tried to put a pretty good mix of professional and weird, free and paid, and traditional and novel tools on this list. This means that some will absolutely not be to your taste. Some may be too sterile, or may be wacky and useless to you.

{{< /hint >}}

## VST?

VSTs are a really weird standard, for one, unlike most standards that are ratified by a collection of involved interests, VST is the child of a single company - Steinberg.

Generally, there are a few things you need to know:

1. Some VSTs are distributed as VST2 others as VST3, obviously one is newer than the other. Unfortunately, not all DAWs support VST3 and worse, new applications by new devs have to be VST3 due to Steinberg no longer issuing new licenses. Generally, VST2 will be downloaded as `.dll` files while vst3 will be `.vst3`
   * VST3 does support a few extra features, and tend to perform better
   * Some VST3's can do neat stuff so that if multiple instances are loaded they can communicate together, this is useful for some mastering plugins.
2. Some VSTs are 64 bit, some are 32 bit. Not all modern DAWS support running 32bit VSTs
3. VSTs can do 1 (or a mix of) three things
   * act as a virtual instrument (guitar, synth, etc.)
   * act as a virtual effect (delay, reverb, etc.)
   * act as a midi effect (arpeggio, quantizer, etc.)

There are some other, not-VST plugin formats you may encounter, namely [LV2](https://en.wikipedia.org/wiki/LV2) and Apple's [Audio Units](https://en.wikipedia.org/wiki/Audio_Units), as well as the various plugins for particular DAWs, like Reason's 'Rack Extensions' or Ableton Live's M4L (Max For Live) Devices.

While VST3 does have a linux SDK, most plugins aren't released for Linux. You may still be able to make it work using a bridging program like [Yabridge](https://github.com/robbert-vdh/yabridge).

You may also see VSTi or VSTfx, these aren't anything new, 'i' or 'fx' just denote if the plugin is an instrument or effects plugin.

<!-- I want to change this to a "pick one of" list to incentive people to get fewer tools and know them well. This might mean doing better categorization of effects and then using drop-downs a-la the generative tools page.-->

### Effects

<table id="sort2" style="position:relative; width:130%; left: 0%;">
<thead>
  <tr>
    <th role="columnheader">Name (MFR)</th>
    <th role="columnheader">Description</th>
    <th role="columnheader" style="width:35%">Screenshot</th>
    <th role="columnheader">Category</th>
    <th role="columnheader">Price in USD (approx)</th>
    <th role="columnheader">Vega's Rating</th>
  </tr>
</thead>
<tbody>
  <tr>
    <!--- FabFilter Pro Q ---> 
    <td><a href="https://www.xlnaudio.com/products/xo">Pro-Q 3</a></br>(FabFilter)</td>
    <td>Extremely powerful, user friendly equalizer.</td>
    <td><img src="https://www.fabfilter.com/img/products/pro-q-3-screenshot.jpg" alt=" " width="100%"></td>
	<td>Equalization</br></td>
	<td>~180</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Valhalla Reverbs (Supermassive, Plate) & Delay ---> 
    <td><a href="https://www.jthorborg.com/index.html?ipage=signalizer">Various Reverbs</a></br>(Valhalla DSP)</td>
    <td>Plate, VintageVerb, etc. Supermassive is free and blends reverb and delay in a fun, experimental but very usable way.</td>
    <td><img src="https://valhalladsp.com/wp-content/uploads/2020/11/ValhallaSupermassive_GUI_1_2_0.png" alt=" " ></td>
	<td>Reverb</br></td>
	<td>0 or 50</br>🆓</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
<tr>
    <!--- Dragonfly Reverbs ---> 
    <td><a href="https://michaelwillis.github.io/dragonfly-reverb/">Dragonfly Reverb</a></td>
    <td>Amazing, free reverb</td>
    <td><img src="https://michaelwillis.github.io/dragonfly-reverb/images/collage.png" alt=" " ></td>
	<td>Reverb</br></td>
	<td>0</br>🆓</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
<tr>
    <!--- Peel ---> 
    <td><a href="https://www.pluginboutique.com/product/3-Studio-Tools/48-Audio-Editor/7190-PEEL">Peel</a></br>(zplane)</td>
    <td>Easy to use tool for isolating parts in a mix - steep, stereo filtering</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
 	 </tr>
    <!--- X-Noise ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
	<tr>
    <!--- Ignite Emissary ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
	<tr>
    <!--- Unfiltered Triad ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Triad</a></br>(Unfiltered Audio)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
	<tr>
    <!--- Unfiltered SpecOps ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">SpecOps</a></br>(Unfiltered Audio)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
	<tr>
    <!--- Ufiltered Sandman Pro ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Sandman Pro</a></br>(Unfiltered Audio)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Ufiltered Instant Delay ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Instant Delay</a></br>(Unfiltered Audio)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Ufiltered Dent 2 ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Dent 2</a></br>(Unfiltered Audio)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Ufiltered Fault ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Fault</a></br>(Unfiltered Audio)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Ufiltered Byome ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Byome</a></br>(Unfiltered Audio)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Output Portal ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Portal</a></br>(Output)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Output Thermal ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Thermal</a></br>(Output)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Noise Engineering Desmodus ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Desmodus</a></br>(Noise Engineering)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Noise Engineering Ruina ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">XRuina</a></br>(Noise Engineering)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Neural DSP Archetype Gojira ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Neural DSP Archetype Gojira ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Neural DSP Archetype Gojira, Nolly,  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Nectar 3 (As Pitch Shifter)  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Ghz Lohi 3  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Ghz Megaverb 3  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Ghz Trem Control 3  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Devious Machines Pitch Monster  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Baby Audio Taip  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Baby Audio Super VHS  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Aberrant DSP Digitalis  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- UVI Shade  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Puremagnetik Pastfabric  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Puremagnetik Octavlord  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Puremagnetik Clusters  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Polyverse Gatekeeper  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Gatekeeper</a></br>(Polyverse)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Polyverse Manipulator  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Manipulator</a></br>(Polyverse)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Eventide Qudra/Octavox  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Octa/Qudravox</a></br>(Eventide)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Eventide Blackhole  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Blackhole</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- D16 Decimort2  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Decimort 2</a></br>(D16 Group)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
   <!--- D16 Tekturon, or NE delay, Or Chow Matrix, or Other Desert Cities.  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Tekturon</a></br>(D16 Group)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
   <!--- D16 Redoptor  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
   <!--- GuitarML SmartAmp  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
 <!--- MJUC  ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">MJUC</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
</tbody>
</table>



<!-- Fabfilter stuff, Valhalla stuff, Melodyne, Soundtoys, Polyverse, Izotope, Ignite Emissary, Guitar Rig (player), Auburn Grallion, MJUC, U-HE Colur Copy   -->

### Audio Sources

<!-- Need to add Labs, Phaseplant, Reaktor, SynPlant, That ROLI one, Felt instruments,  -->

**🧱 = Some features behind paywall**</br>🆓 **= Free version available**</br>💸 **= Known to go on sale**</br>🧑 **= Requries user Account**</br>**Prices listed with ~ indicate a range of prices**

🎛 **= MPE compatible**

<table id="sort" style="position:relative; width:130%; left: 0%;">
<thead>
  <tr>
    <th role="columnheader">Name (MFR)</th>
    <th role="columnheader">Description</th>
    <th role="columnheader" style="width:35%">Screenshot</th>
    <th role="columnheader">Category</th>
    <th role="columnheader">Price in USD (approx)</th>
    <th role="columnheader">Vega's Rating</th>
  </tr>
</thead>
<tbody>
  <tr>
    <!--- Vital ---> 
    <td><a href="https://vital.audio">Vital</a></br>(Matt Tytel)</td>
    <td>Spectral Morphing Wavetable Synth</td>
    <td><video width="100%" autoplay="" loop="" muted="" playsinline="" loading="lazy" src="https://vital.audio/videos/full_screen.mp4"></video></td>
	<td>Synth</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Pendulate ---> 
    <td><a href="https://www.eventideaudio.com/products/third-party-plug-ins/chaotic-generator/pendulate">Pendulate</a> & <a href="https://www.eventideaudio.com/products/third-party-plug-ins/chaotic-synth/generate">Generate</a></br>(Eventide & Newfangled Audio)</td>
    <td>Chaos Synths, Pendulate being the limited, free version</td>
    <td><img src="https://com-eventide-drupaluserfiles.s3.amazonaws.com/product/images/GenerateScreenShot.png" alt=" " width="100%"</td>
    <td>Synth</td>
	<td>0 ~ 150</br>🆓🧱</td>
    <td><p hidden>1</p><img src="/copper.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- XFER Serum ---> 
    <td>Serum (XFER)</td>
    <td></td>
    <td></td>
    <td>Synth</td>
    <td></td>
    <td><p hidden>1</p><img src="/copper.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Pigments ---> 
    <td><a href="https://vital.audio">Pigments</a></br>(Arturia)</td>
    <td>Incredibly Multifunction Synth</td>
    <td><img src="https://medias.arturia.net/images/products/pigments/pigments-image.png" alt=" " width="100%"></td>
	<td>Synth</br>🎛</td>
	<td>100</br>💸</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Analog Lab V ---> 
    <td><a href="https://www.arturia.com/products/analog-classics/analoglab-v/overview">Analog Lab V</a> (Arturia)</td>
      <td>Curated Presets from clasic synths.</br></br>See the much more expensive <a href="https://www.arturia.com/products/analog-classics/v-collection/overview">V collection</a> if you want to dive in to each synth directly.</td>
    <td><img src="https://medias.arturia.net/images/products/analoglab-v/analoglab-v-image.png" alt=" " width="100%"></td>
    <td>Synth</td>
    <td>100</br>💸</td>
    <td><p hidden>2</p><img src="/silver.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Komplete ---> 
    <td><a href="https://www.native-instruments.com/en/products/komplete/samplers/kontakt-6/">Kontakt</a></br>(Native Instruments)</br></br><b>Depends on libraries. See bottom of this page for a list of good ones!</b></td>
    <td>Sampler with huge range of libraries available, Kontakt Player is a limited free versions, you probably want <a href="https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/get-komplete-start/">Komplete Start</a>, which includes Kontakt Player.</td>
    <td><img src="https://www.native-instruments.com/typo3temp/pics/img-ce-gallery-image-gallery_1-6ae0d1d0eb9eb564111025f4edf3dec2-d@2x.jpg" alt=" " width="100%"></td>
    <td>Sampler</td>
    <td>0 ~ 400</br>🆓🧱💸🧑</td>
    <td><p hidden>2</p><img src="/silver.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Guitarist ---> 
    <td>Guitarist</td>
    <td></td>
    <td></td>
    <td>String (Guitar)</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- ABL3 ---> 
    <td>ABL3 or Phoscyon </td>
    <td>Emulation of the classic TB-303. You can buy a Behringer hardware clone for not much more, but this is easier to use imho, and Behringer is a horrible company so please don't support them.</td>
    <td></td>
    <td>Synth</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- APC ---> 
    <td><a href="https://plugins4free.com/plugin/3181/">APC: </br> Ample Percussion Cloudrum</a></td>
    <td>A cute lil' Cloudrum</td>
    <td><img src="https://www.amplesound.net/images/ag/apc01.jpg" alt=" " width="100%"></td>
    <td>Perc (Cloudrum)</td>
    <td>0</br>🆓</td>
    <td><p hidden>1</p><img src="/copper.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Alter Ego ---> 
    <td>Alter Ego</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Dexed ---> 
    <td>Dexed</td>
    <td>Alternatively, check out DX7 V Arturia's DX-7 Emulation with a much better UI than Dexed</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Surge ---> 
    <td>Surge</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Synth 1 ---> 
    <td><a href="http://daichilab.com">Synth 1</a></br>(Daichi )</td>
    <td>Emulation of Nord Lead 2, but better. You'll probably want the preset pack</td>
    <td><img src="https://secureservercdn.net/198.71.233.109/h0y.f02.myftpupload.com/wp-content/uploads/2019/10/synth1-free-vst-synth-1.png" alt=" " width="100%"></td>
    <td>Synth</td>
	<td>0</br>🆓</td>
    <td><p hidden>1</p><img src="/copper.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Massive ---> 
    <td>Massive</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Spitfire Labs ---> 
    <td>Labs (Spitfire)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Noise Engineering Virt Vereor ---> 
    <td>Virt Vereor (Noise Engineering)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Noise Engineering Sinc Vereor ---> 
    <td>Sinc Vereor (Noise Engineering)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Noise Engineering Cursus Vereor ---> 
    <td>Cursus Vereor (Noise Engineering)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Noise Engineering BIA ---> 
    <td>Basimilus Iteritas (Noise Engineering)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Halley Labs Nuxx ---> 
    <td>Nuxx (Halley Labs)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Halley Labs ill.logic+Maths ---> 
    <td>ill.logic+maths (Halley Labs)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Halley Labs damascuss ---> 
    <td>damascus (Halley Labs)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Halley Labs Ambivac ---> 
    <td>ambiVAC (Halley Labs)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Dawesome Abyss ---> 
    <td>Abyss (Dawesome)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Audiaire Zone ---> 
    <td>Zone (Audiaire)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <!--- Superior Drummer 3 ---> 
    <td>Superior Drummer 3 (?)</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>





### Utilities

<table id="sort2" style="position:relative; width:130%; left: 0%;">
<thead>
  <tr>
    <th role="columnheader">Name (MFR)</th>
    <th role="columnheader">Description</th>
    <th role="columnheader" style="width:35%">Screenshot</th>
    <th role="columnheader">Category</th>
    <th role="columnheader">Price in USD (approx)</th>
    <th role="columnheader">Vega's Rating</th>
  </tr>
</thead>
<tbody>
  <tr>
    <!--- XO ---> 
    <td><a href="https://www.xlnaudio.com/products/xo">XO</a></br>(XLN)</td>
    <td>AI based sample organization</td>
    <td><img src="https://assets.xlnaudio.com/pages/xo/1.2/gui-screens/main_2x.png" alt=" " width="100%"></td>
	<td>Organization</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <!--- Signalizer ---> 
    <td><a href="https://www.jthorborg.com/index.html?ipage=signalizer">Signalizer</a></br>(Lynggaard Thorborg)</td>
    <td>Oscope+++ great for finding issues in your mixs</td>
    <td><iframe width="100%" height="220" src="https://www.youtube.com/embed/dHWDmufiohc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
	<td>Visulization</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
<tr>
    <!--- Peel ---> 
    <td><a href="https://www.pluginboutique.com/product/3-Studio-Tools/48-Audio-Editor/7190-PEEL">Peel</a>		</br>(zplane)</td>
    <td>Easy to use tool for isolating parts in a mix - steep, stereo filtering</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
 	</tr>
	<tr>
    <!--- X-Noise ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">X-Noise</a></br>(Waves)</td>
    <td>Noise Removal</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
	<tr>
    <!--- Gullfoss (Soundtheory) ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Gullfoss</a></br>(Soundtheory)</td>
    <td>Mastering</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Scalar 2 ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Gullfoss</a></br>(Soundtheory)</td>
    <td>Mastering</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Polyverse Wider ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Gullfoss</a></br>(Soundtheory)</td>
    <td>Mastering</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
    <!--- Hy-RPE2 ---> 
    <td><a href="https://www.waves.com/plugins/x-noise#tab-in-depth">Gullfoss</a></br>(Soundtheory)</td>
    <td>Euclidean Sequencing</td>
    <td>[TODO]</td>
	<td>Repair</br>🎛</td>
	<td>~40</br></td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  	</tr>
</tbody>
</table>


## Apps

<table id="sort3" style="position:relative; width:130%; left: 0%;">
<thead>
  <tr>
    <th role="columnheader">Name (MFR)</th>
    <th role="columnheader">Description</th>
    <th role="columnheader" style="width:35%">Screenshot</th>
    <th role="columnheader">Ecosystem (🤖/🍎)</th>
    <th role="columnheader">Price in USD (approx)</th>
    <th role="columnheader">Vega's Rating</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://warmplace.ru/soft/fbits/">Fractal Bits</a></br>(WarmPlace.ru)</td>
    <td>Drum Synth, generate samples using fractal algorithms</td>
    <td><img src="https://warmplace.ru/soft/fbits/images/scr02.jpg" alt=" " width="100%"></td>
	<td>🤖,🍎</td>
	<td>2</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
  <tr>
    <td><a href="https://warmplace.ru/soft/sunvox/">Sunvox</a></br>(WarmPlace.ru)</td>
    <td>Modular Synth + Tracker</td>
    <td><img src="https://warmplace.ru/soft/sunvox/images/sunvox28.png" alt=" " width="100%"></td>
	<td>🤖,🍎 + Win, Linux, Mac</br>🎛</td>
	<td>6, free on desktop</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://grainstorm.rocks.me">Grainstorm</a></br>(The Secret Laboratory)</td>
    <td>Granular Synth</td>
    <td><img src="https://play-lh.googleusercontent.com/6wF10yI2PHwJkIcmosNXlOmU199H2eU9lqwMT02AqWZwOzbiz0dIgDS-AeTi1PvGKA=w3372-h1892-rw" alt=" " width="100%"></td>
	<td>🤖</td>
	<td>0, in app purchases</br>🆓🧱</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://www.jthorborg.com/index.html?ipage=signalizer">Wave editor</a></br>(Lynggaard Thorborg)</td>
    <td>Oscope+++ great for finding issues in your mixs</td>
    <td><iframe width="100%" height="220" src="https://www.youtube.com/embed/dHWDmufiohc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
	<td>Synth</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://www.jthorborg.com/index.html?ipage=signalizer">FL Studio Moblie</a></br>(Image Line)</td>
    <td>Oscope+++ great for finding issues in your mixs</td>
    <td><iframe width="100%" height="220" src="https://www.youtube.com/embed/dHWDmufiohc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
	<td>Synth</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://www.flipsampler.com">Flip</a></br>(Flip Sampler, Andrew Huang)</td>
    <td>Sample Based Mobile DAW</td>
    <td><img src="https://images.squarespace-cdn.com/content/v1/5d9e2c5dbaad6f4ed18b1003/1606173512946-QVDGFWTU93HQDYGQJ7KA/sampler.png?format=2500w" alt=" " height="220"></td>
	<td>🍎</td>
	<td>10</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://www.jthorborg.com/index.html?ipage=signalizer">SynprezFM</a></br>(Lynggaard Thorborg)</td>
    <td>Oscope+++ great for finding issues in your mixs</td>
    <td><iframe width="100%" height="220" src="https://www.youtube.com/embed/dHWDmufiohc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
	<td>Synth</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://www.jthorborg.com/index.html?ipage=signalizer">NodeBeat</a></br>(Lynggaard Thorborg)</td>
    <td>Oscope+++ great for finding issues in your mixs</td>
    <td><iframe width="100%" height="220" src="https://www.youtube.com/embed/dHWDmufiohc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
	<td>Synth</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://www.jthorborg.com/index.html?ipage=signalizer">OSCSurface</a></br>(Lynggaard Thorborg)</td>
    <td>Oscope+++ great for finding issues in your mixs</td>
    <td><iframe width="100%" height="220" src="https://www.youtube.com/embed/dHWDmufiohc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>
	<td>Synth</br>🎛</td>
	<td>0 ~ 80</br>🆓🧱🧑</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
    <td><a href="https://play.google.com/store/apps/details?id=org.intoorbit.spectrum&hl=en_US&gl=US">Spectroid</a></br>(Carl Reinke)</td>
    <td>Spectal Analyzer, helpful for finding what frequency an annoying sound in the backgound is at- "Is that 60hz hum?"</td>
    <td><img src="https://play-lh.googleusercontent.com/hIHAfW-YhJfQnBl2aO7jpaJ6xVaLI1diITAJ54J9xPMXZYLBFz0and_M3YJHSXLpiA=w3372-h1892-rw" alt=" " width="100%"></td>
	<td>🤖</td>
	<td>0</br>🆓</td>
    <td><p hidden>3</p><img src="/gold.svg" alt=" " height="40em"></td>
  </tr>
</tbody>
</table>

<script src='/js/tape.js'></script>
<script src='/js/tablesort.min.js'></script>
<script src='/js/tablesort.number.min.js'></script>
<script src='/js/tablesort.date.min.js'></script>
<script src='/js/tablesort.monthname.min.js'></script>
<script src='/js/tablesort.dotsep.min.js'></script>
<script src='/js/tablesort.filesize.min.js'></script>
<script>
  new Tablesort(document.getElementById('sort'));
</script>

<script>
  new Tablesort(document.getElementById('sort2'));
</script>

<script>
  new Tablesort(document.getElementById('sort3'));
</script>

## Kontakt Libraries

## Tools dependent on other hardware or software

{{< details "Max4Live Devices" >}}

**These devices only work inside of Ableton Live using Max For Live**

[lil' pup](https://llllllll.co/t/smartphones-lil-pup/35749) - "Tools for generative music and live performance"

[Survey](https://patches.zone/max-for-live/survey) - "Survey acts as a kind of macro control for your project’s most important parameters. Save collections of settings across multiple devices and tracks for simple recall or to creatively morph between them." **$20**

[Scenery](https://patches.zone/max-for-live/scenery) - Convient ambience tool **$10**

[Cartographer](https://patches.zone/max-for-live/cartographer) - "When the *Follow* feature is engaged, the Loop Brace will always follow the set’s playhead, meaning you’re ready to loop whatever you’re listening to at any given moment without breaking your flow." **$5**

[Swatches](https://patches.zone/max-for-live/swatches) - Easily recolor everything in Ableton Live

[Clyphx old, free version](https://github.com/ldrolez/clyphx-live10) & [Clyphx Pro](https://isotonikstudios.com/product/clyphx-pro/) - Scripting Language for live, seriously recommend this one. Paid version is **$43.33**, not sure if it supports the latest live or is getting worked on?

{{< best >}}[Magenta Studio](https://www.ableton.com/en/blog/magenta-studio-free-ai-tools-ableton-live/) - AI based MIDI generator for live. Honestly spits out some superb progressions. Can do drums, extend what you've written for a melody, and a lot more. Tons of fun.{{< /best >}}

[Various tools from Zuzuki Kentaro](https://gumroad.com/szk_1992?sort=page_layout) - these include some great complex modulation tools that are free, along with paid tools ranging from granular synths and reverbs.

{{< best >}}[Nestup](https://gumroad.com/l/nestup) - "[...] approaches rhythm in a completely new way. It embeds [Nestup](https://nestup.cutelab.nyc/)—a powerful language for expressing complex rhythms—directly into Live."{{< /best >}}

[Szk! Devices](https://gumroad.com/szkdevices?recommended_by=search&sort=page_layout) - A bunch of crazy devices, including fractal and chaos tools. Some real crazy stuff here

[Ctrl-Z's Talk To Machines](https://gumroad.com/ctrlz?recommended_by=search) - weird ASCII→Binary→MIDI conversion as well as some DNA inspired stuff

[4phgp by Ferenc Vincze](https://gumroad.com/prepetuum?recommended_by=search#KHZsH) - a free 'Four Playhead Granular Player'

[Mapulator](https://djtechtools.com/2012/02/16/mapulator-advanced-midi-mapping-for-ableton/) - make a macro knob with different arcs per destination

[KDevices Modulators 21](https://k-devices.com/products/modulators21/) - Some really nice LFO and utility modules

{{< /details >}}

{{< details "Monme Norns Devices" >}}

</br>

{{< hint warning >}}

I previously maintained a 'best of' list for Norns scripts, but the community has now made a much better resource https://norns.community

{{< /hint >}}

**These 'plugins' only work on Monome's Norns hardware**

[Segments Audio Looper](https://llllllll.co/t/segments-audio-looper-for-norns/32937)

[oooooo - 6x digital tape loops](https://llllllll.co/t/oooooo/35828) (demo below)

<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CEeMRPDhCt_/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CEeMRPDhCt_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CEeMRPDhCt_/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by infinitedigits (@infinitedigits)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-08-29T11:35:46+00:00">Aug 29, 2020 at 4:35am PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

[euclidigons - euclidian sequencer but not like that™](https://llllllll.co/t/euclidigons/36666)

{{< /details >}}

{{< details "JSFX and Scripts for Reaper DAW" >}}

https://github.com/JoepVanlier/JSFX

{{< /details >}}

{{< details "Patches & Info for Empress Zoia" >}}

https://sensai7.github.io/ZOIACheatsheet/

https://patchstorage.com/platform/zoia/

{{< /details >}}

## Vega's Top 50 VCV Rack Modules

⚠ = Not available in Library, may require compilation

💵 = Not Free

👉👈 = Made by me

📦 = Included in VCV

----

1. 📦 Scope (VCV)

2. ZZC Clock + Expanders

3. Mixmaster + Auxpander + EqMaster (Mindmeld)

4. CompⅡ (Squinky)

5. Plateau (Valley)

6. Chronoblob (Alright Devices)

7. ⚠Quatherina’s Quality Quad Quantizer Presented by Quatherina the Quantum Duck

8. 💵Shapemaster (Mindmeld)

9. 💵Flame (Vult)

10. [harmonàig](https://library.vcvrack.com/Instruo/harmonaig)

11. Rampage (Befaco)

12. Palette

13. 📦 VCA (VCV)

14. Digital Sequencer

15. PSI OP

16. Simpliciter (Nysthi)

17. Tangents (Vult)

18. Entropia (Geodesics)

19. 📦Octave (VCV)

20. Fate (Geodesics)

21. Utilities (Kinks)

22. 💵Parametra (VCV)

23. Caudal (Vult)

24. Hi-Hat (Hora)

25. 💵Valerie (Lindenberg)

26. Noise Plethora

27. Ferox (Vult)

28. 👉👈 Vega (LyraeModules)

29. BZ-Mapper (Nysthi)

30. 💵Knock (Vult)

31. Analyzer XL (BogAudio)

32. Topograph (Valley)

33. ⚠Transit

34. Tap Dancer

35. Basal (Vult)

36. Percussive Vibration

37. ⚠Glue

38. Arp (Bogaudio)

39. Quad Algorithmic Rhythm (Frozen Wasteland)

40. Energy (Geodesics)

41. Terrorform (Valley)

42. 💵Sangster (Lindenberg)

43. 👉👈 Pink Trombone

44. Cable Colour Key

45. Dexter (Valley)

46. Meander

47. ⚠Tourette (Wrong People)

48. ⚠μMap

49. Dual Attenuverter (Befaco)

50. slf (Wiqid)

    

