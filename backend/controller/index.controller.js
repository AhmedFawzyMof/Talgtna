const db = require("../db/index");
const promisePool = db.promise();

const controller = {
  getHome: async (req, res) => {
    const [rows, fields] = await promisePool.query(
      "SELECT * FROM `Componies` ORDER BY na DESC;SELECT * FROM `Offer`;SELECT name FROM Categories;"
    );
    const companies = rows[0];
    const categories = rows[2];
    const offers = rows[1];

    res.json({
      companies: companies,
      categories: categories,
      offers: offers,
    });
  },
};

module.exports = controller;
