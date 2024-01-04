import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/User/Home";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default User;
