const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication and registration
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint to register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address of the user
 *               username:
 *                 type: string
 *                 description: Username of the user
 *               password:
 *                 type: string
 *                 description: Password for the user
 *     responses:
 *       '200':
 *         description: User registration successful
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: login for a user
 *     description: Endpoint for a user to login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Username of the user
 *               password:
 *                 type: string
 *                 description: Password for the user
 *     responses:
 *       '200':
 *         description: Login successful!
 *       '400':
 *         description: Incorrect login details
 *       '500':
 *         description: Internal Server Error
 */

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
