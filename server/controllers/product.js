const Product = require("../models/product");
const mongoose = require("mongoose");

// Find products
exports.GetProduct = async (req, res) => {
  try {
    const docs = await Product.find().select("name price _id").exec();
    const response = {
      count: docs.length,
      products: docs.map((doc) => {
        return {
          name: doc.name,
          price: doc.price,
          _id: doc._id,
          request: {
            type: "GET",
            url: "http://localhost:9092/products/" + doc._id,
          },
        };
      }),
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

// Add products
exports.addProduct = async (req, res) => {
  try {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
    });
    const result = await product.save();
    console.log(result);
    res.status(201).json({
      message: "Created product successfully",
      createdProduct: {
        name: result.name,
        price: result.price,
        _id: result._id,
        request: {
          type: "GET",
          url: "http://localhost:9092/products/" + result._id,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
//Get product with id
exports.getSingleProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .populate("orders")
    .exec()
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

// Delete product
exports.DeleteProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const result = await Product.deleteOne({ _id: id }).exec();
    res.status(200).json({
      message: "Product deleted",
      request: {
        type: "POST",
        url: "http://localhost:9092/products",
        body: { name: "String", price: "Number" },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

// update product
exports.UpdateProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    const result = await Product.updateOne(
      { _id: id },
      { $set: updateOps }
    ).exec();
    res.status(200).json({
      message: "Product updated",
      request: {
        type: "GET",
        url: "http://localhost:9092/products/" + id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
