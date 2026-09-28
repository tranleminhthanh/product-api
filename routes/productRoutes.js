const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// 1. CREATE - Thêm sản phẩm
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// 2. READ - Lấy tất cả sản phẩm
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// 3. READ - Lấy sản phẩm theo pid
router.get("/:pid", async (req, res) => {
  try {
    const product = await Product.findOne({
      pid: req.params.pid,
    });

    if (!product) {
      return res.status(404).json({
        message: "Khong tim thay san pham",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// 4. UPDATE - Sửa sản phẩm theo pid
router.put("/:pid", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { pid: req.params.pid },
      req.body,
      { new: true },
    );

    if (!product) {
      return res.status(404).json({
        message: "Khong tim thay san pham",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// 5. DELETE - Xóa sản phẩm theo pid
router.delete("/:pid", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      pid: req.params.pid,
    });

    if (!product) {
      return res.status(404).json({
        message: "Khong tim thay san pham",
      });
    }

    res.json({
      message: "Xoa san pham thanh cong",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
