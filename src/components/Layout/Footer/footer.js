import React from "react";
import Twitter from "../../../assets/images/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col bg-Purple-900 pt-[41px] pb-[14px]">
      <div className="flex md:items-center md:justify-end justify-between xl:gap-[334px] md:gap-[180px] gap-6 md:flex-nowrap flex-wrap text-White mb-[37px] px-[38px]">
        <ul className="flex md:items-center justify-between md:flex-row flex-col md:gap-0 gap-5 md:flex-nowrap flex-wrap h6 md:w-[434px] ">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
        </ul>
        <div className="flex items-center gap-[17.95px]">
          <p className="p-medium">Support</p>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter_icon" />
          </a>
        </div>
      </div>
      <div className="w-full h-[3px] bg-Mist-500"></div>
      <span className="p-xlarge !font-medium text-Grey-500 mt-4 lg:px-[185px] px-[37.5px]">
        Copyright © {new Date().getFullYear()}. Amazit FZCO
      </span>
    </div>
  );
};

export default Footer;
