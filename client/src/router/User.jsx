import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/User/Home";
import Must_visit_restaurant from "../pages/User/Must_visit_restaurant";
import Upcoming_restaurants from "../pages/User/Upcoming_restaurants";
import Partner_restaurants from "../pages/User/Partner_restaurants";
import Who_we_are from "../pages/User/Who_we_are";
import Work_with_us from "../pages/User/Work_with_us";
import Business_development from "../pages/User/Business_development";
import Increase_orders_guide from "../pages/User/Increase_orders_guide";
import Bromag_results from "../pages/User/Bromag_results";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/must-visit-here" element={<Must_visit_restaurant />} />
        <Route path="/partner-restaurants" element={<Partner_restaurants />} />
        <Route path="/upcoming-restaurants" element={<Upcoming_restaurants />} />
        <Route path="/who-we-are" element={<Who_we_are />} />
        <Route path="/work-with-us" element={<Work_with_us />} />
        <Route path="/business-dev" element={<Business_development />} />
        <Route path="/order-increase-tips" element={<Increase_orders_guide />} />
        <Route path="/bromag-results" element={<Bromag_results />} />

      </Routes>
    </>
  );
};

export default User;
