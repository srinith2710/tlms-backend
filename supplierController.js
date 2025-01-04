const Supplier = require("../models/Supplier");

// Add supplier
exports.addSupplier = async (req, res) => {
  const { name, contact } = req.body;

  try {
    const supplier = await Supplier.create({ name, contact });
    res.status(201).json({ message: "Supplier added successfully", supplier });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
