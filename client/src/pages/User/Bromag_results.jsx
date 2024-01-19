import React from "react";
import BusinessHeader from "../../components/user/Business_dev_page/BusinessHeader";
import Footer from "../../components/user/Footer_page/Footer";
import { BromagResult } from "../../assets/images";
import WhatWeDo from "../../components/user/Business_dev_page/WhatWeDo";
import Navbar from "../../components/user/Navbar/Navbar";
import RestaurantPartners from "../../components/user/Business_dev_page/RestaurantPartners";

const Bromag_results = () => {
  return (
    <>
      <Navbar />
      <BusinessHeader
        headingStyle="ml-[330px]"
        backgroundImage={BromagResult}
        heading=" Restuarant Partners "
      />
      <RestaurantPartners />
      <Footer />
    </>
  );
};

export default Bromag_results;
