const mongoose = require("mongoose");
const whoWeAreBanner = mongoose.Schema({
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

module.exports = mongoose.model("WhoWeAreBanner", whoWeAreBanner);
