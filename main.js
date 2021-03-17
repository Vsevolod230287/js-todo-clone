// Consegna
// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.

$(document).ready(function() {

var span = $('ol li span');
span.click(function() {
$(this).hide();
$(this).siblings('input').show();
});

// al click button mi prendo il val di input
var btnAdd = $('button[name="add"]');

btnAdd.click(function() {
  var input =  $('ol li input');
  var inputValue = input.val();
  var rowTodo = $('ol li');
  rowTodo.prepend(inputValue);
  input.hide();



})





});
