### Syntax analysis

Our syntax analysis phase, or "parsing", is basically a no-op in the current version. This is possible because, thanks to our stack having a "guard zero" at the bottom, there is really no such thing as a program with only valid tokens that is invalid syntax.

This makes it a very rare language indeed.

Since we are doing math in a specific order of operations, it would be easy to make this into a tree. Each leaf is a number, and each middle node is an operator.

This would then allow separating the evaluation from the actual parsing and determining order of operations. In this simple language it is extra work, but real compilers will mostly focus on manipulating and reading the structure of the AST when creating their intermediate representation.

In order to save time and keep the code simple, let's use the `binarytree` python library. I'm using version 6.5.1 for this exercise.

Once it's installed, add this to the top:

```
from binarytree import Node
```

And then, re-write the main parsing loop to fold nodes together in a tree, rather than just doing the calculation:

{{% inccode file="content/Engineering/Programming/Compilers/calculator/calc_lang/parse.py" %}}

At this point, doing `print(nodes[-1])` -- the last generated expression -- should print the entire tree (assuming the user correctly completed it).

```
> 2 3 +

  +
 / \
3   2

> 2 3 4 + *

    __*
   /   \
  +     2
 / \
4   3

```

Thus, we have completed the parsing stage.

From this point on, our program can stop worrying about tokens, or syntax errors in the file, and instead, focus on semantics -- what does the program mean, and what instructions should we generate to execute it.
