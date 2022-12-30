# Chapter 22 - Custom Languages

<script>
    document.getElementById("compilersMenu").open = true;
</script>

Some people like playing around with new programming languages, or concepts in Programming Language Theory (PLT). In order to do this outside of pure mathematics, anyone who does will have to learn how to write a compiler for their new language.

Unfortunately, compilers are some of the most complex pieces of software out there, along with operating system kernels. Especially when talking about a common compiler for well-established language, there is no way a single guide on the internet can teach you how to write one.

Popular open source compilers have effort in them measured in engineer-decades, and they still have tons of bugs.

However, there is still value in learning the basics:
* The architecture of compilers can be applied to other data processing problems.
* The terms and concepts may make error messages more understandable when they come out of the popular compiler you are using.
* A small custom language (usually called a Domain Specific Language, or DSL) can provide a lot of bang for the buck on certain kinds of problems.
* Maybe you are trying to learn about Programming Language Theory. Writing your own language is not for the faint of heart, but it will certainly teach you a lot.

This chapter will thus focus on the high-level principles of compiler design, as well as providing common techniques and points of further research.

## Getting started

In traditional compiler design, the problems a compiler must solve are split into phases, each of which should (at least in theory) have a clean API to the next.

From [the Dragon Book](https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools), here are the phases we will focus on:

1. **Lexical analysis**: the program is transformed from a text string into a series of "tokens", each of which represents a basic building block of the programming language, as well as any additional metadata needed by future stages. Operators, variables, keywords, and identifiers are all different types of token.
2. **Syntax analysis**: the stream of tokens is organized into syntax constructs based on the rules of the language -- or if it cannot be, error messages are generated. Expressions, statements, assignments, blocks, conditionals, etc. are structures that are created during this phase. Often, the entire program is often represented as tree structure called an Abstract Syntax Tree (AST).
3. **Syntax directed translation**: the AST is walked by different forms of analysis, results in the compiler taking actions: creating variables, analyzing program flow, determining the acutal instructions the program should follow, and so on. This varies widely between compilers in their approach, but many compilers create a representation of program semantics that is designed to be easy to structure by the next phase, often called an Intermediate Representation (IR).
4. **Code generation**: the IR is converted to assembly or machine instructions of the actual machine which will execute the program. As noted in other sections, other steps such as assembling and linking, are likely still required.

We will start with an example that is quite simple, and go into some depth. Our goal is to enhance it and come up with something more powerful and more "compiler like" in the course of these sections. And perhaps you can learn something along the way.

Strap in and get ready for some serious coding!
