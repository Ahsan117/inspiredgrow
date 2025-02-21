const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // Simple validation check for required fields
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Email format validation using regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // Check if the user already exists by email (case-insensitive)
    const existingUser = await User.findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({ name, email, password: hashedPassword, role });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server error, try again later" });
  }
};
