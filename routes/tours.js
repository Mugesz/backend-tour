const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const tours = require("../model/tour");
require("dotenv").config();
const uri = process.env.DB;

mongoose.connect(uri);



router.get("/all", async (req, res) => {
  try {
    const news = await tours.find();
    res.status(200).send(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});

router.get("/one/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const news = await tours.findById(id);
    res.status(200).send(news);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});





module.exports = router;
