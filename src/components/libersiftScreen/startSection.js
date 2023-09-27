import React from "react";
import { Tabs } from "flowbite-react";

import Header from "../Layout/Header/header";
import HeroBanner from "../common/HeroBanner";
import Accordion from "../common/Accordion";
import ChatBot from "../common/ChatBot";
import { SearchInput } from "../../utils";

import Libersift from "../../assets/images/login-libersift-logo.svg";
import heroLogo from "../../assets/images/Libersift-header.svg";
import HeroBg from "../../assets/images/ron-dyar.png";

const StartSection = ({ setLogin }) => {
  return (
    <div className="max-w-[1440px] mx-auto mb-[26px]">
      <Header logo={Libersift} setLogin={setLogin} />
      <HeroBanner bgImg={HeroBg} logo={heroLogo} />

      <div className="w-full flex items-start justify-between flex-col md:flex-row gap-[18px] px-[20px] sm:px-[43px]">
        <div className="w-full md:w-[357px] flex-shrink md:flex-shrink-0">
          <Tabs.Group aria-label="Default tabs" className="tabs-style">
            <Tabs.Item active title="Conversations">
              <div className="pr-[29px] pl-2 border-t border-[#2C2D3A] pt-[13px]">
                <div className="mb-[13px]">
                  <SearchInput />
                </div>
                <Accordion />
              </div>
            </Tabs.Item>
            <Tabs.Item title="Documents">
              <div className="pr-[29px] pl-2 border-t border-[#2C2D3A] pt-[13px]">
                <div className="mb-[13px]">
                  <SearchInput />
                </div>
                <Accordion />
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>

        <div className="h-full flex items-start flex-col md:flex-row gap-[26px] ">
          <div className="w-full md:w-[1px] h-[1px] md:h-[640px] bg-[#fff]" />

          {/* chart */}

          <div className="bg-Grey-700 w-full min-h-[650px] px-[45px] pt-[29px] pb-3  ">
            {/* <StartConversation /> */}
            <ChatBot />

            <p className="p-xlarge text-White-500">
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

export default StartSection;
