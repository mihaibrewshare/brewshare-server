const Malt = require("../models/Malt");

exports.createMalt = async (req, res) => {
  try {
    const { name, type, quantity } = req.body;
    const malt = new Malt({
      name,
      type,
      quantity,
    });
    await malt.save();
    res.status(201).json(malt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllMalts = async (req, res) => {
  try {
    const malts = await Malt.find();
    res.json(malts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
