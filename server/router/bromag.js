const express = require("express");
const bromagRouter = express.Router();
const upload = require('../utils/uploaders')


const partnerController = require('../controller/bromag/partnersController');
const mustVisitController = require('../controller/bromag/mustVisitController');
const accessController = require('../controller/bromag/accessController');
const upcomingController = require('../controller/bromag/upcomingController');




bromagRouter.post('/login', accessController.verifyLogin)

// restaurant partners
bromagRouter.post('/addPartners',upload.ImageUploader.array('restaurantPic', 1), partnerController.savePartnerData)
bromagRouter.get('/partnersData', partnerController.viewPartnerData)
bromagRouter.put('/updatePartners/:restaurantId',upload.ImageUploader.array('restaurantPic', 1), partnerController.updatePartnerData)
bromagRouter.get('/getPartnerToUpdate/:restaurantId', partnerController.getPartnerToUpdate)
bromagRouter.post('/deletePartnersData', partnerController.dropPartnersData)
// banner for partners page
bromagRouter.post('/addPartnersBanner',upload.ImageUploader.array('bannerPic', 1), partnerController.savePartnersBanner)
bromagRouter.get('/partnersBanners', partnerController.viewPartnersBanners)
bromagRouter.post('/deletePartnersBanners', partnerController.dropPartnersBanners)


// must visit restaurant
bromagRouter.post('/addMustVisit',upload.ImageUploader.array('restaurantPic', 1), mustVisitController.saveMustVisitData)
bromagRouter.get('/mustVisit', mustVisitController.viewMustVisitData)
bromagRouter.post('/deleteMustVisitData', mustVisitController.dropMustVisitData)

// banner for must visit page
bromagRouter.post('/addMustVisitBanner',upload.ImageUploader.array('bannerPic', 1), mustVisitController.saveMustVisitBanner)
bromagRouter.get('/mustVisitBanners', mustVisitController.viewMustVisitBanners)
bromagRouter.post('/deleteMustVisitBanners', mustVisitController.dropMustVisitBanners)



// upcoming restaurant
bromagRouter.post('/addUpcoming',upload.ImageUploader.array('restaurantPic', 1), upcomingController.saveUpcomingData)
bromagRouter.get('/upcomingData', upcomingController.viewUpcomingData)
bromagRouter.post('/deleteUpcomingData', upcomingController.dropUpcomingData)


// banner for upcoming page
bromagRouter.post('/addUpcomingBanner',upload.ImageUploader.array('bannerPic', 1), upcomingController.saveUpcomingBanner)
bromagRouter.get('/upcomingBanners', upcomingController.viewUpcomingBanners)
bromagRouter.post('/deleteUpcomingBanners', upcomingController.dropUpcomingBanners)



module.exports = bromagRouter;