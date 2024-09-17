const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getProtectedData = (req, res) => {
  res.json({ message: "This data is protected" });
};

// AUTH MIDDLEWARE

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.sendStatus(401); // Unauthorized if no auth header
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if token is invalid
    }
    req.user = user;

    next();
  });
};
