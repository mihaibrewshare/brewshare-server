const Yeast = require("../models/Yeast");

exports.createYeast = async (req, res) => {
  try {
    const { name, producer, type } = req.body;
    const yeast = new Yeast({ name, producer, type });
    await yeast.save();
    res.status(201).json(yeast);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllYeasts = async (req, res) => {
  try {
    const yeasts = await Yeast.find();
    res.json(yeasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
