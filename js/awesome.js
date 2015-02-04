
// Make the magnifine glass reveale the search bar

$('.toggleReveal').hide();

$('.fa-search').click(function(){
  
  $('.toggleReveal').fadeIn('slow');
  $(this).fadeOut(500);
});

//Make a functional max tracker


//Get the info entered in the number input field
//Store to a variable
//Create a p.lead to append it to under the "total" field
//Store those variables in a chart so people can see a progression of what they are doing.