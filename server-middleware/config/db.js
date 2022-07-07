const mongoose = require("mongoose");
// can be called from another file/module, like: config.database
module.exports = {
  database: "mongodb://localhost:27017/CheckoutShop",
  secret: "password",
};