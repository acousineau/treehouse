// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0];//first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completeTaskHolder = document.getElementById('complete-tasks');//complete-tasks

// Add Tasks
var addTask = function() {
	console.log('Add task...');
	// when button is pressed
	// create a task
		//create new list item
			//input checkbox
			//label
			//input for text editing
			//button.edit
			//button.delete

		//Each element needs to be modified and appended
}

// Edit Tasks
var editTask = function() {
	console.log('Edit task...');
	// when edit button is pressed
	// if class of parent is 'editMode'
		//switch from editMode
		//make label text become input's value
	//else
		//switch to editMode
		//input value becomes the label text
	//toggle edit mode
}


// Delete Tasks
var deleteTask = function() {
	console.log('Delete task...');
	//when delete button is pressed
		//remove parent list item from the unordered list
}

// Mark task as complete
var markTaskComplete = function() {
	console.log('Complete task...');
	//when checkbox is checked
		//append the task list item to #complete-tasks
}

// Mark task as incomplete
var markTaskIncomplete = function() {
	console.log('Incomplete task...');
	//when the checkbox is unchecked
		//append the task to #incomplete-tasks
}

// Set the click handler to the addTask function
addButton.onclick = addTask;
