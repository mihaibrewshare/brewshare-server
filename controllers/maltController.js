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

exports.getAllMalts = async (_, res) => {
  try {
    const malts = await Malt.find();
    res.json(malts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getMaltById = async (req, res) => {
  try {
    const _id = req.params.id;
    const malt = await Malt.findById({ _id });
    res.json(malt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.editMalt = async (req, res) => {
  try {
    const _id = req.params.id;
    const { name, type, quantity } = req.body;
    const malt = await Malt.findById({ _id });

    if (name) malt.name = name;
    if (type) malt.type = type;
    if (quantity) malt.quantity = quantity;

    await malt.save();
    res.json(malt);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
