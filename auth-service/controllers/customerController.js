const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Customer = require("../models/customerModel");

// Generate JWT Token
const generateToken = (id) => jwt.sign({ id }, "secret", { expiresIn: "7d" });

// Customer Registration
const registerCustomer = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    let customer = await Customer.findOne({ email });
    if (customer) return res.status(400).json({ message: "Customer already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    customer = new Customer({ name, email, password: hashedPassword, phone });

    await customer.save();
    const token = generateToken(customer._id);

    res.status(201).json({ message: "Registered successfully", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Customer Login with JWT
const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(400).json({ message: "Customer not found" });

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(customer._id);
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP for Login
const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const customer = await Customer.findOne({ email });

    if (!customer) return res.status(404).json({ message: "Customer not found" });

    const otp = generateOTP();
    customer.otp = otp;
    customer.otpExpires = new Date(Date.now() + 10 * 60000); // OTP valid for 10 min
    await customer.save();

    // Send OTP via email/SMS (mock response)
    console.log(`OTP for ${email}: ${otp}`);

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Verify OTP and Login
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const customer = await Customer.findOne({ email });

    if (!customer || customer.otp !== otp || new Date() > customer.otpExpires) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    customer.otp = null;
    customer.otpExpires = null;
    await customer.save();

    const token = generateToken(customer._id);
    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerCustomer, loginCustomer, sendOTP, verifyOTP };
