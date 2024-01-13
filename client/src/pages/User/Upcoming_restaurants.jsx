import React from "react";
import Header from "../../components/user/Upcoming_Page/Header";
import Footer from "../../components/user/Footer_page/Footer";
import UpcomingCards from "../../components/user/Upcoming_Page/Upcoming_cards";
import Navbar from "../../components/user/Navbar/Navbar";

const Upcoming_restaurants = () => {
  return (
    <>
      <Navbar />
      <Header />
      <UpcomingCards />
      <Footer />
    </>
  );
};

export default Upcoming_restaurants;
