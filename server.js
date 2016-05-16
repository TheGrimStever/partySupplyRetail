var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');


var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));



app.listen(5050, function () {
  console.log('Server started on port: 5050');
});
