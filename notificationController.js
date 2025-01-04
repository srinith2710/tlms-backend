//notification
const Notification = require("../models/Notification");

// Send notification
exports.sendNotification = async (req, res) => {
  const { message, recipient } = req.body;

  try {
    const notification = await Notification.create({ message, recipient });
    res.status(201).json({ message: "Notification sent", notification });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
