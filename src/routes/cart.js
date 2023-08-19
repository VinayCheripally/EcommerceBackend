const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartcontroller');

router.use(authMiddleware.authenticateUser); // Apply authentication middleware
router.get('/cart', cartController.viewCart);
router.post('/cart/add', cartController.addToCart);
router.put('/cart/update/:itemId', cartController.updateCartItem);
router.delete('/cart/remove/:itemId', cartController.removeFromCart);

module.exports = router;
