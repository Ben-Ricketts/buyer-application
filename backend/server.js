const express = require("express");
const connectToDb = require("./config/connectToDb");
const item = require("./routes/itemRoute");
const signups = require("./routes/signupRoute");
const authorized = require("./routes/authRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// setup server
require("dotenv").config();

// Connect to DB
connectToDb();

app.use("/item", item);
app.use("/signup", signups);
app.use("/protected", authorized);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
