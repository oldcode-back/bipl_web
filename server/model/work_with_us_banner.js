const mongoose = require("mongoose");
const workWithUsBanner = mongoose.Schema({
  bannerName: {
    type: String,
  },
  bannerPic: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("WorkWithUsBanner", workWithUsBanner);
