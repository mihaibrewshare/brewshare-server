const Beer = require("../models/Beer");
const { calculateAbv, ebcToSrm, srmToHex } = require("brewshare");

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
        srm: ebcToSrm(ebc),
        hex: srmToHex(ebcToSrm(ebc)),
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

exports.getAllBeers = async (_, res) => {
  try {
    const beers = await Beer.find();
    res.json(beers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getBeerById = async (req, res) => {
  try {
    const _id = req.params.id;
    const beer = await Beer.findById({ _id });
    res.json(beer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.editBeer = async (req, res) => {
  try {
    const _id = req.params.id;
    const { name, totalVolume, currentVolume, og, fg, ibu, ebc } = req.body;
    const beer = await Beer.findById({ _id });

    if (name) beer.name = name;
    if (totalVolume) beer.totalVolume = totalVolume;
    if (currentVolume) beer.currentVolume = currentVolume;
    if (og || fg) {
      if (og) beer.stats.og = og;
      if (fg) beer.stats.fg = fg;
      beer.stats.abv = calculateAbv(beer.stats.og, beer.stats.fg);
    }
    if (ibu) beer.stats.ibu = ibu;
    if (ebc) {
      beer.stats.ebc = ebc;
      beer.stats.srm = ebcToSrm(ebc);
      beer.stats.hex = srmToHex(ebcToSrm(ebc));
    }

    await beer.save();
    res.json(beer);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
