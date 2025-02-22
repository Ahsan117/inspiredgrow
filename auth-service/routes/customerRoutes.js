const express = require("express");
const { registerCustomer, loginCustomer, sendOTP, verifyOTP } = require("../controllers/customerController");

const router = express.Router();

router.post("/register", registerCustomer);
router.post("/login", loginCustomer);
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);

module.exports = router;
