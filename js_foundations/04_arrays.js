/* JavaScript Foundations: JavaScript Arrays */

/********* 
Creating Arrays
**********/

var x = ["Andy", "Claire", "Rick"];
console.log(x.length); // 3

var y = ['a string', 3, true, 'treehouse', function(a, b){return a + b}];

var z = ['a string', 3, ["a sub array", 2, 3, 4], 'treehouse', function(a, b){return a + b}];

var zz = []; // Empty array

// Using the Array the constructor
var a = new Array();
// If you wanted to create an array that initially has a value to it

var b = new Array(50); // b.length is 50 - while b is []

/********* 
Getting and Setting
**********/

var my_array = ["Hello", 42, true, function(a){return a * 2}];

var word = my_array[0]; // returns "Hello"
var answer = my_array[1]; // returns 42
var doubler = my_array[3]; // returns a function

console.log(doubler(10));

my_array[100]; // undefined

// Assignment
my_array[1] = 144;
var new_answer = my_array[1];

console.log(answer); // still 42 because it copies the value out and into a new variable

// Assign to index that does NOT exist
my_array[4] = "A new string";

my_array[14] = "A new string"; // all indexes that occur in between defined index and next closest are UNDEFINED

// And to end of array
my_array[my_array.length] = 42; // without having to know ahead of time what the length of the array is 

/********* 
Methods Part 1
**********/

// Push -  Pop (operate on the end of the list)
var my_array = [2, 3, 4];

//Pushing a value onto the end of an array
console.log(my_array.toString()); // Takes representation of the array and turns it into a string

my_array.push(5);

console.log(my_array.toString());

//Pop
var value = my_array.pop(); // returns last value of the array and removes it from the array

var my_array = [2, 3, 4];
console.log(my_array.toString());

//Unshift
my_array.unshift(1); // adds designated value to the beginning of the array


//Shift
my_value = my_array.shift(); // Takes value off the beginning of an array and assigns it to a variable

/********* 
Methods Part 2
**********/

var my_array = [10, 44, 32, 100, 0, 44, 3, 4];
console.log(my_array.toString());

// Sort the array in place 
my_array.sort();
console.log(my_array.toString()); // 0,10,100,3,32,4,44,44 - sorts as if they were strings

my_array.sort(function(a, b){ // returns desired sort... still unsure why?
	return a - b;
});
console.log(my_array.toString());

my_array.sort(function(a, b){ // trick to randomly sort numbers
	return Math.random() - 0.5;
});
console.log(my_array.toString());

// Reverse
var my_array = [1, 2, 3, 4, 5];
console.log(my_array.toString());

my_array.reverse();
console.log(my_array.toString());

/********* 
Methods Part 3
**********/

// These will not change the values of the array - it just returns
// new information to store into existing variable or new variable

//Concat - combines 2 arrays together
var x = [1,2,3];
var y = [4,5,6];
var z = x.concat(y); // new array that begins with 'x', and ends with 'y'

console.log(x);
console.log(y);
console.log(z);

var z = x.concat(4, 'string', function(a){return a});
console.log(z);

var z = x.concat(4,5,6,[7,8,9]);
console.log(z);

//Slice
var my_array = [0, 1, 2, 3, 4, 5];
var result = my_array.slice(1, 4) // result = [1,2,3]
console.log(result);

//Join
var words = ['these', 'are', 'some', 'words', true];
var result = words.join(' '); // actually creates a string  - everything has toString() called to it
// before adding to the string created by join();
console.log(result);

/********* 
Splice
**********/

var my_array = [0, 1, 2, 3, 4, 5, 6];

console.log(my_array.toString());
delete my_array[2]; // makes index 2 'undefined'

console.log(my_array.toString());


var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString());

my_array.splice(2, 1) // (index of element, number of elements to be removed)
console.log(my_array.toString());

//Insert
my_array.splice(2, 0, 'two') // doesn't remove 2, just inserts 'two' before index 2


// Replace
my_array.splice(2, 1, 'two');

// however...
my_array[2] = 'two'; // performs the same action as above

// Add as many elements as desired at particular index
my_array.splice(2, 3, 'two', 'TWO', 'something else')

