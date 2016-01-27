'use strict'; 

var express = require('express');
var router = express.Router();

var Product = require('../models/product');

// get multiple products
// router.get('/', function(req, res, next) {
//   // console.log('req.query:', req.query);
//   // Product.find(req.query, function(err, products) {
//   Product.find({}, function(err, products) {
//     // console.log(products, 'PRODUCS');
//     if (err) {
//       return res.status(400).send(err);
//     };
//     // res.status(err ? 400 : 200); if (err) {res.send(err)};
//     console.log("Products", products);
//     res.render('index', { title: 'Product List', products: products});
//   });
// });

// get add product form
router.get('/addProduct', function(req, res, next) {
  res.render('addProduct', { title: 'Add Product' });
});

// get one product
router.get('/:productId', function(req, res, next) {
  Product.findById(req.params.productId, function(err, product) {
    if (err) {
      return res.status(400).send(err);
    };
    console.log(product, "product");
    res.render('showpage', {product: product, id: req.params.productId}); 
  });
});

// create a new product
router.post('/', function(req, res) {
  console.log("reqbody", req.body);
  var product = new Product(req.body); 
  product.save(function(err, savedProduct) {
    res.status(err ? 400 : 200).send(err || savedProduct);
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
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.addedAt = req.body.addedAt;
    product.imageurl = req.body.imageurl;
    product.category = req.body.category;
    product.save(function(err, savedProduct) {
      res.status(err ? 400 : 200).send(err || savedProduct); 
    });
  });
});

module.exports = router;