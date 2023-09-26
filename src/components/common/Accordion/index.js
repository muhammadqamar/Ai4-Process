import React from "react";

import { Accordion } from "flowbite-react";

const index = () => {
  return (
    <Accordion className="border-t-[#08090c] border-x-[#08090c]  !border-b border-b-[#45D9FC] rounded-none">
      <Accordion.Panel className="w-full ">
        <Accordion.Title className="h6 !leading-[46px] py-[10px] text-White-200 border-t border-solid border-[#45D9FC]">
          Disussion Brief 1
        </Accordion.Title>
        <Accordion.Content className="pt-0">
          <p className="p-small !leading-normal text-White-200">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default index;
