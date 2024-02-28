const Beer = require("../models/Beer");
const calculateAbv = require("../utils/abvCalculator");
const calculateSrm = require("../utils/ebcToSrmCalculator");
const calculateHex = require("../utils/srmToHexCalculator");

exports.createBeer = async (req, res) => {
  try {
    const { name, totalVolume, currentVolume, og, fg, ibu, ebc } = req.body;
    const beer = new Beer({
      name,
      totalVolume,
      currentVolume,
      stats: {
        og,
        fg,
        ibu,
        ebc,
        srm: calculateSrm(ebc),
        hex: calculateHex(calculateSrm(ebc)),
        abv: calculateAbv(og, fg),
      },
    });
    await beer.save();
    res.status(201).json(beer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllBeers = async (req, res) => {
  try {
    const beers = await Beer.find();
    res.json(beers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
