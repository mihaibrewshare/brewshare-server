const Yeast = require("../models/Yeast");

exports.createYeast = async (req, res) => {
  try {
    const { name, producer, type, quantity } = req.body;
    const yeast = new Yeast({ name, producer, type, quantity });
    await yeast.save();
    res.status(201).json(yeast);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllYeasts = async (_, res) => {
  try {
    const yeasts = await Yeast.find();
    res.json(yeasts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getYeastById = async (req, res) => {
  try {
    const _id = req.params.id;
    const yeast = await Yeast.findById({ _id });
    res.json(yeast);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.editYeast = async (req, res) => {
  try {
    const _id = req.params.id;
    const { name, producer, type, quantity } = req.body;
    const yeast = await Yeast.findById({ _id });
    if (name) yeast.name = name;

    if (producer) yeast.producer = producer;
    if (type) yeast.type = type;
    if (quantity) yeast.quantity = quantity;

    await yeast.save();
    res.json(yeast);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
