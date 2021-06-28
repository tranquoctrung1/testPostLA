const express = require("express");
const router = express.Router();
const DataModel = require("../models/data.model");

router.post("/postData", async function (req, res) {
  const data = req.body;

  let result = await DataModel.insertMany([data]);

  if (result.length > 0) {
    res.json("Success");
  } else {
    res.json("Fail");
  }
});

module.exports = router;
