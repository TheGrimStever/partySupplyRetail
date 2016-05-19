//the exports.up and exports.down are necessary for Bookshelf, or Knex. Still
// testing.

exports.up = function (knex, Promise) {
    return knex.schema.createTable('test', function (table) {
      table.increments('id').primary();
      table.string('name').unique();
    })
};

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('test');
};
