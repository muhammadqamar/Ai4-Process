import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Reqvise from "../components/reqvise/index"

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reqvise" element={<Reqvise />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
