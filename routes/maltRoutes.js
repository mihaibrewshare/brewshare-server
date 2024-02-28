const express = require("express");
const router = express.Router();
const { createMalt, getAllMalts } = require("../controllers/maltController");

router.post("/", createMalt);
router.get("/", getAllMalts);

module.exports = router;
