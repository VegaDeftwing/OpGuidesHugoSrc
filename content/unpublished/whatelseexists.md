# What Else Exists?

I'm a firm believer that an important part of problem solving and innovating development is connecting ideas from other, seemingly unrelated fields.

To help with this, I present a very low effoct idea generator:

<button id="concatenateButton">GIMME AN IDEA!</button> 

<h4 id="output" style="border-image: linear-gradient(to bottom, #2b68c4 0%,#cf2d6e 100%)1;"></h4>

<!-- TODO: Make this higher effort with a list of adjectives / verb / nouns to mostly make good sentences -->

<script>
const button = document.getElementById("concatenateButton");
const output = document.getElementById("output");

// Adj or Nouns work here.
const adjectives = ["Dynamic methods of", "Using binaural audio for", "Strange ways of", "Parametric", "Analog signals", "Freakin' Lasers", "Background noise", "Using video for",, "Using planar magnetic drivers for", "Reverse", "Intentional intermodulation", "Microtonal methods for", "High quality ways of",  "Matrix based methods of", "Using projection for", "Genetic Engineering for", "Using Software Defined Radio (SDR) for ", "Conway's Game of life for", "Using an esoteric programming language for", "Using Ferroelectric RAM for", "Using the OKLAB color space for", "Using the piezo electric effect for ", "Using full body tracking for",  "Using depth cameras (Kinect, Leap Motion, or even DIY) for ", "Using Unicode for", "Mesh networking for", "Using pressure for"];

const verbs = ["designing", "generating", "modulating", "routing", "mapping", "bending", "monitoring", "removing", "mapping", "repairing", "sensing"];

const nouns = ["audio", "lighting", "magnet implants","RFID Implants" "computers", "tubes", "tracking", "synthesier", "unicode", "equalizer", "3D Audio",  "transducer", "Antenna" , "Lithium-Ion Capacitors", "Lighting", "Pulse Width Modulation (PWM)","Bi-directional (2 color) LEDs","PCB inductor coils", "high voltage", "renewable power generation", "Constructed languages",  "Mechanical keyboards",  "Rhythm games",  "Roguelike games",  "Puzzle games",  "Strange 3D printer filaments",  "3D Printing",  "Pen plotters",  "Generative art",  "Parametric 3D modeling",  "Ternary computers",  "Analog computers",  "Nixie tubes",  "Vacuum tubes",  "Freakin' lasers","Cosplay/Fursuits",  "Cluster computing",  "Hydroponics",  "Data bending",  "Pressure sensitive input devices",  "Radiation monitoring",  "CO2 Monitoring",  "Video game moding", "Application reverse engineering", "Mesh networks",  "Retro gaming",  "Haptic feedback",  "Cryptography",  "Smart home automation",  "Neural networks",  "Solar panels",  "Video synthesis",  "Glass blowing",  "Beer brewing",  "Growing mushrooms",  "CNC",  "VR Chat", "Fractals", "Biological computing"];

// Function to generate a random element from an array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Generate a random idea
function generateIdea() {
  const adjective = getRandomElement(adjectives);
  const verb = getRandomElement(verbs);
  const noun = getRandomElement(nouns);
  return `${adjective} ${verb} ${noun}`;
}

// Example usage: generate a new idea
console.log(generateIdea());


button.addEventListener("click", () => {
  // const randomIndex1 = Math.floor(Math.random() * strings.length);
  // const randomIndex2 = Math.floor(Math.random() * strings.length);
  // const randomString1 = strings[randomIndex1];
  // const randomString2 = strings[randomIndex2];
  //const concatenatedString = randomString1 + " " + randomString2;
  output.textContent = generateIdea();
});
</script>

