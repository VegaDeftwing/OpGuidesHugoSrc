# Chapter 10.7 - ＬＯＧＩＣ & Functions

<script>
    document.getElementById("codeMenu").open = true;
</script>

{{< tip >}}

For this page, If you see that lines are ending with a semicolon, `;`, then that code is C. If they don't, it's Python.

{{< /tip >}}

## Would you like to speak to an Operator?

The very first thing to understand before we can get to more intersting things is the list of operations available to us.

This includes the operations your used to - addition, subtraction, etc. - as well as bit-wise operations and comparisons.

### Basic Operations

I'm going to mostly skip talking about addition, subtraction, multiplication, and divsion, because, duh. Still, a few notes.

* With multiplication, it's pretty easy to exceed the maximum allowed by your type. For example,

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

* Need to increment a variable by 1? in C you can use `name++;`  (or `name--;` to decrement).

* Need to add/substract/divide/multiply/and/xor/etc. a value with itself - like `a = a + 2;`? Just move the symbol to before the equal sign: `a += 2;` is the same thing. This works for all the others too: `a -= 2;`, `a /= 2;`, etc.

  * Since Python doesn't have the `a++;` style syntax, you'll at least want to use `a += 1` there, as writing `a = a + 1` gets old quickly.


There's one seemingly weird operation you may not be used to that belongs to this basic set: **modulo**.

Modulo just means to do division but store the remainder, not how many times the number goes into it. So, while 7/3 is two, 7 mod 3 is 1, because 3 goes into 7 twice with **1 left over**. In most programming languages modulo is written with a percent sign, so `7%3` would give you 1. This is surprisingly handy.

For example, say you want to know if a number is even or odd? Well, if you just take the number "mod" 2 you'll get 0 if it's even and 1 if it's odd. <span style="color:#AC8686">i</span><span style="color:#AC9986">s</span><span style="color:#ACAC86">n</span><span style="color:#99AC86">'</span><span style="color:#86AC86">t</span> <span style="color:#86AC99">m</span><span style="color:#86ACAC">a</span><span style="color:#8699AC">t</span><span style="color:#8686AC">h</span> <span style="color:#9986AC">f</span><span style="color:#AC86AC">u</span><span style="color:#AC8699">n</span>.

### Bitwise Operations

#### Bits?

Yep. Computers can only see numbers as binary, 1's and 0's. Sometimes, you do need to play with binary directly. How often this is the case really depends on what you're doing. If you're working with something that interfaces directly with hardware (like making motors move, etc.) the boards that make that possible will typically require you configure things and bring voltages high or low by setting individual bits. This may sound difficult, but it's not.

Before we can look at operations on binary, you need to know how to read it, fortunately, it's pretty easy for positive numbers. First, you should know we usually pad binary numbers with zeros.

Imagine you have some normal decimal numbers, say 0, 1, 23, and 1000. If you needed to use the same number of digits to repsent them all, you could pad them with zeros. That is, you'd have 0000, 0001, 0023, and 1000. The values haven't changed, you've just put zero in front of them so they're the same length. 

So, with binary, if we have 1, 01, 001, or 0001 or 00000001 the same still applies, it's still just 1.

Second weird thing, we'll often (but not always!) prefix binary numbers with 0b, so, you might see 0b00000001, that's still just 1. This is done because otherwise it may be hard to tell if a number is binary or just happens to only have 1's and 0's.

Alright, then, how do we actually read numbers, well, some people can see it right away just seeing a pattern so

0 = 0000, 1 = 0001, 2 = 0010 , 3 = 0011, 4= 0100, 5 = 0101, 6 = 0110, 7 = 0111, 8 = 1000, 9 = 1001, ...

If that is enough for you to understand, great. If it's not think about it like this, the first digit, all the way on the right, is the 1's place - just like in decimal, the second digit, is the 2's place, the 3'rd the 4's, the 4th the 8's place, etc.

so, if we have 1100 read it from the least significant (right) to most (left). For example, 1100 is {{< katex >}}(0 \times 1) + (0 \times 2) + (1 \times 4) + (1 \times 8) = 12{{< /katex >}}

In case it's not obvious, that's actually  {{< katex >}}(0 \times 2^0) + (0 \times 2^1) + (1 \times 2^2) + (1 \times 2^3) = 12{{< /katex >}}. Remember, any number to the 0 power, that is {{< katex >}}x^0{{< /katex >}}, is **always** 1.

