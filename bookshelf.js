//For some reason, the commented out section was throwing a TYPE_ERROR of client
// undefined, but the new var knex works fine, at least it seems so.

var config    = require('./knexfile.js');
// var knex      = require('knex')(config[process.env.NODE_ENV]);
var env         = 'development';
var knex        = require('knex')(config[env]);

var Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');

module.exports = Bookshelf;
