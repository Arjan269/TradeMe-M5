const express = require("express");
const router = express.Router();
const { searchAuctions } = require("../controllers/auctionController");

// GET /api/search?keyword=laptop
router.get("/search", searchAuctions);

module.exports = router;
