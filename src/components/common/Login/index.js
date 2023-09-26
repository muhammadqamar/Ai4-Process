import React from "react";

import { Button } from "../../../utils";

const Index = ({ logo, text, onLogin }) => {
  return (
    <div className="min-h-[529px] border-y-4 border-solid mt-[191px] mb-[231px] relative login-borders">
      <div className="max-w-[1260px] h-full mx-auto ">
        <div className="flex flex-col items-center text-White justify-center gap-[19px] pt-[126px] pb-[52px]">
          <img src={logo} alt="logo" className="mb-[30px]" />
          <p className="h2 ">{text}</p>

          <div className="flex items-center gap-[24px] mt-[91px]">
            <Button cta={onLogin} text="Login" className="w-[158px]" />
            <Button
              text="Read More"
              className="w-[176px] text-Grey-200 bg-Purple-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
