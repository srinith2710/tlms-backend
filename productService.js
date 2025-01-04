const Product = require("../models/Product");

const productService = {
  getAllProducts: async (filters = {}) => {
    return Product.find(filters);
  },

  addProduct: async (productData) => {
    const product = new Product(productData);
    await product.save();
    return product;
  },

  updateProduct: async (productId, updates) => {
    const product = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });
    if (!product) throw new Error("Product not found");
    return product;
  },

  deleteProduct: async (productId) => {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) throw new Error("Product not found");
    return product;
  },

  checkReorderPoint: (product) => {
    if (product.stockLevel <= product.reorderPoint) {
      return `Product ${product.name} is below the reorder point.`;
    }
    return null;
  },
};

module.exports = productService;
