require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const customerRoutes = require("./routes/customerRoutes"); // Import routes

const app = express();
app.use(express.json()); // Ensure JSON body parsing

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

app.use("/customer", customerRoutes); // Mount routes

const PORT = process.env.TEST_PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Test Server running on port ${PORT}`);
});
