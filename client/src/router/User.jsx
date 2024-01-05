import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/User/Home";
import Must_visit_restaurant from "../pages/User/Must_visit_restaurant";
import Upcoming_restaurants from "../pages/User/Upcoming_restaurants";
import Partner_restaurants from "../pages/User/Partner_restaurants";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/must-visit-here" element={<Must_visit_restaurant />} />
        <Route path="/partner-restaurants" element={<Partner_restaurants />} />
        <Route path="/upcoming-restaurants" element={<Upcoming_restaurants />} />

      </Routes>
    </>
  );
};

export default User;
