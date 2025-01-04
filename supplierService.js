const Supplier = require("../models/Supplier");

const supplierService = {
  getAllSuppliers: async () => {
    return Supplier.find();
  },

  addSupplier: async (supplierData) => {
    const supplier = new Supplier(supplierData);
    await supplier.save();
    return supplier;
  },

  updateSupplier: async (supplierId, updates) => {
    const supplier = await supplier.findByIdAndUpdate(supplierId, updates, {
      new: true,
    });
    if (!supplier) throw new Error("Supplier not found");
    return supplier;
  },

  deleteSupplier: async (supplierId) => {
    const supplier = await supplier.findByIdAndDelete(supplierId);
    if (!supplier) throw new Error("supplier not found");
    return supplier;
  },

  recordOrder: async (supplierId, orderDetails) => {
    const supplier = await Supplier.findById(supplierId);
    if (!supplier) throw new Error("Supplier not found");

    supplier.orders.push(orderDetails);
    await supplier.save();
    return supplier;
  },
};

module.exports = supplierService;
