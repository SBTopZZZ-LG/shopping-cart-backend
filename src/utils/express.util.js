// Imports
const express = require("express");
const cors = require("cors");

// Constants
const app = express();
app.use(express.json());
app.use(cors());

const { PORT } = process.env;

// Body
app.listen(PORT, () => console.log("[express.util]", "Express server listening on port", PORT));

module.exports = app;
