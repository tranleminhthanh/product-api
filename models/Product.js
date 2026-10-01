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
    required: false,git status
git add .
git commit -m "Update source code"
git push origin main
  },
});

// Tạo Model Product
const Product = mongoose.model("Product", productSchema);

// Cho phép các file khác sử dụng Product
module.exports = Product;
