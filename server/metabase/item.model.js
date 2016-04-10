var Sequelize = require("sequelize");
var db = require("../db/db");

var Item = db.define("item", {
  n: {
    type: Sequelize.STRING,
    primaryKey: true,
    comment: "namespace (pk)"
  },
  k: {
    type: Sequelize.STRING,
    primaryKey: true,
    comment: "key (pk)"
  },
  d: {
    type: Sequelize.STRING,
    comment: "data"
  },
  c: {
    type: Sequelize.DATE,
    allowNull: false,
    comment: "created",
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true
    }
  },
  u: {
    type: Sequelize.DATE,
    allowNull: false,
    comment: "updated",
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true
    }
  }
});

module.exports = Item;
