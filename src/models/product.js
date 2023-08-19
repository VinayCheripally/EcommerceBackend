// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  availability: Boolean,
  categoryId: {
    type:mongoose.Types.ObjectId,
    ref:'category'
  }
});

const product = mongoose.model('product', productSchema);

module.exports = product;
