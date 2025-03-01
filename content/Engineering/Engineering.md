+++
bookToC = false
title = "Engineering"

+++

 {{< speech >}}Hey There! My name is Vega, and I'm glad you're here!{{< /speech >}}

<style>
    #canvasContainer
    {
        display:absolute;
        position: fixed;
        height: 100%;
        z-index: -1;
    }
    #canvas
    {
        height: 100%
        width: 100%
        position:fixed;
        display: block;
        top: 0;
        left: 0;
    }
</style>




<script src="https://cdnjs.cloudflare.com/ajax/libs/sat/0.8.0/SAT.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.11.0/underscore-min.js"></script>
<script>
var canvas = document.querySelector('#backcanvas');
fitToContainer(canvas);
function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
</script>
<script>
var scriptActiveSlime=!0,decay_slime=.1,sensor_slime=4,abs_speed_slime=3,angle_part_slime=.25;function resize(){SlimeMold.init(window.innerWidth,window.innerHeight)}!function(e){var t,i,s,o,a,n,r,l,h,d=4e3,f=.5,p=0,c=angle_part_slime,m="#2222",v="#345",u=.3,_=!1,M=[];var y=function(e,t){return new SAT.Vector(e,t)};function w(e,t,i,s,o){this.pos=y(e,t),this.radius=i,this.alfa=s,this.lambda=o,this.pheromone=0,this._latest=y(0,0),this.setSpeed(abs_speed_slime)}w.prototype={setSpeed:function(e){this._speed=y(Math.cos(this.alfa),Math.sin(this.alfa)),this._speedL=y(Math.cos(this.alfa+this.lambda),Math.sin(this.alfa+this.lambda)),this._speedR=y(Math.cos(this.alfa-this.lambda),Math.sin(this.alfa-this.lambda)),this._speed.scale(e),this._speedL.scale(e),this._speedR.scale(e)},update:function(e){2==e?this.alfa-=this.lambda:1==e&&(this.alfa+=this.lambda),0==!e&&this.setSpeed(abs_speed_slime),this.pos.x+this._speed.x<0?this.pos.x+=n:this.pos.x+this._speed.x>n?this.pos.x-=n:this.pos.y+this._speed.y<0?this.pos.y+=r:this.pos.y+this._speed.y>r&&(this.pos.y-=r),this._latest=this.pos.clone(),this.pos.add(this._speed)}};var g,S=[],x=0,b=0,L=20;function A(e,t,i){if(!(e<0||t<0||e>=n||t>=r)){var s=e-1<0?n-1:e-1,o=(e+1)%(n-1),a=t-1<0?r-1:t-1,l=(t+1)%(r-1);S[s][a]+=f*i,S[s][t]+=f*i,S[s][l]+=f*i,S[o][a]+=f*i,S[o][t]+=f*i,S[o][l]+=f*i,S[e][a]+=f*i,S[e][l]+=f*i,S[e][t]+=i}}function C(e){if(scriptActiveSlime)for(var t=-L;t<L;t++)for(var i=-L;i<L;i++)A(Math.floor(e.touches[0].clientX+t),Math.floor(e.touches[0].clientY+i),1e7)}function E(e){if(scriptActiveSlime){for(var t=-L;t<L;t++)for(var i=-L;i<L;i++)A(e.clientX+t-l,e.clientY+i-h,1e7);_=!0}}function R(){_=!1}function P(e){if(scriptActiveSlime&&_)for(var t=-L;t<L;t++)for(var i=-L;i<L;i++)A(e.clientX+t-l,e.clientY+i-h,1e7)}function I(e,t){l=Math.floor(.5*(window.innerWidth-e)),h=Math.floor(.5*(window.innerHeight-t)),n=i.width=e,r=i.height=t,o.width=n,o.height=r,s=i.getContext("2d"),a=o.getContext("2d")}function T(){W(n,r)}function W(e,t){M=[],numParticles=d,I(e,t),function(e){var t,i;for(t=0;t<e;t++)i=new w(Math.floor(n*Math.random()),Math.floor(r*Math.random()),u,2*Math.PI*Math.random(),c*Math.PI),M.push(i)}(d),function(){g=1;for(var e=0,t=0;e<n;e+=g,t++){S[t]=[],x=t;for(var i=0,s=0;i<n;i+=g,s++)S[t][s]=0,b=s}}()}function z(e){var t=Math.floor((e.pos.x+sensor_slime*e._speed.x)/g)%x;t<0&&(t+=x);var i=Math.floor((e.pos.y+sensor_slime*e._speed.y)/g)%b;i<0&&(i+=b);var s=Math.floor((e.pos.x+sensor_slime*e._speedL.x)/g)%x;s<0&&(s+=x);var o=Math.floor((e.pos.y+sensor_slime*e._speedL.y)/g)%b;o<0&&(o+=b);var a=Math.floor((e.pos.x+sensor_slime*e._speedR.x)/g)%x;a<0&&(a+=x);var n=Math.floor((e.pos.y+sensor_slime*e._speedR.y)/g)%b;n<0&&(n+=b);var r=S[t][i],l=S[s][o],h=S[a][n];return l==h?!l>=r?0:Math.floor(2*Math.random())+1:l>h?l>=r?1:0:h>=r?2:0}e.SlimeMold={initCanvas:function(e,s){idContainerSlime=e+"Container",t=e,i=document.getElementById(t),o=document.createElement("canvas"),i.addEventListener("mousedown",E),i.addEventListener("mousemove",P),i.addEventListener("touchmove",C),i.addEventListener("mouseup",R),i.addEventListener("mouseout",R)},init:W,render:function e(){if(scriptActiveSlime){var t,i,l;angle_part_slime!=c&&(c=angle_part_slime,T()),s.save(),s.fillStyle=m,s.fillRect(0,0,n,r),s.restore();var h=Math.random();for(a.save(),a.globalCompositeOperation="destination-out",a.globalAlpha=1,a.fillRect(0,0,n,r),a.restore(),i=M.length,a.save(),a.fillStyle=a.strokeStyle=v,a.lineCap=a.lineJoin="round",a.lineWidth=0==p?u*(2+h):3*u*(2+h),a.beginPath(),t=0;t<i;t++){var f=z(l=M[t]);l.update(f),a.moveTo(l.pos.x,l.pos.y),0==p?a.lineTo(l._latest.x,l._latest.y):1==p&&a.lineTo(l.pos.x,l.pos.y),A(Math.floor(l.pos.x/g)%x,Math.floor(l.pos.y/g)%b,1)}a.stroke(),a.restore(),s.drawImage(o,0,0),function(){for(var e=0,t=0;e<n;e+=g,t++)for(var i=0,s=0;i<n;i+=g,s++)S[t][s]=S[t][s]*decay_slime}(),numParticles!=d&&W(n,r),requestAnimationFrame(e)}},offset:I,refresh:T,toggleRenderShape:function(){return p=p?0:1}}}(window),SlimeMold.initCanvas("backcanvas"),SlimeMold.init(window.innerWidth,window.innerHeight),requestAnimationFrame(SlimeMold.render),window.addEventListener("resize",resize);
</script>

