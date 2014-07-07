/* JavaScript Foundations: Numbers */

/********* 
Creating Numbers: Part 1
**********/

// Whole Numbers
var a = 11,
	b = -123;

// Float type numbers
var c = 1.5,
	d = 123.456789;

var e = 0.1,
	f = 0.2;

var result = e * f;
console.log(result); // 0.020000000000004

// The rounding comes from how numbers are stored on the computer - it just has
// a limited amount of space to store a representation - also, there is an infinite
// amount of numbers - so it needs to round it off at a certain point

/********* 
Creating Numbers: Part 2
**********/

var g = 1000000, // 1 million
	g = 1E6; // 1 * 10^6

var h = 012; // Creates 10
// Because it starts with a 0 - the system assumes it's an octal number
// Represents a power of 8 - so we use 0-7 (instead of 0-9)
// 012 - 0 represents 0, 1 represents 8, 2 represents 2 = 10
// Just don't lead number with 0
var h = 019; // Interpreted as 19 because '9' isn't a valid octal number
// so it defaults back to decimal notation

// Hexidecimal
var i = 0x10; // 16

/********* 
Parsing Numbers from Strings
**********/

// parseInt - converts string into a number
var j = parseInt("197");
// there is also parseFloat();

var j = parseInt("012");

var j = parseInt("019", 10); // second argument specifies the base
var k = parseInt("010111", 2); // parse binary
var l = parseInt("23 people", 10); // 23
var m = parseInt("there are 23 people"); //NaN Not a Number

m + 14 // NaN - any type of operation is not a number

console.log(l === NaN); // false...?
// NaN is never equal to itself

console.log(isNaN(l)); // true - verifies if a variable is NaN

var n = parseFloat("123.456 is a strange number"); // same properties 
// as parseInt
// Must start with a number
// However, no reason to add a base argument

/********* 
Operators
**********/

var o = j + k;
var o = 1 + k;
var p = 10 - 7.3;

var q = 3 * 4.2; // 12.60000000000000001 - same issue when multiplying 
// floating point numbers
var r = 16 / 8; // 2

var r = 15 / 10 // 1.5

// Modulo
var s = 15 % 10 // 5 - which is the remainder

var t = 1 + 2 * 3 / 4; // (2*3) / 4 = 1.5 + 1 = 2.5

var u = (1 + 2) * 3 / 4 // 2.25

/********* 
Comparisons
**********/

console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(1 >= 2); // false
console.log(1 >= 1); // true

console.log(1 === parseInt("1", 10)); // true
console.log(1 !== parseInt("1", 10)); // false
console.log(1 !== 3); // true

if (1 < 2) {
	console.log("Yes");
} else {
	console.log("No");
}

/********* 
The Math Object
**********/

var u = Math.random(); // Generates a random number between 0 and 1

// How to get number between 0 and 10
var u = Math.random() * 10; // 4.58972389472374

// Round the number
var u = Math.round(Math.random() * 10); // 5

// Always round down
var u = Math.floor(3.7); // 3

// Always round up
var u = Math.ceil(6.2); // 7

// Power function
var y = Math.pow(2, 5); // 2^5 = 32

// Square Root
var z = Math.sqrt(16); // 4








