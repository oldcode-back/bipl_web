const mongoose = require("mongoose");
const upcomingBanner = mongoose.Schema({
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

module.exports = mongoose.model("UpcomingBanner", upcomingBanner);
