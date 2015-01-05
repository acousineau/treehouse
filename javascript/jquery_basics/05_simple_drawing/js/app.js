//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color here
  color = $(this).css("background-color");
});

//When "New color" is pressed
$("#revealColorSelect").click(function(){
  changeColor();
  //Show color select or hide the color select
  $("#colorSelect").fadeToggle();
});

//Update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);


//When "Add color" is pressed
$("#addNewColor").click(function(){
  //Append color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select new color
  $newColor.click();
});

//On mouse events of the canvas
$canvas.mousedown(function(event){
  lastEvent = event;
  mouseDown = true;
}).mousemove(function(event){
  //Draw lines
  if (mouseDown) {  
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(event.offsetX, event.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = event;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});