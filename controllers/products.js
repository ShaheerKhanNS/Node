const path = require("path");
const rootDir = require("../util/path");
const Product = require("../models/product");
const fs = require("fs");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  Product.fetchAll((products) => console.log(products));
};

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);

  product.save();

  res.redirect("/");
};
