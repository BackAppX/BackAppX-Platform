const express = require("express");
const {
  GetOrder,
  AddOrder,
  GetOrderByID,
  DeleteOrder,
} = require("../controllers/order");
const Router = express.Router();

Router.get("/orders", GetOrder);
Router.post("/addorder", AddOrder);
Router.get("/:orderId", GetOrderByID);
Router.delete("/:orderID", DeleteOrder);

module.exports = Router;