While a binary number with 4 digits can only go up to 15, binary numbers can still get quite large. Most computers today are 64 bit, which means directly working on two 64 bit numbers should still be fast. These numbers, assuming they're unsigned (meaning they can't go negative), can be as high as 184,46,744,073,709,551,615

Alright, so what about negative numbers? Well, for reasons, it works out that we do negatives by letting the **most significant bit** (the right most bit) represent the sign, and then flipping all the other bits. So, if we have 8 bits, -3 is 0b11111101, -42 is 0b11010110. Something to consider here is that if we have a really big positive number, say 0b01111111 (which is 127) and then add 1 to it we wind up with 0b10000000 which, for an 8 bit **signed** number is -128. This is called **overflow**.

{{< columns >}}

Okay, this is almost everything you need to know for now. I do want to briefly mention **hexadecimial**. Basically, reading binary really sucks so we often don't. Instead, we let our numbers go from 0 to F, giving us 16 digits. This lets each symbol represent 4 bits, and two symbols represent a byte (8-bits).

While binary is written with a 0b prefix, hexadecimal (often just called hex) is written with a 0x prefix.

So, 0xFF is 0b11111111 is 255.

This also gives rise to what is know as a hex editor. Very rarely, you may need to look at the binary output of something that doesn't have a better representation or meaning to you other than the actuall binary itself. In that case, you need a way to look at the hex (as a condensed view of the binary) directly. We're rapidly going off an a tangent though, so let's put a pin in that idea.

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

// "Mask out" the lower 4 bits -> 0x00EF
uint8_t  least_significant_bits  = big_number & 0xFF;
```

Similarly, say yo u have two halves of a big number, but need to compine them, you could use a right shift to get the bits into position before OR'ing them together.

```c
uint8_t most_significant_bits  = 0xCA;
uint8_t least_significant_bits = 0xFE;
uint16_t big_number =  (most_significant_bits << 4) | least_significant_bits
// = 0xCAFE
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

If, in the first example, it were just a single `&`, that would be taking the result of `age >= 13` and the result of `age < 100` and give you a new number that is the bitwise and of these results. Let's think about this for a moment. If somebody was 12, they'd fail the first check but pass the second - so `age >= 13` would turn to 0 while `age < 100` would become 1. If we do `0 & 1` The answer is still `0`. So, it still works. So, why do we even have the `&&` version?

Well, not all conditions you're checking will be cleanly 0 or 1. For example, you might make a function which returns an 8-bit integer where each bit is used as a flag indicating some error has happened. Let's say something in that function has gone wrong and it returns 0b00010000 (which is 16) but we only care about that function having had an error if another function returns an error at the time, but for this other function the only error it can return is 1 (true) - all successes are just 0 (false). Let's assume it also has an error, that is, our first function returns 16 and our second returns 1:

```c
if(my_function_that_retuns_an_error() && my_other_boolean_function()){
	// This would run, as both are non-0, 
    // so, non-0 && non-0 is true && true, which is true
}

if(my_function_that_retuns_an_error() & my_other_boolean_function()){
	// This would not run, as 0b00010000 & 0b00000001 is 0, which is false.
}
```

As a general rule of thumb, if you're in an `if` you *probably* want the `&&` or `||` version unless you REALLY want to be working with bits. Even if `&` would behave the same, you want your code to convey your intent to be checking a basic true/false state. To be clear, seeing the bitwise `&` and `|` operations in an `if` is very rare. Not wrong, sometimes necessary, but rare. 

The notable exception to this would actually come from a scenario similar to the one above, where errors being reflected in each bit. If we wanted to check for specific errors, that could be done by using a bitwise and with the bit's in the comparison value set for the errors we want to handle. This isn't super common, but it's something you may run into.


Note, if you're ever just checking that something is true (non-0), you can **omit the comparison outright**. 
```c
int a = 1;
if(a){
	//...
}
// is the same as
if(a > 0){
	//...
}
```

#### > and <, >= and <= 

Well, these are pretty obvious and shown above. They're just greater than, less than, greater than or equal to, and less than or equal to.

The only thing to be careful of here is that the logic actually matches what you want. If you want a loop that says 0 though 3, you want a loop that goes to less-than-4:

