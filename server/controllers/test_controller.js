// For testing in Postman, make sure routes work

var Bookshelf = require('../../bookshelf.js');
var test = require('../../models/testData.js');

module.exports = {
  show: function (req, res, next) {
    var id = req.params.id;

    res.status(200).json(test[id]);
  }
}
