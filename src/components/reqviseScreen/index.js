import React, { useState } from "react";

import Login from "../common/Login";
import Footer from "../Layout/Footer/footer";

import StartSection from "./startSection";
import Revqvise from "../../assets/images/reqviseLogo.svg";

const Index = () => {
  const [login, setLogin] = useState("login");
  return (
    <>
      {login === "login" ? (
        <Login
          logo={Revqvise}
          text="Reqvise is a tool that uses natural language processing to help system requirement engineers write requirements that are clear, consistent, and can be tested."
          onLogin={() => setLogin("reqSection")}
        />
      ) : (
        login === "reqSection" && <StartSection setLogin={setLogin} />
      )}

      <Footer />
    </>
  );
};

export default Index;
