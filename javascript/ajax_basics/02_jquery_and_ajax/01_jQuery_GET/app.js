var url = 'employees.json';
$.getJSON(url, function(response){
	var statusHTML = '<ul class="bulleted">';
	$.each(response, function(index, employee){
		if (employee.inoffice === true) {
			statusHTML += '<li class="in">';
		} else {
			statusHTML += '<li class="out">';
		}
		statusHTML += employee.name + '</li>';
	});
	statusHTML += '</ul>';
	$("#employeeList").html(statusHTML);
});

// 1) Add a second $.getJSON() method
// 2) The URL for the JSON data is... rooms.json
// 3) Finished Widget html
// 4) <ul class="rooms"><li class="full/empty">101-106</li></ul>

var url2 = 'rooms.json';
$.getJSON(url2, function(response){
	var statusHTML = '<ul class="rooms">';
	$.each(response, function(index, room){
		if (room.available === true) {
			statusHTML += '<li class="empty">';
		} else {
			statusHTML += '<li class="full">';
		}
		statusHTML += room.roomNumber + '</li>';
	});
	statusHTML += '</ul>';
	$("#roomList").html(statusHTML);
});