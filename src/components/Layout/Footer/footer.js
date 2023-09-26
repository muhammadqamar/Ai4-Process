import React from "react";
import Twitter from "../../../assets/images/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="w-full bg-Purple-900 relative footer-border">
      <div className="max-w-[1440px] mx-auto flex flex-col pl-[38px] pt-[41px] ">
        <div className="flex md:items-center md:justify-end justify-between xl:gap-[334px] md:gap-[180px] gap-6 md:flex-nowrap flex-wrap text-White mb-[37px] ">
          <ul className="flex md:items-center justify-between md:flex-row flex-col md:gap-0 gap-5 md:flex-nowrap flex-wrap h6 md:w-[434px] ">
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <ul className="flex items-center gap-[17.95px]">
            <li>
              <a href="" className="p-medium">
                Support
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={Twitter} alt="Twitter_icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[3px]  bg-Mist-500" />
      <div className="max-w-[1440px] px-[38px] mx-auto pt-4 pb-[14px]">
        <span className="p-xlarge !font-medium text-Grey-500  lg:px-[185px] px-[37.5px]">
          Copyright © {new Date().getFullYear()}. Amazit FZCO
        </span>
      </div>
    </div>
  );
};

export default Footer;
