const mongoose = require('mongoose');
const Item = require('./models/Item');
const data = require('./seed-data.json');

const MONGO_URI = "mongodb://localhost:27017/trademe";

const run = async () => {
  const command = process.argv[2]; // "seed" OR "delete"

  if (!command || !["seed", "delete"].includes(command)) {
    console.log("Usage: node seed.js <seed|delete>");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    if (command === "delete") {
      await Item.deleteMany({});
      console.log("All items deleted.");
    }

    if (command === "seed") {
      await Item.insertMany(data);
      console.log("Data seeded successfully.");
    }

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();