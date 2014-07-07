var button = document.getElementById('action');
var input = document.getElementById('text_field');

var number = 0
/*
button.onclick = function(){
	console.log('clicked');
} */

button.onclick = function(){
	console.log('Other click listener');
}

button.addEventListener('click', function(){
	number = number + 1;
	console.log('clicked');
	input.setAttribute('value', 'Hello World!' + ' ' + number);
});
