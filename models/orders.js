var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Character = sequelize.define("order", {
  routeName: Sequelize.STRING,
  orders: Sequelize.STRING,
}, {
  freezeTableName: true
});

orders.sync();

module.exports = orders;
