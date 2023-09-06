# Analog Art to Digital Art

## Scanning in your Analog Art

[TODO] Scanner DPI, etc.

## Background Removal

### Via vector art tools

Before doing this, you should know what vector art is and how it differs from the raster art you're probably used to. I've talked about this a bit in the previous chapter, {{< button relref="Design/digital" color="design" >}}Digital Art{{< /button >}}. This process requires combining the two, and it's a bit odd if you haven't used vector art tools before.

![tracebitmap](/design/tracebitmap.webp)

1. Open Inkscape

2. Drop your image in

3. Right-click the image

4. Select Trace Bitmap

5. Try different options (here, I used *Single Scan*, {{< vale >}}*Autotrace*{{< /vale >}}, see picture)

6. Click Apply, a bit map trace will appear over the original image. Select either the trace or original picture and drag it to the side.

7. Select the trace, copy it (Ctrl+C), and paste it into your art software (the following assumes Krita)

8. In your art software, the pasted object will be a vector. You probably want it to be normal, editable pixels now, so you need to rasterize it like you would text. In Krita, this you can do this by right-clicking the layer, hovering over convert, then clicking "to paint layer"![toraster](/design/toraster.webp)

9. This will give you a single color paint layer, from here you can work as normal. Depending on the turn out of the tracing process, you might want to fix some lines. This will probably be necessary to fix holes in the outline if you want to use the paint bucket tool.

   

<img class=center src="/design/pedal.webp" alt=" " width="50%" style="border-radius:50px;">

You may want to experiment with the {{< vale >}}*multiple scans*{{< /vale >}} → *colors* option if you want to convert something which used color, but has a limited palette. It can also be a cool effect anyway, as the output is, uh, well, I'll just show you:
{{< columns >}}
<img src="/nonfree/blog/COMountain.jpg" alt=" " width="100%">
{{< smalltext >}}Original Image{{< /smalltext >}}
<--->
<img src="/nonfree/blog/comountainsvg.svg" alt=" " width="100%">
{{< smalltext >}}SVG result after tracing{{< /smalltext >}}
{{< /columns >}}
Heads up, this will take a long time on high resolution, large images, and produce **much** larger vector files. The input image here is a 3.2MB JPEG, the output is a <u>17.9Mb</u> SVG! This is because this is the worst possible way to use an SVG. The cool thing here is that you could delete one color, or pull out just one as a trace. You'll just want to turn it back into a raster image when done.

{{< smalltext >}}In Inkscape, this was done with "multiple scans → Colors" with 10, stacked scans, optimize of 5.00, smooth corners of 1.24, and speckles of 9. Also, the output will likely have some gaps letting the background color show though- so it may look different on a dark or light background. When done, all the layers will be grouped by default in Inkscape. To get at the individual layers, right click→ungroup. If this effect alone this is your goal, <u>please consider using a [posterize effect](https://en.wikipedia.org/wiki/Posterization)</u>. It'll be much more optimized and probably look better.{{< /smalltext >}}

<div style="">
{{< columns >}}
<img src="/nonfree/blog/comountainsvg3.svg" alt=" " style="background-color: #fff;">
{{< smalltext >}}SVG with the warm tones removed.{{< /smalltext >}}


<--->

<div id="demoElement"></div>
{{< smalltext >}}SVG with animation using [pablo.js](http://pablojs.com){{< /smalltext >}}

{{< /columns >}}
</div>

<script src="/js/pablo.min.js"></script>

<script>
Pablo(demoElement).load("/nonfree/blog/comountainsvg.svg", function(comountainsvg){
	setInterval(function(){
    	comountainsvg.find('path')
    	.attr('opacity', 0)
    	.stagger(function(current, previous){
            Pablo(previous).attr('opacity', 0);
            Pablo(current).attr('opacity', 1);
        }, {t:500});
		comountainsvg.find('path')
    	.attr('opacity', 1)
    	.stagger(function(current, previous){
            Pablo(previous).attr('opacity', 1);
            Pablo(current).attr('opacity', 0);
        }, {t:250});
     }, 7000);
    });
</script>
# Digital Art to Analog Art

[TODO]

## 2D

### Printing & Plotting

#### Paper & Inks

## 3D

3D printing vs CNC
