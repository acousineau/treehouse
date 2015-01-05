var score = 0;
var pi = 3.141592653589793;
var absoluteZero = -273.15;
var numberOfAtomsOnEarth = 1.33e+105;

// Don't put quote marks around a number - otherwise you have a string

//Integers
5
0
-100
9999

//Floating Point number
3.14
0.9999
-9.88888

//Scientific Notation
9.23e+10
1.33e+105

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// DOING MATH
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

1 + 3
2 - 7
3 * 9
7 / 2

var score;

var score = 0;

score = score + 100;

// Mathematical Shorthands
score += 10;
score -= 10;
score *= 10;
score /= 2;

// Simple Calculation Script
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;

document.write('There are ' + secondsPerDay + ' seconds in a day');

var yearsAlive = 26;

document.write("I've been alive for " + secondsPerDay * daysPerWeek * weeksPerYear * yearsAlive + " seconds");

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Numbers and Strings
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Below is the problem that prompt() returns input as a string - so they must be converted into a number
var HTMLBadges = prompt("How many HTML badges do you have?");
var CSSBadges = prompt("How many CSS badges do you have?");
var totalBadges = HTMLBadges + CSSBadges;
alert('Wow! You have ' + totalBadges + ' badges!'); // 105

//Convert users input to integers
var HTMLBadges = prompt("How many HTML badges do you have?");
var CSSBadges = prompt("How many CSS badges do you have?");
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert('Wow! You have ' + totalBadges + ' badges!'); // 15

// Parse Float
parseFloat('3.14'); // 3.14
parseFloat('1.89 light years away'); // 1.89
parseInt('That is so 2004'); //NaN


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// The Math Object
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Used to perform complicated math computations

Math.round(2.2); // 2
Math.round(44.9); // 45
Math.round(44.5); //45
Math.round(44.49); // 44

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Random
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Math.random(); // Generates random number between 0 =< 1

// Get values that exist on a die - 1 => 6
Math.floor(Math.random() * 6) + 1;

//Can't use Math.ceil - because there is a very slight change that
// it will return 0

//Random Number Generator - gets bounds from user
var startBound = prompt("What do you want your starting bound number to be created?");
var endBound = prompt("What is the highest number would you like your random number to be?");

startBound = parseInt(startBound);
endBound = parseInt(endBound);
var randomNumber = Math.floor(Math.random() * (endBound - startBound + 1) + startBound);

var message = "<p>" + randomNumber + " is a number between " + startBound + " and " + endBound + ".</p>";

document.write(message);



