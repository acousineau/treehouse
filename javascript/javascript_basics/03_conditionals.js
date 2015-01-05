//Random Number Generator - gets bounds from user
var startBound = prompt("What do you want your starting bound number to be created?");
var endBound = prompt("What is the highest number would you like your random number to be?");

startBound = parseInt(startBound);
endBound = parseInt(endBound);
var randomNumber = Math.floor(Math.random() * (endBound - startBound + 1) + startBound);

var message = "<p>" + randomNumber + " is a number between " + startBound + " and " + endBound + ".</p>";

document.write(message);


//Conditional Statements - Quiz Example

var answer = prompt("What programming language is the name of a gem?");

if ( answer === 'Ruby' ) {

}