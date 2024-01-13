import React from "react";
import Header from "../../components/user/Partner_coll_page/Header";
import PartnerCards from "../../components/user/Partner_coll_page/Partner_cards";
import Footer from "../../components/user/Footer_page/Footer";
import Navbar from "../../components/user/Navbar/Navbar";

const Partner_restaurants = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PartnerCards />
      <Footer />
    </>
  );
};

export default Partner_restaurants;
