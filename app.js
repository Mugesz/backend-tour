const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.DB;

app.use(cors({ origin: true }));
app.use(express.json());



mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.error(err);
  });

  app.listen(4050, () => {
    console.log("port works in 4000");
  });