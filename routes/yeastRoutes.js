const express = require("express");
const router = express.Router();
const { createYeast, getAllYeasts } = require("../controllers/yeastController");

router.post("/", createYeast);
router.get("/", getAllYeasts);

module.exports = router;
