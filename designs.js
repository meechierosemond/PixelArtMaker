// Select color input
// Select size input
var height;
var width;
var color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width);
})

function makeGrid(x, y) {
	$('tr').remove(); //this will remove the previous or existing grid so the user can start fresh. 


	/**This nested for loop is what tells the program how to determine which square is picked by the user so the color can be deposited.
	 * The variable x represents the height of the grid, and the variable y represents the width. 
	 */
	for (var i = 1; i <= x; i++) {
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (var j = 1; j <= y; j++) {
			$('#table' + i).append('<td></td>');
		}
	}
}
$("#pixelCanvas").on("click", "td", function() {
	let pickcolor = $("#colorPicker").val();
	$(this).css("background-color", pickcolor);
});
//removes color when the user double clicks the tile
$("#pixelCanvas").on("dblclick", "td", function() {
	$(this).css("background-color", "");
});
//resets the grid to default
function removeColor() {
	$("td").css("background-color", "");
}
