const Partners = require("../../model/partners_model");
const PartnersBanner = require("../../model/partners_banner");


const viewPartnerData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    const partnersData = await Partners.find({ state, city })

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

const viewPartnersBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;

    const partnersBanners = await PartnersBanner.find({ state, city }).sort({
      _id: -1,
    });

    res.json({
      success: true,
      PartnersBanners: partnersBanners,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};
module.exports = {
  viewPartnerData,
  viewPartnersBanners
};
