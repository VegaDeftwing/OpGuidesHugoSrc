## Code Generation

As I said earlier, there is no way that you can write a proper compiler on your own, due to the amount of work involved.

But new languages are invented by individual people all the time. How is this possible? The answer is, they use a backend framework or library for this part.

This is the part where the Intermediate Representation (IR) comes it. It is determined by the library being used, which means the language itself can be abstracted away. Just convert any syntax you're doing to that IR.

Fortunately, most of these libraries use similar concepts and representations, because they make the backends easy to implement and programs easy to optimize. In order to know what we're looking at, let's go through basic concepts first.

### Basic Building Blocks: names, instructions, and blocks

A common representation of a program initially is a control-flow graph. Each node is called a *block*, and represents a single "chunk" of instructions with one entry point and multiple exits.

For example, consider this psudeocode:

```text
while n < 10
    x = read integer from file
    array[n] = x
    n = n + 1
end while
print array[0]
```

This would be broken into 3 blocks:

```text
start
 |
 |    --------------------------------------------------------------
 |   /                                                              \
 v  v         true                                                   \
[ n < 10 ] ----> [ x = read integer from file; array[n] = x; n = n + 1]
  \
   \  false
    ----------> [ print array[0] ] --> end

```

You can perhaps see how this is useful to the compiler: when it wants to do things like eliminating dead code, rearranging conditionals, or inlining a function to its caller, it just has to move some arrows around independent of the contents.

As for the blocks themselves, what do they contain? Surprise surprise, each statement turns out to be something like a tree! The root is called an *r-value*, that is the result of an expression. Exactly which operations depend on the specific backend, but walking the tree is an easy way to build these.

Finally, we have functions. A function is basically a block with a *name* -- usually a *symbol* by the time the compiler passes the code off to the linker. In particular, these names can be *imported* or *exported*.

For example, if we want our language to print something, we need to import the `print` function from something that can interact with the rest of the system. Simliarly, if we want to (spoiler alert) support *subroutines* at some point, that means we need to export the name of our subroutine to be called by other code.

Remember that by the time we get to this phase, we already have our program as a giant tree, with operations as parent nodes and integers as leaf nodes.

It should be pretty easy to make one big block that contains a single rvalue each time the user presses enter. So let's do it!


#### Setting up libgccjit

While LLVM is popular, we'll use libgccgit. It is a library that ship with GCC to create an API for a [just-in-time compiler](https://en.wikipedia.org/wiki/Just-in-time_compilation), which is what we're really building here.

The reason we're picking it is not because it's more popular -- in fact, being GPL, a lot of projects don't like it. However, it does have one good feature: a C API that it is possible to bind to Python. To achieve this, we will use an FFI translation tool called [SWIG](https://swig.org/Doc4.0).

First, verify your installation of GCC, and libgccjit. There may be different packages depending on your distro. The docs have a [hello world test example](https://gcc.gnu.org/onlinedocs/jit/intro/tutorial01.html) you can run to verify this.

Once it works, find the path to the header file that the example used. On my system running Ubutu 20.04, it's `/usr/lib/gcc/x86_64-linux-gnu/10/include/libgccjit.h`. But it likely depends on your distro.

[TODO Update for Arch Linux]

SWIG is based on "interface files", which describes some properties about the library being bound. There is no point going deep into the syntax, because the library "just works" -- almost.

Just a few extra definitions are needed. Copy-paste this and trust me, just this once.

{{< details "gcccjit.i" >}}

{{% inccode file="content/Engineering/Programming/Compilers/swig/gccjit.i" %}}

{{</details>}}

Between the example and the interface file, it's best to just create a GNU Makefile which will build the Python library:

{{< details "Makefile" >}}

{{% inccode file="content/Engineering/Programming/Compilers/swig/Makefile" %}}

{{</details>}}

After running `make`, it should be possible to enter Python and type:

```python
import gccjit
```

This should then load successfully!

### Use of libgccjit

In brief, here is the approach we should take according to the documentation. In response to each line being parsed:

1. Create a "context" for compilation.
2. Create a block which evaluates the tree of integer operations.
3. Give that block a name, and export it as a function.
4. Call that new function.
5. Put the result on the top of our stack.

Since we have relied on SWIG to be mostly automatic, it gives us a "raw" C API, so it's not pretty. But, it's functional, and hopefully easy to follow.

[TODO finish this section]
