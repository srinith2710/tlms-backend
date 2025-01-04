const express = require("express");
const router = express.Router();
const {
  getNotifications,
  createNotification,
  deleteNotification,
} = require("../controllers/notificationController");

// Get all notifications
router.get("/", getNotifications);

// Create a new notification
router.post("/", createNotification);

// Delete a notification by ID
router.delete("/:id", deleteNotification);

module.exports = router;
