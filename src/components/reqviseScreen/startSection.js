import React, { useState } from "react";

import Header from "../Layout/Header/header";
import HeroBanner from "../common/HeroBanner";
import Accordion from "../common/Accordion";
import NaturalLanguage from "../common/NaturalLanguage";
import StartConversation from "../common/StartConversation";
import BannerImg from "../../assets/images/amper-bg.png";
import ReqviseLogo from "../../assets/images/reqviseLogo.svg";
import { SearchInput } from "../../utils";

const StartSection = ({ setLogin }) => {
  const [start, setStart] = useState(false);

  return (
    <div className="max-w-[1440px] mx-auto mb-[26px]">
      <Header logo={ReqviseLogo} setLogin={setLogin} />
      <div className="w-full px-[20px]">
        <HeroBanner bgImg={BannerImg} logo={ReqviseLogo} />
      </div>

      <div className="w-full flex items-start flex-col xl:flex-row gap-[53px] px-[20px] sm:px-[43px]">
        <div className="w-full md:w-[322px] flex-shrink-0">
          <div className="mb-[13px]">
            <SearchInput />
          </div>
          <Accordion />
        </div>

        <div className="h-full w-full flex items-start flex-col md:flex-row gap-[26px]">
          <div className="w-full md:w-[1px] h-[1px] md:h-[640px] bg-[#fff]" />
          <div className="bg-Grey-700 w-full  pr-[16px] sm:pr-[31px] pl-[16px] sm:pl-[24px] pt-[19px] pb-3">
            {start ? (
              <NaturalLanguage />
            ) : (
              <StartConversation
                startConversation={() => {
                  setStart(true);
                }}
              />
            )}

            <div>
              <p className="p-xlarge text-White-500 w-full">
                Reqvise is a tool that uses natural language processing to help
                system requirement engineers write requirements that are clear,
                consistent, and can be tested.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
