# 30 - Control Systems

What are control systems? Well, the easiest way to answer that is to list the things control systems typically do:

* Amplify an Input 

  **ex:** Pluck a tiny string on a guitar, get an earth shaking output from the speaker

* Reduce the complexity of user input *or* change it's location

  **ex:** Floor button on an elevator- you don't need to input a height off the ground for what floor you want to be on, nor do you need to enter values to compensate for how quickly it should get to it's max speed or how fast it should slow down.

  **ex:** Literally any remote controlled device, like drones

* Compensate for undesired input

  **ex:** A self driving car shouldn't drift just because the wind is pushing against one side

Alright, so what, broadly, are the goals when making a control system?

* **Transient Response** - when we change states, we want the system to respond, but not so fast it breaks or so slow we're stuck waiting

  **ex:** Dose the elevator take to long to get going or does it accelerate too quickly and make your stomach turn over

* **Steady-State Response** - when the system reaches a steady-sate, is it behaving how we want

  **ex:** Did the elevator stop right at the right spot, or did it under or over shoot? Is it still moving up and down a bit (oscillating) even after it reached the destination floor? 

* **Stability** - is there a situation where the system goes to shit

  **ex:** A microphone next to a speaker will cause that awful feedback whine as soon as any input is applied (even background noise) this is instability

* **The same concerns as everything else** - Keep cost down, reliability up, and complexity reasonable for the problem. 

We'll generally look at two kinds of systems- those with and those without **feedback**, so let's start with that and why it matters:

---

[TODO]

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qKy98Cbcltw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

