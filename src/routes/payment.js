const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/payment/create", paymentController.createPaymentIntent);

module.exports = router;
