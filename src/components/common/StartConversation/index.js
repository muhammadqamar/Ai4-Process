import React, { useState } from "react";

import { Button } from "../../../utils";

import SupportIcon from "../../../assets/images/icons/support.svg";

const Index = ({ document, startConversation }) => {
  const [fileContent, setFileContent] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length === 1) {
      const file = droppedFiles[0];

      if (file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFileContent(e.target.result);
        };
        reader.readAsText(file);
      } else if (file.type === "application/pdf") {
        setFileContent(
          <iframe
            src={URL.createObjectURL(file)}
            width="100%"
            height="500px"
            title="PDF Viewer"
          ></iframe>,
        );
      } else if (
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setFileContent(
          <a href={URL.createObjectURL(file)} download={file.name}>
            Download {file.name}
          </a>,
        );
      } else {
        setFileContent("Unsupported file type");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  console.log("fileContent", fileContent);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="flex flex-col items-center text-Grey-400 mt-[110px] mb-[150px]"
    >
      {document && (
        <>
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
        </>
      )}
      <div
        className={`flex items-center gap-[26px]  ${
          !document && "min-h-[310px]"
        }`}
      >
        <input
          type="text"
          placeholder="Input your discussion name here..."
          className="bg-Grey-800 py-[14px] text-center min-w-[372px]"
        />
        <Button
          text="Start Conversation"
          color="text-Black-800"
          bg="bg-Mist-600"
          cta={() => {
            startConversation();
          }}
          className="rounded-[10px] px-[10px] flex justify-center p-small !font-normal Atlata"
        />
      </div>
    </div>
  );
};

export default Index;
