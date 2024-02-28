const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema(
  {
    og: Number,
    fg: Number,
    abv: Number,
    ibu: Number,
    ebc: Number,
    srm: Number,
    hex: String,
  },
  { _id: false }
);

const beerSchema = new mongoose.Schema({
  name: String,
  totalVolume: Number,
  currentVolume: Number,
  stats: statsSchema,
});

module.exports = mongoose.model("Beer", beerSchema);
