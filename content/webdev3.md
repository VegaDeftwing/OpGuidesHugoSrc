# foo

<style>
.full-width {
  /* padding: 5em 0em; */
  /* width: 100%; */
}

/* The Shader Stuff */
.shader {
  position: relative;
  overflow: hidden;
  backface-visibility: hidden; /* Forces GPU */
}

.shader-layer {
  background: black;
  mix-blend-mode: multiply;
  position: absolute;
  inset: 0;
  /* width: 100%; */
  /* height: 100%; */
  /* background-size: 100%; */
  background-position: center;
}

.specular {
  mix-blend-mode: color-dodge;
  background-attachment: fixed;
}

.mask {
  mix-blend-mode: multiply;
  /* background-image: url(sparrow_mask.png); */
}

/* Gradient Definitions */
.gradient-sparrow {
  background-image: linear-gradient(
    0deg,
    hsl(359, 60%, 40%),
    hsl(16, 60%, 45%),
    hsl(33, 60%, 50%),
    hsl(45, 60%, 55%),
    hsl(58, 60%, 60%),
    hsl(58, 60%, 65%),
    hsl(58, 60%, 70%),
    hsl(96, 60%, 65%),
    hsl(146, 60%, 60%),
    hsl(183, 60%, 55%),
    hsl(225, 60%, 50%),
    hsl(265, 60%, 45%),
    hsl(303, 60%, 40%)
  );
}

.gradient-lumon {
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 0%) 59.8%,
    hsl(221, 61%, 34%) 60%,
    hsl(197, 92%, 86%) 60.2%,
    hsl(0, 0%, 0%) 100%
  );
}

.gradient-turtle {
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 0%) 40%,
    hsl(195, 63%, 71%) 50%,
    hsl(261, 49%, 78%) 100%
  );
}

.gradient-dragonfly {
  background-image: linear-gradient(
    25deg,
    hsl(0, 0%, 33%) 30%,
    hsl(138, 26%, 83%) 45%,
    hsl(77, 5%, 72%) 65%,
    hsl(0, 0%, 33%) 70%
  );
}

.gradient-beetle {
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 0%) 10%,
    hsl(67, 61%, 83%) 45%,
    hsl(0, 0%, 0%) 80%
  );
}

.gradient-nanina {
  background-image: linear-gradient(
    0deg,
    hsl(0, 0%, 0%) 0%,
    hsl(50, 100%, 88%) 30%,
    hsl(50, 100%, 88%) 70%,
    hsl(0, 0%, 0%) 90%
  );
}

.gradient-mandala {
  background-image: linear-gradient(
    30deg,
    hsl(30, 80%, 20%) 0%,
    hsl(30, 80%, 80%) 10%,
    hsl(30, 80%, 20%) 20%,
    hsl(30, 80%, 80%) 30%,
    hsl(30, 80%, 20%) 35%,
    hsl(30, 80%, 80%) 50%,
    hsl(30, 80%, 20%) 65%,
    hsl(30, 80%, 80%) 70%,
    hsl(30, 80%, 20%) 80%,
    hsl(30, 80%, 80%) 90%,
    hsl(30, 80%, 20%) 100%
  );
}

.gradient-deer {
  background-image: linear-gradient(
    -25deg,
    hsl(0, 0%, 0%) 30%,
    hsl(104, 26%, 83%) 45%,
    hsl(273, 22%, 25%) 65%,
    hsl(0, 0%, 0%) 70%
  );
}
</style>

<header class="content-grid">
  <h1>Holographic Masks</h1>
  <p>Experimenting with some CSS holographic effects, inspired by this guide from Robb Owen: <a href="https://robbowen.digital/wrote-about/css-blend-mode-shaders/" target="_blank">Holograms, light-leaks and how to build CSS-only shaders.</a></p>
  <p>Unfortunately, this effect relies on <code>background-attachment: fixed;</code> Which doesn't work as expected on iOS Safari.</p>
  <p>This effect also relies on scrolling over the images, for the gradient & mask to do its thing. So I have increased the margin on both ends of the demo so you should be able to see it fully.</p>
  <p>TL;DR: Scroll.</p>
</header>

