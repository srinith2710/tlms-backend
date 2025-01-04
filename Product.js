const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  stockLevel: { type: Number, required: true },
  reorderPoint: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
