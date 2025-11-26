const mongoose = require("mongoose");
const Auction = require("./models/Auction");
const data = require("./seed-data.json");

// Local MongoDB connection
const MONGO_URI = "mongodb://127.0.0.1:27017/auctiondb";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

async function seedData() {
  await connectDB();

  try {
    await Auction.deleteMany();
    await Auction.insertMany(data);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding:", error);
  } finally {
    mongoose.connection.close();
  }
}

async function clearData() {
  await connectDB();

  try {
    await Auction.deleteMany();
    console.log("Database cleared successfully!");
  } catch (error) {
    console.error("Error clearing:", error);
  } finally {
    mongoose.connection.close();
  }
}

// CLI commands
const command = process.argv[2];

if (command === "seed") {
  seedData();
} else if (command === "clear") {
  clearData();
} else {
  console.log(`
Usage:
  node seed.js seed   -> Insert seed data
  node seed.js clear  -> Delete all auction data
  `);
}
