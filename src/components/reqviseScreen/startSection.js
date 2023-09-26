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
      <HeroBanner bgImg={BannerImg} logo={ReqviseLogo} />

      <div className="w-full flex items-start justify-between gap-[53px]">
        <div className="w-[322px]">
          <div className="mb-[13px]">
            <SearchInput />
          </div>
          <Accordion />
        </div>

        <div className="h-full flex items-start gap-[26px]">
          <div className="w-[1px] h-[640px] bg-[#fff]" />
          <div>
            <NaturalLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
