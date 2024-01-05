import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/User/Home";
import Must_visit_restaurant from "../pages/User/Must_visit_restaurant";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/must-visit-here" element={<Must_visit_restaurant />} />
      </Routes>
    </>
  );
};

export default User;
