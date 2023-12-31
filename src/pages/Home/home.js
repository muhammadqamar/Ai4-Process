import React, { useState } from "react";

import WelComeScreen from "../../components/welComeScreen";
import ReqviseScreen from "../../components/reqviseScreen";
import LibersiftScreen from "../../components/libersiftScreen";

const Home = () => {
  const [select, setSelect] = useState("welcome");

  return (
    <div>
      {select === "welcome" ? (
        <WelComeScreen setSelect={setSelect} />
      ) : select === "reqvise" ? (
        <ReqviseScreen />
      ) : (
        select === "libersift" && <LibersiftScreen />
      )}
    </div>
  );
};

export default Home;
