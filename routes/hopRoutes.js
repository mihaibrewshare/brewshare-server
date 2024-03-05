const express = require("express");
const router = express.Router();
const {
  createHop,
  getAllHops,
  getHopById,
  editHop,
} = require("../controllers/hopController");

router.post("/", createHop);
router.get("/", getAllHops);
router.get("/:id", getHopById);
router.patch("/:id", editHop);

module.exports = router;
