const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		});
		console.log("Successfully connected to mongo database...");
	} catch (error) {
		console.error(error.message);
		// Exit process if db fails to connect
		process.exit(1);
	}
};

module.exports = connectDB;
