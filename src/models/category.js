const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryId: { type: Number, unique: true },
  name: String,
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
