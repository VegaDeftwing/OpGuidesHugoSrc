# Chapter 10.6 - ＬＯＧＩＣ

## Would you like to speak to an Operator?

The very first thing to understand before we can get to more intersting things is the list of operations available to us.

This includes the operations your used to - addition, subtraction, etc. - as well as bit-wise operations and comparisons.

### Basic Operations

I'm going to mostly skip talking about addition, subtraction, multiplication, and divsion, because, duh. Still, a few notes.

* With multiplication, it's pretty easy to excede the maximum allowed by your type. For exmaple,

  ```c
  uint8_t a = 16;
  uint8_t b = 16;
  uint8_t c = a + b; //0, because 16*16 = 256, and unsigned 8 bits goes from 0 to 255
  ```

* Division of integrers will **truncate**. (floor)

  ```c
  int c = 11 / 4; //2, because 11/4 = 2.75, but the .75 "falls off"
  ```

* For subtraction, remumber an *unsigned* type can't go negative, but it can under-flow to a large, positive value.

There's one seemingly weird operation you may not be used to that belongs to this basic set: **modulo**.

Modulo just means to do division but store the remainder, not how many times the number goes into it. So, while 7/3 is two, 7 mod 3 is 1, because 3 goes into 7 twice with **1 left over**. In most programming languages modulo is written with a percent sign, so `7%3` would give you 1.

### Bitwise Operations

#### Bits?

Yep. Computers can only see numbers as binary, 1's and 0's. Sometimes, you do need to play with binary directly.

Before we can look at operations on binary, you need to know how to read it, fortunately, it's pretty easy for positive numbers. First, you should know we usually pad binary numbers with zeros.

Imagine you have some normal decimal numbers, say 0, 1, 23, and 1000. If you needed to use the same number of digits to repsent them all, you could pad them with zeros. That is, you'd have 0000, 0001, 0023, and 1000. The values haven't changed, you've just put zero in front of them so they're the same length. 

So, with binary, if we have 1, 01, 001, or 0001 or 00000001 the same still applies, it's still just 1.

Second weird thing, we'll often (but not always!) prefix binary numbers with 0b, so, you might see 0b00000001, that's still just 1. This is done because otherwise it may be hard to tell if a number is binary or just happens to only have 1's and 0's.

Alright, then, how do we actually read numbers, well, some people can see it right away just seeing a pattern so

0 = 0000, 1 = 0001, 0010 = 2, 0011 = 3, 0100 = 4, 0101 = 5, 0110 = 6, 0111 = 7, 1000 = 8, 1001 = 9, ...

If that is enough for you to understand, great. If it's not think about it like this, the first digit, all the way on the right, is the 1's place - just like in decimal, the second digit, is the 2's place, the 3'rd the 4's, the 4th the 8's place, etc.

so, if we have 1100 read it backwards. {{< katex >}}(0 \times 1) + (0 \times 2) + (1 \times 4) + (1 \times 8) = 12{{< /katex >}}

In case it's not obvious, that's actually  {{< katex >}}(0 \times 2^0) + (0 \times 2^1) + (1 \times 2^2) + (1 \times 2^3) = 12{{< /katex >}}. Remember, any number to the 0 power, that is {{< katex >}}x^0{{< /katex >}}, is **always** 1.

While a binary number with 4 digits can only go up to 15, binary numbers can still get quite large. Most computers today are 64 bit, which means directly working on two 64 bit numbers should still be fast. These numbers, assuming they're unsigned (meaning they can't go negative), can be as high as 184,46,744,073,709,551,615

Alright, so what about negative numbers? Well, for reasons, it works out that we do negatives by letting the **most significant bit** (the right most bit) represent the sign, and then flipping all the other bits. So, if we have 8 bits, -3 is 0b11111101, -42 is 0b11010110. Something to consider here is that if we have a really big positive number, say 0b01111111 (which is 127) and then add 1 to it we wind up with 0b10000000 which, for an 8 bit **signed** number is -128. This is called **overflow**.

{{< columns >}}

Okay, this is almost everything you need to know for now. I do want to briefly mention **hexadecimial**. Basically, reading binary really sucks so we often don't. Instead, we let our numbers go from 0 to F, giving us 16 digits. This lets each symbol represent 4 bits, and two symbols represent a byte (8-bits).

While binary is written with a 0b prefix, hexadecimal (often just called hex) is written with a 0x prefix.

So, 0xFF is 0b11111111 is 255.

This also gives rise to what is know as a hex editor. Very rarely, you may need to look at the binary output of something that doesn't have a better representation or meaning to you other than the actuall binary itself. In that case, you need a way to look at the hex (as a condensed view of the binary) directly. We're rapidly going off an a tagent though, so back to the point...

