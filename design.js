// Select color input

// Select size input


// When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function( event ) {
    event.preventDefault();
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();
    // call makeGrid()
    makeGrid(width, height);

  });

  /**
  * @description a function that create a grid from a submited height and Width
  *
  * @param {number} width - The width of the Grid
  * @param {number} height - The height of the Grid
  */
function makeGrid(width, height) {
$('table tr').remove();
// first loop for the width
for (var x= 1; x <= width; x++ ){
  $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
  // second loop for the height
  for (var y= 1; y <= height; y++ ){
    $('#table' + x).append('<td></td>');
  }
}
// add color to  table cell
$('td').click(function addColor() {
  var color = $('#colorPicker').val();

  if($(this).attr('style')){
    $(this).removeAttr('style')
  }else{
    $(this).attr('style','background-color:' + color)
  }

});
}
