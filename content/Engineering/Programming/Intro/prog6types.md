# Chapter 10.6 - What's a Type? & Going Down Rabbit Holes

<script>
    document.getElementById("codeMenu").open = true;
</script>

Alright, I'll cut to the chase. When programming, you'll need to deal with types. On the last page, there was a mix of types, `int`, `uint8_t`, `float`, and `char` all make appearances. While the exact names of each type and what they're capable of may vary a bit from language to language and platform to platform understanding the basics here will help you out a lot, so, let's start with the C language and look at `int`s

### Int

`int`, as you can probably guess, means integer. What's a bit less obvious is that this will have an inherit range. 

On your laptop or desktop, just using `int` without anything special (like the next example, `uint8_t`) *probably* means a 4-byte integer, so that means you get 32 bits (4*8) to represent your number. Now, there's a catch: The most significant bit is actually used to store if the number is positive (0) or negative (1) using [2's complement](https://en.wikipedia.org/wiki/Two's_complement), so, in total that gives you a range from -2,147,483,648 to 2,147,483,647. If you try to go above or over this range, the result will wrap around. 

> **Q:** How did you get that number
>
> **A:** {{< katex >}}2^{4\times8} = 2^{32} = 4,294,967,296{{< /katex >}}. 2's complement is clever in letting us use nearly the full range of the number, so if we divide it by 2 we'd expect -2,147,483,648 to +2,147,483,648, but, we do need to use one bit for sign, and that bit is 1 for negative, which means we get to use the full range for negatives but sacrifice one on the positives, hence the final range of -2,147,483,648 to 2,147,483,64**7**. Read that linked 2's complement page if you want more depth.

Now, there's also a variant for ***unsigned*** integers or `uint`, these, as you might expect, can only be positive, but this means you get the full range from 0 up to 4,294,967,295 to play with before you wrap around. 

Finally, you might find times when you'll want to specify the number of bits in a number, and in the language I've been showing so far, **C**, you can do that by including a library (more on this later) and using `uint8_t`, for example, to get an unsigned, 8 bit integer. This can only range from 0 to 255. 

{{< tip >}}

That library is accessed by using `#include <stdint.h>`, but despite my above description doesn't give you arbitrary bit widths. It has 8, 16, 32, and 64. The big advantage is that, unlike plain `int` which may vary between platforms, they will always be that size. This isn't to say you should never use plain `int`, just be aware it may be a problem for portability between platforms if you really want it to run **everywhere**.

{{< /tip >}}

So, if we look back to when we did 200+100 last chapter, while we'd *expect* 300, the place we're trying to store that number simply isn't big enough. At 8 bits, it can only store up to 2^8 = 256. So, we wind up wrapping around, 300-256 is indeed 44. Do keep in mind that with signed integers this wrapping around means you'll go from positive to negative if you overflow.

### Boolean

True or False. 1 or 0. In C, a boolean (accessible though `#include <stdbool.h>`) is really just an int in disguise and (usually) limited to being 0 or 1.

### Floats

I can't possibly do a better job than this video:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/dQhj5RGtag0" title="how floating point works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A word of the wise: Don't loose sight of floats still being based on bits. If you try to add .000001 to a huge number, the answer won't change. It's relatively easy to make infinite loops or get a value stuck because of this. On the other hand, it does require some pretty crazy values:

```c
#include <math.h>

int main() {
    // 2^16 is 65536
    float a = pow(2,16);

    printf("%.20f\n",a + .000000000001);

    return 0;
}
```

Will print out 65536.00000000000000000000  - our .000000000001 was lost!

For all this complexity... it usually doesn't matter. For normal calculations, you probably won't even have to worry about this. If you do have to worry about it, check out [Herbie](https://herbie.uwplse.org).

{{< smalltext >}} I have had bugs from this bite me, see [this code](https://github.com/VegaDeftwing/PinkTromboneVCV/commit/41a93446888babff5235344b06957ec00e6c1232#r73908588) for example, where I fixed a bug because once a value reached 512 I was adding so little to it that it no longer incremented.{{< /smalltext >}}

{{< smalltext >}}</br></br>If for some reason this is your shit, you might want to look into [Unum/Posits](https://en.wikipedia.org/wiki/Unum_(number_format)), as they stand to become more common in the coming years and will probably become more frequently used as an alternative to the good ol' IEEE floating point. For now they're more an interesting look into the far future than useful to know about.{{< /smalltext >}}

### Doubles

Doubles are just more precise floating point numbers. Literally they're double-precision (hence the name) and so work with 64 bits instead of 32. If you need very, very precise math, here you go.

{{< speech big >}}

We'll talk about it more later - but some languages, including Python, have the ability to work with arbitrarily large numbers and only use a "number" type. These will dynamically adjust the number of bits (and even if they're floats/ints) as needed, but are, typically, slow compared to even doubles. ... err, yeah, doubles are slow. More on types and performance later too.

{{< /speech >}}

### Char (& A sneak peak at encodings)

Chars are a pain in the ass. 

Historically, a char was always 1 byte, and you **usually** only used 7 bits of each byte for storing text. But, do the math, that's only 2^7 = 128 different characters. Clearly, with things like ∞√αβ🌢░ we have a lot of other things we think of as characters on computers. The confusion is because, historically, computers (mostly) used ASCII for storing text, which was a 7-bit standard and only had that many characters (0-9,a-z,A-Z, special characters, and some control characters, like one to go to the next line) but, we've pretty much gone past that for all but very limited systems now and instead use Unicode. 

Unicode characters are complicated, but we can talk about that more later, to make my point what's relevant is there are [1,112,064](https://stackoverflow.com/questions/27415935/does-unicode-have-a-defined-maximum-number-of-code-points) valid Unicode characters, which, happens to be a bit more than 127 (ever so slightly). What's weirder yet is due to some clever tricks, we can still use 8-bit *char* data types to represent all of those different points by abusing the 8th, unused-in-ASCII bit to indicate that 7-bit sequences with the 8th bit set are all actually part of the same character. [You can read into this more](https://stackoverflow.com/questions/1543613/how-does-utf-8-variable-width-encoding-work), but this I don't actually want to spend to much time on the specifics of Unicode and UTF-8. Instead, I want to point out that a char is a bad name because it was a datatype named as it was (char = character) because it was assumed to be used with a particular **encoding**. That is, a method of associating data with a meaning. Over time, that encoding fell out of favor, and now we have this mess. Weirder yet, because of this history, in C, we can always assume a char is 1 byte, which is not necessarily true about the other types -  integers defined with `int` may change how big they can be depending on the platform (On most modern desktops an int is 4 bytes, but on the Arduino Uno, for example, they're only 2)

Later we'll come back to this idea of standards and associating data to a larger meaning. We'll look at examples like having a list of numbers be interpreted as audio, colors, etc. We'll also briefly look at some hex editors and do some data bending, so buckle up, we're gonna have some fun!

Before then, unfortunately, we need to suffer though pointers. Everybody hates pointers. You'll soon know why.

## Pointers, Memory, & Arrays

<b>or "Why will knowing C help me write good code?" Part 2</b>

Say you're working in C and you make a variable, let's call it `my_variable` and you assign it a value of 42:

```c
int my_variable = 42;
```

As you've been thinking about it so far, you've probably been think about it like algebra, where this variable is just this abstract concept. That thinking works most of the time, but it's missing something. That variable isn't just abstract, it's bits in memory. There's actual electrical components holding a charge low or high in memory, and, importantly, that memory is at an ADDRESS. when you write `int my_variable = 42;` the computer grabs a new memory address and stores 42 in it. Any time you go to do something with `my_varible` what you're actually doing is accessing the data stored at that address.

{{< speech math big >}}

Okay, sort of. Technically, what's happening is *probably* that variable is getting associated with a CPU register instead of a memory location at first.... and there's a whole layer of abstraction because of virtual memory. So, yes, for those that are reading this when they already know all of this, this is a simplification. But, shhhh. Let me build up to that.

{{< /speech >}}

One thing C will let us do is directly get the value of the address that a variable is stored at. We do this with the `&` symbol. Something else C will let us do is make a data type that is meant to hold an address, To do this, we use the `*` character before the variable name, so `int *my_var_address;` makes a new variable that is made to hold these addresses. The `*` there is really important, as it actually changes the data type. Say instead of an `int`, `my_variable` was a `char`. We know that chars are always one byte (8-bits), but on most modern computers, an address is actually 4 bytes or 64 bits (this is, more-or-less, why a 64-bit computer is a 64-bit computer, actually.)

So, if we didn't have that `*` on `int *my_var_address;`, - that is, if we just had `int my_var_address;` my_var_address would only be whatever size int is, which, notably, may not actually be big enough to store an address.

These types with the `*` before the names are called "pointers", which, I'm sure you can guess why. (It stores an address that **points** to something else) If you have something like the above example `int *my_var_address;`, then my_var_address is called a "int pointer".

Putting this all together though, we could have these lines

```c
int my_variable = 42;
int *my_var_address = &my_variable;
```

Let's actually run this real quick

```c
#include <stdio.h>

int main()
{
    int my_variable = 42;

    int *my_var_address = &my_variable;

    printf("%d is at %p\n",my_variable,my_var_address);

    return 0;
}
```

Go run this for yourself, really, then come back.

If I run this, I get `42 is at 0x7fffffffcdec` but that second number will probably be different for you as where your computer puts it in memory might be different.

{{< hint info >}}

That weird "number" 0x7fffffffcdec is written in something called hexadecimal. I'll come back to what this means, but for now, just know this number is really big (140737488342508 in decimal)

{{< /hint >}}

{{< speech math big>}}

Yes, Yes, I hear you nerds. I know this is technically not a physical memory address, it's a virtual memory address. This has to do with safety to prevent applications from modifying memory of other programs, blah blah blah. With time, I'll get there with time. Calm yourselves.

{{< /speech >}}

Okay, so, uh, that's nice. But, you might be asking why you'd want to do this. Well, in C you need to do it a whole bunch. It's basically mandatory for passing arrays of data between functions....

</br>

{{< speech triode right >}}

Woah, hold up! Arrays?

{{< /speech >}}

<div style="clear: both;"></div>

### Arrays

Yep. You've already seen them. 

In C, you can have a list of ... well, whatever really, but easiest to think about are numbers and characters. For example, if you want a list of numbers one though 10, you can do

`int my_array[] = {1,2,3,4,5,6,7,8,9,10};`

Importantly, C and Python and the vast majority of programming languages **index at 0**.

This means, to get the first number, the one listed here as '1' we'd access it by doing `my_array[0]`. If we did `my_array[1]` the value held there would be 2, because, again, we start counting from 0. 

It's weird, but - to spoil the mystery - it's because C really wants you to think about the index not as what index it is but as how many offsets from the base address you are. 

You see, in C, if you were to just set a variable equal to `my_array` you wouldn't actually be copying the data, you'd actually only be setting the variable to hold the address of the first element in the array. C arrays are really just allocating a bunch of consecutive places in memory for you. So, if you think about it as address and offsets from a base address, starting at 0 - that is, no offset - makes a lot of sense.

By the way, while we'll get to it later, if you did actually want to copy the data. In C at least, you'd actually have to use a function called `memcpy()` <footnote>Well, okay, not "have to". You could make a loop to iterate over every element in the array. But, memcpy will likely be dramatically faster because some really smart people have optimized the hell out of it.</footnote>which is literally for copying memory from one place to another. In Python, you can do it by directly doing the assignment as you'd expect.

> Err, okay, this is confusing. What I mean is in C if you have this:
>
> ```c
> int my_array[3] = {1,2,3};
> int my_other_array[3];
> my_other_array = my_array;
> ```
>
> This code won't even compile. It won't work at all. If you actually wanted to copy the data you could do either
>
> ```c
> #include <stdio.h>
> 
> int main() {
>     int my_array[3] = {1,2,3};
> 
>     int my_other_array[3];
> 
>     for (int i = 0; i < 3; i++)
>     {
>         my_other_array[i] = my_array[i];
>     }
>     
>     printf("%d\n",my_other_array[1]);
> 
>     return 0;
> }
> ```
>
> Where that for loop is copying, element by element, the content of my_array into my_other_array
>
> or, you could use a function that's in the `<string.h>` header to do it more-or-less than same thing for you
>
> ```c
> #include <stdio.h>
> // memcpy is in the string library, for... reasons?
> #include <string.h>
> 
> int main() {
>     int my_array[3] = {1,2,3};
> 
>     int my_other_array[3];
> 
>     // Note the sizeof(int) here, because memcpy
>     // wants the size in bytes and an int takes up
>     // more than one byte
>     memcpy(my_other_array,my_array,3*sizeof(int));
> 
>     printf("%d\n",my_other_array[1]);
> 
>     return 0;
> }
> ```

Back on topic, the big use of arrays in C - at least at the beginning -  is actually for text. You see, while the `printf()` function you've seen will let us print a string directly, if we wanted to make it before hand and pass it in, we'd literally make an array of characters, so, 

`char my_string[] = "Hello World\n";` or similar.

{{< hint info >}}

Of note, this is the same as `char my_string[] = {'H','e','l','l','o',' ','W','o','r','l','d','\n'};`, just it's not a massive pain to type....

> Note-in-a-note, that `\n` character is really just the way we tell C that we want to go to the next line. If we print a string without it, the next thing to print will print on the same line
>
> > Note-in-a-note-in-a-note: These characters (including the one to go to the next line) are from the aforementioned ASCII standard. The characters are ultimately just numbers being interpreted as text - the same with anything else on a computer.
> >
> > Here's an ASCII table
> >
> > <img src="/eng/ASCII-Table-wide.svg" alt=" " style=" -webkit-filter: invert(100%);filter: invert(100%);">
> >
> > You can see the new line character (Called "Line Feed" here) has a value of 10 in decimal, for example.
> >
> > > Note-in-a-note-in-a-note-in-a-note, there's a neat trick possible here. If you look closely you'll see that `a` has a value of `0x61` and `A` is `0x41`, if we look at those in binary:
> > >
> > > a is 0b01**1**00001</br>
> > > A is 0b01**0**00001
> > > 
> > > They're only different by flipping one bit. We can abuse this later to go from upper to lower case or vis-versa.
> >
> > > If you looked though that table, you'll probably notice some weird ones like 7, which is literally "Bell". That's because ASCII was made back when people still used Teletype machines (effectively terminals that used real, physical printers) there was [literally a bell.](https://en.wikipedia.org/wiki/Bell_character) 

... Well, almost. Actually, saying the array version of that is the same is a lie. C actually adds in an extra character for us automatically when we make the string like `char my_string[] = "Hello World\n";`.

There's an added `\0` after the `\n` when we make the string like this, and we do want it. It's what tells other functions in C (like `printf()`) where the end of a string is. If we make it using the array, we'd have to add this ourselves. That `\0` is called a "Null Terminator". Without this, things would just keep on printing or processing the string not knowing where to stop.

{{< tip >}}

This doesn't apply (directly) in Python. The `print()` function in python will add the new line for you unless you go out of your way to have it not. We'll talk about this later - but in general Python tries to do what it thinks you probably want, and that includes internally dealing with new lines and null termination so that you don't have to think about it. 

{{< /tip >}}

{{< /hint >}}

One of the real fuck-you's with strings (or, character arrays, rather) in C is that if you try to add more characters to them and you didn't make enough room for it to start with, very bad things happen (you'll try to access memory you shouldn't - crashing your program or over writing things you don't mean to).

For this (and many other reasons) you may want to declare your array's size directly:

`char my_string[100] = "Hello World\n"` 

This is different from the above in that the first example made exactly enough space while this one would let us put up to 100 characters in the string. If we know for sure that we won't need the extra space, we don't have to do this (though, if that's the case, this should really be `const char my_string[] = "Hello World\n"` - we'll get there)

Also, this lets you declare an array before you use it. For example, if you know you need a place to put data before you've actually computed it. As a sort of stupid example, this code will make an array with 10 elements and populate each element with the numbers 0, 10, 20, ... 90.

```c
int my_array[10];

for (int i = 0; i < 10; i++){
	my_array[i] = i * 10;
}
```

Also, you can make arrays of arrays:

```c
int a[2][4] = {  
	{0, 1, 2, 3},
	{4, 5, 6, 7},
};
```

This can go as deep as you want, but it does get a bit confusing if you go too deep. The page for nested arrays on [TutorialsPoint](https://www.tutorialspoint.com/cprogramming/c_multi_dimensional_arrays.htm) may help if you want to know more.

Anyway, a very, very, very important take away here is that if you make an array in C and then use the variable name without an index, you're getting the address of the first element.

That is, if you were to "print the array" like this

`printf("%d",my_array);`

you wouldn't get the data in the array, you'd see the address of the first element. So, if you need the address of an array you **DO NOT USE** the `&` operator. It's already an address.

*However* if you want the address of a particular element, you can. So, `&my_array[2]` (assuming the array has at least 3 elements) is totally valid and actually very, very useful to be able to do.

### Back to thinking about memory addresses.

If we have an address, we should be able to see what's at that address right? Yes! And because C is a language made to fuck you over, the syntax is confusing. If you want to know what's at an address, you use `*`, you know, the same symbol you used for defining that a variable should hold an address. Technically, this is never actually a problem with ambiguity, but it is confusing when learning. Anyway, let's add another line to our code:

```c
#include <stdio.h>

int main()
{
    int my_variable = 42;

    int *my_var_address = &my_variable;

    printf("%d is at %p\n",my_variable,my_var_address);

    int my_second_var = *my_var_address;

    printf("The value of my_second_var is %d\n",my_second_var);

    return 0;
}
```

If you run this, you should see output like `42 is at 0x7fffffffcde8 ... The value of my_second_var is 42`. 

This should make sense, because on line 11, we assigned my second var to the value that is at the address of `my_var_address`

Okay, now here's where things get a little weird. We made `int *my_var_address` a variable, so it, itself, has an address.

If you add the line `printf("The address of my_var_addres is %p\n",&my_var_address);` above the return in the above code and run it, you should see something like

```
42 is at 0x7fffffffcde8
The value of my_second_var is 42
The address of my_var_addres is 0x7fffffffcdf0
```

Where, yes, we're printing the address of an address. Here's something interesting though, those two addresses are really close together. In fact, if you take `0x7fffffffcdf0 - 0x7fffffffcde8` the answer is 8. They're 8 bytes apart in memory. Hmmm, before we said each address should be taking up 8 bytes, so can we just get to one address by doing math on another? Yep! One thing to note is C sees that we're working on memory address and assumes we want to move by whatever the memory address size (8 bytes in this case) whenever we do math on it, so, we actually want to subtract one to go from 0x7fffffffcdf0 to 0x7fffffffcde8. Yep, not confusing at all.

`printf("The data at the address of my_second_var - 1 (which is %p) is %d\n",&my_second_var - 1,*(&my_second_var - 1));`

Will give us `The data at the address of my_second_var - 1 (which is 0x7fffffffcde8) is 42`. Now, this may not actually work on your computer as, technically, there's not guarantee that my_second_var and my_variable are right next to each other in memory.

But, that's not always the case. In C, we can always be assured that consecutive elements of an array are at consecutive memory locations. 

```c
#include <stdio.h>

int main()
{
    int my_array[] = {10,11,12,13,14,15,16,17,18,19};

    int *my_var_address = my_array;
    // doing int *my_var_address = my_array; is the equivilent of &my_array[0]. 
    // In C, refrencing the array without an index gives the address of the 
    // 1st item. This sort of makes sense, as anything looking at my_array 
    // really only needs to know where the first item is and how many there are. 

    // Hopefull this print drives that home...
    printf("%d is the value at address %p. my_var_address is now %p\n",my_array[0],my_array,my_var_address);

    // Okay, so what the hell is this doing then?
    int *my_pointer = &my_array[3];
    
    // Well, we know that array has 10 elements, let's print them
    for(int i = 0; i < 10; i++){
        printf("my_array holds %d @ i = %d\n",my_array[i],i);
    }

    // Hmm, we made that second variable an int, but it hold the address 
    // of the 4th element of the array (remember, arrays start at 0) 
    for(int i = 0; i < 7; i++){
        printf("the data at the address of my_pointer + %d is %d\n",i,*(my_pointer+i));
    }

    // Turns out C will let us treat any varible as an array.
    // if it's not a pointer (address), this will probably wreck everything.
    for(int i = 0; i < 7; i++){
        printf("the data at my_pointer[%d] is %d\n",i,my_pointer[i]);
    }

    return 0;
}
```

[TODO] function pointers

### Const, Volatile, Static, and #define

#### Const

[TODO]

#### Static

I don't love Geeks For Geeks, but this article is decent: https://www.geeksforgeeks.org/static-variables-in-c/

#### Volatile

In computers we sometimes need to interact with the real world. For example, say you have a button hooked up to your computer - and I don't mean through USB or anything else, instead I mean, it's a button wired directly into the processor. Now, this may sound weird, but in reality, this is how things actually work ... sort of.

Any keyboard will have a tiny, really lame computer built into it that only runs code that checks to see if those buttons have been pressed, but, it's still a computer - so what I'm talking about is programming that tiny, lame computer.

So, how does it know if a button has been pressed? Well, usually, that button will be hooked up to a **G**eneral **P**urpose **I**nput **O**utput or GPIO pin. Internally, the processor has hardware that will detect if this pin is high and change a bit at a fixed memory address. So, this means that at this specific point in memory (RAM) along side all the other values we can store and read, theres this special address that we can read from and the bits will be changed not from software, but by hardware.

When you write code, normally it will be optimized in way where it assumes a value it's read before won't change unless it you write to it somewhere else. This should make sense. It's basically just the computer having a sense of object-permanence and not expecting someone else to move things around without telling it.

The thing is, this is a problem with our button example. Say we want to wait until that button is pressed to continue...

```c
#include <stdbool.h>
#include <stdio.h>
#include <stdint.h>

bool check_if_button_is_pressed(void){
    // This address is random, but in real life it would be pulled from the 
    // technical refrence manual (TRM) of the processor you're using.
    // This mildly weird code is convincing C that we actually want to treat
    // this value as a pointer directly. 
    uint8_t *value = (uint8_t*)0x00108000;
    
    // Usually each bit at this address would be a different pin we're reading
    // from. So this line picks out one bit in particular and checks if it's a 1;
    if (*value & 0x40){
        return true;
    }
    
    return false;
}

int main(void){
	while(!check_if_button_is_pressed()){
		// wait until the button is pressed.
	}
          
    printf("You pressed the button!\r\n");
}
```

This won't actually work because we're missing the word `volatile`. What will happen is the code will read the value at `value` once, and then assume it won't change, so even if we press the button and the value at that address changes, our code won't *actually* re-read it because it's assuming, for performance reasons, that a value won't be changed without its knowledge.

All that has to be done to fix it is add the word `volatile` before `uint8_t *value = (uint8_t*)0x00108000;` to tell the compiler that, hey, no, actually this value might actually change between reads.

The other major use of `volatile` is effectively the same thing - just instead of the memory changing because of some of some other hardware, it's changing because of a CPU with multiple cores. Both cores have access to the same memory, but if one changes a value both want to read and write, both need to see re-read that variable each time they use it, since they can't be sure the other didn't just change it.

#### #define

This has the potential to open up a huge can of worms, but generally anything you see in a C file that starts with a `#` is a pre

## More on Types

### Strings

Most languages (except for C. Ugh.) have a string type that's abstracted away from the idea of being a collection of characters. Usually these will do sane things with string length (not letting you overflow, easily concatenating strings, etc.) and will often support Unicode / UTF-8 directly, etc. If the language has it, use it.

### Arrays, Lists, Dictionaries, ...

You've seen arrays, but, depending on the language, there's usually a variety of other basic ways to store data in something resembling a list.

For example, In python there are 

* **Lists**, which can contain mixed data types (`a = ['a',43,"test",3.14159]`) and are ordered (so are accessed exactly like arrays in C)
* **Sets**, which are un-ordered and don't allow duplicates. [See the python docs.](https://docs.python.org/3/tutorial/datastructures.html#sets)
* **Dictionaries**, which can be used to map a key to a value. [See the python docs.](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

### Slightly more complex data structures

Before I mention a bunch more data structures that all seem to be more-or-less the same things but with different rules, let me take a brief aside to say why these exist:

* Inserting or deleting in the middle of an array is very slow. You have to copy all the data after the insertion point over.
* Sorting lots of numbers can be slow, so paying a tiny cost on each insertion to keep it sorted may be better than large, periodic costs.
* You may need to be able to add and remove data very fast, but not need to look at it very often
* You may need to access data often, but very rarely add or remove it.
* You might need to know if some data exists, but not actually care about the value.
* You might need strict rules for access to prevent accidental human error.
* You might need something that works well when there are multiple threads accessing the data at once (imagine having a deck of cards and 4 friends available to separate out all diamonds)
* You may need to look up a value given an input value (dictionary and related)

Again, depending on the language (or libraries used) you might have some primitives for things such as:

* **"Vectors"**, Basically an array that handles it's shit when it needs resized - it won't let you overflow *BUT*, it's typically quite slow if you're not appending at-or-near the end. (like an array)

* **Stacks**. Usually, these only let you access the "top" item, and add a value on (push) or remove one (pop)

* **Hash maps**. [Confusing to understand](https://en.wikipedia.org/wiki/Hash_table), but can be effectively treated as a dictionary that is typically very fast.

* **Linked List**. I will talk about these more later. They're a common topic to teach in CS (fuck if I know why, they're [slower than a basic array in most circumstances](https://www.reddit.com/r/learnprogramming/comments/35rugj/when_is_using_a_linked_list_better_than_an_array/))

  {{< smalltext >}}...this also depends on the standard library, target architecture, etc. If the language has optimized the hell of of Linked Lists (*cough* Java *cough*) it can be faster than using a naive implementation that isn't hand optimized - though often those optimizations involve making it not-a-true linked list under the hood. From a strict comp-sci perceptive linked lists should, for many applications, be better than arrays. From the perceptive of someone that understand that cache locality is a thing, they're shit. {{< /smalltext >}}

There's a few thousand variants of some of the above of these which seek to overcome some of their problems, notably:

* **Skip Lists** allow for jumping over some values, trading memory for lookup speed. See [Wikipedia](https://en.wikipedia.org/wiki/Skip_list).
* **Unrolled linked lists** are effectively just a list of arrays. This makes them a pretty sane trad off. See [Wikipedia](https://en.wikipedia.org/wiki/Unrolled_linked_list).

There's also a ton of data structures that work by making a tree of values. Heaps, and anything ending in -Tree apply here. There's more than I care to mention, but the gist is they tend to have structured data and faster than linked lists look ups, but insertions may be slower due to needing to restructure the tree.

## Other Types

Depending on the language, there may be types for working with complex numbers, "big numbers" (which may change in name depending on the language) which aren't bound by bit-size limits, 

### Typedef & Struct (and packing bits)

So, cool, we can work with things and store things in lists or whatever, but what if we want more complicated things? Like, a say we want to represent an ID card in code. That should probably have a first name, last name, unique ID, birth date, etc.

Well, fortunately for you, almost every language has some form of this. In some cases (like C) it's data only and are called **structures**, in others you can actually associate "methods" with a particular kind of thing and define behavior for these "objects" ... but, I'm getting ahead of myself. Let's look at structures:

```c
#include <time.h>

struct id_card {
    char first_name[30];
    char last_name[30];
    uint32_t id;
    // The time library defines a time structure for us, 
    // and we can put a structure in a structure.
    struct tm birth_day;
};
```

So, now that we have this we, we could do something along the lines of

```c
#include <stdio.h>
#include <time.h>
#include <string.h>
#include <stdint.h>

struct id_card {
    char first_name[30];
    char last_name[30];
    uint32_t uid;
    // The time library defines a time structure for us, 
    // and we can put a structure in a structure.
    struct tm birth_day;
};

void print_id(struct id_card target_id)
{
    printf("%s %s\n",target_id.first_name,target_id.last_name);
    printf("%d\n",target_id.uid);
    printf("%d/%d/%d\n\n",target_id.birth_day.tm_year,target_id.birth_day.tm_mon,target_id.birth_day.tm_mday);
};


int main()
{
    struct id_card vega_id;
    struct id_card triode_id;

    strcpy(vega_id.first_name,"Vega");
    strcpy(vega_id.last_name,"Deftwing");
    vega_id.uid = 1234;
    vega_id.birth_day.tm_year = 1900;
    vega_id.birth_day.tm_mon = 0;
    vega_id.birth_day.tm_mday = 0;

    strcpy(triode_id.first_name,"Triode");
    strcpy(triode_id.last_name,"Killjoy");
    triode_id.uid = 1235;
    triode_id.birth_day.tm_year = 1901;
    triode_id.birth_day.tm_mon = 1;
    triode_id.birth_day.tm_mday = 2;

    print_id(vega_id);
    print_id(triode_id);

    return 0;
}
```

As you can see, this gives us a nice way to structure our data and make reusable code. We only needed to make that print function once and we can print any ID.

The output, by the way, looks like this:

```
Vega Deftwing
1234
1900/0/0

Triode Killjoy
1235
1901/1/2
```

Alright, I promised a hair more here though, so there's an extra thing you can do- you can make these structures into types. The big advantage of this is it lets you drop the use of the word struct in most places.

```c
typedef struct id_card {
    char first_name[30];
    char last_name[30];
    uint32_t id;
    // The time library defines a time structure for us, 
    // and we can put a structure in a structure.
    struct tm birth_day;
};
```

The only difference here is the word typedef. Which, as you can guess, just tells the code we want to make a new type.

With this done,

```c
struct id_card vega_id;
struct id_card triode_id;
```

becomes

```c
id_card vega_id;
id_card triode_id;
```

Now, there are technically some down sides to doing this in C but it's standard enough practice and the downsides confusing enough that you should just go with it. 

This is particularly handy for basic types, like making a type to hold two floats for complex numbers or something application specific, like a MIDI note's pitch and velocity. Repeating the word struct every time can just get in the way.

## Types and Performance

As a general rule of thumb, the more bits a type has, the worse it will be for performance, especially if you let the compiler optimize your code for you. I'd like to keep this relatively brief, but say you have something like this:

```c
#include <stdio.h>

int main(int argc, char const *argv[]) {

  double a = 1;
  double b = 30;
  double c;

  while (b > 0) {
    c = a + b;
    b -= 1;
  }

  printf("%f",c);

  return 0;
}
```

This is very stupid code not just because it's just round about way of printing the number 2, but because it's using double precision floating point numbers to represent integers. Now, you may be thinking: "Why would that matter, they're both number types?". 

Here's why: if we compile (turn into instructions the computer can understand) that code with lots of optimization (letting the computer try to make equivalent code that's faster) it still winds up as this:

```c
.LC2:
  .string "%f\n"
main:
  lui a5,%hi(.LC0)
  fld fa5,%lo(.LC0)(a5)
  addi sp,sp,-16
  lui a5,%hi(.LC1)
  fld fa4,%lo(.LC1)(a5)
  sd ra,8(sp)
  li a5,30
.L2:
  addiw a5,a5,-1
  fmv.d fa3,fa5
  fsub.d fa5,fa5,fa4
  bne a5,zero,.L2
  fadd.d fa5,fa3,fa4
  lui a0,%hi(.LC2)
  addi a0,a0,%lo(.LC2)
  fmv.x.d a1,fa5
  call printf
  ld ra,8(sp)
  li a0,0
  addi sp,sp,16
  jr ra
.LC0:
  .word 0
  .word 1077805056
.LC1:
  .word 0
  .word 1072693248
```

Which, is a lot of what probably looks to you like gibberish. However, what we can see is that this is still 30 lines long and that at line 11 there's a label `.L2` and line 15 has branch-if-not-equal back to that point. In other words, a loop. Which, yep, is what we expected - we did put a `for` loop in after all!

Only, this really doesn't need to be the case. If we change our code to be the more sensible option and use integers:

```c
#include <stdio.h>

int main(int argc, char const *argv[]) {

  int a = 1;
  int b = 30;
  int c;

  while (b > 0) {
    c = a + b;
    b -= 1;
  }

  printf("%d\n",c);

  return 0;
}
```

and compile it with optimization again, we get this:

```c
.LC0:
  .string "%d\n"
main:
  lui a0,%hi(.LC0)
  addi sp,sp,-16
  li a1,2
  addi a0,a0,%lo(.LC0)
  sd ra,8(sp)
  call printf
  ld ra,8(sp)
  li a0,0
  addi sp,sp,16
  jr ra
```

Which, is obviously less lines and less instructions- but more importantly doesn't even have a loop at all! Weird, right? This is because the C compiler realized that `a` and `b` never change, and so the value printed will always be 2, so instead of recomputing the value every time your program runs, it just computes it once and bakes the result in. Basically, if you make this program and gave it to someone else to run, their computer would never actually do the math - it would just print 2.

So, why did this work for the integer version and not the float version? Well, truth be told I have no clue. The way C optimizer work is ludicrously complex. What I can tell you is that, generally, simple types will work better and be faster both because the compiler will find better optimizations and (because of complex reasons regrading CPU architecture and vector operations (a very complex topic to be ignored for the moment)) more complex types just take more time anyway - see [this Stackoverflow post](https://stackoverflow.com/questions/2550281/floating-point-vs-integer-calculations-on-modern-hardware) and [Integer and Floating-Point Arithmetic Speed vs Precision (Nicolas Limare)](http://nicolas.limare.net/pro/notes/2014/12/12_arit_speed/#:~:text=Floating-point%20operations%20are%20always,really%20on%20products%20and%20divisions.) (the page is broken for graphs, but the conclusion is still relevant).

Note, this assumption isn't *always* true - it does still depend on the hardware. For example, if you're offloading computation to your graphics card, float point operations are probably *faster* than integer ones. That's a much, much bigger topic for another time though.

What I want you to take from this is that you shouldn't just use a bigger type because "it's more than enough" if the language lets you pick. In something like Python (unless you're using Numpy ... more on that *eventually*) you don't get the option, but when you do get the option, you should choose wisely and handle overflow and underflow appropriately.

## Dynamic Typing

Let's stop thinking C and look at some python for a moment:

Go ahead and open a python interpreter and run this, typing it in an pressing enter on each line

```python
a = 1
type(a)
a += .1
type(a)
a -= .1
type(a)
a += 3j
type(a)
a += "w"
```

You should see that on the first call, python tells us the type is `<class 'int'>`, which checks out, but that should mean adding .1 to it won't work. But, we can, and when we look at the type again, it's now `<class 'float'>`. It turned it into a float for us! Okay, so what if we subtract that .1 back off? Huh, still a float. This mostly makes sense, the type conversions aren't free, so once it's been used as a float Python keeps it that way. Okay, then we can add 3j to it - this is mostly just showing off that python has built in complex number support and that it will convert to it as expected - and it does, `type(a)` gives us `<class 'complex'>`. Cool. Okay, what if we add "w". Adding a character to a complex number makes no sense, right? Python agrees:

`TypeError: unsupported operand type(s) for +=: 'complex' and 'str'`

Along with this, while in C if we do 7/2 with ints we expect to get 3, in python, it will automatically turn into a float and we'll get 3.5 (You can actually do two division signs, so `7//2` in python to get the same flooring behavior)

## Type coercion

Python is what is known as "Dynamically Typed" due to the above. C, on the other hand is a "Statically Typed" language because we have to explicitly say what type each variable is before we use it.

This, however, doesn't mean we can't change types. We just have to be explicit about it and deal with the consequences ourselves. Yay, isn't C funnn. So, let's look at something we already sort of looked at above with the ASCII table and convert a character to an int and back. 

```c
#include <string.h>
#include <stdio.h>

int main() {
    char my_char = 'a';

    int my_int;

    my_int = (int)my_char;

    my_int++;

    printf("%c\n",(char)my_int);

    return 0;
}
```

{{< smalltext >}}Note, this example is a bit extra dumb, as C will let us do math on chars directly{{< /smalltext >}}

This, unsurprisingly, will print `b`. But let's actually look at the syntax. See those types in parentheses? Those exist to tell the compiler "treat this as if it's this other type here". With a character to an int, the conversion is pretty reasonable, but it can get a lot weirder.

Let's look at a particularly famous example which converts a float to a long (basically an int, but able to hold more bits - in the video he calls it 32 bits (4 bytes) because the code it is from was written for 32-bit computers, where a long was 32-bit and not 64 like it usually is today), does some operations on it, then turns it back into a float in order to approximate the inverse square root ({{< katex >}}\frac{1}{\sqrt{x}}{{< /katex >}}) very quickly.

{{< speech >}}

This video is pretty in depth. I don't really expect someone new to programming to follow all of it. I only have it to show *why* this stuff is powerful and provide motivation. I don't expect you to be able to recreate this kind of code on your own. Most experienced programmers couldn't either.

{{< /speech >}}

<iframe width="100%" height="500" src="https://www.youtube.com/embed/p8u_k2LIZyo" title="Fast Inverse Square Root — A Quake III Algorithm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Okay, we're getting there. We've gone over some of the mind set of programming, you've now ran some code in two different languages, stepped though it, and have learned a lot about data types - next up, we'll finally look at actual logic and doing stuff on these data types.
