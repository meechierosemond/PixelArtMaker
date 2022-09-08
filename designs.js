// Select color input
// Select size input
var height;
var width;
var color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height =$('#inputHeight').val();
    width =$('#inputWidth').val();
    makeGrid(height,width);
})

function makeGrid(x,y) {
    $('tr').remove();

// Your code goes here!
for (var i=1; i <=x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (var j=1; j <=y; j++) {
    $('#table' + i).append('<td></td>');    
    }
}
}
$("#pixelCanvas").on("click", "td", function() {
    let pickcolor = $("#colorPicker").val();
    $(this).css("background-color", pickcolor);
   });
   //remove color
   $("#pixelCanvas").on("dblclick", "td", function() {
    $(this).css("background-color", "");
   });
   //reset
   function removeColor() {
    $("td").css("background-color", "");
   }