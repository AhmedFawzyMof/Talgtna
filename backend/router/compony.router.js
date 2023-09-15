const express = require("express");
const router = express.Router();
const ComponyController = require("../controller/compony.controller");

router.get("/:name", ComponyController.getProducts);

module.exports = router;
