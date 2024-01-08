import React from "react";
import BusinessHeader from "../../components/user/Business_dev_page/BusinessHeader";
import Footer from "../../components/user/Footer_page/Footer";
import { ourBlog2 } from "../../assets/images";
import WhatWeDo from "../../components/user/Business_dev_page/WhatWeDo";

const Increase_orders_guide = () => {
  return (
    <>
      <BusinessHeader
        backgroundImage={ourBlog2}
        heading="How to increase your orders"
      />
      <WhatWeDo/>
      <Footer />
    </>
  );
};

export default Increase_orders_guide;
