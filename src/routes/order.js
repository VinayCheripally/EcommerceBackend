const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const orderController = require('../controllers/orderController');

router.use(authMiddleware.authenticateUser); // Apply authentication middleware
router.post('/order/place', orderController.placeOrder);
router.get('/order/history', orderController.getOrderHistory);
router.get('/order/:orderId', orderController.getOrderDetails);

module.exports = router;
