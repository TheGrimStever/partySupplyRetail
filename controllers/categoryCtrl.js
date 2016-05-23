var Category = require('../models/categoryModel.js');

module.exports = {

  Create: function (req, res, next) {
    var newCategory = new Category(req.body);
    newCategory.save(function (err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
  },

  ReadBirthday: function (req, res, next) {

  },

  Update: function (req, res, next) {
    Category.findbyId(req.params.id, function (err1, response1) {
      var productsInCategory = response1.cart;
      productsInCategory.products.push({product: req.body.id});
      Category.findbyIdAndUpdate(req.params.id, {productsInCategory: productsInCategory}),
        function (err2, response2) {
        if (err2) {
          res.status(500).json(err2);
        } else {
          res.status(200).json(response2)
        }
      }
    })
  },

  Delete: function (req, res, next) {

  }


//End of module
}
