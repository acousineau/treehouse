
// Expense Notation
function myFunction () {

};

myFunction();

// Statement Notation
var myFunction = function () { 
	console.log('myFunction was called');
	undeclaredVariable;
};

// myFunction();

var callTwice = function(targetFunction) {
	targetFunction();
	targetFunction();
}

// callTwice(myFunction);

// Why may named function be more useful than a named function in a variable

callTwice(function namedFunction(){
	console.log("Hello from anon function");
	undeclaredVariable;
});

// Self instantiating function

function tempFunction() {
	var a, b, c;
	// ...
}

tempFunction();

// Self Executing Anon Function
(function(){

})(args /*jQuery*/);