import React from "react";
import BusinessHeader from "../../components/user/Business_dev_page/BusinessHeader";
import Footer from "../../components/user/Footer_page/Footer";
import { IncreaseOrder } from "../../assets/images";
import WhatWeDo from "../../components/user/Business_dev_page/WhatWeDo";

const Increase_orders_guide = () => {
  return (
    <>
      <BusinessHeader
        headingStyle="ml-[450px]"
        backgroundImage={IncreaseOrder}
        heading="How to increase your orders"
      />
      <WhatWeDo />
      <Footer />
    </>
  );
};

export default Increase_orders_guide;
