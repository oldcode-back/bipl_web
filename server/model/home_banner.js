const mongoose = require("mongoose");
const homeBanner = mongoose.Schema({
  restaurant: {
    type: String,
  },
  bannerPic: {
    type: String,
  },
  link: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("HomeBanner", homeBanner);
