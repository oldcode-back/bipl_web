const Bromag = require("../../model/bromag_model");
const jwtToken = require("jsonwebtoken");

verifyLogin = async (req, res) => {
  try {
    const { username, password } = req.body.data;
    const validUser = await Bromag.findOne({ username: username });

    if (validUser) {
      if (validUser.password == password) {
        const token = jwtToken.sign(
          { id: validUser._id },
          process.env.TOKEN_SECRET_KEY,
          {
            expiresIn: "30d",
          }
        );
        const necessaryData = {
          token,
          user: validUser.username,
        };
        res.status(200).json({
          success: true,
          necessaryData,
          message: `Welcome ${validUser.username}!`,
        });
      } else {
        res.json({
          success: false,
          message: "Incorrect username or password!",
        });
      }
    } else {
      res.json({
        success: false,
        // emailMessage: "Email did not matching!",
        message: "Incorrect username or password!",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, serverMessage: "Internal Server Error" });
  }
};

module.exports = {
  verifyLogin,
};
