const mongoose = require("mongoose");
const lookout = mongoose.Schema({
  lookoutName: {
    type: String,
  },
  description: {
    type: String,
  },
  lookoutVideo: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("Lookout", lookout);
