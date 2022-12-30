# Prelude: A Reverse Polish Notation Calculator

<script>
    document.getElementById("compilersMenu").open = true;
</script>

In order to get a footing, we'll start with an example: a calculator that uses postfix operator notation, sometimes called "reverse polish notation."

In this calculator, all arguments are placed onto a stack. Whenever an operator occurs, it pops values off the stack at that point, performs the operation, and pushes the answer back on.

All operations are binary, so they take two operands from the stack and replace it with one result. To simplify matters, if the stack is has only one operand on it when an operator is called, the other operand is zero.

The calculator takes one line of calculation at a time. If there are leftover elements, it will print the top of the stack, which was the result of the last operation.

Here are some examples, with `>` marking the user input prompt:

```
> 1
1
> 1 2
2
> 2 3 +
5
> 2 3 * 4 5 * +
26
> 2 3 4 + *
14
> 2 3 4 5 * * +
62
```

{{< details "Our Reference Implementation" >}}

{{% inccode language="python" file="content/Engineering/Programming/Compilers/calculator/calc_prelude.py" %}}

<a href="/Engineering/Programming/Compilers/calculator/calc_prelude.py" download>DOWNLOAD</a> - Note, you'll need to put spaces between each token and press enter to run a line.

{{</details>}}

At a high level, it turns out the calculator is doing many of the phases of a compiler! Sort of.

It is doing lexical analysis: splitting up the program into numbers and the operators to execute on them.

It is doing syntax analysis: identifying what operations to do, and keeping track of the order to do them in, which determines their operands.

It is using those syntax understandings to take action. It executes them immediately, which makes it an interpreter rather than a compiler, and isn't really "translation", but the idea is still there.

It is so simple mostly because of the simplicty of the "language." It has only one type (integer), no variables, and not even any control flow. In fact, it is not even Turing Complete!<a class="ptr">(1)</a>

While there is no way to make this into a language like C or Python without a total re-write, perhaps we can fix these shortcomings and come up with something more powerful in the course of these sections. And perhaps we can learn something along the way.

To make things easier to follow, and facilitate changing one piece at a time, I'm going to create a python package called `calc_lang`. If you're not familiar with python packages, [here's an overview](https://pythongeeks.org/python-packages/). From now on, all "final code" examples will be in the package.

<ol hidden id="footnotes">
<li>Aside from the lack of control flow, this is because our abstract machine requires data to be accessed in stack order (LIFO).

Even if memory and the number of operations were infinite (as is the case in a Turing machine), this data access pattern makes certain problems uncomputable. In order to make it Turing complete, at least one operation that allows random access (i.e. read from the middle without deleting the data above it) is necessary. This was proven several decades ago.

It would suffice, for example, to add a second parallel stack, and let operations choose between them. It would also suffice to force data accesses into queue order (FIFO) instead.
</li>
</ol>