<--->

| Binary (0b) | Hex (0x) | Decimal |
| ----------- | -------- | ------- |
| 0000        | 0        | 0       |
| 0001        | 1        | 1       |
| 0010        | 2        | 2       |
| 0011        | 3        | 3       |
| 0100        | 4        | 4       |
| 0101        | 5        | 5       |
| 0110        | 6        | 6       |
| 0111        | 6        | 7       |
| 1000        | 8        | 8       |
| 1001        | 9        | 9       |
| 1010        | A        | 10      |
| 1011        | B        | 11      |
| 1100        | C        | 12      |
| 1101        | D        | 13      |
| 1110        | E        | 14      |
| 1111        | F        | 15      |

{{< /columns >}}

#### AND and OR or OR and AND?

Say you have two numbers 0b11001100 and 0b01010101. You might want to make it so that only the bits that are 1 in both number one **and** number two are 1 in a new number, so getting 0b10001000. Well, this is a *logical AND* and it is done with a single '&' character.

```c
uint8_t a = 0b11001100;
uint8_t b = 0b10101010;
uint8_t c = a & b; // = 0b10001000
```

Simisarly, you might want check if either of the bits in a **or** b is 1, and if it is, set the bit in a new number. This is written with a `|` charater.

```c
uint8_t a = 0b11001100;
uint8_t b = 0b10101010;
uint8_t c = a | b; // = 0b11101110
```

#### XOR?

In English, if somebody asks you if you'd like cake or ice cream, it's up to context for you to know if you have two choices Cake OR Icecream or three, Cake, Ice Cream, or BOTH. The OR from above is the "Both" variety. The bit still gets set to 1 if both are 1. XOR, or e**X**clusive **OR**, is the one-or-the-other version, the bit is only set if exclusively one of the bits is 1. It's written with a `^`.

```c
uint8_t a = 0b11001100;
uint8_t b = 0b10101010;
uint8_t c = a ^ b; // = 0b01100110
```

#### Gettin' Shifty: >> and <<

Sometimes, you need to shift bits over. Say you have a big number, 0b10101111, but you only want the top 4 bits, you could shift them to the left:

```c
uint16_t big_number              = 0xBEEF;

// Shift the 0xBE over, -> 0x00BE
uint8_t  most_significant_bits   = big_number >> 4;

// Mask out the lower 4 bits -> 0x00EF
uint8_t  least_significant_bits  = big_number & 0xFF;
```

Similarly, say yo u have two halves of a big number, but need to compine them, you could use a right shift to get the bits into position before OR'ing them together.

```c
uint8_t most_significant_bits  = 0xCA;
uint8_t least_significant_bits = 0xFE;
uint16_t big_number =  (most_significant_bits << 4) | least_significant_bits
```

### Beyond Bitwise: Comparisons

#### && and ||

Above we were working on bits. This often isn't how we work, instead, we just want to know is this big expression *True* or *False*, or, in C, any-value-other-than-zero or zero. That's what the normal AND and OR comparisons are for. Unlike their less common (but simplier to write!) siblings, these are written with two of the symbol, so AND is `&&` and OR is `||`. But, what are these for?

Well, say you have some user input for their age and you only want to tell them they can enter if they're at least 13 but under 100:

```c
if((age >= 13) && (age < 100)){
	printf("You may enter!");
}
```

Or, you might want to do this the other way around, telling people that are outside the range to leave

```python
if((age < 13) || (age >= 100)){
	printf("Go Away!");
}
```

#### > and <, >= and <= 

Well, these are pretty obvious and shown above. They're just greater than, less than, greater than or equal to, and less than or equal to.

The only thing to be careful of here is that the logic actually matches what you want. If you want a loop that says 0 though 3, you want a loop that goes to less-than-4:

```c
for(int i = 0; i < 4, i++){
	print("%d",i);
}
```

#### == ≠ =

Finally, you can check for equality or inequality

```c
if (a == b){
	printf("Correct Password!\n")
}
```

```c
if (name != "Vega"){ //not equal
	printf("User Not Authorized!\n");
}
```

Note, you can actually use the `!` symbol to negate anything, for example, we could have written the above as 

```c
if(!(age >= 13) || !(age < 100)){
	printf("Go Away!");
}
```

or

```c
if(!((age < 13) || (age >= 100))){
	printf("You May Enter");
}
```

There are times where this sort of backwards logic is actually easier to read.

## Going with the flow

### If, else, else if

You've seen `if` statments used so many times now that covering them now seems like a bit of a joke. Still, there are sme extra things you should be aware of. First, you can write `else if` statments.

