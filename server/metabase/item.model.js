var Sequelize = require("sequelize");
var db = require("../db/db");

var Item = db.define("item", {
  namespace: {
    type: Sequelize.STRING,
    primaryKey: true,
    comment: "namespace (pk)"
  },
  key: {
    type: Sequelize.STRING,
    primaryKey: true,
    comment: "key (pk)"
  },
  data: {
    type: Sequelize.STRING,
    comment: "data"
  },
  contentType: {
    type: Sequelize.STRING,
    comment: "Content/MIME type"
  }
});

module.exports = Item;
