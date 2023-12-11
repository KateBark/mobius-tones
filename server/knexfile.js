require("dotenv").config();

// module.exports = {
//   client: "mysql",
//   connection: {
//     host: "127.0.0.1",
//     user: "root",
//     password: "rootroot",
//     database: "mobius_tones",
//     charset: "utf8"
//   }
// };

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_LOCAL_DBNAME,
    user: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASSWORD,
    charset: "utf8"
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  }
};