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

## Strings

### Creating a String

The class of a string is ```String``` so a new string can be created with ```String.new```

```ruby
String.new("Hello, World!")

s = String.new("Hello world")

puts s #Print the string to the screen

# Single Quotes
s = 'Hello world'

# Double Quotes
s = "Hello world"
```

Difference between Single and Double quotes is interpolation. Single quotes does NOT
allow for interpolation. This means that the coder can't put variables inside the string.

```ruby
name = "Andy"
puts "Hello #{name}" # => Hello Andy

puts 'Hello #{name}' # => Hello #{name}

name = %{Andy} # Interpolates
name = %q{Andy} # Does NOT Interpolate

# One is not limitted to "{}" - you can use pretty much any character
name = %|Andy|

# One last way...
<<-STR
Andy
STR
```

### Special Characters and Escaping

```\n``` - Newline character
```\t``` - Tab character
```\b``` - Removes previous character (backspace)
```\v``` - Vertical tab
```\"``` - Double quote inside string
```\'``` - Single quote inside string
```\\``` - Backslash

### Working with Strings

```ruby
first_name = "Andy"

last_name = "Cousineau"

first_name + last_name # => "AndyCousineau"

first_name + " " + last_name # => "Andy Cousineau"

first_name * 3 # => "AndyAndyAndy"

first_name << " " << last_name  # => "Andy Cousineau"

first_name # => "Andy Cousineau"

last_name # => "Cousineau"

first_name[0] # => 65 # Reference to ASCII table value

name = gets #get string - value created by user input - appends \n
```

### String Methods Part 1

```ruby
string = "Hello world\n"

# Return representation of whats inside the variable
string.inspect # => "\"Hello world\\n\""

# Print string to screen
puts string.inspect # => "Hello world\n"

# Get rid of white space at beginning or end of a string
puts string.chomp # => "Hello world"

# Remove white space from end of string
puts string.chop # =>"Hello world"

# See if string is inside other string
string.include?("world") # => true

# Replace value of string
string.replace("Andy")

string # => "Andy"

# Get index of character in string
string.index("A") # => 0
```

### String Methods Part 2

```ruby
string = "Hello world"

# Reverse all characters in a string
string.reverse # => "dlrow olleH"

# Upper case all the letters
string.upcase # => "HELLO WORLD"

# Lower the case of all letters
string.downcase # => "hello world"

# Swap the casing of all letters
string.swapcase # => "hELLO WORLD"

# Get length of string
string.length # => 11
string.size # => 11

# Create array from string specifying delimiter
string.split(" ") # => ["Hello", "world"]

# Add 2 strings together
string.concat(" Another string") # => "Hello world Another string"
```

There is a way to modify an existing variable with the ```!``` - this creates a BANG METHOD

```ruby
string = "Hello world"
string.upcase! # => "HELLO WORLD"
string # => "HELLO WORLD"
```