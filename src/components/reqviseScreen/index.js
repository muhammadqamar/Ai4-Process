import React from "react";

import Login from "../common/Login";
import Footer from "../Layout/Footer/footer";
import Accordion from "../common/Accordion";

import Revqvise from "../../assets/images/reqviseLogo.svg";

const Index = () => {
  return (
    <>
      <Login
        logo={Revqvise}
        text="Reqvise is a tool that uses natural language processing to help system requirement engineers write requirements that are clear, consistent, and can be tested."
      />

      {/* <Accordion /> */}
      <Footer />
    </>
  );
};

export default Index;
