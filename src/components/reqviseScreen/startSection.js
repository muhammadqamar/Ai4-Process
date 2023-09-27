import React from "react";

import Header from "../Layout/Header/header";
import HeroBanner from "../common/HeroBanner";
import Accordion from "../common/Accordion";
import NaturalLanguage from "../common/NaturalLanguage";

import BannerImg from "../../assets/images/amper-bg.png";
import ReqviseLogo from "../../assets/images/reqviseLogo.svg";
import { SearchInput } from "../../utils";

const StartSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto mb-[26px]">
      <Header logo={ReqviseLogo} />
      <div className="w-full px-[20px]">
        <HeroBanner bgImg={BannerImg} logo={ReqviseLogo} />
      </div>

      <div className="w-full flex items-start flex-col xl:flex-row gap-[53px] px-[20px] sm:px-[51px]">
        <div className="w-full md:w-[322px] flex-shrink-0">
          <div className="mb-[13px]">
            <SearchInput />
          </div>
          <Accordion />
        </div>

        <div className="h-full flex items-start flex-col md:flex-row gap-[26px]">
          <div className="w-full md:w-[1px] h-[1px] md:h-[640px] bg-[#fff]" />
          <div className="w-full">
            <NaturalLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
