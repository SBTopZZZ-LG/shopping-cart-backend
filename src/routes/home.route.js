// Imports
const express = require("express");

// Constants
const Router = express.Router();

// Body
Router.get("/", (req, res) => res.status(200).send("OK"));

module.exports = Router;