```c
for(int i = 0; i < 4, i++){
	print("%d",i);
}
// Will print 0,1,2,3 but NOT 4. Because we often want to
// index into an array in a loop this is convient as an
// array with 4 elements should go 0,1,2,3 as the indicies
int my_array[4] = {10,20,30,40};

for(int i = 0; i < 4, i++){
	my_array[i] = i*20;
    // This would replace the values with {0,10,20,30}
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

Note, you can actually use the `!` symbol to negate anything, for example, we could have written the above age checking code as 

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

There are times where this sort of backwards logic is actually easier to read, this probably isn't one of them. More often than not, it's best when you have a chain of conditions where only one is different, that is if you needed `a` to be true, `b` to be true, but `c` to be false you could do

```c
if(a && b && !c){
	//...
}
```

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

You can also nest `if` statments,

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

and stack else ifs:

```c
if (a == b){
	// do something
} else if (a == c){
	// do something
} else if (a == d){
	// do something
}
```

### Short-Circuiting

In C (and most languages) a logic operator will not evaluate all of it's arguments if it doesn't have to - and the order of evaluation matters. Basically, if C can go "Well, if this is true/false clearly the entire condition is true/false" it won't even run the code that would still result in the obvious result.

For example in the code,

```c
if(true || my_function()){
    //...
}
```

`my_function()` will never run because if you read "is this true or ..." the answer is true regardless of what follows.

The same applies to this code:

```c
if(false && my_function()){
    //...
}
```

This can never be true, so C sees that and doesn't bother checking the other conditions.

Now, both of these examples are pretty stupid. You shouldn't be starting a `||` or `&&` comparison with true or false anyway, but if those were other functions that had returned true/false, the same would apply, they're evaluated left-to-right until something makes the state of the entire function clear. Normally, this is totally fine and doesn't require extra thought. It's really only a problem if you're assuming a function will run in an `if` and depending on it altering that state of things elsewhere. That is, if you're expecting the code to have "side effects". Typically, these side effects are signs that your code isn't made well as one function executing or not in an `if` shouldn't break future functions, but sometimes there's no clean way to write code and shit happens. Just knowing this short-circuiting behavior is a thing may make a future bug more obvious though.

### Compound conditionals

Generally, if you need to check multiple things in an if, like 

```c
if(a && b || c && d && e || f){
	//...
}
```

you should always group things together to convey your actual intent

```c
if((a && b) || (c && d) && (e || f)){
	//...
}
```

Otherwise you will have weird, hard to catch bugs. Again, short circuiting still applies, and now it applies to these groups, but it should be more clear with the added parentheses what will happen than without.

### switch/case

While seemingly redundant, there's also switch case statments. Becuse reasons, switch case statments are faster, but they're also more limited. You can only have "constant expressions" basically, this means no comparisons other than direct equality, but you can do it against many cases. This is easier if you see it:

```c
switch(check_me){
    case 1:
        printf("check me is 1");
        break;
    case 2:
        printf("check me is 2");
    case 3:
        printf("check me is 2 or 3");
        break;
    default:
        printf("check me is not 1, 2, or 3")
}

```

Note, the `break;` statments here. Without them a case "falls though" and will execute the same code as the case below it. So, in this code, if `check_me` was 2, it would print both "check me is 2" and "check me is 2 or 3". Accidently missing these `break;`s is a pretty easy mistake. 

Of note, Python (as of pretty recently) has swictch case like statements too, but they're way, way, way more powerful as they do pattern matching. This is a whole topic in itself, but if you want to read up, [go for it (Python.org)](https://docs.python.org/3.10/whatsnew/3.10.html#pep-634-structural-pattern-matching).

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
for(int i = 0; i < 100; i = i + 10){
	printf("%d\n",i);
}
```

Python will of course let you do the same thing too, but you have to remember (or look up) how to use the `range()` function.

If you only give range one argument (so like `range(10)` ) it will use 0 as the start and step by 1 (and end before the stop). if you want to start at a different number you can use two arguments so `range(5,10)` would give you 5,6,7,8,9. If you want to change the step, use 3 arguments, so `range(0,50,10)` will give you 0,10,20,30,40.

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

Sometimes, you really want to preemptively stop a loop, well, you can. Just use `break`.

```c
// This will find the index of first element with a value of 1.
// Assume my array has 100 elements.
for(int i = 0; i < 100; i++){
	if(my_array[i] == 1){
		break;
	}
}
```

### continue

While less common, sometimes you want to do something in a loop, but you have an edge case where you don't want to run that iteration in full, and instead want to start from the top again. You can do this with `continue`

