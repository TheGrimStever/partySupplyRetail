var mongoose = require ('mongoose');

var productSchema = new mongoose.Schema({

  id    : {type: Number, required: true},
  title : {type: String, required: true},
  price : {type: Number, required: true},
  image : {type: String, required: true},
  description: {type: String, required: true},
  qty   : {type: Number, default: 0}

});

module.exports = mongoose.model('Product', productSchema);
