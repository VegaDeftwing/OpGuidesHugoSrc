# Chapter 23 - <span style="z-index:1;position: absolute;display: inline-block;color: #fff2;text-shadow:none;"> <sup> e<sup>-</sup><sub>e<sup>-</sup><sup>e<sup>-</sup></sup><sub>e<sup>-</sup></sub></sub></sup><sub>e-</sub><sup>e<sup>-</sup></sup><sub>e<sup>-</sup><sup>e<sup>-</sup></sup><sub>e<sup>-</sup></sub></sub></sup><sub>e<sup>-</sup></sub><sup>e<sup>-</sup></sup></span> Electrons work for you

<script>
    document.getElementById("Circuits1Menu").open = true;
</script>

Normally, I would start a new section with some inspiring paragraph about all the cool things you can do with the topic - but I don't even know where to start on this page. 

I mean, sure, you're literally reading this page from a magic glowing rectangle powered by electricity but, like, who cares? You don't need to know how to work with electricity to use a computer. Hell, most programmers don't even know that much about circuits so clearly it's not required even for advanced use.

So, consider this your de-motivational speech. Electricity can be damn cool and you can do some awesome things with it, but depending on your goals, you may not need to care.

If you just want to make video games, software, apps, etc - you probably don't need to know any of this.

On the other hand, if you want to work on machines and make something that interacts with the real world, spin motors, read sensors, make guitar pedals, DIY your own tools, and do things beyond what code is readily capable of, then yeah, you'll need to learn how to work with circuits.

Unfortunately, "circuits" isn't one thing anymore and it's increasing tied to the world of programming as more and more systems have a computer of varying capability integrated into them. Even without the invasion of code and computers, "circuits" is a pretty wide ranging description.

Maybe you want to make a power system for your project, to make the batteries last longer and easier to recharge. That, and much more, falls under the "power electronics" umbrella.

Maybe you want to design strictly analog audio equipment, like guitar pedals, amplifiers, or speaker systems.

Maybe you're wanting to wire together motors, servos, and actuators to make robot.

Maybe you want to design complex digital logic systems in hardware that don't need code - just logic gates.

Maybe you want to make radio systems for long range wireless communication.

There's a lot of ground to cover here, and while each has things is common, there are details that somebody with decades in experience doing one would have no idea about in the other. There are some things that are considered bad practice in some areas that are common and correct in other areas.

Regardless, if you want to go down this road, one thing's for sure, you'll need to make electrons do work for you.

To get started on that journey, let's establish a baseline. There's some things that most laypeople should know, and we can make some connections to make a platform of knowledge we can build on.

## The Stuff You Probably Know

* Open (broken) circuit → Electricity can't flow
* Closed (completed) circuit → Electricity can flow
* Switches can open or close a circuit, or switch between two (or more) different circuits
* Fork in an outlet → Short circuit, electricity flows without limit
* Voltage = Potential energy ≈ Pressure
  * Voltage source = source of potential energy, like a battery
  * Measured in Volts (duh.)
* Current = Flow of electrons = releasing that potential energy to do something
  * Measured in Amps
* Power = Pressure (Volts) * Flow (Amps)
  * High pressure but low flow has the same power draw as low pressure but high flow
    * Tiny hose with lots of pressure Vs fire hose with low pressure could both move the same amount of water = use the same amount of power

  * Power = Voltage * Current ( {{< katex >}}P=I\times V{{< /katex >}} )
    * We use A for the unit (Amps) but I for equations… for reasons.
* To much voltage, and things blow up (lightning strike, power surge, etc.)
* To much current draw, and things blow up (accidental short, phone in toilet, etc.)
  * Usually, a short will blow the breaker
* Not all devices immediately blow your breaker
* Therefore, not all devices draw the maximum available current
* Therefore, they have some way to **resist** current flow
* Resistors are a thing that exist
* AC = Alternating Current
  * Like what you get from your wall
* DC = Direct Current
  * Like what comes out of your phone charger
* Electricity can kill you
* High voltage look really cool
* High voltage can extra kill you
* Low voltage can kill you too
  * This is extra true if you touch it with wet hands
* Atoms have a positively charged nucleus and electrons doing their thing around that
* Current = flow of electrons
* Clearly, these electrons can move away from the atom we'd normally associate with them
* Metals conduct better than, say, air or rubber
  *  metals just let the electrons flow easier
* But sometimes electricity jumps though the air?
  * If you make the electrons angry enough, they break the rules.
* Electromagnetism is a thing
* Electromagnets are a thing
  * They're made with a coil of wire
* Drills and motors have multiple coils of wires
  * They must be using the coils, turning them on and off, to spin the core

## Some homework

To avoid reinventing the wheel, go checkout {{< best >}}[Sparkfun's introduction to Voltage, Current, and Ohm's Law](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/voltage){{< /best >}}. There's 4 pages, 3 of which have videos. This should bring you up to speed enough to make the next section a bit easier going.

Additionally, while I'll cover each thing covered in this video in more detail, getting this initial exposure should be quite helpful to provide added context as we move forward:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/6Maq5IyHSuc" title="A simple guide to electronic components." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
