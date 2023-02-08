// Imports
const mongoose = require("mongoose");

// Constants
const { DB_URI } = process.env;

// Body
mongoose.connection.on("connected", () => console.log("[mongodb.script]", "MongoDB Connection successful"));
mongoose.connection.on("disconnected", () => console.log("[mongodb.script]", "MongoDB Disconnected"));
mongoose.connection.on("error", console.error);

// Suppress deprecation warnings
mongoose.set("strictQuery", true);

mongoose.connect(DB_URI);

// Import schemas
require("../schemas/product.schema");
