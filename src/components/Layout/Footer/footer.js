import React from "react";
import Twitter from "../../../assets/images/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between lg:flex-nowrap flex-wrap-reverse items-end bg-Purple-900 pt-[41px] px-[38px] pb-[14px]">
      <span className="p-xlarge !font-medium text-Grey-400 mt-4">
        Copyright © {new Date().getFullYear()}. Amazit FZCO
      </span>
      <div className="flex items-center xl:gap-[334px] md:gap-[180px] text-White mb-[37px]">
        <ul className="flex items-center justify-between h6 w-[434px]">
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
        </ul>
        <div className="flex items-center gap-[17.95px]">
          <p className="p-medium">Support</p>
          <img src={Twitter} alt="Twitter_icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
