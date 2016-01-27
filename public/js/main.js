'use strict'; 

$(document).ready(init); 

function init() {
  total(); 
  $('#productList').on('click', 'tr', show);
  $('#nameGo').click(nameFilter); 
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
    var add = parseFloat($(this).text().replace(/\$/, "") );
    if (add) { sum += add; };
  });
  $('#total').text('$'+sum.toFixed(2));
}


function nameFilter(){
  console.log("nameFilter");
  var name = $('#name').val(); 
  console.log(name, "name");
  $.get('/name/'+name, function(req, res, next){
    location.replace('/name/'+name);
  })
}