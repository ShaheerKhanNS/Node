const express = require("express");
const router = express.Router();
const successController = require("../controllers/success");

router.get("/sucess", successController.success);

module.exports = router;
