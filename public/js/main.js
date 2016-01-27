'use strict'; 

$(document).ready(init); 

function init() {
  total(); 
  $('#productList').on('click', 'tr', show);
}

function show(){
  var id = $(this).data('id').replace(/\"/g, ""); 
  console.log(id);
  $.get(`/products/${id}`, function(req, res, next){
    location.replace('/products/'+id); 
  });
}

function total(){
  var sum = 0; 
  $(".price").each(function(index){
    console.log( parseFloat( $(this).text() ));
    var add = parseFloat($(this).text() );
    if (add) { sum += add; };
    
  });
  $('#total').text(sum);
}