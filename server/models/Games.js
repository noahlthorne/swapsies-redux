const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	gameConsole: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	description: {
		type: Text,
		required: true,
	},
	coverImage: {
		type: String,
	},
	rating: {
		type: Float,
	},
	releaseDate: {
		type: Date,
	},
});

module.exports = Game = mongoose.model("game", GameSchema);
