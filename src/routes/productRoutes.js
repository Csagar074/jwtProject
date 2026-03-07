const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");


router.get("/", verifyToken, getProducts);
router.get("/:id", verifyToken, getProduct);


router.post("/", verifyToken, checkRole("admin"), createProduct);
router.put("/:id", verifyToken, checkRole("admin"), updateProduct);
router.delete("/:id", verifyToken, checkRole("admin"), deleteProduct);

module.exports = router;