# AJAX

## AJAX Concepts

Process of using JS to send request to web server, receive response back, and do something with that response.

A: Asynchronous
J: JavaScript
A: and
X: XML

### How AJAX Works
1) Create an XMLHttp Request object.
2) Create a callback function.
3) Open a request
4) Send the request

#### Simple AJAX Example

```javascript
// Step 1) Create an XMLHttp Request object.
var xhr = new XMLHttpRequest();

// Step 2) Create a callback function.
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) { //implies the response is finished being sent back
		document.getElementById("ajax").innerHTML = xhr.responseText;
	}
};

//Step 3) Open the request
xhr.open('GET', 'sample.html');

//Step 4) Sending the request
function sendAJAX() {
	xhr.send();
	document.getElementById("load").style.display = "none";
}
```

### GET and POST

#### Query Parameters on URL - for GET requests
http://website.com/employees.php?lastName=Cousineau

lastName is a name, and Cousineau is the value - forming a pair

Can be linked together with "&"
http://website.com/employees.php?firstName=Andy&lastName=Cousineau

#### POST
Must specify header and body for POST

1) Send more than 2083 characters
2) Sending data to store in DB

POST sends its data in the "body" of the request. GET sends data in the URL

### AJAX Response Formats

XML - extensible markup language

```xml
<contacts>
	<contact>
		<name>Andy</name>
		<phone>603-265-1222</phone>
	</contact>
	<contact>
		<name>Rick</name>
		<phone>617-123-4567</phone>
	</contact>
</contacts>
```

JSON - JS Object Notation

### AJAX Security Limitations

Limited by a web browser's "same origin policy"

Controls how JS can access content from a server

Can't use it to access another web server - only works with content on your web server(s)

Security:
Same Server - OK
Another Server - Error
Changing protocols - Error
Changing port numbers - Error
Switching hosts - Error

Way to go around these issues - say by pulling in content from an API (twitter / flickr)

1) Web Proxy - Have your server talk with another server via APIs
2) JSONP - JSON with Padding - relies on ability to link to JS files across domains - using CDNs
3) CORS - Cross Origin Resource Sharing - allows server to accept requests from other domains

4) Does NOT work unless it's working through a web server

## Programming AJAX

### AJAX Callbacks

readyState has 5 values:
0 - XHR object created
1 - 
2 - 
3 - Response is coming
4 - Response from server is fully sent and returned

One can also check the status property

```javascript
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) { //implies the response is finished being sent back
		if (xhr.status === 200){
			// 200 means OK
			//404 implies file not found
			//401 implies file not accessible due to permissions
			//500 implies server experienced some kind of error
			document.getElementById("ajax").innerHTML = xhr.responseText;
		} else if (xhr.status === 404) {
			// do something if file not found
		} else if (xhr.status === 500) {
			//do something if server error
		}
	}
};

//Also a property called statusText that's available based of the request
var statusText = xhr.statusText
```

### Introducing JSON

2 Ways to format JSON: Arrays, and Objects

```javascript
//Array
[ 'string', true, 42, [1, 2, 3] ]

//Object - VALID JSON REQUIRES DOUBLE QUOTES
{
	"name": "Andy",
	"phone": "603-265-1222"
}
```

### Parsing JSON Data

See examples in 01_programming_ajax folder

## jQuery and AJAX

All 4 methods described above can be all done with jQuery ```load()``` method

```javascript
$("#footer").load('footer.html');
```

### jQuery and AJAX Shorthand Methods

```javascript
var url = '../employees.php';
var data = {
	firstName : "Andy",
	lastName  : "Cousineau"
};
var callback = function(response){
	//do something with the response
};

$.get(url, data, callback);

//OR....
$.get('../employees.php', {firstName : "Andy", lastName  : "Cousineau"}, function(r){
		//do something with the response
	});
```

Data - added to url as query string

Callback - don't need to check for readyState or status

Convenient "for loop" for arrays and objects

```javascript
$.each(array_or_object, callback);

$.each(array, function(index, value){

});
```

### Posting Data with jQuery

Similar method to $.get();

To POST it's $.post(url, data, callback);

```javascript
var url = "http://website.com/posts/"; //pointing to the server side program that processes the form data - insert into a DB
var data = {
	firstName: "Andy";
	lastName: "Cousineau"
}; //Data sent with the post
var callback = function(){}; //Callback to handle response from the server

$.post(url, data, callback);
```

serialize() - Creates a text string with standard URL-encoded notation of fields in an HTML form.

### The jQuery AJAX Method

```javascript
$.ajax(url, settings);
```

### Handling Errors

$.get().fail(); - fail gives tells the browser what to do if the request fails for whatever reason

```javascript
$.get('missing.html', function(data){
	$("#myDiv").html(data);
}).fail(function(jqXHR){
	alert(jqXHR.status);
	alert(jqXHR.statusText);
	$("#myDiv").html("<p>Sorry! " + jqXHR.statusText + " error.</p>");
});
```












