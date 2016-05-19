//This seems redundent and unused, as the Bookshelf var in Server.js is
// referenceing bookshelf.js, which does the same thing below.

var config      = require('./knexfile.js');
var env         = 'development';
var knex        = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);
