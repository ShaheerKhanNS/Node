const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/sucess", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "sucess.html"));
});

module.exports = router;
