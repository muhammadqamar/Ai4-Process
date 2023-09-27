import React from "react";
import { Button } from "../../../utils";

const Header = ({ logo }) => {
  return (
    <div className="w-full mx-auto flex justify-between pt-[26px] px-[20px] lg:px-[100px] ">
      <img src={logo} alt="reqviseLogo" className="w-[145px] h-auto" />
      <div className="flex flex-row gap-[14.3px] ">
        <Button
          text="Support"
          color="text-Black"
          className="rounded-none !h-fit !px-[6px] !py-[3.5px] !text-[15px] !leading-normal"
        />
        <Button
          text="Logout"
          bg="bg-Purple-500"
          color="text-Mist-500"
          className="!h-fit !px-[6px] !py-[3.5px] rounded-none !text-[15px] !leading-normal"
        />
      </div>
    </div>
  );
};

export default Header;
