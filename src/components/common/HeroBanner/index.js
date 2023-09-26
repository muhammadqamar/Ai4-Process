import React from "react";

const Index = ({ logo, bgImg }) => {
  return (
    <div
      className="max-w-[1240px] mx-auto mt-[30px] mb-[26px] h-[149px] px-[18px] py-5 flex flex-col items-end"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-[22px] font-normal leading-[46px] text-White-200 font-[Alata] [text-shadow:_0px_2px_10px_rgba(255_255_255_0.25)]  m-0">
        Welcome to
      </h2>
      {logo && (
        <img
          src={logo}
          alt="logo"
          className="w-[135px] h-auto object-contain"
        />
      )}
    </div>
  );
};

export default Index;
