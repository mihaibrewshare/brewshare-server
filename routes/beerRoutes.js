const express = require("express");
const router = express.Router();
const { createBeer, getAllBeers } = require("../controllers/beerController");

router.post("/", createBeer);
router.get("/", getAllBeers);

module.exports = router;
