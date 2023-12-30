const order = require("../models/order");
const cart = require("../models/cart");
const user = require("../models/user");
const product = require("../models/product");

// order create, update, delete, get all, get one

const ordercontroller = {
  placeOrder: async (req, res) => {
    try {
      const { userId, billAddress } = req.body;

      const newCart = await cart.findOne({ cartId: userId });
      let totalPrice = 0;
      for (const item of newCart.items) {
        const newProduct = await product.findOne({ productId: item.productId });

        if (!newProduct) {
          return res
            .status(404)
            .send(`Product not found f  or productId: ${item.productId}`);
        }

        totalPrice += newProduct.price * item.quantity;
      }
      const newOrder = new order({
        items: newCart.items,
        totalPrice,
        userId,
        billAddress,
        delivered: false,
      });

      await newOrder.save();
      newCart.items = [];
      await newCart.save();

      res.status(200).send("Order placed successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
  updateAddress: async (req, res) => {
    try {
      const Order = await order.findOne({ userId: req.body.orderId });
      Order.billAddress = req.body.billAddress;
      await Order.save();
      res.status(200).send("Bill address updated successfully");
    } catch (e) {
      res.status(500).send(e);
    }
  },
  cancelOrder: async (req, res) => {
    try {
      await order.deleteOne({ userId: req.body.userId });
      res.status(200).json("Your order has been canceled");
    } catch (e) {
      res.status(500).send(e);
    }
  },
  getOrder: async (req, res) => {
    try {
      const Order = await order.findOne({ userId: req.params.orderId });
      res.status(200).json(Order);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  updateDelivery: async (req, res) => {
    try {
      const Order = await order.findOne({ orderId: req.body.orderId });
      Order.delivered = true;
      await Order.save();
      res.status(200).send("delivered");
    } catch (e) {
      res.status(500).send(e);
    }
  },
};

module.exports = ordercontroller;
