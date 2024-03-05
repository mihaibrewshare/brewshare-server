const express = require("express");
const router = express.Router();
const {
  createYeast,
  getAllYeasts,
  getYeastById,
  editYeast,
} = require("../controllers/yeastController");

router.post("/", createYeast);
router.get("/", getAllYeasts);
router.get("/:id", getYeastById);
router.patch("/:id", editYeast);

module.exports = router;
