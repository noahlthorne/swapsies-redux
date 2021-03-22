const express = require("express");
const router = express.Router();

// @route   GET api/games
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
	res.send("Games route");
});

module.exports = router;
