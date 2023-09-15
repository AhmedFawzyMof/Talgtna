const express = require("express");
const router = express.Router();
const ProductController = require("../controller/product.controller");

router.get("/:id", ProductController.getProduct);

module.exports = router;
