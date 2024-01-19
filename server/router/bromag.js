const express = require("express");
const bromagRouter = express.Router();
const upload = require('../utils/uploaders')


const partnerController = require('../controller/bromag/partnersController');
const mustVisitController = require('../controller/bromag/mustVisitController');
const accessController = require('../controller/bromag/accessController');
const upcomingController = require('../controller/bromag/upcomingController');
const workWithUsController = require('../controller/bromag/workWithUsController');
const homeController = require('../controller/bromag/homeController');
const whoWeAreController = require('../controller/bromag/whoWeAreController');





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
bromagRouter.get('/getPartnerBannerToUpdate/:bannerId', partnerController.getPartnerBannerToUpdate)
bromagRouter.put('/updatePartnerBanner/:bannerId',upload.ImageUploader.array('bannerPic', 1), partnerController.updatePartnerBannerData)


// must visit restaurant
bromagRouter.post('/addMustVisit',upload.ImageUploader.array('restaurantPic', 1), mustVisitController.saveMustVisitData)
bromagRouter.get('/mustVisit', mustVisitController.viewMustVisitData)
bromagRouter.post('/deleteMustVisitData', mustVisitController.dropMustVisitData)
bromagRouter.get('/getMustVisitToUpdate/:restaurantId', mustVisitController.getMustVisitToUpdate)
bromagRouter.put('/updateMustVisit/:restaurantId',upload.ImageUploader.array('restaurantPic', 1), mustVisitController.updateMustVisitData)


// banner for must visit page
bromagRouter.post('/addMustVisitBanner',upload.ImageUploader.array('bannerPic', 1), mustVisitController.saveMustVisitBanner)
bromagRouter.get('/mustVisitBanners', mustVisitController.viewMustVisitBanners)
bromagRouter.post('/deleteMustVisitBanners', mustVisitController.dropMustVisitBanners)
bromagRouter.get('/getMustVisitBannerToUpdate/:bannerId', mustVisitController.getMustVisitBannerToUpdate)
bromagRouter.put('/updateMustVisitBanner/:bannerId',upload.ImageUploader.array('bannerPic', 1), mustVisitController.updateMustVisitBannerData)


// upcoming restaurant
bromagRouter.post('/addUpcoming',upload.ImageUploader.array('restaurantPic', 1), upcomingController.saveUpcomingData)
bromagRouter.get('/upcomingData', upcomingController.viewUpcomingData)
bromagRouter.post('/deleteUpcomingData', upcomingController.dropUpcomingData)
bromagRouter.get('/getUpcomingToUpdate/:restaurantId', upcomingController.getUpcomingToUpdate)
bromagRouter.put('/updateUpcoming/:restaurantId',upload.ImageUploader.array('restaurantPic', 1), upcomingController.updateUpcomingData)


// banner for upcoming page
bromagRouter.post('/addUpcomingBanner',upload.ImageUploader.array('bannerPic', 1), upcomingController.saveUpcomingBanner)
bromagRouter.get('/upcomingBanners', upcomingController.viewUpcomingBanners)
bromagRouter.post('/deleteUpcomingBanners', upcomingController.dropUpcomingBanners)
bromagRouter.get('/getUpcomingBannerToUpdate/:bannerId', upcomingController.getUpcomingBannerToUpdate)
bromagRouter.put('/updateUpcomingBanner/:bannerId',upload.ImageUploader.array('bannerPic', 1), upcomingController.updateUpcomingBannerData)


//home banner
bromagRouter.post('/addHomeBanner',upload.ImageUploader.array('bannerPic', 1), homeController.saveHomeBanner)
bromagRouter.get('/homeBanners', homeController.viewHomeBanners)
bromagRouter.post('/deleteHomeBanner', homeController.dropHomeBanner)
bromagRouter.get('/getHomeBannerToUpdate/:bannerId', homeController.getHomeBannerToUpdate)
bromagRouter.put('/updateHomeBanner/:bannerId',upload.ImageUploader.array('bannerPic', 1), homeController.updateHomeBannerData)



// Work with us - Team
bromagRouter.post('/addTeamMember',upload.ImageUploader.array('photo', 1), workWithUsController.saveTeamMemberData)
bromagRouter.get('/teamMembers', workWithUsController.viewTeamMembers)
bromagRouter.get('/getTeamMemberToUpdate/:memberId', workWithUsController.getTeamMemberToUpdate)
bromagRouter.put('/updateTeamMember/:memberId',upload.ImageUploader.array('photo', 1), workWithUsController.updateTeamMemberData)
bromagRouter.post('/deleteTeamMember', workWithUsController.dropTeamMember)

// Work with us - Banners
bromagRouter.post('/addWorkWithUsBanner',upload.ImageUploader.array('bannerPic', 1), workWithUsController.saveWorkWithUsBanner)
bromagRouter.get('/workWithUsBanners', workWithUsController.viewWorkWithUsBanners)
bromagRouter.post('/deleteWorkWithUsBanner', workWithUsController.dropWorkWithUsBanner)
bromagRouter.get('/getWorkWithUsBannerToUpdate/:bannerId', workWithUsController.getWorkWithUsBannerToUpdate)
bromagRouter.put('/updateWorkWithUsBanner/:bannerId',upload.ImageUploader.array('bannerPic', 1), workWithUsController.updateWorkWithUsBannerData)


// Who we are - Banners
bromagRouter.post('/addWhoWeAreBanner',upload.ImageUploader.array('bannerPic', 1), whoWeAreController.saveWhoWeAreBanner)
bromagRouter.get('/whoWeAreBanners', whoWeAreController.viewWhoWeAreBanners)
bromagRouter.post('/deleteWhoWeAreBanner', whoWeAreController.dropWhoWeAreBanner)
bromagRouter.get('/getWhoWeAreUsBannerToUpdate/:bannerId', whoWeAreController.getWhoWeAreUsBannerToUpdate)
bromagRouter.put('/updateWhoWeAreUsBanner/:bannerId',upload.ImageUploader.array('bannerPic', 1), whoWeAreController.updateWhoWeAreUsBannerData)


// lookout section  
bromagRouter.post('/addLookoutVdo',upload.VideoUploader.array('lookoutVideo', 1), workWithUsController.saveLookoutVdo)
bromagRouter.get("/lookoutData", workWithUsController.ViewLookoutData);
bromagRouter.post('/deleteLookoutData', workWithUsController.dropLookoutData)
bromagRouter.get('/getLookoutToUpdate/:lookoutId', workWithUsController.getLookoutToUpdate)
bromagRouter.put('/updateLookout/:lookoutId', upload.VideoUploader.array('lookoutVideo', 1), workWithUsController.updateLookoutVdo)


module.exports = bromagRouter;
