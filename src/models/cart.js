const mongoose = require("mongoose");

const cartitemschema = new mongoose.Schema({
  productId: Number,
  quantity: {
    type: Number,
    required: true,
  },
});

const cartschema = new mongoose.Schema({
  cartId: Number,
  userId: Number,
  items: [cartitemschema],
});

const cart = mongoose.model("cart", cartschema);

module.exports = cart;
