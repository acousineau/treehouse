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















