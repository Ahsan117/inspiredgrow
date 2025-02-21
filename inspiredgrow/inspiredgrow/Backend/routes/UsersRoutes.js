const express = require("express");
const User = require("../models/userModel");
const { Data_add_Successfully, Error_found } = require("../utlis/error");
const router = express();

router.post("/adduserbyadmin", async (req, res) => {
  try {
    const {
      userName,
      FirstName,
      LastName,
      Mobile,
      Email,
      Store,
      Role,
      Password,
      WarehouseGroup,
      Defaultwarehouse,
    } = req.body;
    const adduser = new User({
      userName,
      FirstName,
      LastName,
      Mobile,
      Email,
      Store,
      Role,
      Password,
      WarehouseGroup,
      Defaultwarehouse,
    });
    const result = await adduser.save();
    res.status(200).json({ message: Data_add_Successfully, result });
  } catch (err) {
    res.status(400).send({ message: "err found", err });
  }
});
router.post("/userlogin", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const finduser = await User.findOne({ Email });
    if (!finduser) {
      res.status(400).send({ message: "User not found" });
    }
    res.status(200).send({ message: "Login Successfully" });
  } catch (err) {
    res.status(400).send({ message: Error_found, err });
  }
});
router.get("/userlist", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).json({
      message: Error_found,
      err: err.message,
    });
  }
});
module.exports = router;
