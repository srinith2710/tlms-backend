const productService = require("./productService");
const Notification = require("../models/Notification");

const notificationService = {
  checkAndNotifyLowStock: async () => {
    const products = await productService.getAllProducts();

    products.forEach(async (product) => {
      const alert = productService.checkReorderPoint(product);
      if (alert) {
        const notification = new Notification({
          message: alert,
          type: "low_stock",
          productId: product._id,
        });
        await notification.save();
      }
    });
  },

  getNotifications: async () => {
    return Notification.find().sort({ createdAt: -1 });
  },
};

module.exports = notificationService;
