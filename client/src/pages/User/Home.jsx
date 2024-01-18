import React, { useState } from "react";
import Banner from "../../components/user/Starting_page/Banner";
import ChildBanner from "../../components/user/Starting_page/ChildBanner";
import Testimonials from "../../components/user/Starting_page/Testimonials";
import Footer from "../../components/user/Footer_page/Footer";
import Header from "../../components/user/Starting_page/Header";
import Navbar from "../../components/user/Navbar/Navbar";

const Home = () => {
  const [banner,setBanner] = useState("")
  function display(value) {
    console.log(value);
    setBanner(value)
  }
  return (
    <>
      <Navbar newImage={banner}/>
      <Header handleChange={display} />
      <Banner/>
      <ChildBanner />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
