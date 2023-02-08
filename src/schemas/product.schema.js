// Imports
const mongoose = require("mongoose");

// Constants
const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	category: {
		type: String,
		default: "Misc",
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
	image: {
		type: String,
	},
});

// Body
module.exports = mongoose.model("product", schema);
