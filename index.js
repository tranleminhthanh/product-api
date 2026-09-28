require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Cho phép nhận dữ liệu JSON
app.use(express.json());

// Kết nối MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Ket noi MongoDB thanh cong");
  })
  .catch((error) => {
    console.log("Ket noi MongoDB that bai");
    console.log(error);
  });

// Route kiểm tra server
app.get("/", (req, res) => {
  res.send("Product API is running");
});

// Gắn Product Routes
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

// Lấy port từ .env
const PORT = process.env.PORT || 3000;

// Chạy server
app.listen(PORT, () => {
  console.log(`Server dang chay tai http://localhost:${PORT}`);
});
