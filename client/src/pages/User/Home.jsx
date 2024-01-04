import React from 'react';
import Navbar from '../../components/user/Starting_page.jsx/Navbar';
import Banner from '../../components/user/Starting_page.jsx/Banner';
import ChildBanner from '../../components/user/Starting_page.jsx/ChildBanner';
import Testimonials from '../../components/user/Starting_page.jsx/Testimonials';
import Footer from '../../components/user/Footer_page.jsx/Footer';

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
