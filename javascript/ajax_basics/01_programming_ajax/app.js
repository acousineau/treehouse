// Processing JSON Data
// 1) Create a new HTML list item
// 2) Checkout the inoffice property
// 3) Get the value for the name property; insert it inside the li tag
// 4) Close the li tag

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		var employees = JSON.parse(xhr.responseText);
		var statusHTML = '<ul class="bulleted">';
		for (var i = 0; i < employees.length; i += 1) {
			if (employees[i].inoffice === true) {
				statusHTML += '<li class="in">';
			} else {
				statusHTML += '<li class="out">'
			}
			statusHTML += employees[i].name;
			statusHTML += '</li>';
		}
		statusHTML += '</ul>';
		document.getElementById("employees-list").innerHTML = statusHTML;
	}
};
xhr.open('GET', 'data.json');
xhr.send();

//Meeting Room Problem
// 1) Repeat the same 4 steps of the AJAX Process
// 2) The URL for the JSON data has changed
// 3) Parse JSON into desired HTML format - Finished widget HTML
// 4) The complete HTML goes inside a div with the ID of "roomList"

var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
	if (xhr2.readyState === 4) {
		var rooms = JSON.parse(xhr2.responseText);
		var statusHTML = '<ul class="rooms">';
		for (var i = 0; i < rooms.length; i += 1) {
			if (rooms[i].available === true) {
				statusHTML += '<li class="empty">';
			} else {
				statusHTML += '<li class="full">'
			}
			statusHTML += rooms[i].roomNumber;
			statusHTML += '</li>';
		}
		statusHTML += '</ul>';
		document.getElementById("roomList").innerHTML = statusHTML;
	}
};
xhr2.open('GET', 'rooms.json');
xhr2.send();