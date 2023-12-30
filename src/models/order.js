const mongoose = require("mongoose");

const orderitemschema = new mongoose.Schema({
  productId: Number,
  quantity: {
    type: Number,
    required: true,
  },
});

const orderschema = new mongoose.Schema({
  orderId: Number,
  items: [orderitemschema],
  totalPrice: {
    type: Number,
    required: true,
  },
  userId: Number,
  billAddress: String,
  delivered: Boolean,
});

orderschema.pre("save", async function (next) {
  const doc = this;
  if (!doc.orderId) {
    const maxOrderId = await mongoose
      .model("order")
      .find()
      .sort({ orderId: -1 })
      .limit(1);
    doc.orderId = maxOrderId.length === 0 ? 1 : maxOrderId[0].orderId + 1;
  }
  next();
});

const order = mongoose.model("order", orderschema);

module.exports = order;
