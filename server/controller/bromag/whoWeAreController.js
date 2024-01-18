const WhoWeAreBanner = require("../../model/who_we_are_banner");
const helpers = require("../../utils/helpers");


const saveWhoWeAreBanner = async (req, res) => {
  try {
    console.log(req.body, "who we are banner to save");
    const { state, city, banner } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const isExist = await WhoWeAreBanner.findOne({
      bannerName: banner,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `whoWeAreBanner/bannerPic/${banner}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newBanner = new WhoWeAreBanner({
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



const viewWhoWeAreBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
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

const dropWhoWeAreBanner = async (req, res) => {
  try {
    const { bannerId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedBanner = await WhoWeAreBanner.findOneAndDelete({
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
module.exports = {
  saveWhoWeAreBanner,
  viewWhoWeAreBanners,
  dropWhoWeAreBanner
};
