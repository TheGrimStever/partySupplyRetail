module.exports = {

  // test: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './test/test.sqlite3'
  //   },
  //   migrations: {
  //     directory: __dirname + '/test/test_migrations',
  //     tableName: 'knex_migrations'
  //   },
  //   useNullAsDefault: true
  // },

  development: {
    client: 'postgresql',
    connection: {
      database: 'party_supply',
      user: 'postgres'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: '',
  //     user: '',
  //     password: ''
  //   },
  //
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
