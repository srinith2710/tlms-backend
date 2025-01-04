const express = require("express");
const router = express.Router();
const {
  recordTransaction,
  getTransactions,
  getTransactionById,
} = require("../controllers/transactionController");

// Record a stock in/out transaction
router.post("/", recordTransaction);

// Get all transactions
router.get("/", getTransactions);

// Get a transaction by ID
router.get("/:id", getTransactionById);

module.exports = router;
