require("dotenv").config();
const mongoose = require("mongoose");

const connectToDb = () =>
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log("error connecting to DB", err);
    });

module.exports = connectToDb;
