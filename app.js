// Select Color Input
// Select Size Input
let height, width, color;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) { 
    event.preventDefault(); 
    height = $('#inputHeight').val();
    width  = $('#inputWidth').val(); makeGrid(height, width);
 });

 function makeGrid(x, y) { 
     $('tr').remove(); 
     for(let i = 1; i <= x; i++) { 
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); 
        for(let j = 1; j <= y; j++) { 
            $('#table' + i).append('<td></td>');
        } 
    }
   $('td').click(function (e) {
        let color = $('#colorPicker').val();
        $(e.currentTarget).css('background-color', color);
    });
 }

 // Add color to cell

