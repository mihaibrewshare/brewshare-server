const express = require("express");
const router = express.Router();
const { createHop, getAllHops } = require("../controllers/hopController");

router.post("/", createHop);
router.get("/", getAllHops);

module.exports = router;
