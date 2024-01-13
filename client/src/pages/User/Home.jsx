import React from "react";
import Banner from "../../components/user/Starting_page/Banner";
import ChildBanner from "../../components/user/Starting_page/ChildBanner";
import Testimonials from "../../components/user/Starting_page/Testimonials";
import Footer from "../../components/user/Footer_page/Footer";
import Header from "../../components/user/Starting_page/Header";
import Navbar from "../../components/user/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <ChildBanner />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
