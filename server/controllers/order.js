const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Order = require("../models/order");
const Product = require("../models/product");

// Handle incoming GET requests to /orders
exports.GetOrder = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate({
        path: "product",
        select: "name price",
        model: Product,
      })
      /*  .populate({
        path: "customer",
        select: "name email",
        model: User,
      })*/
      .exec();

    const response = {
      count: orders.length,
      orders: orders.map((order) => {
        return {
          _id: order._id,
          product: order.product,
          quantity: order.quantity,
          customer: order.customer,
          createdAt: order.createdAt,
          request: {
            type: "GET",
            url: `http://localhost:9092/orders/${order._id}`,
          },
        };
      }),
    };

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

// Handle incoming Post requests to /orders
exports.AddOrder = async (req, res) => {
  Product.findById(req.body.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId,
      });
      return order.save();
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Order stored",
        createdOrder: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity,
        },
        request: {
          type: "GET",
          url: "http://localhost:9092/orders/" + result._id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

// Show order / GET BY ID
exports.GetOrderByID = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
      .populate({
        path: "product",
        select: "name price",
        model: Product,
      })
      .exec();
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.status(200).json({
      order: order,
      request: {
        type: "GET",
        url: "http://localhost:9092/orders",
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
//Delete order with ID
exports.DeleteOrder = async (req, res) => {
  try {
    const result = await Order.deleteOne({ _id: req.params.orderId }).exec();
    res.status(200).json({
      message: "Order deleted",
      request: {
        type: "POST",
        url: "http://localhost:3000/orders",
        body: { productId: "ID", quantity: "Number" },
      },
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
