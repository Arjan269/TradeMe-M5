const Auction = require("../models/Auction");

// Search auctions by keyword in title
exports.searchAuctions = async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const results = await Auction.find({
      title: { $regex: keyword, $options: "i" } // case-insensitive search
    });

    res.json(results);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
