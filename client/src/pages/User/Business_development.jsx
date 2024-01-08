import React from 'react';
import BusinessHeader from '../../components/user/Business_dev_page/BusinessHeader';
import Footer from '../../components/user/Footer_page/Footer';
import WhatWeDo from '../../components/user/Business_dev_page/WhatWeDo';
import WhatWeLearnAbout from '../../components/user/Business_dev_page/WhatWeLearnAbout';
import Challenges from '../../components/user/Business_dev_page/Challenges';
import { business1, ourBlog1 } from '../../assets/images';

const Business_development = () => {
  return (
    <div>
      <BusinessHeader backgroundImage={business1} heading="Business Development"/>
      <WhatWeDo/>
      <WhatWeLearnAbout/>
      <Challenges/>
      <Footer/>
    </div>
  );
}

export default Business_development;
