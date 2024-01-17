const HomeBanner = require("../../model/home_banner");
const helpers = require("../../utils/helpers");

const saveHomeBanner = async (req, res) => {
  try {
    console.log(req.body, "home banner to save");
    const { state, city, restaurant, link } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const isExist = await HomeBanner.findOne({
      restaurant: restaurant,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `homeBanner/bannerPic/${restaurant}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newBanner = new HomeBanner({
        restaurant,
        link,
        bannerPic: imageURL,
        state,
        city,
      });

      await newBanner.save();

      res.status(200).json({
        success: true,
        message: `${restaurant}'s banner successfully uploaded.`,
      });
    } else {
      res.json({
        success: false,
        message: `${restaurant} restaurant already have a banner! `,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const viewHomeBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
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
  saveHomeBanner,
  viewHomeBanners,
};
