const Upcoming = require("../../model/upcoming_model");
const UpcomingBanner = require("../../model/upcoming_banner_model");

const viewUpcomingBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;

    const upcomingBanners = await UpcomingBanner.find({ state, city });

    res.json({
      success: true,
      UpcomingBanners: upcomingBanners,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const viewUpcomingData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    const upcomingData = await Upcoming.find({ state, city });

    res.json({
      success: true,
      UpcomingData: upcomingData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

module.exports = {
  viewUpcomingBanners,
  viewUpcomingData
};
