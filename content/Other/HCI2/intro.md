# The Way We Interact With Computers Sucks.

<script>    document.getElementById("hciMenu").open = true;</script>

{{< columns >}}

<pre class="morph-section">
</pre>
{{< attribution >}}ASCII art morphing by [Tim Holman](https://github.com/tholman){{< /attribution >}}

<--->

<style>
pre.morph-section {
  background-color: #2220 !important;
  font-family: monospace;
  color: #fff;
  font-size: .6em;
}
</style>

<script>
/**
 * Ascii Morph
 * @author: Tim Holman (http://tholman.com)
 */
var AsciiMorph = (function() {
  'use strict';
  var element = null;
  var canvasDimensions = {};
  var renderedData = [];
  var framesToAnimate = [];
  var myTimeout = null;
  /**
   * Utils
      */
    function extend(target, source) {
    for (var key in source) {
      if (!(key in target)) {
        target[key] = source[key];              
      }
    }
    return target;
  }
  function repeat(pattern, count) {
      if (count < 1) return '';
      var result = '';
      while (count > 1) {
          if (count & 1) result += pattern;
          count >>= 1, pattern += pattern;
      }
      return result + pattern;
  }
  function replaceAt(string, index, character ) {
    return string.substr(0, index) + character + string.substr(index+character.length);
  }
  /**
   * AsciiMorph
      */
    function init(el, canvasSize) {
    // Save the element
    element = el;
    canvasDimensions = canvasSize;
  }
  function squareOutData(data) {
     var i;
    var renderDimensions = {
      x: 0,
      y: data.length
    };
    // Calculate centering numbers
    for( i = 0; i < data.length; i++ ) {
      if( data[i].length > renderDimensions.x) {
        renderDimensions.x = data[i].length
      }
    }
    // Pad out right side of data to square it out
    for( i = 0; i < data.length; i++ ) {
      if( data[i].length < renderDimensions.x) {
        data[i] = (data[i] + repeat(' ', renderDimensions.x - data[i].length ));
      }
    }
    var paddings = {
      x: Math.floor((canvasDimensions.x - renderDimensions.x) / 2),
      y: Math.floor((canvasDimensions.y - renderDimensions.y) / 2)
    }
    // Left Padding
    for( var i = 0; i < data.length; i++ ) {
      data[i] = repeat(' ', paddings.x) + data[i] + repeat(' ', paddings.x);
    }
    // Pad out the rest of everything
    for( var i = 0; i < canvasDimensions.y; i++ ) {
      if( i < paddings.y) {
        data.unshift( repeat(' ', canvasDimensions.x));
      } else if (i > (paddings.y + renderDimensions.y)) {
        data.push( repeat(' ', canvasDimensions.x));
      }
    }
    return data;
  }
  // Crushes the frame data by 1 unit.
  function getMorphedFrame(data) {
    var firstInLine, lastInLine = null;
    var found = false;
    for( var i = 0; i < data.length; i++) {
      var line = data[i];
      firstInLine = line.search(/\S/);
      if( firstInLine === -1) {
        firstInLine = null;
      }
      for( var j = 0; j < line.length; j++) {
        if( line[j] != ' ') {
          lastInLine = j;
        }
      }
      if( firstInLine !== null && lastInLine !== null) {
        data = crushLine(data, i, firstInLine, lastInLine)
        found = true;
      }
      firstInLine = null, lastInLine = null;
    }
    if( found ) {
      return data;
    } else {
      return false;
    }
  }
  function crushLine(data, line, start, end) {
    var centers = {
      x: Math.floor(canvasDimensions.x / 2),
      y: Math.floor(canvasDimensions.y / 2)
    }
    var crushDirection = 1;
    if( line > centers.y ) {
      crushDirection = -1;
    }
    var charA = data[line][start];
    var charB = data[line][end];
    data[line] = replaceAt(data[line], start, " ");
    data[line] = replaceAt(data[line], end, " ");
    if( !((end - 1) == (start + 1)) && !(start === end) && !((start + 1) === end)) {
      data[line + crushDirection] = replaceAt(data[line + crushDirection], (start + 1), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
      data[line + crushDirection] = replaceAt(data[line + crushDirection], (end - 1), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
    } else if ((((start === end) || (start + 1) === end)) && ((line + 1) !== centers.y && (line - 1) !== centers.y && line !== centers.y)) {
      data[line + crushDirection] = replaceAt(data[line + crushDirection], (start), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
      data[line + crushDirection] = replaceAt(data[line + crushDirection], (end), '+*/\\'.substr(Math.floor(Math.random()*'+*/\\'.length), 1));
    }
    return data;
  }
  function render(data) {
    var ourData = squareOutData(data.slice());
    renderSquareData(ourData);
  }
  function renderSquareData(data) {
    element.innerHTML = '';
    for( var i = 0; i < data.length; i++ ) {
      element.innerHTML = element.innerHTML + data[i] + '\n';
    }
    renderedData = data;
  }
  // Morph between whatever is current, to the new frame
  function morph(data) {
    clearTimeout(myTimeout);
    var frameData = prepareFrames(data.slice());
    animateFrames(frameData);
  }
  function prepareFrames(data) {
    var deconstructionFrames = [];
    var constructionFrames = [];
    var clonedData = renderedData
    // If its taking more than 100 frames, its probably somehow broken
    // Get the deconscrution frames
    for(var i = 0; i < 100; i++) {
      var newData = getMorphedFrame(clonedData);
      if( newData === false) {
        break;
      }
      deconstructionFrames.push(newData.slice(0)); 
      clonedData = newData;
    }
    // Get the constuction frames for the new data
    var squareData = squareOutData(data);
    constructionFrames.unshift(squareData.slice(0));
    for( var i = 0; i < 100; i++ ) {
      var newData = getMorphedFrame(squareData);
      if( newData === false) {
        break;
      }
      constructionFrames.unshift(newData.slice(0));
      squareData = newData;
    }
    return deconstructionFrames.concat(constructionFrames)
  }
  function animateFrames(frameData) {
    framesToAnimate = frameData;
    animateFrame();
  }
  function animateFrame() {
    myTimeout = setTimeout(function() {
      renderSquareData(framesToAnimate[0]);
      framesToAnimate.shift();
      if( framesToAnimate.length > 0 ) {
        animateFrame();
      }
    }, 20)
    // framesToAnimate
  }
  function main(element, canvasSize) {
    if( !element || !canvasSize ) {
      console.log("sorry, I need an element and a canvas size");
      return;   
    }
    init(element, canvasSize);
  }
  return extend(main, {
    render: render,
    morph: morph
  });
})();
var element = document.querySelector('pre');
AsciiMorph(element, {x: 51,y: 28});
var asciis = [
[
"ANOTHER RANDOM DICK PIC IN MY INBOX?",
"",
"           \\`.     ___",
"            \\ \\   / __>0",
"        /\\  /  |/' / ",
"       /  \\/   `  ,`'--.",
"      / /(___________)_ \\",
"      |/ //.-.   .-.\\\\ \\ \\",
"      0 // :@ ___ @: \\\\ \/",
"        ( o ^(___)^ o ) 0",
"         \\ \\_______/ /",
"     /\\   '._______.'--.",
"     \\ /|  |<_____>    |",
"      \\ \\__|<_____>____/|__",
"       \\____<_____>_______/",
"           |<_____>    |",
"           |<_____>    |",
"           :<_____>____:",
"          / <_____>   /|",
"         /  <_____>  / |",
"        /___________/  |",
"        |           | _|__",
"        |           | ---||_",
"        |   |L\\/|/  |  | [__]",
"        |  \\|||\\|\\  |  /",
"        |           | /",
"        |___________|/"
],
[
"YOUR FILES HAVE BEEN LOCKED",
"",
"       .--------.",
"      / .------. \\",
"     / /        \\ \\",
"     | |        | |",
"    _| |________| |_",
"  .' |_|        |_| '.",
"  '._____ ____ _____.'",
"  |     .'____'.     |",
"  '.__.'.'    '.'.__.'",
"  '.__  |      |  __.'",
"  |   '.'.____.'.'   |",
"  '.____'.____.'____.'",
"  '.________________.'",
"",
"TO UNLOCK SEND .5 BITCOIN",
],
[
"YOU WOULDN'T STEAL ART FROM A GALLERY",
"",
"           ____",
"          o8%8888,",
"        o88%8888888.",
"       8'-    -:8888b",
"      8'         8888",
"     d8.-=. ,==-.:888b",
"     >8 `~` :`~' d8888",
"     88         ,88888",
"     88b. `-~  ':88888",
"     888b ~==~ .:88888",
"     88888o--:':::8888",
"     `88888| :::' 8888b",
"     8888^^'       8888b",
"    d888           ,%888b.",
"   d88%            %%%8--'-.",
"  /88:.__ ,       _%-' ---  -",
"      '''::===..-'   =  --.  `",
"",
"REPORT SOFTWARE PIRACY TODAY!",
 ]];
AsciiMorph.render(asciis[0]);
var currentIndex = 2;
setTimeout(function() {
  AsciiMorph.morph(asciis[1]);
}, 1000);
setInterval(function() {
  AsciiMorph.morph(asciis[currentIndex]);
  currentIndex++;
  currentIndex%= asciis.length;
}, 3000);
</script>



What do you see when you sit down to work?

Is your space actually comfortable?

Does your keyboard feel like it was actually designed for human hands?

How do you access information? 

How do know that information is reliable?

How do you store information in a way you can retrieve it easily later?

Do you have good tools for making content?

{{< /columns >}}

If you're reading this, I'd wager that you've at least thought about these things a little. Maybe you're a Linux user, deep into the tiling window manager rabbit hole. Maybe you already have a fancy keyboard, monitors surrounding you on all sides. But I'm here to tell you that no matter how hard you've tried, **what you're using still probably sucks**.

I think we, as individuals and as business, need to invest more in our work spaces, probably well beyond what most people would even consider. I'm not talking about adding a third monitor or giving everyone an artistic environment. I'm talking about setting up a work environment that's conducive to productivity as instead of merely being the medium on which it takes place, the work environment should actively contribute to finding, accessing, retrieving/storing, consuming, and creating. - where data can be anything: art, documentation, code, whatever.

**Please, throw out your preconceptions about what this means right now.**

I absolutely do not think this means that we should all strap VR headsets to our faces, no matter how much money Facebook (or Meta, whatever.) throws at that future. I also don't think it means sticking to the normal keyboard and mouse for as much as we do now either. Maybe something like [Dynamicland]( https://dynamicland.org) is the future, but I'm also not about to bet on any particular technology. So, what is this then?

These pages are about acknowledging what we're doing wrong, why we're doing it (mostly because it's cheap and normal) and how we can do better to make real, human oriented (Yes, I know that term sounds like marketing speech) ways of using technology. Ultimately, this is just a really long post about **HCI.** 

## HCI?

**Human Computer Interaction** or [HCI](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction) is an interesting topic to me. So many people spend a crazy amount of time in front of a screen , you'd think we'd have some *damn* good hardware and software to use while we further deepen the permanent butt-shaped indentation into our seats, but alas, instead most people use *ˢʰᵘᵈᵈᵉʳ* Windows.

Back in late 2018 I wrote the first version of this post and basically everything in there has been restated here but better. Since then, I've talked to many others about this, read *many* other blog posts, and just generally done a lot of new things with computers and learned a lot, so here's HCI2: Electric Boogaloo.

---

{{< columns >}}

There are 6 chapters to this post, they should be accessible in the sidebar, but just in case →

<--->

<dt class="sub">1</dt><dd class="sub"> <a href="/other/hci2/physical"> The Physical</a></dd>
<dt class="sub">2</dt><dd class="sub"> <a href="/other/hci2/digital"> The Digital</a></dd>
<dt class="sub">3</dt><dd class="sub"> <a href="/other/hci2/whatelse"> What Is Needed?</a></dd>
<dt class="sub">4</dt><dd class="sub"> <a href="/other/hci2/contradictions"> What Contradicts?</a></dd>
<dt class="sub">5</dt><dd class="sub"> <a href="/other/hci2/radicallychanging"> Radically Changing</a></dd>
<dt class="sub">6</dt><dd class="sub"> <a href="/other/hci2/wrappingup"> Wrapping Up</a></dd>

{{< /columns >}}