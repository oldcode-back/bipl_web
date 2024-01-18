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

const dropHomeBanner = async (req, res) => {
  try {
    const { bannerId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedBanner = await HomeBanner.findOneAndDelete({
      _id: bannerId,
    });
    res.status(200).json({
      success: true,
      message: `${foundedBanner.bannerName} is deleted!`,
    });
  } catch (error) {
    console.log(error);
  }
};

const getHomeBannerToUpdate = async (req, res) => {
  try {
    const bannerId = req.params.bannerId;
    const BannerData = await HomeBanner.findOne({
      _id: bannerId,
    });

    if (BannerData) {
      res.json({ success: true, BannerData });
    } else {
      res.status(404).json({ success: false, message: "Banner not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateHomeBannerData = async (req, res) => {
  try {
    const { state, city, restaurant, link } = req.body;

    const bannerId = req.params.bannerId;
    const Banner = await HomeBanner.findOne({ _id: bannerId });

    if (!Banner) {
      return res.json({
        success: false,
        message: "Banner not found",
      });
    }

    let imageURL;
    const file = req.files && req.files[0];

    if (file) {
      const OldBannerPic = Banner.bannerPic;
      await helpers.deleteS3File(OldBannerPic);

      const imagePath = `homeBanner/bannerPic/${restaurant}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      imageURL = helpers.getS3FileUrl(imagePath);
      helpers.deleteFile(file.path);
    }

    const updatedData = {
      ...(imageURL && { bannerPic: imageURL }),
      restaurant,
      link,
      bannerPic: imageURL,
      state,
      city,
    };

    console.log(updatedData, "updated data");
    const updatedPartner = await MustVisit.findOneAndUpdate(
      { _id: bannerId },
      { $set: updatedData },
      { new: true }
    );

    if (!updatedPartner) {
      return res.json({
        success: false,
        message: "Banner not found",
      });
    }

    const messageType = imageURL
      ? "Banner's image updated successfully"
      : "Banner's data updated successfully";

    res.json({
      success: true,
      message: messageType,
      employment: updatedPartner,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  saveHomeBanner,
  viewHomeBanners,
  dropHomeBanner,
  getHomeBannerToUpdate,
  updateHomeBannerData,
};
