# HTML

<script>    document.getElementById("webMenu").open = true;</script>

<!--TODO: This page is fine but could use a more gental introduction. I just throw the reader to the wolves as is.-->

{{< vale >}}**H**yper**T**ext **M**arkup **L**anguage{{< /vale >}} is the one thing on this list I suspect everyone reading this page has at least a smidgen of familiarity with.

To write HTML you'll be working with a bunch of HTML **tags**. Tags are these point-bracketed enclosed words that mean something special to the browser, let's actually make a HTML file right now to get started. Go ahead and open any plain text editor <footnote>Note, this means <b>NOT</b> Microsoft Word, but Notepad will work. If you want, now is a good time to grab https://code.visualstudio.com</footnote>, and make a new file and name it whatever you want, just make sure to end it in `.html`

now, go ahead and type this into that document, 

```html
<!DOCTYPE html>
<html>
<h1>Title</h1>
<p>this is <b>HTML</b></p>
</html>
```

and then, hopefully, you should be able to double click that file and it will open into your browser, and it should be pretty basic black text on a white background, with a big heading and the term HTML in bold, and if you look at the code you wrote, that should make sense. The strange bits to you are probably the `<!DOCTYPE html>` and `<html>` bits, but those are pretty much just standard stuff that just defines the start and end of the page.

## What else can HTML do?

