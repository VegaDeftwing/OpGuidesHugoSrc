# Chapter 33 - Fine, I'll talk about AI

## Machine Learning

{{< tip >}}

This chapter is very much a work in progress, as such the math on this page will not render correctly until I fix it for the static site generator this site uses.

{{< /tip >}}

You've used it today. ML is used for search engines, social media feed order (the almighty Algorithm), and predictive text systems.

What is the difference between ML and AI? [TODO]

Learning is not the same as memorization, for example, if a baby sees his mother from various angles and under different lighting, he's not *memorizing* her face. He's learning features about it, which is why he can still recognize her in new views. Checking if two things are identical (or nearly so) is much easier, learning features and detecting things based on them is more difficult for a computer.

when to use ML?

* Computer being put in a situation where human's have no direct experiance
* No way to tell computer the human experiance (speech recognition, facial recognition, driving)
* When the solution changes based on conditions/time (Driving in different weather / lighting, background noise removal)
* Every application is a bit different (different voices need different recognition)

when *not* to use ML?

* When all cases can be covered by a traditional program

### Supervised Learning

Given labeled examples with features described, like pictures of trucks and cars, labeled 'truck' or 'car' and data fields for wheel count, color, etc. that are populated, the machine learning algorithm makes a model that will try to classify new inputs.

Features can be as simple as the individual pixel values in an image

Let C be the **target function** to be learned. Think of C as a function that takes the input example and outputs a label. The goal is to, given a training set $ \chi = \{(x^t,y^t) \}^N_{t=1}$ where $y^t=C(x^t)$, output a **hypothesis** h ∈H, that approximates C when classifying new  input.

Each instance x represents a vector of features (attributes). For example, let each $x=(x_1,x_2)$ be  a vector describing attributes of a guitar; $x_1 = \text{sting count}, x_2=\text{acoustic or electric}$, each label is binary (positive/negitive, yes/no, 1/0, etc.) and contributes to weather or not it's a 6 string acoustic guitar.

### Unsupervised Learning

Same as above, but no labels. (Still features). For example, https://en.wikipedia.org/wiki/K-means_clustering or Hierachical clustering https://en.wikipedia.org/wiki/Hierarchical_clustering

### Semi-supervised learning

a mix of some labeled data, and some unlabed.

Pretrain to get relevent features

transfer-learning, take training from one task and apply it to another (should this be here?)

### Reinforcement Learning

agent takes step, looks at eviroment, makes actions based on it, repeat. Goal it to maximize expected long term reward

Often used for games

Markov Decision Process

Sorta like a state machine

feedback is often delayed - credit assignment problem

## How does it work?

Not overfitting - spikey vs smooth curve. Spikey to directly fit is bad, similar with XY blobs with reaching out arms balance with model complexity with regulizer. We want generalization (learning) not memorization

### Models

Decision trees

support vector machines

probalistic graphical models

Artifical Neural Networks -> Deep learning (many layers)

Each node multiplied by weight, sent though activation function, often using stochastic gradient descent

### Performance Measures

Classification error - fraction of time correct

Squared error

cross entropy



No single best approach 



## ANN - Artifical Neural Networks

Silicon 'neurons' are much faster, but connect to many less nodes, compared 

[TODO] get human neuron count, 'switching time', interconnectivity

much different for ML vs Biological Modeling

think a ton of really weak cores, which explains the GPU usage

good for raw sensor data, okay with noise, but requires long training times and lacks human readability- hard to know why it predicts what it does

Started with the Perceptron algoritm, but that was too limited (40's)

multi-layer backpropagation (80's) allowed for training multi layer networks, and they couldn't be made deep on that era's hardware, while other algoritms (Support Vector Machines, boosting) were taking off instead. In the 2000's it became possible for 5-8 layers though, making 'deep' learning possible (mostly because of gaming GPUs). Better datasets, and better algorithms helped too.

### Linear Units

### Gradient Decest

**alt: evolution**

### Nonlinearly seperable problems and multilayer networks

### Types of Activation Functions





<iframe width="100%" height="500" src="https://www.youtube.com/embed/oJNHXPs0XDk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://hific.github.io/

[i.am.ai Roadmap](https://i.am.ai/roadmap/) -- this shows that AI/ML are rooted in Data Science, as a [TODO] this probably needs talked about here

[This ____ Does Not Exist](https://thisxdoesnotexist.com)

> "Using generative adversarial networks (GAN), we can learn how to create realistic-looking fake versions of almost anything"

[Stan for statistical modeling](https://mc-stan.org)