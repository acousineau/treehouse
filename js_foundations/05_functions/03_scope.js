var color = 'black';
var number = 1;

function showColor() {
	var color = "green";
	shape = 'square'; // Assigns this to the global scope

	number = 2; // changes 2 in bother local and global scope because 'var' is NOT included
	// in declaration

	console.log('showColor color', color);
	console.log('showColor number', number);
	console.log('showColor shape', shape);
}

showColor(); // green - it grabs it from the private variable within the function scope

console.log('Global color', color);
console.log('Global number', number);
console.log('Global shape', shape);