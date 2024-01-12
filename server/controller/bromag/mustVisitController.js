
const MustVisit = require("../../model/must_visit_model");
const helpers = require("../../utils/helpers");

const saveMustVisitData = async (req, res) => {
    try {
      console.log(req.body,"body data");
      const { restaurant, location } = req.body;
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
  
        const newRestaurant = new MustVisit({
          restaurant: restaurant,
          location: location,
          restaurantPic: imageURL,
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


  module.exports = {
    saveMustVisitData,
  };