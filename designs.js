
// event when size is submitted by the user, call makeGrid()
$("#sizePicker input:button").on("click", makeGrid);

/**
 * @description build grid based on submitted size
 */
function makeGrid() {
	// Select size input
	var inputHeight = $("#input_height").val();
	var inputWidth = $("#input_width").val();

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

// event when cell clicked to change its background color
$("#pixel_canvas").on("click", "td", changeCellBackgroundColor);
$("#pixel_canvas").on("mousedown", "td", changeCellBackgroundColor);

/**
 * @description change cell background color
 */
function changeCellBackgroundColor() {
	// Select color input
	var color = $("#colorPicker").val();

	//Changing selected cell background color
	$(this).css("background-color" , color);
}

// event when cell double clicked to clear its background color
$("#pixel_canvas").on("dblclick", "td", clearCellBackgroundColor);

/**
 * @description clear cell background color
 */
function clearCellBackgroundColor() {

	//Changing selected cell background color
	$(this).css("background-color", "white");
}