```c
// This will set any value in the array less than 10 to 0.
// Note, there are more obvious, better ways to do this. 
// This is *usually* true, which is why you don't see continue much.
// Assume my array has 100 elements.
for(int i = 0; i < 100; i++){
	if(my_array[i] >= 10){
		continue;
	}
	my_array[i] = 0;
}
// Obvious way to do this
for(int i = 0; i < 100; i++){
	if(my_array[i] < 10){
		my_array[i] = 0;
	}
}
```

This is particularly handy for checking for an error each time a for loop runs if you think it may not error on the next iteration.

### for each

{{< tip >}}C does not have a 'for each' system{{< /tip >}}

Many languages have a convient system for iterating over each item in a data structure without needing to explicitly know the size of the structure before hand. This is generally really nice to read too. C doesn't have this. Oddly, python **ONLY** has for-each loops. The `range()` function previously just generates this list were iterating over internally. So, when you see `for i in range(10):` you can read it as "for each element, i, in the the range 0 though 9". The power of this comes in python's (and languages that support "for each") ability to iterate over non-numeric types and ranges. For example, 

```python
for letter in "Oppinioned Guides":
	print(letter)
```

does exactly what you think it does - though it does put each letter on its own line. Reall, the big thing to notice here is the word **in**, which is what's making this easy. It's implying that we want to iterate over something. This gets crazy powerful once you learn more about how to combine things in python using more functional-programming methods like `zip` or `map`, for example:

```python
x = [10,20,30,40]
y = [12,23,34,45]

for x, y in zip(x,y):
	print(f"{x},{y}")
```

does what you think and iterates though both.

Things get way cooler when you learn about Python's iterators and generators which let you do really crazy things. As a taste:

```python
def halvingn(n):
	num = n
	while num > 1:
		yield num
		num = num / 2
        
for i in halvingn(100):
    print(i)
```

Will give you numbers that keep halving until the result would be under 1. That is, this prints 100, 50, 25, 12.5, 6.25, 3.125, 1.5625. The keyword here is **yield** in the function (made with **def**) above. We'll talk about functions later.

Do note, that again, this could probably be done simpiler and this was for example. Unless you really needed to generate having numbers all over the place, it would probably be easier to do

```python
i = 100
while i >= 1:
    print(i)
    i = i / 2
```

But, wait, `while`?! Yep, I used it above to. Look at me sneaking things in! It's pretty obvious what it does, but let's go back to C which has while's too, and look at it there:

### while (and do-while)

```c
// Normally, loops iterate over integers
// and we use i, j, and k as our loop indecies
// however, since this is a float, this would
// be a bit confusing.

float f = 100;
while(f > 1){
    printf("%f",i);
    f /= 2; // same as i = i / 2
}
```

`while` loops can have any condition you want. Want to run something forever?

```c
while(1){ // whatever }
```

Want to run something as long as some condition is true? 

```c
while(x == y){ // whatever }
```

Want to run something while some condition is true and a value is less than something?

```c
while((x == y) && (x < z)){
	// whatever
}
```

#### do while

Say you have something you need to happen *at least once*. That is, you might have a while loop that will make the condition true initially if it's not already so that it can then work it's way out. Well, that's a do-while

```c
do {
// whatever
} while( a == b );
```

Do note, that in C at least, there is a `;` at the end of that while.

Also, as with everything else, you can stack this logic however you like. Put while loops inside other while loops. Put fors in whiles in ifs in fors in whiles in nested fors with breaks and continues. The sky is the limit.

### Aside: the sky is not the limit.

*Can* you nest logic as deeply as you want and do `while(a){while(b){for(int i = 0; i < 10; i++){for(int c = 0; c < b; c++){if(a>b){for(int d = 10; d > 0; d += b){a=b;}}else{a = c;}}}}}`

sure, but even if that was formatted well nobody is going to have any fucking idea what is going on. As a general rule of thumb, you should keep your level of indention, and so the number of nested calls like this small.

But, "How do I do that if I want complex programs?" I hear you ask. Easy. ＦＵＮＣＴＩＯＮＳ. Functions are vital to understand. Before we get to them though, I want to go on one more tangent into a dark shadowy place you should never go: `goto`.

### ~~goto~~

I reallllly don't want to even bring these up. GOTO is something that you should never ever ever ever ever ever use. Never. Never ever. Okay? Never. I'm only bringing them up because someday your may be unfortunate enough to run into code that does and you should know how to read it **and** because from a low level perspective they *sorta* like how functions work.

Say you have two conditions that both need to run the same chunk of code

```c
if (a == b){
	// do long, complicated thing here
}

if (c == d){
	// do the same long, complicated thing here
}
```

