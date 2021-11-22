# Analog Art to Digital Art

[TODO] Scanner DPI, background removal

## Background Removal

### Via vector art tools

Before doing this, you should really know what vector art is and how it differs from the raster art you're probably used to. I've talked about this a bit in the previous chapter, {{< button relref="Design/digital" color="design" >}}Digital Art{{< /button >}}.This process requires combining the two, and it's a bit odd if you haven't use vector art tools before.

![tracebitmap](/design/tracebitmap.webp)

1. Open Inkscape

2. Drop you image in

3. Right click the image

4. Select Trace Bitmap

5. Try different options (here, *Single Scan*, *Autotrace* is used, see picture)

6. Click Apply, a bit map trace will appear over the original image. Select either the trace or original picture and drag it to the side.

7. Select the trace, copy it (Ctrl+C), and paste it into your art software (the following assumes Krita)

8. In your art software, the pasted object will be a vector. You probably want it to be normal, editable pixels now, so you need to rasterize it like you would text. In Krita, this is done by right clicking the layer, hovering over convert, then clicking "to paint layer"![toraster](/design/toraster.webp)

9. This will give you a single color paint layer, from here you can work as normal. Depending on the turn out of the traceing process, you might want to fix some lines, espically if you want to use the paint bucket tool.

   

<img class=center src="/design/pedal.webp" alt=" " width="50%" style="border-radius:50px;">

You may want to experiment with the *multiple scans* → *colors* option if you want to convert something which was made with color, but has a limited palette. It can also be a cool effect anyway, as the output is, uh, well, I'll just show you:
{{< columns >}}
<img src="/nonfree/blog/COMountain.jpg" alt=" " width="100%">
{{< smalltext >}}Original Image{{< /smalltext >}}
<--->
<img src="/nonfree/blog/comountainsvg.svg" alt=" " width="100%">
{{< smalltext >}}SVG result after tracing{{< /smalltext >}}
{{< /columns >}}
Heads up, this will take a long time on high resolution, large images, and produce much larger vector files. The input image here is a 3.2MB JPEG, the output is a 17.9Mb SVG. This is largely because this is the worst possible way to use an SVG. As for settings, this was done with multiple scans → Colors with 10, stacked scans, optimize of 5.00, smooth corners of 1.24, and spectkles of 9. Also, the output will likely have some gaps letting the background color show though- so it may look different on a dark or light background. If effect this is your goal, please just use a posterize effect. It'll be much more optimized and probably look better. So why show it? The cool thing here is that you could easily delete one color, or pull out just one as a trace.
<div style="">
{{< columns >}}

<img src="/nonfree/blog/comountainsvg3.svg" alt=" " style="background-color: #fff;">
{{< smalltext >}}SVG with only some of the cool tone layers remainig{{< /smalltext >}}

<--->

<div id="demoElement"></div>
{{< smalltext >}}SVG with animation{{< /smalltext >}}

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
