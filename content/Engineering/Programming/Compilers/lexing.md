### Lexical analysis

The transformation of source code text into a series of *tokens* is the first task. Much like words in a sentence, each token has a specific meaning that will be used by later phases. It is this meaning that is is being captured, while the exact formatting or other details of the text itself are stripped away.

In our calculator, *lexing* (as it is called for short) is just one operation: `line.split()`. That's it.

It is trivial to turn a numeric string into its integer value in the language: call the Python function `int()`. The operators are, of course, addition and multplication, which are represented by one character each.

While `line.split()` is not exactly a fancy lexer, it works well enough as an example. That said, it is not very robust, and it falls on its face in some rather silly cases. For example:

```
> 2 3+
     ^
syntax error: unknown token
```

It's clear what the programmer meant, and spaces aren't meaningful except to separate numbers from each other. How can this be handled?

### Creating Tokens

The general philosophy is to group the characters from the input into *tokens*. That is, carriers of their meaning and metadata.

There are many tools to generate a lexer for your language, such as the long-standing [GNU flex](https://ftp.gnu.org/old-gnu/Manuals/flex-2.5.4/html_mono/flex.html) for C, or the more modern [RPLY library](https://rply.readthedocs.io/en/latest/users-guide/lexers.html) for Python. The basic idea behind them is all the same: some form of [finite state machine](https://en.wikipedia.org/wiki/Finite-state_machine), where the "final" states indicate that a recognized token was identified.

Rather than using these tools, our language is simple enough, we can use our own state machine seen all over the Linux world: regular expressions ("regexes" for short). They do exactly what a lexer does: match text against a specified pattern. In fact, many lexer generators allow tokens to be "described" with regular expressions!

For our language, here is an example of the table we will use, containing the tokens we have and how to match them:

| Token Type | Regex |
|------------|-------|
| Number | `0\|([1-9][0-9]*)` |
| Operator | `\+\|\*` |
| Whitespace | `\s+` |

The syntax of regular expressions is quite complex, so if you cannot read this, I would recommend [a regex "calculator" such as this one](https://regexr.com/) in order to explore them.

For now, though, let's build a simple test program to try them out. Rather than matching on specific characters, we will try each regular expression in the order they were in our table.

{{% inccode file="content/Engineering/Programming/Compilers/lexer.py" %}}

And let's try some inputs:

```
> 2 3 +
Number token: 2
Whitespace token: ' '
Number token: 3
Whitespace token: ' '
Operator token: +
> 2    3 +
Number token: 2
Whitespace token: '    '
Number token: 3
Whitespace token: ' '
Operator token: +
> 2   3 + * zzzz
Number token: 2
Whitespace token: '   '
Number token: 3
Whitespace token: ' '
Operator token: +
Whitespace token: ' '
Operator token: *
Whitespace token: ' '
2   3 + * zzzz
          ^
error: unknown token
```

Notice that the token will be as many characters as match the regular expression. This is referred to as "greedy matching".

Later, we will discover a trap with this: how would you match `=` versus `==` for example? This is known as a *conflict*. In our lexer, we are handling it by saying that the first regex wins. Order them correctly and carefully, and everything will go well.

But enough foreshadowing. There is one more key subject in this part.

### Handling Errors

The example code just prints out the tokens, including errors. But if we are streaming our tokens to someone else, how do we handle errors?

The easiest way -- and the way our code will do it -- is to create an "error token", and stop parisng any more tokens. We are relying on the code that called us to return that error to the user.

### Putting it all together

Let's integrate that into our program.

Our token type is simple: a dictionary of values. It will have metadata related to position so that we can print the arrow in the right place. It will have the token type, and value if relevant.

We will make it into a stand-alone function, taking a string and parsing it into a list of tokens which are returned.

{{< details "The Final Lexer" >}}
{{% inccode file="content/Engineering/Programming/Compilers/calculator/calc_lang/lex.py" %}}
{{</details>}}
