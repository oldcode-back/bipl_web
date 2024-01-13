const mongoose = require("mongoose");
const mustVisit = mongoose.Schema({
  restaurant: {
    type: String,
  },
  location: {
    type: String,
  },
  restaurantPic: {
    type: String,
  },
  rate: {
    type: Number,
  },
  state: {
    type: String,
  },
  link: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("MustVisit", mustVisit);
