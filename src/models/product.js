// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: Number,
  productName: String,
  price: Number,
  availability: Boolean,
  categoryId: Number,
});

const product = mongoose.model("product", productSchema);

module.exports = product;
