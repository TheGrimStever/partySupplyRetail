var mongoose = require ('mongoose');

var productSchema = new mongoose.Schema({

  id    : {type: Number, required: true},
  title : {type: String, required: true},
  price : {type: Number, required: true},
  image : {type: String, required: true},
  description: {type: String, required: true}

});

module.exports = mongoose.model('Product', productSchema);
