import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import User from "./router/User";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/*" element={<User />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
