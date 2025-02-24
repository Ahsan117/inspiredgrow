const express = require("express");
const { registerAgent, loginAgent, checkIfRegistered, getProfile } = require("../controllers/deliveryAgentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerAgent);
router.post("/login", loginAgent);
router.post("/check", checkIfRegistered); // ✅ Check if already registered
router.get("/profile", protect, getProfile);

module.exports = router;
