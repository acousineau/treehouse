//Basic function construct - declaration
function alertRandom() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	alert(randomNumber);
}

// Call the function
alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();

// Function expression
var alertRandom = function() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	alert(randomNumber);
};

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Getting Information from a Function
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function goToCoffeeShop() {
	return 'Espresso is on its way.';
}

alert(goToCoffeeShop());

// Improve function from before
console.log(function getRandomNumber() ){
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
}

alert(getRandomNumber());
console.log(getRandomNumber());
var dieRoll = getRandomNumber();

// Multiple Return Statements
function isEmailEmpty() {
	var field = document.getElementById('email');

	if (field.value === '') {
		return true;
	}

	else {
		return false;
	}
}

var fieldTest = isEmailEmpty();

if (fieldTest === true) {
	alert('Please provide your email address.');
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Giving Information to Functions
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function goToCoffeeShop(drink, pastry) {
	alert(drink + 'and' + pastry + ' are on their way!');
}

goToCoffeeShop('Espresso', 'croissant');

function getRandomNumber(upperLimit) {
	var randomNumber = Math.floor(Math.random() * upperLimit) + 1;
	return randomNumber;
}

// console.log(getRandomNumber(10));
// console.log(getRandomNumber(4));
// console.log(getRandomNumber(57));

function getArea(width, length, unit) {
	var area = width * length;
	return area + ' ' + unit;
}

console.log(getArea(40, 32, 'sq ft'));

//-=-=-=-=-=-=-=-=-=
// Variable Scope
//-=-=-=-=-=-=-=-=-=

// With private variable
function greeting() {
	var person = 'Lilah';
	alert(person); // Lilah
}

var person = 'George';
greeting();
alert(person); // George
greeting(); // Lilah

//Changing global variable
function greeting() {
	person = 'Lilah';
	alert(person); // Lilah
}

var person = 'George';
greeting();
alert(person); // Lilah
greeting(); // Lilah

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Random Number Challenge
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function getRandomNumber(lowerLimit, upperLimit) {
	return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}

console.log(getRandomNumber(10, 100));
console.log(getRandomNumber(0, 2));
console.log(getRandomNumber(0, 1));
console.log(getRandomNumber(33, 35));

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Random Number Challenge Part II
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function getRandomNumber(lowerLimit, upperLimit) {

	if (isNaN(lowerLimit) || isNaN(upperLimit)) {
		throw new Error('Both arguments must be numbers');
	}

	return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}

console.log(getRandomNumber('blah', 100));
console.log(getRandomNumber(0, '45'));
console.log(getRandomNumber(0, 1));
console.log(getRandomNumber(33, 'help'));