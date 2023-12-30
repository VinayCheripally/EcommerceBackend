const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartcontroller");

router.get("/cart", cartController.viewCart);
router.post("/cart/add", cartController.addToCart);
router.put("/cart/update", cartController.updateCartItem);
router.delete("/cart/remove", cartController.removeFromCart);
router.post("/cart/create", cartController.createCart);

module.exports = router;
