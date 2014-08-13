# CSS Layout Techniques

## Display Modes

### Reset CSS

Depending on the size of the project will determine what Reset CSS you would like to use.

Examples:
Normalize CSS
Reset CSS
Many frameworks come with their own styles to override the default styles of a browsers

### Block vs. Inline Elements

Margin Collapsing Issue - Margins on children overriding margins of parents. This happens
because there is no BORDER, PADDING, CONTENT - anything to separate the top margin of our block
level body element with the top margin of its first child. BODY - MAIN-WRAPPER - so if there
is nothing to separate those top-margins, they COLLAPSE!

To fix - we can either add BORDER or PADDING to an element - in this case... the MAIN-HEADER

Inline Elements:
Set the navigation li's and logo's style to display inline - however the issue with this is
you can't give them width or a top/bottom margin.

There is also unwanted whitespace in between elements because line breaks and tabs are rendered
as spaces for inline elements. To rectify - add a NEGATIVE MARGIN

There is also an issue when the viewport size in narrower - to rectify give header a whitespace value NOWRAP...
However... this causes the elements to extend beyond their container

### Inline-Block Formatting

Allows to add width, top/bottom margin, and on smaller viewports items collapse naturally

But... there is still that white-space issue.

There is also an issue with the height of elements. Height of header increased - the reason is 
the logo is contained in an H1 Element - headings by default have a top and bottom margin that
NORMALIZE does NOT reset.

Fix Issue with Anchor Tag not have full area of parent element:

DISPLAY VALUES ARE NOT INHERITED BY THEIR CHILDREN!!!

So you simply add display block to the anchors and take padding from their parent elements
and add it to them.

### Table Display

```css
.main-header {
    padding: 20px;
    display: table;
    width: 100%;
}

.main-logo,
.main-nav {
    display: table-cell;
    vertical-align: middle;
}
```

Be careful - as adding width and padding can make elements larger than normal - to fix use BOX-SIZING!

```css
* {
    box-sizing: border-box;
}
```

This allows an element to take padding and margin into account when calculating width - pretty cool

Margins do NOT work on elements displayed as TABLE CELLS - using PADDING instead

ISSUE: When using tables for layout - the height will adjust to elements in smaller viewports which
isn't something you necessarily want - to help with this....

```css
/* Media Queries
================================ */

@media (max-width: 768px) {
    .main-logo,
    .main-nav,
    .main-nav li {
        display: block;
        width: initial;
        margin: initial;
    }
    
    .main-nav {
        padding-left: initial;
    }
    
    .main-nav li {
        margin-top: 15px;
    }
}
```

### Column Layout with Inline-Block

```css
/* Column Layout
================================ */

.col {
    display: inline-block;
    padding: 20px;
    margin-right: -5px; /* This value is dependent on font-size */
    vertical-align: top; /* Trick for when using inline-block column layout */
}

.primary-content {
    width: 60%;
}

.secondary-content {
    width: 40%;
}
```

Keep in mind that even with the above widths - inline elements will experience added whitespace and that needs
to be fixed with negative margin.

There are also some issues with the page now that we want the entire page to take up the full height of the browser window

```css

/* Select all main container divs */

html,
body,
.main-wrapper,
.col {
    height: 100%; /* Calculated based on parent element */
}
```

## Float Layout

Floats come from print design. Images are layed out on the page where the text is wrapped
around them.

### Horizontal Menu

Floats are technically block level elements but behave as inline elements. Floats exist
outside the normal document flow.

Issues you may encounter is parent elements appearing collapsed unless they are floated along with their
children.

### The Float Clearfix

Forces the parent element to clear it's children - that means... that the elements will never collapse

Now... there is an issue with the nav links wrapping around the logo when the viewport is
adjusted...

### Floating Columns and Images

Now let's float our columns and give a width of 30% - an issue arises! The footer content is intermingled
with our columns - however, we've already created a fix for this with the group class. Simply add it to the
parent element.

We can even change around the content order and the styles will not "break"

Adding images and floating left to a side will allow text to wrap around them.

MUST ADD MARGINS to IMAGE because if added to paragraph... because the image is out of the normal
document flow... it will ignore the space between the paragraph and the image (it will actually
just add margin to left side of paragraph parent div)

### Mobile First Layout Perspective

The idea here is to build the CSS up for larger browser sizes instead of the other way around.

Currently, the site is set up to load all the CSS and then change it when the device width narrows. This
is actually rather inefficient.

## Positioning Schemes

### Relative Positioning

Positioning offsets that are set in CSS provide information to position an element RELATIVE to
its original position.

Any offset moves the element in the direction opposite of what is defined:

```css
.element {
    position: relative;
    top: 20px; /* moves element down 20px */
    bottom: 20px; /* moves element up 20px */
    left: 20px; /* moves element right 20px */
    right: 20px; /* moves element left 20px */
}
```

### Absolute Positioning

Position Relative serves as a context for an Absolutely positioned element. So the absolutely
positioned element will climb up the DOM tree to find the parent element with a relative position and
that is what it will base it's position from. Otherwise, if no relatively positioned elements are found,
it uses the browser window.

One issue with absolutely positioning elements is that there must be a HEIGHT on the parent element. 
Otherwise, the elements will collapse and not be visible.

### Fixed Positioning

Fixed positioning means that an element will stay fixed within the browser window even as
the page scrolls.

In the case of creating sticky headers - simply position the header fixed with a z-index of something greater
than any other element on the page. This will allow, as you scroll, the content to flow underneath the header.

Fixed positioning takes elements out of the normal document flow. Therefore, padding-top should be added to the body
that is equal to the height of the header. 

### Absolute Centering

```css
.icon {
	background-color: #39ADD1;
	margin-top: 34px;
	height: 180px;
	border-radius: 5px;
	position: relative;
}

.icon::after {
	content: "";
	display: block;
	width: 150px;
	height: 90px;
	background: url("../img/icon.png") no-repeat;
	background-size: 100%;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
}
```

## Flexbox Layout

### Building Navigation with Flexbox

First thing in creating a layout with flexbox is a Flex Formatting Context needs to 
be created. 

```css
.main-nav {
    display: flex;
}
```
Next step is to style child elements appropriately
```css
.main-nav li {
    align-self: center;
    flex-grow: 1; /* Represents the ratio of free space we want the items to take up */
    margin-right 8px;
    margin-left: 8px;
}
.main-logo:first-child {
    margin-right: auto;
}
```

To work in Safari and other browsers - vendor prefixes are needed..

```css
	.main-nav {
	    display: -webkit-flex;
		display: flex;
	}
	.main-nav li {
	    -webkit-align-self: center;
		align-self: center;
		-webkit-flex-grow: 1;
		flex-grow: 1;
	}
	.main-logo:first-child {
	    -webkit-flex-grow: 1.5;
		flex-grow: 1.5;
	}
```

