const express = require("express");
const userRouter = express.Router();

const partnerController = require('../controller/user/partnersController');

userRouter.get('/partnersData', partnerController.viewPartnerData)

module.exports = userRouter;
