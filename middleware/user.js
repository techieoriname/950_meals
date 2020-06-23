const jwt = require("jsonwebtoken");

module.exports = function isLoggedIn(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        if (err.name == "TokenExpiredError") {
          return res.status(403).json({ error: "Expired Token" });
        } else if (err.name == "JsonWebTokenError") {
          return res.status(403).json({ error: "Invalid Toekn" });
        } else {
          return res.status(403).json({ error: "Token not active" });
        }
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};
