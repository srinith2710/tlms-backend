const express = require("express");
const router = express.Router();
const {
  addSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

// Add a new supplier
router.post("/", addSupplier);

// Get all suppliers
router.get("/", getSuppliers);

// Get a supplier by ID
router.get("/:id", getSupplierById);

// Update a supplier
router.put("/:id", updateSupplier);

// Delete a supplier
router.delete("/:id", deleteSupplier);

module.exports = router;
