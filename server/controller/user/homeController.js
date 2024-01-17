const HomeBanner = require("../../model/home_banner");

const viewHomeBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    const homeBanners = await HomeBanner.find({ state, city }).sort({
      _id: -1,
    });

    res.json({
      success: true,
      HomeBanners: homeBanners,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};
module.exports = {
  viewHomeBanners,
};
