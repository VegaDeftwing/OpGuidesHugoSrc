# Syntax-Directed Translation

<script>
    document.getElementById("compilersMenu").open = true;
</script>

This stage is where we get an opportunity to modify and restructure the tree from a syntax point of view, into a semantic point of view.

To avoid "How to Draw an Owl Step 2: Finish the Owl", we will continue with the interpteter theme for the moment. Instead of figuring out all the analyses required, let's ask: what intermediate representation can be interpreted by Python?

Python is quite nice in that it will simply evaluate any mathematical expression for you if it is standalone. If our compiler can create something we can `eval`, then that means it is valid "machine code" for the "machine" we are targeting.

The way to do this is to convert our tree into a standard infix expression. The two trees from earlier would respectively be:

```
> 2 3 +
(2 + 3)
> 2 3 4 + *
((4 + 3) * 2)
```

Both of those outputs are valid python expressions that can simply be passed to `eval` to get our answer.

The easiest conversion method is to use [a clever 2016 Paper](https://www.um.edu.mt/library/oar/bitstream/123456789/14892/1/Converting%20a%20binary%20tree%20expression%20to%20infix%20notation%20using%20the%20BAT%20algorithm.pdf) which describes an algorithm called BAIT: Bracket Algorithm for Infix Traversal.

It applies parentheses ("brackets") to each leaf node (containing a number) based on its position in the tree. Once this has been applied, doing an infix traversal on the tree and concatenating it into a single string will get a correct textual representation.

At this point `expr` is the output string above if printed. Apply that repeatedly, and we get our final code:

{{% inccode language="python" file="content/Engineering/Programming/Compilers/calculator/calc_lang/eval_py.py" %}}
