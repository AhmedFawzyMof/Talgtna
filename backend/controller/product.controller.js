const db = require("../db/index");
const promisePool = db.promise();

const controller = {
  getProduct: async (req, res) => {
    const id = req.params.id;
    const [Product, fields] = await promisePool.query(
      "SELECT * FROM `Products` WHERE id=?",
      [id]
    );
    res.json({
      product: Product[0],
    });
  },
};

module.exports = controller;
