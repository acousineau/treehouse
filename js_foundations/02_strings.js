/* JavaScript Strings */

/********* 
Basics
**********/

var name = "Andy";
console.log(name); // Andy

var name2 = 'Andy';
console.log(name2);

var statement = "This is Jim's string"; // We should use double quotes
// because we use a single quote within the string
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said \"This is Jim\'s string\"'

/********* 
Escape Characters
**********/

//Using intentional backslashes
var path = "C:\\folder\\myfile.txt";
console.log(path);

//Multiline
var multiline = "This \tis line 1\nThis is line 2\nThis is line 3";
console.log(multiline);

/* 
\ - \\
newline - \n
insert tab - \t
*/

/********* 
Concatenation
**********/

var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2
console.log(whole);

var whole = "Hello " + "World!";

console.log(whole + "!!!!");

var multiline = "This is line 1\n" + 
	"This is line 2 \n" + 
	"This is line 3";

console.log(multiline);

/********* 
Methods: Part 1
**********/

// Length
var length = whole.length; // Returns length of string as a number
console.log(whole, length);

// indexOf 
var index = whole.indexOf("World");
console.log(index); // Returns '6'

var index2 = whole.indexOf("world"); // Substring does not exist
console.log(index2); // -

if (whole.indexOf("W") !== -1) {
	console.log("W exists in string");
} else {
	console.log("W does not exist");
}

//charAt

console.log(whole.charAt(1)); //Returns 'e'

/********* 
Methods: Part 2
**********/

//substr
var whole = "Hello " + "World!";
var world = whole.substr(6/* the starting position index */, 
						5/* length of desired string */);

//toLowerCase() - toUpperCase()
console.log(whole.toLowerCase());
console.log(whole.toUpperCase());
console.log(whole);

/********* 
Comparing Strings
**********/

var first = "Hello";
var second = "hello";

if (first === second) { // '===' strictly equal to
	console.log("The strings are equal");
} else {
	console.log("The strings are different");
}

// Outputs "The strings are different"

if (first.toLowerCase() === second.toLowerCase()) { // '===' strictly equal to
	console.log("The strings are equal");
} else {
	console.log("The strings are different");
}

// Outputs "The strings are equal"

// We can also use
// <, <=, >, >=

function compare(a, b) {
	console.log(a + " < " + b, a < b);
}

compare('a', 'b'); // true
compare('a', 'A'); // false

// The values of strings are based off of the values from the ASCII table

compare('apples', 'oranges'); // true
// JS will look at the first character in each string and determine if the first
// letter evaluate - it only goes to the subsequent letters in the starting
// letters match

compare('apples', 'applications'); // true
compare('app', 'apples'); // true - because the first word has "less" letters than
// right hand side

compare('hello', 'hello'); //false - they are equal










