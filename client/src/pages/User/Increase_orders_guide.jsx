import React from "react";
import BusinessHeader from "../../components/user/Business_dev_page/BusinessHeader";
import Footer from "../../components/user/Footer_page/Footer";
import { IncreaseOrder } from "../../assets/images";
import WhatWeDo from "../../components/user/Business_dev_page/WhatWeDo";
import Navbar from "../../components/user/Navbar/Navbar";
import CustomerBenefits from "../../components/user/Business_dev_page/CustomerBenefits";

const Increase_orders_guide = () => {
  return (
    <>
      <Navbar />
      <BusinessHeader
        headingStyle="ml-[310px]"
        backgroundImage={IncreaseOrder}
        heading="Customer Benefits"
      />
      <CustomerBenefits />
      <Footer />
    </>
  );
};

export default Increase_orders_guide;
