import React from "react";

import AiBG from "../../assets/images/Ai-bg.png";

const Home = () => {
  return (
    <div
      className="w-full min-h-screen "
      style={{
        backgroundImage: `url(${AiBG})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[913px] h-full pt-[94px] mx-auto">
        <div className="w-full text-center text-[#fff] mb-4">
          <p className="text-[20px] font-light leading-normal">Welcome to</p>
          <h1 className="text-[45px] font-bold leading-normal mb-[58px]">
            Ai4Process
          </h1>
          <p className="text-[20px] font-light leading-normal">
            What do you want to work with today?
          </p>
        </div>

        <div className="w-full flex items-center  justify-between gap-6"></div>
      </div>
    </div>
  );
};

export default Home;
