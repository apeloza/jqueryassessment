$(document).ready(function(){
  //genNum keeps track of how many times the generate button is clicked.
var genNum = 0;

//When the generate button is clicked add one to genNum and append a new container that has two buttons.
$('.generate').on('click', function(){
genNum++;
$('body').append('<div class="btnbox"><button class="delete">Delete</button><button class="changecolor">Change Color</button>Container #:'+ genNum + '</div>');

});

//When the delete button is clicked, its parent (the container it is in) is deleted.
$('body').on('click', '.delete', function(){
  $(this).parent().remove();
});

//When the change color button is clicked, a css class is toggled on and off. It is second in the css file so that it cascades and has priority.
$('body').on('click', '.changecolor', function(){
$(this).parent().toggleClass('red');
});
});
