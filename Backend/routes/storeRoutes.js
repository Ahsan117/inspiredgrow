const express = require("express");
const Store = require("../models/storeModel");
const Role = require("../models/roleModel");
const storeSystem = require("../models/storeSystemModel");
const router = express.Router();

router.post("/add/Store", async (req, res) => {
  try {
    const {
      StoreCode,
      StoreName,
      Mobile,
      Email,
      Phone,
      Gst_Number,
      Tax_Number,
      Pan_Number,
      Store_website,
      Bank_details,
      Country,
      State,
      City,
      PostCode,
      Address,
    } = req.body;
    const newData = new Store({
      StoreCode,
      StoreName,
      Mobile,
      Email,
      Phone,
      Gst_Number,
      Tax_Number,
      Pan_Number,
      Store_website,
      Bank_details,
      Country,
      State,
      City,
      PostCode,
      Address,
    });
    const result = await newData.save();
    res.status(200).send({ message: "Data Saved Successfully", result });
  } catch (error) {
    res.status(500).send({ message: "Internal server Error", error });
  }
});
router.get("/add/store", async (req, res) => {
  try {
    const result = await Store.find({});
    res.status(200).send({ message: "Data Fetched Successfully", result });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error", err });
  }
});
router.post("/add/systemzone", async (req, res) => {
  try {
    const {
      Timezone,
      Dateformat,
      TimeFormat,
      Currency,
      CurrencySymbolPlacement,
      Decimals,
      DecimalforQuantity,
      Language,
    } = req.body;
    const result = new storeSystem({
      Timezone,
      Dateformat,
      TimeFormat,
      Currency,
      CurrencySymbolPlacement,
      Decimals,
      DecimalforQuantity,
      Language,
    });
    const data = await result.save();
    res.status(200).send({ message: "Data successfully", data });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error });
  }
});
module.exports = router;
