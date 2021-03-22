const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
	"/",
	[
		check("firstName", "First name is required").not().isEmpty(),
		check("lastName", "Last name is required").not().isEmpty(),
		check("email", "Must enter a valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.send("User route");
	}
);

module.exports = router;