```c
if(name == "Vega"){
	printf("Hi Vega!\n")
} else if (name == "Soatok"){
	printf("Hi Soatok!\n")
}
```

and these can still, optinoally, have an `else` as a catch all

```c
if(name == "Vega"){
	printf("Hi Vega!\n")
} else if (name == "Soatok"){
	printf("Hi Soatok!\n")
} else {
	printf("Hi, have we met?\n")
}
```

Do keep in mind, that if an input could be true for multiple things, only the first matching case will happen. For example, say we have this code

```c
if(number > 10){
	printf("Greater than 10\n")
} else if (number > 5){
	printf("Greater than 5\n")
} else {
	printf("Less than 5\n")
}
```

And `number` is 11, then only "Greater than 10" will print because the first condition was met, so it never checked the next one.

You can also nest `if` statments

```c
if (a == b){
	if (b == c){
        printf("a, b, and c are equal.\n");
	} else if (a > d){
		printf("a and b are greater than d.\n");
	} else{
        printf("a is equal to b, not equal to c, and less than d.\n");
    }
}
```



### for

You've seen a lot of for's in python from the start of this:

```python
for i in range(10):
	print(i)
```

but if you haven't actually ran it as code, you may not realize that `range(10)` is not 1-10, but rather 0-9. This is largely because in most programming languages (Python and C included) arrays/lists are 0-indexed. So, if we want to access each item in an array of 10 items we need to start with `item[0]` and end with `item[9]`.

The same code in C is

````c
for(int i = 0; i < 10; i++){
	printf("%d\n",i);
}
````

I actually think the C style here is a bit more convient, as if you want to increment by something else it's really obvious, for example, to increment by 10:

```c
for(int i = 0; i < 10; i = i + 10){
	printf("%d\n",i);
}
```

You should also know you can nest for loops, use different conditions, decrement them, etc:

```c
for(int i = 0; i < 10; i = i++){
    printf("i is %d\n",i);
	for(int j = 0; j < 20; j = j++){
        printf("j is %d\n",j);
		for(int k = 0; k >= j; k = k--){
        	printf("k is %d\n",k);
		}
	}
}
```

### Break!



### for each

{{< tip >}}C does not have a 'for each' system{{< /tip >}}



### while (and do-while)



### ~~goto~~

I reallllly don't want to even bring these up. GOTO is something that you should never ever ever ever ever ever use. Never. Never ever. Okay? Never. I'm only bringing them up because someday your may be unfortunate enough to run into code that does and you should know how to read it: 

if/elif/else, for, while, brief note on recussion, goto

example of to small of an int on a loop

Talk about asm and branching, bne, ble, etc.

### swich/case

## Getting Functional

In most programming languages, we have the concept of **Functions**. Functions let us break up code into digestable sections and reuse things. When we call `print()` we're actually using a function that's built in... [TODO]

fns, the stack

### The Stack

[TODO stack plates visual]

When we call a function, we store the current state of the calling function, move to the address of the called function, do the thing, then return to the original (calling) function and restore this state. This gets complicated when we start wanting to call a function from in a function from in a function .... you get the idea. Basically, we need a place to store the return address (among other state) to know where we want to go back to when the called function returns, but we can't just put these all in CPU registers since we only have so many CPU registers.

One option would be to give every function a place in RAM. This won't work for a varitey of reasons, one is because it uses a ton of space by not letting us reuse space between functions, and we want local variables to only be valid for that call of the function anyway (This is one reason why we have `static`, if you do need state to be preserved). Another is that we want to be able to call our functions from multiple places (it would be awful if we had to store a ton of coppies of every function in RAM!) So, we let functions return and then reuse their space.

So, we instead want to make a place to store the return address of each function (and their variables) as they're called. We do this with a **Stack**, in this case, *The* Stack. If someone says *The Stack* this is the stack they mean. So, uhh, what's a stack?

* Each function call adds its own section to the stack
* Each stack section contains two types of data:
  * the RA from the caller
  * The local variables used by the the currently executing function
  * Arguemnts to the function
* When the function returns it's section is reoved from the stack
* This keeps the amount of memory on the stack at a minimum
  * Total memory usage across all functions can be greater than RAM size
  * Limit is now the memory usage of functions at deepest call hierarchies
    * **Stack Overflows!**
    * Really hard to anticipate calculate
      * Super annoying with recursion, hence why it's often avoided.
* So, we maintain a stack pointer, this is an *offset*, so each function's variables are looked up by a base + offset. The base is th estack pointer, the offset is the particular variable we want to access.

 So, we use a stack! - LIFO (not FIFO) - we only operate on the top of the stack

[TODO] what's a stack