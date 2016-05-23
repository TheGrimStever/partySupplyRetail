var mongoose = require('mongoose');
var productsInCategorySchema = require('./productsInCategorySchema.js');

var categorySchema = new mongoose.Schema({

    category: {type: String, unique: true},
    productsInCategory: productsInCategorySchema

});

module.exports = mongoose.model('Category', categorySchema);
