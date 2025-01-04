const Transaction = require("../models/Transaction");
const Product = require("../models/Product");

const transactionService = {
  recordTransaction: async (transactionData) => {
    const { productId, type, quantity } = transactionData;

    const product = await Product.findById(productId);
    if (!product) throw new Error("Product not found");

    const newStockLevel =
      type === "in"
        ? product.stockLevel + quantity
        : product.stockLevel - quantity;

    if (newStockLevel < 0) throw new Error("Stock cannot be negative");

    product.stockLevel = newStockLevel;
    await product.save();

    const transaction = new Transaction(transactionData);
    await transaction.save();

    return transaction;
  },

  getTransactions: async (filters = {}) => {
    return Transaction.find(filters).populate("productId");
  },
};

module.exports = transactionService;
