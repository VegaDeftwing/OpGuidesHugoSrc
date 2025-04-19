# WebDev2

<link href="https://fonts.googleapis.com/css?family=Staatliches|Raleway:500" rel="stylesheet">

<style>
.container-iri {
    font-family: "Raleway", Helvetica, Arial !important;
    ul {
    margin: 0px;
    padding: 0px;
    li {
        margin-bottom: 1em;
    }
    }

    /* text-shadow: inherit; */
    /* text-shadow: initial; */
    /* text-shadow: revert; */
    /* text-shadow: revert-layer; */
    /* text-shadow: unset; */

  h1, h2, h3, h4 {
  text-shadow: none !important;
  }

  h1 {
  font-size: 5rem;
  }

  h2 {
  font-size: 3rem;
  }

  h3 {
  font-size: 2rem;
  }

  h4{
  font-size: 1.2rem;
  }

  * {
    font-family: "Raleway", Helvetica, Arial !important;
    text-align: left !important;
    padding-left: 0px !important;
    text-shadow: none;
    --pseudobg-x: 20%;
    --pseudobg-y: 0%;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(249, 246, 242, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: 0 0;
    position: relative;
    background-blend-mode: overlay;
    /* text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.4); */
    will-change: contents;
    color: rgba(255, 255, 255, 0.3);
    .rainbow {
      color: rgba(11, 6, 56, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.3);
      filter: saturate(1.5);
      background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          #ffdfdf 30%,
          #fff6c9 40%,
          #e8f1d6 50%,
          #d5ffff 60%,
          #caccff 70%,
          #fde2f7 80%,
          rgba(255, 255, 255, 0) 100%
        ),
        url("https://previews.123rf.com/images/scenery1/scenery11803/scenery1180300031/96996545-shiny-silver-leaf-foil-texture-texture-background.jpg");

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 20vw 100%, 100%;
      background-repeat: no-repeat, repeat;
      background-position: var(--pseudobg-x), var(--pseudobg-y);
      background-blend-mode: color;
      background-attachment: scroll, scroll;
      background-attachment: fixed, scroll;
      //use fixed or scroll background-position depending on the overall page design
      z-index: 1;
      // background-blend-mode: multiply;
      text-shadow: -2px 1px 1px rgb(0, 0, 0, 0.2);
      opacity: 0.95;
      z-index: -1;
    }

    &:after {
      content: attr(var(--html));
      position: absolute;
      top: -3px;
      left: -3px;
      text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.9);
      z-index: -2;
    }
  }
}
</style>

<div class="container-iri">
  <h1>letterpress foil effect</h1>
  <p>Here is my attempt at creating a tactile holographic text experience on the web. The lighting changes depending on scroll position to emulate the feeling of moving tactile foil type under different lighting.</p>
  <p>This currently only works on browsers supporting -webkit-background-clip, and for some reason/s I haven't yet worked out, it doesn't work at all in edge and IE (forks/code amendments welcome!).
  </p>
  <h2>Caveats</h2>
  <ul>
    <li> Works with html tags, however custom CSS positioning is likely required for tags such as lists and blockquotes (see CSS)</li>
    <li>Somewhat laggy performance in Firefox if used over large blocks of text. Only suggestion is to use this as sparingly as possible.</li>
    <li>Accessibility is questionable, especially since it renders differently on different browsers and viewports. In a production scenario I'd use this only for headings or unimportant labels/text.</li>
    <li>Only works well with medium to bold fonts.</li>
    <li>Currently each tag is independent of each other, so lighting may differ depending on its position on the page as well as it's container size (can be fixed using background-attachment:fixed).</li>
    <li>Doubt this will work well on mobile</li>
  </ul>
  <h3>Look it's just a fun effect, and I wanted to see more shiny on the web</h3>
</div>

<div class="container-iri">

# htmlification test

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet sapien quis purus lacinia, eget malesuada erat commodo. Aliquam venenatis id dolor nec ullamcorper. In porta diam in odio consequat elementum. Nunc nec dui diam. Pellentesque vulputate hendrerit tellus, non convallis lacus imperdiet ut. Donec euismod laoreet justo fringilla placerat. Ut ac purus sit amet felis venenatis vulputate vitae ac nulla. Nunc vel est vitae tortor pretium feugiat. Cras fermentum nibh nisl, sit amet pharetra sapien scelerisque eu. Pellentesque ex justo, suscipit in diam nec, volutpat accumsan libero. Ut lorem risus, convallis ut fringilla a, aliquam sed sem. Donec in dolor faucibus purus consequat pharetra sed dictum purus. Nullam sapien dolor, mollis a luctus in, eleifend nec tellus. Integer vel nibh pulvinar, bibendum magna in, varius leo.

* adf 
* asdf adf
* adfa sdf

Nulla facilisi. Etiam id odio sed odio tincidunt ultrices a ac dolor. Quisque venenatis aliquam cursus. Phasellus venenatis nibh quam. Aliquam erat volutpat. Donec varius vitae nisl non lobortis. Integer molestie eleifend tellus vitae tempor. Nunc leo felis, auctor vel tincidunt sed, facilisis nec dolor. Quisque sodales, sapien et eleifend sagittis, libero libero rutrum augue, ut varius lacus magna ac diam. Fusce facilisis augue nisi. Donec metus ligula, suscipit nec augue et, sagittis ultrices nibh. Fusce nec neque eget elit efficitur pellentesque ac sit amet metus. Ut vehicula odio condimentum, egestas enim at, blandit risus. Nulla facilisi. Duis ut commodo purus, non feugiat massa. 
</div>

foobar

<script>
function scrollPercent() {
  var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight",
      percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100, // ordinarily this calculation should be multiplied by 100, but I've left it at 90 so the rainbow stops around the end of the text block.
      altpercent =  percent + 1;
  return altpercent.toFixed(1);
}

var el = document.querySelectorAll(".container-iri *");
for (i = 0; i < el.length; ++i) {
  var content = el[i].innerHTML;
  el[i].setAttribute("id", "elem" + i);

  if (content !== null) {
    // el[i].setAttribute("data-html",content);

    var node = document.createElement("div");
    node.setAttribute("class", "rainbow");
    node.innerHTML = content;
    el[i].appendChild(node);
  }
}

window.onscroll = function() {
  scrollObject = {
    x: window.pageXOffset,
    y: window.pageYOffset
  };

  var el = document.querySelectorAll(".container-iri *"),
    x = scrollPercent() + "%",
    y = 0;

  for (i = 0; i < el.length; ++i) {
    el[i].style.backgroundPosition = x + " " + y;
    el[i].style.setProperty("--pseudobg-x", x);
    el[i].style.setProperty("--pseudobg-y", 0);
  }
  // console.log(scrollPercent());
};
</script>

foo

https://codepen.io/jh3y/pen/OPJyVGb

https://codepen.io/simeydotme/pen/abYWJdX

https://codepen.io/electrifried/pen/REjQdM

https://codepen.io/HejChristian/pen/YPzLbYX

https://codepen.io/msriki12/pen/yyBNMEr

https://codepen.io/bgebelein/pen/xxdXYVE