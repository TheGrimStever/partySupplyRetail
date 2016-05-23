var mongoose = require('mongoose');

var productsInCategorySchema = new mongoose.Schema({

    productsInCategory: [
      {
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
      }
    ]

});

module.exports = productsInCategorySchema;
