# Intermezzo

<script>
    document.getElementById("compilersMenu").open = true;
</script>

At this point, we have something that is ugly looking, but seems like a real compiler! After all, it does the four stages as promised:

1. Lexing: the splitting of whitespace and division of tokens
2. Parsing: the creation of the syntax tree based on ordering of operations
3. Translation: a no-op, because the syntax tree is good enough
4. Code Generation: Python "machine code" as valid infix math, or a JIT library running routines

But still, you can't really call this a langauge. Even aside from Turing Completeness, it's really missing some basic features: variables, flow control and other math operations.

More subtle and fundamental is that each "program" is a single statement. There isn't even an ability to have a subroutine you can define then call into, let alone do things like recursion.

Let's see if we can add a couple. Then perhaps these tools and approaches will stop seeming like overkill and boilerplate, and start to shine.
