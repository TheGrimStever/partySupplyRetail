var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
// var config = require('./config.js');


var bookshelf = require('./bookshelf.js');
var Promise = require('bluebird');

var testController = require('./server/controllers/test_controller.js');
// var pg = require('pg');
// var db = require('./db.js')


var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


//Endpoints
//ex:  GET('/api/category/:id')
app.get('/api/:id', testController.show);


//for web traffic, default should be port: 80
app.listen(5050, function () {
  console.log('Server started on port: 5050');
});
