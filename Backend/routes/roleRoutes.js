const express = require("express");
const Role = require("../models/roleModel");
const router = express.Router();

router.post("/api/roles", async (req, res) => {
  try {
    const { roleName, storeName, description, permissions } = req.body;
    // const newRole = new Role({ roleName, storeName, description, permissions });
    const newRole = new Role({ roleName, storeName, description, permissions });
    await newRole.save();
    res
      .status(201)
      .json({ message: "Role created successfully", role: newRole });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/api/roles", async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
