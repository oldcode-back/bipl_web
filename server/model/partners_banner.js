const mongoose = require("mongoose");
const partnersBanner = mongoose.Schema({
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

module.exports = mongoose.model("PartnersBanner", partnersBanner);
