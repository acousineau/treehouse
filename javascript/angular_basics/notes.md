# Angular

## MVC Frameworks and AngularJS

### Elements of Angular

* Directives
* Factories
* Controllers
* Filters

**Directive** - The fundamental building block of Angular. They serve as the definitions for various declarations you want to use within your Angular application.

**Factories** - Used to maintain one single instance of something. They are often used for maintaining state. Additionally, they can be used to provide an abstraction layer between your directives and your APIs.

**Controllers** - Have a lot of similar functionality to directives, but they are predominantly used just for data connections and logical restraints around them. Unlike a directive, they can't contain any extra templating or complex ordering.

**Filters** - Used to implement temporary transformations of data as it travels between the model and the view.

## Intro to Two-Way Data Binding

```ng-model``` - serves as the core for the two-way data binding

For 'read' access, instead of 'ng-model' you can use: ```{{property}}```

```ng-model``` fills the role of a portal or pipeline between the input and property itself.

Can be used on standard html inputs (text field, checkbox) but can also be used for WYSIWYG editors or data picker. Things that are more complex.

### Lists

```ng-repeat``` - accepts arrays and objects (basically a standard 'for loop')

```ng-click``` - generally, calls a scoped function that does something

```ng-list``` - A directive that transforms a character separated list into an actual data array for storage, and vice-versa

### Responding to User Input

```$scope``` - serves as pipeline between js code and view - this means that the functions that are supposed to be fired by actions on the view need to be added to the $scope object

```ng-click``` - A directive that allows you to execute an action when a user clicks on an element

### User Interactions

Fire events based on data changes instead of user input

```$watch``` - allows to specify a property, and then pass through a function everytime that value changes

```javascript

$scope.$watch('message.text', function(newValue, oldValue){
	if (newValue) {
		api.saveMessage($scope.message);
	}
});

```

## Services and Dependencies

### Dependency Injection

Each component is responsible for declaring it's own dependencies. In contrast to requiring that whatever initializes that component be responsible for knowing what the dependencies are in advance.

```javascript
angular.module('treehouseCourse', [])
	.controller('stageCtrl', function($scope, $http) {
		//do stuff
	});
```

However - there is one caveat:
Because dependency injection is dependent on names, and minification effectively replaces the names of the parameters passed to functions, Angular provides an Array Notation to allow the passing of names even when minified.

```javascript
angular.module('treehouseCourse', [])
	.controller('stageCtrl', ['$scope', '$http', function($scope, $http) {
		//do stuff
	}]);
```

There are several minification tools that will do the above for you:
* ng-annotate: https://github.com/olov/ng-annotate

### $http Service

A service for making AJAX calls and handling their responses.

A 'Promise' object is returned by the $http.get method.

```javascript
angular.module('treehouseCourse', [])
	.controller('stageCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.people = [];

		$http.get('people.json')
			.success(function(response) {
				$scope.people = response;
			})
			.error(function(err){
				alert(err);
			});

		$scope.save = function(person) {
			$http.post('people.json', person)
				.success(function(response) {
					alert('Success, person saved');
				})
				.error(function(err) {
					alert(err);
				});
		};
	}]);
```

### Writing Own Service/Factory

**Singletons and Models** - Objects that should only ever have one instance within our application

Controllers and Directives are largely stateless - meaning if route changes to display new page, or if element a directive is in is removed and then returned - any internal variables are reset

Services/Factories - if there is data that needs to persist across pages or throughout lifecycle of app - service or factory is the best place to store it.

```javascript
angular.module('treehouseCourse', [])
	.factory('People', function(){
		var people = [];
		var otherPeople = [
			{
				"name": "Jane",
				"profession": "Designer",
				"hometown": "New York, NY"
			},
			{
				"name": "Jerry",
				"profession": "Salesman",
				"hometown": "Detroit, MI"
			}
		];

		return {
			get: function() {
				return people;
			},
			add: function() {
				people.push(otherPeople.pop());
			},
			remove: function (person) {
				otherPeople.push(person);
				people = _.without(people, person);
			},
			save: function (person) {

			}
		}
	})
	.controller('stageCtrl', function ($scope, People) {

		$scope.people = People.get();

		$scope.add = People.add

		$scope.remove = People.remove

		$scope.edit = function (person) {
			$scope.editingPerson = person;
		}

		$scope.save = People.save
	});
```

### Connecting to External API

```javascript
angular.module('treehouseCourse', [])
	.factory('People', function($http){ //adding external $http dependency
		var people = [];
		var otherPeople = [
			{
				"name": "Jane",
				"profession": "Designer",
				"hometown": "New York, NY"
			},
			{
				"name": "Jerry",
				"profession": "Salesman",
				"hometown": "Detroit, MI"
			}
		];

		return {
			get: function() {	//return people from external service
				if (people.length === 0) {
					$http.get('people.json')
						.success(function (response) {
							for (var i = 0, ii = response.length; i < ii; i++) {
								people.push(response[i]);
							}
						});
				}

				return people;
			},
			add: function() {
				people.push(otherPeople.pop());
			},
			remove: function (person) {
				otherPeople.push(person);
				people.splice(people.indexOf(person), 1); //new
			},
			save: function (person) {
				$http.post('people.json', person)
					.success(function(){
						alert('Saved');
					})
					.error(function(err){
						alert(err);
					});
			}
		}
	})
	.controller('stageCtrl', function ($scope, People) {

		$scope.people = People.get();

		$scope.add = People.add

		$scope.remove = People.remove

		$scope.edit = function (person) {
			$scope.editingPerson = person;
		}

		$scope.save = People.save
	});
```