you don't want to have to have two copies of the same code, so, if you didn't know about functions, you could do something like this

```c
if (a == b){
	goto LONG_COMPLICATED_THING;
}

if (c == d){
	goto LONG_COMPLICATED_THING;
}

goto AFTER_LONG_THING;

LONG_COMPLICATED_THING:
	// the code to do the thing

AFTER_LONG_THING:
	// whatver else you want to do
```

I think what `goto` does and the weird labels purpose is pretty obvious. What's less obvious is why you'd even need the `AFTER_LONG_THING` and `goto AFTER_LONG_THING` above it. This is because, unlike functions (again, getting there) `goto` only goes to labels and your code will excute straight though a label - meaning if neither of the `if` statments happened, and we **didn't** have the `goto AFTER_LONG_THING;` there, the code after the if's would still run, which in this case means the code after `LONG_COMPLICATED_THING:` would still run, basically, those `if`s wouldn't be doing anything - the code after `LONG_COMPLICATED_THING` would *ALWAYS* run.

Sorry if that's over explained. I'm sure the name and function is pretty obvious. 

Alright, so, why are these so bad? Well, it means you can have code just sort of arbitarily hop around and it becomes really hard to trace what code leads to what. It makes debugging an absolute shit show. This is extra true when you consider that if you wanted to be extra dumb, you can use goto for loops

```c
LOOP:
// thing to do in the loop
if(a == b){ // way to actually leave the loop
	goto LOOP;
}
```

again, DON'T. If you ever think "Huh, a `goto` would be a nice solution" you're wrong.

*Technically* there is some overhead with calling a function - which we're about to see - which using a `goto` avoids. Still don't.

The main reason these exist is because in assembly - that is the lowest level language your computer can understand -  a `goto` is all that exists. These constructs like `for`, `if`, etc. don't exist.

 Instead, you get individual instructions like `beq`,`blt`, or `jmp` which mean branch-if-equal-to, branch-if-less-than, and jump, respectively. These will go to a memory address and execute code from that point if the conditon (or lack of, for `jmp`) is met.

All your if's, for's, while's, etc. are built out of these. The complier (gcc, in your case) takes your C  code and turns it into these instructions and does so much more effeciently than you could by hand.

By writing in the higher-level-than-assembly-but-still-pretty-low-level language of C, you get to not deal with these things. The same applies to writing **functions**. Functions are what we use as much more poweful, easier to read alternatives to direct jumping around by memory locations that is done by `goto`.

Again, I can't stress this enough, don't use `goto`. Not even once. Don't try it. Don't think, "This is neat and good to know!". Unknow it. Don't go "this is a good use case!". It's not. Don't use `goto`.

## Getting Functional

