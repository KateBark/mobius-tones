require("dotenv").config();

module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "rootroot",
    // Need to fill in/update database name
    database: "capstone",
    charset: "utf8"
  }
};