// Imports
const Product = require("../schemas/product.schema");
const Response = require("../models/standard.response.model");

// Body
async function productGetAllController(req, res, next) {
	try {
		const products = await Product.find();

		if (!res.body) res.body = {};
		res.body.products_count = products.length;
		res.body.products = products;

		return next();
	} catch (error) {
		console.error("[product.controller]", error);
		return res.status(500).send(Response("500-internalError"));
	}
}

module.exports = {
	productGetAllController,
};
