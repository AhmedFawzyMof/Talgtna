const db = require("../db/index");
const promisePool = db.promise();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const controller = {
  Login: async (req, res) => {
    const user = req.body;
    const password = crypto.createHmac("sha256", user.password).digest("hex");
    const [User, fields] = await promisePool.query(
      "SELECT id,email,Admin,Stuff FROM `Users` WHERE (email,password)=(?,?)",
      [user.email, password]
    );
    if (User.length > 0) {
      let TheUser = User[0];
      if (TheUser.Admin == 1) {
        Object.assign(TheUser, { Admin: true });
      } else {
        Object.assign(TheUser, { Admin: false });
      }
      if (TheUser.Stuff == 1) {
        Object.assign(TheUser, { Stuff: true });
      } else {
        Object.assign(TheUser, { Stuff: false });
      }

      const token = jwt.sign({ user: TheUser }, process.env.SECRET_KEY);

      res.json({
        userInfo: token,
        err: false,
      });
    } else {
      res.json({
        err: true,
      });
    }
  },
  Register: async (req, res) => {},
  Profile: async (req, res) => {
    const token = JSON.parse(req.headers.authtoken).user;

    const [User, fields] = await promisePool.query(
      "SELECT username,email,Admin,Stuff FROM `Users` WHERE email=?",
      [token.email]
    );
    let TheUser = User[0];
    if (TheUser.Admin == 1) {
      Object.assign(TheUser, { Admin: true });
    } else {
      Object.assign(TheUser, { Admin: false });
    }
    if (TheUser.Stuff == 1) {
      Object.assign(TheUser, { Stuff: true });
    } else {
      Object.assign(TheUser, { Stuff: false });
    }
    res.json(TheUser);
  },
  Cashback: async (req, res) => {
    const token = JSON.parse(req.headers.authtoken).user;

    const [User, fields] = await promisePool.query(
      "SELECT cashback FROM `Users` WHERE email=?",
      [token.email]
    );
    const [Orders, _] = await promisePool.query(
      "SELECT COUNT(*) AS Orders FROM `TheOrders` WHERE user=?",
      [token.id]
    );
    let TheUser = {};
    Object.assign(TheUser, User[0]);
    Object.assign(TheUser, { orders: Orders[0].Orders });

    res.json(TheUser);
  },
  OrderHistory: async (req, res) => {
    const token = JSON.parse(req.headers.authtoken).user;

    const [Orders, fields] = await promisePool.query(
      "SELECT * FROM `TheOrders` WHERE user=?",
      [token.id]
    );

    res.json(Orders);
  },
  Coupons: async (req, res) => {
    const token = JSON.parse(req.headers.authtoken).user;

    const [User, fields] = await promisePool.query(
      "SELECT coupons FROM `Users` WHERE email=?",
      [token.email]
    );
    let TheUser = User[0];

    res.json(TheUser);
  },
};

module.exports = controller;
