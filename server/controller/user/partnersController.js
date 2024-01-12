const Partners = require("../../model/partners_model");

const viewPartnerData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    const partnersData = await Partners.find({ state, city });

    res.json({
      success: true,
      PartnersData: partnersData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

module.exports = {
  viewPartnerData,
};
