import React from "react";
import Revqvise from "../../assets/images/reqviseLogo.svg";

import Footer from "../Layout/Footer/footer";
import { Button } from "../../utils";

const Index = () => {
  return (
    <>
      <div className="min-h-[529px] border-y-4 border-solid mt-[191px] mb-[231px]">
        <div className="max-w-[1260px] h-full mx-auto ">
          <div className="flex flex-col items-center text-White justify-center gap-[19px] pt-[126px] pb-[52px]">
            <img src={Revqvise} alt="logo" />
            <p className="h2 ">
              Reqvise is a tool that uses natural language processing to help
              system requirement engineers write requirements that are clear,
              consistent, and can be tested.
            </p>

            <div className="flex items-center gap-[24px] mt-[91px]">
              <Button text="Login" className="w-[158px]" />
              <Button
                text="Read More"
                className="w-[176px] text-Grey-200 bg-Purple-500"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
