// const express = require("express");
// const cors = require("cors");
// const app = express();
// const mongoose = require("mongoose");
// require("dotenv").config();
// const URL = process.env.DB;

// app.use(cors({ origin: true }));
// app.use(express.json());



// mongoose
//   .connect(URL)
//   .then(() => {
//     console.log("MongoDb connected");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   app.listen(4050, () => {
//     console.log("port works in 4000");
//   });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.DB)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
