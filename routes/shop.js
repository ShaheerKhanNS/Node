const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopcontroller");

router.get("/", shopController.getProducts);

module.exports = router;
