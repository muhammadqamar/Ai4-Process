import React from "react";

import { Button } from "../../../utils";

import SupportIcon from "../../../assets/images/icons/support.svg";

const Index = () => {
  return (
    <div className="flex flex-col items-center text-Grey-400 mt-[110px] mb-[150px]">
      <h3 className="h3 max-w-[576px] mb-[30px] text-center">
        Drag & drop one or more documents and let Libersift do its magic.
      </h3>
      <img
        src={SupportIcon}
        alt="supportIcon"
        className="w-[53px] h-[53px] mb-[15px]"
      />
      <p className="p-xlarge !text-[12.555px] mb-[43.33px] text-center">
        Supported files: PDF, TXT, DOC, <br /> DOCX
      </p>
      <div className="flex items-center gap-[26px]">
        <input
          type="text"
          placeholder="Input your discussion name here..."
          className="bg-Grey-800 py-[14px] text-center min-w-[372px]"
        />
        <Button
          text="Start Conversation"
          Icon={null}
          color="text-Black-800"
          bg="bg-Mist-600"
          cta=""
          border=""
          disabled=""
          className="rounded-[10px] px-[10px] flex justify-center p-small !font-normal Atlata"
          marginRight=""
        />
      </div>
    </div>
  );
};

export default Index;
