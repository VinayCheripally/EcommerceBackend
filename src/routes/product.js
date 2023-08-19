const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getProductListing);
router.get('/products/:productId', productController.getProductDetails);

module.exports = router;
