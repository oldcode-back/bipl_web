const WhoWeAreBanner = require("../../model/who_we_are_banner");
const helpers = require("../../utils/helpers");

const viewWhoWeAreBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    const whoWeAreBanners = await WhoWeAreBanner.find({ state, city }).sort({
      _id: -1,
    });

    res.json({
      success: true,
      WhoWeAreBanners: whoWeAreBanners,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};
module.exports = {
  viewWhoWeAreBanners,
};
