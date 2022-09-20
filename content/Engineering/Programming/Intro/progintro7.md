# 10.7 - Data Structures, Object Orientation, & Encodings

<script>
    document.getElementById("codeMenu").open = true;
</script>

## Why not just structs?

C is a very low level language and only lets you make `struct`s. Structs are fine, but they have some annoying properties, particularly in separating data from how you interact with it, making it difficult to make complex abstractions where you can be sure that data that should only be internal to a structure isn't exposed, or that the data can't be changed in an invalid way.

For example, say we have a basic C structure we'll call a "person" with first name, last name, age, and an ID, etc. We can make that structure easy enough:

```c
struct Person {
    char first_name[20];
    char last_name[20];
    unsigned int age;
    unsigned int id;
}
```

Problem is, somebody could do something like

```c
struct person bob;
bob.first_name = "this string is a lot more than twenty characters"
```

which would crash the program, because we've exceeded the length limit we defined above, so, maybe we make a function to set the first name:

```c
int set_first_name(struct Person person, char *name){
    if(strlen(person.first_name) >= 20){
        return 1;
    } else {
       person.first_name = name;
    }
}
```

and so long as we only ever use this function, this is fine. Problem is, we really can't hide the data from other things and prevent them from modifying the name directly.

The problem gets worse, too. For example, say we wanted to add something to the structure that stores the last time the ID was changed. This should never be able to be changed directly, it should only change if the ID changes, and it should ALWAYS change if the ID changes. This is impossible to enforce in C.

Getting a bit more abstract, what if we want data to be able to inherit ideas. For example, say we want to be able to make a person, but also have a data type for employee and customer? It would make sense to make both employees and customers people. That is, we'd want these data types to *inherit* their properties and data fields from the parent data structure. What I'm beginning to describe is called "Object orientation" and it's a feature common to many languages, but notably not available in C. It generally makes it easy to model more complex data structures and limit the way you interact in them, preventing bugs.

Really, the big difference here isn't that you can do something new (like inheritance, etc.) - you can do similar things in C with structures and pointers if you're clever - it's what we *can't* do. We often want to limit what we can do to prevent ourselves (and hackers) from making/exploiting errors. With Object Orientated Programming (OOP) You can place limits on your code to prevent yourself from doing very stupid things, which once you've written enough code, you'll know the majority of your time goes to fixing stupid mistakes.

## A New Objective

