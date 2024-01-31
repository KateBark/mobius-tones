require("dotenv").config();

module.exports = {
  client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_LOCAL_DBNAME,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      charset: "utf8"
    },
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_LOCAL_DBNAME,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      charset: "utf8"
    },
  },
  // test: {
  //   client: "mysql",
  //   connection: {
  //     host: process.env.DB_HOST,
  //     database: "mobius_tones_test",
  //     user: process.env.DB_LOCAL_USER,
  //     password: process.env.DB_LOCAL_PASSWORD,
  //     charset: "utf8"
  //   },
  // },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
};