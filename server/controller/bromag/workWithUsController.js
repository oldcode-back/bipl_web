const TeamMember = require("../../model/team_model");
const Lookout = require("../../model/lookout_model");
const WorkWithUsBanner = require("../../model/work_with_us_banner");

const helpers = require("../../utils/helpers");

const saveTeamMemberData = async (req, res) => {
  try {
    console.log(req.body, "body data team");
    const { employee, designation, about, state, city } = req.body;
    const isExist = await TeamMember.findOne({
      employee: employee,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `teamMember/photo/${employee}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newEmployee = new TeamMember({
        employee: employee,
        designation: designation,
        photo: imageURL,
        about: about,
        state: state,
        city: city,
      });

      await newEmployee.save();

      res.status(200).json({
        success: true,
        message: `${employee}'s details saved.`,
      });
    } else {
      res.json({
        success: false,
        message: "This employee is already exist!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const viewTeamMembers = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const teamMembers = await TeamMember.find({ state, city }).sort({
      _id: -1,
    });

    res.json({
      success: true,
      TeamMembers: teamMembers,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const getTeamMemberToUpdate = async (req, res) => {
  try {
    const memberId = req.params.memberId;
    const TeamData = await TeamMember.findOne({
      _id: memberId,
    });
    if (TeamData) {
      res.json({ success: true, TeamData });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Team member not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateTeamMemberData = async (req, res) => {
  try {
    const { employee, designation, about, state, city } = req.body;

    const memberId = req.params.memberId;
    const Member = await TeamMember.findOne({ _id: memberId });
    if (!Member) {
      return res.json({
        success: false,
        message: "Team member not found",
      });
    }

    let imageURL;
    const file = req.files && req.files[0];

    if (file) {
      const OldTeamMemberPic = Member.photo;
      await helpers.deleteS3File(OldTeamMemberPic);
      const imagePath = `teamMember/photo/${employee}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      imageURL = helpers.getS3FileUrl(imagePath);
      helpers.deleteFile(file.path);
    }

    const updatedData = {
      ...(imageURL && { photo: imageURL }),
      employee: employee,
      designation: designation,
      photo: imageURL,
      about: about,
      state: state,
      city: city,
    };

    console.log(updatedData, "updated data");
    const updatedTeamMember = await TeamMember.findOneAndUpdate(
      { _id: memberId },
      { $set: updatedData },
      { new: true }
    );

    if (!updatedTeamMember) {
      return res.json({
        success: false,
        message: "Team member not found",
      });
    }

    res.json({
      success: true,
      message: "Team member's data updated successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const dropTeamMember = async (req, res) => {
  try {
    const { memberId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedTeamMember = await TeamMember.findOneAndDelete({
      _id: memberId,
    });
    res.status(200).json({
      success: true,
      message: `${foundedTeamMember.employee} is deleted!`,
    });
  } catch (error) {
    console.log(error);
  }
};

const saveLookoutVdo = async (req, res) => {
  try {
    console.log(req.body, "body data lookout");
    const { description, state, city, lookoutName } = req.body;
    const isExist = await Lookout.findOne({
      lookoutName: lookoutName,
    });

    if (!isExist) {
      const file = req.files[0];

      console.log(file, "file");
      const videoPath = `lookout/video/${lookoutName}/${file.filename}`;

      await helpers.uploadFile(file, videoPath);

      const videoURL = helpers.getS3FileUrl(videoPath);

      helpers.deleteFile(file.path);

      const newLookout = new Lookout({
        lookoutName: lookoutName,
        description: description,
        lookoutVideo: videoURL,
        state: state,
        city: city,
      });

      await newLookout.save();

      res.status(200).json({
        success: true,
        message: `New lookout added`,
      });
    } else {
      res.json({
        success: false,
        message: "This Lookout name is already exist!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const ViewLookoutData = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const lookoutData = await Lookout.find({ state, city }).sort({
      _id: -1,
    });

    res.json({
      success: true,
      LookoutData: lookoutData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const dropLookoutData = async (req, res) => {
  try {
    const { lookoutId } = req.body;
    console.log(req.body);
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedTeamMember = await Lookout.findOneAndDelete({
      _id: lookoutId,
    });
    res.status(200).json({
      success: true,
      message: `${foundedTeamMember.lookoutName} is deleted!`,
    });
  } catch (error) {
    console.log(error);
  }
};

const getLookoutToUpdate = async (req, res) => {
  try {
    const lookoutId = req.params.lookoutId;
    const LookoutData = await Lookout.findOne({
      _id: lookoutId,
    });
    if (LookoutData) {
      res.json({ success: true, LookoutData });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Lookout video not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateLookoutVdo = async (req, res) => {
  try {
    console.log(req.body);

    const { description, state, city, lookoutName } = req.body;
    const lookoutId = req.params.lookoutId;
    const Member = await Lookout.findOne({ _id: lookoutId });
    if (!Member) {
      return res.json({
        success: false,
        message: "Lookout data not found",
      });
    }

    let videoURL;
    const file = req.files[0];

    if (file) {
      const OldLookoutVideo = Member.lookoutVideo;
      await helpers.deleteS3File(OldLookoutVideo);

      const videoPath = `lookout/video/${lookoutName}/${file.filename}`;

      await helpers.uploadFile(file, videoPath);

      videoURL = helpers.getS3FileUrl(videoPath);
      helpers.deleteFile(file.path);
    }

    const updatedData = {
      ...(videoURL && { lookoutVideo: videoURL }),
      lookoutName: lookoutName,
      description: description,
      lookoutVideo: videoURL,
      state: state,
      city: city,
    };

    console.log(updatedData, "updated data");
    const updatedLookoutData = await Lookout.findOneAndUpdate(
      { _id: lookoutId },
      { $set: updatedData },
      { new: true }
    );

    if (!updatedLookoutData) {
      return res.json({
        success: false,
        message: "Lookout not found",
      });
    }

    res.json({
      success: true,
      message: "Lookout data updated successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const saveWorkWithUsBanner = async (req, res) => {
  try {
    console.log(req.body, "work with us banner to save");
    const { state, city, banner } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const isExist = await WorkWithUsBanner.findOne({
      bannerName: banner,
    });

    if (!isExist) {
      const file = req.files[0];
      console.log(file, "file");
      const imagePath = `workWithUsBanner/bannerPic/${banner}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      const imageURL = helpers.getS3FileUrl(imagePath);

      helpers.deleteFile(file.path);

      const newBanner = new WorkWithUsBanner({
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

const viewWorkWithUsBanners = async (req, res) => {
  try {
    const state = req.query.state;
    const city = req.query.city;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const workWithUsBanners = await WorkWithUsBanner.find({ state, city }).sort(
      {
        _id: -1,
      }
    );

    res.json({
      success: true,
      WorkWithUsBanners: workWithUsBanners,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

const dropWorkWithUsBanner = async (req, res) => {
  try {
    const { bannerId } = req.body;
    // const decoded = jwtToken.verify(token, process.env.COMPANY_SECRET_KEY);
    // const bromagId = decoded.id;
    // console.log(bromagId, "bromagId");
    const foundedBanner = await WorkWithUsBanner.findOneAndDelete({
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

const getWorkWithUsBannerToUpdate = async (req, res) => {
  try {
    const bannerId = req.params.bannerId;
    const BannerData = await WorkWithUsBanner.findOne({
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

const updateWorkWithUsBannerData = async (req, res) => {
  try {
    console.log(req.body, "data from body");
    const { state, city, banner } = req.body;

    const bannerId = req.params.bannerId;
    const Banner = await WorkWithUsBanner.findOne({ _id: bannerId });

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

      const imagePath = `workWithUsBanner/bannerPic/${banner}/${file.filename}`;

      await helpers.uploadFile(file, imagePath);

      imageURL = helpers.getS3FileUrl(imagePath);
      helpers.deleteFile(file.path);
    }

    const updatedData = {
      ...(imageURL && { bannerPic: imageURL }),
      bannerName: banner,
      bannerPic: imageURL,
      state,
      city,
    };

    console.log(updatedData, "updated data");
    const updatedPartner = await WorkWithUsBanner.findOneAndUpdate(
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
  saveTeamMemberData,
  viewTeamMembers,
  getTeamMemberToUpdate,
  updateTeamMemberData,
  dropTeamMember,
  saveLookoutVdo,
  ViewLookoutData,
  dropLookoutData,
  getLookoutToUpdate,
  updateLookoutVdo,
  saveWorkWithUsBanner,
  viewWorkWithUsBanners,
  dropWorkWithUsBanner,
  updateWorkWithUsBannerData,
  getWorkWithUsBannerToUpdate,
};
