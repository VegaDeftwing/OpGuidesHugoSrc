# WEBGL & MATH TESTING

This is a testing ground for different options for rendering math, signals, etc. though the website. Given the music, DSP, and signals page I really care about sine waves and FFTs. It seems the best looking, lowest CPU sine I can get is using WEBGL (as immediately below) but writing the code for it is quite cumbersome. For math itself, https://github.com/airladon/figureone/ seems to be the best bet, and and should dramatically help with the math chapters.

FFTs are going to be the biggest problem. https://github.com/indutny/fft.js/ may work. As I may want to add sound, https://mohayonao.github.io/timbre.js/ would also be an option as it'll do the synthesis too. Either way, I'll have to find a way to render the output, which could be a PITA. I could also go the webasm route, as done here: https://thebreakfastpost.com/2015/10/18/ffts-in-javascript/. The performance is steller, but I don't know I need it anyway as https://code.soundsoftware.ac.uk/projects/js-dsp-test/repository/entry/fft/nayuki-obj/fft.js was nearly as fast. They all seem pretty light weight. I think I can get the data into https://airladon.github.io/FigureOne/api/#collectionsplot.

It does look like timbre.js has a built in scope & spectrum plot: https://mohayonao.github.io/timbre.js/spectrum.html, https://mohayonao.github.io/timbre.js/scope.html but they seem to be breaking on page reloads. from `An AudioContext was prevented from starting automatically. It must be created or resumed after a user gesture on the page.` but this looks like I could work around it: ~~https://stackoverflow.com/questions/55026293/google-chrome-javascript-issue-in-getting-user-audio-the-audiocontext-was-not / https://developer.chrome.com/blog/autoplay/#webaudio~~ https://github.com/mohayonao/timbre.js/pull/69 but that may require changes to the library itself. Not impossible, but annoying - plus this would be a maintenance burden as timbre.js appears is no longer maintained. https://github.com/jusu/timbre.js seems to have the fixes already done, but the account has next to no activity. Presumably, the fact that it's still working with these minimal fixes should mean it's safe and stable though. I'll need to go though the issues and see how many are actually a problem. https://github.com/mohayonao/timbre.js/issues/66 looks like the most critical if true, but I don't think is given the scope page loads a .wav and works.

The start of testing has been done in unpublished/timbre, but the results don't look promising. The scope and spectrum don't seem to be resizable and the FFT appears to have a low bin count (256?). I may still use it for playing audio though.

https://github.com/bbc/peaks.js looks useful too.

I need to look into the performance of drawing the sine waves with JS if I compute the resulting waveform and then draw them. I think this flow will be necessary for computing the FFT anyway, and it would also let me only calculate the FFT on waveform update, not repeatedly.

This would work particularly well if I could decode and read .wav files as input into an array, have the JS per figure, etc. all in the folder for each page, though that does get difficult to balance data vs computation for load times across devices and connections.

<canvas id="wave"></canvas>

<script>
const canvas = document.getElementById("wave");
const gl = canvas.getContext("webgl");

let vertexShaderSource = `
  attribute vec2 a_position;
  uniform float u_time;
  uniform float u_amplitude;
  uniform float u_frequency;
  uniform float u_xspacing;

  void main() {
    vec2 position = a_position;
    position.y += sin(u_time * 1.5 + a_position.x * u_frequency) * u_amplitude;
    gl_Position = vec4(position, 0, 1);
  }
`;

let fragmentShaderSource = `
  precision mediump float;

  uniform vec4 u_color;

  void main() {
    gl_FragColor = u_color;
  }
`;

function createShader(gl, type, source) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  let success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
let program = createProgram(gl, vertexShader, fragmentShader);

let positionLocation = gl.getAttribLocation(program, "a_position");
let timeLocation = gl.getUniformLocation(program, "u_time");
let amplitudeLocation = gl.getUniformLocation(program, "u_amplitude");
let frequencyLocation = gl.getUniformLocation(program, "u_frequency");
let xspacingLocation = gl.getUniformLocation(program, "u_xspacing");
let colorLocation = gl.getUniformLocation(program, "u_color");

let buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

let positions = [];
let amplitude = .8;
let frequency = 10;
let xspacing = .005;

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);

  let time = performance.now() / 1000;

  gl.uniform1f(timeLocation, time);
  gl.uniform1f(amplitudeLocation, amplitude);
  gl.uniform1f(frequencyLocation, frequency);
  gl.uniform1f(xspacingLocation, xspacing);
  gl.uniform4f(colorLocation, 1, 1, 1, 1);

 positions = [];
  for (let x = -canvas.width / 2; x < canvas.width / 2; x += xspacing) {
    positions.push(x, 0);
  }

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW);

  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  gl.drawArrays(gl.LINE_STRIP, 0, positions.length / 2);
}

function parentWidth(elem) {
  return elem.parentElement.clientWidth;
}

function setup(){
  buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.lineWidth(4);
  canvas.width = parentWidth(document.getElementById('wave'));
  canvas.height = parentWidth(document.getElementById('wave')) / 2;
}

setup();
setInterval(render, 30);

</script>



<script type="text/javascript" src='https://cdn.jsdelivr.net/npm/figureone@0.15.10/figureone.min.js'></script>

<div id="figureOneContainer" style="width: 500px; height: 500px; background-color: black;"></div>

<script>
const figure = new Fig.Figure({
  scene: {
    left: -2,
    bottom: -1.5,
    right: 2,
    top: 1.5,
  },
  color: [1, 0, 0, 1],
  font: { size: 0.1 },
});

const pow = (power = 2, stop = 10, step = 0.05) => {
  const xValues = Fig.tools.math.range(0, stop, step);
  return xValues.map(x => new Fig.Point(x, 10+10*Math.sin(x)));
};

figure.add({
  name: 'plot',
  make: 'collections.plot',
  options: {
    width: 2,                                    // Plot width in figure
    height: 2,                                   // Plot height in figure
    y: { start: 0, stop: 100 },              // Customize y axis limits
    trace: [
      { points: pow(1.5), name: 'Power 1.5' },   // Trace names are for legend
      {                                          // Trace with only markers
        points: pow(2, 10, 0.5),
        name: 'Power 2',
        markers: { sides: 4, radius: 0.03 },
      },
      {                                          // Trace with markers and
        points: pow(3, 10, 0.5),                 // dashed line
        name: 'Power 3',
        markers: { radius: 0.03, sides: 10, line: { width: 0.005 } },
        line: { dash: [0.04, 0.01] },
      },
    ],
    legend: true,
    position: [-1, -1],
    plotArea: [0,1,0,1],
    colorTheme: "light",
  },
});
</script>

