import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import User from "./router/user";

const App = () => {
  return (
    <Fragment>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/*" element={<User />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
