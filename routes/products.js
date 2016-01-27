'use strict'; 

var express = require('express');
var router = express.Router();

var Product = require('../models/product');

// get multiple products
router.get('/', function(req, res, next) {
  console.log('req.query:', req.query);
  Product.find(req.query, function(err, products) {
    res.status(err ? 400 : 200); if (err) {res.send(err)};
    res.render('index', { title: 'Product List', products: products});
  });
});

// get add product form
router.get('/addProduct', function(req, res, next) {
  res.render('addProduct', { title: 'Add Product' });
});

// get one product
router.get('/:productId', function(req, res, next) {
  Product.findById(req.params.productId, function(err, product) {
    res.status(err ? 400 : 200); if (err) {res.send(err)};
    res.render('showpage', {product: product, id: req.params.productId}); 
  });
});

// create a new product
router.post('/', function(req, res) {
  var product = new Product(req.body); 
  product.save(function(err, savedProduct) {
    res.status(err ? 400 : 200); if (err) {res.send(err)};
  });
});

// removing a product
router.delete('/:productId', function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    product.remove(function(err) {
      res.status(err ? 400 : 200).send(err || product);
    });
  });
});

// editing a product
router.put('/:productId', function(req, res) {
  Product.findById(req.params.productId, function(err, product) {   
    product = req.body; 
    product.save(function(err, savedProduct) {
      res.status(err ? 400 : 200).send(err || savedProduct); 
    });
  });
});

module.exports = router;