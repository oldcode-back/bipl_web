import React from 'react';
import BusinessHeader from '../../components/user/Business_dev_page/BusinessHeader';
import Footer from '../../components/user/Footer_page/Footer';
import WhatWeDo from '../../components/user/Business_dev_page/WhatWeDo';
import WhatWeLearnAbout from '../../components/user/Business_dev_page/WhatWeLearnAbout';
import Challenges from '../../components/user/Business_dev_page/Challenges';

const Business_development = () => {
  return (
    <div>
      <BusinessHeader/>
      <WhatWeDo/>
      <WhatWeLearnAbout/>
      <Challenges/>
      <Footer/>
    </div>
  );
}

export default Business_development;
