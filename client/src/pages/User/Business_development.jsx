import React from "react";
import BusinessHeader from "../../components/user/Business_dev_page/BusinessHeader";
import Footer from "../../components/user/Footer_page/Footer";
import WhatWeDo from "../../components/user/Business_dev_page/WhatWeDo";
import WhatWeLearnAbout from "../../components/user/Business_dev_page/WhatWeLearnAbout";
import Challenges from "../../components/user/Business_dev_page/Challenges";
import { business1 } from "../../assets/images";
import Navbar from "../../components/user/Navbar/Navbar";

const Business_development = () => {
  return (
    <div>
      <Navbar/>
      <BusinessHeader
        headingStyle="ml-[225px]"
        backgroundImage={business1}
        heading="What We do"
      />
      <WhatWeDo />
      {/* <WhatWeLearnAbout /> */}
      {/* <Challenges /> */}
      <Footer />
    </div>
  );
};

export default Business_development;
