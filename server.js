const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-config");
// const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const authRoutes = require("./src/routes/auth");
const categoryRoutes = require("./src/routes/category");
const productRoutes = require("./src/routes/product");
const cartRoutes = require("./src/routes/cart");
const orderRoutes = require("./src/routes/order");
// const paymentRoutes = require("./src/routes/payment");

app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);
// app.use("/api", paymentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
