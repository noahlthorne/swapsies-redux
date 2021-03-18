const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//
// create a game
app.post("/games", async (req, res) => {
	try {
		console.log(req.body);
		const {
			title,
			game_console,
			description,
			cover_image,
			rating,
			release_date,
		} = req.body;
		const newGame = await pool.query(
			`
			INSERT INTO games(
				title,
				console,
				description,
				cover_image,
				rating,
				release_date
			) 
			VALUES ($1, $2, $3, $4, $5, $6)
			RETURNING *
		`,
			[title, game_console, description, cover_image, rating, release_date]
		);
		res.json(newGame.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// get a game
// get all games
// get a user
// get all listings
// create a listing
// destroy a listing
// create a swap
// get all swaps
// get a swap

app.listen(5000, () => {
	console.log("Server has started on port 5000");
});
