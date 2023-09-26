import React from "react";
import Reqvise from "../../../assets/images/reqviseLogo2.svg";
import { Button } from "../../../utils";

const Header = () => {
  return (
    <div className="w-full mx-auto flex justify-between pt-[26px] px-[100px] ">
      <img src={Reqvise} alt="reqviseLogo" className="" />
      <div className="flex flex-row gap-[14.3px] ">
        <Button
          text="Support"
          color="text-Black"
          className="rounded-none h-[30px]"
        />
        <Button
          text="Logout"
          bg="bg-Purple-500"
          color="text-Mist-500"
          className="h-[30px] rounded-none"
        />
      </div>
    </div>
  );
};

export default Header;
