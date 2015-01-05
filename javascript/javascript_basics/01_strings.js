// Finding the length of a string

var passphrase = "Open Sesame";
console.log(passphrase.length); // 11
console.log(passphrase.toLowerCase()); // 'open sesame' - doesn't change original variable
console.log(passphrase); // 'Open Sesame'
console.log(passphrase.toUpperCase()); // 'OPEN SESAME'

// Shout App Creation
var stringToShout = prompt("What should I shout?");
var shout = stringToShout.toUpperCase();
shout += "!!!";
alert(shout);