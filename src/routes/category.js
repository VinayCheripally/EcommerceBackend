const express = require("express");
const router = express.Router();
const getCategoryListing = require("../controllers/categoryController");

router.get("/categories", getCategoryListing);

module.exports = router;
