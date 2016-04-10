var path = require("path");
var Sequelize = require("sequelize");

var db = new Sequelize("metabase", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: path.join(__dirname, "./metabase.sqlite3")
});

module.exports = db;