## An Introduction to Directives

### What is a Directive

From the user's perspective, if it is a collection of functionality that they interact with - it can be a directive

What makes a Directive?

* The attribute or set of attributes that we use to declare an HTML node

* The JavaScript that implements that functionality

```javascript

angular.module('treehouseCourse', [])
	.directive('contactCard', function(){
	return {
		// Can be either a string of raw HTML or can be a template.url
		// which is brought in from external template
		template: '<div class="contact-card">' +
		'<p class="name">{{contact.name}}</p>' +
		'<p class="profession">{{contact.profession}}</p>' +
		'</div>',
		
		//Tells angular to put inside designated node or replace it entirely
		replace: false,
		
		//Tells angular
		scope: {
			'contact': '=contactCard'
		},
		
		// Where all JS magic happens to add custom logic and functionality
		// to directive
		link: function ($scope, $element, $attrs) {

		}
	};
});

```

### Connective between HTML and JavaScript

#### How to label Directives
* Within HTML, use dashes, like this: **contact-card**
* Within JavaScript, use CamelCase, like this: **contactCard**

#### EACM
* E = Element
* A = Attribute
* C = Classname
* M = Comment

#### How to insert a Directive into the DOM

* By adding an **attribute** to an element, like this:

```html
<div contact-card="person"></div>
```

* By creating a new **element**, like this:

```html
<contact-card></contact-card>
```

* By giving an element a **classname**, like this:

```html
<div class="contact-card"></div>
```

* By using an HTML **comment**, like this:

```html
<!--contact-card-->
```

### Understanding ```$scope```

* Witihin controllers and directives - serves as data pipeline between JS and HTML views.
* Makes certain methods accessible for buttons and other inputs.

At the base of all Angular Apps is the ```$rootScope```

* The top level data object that will manage the lifecycle of our web app
* Responsible for firing all digest cycles when a property changes
* Another service like ```$http```

```javascript
angular.module('treehouseCourse', [])
	.controller('ScopeCtrl', function ($scope) {
		var $parent = $scope.$new();
		$parent.courseName = 'AngularJS Overview';

		var $child = $parent.$new();

		// outputs "AngularJS Overview"
		console.log($child.courseName);

		$child.courseName = 'Diving into Web Apps';

		// outputs "Diving into Web Apps"
		console.log($child.courseName);
		// still outputs "AngularJS Overview"
		console.log($parent.courseName);

		// Best practice when dealing with data that need to span
		// multiple scopes
		// Use an object instead
		$parent.course = {
			name: 'AngularJS Overview',
			id: 123
		};

		// When writing to course.name - JS will read course property from parent scope
		// and then set name property on that
		$child.course.name = 'Diving into Web App';

		// Now both output "Diving into Web Apps"
		console.log($child.course.name);
		console.log($parent.course.name);
	})
```

When creating a new **controller**, Angular will always create a new child $scope for that controller

**Directives** automatically receive the $scope object as the first argument to the link function. They can specify 1 of 3 ways to receive it
* Default - No new scope is created for directive - receives same scope instance of the parent HTML node ($rootScope, Controller, Higher level directive)

```javascript
angular.module('treehouseCourse' [])
	// New Scope - exactly the same as controllers receive
	.directive('newScope', function(){
		return {
			scope: true,
			link: function($scope, $element, $attrs) {
				// this scope prototypically inherits from the parent element
			}
		}
	})
	// Isolate Scope
	.directive('isolateScope', function() {
		return {
			scope: {
				'myBoundProperty': '=myBoundProperty'
			},
			link: function($scope, $element, $attrs) {
				// This scope inherits nothing from the parent
				// except 'myBoundProperty', which is two-way bound
			}
		}
	})
```

### Built-in Directives

```ng-model``` - The most common directive, and the key to two-way data binding

This directive should always have a 'dot', meaning it's accessing a property nested inside an object, such as:

```ng-model="person.name"```

_____________________________________

```ng-click``` - Allows us to fire actions in response to the user clicking on an element
_____________________________________

```ng-show``` and ```ng-hide``` - Allow to easily display or hide an element based on conditional expression

```ng-show="person.email"```
```ng-hide="!person.email"```
_____________________________________

```ng-repeat``` - This directive lets you iterate over a collection and display one or more elements for each instance

```html
<div ng-repeat="person in people track by person.id">
	<div contact-card="person"></div>
</div>

<p class="line-item" ng-repeat="(food, cost) in receipt">
	<span class="item">{{food}}</span>
	<span class="cost">${{cost}}</span>
</p>
```

### Using the Link Function

```html
<input datepicker datepicker-format="mm-dd-yy"/>
```

```javascript
angular.module('treehouseCourse' [])
	.directive('datepicker', function(){
		return {
			link: function($scope, $element, $attrs) {
				var isInitialized = false;

				$attrs.$observe('datepickerFormat', function(newValue) {
					if (isInitialized) {
						$element.datepicker('option', 'dateFormat', newValue);
					}

					else if (newValue) {
						$element.datepicker({
							dateFormat: newValue
						});
						isInitialized = true;
					}
				});

				/* Another example
				$element.datepicker({
					dateFormat: $attrs.datepickerFormat
				});
				*/
			}
		}
	});
```

## Extending Inputs

### Attaching a Datepicker





