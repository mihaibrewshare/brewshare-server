const mongoose = require("mongoose");

const yeastSchema = new mongoose.Schema({
  name: String,
  producer: String,
  type: String,
  quantity: Number,
});

module.exports = mongoose.model("Yeast", yeastSchema);
