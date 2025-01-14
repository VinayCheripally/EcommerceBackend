const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartcontroller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags:
 *      - Cart
 *     summary: View the cart
 *     responses:
 *       200:
 *         description: Successfully retrieved cart
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     tags:
 *      - Cart
 *     summary: Add an item to the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Item added to cart
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/cart/update:
 *   put:
 *     tags:
 *       - Cart
 *     summary: Update an item in the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart item updated
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/cart/remove:
 *   delete:
 *     tags:
 *       - Cart
 *     summary: Remove an item from the cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item removed from cart
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/cart/create:
 *   post:
 *     tags:
 *        - Cart
 *     summary: Create a new cart
 *     responses:
 *       200:
 *         description: Cart created
 *       500:
 *         description: Internal server error
 */

router.get("/cart", cartController.viewCart);
router.post("/cart/add", cartController.addToCart);
router.put("/cart/update", cartController.updateCartItem);
router.delete("/cart/remove", cartController.removeFromCart);
router.post("/cart/create", cartController.createCart);

module.exports = router;
