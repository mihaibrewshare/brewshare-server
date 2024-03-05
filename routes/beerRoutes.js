const express = require("express");
const router = express.Router();
const {
  createBeer,
  getAllBeers,
  getBeerById,
  editBeer,
} = require("../controllers/beerController");

router.post("/", createBeer);
router.get("/", getAllBeers);
router.get("/:id", getBeerById);
router.patch("/:id", editBeer);

module.exports = router;
