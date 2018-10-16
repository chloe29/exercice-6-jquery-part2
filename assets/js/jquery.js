$(function() {
  $('#green').mouseover(function(){
    $('#text').css('color','green');
  });
   $('#red').mouseover(function(){
    $('#text').css('color','red');
  });
  $('#blue').mouseover(function(){
    $('#text').css('color','blue');
  });
  $('#green, #red, #blue').mouseout(function(){
    $('#text').css('color','black');
  });
});
// lorsque je survole un bouton, le texte change de couleur
// quand je sors ma souris du bouton, le texte redevient noir

// $(function() {
//   $('.color').hover(function() {
//     divColor = $(this).attr('id');
//     $('#text').css('color', divColor);
//   });
// });
// $(function() {
//   $('.color').mouseleave(function() {
//     divColor = $(this).attr('id');
//     $('#text').css('color', 'black');
//   });
// });
