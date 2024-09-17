const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authControllers");

router.get(
  "/",
  AuthController.authenticateToken,
  AuthController.getProtectedData
);

module.exports = router;
