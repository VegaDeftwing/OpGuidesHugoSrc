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

A leraning algorithm uses train set χ and finds a hypothesis h∈H that approximates C

error (loss) of h

- Empirical error is a fraction of χ that h gets wrong
- Generilation error is probability that a new, randomly selected, instance is misclassified by h. This depends on the probability distribution over instances. Generalizion error is much more important than Empirical - it's better to have it perfrom well on new data than be great on the training data
- False Negitives (C-h) and False Positives (h-C)

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

## Linear Unit (Regression)

[TODO] tie back to https://en.wikipedia.org/wiki/Linear_regression

a vector with features x_1 to x_2 and weights w_1 to w_n

<img src="/linearregression.svg" style="-webkit-filter: invert(.85);">

</br>

{{< katex >}}\hat{y}=f(x;w,b)=x w+b=w_1x_1+....w_nx_n+b{{< /katex >}}

b can be represnteded as {{< katex >}}w_0{{< /katex >}} instead, as is shown in the above

<img src="/linregbin.svg" style="-webkit-filter: invert(.85);">

</br>

{{< katex >}}y=o(x;w,b)=\{{+1 \text{ if } f(x;w,b)>0\atop{-1 \text{ otherwise}}}{{< /katex >}}

(sometimes 0 instead of -1)

for binary classification, +1 is it *is* the thing, -1 (or 0) is saying it's *not* the thing.

not all functions are linearly seperable, one straight line can't split the data into postives and negitives- so having *networks* of units works around this

Of course, we'd like to be able to use inputs that aren't just numbers. Representing things like price or weight can be given a number, but for other things, like colors, **one hot vectors** are helpful, for example, if there are three color options, red, green, blue, red could be [1,0,0], green [0,1,0], blue [0,0,1]. This is better than just assigning each color an integer (red=1,green=2,blue=3, etc.) because we don't want to imply ordering in the data. one hot vectors are espcically nice because they let us assign positive weights to a given color and negitive weights to others. For example, in identifying a fire truck, red will obviosuly have a very positive weight, while being the other colors may be a negitive weight.

training:

{{< katex >}}w_j\prime\larr w_j+\eta(y^t-\hat{y}^t)x^t_j{{< /katex >}}

{{< katex >}}w_j\prime{{< /katex >}} is the new value of {{< katex >}}w_j{{< /katex >}}, (the j'th w as each weight is incremented though)

{{< katex >}}x_j^t{{< /katex >}} is the jth attribute of tranining instance t

{{< katex >}}y^t{{< /katex >}} is the label of traning instance t

{{< katex >}}\hat{y}^t{{< /katex >}} is Perception output on traning instance t

{{< katex >}}\eta > 0{{< /katex >}}, the *learning rate*, is a small constant (e.g.; 0.1) 

if {{< katex >}}(y-\hat{y})>0 \text{ then increase } w_j \text{ w.r.t } x_j{{< /katex >}}  else decrease

Can prove rule will converge if traning data is linearly seperable and η sufficently small

a bad learning rate can cause very slow convergence (too small) or even divergence (too large)

## Gradient Descent

[TODO] https://en.wikipedia.org/wiki/Gradient_descent

[TODO] Stochastic Gradient Descent

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