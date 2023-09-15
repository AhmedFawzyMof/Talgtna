const db = require("../db/index");
const promisePool = db.promise();

const controller = {
  getProducts: async (req, res) => {
    const name = req.params.name;
    const [Products, fields] = await promisePool.query(
      "SELECT `id`, `name`, `price`, `image`, `available`, `offer` FROM `Products` WHERE compony=? ORDER BY available DESC;",
      [name]
    );
    res.json({
      products: Products,
    });
  },
};

module.exports = controller;
