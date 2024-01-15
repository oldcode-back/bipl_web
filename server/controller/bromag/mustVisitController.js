const MustVisit = require("../../model/must_visit_model");
const MustVisitBanner = require("../../model/must_visit_banner");
const helpers = require("../../utils/helpers");

const saveMustVisitData = async (req, res) => {
  try {
    console.log(req.body, "body data");
    const { restaurant, location, rate, state, city, link } = req.body;
    const isExist = await MustVisit.findOne({
      restaurant: restaurant,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `mustVisit/restaurantPic/${restaurant}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);
      const roundedRate = parseFloat(rate).toFixed(1);

      const newRestaurant = new MustVisit({
        restaurant: restaurant,
        location: location,
        restaurantPic: imageURL,
        rate: roundedRate,
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

const viewMustVisitData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    console.log(state, "hiy");
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const mustVisit = await MustVisit.find({ state, city }).sort({
      _id: -1,
    });

    res.json({
      success: true,
      MustVisit: mustVisit,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const saveMustVisitBanner = async (req, res) => {
  try {
    console.log(req.body, "partners banner to save");
    const { state, city, banner } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const isExist = await MustVisitBanner.findOne({
      bannerName: banner,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `mustVisitBanner/bannerPic/${banner}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newBanner = new MustVisitBanner({
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

const viewMustVisitBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const mustVisitBanner = await MustVisitBanner.find({ state, city }).sort({
      _id: -1,
    });

    res.json({
      success: true,
      MustVisitBanners: mustVisitBanner,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const dropMustVisitBanners = async (req, res) => {
  try {
    const { bannerId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedRestaurant = await MustVisitBanner.findOneAndDelete({
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

const dropMustVisitData = async (req, res) => {
  try {
    const { restaurantId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedRestaurant = await MustVisit.findOneAndDelete({
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

const getMustVisitToUpdate = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const RestaurantData = await MustVisit.findOne({
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

const updateMustVisitData = async (req, res) => {
  try {
    const { restaurant, location, state, city, link, rate } = req.body;
    const restaurantId = req.params.restaurantId;
    const Restaurant = await MustVisit.findOne({ _id: restaurantId });

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

      const imagePath = `mustVisit/restaurantPic/${restaurant}/${file.filename}`;

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
      rate: rate,
    };

    console.log(updatedData, "updated data");
    const updatedPartner = await MustVisit.findOneAndUpdate(
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
  saveMustVisitData,
  viewMustVisitData,
  saveMustVisitBanner,
  viewMustVisitBanners,
  dropMustVisitBanners,
  dropMustVisitData,
  getMustVisitToUpdate,
  updateMustVisitData,
};