It's pretty much more of the same from here. Just a bunch more tags that you should look into and understand how to use. There's all the `<h1>` though `<h6>` variants for headings of decreasing size, `<a>` for links, `<ol>` and `<ul>` for ordered and unordered lists, which then contain list items with `<li>`, and so on. It's reasonable to just go through every tag listed on [W3 School's HTML Element Reference Page](https://www.w3schools.com/TAGS/), or follow their [HTML Tutorial](https://www.w3schools.com/html/html_intro.asp) - though you might want to read through this page first.

There's not much complexity in using plain HTML, it's how it interacts with CSS and JS that make it interesting. Still, don't underestimate how much you can do, basic HTML, with just `<img>` tags for images, `<a>` for links and so on can still get you quite far. HTML is the foundation of your website<footnote>In some cases a website will have little to no html but still be quite complex, but those tend to start going into web app territory, like https://squoosh.app where you can press f12→Elements and see there's not much there, because almost everything displayed uses JavaScript. There's nothing wrong with doing webdev this way, but it's more advanced! For the vast majority of websites, the HTML is the foundation.</footnote>, so give it thought as you write it. Generally, I think you should try to make what you have in mind in HTML as much as you can *before* resorting to adding CSS or JS, but also don't try to get HTML to do things it's not designed for if CSS or JS is a better fit. Hopefully I can give you a better idea of what should to use when in the coming chapters, though to some extent this just requires experience. Still, it's good to know where doing something hack-y is okay and where it's not.

A good example of this is tables.

A lot of web dev noobs (myself included) will try to use tables for things that probably shouldn't be in basic tables, and instead need something more custom and responsive. If you try to put big pictures and lots of text in a table, you're probably doing something wrong, they're better treated as basic spreadsheet like elements.

<p>Meanwhile, doing something hacky like using a lot of <code>&ampnbsp;</code> tags in your html to move &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; text (like done here, before the word "text"), while hacky, is still semi-reasonable, and part of how I've gotten the chapter numbers to align in the left side bar<p>
Okay, so, then, how should you learn HTML?



I think it's worth asking how much you need to know in the first place. While you could write your entire website in raw HTML, it's a massive headache, and probably not necessary. There's a good chance you'll be using a tool of some sort that lets you write in something a bit more user-friendly and converts it to HTML in the end.

For OpGuides, that tool is [Hugo](https://gohugo.io) and the format I write in is Markdown. Both of these are pretty common. 

On occasion, you'll need to actually dive in and do something more manually. This might be putting in complex tables, inserting pre-formatted text (See the ASCII Art below), or, if the tool your using doesn't make it easy, inserting in an audio or video clip, etc.

Because of this, you'll still probably want to know some of the common HTML stuff and have enough familiarity to understand what you're looking at when looking things up for these rare uses.

{{< columns >}}

<table>
<thead>
  <tr>
    <th>I have</th>
    <th>no</th>
    <th>idea</th>
    <th>why</th>
    <th>anyone</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>would</td>
    <td>ever</td>
    <td colspan="3" rowspan="2">want a table formatted</td>
  </tr>
  <tr>
    <td>like</td>
    <td>this</td>
  </tr>
  <tr>
    <td colspan="3">but with HTML</td>
    <td>it</td>
    <td>is</td>
  </tr>
  <tr>
    <td>a</td>
    <td>thing</td>
    <td>you</td>
    <td>can</td>
    <td>do</td>
  </tr>
</tbody>
</table>

{{< smalltext >}}I made the table using https://www.tablesgenerator.com/html_tables as it makes doing things like this much easier{{< /smalltext >}}

<hr>

<audio controls loop src="/sounds/ChordSeq02.mp3"></audio>

<--->

<style>
    pre.art{
    font-size: 5px;
    font-family: monospace;
    background-color: #2220 !important;
    }
</style>



<pre class="art">
                                              ......                                                
                                             ........                                               
                                         .  ...',,,'..                                              
                                          ....:odl:;..                                              
                                        ....;oxxxl:;... ...   ..      ..   ..   ......              
                                    . ....'cdxxddl:;'...........        .    .....','.              
                                     .;l,,oxxdlccc::;,,'.......  ..      ........',,.               
                                   ..'oxoddlcc::;::llcc;............  ..,'....';;,,'.               
                              ....,,..,cddl:::::;,;cooxo,..............:o;...,clc:;..               
                             ....;dxc;ldxoc:::;;,,;;:cdx:..............'c:'';cc;;:,.                
                             ...'o00xoxxxo;,,,''.',,,,;:'................'',:;,,;:.                 
                          ...,,,o0K0xxxxxc'.....''''''''.',,'...............'.';c;.                 
                 .    . ..'',,,lOXXOdxxxdc..',;:::::::;;,,,,,,,',''''.'''.....':c,.                 
                      ..''',,';dKNKd:oxdl;,;ccccccccc:;'..',,,;:::;;;;;,;;,'...;:'    .             
                    ...,;:::;,:xKNKd;:c:clllllllcccc;'.....,;ccccccccc:,,,,,'.'c:.                  
                    ..,;:::;,;lk0K0x;.':llooooool:;,,;::;'.';llolccccc;'......:l,.                  
                   ..',;::cc:,cxO0Oo,':ccccccllc;;;clool:'.',clllccc:;'......',,.     .             
                  ...';ccccc;',cool,.;ccccccc:,':xkkkxoc,.,;';ccc:;:;,.......''..                   
                  ..';ccccc:,''',,'..,:cc::c;''cOK00Odc,.',,.':cc;,,,'...'....'..                   
                  ..,;:;;::;,'.......';;;;;,.'l0XXXKOkxoll:,..:c:,''.....'.......                   
                  .'''..',,,'........''''''..ckKXNNNXX0kdol:'';:,.......,;'.......                  
                 .........'..........'......,coxO0Okoc:;;;,''..........,:c;...''..                  
                 ...........'',:c,........',:lloo:,,;;:ldd,..... .......';'...,;'..                 
                 ...........,coodl'......';oOKKK0Okxoolcox:.....';;,...:c,....';'..                 
                 ...........,cooddl,...'''lk0XNWWNNNKOkxxdl;',:llllc:,';c;,.':c:'..                 
                 ...........';oddolc;'''',cdx0XNNWWWWNNNXK0koloddddolc,';ll;,;'...                  
               .  ..........,cxkkdoc:::;,':odx0XNNXNNXXXKKKKK0OOOOkxdlc:,;:;c:.                     
            ....  . .....,'..':oxkdlc::llccoxOOKKxoodkO0KKKKKK000OOkxdl;'...cd;.                    
          .;x00kc.   .'..','..';lool:;:lodxxO0KK0o,.'lk0KXNXKKK0Oxol:;'..  ..lk:.                   
         .lXWWNWXd.   ....','..',:cl:;;:ldkO0KKKKK0kl:ok0XNNNXKK0Odl'....    .,c'                   
        .cXWWWWNWNk;.  .....''...',:c::;;:okO0KKKKKK0xllx0KKXKKK00kxl,.',,'.....;.                  
      . .kWNWWWWNNWKl.     ........'';::,;:coxO000KK00Odook0KK000OOxdo:'..''...cd;                  
      . :KWNNWWNNWNWNk,.    ....',;;;;;;;,,,,;clodxxkOkkkolokOkkkkxolcc,. ...,oOOc.                 
 .   . .dNNNNNNNNNWNNNO;.   ....';:cll:::;,;::;;;;::ccodxxxlc:coddoccc:'. ..;x0O0d. .               
    .  'OWNNNXXNNNNNWWNO:. ..''..,:oddololcxOOdc:,,,''',,,;cl:ckkl;,,,,....,x0000O; .               
       :KNNNXNXKKXNNNNNKkc'.'''..,:ldkkkxddOXX0kdlc:;,,''....'l0kc,,;:::,.,xK00O0Oc.                
      .lKNNNXKKKKKXNNKko:,'....'',:ldxOOOxxOKXNX0kxdoc:::;,..'oo;..,:lol:cdkOOkOOOl.                
    . .dKKXXXKKKXNNNNNKOdc;''...,;:coxOO0kxk0XNNNXXKOxoccc:;,,;....,cddclxdxOOOO00k,.               
    . 'kK0OO000KXNNNNNWWNX0kl,.'',:ldO0000Oxk0XNNNWWNXOdllcc:;'..',',;;:ldkO00OOOOOd'               
      ;OK0OOO0000KKKNWWWWNXK0d:;;:cok0KKK00kxdd0NNWWWNNKkdlc::;,,,,;;;;:cokOOOOOkkkOl.              
     .:0K0OOOOO0000KKNWWWNNXOdlccloxO0KKKK0OkdclxKXNNNWWNKOdll:;;;;:codkkkxxkkkkOkk0O;              
     .c00OOOkOOOOOOK0KNNNNN0occclxkO0000000Okkdlclox0XNNNNX0OxolccccloxO00kdodxkOOkO0d. .           
.  . .l0000OxdxkkxkOOkOKXXOdlodxkOOOO0Okxddxkkxoc::coOXNNNNXKOOxolcllok00kc;codxxxxkOOc.            
   . .oOOO00OxoddooooooxkkxoodxkOO0OOOxdooooolc:::::cx0KXXXXK00Oxoolclx0kc,,coddddddxOOl.           
     ,xOkkk00kxocccccoxkkkkkxxdooooodddoolcc:;,,,'',:cdxO0000000kxoolodxl;,;:lodxxdoooxx;.          
     ,kOOkkkOOko::coxkOOOOOOOkxolc:;;;:lcc:;,,,,,''''':ldxkO00OOkxoooollcc:;;:loxxdolloxo.     .    
   . 'x00Okkkkdc:ldxO000K0OOOkoc;;;,,,,;;;::::;,''.'',:ccoddddddoolllol:;:::;,;cdddolcoxkl.  .      
   . 'd00OOOOdc:loxO00KKK000Oxoc;,,,,,,,,,;;;:;'.',;codolc::ccc:c::coooc;:clol;;lollccldkk:..       
     .oO0000koclloxO0KKK000Okdoc;,,,,,,,,,,,,;,.':lodxkkkxolcc::cccclool;:cokOkc;::::cllodo:...     
     .:k00K0Oo::coxO0KK0OOOOxdlc:;,,,,,,,,,,,;;,:odxO000O00OOkxdollllloc;:dk000Od:,;;;,''';::,.     
      'o0KKK0o;;:ldkO0OOkkdlcc:::;,,,,,,,,;:cooloxxOXNNNXXXXXKKK0Oxocc;;;ck0KKKK0kl,.... ..';:'.    
      .,d0KK0xc:,;lxkkdol;'..''',,,,'',,,;:cloddxkOKNWWWWWWWWNNNNXK0Oxdolclk0KKKK0kc. ..   .';;.    
        ,kKKK0xc,.',cl:,,'.......';;,,,,,;ccloodxk0XWNWWWWWWWWWWNWNXXK0kd:'cO0000OOx,.    ...,;'.   
        .'coddkxo:'.';:;,,........,;'';:;:clodxkkkkKNWWWWWWWWWWWWNNNXKK0kl;cxO0OOkkkc... ...',,..   
           ....,:c;,..,,,'.........;,.'::codxkO00xodOXNNWWWWWWWWNNNXKKKK0kdodkOO0OOOd,.....','..    
         .      .......','......''',,''';codkO0KKOkdcoOXNWWWWNWWNNNXKKKK0OkdoxOOOOOOo'.........     
                     ............',,,,,,,,;cdk000000ko::lx0KKXXXKKK0OOOOOkkdodkxxxxd:.......        
                         .........''''''''',,;coooolc:'...''';:;:lodddddooolllollc:'...             
                              .......................   .      ...'.........''''....                
                               .    .....        .    ..            ........  ...                   

</pre>

{{< attribution >}}

Character owned by me, art is by [Siplick](https://www.deviantart.com/siplick), but ran through an ASCII art tool - note, this is text, not an image!

{{< /attribution >}}

 {{< /columns >}}

And, yeah, I just had to write some HTML by hand to show those, but the majority of this page is still written in Markdown so that I don't have to write every `<p>` and line break and what not. See the {{< button relref="/Engineering/wrappingup/latex" >}}LaTeX and Markdown{{< /button >}} page for a quick overview (feel free to skip the {{< katex >}}\LaTeX{{< /katex >}} Section)

Also, if you dare to hit the <a href="https://github.com/VegaDeftwing/OpGuidesHugoSrc/tree/main/content//Design/web/langs/html.md" target="_blank" rel="noopener">
<img src="/svg/edit.svg" class="book-icon" alt="Edit">
<span>Edit this page</span>
</a> link on this page or any other on the site, you may see that there's actually a third thing mixed in with the Markdown and HTML (well, like, 5th thing if you consider the occasional inline CSS and JS, but I digress) and that's the weird tags that look like `{{</* attribution */>}}` or `{{</* columns */>}}` or the like, these are special blocks that work with [Hugo](https://gohugo.io), the tool I use to make OpGuides, and they basically just make it easy to reuse snippets of HTML. There's a good chance that whatever tools you use to make your website will offer something similar, as writing HTML directly can get quite cumbersome if you're repeating the same thing over and over.
