const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");

router.post("/", signupController.postSignup);

// Auth Middleware

module.exports = router;