I know there are plenty of tutorials and ways to learn online, be it on YouTube, SkillShare, or online classes provided for free by various universities. The difference here is I've tried to cut out the boring parts, make things a bit more entertaining than a textbook, and drenched the content in my own personal opinion that has been built up by my experiences. My views on things like what programming languages are bad or what hardware you should buy to learn on will be expressed directly and bluntly. This isn't to say I won't explain my reasoning, just that I'm not going to be apologetic when I say PHP, Java, Arduino (at least the 328p), and Windows 10 are trash - though I will still likely talk about all of these things.

<!-- I had JavaScript listed as trash too, but https://daitarou.info has convinced me otherwise, begrudgingly -->

I by no means expect you to share my same biases, in fact, I hope you do not and that at one point or another we can discuss why you think I am wrong, as that is the only way I can learn.

## So, What is this?

{{< columns >}}

To put it poetically, this is a guide for understanding the power the electron has in our lives, as well as a love letter to the beautiful math and science that are used for computer and electrical engineering.

Electricity, digital logic, code, computers, embedded systems - these things are all around us every second of every day. As I type this, I'm wearing a smartwatch, I have a smartphone in my pocket, and I'm using a desktop computer. Each of these devices contains dozens of smaller computers, power supplies, wireless interfaces, etc. My goal with this is to teach you how all of this works and how to work with it, from transistors to high level code to useful user applications.

<--->

<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Cyclotron_motion_wider_view.jpg" style="border: 1px solid #ddd;" />

{{< attribution >}}

A beam of electrons deflected in a circle by a magnetic field</br></br>Marcin Białek, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0), via Wikimedia Commons

{{< /attribution >}}

{{< /columns >}}

While I'm at it, I also want to inspire you to see beauty in these devices and the algorithms that make them run. For example, the background for this page is running a simulation of *Physarum polycephalum* or slime mold. Beyond being beautiful, the simulation is actually useful because the way slime mold looks for food happens to be a very efficient way of finding the shortest path<footnote>Well, sort of. The way it works doesn't <b>ensure</b> you're getting the shortest path, but then, doing so would require checking every possible cobination, which is the extremely inefficent task this simulation helps avoid</footnote> visiting many points - a problem I'm sure the developers of Google Maps would tell you is very important!

---

I will be assuming you are of reasonable technical ability already- that is I assume you can proficiently use most types of generic software, navigate a file manager, etc.  Furthermore, while I will go into high level math, chemistry, and physics, I don't think they're strictly needed for every reader as knowing these things is typically not actually useful in the daily life of someone who works on any of this beyond those that are doing cutting edge research or are planning to teach. In either of those cases, you should actually go to college instead of reading this. For everyone else, welcome. This site aims to save you going to college, getting hundreds of thousands of dollars in debt, and taking classes full of useless information you will inevitably forget and for which employers don't care about to begin with.

Following along will require a few things. The first of which is dedication and time. If you don't have the desire to put in at least a little bit of work there is simply no way I can help, that said, if you're reading this instead of watching Netflix I believe that's already proof enough you want to learn. Next is hardware and software, namely you'll be needing a few development boards and Linux, but we'll get into those with time.

---

Before we get started, there are a few things I recommend reading and watching first. These should give you a bit of an overview of some of the things that will be covered, to give you at least a tiny bit of familiarity as each concept comes up.

While I will be covering a lot more than just Computer Science, I recommend this overview of the topics covered in CS: [Map of Computer Science](https://www.youtube.com/watch?v=SzJ46YA_RaA) by Dominic Walliman

If you want to go through a gentle introduction to a lot of what this guide will cover, [This Crash Course: Computer Science](https://www.youtube.com/watch?v=tpIctyqH29Q&list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&ab_channel=CrashCourse) series on YouTube is pretty good too.

---

{{< attribution >}}Slime mold code modified from [TheBugStudio's Code on CodePen](https://codepen.io/TheBugStudio/pen/zYqyJvZ){{< /attribution >}}
