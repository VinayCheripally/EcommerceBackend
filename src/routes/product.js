const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successfully retrieved product list
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                   description:
 *                     type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/products/{productId}:
 *   get:
 *     summary: Get product details
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Successfully retrieved product details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *                 description:
 *                   type: string
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

router.get("/products", productController.getProductListing);
router.get("/products/:productId", productController.getProductDetails);

module.exports = router;
