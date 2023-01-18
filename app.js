const express = require("express");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const formRoutes = require("./routes/form");
const sucessRoutes = require("./routes/success");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(formRoutes);
app.use(sucessRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(4000);
