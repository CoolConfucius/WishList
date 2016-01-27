'use strict'; 

$(document).ready(init); 

var $name, $description, $price, $addedAt, $imageurl, $category, $add;

function init() {
  $name = $('#name'); 
  $description = $('#description'); 
  $price = $('#price'); 
  $addedAt = $('#addedAt'); 
  $imageurl = $('#imageurl'); 
  $category = $('#category'); 
  $add = $('#add'); 

  $add.click(addProduct); 
}

function addProduct() {
  console.log("addProduct");
  var name = $name.val();
  var description = $description.val();
  var price = $price.val();
  var addedAt = $addedAt.val();
  var imageurl = $imageurl.val();
  var category = $category.val();
  $.post('/products', {
    name: name, description: description, price: price,
    addedAt: addedAt, imageurl: imageurl, category: category
  })
  .success(function(data) {
    location.replace('/products');
  })
  .fail(function(err) {
    alert('Error. Check console.');
    console.error("Error:", err);
  });
}