// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Permettiamo la modifica di un todo già aggiunto

var btn_aggiungi = $('button[name="add"]');
var listaCompiti = $('div.compiti-reali');


btn_aggiungi.click(function() {
  var inputValue = $('input[name="input"]').val();
  if (inputValue) {
    var nuovaRiga = $('.template .flex').clone();
    listaCompiti.append(nuovaRiga)
    nuovaRiga.find('div.rowDo').append(inputValue);
    $('input[name="input"]').val('');
  } else {
    alert("Il compito non può essere vuoto!")
  }
})


var btn_elimina = $('button[name="canc"]');

btn_elimina.click(function() {
  var checkbox_collection = $('input[type="checkbox"]');
  checkbox_collection.each(function(){
    if($(this).prop('checked')) {
    $(this).parents('.flex').remove();
    }
  })
})

// ---------------------------

var btn_modifica = $('button[name="edit"]');

btn_modifica.click(function() {
var text_da_modificare = $("input:checked").parent().siblings('.rowDo').text();
  $("input:checked").parent().siblings('.rowDo').text('');
  $("input:checked").parent().parent().parent().siblings('.aggiungi').find('input[name="input"]').val($.trim(text_da_modificare));
});

// -----------------------------------------------

var btn_modifica_completata = $('button[name="finish_edit"]');

btn_modifica_completata.click(function(){
  var inputBackChecked = $("input:checked");
  var valueToBack = $('.aggiungi input[name="input"]').val();
  inputBackChecked.append(valueToBack);
})
