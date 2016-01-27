'use strict';

var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: { type: String}, 
  description: { type: String}, 
  price: { type: Number }, 
  addedAt: { type: Date, default: Date.now() },
  purchaseBy: { type: Date },
  imageurl: { type: String },
  category: { type: String }
});

var Product = mongoose.model('Product', productSchema); 

module.exports = Product; 