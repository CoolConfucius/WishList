'use strict'; 

$(document).ready(init); 

var $name, $description, $price, $addedAt, $imageurl, $category;

function init() {
  $name = $('#name'); 
  $description = $('#description'); 
  $price = $('#price'); 
  $addedAt = $('#addedAt'); 
  $imageurl = $('#imageurl');
  $category = $('#category'); 
  $('#remove').click(remove); 
  $('#edit').click(edit); 
}

function remove(){
  var index = $(this).data('index');
  $.ajax({
    url: "/products/"+index,
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

function edit(){
  var index = $(this).data('index');
  var name = $name.val();
  var description = $description.val();
  var price = $price.val();
  var addedAt = $addedAt.val();
  var imageurl = $imageurl.val();
  var category = $category.val();
  $.ajax({
    url: "/products/"+index,
    method: "PUT",
    data: {
    name: name, description: description, price: price,
    addedAt: addedAt, imageurl: imageurl, category: category
  }
  })
  .success(function(data) {
    location.replace('/products');
  })
  .fail(function(err) {
    alert('Error. Check console.');
    console.error("Error:", err);
  });;
}