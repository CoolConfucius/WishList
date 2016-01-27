'use strict';

var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: { type: String}, 
  description: { type: String}, 
  price: { type: Number }, 
  addedAt: { type: Date, default: Date.now() },
  imageUrl: { type: String },
  category: { type: String },
  hasPurchased: { type: Boolean , default: false }
});

var Product = mongoose.model('Product', productSchema); 

module.exports = Product; 