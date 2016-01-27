'use strict'; 

$(document).ready(init); 

function init() {
  total(); 
  $('#productList').on('click', 'tr', show);
  $('#nameGo').click(nameFilter); 
  $('#categoryGo').click(categoryFilter); 
  $('.priceGo').click(priceFilter); 

  $('.sort').click(sort); 
  $('#removeAll').click(removeAll);
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


// Sorting
function sort(e){
  var num = (e.shiftKey) ? "/-1" : "/1";
  var str = $(this).attr('id').toLowerCase(); 
  var send = '/' + str + num; 
  $.get(send, function(data) {
    location.replace(send);
  });
}



function removeAll(){
  $.ajax({
    url: "/products",
    method: "DELETE"
  })
  .success(function(data) {
    location.replace('/');
  })
  .fail(function(err) {
    alert('Error. Check console.');
    console.error("Error:", err);
  });;
}
