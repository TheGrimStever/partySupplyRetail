var express     = require('express');
var bodyParser  = require('body-parser');
var session     = require('express-session');
var config      = require('./config.json');

// var bookshelf = require('./bookshelf.js');
// var Promise = require('bluebird');

// var testController = require('./server/controllers/test_controller.js');
// var pg = require('pg');
// var db = require('./db.js')

var mongoose    = require('mongoose');

var productCtrl = require('./controllers/productCtrl.js');



var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));


//Endpoints
//ex:  GET('/api/category/:id')
//products
// app.get('/api/products/:id', testController.show);
app.post('/api/products', productCtrl.Create);
app.get('/api/products', productCtrl.Read);

//user
// app.post('/api/user/addtocart/:id', userCtrl.AddProductToCart);//etc, etc



//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/party-supply');
mongoose.connection.once('open', function () {
  console.log('Connected to mongodb\n');
});

//for web traffic, default should be port: 80
app.listen(5050, function () {
  console.log('Server started on port: 5050');
});
