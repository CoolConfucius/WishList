'use strict'; 

$(document).ready(init); 

function init() {
  total(); 
  $('#productList').on('click', 'tr', show);
  $('#nameGo').click(nameFilter); 
  $('#categoryGo').click(categoryFilter); 
  $('.priceGo').click(priceFilter); 

  $('#sortName').click(sortName); 
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

// Filters 
function nameFilter(){
  var name = $('#name').val(); 
  $.get('/name/'+name, function(req, res, next){
    location.replace('/name/'+name);
  })
}

function categoryFilter(){
  var category = $('#category').val(); 
  $.get('/category/'+category, function(req, res, next){
    location.replace('/category/'+category);
  })
}

function priceFilter(){
  var price = $('#price').val(); 
  var compare = $(this).attr('id');
  $.get('/'+compare+'/'+price, function(req, res, next){
    location.replace('/'+compare+'/'+price);
  })
}


// Sorts
function sortName(e){
  var az = (e.shiftKey) ? "/sortname/-1" : "/sortname/1"
  $.get(az, function(data) {
    location.replace(az);
  });
}

// function sortDate(e){
//   var d = (e.shiftKey) ? "/todos/sort/r" : "/todos/sort/d"
//   $.get(d, function(data) {
//     showAll(); 
//   });
// }



