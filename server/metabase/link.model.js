var Sequelize = require("sequelize");
var db = require("../db/db");

var Link = db.define("link", {
  parentNamespace: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_pnk"
  },
  parentKey: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_pnk"
  },
  childNamespace: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_cnk"
  },
  childKey: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_cnk"
  }
}, {
  indexes: [
    {
      name: "index_link_c",
      fields: ["c"]
    },
    {
      name: "index_link_u",
      fields: ["u"]
    }
  ]
});

module.exports = Link;