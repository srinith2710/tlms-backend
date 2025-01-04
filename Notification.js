const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: {
      values: [
        "low_stock",
        "reorder",
        "stock_movement",
        "approval_required",
        "order_status",
        "system",
      ],
      message: "{VALUE} is not a valid notification type",
    },
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    enum: ["info", "warning", "critical"],
    default: "info",
  },
  recipients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  relatedTo: {
    model: {
      type: String,
      enum: ["Product", "Supplier", "Transaction"],
    },
    id: mongoose.Schema.Types.ObjectId,
  },
  status: {
    type: String,
    enum: ["unread", "read", "archived"],
    default: "unread",
  },
  readBy: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      readAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  expiresAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 2592000, // 30 days TTL
  },
});
// Compound index for efficient querying
notificationSchema.index({ recipients: 1, status: 1, createdAt: -1 });

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
