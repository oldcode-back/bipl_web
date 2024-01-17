const TeamMember = require("../../model/team_model");
const Lookout = require("../../model/lookout_model");

const viewTeamMembers = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const teamMembers = await TeamMember.find({ state, city });

    res.json({
      success: true,
      TeamMembers: teamMembers,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const viewLookout = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const lookoutData = await Lookout.find({ state, city });

    res.json({
      success: true,
      LookoutData: lookoutData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};
module.exports = {
  viewTeamMembers,
  viewLookout,
};
