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
  var id = $(this).data('id').replace(/\"/g, "");
  $.ajax({
    url: "/products/"+id,
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
  var id = $(this).data('id').replace(/\"/g, "");
  var name = $name.val();
  var description = $description.val();
  var price = $price.val();
  var addedAt = $addedAt.val();
  var imageurl = $imageurl.val();
  var category = $category.val();
  $.ajax({
    url: "/products/"+id,
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