In most programming languages, we have the concept of **Functions**. Functions let us break up code into digestable sections and reuse things. When we call `print()` in python or `printf()` in C we're actually using a function that's built in (well, sorta, printf is part of a library ... we'll get there).

You can make your own functions pretty easily. Let's look at a Python function first since they're easier to understand.

```python
def add(a,b):
	c = a + b
	return c
```

In python, we can make a new function with the `def` keyword. Then, we give it a name - here, that's "add" - and tell it what to expect for input. Here, that's two "arguments", `a` and `b`. This function returns something. This isn't always necessary, but most things will.

We can now use this add function (obviously you should not turn adding into a function)

```python
x = 1
y = 2
z = add(x,y)
```

will now work. Note, the names when you make the function and the names you pass the function don't have to match, also note, because add has a `return` we want to capture that result. We do this by just assigning the result to a variable.

C, on the other hand, is much more explicit. In C, you need to specify the type of each argument and what it will return. So, if we had a function for adding (again, don't), that might look like

```c
int add(int a, int b){
	return(a + b);
}
```

but this function can **only** handle integers. If we try to run it with `add(1.2,3.4)` - that is with floating point arguments - it's going to fail. It probably won't even let you compile. Similarly, if we try to store the result into the wrong type it won't work. Note, the return type is that `int` before the word `add`.

If we want a function in C to return nothing, it should be declared as `void`

```c
void say_hi(char name[]){
	printf("hello %s",name);
}
```

Same applies to arguments. If you have a function which takes no arguments, it can also be void. You can also have both a void return and void arguments. This is handy for when you just want to put a big block of repeated code behind a convient name to make it more obvious what something does. But there's a catch:

### SCOPE

Variables are *normally* local to functions, so, if you have code like

```c
int main(){
	int a = 0;

	set_a();
	
	printf("%d",a);
	
	return 0;
}

void set_a(void){
    a = 42;
}
```

This **WILL NOT COMPILE** . Why? Because the `a` inside the `set_a` function is **NOT** the same `a` as in the main function. If we went up and changed this so that the add a function at least declared a with a type,

```c
void set_a(void){
    int a = 42;
}
```

the code would compile, but that function doesn't do anything. the print on line 6 will still print out "0".

Now, if we made this code

```c
int main(){
	int a = 0;

	a = set_a();
	
	printf("%d",a);
	
	return 0;
}

int set_a(void){
    int a = 42;
    return a;
}
```

The code would work as expected...ish. That "a" inside the `set_a` function? Yeah, that a is still it's own a. It's actually making it's own `a`, returning the value of a, and the a = set_a(); is just applying that value to the a in main. They're both called a here, but they don't have to be and the effect would be the same.

Now, there's a cheat here. We can use **global variables**. If we take the above code and move the `int a = 0;` out of `main`, we can make it global to all functions in the file:

```c
int a = 0;

int main(){
    
	set_a();
	
	printf("%d",a);
	
	return 0;
}

void set_a(void){
    a = 42;
}
```

So, this code works. Problem is, this tends to cause issues and get really messy. Being able to reuse names is actually really good and helpful. So, what if we want to pass a into our `set_a` function - not just the value that a has, but actually the variable itself so we can change it without returning a new value? 

Well, finally, pointers from last chapter serve a purpose! If we just pass in `a` what were doing is saying "take the value a holds and give it to the function" but if we pass in `&a` we're saying "take the address where a is at and give it to the function".

This gives rise to the two main ways to move data around "Pass by value" and "Pass by reference". Passing by value is easy. Passing by reference is useful, but a bit harder to wrap your head around.

[TODO]

```c
int main(){

	int a = 0;

	set_a(&a); // &a means the address where a is at
	
	printf("%d",a);
	
	return 0;
}

void set_a(int *a){ //this function takes an integer pointer (address)
    *a = 42; //the same syntax, but this *a says we want to modify the value at that adress
}
```

[TODO] 

[TODO] - explain the two meanings of (`*a` - either derencing or making a pointer.)

Think of it like this. Passing by value is like me standing next to you and showing you a piece of a paper that has the number 0 on it. You then show me a  piece of paper that says 42 on it. I can choose to erase the 0 on my paper and write 42. That's pass by value.

If instead, I set my paper down, tell you where I set it, let you do what you want to it, then I take it back, that's pass by reference.

So which is better?

Neither. You need to use both. You may even need to use both in one function. There are times when one pass by reference will even work though, most notably if you want to make a function that gets data from an array, you're going to have to deal with passing the pointer to the first element in the array. 

{{< smalltext >}}As an aside, if you ever pass an array's pointer as an argument to something in C, you should also pass in the length of the array and check that the pointer isn't NULL. More on null checks later.{{< /smalltext >}}





fns, the stack

### The Stack

[TODO stack plates visual]

When we call a function we:

1. Store the current state of the calling function

2. Move execution to the address of the called function

3. Do the thing

4. Return to the original (calling) function

5. Restore the original state. 

This gets complicated when we start wanting to call a function from in a function from in a function .... you get the idea. Basically, we need a place to store the return address and state to know where we want to go back to when the called function returns. Problem is, we can't just put these all in CPU registers since we only have so many CPU registers. Fortunately, by calling functions C **mostly** abstracts away this state storing and loading. Unfortunately, it can still bite us in the ass.

One option would be to give every function a place in RAM. (so each time a function is called it persists and keeps room for itself) This won't work for a varitey of reasons:

1. This would use ton of space by not letting us reuse space between functions. Plus we'd need to allocate extra room incase the room a given function need grows, or we'd have to move everything over each time things grew, which would take a long time.
2. We want local variables to only be valid for that call of the function anyway (This is one reason why we have `static`, if you do need state to be preserved). 
3. We want to be able to call our functions from multiple places (it would be awful if we had to store a ton of coppies of every function in RAM!) So, we let functions return and then reuse their space.

So, we instead want to make a place to store the return address of each function (and their variables) as they're called. 

We do this with a **Stack**, in this case, *The* Stack. If someone says *The Stack* this is the stack they mean. So, uhh, what's a stack?

* Each function call adds its own section to the stack
* Each stack section contains two types of data:
  * The Return Address from the caller
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

[TODO] inlines