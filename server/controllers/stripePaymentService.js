const express = require("express");
const Order = require("../models/order");
const Product = require("../models/product");



exports.createPaymentIntent = async (req, res) => {
    const stripe = require('stripe')(req.headers.stripePrivatekey)
    const {orderId} = req.body;

    const order= Order.findById(orderId)
    const product = Product.findById(order.product)

    stripe.paymentIntents.create({
        amount: product.price * order.quantity,
        currency: 'usd',

    }).then((paymentIntent) => {
        if (paymentIntent) {
            return res.status(200).json({
                message: 'Payment intent created successfully',
                paymentIntent: paymentIntent
            });
        }
    }).catch((err) => {
        return res.status(500).json({
            message: 'Something went wrong',
            error: err
        });
    })
}




