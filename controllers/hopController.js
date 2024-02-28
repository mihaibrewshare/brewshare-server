const Hop = require("../models/Hop");

exports.createHop = async (req, res) => {
  try {
    const { name, alphaAcids, quantity } = req.body;
    const hop = new Hop({
      name,
      alphaAcids,
      quantity,
    });
    await hop.save();
    res.status(201).json(hop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllHops = async (req, res) => {
  try {
    const hops = await Hop.find();
    res.json(hops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
