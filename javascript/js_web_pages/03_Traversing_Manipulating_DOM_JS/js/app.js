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

//Bind task events
var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
	//select taskListItem's children
	var checkBox = taskListItem.querySelector('input[type=checkbox]');
	var editButton = taskListItem.querySelector('button.edit');
	var deleteButton = taskListItem.querySelector('button.delete');
	
	//bind the editTask to edit button
	editButton.onclick = editTask;
	
	//bind the deleteTask to the delete button
	deleteButton.onclick = deleteTask;

	//bind TaskComplete/TaskIncomplete to checkbox
	checkBox.onchange = checkboxEventHandler;
}

// Set the click handler to the addTask function
addButton.onclick = addTask;

// Cycle over the incompleteTaskHolder ul list items
for (var i = 0, ilen = incompleteTaskHolder.children.length; i < ilen; i++) {
	//bind events to list item's children (markTaskComplete)
	bindTaskEvents(incompleteTaskHolder.children[i], markTaskComplete);
}

// Cycle over the completeTaskHolder ul list items
for (var j = 0, clen = completeTaskHolder.children.length; j < clen; j++) {
	//bind events to list item's children (markTaskIncomplete)
	console.log(completeTaskHolder);
	bindTaskEvents(completeTaskHolder.children[j], markTaskIncomplete);
}
