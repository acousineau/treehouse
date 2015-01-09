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