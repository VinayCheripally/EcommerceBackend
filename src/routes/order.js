const express = require("express");
const router = express.Router();
const orderController = require("../controllers/ordercontroller");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API operations related to orders
 */

/**
 * @swagger
 * /api/order/place:
 *   post:
 *     tags:
 *        - Orders
 *     summary: Place a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *               billAddress:
 *                 type: string
 *                 description: Username of the user
 *     responses:
 *       200:
 *         description: Order placed successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/order/updateAddress:
 *   put:
 *     tags:
 *          - Orders
 *     summary: Update address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *                 description: Username of the user
 *               orderId:
 *                  type: number
 *               billAddress:
 *                 type: string
 *                 description: Username of the user
 *     responses:
 *       200:
 *         description: Address udpdated successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/order/updateDeliveryStatus:
 *   put:
 *     tags:
 *        - Orders
 *     summary: Update Delivery Status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                  type: number
 *     responses:
 *       200:
 *         description: deluvered
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/order/cancel:
 *   delete:
 *     tags:
 *        - Orders
 *     summary: delete order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: number
 *                 description: UserId of the user
 *               orderId:
 *                  type: number
 *     responses:
 *       200:
 *         description:cancelled successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/order/{orderId}:
 *   get:
 *     tags:
 *          - Orders
 *     summary: Get details of a specific order
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: number
 *         description: The ID of the order to retrieve
 *     responses:
 *       200:
 *         description: Order details retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               orderId: "123"
 *               message: "Order details retrieved successfully"
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

router.post("/order/place", orderController.placeOrder);
router.put("/order/updateAddress", orderController.updateAddress);
router.put("/order/updateDeliveryStatus", orderController.updateDelivery);
router.delete("/order/cancel", orderController.cancelOrder);
router.get("/order/:orderId", orderController.getOrder);

module.exports = router;
