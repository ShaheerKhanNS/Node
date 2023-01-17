const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST"><p>Product:</p><input type="text" name="title"><p>Size:</p><input type="number" name="size"><button type="submit">Add Product</button></form>`
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send(`<h2>Hello From Express!</h2>`);
});

app.listen(4000);
