import React from "react";

import Button from "../../../utils/Button";

const NatualLanguage = () => {
  return (
    <div className="bg-Grey-700 min-w-[951px] pr-[31px] pl-[24px] pt-[19px] pb-3">
      <div className="h-[552px] flex gap-[30px] mb-[31px]">
        <div className="flex w-[659px] flex-col h-full justify-between mt-[13px]">
          <div>
            <h5 className=" h5 text-center text-Grey-400 !leading-normal !tracking-[-1.1px] mb-[9px]">
              Write down your requirement and chose how you want Reqvise to
              transform it
            </h5>
            <p className="p-large !font-medium !tracking-[-0.2px] text-primaryWhite pl-[15px] mb-[10px]">
              <span className="!font-black">Input: </span>"The website should
              load super fast and look cool. It needs to work on all devices, no
              matter how old. Also, it should have all the latest features and
              stuff that's trending. The colors should be poppin' and the
              buttons should be fancy. Users should be able to do everything on
              the site without reading any boring instructions. And don't
              forget, it should be done ASAP!"
            </p>
            <p className="p-large !font-medium text-primaryWhite pl-[15px]">
              <span className="!font-black">Output: </span>"The website must
              prioritize performance optimization to ensure fast loading times.
              It should adhere to responsive design principles to provide a
              consistent user experience across various devices, including older
              ones. The implementation should incorporate a well-defined set of
              features that align with the project's objectives and user needs,
              avoiding unnecessary trend-chasing. Color choices should follow
              established design guidelines for accessibility and visual appeal,
              while maintaining a professional look. The user interface should
              be intuitive, allowing users to accomplish tasks without excessive
              reliance on instructional text. The development timeline should be
              reasonable to ensure a balance between speed and quality."
            </p>
          </div>
          <input
            type="text"
            placeholder=""
            className="!bg-Grey-800 border-none"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-[1px] h-full bg-White-500"></div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-[14px]">
                <p className="p-small !leading-normal text-White-600 mb-2">
                  Grammar
                </p>
                <div className="flex gap-x-5 mb-[7px]">
                  <Button
                    text="Option 1"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                  <Button
                    text="Option 2"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                </div>
                <div className="flex gap-x-5">
                  <Button
                    text="Option 3"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                  <Button
                    text="Option 4"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                </div>
              </div>
              <div className="mb-[14px]">
                <p className="p-small !leading-normal text-White-600 mb-2">
                  Vocabulary
                </p>
                <div className="flex gap-x-5 mb-[7px]">
                  <Button
                    text="Option 1"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                  <Button
                    text="Eloquent"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                </div>
                <div className="flex gap-x-5">
                  <Button
                    text="Option 3"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                  <Button
                    text="Option 4"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                </div>
              </div>
              <div className="mb-[14px]">
                <p className="p-small !leading-normal text-White-600 mb-2">
                  Technical Level
                </p>
                <div className="flex gap-x-5 mb-[7px]">
                  <Button
                    text="Edit"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                  <Button
                    text="Correct"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                </div>
                <div className="flex gap-x-5">
                  <Button
                    text="Suggest"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                  <Button
                    text="Option 4"
                    Icon={false}
                    color="text-Black-700"
                    bg="bg-White-700"
                    cta=""
                    disabled=""
                    className="rounded-[5px] p-xlarge hover:font-medium w-[86px] !h-6 border-none hover:border-[2px] hover:border-solid hover:border-[#70DE5E]"
                    marginRight=""
                  />
                </div>
              </div>
            </div>
            <p className="p-xlarge text-White-900 underline text-center w-[209px]">
              Use the same parameters always
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="p-xlarge text-White-500">
          Reqvise is a tool that uses natural language processing to help system
          requirement engineers write requirements that are clear, consistent,
          and can be tested.
        </p>
      </div>
    </div>
  );
};

export default NatualLanguage;
