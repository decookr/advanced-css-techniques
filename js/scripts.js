// Scripts for CSS Excercise - DO NOT MODIFY!

$(document).ready(function(){
  $('.wrapper').addClass('page-ready');
  $('.item').each(function(i){
    var item = $(this);
    setTimeout(function() {
      item.toggleClass('in');
    }, 150*i);
  })
});