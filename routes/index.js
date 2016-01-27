var express = require('express');
var router = express.Router();

var Product = require('../models/product');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.redirect('/products');
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(req, res, next) {
//   res.redirect('/products');
//   // Product.find({}, function(err, products) {
//   //   // console.log(products, 'PRODUCS');
//   //   res.status(err ? 400 : 200); if (err) {res.send(err)};
//   //   res.render('index', { title: 'Product List', products: products});
//   // });
// });


router.get('/', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    console.log("Products", products);
    res.render('index', { title: 'Product List', products: products});
  });
});
module.exports = router;
