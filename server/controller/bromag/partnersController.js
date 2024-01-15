const Partners = require("../../model/partners_model");
const helpers = require("../../utils/helpers");
const PartnersBanner = require("../../model/partners_banner");

const jwtToken = require("jsonwebtoken");

const savePartnerData = async (req, res) => {
  try {
    console.log(req.body, "partner to save");
    const { restaurant, location, state, city, link } = req.body;
    const isExist = await Partners.findOne({
      restaurant: restaurant,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `partners/restaurantPic/${restaurant}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newRestaurant = new Partners({
        restaurant: restaurant,
        location: location,
        restaurantPic: imageURL,
        state: state,
        city: city,
        link: link,
      });

      await newRestaurant.save();

      res.status(200).json({
        success: true,
        message: `${restaurant}'s details saved.`,
      });
    } else {
      res.json({
        success: false,
        message: "This restaurant is already exist!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const viewPartnerData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    const partnersData = await Partners.find({ state, city }).sort({
      _id: -1,
    });

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

const updatePartnerData = async (req, res) => {
  try {
    const { restaurant, location, state, city, link } = req.body;
    const restaurantId = req.params.restaurantId;
    const Restaurant = await Partners.findOne({ _id: restaurantId });

    if (!Restaurant) {
      return res.json({
        success: false,
        message: "Restaurant not found",
      });
    }

    let imageURL;
    const file = req.files && req.files[0];

    if (file) {
      const OldRestaurantPic = Restaurant.restaurantPic;
      await helpers.deleteS3File(OldRestaurantPic);

      const imagePath = `partners/restaurantPic/${restaurant}/${file.filename}`;
      await helpers.uploadFile(file, imagePath);

      imageURL = helpers.getS3FileUrl(imagePath);
      helpers.deleteFile(file.path);
    }

    const updatedData = {
      ...(imageURL && { restaurantPic: imageURL }),
      restaurant: restaurant,
      location: location,
      state: state,
      city: city,
      link: link,
    };

    console.log(updatedData, "updated data");
    const updatedPartner = await Partners.findOneAndUpdate(
      { _id: restaurantId },
      { $set: updatedData },
      { new: true }
    );

    if (!updatedPartner) {
      return res.json({
        success: false,
        message: "Restaurant not found",
      });
    }

    const messageType = imageURL
      ? "Restaurant's image updated successfully"
      : "Restaurant's data updated successfully";

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

const getPartnerToUpdate = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const RestaurantData = await Partners.findOne({
      _id: restaurantId,
    });
    if (RestaurantData) {
      res.json({ success: true, RestaurantData });
    } else {
      res.status(404).json({ success: false, message: "Restaurant not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const dropPartnersData = async (req, res) => {
  try {
    const { restaurantId } = req.body;
    const foundedRestaurant = await Partners.findOneAndDelete({
      _id: restaurantId,
    });
    res.status(200).json({
      success: true,
      message: `${foundedRestaurant.restaurant} is deleted!`,
    });
  } catch (error) {
    console.log(error);
  }
};

const savePartnersBanner = async (req, res) => {
  try {
    console.log(req.body, "partners banner to save");
    const { state, city, banner } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const isExist = await PartnersBanner.findOne({
      bannerName: banner,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `partnersBanner/bannerPic/${banner}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newBanner = new PartnersBanner({
        bannerName: banner,
        bannerPic: imageURL,
        state: state,
        city: city,
      });

      await newBanner.save();

      res.status(200).json({
        success: true,
        message: `Banner successfully recorded.`,
      });
    } else {
      res.json({
        success: false,
        message: "This banner name is already exist!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const viewPartnersBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
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

const dropPartnersBanners = async (req, res) => {
  try {
    const { bannerId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedRestaurant = await PartnersBanner.findOneAndDelete({
      _id: bannerId,
    });
    res.status(200).json({
      success: true,
      message: `${foundedRestaurant.bannerName} is deleted!`,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  savePartnerData,
  viewPartnerData,
  updatePartnerData,
  getPartnerToUpdate,
  dropPartnersData,
  savePartnersBanner,
  viewPartnersBanners,
  dropPartnersBanners,
};
