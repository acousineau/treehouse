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
rick = new Person('Rick');

rick.species = 'Human';

// Change prototype
Person.prototype.species = 'Human';

// Add to prototype
Person.prototype.favoriteColor = 'Red';

function Animal (name, species) {
	this.name = name;
	this.species = species;
	this.numberOfLegs = 4;
}