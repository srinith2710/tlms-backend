const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const { name, category, stockLevel, reorderPoint } = req.body;
  const newProduct = new Product({ name, category, stockLevel, reorderPoint });
  await newProduct.save();
  res.status(201).json(newProduct);
};

module.exports = { createProduct };
