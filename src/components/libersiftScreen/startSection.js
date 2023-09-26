import React from "react";
import { Tabs } from "flowbite-react";

import Header from "../Layout/Header/header";
import HeroBanner from "../common/HeroBanner";
import Accordion from "../common/Accordion";

import Libersift from "../../assets/images/login-libersift-logo.svg";
import heroLogo from "../../assets/images/Libersift-header.svg";
import HeroBg from "../../assets/images/ron-dyar.png";
import { SearchInput } from "../../utils";

const StartSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto mb-[26px]">
      <Header logo={Libersift} />
      <HeroBanner bgImg={HeroBg} logo={heroLogo} />

      <div className="w-full flex items-start justify-between gap-[18px] px-[51px]">
        <div className="w-[357px]">
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

        <div className="h-full flex items-start gap-[26px]">
          <div className="w-[1px] h-[640px] bg-[#fff]" />
        </div>
      </div>
    </div>
  );
};

export default StartSection;
