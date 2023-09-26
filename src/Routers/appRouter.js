import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Footer from "../components/Layout/Footer/footer";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
