const express = require("express");
const router = express.Router();

// @route   GET api/listings
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
	res.send("Listings route");
});

module.exports = router;
