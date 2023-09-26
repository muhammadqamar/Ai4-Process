import React from "react";
import Reqvise from "../../../assets/images/reqviseLogo2.svg"
import { Button } from "../../../utils/Button"

const Header = () => {
  return (
    <div className="w-full mx-auto">
      <img src={Reqvise} alt="reqviseLogo" className="ml-[44px]" />
      <div>
        sdfsd
        {/* <Button text="Support" />
        <Button text="Logout" /> */}
      </div>
    </div>
  );
};

export default Header;
