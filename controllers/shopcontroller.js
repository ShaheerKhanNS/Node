const path = require("path");
const rootDir = require("../util/path");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  Product.fetchAll((products) => console.log(products));
};
