import React from "react";
import Search from "../../assets/images/search.svg";

export const SearchInput = () => {
  return (
    <div className="w-full h-[60.188px] flex items-center gap-[29px] px-6 py-4 rounded-lg  bg-Purple-500 ">
      <img src={Search} alt="search" />
      <input
        type="text"
        placeholder="Search previous discussions"
        className="w-full !h-auto !border-none !outline-none !p-0 p-large text-White-300 bg-transparent "
      />
    </div>
  );
};
