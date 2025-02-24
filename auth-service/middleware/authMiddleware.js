const jwt = require("jsonwebtoken");

// ✅ Middleware to Protect Routes for Both Customers & Delivery Agents
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Get Token from Header
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify Token

      req.user = decoded.id; // ✅ Store User ID (Works for Both Customers & Agents)
      next(); // Move to Next Middleware
    } catch (error) {
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
