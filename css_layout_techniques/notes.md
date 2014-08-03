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