// Javascript Functions

function sayHello(name, greeting) {
	if (typeof name === "undefined") {
		return 0; // optional return
	}
	if(typeof greeting === "undefined") {
		greeting = "Hello";
	}
	console.log(greeting + " World! " + name);

	return name.length;
	console.log("End of Function"); // Doesn't output to console
}

console.log(sayHello("Andy", "Greetings"));

console.log(sayHello()); // Causes Uncaught TypeError - wants length of "undefined"...
// no longer causes error because we put in the "optional return above"