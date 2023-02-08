// Setup
require("dotenv").config();

// Connect to MongoDB
require("./src/scripts/mongodb.script");

// Start Express server
const expressApp = require("./src/utils/express.util");

// Consume routes
expressApp.use(require("./src/routes/product.route"));
