var Product = require('../models/productModel.js');

module.exports = {

  Create: function (req, res, next) {
    var newProduct = new Product(req.body);
    newProduct.save(function (err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  Read: function (req, res, next) {
    Product.find().exec(function (err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  ReadById: function (req, res, next) {
    Product.findById(req.params.id, req.body, function (err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  Update: function (req, res, next) {

  },

  Delete: function (req, res, next) {

  }

//End of module
}
