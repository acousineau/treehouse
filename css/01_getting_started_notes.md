# Getting Started with CSS

## CSS Foundations Overview
CSS - Styles the HTML structure (colors, fonts, layout)
Handles presentation layer of a webpage

## Evolution of CSS
1996 - in HTML4
CSS in single file can be shared across many HTML files.

Currently: CSS 2.1 Official Complete Web Standard with CSS3

CSS3 adds:
* Rounded Corners
* Box Shadows
* Gradients
* Transitions and Animations
* Multi Columns
* Flexbox

## Fundamental Concepts

Cascade - defines the order in which styles are applied - determines which styles are assigned to element based on styles that have cascaded down from other styles.

3 Main Items to determine style:
* Importance - depends on origin of style sheet
	User Agent Style Sheet - Default styles for a browser
	User Style Sheet - Special style sheets for user - generally for accessibility (contrasting colors, larger text sizes)
	Author Style Sheet - Style sheet created by a developer
* Specificity - Determines what styles a browser uses - if 2 styles select the same element, the one with higher specificity will be used on the element.
* Source Order - If 2 styles have same importance and specificity - the style that appears later in the style sheet will be applied

Styles from Parent Elements will cascade down to children elements unless they are overridden.

CSS Style has 2 pieces:
* Selector - matches CSS style to an HTML element
* Declaration - contains properties and values that will change the style

```css
h1 {
	font-size: 2.5em;
}
```

## Adding CSS to a Page

```html
<!-- Inline Styles -->
<html>
<head>
	<title>Multi Columns</title>
</head>
<body style="background-color: #BADA55;">
	<h1>Cascade</h1>
	<p style="font-weight: bold;">Vivamus congue, sapien ut elementum mattis, mi magna ullamcorper turpis, vel malesuada lorem felis non felis. Cras ipsum lectus, euismod nec euismod eu, tempus at metus. Cras convallis arcu dolor. Donec libero eros, accumsan sed elementum quis, malesuada at odio. Nullam congue turpis mi. Integer vel lectus id eros porttitor rutrum ac quis neque. Nam varius malesuada enim eget aliquet. Cras et erat placerat, elementum odio sed, euismod quam. Etiam vitae libero elit</p>
	<p>Vivamus congue, sapien ut elementum mattis, mi magna ullamcorper turpis, vel malesuada lorem felis non felis. Cras ipsum lectus, euismod nec euismod eu, tempus at metus. Cras convallis arcu dolor. Donec libero eros, accumsan sed elementum quis, malesuada at odio. Nullam congue turpis mi. Integer vel lectus id eros porttitor rutrum ac quis neque. Nam varius malesuada enim eget aliquet. Cras et erat placerat, elementum odio sed, euismod quam. Etiam vitae libero elit</p>
	<h2>Types of Web Development Languages</h2>
	<ul>
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScript</li>
	</ul>
</body>
</html>
```

```html
<!-- Internal Styles -->
<html>
<head>
	<title>Multi Columns</title>
	<style type="text/css">
		h1 {
			color: white;
			background-color: #BADA55;
		}
	</style>
</head>
<body>
	<h1>Cascade</h1>
	<p>Vivamus congue, sapien ut elementum mattis, mi magna ullamcorper turpis, vel malesuada lorem felis non felis. Cras ipsum lectus, euismod nec euismod eu, tempus at metus. Cras convallis arcu dolor. Donec libero eros, accumsan sed elementum quis, malesuada at odio. Nullam congue turpis mi. Integer vel lectus id eros porttitor rutrum ac quis neque. Nam varius malesuada enim eget aliquet. Cras et erat placerat, elementum odio sed, euismod quam. Etiam vitae libero elit</p>
	<p>Vivamus congue, sapien ut elementum mattis, mi magna ullamcorper turpis, vel malesuada lorem felis non felis. Cras ipsum lectus, euismod nec euismod eu, tempus at metus. Cras convallis arcu dolor. Donec libero eros, accumsan sed elementum quis, malesuada at odio. Nullam congue turpis mi. Integer vel lectus id eros porttitor rutrum ac quis neque. Nam varius malesuada enim eget aliquet. Cras et erat placerat, elementum odio sed, euismod quam. Etiam vitae libero elit</p>
	<h2>Types of Web Development Languages</h2>
	<ul>
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScript</li>
	</ul>
</body>
</html>
```

```html
<!-- External Files -->
<html>
<head>
	<title>Multi Columns</title>
	<link rel="stylesheet" href="styles.css">
	<style>
		@import 'more-styles.css';
	</style>
</head>
<body>
	<h1>Cascade</h1>
	<p>Vivamus congue, sapien ut elementum mattis, mi magna ullamcorper turpis, vel malesuada lorem felis non felis. Cras ipsum lectus, euismod nec euismod eu, tempus at metus. Cras convallis arcu dolor. Donec libero eros, accumsan sed elementum quis, malesuada at odio. Nullam congue turpis mi. Integer vel lectus id eros porttitor rutrum ac quis neque. Nam varius malesuada enim eget aliquet. Cras et erat placerat, elementum odio sed, euismod quam. Etiam vitae libero elit</p>
	<p>Vivamus congue, sapien ut elementum mattis, mi magna ullamcorper turpis, vel malesuada lorem felis non felis. Cras ipsum lectus, euismod nec euismod eu, tempus at metus. Cras convallis arcu dolor. Donec libero eros, accumsan sed elementum quis, malesuada at odio. Nullam congue turpis mi. Integer vel lectus id eros porttitor rutrum ac quis neque. Nam varius malesuada enim eget aliquet. Cras et erat placerat, elementum odio sed, euismod quam. Etiam vitae libero elit</p>
	<h2>Types of Web Development Languages</h2>
	<ul>
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScript</li>
	</ul>
</body>
</html>
```

## Review Questions
Q: Which version of HTML introduced CSS
A: HTML 4.0

Q: Who writes and maintains CSS standards?
A: The W3C CSS Working Group

Q: In what year was CSS introduced to the web?
A: 1996

Q: What does "CSS" stand for?
A: Cascading Style Sheets

Q: What does it mean when a CSS property is inherited?
A: The property's value is copied from it's parent element.