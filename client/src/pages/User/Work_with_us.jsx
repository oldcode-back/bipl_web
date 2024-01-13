import React from "react";
import Header from "../../components/user/Work_with_us_page/Header";
import Footer from "../../components/user/Footer_page/Footer";
import WeAreGrowing from "../../components/user/Work_with_us_page/WeAreGrowing";
import LookOut from "../../components/user/Work_with_us_page/LookOut";
import Navbar from "../../components/user/Navbar/Navbar";

const Work_with_us = () => {
  return (
    <>
      <Navbar />
      <Header />
      <WeAreGrowing />
      <LookOut />
      <Footer />
    </>
  );
};

export default Work_with_us;
