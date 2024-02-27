const mongoose = require("mongoose");

const newsScheme = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: number,
      required: true,
    },
    price: {
      type: number,
      required: true,
    },
    maxGroupSize: {
      type: number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    review: {
     
    },
    featured: {
      type: String,
      required: true,
    },

    photo: {
      type: boolean,
      required: true,
    },
 
  },
  { timestamps: true }
);

const tours = mongoose.model("TOURS", newsScheme);
module.exports = tours;
