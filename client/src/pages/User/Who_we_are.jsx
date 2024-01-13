import React from "react";
import Header from "../../components/user/Who_we_are_page/Header";
import WhoSection from "../../components/user/Who_we_are_page/WhoSection";
import Footer from "../../components/user/Footer_page/Footer";
import OurBlog from "../../components/user/Who_we_are_page/OurBlog";
import Glimpses from "../../components/user/Who_we_are_page/Glimpses";
import Navbar from "../../components/user/Navbar/Navbar";

const Who_we_are = () => {
  return (
    <>
      <Navbar />
      <Header />
      <WhoSection />
      <OurBlog />
      <Glimpses />
      <Footer />
    </>
  );
};

export default Who_we_are;
