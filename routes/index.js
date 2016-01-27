var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res, next) {
  // console.log('req.query:', req.query);
  Product.find({}, function(err, products) {
  // Product.find(req.query, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { title: 'Product Wish List', products: products});
  }).sort( { addedAt: 1 } );
});

// Filters: 
router.get('/name/:name', function(req, res, next) {
  console.log("name Filter!");
  Product.find({ name: req.params.name }, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { title: 'Product Wish List', products: products});
  });
});


router.get('/category/:category', function(req, res, next) {
  Product.find({ category: req.params.category }, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { title: 'Product Wish List', products: products});
  });
});


// Sorts: 
router.get('/sortname/:num', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { title: 'Product Wish List', products: products});
  }).sort( { name: parseInt(req.params.num) } );
});


module.exports = router;
