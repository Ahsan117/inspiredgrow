require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customerRoutes");
const deliveryAgentRoutes = require("./routes/deliveryAgentRoutes");

const app = express();
app.use(express.json());

console.log("🔹 MONGO_URI from .env:", process.env.MONGO_URI);
console.log("🔹 JWT_SECRET from .env:", process.env.JWT_SECRET);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Register Routes
app.use("/customer", customerRoutes);
app.use("/delivery-agent", deliveryAgentRoutes); // ✅ Added Delivery Agent Routes

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Auth Service running on port ${PORT}`);
});
