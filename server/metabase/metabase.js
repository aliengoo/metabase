var Item = require("./item.model");

function insertItem(item) {
  var dbItem = Item.build(item);

  return dbItem.save();
}

module.exports = {
  insertItem
};