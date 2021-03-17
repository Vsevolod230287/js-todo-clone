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
    nuovaRiga.find('div.rowDo').append('<div>' + inputValue + '</div>');
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
