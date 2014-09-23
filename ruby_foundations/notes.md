# Ruby Foundations

## Objects, Classes and Variables

### Simple Variables

Can create numbers, strings

```javascript
a = 1
puts a

b = "Hello, world"
puts b
```

There are many types of variables in Ruby:
* local variables
* instance variables
* global variables
* constants

Global Variables: Depicted with a "$":

```javascript
$toppings = false
```

Constants are all Uppercase:

```javascript
AVAILABLE_TOPPINGS = ["lettuce", "tomato", "onion", "relish", "pickles"]
```

Local Variable:

```ruby
def order
    print "How many burgers would you like? "
    number = gets.chomp  #local variable
    puts "#{number} burgers coming right up."
end
```

Instance Variable:

```ruby
def initialize
    @toppings = []
end
```

Casing Variables:

Classes are written in CamelCase - ```class BurgerSwine```

### Control Flow

If Statement:

```ruby
a = 3

if a == 1
    puts "a is 1"
elseif a == 2
    puts "a is 2"
else
    puts "I don't know the value of 'a'"
end
```

Case Statement:

```ruby
a = 3

case a
when 1
    puts "a is 1"
when 2
    puts "a is 2"
else
    puts "I don't know the value of 'a'"
end
```

### Objects and Classes

Notes in objects_bank_account.rb