import React from "react";
import BusinessHeader from "../../components/user/Business_dev_page/BusinessHeader";
import Footer from "../../components/user/Footer_page/Footer";
import { BromagResult } from "../../assets/images";
import WhatWeDo from "../../components/user/Business_dev_page/WhatWeDo";

const Bromag_results = () => {
  return (
    <>
      <BusinessHeader
        headingStyle="ml-[295px]"
        backgroundImage={BromagResult}
        heading=" BROMAG results "
      />
      <WhatWeDo />
      <Footer />
    </>
  );
};

export default Bromag_results;
