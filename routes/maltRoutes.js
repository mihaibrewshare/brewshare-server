const express = require("express");
const router = express.Router();
const {
  createMalt,
  getAllMalts,
  getMaltById,
  editMalt,
} = require("../controllers/maltController");

router.post("/", createMalt);
router.get("/", getAllMalts);
router.get("/:id", getMaltById);
router.patch("/:id", editMalt);

module.exports = router;
