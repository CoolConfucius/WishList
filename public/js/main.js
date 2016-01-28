'use strict'; 

$(document).ready(init); 

var sorted = {
  name: false, 
  price: false,
  category: false, 
  purchase: false,
  added: false
}

function init() {
  total(); 
  $('#productList').on('click', 'tr', show);
  $('#nameGo').click(nameFilter); 
  $('#categoryGo').click(categoryFilter); 
  $('.priceGo').click(priceFilter); 

  $('.sort').click(sort); 
  $('#removeAll').click(removeAll);

  $('.test').click(test); 
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
  if (!name) { return; };
  $.get('/name/'+name, function(req, res, next){
    location.replace('/name/'+name);
  })
}

function categoryFilter(){
  var category = $('#category').val(); 
  if (!category) { return; };
  $.get('/category/'+category, function(req, res, next){
    location.replace('/category/'+category);
  })
}

function priceFilter(){
  var price = $('#price').val(); 
  if (!price) { return; };
  var compare = $(this).attr('id');
  $.get('/'+compare+'/'+price, function(req, res, next){
    location.replace('/'+compare+'/'+price);
  })
}


// Sorting
function sort(e){
  // var num = (e.shiftKey) ? "/-1" : "/1";
  var num = "/1"; 
  var str = $(this).attr('id').toLowerCase(); 
  switch(str) {
    case 'sortname':
      num = (sorted.name) ? "/-1" : "/1"; 
      break;
    case 'sortprice':
      num = (sorted.price) ? "/-1" : "/1"; 
      break;
    case 'sortcategory':
      num = (sorted.category) ? "/-1" : "/1"; 
      break;
    case 'sortpurchase':
      num = (sorted.purchase) ? "/-1" : "/1"; 
      break;
    case 'sortadded':
      num = (sorted.added) ? "/-1" : "/1"; 
      break;
  }
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














// testing 
function test(){
  var product = {}; 
  if ($(this).hasClass('spade')) {
    product = {
      name: "spade", 
      description: "it's a spade", 
      price: 100.00,
      addedAt: Date.now(),
      purchaseBy: new Date("November 22, 2014 11:13:00"), 
      imageurl: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
      category: "dark"
    }
  };
  if ($(this).hasClass('heart')) {
    product = {
      name: "heart", 
      description: "it's a heart", 
      price: 200.00,
      addedAt: Date.now(),
      purchaseBy: new Date("December 25, 2014 11:13:00"), 
      imageurl: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
      category: "blush"
    }
  };
  if ($(this).hasClass('club')) {
    product = {
      name: "club", 
      description: "it's a club", 
      price: 0.01,
      addedAt: Date.now(),
      purchaseBy: new Date("October 20, 2014 11:13:00"), 
      imageurl: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
      category: "dark"
    }
  };
  if ($(this).hasClass('diamond')) {
    product = {
      name: "diamond", 
      description: "it's a diamond", 
      price: 0.10,
      addedAt: Date.now(),
      purchaseBy: new Date("March 13, 2014 11:13:00"), 
      imageurl: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
      category: "blush"
    }
  };

  $.post('/test', product)
  .success(function(data) {
    location.replace('/');
  })
  .fail(function(err) {
    alert('Error. Check console.');
    console.error("Error:", err);
  });
}
