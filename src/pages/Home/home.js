import React, { useState } from "react";

import WelComeScreen from "../../components/welComeScreen";

const Home = () => {
  const [select, setSelect] = useState("");

  return (
    <>
      <WelComeScreen setSelect={setSelect} />
    </>
  );
};

export default Home;