Alright, so, we know we want something more than basic data structures ([sometimes](https://www.youtube.com/watch?v=QM1iUe6IofM&t=1988s)) and this thing is called "Object Orientation", so, uh, what is that?

Okay, so, put very basically, it means you make your code with **classes** and make instances of **objects**. Each class (and so each object) has a set of **methods** (basically functions) that define how you can interact with it. These methods can either be **public** or **private**. private methods can only be called by other things within the class, public can be called from outside the class. Now, in truth, this is one place where python is a hair weird to teach this as it really doesn't do the public/private distinction well, but ╮(─▽─)╭.

Anyway, let's look at an example. Because OO really only makes a lot of sense in the context of larger code, let's assume we're making a game like Minecraft and need a tool system. The following is a rough idea of how that might look in an object-oriented style for making a Tool class, making a Pickaxe subclass of the Tool class

```python
class Tool:
    def __init__(self,durability,name,cool_down_time):
        # We want to set the name internally,
        # but don't want it to be modifed directly after being set initally
        self._name = name
        sef.durability = durability
        self.cool_down_time = cool_down_time
        # This will get initalized automatically,
        # no need to pass it in when making the item
        self.time_last_used = 0
        
	def get_name(self):
        return self.name
    
    def set_name(self,name)
    	# Python doesn't give us a good way to ensure data types,
        # and since this would be from user input, we want to be extra safe.
    	if type(name) != str:
        	return False
        
        # Check if the entered string is a reasonable length
        if len(name) > 30 or len(name) < 1:
            return False
        
        self._name = name
        return True
        
    
    def get_durability(self):
        return self.durability
    
    def _is_broken(self):
        if durability > 0:
            return False
        else:
            return True
        
    def use_item():
        if not self.__is_broken():
            if ((time.time() - self.time_last_used) < self.cool_down_time):
                # If enough time hasn't elapsed, we can't use the item again
                return False
            self.durability -= 1
            self.time_last_used = time.time()
            # Return true to indicate we could use the item
            return True
        else:
            # If the item is broken, we can't use it
            return False
        
class PickTool(Tool):
    def __init__(self,durability,name,cool_down_time,mining_level,attack_damage):
        super().__init__(durability,name,cool_down_time)
        self.mining_level = mining_level
        self.attack_damage = attack_damage
        self.tool_type = "pick"
        
	def use_item_on_block(self,target_block):
        # Try to use the item
        if not Tool.use_item():
            return False
            
        elif (target_block.hardness < mining_level) and (target_block.tool == self.tool_type):
            target_block.damage()
            
     def use_item_on_mob(self,target_mob):
        if not Tool.use_item():
            return False
        else:
            target_mob.hurt(self.damage)
```

Of course, this is lacking the code to craft the pick - that functionality should probably belong to a crafting table object, but without going into it too much, that might look like

```python
class Block():
	#...

class InteractableBlock(self,Block):
	#...
   
class CraftingTableInteractableBlock(self,InteractableBlock)
	#...
    def craft_item(self,player,items)
    	# assume items is a list of 3 lists of 3 items, (a 3x3 grid)
        # with something to represent no item.
        if items = [[plank,plank,plank],[none,stick,none],[none,stick,none]]:
            player.add_to_inventory(PickTool(20,"Wooden Pick",1,1))
```

And of course, there'd be yet more code to actually let a player use the item once it's in their inventory. What you should note, though, is that when calling `PickTool(1,"Wooden Pick",1,1)` a new object of that type is made. If another one is crafted, it will still be a new item, with its own durability, name, etc. Even if they're the same, if one is used, it won't use the other. They are distinct **objects**.

Maybe this would be easier to see with a toy example:

```python
class Dog:
	def __init__(self, name):
		self.name = name
		
first_dog = Dog("Scruffy")
second_dog = Dog("Spot")		
```

There are two dogs being "made". If both were named "Spot" that would be fine, but it's still two different dogs. Just like how meeting someone with your same name doesn't make the two of you the same person.

Another nice thing about this is it gives us a good way to organize our code, as usually it's a good call to have a file per class (though not always, we don't need separate files for 10 lines of code if it fits somewhere else nicely).



[TODO]

objects, classes, basic OO, inheritance, SOLID

* **S** - Single Responsibility Principal
  * Each class should do one thing, and only one thing.
  * This is easy in theory, but also sometimes mentally difficult, and requires breaking things down more than natural.
* **O** - Open-Closed Principal
  * Open for extension; Closed for modification
  * In other words, you should be able to change how something works, as much as reasonable, by extending a class without changing its source code.
* **L** - Lisov Substitution Principal
  * Shitty name
  * Basically just means an instance of a thing should always be able to be replaced by a more-specific version.
  * So, this really means that a specific version should still need all the attributes of the less-specific version.
  * In the above example, we had employees and customers as people. So, any code that does an operation on a person should be able to work on a generic person, employee, or customer; however, it's not necessary that any code that can work on an employee can work on a person
* **I** - Interface Segregation Principal
  * This one needs used within limits. Don't make code overly complex.
  * https://reflectoring.io/interface-segregation-principle/#:~:text=The%20Interface%20Segregation%20Principle%20(ISP,%E2%80%9D%20or%20%E2%80%9Cfat%E2%80%9D%20interface.
* **D** - Dependency Inversion Principal
  * I also don't like this one. It's often preemptively writing code in case of a future rewrite. Great, until the rewrite requires you change things anyway. Arguably, it's harder to maintain code where the high level depends on the low level. Arguably, this is totally obnoxious over engineering in most circumstances.
  * This does make sense if you're making something in a VERY big project, working with multiple teams, etc.
  * https://dev.to/tamerlang/understanding-solid-principles-dependency-inversion-1b0f



**Polymorphism** - 

## I/O

Files, stdout/stderr, python pickle, databases, network connection, etc.

## Being Assertive

Assert and testing, try/catch, exceptions

https://stackoverflow.com/questions/1081409/why-should-i-use-asserts



## Python's Iterators

