const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authtoken;
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.headers.authtoken = JSON.stringify(user);
    next();
  } catch (err) {
    res.json({
      err: true,
    });
  }
};
