const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  start_price: Number,
  reserve_price: Number
});

module.exports = mongoose.model('Item', itemSchema);