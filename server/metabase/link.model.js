var Sequelize = require("sequelize");
var db = require("../db/db");

var Link = db.define("link", {
  pn: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_pnk"
  },
  pk: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_pnk"
  },
  cn: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_cnk"
  },
  ck: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "index_link_cnk"
  },
  c: {
    type: Sequelize.DATE,
    allowNull: false,
    comment: "created",
    defaultValue: Sequelize.NOW
  },
  u: {
    type: Sequelize.DATE,
    allowNull: false,
    comment: "updated"
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