const express = require("express");
const { addUser } = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add-user", authMiddleware, isAdmin, addUser);

module.exports = router;
// this is the admin given by chatgpt
