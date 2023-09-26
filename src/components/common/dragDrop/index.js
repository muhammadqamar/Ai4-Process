import React from "react";

import { Button } from "../../../utils";

import SupportIcon from "../../../assets/images/icons/support.svg";

const DragDrop = () => {
  return (
    <div className="bg-Grey-700 w-[951px] px-[45px] pt-[140px] pb-3">
      <div className="flex flex-col items-center text-Grey-400 mb-[150px]">
        <h3 className="h3 max-w-[576px] mb-[30px] text-center">
          Drag & drop one or more documents and let Libersift do its magic.
        </h3>
        <img
          src={SupportIcon}
          alt="supportIcon"
          className="w-[53px] h-[53px] mb-[15px]"
        />
        <p className="p-xlarge !text-[12.555px] mb-[43.33px]">
          Supported files: PDF, TXT, DOC, DOCX
        </p>
        <div className="flex items-center gap-[26px]">
          <input
            type="text"
            placeholder="Input your discussion name here..."
            className="bg-Grey-800 py-[14px] text-center min-w-[372px]"
          />
          <button className="rounded-[10px] px-[10px] flex justify-center p-small !font-normal text-Black-800 bg-Mist-600 Atlata">
            Start Conversation
          </button>
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
      <p className="p-xlarge text-White-500">
        Libersift is AI-powered search tool that revolutionizes the way you
        navigate technical documentation. Libersift leverages advanced AI
        algorithms to deliver fast and accurate answers to your queries.
      </p>
    </div>
  );
};

export default DragDrop;
