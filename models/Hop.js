const mongoose = require("mongoose");

const hopSchema = new mongoose.Schema({
  name: String,
  alphaAcids: Number,
  quantity: Number,
});

module.exports = mongoose.model("Hop", hopSchema);
