var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({

    prdoucts: [
      {
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        qty    : {type: Number, required: true, min: 1}
      }
    ]

});

module.exports = cartSchema;
