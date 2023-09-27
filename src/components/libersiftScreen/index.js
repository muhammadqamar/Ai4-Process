import React, { useState } from "react";

import Login from "../common/Login";
import Footer from "../Layout/Footer/footer";
import StartSection from "./startSection";

import Libersift from "../../assets/images/login-libersift-logo.svg";

const Index = () => {
  const [login, setLogin] = useState("login");
  return (
    <>
      {login === "login" ? (
        <Login
          logo={Libersift}
          text="Libersift is AI-powered search tool that revolutionizes the way you navigate technical documentation. Libersift leverages advanced AI algorithms to deliver fast and accurate answers to your queries."
          onLogin={() => setLogin("libsection")}
        />
      ) : (
        login === "libsection" && <StartSection setLogin={setLogin} />
      )}
      <Footer />
    </>
  );
};

export default Index;
