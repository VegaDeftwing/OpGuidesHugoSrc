# JS

<script>    document.getElementById("webMenu").open = true;</script>

Javascript is hard to talk about. Fundamentally, it's a language for adding interactive content to the web.

Want to make a button that increments a counter?

{{< columns >}}

<button>Click me</button>

<script>
// Set the initial value of the counter to 0
let counter = 0;
// Get a reference to the button element
const button = document.querySelector('button');
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
const button = document.querySelector('button');
// Add a click event listener to the button
button.addEventListener('click', function() {
	// Increment the counter and update the text of the button
	counter++;
	button.textContent = `Clicked ${counter} times`;
});
```

This code, even if you've never read code before, sholud make sense.

So, why is JS hard to talk about?

## Frameworks & Libraries

