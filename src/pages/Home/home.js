import React from "react";

import AiBG from "../../assets/images/Ai-bg.png";
import LibersiftLogo from "../../assets/images/libersift-logo.svg";
import ReqvuiseLogo from "../../assets/images/reqvuise-logo.svg";

const Home = () => {
  return (
    <div
      className="w-full min-h-screen py-[94px]"
      style={{
        backgroundImage: `url(${AiBG})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[913px] h-full  mx-auto text-[#fff]">
        <div className="w-full text-center  mb-4">
          <p className="text-[20px] font-light leading-normal">Welcome to</p>
          <h1 className="text-[45px] font-bold leading-normal mb-[58px]">
            Ai4Process
          </h1>
          <p className="text-[20px] font-light leading-normal">
            What do you want to work with today?
          </p>
        </div>

        <div className="w-full flex items-center  justify-between gap-6">
          <div className="w-[325px] cursor-pointer">
            <img
              src={ReqvuiseLogo}
              alt="Libersift"
              className="w-fit h-auto object-contain mx-auto mb-[35px]"
            />
            <p className="text-[20px] font-light leading-normal">
              Reqvise is a tool that uses natural language processing to help
              system requirement engineers write requirements that are clear,
              consistent, and can be tested.
            </p>
          </div>
          <div className="w-1 h-[383px] bg-[#fff]" />
          <div className="w-[368px]">
            <img
              src={LibersiftLogo}
              alt="Libersift"
              className="w-fit h-auto object-contain mx-auto mb-[35px]"
            />
            <p className="text-[20px] font-light leading-normal">
              Libersift is AI-powered search tool that revolutionizes the way
              you navigate technical documentation. Libersift leverages advanced
              AI algorithms to deliver fast and accurate answers to your
              queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
