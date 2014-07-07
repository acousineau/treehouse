// Javascript Functions

function sayHello(name, greeting) {
	if(typeof greeting === "undefined") {
		greeting = "Hello";
	}
	console.log(greeting + " World! " + name);
}

sayHello("Andy", "Greetings");

sayHello("Andy");