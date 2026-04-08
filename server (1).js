const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON

// Routes
app.use("/api/products", productRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));