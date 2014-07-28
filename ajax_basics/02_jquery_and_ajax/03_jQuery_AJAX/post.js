$('form').submit(function(event){
	event.preventDefault();
	var url = $(this).attr("action");
	var formData = $(this).serialize(); //Loops through all form data and gets names 
	// and values for the submitted data
	$.ajax(url, {
		data: formData,
		type: "POST",
		success: function(response){
			$("#signup").html("<p>Thanks for signing up!</p>");
		}
	});
});