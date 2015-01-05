//Conditional Statements - Quiz Example

var answer = prompt("What programming language is the name of a gem?");

if ( answer.toUpperCase() === 'RUBY' ) {
	document.write("<p>That's right!</p>");
}

else {
	document.write("<p>Sorry, that's wrong</p>");
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Comparison Operators
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=

>
>=
<
<=
==
===
!=
!==

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Random Number Generator with Conditions
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Random Number Generator - gets bounds from user
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber) {
	alert('You got it! The random number was ' + randomNumber);
}

else {
	alert('Sorry, you guessed ' + guess + ' and the random number was ' + randomNumber);
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Booleans
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Random Number Generator - gets bounds from user
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber) {
	correctGuess = true;
}

if (correctGuess) {
	document.write('<p>You guessed the number!</p>');
}

else {
	document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Programming Multiple Outcomes
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

if (correctGuess) {
	document.write('<p>You guessed the number!</p>');
}

else if (stuffAndStuff) {
	document.write('<p>Stuff and Stuff???</p>');
}

else {
	document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Random Number Guessing Game
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Random Number Generator - gets bounds from user
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

// Evaluate if user's guess is correct
/*
	1. Guess is correct
	2. Guess is too high
	3. Guess is too low
*/
if (parseInt(guess) === randomNumber) {
	correctGuess = true;
}

else if ( parseInt(guess) < randomNumber ) {
	var guessMore = prompt('Try again. The number I am thinking of is greater than ' + guess);

	if ( parseInt(guessMore) === randomNumber ) {
		correctGuess = true;
	}
}

else if ( parseInt(guess) > randomNumber ) {
	var guessLess = prompt('Try again, The number I am thinking of is less than ' + guess);

	if ( parseInt(guessMore) === randomNumber ) {
		correctGuess = true;
	}
}

//Evaluate if correctGuess is true
if (correctGuess) {
	document.write('<p>You guessed the number!</p>');
}

else {
	document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

//-=-=-=-=-=-
// COMMENTS
//-=-=-=-=-=-

// Single Line Comments 

/*
	Multi-line
	Comment 
*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Combining Multiple Tests in Single Condition
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// AND
( 20 < age && age < 30 )

// OR
( age < 10 || age > 50 )

// AND
true && false 	=> false
false && true 	=> false
true && true	=> true
false && false 	=> false

// OR
true || false	=> true
false || true 	=> true
true || true 	=> true
false || false	=> false

//-=-=-=-=-=-=-=-=-=-=-=-=
// Conditional Challenge
//-=-=-=-=-=-=-=-=-=-=-=-=

/*
	1. Ask 5 questions
	2. Keep track of questions the user answered correctly
	3. Provide final message that shows the user how many they answered correctly
	4. Rank the player
		1. 5 == Gold
		2. 3/4 == Silver
		3. 1/2 == Bronze
		4. 0 == No Crown
*/

var correctAnswers = 0;
var playerRank;

// Question One
var questionOne = prompt("How many quarts in a gallon?");

if (parseInt(questionOne) === 4) {
	correctAnswers += 1;
}

// Question Two
var questionTwo = prompt("How many pints in a quart?");

if (parseInt(questionTwo) === 2) {
	correctAnswers += 1;
}

// Question Three
var questionThree = prompt("How many cups in a pint?");

if (parseInt(questionThree) === 2) {
	correctAnswers += 1;
}

// Question Four
var questionFour = prompt("How many tablespoons in a cup?");

if (parseInt(questionFour) === 16) {
	correctAnswers += 1;
}

// Question Five
var questionFive = prompt("How many teaspoons in a tablespoon?");

if (parseInt(questionFive) === 3) {
	correctAnswers += 1;
}

// Rank the Player
if (correctAnswers === 5) {
	playerRank = 'Gold';
}

else if (correctAnswers >= 3) {
	playerRank = 'Silver';
}

else if (correctAnswers >= 1) {
	playerRank = 'Bronze';
}

// Alert player of how many they got correct!
if (playerRank) {
	alert('You got ' + correctAnswers + ' out of 5 answers correct! That gives your a rank of ' + playerRank + '!');
}

else {
	alert('Sorry, you did not get any of the questions correct.');
}