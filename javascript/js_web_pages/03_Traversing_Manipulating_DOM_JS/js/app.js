// Problem: User interaction doesn't provide desired results
// Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0];//first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks
var completeTaskHolder = document.getElementById('complete-tasks');//complete-tasks

// New Task List Item
var createNewTaskElement = function(taskString) {

	// Make sure value was entered into input
	if (taskString) {
		//Create List Item
		var listItem = document.createElement('li');
		
		//input checkbox
		var checkBox = document.createElement('input'); //checkbox
		
		//label
		var label = document.createElement('label');

		//input for text editing
		var editInput = document.createElement('input'); //text field

		//button.edit
		var editButton = document.createElement('button'); //button
		
		//button.delete
		var deleteButton = document.createElement('button'); //button

		//Each element needs modifying
		checkBox.type = 'checkbox';
		editInput.type = 'text';

		editButton.innerText = "Edit";
		editButton.className = "edit";

		deleteButton.innerText = "Delete";
		deleteButton.className = "delete";

		label.innerText = taskString;

		//Each element needs appending
		listItem.appendChild(checkBox);
		listItem.appendChild(label);
		listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);

		return listItem;
	}

	else {
		throw new Error('Must enter ToDo item to add it to the list');
	}
}

// Add Tasks
var addTask = function() {
	console.log("Add task...");
	//create new list item
	var listItem = createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, markTaskComplete);

	//Change task input value to be ''
	taskInput.value = '';
}

// Edit Tasks
var editTask = function() {
	console.log('Edit task...');

	var listItem = this.parentNode;

	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector('label');
	var editButton = listItem.querySelector('button.edit')

	var containsClass = listItem.classList.contains('editMode');

	// if class of parent is 'editMode'
	if (containsClass) {
		//switch from editMode
		//make label text become input's value
		label.innerText = editInput.value;

		//change inner text of edit button to 'Save'
		editButton.innerText = 'Edit';
	}
	//else
	else {
		//switch to editMode
		//input value becomes the label text
		editInput.value = label.innerText;

		//change inner text of edit button to 'Save'
		editButton.innerText = 'Save';
	}

	//toggle edit mode on the list item
	listItem.classList.toggle('editMode');
}


// Delete Tasks
var deleteTask = function() {
	console.log('Delete task...');
	
	var listItem = this.parentNode;
	var ul = listItem.parentNode

	//Remove parent list item from the unordered list
	ul.removeChild(listItem);
}

// Mark task as complete
var markTaskComplete = function() {
	console.log('Complete task...');
	//Append the task list item to #complete-tasks
	var listItem = this.parentNode
	completeTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, markTaskIncomplete);
}

// Mark task as incomplete
var markTaskIncomplete = function() {
	console.log('Incomplete task...');
	//Append the task list item to #incomplete-tasks
	var listItem = this.parentNode
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, markTaskComplete);
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

// var ajaxRequest = function(){
// 	console.log("AJAX Request");
// }

// Set the click handler to the addTask function
addButton.addEventListener('click', addTask);
// addButton.addEventListener('click', ajaxRequest);

// addButton.onclick = ajaxRequest;

// Cycle over the incompleteTaskHolder ul list items
for (var i = 0, ilen = incompleteTaskHolder.children.length; i < ilen; i++) {
	//bind events to list item's children (markTaskComplete)
	bindTaskEvents(incompleteTaskHolder.children[i], markTaskComplete);
}

// Cycle over the completeTaskHolder ul list items
for (var j = 0, clen = completeTaskHolder.children.length; j < clen; j++) {
	//bind events to list item's children (markTaskIncomplete)
	bindTaskEvents(completeTaskHolder.children[j], markTaskIncomplete);
}
