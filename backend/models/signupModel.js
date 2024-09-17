const mongoose = require("mongoose");
const { Schema } = mongoose;

const signupSchema = new Schema({
  username: String,
  password: String,
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
