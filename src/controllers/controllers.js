// Imports
const Response = require("../models/standard.response.model");

// Body
function completeRequest(req, res) {
	try {
		return res.status(200).send(Response(false, res.body));
	} catch (error) {
		console.error("[controllers]", error);
		return res.status(500).send(Response("500-internalError"));
	}
}

module.exports = {
	completeRequest,
};
