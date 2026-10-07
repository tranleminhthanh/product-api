const mongoose = require("mongoose");

// Tạo cấu trúc dữ liệu cho Product
const productSchema = new mongoose.Schema({
  pid: {
    type: String,
    required: true,
    unique: true,
  },

  pname: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
});

// Tạo Model Product
const Product = mongoose.model("Product", productSchema);

// Cho phép các file khác sử dụng Product
module.exports = Product;
