const Signups = require("../models/signupModel");
const jwt = require("jsonwebtoken");

exports.postSignup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Username and password is required" });
  }

  try {
    const newUser = await Signups.create({
      username,
      password,
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    console.log("Generated JWT token", token);

    res
      .status(201)
      .send({ token, message: "User succesfully created", newUser });
  } catch (err) {
    res.status(500).send({ message: "Error creating new user", err });
  }
};
