const express = require("express");
const userRouter = express.Router();

const partnerController = require('../controller/user/partnersController');
const upcomingController = require('../controller/user/upcomingController');
const mustVisitController = require('../controller/user/mustVisitController');

//partner
userRouter.get('/partnersData', partnerController.viewPartnerData)
userRouter.get('/partnersBanners', partnerController.viewPartnersBanners)

//upcoming
userRouter.get('/upcomingBanners', upcomingController.viewUpcomingBanners)
userRouter.get('/upcomingData', upcomingController.viewUpcomingData)

//must visit
userRouter.get('/mustVisitData', mustVisitController.viewMustVisitData)
userRouter.get('/mustVisitBanners', mustVisitController.viewMustVisitBanners)

module.exports = userRouter;
