'use strict'; 

$(document).ready(init); 

function init() {
  $('#productList').on('click', 'tr', show)
}

function show(){
  var id = $(this).data('id').replace(/\"/g, ""); 
  console.log(id);
  $.get(`/products/${id}`, function(req, res, next){
    location.replace('/products/'+id); 
  });
}