const express = require("express");
const router = express.Router();
const getCategoryListing = require("../controllers/categoryController");

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: API operations related to categories
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags:
 *      - Category
 *     summary: View the categories
 *     responses:
 *       200:
 *         description: Successfully retrieved categories
 *       500:
 *         description: Internal server error
 */

router.get("/categories", getCategoryListing);

module.exports = router;
