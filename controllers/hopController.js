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

exports.getAllHops = async (_, res) => {
  try {
    const hops = await Hop.find();
    res.json(hops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getHopById = async (req, res) => {
  try {
    const _id = req.params.id;
    const hop = await Hop.findById({ _id });
    res.json(hop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.editHop = async (req, res) => {
  try {
    const _id = req.params.id;
    const { name, alphaAcids, quantity } = req.body;
    const hop = await Hop.findById({ _id });

    if (name) hop.name = name;
    if (alphaAcids) hop.alphaAcids = alphaAcids;
    if (quantity) hop.quantity = quantity;

    await hop.save();
    res.json(hop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