<main class="content-grid flow">
  <section>
    <div class="grid">
      <div class="cell">
        <p>Normal Sparrow</p>
        <img src="https://assets.codepen.io/2153413/sparrow-base.png" alt="Silhouette design of a sparrow sitting on a branch" width="512" class="framed">
      </div>
      <div class="cell">
        <p>Fancy Sparrow ✨</p>
        <div class="shader framed">
          <img src="https://assets.codepen.io/2153413/sparrow-base.png" alt="Silhouette design of a sparrow sitting on a branch" width="512">
          <div class="shader-layer specular gradient-sparrow">
            <img class="shader-layer mask" src="https://assets.codepen.io/2153413/sparrow-mask.png" alt="" width="300">
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="full-width">
    <div class="shader">
      <img src="https://assets.codepen.io/2153413/lumon-base.png" alt="The Lumon Drop logo from the TV Show Severance" width="700">
      <div class="shader-layer specular gradient-lumon">
        <img class="shader-layer mask" src="https://assets.codepen.io/2153413/lumon-mask.png" alt="" width="700">
      </div>
    </div>
  </section>
  
  <section>
    <div class="grid">
      <div class="cell">
        <p>Turtle</p>
        <div class="shader framed">
          <img src="https://assets.codepen.io/2153413/turtle-base.png" alt="Silhouette design of a turtle" width="300">
          <div class="shader-layer specular gradient-turtle">
            <img class="shader-layer mask" src="https://assets.codepen.io/2153413/turtle-mask.png" alt="" width="300">
          </div>
        </div>
      </div>
      <div class="cell">
        <p>Dragonfly</p>
        <div class="shader framed">
          <img src="https://assets.codepen.io/2153413/dragonfly-base.png" alt="Silhouette design of a dragonfly" width="512">
          <div class="shader-layer specular gradient-dragonfly">
            <img class="shader-layer mask" src="https://assets.codepen.io/2153413/dragonfly-mask.png" alt="" width="512">
          </div>
        </div>
      </div>
      <div class="cell cell-wide">
        <p>Beetle</p>
        <div class="shader">
          <img src="https://assets.codepen.io/2153413/beetle-base.png" alt="Macro photo close up of a chromatic green beetle on a brown leaf" width="700">
          <div class="shader-layer specular gradient-beetle">
            <img class="shader-layer mask" src="https://assets.codepen.io/2153413/beetle-mask.png" alt="" width="700">
          </div>
        </div>
      </div>
      <div class="cell">
        <p>Pixel Nanina</p>
        <div class="shader">
          <img src="https://assets.codepen.io/2153413/nanina-base.png" alt="Pixelated orange tabby cat design on a lenticular effect background" width="512">
          <div class="shader-layer specular gradient-nanina">
            <img class="shader-layer mask" src="https://assets.codepen.io/2153413/nanina-mask.png" alt="" width="512">
          </div>
        </div>
      </div>
      <div class="cell">
        <p>Mandala</p>
        <div class="shader framed">
          <img src="https://assets.codepen.io/2153413/mandala-base.png" alt="Mandala design which looks like a flower, made symetry patterns" width="512">
          <div class="shader-layer specular gradient-mandala">
            <img class="shader-layer mask" src="https://assets.codepen.io/2153413/mandala-mask.png" alt="" width="512">
          </div>
        </div>
      </div>
      <div class="cell cell-wide">
        <p>Deer</p>
        <div class="shader">
          <img src="https://assets.codepen.io/2153413/deer-base.png" alt="Shadowbox design of multiple SVG layers depicting a deer in a forest scene, set within the outline of a deer" width="1024">
          <div class="shader-layer specular gradient-deer">
            <img class="shader-layer mask gradient-sparrow" src="https://assets.codepen.io/2153413/deer-mask.png" alt="" width="1024">
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="content-grid">
  <h2>Credits</h2>
  <ul>
    <li><a href="https://robbowen.digital" target="_blank" rel="noopener noreferrer">Robb Owen</a> - For the quality <a href="https://robbowen.digital/wrote-about/css-blend-mode-shaders/" target="_blank" rel="noopener noreferrer">CSS-shader guide</a> that got me doing this experiment.</li>
    <li><a href="https://unsplash.com/@davidclode" target="_blank" rel="noopener noreferrer">David Clode</a> - For the <a href="https://unsplash.com/photos/blue-and-brown-feathers-GT6MZ3JHxEk" target="_blank" rel="noopener noreferrer">Feather Texture</a> used in the sparrow mask.</li>
    <li><a href="https://unsplash.com/@timschmidbauer" target="_blank" rel="noopener noreferrer">Tim Schmidbauer</a> - For the <a href="https://unsplash.com/photos/a-close-up-of-the-bark-of-a-tree-UHDSdav-iJc" target="_blank" rel="noopener noreferrer">Birch Tree Texture</a>, used in the sparrow mask.</li>
    <li><a href="https://vsueiro.com" target="_blank" rel="noopener noreferrer">Vinicius Sueiro</a> - For the <a href="https://vsueiro.com/random-dots-generator/" target="_blank" rel="noopener noreferrer">Random Dots Generator</a>, used in the pixel nanina and deer masks.</li>
    <li><a href="https://www.magicpattern.design" target="_blank" rel="noopener noreferrer">MagicPattern</a> - For the <a href="https://www.magicpattern.design/tools/god-rays-generator" target="_blank" rel="noopener noreferrer">God Rays Generator</a>, used in the deer and beetle masks.</li>
  </ul>
</footer>

 <div class="my-footer">
  <p>March 2025, Christian Alder</p>
  <p><a href="https://bsky.app/profile/hejchristian.com" target="_blank" rel="noopener noreferrer">Bluesky</a> | <a href="https://mastodon.social/@hejchristian" target="_blank" rel="noopener noreferrer">Mastodon</a></p>
</div>