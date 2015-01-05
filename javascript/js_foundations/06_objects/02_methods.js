var andy = {
	name: 'Andy',
	skills: ['JavaScript', 'Python', 'HTML/CSS', 'Drumming'],
	'favorite color': 'Red',
	greet: function(){
		console.log("Hello, I am " + this.name);
	}
};

andy.greet(); // Method is a function that is the property
// of an object

andy['greet']();

var andyGreet = andy.greet;
andyGreet(); // returns "Hello, I am";

function whatIsThis() {
	console.log(this); 
}

whatIsThis(); // returns window