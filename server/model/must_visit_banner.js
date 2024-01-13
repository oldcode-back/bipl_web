const mongoose = require("mongoose");
const mustVisitBanner = mongoose.Schema({
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

module.exports = mongoose.model("MustVisitBanner", mustVisitBanner);
