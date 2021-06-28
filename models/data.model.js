const mongoose = require("mongoose");

var data = new mongoose.Schema({
  len: String,
  uid: String,
  type: String,
  state: String,
  bat: String,
  interval: String,
  volume: String,
  lat: String,
  lon: String,
  alt: String,
  day: String,
  month: String,
  year: String,
  hour: String,
  min: String,
  sec: String,
  CRC: String,
});

var Data = mongoose.model("Data", data, "data");

module.exports = Data;
