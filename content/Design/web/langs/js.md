# JS

<script>    document.getElementById("webMenu").open = true;</script>

JavaScript is hard to talk about. Fundamentally, it's a language for adding interactive content to the web.

Want to make a button that increments a counter?

<button id="countButton">Click me</button>

<script>
// Set the initial value of the counter to 0
let counter = 0;
// Get a reference to the button element
const button = document.getElementById('countButton');
// Add a click event listener to the button
button.addEventListener('click', function() {
// Increment the counter and update the text of the button
counter++;
button.textContent = `Clicked ${counter} times`;
});
</script>



```js
// Set the initial value of the counter to 0
let counter = 0;
// Get a reference to the button element
const button = document.getElementById('countButton');
// Add a click event listener to the button
button.addEventListener('click', function() {
	// Increment the counter and update the text of the button
	counter++;
	button.textContent = `Clicked ${counter} times`;
});
```

This code, even if you've never read code before, should make sense.

Then why is JS hard to talk about?

## Frameworks & Libraries

JavaScript is hard to talk about - hard to google questions for - because it's so infrequently used without extra spice on top, and there are a vast number of different frameworks and libraries you'll see used. React, Vue, Angular; TypeScript, jQuery, etc. 

This tends to be a problem when looking up how do something because someone will inevitably provide an answer that depends on using one of them. My advice? If you even have an inkling that it's using a library, run away - at least at first. At some point you may come to realize you'd benefit from using one of the big libraries/frameworks or a collection of specific ones like p5.js or d3.js for animations or showing data, respectively. But you'll know when you get there. At first, just try to ignore it and write plain old vanilla JavaScript.

## Learning JS

Well, to start with you can follow the Programming Into section on this website. This uses a mix of Python and C, which, you'll note, are not JavaScript. Fortunately, if you can program in Python and C, you can program in anything … sort of. JS is weird because it ties into the HTML and CSS on the page, the whole point is that it can tie in with the page elements. You can change, add, or delete elements and their style with JavaScript with code.

Let me say this again. **You can change, add, or delete elements and their style with JavaScript with code.** This is super fucking cool. It makes JS (and otherwise kinda shit language) awesome.

If you've already read though the programming chapters here, you should be able to plow though https://www.w3schools.com/js/ . To actually have some fun with JS, you may need to add some libraries, again, I do recommend checking out the p5 and d3



https://tonejs.github.io

https://pixijs.com

https://sarcadass.github.io/granim.js/examples.html

https://animejs.com

https://underscorejs.org/#first

https://threejs.org

http://paperjs.org/examples/

https://d3js.org

https://p5js.org

http://pablojs.com

https://underscorejs.org

https://stimulus.hotwired.dev

https://maker.js.org

https://github.com/mikeflynn/egg.js

https://github.com/karpathy/convnetjs



https://github.com/VincentTV/before-after-slider





 
