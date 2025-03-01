const express = require("express");
const { createRole, getRoles } = require("../controllers/roleController");
const { authMiddleware, hasPermission } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/api/roles", authMiddleware, (req, res, next) => {
  if (req.user.role === "admin") return next();
  return hasPermission("Roles", "create")(req, res, next);
}, createRole);

router.get("/api/roles", authMiddleware, (req, res, next) => {
    console.log("User role from token:", req.user.role); // Debug log to check role
    if (req.user.role.toLowerCase() === "admin") return next();
    return hasPermission("Roles", "read")(req, res, next);
  }, getRoles);

module.exports = router;
