import React, { useState } from "react";

import Button from "../../../utils/Button";

import { parameters } from "../../../dummyData";

const NatualLanguage = () => {
  const [selectedLabel, setSelectedLabel] = useState([]);
  console.log(selectedLabel);

  return (
    <div className="w-full min-h-[552px] flex gap-[30px] mb-[31px]">
      <div className="flex w-full flex-col  justify-between gap-[106px] mt-[13px]">
        <div className="w-full">
          <h5 className=" h5 text-center text-Grey-400 !leading-normal !tracking-[-1.1px] mb-[9px]">
            Write down your requirement and chose how you want Reqvise to
            transform it
          </h5>
          <p className="p-large !font-medium !tracking-[-0.2px] text-primaryWhite pl-[15px] mb-[10px]">
            <span className="!font-black">Input: </span>"The website should load
            super fast and look cool. It needs to work on all devices, no matter
            how old. Also, it should have all the latest features and stuff
            that's trending. The colors should be poppin' and the buttons should
            be fancy. Users should be able to do everything on the site without
            reading any boring instructions. And don't forget, it should be done
            ASAP!"
          </p>
          <p className="p-large !font-medium text-primaryWhite pl-[15px]">
            <span className="!font-black">Output: </span>"The website must
            prioritize performance optimization to ensure fast loading times. It
            should adhere to responsive design principles to provide a
            consistent user experience across various devices, including older
            ones. The implementation should incorporate a well-defined set of
            features that align with the project's objectives and user needs,
            avoiding unnecessary trend-chasing. Color choices should follow
            established design guidelines for accessibility and visual appeal,
            while maintaining a professional look. The user interface should be
            intuitive, allowing users to accomplish tasks without excessive
            reliance on instructional text. The development timeline should be
            reasonable to ensure a balance between speed and quality."
          </p>
        </div>
        <input
          type="text"
          placeholder=""
          className="!bg-Grey-800 border-none text-White focus:outline-none focus:ring-0"
        />
      </div>
      <div className="hidden md:flex gap-4 w-fit">
        <div className="w-[1px] h-full bg-White-500"></div>
        <div className="w-min flex flex-col justify-between">
          <div>
            {parameters.map((item, index) => (
              <div key={index} className="mb-[14px]">
                <p className="p-small !leading-normal text-White-600 mb-2">
                  {item.type}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-[7px] mb-[7px]">
                  {item?.values.map((val, i) => (
                    <Button
                      key={i}
                      text={val}
                      color="text-Black-700"
                      bg="bg-White-700"
                      cta={() => {
                        if (selectedLabel?.includes(val)) {
                          setSelectedLabel(
                            selectedLabel?.filter((id) => id !== val),
                          );
                        } else {
                          setSelectedLabel([...selectedLabel, val]);
                        }
                      }}
                      className={`rounded-[5px] p-xlarge hover:font-medium min-w-[86px] !h-6 border-none  ${
                        selectedLabel?.includes(val) &&
                        " !font-medium !border-[2px] !border-solid !border-[#70DE5E] "
                      } `}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="p-xlarge text-White-900 underline text-center whitespace-nowrap ">
            Use the same parameters always
          </p>
        </div>
      </div>
    </div>
  );
};

export default NatualLanguage;
