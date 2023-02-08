// Imports
const express = require("express");
const { completeRequest } = require("../controllers/controllers");
const { productGetAllController } = require("../controllers/product.controller");

// Constants
const Router = express.Router();

// Body
Router.get("/", productGetAllController, completeRequest);

module.exports = Router;
