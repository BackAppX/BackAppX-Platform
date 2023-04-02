const express = require("express");
const {
  GetProduct,
  addProduct,
  getSingleProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/product");

const router = express.Router();

router.get("/products", GetProduct);
router.get("/:productId", getSingleProduct);
router.patch("/:productId", UpdateProduct);
router.delete("/:productId", DeleteProduct);
router.post("/Addproduct", addProduct);

module.exports = router;
