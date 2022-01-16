# P5 test

<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>

<script>
function setup() {
	pixelDensity(1);
	frameRate(5);
	var canvas = createCanvas(document.getElementById("canvasContainer").offsetWidth, windowHeight/4);
	canvas.parent('canvasContainer');
}
function draw() {
loadPixels();
let d = pixelDensity();
let fullImage = 4 * (width * d) * (height * d);
for (let i = 0; i < fullImage; i += 4) {
  pixels[i] = noise(i%255,i%240+random(1)) * i%255 ;
  pixels[i + 1] = noise(i%255,i%220+random(2),i) * i%205;
  pixels[i + 2] = noise(i%255,i%221+random(1)) * 255 ;
  pixels[i + 3] = 255;
}
updatePixels();
}
function windowResized() {
	resizeCanvas(document.getElementById("canvasContainer").offsetWidth, windowHeight/10);
}
</script>

<style>
canvas {
	position:relative;
	width: 100%;
}
</style>



<div id="canvasContainer">

</div>