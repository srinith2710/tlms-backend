const Transaction = require("../models/Transaction");

// Record a transaction
exports.recordTransaction = async (req, res) => {
  const { productId, quantity, type } = req.body; // type = 'in' or 'out'

  try {
    const transaction = await Transaction.create({ productId, quantity, type });
    res.status(201).json({ message: "Transaction recorded", transaction });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
