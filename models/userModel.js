var mongoose = require('mongoose');
var cartSchema = require('./cartSchema.js');

var userSchema = new mongoose.Schema({

    email: {type: String, unique: true},
    cart: cartSchema;

});

module.exports = mongoose.model('User', userSchema);
