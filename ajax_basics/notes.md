# AJAX
## XMLHttpRequest Object (XHR)

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

### Simple AJAX Example

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

## GET and POST

### Query Parameters on URL - for GET requests
http://website.com/employees.php?lastName=Cousineau

lastName is a name, and Cousineau is the value - forming a pair

Can be linked together with "&"
http://website.com/employees.php?firstName=Andy&lastName=Cousineau

### POST
Must specify header and body for POST

1) Send more than 2083 characters
2) Sending data to store in DB

POST sends its data in the "body" of the request. GET sends data in the URL

## AJAX Response Formats

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

## AJAX Security Limitations


