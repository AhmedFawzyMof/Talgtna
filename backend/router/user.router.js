const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");
const auth = require("../middleware/auth");

router.post("/", UserController.Login);
router.get("/profile", auth.authMiddleware, UserController.Profile);
router.get("/cashback", auth.authMiddleware, UserController.Cashback);
router.get("/orderhistory", auth.authMiddleware, UserController.OrderHistory);
router.get("/coupon", auth.authMiddleware, UserController.Coupons);

module.exports = router;
