
// Select color input
var color = $("#colorPicker").val();

// Select size input
var inputHeight = $("#input_height").val();
var inputWidth = $("#input_width").val();


// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
	$("#sizePicker input:button").on("click", makeGrid);
});

/**
 * @description build grid based on submitted size
 */
function makeGrid() {
	// Select size input
	inputHeight = $("#input_height").val();
	inputWidth = $("#input_width").val();

	// select grid element
	var myGrid = document.getElementById('pixel_canvas');

	// clear grid
	while (myGrid.hasChildNodes()) {
  		myGrid.removeChild(myGrid.lastChild);
	}

	//build grid
	for (var r = 0; r < inputHeight; r++) {
		var rowElement = document.createElement("tr");
		for (var c = 0; c < inputWidth; c++) {
			var cellElement = document.createElement("td");
			cellElement.className = "cell_" + r + "_" + c;
			rowElement.appendChild(cellElement);
		}
		myGrid.appendChild(rowElement);
	}
}



