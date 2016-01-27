'use strict'; 

$(document).ready(init); 

function init() {
  $('#productList').on('click', 'tr', show)
}

function show(){
  var index = $(this).index(); 
  $.get('/products/'+index, function(req, res, next){
    location.replace('/products/'+index); 
  });
}