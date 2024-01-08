import React from "react";
import BusinessHeader from "../../components/user/Business_dev_page/BusinessHeader";
import Footer from "../../components/user/Footer_page/Footer";
import { ourBlog3 } from "../../assets/images";
import WhatWeDo from "../../components/user/Business_dev_page/WhatWeDo";

const Bromag_results = () => {
  return (
    <>
      <BusinessHeader backgroundImage={ourBlog3} heading=" BROMAG results " />
      <WhatWeDo/>
      <Footer />
    </>
  );
};

export default Bromag_results;
