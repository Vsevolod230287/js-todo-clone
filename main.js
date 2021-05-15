// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Permettiamo la modifica di un todo già aggiunto

$('button[name=add]').click(function() {
  aggiunta();
})

$('input').keypress(function(e) {
  if (e.which == 13) {
    aggiunta();
  }
});


function aggiunta() {

  var inputTxt = $('input').val();
  if (inputTxt == '') {
    alert('input non puo essere vuoto')
  } else {
    var templateClone = $('.template .flex').clone();
    var appendToCLone = templateClone.children('.rowDo').text(inputTxt);
    $('.compiti-reali').append(templateClone);
    $('input').val('');
  }

}


var btn_elimina = $('button[name="canc"]');

btn_elimina.click(function() {
  var checkbox_collection = $('input[type="checkbox"]');
  checkbox_collection.each(function() {
    if ($(this).prop('checked')) {
      $(this).parents('.flex').remove();
    }
  })
})

// ---------------------------

var btn_modifica = $('button[name="edit"]');

btn_modifica.click(function() {
  var text_da_modificare = $('input[type="radio"]:checked').parent().siblings('.rowDo').text();
  $('input[type="radio"]:checked').parent().siblings('.rowDo').text('');
  // $("input:checked").parent().parent().parent().siblings('.aggiungi').find('input[name="input"]').val($.trim(text_da_modificare));
  $('input[type="text"]').val(text_da_modificare);
});

// -----------------------------------------------

var btn_modifica_completata = $('button[name="finish_edit"]');

btn_modifica_completata.click(function() {
  var radioChecked = $('input[type="radio"]:checked');
  var inputTxt = $('input').val();
  var rowDoChecked = radioChecked.parent().siblings('.rowDo');
  rowDoChecked.text(inputTxt);

})
