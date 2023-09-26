import React from "react";
// import DragDrop from "../common/dragDrop";

import Login from "../common/Login";
import Footer from "../Layout/Footer/footer";

import Libersift from "../../assets/images/login-libersift-logo.svg";

const Index = () => {
  return (
    <>
      <Login
        logo={Libersift}
        text="Libersift is AI-powered search tool that revolutionizes the way you navigate technical documentation. Libersift leverages advanced AI algorithms to deliver fast and accurate answers to your queries."
      />
      <Footer />
    </>
  );
};

export default Index;
