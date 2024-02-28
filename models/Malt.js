const mongoose = require("mongoose");

const maltSchema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number,
});

module.exports = mongoose.model("Malt", maltSchema);
