'use strict'; 

var express = require('express');
var router = express.Router();

var Product = require('../models/product');

// get multiple products
router.get('/', function(req, res, next) {
  console.log('req.query:', req.query);
  Product.find(req.query, function(err, products) {
    res.status(err ? 400 : 200).send(err || products); 
    res.render('index', { title: 'Product List', products: products})
  });
});

// get one product
router.get('/:productId', function(req, res, next) {
  Product.findById(req.params.productId, function(err, product) {
    res.status(err ? 400 : 200).send(err || product); 
  });
});

// create a new product
router.post('/', function(req, res) {
  var product = new Product(req.body); 
  product.save(function(err, savedProduct) {
    res.status(err ? 400 : 200).send(err || savedProduct); 
  });
});

// removing a product
router.delete('/:productId', function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    product.remove(function(err) {
      res.status(err ? 400 : 200).send(err || null); 
    });
  });
});

// toggle
router.put('/:productId/toggle', function(req, res) {
  Product.findById(req.params.productId, function(err, product) {   
    product.isCompleted = !product.isCompleted; 
    product.save(function(err, savedProduct) {
      res.status(err ? 400 : 200).send(err || savedProduct); 
    });
  });
});

module.exports = router;