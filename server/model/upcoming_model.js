const mongoose = require("mongoose");
const upcoming = mongoose.Schema({
  restaurant: {
    type: String,
  },
  location: {
    type: String,
  },
  restaurantPic: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model("Upcoming", upcoming);
