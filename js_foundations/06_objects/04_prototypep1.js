var personPrototype = {
	name: 'Anonymous',
	greet: function (name, mood) {
		name = name || 'You';
		mood = mood || 'good';

		console.log("Hello, " + name +
					" I am " + this.name + 
					" and I am in a " + mood + " mood!");
	},

	species: 'Homo Sapien'
}

// Constructor function
function Person (name) {
	this.name = name;
}

Person.prototype = personPrototype;

andy = new Person('Andy');