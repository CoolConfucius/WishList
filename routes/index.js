var express = require('express');
var router = express.Router();

var Product = require('../models/product');

router.get('/', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { title: 'Product Wish List', products: products});
  });
});


// Filters: 
router.get('/name/:name', function(req, res, next) {
  console.log("name Filter!");
  Product.find({ name: req.params.name }, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Showing name: "+req.params.name});
  });
});

router.get('/category/:category', function(req, res, next) {
  Product.find({ category: req.params.category }, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Showing category: "+req.params.category});
  });
});

router.get('/gt/:price', function(req, res, next) {
  Product.find({ price: { $gt: req.params.price} }, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Showing prices greater than: $"+parseFloat(req.params.price).toFixed(2)});
  });
});

router.get('/lt/:price', function(req, res, next) {
  Product.find({ price: { $lt: req.params.price} }, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Showing prices less than: $"+parseFloat(req.params.price).toFixed(2)});
  });
});



// Sorting: 
router.get('/sortname/:num', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Sorting by Name"});
  }).sort( { name: parseInt(req.params.num) } );
});

router.get('/sortcategory/:num', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Sorting by Category"});
  }).sort( { category: parseInt(req.params.num) } );
});

router.get('/sortadded/:num', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Sorting by Date Added"});
  }).sort( { addedAt: parseInt(req.params.num) } );
});

router.get('/sortpurchase/:num', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { 
      title: 'Product Wish List', 
      products: products, 
      subTitle: "Sorting by Date to Purchase by"});
  }).sort( { purchaseBy: parseInt(req.params.num) } );
});





// To help with testing: 
router.post('/testing', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) {
      return res.status(400).send(err);
    };
    res.render('index', { title: 'Product Wish List', products: products});
  });
});


router.post('/test', function(req, res) {
  console.log("reqbody", req.body);
  var product = new Product({
    name: "spade", 
    description: "it's a spade", 
    price: 100.00,
    addedAt: Date.now(),
    purchaseBy: new Date("October 13, 2014 11:13:00"), 
    imageurl: "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
    category: "black"
  }); 
  product.save(function(err, savedProduct) {
    res.status(err ? 400 : 200).send(err || savedProduct);
  });
});









module.exports = router;
