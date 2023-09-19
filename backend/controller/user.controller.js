const db = require("../db/index");
const promisePool = db.promise();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const controller = {
  Login: async (req, res) => {
    let user = req.body;
    console.length(user);
    if (req.email) {
      user = {
        email: req.email,
        password: req.password,
      };
      console.log(user);
    }
    const password = crypto.createHmac("sha256", user.password).digest("hex");

    const [User, fields] = await promisePool.query(
      "SELECT id,email,Admin,Stuff,coupons FROM `Users` WHERE (email,password)=(?,?)",
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

      const [FavList, fields] = await promisePool.query(
        "SELECT COUNT(*) AS Fav FROM `favourit` WHERE user=?",
        [user.id]
      );

      const fav = FavList[0].Fav;

      return res.json({
        userInfo: token,
        coupons: TheUser.coupons.length,
        fav: fav,
        err: false,
      });
    } else {
      return res.json({
        err: true,
      });
    }
  },
  Register: async (req, res) => {
    const body = req.body;
    const username = body.username;
    const email = body.email;
    const pass = body.password;
    const pass2 = body.password2;
    const terms = body.terms;

    const coupons = [
      { code: "13102019", value: 10 },
      { code: "80402002", value: 15 },
      { code: "29072002", value: 20 },
    ];

    if (pass !== pass2) {
      return res.json({
        err: true,
        msg: "كلمات المرور غير متطابقة",
      });
    }

    if (terms !== "yes") {
      return res.json({
        err: true,
        msg: "لا يمكنك التسجيل دون قبول الشروط والأحكام",
      });
    }
    const [findUser, fields] = await promisePool.query(
      "SELECT * FROM `Users` WHERE email = ?",
      [email]
    );
    if (findUser.length > 0) {
      return res.json({
        err: true,
        msg: "الحساب مسجل بالفعل",
      });
    }

    const password = crypto.createHmac("sha256", pass).digest("hex");
    const id = uuidv4();

    const [rows, fields] = await promisePool.query(
      "INSERT INTO `Users` (`id`, `username`, `email`, `password`, `coupons`) VALUES (?, ?, ?, ?, ?)",
      [id, username, email, password, JSON.stringify(coupons)]
    );
    req.email = email;
    req.password = password;
    this.Login(req, res);
  },
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
    return res.json(TheUser);
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

    return res.json(TheUser);
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
