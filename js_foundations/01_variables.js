/* Javascript Foundations: Variables */

var color - "red"; // Declaring a variable 

var myDiv = document.getElementById('myDiv');

myDiv.style.background = "black";
myDiv.style.color = "white";

// Starts with A-Z a-z _ $
// Continue with A-Z a-z 0-9 _ $

// Valid Variable Names
var car = "Toyota";
var Color = "blue";
var _myVariable = "something";
var $specialName = 1;
var a5689 = True;

// Invalid Variable Names
// var 3colors = "red green blue";
// var winning% = 30;
// var person-name = "Andy";
// var @you = "are awesome";

// Reserved Names

/* if else function continue switch break case catch debugger default delete do finally for
in instanceof new return this throw try typeof var void while with */

// class
// export
// extends
// super

// let package yield protected private static public


var myVar; // creates an undefined variable - none value that was never defined

// Null - used to indicate a variable is truly empty - not simply empty by default

console.log(typeof myVar); // undefined
console.log(typeof myVar === "undefined"); //  true - BEST WAY TO TEST IF VARIABLE IS UNDEFINED
console.log(myVar === undefined); // true -- if undefined is set some other way - this will fail 
// because undefined is actually a variable set by javascript

var x = null; //keyword that means empty

// Null and Undefined are FALSY VALUES - evaluate to false

// Check if value is undefined or null?
// Simply use "===" vs "==" because the latter treats null and undefined as the same
// "===" is a strict comparison in which case they are not the same

/********* 
Scope
**********/
var world = "World!";

function sayHello() {
	var hello = "Hello ";
        
	function inner() {
		var extra = " There is more!";
		console.log(hello + world + extra);
	}

	inner();
}

sayHello();

console.log("world outside sayHello(): ", world);
// console.log("hello outside sayHello(): ", hello); // causes a reference error

/********* 
Shadowing
**********/

// What if two variables in different scopes are defined with the same name - Shadowing

var myColor = "blue";
console.log("myColor before myFunc()", myColor); // blue

function myFunc() {
	var myColor = "yellow";
	myNumber = 42;
	console.log("myColor inside myFunc()", myColor);
}

myFunc(); // yellow
console.log("myNumber after myFunc()", myNumber); // myNumber because without "var" becomes a global variable
// do NOT do this unless changing an existing variable

console.log("myColor after myFunc()", myColor); // blue

// Changing the global variable from within a function
function myFunc() {
	myColor = "yellow"; // not having "var" redefines the global variable
	console.log("myColor inside myFunc()", myColor);
}

/********* 
Hoisting
**********/

// Bad code
function doSomething (doit) {
	var color = "blue";
	if(doit) {
		var color = "red"; // var here is actually useless
		var number = 10; // this variable is actually "hoisted" meaning that it will be undefined
		// unless if block is executed -- review function below for cleaner code
		console.log("Color in if(){}", color);
	}
	console.log("Color after if(){}", color);
}

//Good code
function doSomething (doit) {
	var color = "blue";
	var number;
	if(doit) {
		color = "red"; // var here is actually useless
		number = 10; // this variable is actually "hoisted" meaning that it will be undefined
		// unless if block is executed -- review function below for cleaner code
		console.log("Color in if(){}", color);
	}
	console.log("Color after if(){}", color);
}

// We could even declare multiple variables in a single var declaration
var color = "blue",
	number,
	name = "Andy";

doSomething(false); // blue
doSomething(true); // red, red



