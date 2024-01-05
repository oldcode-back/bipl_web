import React from 'react';
import Navbar from '../../components/user/Starting_page/Navbar';
import Banner from '../../components/user/Starting_page/Banner';
import ChildBanner from '../../components/user/Starting_page/ChildBanner';
import Testimonials from '../../components/user/Starting_page/Testimonials';
import Footer from '../../components/user/Footer_page/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <ChildBanner/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default Home;
