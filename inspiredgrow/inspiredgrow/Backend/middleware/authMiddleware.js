const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  // Check if token exists in the Authorization header
  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    // Extract token from the 'Bearer <token>' format
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

    // Attach user info to the request object
    req.user = verified;
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

const isAdmin = (req, res, next) => {
  // Ensure that user has an 'admin' role
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next(); // Continue to the next middleware or route handler
};

module.exports = { authMiddleware, isAdmin };
