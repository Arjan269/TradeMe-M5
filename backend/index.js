const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const apiRoutes = require("./routes/api");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/auctiondb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use API routes
app.use("/api", apiRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
