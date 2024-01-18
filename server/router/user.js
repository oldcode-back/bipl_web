const express = require("express");
const userRouter = express.Router();

const partnerController = require('../controller/user/partnersController');
const upcomingController = require('../controller/user/upcomingController');
const mustVisitController = require('../controller/user/mustVisitController');
const workWithUsController = require('../controller/user/workWithUsController');
const homeController = require('../controller/user/homeController');
const whoWeAreController = require('../controller/user/whoWeAreController');



//partner
userRouter.get('/partnersData', partnerController.viewPartnerData)
userRouter.get('/partnersBanners', partnerController.viewPartnersBanners)

//upcoming
userRouter.get('/upcomingData', upcomingController.viewUpcomingData)
userRouter.get('/upcomingBanners', upcomingController.viewUpcomingBanners)

//must visit
userRouter.get('/mustVisitData', mustVisitController.viewMustVisitData)
userRouter.get('/mustVisitBanners', mustVisitController.viewMustVisitBanners)

// work with us
userRouter.get('/teamMembersData', workWithUsController.viewTeamMembers)
userRouter.get('/lookoutData', workWithUsController.viewLookout)

// home banner
userRouter.get('/homeBanners', homeController.viewHomeBanners)

// who we are banners
userRouter.get('/whoWeAreBanners', whoWeAreController.viewWhoWeAreBanners)


userRouter.get('/workWithUsBanners', workWithUsController.viewWorkWithUsBanners)



module.exports = userRouter;
