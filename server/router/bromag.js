const express = require("express");
const bromagRouter = express.Router();
const upload = require('../utils/uploaders')


const partnerController = require('../controller/bromag/partnersController');
const mustVisitController = require('../controller/bromag/mustVisitController');

// restaurant partners
bromagRouter.post('/addPartners',upload.ImageUploader.array('restaurantPic', 1), partnerController.savePartnerData)
bromagRouter.get('/partnersData', partnerController.viewPartnerData)
bromagRouter.put('/updatePartners/:restaurantId',upload.ImageUploader.array('restaurantPic', 1), partnerController.updatePartnerData)
bromagRouter.get('/getPartnerToUpdate/:restaurantId', partnerController.getPartnerToUpdate)
bromagRouter.post('/deletePartnersData', partnerController.dropPartnersData)

// must visit restaurant
bromagRouter.post('/addMustVisit',upload.ImageUploader.array('restaurantPic', 1), mustVisitController.saveMustVisitData)


module.exports = bromagRouter;
