
// Select color input
var color = $("#colorPicker").val();

// Select size input
var input_height = $("#input_height").val();
var input_width = $("#input_width").val();


// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
	$("#sizePicker input:button").on("click", makeGrid);
});

function makeGrid() {
	input_height = $("#input_height").val();
	input_width = $("#input_width").val();
	color = $("#colorPicker").val();

	// Your code goes here!
	alert("draw grid with size of ( " + input_height + ", " + input_width + ") and intial color is " + color);
}



