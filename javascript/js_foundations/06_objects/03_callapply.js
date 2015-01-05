
var jim = {
	name: 'Jim',
	skills: ['JavaScript', 'Python', 'Dancing'],
	'favorite color': 'red',
	greet: function(name, mood) {
		name = name || 'You';
		mood = mood || 'good';

		console.log("Hello, " + name + 
			' I am ' + this.name +
			' and I am in a ' + mood + ' mood!'
		);
	}
};

var nick = {
	name: 'Nick',
	greet: jim.greet
};

jim.name = "James";

jim['greet']('Ryan', 'awesome');
nick.greet();

// Call
var jimGreet = jim.greet;
jimGreet.call(jim); // literally calls jimGreet - 'this' is bound
// to the argument

jimGreet.call({name: 'Amit'}, 'Matt', 'bad'); // this, <first arg>, <second arg>

jim.greet.call(nick);

// Apply
jim.greet.apply({name: 'Andy'}, ['Rick', 'okay']); // this, [<first arg>, <second arg>]

var args = ['Michael', 'happy'];
jim.greet.apply(jim, args);




