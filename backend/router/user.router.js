const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");
const auth = require("../middleware/auth");

router.post("/", UserController.Login);
router.post("/register", UserController.Register);
router.get("/profile", auth.authMiddleware, UserController.Profile);
router.get("/cashback", auth.authMiddleware, UserController.Cashback);
router.get("/orderhistory", auth.authMiddleware, UserController.OrderHistory);
router.get("/coupon", auth.authMiddleware, UserController.Coupons);
router.post("/fav", auth.authMiddleware, UserController.Favourite);
router.post("/delfav", auth.authMiddleware, UserController.delFavourite);
router.post("/edit", auth.authMiddleware, UserController.Edit);
router.get("/fav", auth.authMiddleware, UserController.GetFavourite);

module.exports = router;
