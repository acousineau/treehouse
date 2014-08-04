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

