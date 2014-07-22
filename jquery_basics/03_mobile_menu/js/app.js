// Problem: It looks gross in smaller browser widths and small devices
// Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to #menu
var $select = $('<select></select>');
$("#menu").append($select);
//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $('<option></option>');
  //option's text is the text of link
  $option.text($anchor.text());
  //option's value is the href
  $option.val($anchor.attr("href"));
  //append option to select
  $select.append($option);
});
//Create a button
$button = $('<button>Go</button>');
$("#menu").append($button);
//Bind click to button
$button.click(function(){
  //Go to select's location
  window.location = $select.val();
});
//Modify CSS to hide links on small widths and show button and select
  //Also hides select and button on larger widths and show links
//Deal with selected options depending on current page


//LEFT OF AT PERFORM PART 3!!






