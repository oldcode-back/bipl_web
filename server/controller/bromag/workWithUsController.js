const TeamMember = require("../../model/team_model");
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

module.exports = {
  saveTeamMemberData,
  viewTeamMembers,
  getTeamMemberToUpdate,
  updateTeamMemberData,
  dropTeamMember,
};
