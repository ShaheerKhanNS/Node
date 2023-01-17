const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(`In the MiddleWare`);
  next();
});

app.use((req, res, next) => {
  console.log(`In another middleware`);
  res.send(`<h2>Hello From Express!</h2>`);
});

app.listen(4000);
