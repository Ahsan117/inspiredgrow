require("dotenv").config();  // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const UsersRoutes = require("./routes/UsersRoutes");
const roleRoutes = require("./routes/roleRoutes");
const storeRoutes = require("./routes/storeRoutes");

const app = express();

// Middlewares
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Middleware to parse incoming JSON requests

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Use Routes
app.use("/auth", authRoutes);
app.use("/admin", userRoutes);
app.use("/admiaddinguser", UsersRoutes);
app.use("/admincreatingrole", roleRoutes);
app.use("/admin/Store", storeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
