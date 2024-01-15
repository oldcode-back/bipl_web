const mongoose = require("mongoose");
const teamMember = mongoose.Schema({
  employee: {
    type: String,
  },
  photo: {
    type: String,
  },
  designation: {
    type: String,
  },
  about: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("TeamMember", teamMember);
