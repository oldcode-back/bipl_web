const MustVisit = require("../../model/must_visit_model");
const MustVisitBanner = require("../../model/must_visit_banner");
const helpers = require("../../utils/helpers");

const viewMustVisitBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;

    const mustVisitBanners = await MustVisitBanner.find({ state, city })
    res.json({
      success: true,
      MustVisitBanners: mustVisitBanners,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const viewMustVisitData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    const mustVisitData = await MustVisit.find({ state, city });

    res.json({
      success: true,
      MustVisitData: mustVisitData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

module.exports = {
  viewMustVisitBanners,
  viewMustVisitData
};
