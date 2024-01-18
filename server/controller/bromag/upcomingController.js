const Upcoming = require("../../model/upcoming_model");
const UpcomingBanner = require("../../model/upcoming_banner_model");
const jwtToken = require("jsonwebtoken");
const helpers = require("../../utils/helpers");

const saveUpcomingData = async (req, res) => {
  try {
    console.log(req.body, "partner to save");
    const { restaurant, location, state, city, link } = req.body;
    const isExist = await Upcoming.findOne({
      restaurant: restaurant,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `upcoming/restaurantPic/${restaurant}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newRestaurant = new Upcoming({
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

const viewUpcomingData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const upcoming = await Upcoming.find({ state, city }).sort({
      _id: -1,
    }); 

    res.json({
      success: true,
      UpcomingData: upcoming,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const saveUpcomingBanner = async (req, res) => {
  try {
    console.log(req.body, "partners banner to save");
    const { state, city, banner } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const isExist = await UpcomingBanner.findOne({
      bannerName: banner,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `upcomingBanner/bannerPic/${banner}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newBanner = new UpcomingBanner({
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

const viewUpcomingBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const upcomingBanners = await UpcomingBanner.find({ state, city }).sort({
      _id: -1,
    });

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

const dropUpcomingBanners = async (req, res) => {
  try {
    const { bannerId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedBanner = await UpcomingBanner.findOneAndDelete({
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

const dropUpcomingData = async (req, res) => {
  try {
    const { restaurantId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedRestaurant = await Upcoming.findOneAndDelete({
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

const getUpcomingToUpdate = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const RestaurantData = await Upcoming.findOne({
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

const updateUpcomingData = async (req, res) => {
  try {
    const { restaurant, location, state, city, link, rate } = req.body;
    const restaurantId = req.params.restaurantId;
    const Restaurant = await Upcoming.findOne({ _id: restaurantId });

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
      const imagePath = `upcoming/restaurantPic/${restaurant}/${file.filename}`;

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
    const updatedPartner = await Upcoming.findOneAndUpdate(
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
module.exports = {
  saveUpcomingData,
  viewUpcomingData,
  saveUpcomingBanner,
  viewUpcomingBanners,
  dropUpcomingBanners,
  dropUpcomingData,
  getUpcomingToUpdate,
  updateUpcomingData,
};
